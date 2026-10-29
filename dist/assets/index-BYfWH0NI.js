(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var Wi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Jl(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var v0={exports:{}},eu={},b0={exports:{}},de={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Oa=Symbol.for("react.element"),X2=Symbol.for("react.portal"),Q2=Symbol.for("react.fragment"),Z2=Symbol.for("react.strict_mode"),J2=Symbol.for("react.profiler"),eS=Symbol.for("react.provider"),tS=Symbol.for("react.context"),nS=Symbol.for("react.forward_ref"),rS=Symbol.for("react.suspense"),iS=Symbol.for("react.memo"),sS=Symbol.for("react.lazy"),lm=Symbol.iterator;function aS(e){return e===null||typeof e!="object"?null:(e=lm&&e[lm]||e["@@iterator"],typeof e=="function"?e:null)}var w0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},k0=Object.assign,S0={};function ls(e,t,n){this.props=e,this.context=t,this.refs=S0,this.updater=n||w0}ls.prototype.isReactComponent={};ls.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};ls.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function E0(){}E0.prototype=ls.prototype;function Lf(e,t,n){this.props=e,this.context=t,this.refs=S0,this.updater=n||w0}var Df=Lf.prototype=new E0;Df.constructor=Lf;k0(Df,ls.prototype);Df.isPureReactComponent=!0;var um=Array.isArray,C0=Object.prototype.hasOwnProperty,Mf={current:null},T0={key:!0,ref:!0,__self:!0,__source:!0};function _0(e,t,n){var r,i={},s=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(s=""+t.key),t)C0.call(t,r)&&!T0.hasOwnProperty(r)&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var l=Array(o),u=0;u<o;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return{$$typeof:Oa,type:e,key:s,ref:a,props:i,_owner:Mf.current}}function oS(e,t){return{$$typeof:Oa,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ff(e){return typeof e=="object"&&e!==null&&e.$$typeof===Oa}function lS(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var cm=/\/+/g;function Fu(e,t){return typeof e=="object"&&e!==null&&e.key!=null?lS(""+e.key):t.toString(36)}function Do(e,t,n,r,i){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Oa:case X2:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+Fu(a,0):r,um(i)?(n="",e!=null&&(n=e.replace(cm,"$&/")+"/"),Do(i,t,n,"",function(u){return u})):i!=null&&(Ff(i)&&(i=oS(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(cm,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",um(e))for(var o=0;o<e.length;o++){s=e[o];var l=r+Fu(s,o);a+=Do(s,t,n,l,i)}else if(l=aS(e),typeof l=="function")for(e=l.call(e),o=0;!(s=e.next()).done;)s=s.value,l=r+Fu(s,o++),a+=Do(s,t,n,l,i);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function io(e,t,n){if(e==null)return e;var r=[],i=0;return Do(e,r,"","",function(s){return t.call(n,s,i++)}),r}function uS(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ht={current:null},Mo={transition:null},cS={ReactCurrentDispatcher:ht,ReactCurrentBatchConfig:Mo,ReactCurrentOwner:Mf};function A0(){throw Error("act(...) is not supported in production builds of React.")}de.Children={map:io,forEach:function(e,t,n){io(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return io(e,function(){t++}),t},toArray:function(e){return io(e,function(t){return t})||[]},only:function(e){if(!Ff(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};de.Component=ls;de.Fragment=Q2;de.Profiler=J2;de.PureComponent=Lf;de.StrictMode=Z2;de.Suspense=rS;de.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=cS;de.act=A0;de.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=k0({},e.props),i=e.key,s=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,a=Mf.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var o=e.type.defaultProps;for(l in t)C0.call(t,l)&&!T0.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&o!==void 0?o[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){o=Array(l);for(var u=0;u<l;u++)o[u]=arguments[u+2];r.children=o}return{$$typeof:Oa,type:e.type,key:i,ref:s,props:r,_owner:a}};de.createContext=function(e){return e={$$typeof:tS,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:eS,_context:e},e.Consumer=e};de.createElement=_0;de.createFactory=function(e){var t=_0.bind(null,e);return t.type=e,t};de.createRef=function(){return{current:null}};de.forwardRef=function(e){return{$$typeof:nS,render:e}};de.isValidElement=Ff;de.lazy=function(e){return{$$typeof:sS,_payload:{_status:-1,_result:e},_init:uS}};de.memo=function(e,t){return{$$typeof:iS,type:e,compare:t===void 0?null:t}};de.startTransition=function(e){var t=Mo.transition;Mo.transition={};try{e()}finally{Mo.transition=t}};de.unstable_act=A0;de.useCallback=function(e,t){return ht.current.useCallback(e,t)};de.useContext=function(e){return ht.current.useContext(e)};de.useDebugValue=function(){};de.useDeferredValue=function(e){return ht.current.useDeferredValue(e)};de.useEffect=function(e,t){return ht.current.useEffect(e,t)};de.useId=function(){return ht.current.useId()};de.useImperativeHandle=function(e,t,n){return ht.current.useImperativeHandle(e,t,n)};de.useInsertionEffect=function(e,t){return ht.current.useInsertionEffect(e,t)};de.useLayoutEffect=function(e,t){return ht.current.useLayoutEffect(e,t)};de.useMemo=function(e,t){return ht.current.useMemo(e,t)};de.useReducer=function(e,t,n){return ht.current.useReducer(e,t,n)};de.useRef=function(e){return ht.current.useRef(e)};de.useState=function(e){return ht.current.useState(e)};de.useSyncExternalStore=function(e,t,n){return ht.current.useSyncExternalStore(e,t,n)};de.useTransition=function(){return ht.current.useTransition()};de.version="18.3.1";b0.exports=de;var C=b0.exports;const dS=Jl(C);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fS=C,pS=Symbol.for("react.element"),hS=Symbol.for("react.fragment"),mS=Object.prototype.hasOwnProperty,gS=fS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,yS={key:!0,ref:!0,__self:!0,__source:!0};function I0(e,t,n){var r,i={},s=null,a=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)mS.call(t,r)&&!yS.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:pS,type:e,key:s,ref:a,props:i,_owner:gS.current}}eu.Fragment=hS;eu.jsx=I0;eu.jsxs=I0;v0.exports=eu;var c=v0.exports,N0={exports:{}},Lt={},P0={exports:{}},j0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(L,B){var S=L.length;L.push(B);e:for(;0<S;){var Y=S-1>>>1,ee=L[Y];if(0<i(ee,B))L[Y]=B,L[S]=ee,S=Y;else break e}}function n(L){return L.length===0?null:L[0]}function r(L){if(L.length===0)return null;var B=L[0],S=L.pop();if(S!==B){L[0]=S;e:for(var Y=0,ee=L.length,A=ee>>>1;Y<A;){var ue=2*(Y+1)-1,Se=L[ue],se=ue+1,Ee=L[se];if(0>i(Se,S))se<ee&&0>i(Ee,Se)?(L[Y]=Ee,L[se]=S,Y=se):(L[Y]=Se,L[ue]=S,Y=ue);else if(se<ee&&0>i(Ee,S))L[Y]=Ee,L[se]=S,Y=se;else break e}}return B}function i(L,B){var S=L.sortIndex-B.sortIndex;return S!==0?S:L.id-B.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();e.unstable_now=function(){return a.now()-o}}var l=[],u=[],d=1,f=null,p=3,h=!1,x=!1,b=!1,k=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(L){for(var B=n(u);B!==null;){if(B.callback===null)r(u);else if(B.startTime<=L)r(u),B.sortIndex=B.expirationTime,t(l,B);else break;B=n(u)}}function v(L){if(b=!1,y(L),!x)if(n(l)!==null)x=!0,le(E);else{var B=n(u);B!==null&&Q(v,B.startTime-L)}}function E(L,B){x=!1,b&&(b=!1,g(N),N=-1),h=!0;var S=p;try{for(y(B),f=n(l);f!==null&&(!(f.expirationTime>B)||L&&!j());){var Y=f.callback;if(typeof Y=="function"){f.callback=null,p=f.priorityLevel;var ee=Y(f.expirationTime<=B);B=e.unstable_now(),typeof ee=="function"?f.callback=ee:f===n(l)&&r(l),y(B)}else r(l);f=n(l)}if(f!==null)var A=!0;else{var ue=n(u);ue!==null&&Q(v,ue.startTime-B),A=!1}return A}finally{f=null,p=S,h=!1}}var w=!1,I=null,N=-1,R=5,_=-1;function j(){return!(e.unstable_now()-_<R)}function U(){if(I!==null){var L=e.unstable_now();_=L;var B=!0;try{B=I(!0,L)}finally{B?G():(w=!1,I=null)}}else w=!1}var G;if(typeof m=="function")G=function(){m(U)};else if(typeof MessageChannel<"u"){var q=new MessageChannel,H=q.port2;q.port1.onmessage=U,G=function(){H.postMessage(null)}}else G=function(){k(U,0)};function le(L){I=L,w||(w=!0,G())}function Q(L,B){N=k(function(){L(e.unstable_now())},B)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(L){L.callback=null},e.unstable_continueExecution=function(){x||h||(x=!0,le(E))},e.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<L?Math.floor(1e3/L):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(L){switch(p){case 1:case 2:case 3:var B=3;break;default:B=p}var S=p;p=B;try{return L()}finally{p=S}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(L,B){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var S=p;p=L;try{return B()}finally{p=S}},e.unstable_scheduleCallback=function(L,B,S){var Y=e.unstable_now();switch(typeof S=="object"&&S!==null?(S=S.delay,S=typeof S=="number"&&0<S?Y+S:Y):S=Y,L){case 1:var ee=-1;break;case 2:ee=250;break;case 5:ee=1073741823;break;case 4:ee=1e4;break;default:ee=5e3}return ee=S+ee,L={id:d++,callback:B,priorityLevel:L,startTime:S,expirationTime:ee,sortIndex:-1},S>Y?(L.sortIndex=S,t(u,L),n(l)===null&&L===n(u)&&(b?(g(N),N=-1):b=!0,Q(v,S-Y))):(L.sortIndex=ee,t(l,L),x||h||(x=!0,le(E))),L},e.unstable_shouldYield=j,e.unstable_wrapCallback=function(L){var B=p;return function(){var S=p;p=B;try{return L.apply(this,arguments)}finally{p=S}}}})(j0);P0.exports=j0;var xS=P0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vS=C,jt=xS;function F(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var R0=new Set,aa={};function ci(e,t){Gi(e,t),Gi(e+"Capture",t)}function Gi(e,t){for(aa[e]=t,e=0;e<t.length;e++)R0.add(t[e])}var Bn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Zc=Object.prototype.hasOwnProperty,bS=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,dm={},fm={};function wS(e){return Zc.call(fm,e)?!0:Zc.call(dm,e)?!1:bS.test(e)?fm[e]=!0:(dm[e]=!0,!1)}function kS(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function SS(e,t,n,r){if(t===null||typeof t>"u"||kS(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function mt(e,t,n,r,i,s,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=a}var Je={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Je[e]=new mt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Je[t]=new mt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Je[e]=new mt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Je[e]=new mt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Je[e]=new mt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Je[e]=new mt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Je[e]=new mt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Je[e]=new mt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Je[e]=new mt(e,5,!1,e.toLowerCase(),null,!1,!1)});var Of=/[\-:]([a-z])/g;function zf(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Of,zf);Je[t]=new mt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Of,zf);Je[t]=new mt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Of,zf);Je[t]=new mt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Je[e]=new mt(e,1,!1,e.toLowerCase(),null,!1,!1)});Je.xlinkHref=new mt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Je[e]=new mt(e,1,!1,e.toLowerCase(),null,!0,!0)});function Uf(e,t,n,r){var i=Je.hasOwnProperty(t)?Je[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(SS(t,n,i,r)&&(n=null),r||i===null?wS(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Yn=vS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,so=Symbol.for("react.element"),yi=Symbol.for("react.portal"),xi=Symbol.for("react.fragment"),Bf=Symbol.for("react.strict_mode"),Jc=Symbol.for("react.profiler"),L0=Symbol.for("react.provider"),D0=Symbol.for("react.context"),Vf=Symbol.for("react.forward_ref"),ed=Symbol.for("react.suspense"),td=Symbol.for("react.suspense_list"),$f=Symbol.for("react.memo"),tr=Symbol.for("react.lazy"),M0=Symbol.for("react.offscreen"),pm=Symbol.iterator;function bs(e){return e===null||typeof e!="object"?null:(e=pm&&e[pm]||e["@@iterator"],typeof e=="function"?e:null)}var De=Object.assign,Ou;function js(e){if(Ou===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ou=t&&t[1]||""}return`
`+Ou+e}var zu=!1;function Uu(e,t){if(!e||zu)return"";zu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),a=i.length-1,o=s.length-1;1<=a&&0<=o&&i[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(i[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||i[a]!==s[o]){var l=`
`+i[a].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=a&&0<=o);break}}}finally{zu=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?js(e):""}function ES(e){switch(e.tag){case 5:return js(e.type);case 16:return js("Lazy");case 13:return js("Suspense");case 19:return js("SuspenseList");case 0:case 2:case 15:return e=Uu(e.type,!1),e;case 11:return e=Uu(e.type.render,!1),e;case 1:return e=Uu(e.type,!0),e;default:return""}}function nd(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case xi:return"Fragment";case yi:return"Portal";case Jc:return"Profiler";case Bf:return"StrictMode";case ed:return"Suspense";case td:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case D0:return(e.displayName||"Context")+".Consumer";case L0:return(e._context.displayName||"Context")+".Provider";case Vf:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case $f:return t=e.displayName||null,t!==null?t:nd(e.type)||"Memo";case tr:t=e._payload,e=e._init;try{return nd(e(t))}catch{}}return null}function CS(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return nd(t);case 8:return t===Bf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function kr(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function F0(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function TS(e){var t=F0(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,s.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ao(e){e._valueTracker||(e._valueTracker=TS(e))}function O0(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=F0(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function al(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function rd(e,t){var n=t.checked;return De({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function hm(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=kr(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function z0(e,t){t=t.checked,t!=null&&Uf(e,"checked",t,!1)}function id(e,t){z0(e,t);var n=kr(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?sd(e,t.type,n):t.hasOwnProperty("defaultValue")&&sd(e,t.type,kr(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function mm(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function sd(e,t,n){(t!=="number"||al(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Rs=Array.isArray;function Di(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+kr(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function ad(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(F(91));return De({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function gm(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(F(92));if(Rs(n)){if(1<n.length)throw Error(F(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:kr(n)}}function U0(e,t){var n=kr(t.value),r=kr(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function ym(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function B0(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function od(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?B0(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var oo,V0=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(oo=oo||document.createElement("div"),oo.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=oo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function oa(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Bs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},_S=["Webkit","ms","Moz","O"];Object.keys(Bs).forEach(function(e){_S.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Bs[t]=Bs[e]})});function $0(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Bs.hasOwnProperty(e)&&Bs[e]?(""+t).trim():t+"px"}function H0(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=$0(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var AS=De({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ld(e,t){if(t){if(AS[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(F(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(F(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(F(61))}if(t.style!=null&&typeof t.style!="object")throw Error(F(62))}}function ud(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var cd=null;function Hf(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var dd=null,Mi=null,Fi=null;function xm(e){if(e=Ba(e)){if(typeof dd!="function")throw Error(F(280));var t=e.stateNode;t&&(t=su(t),dd(e.stateNode,e.type,t))}}function W0(e){Mi?Fi?Fi.push(e):Fi=[e]:Mi=e}function G0(){if(Mi){var e=Mi,t=Fi;if(Fi=Mi=null,xm(e),t)for(e=0;e<t.length;e++)xm(t[e])}}function q0(e,t){return e(t)}function K0(){}var Bu=!1;function Y0(e,t,n){if(Bu)return e(t,n);Bu=!0;try{return q0(e,t,n)}finally{Bu=!1,(Mi!==null||Fi!==null)&&(K0(),G0())}}function la(e,t){var n=e.stateNode;if(n===null)return null;var r=su(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(F(231,t,typeof n));return n}var fd=!1;if(Bn)try{var ws={};Object.defineProperty(ws,"passive",{get:function(){fd=!0}}),window.addEventListener("test",ws,ws),window.removeEventListener("test",ws,ws)}catch{fd=!1}function IS(e,t,n,r,i,s,a,o,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var Vs=!1,ol=null,ll=!1,pd=null,NS={onError:function(e){Vs=!0,ol=e}};function PS(e,t,n,r,i,s,a,o,l){Vs=!1,ol=null,IS.apply(NS,arguments)}function jS(e,t,n,r,i,s,a,o,l){if(PS.apply(this,arguments),Vs){if(Vs){var u=ol;Vs=!1,ol=null}else throw Error(F(198));ll||(ll=!0,pd=u)}}function di(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function X0(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function vm(e){if(di(e)!==e)throw Error(F(188))}function RS(e){var t=e.alternate;if(!t){if(t=di(e),t===null)throw Error(F(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return vm(i),e;if(s===r)return vm(i),t;s=s.sibling}throw Error(F(188))}if(n.return!==r.return)n=i,r=s;else{for(var a=!1,o=i.child;o;){if(o===n){a=!0,n=i,r=s;break}if(o===r){a=!0,r=i,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,r=i;break}if(o===r){a=!0,r=s,n=i;break}o=o.sibling}if(!a)throw Error(F(189))}}if(n.alternate!==r)throw Error(F(190))}if(n.tag!==3)throw Error(F(188));return n.stateNode.current===n?e:t}function Q0(e){return e=RS(e),e!==null?Z0(e):null}function Z0(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Z0(e);if(t!==null)return t;e=e.sibling}return null}var J0=jt.unstable_scheduleCallback,bm=jt.unstable_cancelCallback,LS=jt.unstable_shouldYield,DS=jt.unstable_requestPaint,Ue=jt.unstable_now,MS=jt.unstable_getCurrentPriorityLevel,Wf=jt.unstable_ImmediatePriority,ev=jt.unstable_UserBlockingPriority,ul=jt.unstable_NormalPriority,FS=jt.unstable_LowPriority,tv=jt.unstable_IdlePriority,tu=null,yn=null;function OS(e){if(yn&&typeof yn.onCommitFiberRoot=="function")try{yn.onCommitFiberRoot(tu,e,void 0,(e.current.flags&128)===128)}catch{}}var nn=Math.clz32?Math.clz32:BS,zS=Math.log,US=Math.LN2;function BS(e){return e>>>=0,e===0?32:31-(zS(e)/US|0)|0}var lo=64,uo=4194304;function Ls(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function cl(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,s=e.pingedLanes,a=n&268435455;if(a!==0){var o=a&~i;o!==0?r=Ls(o):(s&=a,s!==0&&(r=Ls(s)))}else a=n&~i,a!==0?r=Ls(a):s!==0&&(r=Ls(s));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,s=t&-t,i>=s||i===16&&(s&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-nn(t),i=1<<n,r|=e[n],t&=~i;return r}function VS(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function $S(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var a=31-nn(s),o=1<<a,l=i[a];l===-1?(!(o&n)||o&r)&&(i[a]=VS(o,t)):l<=t&&(e.expiredLanes|=o),s&=~o}}function hd(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function nv(){var e=lo;return lo<<=1,!(lo&4194240)&&(lo=64),e}function Vu(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function za(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-nn(t),e[t]=n}function HS(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-nn(n),s=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~s}}function Gf(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-nn(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var ve=0;function rv(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var iv,qf,sv,av,ov,md=!1,co=[],fr=null,pr=null,hr=null,ua=new Map,ca=new Map,ir=[],WS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function wm(e,t){switch(e){case"focusin":case"focusout":fr=null;break;case"dragenter":case"dragleave":pr=null;break;case"mouseover":case"mouseout":hr=null;break;case"pointerover":case"pointerout":ua.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ca.delete(t.pointerId)}}function ks(e,t,n,r,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},t!==null&&(t=Ba(t),t!==null&&qf(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function GS(e,t,n,r,i){switch(t){case"focusin":return fr=ks(fr,e,t,n,r,i),!0;case"dragenter":return pr=ks(pr,e,t,n,r,i),!0;case"mouseover":return hr=ks(hr,e,t,n,r,i),!0;case"pointerover":var s=i.pointerId;return ua.set(s,ks(ua.get(s)||null,e,t,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,ca.set(s,ks(ca.get(s)||null,e,t,n,r,i)),!0}return!1}function lv(e){var t=Hr(e.target);if(t!==null){var n=di(t);if(n!==null){if(t=n.tag,t===13){if(t=X0(n),t!==null){e.blockedOn=t,ov(e.priority,function(){sv(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Fo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=gd(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);cd=r,n.target.dispatchEvent(r),cd=null}else return t=Ba(n),t!==null&&qf(t),e.blockedOn=n,!1;t.shift()}return!0}function km(e,t,n){Fo(e)&&n.delete(t)}function qS(){md=!1,fr!==null&&Fo(fr)&&(fr=null),pr!==null&&Fo(pr)&&(pr=null),hr!==null&&Fo(hr)&&(hr=null),ua.forEach(km),ca.forEach(km)}function Ss(e,t){e.blockedOn===t&&(e.blockedOn=null,md||(md=!0,jt.unstable_scheduleCallback(jt.unstable_NormalPriority,qS)))}function da(e){function t(i){return Ss(i,e)}if(0<co.length){Ss(co[0],e);for(var n=1;n<co.length;n++){var r=co[n];r.blockedOn===e&&(r.blockedOn=null)}}for(fr!==null&&Ss(fr,e),pr!==null&&Ss(pr,e),hr!==null&&Ss(hr,e),ua.forEach(t),ca.forEach(t),n=0;n<ir.length;n++)r=ir[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<ir.length&&(n=ir[0],n.blockedOn===null);)lv(n),n.blockedOn===null&&ir.shift()}var Oi=Yn.ReactCurrentBatchConfig,dl=!0;function KS(e,t,n,r){var i=ve,s=Oi.transition;Oi.transition=null;try{ve=1,Kf(e,t,n,r)}finally{ve=i,Oi.transition=s}}function YS(e,t,n,r){var i=ve,s=Oi.transition;Oi.transition=null;try{ve=4,Kf(e,t,n,r)}finally{ve=i,Oi.transition=s}}function Kf(e,t,n,r){if(dl){var i=gd(e,t,n,r);if(i===null)Zu(e,t,r,fl,n),wm(e,r);else if(GS(i,e,t,n,r))r.stopPropagation();else if(wm(e,r),t&4&&-1<WS.indexOf(e)){for(;i!==null;){var s=Ba(i);if(s!==null&&iv(s),s=gd(e,t,n,r),s===null&&Zu(e,t,r,fl,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Zu(e,t,r,null,n)}}var fl=null;function gd(e,t,n,r){if(fl=null,e=Hf(r),e=Hr(e),e!==null)if(t=di(e),t===null)e=null;else if(n=t.tag,n===13){if(e=X0(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return fl=e,null}function uv(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(MS()){case Wf:return 1;case ev:return 4;case ul:case FS:return 16;case tv:return 536870912;default:return 16}default:return 16}}var ur=null,Yf=null,Oo=null;function cv(){if(Oo)return Oo;var e,t=Yf,n=t.length,r,i="value"in ur?ur.value:ur.textContent,s=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[s-r];r++);return Oo=i.slice(e,1<r?1-r:void 0)}function zo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function fo(){return!0}function Sm(){return!1}function Dt(e){function t(n,r,i,s,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(n=e[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?fo:Sm,this.isPropagationStopped=Sm,this}return De(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=fo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=fo)},persist:function(){},isPersistent:fo}),t}var us={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Xf=Dt(us),Ua=De({},us,{view:0,detail:0}),XS=Dt(Ua),$u,Hu,Es,nu=De({},Ua,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Qf,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Es&&(Es&&e.type==="mousemove"?($u=e.screenX-Es.screenX,Hu=e.screenY-Es.screenY):Hu=$u=0,Es=e),$u)},movementY:function(e){return"movementY"in e?e.movementY:Hu}}),Em=Dt(nu),QS=De({},nu,{dataTransfer:0}),ZS=Dt(QS),JS=De({},Ua,{relatedTarget:0}),Wu=Dt(JS),eE=De({},us,{animationName:0,elapsedTime:0,pseudoElement:0}),tE=Dt(eE),nE=De({},us,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),rE=Dt(nE),iE=De({},us,{data:0}),Cm=Dt(iE),sE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},aE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},oE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function lE(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=oE[e])?!!t[e]:!1}function Qf(){return lE}var uE=De({},Ua,{key:function(e){if(e.key){var t=sE[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=zo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?aE[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Qf,charCode:function(e){return e.type==="keypress"?zo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?zo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),cE=Dt(uE),dE=De({},nu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Tm=Dt(dE),fE=De({},Ua,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Qf}),pE=Dt(fE),hE=De({},us,{propertyName:0,elapsedTime:0,pseudoElement:0}),mE=Dt(hE),gE=De({},nu,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),yE=Dt(gE),xE=[9,13,27,32],Zf=Bn&&"CompositionEvent"in window,$s=null;Bn&&"documentMode"in document&&($s=document.documentMode);var vE=Bn&&"TextEvent"in window&&!$s,dv=Bn&&(!Zf||$s&&8<$s&&11>=$s),_m=" ",Am=!1;function fv(e,t){switch(e){case"keyup":return xE.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function pv(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var vi=!1;function bE(e,t){switch(e){case"compositionend":return pv(t);case"keypress":return t.which!==32?null:(Am=!0,_m);case"textInput":return e=t.data,e===_m&&Am?null:e;default:return null}}function wE(e,t){if(vi)return e==="compositionend"||!Zf&&fv(e,t)?(e=cv(),Oo=Yf=ur=null,vi=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return dv&&t.locale!=="ko"?null:t.data;default:return null}}var kE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Im(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!kE[e.type]:t==="textarea"}function hv(e,t,n,r){W0(r),t=pl(t,"onChange"),0<t.length&&(n=new Xf("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Hs=null,fa=null;function SE(e){Cv(e,0)}function ru(e){var t=ki(e);if(O0(t))return e}function EE(e,t){if(e==="change")return t}var mv=!1;if(Bn){var Gu;if(Bn){var qu="oninput"in document;if(!qu){var Nm=document.createElement("div");Nm.setAttribute("oninput","return;"),qu=typeof Nm.oninput=="function"}Gu=qu}else Gu=!1;mv=Gu&&(!document.documentMode||9<document.documentMode)}function Pm(){Hs&&(Hs.detachEvent("onpropertychange",gv),fa=Hs=null)}function gv(e){if(e.propertyName==="value"&&ru(fa)){var t=[];hv(t,fa,e,Hf(e)),Y0(SE,t)}}function CE(e,t,n){e==="focusin"?(Pm(),Hs=t,fa=n,Hs.attachEvent("onpropertychange",gv)):e==="focusout"&&Pm()}function TE(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ru(fa)}function _E(e,t){if(e==="click")return ru(t)}function AE(e,t){if(e==="input"||e==="change")return ru(t)}function IE(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var un=typeof Object.is=="function"?Object.is:IE;function pa(e,t){if(un(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Zc.call(t,i)||!un(e[i],t[i]))return!1}return!0}function jm(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Rm(e,t){var n=jm(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=jm(n)}}function yv(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?yv(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function xv(){for(var e=window,t=al();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=al(e.document)}return t}function Jf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function NE(e){var t=xv(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&yv(n.ownerDocument.documentElement,n)){if(r!==null&&Jf(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!e.extend&&s>r&&(i=r,r=s,s=i),i=Rm(n,s);var a=Rm(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var PE=Bn&&"documentMode"in document&&11>=document.documentMode,bi=null,yd=null,Ws=null,xd=!1;function Lm(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;xd||bi==null||bi!==al(r)||(r=bi,"selectionStart"in r&&Jf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ws&&pa(Ws,r)||(Ws=r,r=pl(yd,"onSelect"),0<r.length&&(t=new Xf("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=bi)))}function po(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var wi={animationend:po("Animation","AnimationEnd"),animationiteration:po("Animation","AnimationIteration"),animationstart:po("Animation","AnimationStart"),transitionend:po("Transition","TransitionEnd")},Ku={},vv={};Bn&&(vv=document.createElement("div").style,"AnimationEvent"in window||(delete wi.animationend.animation,delete wi.animationiteration.animation,delete wi.animationstart.animation),"TransitionEvent"in window||delete wi.transitionend.transition);function iu(e){if(Ku[e])return Ku[e];if(!wi[e])return e;var t=wi[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in vv)return Ku[e]=t[n];return e}var bv=iu("animationend"),wv=iu("animationiteration"),kv=iu("animationstart"),Sv=iu("transitionend"),Ev=new Map,Dm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Tr(e,t){Ev.set(e,t),ci(t,[e])}for(var Yu=0;Yu<Dm.length;Yu++){var Xu=Dm[Yu],jE=Xu.toLowerCase(),RE=Xu[0].toUpperCase()+Xu.slice(1);Tr(jE,"on"+RE)}Tr(bv,"onAnimationEnd");Tr(wv,"onAnimationIteration");Tr(kv,"onAnimationStart");Tr("dblclick","onDoubleClick");Tr("focusin","onFocus");Tr("focusout","onBlur");Tr(Sv,"onTransitionEnd");Gi("onMouseEnter",["mouseout","mouseover"]);Gi("onMouseLeave",["mouseout","mouseover"]);Gi("onPointerEnter",["pointerout","pointerover"]);Gi("onPointerLeave",["pointerout","pointerover"]);ci("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ci("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ci("onBeforeInput",["compositionend","keypress","textInput","paste"]);ci("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ci("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ci("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ds="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),LE=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ds));function Mm(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,jS(r,t,void 0,e),e.currentTarget=null}function Cv(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var a=r.length-1;0<=a;a--){var o=r[a],l=o.instance,u=o.currentTarget;if(o=o.listener,l!==s&&i.isPropagationStopped())break e;Mm(i,o,u),s=l}else for(a=0;a<r.length;a++){if(o=r[a],l=o.instance,u=o.currentTarget,o=o.listener,l!==s&&i.isPropagationStopped())break e;Mm(i,o,u),s=l}}}if(ll)throw e=pd,ll=!1,pd=null,e}function Te(e,t){var n=t[Sd];n===void 0&&(n=t[Sd]=new Set);var r=e+"__bubble";n.has(r)||(Tv(t,e,2,!1),n.add(r))}function Qu(e,t,n){var r=0;t&&(r|=4),Tv(n,e,r,t)}var ho="_reactListening"+Math.random().toString(36).slice(2);function ha(e){if(!e[ho]){e[ho]=!0,R0.forEach(function(n){n!=="selectionchange"&&(LE.has(n)||Qu(n,!1,e),Qu(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ho]||(t[ho]=!0,Qu("selectionchange",!1,t))}}function Tv(e,t,n,r){switch(uv(t)){case 1:var i=KS;break;case 4:i=YS;break;default:i=Kf}n=i.bind(null,t,n,e),i=void 0,!fd||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Zu(e,t,n,r,i){var s=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var o=r.stateNode.containerInfo;if(o===i||o.nodeType===8&&o.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;a=a.return}for(;o!==null;){if(a=Hr(o),a===null)return;if(l=a.tag,l===5||l===6){r=s=a;continue e}o=o.parentNode}}r=r.return}Y0(function(){var u=s,d=Hf(n),f=[];e:{var p=Ev.get(e);if(p!==void 0){var h=Xf,x=e;switch(e){case"keypress":if(zo(n)===0)break e;case"keydown":case"keyup":h=cE;break;case"focusin":x="focus",h=Wu;break;case"focusout":x="blur",h=Wu;break;case"beforeblur":case"afterblur":h=Wu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=Em;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=ZS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=pE;break;case bv:case wv:case kv:h=tE;break;case Sv:h=mE;break;case"scroll":h=XS;break;case"wheel":h=yE;break;case"copy":case"cut":case"paste":h=rE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=Tm}var b=(t&4)!==0,k=!b&&e==="scroll",g=b?p!==null?p+"Capture":null:p;b=[];for(var m=u,y;m!==null;){y=m;var v=y.stateNode;if(y.tag===5&&v!==null&&(y=v,g!==null&&(v=la(m,g),v!=null&&b.push(ma(m,v,y)))),k)break;m=m.return}0<b.length&&(p=new h(p,x,null,n,d),f.push({event:p,listeners:b}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",h=e==="mouseout"||e==="pointerout",p&&n!==cd&&(x=n.relatedTarget||n.fromElement)&&(Hr(x)||x[Vn]))break e;if((h||p)&&(p=d.window===d?d:(p=d.ownerDocument)?p.defaultView||p.parentWindow:window,h?(x=n.relatedTarget||n.toElement,h=u,x=x?Hr(x):null,x!==null&&(k=di(x),x!==k||x.tag!==5&&x.tag!==6)&&(x=null)):(h=null,x=u),h!==x)){if(b=Em,v="onMouseLeave",g="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(b=Tm,v="onPointerLeave",g="onPointerEnter",m="pointer"),k=h==null?p:ki(h),y=x==null?p:ki(x),p=new b(v,m+"leave",h,n,d),p.target=k,p.relatedTarget=y,v=null,Hr(d)===u&&(b=new b(g,m+"enter",x,n,d),b.target=y,b.relatedTarget=k,v=b),k=v,h&&x)t:{for(b=h,g=x,m=0,y=b;y;y=mi(y))m++;for(y=0,v=g;v;v=mi(v))y++;for(;0<m-y;)b=mi(b),m--;for(;0<y-m;)g=mi(g),y--;for(;m--;){if(b===g||g!==null&&b===g.alternate)break t;b=mi(b),g=mi(g)}b=null}else b=null;h!==null&&Fm(f,p,h,b,!1),x!==null&&k!==null&&Fm(f,k,x,b,!0)}}e:{if(p=u?ki(u):window,h=p.nodeName&&p.nodeName.toLowerCase(),h==="select"||h==="input"&&p.type==="file")var E=EE;else if(Im(p))if(mv)E=AE;else{E=TE;var w=CE}else(h=p.nodeName)&&h.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(E=_E);if(E&&(E=E(e,u))){hv(f,E,n,d);break e}w&&w(e,p,u),e==="focusout"&&(w=p._wrapperState)&&w.controlled&&p.type==="number"&&sd(p,"number",p.value)}switch(w=u?ki(u):window,e){case"focusin":(Im(w)||w.contentEditable==="true")&&(bi=w,yd=u,Ws=null);break;case"focusout":Ws=yd=bi=null;break;case"mousedown":xd=!0;break;case"contextmenu":case"mouseup":case"dragend":xd=!1,Lm(f,n,d);break;case"selectionchange":if(PE)break;case"keydown":case"keyup":Lm(f,n,d)}var I;if(Zf)e:{switch(e){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else vi?fv(e,n)&&(N="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(dv&&n.locale!=="ko"&&(vi||N!=="onCompositionStart"?N==="onCompositionEnd"&&vi&&(I=cv()):(ur=d,Yf="value"in ur?ur.value:ur.textContent,vi=!0)),w=pl(u,N),0<w.length&&(N=new Cm(N,e,null,n,d),f.push({event:N,listeners:w}),I?N.data=I:(I=pv(n),I!==null&&(N.data=I)))),(I=vE?bE(e,n):wE(e,n))&&(u=pl(u,"onBeforeInput"),0<u.length&&(d=new Cm("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:u}),d.data=I))}Cv(f,t)})}function ma(e,t,n){return{instance:e,listener:t,currentTarget:n}}function pl(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=la(e,n),s!=null&&r.unshift(ma(e,s,i)),s=la(e,t),s!=null&&r.push(ma(e,s,i))),e=e.return}return r}function mi(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Fm(e,t,n,r,i){for(var s=t._reactName,a=[];n!==null&&n!==r;){var o=n,l=o.alternate,u=o.stateNode;if(l!==null&&l===r)break;o.tag===5&&u!==null&&(o=u,i?(l=la(n,s),l!=null&&a.unshift(ma(n,l,o))):i||(l=la(n,s),l!=null&&a.push(ma(n,l,o)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var DE=/\r\n?/g,ME=/\u0000|\uFFFD/g;function Om(e){return(typeof e=="string"?e:""+e).replace(DE,`
`).replace(ME,"")}function mo(e,t,n){if(t=Om(t),Om(e)!==t&&n)throw Error(F(425))}function hl(){}var vd=null,bd=null;function wd(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var kd=typeof setTimeout=="function"?setTimeout:void 0,FE=typeof clearTimeout=="function"?clearTimeout:void 0,zm=typeof Promise=="function"?Promise:void 0,OE=typeof queueMicrotask=="function"?queueMicrotask:typeof zm<"u"?function(e){return zm.resolve(null).then(e).catch(zE)}:kd;function zE(e){setTimeout(function(){throw e})}function Ju(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),da(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);da(t)}function mr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Um(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var cs=Math.random().toString(36).slice(2),mn="__reactFiber$"+cs,ga="__reactProps$"+cs,Vn="__reactContainer$"+cs,Sd="__reactEvents$"+cs,UE="__reactListeners$"+cs,BE="__reactHandles$"+cs;function Hr(e){var t=e[mn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Vn]||n[mn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Um(e);e!==null;){if(n=e[mn])return n;e=Um(e)}return t}e=n,n=e.parentNode}return null}function Ba(e){return e=e[mn]||e[Vn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function ki(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(F(33))}function su(e){return e[ga]||null}var Ed=[],Si=-1;function _r(e){return{current:e}}function _e(e){0>Si||(e.current=Ed[Si],Ed[Si]=null,Si--)}function Ce(e,t){Si++,Ed[Si]=e.current,e.current=t}var Sr={},lt=_r(Sr),vt=_r(!1),ni=Sr;function qi(e,t){var n=e.type.contextTypes;if(!n)return Sr;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=t[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function bt(e){return e=e.childContextTypes,e!=null}function ml(){_e(vt),_e(lt)}function Bm(e,t,n){if(lt.current!==Sr)throw Error(F(168));Ce(lt,t),Ce(vt,n)}function _v(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(F(108,CS(e)||"Unknown",i));return De({},n,r)}function gl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Sr,ni=lt.current,Ce(lt,e),Ce(vt,vt.current),!0}function Vm(e,t,n){var r=e.stateNode;if(!r)throw Error(F(169));n?(e=_v(e,t,ni),r.__reactInternalMemoizedMergedChildContext=e,_e(vt),_e(lt),Ce(lt,e)):_e(vt),Ce(vt,n)}var Pn=null,au=!1,ec=!1;function Av(e){Pn===null?Pn=[e]:Pn.push(e)}function VE(e){au=!0,Av(e)}function Ar(){if(!ec&&Pn!==null){ec=!0;var e=0,t=ve;try{var n=Pn;for(ve=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Pn=null,au=!1}catch(i){throw Pn!==null&&(Pn=Pn.slice(e+1)),J0(Wf,Ar),i}finally{ve=t,ec=!1}}return null}var Ei=[],Ci=0,yl=null,xl=0,zt=[],Ut=0,ri=null,jn=1,Rn="";function Mr(e,t){Ei[Ci++]=xl,Ei[Ci++]=yl,yl=e,xl=t}function Iv(e,t,n){zt[Ut++]=jn,zt[Ut++]=Rn,zt[Ut++]=ri,ri=e;var r=jn;e=Rn;var i=32-nn(r)-1;r&=~(1<<i),n+=1;var s=32-nn(t)+i;if(30<s){var a=i-i%5;s=(r&(1<<a)-1).toString(32),r>>=a,i-=a,jn=1<<32-nn(t)+i|n<<i|r,Rn=s+e}else jn=1<<s|n<<i|r,Rn=e}function ep(e){e.return!==null&&(Mr(e,1),Iv(e,1,0))}function tp(e){for(;e===yl;)yl=Ei[--Ci],Ei[Ci]=null,xl=Ei[--Ci],Ei[Ci]=null;for(;e===ri;)ri=zt[--Ut],zt[Ut]=null,Rn=zt[--Ut],zt[Ut]=null,jn=zt[--Ut],zt[Ut]=null}var Nt=null,At=null,Ie=!1,Jt=null;function Nv(e,t){var n=Vt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function $m(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Nt=e,At=mr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Nt=e,At=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=ri!==null?{id:jn,overflow:Rn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Vt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Nt=e,At=null,!0):!1;default:return!1}}function Cd(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Td(e){if(Ie){var t=At;if(t){var n=t;if(!$m(e,t)){if(Cd(e))throw Error(F(418));t=mr(n.nextSibling);var r=Nt;t&&$m(e,t)?Nv(r,n):(e.flags=e.flags&-4097|2,Ie=!1,Nt=e)}}else{if(Cd(e))throw Error(F(418));e.flags=e.flags&-4097|2,Ie=!1,Nt=e}}}function Hm(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Nt=e}function go(e){if(e!==Nt)return!1;if(!Ie)return Hm(e),Ie=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!wd(e.type,e.memoizedProps)),t&&(t=At)){if(Cd(e))throw Pv(),Error(F(418));for(;t;)Nv(e,t),t=mr(t.nextSibling)}if(Hm(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(F(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){At=mr(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}At=null}}else At=Nt?mr(e.stateNode.nextSibling):null;return!0}function Pv(){for(var e=At;e;)e=mr(e.nextSibling)}function Ki(){At=Nt=null,Ie=!1}function np(e){Jt===null?Jt=[e]:Jt.push(e)}var $E=Yn.ReactCurrentBatchConfig;function Cs(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(F(309));var r=n.stateNode}if(!r)throw Error(F(147,e));var i=r,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(a){var o=i.refs;a===null?delete o[s]:o[s]=a},t._stringRef=s,t)}if(typeof e!="string")throw Error(F(284));if(!n._owner)throw Error(F(290,e))}return e}function yo(e,t){throw e=Object.prototype.toString.call(t),Error(F(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Wm(e){var t=e._init;return t(e._payload)}function jv(e){function t(g,m){if(e){var y=g.deletions;y===null?(g.deletions=[m],g.flags|=16):y.push(m)}}function n(g,m){if(!e)return null;for(;m!==null;)t(g,m),m=m.sibling;return null}function r(g,m){for(g=new Map;m!==null;)m.key!==null?g.set(m.key,m):g.set(m.index,m),m=m.sibling;return g}function i(g,m){return g=vr(g,m),g.index=0,g.sibling=null,g}function s(g,m,y){return g.index=y,e?(y=g.alternate,y!==null?(y=y.index,y<m?(g.flags|=2,m):y):(g.flags|=2,m)):(g.flags|=1048576,m)}function a(g){return e&&g.alternate===null&&(g.flags|=2),g}function o(g,m,y,v){return m===null||m.tag!==6?(m=oc(y,g.mode,v),m.return=g,m):(m=i(m,y),m.return=g,m)}function l(g,m,y,v){var E=y.type;return E===xi?d(g,m,y.props.children,v,y.key):m!==null&&(m.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===tr&&Wm(E)===m.type)?(v=i(m,y.props),v.ref=Cs(g,m,y),v.return=g,v):(v=Go(y.type,y.key,y.props,null,g.mode,v),v.ref=Cs(g,m,y),v.return=g,v)}function u(g,m,y,v){return m===null||m.tag!==4||m.stateNode.containerInfo!==y.containerInfo||m.stateNode.implementation!==y.implementation?(m=lc(y,g.mode,v),m.return=g,m):(m=i(m,y.children||[]),m.return=g,m)}function d(g,m,y,v,E){return m===null||m.tag!==7?(m=Qr(y,g.mode,v,E),m.return=g,m):(m=i(m,y),m.return=g,m)}function f(g,m,y){if(typeof m=="string"&&m!==""||typeof m=="number")return m=oc(""+m,g.mode,y),m.return=g,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case so:return y=Go(m.type,m.key,m.props,null,g.mode,y),y.ref=Cs(g,null,m),y.return=g,y;case yi:return m=lc(m,g.mode,y),m.return=g,m;case tr:var v=m._init;return f(g,v(m._payload),y)}if(Rs(m)||bs(m))return m=Qr(m,g.mode,y,null),m.return=g,m;yo(g,m)}return null}function p(g,m,y,v){var E=m!==null?m.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return E!==null?null:o(g,m,""+y,v);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case so:return y.key===E?l(g,m,y,v):null;case yi:return y.key===E?u(g,m,y,v):null;case tr:return E=y._init,p(g,m,E(y._payload),v)}if(Rs(y)||bs(y))return E!==null?null:d(g,m,y,v,null);yo(g,y)}return null}function h(g,m,y,v,E){if(typeof v=="string"&&v!==""||typeof v=="number")return g=g.get(y)||null,o(m,g,""+v,E);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case so:return g=g.get(v.key===null?y:v.key)||null,l(m,g,v,E);case yi:return g=g.get(v.key===null?y:v.key)||null,u(m,g,v,E);case tr:var w=v._init;return h(g,m,y,w(v._payload),E)}if(Rs(v)||bs(v))return g=g.get(y)||null,d(m,g,v,E,null);yo(m,v)}return null}function x(g,m,y,v){for(var E=null,w=null,I=m,N=m=0,R=null;I!==null&&N<y.length;N++){I.index>N?(R=I,I=null):R=I.sibling;var _=p(g,I,y[N],v);if(_===null){I===null&&(I=R);break}e&&I&&_.alternate===null&&t(g,I),m=s(_,m,N),w===null?E=_:w.sibling=_,w=_,I=R}if(N===y.length)return n(g,I),Ie&&Mr(g,N),E;if(I===null){for(;N<y.length;N++)I=f(g,y[N],v),I!==null&&(m=s(I,m,N),w===null?E=I:w.sibling=I,w=I);return Ie&&Mr(g,N),E}for(I=r(g,I);N<y.length;N++)R=h(I,g,N,y[N],v),R!==null&&(e&&R.alternate!==null&&I.delete(R.key===null?N:R.key),m=s(R,m,N),w===null?E=R:w.sibling=R,w=R);return e&&I.forEach(function(j){return t(g,j)}),Ie&&Mr(g,N),E}function b(g,m,y,v){var E=bs(y);if(typeof E!="function")throw Error(F(150));if(y=E.call(y),y==null)throw Error(F(151));for(var w=E=null,I=m,N=m=0,R=null,_=y.next();I!==null&&!_.done;N++,_=y.next()){I.index>N?(R=I,I=null):R=I.sibling;var j=p(g,I,_.value,v);if(j===null){I===null&&(I=R);break}e&&I&&j.alternate===null&&t(g,I),m=s(j,m,N),w===null?E=j:w.sibling=j,w=j,I=R}if(_.done)return n(g,I),Ie&&Mr(g,N),E;if(I===null){for(;!_.done;N++,_=y.next())_=f(g,_.value,v),_!==null&&(m=s(_,m,N),w===null?E=_:w.sibling=_,w=_);return Ie&&Mr(g,N),E}for(I=r(g,I);!_.done;N++,_=y.next())_=h(I,g,N,_.value,v),_!==null&&(e&&_.alternate!==null&&I.delete(_.key===null?N:_.key),m=s(_,m,N),w===null?E=_:w.sibling=_,w=_);return e&&I.forEach(function(U){return t(g,U)}),Ie&&Mr(g,N),E}function k(g,m,y,v){if(typeof y=="object"&&y!==null&&y.type===xi&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case so:e:{for(var E=y.key,w=m;w!==null;){if(w.key===E){if(E=y.type,E===xi){if(w.tag===7){n(g,w.sibling),m=i(w,y.props.children),m.return=g,g=m;break e}}else if(w.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===tr&&Wm(E)===w.type){n(g,w.sibling),m=i(w,y.props),m.ref=Cs(g,w,y),m.return=g,g=m;break e}n(g,w);break}else t(g,w);w=w.sibling}y.type===xi?(m=Qr(y.props.children,g.mode,v,y.key),m.return=g,g=m):(v=Go(y.type,y.key,y.props,null,g.mode,v),v.ref=Cs(g,m,y),v.return=g,g=v)}return a(g);case yi:e:{for(w=y.key;m!==null;){if(m.key===w)if(m.tag===4&&m.stateNode.containerInfo===y.containerInfo&&m.stateNode.implementation===y.implementation){n(g,m.sibling),m=i(m,y.children||[]),m.return=g,g=m;break e}else{n(g,m);break}else t(g,m);m=m.sibling}m=lc(y,g.mode,v),m.return=g,g=m}return a(g);case tr:return w=y._init,k(g,m,w(y._payload),v)}if(Rs(y))return x(g,m,y,v);if(bs(y))return b(g,m,y,v);yo(g,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,m!==null&&m.tag===6?(n(g,m.sibling),m=i(m,y),m.return=g,g=m):(n(g,m),m=oc(y,g.mode,v),m.return=g,g=m),a(g)):n(g,m)}return k}var Yi=jv(!0),Rv=jv(!1),vl=_r(null),bl=null,Ti=null,rp=null;function ip(){rp=Ti=bl=null}function sp(e){var t=vl.current;_e(vl),e._currentValue=t}function _d(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function zi(e,t){bl=e,rp=Ti=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(xt=!0),e.firstContext=null)}function Ht(e){var t=e._currentValue;if(rp!==e)if(e={context:e,memoizedValue:t,next:null},Ti===null){if(bl===null)throw Error(F(308));Ti=e,bl.dependencies={lanes:0,firstContext:e}}else Ti=Ti.next=e;return t}var Wr=null;function ap(e){Wr===null?Wr=[e]:Wr.push(e)}function Lv(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,ap(t)):(n.next=i.next,i.next=n),t.interleaved=n,$n(e,r)}function $n(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var nr=!1;function op(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Dv(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function On(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function gr(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,me&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,$n(e,n)}return i=r.interleaved,i===null?(t.next=t,ap(r)):(t.next=i.next,i.next=t),r.interleaved=t,$n(e,n)}function Uo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Gf(e,n)}}function Gm(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?i=s=t:s=s.next=t}else i=s=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function wl(e,t,n,r){var i=e.updateQueue;nr=!1;var s=i.firstBaseUpdate,a=i.lastBaseUpdate,o=i.shared.pending;if(o!==null){i.shared.pending=null;var l=o,u=l.next;l.next=null,a===null?s=u:a.next=u,a=l;var d=e.alternate;d!==null&&(d=d.updateQueue,o=d.lastBaseUpdate,o!==a&&(o===null?d.firstBaseUpdate=u:o.next=u,d.lastBaseUpdate=l))}if(s!==null){var f=i.baseState;a=0,d=u=l=null,o=s;do{var p=o.lane,h=o.eventTime;if((r&p)===p){d!==null&&(d=d.next={eventTime:h,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var x=e,b=o;switch(p=t,h=n,b.tag){case 1:if(x=b.payload,typeof x=="function"){f=x.call(h,f,p);break e}f=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=b.payload,p=typeof x=="function"?x.call(h,f,p):x,p==null)break e;f=De({},f,p);break e;case 2:nr=!0}}o.callback!==null&&o.lane!==0&&(e.flags|=64,p=i.effects,p===null?i.effects=[o]:p.push(o))}else h={eventTime:h,lane:p,tag:o.tag,payload:o.payload,callback:o.callback,next:null},d===null?(u=d=h,l=f):d=d.next=h,a|=p;if(o=o.next,o===null){if(o=i.shared.pending,o===null)break;p=o,o=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(!0);if(d===null&&(l=f),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else s===null&&(i.shared.lanes=0);si|=a,e.lanes=a,e.memoizedState=f}}function qm(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(F(191,i));i.call(r)}}}var Va={},xn=_r(Va),ya=_r(Va),xa=_r(Va);function Gr(e){if(e===Va)throw Error(F(174));return e}function lp(e,t){switch(Ce(xa,t),Ce(ya,e),Ce(xn,Va),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:od(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=od(t,e)}_e(xn),Ce(xn,t)}function Xi(){_e(xn),_e(ya),_e(xa)}function Mv(e){Gr(xa.current);var t=Gr(xn.current),n=od(t,e.type);t!==n&&(Ce(ya,e),Ce(xn,n))}function up(e){ya.current===e&&(_e(xn),_e(ya))}var je=_r(0);function kl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var tc=[];function cp(){for(var e=0;e<tc.length;e++)tc[e]._workInProgressVersionPrimary=null;tc.length=0}var Bo=Yn.ReactCurrentDispatcher,nc=Yn.ReactCurrentBatchConfig,ii=0,Le=null,He=null,qe=null,Sl=!1,Gs=!1,va=0,HE=0;function tt(){throw Error(F(321))}function dp(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!un(e[n],t[n]))return!1;return!0}function fp(e,t,n,r,i,s){if(ii=s,Le=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Bo.current=e===null||e.memoizedState===null?KE:YE,e=n(r,i),Gs){s=0;do{if(Gs=!1,va=0,25<=s)throw Error(F(301));s+=1,qe=He=null,t.updateQueue=null,Bo.current=XE,e=n(r,i)}while(Gs)}if(Bo.current=El,t=He!==null&&He.next!==null,ii=0,qe=He=Le=null,Sl=!1,t)throw Error(F(300));return e}function pp(){var e=va!==0;return va=0,e}function pn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return qe===null?Le.memoizedState=qe=e:qe=qe.next=e,qe}function Wt(){if(He===null){var e=Le.alternate;e=e!==null?e.memoizedState:null}else e=He.next;var t=qe===null?Le.memoizedState:qe.next;if(t!==null)qe=t,He=e;else{if(e===null)throw Error(F(310));He=e,e={memoizedState:He.memoizedState,baseState:He.baseState,baseQueue:He.baseQueue,queue:He.queue,next:null},qe===null?Le.memoizedState=qe=e:qe=qe.next=e}return qe}function ba(e,t){return typeof t=="function"?t(e):t}function rc(e){var t=Wt(),n=t.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=e;var r=He,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var a=i.next;i.next=s.next,s.next=a}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var o=a=null,l=null,u=s;do{var d=u.lane;if((ii&d)===d)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(o=l=f,a=r):l=l.next=f,Le.lanes|=d,si|=d}u=u.next}while(u!==null&&u!==s);l===null?a=r:l.next=o,un(r,t.memoizedState)||(xt=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do s=i.lane,Le.lanes|=s,si|=s,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ic(e){var t=Wt(),n=t.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,s=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do s=e(s,a.action),a=a.next;while(a!==i);un(s,t.memoizedState)||(xt=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function Fv(){}function Ov(e,t){var n=Le,r=Wt(),i=t(),s=!un(r.memoizedState,i);if(s&&(r.memoizedState=i,xt=!0),r=r.queue,hp(Bv.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||qe!==null&&qe.memoizedState.tag&1){if(n.flags|=2048,wa(9,Uv.bind(null,n,r,i,t),void 0,null),Ke===null)throw Error(F(349));ii&30||zv(n,t,i)}return i}function zv(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Le.updateQueue,t===null?(t={lastEffect:null,stores:null},Le.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Uv(e,t,n,r){t.value=n,t.getSnapshot=r,Vv(t)&&$v(e)}function Bv(e,t,n){return n(function(){Vv(t)&&$v(e)})}function Vv(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!un(e,n)}catch{return!0}}function $v(e){var t=$n(e,1);t!==null&&rn(t,e,1,-1)}function Km(e){var t=pn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ba,lastRenderedState:e},t.queue=e,e=e.dispatch=qE.bind(null,Le,e),[t.memoizedState,e]}function wa(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Le.updateQueue,t===null?(t={lastEffect:null,stores:null},Le.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Hv(){return Wt().memoizedState}function Vo(e,t,n,r){var i=pn();Le.flags|=e,i.memoizedState=wa(1|t,n,void 0,r===void 0?null:r)}function ou(e,t,n,r){var i=Wt();r=r===void 0?null:r;var s=void 0;if(He!==null){var a=He.memoizedState;if(s=a.destroy,r!==null&&dp(r,a.deps)){i.memoizedState=wa(t,n,s,r);return}}Le.flags|=e,i.memoizedState=wa(1|t,n,s,r)}function Ym(e,t){return Vo(8390656,8,e,t)}function hp(e,t){return ou(2048,8,e,t)}function Wv(e,t){return ou(4,2,e,t)}function Gv(e,t){return ou(4,4,e,t)}function qv(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Kv(e,t,n){return n=n!=null?n.concat([e]):null,ou(4,4,qv.bind(null,t,e),n)}function mp(){}function Yv(e,t){var n=Wt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&dp(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Xv(e,t){var n=Wt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&dp(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Qv(e,t,n){return ii&21?(un(n,t)||(n=nv(),Le.lanes|=n,si|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,xt=!0),e.memoizedState=n)}function WE(e,t){var n=ve;ve=n!==0&&4>n?n:4,e(!0);var r=nc.transition;nc.transition={};try{e(!1),t()}finally{ve=n,nc.transition=r}}function Zv(){return Wt().memoizedState}function GE(e,t,n){var r=xr(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Jv(e))e1(t,n);else if(n=Lv(e,t,n,r),n!==null){var i=ft();rn(n,e,r,i),t1(n,t,r)}}function qE(e,t,n){var r=xr(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Jv(e))e1(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var a=t.lastRenderedState,o=s(a,n);if(i.hasEagerState=!0,i.eagerState=o,un(o,a)){var l=t.interleaved;l===null?(i.next=i,ap(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=Lv(e,t,i,r),n!==null&&(i=ft(),rn(n,e,r,i),t1(n,t,r))}}function Jv(e){var t=e.alternate;return e===Le||t!==null&&t===Le}function e1(e,t){Gs=Sl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function t1(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Gf(e,n)}}var El={readContext:Ht,useCallback:tt,useContext:tt,useEffect:tt,useImperativeHandle:tt,useInsertionEffect:tt,useLayoutEffect:tt,useMemo:tt,useReducer:tt,useRef:tt,useState:tt,useDebugValue:tt,useDeferredValue:tt,useTransition:tt,useMutableSource:tt,useSyncExternalStore:tt,useId:tt,unstable_isNewReconciler:!1},KE={readContext:Ht,useCallback:function(e,t){return pn().memoizedState=[e,t===void 0?null:t],e},useContext:Ht,useEffect:Ym,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Vo(4194308,4,qv.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Vo(4194308,4,e,t)},useInsertionEffect:function(e,t){return Vo(4,2,e,t)},useMemo:function(e,t){var n=pn();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=pn();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=GE.bind(null,Le,e),[r.memoizedState,e]},useRef:function(e){var t=pn();return e={current:e},t.memoizedState=e},useState:Km,useDebugValue:mp,useDeferredValue:function(e){return pn().memoizedState=e},useTransition:function(){var e=Km(!1),t=e[0];return e=WE.bind(null,e[1]),pn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Le,i=pn();if(Ie){if(n===void 0)throw Error(F(407));n=n()}else{if(n=t(),Ke===null)throw Error(F(349));ii&30||zv(r,t,n)}i.memoizedState=n;var s={value:n,getSnapshot:t};return i.queue=s,Ym(Bv.bind(null,r,s,e),[e]),r.flags|=2048,wa(9,Uv.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=pn(),t=Ke.identifierPrefix;if(Ie){var n=Rn,r=jn;n=(r&~(1<<32-nn(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=va++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=HE++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},YE={readContext:Ht,useCallback:Yv,useContext:Ht,useEffect:hp,useImperativeHandle:Kv,useInsertionEffect:Wv,useLayoutEffect:Gv,useMemo:Xv,useReducer:rc,useRef:Hv,useState:function(){return rc(ba)},useDebugValue:mp,useDeferredValue:function(e){var t=Wt();return Qv(t,He.memoizedState,e)},useTransition:function(){var e=rc(ba)[0],t=Wt().memoizedState;return[e,t]},useMutableSource:Fv,useSyncExternalStore:Ov,useId:Zv,unstable_isNewReconciler:!1},XE={readContext:Ht,useCallback:Yv,useContext:Ht,useEffect:hp,useImperativeHandle:Kv,useInsertionEffect:Wv,useLayoutEffect:Gv,useMemo:Xv,useReducer:ic,useRef:Hv,useState:function(){return ic(ba)},useDebugValue:mp,useDeferredValue:function(e){var t=Wt();return He===null?t.memoizedState=e:Qv(t,He.memoizedState,e)},useTransition:function(){var e=ic(ba)[0],t=Wt().memoizedState;return[e,t]},useMutableSource:Fv,useSyncExternalStore:Ov,useId:Zv,unstable_isNewReconciler:!1};function Qt(e,t){if(e&&e.defaultProps){t=De({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Ad(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:De({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var lu={isMounted:function(e){return(e=e._reactInternals)?di(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ft(),i=xr(e),s=On(r,i);s.payload=t,n!=null&&(s.callback=n),t=gr(e,s,i),t!==null&&(rn(t,e,i,r),Uo(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ft(),i=xr(e),s=On(r,i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=gr(e,s,i),t!==null&&(rn(t,e,i,r),Uo(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ft(),r=xr(e),i=On(n,r);i.tag=2,t!=null&&(i.callback=t),t=gr(e,i,r),t!==null&&(rn(t,e,r,n),Uo(t,e,r))}};function Xm(e,t,n,r,i,s,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,a):t.prototype&&t.prototype.isPureReactComponent?!pa(n,r)||!pa(i,s):!0}function n1(e,t,n){var r=!1,i=Sr,s=t.contextType;return typeof s=="object"&&s!==null?s=Ht(s):(i=bt(t)?ni:lt.current,r=t.contextTypes,s=(r=r!=null)?qi(e,i):Sr),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=lu,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function Qm(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&lu.enqueueReplaceState(t,t.state,null)}function Id(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},op(e);var s=t.contextType;typeof s=="object"&&s!==null?i.context=Ht(s):(s=bt(t)?ni:lt.current,i.context=qi(e,s)),i.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(Ad(e,t,s,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&lu.enqueueReplaceState(i,i.state,null),wl(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Qi(e,t){try{var n="",r=t;do n+=ES(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:i,digest:null}}function sc(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Nd(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var QE=typeof WeakMap=="function"?WeakMap:Map;function r1(e,t,n){n=On(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Tl||(Tl=!0,Ud=r),Nd(e,t)},n}function i1(e,t,n){n=On(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Nd(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Nd(e,t),typeof r!="function"&&(yr===null?yr=new Set([this]):yr.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function Zm(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new QE;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=dC.bind(null,e,t,n),t.then(e,e))}function Jm(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function eg(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=On(-1,1),t.tag=2,gr(n,t,1))),n.lanes|=1),e)}var ZE=Yn.ReactCurrentOwner,xt=!1;function ct(e,t,n,r){t.child=e===null?Rv(t,null,n,r):Yi(t,e.child,n,r)}function tg(e,t,n,r,i){n=n.render;var s=t.ref;return zi(t,i),r=fp(e,t,n,r,s,i),n=pp(),e!==null&&!xt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Hn(e,t,i)):(Ie&&n&&ep(t),t.flags|=1,ct(e,t,r,i),t.child)}function ng(e,t,n,r,i){if(e===null){var s=n.type;return typeof s=="function"&&!Sp(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,s1(e,t,s,r,i)):(e=Go(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&i)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:pa,n(a,r)&&e.ref===t.ref)return Hn(e,t,i)}return t.flags|=1,e=vr(s,r),e.ref=t.ref,e.return=t,t.child=e}function s1(e,t,n,r,i){if(e!==null){var s=e.memoizedProps;if(pa(s,r)&&e.ref===t.ref)if(xt=!1,t.pendingProps=r=s,(e.lanes&i)!==0)e.flags&131072&&(xt=!0);else return t.lanes=e.lanes,Hn(e,t,i)}return Pd(e,t,n,r,i)}function a1(e,t,n){var r=t.pendingProps,i=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ce(Ai,_t),_t|=n;else{if(!(n&1073741824))return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Ce(Ai,_t),_t|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Ce(Ai,_t),_t|=r}else s!==null?(r=s.baseLanes|n,t.memoizedState=null):r=n,Ce(Ai,_t),_t|=r;return ct(e,t,i,n),t.child}function o1(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Pd(e,t,n,r,i){var s=bt(n)?ni:lt.current;return s=qi(t,s),zi(t,i),n=fp(e,t,n,r,s,i),r=pp(),e!==null&&!xt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Hn(e,t,i)):(Ie&&r&&ep(t),t.flags|=1,ct(e,t,n,i),t.child)}function rg(e,t,n,r,i){if(bt(n)){var s=!0;gl(t)}else s=!1;if(zi(t,i),t.stateNode===null)$o(e,t),n1(t,n,r),Id(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,o=t.memoizedProps;a.props=o;var l=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ht(u):(u=bt(n)?ni:lt.current,u=qi(t,u));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof a.getSnapshotBeforeUpdate=="function";f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==r||l!==u)&&Qm(t,a,r,u),nr=!1;var p=t.memoizedState;a.state=p,wl(t,r,a,i),l=t.memoizedState,o!==r||p!==l||vt.current||nr?(typeof d=="function"&&(Ad(t,n,d,r),l=t.memoizedState),(o=nr||Xm(t,n,o,r,p,l,u))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=u,r=o):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Dv(e,t),o=t.memoizedProps,u=t.type===t.elementType?o:Qt(t.type,o),a.props=u,f=t.pendingProps,p=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=Ht(l):(l=bt(n)?ni:lt.current,l=qi(t,l));var h=n.getDerivedStateFromProps;(d=typeof h=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==f||p!==l)&&Qm(t,a,r,l),nr=!1,p=t.memoizedState,a.state=p,wl(t,r,a,i);var x=t.memoizedState;o!==f||p!==x||vt.current||nr?(typeof h=="function"&&(Ad(t,n,h,r),x=t.memoizedState),(u=nr||Xm(t,n,u,r,p,x,l)||!1)?(d||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,x,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,x,l)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=x),a.props=r,a.state=x,a.context=l,r=u):(typeof a.componentDidUpdate!="function"||o===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return jd(e,t,n,r,s,i)}function jd(e,t,n,r,i,s){o1(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&Vm(t,n,!1),Hn(e,t,s);r=t.stateNode,ZE.current=t;var o=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=Yi(t,e.child,null,s),t.child=Yi(t,null,o,s)):ct(e,t,o,s),t.memoizedState=r.state,i&&Vm(t,n,!0),t.child}function l1(e){var t=e.stateNode;t.pendingContext?Bm(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Bm(e,t.context,!1),lp(e,t.containerInfo)}function ig(e,t,n,r,i){return Ki(),np(i),t.flags|=256,ct(e,t,n,r),t.child}var Rd={dehydrated:null,treeContext:null,retryLane:0};function Ld(e){return{baseLanes:e,cachePool:null,transitions:null}}function u1(e,t,n){var r=t.pendingProps,i=je.current,s=!1,a=(t.flags&128)!==0,o;if((o=a)||(o=e!==null&&e.memoizedState===null?!1:(i&2)!==0),o?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),Ce(je,i&1),e===null)return Td(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,s?(r=t.mode,s=t.child,a={mode:"hidden",children:a},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=du(a,r,0,null),e=Qr(e,r,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=Ld(n),t.memoizedState=Rd,e):gp(t,a));if(i=e.memoizedState,i!==null&&(o=i.dehydrated,o!==null))return JE(e,t,a,r,o,i,n);if(s){s=r.fallback,a=t.mode,i=e.child,o=i.sibling;var l={mode:"hidden",children:r.children};return!(a&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=vr(i,l),r.subtreeFlags=i.subtreeFlags&14680064),o!==null?s=vr(o,s):(s=Qr(s,a,n,null),s.flags|=2),s.return=t,r.return=t,r.sibling=s,t.child=r,r=s,s=t.child,a=e.child.memoizedState,a=a===null?Ld(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=e.childLanes&~n,t.memoizedState=Rd,r}return s=e.child,e=s.sibling,r=vr(s,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function gp(e,t){return t=du({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function xo(e,t,n,r){return r!==null&&np(r),Yi(t,e.child,null,n),e=gp(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function JE(e,t,n,r,i,s,a){if(n)return t.flags&256?(t.flags&=-257,r=sc(Error(F(422))),xo(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=r.fallback,i=t.mode,r=du({mode:"visible",children:r.children},i,0,null),s=Qr(s,i,a,null),s.flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,t.mode&1&&Yi(t,e.child,null,a),t.child.memoizedState=Ld(a),t.memoizedState=Rd,s);if(!(t.mode&1))return xo(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var o=r.dgst;return r=o,s=Error(F(419)),r=sc(s,r,void 0),xo(e,t,a,r)}if(o=(a&e.childLanes)!==0,xt||o){if(r=Ke,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,$n(e,i),rn(r,e,i,-1))}return kp(),r=sc(Error(F(421))),xo(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=fC.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,At=mr(i.nextSibling),Nt=t,Ie=!0,Jt=null,e!==null&&(zt[Ut++]=jn,zt[Ut++]=Rn,zt[Ut++]=ri,jn=e.id,Rn=e.overflow,ri=t),t=gp(t,r.children),t.flags|=4096,t)}function sg(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),_d(e.return,t,n)}function ac(e,t,n,r,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function c1(e,t,n){var r=t.pendingProps,i=r.revealOrder,s=r.tail;if(ct(e,t,r.children,n),r=je.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&sg(e,n,t);else if(e.tag===19)sg(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Ce(je,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&kl(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),ac(t,!1,i,n,s);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&kl(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}ac(t,!0,n,null,s);break;case"together":ac(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function $o(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Hn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),si|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(F(153));if(t.child!==null){for(e=t.child,n=vr(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=vr(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function eC(e,t,n){switch(t.tag){case 3:l1(t),Ki();break;case 5:Mv(t);break;case 1:bt(t.type)&&gl(t);break;case 4:lp(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;Ce(vl,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Ce(je,je.current&1),t.flags|=128,null):n&t.child.childLanes?u1(e,t,n):(Ce(je,je.current&1),e=Hn(e,t,n),e!==null?e.sibling:null);Ce(je,je.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return c1(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ce(je,je.current),r)break;return null;case 22:case 23:return t.lanes=0,a1(e,t,n)}return Hn(e,t,n)}var d1,Dd,f1,p1;d1=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Dd=function(){};f1=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Gr(xn.current);var s=null;switch(n){case"input":i=rd(e,i),r=rd(e,r),s=[];break;case"select":i=De({},i,{value:void 0}),r=De({},r,{value:void 0}),s=[];break;case"textarea":i=ad(e,i),r=ad(e,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=hl)}ld(n,r);var a;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var o=i[u];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(aa.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(o=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==o&&(l!=null||o!=null))if(u==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(aa.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Te("scroll",e),s||o===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(t.updateQueue=u)&&(t.flags|=4)}};p1=function(e,t,n,r){n!==r&&(t.flags|=4)};function Ts(e,t){if(!Ie)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function nt(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function tC(e,t,n){var r=t.pendingProps;switch(tp(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return nt(t),null;case 1:return bt(t.type)&&ml(),nt(t),null;case 3:return r=t.stateNode,Xi(),_e(vt),_e(lt),cp(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(go(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Jt!==null&&($d(Jt),Jt=null))),Dd(e,t),nt(t),null;case 5:up(t);var i=Gr(xa.current);if(n=t.type,e!==null&&t.stateNode!=null)f1(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(F(166));return nt(t),null}if(e=Gr(xn.current),go(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[mn]=t,r[ga]=s,e=(t.mode&1)!==0,n){case"dialog":Te("cancel",r),Te("close",r);break;case"iframe":case"object":case"embed":Te("load",r);break;case"video":case"audio":for(i=0;i<Ds.length;i++)Te(Ds[i],r);break;case"source":Te("error",r);break;case"img":case"image":case"link":Te("error",r),Te("load",r);break;case"details":Te("toggle",r);break;case"input":hm(r,s),Te("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Te("invalid",r);break;case"textarea":gm(r,s),Te("invalid",r)}ld(n,s),i=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?r.textContent!==o&&(s.suppressHydrationWarning!==!0&&mo(r.textContent,o,e),i=["children",o]):typeof o=="number"&&r.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&mo(r.textContent,o,e),i=["children",""+o]):aa.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&Te("scroll",r)}switch(n){case"input":ao(r),mm(r,s,!0);break;case"textarea":ao(r),ym(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=hl)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=B0(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[mn]=t,e[ga]=r,d1(e,t,!1,!1),t.stateNode=e;e:{switch(a=ud(n,r),n){case"dialog":Te("cancel",e),Te("close",e),i=r;break;case"iframe":case"object":case"embed":Te("load",e),i=r;break;case"video":case"audio":for(i=0;i<Ds.length;i++)Te(Ds[i],e);i=r;break;case"source":Te("error",e),i=r;break;case"img":case"image":case"link":Te("error",e),Te("load",e),i=r;break;case"details":Te("toggle",e),i=r;break;case"input":hm(e,r),i=rd(e,r),Te("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=De({},r,{value:void 0}),Te("invalid",e);break;case"textarea":gm(e,r),i=ad(e,r),Te("invalid",e);break;default:i=r}ld(n,i),o=i;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?H0(e,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&V0(e,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&oa(e,l):typeof l=="number"&&oa(e,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(aa.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Te("scroll",e):l!=null&&Uf(e,s,l,a))}switch(n){case"input":ao(e),mm(e,r,!1);break;case"textarea":ao(e),ym(e);break;case"option":r.value!=null&&e.setAttribute("value",""+kr(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?Di(e,!!r.multiple,s,!1):r.defaultValue!=null&&Di(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=hl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return nt(t),null;case 6:if(e&&t.stateNode!=null)p1(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(F(166));if(n=Gr(xa.current),Gr(xn.current),go(t)){if(r=t.stateNode,n=t.memoizedProps,r[mn]=t,(s=r.nodeValue!==n)&&(e=Nt,e!==null))switch(e.tag){case 3:mo(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&mo(r.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[mn]=t,t.stateNode=r}return nt(t),null;case 13:if(_e(je),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Ie&&At!==null&&t.mode&1&&!(t.flags&128))Pv(),Ki(),t.flags|=98560,s=!1;else if(s=go(t),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error(F(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(F(317));s[mn]=t}else Ki(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;nt(t),s=!1}else Jt!==null&&($d(Jt),Jt=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||je.current&1?We===0&&(We=3):kp())),t.updateQueue!==null&&(t.flags|=4),nt(t),null);case 4:return Xi(),Dd(e,t),e===null&&ha(t.stateNode.containerInfo),nt(t),null;case 10:return sp(t.type._context),nt(t),null;case 17:return bt(t.type)&&ml(),nt(t),null;case 19:if(_e(je),s=t.memoizedState,s===null)return nt(t),null;if(r=(t.flags&128)!==0,a=s.rendering,a===null)if(r)Ts(s,!1);else{if(We!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=kl(e),a!==null){for(t.flags|=128,Ts(s,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)s=n,e=r,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,e=a.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Ce(je,je.current&1|2),t.child}e=e.sibling}s.tail!==null&&Ue()>Zi&&(t.flags|=128,r=!0,Ts(s,!1),t.lanes=4194304)}else{if(!r)if(e=kl(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Ts(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!Ie)return nt(t),null}else 2*Ue()-s.renderingStartTime>Zi&&n!==1073741824&&(t.flags|=128,r=!0,Ts(s,!1),t.lanes=4194304);s.isBackwards?(a.sibling=t.child,t.child=a):(n=s.last,n!==null?n.sibling=a:t.child=a,s.last=a)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=Ue(),t.sibling=null,n=je.current,Ce(je,r?n&1|2:n&1),t):(nt(t),null);case 22:case 23:return wp(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?_t&1073741824&&(nt(t),t.subtreeFlags&6&&(t.flags|=8192)):nt(t),null;case 24:return null;case 25:return null}throw Error(F(156,t.tag))}function nC(e,t){switch(tp(t),t.tag){case 1:return bt(t.type)&&ml(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Xi(),_e(vt),_e(lt),cp(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return up(t),null;case 13:if(_e(je),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(F(340));Ki()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return _e(je),null;case 4:return Xi(),null;case 10:return sp(t.type._context),null;case 22:case 23:return wp(),null;case 24:return null;default:return null}}var vo=!1,it=!1,rC=typeof WeakSet=="function"?WeakSet:Set,W=null;function _i(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Oe(e,t,r)}else n.current=null}function Md(e,t,n){try{n()}catch(r){Oe(e,t,r)}}var ag=!1;function iC(e,t){if(vd=dl,e=xv(),Jf(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,l=-1,u=0,d=0,f=e,p=null;t:for(;;){for(var h;f!==n||i!==0&&f.nodeType!==3||(o=a+i),f!==s||r!==0&&f.nodeType!==3||(l=a+r),f.nodeType===3&&(a+=f.nodeValue.length),(h=f.firstChild)!==null;)p=f,f=h;for(;;){if(f===e)break t;if(p===n&&++u===i&&(o=a),p===s&&++d===r&&(l=a),(h=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=h}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(bd={focusedElem:e,selectionRange:n},dl=!1,W=t;W!==null;)if(t=W,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,W=e;else for(;W!==null;){t=W;try{var x=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var b=x.memoizedProps,k=x.memoizedState,g=t.stateNode,m=g.getSnapshotBeforeUpdate(t.elementType===t.type?b:Qt(t.type,b),k);g.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var y=t.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(F(163))}}catch(v){Oe(t,t.return,v)}if(e=t.sibling,e!==null){e.return=t.return,W=e;break}W=t.return}return x=ag,ag=!1,x}function qs(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&Md(t,n,s)}i=i.next}while(i!==r)}}function uu(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Fd(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function h1(e){var t=e.alternate;t!==null&&(e.alternate=null,h1(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[mn],delete t[ga],delete t[Sd],delete t[UE],delete t[BE])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function m1(e){return e.tag===5||e.tag===3||e.tag===4}function og(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||m1(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Od(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=hl));else if(r!==4&&(e=e.child,e!==null))for(Od(e,t,n),e=e.sibling;e!==null;)Od(e,t,n),e=e.sibling}function zd(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(zd(e,t,n),e=e.sibling;e!==null;)zd(e,t,n),e=e.sibling}var Xe=null,Zt=!1;function Qn(e,t,n){for(n=n.child;n!==null;)g1(e,t,n),n=n.sibling}function g1(e,t,n){if(yn&&typeof yn.onCommitFiberUnmount=="function")try{yn.onCommitFiberUnmount(tu,n)}catch{}switch(n.tag){case 5:it||_i(n,t);case 6:var r=Xe,i=Zt;Xe=null,Qn(e,t,n),Xe=r,Zt=i,Xe!==null&&(Zt?(e=Xe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Xe.removeChild(n.stateNode));break;case 18:Xe!==null&&(Zt?(e=Xe,n=n.stateNode,e.nodeType===8?Ju(e.parentNode,n):e.nodeType===1&&Ju(e,n),da(e)):Ju(Xe,n.stateNode));break;case 4:r=Xe,i=Zt,Xe=n.stateNode.containerInfo,Zt=!0,Qn(e,t,n),Xe=r,Zt=i;break;case 0:case 11:case 14:case 15:if(!it&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&Md(n,t,a),i=i.next}while(i!==r)}Qn(e,t,n);break;case 1:if(!it&&(_i(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(o){Oe(n,t,o)}Qn(e,t,n);break;case 21:Qn(e,t,n);break;case 22:n.mode&1?(it=(r=it)||n.memoizedState!==null,Qn(e,t,n),it=r):Qn(e,t,n);break;default:Qn(e,t,n)}}function lg(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new rC),t.forEach(function(r){var i=pC.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Kt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=e,a=t,o=a;e:for(;o!==null;){switch(o.tag){case 5:Xe=o.stateNode,Zt=!1;break e;case 3:Xe=o.stateNode.containerInfo,Zt=!0;break e;case 4:Xe=o.stateNode.containerInfo,Zt=!0;break e}o=o.return}if(Xe===null)throw Error(F(160));g1(s,a,i),Xe=null,Zt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Oe(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)y1(t,e),t=t.sibling}function y1(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Kt(t,e),fn(e),r&4){try{qs(3,e,e.return),uu(3,e)}catch(b){Oe(e,e.return,b)}try{qs(5,e,e.return)}catch(b){Oe(e,e.return,b)}}break;case 1:Kt(t,e),fn(e),r&512&&n!==null&&_i(n,n.return);break;case 5:if(Kt(t,e),fn(e),r&512&&n!==null&&_i(n,n.return),e.flags&32){var i=e.stateNode;try{oa(i,"")}catch(b){Oe(e,e.return,b)}}if(r&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,a=n!==null?n.memoizedProps:s,o=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&z0(i,s),ud(o,a);var u=ud(o,s);for(a=0;a<l.length;a+=2){var d=l[a],f=l[a+1];d==="style"?H0(i,f):d==="dangerouslySetInnerHTML"?V0(i,f):d==="children"?oa(i,f):Uf(i,d,f,u)}switch(o){case"input":id(i,s);break;case"textarea":U0(i,s);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var h=s.value;h!=null?Di(i,!!s.multiple,h,!1):p!==!!s.multiple&&(s.defaultValue!=null?Di(i,!!s.multiple,s.defaultValue,!0):Di(i,!!s.multiple,s.multiple?[]:"",!1))}i[ga]=s}catch(b){Oe(e,e.return,b)}}break;case 6:if(Kt(t,e),fn(e),r&4){if(e.stateNode===null)throw Error(F(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(b){Oe(e,e.return,b)}}break;case 3:if(Kt(t,e),fn(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{da(t.containerInfo)}catch(b){Oe(e,e.return,b)}break;case 4:Kt(t,e),fn(e);break;case 13:Kt(t,e),fn(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(vp=Ue())),r&4&&lg(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(it=(u=it)||d,Kt(t,e),it=u):Kt(t,e),fn(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(W=e,d=e.child;d!==null;){for(f=W=d;W!==null;){switch(p=W,h=p.child,p.tag){case 0:case 11:case 14:case 15:qs(4,p,p.return);break;case 1:_i(p,p.return);var x=p.stateNode;if(typeof x.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,x.props=t.memoizedProps,x.state=t.memoizedState,x.componentWillUnmount()}catch(b){Oe(r,n,b)}}break;case 5:_i(p,p.return);break;case 22:if(p.memoizedState!==null){cg(f);continue}}h!==null?(h.return=p,W=h):cg(f)}d=d.sibling}e:for(d=null,f=e;;){if(f.tag===5){if(d===null){d=f;try{i=f.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=f.stateNode,l=f.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=$0("display",a))}catch(b){Oe(e,e.return,b)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(b){Oe(e,e.return,b)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Kt(t,e),fn(e),r&4&&lg(e);break;case 21:break;default:Kt(t,e),fn(e)}}function fn(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(m1(n)){var r=n;break e}n=n.return}throw Error(F(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(oa(i,""),r.flags&=-33);var s=og(e);zd(e,s,i);break;case 3:case 4:var a=r.stateNode.containerInfo,o=og(e);Od(e,o,a);break;default:throw Error(F(161))}}catch(l){Oe(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function sC(e,t,n){W=e,x1(e)}function x1(e,t,n){for(var r=(e.mode&1)!==0;W!==null;){var i=W,s=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||vo;if(!a){var o=i.alternate,l=o!==null&&o.memoizedState!==null||it;o=vo;var u=it;if(vo=a,(it=l)&&!u)for(W=i;W!==null;)a=W,l=a.child,a.tag===22&&a.memoizedState!==null?dg(i):l!==null?(l.return=a,W=l):dg(i);for(;s!==null;)W=s,x1(s),s=s.sibling;W=i,vo=o,it=u}ug(e)}else i.subtreeFlags&8772&&s!==null?(s.return=i,W=s):ug(e)}}function ug(e){for(;W!==null;){var t=W;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:it||uu(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!it)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Qt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&qm(t,s,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}qm(t,a,n)}break;case 5:var o=t.stateNode;if(n===null&&t.flags&4){n=o;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&da(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(F(163))}it||t.flags&512&&Fd(t)}catch(p){Oe(t,t.return,p)}}if(t===e){W=null;break}if(n=t.sibling,n!==null){n.return=t.return,W=n;break}W=t.return}}function cg(e){for(;W!==null;){var t=W;if(t===e){W=null;break}var n=t.sibling;if(n!==null){n.return=t.return,W=n;break}W=t.return}}function dg(e){for(;W!==null;){var t=W;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{uu(4,t)}catch(l){Oe(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){Oe(t,i,l)}}var s=t.return;try{Fd(t)}catch(l){Oe(t,s,l)}break;case 5:var a=t.return;try{Fd(t)}catch(l){Oe(t,a,l)}}}catch(l){Oe(t,t.return,l)}if(t===e){W=null;break}var o=t.sibling;if(o!==null){o.return=t.return,W=o;break}W=t.return}}var aC=Math.ceil,Cl=Yn.ReactCurrentDispatcher,yp=Yn.ReactCurrentOwner,$t=Yn.ReactCurrentBatchConfig,me=0,Ke=null,Ve=null,Ze=0,_t=0,Ai=_r(0),We=0,ka=null,si=0,cu=0,xp=0,Ks=null,yt=null,vp=0,Zi=1/0,Nn=null,Tl=!1,Ud=null,yr=null,bo=!1,cr=null,_l=0,Ys=0,Bd=null,Ho=-1,Wo=0;function ft(){return me&6?Ue():Ho!==-1?Ho:Ho=Ue()}function xr(e){return e.mode&1?me&2&&Ze!==0?Ze&-Ze:$E.transition!==null?(Wo===0&&(Wo=nv()),Wo):(e=ve,e!==0||(e=window.event,e=e===void 0?16:uv(e.type)),e):1}function rn(e,t,n,r){if(50<Ys)throw Ys=0,Bd=null,Error(F(185));za(e,n,r),(!(me&2)||e!==Ke)&&(e===Ke&&(!(me&2)&&(cu|=n),We===4&&sr(e,Ze)),wt(e,r),n===1&&me===0&&!(t.mode&1)&&(Zi=Ue()+500,au&&Ar()))}function wt(e,t){var n=e.callbackNode;$S(e,t);var r=cl(e,e===Ke?Ze:0);if(r===0)n!==null&&bm(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&bm(n),t===1)e.tag===0?VE(fg.bind(null,e)):Av(fg.bind(null,e)),OE(function(){!(me&6)&&Ar()}),n=null;else{switch(rv(r)){case 1:n=Wf;break;case 4:n=ev;break;case 16:n=ul;break;case 536870912:n=tv;break;default:n=ul}n=T1(n,v1.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function v1(e,t){if(Ho=-1,Wo=0,me&6)throw Error(F(327));var n=e.callbackNode;if(Ui()&&e.callbackNode!==n)return null;var r=cl(e,e===Ke?Ze:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Al(e,r);else{t=r;var i=me;me|=2;var s=w1();(Ke!==e||Ze!==t)&&(Nn=null,Zi=Ue()+500,Xr(e,t));do try{uC();break}catch(o){b1(e,o)}while(!0);ip(),Cl.current=s,me=i,Ve!==null?t=0:(Ke=null,Ze=0,t=We)}if(t!==0){if(t===2&&(i=hd(e),i!==0&&(r=i,t=Vd(e,i))),t===1)throw n=ka,Xr(e,0),sr(e,r),wt(e,Ue()),n;if(t===6)sr(e,r);else{if(i=e.current.alternate,!(r&30)&&!oC(i)&&(t=Al(e,r),t===2&&(s=hd(e),s!==0&&(r=s,t=Vd(e,s))),t===1))throw n=ka,Xr(e,0),sr(e,r),wt(e,Ue()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(F(345));case 2:Fr(e,yt,Nn);break;case 3:if(sr(e,r),(r&130023424)===r&&(t=vp+500-Ue(),10<t)){if(cl(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){ft(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=kd(Fr.bind(null,e,yt,Nn),t);break}Fr(e,yt,Nn);break;case 4:if(sr(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-nn(r);s=1<<a,a=t[a],a>i&&(i=a),r&=~s}if(r=i,r=Ue()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*aC(r/1960))-r,10<r){e.timeoutHandle=kd(Fr.bind(null,e,yt,Nn),r);break}Fr(e,yt,Nn);break;case 5:Fr(e,yt,Nn);break;default:throw Error(F(329))}}}return wt(e,Ue()),e.callbackNode===n?v1.bind(null,e):null}function Vd(e,t){var n=Ks;return e.current.memoizedState.isDehydrated&&(Xr(e,t).flags|=256),e=Al(e,t),e!==2&&(t=yt,yt=n,t!==null&&$d(t)),e}function $d(e){yt===null?yt=e:yt.push.apply(yt,e)}function oC(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!un(s(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function sr(e,t){for(t&=~xp,t&=~cu,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-nn(t),r=1<<n;e[n]=-1,t&=~r}}function fg(e){if(me&6)throw Error(F(327));Ui();var t=cl(e,0);if(!(t&1))return wt(e,Ue()),null;var n=Al(e,t);if(e.tag!==0&&n===2){var r=hd(e);r!==0&&(t=r,n=Vd(e,r))}if(n===1)throw n=ka,Xr(e,0),sr(e,t),wt(e,Ue()),n;if(n===6)throw Error(F(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Fr(e,yt,Nn),wt(e,Ue()),null}function bp(e,t){var n=me;me|=1;try{return e(t)}finally{me=n,me===0&&(Zi=Ue()+500,au&&Ar())}}function ai(e){cr!==null&&cr.tag===0&&!(me&6)&&Ui();var t=me;me|=1;var n=$t.transition,r=ve;try{if($t.transition=null,ve=1,e)return e()}finally{ve=r,$t.transition=n,me=t,!(me&6)&&Ar()}}function wp(){_t=Ai.current,_e(Ai)}function Xr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,FE(n)),Ve!==null)for(n=Ve.return;n!==null;){var r=n;switch(tp(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ml();break;case 3:Xi(),_e(vt),_e(lt),cp();break;case 5:up(r);break;case 4:Xi();break;case 13:_e(je);break;case 19:_e(je);break;case 10:sp(r.type._context);break;case 22:case 23:wp()}n=n.return}if(Ke=e,Ve=e=vr(e.current,null),Ze=_t=t,We=0,ka=null,xp=cu=si=0,yt=Ks=null,Wr!==null){for(t=0;t<Wr.length;t++)if(n=Wr[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var a=s.next;s.next=i,r.next=a}n.pending=r}Wr=null}return e}function b1(e,t){do{var n=Ve;try{if(ip(),Bo.current=El,Sl){for(var r=Le.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Sl=!1}if(ii=0,qe=He=Le=null,Gs=!1,va=0,yp.current=null,n===null||n.return===null){We=1,ka=t,Ve=null;break}e:{var s=e,a=n.return,o=n,l=t;if(t=Ze,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,d=o,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var p=d.alternate;p?(d.updateQueue=p.updateQueue,d.memoizedState=p.memoizedState,d.lanes=p.lanes):(d.updateQueue=null,d.memoizedState=null)}var h=Jm(a);if(h!==null){h.flags&=-257,eg(h,a,o,s,t),h.mode&1&&Zm(s,u,t),t=h,l=u;var x=t.updateQueue;if(x===null){var b=new Set;b.add(l),t.updateQueue=b}else x.add(l);break e}else{if(!(t&1)){Zm(s,u,t),kp();break e}l=Error(F(426))}}else if(Ie&&o.mode&1){var k=Jm(a);if(k!==null){!(k.flags&65536)&&(k.flags|=256),eg(k,a,o,s,t),np(Qi(l,o));break e}}s=l=Qi(l,o),We!==4&&(We=2),Ks===null?Ks=[s]:Ks.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var g=r1(s,l,t);Gm(s,g);break e;case 1:o=l;var m=s.type,y=s.stateNode;if(!(s.flags&128)&&(typeof m.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(yr===null||!yr.has(y)))){s.flags|=65536,t&=-t,s.lanes|=t;var v=i1(s,o,t);Gm(s,v);break e}}s=s.return}while(s!==null)}S1(n)}catch(E){t=E,Ve===n&&n!==null&&(Ve=n=n.return);continue}break}while(!0)}function w1(){var e=Cl.current;return Cl.current=El,e===null?El:e}function kp(){(We===0||We===3||We===2)&&(We=4),Ke===null||!(si&268435455)&&!(cu&268435455)||sr(Ke,Ze)}function Al(e,t){var n=me;me|=2;var r=w1();(Ke!==e||Ze!==t)&&(Nn=null,Xr(e,t));do try{lC();break}catch(i){b1(e,i)}while(!0);if(ip(),me=n,Cl.current=r,Ve!==null)throw Error(F(261));return Ke=null,Ze=0,We}function lC(){for(;Ve!==null;)k1(Ve)}function uC(){for(;Ve!==null&&!LS();)k1(Ve)}function k1(e){var t=C1(e.alternate,e,_t);e.memoizedProps=e.pendingProps,t===null?S1(e):Ve=t,yp.current=null}function S1(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=nC(n,t),n!==null){n.flags&=32767,Ve=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{We=6,Ve=null;return}}else if(n=tC(n,t,_t),n!==null){Ve=n;return}if(t=t.sibling,t!==null){Ve=t;return}Ve=t=e}while(t!==null);We===0&&(We=5)}function Fr(e,t,n){var r=ve,i=$t.transition;try{$t.transition=null,ve=1,cC(e,t,n,r)}finally{$t.transition=i,ve=r}return null}function cC(e,t,n,r){do Ui();while(cr!==null);if(me&6)throw Error(F(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(F(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(HS(e,s),e===Ke&&(Ve=Ke=null,Ze=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||bo||(bo=!0,T1(ul,function(){return Ui(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=$t.transition,$t.transition=null;var a=ve;ve=1;var o=me;me|=4,yp.current=null,iC(e,n),y1(n,e),NE(bd),dl=!!vd,bd=vd=null,e.current=n,sC(n),DS(),me=o,ve=a,$t.transition=s}else e.current=n;if(bo&&(bo=!1,cr=e,_l=i),s=e.pendingLanes,s===0&&(yr=null),OS(n.stateNode),wt(e,Ue()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Tl)throw Tl=!1,e=Ud,Ud=null,e;return _l&1&&e.tag!==0&&Ui(),s=e.pendingLanes,s&1?e===Bd?Ys++:(Ys=0,Bd=e):Ys=0,Ar(),null}function Ui(){if(cr!==null){var e=rv(_l),t=$t.transition,n=ve;try{if($t.transition=null,ve=16>e?16:e,cr===null)var r=!1;else{if(e=cr,cr=null,_l=0,me&6)throw Error(F(331));var i=me;for(me|=4,W=e.current;W!==null;){var s=W,a=s.child;if(W.flags&16){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var u=o[l];for(W=u;W!==null;){var d=W;switch(d.tag){case 0:case 11:case 15:qs(8,d,s)}var f=d.child;if(f!==null)f.return=d,W=f;else for(;W!==null;){d=W;var p=d.sibling,h=d.return;if(h1(d),d===u){W=null;break}if(p!==null){p.return=h,W=p;break}W=h}}}var x=s.alternate;if(x!==null){var b=x.child;if(b!==null){x.child=null;do{var k=b.sibling;b.sibling=null,b=k}while(b!==null)}}W=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,W=a;else e:for(;W!==null;){if(s=W,s.flags&2048)switch(s.tag){case 0:case 11:case 15:qs(9,s,s.return)}var g=s.sibling;if(g!==null){g.return=s.return,W=g;break e}W=s.return}}var m=e.current;for(W=m;W!==null;){a=W;var y=a.child;if(a.subtreeFlags&2064&&y!==null)y.return=a,W=y;else e:for(a=m;W!==null;){if(o=W,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:uu(9,o)}}catch(E){Oe(o,o.return,E)}if(o===a){W=null;break e}var v=o.sibling;if(v!==null){v.return=o.return,W=v;break e}W=o.return}}if(me=i,Ar(),yn&&typeof yn.onPostCommitFiberRoot=="function")try{yn.onPostCommitFiberRoot(tu,e)}catch{}r=!0}return r}finally{ve=n,$t.transition=t}}return!1}function pg(e,t,n){t=Qi(n,t),t=r1(e,t,1),e=gr(e,t,1),t=ft(),e!==null&&(za(e,1,t),wt(e,t))}function Oe(e,t,n){if(e.tag===3)pg(e,e,n);else for(;t!==null;){if(t.tag===3){pg(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(yr===null||!yr.has(r))){e=Qi(n,e),e=i1(t,e,1),t=gr(t,e,1),e=ft(),t!==null&&(za(t,1,e),wt(t,e));break}}t=t.return}}function dC(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ft(),e.pingedLanes|=e.suspendedLanes&n,Ke===e&&(Ze&n)===n&&(We===4||We===3&&(Ze&130023424)===Ze&&500>Ue()-vp?Xr(e,0):xp|=n),wt(e,t)}function E1(e,t){t===0&&(e.mode&1?(t=uo,uo<<=1,!(uo&130023424)&&(uo=4194304)):t=1);var n=ft();e=$n(e,t),e!==null&&(za(e,t,n),wt(e,n))}function fC(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),E1(e,n)}function pC(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(F(314))}r!==null&&r.delete(t),E1(e,n)}var C1;C1=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||vt.current)xt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return xt=!1,eC(e,t,n);xt=!!(e.flags&131072)}else xt=!1,Ie&&t.flags&1048576&&Iv(t,xl,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;$o(e,t),e=t.pendingProps;var i=qi(t,lt.current);zi(t,n),i=fp(null,t,r,e,i,n);var s=pp();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,bt(r)?(s=!0,gl(t)):s=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,op(t),i.updater=lu,t.stateNode=i,i._reactInternals=t,Id(t,r,e,n),t=jd(null,t,r,!0,s,n)):(t.tag=0,Ie&&s&&ep(t),ct(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch($o(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=mC(r),e=Qt(r,e),i){case 0:t=Pd(null,t,r,e,n);break e;case 1:t=rg(null,t,r,e,n);break e;case 11:t=tg(null,t,r,e,n);break e;case 14:t=ng(null,t,r,Qt(r.type,e),n);break e}throw Error(F(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Qt(r,i),Pd(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Qt(r,i),rg(e,t,r,i,n);case 3:e:{if(l1(t),e===null)throw Error(F(387));r=t.pendingProps,s=t.memoizedState,i=s.element,Dv(e,t),wl(t,r,null,n);var a=t.memoizedState;if(r=a.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){i=Qi(Error(F(423)),t),t=ig(e,t,r,n,i);break e}else if(r!==i){i=Qi(Error(F(424)),t),t=ig(e,t,r,n,i);break e}else for(At=mr(t.stateNode.containerInfo.firstChild),Nt=t,Ie=!0,Jt=null,n=Rv(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ki(),r===i){t=Hn(e,t,n);break e}ct(e,t,r,n)}t=t.child}return t;case 5:return Mv(t),e===null&&Td(t),r=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,a=i.children,wd(r,i)?a=null:s!==null&&wd(r,s)&&(t.flags|=32),o1(e,t),ct(e,t,a,n),t.child;case 6:return e===null&&Td(t),null;case 13:return u1(e,t,n);case 4:return lp(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Yi(t,null,r,n):ct(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Qt(r,i),tg(e,t,r,i,n);case 7:return ct(e,t,t.pendingProps,n),t.child;case 8:return ct(e,t,t.pendingProps.children,n),t.child;case 12:return ct(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,s=t.memoizedProps,a=i.value,Ce(vl,r._currentValue),r._currentValue=a,s!==null)if(un(s.value,a)){if(s.children===i.children&&!vt.current){t=Hn(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=On(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?l.next=l:(l.next=d.next,d.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),_d(s.return,n,t),o.lanes|=n;break}l=l.next}}else if(s.tag===10)a=s.type===t.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(F(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),_d(a,n,t),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===t){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}ct(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,zi(t,n),i=Ht(i),r=r(i),t.flags|=1,ct(e,t,r,n),t.child;case 14:return r=t.type,i=Qt(r,t.pendingProps),i=Qt(r.type,i),ng(e,t,r,i,n);case 15:return s1(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Qt(r,i),$o(e,t),t.tag=1,bt(r)?(e=!0,gl(t)):e=!1,zi(t,n),n1(t,r,i),Id(t,r,i,n),jd(null,t,r,!0,e,n);case 19:return c1(e,t,n);case 22:return a1(e,t,n)}throw Error(F(156,t.tag))};function T1(e,t){return J0(e,t)}function hC(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Vt(e,t,n,r){return new hC(e,t,n,r)}function Sp(e){return e=e.prototype,!(!e||!e.isReactComponent)}function mC(e){if(typeof e=="function")return Sp(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Vf)return 11;if(e===$f)return 14}return 2}function vr(e,t){var n=e.alternate;return n===null?(n=Vt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Go(e,t,n,r,i,s){var a=2;if(r=e,typeof e=="function")Sp(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case xi:return Qr(n.children,i,s,t);case Bf:a=8,i|=8;break;case Jc:return e=Vt(12,n,t,i|2),e.elementType=Jc,e.lanes=s,e;case ed:return e=Vt(13,n,t,i),e.elementType=ed,e.lanes=s,e;case td:return e=Vt(19,n,t,i),e.elementType=td,e.lanes=s,e;case M0:return du(n,i,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case L0:a=10;break e;case D0:a=9;break e;case Vf:a=11;break e;case $f:a=14;break e;case tr:a=16,r=null;break e}throw Error(F(130,e==null?e:typeof e,""))}return t=Vt(a,n,t,i),t.elementType=e,t.type=r,t.lanes=s,t}function Qr(e,t,n,r){return e=Vt(7,e,r,t),e.lanes=n,e}function du(e,t,n,r){return e=Vt(22,e,r,t),e.elementType=M0,e.lanes=n,e.stateNode={isHidden:!1},e}function oc(e,t,n){return e=Vt(6,e,null,t),e.lanes=n,e}function lc(e,t,n){return t=Vt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function gC(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Vu(0),this.expirationTimes=Vu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Vu(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Ep(e,t,n,r,i,s,a,o,l){return e=new gC(e,t,n,o,l),t===1?(t=1,s===!0&&(t|=8)):t=0,s=Vt(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},op(s),e}function yC(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:yi,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function _1(e){if(!e)return Sr;e=e._reactInternals;e:{if(di(e)!==e||e.tag!==1)throw Error(F(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(bt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(F(171))}if(e.tag===1){var n=e.type;if(bt(n))return _v(e,n,t)}return t}function A1(e,t,n,r,i,s,a,o,l){return e=Ep(n,r,!0,e,i,s,a,o,l),e.context=_1(null),n=e.current,r=ft(),i=xr(n),s=On(r,i),s.callback=t??null,gr(n,s,i),e.current.lanes=i,za(e,i,r),wt(e,r),e}function fu(e,t,n,r){var i=t.current,s=ft(),a=xr(i);return n=_1(n),t.context===null?t.context=n:t.pendingContext=n,t=On(s,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=gr(i,t,a),e!==null&&(rn(e,i,a,s),Uo(e,i,a)),a}function Il(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function hg(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Cp(e,t){hg(e,t),(e=e.alternate)&&hg(e,t)}function xC(){return null}var I1=typeof reportError=="function"?reportError:function(e){console.error(e)};function Tp(e){this._internalRoot=e}pu.prototype.render=Tp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(F(409));fu(e,t,null,null)};pu.prototype.unmount=Tp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;ai(function(){fu(null,e,null,null)}),t[Vn]=null}};function pu(e){this._internalRoot=e}pu.prototype.unstable_scheduleHydration=function(e){if(e){var t=av();e={blockedOn:null,target:e,priority:t};for(var n=0;n<ir.length&&t!==0&&t<ir[n].priority;n++);ir.splice(n,0,e),n===0&&lv(e)}};function _p(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function hu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function mg(){}function vC(e,t,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Il(a);s.call(u)}}var a=A1(t,r,e,0,null,!1,!1,"",mg);return e._reactRootContainer=a,e[Vn]=a.current,ha(e.nodeType===8?e.parentNode:e),ai(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var o=r;r=function(){var u=Il(l);o.call(u)}}var l=Ep(e,0,!1,null,null,!1,!1,"",mg);return e._reactRootContainer=l,e[Vn]=l.current,ha(e.nodeType===8?e.parentNode:e),ai(function(){fu(t,l,n,r)}),l}function mu(e,t,n,r,i){var s=n._reactRootContainer;if(s){var a=s;if(typeof i=="function"){var o=i;i=function(){var l=Il(a);o.call(l)}}fu(t,a,e,i)}else a=vC(n,t,e,i,r);return Il(a)}iv=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Ls(t.pendingLanes);n!==0&&(Gf(t,n|1),wt(t,Ue()),!(me&6)&&(Zi=Ue()+500,Ar()))}break;case 13:ai(function(){var r=$n(e,1);if(r!==null){var i=ft();rn(r,e,1,i)}}),Cp(e,1)}};qf=function(e){if(e.tag===13){var t=$n(e,134217728);if(t!==null){var n=ft();rn(t,e,134217728,n)}Cp(e,134217728)}};sv=function(e){if(e.tag===13){var t=xr(e),n=$n(e,t);if(n!==null){var r=ft();rn(n,e,t,r)}Cp(e,t)}};av=function(){return ve};ov=function(e,t){var n=ve;try{return ve=e,t()}finally{ve=n}};dd=function(e,t,n){switch(t){case"input":if(id(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=su(r);if(!i)throw Error(F(90));O0(r),id(r,i)}}}break;case"textarea":U0(e,n);break;case"select":t=n.value,t!=null&&Di(e,!!n.multiple,t,!1)}};q0=bp;K0=ai;var bC={usingClientEntryPoint:!1,Events:[Ba,ki,su,W0,G0,bp]},_s={findFiberByHostInstance:Hr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},wC={bundleType:_s.bundleType,version:_s.version,rendererPackageName:_s.rendererPackageName,rendererConfig:_s.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Yn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Q0(e),e===null?null:e.stateNode},findFiberByHostInstance:_s.findFiberByHostInstance||xC,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var wo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!wo.isDisabled&&wo.supportsFiber)try{tu=wo.inject(wC),yn=wo}catch{}}Lt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=bC;Lt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!_p(t))throw Error(F(200));return yC(e,t,null,n)};Lt.createRoot=function(e,t){if(!_p(e))throw Error(F(299));var n=!1,r="",i=I1;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Ep(e,1,!1,null,null,n,!1,r,i),e[Vn]=t.current,ha(e.nodeType===8?e.parentNode:e),new Tp(t)};Lt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(F(188)):(e=Object.keys(e).join(","),Error(F(268,e)));return e=Q0(t),e=e===null?null:e.stateNode,e};Lt.flushSync=function(e){return ai(e)};Lt.hydrate=function(e,t,n){if(!hu(t))throw Error(F(200));return mu(null,e,t,!0,n)};Lt.hydrateRoot=function(e,t,n){if(!_p(e))throw Error(F(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",a=I1;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=A1(t,null,e,1,n??null,i,!1,s,a),e[Vn]=t.current,ha(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new pu(t)};Lt.render=function(e,t,n){if(!hu(t))throw Error(F(200));return mu(null,e,t,!1,n)};Lt.unmountComponentAtNode=function(e){if(!hu(e))throw Error(F(40));return e._reactRootContainer?(ai(function(){mu(null,null,e,!1,function(){e._reactRootContainer=null,e[Vn]=null})}),!0):!1};Lt.unstable_batchedUpdates=bp;Lt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!hu(n))throw Error(F(200));if(e==null||e._reactInternals===void 0)throw Error(F(38));return mu(e,t,n,!1,r)};Lt.version="18.3.1-next-f1338f8080-20240426";function N1(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(N1)}catch(e){console.error(e)}}N1(),N0.exports=Lt;var kC=N0.exports,P1,gg=kC;P1=gg.createRoot,gg.hydrateRoot;/**
 * react-router v7.18.5
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Ap=/^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i,j1=/^[\\/]{2}/;function SC(e,t){return t+e.replace(/\\/g,"/")}var yg="popstate";function xg(e){return typeof e=="object"&&e!=null&&"pathname"in e&&"search"in e&&"hash"in e&&"state"in e&&"key"in e}function EC(e={}){function t(r,i){var u;let s=(u=i.state)==null?void 0:u.masked,{pathname:a,search:o,hash:l}=s||r.location;return Hd("",{pathname:a,search:o,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default",s?{pathname:r.location.pathname,search:r.location.search,hash:r.location.hash}:void 0)}function n(r,i){return typeof i=="string"?i:oi(i)}return TC(t,n,null,e)}function Ne(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function cn(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function CC(){return Math.random().toString(36).substring(2,10)}function vg(e,t){return{usr:e.state,key:e.key,idx:t,masked:e.mask?{pathname:e.pathname,search:e.search,hash:e.hash}:void 0}}function Hd(e,t,n=null,r,i){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof t=="string"?ds(t):t,state:n,key:t&&t.key||r||CC(),mask:i}}function oi({pathname:e="/",search:t="",hash:n=""}){return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),n&&n!=="#"&&(e+=n.charAt(0)==="#"?n:"#"+n),e}function ds(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substring(r),e=e.substring(0,r)),e&&(t.pathname=e)}return t}function TC(e,t,n,r={}){let{window:i=document.defaultView,v5Compat:s=!1}=r,a=i.history,o="POP",l=null,u=d();u==null&&(u=0,a.replaceState({...a.state,idx:u},""));function d(){return(a.state||{idx:null}).idx}function f(){o="POP";let k=d(),g=k==null?null:k-u;u=k,l&&l({action:o,location:b.location,delta:g})}function p(k,g){o="PUSH";let m=xg(k)?k:Hd(b.location,k,g);u=d()+1;let y=vg(m,u),v=b.createHref(m.mask||m);try{a.pushState(y,"",v)}catch(E){if(E instanceof DOMException&&E.name==="DataCloneError")throw E;i.location.assign(v)}s&&l&&l({action:o,location:b.location,delta:1})}function h(k,g){o="REPLACE";let m=xg(k)?k:Hd(b.location,k,g);u=d();let y=vg(m,u),v=b.createHref(m.mask||m);a.replaceState(y,"",v),s&&l&&l({action:o,location:b.location,delta:0})}function x(k){return _C(i,k)}let b={get action(){return o},get location(){return e(i,a)},listen(k){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(yg,f),l=k,()=>{i.removeEventListener(yg,f),l=null}},createHref(k){return t(i,k)},createURL:x,encodeLocation(k){let g=x(k);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:p,replace:h,go(k){return a.go(k)}};return b}function _C(e,t,n=!1){let r="http://localhost";e&&(r=e.location.origin!=="null"?e.location.origin:e.location.href),Ne(r,"No window.location.(origin|href) available to create URL");let i=typeof t=="string"?t:oi(t);return i=i.replace(/ $/,"%20"),!n&&j1.test(i)&&(i=r+i),new URL(i,r)}function R1(e,t,n="/"){return AC(e,t,n,!1)}function AC(e,t,n,r,i){let s=typeof t=="string"?ds(t):t,a=Wn(s.pathname||"/",n);if(a==null)return null;let o=IC(e),l=null,u=UC(a);for(let d=0;l==null&&d<o.length;++d)l=zC(o[d],u,r);return l}function IC(e){let t=L1(e);return NC(t),t}function L1(e,t=[],n=[],r="",i=!1){let s=(a,o,l=i,u)=>{let d={relativePath:u===void 0?a.path||"":u,caseSensitive:a.caseSensitive===!0,childrenIndex:o,route:a};if(d.relativePath.startsWith("/")){if(!d.relativePath.startsWith(r)&&l)return;Ne(d.relativePath.startsWith(r),`Absolute route path "${d.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),d.relativePath=d.relativePath.slice(r.length)}let f=sn([r,d.relativePath]),p=n.concat(d);a.children&&a.children.length>0&&(Ne(a.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${f}".`),L1(a.children,t,p,f,l)),!(a.path==null&&!a.index)&&t.push({path:f,score:FC(f,a.index),routesMeta:p.map((h,x)=>{let[b,k]=F1(h.relativePath,h.caseSensitive,x===p.length-1);return{...h,matcher:b,compiledParams:k}})})};return e.forEach((a,o)=>{var l;if(a.path===""||!((l=a.path)!=null&&l.includes("?")))s(a,o);else for(let u of D1(a.path))s(a,o,!0,u)}),t}function D1(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let a=D1(r.join("/")),o=[];return o.push(...a.map(l=>l===""?s:[s,l].join("/"))),i&&o.push(...a),o.map(l=>e.startsWith("/")&&l===""?"/":l)}function NC(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:OC(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}var PC=/^:[\w-]+$/,jC=3,RC=2,LC=1,DC=10,MC=-2,bg=e=>e==="*";function FC(e,t){let n=e.split("/"),r=n.length;return n.some(bg)&&(r+=MC),t&&(r+=RC),n.filter(i=>!bg(i)).reduce((i,s)=>i+(PC.test(s)?jC:s===""?LC:DC),r)}function OC(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function zC(e,t,n=!1){let{routesMeta:r}=e,i={},s="/",a=[];for(let o=0;o<r.length;++o){let l=r[o],u=o===r.length-1,d=s==="/"?t:t.slice(s.length)||"/",f={path:l.relativePath,caseSensitive:l.caseSensitive,end:u},p=l.matcher&&l.compiledParams?M1(f,d,l.matcher,l.compiledParams):Nl(f,d),h=l.route;if(!p&&u&&n&&!r[r.length-1].route.index&&(p=Nl({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},d)),!p)return null;Object.assign(i,p.params),a.push({params:i,pathname:sn([s,p.pathname]),pathnameBase:$C(sn([s,p.pathnameBase])),route:h}),p.pathnameBase!=="/"&&(s=sn([s,p.pathnameBase]))}return a}function Nl(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=F1(e.path,e.caseSensitive,e.end);return M1(e,t,n,r)}function M1(e,t,n,r){let i=t.match(n);if(!i)return null;let s=i[0],a=Ji(s,1),o=i.slice(1);return{params:r.reduce((u,{paramName:d,isOptional:f},p)=>{if(d==="*"){let x=o[p]||"";a=Ji(s.slice(0,s.length-x.length),1)}const h=o[p];return f&&!h?u[d]=void 0:u[d]=(h||"").replace(/%2F/g,"/"),u},{}),pathname:s,pathnameBase:a,pattern:e}}function F1(e,t=!1,n=!0){cn(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,o,l,u,d)=>{if(r.push({paramName:o,isOptional:l!=null}),l){let f=d.charAt(u+a.length);return f&&f!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function UC(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return cn(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function Wn(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function BC(e,t="/"){let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?ds(e):e,s;return n?(n=O1(n),n.startsWith("/")||n.startsWith("\\")?s=wg(n.substring(1),"/"):s=wg(n,t)):s=t,{pathname:s,search:HC(r),hash:WC(i)}}function wg(e,t){let n=Ji(t).split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function uc(e,t,n,r){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function VC(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Ip(e){let t=VC(e);return t.map((n,r)=>r===t.length-1?n.pathname:n.pathnameBase)}function gu(e,t,n,r=!1){let i;typeof e=="string"?i=ds(e):(i={...e},Ne(!i.pathname||!i.pathname.includes("?"),uc("?","pathname","search",i)),Ne(!i.pathname||!i.pathname.includes("#"),uc("#","pathname","hash",i)),Ne(!i.search||!i.search.includes("#"),uc("#","search","hash",i)));let s=e===""||i.pathname==="",a=s?"/":i.pathname,o;if(a==null)o=n;else{let f=t.length-1;if(!r&&a.startsWith("..")){let p=a.split("/");for(;p[0]==="..";)p.shift(),f-=1;i.pathname=p.join("/")}o=f>=0?t[f]:"/"}let l=BC(i,o),u=a&&a!=="/"&&a.endsWith("/"),d=(s||a===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||d)&&(l.pathname+="/"),l}var O1=e=>e.replace(/[\\/]{2,}/g,"/"),sn=e=>O1(e.join("/"));function Ji(e,t=0){let n=e.length;for(;n>t&&e.charCodeAt(n-1)===47;)n--;return n===e.length?e:e.slice(0,n)}var $C=e=>Ji(e).replace(/^\/*/,"/"),HC=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,WC=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e,GC=class{constructor(e,t,n,r=!1){this.status=e,this.statusText=t||"",this.internal=r,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}};function qC(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}function KC(e){let t=e.map(n=>n.route.path).filter(Boolean);return sn(t)||"/"}var z1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function U1(e,t){let n=e;if(typeof n!="string"||!Ap.test(n))return{absoluteURL:void 0,isExternal:!1,to:n};let r=n,i=!1;if(z1)try{let s=new URL(window.location.href),a=j1.test(n)?new URL(SC(n,s.protocol)):new URL(n),o=Wn(a.pathname,t);a.origin===s.origin&&o!=null?n=o+a.search+a.hash:i=!0}catch{cn(!1,`<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:i,to:n}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var kg=new URL("http://localhost");function Np(e){if(e.createURL)return e.createURL("/");try{return new URL(e.createHref("/"),kg)}catch{return kg}}function cc(e,t){return e.origin===t.origin&&(e.origin!=="null"||e.protocol===t.protocol&&e.host===t.host)}function YC(e,t){if(e.startsWith("//"))return!0;let n=t.protocol.toLowerCase();return e.toLowerCase().startsWith(n)?t.host===""||e.slice(n.length).startsWith("//"):!1}function Pp(e,t,n,r){let i=null;try{i=e==null?null:new URL(e,n)}catch{}let s=new URL(t,n),a=i!=null&&!cc(i,n),o=!cc(s,n);if(r==="reject"){if(a||o)throw new Error("External navigation is not allowed")}else if(o&&(i==null||!YC(e,i)||!cc(i,s)))throw new Error("External navigation is not allowed")}var B1=["POST","PUT","PATCH","DELETE"];new Set(B1);var XC=["GET",...B1];new Set(XC);var QC=["about:","blob:","chrome:","chrome-untrusted:","content:","data:","devtools:","file:","filesystem:","javascript:"];function ZC(e){try{return QC.includes(new URL(e).protocol)}catch{return!1}}var fs=C.createContext(null);fs.displayName="DataRouter";var yu=C.createContext(null);yu.displayName="DataRouterState";var V1=C.createContext(!1);function JC(){return C.useContext(V1)}var $1=C.createContext({isTransitioning:!1});$1.displayName="ViewTransition";var eT=C.createContext(new Map);eT.displayName="Fetchers";var tT=C.createContext(null);tT.displayName="Await";var Mt=C.createContext(null);Mt.displayName="Navigation";var $a=C.createContext(null);$a.displayName="Location";var Sn=C.createContext({outlet:null,matches:[],isDataRoute:!1});Sn.displayName="Route";var jp=C.createContext(null);jp.displayName="RouteError";var H1="REACT_ROUTER_ERROR",nT="REDIRECT",rT="ROUTE_ERROR_RESPONSE";function iT(e){if(e.startsWith(`${H1}:${nT}:{`))try{let t=JSON.parse(e.slice(28));if(typeof t=="object"&&t&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.location=="string"&&typeof t.reloadDocument=="boolean"&&typeof t.replace=="boolean")return t}catch{}}function sT(e){if(e.startsWith(`${H1}:${rT}:{`))try{let t=JSON.parse(e.slice(40));if(typeof t=="object"&&t&&typeof t.status=="number"&&typeof t.statusText=="string")return new GC(t.status,t.statusText,t.data)}catch{}}function aT(e,{relative:t}={}){Ne(ps(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:r}=C.useContext(Mt),{hash:i,pathname:s,search:a}=Ha(e,{relative:t}),o=s;return n!=="/"&&(o=s==="/"?n:sn([n,s])),r.createHref({pathname:o,search:a,hash:i})}function ps(){return C.useContext($a)!=null}function dn(){return Ne(ps(),"useLocation() may be used only in the context of a <Router> component."),C.useContext($a).location}var W1="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function G1(e){C.useContext(Mt).static||C.useLayoutEffect(e)}function xu(){let{isDataRoute:e}=C.useContext(Sn);return e?vT():oT()}function oT(){Ne(ps(),"useNavigate() may be used only in the context of a <Router> component.");let e=C.useContext(fs),{basename:t,navigator:n}=C.useContext(Mt),{matches:r}=C.useContext(Sn),{pathname:i}=dn(),s=JSON.stringify(Ip(r)),a=C.useRef(!1);return G1(()=>{a.current=!0}),C.useCallback((l,u={})=>{if(cn(a.current,W1),!a.current)return;if(typeof l=="number"){n.go(l);return}let d=gu(l,JSON.parse(s),i,u.relative==="path");e==null&&t!=="/"&&(d.pathname=d.pathname==="/"?t:sn([t,d.pathname])),Pp(typeof l=="string"?l:oi(l),n.createHref(d),Np(n),"reject"),(u.replace?n.replace:n.push)(d,u.state,u)},[t,n,s,i,e])}C.createContext(null);function Ha(e,{relative:t}={}){let{matches:n}=C.useContext(Sn),{pathname:r}=dn(),i=JSON.stringify(Ip(n));return C.useMemo(()=>gu(e,JSON.parse(i),r,t==="path"),[e,i,r,t])}function lT(e,t){return q1(e,t)}function q1(e,t,n){var k;Ne(ps(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:r}=C.useContext(Mt),{matches:i}=C.useContext(Sn),s=i[i.length-1],a=s?s.params:{},o=s?s.pathname:"/",l=s?s.pathnameBase:"/",u=s&&s.route;{let g=u&&u.path||"";Y1(o,!u||g.endsWith("*")||g.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${o}" (under <Route path="${g}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${g}"> to <Route path="${g==="/"?"*":`${g}/*`}">.`)}let d=dn(),f;if(t){let g=typeof t=="string"?ds(t):t;Ne(l==="/"||((k=g.pathname)==null?void 0:k.startsWith(l)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${l}" but pathname "${g.pathname}" was given in the \`location\` prop.`),f=g}else f=d;let p=f.pathname||"/",h=p;if(l!=="/"){let g=l.replace(/^\//,"").split("/");h="/"+p.replace(/^\//,"").split("/").slice(g.length).join("/")}let x=n&&n.state.matches.length?n.state.matches.map(g=>Object.assign(g,{route:n.manifest[g.route.id]||g.route})):R1(e,{pathname:h});cn(u||x!=null,`No routes matched location "${f.pathname}${f.search}${f.hash}" `),cn(x==null||x[x.length-1].route.element!==void 0||x[x.length-1].route.Component!==void 0||x[x.length-1].route.lazy!==void 0,`Matched leaf route at location "${f.pathname}${f.search}${f.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let b=pT(x&&x.map(g=>Object.assign({},g,{params:Object.assign({},a,g.params),pathname:sn([l,r.encodeLocation?r.encodeLocation(g.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:g.pathname]),pathnameBase:g.pathnameBase==="/"?l:sn([l,r.encodeLocation?r.encodeLocation(g.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:g.pathnameBase])})),i,n);return t&&b?C.createElement($a.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",mask:void 0,...f},navigationType:"POP"}},b):b}function uT(){let e=xT(),t=qC(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:r},s={padding:"2px 4px",backgroundColor:r},a=null;return console.error("Error handled by React Router default ErrorBoundary:",e),a=C.createElement(C.Fragment,null,C.createElement("p",null,"💿 Hey developer 👋"),C.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",C.createElement("code",{style:s},"ErrorBoundary")," or"," ",C.createElement("code",{style:s},"errorElement")," prop on your route.")),C.createElement(C.Fragment,null,C.createElement("h2",null,"Unexpected Application Error!"),C.createElement("h3",{style:{fontStyle:"italic"}},t),n?C.createElement("pre",{style:i},n):null,a)}var cT=C.createElement(uT,null),K1=class extends C.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.onError?this.props.onError(e,t):console.error("React Router caught the following error during render",e)}render(){let e=this.state.error;if(this.context&&typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){const n=sT(e.digest);n&&(e=n)}let t=e!==void 0?C.createElement(Sn.Provider,{value:this.props.routeContext},C.createElement(jp.Provider,{value:e,children:this.props.component})):this.props.children;return this.context?C.createElement(dT,{error:e},t):t}};K1.contextType=V1;var dc=new WeakMap;function dT({children:e,error:t}){let{basename:n,navigator:r}=C.useContext(Mt);if(typeof t=="object"&&t&&"digest"in t&&typeof t.digest=="string"){let i=iT(t.digest);if(i){let s=dc.get(t);if(s)throw s;let a=U1(i.location,n),o=a.absoluteURL||a.to;if(Pp(i.location,o,Np(r),"allow-explicit"),ZC(o))throw new Error("Invalid redirect location");if(z1&&!dc.get(t))if(a.isExternal||i.reloadDocument)window.location.href=o;else{const l=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(a.to,{replace:i.replace}));throw dc.set(t,l),l}return C.createElement("meta",{httpEquiv:"refresh",content:`0;url=${o}`})}}return e}function fT({routeContext:e,match:t,children:n}){let r=C.useContext(fs);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),C.createElement(Sn.Provider,{value:e},n)}function pT(e,t=[],n){let r=n==null?void 0:n.state;if(e==null){if(!r)return null;if(r.errors)e=r.matches;else if(t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let i=e,s=r==null?void 0:r.errors;if(s!=null){let d=i.findIndex(f=>f.route.id&&(s==null?void 0:s[f.route.id])!==void 0);Ne(d>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(s).join(",")}`),i=i.slice(0,Math.min(i.length,d+1))}let a=!1,o=-1;if(n&&r){a=r.renderFallback;for(let d=0;d<i.length;d++){let f=i[d];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(o=d),f.route.id){let{loaderData:p,errors:h}=r,x=f.route.loader&&!p.hasOwnProperty(f.route.id)&&(!h||h[f.route.id]===void 0);if(f.route.lazy||x){n.isStatic&&(a=!0),o>=0?i=i.slice(0,o+1):i=[i[0]];break}}}}let l=n==null?void 0:n.onError,u=r&&l?(d,f)=>{var p,h;l(d,{location:r.location,params:((h=(p=r.matches)==null?void 0:p[0])==null?void 0:h.params)??{},pattern:KC(r.matches),errorInfo:f})}:void 0;return i.reduceRight((d,f,p)=>{let h,x=!1,b=null,k=null;r&&(h=s&&f.route.id?s[f.route.id]:void 0,b=f.route.errorElement||cT,a&&(o<0&&p===0?(Y1("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),x=!0,k=null):o===p&&(x=!0,k=f.route.hydrateFallbackElement||null)));let g=t.concat(i.slice(0,p+1)),m=()=>{let y;return h?y=b:x?y=k:f.route.Component?y=C.createElement(f.route.Component,null):f.route.element?y=f.route.element:y=d,C.createElement(fT,{match:f,routeContext:{outlet:d,matches:g,isDataRoute:r!=null},children:y})};return r&&(f.route.ErrorBoundary||f.route.errorElement||p===0)?C.createElement(K1,{location:r.location,revalidation:r.revalidation,component:b,error:h,children:m(),routeContext:{outlet:null,matches:g,isDataRoute:!0},onError:u}):m()},null)}function Rp(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function hT(e){let t=C.useContext(fs);return Ne(t,Rp(e)),t}function mT(e){let t=C.useContext(yu);return Ne(t,Rp(e)),t}function gT(e){let t=C.useContext(Sn);return Ne(t,Rp(e)),t}function Lp(e){let t=gT(e),n=t.matches[t.matches.length-1];return Ne(n.route.id,`${e} can only be used on routes that contain a unique "id"`),n.route.id}function yT(){return Lp("useRouteId")}function xT(){var r;let e=C.useContext(jp),t=mT("useRouteError"),n=Lp("useRouteError");return e!==void 0?e:(r=t.errors)==null?void 0:r[n]}function vT(){let{router:e}=hT("useNavigate"),t=Lp("useNavigate"),n=C.useRef(!1);return G1(()=>{n.current=!0}),C.useCallback(async(i,s={})=>{cn(n.current,W1),n.current&&(typeof i=="number"?await e.navigate(i):await e.navigate(i,{fromRouteId:t,...s}))},[e,t])}var Sg={};function Y1(e,t,n){!t&&!Sg[e]&&(Sg[e]=!0,cn(!1,n))}C.memo(bT);function bT({routes:e,manifest:t,future:n,state:r,isStatic:i,onError:s}){return q1(e,void 0,{manifest:t,state:r,isStatic:i,onError:s})}function wT({to:e,replace:t,state:n,relative:r}){Ne(ps(),"<Navigate> may be used only in the context of a <Router> component.");let{static:i,navigator:s}=C.useContext(Mt);cn(!i,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:a}=C.useContext(Sn),{pathname:o}=dn(),l=xu(),u=gu(e,Ip(a),o,r==="path");Pp(typeof e=="string"?e:oi(e),s.createHref(u),Np(s),"reject");let d=JSON.stringify(u);return C.useEffect(()=>{l(JSON.parse(d),{replace:t,state:n,relative:r})},[l,d,r,t,n]),null}function Or(e){Ne(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function kT({basename:e="/",children:t=null,location:n,navigationType:r="POP",navigator:i,static:s=!1,useTransitions:a}){Ne(!ps(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let o=e.replace(/^\/*/,"/"),l=C.useMemo(()=>({basename:o,navigator:i,static:s,useTransitions:a,future:{}}),[o,i,s,a]);typeof n=="string"&&(n=ds(n));let{pathname:u="/",search:d="",hash:f="",state:p=null,key:h="default",mask:x}=n,b=C.useMemo(()=>{let k=Wn(u,o);return k==null?null:{location:{pathname:k,search:d,hash:f,state:p,key:h,mask:x},navigationType:r}},[o,u,d,f,p,h,r,x]);return cn(b!=null,`<Router basename="${o}"> is not able to match the URL "${u}${d}${f}" because it does not start with the basename, so the <Router> won't render anything.`),b==null?null:C.createElement(Mt.Provider,{value:l},C.createElement($a.Provider,{children:t,value:b}))}function ST({children:e,location:t}){return lT(Wd(e),t)}function Wd(e,t=[]){let n=[];return C.Children.forEach(e,(r,i)=>{if(!C.isValidElement(r))return;let s=[...t,i];if(r.type===C.Fragment){n.push.apply(n,Wd(r.props.children,s));return}Ne(r.type===Or,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ne(!r.props.index||!r.props.children,"An index route cannot have child routes.");let a={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,middleware:r.props.middleware,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=Wd(r.props.children,s)),n.push(a)}),n}var qo="get",Ko="application/x-www-form-urlencoded";function vu(e){return typeof HTMLElement<"u"&&e instanceof HTMLElement}function ET(e){return vu(e)&&e.tagName.toLowerCase()==="button"}function CT(e){return vu(e)&&e.tagName.toLowerCase()==="form"}function TT(e){return vu(e)&&e.tagName.toLowerCase()==="input"}function _T(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function AT(e,t){return e.button===0&&(!t||t==="_self")&&!_T(e)}var ko=null;function IT(){if(ko===null)try{new FormData(document.createElement("form"),0),ko=!1}catch{ko=!0}return ko}var NT=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function fc(e){return e!=null&&!NT.has(e)?(cn(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Ko}"`),null):e}function PT(e,t){let n,r,i,s,a;if(CT(e)){let o=e.getAttribute("action");r=o?Wn(o,t):null,n=e.getAttribute("method")||qo,i=fc(e.getAttribute("enctype"))||Ko,s=new FormData(e)}else if(ET(e)||TT(e)&&(e.type==="submit"||e.type==="image")){let o=e.form;if(o==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let l=e.getAttribute("formaction")||o.getAttribute("action");if(r=l?Wn(l,t):null,n=e.getAttribute("formmethod")||o.getAttribute("method")||qo,i=fc(e.getAttribute("formenctype"))||fc(o.getAttribute("enctype"))||Ko,s=new FormData(o,e),!IT()){let{name:u,type:d,value:f}=e;if(d==="image"){let p=u?`${u}.`:"";s.append(`${p}x`,"0"),s.append(`${p}y`,"0")}else u&&s.append(u,f)}}else{if(vu(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=qo,r=null,i=Ko,a=e}return s&&i==="text/plain"&&(a=s,s=void 0),{action:r,method:n.toLowerCase(),encType:i,formData:s,body:a}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Dp(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function X1(e,t,n,r){let i=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return n?i.pathname.endsWith("/")?i.pathname=`${i.pathname}_.${r}`:i.pathname=`${i.pathname}.${r}`:i.pathname==="/"?i.pathname=`_root.${r}`:t&&Wn(i.pathname,t)==="/"?i.pathname=`${Ji(t)}/_root.${r}`:i.pathname=`${Ji(i.pathname)}.${r}`,i}async function jT(e,t){if(e.id in t)return t[e.id];try{let n=await import(e.module);return t[e.id]=n,n}catch(n){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function RT(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function LT(e,t,n){let r=await Promise.all(e.map(async i=>{let s=t.routes[i.route.id];if(s){let a=await jT(s,n);return a.links?a.links():[]}return[]}));return OT(r.flat(1).filter(RT).filter(i=>i.rel==="stylesheet"||i.rel==="preload").map(i=>i.rel==="stylesheet"?{...i,rel:"prefetch",as:"style"}:{...i,rel:"prefetch"}))}function Eg(e,t,n,r,i,s){let a=(l,u)=>n[u]?l.route.id!==n[u].route.id:!0,o=(l,u)=>{var d;return n[u].pathname!==l.pathname||((d=n[u].route.path)==null?void 0:d.endsWith("*"))&&n[u].params["*"]!==l.params["*"]};return s==="assets"?t.filter((l,u)=>a(l,u)||o(l,u)):s==="data"?t.filter((l,u)=>{var f;let d=r.routes[l.route.id];if(!d||!d.hasLoader)return!1;if(a(l,u)||o(l,u))return!0;if(l.route.shouldRevalidate){let p=l.route.shouldRevalidate({currentUrl:new URL(i.pathname+i.search+i.hash,window.origin),currentParams:((f=n[0])==null?void 0:f.params)||{},nextUrl:new URL(e,window.origin),nextParams:l.params,defaultShouldRevalidate:!0});if(typeof p=="boolean")return p}return!0}):[]}function DT(e,t,{includeHydrateFallback:n}={}){return MT(e.map(r=>{let i=t.routes[r.route.id];if(!i)return[];let s=[i.module];return i.clientActionModule&&(s=s.concat(i.clientActionModule)),i.clientLoaderModule&&(s=s.concat(i.clientLoaderModule)),n&&i.hydrateFallbackModule&&(s=s.concat(i.hydrateFallbackModule)),i.imports&&(s=s.concat(i.imports)),s}).flat(1))}function MT(e){return[...new Set(e)]}function FT(e){let t={},n=Object.keys(e).sort();for(let r of n)t[r]=e[r];return t}function OT(e,t){let n=new Set;return new Set(t),e.reduce((r,i)=>{let s=JSON.stringify(FT(i));return n.has(s)||(n.add(s),r.push({key:s,link:i})),r},[])}function Mp(){let e=C.useContext(fs);return Dp(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function zT(){let e=C.useContext(yu);return Dp(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var Fp=C.createContext(void 0);Fp.displayName="FrameworkContext";function bu(){let e=C.useContext(Fp);return Dp(e,"You must render this element inside a <HydratedRouter> element"),e}function UT(e,t){let n=C.useContext(Fp),[r,i]=C.useState(!1),[s,a]=C.useState(!1),{onFocus:o,onBlur:l,onMouseEnter:u,onMouseLeave:d,onTouchStart:f}=t,p=C.useRef(null);C.useEffect(()=>{if(e==="render"&&a(!0),e==="viewport"){let b=g=>{g.forEach(m=>{a(m.isIntersecting)})},k=new IntersectionObserver(b,{threshold:.5});return p.current&&k.observe(p.current),()=>{k.disconnect()}}},[e]),C.useEffect(()=>{if(r){let b=setTimeout(()=>{a(!0)},100);return()=>{clearTimeout(b)}}},[r]);let h=()=>{i(!0)},x=()=>{i(!1),a(!1)};return n?e!=="intent"?[s,p,{}]:[s,p,{onFocus:As(o,h),onBlur:As(l,x),onMouseEnter:As(u,h),onMouseLeave:As(d,x),onTouchStart:As(f,h)}]:[!1,p,{}]}function As(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function BT({page:e,...t}){let n=JC(),{nonce:r}=bu(),{router:i}=Mp(),s=C.useMemo(()=>R1(i.routes,e,i.basename),[i.routes,e,i.basename]);return s?(t.nonce==null&&r&&(t={...t,nonce:r}),n?C.createElement($T,{page:e,matches:s,...t}):C.createElement(HT,{page:e,matches:s,...t})):null}function VT(e){let{manifest:t,routeModules:n}=bu(),[r,i]=C.useState([]);return C.useEffect(()=>{let s=!1;return LT(e,t,n).then(a=>{s||i(a)}),()=>{s=!0}},[e,t,n]),r}function $T({page:e,matches:t,...n}){let r=dn(),{future:i}=bu(),{basename:s}=Mp(),a=C.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let o=X1(e,s,i.v8_trailingSlashAwareDataRequests,"rsc"),l=!1,u=[];for(let d of t)typeof d.route.shouldRevalidate=="function"?l=!0:u.push(d.route.id);return l&&u.length>0&&o.searchParams.set("_routes",u.join(",")),[o.pathname+o.search]},[s,i.v8_trailingSlashAwareDataRequests,e,r,t]);return C.createElement(C.Fragment,null,a.map(o=>C.createElement("link",{key:o,rel:"prefetch",as:"fetch",href:o,...n})))}function HT({page:e,matches:t,...n}){let r=dn(),{future:i,manifest:s,routeModules:a}=bu(),{basename:o}=Mp(),{loaderData:l,matches:u}=zT(),d=C.useMemo(()=>Eg(e,t,u,s,r,"data"),[e,t,u,s,r]),f=C.useMemo(()=>Eg(e,t,u,s,r,"assets"),[e,t,u,s,r]),p=C.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let b=new Set,k=!1;if(t.forEach(m=>{var v;let y=s.routes[m.route.id];!y||!y.hasLoader||(!d.some(E=>E.route.id===m.route.id)&&m.route.id in l&&((v=a[m.route.id])!=null&&v.shouldRevalidate)||y.hasClientLoader?k=!0:b.add(m.route.id))}),b.size===0)return[];let g=X1(e,o,i.v8_trailingSlashAwareDataRequests,"data");return k&&b.size>0&&g.searchParams.set("_routes",t.filter(m=>b.has(m.route.id)).map(m=>m.route.id).join(",")),[g.pathname+g.search]},[o,i.v8_trailingSlashAwareDataRequests,l,r,s,d,t,e,a]),h=C.useMemo(()=>DT(f,s),[f,s]),x=VT(f);return C.createElement(C.Fragment,null,p.map(b=>C.createElement("link",{key:b,rel:"prefetch",as:"fetch",href:b,...n})),h.map(b=>C.createElement("link",{key:b,rel:"modulepreload",href:b,...n})),x.map(({key:b,link:k})=>C.createElement("link",{key:b,nonce:n.nonce,...k,crossOrigin:k.crossOrigin??n.crossOrigin})))}function WT(...e){return t=>{e.forEach(n=>{typeof n=="function"?n(t):n!=null&&(n.current=t)})}}var GT=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{GT&&(window.__reactRouterVersion="7.18.5")}catch{}function qT({basename:e,children:t,useTransitions:n,window:r}){let i=C.useRef();i.current==null&&(i.current=EC({window:r,v5Compat:!0}));let s=i.current,[a,o]=C.useState({action:s.action,location:s.location}),l=C.useCallback(u=>{n===!1?o(u):C.startTransition(()=>o(u))},[n]);return C.useLayoutEffect(()=>s.listen(l),[s,l]),C.createElement(kT,{basename:e,children:t,location:a.location,navigationType:a.action,navigator:s,useTransitions:n})}var Sa=C.forwardRef(function({onClick:t,discover:n="render",prefetch:r="none",relative:i,reloadDocument:s,replace:a,mask:o,state:l,target:u,to:d,preventScrollReset:f,viewTransition:p,defaultShouldRevalidate:h,...x},b){let{basename:k,navigator:g,useTransitions:m}=C.useContext(Mt),y=typeof d=="string"&&Ap.test(d),v=U1(d,k);d=v.to;let E=aT(d,{relative:i}),w=dn(),I=null;if(o){let H=gu(o,[],w.mask?w.mask.pathname:"/",!0);k!=="/"&&(H.pathname=H.pathname==="/"?k:sn([k,H.pathname])),I=g.createHref(H)}let[N,R,_]=UT(r,x),j=QT(d,{replace:a,mask:o,state:l,target:u,preventScrollReset:f,relative:i,viewTransition:p,defaultShouldRevalidate:h,useTransitions:m});function U(H){t&&t(H),H.defaultPrevented||j(H)}let G=!(v.isExternal||s),q=C.createElement("a",{...x,..._,href:(G?I:void 0)||v.absoluteURL||E,onClick:G?U:t,ref:WT(b,R),target:u,"data-discover":!y&&n==="render"?"true":void 0});return N&&!y?C.createElement(C.Fragment,null,q,C.createElement(BT,{page:E})):q});Sa.displayName="Link";var KT=C.forwardRef(function({"aria-current":t="page",caseSensitive:n=!1,className:r="",end:i=!1,style:s,to:a,viewTransition:o,children:l,...u},d){let f=Ha(a,{relative:u.relative}),p=dn(),h=C.useContext(yu),{navigator:x,basename:b}=C.useContext(Mt),k=h!=null&&n_(f)&&o===!0,g=x.encodeLocation?x.encodeLocation(f).pathname:f.pathname,m=p.pathname,y=h&&h.navigation&&h.navigation.location?h.navigation.location.pathname:null;n||(m=m.toLowerCase(),y=y?y.toLowerCase():null,g=g.toLowerCase()),y&&b&&(y=Wn(y,b)||y);const v=g!=="/"&&g.endsWith("/")?g.length-1:g.length;let E=m===g||!i&&m.startsWith(g)&&m.charAt(v)==="/",w=y!=null&&(y===g||!i&&y.startsWith(g)&&y.charAt(g.length)==="/"),I={isActive:E,isPending:w,isTransitioning:k},N=E?t:void 0,R;typeof r=="function"?R=r(I):R=[r,E?"active":null,w?"pending":null,k?"transitioning":null].filter(Boolean).join(" ");let _=typeof s=="function"?s(I):s;return C.createElement(Sa,{...u,"aria-current":N,className:R,ref:d,style:_,to:a,viewTransition:o},typeof l=="function"?l(I):l)});KT.displayName="NavLink";var YT=C.forwardRef(({discover:e="render",fetcherKey:t,navigate:n,reloadDocument:r,replace:i,state:s,method:a=qo,action:o,onSubmit:l,relative:u,preventScrollReset:d,viewTransition:f,defaultShouldRevalidate:p,...h},x)=>{let{useTransitions:b}=C.useContext(Mt),k=e_(),g=t_(o,{relative:u}),m=a.toLowerCase()==="get"?"get":"post",y=typeof o=="string"&&Ap.test(o),v=E=>{if(l&&l(E),E.defaultPrevented)return;E.preventDefault();let w=E.nativeEvent.submitter,I=(w==null?void 0:w.getAttribute("formmethod"))||a,N=()=>k(w||E.currentTarget,{fetcherKey:t,method:I,navigate:n,replace:i,state:s,relative:u,preventScrollReset:d,viewTransition:f,defaultShouldRevalidate:p});b&&n!==!1?C.startTransition(()=>N()):N()};return C.createElement("form",{ref:x,method:m,action:g,onSubmit:r?l:v,...h,"data-discover":!y&&e==="render"?"true":void 0})});YT.displayName="Form";function XT(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Q1(e){let t=C.useContext(fs);return Ne(t,XT(e)),t}function QT(e,{target:t,replace:n,mask:r,state:i,preventScrollReset:s,relative:a,viewTransition:o,defaultShouldRevalidate:l,useTransitions:u}={}){let d=xu(),f=dn(),p=Ha(e,{relative:a});return C.useCallback(h=>{if(AT(h,t)){h.preventDefault();let x=n!==void 0?n:oi(f)===oi(p),b=()=>d(e,{replace:x,mask:r,state:i,preventScrollReset:s,relative:a,viewTransition:o,defaultShouldRevalidate:l});u?C.startTransition(()=>b()):b()}},[f,d,p,n,r,i,t,e,s,a,o,l,u])}var ZT=0,JT=()=>`__${String(++ZT)}__`;function e_(){let{router:e}=Q1("useSubmit"),{basename:t}=C.useContext(Mt),n=yT(),r=e.fetch,i=e.navigate;return C.useCallback(async(s,a={})=>{let{action:o,method:l,encType:u,formData:d,body:f}=PT(s,t);if(a.navigate===!1){let p=a.fetcherKey||JT();await r(p,n,a.action||o,{defaultShouldRevalidate:a.defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,formData:d,body:f,formMethod:a.method||l,formEncType:a.encType||u,flushSync:a.flushSync})}else await i(a.action||o,{defaultShouldRevalidate:a.defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,formData:d,body:f,formMethod:a.method||l,formEncType:a.encType||u,replace:a.replace,state:a.state,fromRouteId:n,flushSync:a.flushSync,viewTransition:a.viewTransition})},[r,i,t,n])}function t_(e,{relative:t}={}){let{basename:n}=C.useContext(Mt),r=C.useContext(Sn);Ne(r,"useFormAction must be used inside a RouteContext");let[i]=r.matches.slice(-1),s={...Ha(e||".",{relative:t})},a=dn();if(e==null){s.search=a.search;let o=new URLSearchParams(s.search),l=o.getAll("index");if(l.some(d=>d==="")){o.delete("index"),l.filter(f=>f).forEach(f=>o.append("index",f));let d=o.toString();s.search=d?`?${d}`:""}}return(!e||e===".")&&i.route.index&&(s.search=s.search?s.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(s.pathname=s.pathname==="/"?n:sn([n,s.pathname])),oi(s)}function n_(e,{relative:t}={}){let n=C.useContext($1);Ne(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=Q1("useViewTransitionState"),i=Ha(e,{relative:t});if(!n.isTransitioning)return!1;let s=Wn(n.currentLocation.pathname,r)||n.currentLocation.pathname,a=Wn(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Nl(i.pathname,a)!=null||Nl(i.pathname,s)!=null}/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r_=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Z1=(...e)=>e.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var i_={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s_=C.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i="",children:s,iconNode:a,...o},l)=>C.createElement("svg",{ref:l,...i_,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:Z1("lucide",i),...o},[...a.map(([u,d])=>C.createElement(u,d)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K=(e,t)=>{const n=C.forwardRef(({className:r,...i},s)=>C.createElement(s_,{ref:s,iconNode:t,className:Z1(`lucide-${r_(e)}`,r),...i}));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gd=K("Activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Op=K("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a_=K("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J1=K("AudioLines",[["path",{d:"M2 10v3",key:"1fnikh"}],["path",{d:"M6 6v11",key:"11sgs0"}],["path",{d:"M10 3v18",key:"yhl04a"}],["path",{d:"M14 8v7",key:"3a1oy3"}],["path",{d:"M18 5v13",key:"123xd1"}],["path",{d:"M22 10v3",key:"154ddg"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pl=K("Briefcase",[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zp=K("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Up=K("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o_=K("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eb=K("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tb=K("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bp=K("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l_=K("CircleCheckBig",[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ea=K("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vp=K("CircleHelp",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $p=K("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nb=K("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u_=K("Cpu",[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rb=K("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hp=K("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c_=K("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d_=K("LayoutDashboard",[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ib=K("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f_=K("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sb=K("MessageSquarePlus",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}],["path",{d:"M12 7v6",key:"lw1j43"}],["path",{d:"M9 10h6",key:"9gxzsh"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ab=K("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p_=K("MicOff",[["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}],["path",{d:"M18.89 13.23A7.12 7.12 0 0 0 19 12v-2",key:"80xlxr"}],["path",{d:"M5 10v2a7 7 0 0 0 12 5",key:"p2k8kg"}],["path",{d:"M15 9.34V5a3 3 0 0 0-5.68-1.33",key:"1gzdoj"}],["path",{d:"M9 9v3a3 3 0 0 0 5.12 2.12",key:"r2i35w"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qd=K("Mic",[["path",{d:"M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z",key:"131961"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ob=K("Monitor",[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h_=K("Palette",[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m_=K("PenLine",[["path",{d:"M12 20h9",key:"t2du7b"}],["path",{d:"M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z",key:"1ykcvy"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ca=K("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cg=K("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wp=K("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lb=K("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ub=K("Send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g_=K("Settings2",[["path",{d:"M20 7h-9",key:"3s1dr2"}],["path",{d:"M14 17H5",key:"gfn3mx"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cb=K("ShieldAlert",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kd=K("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const db=K("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y_=K("Shuffle",[["path",{d:"m18 14 4 4-4 4",key:"10pe0f"}],["path",{d:"m18 2 4 4-4 4",key:"pucp1d"}],["path",{d:"M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22",key:"1ailkh"}],["path",{d:"M2 6h1.972a4 4 0 0 1 3.6 2.2",key:"km57vx"}],["path",{d:"M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45",key:"os18l9"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x_=K("SlidersHorizontal",[["line",{x1:"21",x2:"14",y1:"4",y2:"4",key:"obuewd"}],["line",{x1:"10",x2:"3",y1:"4",y2:"4",key:"1q6298"}],["line",{x1:"21",x2:"12",y1:"12",y2:"12",key:"1iu8h1"}],["line",{x1:"8",x2:"3",y1:"12",y2:"12",key:"ntss68"}],["line",{x1:"21",x2:"16",y1:"20",y2:"20",key:"14d8ph"}],["line",{x1:"12",x2:"3",y1:"20",y2:"20",key:"m0wm8r"}],["line",{x1:"14",x2:"14",y1:"2",y2:"6",key:"14e1ph"}],["line",{x1:"8",x2:"8",y1:"10",y2:"14",key:"1i6ji0"}],["line",{x1:"16",x2:"16",y1:"18",y2:"22",key:"1lctlv"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fb=K("Smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gp=K("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pb=K("SquareCheckBig",[["path",{d:"M21 10.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.5",key:"1uzm8b"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hb=K("Square",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const br=K("Star",[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mb=K("Tablet",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",ry:"2",key:"76otgf"}],["line",{x1:"12",x2:"12.01",y1:"18",y2:"18",key:"1dp563"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bi=K("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v_=K("UserCheck",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["polyline",{points:"16 11 18 13 22 9",key:"1pwet4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b_=K("UserPlus",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w_=K("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gb=K("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yo=K("Volume2",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k_=K("VolumeX",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const It=K("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),Xs="https://eliza-ai-voice-agent-bd.onrender.com";function S_(){const e="https://eliza-ai-voice-agent-bd.onrender.com".trim();if(typeof window>"u")return(e||Xs).replace(/\/$/,"");const t=window.location.protocol,n=window.location.hostname;return t==="https:"?e&&e.startsWith("https://")?e.replace(/\/$/,""):Xs:n==="localhost"||n==="127.0.0.1"?(e||"http://localhost:8000").replace(/\/$/,""):/^(192\.168\.|10\.|172\.(1[6-9]|2\d|3[01])\.)/.test(n)?e?e.replace(/\/$/,""):`http://${n}:8000`:(e||Xs).replace(/\/$/,"")}const es=S_();async function ts(e,t={},n=28e3){const r=new AbortController,i=setTimeout(()=>r.abort(),n),s={...t,signal:t.signal||r.signal};try{const a=await fetch(e,s);return clearTimeout(i),a}catch(a){if(clearTimeout(i),(e.includes("localhost")||e.includes("127.0.0.1")||/192\.168\.|10\./.test(e))&&!e.startsWith(Xs))try{const l=e.replace(/http:\/\/[^/]+/,Xs),u=new AbortController,d=setTimeout(()=>u.abort(),n),f=await fetch(l,{...t,signal:u.signal});return clearTimeout(d),f}catch{}throw a}}function Ta(){try{return localStorage.getItem("eliza_access_token")||""}catch{return""}}function Tg(e){try{e?localStorage.setItem("eliza_access_token",e):localStorage.removeItem("eliza_access_token")}catch{}}function _g(){try{return localStorage.getItem("eliza_access_email")||""}catch{return""}}function Ag(e){try{e?localStorage.setItem("eliza_access_email",e):localStorage.removeItem("eliza_access_email")}catch{}}function E_(){try{localStorage.removeItem("eliza_access_token"),localStorage.removeItem("eliza_access_email")}catch{}}function So(){if(typeof window>"u")return"desktop";const e=window.innerWidth,t=(navigator.userAgent||"").toLowerCase();return/ipad|tablet/.test(t)||e>=768&&e<=1024?"tablet":/mobi|android|iphone/.test(t)||e<768?"mobile":"desktop"}function Eo(){if(typeof navigator>"u")return"unknown";const e=navigator.userAgent.toLowerCase();return e.includes("edg/")?"Edge":e.includes("chrome")&&!e.includes("edg/")?"Chrome":e.includes("safari")&&!e.includes("chrome")?"Safari":e.includes("firefox")?"Firefox":e.includes("opr")||e.includes("opera")?"Opera":"Browser"}async function Co(e,t={}){var a;const n=Ta(),r={"Content-Type":"application/json",...n?{Authorization:`Bearer ${n}`}:{},...t.headers||{}},i=await ts(`${es}${e}`,{...t,headers:r}),s=await i.json().catch(()=>({}));if(!i.ok){const o=typeof s.detail=="object"&&((a=s.detail)!=null&&a.message)?s.detail.message:s.detail||s.message||`Request failed (${i.status})`,l=new Error(o);throw l.status=i.status,l.data=s,l}return s}const _a={verifyEmail:async e=>{const t=await ts(`${es}/api/v1/access/verify-email`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e,device_type:So(),browser_name:Eo()})}),n=await t.json().catch(()=>({}));if(!t.ok)throw new Error(n.detail||n.message||"Failed to verify email.");return n.sessionToken&&(Tg(n.sessionToken),Ag(n.email||e)),n},googleLogin:async({email:e,credential:t,name:n,picture:r}={})=>{const i=await ts(`${es}/api/v1/access/google-login`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e,credential:t,name:n,picture:r,device_type:So(),browser_name:Eo()})}),s=await i.json().catch(()=>({}));if(!i.ok)throw new Error(s.detail||s.message||"Failed to log in with Google.");return s.sessionToken&&(Tg(s.sessionToken),Ag(s.email||e)),s},getStatus:async()=>Co("/api/v1/access/status"),submitQuestion:async e=>{const t={...e,device_type:So(),browser_name:Eo(),request_id:typeof crypto<"u"&&crypto.randomUUID?crypto.randomUUID():void 0};return Co("/api/v1/questions",{method:"POST",body:JSON.stringify(t)})},submitFeedback:async({rating:e,category:t,message:n})=>Co("/api/v1/feedback",{method:"POST",body:JSON.stringify({rating:e,category:t,message:n,device_type:So(),browser_name:Eo()})}),getFeedbackStatus:async()=>Co("/api/v1/feedback/status")},C_=()=>{};var Ig={};/**
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
 */const yb=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},T_=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=e[n++],a=e[n++],o=e[n++],l=((i&7)<<18|(s&63)<<12|(a&63)<<6|o&63)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(l&1023))}else{const s=e[n++],a=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|a&63)}}return t.join("")},xb={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const s=e[i],a=i+1<e.length,o=a?e[i+1]:0,l=i+2<e.length,u=l?e[i+2]:0,d=s>>2,f=(s&3)<<4|o>>4;let p=(o&15)<<2|u>>6,h=u&63;l||(h=64,a||(p=64)),r.push(n[d],n[f],n[p],n[h])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(yb(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):T_(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const s=n[e.charAt(i++)],o=i<e.length?n[e.charAt(i)]:0;++i;const u=i<e.length?n[e.charAt(i)]:64;++i;const f=i<e.length?n[e.charAt(i)]:64;if(++i,s==null||o==null||u==null||f==null)throw new __;const p=s<<2|o>>4;if(r.push(p),u!==64){const h=o<<4&240|u>>2;if(r.push(h),f!==64){const x=u<<6&192|f;r.push(x)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class __ extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const A_=function(e){const t=yb(e);return xb.encodeByteArray(t,!0)},vb=function(e){return A_(e).replace(/\./g,"")},bb=function(e){try{return xb.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function I_(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const N_=()=>I_().__FIREBASE_DEFAULTS__,P_=()=>{if(typeof process>"u"||typeof Ig>"u")return;const e=Ig.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},j_=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&bb(e[1]);return t&&JSON.parse(t)},qp=()=>{try{return C_()||N_()||P_()||j_()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},R_=e=>{var t,n;return(n=(t=qp())==null?void 0:t.emulatorHosts)==null?void 0:n[e]},wb=()=>{var e;return(e=qp())==null?void 0:e.config},kb=e=>{var t;return(t=qp())==null?void 0:t[`_${e}`]};/**
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
 */class L_{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
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
 */function pt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function D_(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(pt())}function M_(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function F_(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function O_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function z_(){const e=pt();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function U_(){try{return typeof indexedDB=="object"}catch{return!1}}function B_(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;t(((s=i.error)==null?void 0:s.message)||"")}}catch(n){t(n)}})}/**
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
 */const V_="FirebaseError";class Ir extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=V_,Object.setPrototypeOf(this,Ir.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Wa.prototype.create)}}class Wa{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,s=this.errors[t],a=s?$_(s,r):"Error",o=`${this.serviceName}: ${a} (${i}).`;return new Ir(i,o,r)}}function $_(e,t){try{let n=0,r="";for(;n<e.length;){const i=e.indexOf("{$",n);if(i===-1){r+=e.substring(n);break}const s=e.indexOf("}",i+2);if(s===-1){r+=e.substring(n);break}const a=e.substring(i+2,s),o=t[a];r+=e.substring(n,i)+(o!=null?String(o):`<${a}?>`),n=s+1}return r}catch{return e}}function H_(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function ns(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const s=e[i],a=t[i];if(Ng(s)&&Ng(a)){if(!ns(s,a))return!1}else if(s!==a)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Ng(e){return e!==null&&typeof e=="object"}/**
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
 */function Ga(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function W_(e,t){const n=new G_(e,t);return n.subscribe.bind(n)}class G_{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");q_(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=pc),i.error===void 0&&(i.error=pc),i.complete===void 0&&(i.complete=pc);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function q_(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function pc(){}/**
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
 */function Kp(e){try{return(e.startsWith("http://")||e.startsWith("https://")?new URL(e).hostname:e).endsWith(".cloudworkstations.dev")}catch{return!1}}async function K_(e){return(await fetch(e,{credentials:"include"})).ok}class rs{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */class Y_{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new L_;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){const n=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),r=(t==null?void 0:t.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Q_(t))try{this.getOrInitializeService({instanceIdentifier:zr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(t=zr){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=zr){return this.instances.has(t)}getOptions(t=zr){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,a]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(s);r===o&&a.resolve(i)}return i}onInit(t,n){const r=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(r)??new Set;i.add(t),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&t(s,r),()=>{i.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:X_(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=zr){return this.component?this.component.multipleInstances?t:zr:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function X_(e){return e===zr?void 0:e}function Q_(e){return e.instantiationMode==="EAGER"}/**
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
 */class Z_{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new Y_(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var we;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(we||(we={}));const J_={debug:we.DEBUG,verbose:we.VERBOSE,info:we.INFO,warn:we.WARN,error:we.ERROR,silent:we.SILENT},eA=we.INFO,tA={[we.DEBUG]:"log",[we.VERBOSE]:"log",[we.INFO]:"info",[we.WARN]:"warn",[we.ERROR]:"error"},nA=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=tA[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Sb{constructor(t){this.name=t,this._logLevel=eA,this._logHandler=nA,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in we))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?J_[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,we.DEBUG,...t),this._logHandler(this,we.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,we.VERBOSE,...t),this._logHandler(this,we.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,we.INFO,...t),this._logHandler(this,we.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,we.WARN,...t),this._logHandler(this,we.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,we.ERROR,...t),this._logHandler(this,we.ERROR,...t)}}const rA=(e,t)=>t.some(n=>e instanceof n);let Pg,jg;function iA(){return Pg||(Pg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function sA(){return jg||(jg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Eb=new WeakMap,Yd=new WeakMap,Cb=new WeakMap,hc=new WeakMap,Yp=new WeakMap;function aA(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",s),e.removeEventListener("error",a)},s=()=>{n(wr(e.result)),i()},a=()=>{r(e.error),i()};e.addEventListener("success",s),e.addEventListener("error",a)});return t.then(n=>{n instanceof IDBCursor&&Eb.set(n,e)}).catch(()=>{}),Yp.set(t,e),t}function oA(e){if(Yd.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",a),e.removeEventListener("abort",a)},s=()=>{n(),i()},a=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",s),e.addEventListener("error",a),e.addEventListener("abort",a)});Yd.set(e,t)}let Xd={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Yd.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Cb.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return wr(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function lA(e){Xd=e(Xd)}function uA(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(mc(this),t,...n);return Cb.set(r,t.sort?t.sort():[t]),wr(r)}:sA().includes(e)?function(...t){return e.apply(mc(this),t),wr(Eb.get(this))}:function(...t){return wr(e.apply(mc(this),t))}}function cA(e){return typeof e=="function"?uA(e):(e instanceof IDBTransaction&&oA(e),rA(e,iA())?new Proxy(e,Xd):e)}function wr(e){if(e instanceof IDBRequest)return aA(e);if(hc.has(e))return hc.get(e);const t=cA(e);return t!==e&&(hc.set(e,t),Yp.set(t,e)),t}const mc=e=>Yp.get(e);function dA(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const a=indexedDB.open(e,t),o=wr(a);return r&&a.addEventListener("upgradeneeded",l=>{r(wr(a.result),l.oldVersion,l.newVersion,wr(a.transaction),l)}),n&&a.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),o.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),o}const fA=["get","getKey","getAll","getAllKeys","count"],pA=["put","add","delete","clear"],gc=new Map;function Rg(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(gc.get(t))return gc.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=pA.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||fA.includes(n)))return;const s=async function(a,...o){const l=this.transaction(a,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(o.shift())),(await Promise.all([u[n](...o),i&&l.done]))[0]};return gc.set(t,s),s}lA(e=>({...e,get:(t,n,r)=>Rg(t,n)||e.get(t,n,r),has:(t,n)=>!!Rg(t,n)||e.has(t,n)}));/**
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
 */class hA{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(mA(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function mA(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Qd="@firebase/app",Lg="0.16.4";/**
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
 */const Gn=new Sb("@firebase/app"),gA="@firebase/app-compat",yA="@firebase/analytics-compat",xA="@firebase/analytics",vA="@firebase/app-check-compat",bA="@firebase/app-check",wA="@firebase/auth",kA="@firebase/auth-compat",SA="@firebase/database",EA="@firebase/data-connect",CA="@firebase/database-compat",TA="@firebase/functions",_A="@firebase/functions-compat",AA="@firebase/installations",IA="@firebase/installations-compat",NA="@firebase/messaging",PA="@firebase/messaging-compat",jA="@firebase/performance",RA="@firebase/performance-compat",LA="@firebase/remote-config",DA="@firebase/remote-config-compat",MA="@firebase/storage",FA="@firebase/storage-compat",OA="@firebase/firestore",zA="@firebase/ai",UA="@firebase/firestore-compat",BA="firebase",VA="13.1.0";/**
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
 */const Zd="[DEFAULT]",$A={[Qd]:"fire-core",[gA]:"fire-core-compat",[xA]:"fire-analytics",[yA]:"fire-analytics-compat",[bA]:"fire-app-check",[vA]:"fire-app-check-compat",[wA]:"fire-auth",[kA]:"fire-auth-compat",[SA]:"fire-rtdb",[EA]:"fire-data-connect",[CA]:"fire-rtdb-compat",[TA]:"fire-fn",[_A]:"fire-fn-compat",[AA]:"fire-iid",[IA]:"fire-iid-compat",[NA]:"fire-fcm",[PA]:"fire-fcm-compat",[jA]:"fire-perf",[RA]:"fire-perf-compat",[LA]:"fire-rc",[DA]:"fire-rc-compat",[MA]:"fire-gcs",[FA]:"fire-gcs-compat",[OA]:"fire-fst",[UA]:"fire-fst-compat",[zA]:"fire-vertex","fire-js":"fire-js",[BA]:"fire-js-all"};/**
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
 */const Aa=new Map,HA=new Map,Jd=new Map;function Dg(e,t){try{e.container.addComponent(t)}catch(n){Gn.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Ia(e){const t=e.name;if(Jd.has(t))return Gn.debug(`There were multiple attempts to register component ${t}.`),!1;Jd.set(t,e);for(const n of Aa.values())Dg(n,e);for(const n of HA.values())Dg(n,e);return!0}function Tb(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function gn(e){return e==null?!1:e.settings!==void 0}/**
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
 */const WA={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different {$mismatchedParam}. Existing: '{$oldValue}'. New: '{$newValue}'.","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ln=new Wa("app","Firebase",WA);/**
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
 */class GA{constructor(t,n,r){this._isDeleted=!1,this._options={...t},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new rs("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Ln.create("app-deleted",{appName:this._name})}}/**
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
 */const qa=VA;function jl(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r={name:Zd,automaticDataCollectionEnabled:!0,...t},i=r.name;if(typeof i!="string"||!i)throw Ln.create("bad-app-name",{appName:String(i)});if(n||(n=wb()),!n)throw Ln.create("no-options");const s=Aa.get(i);if(s)if(ns(n,s.options)){if(ns(r,s.config))return s;throw Ln.create("duplicate-app",{appName:i,mismatchedParam:"config",oldValue:JSON.stringify(s.config),newValue:JSON.stringify(r)})}else throw Ln.create("duplicate-app",{appName:i,mismatchedParam:"options",oldValue:JSON.stringify(s.options),newValue:JSON.stringify(n)});const a=new Z_(i);for(const l of Jd.values())a.addComponent(l);const o=new GA(n,r,a);return Aa.set(i,o),o}function Rl(e=Zd){const t=Aa.get(e);if(!t&&e===Zd&&wb())return jl();if(!t)throw Ln.create("no-app",{appName:e});return t}function ef(){return Array.from(Aa.values())}function Vi(e,t,n){let r=$A[e]??e;n&&(r+=`-${n}`);const i=r.match(/\s|\//),s=t.match(/\s|\//);if(i||s){const a=[`Unable to register library "${r}" with version "${t}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&a.push("and"),s&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Gn.warn(a.join(" "));return}Ia(new rs(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}/**
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
 */const qA="firebase-heartbeat-database",KA=1,Na="firebase-heartbeat-store";let yc=null;function _b(){return yc||(yc=dA(qA,KA,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(Na)}catch(n){console.warn(n)}}}}).catch(e=>{throw Ln.create("idb-open",{originalErrorMessage:e.message})})),yc}async function YA(e){try{const n=(await _b()).transaction(Na),r=await n.objectStore(Na).get(Ab(e));return await n.done,r}catch(t){if(t instanceof Ir)Gn.warn(t.message);else{const n=Ln.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Gn.warn(n.message)}}}async function Mg(e,t){try{const r=(await _b()).transaction(Na,"readwrite");await r.objectStore(Na).put(t,Ab(e)),await r.done}catch(n){if(n instanceof Ir)Gn.warn(n.message);else{const r=Ln.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Gn.warn(r.message)}}}function Ab(e){return`${e.name}!${e.options.appId}`}/**
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
 */const XA=1024,QA=30;class ZA{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new eI(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Fg();if(((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(a=>a.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>QA){const a=tI(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Gn.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Fg(),{heartbeatsToSend:r,unsentEntries:i}=JA(this._heartbeatsCache.heartbeats),s=vb(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Gn.warn(n),""}}}function Fg(){return new Date().toISOString().substring(0,10)}function JA(e,t=XA){const n=[];let r=e.slice();for(const i of e){const s=n.find(a=>a.agent===i.agent);if(s){if(s.dates.push(i.date),Og(n)>t){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Og(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class eI{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return U_()?B_().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await YA(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){const r=await this.read();return Mg(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){if(await this._canUseIndexedDBPromise){const r=await this.read();return Mg(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...t.heartbeats]})}else return}}function Og(e){return vb(JSON.stringify({version:2,heartbeats:e})).length}function tI(e){if(e.length===0)return-1;let t=0,n=e[0].date;for(let r=1;r<e.length;r++)e[r].date<n&&(n=e[r].date,t=r);return t}/**
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
 */function nI(e){Ia(new rs("platform-logger",t=>new hA(t),"PRIVATE")),Ia(new rs("heartbeat",t=>new ZA(t),"PRIVATE")),Vi(Qd,Lg,e),Vi(Qd,Lg,"esm2020"),Vi("fire-js","")}/**
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
 */nI("");var rI="firebase",iI="13.1.0";/**
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
 */Vi(rI,iI,"app");function Ib(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const sI=Ib,Nb=new Wa("auth","Firebase",Ib());/**
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
 */const Ll=new Sb("@firebase/auth");function Xo(e,...t){Ll.logLevel<=we.WARN&&Ll.warn(`Auth (${qa}): ${e}`,...t)}function Qo(e,...t){Ll.logLevel<=we.ERROR&&Ll.error(`Auth (${qa}): ${e}`,...t)}/**
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
 */function kn(e,...t){throw Xp(e,...t)}function an(e,...t){return Xp(e,...t)}function wu(e,t,n){const r={...sI(),[t]:n};return new Wa("auth","Firebase",r).create(t,{appName:e.name})}function Zr(e){return wu(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function aI(e,t,n){const r=n;if(!(t instanceof r))throw r.name!==t.constructor.name&&kn(e,"argument-error"),wu(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Xp(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return Nb.create(e,...t)}function te(e,t,...n){if(!e)throw Xp(t,...n)}function Dn(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Qo(t),new Error(t)}function qn(e,t){e||Dn(t)}/**
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
 */function tf(){var e;return typeof self<"u"&&((e=self.location)==null?void 0:e.href)||""}function oI(){return zg()==="http:"||zg()==="https:"}function zg(){var e;return typeof self<"u"&&((e=self.location)==null?void 0:e.protocol)||null}/**
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
 */function lI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(oI()||F_()||"connection"in navigator)?navigator.onLine:!0}function uI(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
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
 */class Ka{constructor(t,n){this.shortDelay=t,this.longDelay=n,qn(n>t,"Short delay should be less than long delay!"),this.isMobile=D_()||O_()}get(){return lI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Qp(e,t){qn(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
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
 */class Pb{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Dn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Dn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Dn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const cI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const dI=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],fI=new Ka(3e4,6e4);function Zp(e,t){return e.tenantId&&!t.tenantId?{...t,tenantId:e.tenantId}:t}async function ms(e,t,n,r,i={}){return jb(e,i,async()=>{let s={},a={};r&&(t==="GET"?a=r:s={body:JSON.stringify(r)});const o=Ga({...a,key:e.config.apiKey}).slice(1),l=await e._getAdditionalHeaders();l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode);const u={method:t,headers:l,...s};return M_()||(u.referrerPolicy="strict-origin-when-cross-origin"),e.emulatorConfig&&Kp(e.emulatorConfig.host)&&(u.credentials="include"),Pb.fetch()(await Rb(e,e.config.apiHost,n,o),u)})}async function jb(e,t,n){e._canInitEmulator=!1;const r={...cI,...t};try{const i=new hI(e),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const a=await s.json();if("needConfirmation"in a)throw To(e,"account-exists-with-different-credential",a);if(s.ok&&!("errorMessage"in a))return a;{const o=s.ok?a.errorMessage:a.error.message,[l,u]=o.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw To(e,"credential-already-in-use",a);if(l==="EMAIL_EXISTS")throw To(e,"email-already-in-use",a);if(l==="USER_DISABLED")throw To(e,"user-disabled",a);const d=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw wu(e,d,u);kn(e,d)}}catch(i){if(i instanceof Ir)throw i;kn(e,"network-request-failed",{message:String(i)})}}async function pI(e,t,n,r,i={}){const s=await ms(e,t,n,r,i);return"mfaPendingCredential"in s&&kn(e,"multi-factor-auth-required",{_serverResponse:s}),s}async function Rb(e,t,n,r){const i=`${t}${n}?${r}`,s=e,a=s.config.emulator?Qp(e.config,i):`${e.config.apiScheme}://${i}`;return dI.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(a).toString():a}class hI{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(an(this.auth,"network-request-failed")),fI.get())})}}function To(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=an(e,t,r);return i.customData._tokenResponse=n,i}/**
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
 */async function mI(e,t){return ms(e,"POST","/v1/accounts:delete",t)}async function Dl(e,t){return ms(e,"POST","/v1/accounts:lookup",t)}/**
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
 */function Qs(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function gI(e,t=!1){const n=hs(e),r=await n.getIdToken(t),i=Jp(r);te(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,a=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Qs(xc(i.auth_time)),issuedAtTime:Qs(xc(i.iat)),expirationTime:Qs(xc(i.exp)),signInProvider:a||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function xc(e){return Number(e)*1e3}function Jp(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return Qo("JWT malformed, contained fewer than 3 sections"),null;try{const i=bb(n);return i?JSON.parse(i):(Qo("Failed to decode base64 JWT payload"),null)}catch(i){return Qo("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Ug(e){const t=Jp(e);return te(t,"internal-error"),te(typeof t.exp<"u","internal-error"),te(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
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
 */async function Pa(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw Lb(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function Lb(e){return e instanceof Ir?e.code==="auth/user-disabled"||e.code==="auth/user-token-expired":!1}/**
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
 */class yI{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){if(t){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class nf{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Qs(this.lastLoginAt),this.creationTime=Qs(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ml(e){var f;const t=e.auth,n=await e.getIdToken(),r=await Pa(e,Dl(t,{idToken:n}));te(r==null?void 0:r.users.length,t,"internal-error");const i=r.users[0];e._notifyReloadListener(i);const s=(f=i.providerUserInfo)!=null&&f.length?Db(i.providerUserInfo):[],a=vI(e.providerData,s),o=e.isAnonymous,l=!(e.email&&i.passwordHash)&&!(a!=null&&a.length),u=o?l:!1,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new nf(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(e,d)}async function xI(e){const t=hs(e);await Ml(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function vI(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function Db(e){return e.map(({providerId:t,...n})=>({providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function bI(e,t){const n=await jb(e,{},async()=>{const r=Ga({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:s}=e.config,a=await Rb(e,i,"/v1/token",`key=${s}`),o=await e._getAdditionalHeaders();o["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:o,body:r};return e.emulatorConfig&&Kp(e.emulatorConfig.host)&&(l.credentials="include"),Pb.fetch()(a,l)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function wI(e,t){return ms(e,"POST","/v2/accounts:revokeToken",Zp(e,t))}/**
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
 */class $i{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){te(t.idToken,"internal-error"),te(typeof t.idToken<"u","internal-error"),te(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):Ug(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}updateFromIdToken(t){te(t.length!==0,"internal-error");const n=Ug(t);this.updateTokensAndExpiration(t,null,n)}async getToken(t,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(te(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await bI(t,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,a=new $i;return r&&(te(typeof r=="string","internal-error",{appName:t}),a.refreshToken=r),i&&(te(typeof i=="string","internal-error",{appName:t}),a.accessToken=i),s&&(te(typeof s=="number","internal-error",{appName:t}),a.expirationTime=s),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new $i,this.toJSON())}_performRefresh(){return Dn("not implemented")}}/**
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
 */function Zn(e,t){te(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class tn{constructor({uid:t,auth:n,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new yI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new nf(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(t){const n=await Pa(this,this.stsTokenManager.getToken(this.auth,t));return te(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return gI(this,t)}reload(){return xI(this)}_assign(t){this!==t&&(te(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>({...n})),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new tn({...this,auth:t,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(t){te(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await Ml(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(gn(this.auth.app))return Promise.reject(Zr(this.auth));const t=await this.getIdToken();return await Pa(this,mI(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>({...t})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){const r=n.displayName??void 0,i=n.email??void 0,s=n.phoneNumber??void 0,a=n.photoURL??void 0,o=n.tenantId??void 0,l=n._redirectEventId??void 0,u=n.createdAt??void 0,d=n.lastLoginAt??void 0,{uid:f,emailVerified:p,isAnonymous:h,providerData:x,stsTokenManager:b}=n;te(f&&b,t,"internal-error");const k=$i.fromJSON(this.name,b);te(typeof f=="string",t,"internal-error"),Zn(r,t.name),Zn(i,t.name),te(typeof p=="boolean",t,"internal-error"),te(typeof h=="boolean",t,"internal-error"),Zn(s,t.name),Zn(a,t.name),Zn(o,t.name),Zn(l,t.name),Zn(u,t.name),Zn(d,t.name);const g=new tn({uid:f,auth:t,email:i,emailVerified:p,displayName:r,isAnonymous:h,photoURL:a,phoneNumber:s,tenantId:o,stsTokenManager:k,createdAt:u,lastLoginAt:d});return x&&Array.isArray(x)&&(g.providerData=x.map(m=>({...m}))),l&&(g._redirectEventId=l),g}static async _fromIdTokenResponse(t,n,r=!1){const i=new $i;i.updateFromServerResponse(n);const s=new tn({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await Ml(s),s}static async _fromGetAccountInfoResponse(t,n,r){const i=n.users[0];te(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?Db(i.providerUserInfo):[],a=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),o=new $i;o.updateFromIdToken(r);const l=new tn({uid:i.localId,auth:t,stsTokenManager:o,isAnonymous:a}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new nf(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(l,u),l}}/**
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
 */const Bg=new Map;function Mn(e){qn(e instanceof Function,"Expected a class definition");let t=Bg.get(e);return t?(qn(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Bg.set(e,t),t)}/**
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
 */class Mb{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}Mb.type="NONE";const Vg=Mb;/**
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
 */function Zo(e,t,n){return`firebase:${e}:${t}:${n}`}class Jr{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Zo(this.userKey,i.apiKey,s),this.fullPersistenceKey=Zo("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n);try{this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}catch{}}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);if(!t)return null;if(typeof t=="string"){const n=await Dl(this.auth,{idToken:t}).catch(()=>{});return n?tn._fromGetAccountInfoResponse(this.auth,n,t):null}return tn._fromJSON(this.auth,t)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){try{this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}catch{}}static async create(t,n,r="authUser"){if(!n.length)return new Jr(Mn(Vg),t,r);const i=(await Promise.all(n.map(async u=>{try{if(await u._isAvailable())return u}catch{return}}))).filter(u=>u);let s=i[0]||Mn(Vg);const a=Zo(r,t.config.apiKey,t.name);let o=null;for(const u of n)try{const d=await u._get(a);if(d){let f;if(typeof d=="string"){const p=await Dl(t,{idToken:d}).catch(()=>{});if(!p)break;f=await tn._fromGetAccountInfoResponse(t,p,d)}else f=tn._fromJSON(t,d);u!==s&&(o=f),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Jr(s,t,r):(s=l[0],o&&await s._set(a,o.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(a)}catch{}})),new Jr(s,t,r))}}/**
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
 */function $g(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Ub(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Fb(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Vb(t))return"Blackberry";if($b(t))return"Webos";if(Ob(t))return"Safari";if((t.includes("chrome/")||zb(t))&&!t.includes("edge/"))return"Chrome";if(Bb(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Fb(e=pt()){return/firefox\//i.test(e)}function Ob(e=pt()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function zb(e=pt()){return/crios\//i.test(e)}function Ub(e=pt()){return/iemobile/i.test(e)}function Bb(e=pt()){return/android/i.test(e)}function Vb(e=pt()){return/blackberry/i.test(e)}function $b(e=pt()){return/webos/i.test(e)}function eh(e=pt()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function kI(e=pt()){var t;return eh(e)&&!!((t=window.navigator)!=null&&t.standalone)}function SI(){return z_()&&document.documentMode===10}function Hb(e=pt()){return eh(e)||Bb(e)||$b(e)||Vb(e)||/windows phone/i.test(e)||Ub(e)}/**
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
 */function Wb(e,t=[]){let n;switch(e){case"Browser":n=$g(pt());break;case"Worker":n=`${$g(pt())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${qa}/${r}`}/**
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
 */class EI{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=s=>new Promise((a,o)=>{try{const l=t(s);a(l)}catch(l){o(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function CI(e,t={}){return ms(e,"GET","/v2/passwordPolicy",Zp(e,t))}/**
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
 */const TI=6;class _I{constructor(t){var r;const n=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??TI,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=t.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=t.forceUpgradeOnSignin??!1,this.schemaVersion=t.schemaVersion}validatePassword(t){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,n),this.validatePasswordCharacterOptions(t,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(t,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=t.length>=r),i&&(n.meetsMaxPasswordLength=t.length<=i)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<t.length;i++)r=t.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=s))}}/**
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
 */class AI{constructor(t,n,r,i){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Hg(this),this.idTokenSubscription=new Hg(this),this.beforeStateQueue=new EI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Nb,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=Mn(n)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted){try{this.persistenceManager=await Jr.create(this,t)}catch(a){Xo(`Failed to initialize persistence: ${a}`),this.persistenceManager=await Jr.create(this,[])}finally{(r=this._resolvePersistenceManagerAvailable)==null||r.call(this)}if(!this._deleted){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}try{await this.initializeCurrentUser(n)}catch(a){Xo(`Failed to initialize current user: ${a}`),await this.directlySetCurrentUser(null).catch(()=>{})}this.lastNotifiedUid=((s=this.currentUser)==null?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const n=await Dl(this,{idToken:t}),r=await tn._fromGetAccountInfoResponse(this,n,t);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var s;if(gn(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(o=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(o,o))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(s=this.redirectUser)==null?void 0:s._redirectEventId,o=r==null?void 0:r._redirectEventId,l=await this.tryRedirectSignIn(t);(!a||a===o)&&(l!=null&&l.user)&&(r=l.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(a){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return te(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await Ml(t)}catch(n){if(Lb(n))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=uI()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(gn(this.app))return Promise.reject(Zr(this));const n=t?hs(t):null;return n&&te(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&te(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return gn(this.app)?Promise.reject(Zr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return gn(this.app)?Promise.reject(Zr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Mn(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await CI(this),n=new _I(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(t){this._errorFactory=new Wa("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await wI(this,r)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)==null?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&Mn(t)||this._popupRedirectResolver;te(n,this,"argument-error"),this.redirectPersistenceManager=await Jr.create(this,[Mn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const t=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==t&&(this.lastNotifiedUid=t,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let a=!1;const o=this._isInitialized?Promise.resolve():this._initializationPromise;if(te(o,this,"internal-error"),o.then(()=>{a||s(this.currentUser)}).catch(l=>{if(!a)if(typeof n!="function"&&n.error)n.error(l);else if(r)r(l);else throw l}),typeof n=="function"){const l=t.addObserver(n,r,i);return()=>{a=!0,l()}}else{const l=t.addObserver(n);return()=>{a=!0,l()}}}async directlySetCurrentUser(t){if(this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,this.persistenceManager)try{t?await this.persistenceManager.setCurrentUser(t):await this.persistenceManager.removeCurrentUser()}catch(n){const r=(n==null?void 0:n.message)||String(n),i=wu(this,"internal-error",`An internal AuthError has occurred: ${r}`);throw i.customData={originalError:n},i}}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return te(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Wb(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(t["X-Firebase-AppCheck"]=r),t}async _getAppCheckToken(){var n;if(gn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return t!=null&&t.error&&Xo(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function ku(e){return hs(e)}class Hg{constructor(t){this.auth=t,this.observer=null,this.addObserver=W_(n=>this.observer=n)}get next(){return te(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let th={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function II(e){th=e}function NI(e){return th.loadJS(e)}function PI(){return th.gapiScript}function jI(e){return`__${e}${Math.floor(Math.random()*1e6)}`}/**
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
 */function RI(e,t){const n=Tb(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(ns(s,t??{}))return i;kn(i,"already-initialized")}return n.initialize({options:t})}function LI(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Mn);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function DI(e,t,n){const r=ku(e);te(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!1,s=Gb(t),{host:a,port:o}=MI(t),l=o===null?"":`:${o}`,u={url:`${s}//${a}${l}/`},d=Object.freeze({host:a,port:o,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){te(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),te(ns(u,r.config.emulator)&&ns(d,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=d,r.settings.appVerificationDisabledForTesting=!0,Kp(a)?K_(`${s}//${a}${l}`):FI()}function Gb(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function MI(e){const t=Gb(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Wg(r.substr(s.length+1))}}else{const[s,a]=r.split(":");return{host:s,port:Wg(a)}}}function Wg(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function FI(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
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
 */class qb{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return Dn("not implemented")}_getIdTokenResponse(t){return Dn("not implemented")}_linkToIdToken(t,n){return Dn("not implemented")}_getReauthenticationResolver(t){return Dn("not implemented")}}/**
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
 */async function Hi(e,t){return pI(e,"POST","/v1/accounts:signInWithIdp",Zp(e,t))}/**
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
 */const OI="http://localhost";class li extends qb{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new li(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):kn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i,...s}=n;if(!r||!i)return null;const a=new li(r,i);return a.idToken=s.idToken||void 0,a.accessToken=s.accessToken||void 0,a.secret=s.secret,a.nonce=s.nonce,a.pendingToken=s.pendingToken||null,a}_getIdTokenResponse(t){const n=this.buildRequest();return Hi(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,Hi(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,Hi(t,n)}buildRequest(){const t={requestUri:OI,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=Ga(n)}return t}}/**
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
 */class nh{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ya extends nh{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
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
 */class ar extends Ya{constructor(){super("facebook.com")}static credential(t){return li._fromParams({providerId:ar.PROVIDER_ID,signInMethod:ar.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return ar.credentialFromTaggedObject(t)}static credentialFromError(t){return ar.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return ar.credential(t.oauthAccessToken)}catch{return null}}}ar.FACEBOOK_SIGN_IN_METHOD="facebook.com";ar.PROVIDER_ID="facebook.com";/**
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
 */class en extends Ya{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return li._fromParams({providerId:en.PROVIDER_ID,signInMethod:en.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return en.credentialFromTaggedObject(t)}static credentialFromError(t){return en.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return en.credential(n,r)}catch{return null}}}en.GOOGLE_SIGN_IN_METHOD="google.com";en.PROVIDER_ID="google.com";/**
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
 */class or extends Ya{constructor(){super("github.com")}static credential(t){return li._fromParams({providerId:or.PROVIDER_ID,signInMethod:or.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return or.credentialFromTaggedObject(t)}static credentialFromError(t){return or.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return or.credential(t.oauthAccessToken)}catch{return null}}}or.GITHUB_SIGN_IN_METHOD="github.com";or.PROVIDER_ID="github.com";/**
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
 */class lr extends Ya{constructor(){super("twitter.com")}static credential(t,n){return li._fromParams({providerId:lr.PROVIDER_ID,signInMethod:lr.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return lr.credentialFromTaggedObject(t)}static credentialFromError(t){return lr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return lr.credential(n,r)}catch{return null}}}lr.TWITTER_SIGN_IN_METHOD="twitter.com";lr.PROVIDER_ID="twitter.com";/**
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
 */class is{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){const s=await tn._fromIdTokenResponse(t,r,i),a=Gg(r);return new is({user:s,providerId:a,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const i=Gg(r);return new is({user:t,providerId:i,_tokenResponse:r,operationType:n})}}function Gg(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
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
 */class Fl extends Ir{constructor(t,n,r,i){super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Fl.prototype),this.customData={appName:t.name,tenantId:t.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new Fl(t,n,r,i)}}function Kb(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Fl._fromErrorAndOperation(e,s,t,r):s})}async function zI(e,t,n=!1){const r=await Pa(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return is._forOperation(e,"link",r)}/**
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
 */async function UI(e,t,n=!1){const{auth:r}=e;if(gn(r.app))return Promise.reject(Zr(r));const i="reauthenticate";try{const s=await Pa(e,Kb(r,i,t,e),n);te(s.idToken,r,"internal-error");const a=Jp(s.idToken);te(a,r,"internal-error");const{sub:o}=a;return te(e.uid===o,r,"user-mismatch"),is._forOperation(e,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&kn(r,"user-mismatch"),s}}/**
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
 */async function BI(e,t,n=!1){if(gn(e.app))return Promise.reject(Zr(e));const r="signIn",i=await Kb(e,r,t),s=await is._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}function VI(e,t,n,r){return hs(e).onIdTokenChanged(t,n,r)}function $I(e,t,n){return hs(e).beforeAuthStateChanged(t,n)}const Ol="__sak";/**
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
 */class Yb{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ol,"1"),this.storage.removeItem(Ol),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const HI=1e3,WI=10;class Xb extends Yb{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Hb(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&t(n,i,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((a,o,l)=>{this.notifyListeners(a,l)});return}const r=t.key;n?this.detachListener():this.stopPolling();const i=()=>{const a=this.storage.getItem(r);!n&&this.localCache[r]===a||this.notifyListeners(r,a)},s=this.storage.getItem(r);SI()&&s!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,WI):i()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},HI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}Xb.type="LOCAL";const GI=Xb;/**
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
 */class Qb extends Yb{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}Qb.type="SESSION";const Zb=Qb;/**
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
 */function qI(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Su{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const r=new Su(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:i,data:s}=n.data,a=this.handlersMap[i];if(!(a!=null&&a.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const o=Array.from(a).map(async u=>u(n.origin,s)),l=await qI(o);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Su.receivers=[];/**
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
 */function rh(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
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
 */class KI{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,a;return new Promise((o,l)=>{const u=rh("",20);i.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},r);a={messageChannel:i,onMessage(f){const p=f;if(p.data.eventId===u)switch(p.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),o(p.data.response);break;default:clearTimeout(d),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:t,eventId:u,data:n},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function vn(){return window}function YI(e){vn().location.href=e}/**
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
 */function Jb(){return typeof vn().WorkerGlobalScope<"u"&&typeof vn().importScripts=="function"}async function XI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function QI(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)==null?void 0:e.controller)||null}function ZI(){return Jb()?self:null}/**
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
 */const ew="firebaseLocalStorageDb",JI=1,zl="firebaseLocalStorage",tw="fbase_key";class Xa{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Eu(e,t){return e.transaction([zl],t?"readwrite":"readonly").objectStore(zl)}function eN(){const e=indexedDB.deleteDatabase(ew);return new Xa(e).toPromise()}function nw(){const e=indexedDB.open(ew,JI);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(zl,{keyPath:tw})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(zl)?t(r):(r.close(),await eN(),t(await nw()))})})}async function qg(e,t,n){const r=Eu(e,!0).put({[tw]:t,value:n});return new Xa(r).toPromise()}async function tN(e,t){const n=Eu(e,!1).get(t),r=await new Xa(n).toPromise();return r===void 0?null:r.value}function Kg(e,t){const n=Eu(e,!0).delete(t);return new Xa(n).toPromise()}const nN=800,rN=3;class rw{registerLifecycleListeners(){typeof window<"u"&&typeof window.addEventListener=="function"&&(window.addEventListener("pagehide",this.onPageHide),window.addEventListener("pageshow",this.onPageShow))}unregisterLifecycleListeners(){typeof window<"u"&&typeof window.removeEventListener=="function"&&(window.removeEventListener("pagehide",this.onPageHide),window.removeEventListener("pageshow",this.onPageShow))}constructor(){this.type="LOCAL",this.dbPromise=null,this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.isClosing=!1,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this.onPageHide=()=>{this.isClosing=!0,this.stopPolling(),this.dbPromise&&(this.dbPromise.then(t=>t.close()).catch(()=>{}),this.dbPromise=null)},this.onPageShow=()=>{this.isClosing&&(this.isClosing=!1,Object.keys(this.listeners).length>0&&this.startPolling())},this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.dbPromise?this.dbPromise:(this.dbPromise=nw(),this.dbPromise.catch(()=>{this.dbPromise=null}),this.dbPromise)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>rN)throw r;if(this.dbPromise){const i=this.dbPromise;this.dbPromise=null;try{(await i).close()}catch{}}}}async initializeServiceWorkerMessaging(){return Jb()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Su._getInstance(ZI()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await XI(),!this.activeServiceWorker)return;this.sender=new KI(this.activeServiceWorker);const t=await this.sender._send("ping",{},800);t&&(n=t[0])!=null&&n.fulfilled&&(r=t[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||QI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{return indexedDB?(await this._withRetries(async t=>{await qg(t,Ol,"1"),await Kg(t,Ol)}),!0):!1}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>qg(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>tN(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Kg(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){if(this.isClosing)return[];try{const t=await this._withRetries(i=>{const s=Eu(i,!1).getAll();return new Xa(s).toPromise()});if(this.isClosing)return[];if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(t.length!==0)for(const{fbase_key:i,value:s}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}catch(t){return this.isClosing||Xo(`Firebase Auth cross-tab polling failed with error: ${t}`),[]}}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),nN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.startPolling(),this.registerLifecycleListeners()),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.stopPolling(),this.unregisterLifecycleListeners())}}rw.type="LOCAL";const iN=rw;new Ka(3e4,6e4);/**
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
 */function iw(e,t){return t?Mn(t):(te(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
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
 */class ih extends qb{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Hi(t,this._buildIdpRequest())}_linkToIdToken(t,n){return Hi(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return Hi(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function sN(e){return BI(e.auth,new ih(e),e.bypassAuthState)}function aN(e){const{auth:t,user:n}=e;return te(n,t,"internal-error"),UI(n,new ih(e),e.bypassAuthState)}async function oN(e){const{auth:t,user:n}=e;return te(n,t,"internal-error"),zI(n,new ih(e),e.bypassAuthState)}/**
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
 */class sw{constructor(t,n,r,i,s=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:a,type:o}=t;if(a){this.reject(a);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(l))}catch(u){this.reject(u)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return sN;case"linkViaPopup":case"linkViaRedirect":return oN;case"reauthViaPopup":case"reauthViaRedirect":return aN;default:kn(this.auth,"internal-error")}}resolve(t){qn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){qn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const lN=new Ka(2e3,1e4);async function uN(e,t,n){if(gn(e.app))return Promise.reject(an(e,"operation-not-supported-in-this-environment"));const r=ku(e);aI(e,t,nh);const i=iw(r,n);return new qr(r,"signInViaPopup",t,i).executeNotNull()}class qr extends sw{constructor(t,n,r,i,s){super(t,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,qr.currentPopupAction&&qr.currentPopupAction.cancel(),qr.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return te(t,this.auth,"internal-error"),t}async onExecution(){qn(this.filter.length===1,"Popup operations only handle one event");const t=rh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(an(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)==null?void 0:t.associatedEvent)||null}cancel(){this.reject(an(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,qr.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(an(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,lN.get())};t()}}qr.currentPopupAction=null;/**
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
 */const cN="pendingRedirect",Jo=new Map;class dN extends sw{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=Jo.get(this.auth._key());if(!t){try{const r=await fN(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}Jo.set(this.auth._key(),t)}return this.bypassAuthState||Jo.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function fN(e,t){const n=mN(t),r=hN(e);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function pN(e,t){Jo.set(e._key(),t)}function hN(e){return Mn(e._redirectPersistence)}function mN(e){return Zo(cN,e.config.apiKey,e.name)}async function gN(e,t,n=!1){if(gn(e.app))return Promise.reject(Zr(e));const r=ku(e),i=iw(r,t),a=await new dN(r,i,n).execute();return a&&!n&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,t)),a}/**
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
 */const yN=10*60*1e3;class xN{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!vN(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!aw(t)){const i=((r=t.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(an(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=yN&&this.cachedEventUids.clear(),this.cachedEventUids.has(Yg(t))}saveEventToCache(t){this.cachedEventUids.add(Yg(t)),this.lastProcessedEventTime=Date.now()}}function Yg(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function aw({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function vN(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return aw(e);default:return!1}}/**
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
 */async function bN(e,t={}){return ms(e,"GET","/v1/projects",t)}/**
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
 */const wN=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,kN=/^https?/;async function SN(e){if(e.config.emulator)return;const{authorizedDomains:t}=await bN(e);for(const n of t)try{if(EN(n))return}catch{}kn(e,"unauthorized-domain")}function EN(e){const t=tf(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const a=new URL(e);return a.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&a.hostname===r}if(!kN.test(n))return!1;if(wN.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const CN=new Ka(3e4,6e4);function Xg(){const e=vn().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function TN(e){return new Promise((t,n)=>{var i,s,a;function r(){Xg(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Xg(),n(an(e,"network-request-failed"))},timeout:CN.get()})}if((s=(i=vn().gapi)==null?void 0:i.iframes)!=null&&s.Iframe)t(gapi.iframes.getContext());else if((a=vn().gapi)!=null&&a.load)r();else{const o=jI("iframefcb");return vn()[o]=()=>{gapi.load?r():n(an(e,"network-request-failed"))},NI(`${PI()}?onload=${o}`).catch(l=>n(l))}}).catch(t=>{throw el=null,t})}let el=null;function _N(e){return el=el||TN(e),el}/**
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
 */const AN=new Ka(5e3,15e3),IN="__/auth/iframe",NN="emulator/auth/iframe",PN={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},jN=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function RN(e){const t=e.config;te(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Qp(t,NN):`https://${e.config.authDomain}/${IN}`,r={apiKey:t.apiKey,appName:e.name,v:qa},i=jN.get(e.config.apiHost);i&&(r.eid=i);const s=e._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Ga(r).slice(1)}`}async function LN(e){const t=await _N(e),n=vn().gapi;return te(n,e,"internal-error"),t.open({where:document.body,url:RN(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:PN,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const a=an(e,"network-request-failed"),o=vn().setTimeout(()=>{s(a)},AN.get());function l(){vn().clearTimeout(o),i(r)}r.ping(l).then(l,()=>{s(a)})}))}/**
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
 */const DN={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},MN=500,FN=600,ON="_blank",zN="http://localhost";class Qg{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function UN(e,t,n,r=MN,i=FN){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let o="";const l={...DN,width:r.toString(),height:i.toString(),top:s,left:a},u=pt().toLowerCase();n&&(o=zb(u)?ON:n),Fb(u)&&(t=t||zN,l.scrollbars="yes");const d=Object.entries(l).reduce((p,[h,x])=>`${p}${h}=${x},`,"");if(kI(u)&&o!=="_self")return BN(t||"",o),new Qg(null);const f=window.open(t||"",o,d);te(f,e,"popup-blocked");try{f.focus()}catch{}return new Qg(f)}function BN(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const VN="__/auth/handler",$N="emulator/auth/handler",HN=encodeURIComponent("fac");async function Zg(e,t,n,r,i,s){te(e.config.authDomain,e,"auth-domain-config-required"),te(e.config.apiKey,e,"invalid-api-key");const a={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:qa,eventId:i};if(t instanceof nh){t.setDefaultLanguage(e.languageCode),a.providerId=t.providerId||"",H_(t.getCustomParameters())||(a.customParameters=JSON.stringify(t.getCustomParameters()));for(const[d,f]of Object.entries({}))a[d]=f}if(t instanceof Ya){const d=t.getScopes().filter(f=>f!=="");d.length>0&&(a.scopes=d.join(","))}e.tenantId&&(a.tid=e.tenantId);const o=a;for(const d of Object.keys(o))o[d]===void 0&&delete o[d];const l=await e._getAppCheckToken(),u=l?`#${HN}=${encodeURIComponent(l)}`:"";return`${WN(e)}?${Ga(o).slice(1)}${u}`}function WN({config:e}){return e.emulator?Qp(e,$N):`https://${e.authDomain}/${VN}`}/**
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
 */const vc="webStorageSupport";class GN{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Zb,this._completeRedirectFn=gN,this._overrideRedirectResult=pN}async _openPopup(t,n,r,i){var a;qn((a=this.eventManagers[t._key()])==null?void 0:a.manager,"_initialize() not called before _openPopup()");const s=await Zg(t,n,r,tf(),i);return UN(t,s,rh())}async _openRedirect(t,n,r,i){await this._originValidation(t);const s=await Zg(t,n,r,tf(),i);return YI(s),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(qn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await LN(t),r=new xN(t);return n.register("authEvent",i=>(te(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(vc,{type:vc},i=>{var a;const s=(a=i==null?void 0:i[0])==null?void 0:a[vc];s!==void 0&&n(!!s),kn(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=SN(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return Hb()||Ob()||eh()}}const qN=GN;var Jg="@firebase/auth",ey="1.13.8";/**
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
 */class KN{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)==null?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){te(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function YN(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function XN(e){Ia(new rs("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),s=t.getProvider("app-check-internal"),{apiKey:a,authDomain:o}=r.options;te(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:a,authDomain:o,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Wb(e)},u=new AI(r,i,s,l);return LI(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),Ia(new rs("auth-internal",t=>{const n=ku(t.getProvider("auth").getImmediate());return(r=>new KN(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Vi(Jg,ey,YN(e)),Vi(Jg,ey,"esm2020")}/**
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
 */const QN=5*60,ZN=kb("authIdTokenMaxAge")||QN;let ty=null;const JN=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>ZN)return;const i=n==null?void 0:n.token;ty!==i&&(ty=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function rf(e=Rl()){const t=Tb(e,"auth");if(t.isInitialized())return t.getImmediate();const n=RI(e,{popupRedirectResolver:qN,persistence:[iN,GI,Zb]}),r=kb("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const a=JN(s.toString());$I(n,a,()=>a(n.currentUser)),VI(n,o=>a(o))}}const i=R_("auth");return i&&DI(n,`http://${i}`),n}function e5(){var e;return((e=document.getElementsByTagName("head"))==null?void 0:e[0])??document}II({loadJS(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const s=an("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",e5().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});XN("Browser");const Fn={apiKey:"AIzaSyCAxS9gkP7rlF15piWD4xHng6cRcfv-YVI",authDomain:"elizaaivoice.firebaseapp.com",projectId:"elizaaivoice",storageBucket:"elizaaivoice.firebasestorage.app",messagingSenderId:"826705071135",appId:"1:826705071135:web:b6997ba92c34349ae9992a"};function ow(){return!!(Fn.apiKey&&Fn.authDomain&&Fn.projectId&&!Fn.apiKey.includes("YOUR_"))}let Ii=null,Ms=null,rr=null;if(ow())try{Ii=ef().length>0?Rl():jl(Fn),Ms=rf(Ii),rr=new en,rr.setCustomParameters({prompt:"select_account"})}catch(e){console.error("Failed to initialize Firebase:",e)}async function t5(){var e;if(!ow())if(!Ii&&Fn.apiKey&&Fn.projectId)Ii=ef().length>0?Rl():jl(Fn),Ms=rf(Ii),rr=new en,rr.setCustomParameters({prompt:"select_account"});else throw new Error("Firebase is not configured. Please add your Firebase configuration (VITE_FIREBASE_API_KEY, etc.) to .env");Ms||(Ms=rf(Ii||(ef().length>0?Rl():jl(Fn)))),rr||(rr=new en,rr.setCustomParameters({prompt:"select_account"}));try{const n=(await uN(Ms,rr)).user,r=await n.getIdToken(!0);return{user:n,email:n.email,displayName:n.displayName||((e=n.email)==null?void 0:e.split("@")[0])||"User",photoURL:n.photoURL||"",idToken:r}}catch(t){if(t.code==="auth/popup-closed-by-user"||t.code==="auth/cancelled-popup-request"){const n=new Error("Sign-in cancelled. Please try again.");throw n.code="CANCELLED",n}throw t.code==="auth/popup-blocked"?new Error("Popup blocked by browser. Please allow popups for this site and try again."):t.code==="auth/unauthorized-domain"?new Error("This domain is not authorized in Firebase Console (Authentication > Settings > Authorized domains)."):new Error(t.message||"Failed to sign in with Google.")}}const n5=()=>c.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",style:{flexShrink:0},children:[c.jsx("path",{fill:"#4285F4",d:"M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"}),c.jsx("path",{fill:"#34A853",d:"M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"}),c.jsx("path",{fill:"#FBBC05",d:"M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"}),c.jsx("path",{fill:"#EA4335",d:"M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"})]});function r5({onAccessGranted:e,onShowFeedback:t,isModal:n=!1,onClose:r}){const[i,s]=C.useState(!1),[a,o]=C.useState(""),[l,u]=C.useState(null);C.useEffect(()=>{if(typeof window<"u"&&"speechSynthesis"in window)try{window.speechSynthesis.cancel()}catch{}},[]);const d=async()=>{o("");try{sessionStorage.removeItem("eliza_pending_q")}catch{}s(!0);try{const p=await t5();if(!p||!p.email)throw new Error("No Google email account received from sign-in.");const h=await _a.googleLogin({email:p.email,name:p.displayName,picture:p.photoURL,credential:p.idToken});h.blocked?(u(h),e&&e(h)):h.allowed?e&&e(h):o(h.message||"Access not available at this time.")}catch(p){p.code==="CANCELLED"?o(""):o(p.message||"Google sign-in failed. Please try again.")}finally{s(!1)}},f=p=>{if(!p)return"20 days from period start";try{return new Date(p).toLocaleDateString(void 0,{month:"short",day:"numeric",year:"numeric",hour:"2-digit",minute:"2-digit"})}catch{return p}};return c.jsxs("div",{className:`email-gate-container ${n?"is-modal":""}`,children:[c.jsx("div",{className:"gate-glow","aria-hidden":"true"}),c.jsxs("div",{className:"gate-card",children:[r&&n&&c.jsx("button",{className:"btn-close-modal",onClick:r,"aria-label":"Close",children:c.jsx(It,{size:16})}),c.jsxs("div",{className:"brand-header",children:[c.jsx("div",{className:"brand-icon",children:c.jsx(Gd,{size:20,className:"icon-pulse"})}),c.jsxs("div",{className:"brand-text",children:[c.jsxs("h2",{children:["ELIZA",c.jsx("span",{children:"AI"})]}),c.jsx("span",{children:"VOICE INTELLIGENCE TRIAL ACCESS"})]})]}),l?c.jsxs("div",{className:"limit-block-view",children:[c.jsx("div",{className:"limit-icon-circle",children:c.jsx($p,{size:28})}),c.jsx("h3",{children:"Your limit is over."}),c.jsx("p",{className:"limit-thanks",children:"Thank you for your consideration."}),c.jsx("p",{className:"limit-text",children:"Please provide a review and feedback to help us improve."}),c.jsxs("div",{className:"blocked-date-badge",children:[c.jsx("span",{children:"Access restricted until"}),c.jsx("b",{children:f(l.blockedUntil)})]}),c.jsx("button",{type:"button",className:"btn-feedback-primary",onClick:()=>t&&t(l),children:"Give Feedback"}),c.jsx("button",{type:"button",className:"btn-link",onClick:()=>{u(null),d()},children:"Sign in with a different Google account"})]}):c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"gate-copy",children:[c.jsx("div",{className:"trial-pill",children:"FREE TRIAL ACCESS"}),c.jsx("h3",{children:"Start your conversation"}),c.jsxs("p",{children:["Authenticate with Google to verify your email and continue your free trial. Each account receives ",c.jsx("b",{children:"3 questions per 20-day period"}),"."]})]}),a&&c.jsxs("div",{className:"error-alert",children:[c.jsx(Bp,{size:15}),c.jsx("span",{children:a})]}),c.jsx("div",{className:"google-auth-container",children:c.jsx("button",{type:"button",className:"btn-google-direct",onClick:d,disabled:i,children:i?c.jsxs("span",{className:"spinner-text",children:[c.jsx("span",{className:"gate-spinner"})," Connecting to Google..."]}):c.jsxs(c.Fragment,{children:[c.jsx(n5,{}),c.jsx("span",{children:"Sign in with Google"})]})})}),c.jsxs("div",{className:"gate-perks",children:[c.jsxs("div",{className:"perk-item",children:[c.jsx(Kd,{size:13}),c.jsx("span",{children:"Zero spam · Privacy guarded"})]}),c.jsxs("div",{className:"perk-item",children:[c.jsx(Gp,{size:13}),c.jsx("span",{children:"3 questions · 20-day cycle"})]})]}),c.jsxs("div",{className:"developer-showcase-box",children:[c.jsxs("div",{className:"dev-box-top",children:[c.jsx(Pl,{size:13,className:"dev-icon"}),c.jsx("span",{children:"DEVELOPED BY AKHIL THADAKA"})]}),c.jsx("p",{children:"Full-Stack & AI Voice Developer · Actively searching for better opportunities, ready to work, and available for freelance projects."}),c.jsxs("a",{href:"tel:9121751697",className:"dev-contact-pill",children:[c.jsx(Ca,{size:12}),c.jsxs("span",{children:["Contact: ",c.jsx("b",{children:"9121751697"})]})]})]})]})]}),c.jsx("style",{children:`
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
      `})]})}function i5({blockedUntil:e,onGiveFeedback:t}){C.useEffect(()=>{if(typeof window<"u"&&"speechSynthesis"in window)try{window.speechSynthesis.cancel()}catch{}},[]);const n=r=>{if(!r)return"20 days from period start";try{return new Date(r).toLocaleDateString(void 0,{month:"short",day:"numeric",year:"numeric",hour:"2-digit",minute:"2-digit"})}catch{return r}};return c.jsxs("div",{className:"limit-exceeded-overlay",role:"dialog","aria-modal":"true","aria-labelledby":"limit-title",children:[c.jsxs("div",{className:"limit-exceeded-modal",children:[c.jsx("div",{className:"limit-icon-wrap",children:c.jsx(ib,{size:26,className:"limit-icon"})}),c.jsx("h2",{id:"limit-title",className:"limit-title",children:"Your limit is over."}),c.jsx("p",{className:"limit-consideration",children:"Thank you for your consideration."}),c.jsx("p",{className:"limit-instructions",children:"Please provide a review and feedback to help us improve."}),c.jsxs("div",{className:"limit-date-box",children:[c.jsxs("div",{className:"date-label",children:[c.jsx($p,{size:12}),c.jsx("span",{children:"Next access cycle available"})]}),c.jsx("div",{className:"date-val",children:n(e)})]}),c.jsxs("button",{type:"button",className:"btn-give-feedback",onClick:t,children:[c.jsx(sb,{size:16}),c.jsx("span",{children:"Give Feedback"})]}),c.jsxs("div",{className:"developer-showcase-box",children:[c.jsxs("div",{className:"dev-box-top",children:[c.jsx(Pl,{size:12,className:"dev-icon"}),c.jsx("span",{children:"DEVELOPED BY AKHIL THADAKA"})]}),c.jsx("p",{children:"Full-Stack & AI Voice Developer · Actively searching for better opportunities, ready to work, and available for freelance projects."}),c.jsxs("a",{href:"tel:9121751697",className:"dev-contact-pill",children:[c.jsx(Ca,{size:11}),c.jsxs("span",{children:["Contact: ",c.jsx("b",{children:"9121751697"})]})]})]})]}),c.jsx("style",{children:`
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
      `})]})}const s5=["Voice Experience","Answer Quality","Freelance","Bug","Feature Request","Other"];function a5({email:e,onClose:t,onSubmitted:n}){const[r,i]=C.useState(5),[s,a]=C.useState(0),[o,l]=C.useState("Voice Experience"),[u,d]=C.useState(""),[f,p]=C.useState(!1),[h,x]=C.useState(""),[b,k]=C.useState(!1);C.useEffect(()=>{if(typeof window<"u"&&"speechSynthesis"in window)try{window.speechSynthesis.cancel()}catch{}},[]);const g=async m=>{m.preventDefault();const y=u.trim();if(!y||y.length<10){x("Please share at least 10 characters of feedback.");return}if(y.length>2e3){x("Feedback message must not exceed 2000 characters.");return}x(""),p(!0);try{await _a.submitFeedback({rating:r,category:o,message:y}),k(!0),n&&n()}catch(v){x(v.message||"Failed to submit feedback. Please try again.")}finally{p(!1)}};return c.jsxs("div",{className:"feedback-modal-overlay",role:"dialog","aria-modal":"true",children:[c.jsxs("div",{className:"feedback-card",children:[c.jsxs("div",{className:"feedback-top",children:[c.jsx("div",{className:"feedback-badge",children:"FEEDBACK & REVIEW"}),t&&c.jsx("button",{className:"btn-close",onClick:t,"aria-label":"Close",children:c.jsx(It,{size:16})})]}),b?c.jsxs("div",{className:"feedback-success-state",children:[c.jsx("div",{className:"success-icon-wrap",children:c.jsx(Ea,{size:38})}),c.jsx("h3",{children:"Thank you for your feedback!"}),c.jsx("p",{children:"Your review has been saved in the database and helps us continuously refine Eliza AI."}),c.jsx("p",{className:"note-restriction",children:"The 20-day limit period remains active on your email until the scheduled expiration date."}),c.jsxs("div",{className:"developer-showcase-box",style:{marginTop:"14px"},children:[c.jsxs("div",{className:"dev-box-top",children:[c.jsx(Pl,{size:12,className:"dev-icon"}),c.jsx("span",{children:"DEVELOPED BY AKHIL THADAKA"})]}),c.jsx("p",{children:"Full-Stack & AI Voice Developer · Ready to work immediately · Available for freelance projects & better opportunities."}),c.jsxs("a",{href:"tel:9121751697",className:"dev-contact-pill",children:[c.jsx(Ca,{size:11}),c.jsxs("span",{children:["Contact: ",c.jsx("b",{children:"9121751697"})]})]})]}),t&&c.jsx("button",{type:"button",className:"btn-submit-action",onClick:t,style:{marginTop:"14px"},children:"Done"})]}):c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"feedback-intro",children:[c.jsx("h3",{children:"We appreciate your review"}),c.jsx("p",{children:"Tell us how your conversation went and what we can improve."})]}),c.jsxs("form",{onSubmit:g,className:"feedback-form",children:[c.jsxs("div",{className:"form-group",children:[c.jsx("label",{children:"Verified Account Email"}),c.jsx("input",{type:"email",value:e||"",disabled:!0,className:"input-disabled"})]}),c.jsxs("div",{className:"form-group",children:[c.jsx("label",{children:"Rating"}),c.jsxs("div",{className:"star-rating-row",role:"radiogroup","aria-label":"Rating from 1 to 5 stars",children:[[1,2,3,4,5].map(m=>c.jsx("button",{type:"button",className:"star-btn",onClick:()=>i(m),onMouseEnter:()=>a(m),onMouseLeave:()=>a(0),"aria-label":`${m} star`,children:c.jsx(br,{size:20,className:`star-icon ${m<=(s||r)?"filled":"empty"}`})},m)),c.jsxs("span",{className:"rating-text",children:[r===5&&"Excellent",r===4&&"Good",r===3&&"Fair",r===2&&"Needs work",r===1&&"Poor"]})]})]}),c.jsxs("div",{className:"form-group",children:[c.jsx("label",{htmlFor:"category-select",children:"Category"}),c.jsx("select",{id:"category-select",value:o,onChange:m=>l(m.target.value),className:"select-category",children:s5.map(m=>c.jsx("option",{value:m,children:m},m))})]}),c.jsxs("div",{className:"form-group",children:[c.jsxs("label",{htmlFor:"feedback-message",children:[c.jsx("span",{children:"Your feedback"}),c.jsxs("small",{children:[u.length,"/2000"]})]}),c.jsx("textarea",{id:"feedback-message",value:u,onChange:m=>{d(m.target.value),h&&x("")},placeholder:"Share details on your conversation, voice quality, or ideas...",rows:3,maxLength:2e3,required:!0})]}),h&&c.jsxs("div",{className:"error-alert",children:[c.jsx(Bp,{size:14}),c.jsx("span",{children:h})]}),c.jsxs("div",{className:"form-actions",children:[t&&c.jsxs("button",{type:"button",className:"btn-back",onClick:t,children:[c.jsx(Op,{size:13}),c.jsx("span",{children:"Cancel"})]}),c.jsx("button",{type:"submit",className:"btn-submit-action",disabled:f||!u.trim(),children:f?c.jsx("span",{children:"Submitting..."}):c.jsxs(c.Fragment,{children:[c.jsx("span",{children:"Submit Feedback"}),c.jsx(ub,{size:14})]})})]})]}),c.jsxs("div",{className:"developer-showcase-box",style:{marginTop:"12px"},children:[c.jsxs("div",{className:"dev-box-top",children:[c.jsx(Pl,{size:12,className:"dev-icon"}),c.jsx("span",{children:"DEVELOPED BY AKHIL THADAKA"})]}),c.jsx("p",{children:"Full-Stack & AI Voice Developer · Ready to work immediately · Available for freelance projects & better opportunities."}),c.jsxs("a",{href:"tel:9121751697",className:"dev-contact-pill",children:[c.jsx(Ca,{size:11}),c.jsxs("span",{children:["Contact: ",c.jsx("b",{children:"9121751697"})]})]})]})]})]}),c.jsx("style",{children:`
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
      `})]})}function lw(){try{let e=sessionStorage.getItem("eliza_session_id");return e||(e=typeof crypto<"u"&&crypto.randomUUID?crypto.randomUUID():"sess_"+Math.random().toString(36).substring(2)+Date.now().toString(36),sessionStorage.setItem("eliza_session_id",e)),e}catch{return"anonymous-session"}}async function Yt(e,t={}){const n={"Content-Type":"application/json","X-Session-ID":lw(),...t.headers||{}},r=await ts(`${es}${e}`,{...t,headers:n}),i=await r.json().catch(()=>({}));if(!r.ok)throw new Error(i.detail||i.message||`Request failed (${r.status})`);return i}const In={health:()=>Yt("/api/v1/health"),providers:()=>Yt("/api/v1/providers"),settings:()=>Yt("/api/v1/settings"),updateSettings:e=>Yt("/api/v1/settings",{method:"PATCH",body:JSON.stringify(e)}),saveSettings:e=>Yt("/api/v1/settings",{method:"PATCH",body:JSON.stringify(e)}),conversations:()=>Yt("/api/v1/conversations"),getConversation:e=>Yt(`/api/v1/conversations/${encodeURIComponent(e)}`),conversation:e=>Yt(`/api/v1/conversations/${encodeURIComponent(e)}`),deleteConversation:e=>Yt(`/api/v1/conversations/${encodeURIComponent(e)}`,{method:"DELETE"}),chat:e=>Yt("/api/v1/chat",{method:"POST",body:JSON.stringify(e)}),audioVoices:()=>Yt("/api/v1/audio/voices"),tts:async e=>{const t={"Content-Type":"application/json","X-Session-ID":lw()};try{const n=await ts(`${es}/api/v1/audio/tts`,{method:"POST",headers:t,body:JSON.stringify(e)});if((n.headers.get("content-type")||"").includes("audio")){const s=await n.blob();return{ok:!0,blob:s,audioUrl:URL.createObjectURL(s)}}return{ok:!1,...await n.json().catch(()=>({}))}}catch(n){return{ok:!1,error:n.message}}}},uw=C.createContext({});function o5(e){const t=C.useRef(null);return t.current===null&&(t.current=e()),t.current}const sh=C.createContext(null),cw=C.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"});function l5(e=!0){const t=C.useContext(sh);if(t===null)return[!0,null];const{isPresent:n,onExitComplete:r,register:i}=t,s=C.useId();C.useEffect(()=>{e&&i(s)},[e]);const a=C.useCallback(()=>e&&r&&r(s),[s,r,e]);return!n&&r?[!1,a]:[!0]}const ah=typeof window<"u",u5=ah?C.useLayoutEffect:C.useEffect,Pt=e=>e;let dw=Pt;function oh(e){let t;return()=>(t===void 0&&(t=e()),t)}const ss=(e,t,n)=>{const r=t-e;return r===0?1:(n-e)/r},zn=e=>e*1e3,Un=e=>e/1e3,c5={useManualTiming:!1};function d5(e){let t=new Set,n=new Set,r=!1,i=!1;const s=new WeakSet;let a={delta:0,timestamp:0,isProcessing:!1};function o(u){s.has(u)&&(l.schedule(u),e()),u(a)}const l={schedule:(u,d=!1,f=!1)=>{const h=f&&r?t:n;return d&&s.add(u),h.has(u)||h.add(u),u},cancel:u=>{n.delete(u),s.delete(u)},process:u=>{if(a=u,r){i=!0;return}r=!0,[t,n]=[n,t],t.forEach(o),t.clear(),r=!1,i&&(i=!1,l.process(u))}};return l}const _o=["read","resolveKeyframes","update","preRender","render","postRender"],f5=40;function fw(e,t){let n=!1,r=!0;const i={delta:0,timestamp:0,isProcessing:!1},s=()=>n=!0,a=_o.reduce((g,m)=>(g[m]=d5(s),g),{}),{read:o,resolveKeyframes:l,update:u,preRender:d,render:f,postRender:p}=a,h=()=>{const g=performance.now();n=!1,i.delta=r?1e3/60:Math.max(Math.min(g-i.timestamp,f5),1),i.timestamp=g,i.isProcessing=!0,o.process(i),l.process(i),u.process(i),d.process(i),f.process(i),p.process(i),i.isProcessing=!1,n&&t&&(r=!1,e(h))},x=()=>{n=!0,r=!0,i.isProcessing||e(h)};return{schedule:_o.reduce((g,m)=>{const y=a[m];return g[m]=(v,E=!1,w=!1)=>(n||x(),y.schedule(v,E,w)),g},{}),cancel:g=>{for(let m=0;m<_o.length;m++)a[_o[m]].cancel(g)},state:i,steps:a}}const{schedule:Ae,cancel:Er,state:Qe,steps:bc}=fw(typeof requestAnimationFrame<"u"?requestAnimationFrame:Pt,!0),pw=C.createContext({strict:!1}),ny={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},as={};for(const e in ny)as[e]={isEnabled:t=>ny[e].some(n=>!!t[n])};function p5(e){for(const t in e)as[t]={...as[t],...e[t]}}const h5=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Ul(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||h5.has(e)}let hw=e=>!Ul(e);function m5(e){e&&(hw=t=>t.startsWith("on")?!Ul(t):e(t))}try{m5(require("@emotion/is-prop-valid").default)}catch{}function g5(e,t,n){const r={};for(const i in e)i==="values"&&typeof e.values=="object"||(hw(i)||n===!0&&Ul(i)||!t&&!Ul(i)||e.draggable&&i.startsWith("onDrag"))&&(r[i]=e[i]);return r}function y5(e){if(typeof Proxy>"u")return e;const t=new Map,n=(...r)=>e(...r);return new Proxy(n,{get:(r,i)=>i==="create"?e:(t.has(i)||t.set(i,e(i)),t.get(i))})}const Cu=C.createContext({});function ja(e){return typeof e=="string"||Array.isArray(e)}function Tu(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}const lh=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],uh=["initial",...lh];function _u(e){return Tu(e.animate)||uh.some(t=>ja(e[t]))}function mw(e){return!!(_u(e)||e.variants)}function x5(e,t){if(_u(e)){const{initial:n,animate:r}=e;return{initial:n===!1||ja(n)?n:void 0,animate:ja(r)?r:void 0}}return e.inherit!==!1?t:{}}function v5(e){const{initial:t,animate:n}=x5(e,C.useContext(Cu));return C.useMemo(()=>({initial:t,animate:n}),[ry(t),ry(n)])}function ry(e){return Array.isArray(e)?e.join(" "):e}const b5=Symbol.for("motionComponentSymbol");function Ni(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function w5(e,t,n){return C.useCallback(r=>{r&&e.onMount&&e.onMount(r),t&&(r?t.mount(r):t.unmount()),n&&(typeof n=="function"?n(r):Ni(n)&&(n.current=r))},[t])}const ch=e=>e.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),k5="framerAppearId",gw="data-"+ch(k5),{schedule:dh}=fw(queueMicrotask,!1),yw=C.createContext({});function S5(e,t,n,r,i){var s,a;const{visualElement:o}=C.useContext(Cu),l=C.useContext(pw),u=C.useContext(sh),d=C.useContext(cw).reducedMotion,f=C.useRef(null);r=r||l.renderer,!f.current&&r&&(f.current=r(e,{visualState:t,parent:o,props:n,presenceContext:u,blockInitialAnimation:u?u.initial===!1:!1,reducedMotionConfig:d}));const p=f.current,h=C.useContext(yw);p&&!p.projection&&i&&(p.type==="html"||p.type==="svg")&&E5(f.current,n,i,h);const x=C.useRef(!1);C.useInsertionEffect(()=>{p&&x.current&&p.update(n,u)});const b=n[gw],k=C.useRef(!!b&&!(!((s=window.MotionHandoffIsComplete)===null||s===void 0)&&s.call(window,b))&&((a=window.MotionHasOptimisedAnimation)===null||a===void 0?void 0:a.call(window,b)));return u5(()=>{p&&(x.current=!0,window.MotionIsMounted=!0,p.updateFeatures(),dh.render(p.render),k.current&&p.animationState&&p.animationState.animateChanges())}),C.useEffect(()=>{p&&(!k.current&&p.animationState&&p.animationState.animateChanges(),k.current&&(queueMicrotask(()=>{var g;(g=window.MotionHandoffMarkAsComplete)===null||g===void 0||g.call(window,b)}),k.current=!1))}),p}function E5(e,t,n,r){const{layoutId:i,layout:s,drag:a,dragConstraints:o,layoutScroll:l,layoutRoot:u}=t;e.projection=new n(e.latestValues,t["data-framer-portal-id"]?void 0:xw(e.parent)),e.projection.setOptions({layoutId:i,layout:s,alwaysMeasureLayout:!!a||o&&Ni(o),visualElement:e,animationType:typeof s=="string"?s:"both",initialPromotionConfig:r,layoutScroll:l,layoutRoot:u})}function xw(e){if(e)return e.options.allowProjection!==!1?e.projection:xw(e.parent)}function C5({preloadedFeatures:e,createVisualElement:t,useRender:n,useVisualState:r,Component:i}){var s,a;e&&p5(e);function o(u,d){let f;const p={...C.useContext(cw),...u,layoutId:T5(u)},{isStatic:h}=p,x=v5(u),b=r(u,h);if(!h&&ah){_5();const k=A5(p);f=k.MeasureLayout,x.visualElement=S5(i,b,p,t,k.ProjectionNode)}return c.jsxs(Cu.Provider,{value:x,children:[f&&x.visualElement?c.jsx(f,{visualElement:x.visualElement,...p}):null,n(i,u,w5(b,x.visualElement,d),b,h,x.visualElement)]})}o.displayName=`motion.${typeof i=="string"?i:`create(${(a=(s=i.displayName)!==null&&s!==void 0?s:i.name)!==null&&a!==void 0?a:""})`}`;const l=C.forwardRef(o);return l[b5]=i,l}function T5({layoutId:e}){const t=C.useContext(uw).id;return t&&e!==void 0?t+"-"+e:e}function _5(e,t){C.useContext(pw).strict}function A5(e){const{drag:t,layout:n}=as;if(!t&&!n)return{};const r={...t,...n};return{MeasureLayout:t!=null&&t.isEnabled(e)||n!=null&&n.isEnabled(e)?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}const I5=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function fh(e){return typeof e!="string"||e.includes("-")?!1:!!(I5.indexOf(e)>-1||/[A-Z]/u.test(e))}function iy(e){const t=[{},{}];return e==null||e.values.forEach((n,r)=>{t[0][r]=n.get(),t[1][r]=n.getVelocity()}),t}function ph(e,t,n,r){if(typeof t=="function"){const[i,s]=iy(r);t=t(n!==void 0?n:e.custom,i,s)}if(typeof t=="string"&&(t=e.variants&&e.variants[t]),typeof t=="function"){const[i,s]=iy(r);t=t(n!==void 0?n:e.custom,i,s)}return t}const sf=e=>Array.isArray(e),N5=e=>!!(e&&typeof e=="object"&&e.mix&&e.toValue),P5=e=>sf(e)?e[e.length-1]||0:e,at=e=>!!(e&&e.getVelocity);function tl(e){const t=at(e)?e.get():e;return N5(t)?t.toValue():t}function j5({scrapeMotionValuesFromProps:e,createRenderState:t,onUpdate:n},r,i,s){const a={latestValues:R5(r,i,s,e),renderState:t()};return n&&(a.onMount=o=>n({props:r,current:o,...a}),a.onUpdate=o=>n(o)),a}const vw=e=>(t,n)=>{const r=C.useContext(Cu),i=C.useContext(sh),s=()=>j5(e,t,r,i);return n?s():o5(s)};function R5(e,t,n,r){const i={},s=r(e,{});for(const p in s)i[p]=tl(s[p]);let{initial:a,animate:o}=e;const l=_u(e),u=mw(e);t&&u&&!l&&e.inherit!==!1&&(a===void 0&&(a=t.initial),o===void 0&&(o=t.animate));let d=n?n.initial===!1:!1;d=d||a===!1;const f=d?o:a;if(f&&typeof f!="boolean"&&!Tu(f)){const p=Array.isArray(f)?f:[f];for(let h=0;h<p.length;h++){const x=ph(e,p[h]);if(x){const{transitionEnd:b,transition:k,...g}=x;for(const m in g){let y=g[m];if(Array.isArray(y)){const v=d?y.length-1:0;y=y[v]}y!==null&&(i[m]=y)}for(const m in b)i[m]=b[m]}}}return i}const gs=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],fi=new Set(gs),bw=e=>t=>typeof t=="string"&&t.startsWith(e),ww=bw("--"),L5=bw("var(--"),hh=e=>L5(e)?D5.test(e.split("/*")[0].trim()):!1,D5=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,kw=(e,t)=>t&&typeof e=="number"?t.transform(e):e,Kn=(e,t,n)=>n>t?t:n<e?e:n,ys={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},Ra={...ys,transform:e=>Kn(0,1,e)},Ao={...ys,default:1},Qa=e=>({test:t=>typeof t=="string"&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),er=Qa("deg"),bn=Qa("%"),J=Qa("px"),M5=Qa("vh"),F5=Qa("vw"),sy={...bn,parse:e=>bn.parse(e)/100,transform:e=>bn.transform(e*100)},O5={borderWidth:J,borderTopWidth:J,borderRightWidth:J,borderBottomWidth:J,borderLeftWidth:J,borderRadius:J,radius:J,borderTopLeftRadius:J,borderTopRightRadius:J,borderBottomRightRadius:J,borderBottomLeftRadius:J,width:J,maxWidth:J,height:J,maxHeight:J,top:J,right:J,bottom:J,left:J,padding:J,paddingTop:J,paddingRight:J,paddingBottom:J,paddingLeft:J,margin:J,marginTop:J,marginRight:J,marginBottom:J,marginLeft:J,backgroundPositionX:J,backgroundPositionY:J},z5={rotate:er,rotateX:er,rotateY:er,rotateZ:er,scale:Ao,scaleX:Ao,scaleY:Ao,scaleZ:Ao,skew:er,skewX:er,skewY:er,distance:J,translateX:J,translateY:J,translateZ:J,x:J,y:J,z:J,perspective:J,transformPerspective:J,opacity:Ra,originX:sy,originY:sy,originZ:J},ay={...ys,transform:Math.round},mh={...O5,...z5,zIndex:ay,size:J,fillOpacity:Ra,strokeOpacity:Ra,numOctaves:ay},U5={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},B5=gs.length;function V5(e,t,n){let r="",i=!0;for(let s=0;s<B5;s++){const a=gs[s],o=e[a];if(o===void 0)continue;let l=!0;if(typeof o=="number"?l=o===(a.startsWith("scale")?1:0):l=parseFloat(o)===0,!l||n){const u=kw(o,mh[a]);if(!l){i=!1;const d=U5[a]||a;r+=`${d}(${u}) `}n&&(t[a]=u)}}return r=r.trim(),n?r=n(t,i?"":r):i&&(r="none"),r}function gh(e,t,n){const{style:r,vars:i,transformOrigin:s}=e;let a=!1,o=!1;for(const l in t){const u=t[l];if(fi.has(l)){a=!0;continue}else if(ww(l)){i[l]=u;continue}else{const d=kw(u,mh[l]);l.startsWith("origin")?(o=!0,s[l]=d):r[l]=d}}if(t.transform||(a||n?r.transform=V5(t,e.transform,n):r.transform&&(r.transform="none")),o){const{originX:l="50%",originY:u="50%",originZ:d=0}=s;r.transformOrigin=`${l} ${u} ${d}`}}const $5={offset:"stroke-dashoffset",array:"stroke-dasharray"},H5={offset:"strokeDashoffset",array:"strokeDasharray"};function W5(e,t,n=1,r=0,i=!0){e.pathLength=1;const s=i?$5:H5;e[s.offset]=J.transform(-r);const a=J.transform(t),o=J.transform(n);e[s.array]=`${a} ${o}`}function oy(e,t,n){return typeof e=="string"?e:J.transform(t+n*e)}function G5(e,t,n){const r=oy(t,e.x,e.width),i=oy(n,e.y,e.height);return`${r} ${i}`}function yh(e,{attrX:t,attrY:n,attrScale:r,originX:i,originY:s,pathLength:a,pathSpacing:o=1,pathOffset:l=0,...u},d,f){if(gh(e,u,f),d){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:p,style:h,dimensions:x}=e;p.transform&&(x&&(h.transform=p.transform),delete p.transform),x&&(i!==void 0||s!==void 0||h.transform)&&(h.transformOrigin=G5(x,i!==void 0?i:.5,s!==void 0?s:.5)),t!==void 0&&(p.x=t),n!==void 0&&(p.y=n),r!==void 0&&(p.scale=r),a!==void 0&&W5(p,a,o,l,!1)}const xh=()=>({style:{},transform:{},transformOrigin:{},vars:{}}),Sw=()=>({...xh(),attrs:{}}),vh=e=>typeof e=="string"&&e.toLowerCase()==="svg";function Ew(e,{style:t,vars:n},r,i){Object.assign(e.style,t,i&&i.getProjectionStyles(r));for(const s in n)e.style.setProperty(s,n[s])}const Cw=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function Tw(e,t,n,r){Ew(e,t,void 0,r);for(const i in t.attrs)e.setAttribute(Cw.has(i)?i:ch(i),t.attrs[i])}const Bl={};function q5(e){Object.assign(Bl,e)}function _w(e,{layout:t,layoutId:n}){return fi.has(e)||e.startsWith("origin")||(t||n!==void 0)&&(!!Bl[e]||e==="opacity")}function bh(e,t,n){var r;const{style:i}=e,s={};for(const a in i)(at(i[a])||t.style&&at(t.style[a])||_w(a,e)||((r=n==null?void 0:n.getValue(a))===null||r===void 0?void 0:r.liveStyle)!==void 0)&&(s[a]=i[a]);return s}function Aw(e,t,n){const r=bh(e,t,n);for(const i in e)if(at(e[i])||at(t[i])){const s=gs.indexOf(i)!==-1?"attr"+i.charAt(0).toUpperCase()+i.substring(1):i;r[s]=e[i]}return r}function K5(e,t){try{t.dimensions=typeof e.getBBox=="function"?e.getBBox():e.getBoundingClientRect()}catch{t.dimensions={x:0,y:0,width:0,height:0}}}const ly=["x","y","width","height","cx","cy","r"],Y5={useVisualState:vw({scrapeMotionValuesFromProps:Aw,createRenderState:Sw,onUpdate:({props:e,prevProps:t,current:n,renderState:r,latestValues:i})=>{if(!n)return;let s=!!e.drag;if(!s){for(const o in i)if(fi.has(o)){s=!0;break}}if(!s)return;let a=!t;if(t)for(let o=0;o<ly.length;o++){const l=ly[o];e[l]!==t[l]&&(a=!0)}a&&Ae.read(()=>{K5(n,r),Ae.render(()=>{yh(r,i,vh(n.tagName),e.transformTemplate),Tw(n,r)})})}})},X5={useVisualState:vw({scrapeMotionValuesFromProps:bh,createRenderState:xh})};function Iw(e,t,n){for(const r in t)!at(t[r])&&!_w(r,n)&&(e[r]=t[r])}function Q5({transformTemplate:e},t){return C.useMemo(()=>{const n=xh();return gh(n,t,e),Object.assign({},n.vars,n.style)},[t])}function Z5(e,t){const n=e.style||{},r={};return Iw(r,n,e),Object.assign(r,Q5(e,t)),r}function J5(e,t){const n={},r=Z5(e,t);return e.drag&&e.dragListener!==!1&&(n.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(n.tabIndex=0),n.style=r,n}function eP(e,t,n,r){const i=C.useMemo(()=>{const s=Sw();return yh(s,t,vh(r),e.transformTemplate),{...s.attrs,style:{...s.style}}},[t]);if(e.style){const s={};Iw(s,e.style,e),i.style={...s,...i.style}}return i}function tP(e=!1){return(n,r,i,{latestValues:s},a)=>{const l=(fh(n)?eP:J5)(r,s,a,n),u=g5(r,typeof n=="string",e),d=n!==C.Fragment?{...u,...l,ref:i}:{},{children:f}=r,p=C.useMemo(()=>at(f)?f.get():f,[f]);return C.createElement(n,{...d,children:p})}}function nP(e,t){return function(r,{forwardMotionProps:i}={forwardMotionProps:!1}){const a={...fh(r)?Y5:X5,preloadedFeatures:e,useRender:tP(i),createVisualElement:t,Component:r};return C5(a)}}function Nw(e,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}function Au(e,t,n){const r=e.getProps();return ph(r,t,n!==void 0?n:r.custom,e)}const rP=oh(()=>window.ScrollTimeline!==void 0);class iP{constructor(t){this.stop=()=>this.runAll("stop"),this.animations=t.filter(Boolean)}get finished(){return Promise.all(this.animations.map(t=>"finished"in t?t.finished:t))}getAll(t){return this.animations[0][t]}setAll(t,n){for(let r=0;r<this.animations.length;r++)this.animations[r][t]=n}attachTimeline(t,n){const r=this.animations.map(i=>{if(rP()&&i.attachTimeline)return i.attachTimeline(t);if(typeof n=="function")return n(i)});return()=>{r.forEach((i,s)=>{i&&i(),this.animations[s].stop()})}}get time(){return this.getAll("time")}set time(t){this.setAll("time",t)}get speed(){return this.getAll("speed")}set speed(t){this.setAll("speed",t)}get startTime(){return this.getAll("startTime")}get duration(){let t=0;for(let n=0;n<this.animations.length;n++)t=Math.max(t,this.animations[n].duration);return t}runAll(t){this.animations.forEach(n=>n[t]())}flatten(){this.runAll("flatten")}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}class sP extends iP{then(t,n){return Promise.all(this.animations).then(t).catch(n)}}function wh(e,t){return e?e[t]||e.default||e:void 0}const af=2e4;function Pw(e){let t=0;const n=50;let r=e.next(t);for(;!r.done&&t<af;)t+=n,r=e.next(t);return t>=af?1/0:t}function kh(e){return typeof e=="function"}function uy(e,t){e.timeline=t,e.onfinish=null}const Sh=e=>Array.isArray(e)&&typeof e[0]=="number",aP={linearEasing:void 0};function oP(e,t){const n=oh(e);return()=>{var r;return(r=aP[t])!==null&&r!==void 0?r:n()}}const Vl=oP(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),jw=(e,t,n=10)=>{let r="";const i=Math.max(Math.round(t/n),2);for(let s=0;s<i;s++)r+=e(ss(0,i-1,s))+", ";return`linear(${r.substring(0,r.length-2)})`};function Rw(e){return!!(typeof e=="function"&&Vl()||!e||typeof e=="string"&&(e in of||Vl())||Sh(e)||Array.isArray(e)&&e.every(Rw))}const Fs=([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`,of={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Fs([0,.65,.55,1]),circOut:Fs([.55,0,1,.45]),backIn:Fs([.31,.01,.66,-.59]),backOut:Fs([.33,1.53,.69,.99])};function Lw(e,t){if(e)return typeof e=="function"&&Vl()?jw(e,t):Sh(e)?Fs(e):Array.isArray(e)?e.map(n=>Lw(n,t)||of.easeOut):of[e]}const Xt={x:!1,y:!1};function Dw(){return Xt.x||Xt.y}function lP(e,t,n){var r;if(e instanceof Element)return[e];if(typeof e=="string"){let i=document;const s=(r=void 0)!==null&&r!==void 0?r:i.querySelectorAll(e);return s?Array.from(s):[]}return Array.from(e)}function Mw(e,t){const n=lP(e),r=new AbortController,i={passive:!0,...t,signal:r.signal};return[n,i,()=>r.abort()]}function cy(e){return t=>{t.pointerType==="touch"||Dw()||e(t)}}function uP(e,t,n={}){const[r,i,s]=Mw(e,n),a=cy(o=>{const{target:l}=o,u=t(o);if(typeof u!="function"||!l)return;const d=cy(f=>{u(f),l.removeEventListener("pointerleave",d)});l.addEventListener("pointerleave",d,i)});return r.forEach(o=>{o.addEventListener("pointerenter",a,i)}),s}const Fw=(e,t)=>t?e===t?!0:Fw(e,t.parentElement):!1,Eh=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1,cP=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function dP(e){return cP.has(e.tagName)||e.tabIndex!==-1}const Os=new WeakSet;function dy(e){return t=>{t.key==="Enter"&&e(t)}}function wc(e,t){e.dispatchEvent(new PointerEvent("pointer"+t,{isPrimary:!0,bubbles:!0}))}const fP=(e,t)=>{const n=e.currentTarget;if(!n)return;const r=dy(()=>{if(Os.has(n))return;wc(n,"down");const i=dy(()=>{wc(n,"up")}),s=()=>wc(n,"cancel");n.addEventListener("keyup",i,t),n.addEventListener("blur",s,t)});n.addEventListener("keydown",r,t),n.addEventListener("blur",()=>n.removeEventListener("keydown",r),t)};function fy(e){return Eh(e)&&!Dw()}function pP(e,t,n={}){const[r,i,s]=Mw(e,n),a=o=>{const l=o.currentTarget;if(!fy(o)||Os.has(l))return;Os.add(l);const u=t(o),d=(h,x)=>{window.removeEventListener("pointerup",f),window.removeEventListener("pointercancel",p),!(!fy(h)||!Os.has(l))&&(Os.delete(l),typeof u=="function"&&u(h,{success:x}))},f=h=>{d(h,n.useGlobalTarget||Fw(l,h.target))},p=h=>{d(h,!1)};window.addEventListener("pointerup",f,i),window.addEventListener("pointercancel",p,i)};return r.forEach(o=>{!dP(o)&&o.getAttribute("tabindex")===null&&(o.tabIndex=0),(n.useGlobalTarget?window:o).addEventListener("pointerdown",a,i),o.addEventListener("focus",u=>fP(u,i),i)}),s}function hP(e){return e==="x"||e==="y"?Xt[e]?null:(Xt[e]=!0,()=>{Xt[e]=!1}):Xt.x||Xt.y?null:(Xt.x=Xt.y=!0,()=>{Xt.x=Xt.y=!1})}const Ow=new Set(["width","height","top","left","right","bottom",...gs]);let nl;function mP(){nl=void 0}const wn={now:()=>(nl===void 0&&wn.set(Qe.isProcessing||c5.useManualTiming?Qe.timestamp:performance.now()),nl),set:e=>{nl=e,queueMicrotask(mP)}};function Ch(e,t){e.indexOf(t)===-1&&e.push(t)}function Th(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}class _h{constructor(){this.subscriptions=[]}add(t){return Ch(this.subscriptions,t),()=>Th(this.subscriptions,t)}notify(t,n,r){const i=this.subscriptions.length;if(i)if(i===1)this.subscriptions[0](t,n,r);else for(let s=0;s<i;s++){const a=this.subscriptions[s];a&&a(t,n,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}function zw(e,t){return t?e*(1e3/t):0}const py=30,gP=e=>!isNaN(parseFloat(e));class yP{constructor(t,n={}){this.version="11.18.2",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(r,i=!0)=>{const s=wn.now();this.updatedAt!==s&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(r),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),i&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(t),this.owner=n.owner}setCurrent(t){this.current=t,this.updatedAt=wn.now(),this.canTrackVelocity===null&&t!==void 0&&(this.canTrackVelocity=gP(this.current))}setPrevFrameValue(t=this.current){this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt}onChange(t){return this.on("change",t)}on(t,n){this.events[t]||(this.events[t]=new _h);const r=this.events[t].add(n);return t==="change"?()=>{r(),Ae.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,n){this.passiveEffect=t,this.stopPassiveEffect=n}set(t,n=!0){!n||!this.passiveEffect?this.updateAndNotify(t,n):this.passiveEffect(t,this.updateAndNotify)}setWithVelocity(t,n,r){this.set(n),this.prev=void 0,this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt-r}jump(t,n=!0){this.updateAndNotify(t),this.prev=t,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const t=wn.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||t-this.updatedAt>py)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,py);return zw(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(t){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=t(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function La(e,t){return new yP(e,t)}function xP(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,La(n))}function vP(e,t){const n=Au(e,t);let{transitionEnd:r={},transition:i={},...s}=n||{};s={...s,...r};for(const a in s){const o=P5(s[a]);xP(e,a,o)}}function bP(e){return!!(at(e)&&e.add)}function lf(e,t){const n=e.getValue("willChange");if(bP(n))return n.add(t)}function Uw(e){return e.props[gw]}const Bw=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,wP=1e-7,kP=12;function SP(e,t,n,r,i){let s,a,o=0;do a=t+(n-t)/2,s=Bw(a,r,i)-e,s>0?n=a:t=a;while(Math.abs(s)>wP&&++o<kP);return a}function Za(e,t,n,r){if(e===t&&n===r)return Pt;const i=s=>SP(s,0,1,e,n);return s=>s===0||s===1?s:Bw(i(s),t,r)}const Vw=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,$w=e=>t=>1-e(1-t),Hw=Za(.33,1.53,.69,.99),Ah=$w(Hw),Ww=Vw(Ah),Gw=e=>(e*=2)<1?.5*Ah(e):.5*(2-Math.pow(2,-10*(e-1))),Ih=e=>1-Math.sin(Math.acos(e)),qw=$w(Ih),Kw=Vw(Ih),Yw=e=>/^0[^.\s]+$/u.test(e);function EP(e){return typeof e=="number"?e===0:e!==null?e==="none"||e==="0"||Yw(e):!0}const Zs=e=>Math.round(e*1e5)/1e5,Nh=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function CP(e){return e==null}const TP=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Ph=(e,t)=>n=>!!(typeof n=="string"&&TP.test(n)&&n.startsWith(e)||t&&!CP(n)&&Object.prototype.hasOwnProperty.call(n,t)),Xw=(e,t,n)=>r=>{if(typeof r!="string")return r;const[i,s,a,o]=r.match(Nh);return{[e]:parseFloat(i),[t]:parseFloat(s),[n]:parseFloat(a),alpha:o!==void 0?parseFloat(o):1}},_P=e=>Kn(0,255,e),kc={...ys,transform:e=>Math.round(_P(e))},Kr={test:Ph("rgb","red"),parse:Xw("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:r=1})=>"rgba("+kc.transform(e)+", "+kc.transform(t)+", "+kc.transform(n)+", "+Zs(Ra.transform(r))+")"};function AP(e){let t="",n="",r="",i="";return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),i=e.substring(4,5),t+=t,n+=n,r+=r,i+=i),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}}const uf={test:Ph("#"),parse:AP,transform:Kr.transform},Pi={test:Ph("hsl","hue"),parse:Xw("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>"hsla("+Math.round(e)+", "+bn.transform(Zs(t))+", "+bn.transform(Zs(n))+", "+Zs(Ra.transform(r))+")"},rt={test:e=>Kr.test(e)||uf.test(e)||Pi.test(e),parse:e=>Kr.test(e)?Kr.parse(e):Pi.test(e)?Pi.parse(e):uf.parse(e),transform:e=>typeof e=="string"?e:e.hasOwnProperty("red")?Kr.transform(e):Pi.transform(e)},IP=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function NP(e){var t,n;return isNaN(e)&&typeof e=="string"&&(((t=e.match(Nh))===null||t===void 0?void 0:t.length)||0)+(((n=e.match(IP))===null||n===void 0?void 0:n.length)||0)>0}const Qw="number",Zw="color",PP="var",jP="var(",hy="${}",RP=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Da(e){const t=e.toString(),n=[],r={color:[],number:[],var:[]},i=[];let s=0;const o=t.replace(RP,l=>(rt.test(l)?(r.color.push(s),i.push(Zw),n.push(rt.parse(l))):l.startsWith(jP)?(r.var.push(s),i.push(PP),n.push(l)):(r.number.push(s),i.push(Qw),n.push(parseFloat(l))),++s,hy)).split(hy);return{values:n,split:o,indexes:r,types:i}}function Jw(e){return Da(e).values}function ek(e){const{split:t,types:n}=Da(e),r=t.length;return i=>{let s="";for(let a=0;a<r;a++)if(s+=t[a],i[a]!==void 0){const o=n[a];o===Qw?s+=Zs(i[a]):o===Zw?s+=rt.transform(i[a]):s+=i[a]}return s}}const LP=e=>typeof e=="number"?0:e;function DP(e){const t=Jw(e);return ek(e)(t.map(LP))}const Cr={test:NP,parse:Jw,createTransformer:ek,getAnimatableNone:DP},MP=new Set(["brightness","contrast","saturate","opacity"]);function FP(e){const[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[r]=n.match(Nh)||[];if(!r)return e;const i=n.replace(r,"");let s=MP.has(t)?1:0;return r!==n&&(s*=100),t+"("+s+i+")"}const OP=/\b([a-z-]*)\(.*?\)/gu,cf={...Cr,getAnimatableNone:e=>{const t=e.match(OP);return t?t.map(FP).join(" "):e}},zP={...mh,color:rt,backgroundColor:rt,outlineColor:rt,fill:rt,stroke:rt,borderColor:rt,borderTopColor:rt,borderRightColor:rt,borderBottomColor:rt,borderLeftColor:rt,filter:cf,WebkitFilter:cf},jh=e=>zP[e];function tk(e,t){let n=jh(e);return n!==cf&&(n=Cr),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const UP=new Set(["auto","none","0"]);function BP(e,t,n){let r=0,i;for(;r<e.length&&!i;){const s=e[r];typeof s=="string"&&!UP.has(s)&&Da(s).values.length&&(i=e[r]),r++}if(i&&n)for(const s of t)e[s]=tk(n,i)}const my=e=>e===ys||e===J,gy=(e,t)=>parseFloat(e.split(", ")[t]),yy=(e,t)=>(n,{transform:r})=>{if(r==="none"||!r)return 0;const i=r.match(/^matrix3d\((.+)\)$/u);if(i)return gy(i[1],t);{const s=r.match(/^matrix\((.+)\)$/u);return s?gy(s[1],e):0}},VP=new Set(["x","y","z"]),$P=gs.filter(e=>!VP.has(e));function HP(e){const t=[];return $P.forEach(n=>{const r=e.getValue(n);r!==void 0&&(t.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))}),t}const os={width:({x:e},{paddingLeft:t="0",paddingRight:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),height:({y:e},{paddingTop:t="0",paddingBottom:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:yy(4,13),y:yy(5,14)};os.translateX=os.x;os.translateY=os.y;const ei=new Set;let df=!1,ff=!1;function nk(){if(ff){const e=Array.from(ei).filter(r=>r.needsMeasurement),t=new Set(e.map(r=>r.element)),n=new Map;t.forEach(r=>{const i=HP(r);i.length&&(n.set(r,i),r.render())}),e.forEach(r=>r.measureInitialState()),t.forEach(r=>{r.render();const i=n.get(r);i&&i.forEach(([s,a])=>{var o;(o=r.getValue(s))===null||o===void 0||o.set(a)})}),e.forEach(r=>r.measureEndState()),e.forEach(r=>{r.suspendedScrollY!==void 0&&window.scrollTo(0,r.suspendedScrollY)})}ff=!1,df=!1,ei.forEach(e=>e.complete()),ei.clear()}function rk(){ei.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(ff=!0)})}function WP(){rk(),nk()}class Rh{constructor(t,n,r,i,s,a=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...t],this.onComplete=n,this.name=r,this.motionValue=i,this.element=s,this.isAsync=a}scheduleResolve(){this.isScheduled=!0,this.isAsync?(ei.add(this),df||(df=!0,Ae.read(rk),Ae.resolveKeyframes(nk))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:t,name:n,element:r,motionValue:i}=this;for(let s=0;s<t.length;s++)if(t[s]===null)if(s===0){const a=i==null?void 0:i.get(),o=t[t.length-1];if(a!==void 0)t[0]=a;else if(r&&n){const l=r.readValue(n,o);l!=null&&(t[0]=l)}t[0]===void 0&&(t[0]=o),i&&a===void 0&&i.set(t[0])}else t[s]=t[s-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),ei.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,ei.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const ik=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),GP=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function qP(e){const t=GP.exec(e);if(!t)return[,];const[,n,r,i]=t;return[`--${n??r}`,i]}function sk(e,t,n=1){const[r,i]=qP(e);if(!r)return;const s=window.getComputedStyle(t).getPropertyValue(r);if(s){const a=s.trim();return ik(a)?parseFloat(a):a}return hh(i)?sk(i,t,n+1):i}const ak=e=>t=>t.test(e),KP={test:e=>e==="auto",parse:e=>e},ok=[ys,J,bn,er,F5,M5,KP],xy=e=>ok.find(ak(e));class lk extends Rh{constructor(t,n,r,i,s){super(t,n,r,i,s,!0)}readKeyframes(){const{unresolvedKeyframes:t,element:n,name:r}=this;if(!n||!n.current)return;super.readKeyframes();for(let l=0;l<t.length;l++){let u=t[l];if(typeof u=="string"&&(u=u.trim(),hh(u))){const d=sk(u,n.current);d!==void 0&&(t[l]=d),l===t.length-1&&(this.finalKeyframe=u)}}if(this.resolveNoneKeyframes(),!Ow.has(r)||t.length!==2)return;const[i,s]=t,a=xy(i),o=xy(s);if(a!==o)if(my(a)&&my(o))for(let l=0;l<t.length;l++){const u=t[l];typeof u=="string"&&(t[l]=parseFloat(u))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:t,name:n}=this,r=[];for(let i=0;i<t.length;i++)EP(t[i])&&r.push(i);r.length&&BP(t,r,n)}measureInitialState(){const{element:t,unresolvedKeyframes:n,name:r}=this;if(!t||!t.current)return;r==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=os[r](t.measureViewportBox(),window.getComputedStyle(t.current)),n[0]=this.measuredOrigin;const i=n[n.length-1];i!==void 0&&t.getValue(r,i).jump(i,!1)}measureEndState(){var t;const{element:n,name:r,unresolvedKeyframes:i}=this;if(!n||!n.current)return;const s=n.getValue(r);s&&s.jump(this.measuredOrigin,!1);const a=i.length-1,o=i[a];i[a]=os[r](n.measureViewportBox(),window.getComputedStyle(n.current)),o!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=o),!((t=this.removedTransforms)===null||t===void 0)&&t.length&&this.removedTransforms.forEach(([l,u])=>{n.getValue(l).set(u)}),this.resolveNoneKeyframes()}}const vy=(e,t)=>t==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&(Cr.test(e)||e==="0")&&!e.startsWith("url("));function YP(e){const t=e[0];if(e.length===1)return!0;for(let n=0;n<e.length;n++)if(e[n]!==t)return!0}function XP(e,t,n,r){const i=e[0];if(i===null)return!1;if(t==="display"||t==="visibility")return!0;const s=e[e.length-1],a=vy(i,t),o=vy(s,t);return!a||!o?!1:YP(e)||(n==="spring"||kh(n))&&r}const QP=e=>e!==null;function Iu(e,{repeat:t,repeatType:n="loop"},r){const i=e.filter(QP),s=t&&n!=="loop"&&t%2===1?0:i.length-1;return!s||r===void 0?i[s]:r}const ZP=40;class uk{constructor({autoplay:t=!0,delay:n=0,type:r="keyframes",repeat:i=0,repeatDelay:s=0,repeatType:a="loop",...o}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=wn.now(),this.options={autoplay:t,delay:n,type:r,repeat:i,repeatDelay:s,repeatType:a,...o},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt?this.resolvedAt-this.createdAt>ZP?this.resolvedAt:this.createdAt:this.createdAt}get resolved(){return!this._resolved&&!this.hasAttemptedResolve&&WP(),this._resolved}onKeyframesResolved(t,n){this.resolvedAt=wn.now(),this.hasAttemptedResolve=!0;const{name:r,type:i,velocity:s,delay:a,onComplete:o,onUpdate:l,isGenerator:u}=this.options;if(!u&&!XP(t,r,i,s))if(a)this.options.duration=0;else{l&&l(Iu(t,this.options,n)),o&&o(),this.resolveFinishedPromise();return}const d=this.initPlayback(t,n);d!==!1&&(this._resolved={keyframes:t,finalKeyframe:n,...d},this.onPostResolved())}onPostResolved(){}then(t,n){return this.currentFinishedPromise.then(t,n)}flatten(){this.options.type="keyframes",this.options.ease="linear"}updateFinishedPromise(){this.currentFinishedPromise=new Promise(t=>{this.resolveFinishedPromise=t})}}const Re=(e,t,n)=>e+(t-e)*n;function Sc(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function JP({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let i=0,s=0,a=0;if(!t)i=s=a=n;else{const o=n<.5?n*(1+t):n+t-n*t,l=2*n-o;i=Sc(l,o,e+1/3),s=Sc(l,o,e),a=Sc(l,o,e-1/3)}return{red:Math.round(i*255),green:Math.round(s*255),blue:Math.round(a*255),alpha:r}}function $l(e,t){return n=>n>0?t:e}const Ec=(e,t,n)=>{const r=e*e,i=n*(t*t-r)+r;return i<0?0:Math.sqrt(i)},ej=[uf,Kr,Pi],tj=e=>ej.find(t=>t.test(e));function by(e){const t=tj(e);if(!t)return!1;let n=t.parse(e);return t===Pi&&(n=JP(n)),n}const wy=(e,t)=>{const n=by(e),r=by(t);if(!n||!r)return $l(e,t);const i={...n};return s=>(i.red=Ec(n.red,r.red,s),i.green=Ec(n.green,r.green,s),i.blue=Ec(n.blue,r.blue,s),i.alpha=Re(n.alpha,r.alpha,s),Kr.transform(i))},nj=(e,t)=>n=>t(e(n)),Ja=(...e)=>e.reduce(nj),pf=new Set(["none","hidden"]);function rj(e,t){return pf.has(e)?n=>n<=0?e:t:n=>n>=1?t:e}function ij(e,t){return n=>Re(e,t,n)}function Lh(e){return typeof e=="number"?ij:typeof e=="string"?hh(e)?$l:rt.test(e)?wy:oj:Array.isArray(e)?ck:typeof e=="object"?rt.test(e)?wy:sj:$l}function ck(e,t){const n=[...e],r=n.length,i=e.map((s,a)=>Lh(s)(s,t[a]));return s=>{for(let a=0;a<r;a++)n[a]=i[a](s);return n}}function sj(e,t){const n={...e,...t},r={};for(const i in n)e[i]!==void 0&&t[i]!==void 0&&(r[i]=Lh(e[i])(e[i],t[i]));return i=>{for(const s in r)n[s]=r[s](i);return n}}function aj(e,t){var n;const r=[],i={color:0,var:0,number:0};for(let s=0;s<t.values.length;s++){const a=t.types[s],o=e.indexes[a][i[a]],l=(n=e.values[o])!==null&&n!==void 0?n:0;r[s]=l,i[a]++}return r}const oj=(e,t)=>{const n=Cr.createTransformer(t),r=Da(e),i=Da(t);return r.indexes.var.length===i.indexes.var.length&&r.indexes.color.length===i.indexes.color.length&&r.indexes.number.length>=i.indexes.number.length?pf.has(e)&&!i.values.length||pf.has(t)&&!r.values.length?rj(e,t):Ja(ck(aj(r,i),i.values),n):$l(e,t)};function dk(e,t,n){return typeof e=="number"&&typeof t=="number"&&typeof n=="number"?Re(e,t,n):Lh(e)(e,t)}const lj=5;function fk(e,t,n){const r=Math.max(t-lj,0);return zw(n-e(r),t-r)}const Fe={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},Cc=.001;function uj({duration:e=Fe.duration,bounce:t=Fe.bounce,velocity:n=Fe.velocity,mass:r=Fe.mass}){let i,s,a=1-t;a=Kn(Fe.minDamping,Fe.maxDamping,a),e=Kn(Fe.minDuration,Fe.maxDuration,Un(e)),a<1?(i=u=>{const d=u*a,f=d*e,p=d-n,h=hf(u,a),x=Math.exp(-f);return Cc-p/h*x},s=u=>{const f=u*a*e,p=f*n+n,h=Math.pow(a,2)*Math.pow(u,2)*e,x=Math.exp(-f),b=hf(Math.pow(u,2),a);return(-i(u)+Cc>0?-1:1)*((p-h)*x)/b}):(i=u=>{const d=Math.exp(-u*e),f=(u-n)*e+1;return-Cc+d*f},s=u=>{const d=Math.exp(-u*e),f=(n-u)*(e*e);return d*f});const o=5/e,l=dj(i,s,o);if(e=zn(e),isNaN(l))return{stiffness:Fe.stiffness,damping:Fe.damping,duration:e};{const u=Math.pow(l,2)*r;return{stiffness:u,damping:a*2*Math.sqrt(r*u),duration:e}}}const cj=12;function dj(e,t,n){let r=n;for(let i=1;i<cj;i++)r=r-e(r)/t(r);return r}function hf(e,t){return e*Math.sqrt(1-t*t)}const fj=["duration","bounce"],pj=["stiffness","damping","mass"];function ky(e,t){return t.some(n=>e[n]!==void 0)}function hj(e){let t={velocity:Fe.velocity,stiffness:Fe.stiffness,damping:Fe.damping,mass:Fe.mass,isResolvedFromDuration:!1,...e};if(!ky(e,pj)&&ky(e,fj))if(e.visualDuration){const n=e.visualDuration,r=2*Math.PI/(n*1.2),i=r*r,s=2*Kn(.05,1,1-(e.bounce||0))*Math.sqrt(i);t={...t,mass:Fe.mass,stiffness:i,damping:s}}else{const n=uj(e);t={...t,...n,mass:Fe.mass},t.isResolvedFromDuration=!0}return t}function pk(e=Fe.visualDuration,t=Fe.bounce){const n=typeof e!="object"?{visualDuration:e,keyframes:[0,1],bounce:t}:e;let{restSpeed:r,restDelta:i}=n;const s=n.keyframes[0],a=n.keyframes[n.keyframes.length-1],o={done:!1,value:s},{stiffness:l,damping:u,mass:d,duration:f,velocity:p,isResolvedFromDuration:h}=hj({...n,velocity:-Un(n.velocity||0)}),x=p||0,b=u/(2*Math.sqrt(l*d)),k=a-s,g=Un(Math.sqrt(l/d)),m=Math.abs(k)<5;r||(r=m?Fe.restSpeed.granular:Fe.restSpeed.default),i||(i=m?Fe.restDelta.granular:Fe.restDelta.default);let y;if(b<1){const E=hf(g,b);y=w=>{const I=Math.exp(-b*g*w);return a-I*((x+b*g*k)/E*Math.sin(E*w)+k*Math.cos(E*w))}}else if(b===1)y=E=>a-Math.exp(-g*E)*(k+(x+g*k)*E);else{const E=g*Math.sqrt(b*b-1);y=w=>{const I=Math.exp(-b*g*w),N=Math.min(E*w,300);return a-I*((x+b*g*k)*Math.sinh(N)+E*k*Math.cosh(N))/E}}const v={calculatedDuration:h&&f||null,next:E=>{const w=y(E);if(h)o.done=E>=f;else{let I=0;b<1&&(I=E===0?zn(x):fk(y,E,w));const N=Math.abs(I)<=r,R=Math.abs(a-w)<=i;o.done=N&&R}return o.value=o.done?a:w,o},toString:()=>{const E=Math.min(Pw(v),af),w=jw(I=>v.next(E*I).value,E,30);return E+"ms "+w}};return v}function Sy({keyframes:e,velocity:t=0,power:n=.8,timeConstant:r=325,bounceDamping:i=10,bounceStiffness:s=500,modifyTarget:a,min:o,max:l,restDelta:u=.5,restSpeed:d}){const f=e[0],p={done:!1,value:f},h=N=>o!==void 0&&N<o||l!==void 0&&N>l,x=N=>o===void 0?l:l===void 0||Math.abs(o-N)<Math.abs(l-N)?o:l;let b=n*t;const k=f+b,g=a===void 0?k:a(k);g!==k&&(b=g-f);const m=N=>-b*Math.exp(-N/r),y=N=>g+m(N),v=N=>{const R=m(N),_=y(N);p.done=Math.abs(R)<=u,p.value=p.done?g:_};let E,w;const I=N=>{h(p.value)&&(E=N,w=pk({keyframes:[p.value,x(p.value)],velocity:fk(y,N,p.value),damping:i,stiffness:s,restDelta:u,restSpeed:d}))};return I(0),{calculatedDuration:null,next:N=>{let R=!1;return!w&&E===void 0&&(R=!0,v(N),I(N)),E!==void 0&&N>=E?w.next(N-E):(!R&&v(N),p)}}}const mj=Za(.42,0,1,1),gj=Za(0,0,.58,1),hk=Za(.42,0,.58,1),yj=e=>Array.isArray(e)&&typeof e[0]!="number",xj={linear:Pt,easeIn:mj,easeInOut:hk,easeOut:gj,circIn:Ih,circInOut:Kw,circOut:qw,backIn:Ah,backInOut:Ww,backOut:Hw,anticipate:Gw},Ey=e=>{if(Sh(e)){dw(e.length===4);const[t,n,r,i]=e;return Za(t,n,r,i)}else if(typeof e=="string")return xj[e];return e};function vj(e,t,n){const r=[],i=n||dk,s=e.length-1;for(let a=0;a<s;a++){let o=i(e[a],e[a+1]);if(t){const l=Array.isArray(t)?t[a]||Pt:t;o=Ja(l,o)}r.push(o)}return r}function bj(e,t,{clamp:n=!0,ease:r,mixer:i}={}){const s=e.length;if(dw(s===t.length),s===1)return()=>t[0];if(s===2&&t[0]===t[1])return()=>t[1];const a=e[0]===e[1];e[0]>e[s-1]&&(e=[...e].reverse(),t=[...t].reverse());const o=vj(t,r,i),l=o.length,u=d=>{if(a&&d<e[0])return t[0];let f=0;if(l>1)for(;f<e.length-2&&!(d<e[f+1]);f++);const p=ss(e[f],e[f+1],d);return o[f](p)};return n?d=>u(Kn(e[0],e[s-1],d)):u}function wj(e,t){const n=e[e.length-1];for(let r=1;r<=t;r++){const i=ss(0,t,r);e.push(Re(n,1,i))}}function kj(e){const t=[0];return wj(t,e.length-1),t}function Sj(e,t){return e.map(n=>n*t)}function Ej(e,t){return e.map(()=>t||hk).splice(0,e.length-1)}function Hl({duration:e=300,keyframes:t,times:n,ease:r="easeInOut"}){const i=yj(r)?r.map(Ey):Ey(r),s={done:!1,value:t[0]},a=Sj(n&&n.length===t.length?n:kj(t),e),o=bj(a,t,{ease:Array.isArray(i)?i:Ej(t,i)});return{calculatedDuration:e,next:l=>(s.value=o(l),s.done=l>=e,s)}}const Cj=e=>{const t=({timestamp:n})=>e(n);return{start:()=>Ae.update(t,!0),stop:()=>Er(t),now:()=>Qe.isProcessing?Qe.timestamp:wn.now()}},Tj={decay:Sy,inertia:Sy,tween:Hl,keyframes:Hl,spring:pk},_j=e=>e/100;class Dh extends uk{constructor(t){super(t),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:l}=this.options;l&&l()};const{name:n,motionValue:r,element:i,keyframes:s}=this.options,a=(i==null?void 0:i.KeyframeResolver)||Rh,o=(l,u)=>this.onKeyframesResolved(l,u);this.resolver=new a(s,o,n,r,i),this.resolver.scheduleResolve()}flatten(){super.flatten(),this._resolved&&Object.assign(this._resolved,this.initPlayback(this._resolved.keyframes))}initPlayback(t){const{type:n="keyframes",repeat:r=0,repeatDelay:i=0,repeatType:s,velocity:a=0}=this.options,o=kh(n)?n:Tj[n]||Hl;let l,u;o!==Hl&&typeof t[0]!="number"&&(l=Ja(_j,dk(t[0],t[1])),t=[0,100]);const d=o({...this.options,keyframes:t});s==="mirror"&&(u=o({...this.options,keyframes:[...t].reverse(),velocity:-a})),d.calculatedDuration===null&&(d.calculatedDuration=Pw(d));const{calculatedDuration:f}=d,p=f+i,h=p*(r+1)-i;return{generator:d,mirroredGenerator:u,mapPercentToKeyframes:l,calculatedDuration:f,resolvedDuration:p,totalDuration:h}}onPostResolved(){const{autoplay:t=!0}=this.options;this.play(),this.pendingPlayState==="paused"||!t?this.pause():this.state=this.pendingPlayState}tick(t,n=!1){const{resolved:r}=this;if(!r){const{keyframes:N}=this.options;return{done:!0,value:N[N.length-1]}}const{finalKeyframe:i,generator:s,mirroredGenerator:a,mapPercentToKeyframes:o,keyframes:l,calculatedDuration:u,totalDuration:d,resolvedDuration:f}=r;if(this.startTime===null)return s.next(0);const{delay:p,repeat:h,repeatType:x,repeatDelay:b,onUpdate:k}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,t):this.speed<0&&(this.startTime=Math.min(t-d/this.speed,this.startTime)),n?this.currentTime=t:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(t-this.startTime)*this.speed;const g=this.currentTime-p*(this.speed>=0?1:-1),m=this.speed>=0?g<0:g>d;this.currentTime=Math.max(g,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=d);let y=this.currentTime,v=s;if(h){const N=Math.min(this.currentTime,d)/f;let R=Math.floor(N),_=N%1;!_&&N>=1&&(_=1),_===1&&R--,R=Math.min(R,h+1),!!(R%2)&&(x==="reverse"?(_=1-_,b&&(_-=b/f)):x==="mirror"&&(v=a)),y=Kn(0,1,_)*f}const E=m?{done:!1,value:l[0]}:v.next(y);o&&(E.value=o(E.value));let{done:w}=E;!m&&u!==null&&(w=this.speed>=0?this.currentTime>=d:this.currentTime<=0);const I=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&w);return I&&i!==void 0&&(E.value=Iu(l,this.options,i)),k&&k(E.value),I&&this.finish(),E}get duration(){const{resolved:t}=this;return t?Un(t.calculatedDuration):0}get time(){return Un(this.currentTime)}set time(t){t=zn(t),this.currentTime=t,this.holdTime!==null||this.speed===0?this.holdTime=t:this.driver&&(this.startTime=this.driver.now()-t/this.speed)}get speed(){return this.playbackSpeed}set speed(t){const n=this.playbackSpeed!==t;this.playbackSpeed=t,n&&(this.time=Un(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;const{driver:t=Cj,onPlay:n,startTime:r}=this.options;this.driver||(this.driver=t(s=>this.tick(s))),n&&n();const i=this.driver.now();this.holdTime!==null?this.startTime=i-this.holdTime:this.startTime?this.state==="finished"&&(this.startTime=i):this.startTime=r??this.calcStartTime(),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var t;if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=(t=this.currentTime)!==null&&t!==void 0?t:0}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:t}=this.options;t&&t()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(t){return this.startTime=0,this.tick(t,!0)}}const Aj=new Set(["opacity","clipPath","filter","transform"]);function Ij(e,t,n,{delay:r=0,duration:i=300,repeat:s=0,repeatType:a="loop",ease:o="easeInOut",times:l}={}){const u={[t]:n};l&&(u.offset=l);const d=Lw(o,i);return Array.isArray(d)&&(u.easing=d),e.animate(u,{delay:r,duration:i,easing:Array.isArray(d)?"linear":d,fill:"both",iterations:s+1,direction:a==="reverse"?"alternate":"normal"})}const Nj=oh(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),Wl=10,Pj=2e4;function jj(e){return kh(e.type)||e.type==="spring"||!Rw(e.ease)}function Rj(e,t){const n=new Dh({...t,keyframes:e,repeat:0,delay:0,isGenerator:!0});let r={done:!1,value:e[0]};const i=[];let s=0;for(;!r.done&&s<Pj;)r=n.sample(s),i.push(r.value),s+=Wl;return{times:void 0,keyframes:i,duration:s-Wl,ease:"linear"}}const mk={anticipate:Gw,backInOut:Ww,circInOut:Kw};function Lj(e){return e in mk}class Cy extends uk{constructor(t){super(t);const{name:n,motionValue:r,element:i,keyframes:s}=this.options;this.resolver=new lk(s,(a,o)=>this.onKeyframesResolved(a,o),n,r,i),this.resolver.scheduleResolve()}initPlayback(t,n){let{duration:r=300,times:i,ease:s,type:a,motionValue:o,name:l,startTime:u}=this.options;if(!o.owner||!o.owner.current)return!1;if(typeof s=="string"&&Vl()&&Lj(s)&&(s=mk[s]),jj(this.options)){const{onComplete:f,onUpdate:p,motionValue:h,element:x,...b}=this.options,k=Rj(t,b);t=k.keyframes,t.length===1&&(t[1]=t[0]),r=k.duration,i=k.times,s=k.ease,a="keyframes"}const d=Ij(o.owner.current,l,t,{...this.options,duration:r,times:i,ease:s});return d.startTime=u??this.calcStartTime(),this.pendingTimeline?(uy(d,this.pendingTimeline),this.pendingTimeline=void 0):d.onfinish=()=>{const{onComplete:f}=this.options;o.set(Iu(t,this.options,n)),f&&f(),this.cancel(),this.resolveFinishedPromise()},{animation:d,duration:r,times:i,type:a,ease:s,keyframes:t}}get duration(){const{resolved:t}=this;if(!t)return 0;const{duration:n}=t;return Un(n)}get time(){const{resolved:t}=this;if(!t)return 0;const{animation:n}=t;return Un(n.currentTime||0)}set time(t){const{resolved:n}=this;if(!n)return;const{animation:r}=n;r.currentTime=zn(t)}get speed(){const{resolved:t}=this;if(!t)return 1;const{animation:n}=t;return n.playbackRate}set speed(t){const{resolved:n}=this;if(!n)return;const{animation:r}=n;r.playbackRate=t}get state(){const{resolved:t}=this;if(!t)return"idle";const{animation:n}=t;return n.playState}get startTime(){const{resolved:t}=this;if(!t)return null;const{animation:n}=t;return n.startTime}attachTimeline(t){if(!this._resolved)this.pendingTimeline=t;else{const{resolved:n}=this;if(!n)return Pt;const{animation:r}=n;uy(r,t)}return Pt}play(){if(this.isStopped)return;const{resolved:t}=this;if(!t)return;const{animation:n}=t;n.playState==="finished"&&this.updateFinishedPromise(),n.play()}pause(){const{resolved:t}=this;if(!t)return;const{animation:n}=t;n.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:t}=this;if(!t)return;const{animation:n,keyframes:r,duration:i,type:s,ease:a,times:o}=t;if(n.playState==="idle"||n.playState==="finished")return;if(this.time){const{motionValue:u,onUpdate:d,onComplete:f,element:p,...h}=this.options,x=new Dh({...h,keyframes:r,duration:i,type:s,ease:a,times:o,isGenerator:!0}),b=zn(this.time);u.setWithVelocity(x.sample(b-Wl).value,x.sample(b).value,Wl)}const{onStop:l}=this.options;l&&l(),this.cancel()}complete(){const{resolved:t}=this;t&&t.animation.finish()}cancel(){const{resolved:t}=this;t&&t.animation.cancel()}static supports(t){const{motionValue:n,name:r,repeatDelay:i,repeatType:s,damping:a,type:o}=t;if(!n||!n.owner||!(n.owner.current instanceof HTMLElement))return!1;const{onUpdate:l,transformTemplate:u}=n.owner.getProps();return Nj()&&r&&Aj.has(r)&&!l&&!u&&!i&&s!=="mirror"&&a!==0&&o!=="inertia"}}const Dj={type:"spring",stiffness:500,damping:25,restSpeed:10},Mj=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),Fj={type:"keyframes",duration:.8},Oj={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},zj=(e,{keyframes:t})=>t.length>2?Fj:fi.has(e)?e.startsWith("scale")?Mj(t[1]):Dj:Oj;function Uj({when:e,delay:t,delayChildren:n,staggerChildren:r,staggerDirection:i,repeat:s,repeatType:a,repeatDelay:o,from:l,elapsed:u,...d}){return!!Object.keys(d).length}const Mh=(e,t,n,r={},i,s)=>a=>{const o=wh(r,e)||{},l=o.delay||r.delay||0;let{elapsed:u=0}=r;u=u-zn(l);let d={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:t.getVelocity(),...o,delay:-u,onUpdate:p=>{t.set(p),o.onUpdate&&o.onUpdate(p)},onComplete:()=>{a(),o.onComplete&&o.onComplete()},name:e,motionValue:t,element:s?void 0:i};Uj(o)||(d={...d,...zj(e,d)}),d.duration&&(d.duration=zn(d.duration)),d.repeatDelay&&(d.repeatDelay=zn(d.repeatDelay)),d.from!==void 0&&(d.keyframes[0]=d.from);let f=!1;if((d.type===!1||d.duration===0&&!d.repeatDelay)&&(d.duration=0,d.delay===0&&(f=!0)),f&&!s&&t.get()!==void 0){const p=Iu(d.keyframes,o);if(p!==void 0)return Ae.update(()=>{d.onUpdate(p),d.onComplete()}),new sP([])}return!s&&Cy.supports(d)?new Cy(d):new Dh(d)};function Bj({protectedKeys:e,needsAnimating:t},n){const r=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,r}function gk(e,t,{delay:n=0,transitionOverride:r,type:i}={}){var s;let{transition:a=e.getDefaultTransition(),transitionEnd:o,...l}=t;r&&(a=r);const u=[],d=i&&e.animationState&&e.animationState.getState()[i];for(const f in l){const p=e.getValue(f,(s=e.latestValues[f])!==null&&s!==void 0?s:null),h=l[f];if(h===void 0||d&&Bj(d,f))continue;const x={delay:n,...wh(a||{},f)};let b=!1;if(window.MotionHandoffAnimation){const g=Uw(e);if(g){const m=window.MotionHandoffAnimation(g,f,Ae);m!==null&&(x.startTime=m,b=!0)}}lf(e,f),p.start(Mh(f,p,h,e.shouldReduceMotion&&Ow.has(f)?{type:!1}:x,e,b));const k=p.animation;k&&u.push(k)}return o&&Promise.all(u).then(()=>{Ae.update(()=>{o&&vP(e,o)})}),u}function mf(e,t,n={}){var r;const i=Au(e,t,n.type==="exit"?(r=e.presenceContext)===null||r===void 0?void 0:r.custom:void 0);let{transition:s=e.getDefaultTransition()||{}}=i||{};n.transitionOverride&&(s=n.transitionOverride);const a=i?()=>Promise.all(gk(e,i,n)):()=>Promise.resolve(),o=e.variantChildren&&e.variantChildren.size?(u=0)=>{const{delayChildren:d=0,staggerChildren:f,staggerDirection:p}=s;return Vj(e,t,d+u,f,p,n)}:()=>Promise.resolve(),{when:l}=s;if(l){const[u,d]=l==="beforeChildren"?[a,o]:[o,a];return u().then(()=>d())}else return Promise.all([a(),o(n.delay)])}function Vj(e,t,n=0,r=0,i=1,s){const a=[],o=(e.variantChildren.size-1)*r,l=i===1?(u=0)=>u*r:(u=0)=>o-u*r;return Array.from(e.variantChildren).sort($j).forEach((u,d)=>{u.notify("AnimationStart",t),a.push(mf(u,t,{...s,delay:n+l(d)}).then(()=>u.notify("AnimationComplete",t)))}),Promise.all(a)}function $j(e,t){return e.sortNodePosition(t)}function Hj(e,t,n={}){e.notify("AnimationStart",t);let r;if(Array.isArray(t)){const i=t.map(s=>mf(e,s,n));r=Promise.all(i)}else if(typeof t=="string")r=mf(e,t,n);else{const i=typeof t=="function"?Au(e,t,n.custom):t;r=Promise.all(gk(e,i,n))}return r.then(()=>{e.notify("AnimationComplete",t)})}const Wj=uh.length;function yk(e){if(!e)return;if(!e.isControllingVariants){const n=e.parent?yk(e.parent)||{}:{};return e.props.initial!==void 0&&(n.initial=e.props.initial),n}const t={};for(let n=0;n<Wj;n++){const r=uh[n],i=e.props[r];(ja(i)||i===!1)&&(t[r]=i)}return t}const Gj=[...lh].reverse(),qj=lh.length;function Kj(e){return t=>Promise.all(t.map(({animation:n,options:r})=>Hj(e,n,r)))}function Yj(e){let t=Kj(e),n=Ty(),r=!0;const i=l=>(u,d)=>{var f;const p=Au(e,d,l==="exit"?(f=e.presenceContext)===null||f===void 0?void 0:f.custom:void 0);if(p){const{transition:h,transitionEnd:x,...b}=p;u={...u,...b,...x}}return u};function s(l){t=l(e)}function a(l){const{props:u}=e,d=yk(e.parent)||{},f=[],p=new Set;let h={},x=1/0;for(let k=0;k<qj;k++){const g=Gj[k],m=n[g],y=u[g]!==void 0?u[g]:d[g],v=ja(y),E=g===l?m.isActive:null;E===!1&&(x=k);let w=y===d[g]&&y!==u[g]&&v;if(w&&r&&e.manuallyAnimateOnMount&&(w=!1),m.protectedKeys={...h},!m.isActive&&E===null||!y&&!m.prevProp||Tu(y)||typeof y=="boolean")continue;const I=Xj(m.prevProp,y);let N=I||g===l&&m.isActive&&!w&&v||k>x&&v,R=!1;const _=Array.isArray(y)?y:[y];let j=_.reduce(i(g),{});E===!1&&(j={});const{prevResolvedValues:U={}}=m,G={...U,...j},q=Q=>{N=!0,p.has(Q)&&(R=!0,p.delete(Q)),m.needsAnimating[Q]=!0;const L=e.getValue(Q);L&&(L.liveStyle=!1)};for(const Q in G){const L=j[Q],B=U[Q];if(h.hasOwnProperty(Q))continue;let S=!1;sf(L)&&sf(B)?S=!Nw(L,B):S=L!==B,S?L!=null?q(Q):p.add(Q):L!==void 0&&p.has(Q)?q(Q):m.protectedKeys[Q]=!0}m.prevProp=y,m.prevResolvedValues=j,m.isActive&&(h={...h,...j}),r&&e.blockInitialAnimation&&(N=!1),N&&(!(w&&I)||R)&&f.push(..._.map(Q=>({animation:Q,options:{type:g}})))}if(p.size){const k={};p.forEach(g=>{const m=e.getBaseTarget(g),y=e.getValue(g);y&&(y.liveStyle=!0),k[g]=m??null}),f.push({animation:k})}let b=!!f.length;return r&&(u.initial===!1||u.initial===u.animate)&&!e.manuallyAnimateOnMount&&(b=!1),r=!1,b?t(f):Promise.resolve()}function o(l,u){var d;if(n[l].isActive===u)return Promise.resolve();(d=e.variantChildren)===null||d===void 0||d.forEach(p=>{var h;return(h=p.animationState)===null||h===void 0?void 0:h.setActive(l,u)}),n[l].isActive=u;const f=a(l);for(const p in n)n[p].protectedKeys={};return f}return{animateChanges:a,setActive:o,setAnimateFunction:s,getState:()=>n,reset:()=>{n=Ty(),r=!0}}}function Xj(e,t){return typeof t=="string"?t!==e:Array.isArray(t)?!Nw(t,e):!1}function Lr(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Ty(){return{animate:Lr(!0),whileInView:Lr(),whileHover:Lr(),whileTap:Lr(),whileDrag:Lr(),whileFocus:Lr(),exit:Lr()}}class Nr{constructor(t){this.isMounted=!1,this.node=t}update(){}}class Qj extends Nr{constructor(t){super(t),t.animationState||(t.animationState=Yj(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();Tu(t)&&(this.unmountControls=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:n}=this.node.prevProps||{};t!==n&&this.updateAnimationControlsSubscription()}unmount(){var t;this.node.animationState.reset(),(t=this.unmountControls)===null||t===void 0||t.call(this)}}let Zj=0;class Jj extends Nr{constructor(){super(...arguments),this.id=Zj++}update(){if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:n}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===r)return;const i=this.node.animationState.setActive("exit",!t);n&&!t&&i.then(()=>n(this.id))}mount(){const{register:t}=this.node.presenceContext||{};t&&(this.unmount=t(this.id))}unmount(){}}const eR={animation:{Feature:Qj},exit:{Feature:Jj}};function Ma(e,t,n,r={passive:!0}){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n)}function eo(e){return{point:{x:e.pageX,y:e.pageY}}}const tR=e=>t=>Eh(t)&&e(t,eo(t));function Js(e,t,n,r){return Ma(e,t,tR(n),r)}const _y=(e,t)=>Math.abs(e-t);function nR(e,t){const n=_y(e.x,t.x),r=_y(e.y,t.y);return Math.sqrt(n**2+r**2)}class xk{constructor(t,n,{transformPagePoint:r,contextWindow:i,dragSnapToOrigin:s=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const f=_c(this.lastMoveEventInfo,this.history),p=this.startEvent!==null,h=nR(f.offset,{x:0,y:0})>=3;if(!p&&!h)return;const{point:x}=f,{timestamp:b}=Qe;this.history.push({...x,timestamp:b});const{onStart:k,onMove:g}=this.handlers;p||(k&&k(this.lastMoveEvent,f),this.startEvent=this.lastMoveEvent),g&&g(this.lastMoveEvent,f)},this.handlePointerMove=(f,p)=>{this.lastMoveEvent=f,this.lastMoveEventInfo=Tc(p,this.transformPagePoint),Ae.update(this.updatePoint,!0)},this.handlePointerUp=(f,p)=>{this.end();const{onEnd:h,onSessionEnd:x,resumeAnimation:b}=this.handlers;if(this.dragSnapToOrigin&&b&&b(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const k=_c(f.type==="pointercancel"?this.lastMoveEventInfo:Tc(p,this.transformPagePoint),this.history);this.startEvent&&h&&h(f,k),x&&x(f,k)},!Eh(t))return;this.dragSnapToOrigin=s,this.handlers=n,this.transformPagePoint=r,this.contextWindow=i||window;const a=eo(t),o=Tc(a,this.transformPagePoint),{point:l}=o,{timestamp:u}=Qe;this.history=[{...l,timestamp:u}];const{onSessionStart:d}=n;d&&d(t,_c(o,this.history)),this.removeListeners=Ja(Js(this.contextWindow,"pointermove",this.handlePointerMove),Js(this.contextWindow,"pointerup",this.handlePointerUp),Js(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),Er(this.updatePoint)}}function Tc(e,t){return t?{point:t(e.point)}:e}function Ay(e,t){return{x:e.x-t.x,y:e.y-t.y}}function _c({point:e},t){return{point:e,delta:Ay(e,vk(t)),offset:Ay(e,rR(t)),velocity:iR(t,.1)}}function rR(e){return e[0]}function vk(e){return e[e.length-1]}function iR(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null;const i=vk(e);for(;n>=0&&(r=e[n],!(i.timestamp-r.timestamp>zn(t)));)n--;if(!r)return{x:0,y:0};const s=Un(i.timestamp-r.timestamp);if(s===0)return{x:0,y:0};const a={x:(i.x-r.x)/s,y:(i.y-r.y)/s};return a.x===1/0&&(a.x=0),a.y===1/0&&(a.y=0),a}const bk=1e-4,sR=1-bk,aR=1+bk,wk=.01,oR=0-wk,lR=0+wk;function Rt(e){return e.max-e.min}function uR(e,t,n){return Math.abs(e-t)<=n}function Iy(e,t,n,r=.5){e.origin=r,e.originPoint=Re(t.min,t.max,e.origin),e.scale=Rt(n)/Rt(t),e.translate=Re(n.min,n.max,e.origin)-e.originPoint,(e.scale>=sR&&e.scale<=aR||isNaN(e.scale))&&(e.scale=1),(e.translate>=oR&&e.translate<=lR||isNaN(e.translate))&&(e.translate=0)}function ea(e,t,n,r){Iy(e.x,t.x,n.x,r?r.originX:void 0),Iy(e.y,t.y,n.y,r?r.originY:void 0)}function Ny(e,t,n){e.min=n.min+t.min,e.max=e.min+Rt(t)}function cR(e,t,n){Ny(e.x,t.x,n.x),Ny(e.y,t.y,n.y)}function Py(e,t,n){e.min=t.min-n.min,e.max=e.min+Rt(t)}function ta(e,t,n){Py(e.x,t.x,n.x),Py(e.y,t.y,n.y)}function dR(e,{min:t,max:n},r){return t!==void 0&&e<t?e=r?Re(t,e,r.min):Math.max(e,t):n!==void 0&&e>n&&(e=r?Re(n,e,r.max):Math.min(e,n)),e}function jy(e,t,n){return{min:t!==void 0?e.min+t:void 0,max:n!==void 0?e.max+n-(e.max-e.min):void 0}}function fR(e,{top:t,left:n,bottom:r,right:i}){return{x:jy(e.x,n,i),y:jy(e.y,t,r)}}function Ry(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}function pR(e,t){return{x:Ry(e.x,t.x),y:Ry(e.y,t.y)}}function hR(e,t){let n=.5;const r=Rt(e),i=Rt(t);return i>r?n=ss(t.min,t.max-r,e.min):r>i&&(n=ss(e.min,e.max-i,t.min)),Kn(0,1,n)}function mR(e,t){const n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}const gf=.35;function gR(e=gf){return e===!1?e=0:e===!0&&(e=gf),{x:Ly(e,"left","right"),y:Ly(e,"top","bottom")}}function Ly(e,t,n){return{min:Dy(e,t),max:Dy(e,n)}}function Dy(e,t){return typeof e=="number"?e:e[t]||0}const My=()=>({translate:0,scale:1,origin:0,originPoint:0}),ji=()=>({x:My(),y:My()}),Fy=()=>({min:0,max:0}),ze=()=>({x:Fy(),y:Fy()});function Ot(e){return[e("x"),e("y")]}function kk({top:e,left:t,right:n,bottom:r}){return{x:{min:t,max:n},y:{min:e,max:r}}}function yR({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function xR(e,t){if(!t)return e;const n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function Ac(e){return e===void 0||e===1}function yf({scale:e,scaleX:t,scaleY:n}){return!Ac(e)||!Ac(t)||!Ac(n)}function Ur(e){return yf(e)||Sk(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function Sk(e){return Oy(e.x)||Oy(e.y)}function Oy(e){return e&&e!=="0%"}function Gl(e,t,n){const r=e-n,i=t*r;return n+i}function zy(e,t,n,r,i){return i!==void 0&&(e=Gl(e,i,r)),Gl(e,n,r)+t}function xf(e,t=0,n=1,r,i){e.min=zy(e.min,t,n,r,i),e.max=zy(e.max,t,n,r,i)}function Ek(e,{x:t,y:n}){xf(e.x,t.translate,t.scale,t.originPoint),xf(e.y,n.translate,n.scale,n.originPoint)}const Uy=.999999999999,By=1.0000000000001;function vR(e,t,n,r=!1){const i=n.length;if(!i)return;t.x=t.y=1;let s,a;for(let o=0;o<i;o++){s=n[o],a=s.projectionDelta;const{visualElement:l}=s.options;l&&l.props.style&&l.props.style.display==="contents"||(r&&s.options.layoutScroll&&s.scroll&&s!==s.root&&Li(e,{x:-s.scroll.offset.x,y:-s.scroll.offset.y}),a&&(t.x*=a.x.scale,t.y*=a.y.scale,Ek(e,a)),r&&Ur(s.latestValues)&&Li(e,s.latestValues))}t.x<By&&t.x>Uy&&(t.x=1),t.y<By&&t.y>Uy&&(t.y=1)}function Ri(e,t){e.min=e.min+t,e.max=e.max+t}function Vy(e,t,n,r,i=.5){const s=Re(e.min,e.max,i);xf(e,t,n,s,r)}function Li(e,t){Vy(e.x,t.x,t.scaleX,t.scale,t.originX),Vy(e.y,t.y,t.scaleY,t.scale,t.originY)}function Ck(e,t){return kk(xR(e.getBoundingClientRect(),t))}function bR(e,t,n){const r=Ck(e,n),{scroll:i}=t;return i&&(Ri(r.x,i.offset.x),Ri(r.y,i.offset.y)),r}const Tk=({current:e})=>e?e.ownerDocument.defaultView:null,wR=new WeakMap;class kR{constructor(t){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=ze(),this.visualElement=t}start(t,{snapToCursor:n=!1}={}){const{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;const i=d=>{const{dragSnapToOrigin:f}=this.getProps();f?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor(eo(d).point)},s=(d,f)=>{const{drag:p,dragPropagation:h,onDragStart:x}=this.getProps();if(p&&!h&&(this.openDragLock&&this.openDragLock(),this.openDragLock=hP(p),!this.openDragLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Ot(k=>{let g=this.getAxisMotionValue(k).get()||0;if(bn.test(g)){const{projection:m}=this.visualElement;if(m&&m.layout){const y=m.layout.layoutBox[k];y&&(g=Rt(y)*(parseFloat(g)/100))}}this.originPoint[k]=g}),x&&Ae.postRender(()=>x(d,f)),lf(this.visualElement,"transform");const{animationState:b}=this.visualElement;b&&b.setActive("whileDrag",!0)},a=(d,f)=>{const{dragPropagation:p,dragDirectionLock:h,onDirectionLock:x,onDrag:b}=this.getProps();if(!p&&!this.openDragLock)return;const{offset:k}=f;if(h&&this.currentDirection===null){this.currentDirection=SR(k),this.currentDirection!==null&&x&&x(this.currentDirection);return}this.updateAxis("x",f.point,k),this.updateAxis("y",f.point,k),this.visualElement.render(),b&&b(d,f)},o=(d,f)=>this.stop(d,f),l=()=>Ot(d=>{var f;return this.getAnimationState(d)==="paused"&&((f=this.getAxisMotionValue(d).animation)===null||f===void 0?void 0:f.play())}),{dragSnapToOrigin:u}=this.getProps();this.panSession=new xk(t,{onSessionStart:i,onStart:s,onMove:a,onSessionEnd:o,resumeAnimation:l},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:u,contextWindow:Tk(this.visualElement)})}stop(t,n){const r=this.isDragging;if(this.cancel(),!r)return;const{velocity:i}=n;this.startAnimation(i);const{onDragEnd:s}=this.getProps();s&&Ae.postRender(()=>s(t,n))}cancel(){this.isDragging=!1;const{projection:t,animationState:n}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:r}=this.getProps();!r&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(t,n,r){const{drag:i}=this.getProps();if(!r||!Io(t,i,this.currentDirection))return;const s=this.getAxisMotionValue(t);let a=this.originPoint[t]+r[t];this.constraints&&this.constraints[t]&&(a=dR(a,this.constraints[t],this.elastic[t])),s.set(a)}resolveConstraints(){var t;const{dragConstraints:n,dragElastic:r}=this.getProps(),i=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(t=this.visualElement.projection)===null||t===void 0?void 0:t.layout,s=this.constraints;n&&Ni(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&i?this.constraints=fR(i.layoutBox,n):this.constraints=!1,this.elastic=gR(r),s!==this.constraints&&i&&this.constraints&&!this.hasMutatedConstraints&&Ot(a=>{this.constraints!==!1&&this.getAxisMotionValue(a)&&(this.constraints[a]=mR(i.layoutBox[a],this.constraints[a]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:n}=this.getProps();if(!t||!Ni(t))return!1;const r=t.current,{projection:i}=this.visualElement;if(!i||!i.layout)return!1;const s=bR(r,i.root,this.visualElement.getTransformPagePoint());let a=pR(i.layout.layoutBox,s);if(n){const o=n(yR(a));this.hasMutatedConstraints=!!o,o&&(a=kk(o))}return a}startAnimation(t){const{drag:n,dragMomentum:r,dragElastic:i,dragTransition:s,dragSnapToOrigin:a,onDragTransitionEnd:o}=this.getProps(),l=this.constraints||{},u=Ot(d=>{if(!Io(d,n,this.currentDirection))return;let f=l&&l[d]||{};a&&(f={min:0,max:0});const p=i?200:1e6,h=i?40:1e7,x={type:"inertia",velocity:r?t[d]:0,bounceStiffness:p,bounceDamping:h,timeConstant:750,restDelta:1,restSpeed:10,...s,...f};return this.startAxisValueAnimation(d,x)});return Promise.all(u).then(o)}startAxisValueAnimation(t,n){const r=this.getAxisMotionValue(t);return lf(this.visualElement,t),r.start(Mh(t,r,0,n,this.visualElement,!1))}stopAnimation(){Ot(t=>this.getAxisMotionValue(t).stop())}pauseAnimation(){Ot(t=>{var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.pause()})}getAnimationState(t){var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.state}getAxisMotionValue(t){const n=`_drag${t.toUpperCase()}`,r=this.visualElement.getProps(),i=r[n];return i||this.visualElement.getValue(t,(r.initial?r.initial[t]:void 0)||0)}snapToCursor(t){Ot(n=>{const{drag:r}=this.getProps();if(!Io(n,r,this.currentDirection))return;const{projection:i}=this.visualElement,s=this.getAxisMotionValue(n);if(i&&i.layout){const{min:a,max:o}=i.layout.layoutBox[n];s.set(t[n]-Re(a,o,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:n}=this.getProps(),{projection:r}=this.visualElement;if(!Ni(n)||!r||!this.constraints)return;this.stopAnimation();const i={x:0,y:0};Ot(a=>{const o=this.getAxisMotionValue(a);if(o&&this.constraints!==!1){const l=o.get();i[a]=hR({min:l,max:l},this.constraints[a])}});const{transformTemplate:s}=this.visualElement.getProps();this.visualElement.current.style.transform=s?s({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.resolveConstraints(),Ot(a=>{if(!Io(a,t,null))return;const o=this.getAxisMotionValue(a),{min:l,max:u}=this.constraints[a];o.set(Re(l,u,i[a]))})}addListeners(){if(!this.visualElement.current)return;wR.set(this.visualElement,this);const t=this.visualElement.current,n=Js(t,"pointerdown",l=>{const{drag:u,dragListener:d=!0}=this.getProps();u&&d&&this.start(l)}),r=()=>{const{dragConstraints:l}=this.getProps();Ni(l)&&l.current&&(this.constraints=this.resolveRefConstraints())},{projection:i}=this.visualElement,s=i.addEventListener("measure",r);i&&!i.layout&&(i.root&&i.root.updateScroll(),i.updateLayout()),Ae.read(r);const a=Ma(window,"resize",()=>this.scalePositionWithinConstraints()),o=i.addEventListener("didUpdate",({delta:l,hasLayoutChanged:u})=>{this.isDragging&&u&&(Ot(d=>{const f=this.getAxisMotionValue(d);f&&(this.originPoint[d]+=l[d].translate,f.set(f.get()+l[d].translate))}),this.visualElement.render())});return()=>{a(),n(),s(),o&&o()}}getProps(){const t=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:r=!1,dragPropagation:i=!1,dragConstraints:s=!1,dragElastic:a=gf,dragMomentum:o=!0}=t;return{...t,drag:n,dragDirectionLock:r,dragPropagation:i,dragConstraints:s,dragElastic:a,dragMomentum:o}}}function Io(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function SR(e,t=10){let n=null;return Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x"),n}class ER extends Nr{constructor(t){super(t),this.removeGroupControls=Pt,this.removeListeners=Pt,this.controls=new kR(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Pt}unmount(){this.removeGroupControls(),this.removeListeners()}}const $y=e=>(t,n)=>{e&&Ae.postRender(()=>e(t,n))};class CR extends Nr{constructor(){super(...arguments),this.removePointerDownListener=Pt}onPointerDown(t){this.session=new xk(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Tk(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:n,onPan:r,onPanEnd:i}=this.node.getProps();return{onSessionStart:$y(t),onStart:$y(n),onMove:r,onEnd:(s,a)=>{delete this.session,i&&Ae.postRender(()=>i(s,a))}}}mount(){this.removePointerDownListener=Js(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const rl={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function Hy(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const Is={correct:(e,t)=>{if(!t.target)return e;if(typeof e=="string")if(J.test(e))e=parseFloat(e);else return e;const n=Hy(e,t.target.x),r=Hy(e,t.target.y);return`${n}% ${r}%`}},TR={correct:(e,{treeScale:t,projectionDelta:n})=>{const r=e,i=Cr.parse(e);if(i.length>5)return r;const s=Cr.createTransformer(e),a=typeof i[0]!="number"?1:0,o=n.x.scale*t.x,l=n.y.scale*t.y;i[0+a]/=o,i[1+a]/=l;const u=Re(o,l,.5);return typeof i[2+a]=="number"&&(i[2+a]/=u),typeof i[3+a]=="number"&&(i[3+a]/=u),s(i)}};class _R extends C.Component{componentDidMount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r,layoutId:i}=this.props,{projection:s}=t;q5(AR),s&&(n.group&&n.group.add(s),r&&r.register&&i&&r.register(s),s.root.didUpdate(),s.addEventListener("animationComplete",()=>{this.safeToRemove()}),s.setOptions({...s.options,onExitComplete:()=>this.safeToRemove()})),rl.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:n,visualElement:r,drag:i,isPresent:s}=this.props,a=r.projection;return a&&(a.isPresent=s,i||t.layoutDependency!==n||n===void 0?a.willUpdate():this.safeToRemove(),t.isPresent!==s&&(s?a.promote():a.relegate()||Ae.postRender(()=>{const o=a.getStack();(!o||!o.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),dh.postRender(()=>{!t.currentAnimation&&t.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r}=this.props,{projection:i}=t;i&&(i.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(i),r&&r.deregister&&r.deregister(i))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function _k(e){const[t,n]=l5(),r=C.useContext(uw);return c.jsx(_R,{...e,layoutGroup:r,switchLayoutGroup:C.useContext(yw),isPresent:t,safeToRemove:n})}const AR={borderRadius:{...Is,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Is,borderTopRightRadius:Is,borderBottomLeftRadius:Is,borderBottomRightRadius:Is,boxShadow:TR};function IR(e,t,n){const r=at(e)?e:La(e);return r.start(Mh("",r,t,n)),r.animation}function NR(e){return e instanceof SVGElement&&e.tagName!=="svg"}const PR=(e,t)=>e.depth-t.depth;class jR{constructor(){this.children=[],this.isDirty=!1}add(t){Ch(this.children,t),this.isDirty=!0}remove(t){Th(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(PR),this.isDirty=!1,this.children.forEach(t)}}function RR(e,t){const n=wn.now(),r=({timestamp:i})=>{const s=i-n;s>=t&&(Er(r),e(s-t))};return Ae.read(r,!0),()=>Er(r)}const Ak=["TopLeft","TopRight","BottomLeft","BottomRight"],LR=Ak.length,Wy=e=>typeof e=="string"?parseFloat(e):e,Gy=e=>typeof e=="number"||J.test(e);function DR(e,t,n,r,i,s){i?(e.opacity=Re(0,n.opacity!==void 0?n.opacity:1,MR(r)),e.opacityExit=Re(t.opacity!==void 0?t.opacity:1,0,FR(r))):s&&(e.opacity=Re(t.opacity!==void 0?t.opacity:1,n.opacity!==void 0?n.opacity:1,r));for(let a=0;a<LR;a++){const o=`border${Ak[a]}Radius`;let l=qy(t,o),u=qy(n,o);if(l===void 0&&u===void 0)continue;l||(l=0),u||(u=0),l===0||u===0||Gy(l)===Gy(u)?(e[o]=Math.max(Re(Wy(l),Wy(u),r),0),(bn.test(u)||bn.test(l))&&(e[o]+="%")):e[o]=u}(t.rotate||n.rotate)&&(e.rotate=Re(t.rotate||0,n.rotate||0,r))}function qy(e,t){return e[t]!==void 0?e[t]:e.borderRadius}const MR=Ik(0,.5,qw),FR=Ik(.5,.95,Pt);function Ik(e,t,n){return r=>r<e?0:r>t?1:n(ss(e,t,r))}function Ky(e,t){e.min=t.min,e.max=t.max}function Ft(e,t){Ky(e.x,t.x),Ky(e.y,t.y)}function Yy(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}function Xy(e,t,n,r,i){return e-=t,e=Gl(e,1/n,r),i!==void 0&&(e=Gl(e,1/i,r)),e}function OR(e,t=0,n=1,r=.5,i,s=e,a=e){if(bn.test(t)&&(t=parseFloat(t),t=Re(a.min,a.max,t/100)-a.min),typeof t!="number")return;let o=Re(s.min,s.max,r);e===s&&(o-=t),e.min=Xy(e.min,t,n,o,i),e.max=Xy(e.max,t,n,o,i)}function Qy(e,t,[n,r,i],s,a){OR(e,t[n],t[r],t[i],t.scale,s,a)}const zR=["x","scaleX","originX"],UR=["y","scaleY","originY"];function Zy(e,t,n,r){Qy(e.x,t,zR,n?n.x:void 0,r?r.x:void 0),Qy(e.y,t,UR,n?n.y:void 0,r?r.y:void 0)}function Jy(e){return e.translate===0&&e.scale===1}function Nk(e){return Jy(e.x)&&Jy(e.y)}function ex(e,t){return e.min===t.min&&e.max===t.max}function BR(e,t){return ex(e.x,t.x)&&ex(e.y,t.y)}function tx(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}function Pk(e,t){return tx(e.x,t.x)&&tx(e.y,t.y)}function nx(e){return Rt(e.x)/Rt(e.y)}function rx(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}class VR{constructor(){this.members=[]}add(t){Ch(this.members,t),t.scheduleRender()}remove(t){if(Th(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(t){const n=this.members.findIndex(i=>t===i);if(n===0)return!1;let r;for(let i=n;i>=0;i--){const s=this.members[i];if(s.isPresent!==!1){r=s;break}}return r?(this.promote(r),!0):!1}promote(t,n){const r=this.lead;if(t!==r&&(this.prevLead=r,this.lead=t,t.show(),r)){r.instance&&r.scheduleRender(),t.scheduleRender(),t.resumeFrom=r,n&&(t.resumeFrom.preserveOpacity=!0),r.snapshot&&(t.snapshot=r.snapshot,t.snapshot.latestValues=r.animationValues||r.latestValues),t.root&&t.root.isUpdating&&(t.isLayoutDirty=!0);const{crossfade:i}=t.options;i===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(t=>{const{options:n,resumingFrom:r}=t;n.onExitComplete&&n.onExitComplete(),r&&r.options.onExitComplete&&r.options.onExitComplete()})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function $R(e,t,n){let r="";const i=e.x.translate/t.x,s=e.y.translate/t.y,a=(n==null?void 0:n.z)||0;if((i||s||a)&&(r=`translate3d(${i}px, ${s}px, ${a}px) `),(t.x!==1||t.y!==1)&&(r+=`scale(${1/t.x}, ${1/t.y}) `),n){const{transformPerspective:u,rotate:d,rotateX:f,rotateY:p,skewX:h,skewY:x}=n;u&&(r=`perspective(${u}px) ${r}`),d&&(r+=`rotate(${d}deg) `),f&&(r+=`rotateX(${f}deg) `),p&&(r+=`rotateY(${p}deg) `),h&&(r+=`skewX(${h}deg) `),x&&(r+=`skewY(${x}deg) `)}const o=e.x.scale*t.x,l=e.y.scale*t.y;return(o!==1||l!==1)&&(r+=`scale(${o}, ${l})`),r||"none"}const Br={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0},zs=typeof window<"u"&&window.MotionDebug!==void 0,Ic=["","X","Y","Z"],HR={visibility:"hidden"},ix=1e3;let WR=0;function Nc(e,t,n,r){const{latestValues:i}=t;i[e]&&(n[e]=i[e],t.setStaticValue(e,0),r&&(r[e]=0))}function jk(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;const{visualElement:t}=e.options;if(!t)return;const n=Uw(t);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:i,layoutId:s}=e.options;window.MotionCancelOptimisedAnimation(n,"transform",Ae,!(i||s))}const{parent:r}=e;r&&!r.hasCheckedOptimisedAppear&&jk(r)}function Rk({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:r,resetTransform:i}){return class{constructor(a={},o=t==null?void 0:t()){this.id=WR++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,zs&&(Br.totalNodes=Br.resolvedTargetDeltas=Br.recalculatedProjection=0),this.nodes.forEach(KR),this.nodes.forEach(JR),this.nodes.forEach(eL),this.nodes.forEach(YR),zs&&window.MotionDebug.record(Br)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=a,this.root=o?o.root||o:this,this.path=o?[...o.path,o]:[],this.parent=o,this.depth=o?o.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new jR)}addEventListener(a,o){return this.eventHandlers.has(a)||this.eventHandlers.set(a,new _h),this.eventHandlers.get(a).add(o)}notifyListeners(a,...o){const l=this.eventHandlers.get(a);l&&l.notify(...o)}hasListeners(a){return this.eventHandlers.has(a)}mount(a,o=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=NR(a),this.instance=a;const{layoutId:l,layout:u,visualElement:d}=this.options;if(d&&!d.current&&d.mount(a),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),o&&(u||l)&&(this.isLayoutDirty=!0),e){let f;const p=()=>this.root.updateBlockedByResize=!1;e(a,()=>{this.root.updateBlockedByResize=!0,f&&f(),f=RR(p,250),rl.hasAnimatedSinceResize&&(rl.hasAnimatedSinceResize=!1,this.nodes.forEach(ax))})}l&&this.root.registerSharedNode(l,this),this.options.animate!==!1&&d&&(l||u)&&this.addEventListener("didUpdate",({delta:f,hasLayoutChanged:p,hasRelativeTargetChanged:h,layout:x})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const b=this.options.transition||d.getDefaultTransition()||sL,{onLayoutAnimationStart:k,onLayoutAnimationComplete:g}=d.getProps(),m=!this.targetLayout||!Pk(this.targetLayout,x)||h,y=!p&&h;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||y||p&&(m||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(f,y);const v={...wh(b,"layout"),onPlay:k,onComplete:g};(d.shouldReduceMotion||this.options.layoutRoot)&&(v.delay=0,v.type=!1),this.startAnimation(v)}else p||ax(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=x})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const a=this.getStack();a&&a.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,Er(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(tL),this.animationId++)}getTransformTemplate(){const{visualElement:a}=this.options;return a&&a.getProps().transformTemplate}willUpdate(a=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&jk(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let d=0;d<this.path.length;d++){const f=this.path[d];f.shouldResetTransform=!0,f.updateScroll("snapshot"),f.options.layoutRoot&&f.willUpdate(!1)}const{layoutId:o,layout:l}=this.options;if(o===void 0&&!l)return;const u=this.getTransformTemplate();this.prevTransformTemplateValue=u?u(this.latestValues,""):void 0,this.updateSnapshot(),a&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(sx);return}this.isUpdating||this.nodes.forEach(QR),this.isUpdating=!1,this.nodes.forEach(ZR),this.nodes.forEach(GR),this.nodes.forEach(qR),this.clearAllSnapshots();const o=wn.now();Qe.delta=Kn(0,1e3/60,o-Qe.timestamp),Qe.timestamp=o,Qe.isProcessing=!0,bc.update.process(Qe),bc.preRender.process(Qe),bc.render.process(Qe),Qe.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,dh.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(XR),this.sharedNodes.forEach(nL)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Ae.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Ae.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const a=this.layout;this.layout=this.measure(!1),this.layoutCorrected=ze(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:o}=this.options;o&&o.notify("LayoutMeasure",this.layout.layoutBox,a?a.layoutBox:void 0)}updateScroll(a="measure"){let o=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===a&&(o=!1),o){const l=r(this.instance);this.scroll={animationId:this.root.animationId,phase:a,isRoot:l,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:l}}}resetTransform(){if(!i)return;const a=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,o=this.projectionDelta&&!Nk(this.projectionDelta),l=this.getTransformTemplate(),u=l?l(this.latestValues,""):void 0,d=u!==this.prevTransformTemplateValue;a&&(o||Ur(this.latestValues)||d)&&(i(this.instance,u),this.shouldResetTransform=!1,this.scheduleRender())}measure(a=!0){const o=this.measurePageBox();let l=this.removeElementScroll(o);return a&&(l=this.removeTransform(l)),aL(l),{animationId:this.root.animationId,measuredBox:o,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){var a;const{visualElement:o}=this.options;if(!o)return ze();const l=o.measureViewportBox();if(!(((a=this.scroll)===null||a===void 0?void 0:a.wasRoot)||this.path.some(oL))){const{scroll:d}=this.root;d&&(Ri(l.x,d.offset.x),Ri(l.y,d.offset.y))}return l}removeElementScroll(a){var o;const l=ze();if(Ft(l,a),!((o=this.scroll)===null||o===void 0)&&o.wasRoot)return l;for(let u=0;u<this.path.length;u++){const d=this.path[u],{scroll:f,options:p}=d;d!==this.root&&f&&p.layoutScroll&&(f.wasRoot&&Ft(l,a),Ri(l.x,f.offset.x),Ri(l.y,f.offset.y))}return l}applyTransform(a,o=!1){const l=ze();Ft(l,a);for(let u=0;u<this.path.length;u++){const d=this.path[u];!o&&d.options.layoutScroll&&d.scroll&&d!==d.root&&Li(l,{x:-d.scroll.offset.x,y:-d.scroll.offset.y}),Ur(d.latestValues)&&Li(l,d.latestValues)}return Ur(this.latestValues)&&Li(l,this.latestValues),l}removeTransform(a){const o=ze();Ft(o,a);for(let l=0;l<this.path.length;l++){const u=this.path[l];if(!u.instance||!Ur(u.latestValues))continue;yf(u.latestValues)&&u.updateSnapshot();const d=ze(),f=u.measurePageBox();Ft(d,f),Zy(o,u.latestValues,u.snapshot?u.snapshot.layoutBox:void 0,d)}return Ur(this.latestValues)&&Zy(o,this.latestValues),o}setTargetDelta(a){this.targetDelta=a,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(a){this.options={...this.options,...a,crossfade:a.crossfade!==void 0?a.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Qe.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(a=!1){var o;const l=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=l.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=l.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=l.isSharedProjectionDirty);const u=!!this.resumingFrom||this!==l;if(!(a||u&&this.isSharedProjectionDirty||this.isProjectionDirty||!((o=this.parent)===null||o===void 0)&&o.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:f,layoutId:p}=this.options;if(!(!this.layout||!(f||p))){if(this.resolvedRelativeTargetAt=Qe.timestamp,!this.targetDelta&&!this.relativeTarget){const h=this.getClosestProjectingParent();h&&h.layout&&this.animationProgress!==1?(this.relativeParent=h,this.forceRelativeParentToResolveTarget(),this.relativeTarget=ze(),this.relativeTargetOrigin=ze(),ta(this.relativeTargetOrigin,this.layout.layoutBox,h.layout.layoutBox),Ft(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=ze(),this.targetWithTransforms=ze()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),cR(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Ft(this.target,this.layout.layoutBox),Ek(this.target,this.targetDelta)):Ft(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const h=this.getClosestProjectingParent();h&&!!h.resumingFrom==!!this.resumingFrom&&!h.options.layoutScroll&&h.target&&this.animationProgress!==1?(this.relativeParent=h,this.forceRelativeParentToResolveTarget(),this.relativeTarget=ze(),this.relativeTargetOrigin=ze(),ta(this.relativeTargetOrigin,this.target,h.target),Ft(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}zs&&Br.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||yf(this.parent.latestValues)||Sk(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var a;const o=this.getLead(),l=!!this.resumingFrom||this!==o;let u=!0;if((this.isProjectionDirty||!((a=this.parent)===null||a===void 0)&&a.isProjectionDirty)&&(u=!1),l&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(u=!1),this.resolvedRelativeTargetAt===Qe.timestamp&&(u=!1),u)return;const{layout:d,layoutId:f}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(d||f))return;Ft(this.layoutCorrected,this.layout.layoutBox);const p=this.treeScale.x,h=this.treeScale.y;vR(this.layoutCorrected,this.treeScale,this.path,l),o.layout&&!o.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(o.target=o.layout.layoutBox,o.targetWithTransforms=ze());const{target:x}=o;if(!x){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(Yy(this.prevProjectionDelta.x,this.projectionDelta.x),Yy(this.prevProjectionDelta.y,this.projectionDelta.y)),ea(this.projectionDelta,this.layoutCorrected,x,this.latestValues),(this.treeScale.x!==p||this.treeScale.y!==h||!rx(this.projectionDelta.x,this.prevProjectionDelta.x)||!rx(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",x)),zs&&Br.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(a=!0){var o;if((o=this.options.visualElement)===null||o===void 0||o.scheduleRender(),a){const l=this.getStack();l&&l.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=ji(),this.projectionDelta=ji(),this.projectionDeltaWithTransform=ji()}setAnimationOrigin(a,o=!1){const l=this.snapshot,u=l?l.latestValues:{},d={...this.latestValues},f=ji();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!o;const p=ze(),h=l?l.source:void 0,x=this.layout?this.layout.source:void 0,b=h!==x,k=this.getStack(),g=!k||k.members.length<=1,m=!!(b&&!g&&this.options.crossfade===!0&&!this.path.some(iL));this.animationProgress=0;let y;this.mixTargetDelta=v=>{const E=v/1e3;ox(f.x,a.x,E),ox(f.y,a.y,E),this.setTargetDelta(f),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(ta(p,this.layout.layoutBox,this.relativeParent.layout.layoutBox),rL(this.relativeTarget,this.relativeTargetOrigin,p,E),y&&BR(this.relativeTarget,y)&&(this.isProjectionDirty=!1),y||(y=ze()),Ft(y,this.relativeTarget)),b&&(this.animationValues=d,DR(d,u,this.latestValues,E,m,g)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=E},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(a){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(Er(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Ae.update(()=>{rl.hasAnimatedSinceResize=!0,this.currentAnimation=IR(0,ix,{...a,onUpdate:o=>{this.mixTargetDelta(o),a.onUpdate&&a.onUpdate(o)},onComplete:()=>{a.onComplete&&a.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const a=this.getStack();a&&a.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(ix),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const a=this.getLead();let{targetWithTransforms:o,target:l,layout:u,latestValues:d}=a;if(!(!o||!l||!u)){if(this!==a&&this.layout&&u&&Lk(this.options.animationType,this.layout.layoutBox,u.layoutBox)){l=this.target||ze();const f=Rt(this.layout.layoutBox.x);l.x.min=a.target.x.min,l.x.max=l.x.min+f;const p=Rt(this.layout.layoutBox.y);l.y.min=a.target.y.min,l.y.max=l.y.min+p}Ft(o,l),Li(o,d),ea(this.projectionDeltaWithTransform,this.layoutCorrected,o,d)}}registerSharedNode(a,o){this.sharedNodes.has(a)||this.sharedNodes.set(a,new VR),this.sharedNodes.get(a).add(o);const u=o.options.initialPromotionConfig;o.promote({transition:u?u.transition:void 0,preserveFollowOpacity:u&&u.shouldPreserveFollowOpacity?u.shouldPreserveFollowOpacity(o):void 0})}isLead(){const a=this.getStack();return a?a.lead===this:!0}getLead(){var a;const{layoutId:o}=this.options;return o?((a=this.getStack())===null||a===void 0?void 0:a.lead)||this:this}getPrevLead(){var a;const{layoutId:o}=this.options;return o?(a=this.getStack())===null||a===void 0?void 0:a.prevLead:void 0}getStack(){const{layoutId:a}=this.options;if(a)return this.root.sharedNodes.get(a)}promote({needsReset:a,transition:o,preserveFollowOpacity:l}={}){const u=this.getStack();u&&u.promote(this,l),a&&(this.projectionDelta=void 0,this.needsReset=!0),o&&this.setOptions({transition:o})}relegate(){const a=this.getStack();return a?a.relegate(this):!1}resetSkewAndRotation(){const{visualElement:a}=this.options;if(!a)return;let o=!1;const{latestValues:l}=a;if((l.z||l.rotate||l.rotateX||l.rotateY||l.rotateZ||l.skewX||l.skewY)&&(o=!0),!o)return;const u={};l.z&&Nc("z",a,u,this.animationValues);for(let d=0;d<Ic.length;d++)Nc(`rotate${Ic[d]}`,a,u,this.animationValues),Nc(`skew${Ic[d]}`,a,u,this.animationValues);a.render();for(const d in u)a.setStaticValue(d,u[d]),this.animationValues&&(this.animationValues[d]=u[d]);a.scheduleRender()}getProjectionStyles(a){var o,l;if(!this.instance||this.isSVG)return;if(!this.isVisible)return HR;const u={visibility:""},d=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,u.opacity="",u.pointerEvents=tl(a==null?void 0:a.pointerEvents)||"",u.transform=d?d(this.latestValues,""):"none",u;const f=this.getLead();if(!this.projectionDelta||!this.layout||!f.target){const b={};return this.options.layoutId&&(b.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,b.pointerEvents=tl(a==null?void 0:a.pointerEvents)||""),this.hasProjected&&!Ur(this.latestValues)&&(b.transform=d?d({},""):"none",this.hasProjected=!1),b}const p=f.animationValues||f.latestValues;this.applyTransformsToTarget(),u.transform=$R(this.projectionDeltaWithTransform,this.treeScale,p),d&&(u.transform=d(p,u.transform));const{x:h,y:x}=this.projectionDelta;u.transformOrigin=`${h.origin*100}% ${x.origin*100}% 0`,f.animationValues?u.opacity=f===this?(l=(o=p.opacity)!==null&&o!==void 0?o:this.latestValues.opacity)!==null&&l!==void 0?l:1:this.preserveOpacity?this.latestValues.opacity:p.opacityExit:u.opacity=f===this?p.opacity!==void 0?p.opacity:"":p.opacityExit!==void 0?p.opacityExit:0;for(const b in Bl){if(p[b]===void 0)continue;const{correct:k,applyTo:g}=Bl[b],m=u.transform==="none"?p[b]:k(p[b],f);if(g){const y=g.length;for(let v=0;v<y;v++)u[g[v]]=m}else u[b]=m}return this.options.layoutId&&(u.pointerEvents=f===this?tl(a==null?void 0:a.pointerEvents)||"":"none"),u}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(a=>{var o;return(o=a.currentAnimation)===null||o===void 0?void 0:o.stop()}),this.root.nodes.forEach(sx),this.root.sharedNodes.clear()}}}function GR(e){e.updateLayout()}function qR(e){var t;const n=((t=e.resumeFrom)===null||t===void 0?void 0:t.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&n&&e.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:i}=e.layout,{animationType:s}=e.options,a=n.source!==e.layout.source;s==="size"?Ot(f=>{const p=a?n.measuredBox[f]:n.layoutBox[f],h=Rt(p);p.min=r[f].min,p.max=p.min+h}):Lk(s,n.layoutBox,r)&&Ot(f=>{const p=a?n.measuredBox[f]:n.layoutBox[f],h=Rt(r[f]);p.max=p.min+h,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[f].max=e.relativeTarget[f].min+h)});const o=ji();ea(o,r,n.layoutBox);const l=ji();a?ea(l,e.applyTransform(i,!0),n.measuredBox):ea(l,r,n.layoutBox);const u=!Nk(o);let d=!1;if(!e.resumeFrom){const f=e.getClosestProjectingParent();if(f&&!f.resumeFrom){const{snapshot:p,layout:h}=f;if(p&&h){const x=ze();ta(x,n.layoutBox,p.layoutBox);const b=ze();ta(b,r,h.layoutBox),Pk(x,b)||(d=!0),f.options.layoutRoot&&(e.relativeTarget=b,e.relativeTargetOrigin=x,e.relativeParent=f)}}}e.notifyListeners("didUpdate",{layout:r,snapshot:n,delta:l,layoutDelta:o,hasLayoutChanged:u,hasRelativeTargetChanged:d})}else if(e.isLead()){const{onExitComplete:r}=e.options;r&&r()}e.options.transition=void 0}function KR(e){zs&&Br.totalNodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function YR(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function XR(e){e.clearSnapshot()}function sx(e){e.clearMeasurements()}function QR(e){e.isLayoutDirty=!1}function ZR(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function ax(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function JR(e){e.resolveTargetDelta()}function eL(e){e.calcProjection()}function tL(e){e.resetSkewAndRotation()}function nL(e){e.removeLeadSnapshot()}function ox(e,t,n){e.translate=Re(t.translate,0,n),e.scale=Re(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function lx(e,t,n,r){e.min=Re(t.min,n.min,r),e.max=Re(t.max,n.max,r)}function rL(e,t,n,r){lx(e.x,t.x,n.x,r),lx(e.y,t.y,n.y,r)}function iL(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const sL={duration:.45,ease:[.4,0,.1,1]},ux=e=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),cx=ux("applewebkit/")&&!ux("chrome/")?Math.round:Pt;function dx(e){e.min=cx(e.min),e.max=cx(e.max)}function aL(e){dx(e.x),dx(e.y)}function Lk(e,t,n){return e==="position"||e==="preserve-aspect"&&!uR(nx(t),nx(n),.2)}function oL(e){var t;return e!==e.root&&((t=e.scroll)===null||t===void 0?void 0:t.wasRoot)}const lL=Rk({attachResizeListener:(e,t)=>Ma(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Pc={current:void 0},Dk=Rk({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!Pc.current){const e=new lL({});e.mount(window),e.setOptions({layoutScroll:!0}),Pc.current=e}return Pc.current},resetTransform:(e,t)=>{e.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),uL={pan:{Feature:CR},drag:{Feature:ER,ProjectionNode:Dk,MeasureLayout:_k}};function fx(e,t,n){const{props:r}=e;e.animationState&&r.whileHover&&e.animationState.setActive("whileHover",n==="Start");const i="onHover"+n,s=r[i];s&&Ae.postRender(()=>s(t,eo(t)))}class cL extends Nr{mount(){const{current:t}=this.node;t&&(this.unmount=uP(t,n=>(fx(this.node,n,"Start"),r=>fx(this.node,r,"End"))))}unmount(){}}class dL extends Nr{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Ja(Ma(this.node.current,"focus",()=>this.onFocus()),Ma(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function px(e,t,n){const{props:r}=e;e.animationState&&r.whileTap&&e.animationState.setActive("whileTap",n==="Start");const i="onTap"+(n==="End"?"":n),s=r[i];s&&Ae.postRender(()=>s(t,eo(t)))}class fL extends Nr{mount(){const{current:t}=this.node;t&&(this.unmount=pP(t,n=>(px(this.node,n,"Start"),(r,{success:i})=>px(this.node,r,i?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const vf=new WeakMap,jc=new WeakMap,pL=e=>{const t=vf.get(e.target);t&&t(e)},hL=e=>{e.forEach(pL)};function mL({root:e,...t}){const n=e||document;jc.has(n)||jc.set(n,{});const r=jc.get(n),i=JSON.stringify(t);return r[i]||(r[i]=new IntersectionObserver(hL,{root:e,...t})),r[i]}function gL(e,t,n){const r=mL(t);return vf.set(e,n),r.observe(e),()=>{vf.delete(e),r.unobserve(e)}}const yL={some:0,all:1};class xL extends Nr{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:t={}}=this.node.getProps(),{root:n,margin:r,amount:i="some",once:s}=t,a={root:n?n.current:void 0,rootMargin:r,threshold:typeof i=="number"?i:yL[i]},o=l=>{const{isIntersecting:u}=l;if(this.isInView===u||(this.isInView=u,s&&!u&&this.hasEnteredView))return;u&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",u);const{onViewportEnter:d,onViewportLeave:f}=this.node.getProps(),p=u?d:f;p&&p(l)};return gL(this.node.current,a,o)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:n}=this.node;["amount","margin","root"].some(vL(t,n))&&this.startObserver()}unmount(){}}function vL({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}const bL={inView:{Feature:xL},tap:{Feature:fL},focus:{Feature:dL},hover:{Feature:cL}},wL={layout:{ProjectionNode:Dk,MeasureLayout:_k}},bf={current:null},Mk={current:!1};function kL(){if(Mk.current=!0,!!ah)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>bf.current=e.matches;e.addListener(t),t()}else bf.current=!1}const SL=[...ok,rt,Cr],EL=e=>SL.find(ak(e)),hx=new WeakMap;function CL(e,t,n){for(const r in t){const i=t[r],s=n[r];if(at(i))e.addValue(r,i);else if(at(s))e.addValue(r,La(i,{owner:e}));else if(s!==i)if(e.hasValue(r)){const a=e.getValue(r);a.liveStyle===!0?a.jump(i):a.hasAnimated||a.set(i)}else{const a=e.getStaticValue(r);e.addValue(r,La(a!==void 0?a:i,{owner:e}))}}for(const r in n)t[r]===void 0&&e.removeValue(r);return t}const mx=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class TL{scrapeMotionValuesFromProps(t,n,r){return{}}constructor({parent:t,props:n,presenceContext:r,reducedMotionConfig:i,blockInitialAnimation:s,visualState:a},o={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=Rh,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const h=wn.now();this.renderScheduledAt<h&&(this.renderScheduledAt=h,Ae.render(this.render,!1,!0))};const{latestValues:l,renderState:u,onUpdate:d}=a;this.onUpdate=d,this.latestValues=l,this.baseTarget={...l},this.initialValues=n.initial?{...l}:{},this.renderState=u,this.parent=t,this.props=n,this.presenceContext=r,this.depth=t?t.depth+1:0,this.reducedMotionConfig=i,this.options=o,this.blockInitialAnimation=!!s,this.isControllingVariants=_u(n),this.isVariantNode=mw(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:f,...p}=this.scrapeMotionValuesFromProps(n,{},this);for(const h in p){const x=p[h];l[h]!==void 0&&at(x)&&x.set(l[h],!1)}}mount(t){this.current=t,hx.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,r)=>this.bindToMotionValue(r,n)),Mk.current||kL(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:bf.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){hx.delete(this.current),this.projection&&this.projection.unmount(),Er(this.notifyUpdate),Er(this.render),this.valueSubscriptions.forEach(t=>t()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const t in this.events)this.events[t].clear();for(const t in this.features){const n=this.features[t];n&&(n.unmount(),n.isMounted=!1)}this.current=null}bindToMotionValue(t,n){this.valueSubscriptions.has(t)&&this.valueSubscriptions.get(t)();const r=fi.has(t),i=n.on("change",o=>{this.latestValues[t]=o,this.props.onUpdate&&Ae.preRender(this.notifyUpdate),r&&this.projection&&(this.projection.isTransformDirty=!0)}),s=n.on("renderRequest",this.scheduleRender);let a;window.MotionCheckAppearSync&&(a=window.MotionCheckAppearSync(this,t,n)),this.valueSubscriptions.set(t,()=>{i(),s(),a&&a(),n.owner&&n.stop()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}updateFeatures(){let t="animation";for(t in as){const n=as[t];if(!n)continue;const{isEnabled:r,Feature:i}=n;if(!this.features[t]&&i&&r(this.props)&&(this.features[t]=new i(this)),this.features[t]){const s=this.features[t];s.isMounted?s.update():(s.mount(),s.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):ze()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,n){this.latestValues[t]=n}update(t,n){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let r=0;r<mx.length;r++){const i=mx[r];this.propEventSubscriptions[i]&&(this.propEventSubscriptions[i](),delete this.propEventSubscriptions[i]);const s="on"+i,a=t[s];a&&(this.propEventSubscriptions[i]=this.on(i,a))}this.prevMotionValues=CL(this,this.scrapeMotionValuesFromProps(t,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue(),this.onUpdate&&this.onUpdate(this)}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(t){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(t),()=>n.variantChildren.delete(t)}addValue(t,n){const r=this.values.get(t);n!==r&&(r&&this.removeValue(t),this.bindToMotionValue(t,n),this.values.set(t,n),this.latestValues[t]=n.get())}removeValue(t){this.values.delete(t);const n=this.valueSubscriptions.get(t);n&&(n(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,n){if(this.props.values&&this.props.values[t])return this.props.values[t];let r=this.values.get(t);return r===void 0&&n!==void 0&&(r=La(n===null?void 0:n,{owner:this}),this.addValue(t,r)),r}readValue(t,n){var r;let i=this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:(r=this.getBaseTargetFromProps(this.props,t))!==null&&r!==void 0?r:this.readValueFromInstance(this.current,t,this.options);return i!=null&&(typeof i=="string"&&(ik(i)||Yw(i))?i=parseFloat(i):!EL(i)&&Cr.test(n)&&(i=tk(t,n)),this.setBaseTarget(t,at(i)?i.get():i)),at(i)?i.get():i}setBaseTarget(t,n){this.baseTarget[t]=n}getBaseTarget(t){var n;const{initial:r}=this.props;let i;if(typeof r=="string"||typeof r=="object"){const a=ph(this.props,r,(n=this.presenceContext)===null||n===void 0?void 0:n.custom);a&&(i=a[t])}if(r&&i!==void 0)return i;const s=this.getBaseTargetFromProps(this.props,t);return s!==void 0&&!at(s)?s:this.initialValues[t]!==void 0&&i===void 0?void 0:this.baseTarget[t]}on(t,n){return this.events[t]||(this.events[t]=new _h),this.events[t].add(n)}notify(t,...n){this.events[t]&&this.events[t].notify(...n)}}class Fk extends TL{constructor(){super(...arguments),this.KeyframeResolver=lk}sortInstanceNodePosition(t,n){return t.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(t,n){return t.style?t.style[n]:void 0}removeValueFromRenderState(t,{vars:n,style:r}){delete n[t],delete r[t]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;at(t)&&(this.childSubscription=t.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}function _L(e){return window.getComputedStyle(e)}class AL extends Fk{constructor(){super(...arguments),this.type="html",this.renderInstance=Ew}readValueFromInstance(t,n){if(fi.has(n)){const r=jh(n);return r&&r.default||0}else{const r=_L(t),i=(ww(n)?r.getPropertyValue(n):r[n])||0;return typeof i=="string"?i.trim():i}}measureInstanceViewportBox(t,{transformPagePoint:n}){return Ck(t,n)}build(t,n,r){gh(t,n,r.transformTemplate)}scrapeMotionValuesFromProps(t,n,r){return bh(t,n,r)}}class IL extends Fk{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=ze}getBaseTargetFromProps(t,n){return t[n]}readValueFromInstance(t,n){if(fi.has(n)){const r=jh(n);return r&&r.default||0}return n=Cw.has(n)?n:ch(n),t.getAttribute(n)}scrapeMotionValuesFromProps(t,n,r){return Aw(t,n,r)}build(t,n,r){yh(t,n,this.isSVGTag,r.transformTemplate)}renderInstance(t,n,r,i){Tw(t,n,r,i)}mount(t){this.isSVGTag=vh(t.tagName),super.mount(t)}}const NL=(e,t)=>fh(e)?new IL(t):new AL(t,{allowProjection:e!==C.Fragment}),PL=nP({...eR,...bL,...uL,...wL},NL),Rc=y5(PL);function jL({status:e}){const t=e==="speaking",n=e==="listening",r=e==="thinking";return c.jsxs("div",{className:`orb-stage ${t?"is-speaking":""} ${n?"is-listening":""} ${r?"is-thinking":""}`,"aria-label":`AI status: ${e}`,children:[c.jsx(Rc.div,{className:"orb-ring ring-outer",animate:{rotate:r?360:-18},transition:{duration:r?7:24,repeat:1/0,ease:"linear"}}),c.jsx(Rc.div,{className:"orb-ring ring-mid",animate:{rotate:r?-360:24,scale:t?[1,1.04,1]:1},transition:{duration:t?.7:18,repeat:1/0,ease:"linear"}}),c.jsxs("div",{className:"orb-core",children:[c.jsx("div",{className:"orb-grid"}),c.jsx("div",{className:"orb-wave","aria-hidden":"true",children:[10,18,28,16,34,21,12,26,17,32,13,22,10].map((i,s)=>c.jsx(Rc.span,{animate:t?{height:[i,i*1.7,i*.65,i]}:n?{height:[i,i*1.35,i]}:{height:i*.65},transition:{duration:.6+s%4*.12,repeat:1/0,delay:s*.025}},s))})]}),c.jsx("span",{className:"orb-dot dot-top"}),c.jsx("span",{className:"orb-dot dot-right"}),c.jsx("span",{className:"orb-dot dot-bottom"}),c.jsx("span",{className:"orb-dot dot-left"})]})}const dr={eliza:{id:"eliza",name:"ELIZA",gender:"Female",accent:"Indian English / Neutral",badge:"Recommended Default",role:"Female AI Assistant",description:"Warm, confident, and friendly for everyday questions & conversational AI.",lang:"en-IN",search:"Female, Conversational, Indian English",elevenlabs_voice_id:"21m00Tcm4TlvDq8ikWAM",rate:1,pitch:1.05,sample:"Hello! I am ELIZA, your conversational AI assistant. How can I help you today?",browserKeywords:["heera","neerja","veena","aditi","india","en-in","samantha","google english (india)"]},arjun:{id:"arjun",name:"ARJUN",gender:"Male",accent:"Indian English",badge:"Secondary Default",role:"Male AI Assistant",description:"Calm, mature, and articulate for technical explanations and coding help.",lang:"en-IN",search:"Male, Conversational, Indian English",elevenlabs_voice_id:"pNInz6obpgDQGcFmaJgB",rate:.96,pitch:.94,sample:"Greetings! I am Arjun. I'm ready to assist you with deep technical analysis and code.",browserKeywords:["ravi","prabhat","india","en-in","david","daniel","google english (india)"]},nova:{id:"nova",name:"NOVA",gender:"Female",accent:"General American",badge:"US Female",role:"American Female Assistant",description:"Clear, energetic, and natural for productivity and international users.",lang:"en-US",search:"Female, American, Conversational",elevenlabs_voice_id:"EXAVITQu4vr4xnSDxMaL",rate:1.02,pitch:1.06,sample:"Hi there! I'm Nova. Let's get things done quickly and smoothly.",browserKeywords:["zira","samantha","ava","jenny","en-us","google us english"]},alex:{id:"alex",name:"ALEX",gender:"Male",accent:"British English",badge:"UK Male",role:"British Male Assistant",description:"Polished, composed, and articulate for narration and professional tasks.",lang:"en-GB",search:"Male, British, Narration",elevenlabs_voice_id:"nPczCjzI2devNBz1zQrb",rate:.95,pitch:.96,sample:"Good day. I am Alex, at your service for research and comprehensive narration.",browserKeywords:["george","oliver","brian","daniel","en-gb","google uk english male"]},kavya:{id:"kavya",name:"KAVYA",gender:"Female",accent:"Hindi",badge:"Hindi Female",role:"Hindi Female Assistant",description:"Expressive, friendly, and natural for Hindi conversations and Indian users.",lang:"hi-IN",search:"Female, Hindi, Conversational",elevenlabs_voice_id:"ThT5KcBeYPX3keUQqHPh",rate:.98,pitch:1.08,sample:"नमस्ते! मैं काव्या हूँ। आपकी भाषा में आपकी सहायता करने के लिए तैयार हूँ।",browserKeywords:["kalpana","heera","swara","hindi","hi-in","google हिन्दी"]},vikram:{id:"vikram",name:"VIKRAM",gender:"Male",accent:"Hindi",badge:"Hindi Male",role:"Hindi Male Assistant",description:"Reassuring, clear, and confident for detailed explanations and voice search.",lang:"hi-IN",search:"Male, Hindi, Conversational",elevenlabs_voice_id:"VR6AewLTigWG4xSOukaG",rate:.95,pitch:.92,sample:"नमस्ते! मैं विक्रम हूँ। किसी भी विषय पर स्पष्ट और सटीक जानकारी के लिए पूछें।",browserKeywords:["hemant","madhav","ravi","hindi","hi-in","google हिन्दी"]},marcus:{id:"marcus",name:"MARCUS",gender:"Male",accent:"General American",badge:"US Male",role:"American Male Assistant",description:"Confident, relaxed, and professional for technical and business explanations.",lang:"en-US",search:"American, Male, Conversational",elevenlabs_voice_id:"ErXwobaYiN019PkySvjV",rate:.98,pitch:.92,sample:"Hey, I'm Marcus. Let's break down whatever you're working on step by step.",browserKeywords:["guy","david","mark","en-us","google us english"]},emma:{id:"emma",name:"EMMA",gender:"Female",accent:"British English",badge:"UK Female",role:"British Female Assistant",description:"Polished, articulate, and composed for professional guidance.",lang:"en-GB",search:"British, Female, Conversational",elevenlabs_voice_id:"MF3mGyEYCl7XYWbV9V6O",rate:.98,pitch:1.06,sample:"Hello. I'm Emma. I'm here to provide articulate, well-structured support.",browserKeywords:["hazel","sonia","libby","en-gb","google uk english female"]}},Lc=[{code:"en-IN",name:"English (India)",native:"English (India)",options:"Indian female / male"},{code:"hi-IN",name:"Hindi",native:"हिन्दी",options:"Female / male"},{code:"te-IN",name:"Telugu",native:"తెలుగు",options:"Female / male"},{code:"ta-IN",name:"Tamil",native:"தமிழ்",options:"Female / male"},{code:"kn-IN",name:"Kannada",native:"ಕನ್ನಡ",options:"Female / male"},{code:"ml-IN",name:"Malayalam",native:"മലയാളം",options:"Female / male"},{code:"bn-IN",name:"Bengali",native:"বাংলা",options:"Female / male"},{code:"mr-IN",name:"Marathi",native:"मराठी",options:"Female / male"},{code:"gu-IN",name:"Gujarati",native:"ગુજરાતી",options:"Female / male"},{code:"pa-IN",name:"Punjabi",native:"ਪੰਜਾਬੀ",options:"Female / male"},{code:"ur-IN",name:"Urdu",native:"اردو",options:"Female / male"},{code:"as-IN",name:"Assamese",native:"অসমীয়া",options:"Female / male"},{code:"or-IN",name:"Odia",native:"ଓଡ଼ିଆ",options:"Female / male"},{code:"sa-IN",name:"Sanskrit",native:"संस्कृतम्",options:"Female / male"},{code:"ks-IN",name:"Kashmiri",native:"कॉशुर / کٲشُر",options:"Female / male"},{code:"kok-IN",name:"Konkani",native:"कोंकणी",options:"Female / male"},{code:"ne-IN",name:"Nepali (India)",native:"नेपाली",options:"Female / male"},{code:"sd-IN",name:"Sindhi",native:"سنڌي / सिन्धी",options:"Female / male"},{code:"mni-IN",name:"Manipuri / Meitei",native:"মৈতৈলোন্",options:"Female / male"},{code:"brx-IN",name:"Bodo",native:"बड़ो",options:"Female / male"},{code:"doi-IN",name:"Dogri",native:"डोगरी",options:"Female / male"},{code:"sat-IN",name:"Santali",native:"ᱥᱟᱱᱛᱟᱲᱤ",options:"Female / male"}];let Yr=null;function ql(){if(Yr){try{Yr.pause(),Yr.currentTime=0}catch{}Yr=null}if(typeof window<"u"&&"speechSynthesis"in window)try{window.speechSynthesis.cancel()}catch{}}function RL(e,t,n){if(!e||e.length===0)return null;const r=dr[t]||dr.eliza,i=(n||r.lang||"en-IN").toLowerCase(),s=i.split("-")[0],a=e.find(d=>{const f=(d.lang||"").toLowerCase(),p=(d.name||"").toLowerCase(),h=f.includes(i)||f.includes(s),x=r.browserKeywords.some(b=>p.includes(b));return h&&x});if(a)return a;const o=e.find(d=>{const f=(d.name||"").toLowerCase();return r.browserKeywords.some(p=>f.includes(p))});if(o)return o;const l=e.find(d=>(d.lang||"").toLowerCase()===i);if(l)return l;const u=e.find(d=>(d.lang||"").toLowerCase().startsWith(s));return u||e.find(d=>d.default)||e.find(d=>(d.lang||"").toLowerCase().startsWith("en"))||e[0]}async function Ok(e,t,n={}){const{onStart:r,onEnd:i,onError:s}=n;if(ql(),!e||!e.trim()){i&&i();return}const a=(t.voice_profile||"eliza").toLowerCase(),o=dr[a]||dr.eliza;if((t.voice_engine||"auto")!=="browser")try{const u=await In.tts({text:e,voice_id:o.elevenlabs_voice_id,voice_profile:o.id,voice_lang:t.voice_lang||o.lang});if(u&&u.ok&&u.audioUrl){const d=new Audio(u.audioUrl);Yr=d,d.playbackRate=Math.max(.5,Math.min(2,Number(t.speech_rate||1))),d.onplay=()=>{r&&r()},d.onended=()=>{Yr=null,URL.revokeObjectURL(u.audioUrl),i&&i()},d.onerror=()=>{Yr=null,URL.revokeObjectURL(u.audioUrl),gx(e,t,o,n)},await d.play();return}}catch{}gx(e,t,o,n)}function gx(e,t,n,r={}){const{onStart:i,onEnd:s,onError:a}=r;if(typeof window>"u"||!("speechSynthesis"in window)){s&&s();return}try{window.speechSynthesis.paused&&window.speechSynthesis.resume(),window.speechSynthesis.cancel()}catch{}const o=window.speechSynthesis.getVoices(),l=()=>{const u=window.speechSynthesis.getVoices(),d=new SpeechSynthesisUtterance(e),f=Number(t.speech_rate||1),p=Number(t.speech_pitch||1);d.rate=Math.max(.5,Math.min(2,f*n.rate)),d.pitch=Math.max(.5,Math.min(2,p*n.pitch));let h=null;t.voice_name&&(h=u.find(x=>x.name===t.voice_name)),h||(h=RL(u,n.id,t.voice_lang||n.lang)),h?(d.voice=h,d.lang=h.lang||n.lang||"en-IN"):d.lang=n.lang||"en-IN",d.onstart=()=>{i&&i()},d.onend=()=>{s&&s()},d.onerror=x=>{a&&a(x),s&&s()},setTimeout(()=>{try{window.speechSynthesis.speak(d)}catch{s&&s()}},40)};if(o.length===0){const u=()=>{window.speechSynthesis.onvoiceschanged=null,l()};window.speechSynthesis.onvoiceschanged=u,setTimeout(()=>{window.speechSynthesis.onvoiceschanged===u&&(window.speechSynthesis.onvoiceschanged=null,l())},1e3)}else l()}const zk=[{id:"green",name:"Green",color:"#78f6a8",desc:"Classic Matrix Green"},{id:"amber",name:"Amber",color:"#ffc16b",desc:"Warm Amber Glow"},{id:"cyan",name:"Cyan",color:"#7cecff",desc:"Electric Cyan Pulse"},{id:"violet",name:"Violet",color:"#c084fc",desc:"Royal Violet"},{id:"crimson",name:"Crimson",color:"#ff6b6b",desc:"Vivid Crimson Red"},{id:"solar",name:"Solar",color:"#fde047",desc:"Bright Solar Gold"},{id:"emerald",name:"Emerald",color:"#34d399",desc:"Lush Emerald Jewel"},{id:"pink",name:"Pink",color:"#f472b6",desc:"Hot Neon Pink"},{id:"cobalt",name:"Cobalt",color:"#60a5fa",desc:"Deep Cobalt Azure"},{id:"orange",name:"Orange",color:"#fb923c",desc:"Radiant Tangerine"},{id:"mint",name:"Mint",color:"#6ee7b7",desc:"Fresh Mint Ice"},{id:"rose",name:"Rose",color:"#fb7185",desc:"Velvet Rose"},{id:"ice",name:"Ice",color:"#a5f3fc",desc:"Glacial Ice Blue"},{id:"lime",name:"Lime",color:"#a3e635",desc:"Acid Cyber Lime"},{id:"teal",name:"Teal",color:"#2dd4bf",desc:"Deep Lagoon Teal"}],Uk=[{id:"aurora",name:"Aurora",grad:"linear-gradient(135deg, #34d399 0%, #7cecff 50%, #c084fc 100%)",desc:"Northern Lights Trio"},{id:"cyberpunk",name:"Cyberpunk",grad:"linear-gradient(135deg, #f472b6 0%, #fb923c 50%, #fde047 100%)",desc:"Neon Tokyo Sunset"},{id:"nebula",name:"Nebula",grad:"linear-gradient(135deg, #c084fc 0%, #818cf8 50%, #60a5fa 100%)",desc:"Deep Cosmos Violet"},{id:"sunset",name:"Sunset",grad:"linear-gradient(135deg, #ff6b6b 0%, #fb923c 50%, #fde047 100%)",desc:"Golden Horizon Fire"},{id:"toxic",name:"Toxic",grad:"linear-gradient(135deg, #a3e635 0%, #2dd4bf 50%, #7cecff 100%)",desc:"Biohazard Lime Cyan"},{id:"supernova",name:"Supernova",grad:"linear-gradient(135deg, #ff416c 0%, #ff4b2b 50%, #f9d423 100%)",desc:"Blazing Stellar Flare"},{id:"cosmic",name:"Cosmic",grad:"linear-gradient(135deg, #8a2387 0%, #e94057 50%, #f27121 100%)",desc:"Interstellar Spectrum"},{id:"oceanic",name:"Oceanic",grad:"linear-gradient(135deg, #00f2fe 0%, #4facfe 50%, #00c6ff 100%)",desc:"Pacific Trench Aqua"},{id:"synthwave",name:"Synthwave",grad:"linear-gradient(135deg, #fa709a 0%, #fee140 100%)",desc:"Retro 80s Laser Glow"},{id:"midnight",name:"Midnight",grad:"linear-gradient(135deg, #30cfd0 0%, #330867 100%)",desc:"Deep Neon Night"},{id:"firefly",name:"Firefly",grad:"linear-gradient(135deg, #11998e 0%, #38ef7d 100%)",desc:"Luminescent Meadow"},{id:"bloodmoon",name:"Bloodmoon",grad:"linear-gradient(135deg, #f857a6 0%, #ff5858 100%)",desc:"Crimson Eclipse"},{id:"emerald-dream",name:"Emerald Dream",grad:"linear-gradient(135deg, #0ba360 0%, #3cba92 50%, #96e6a1 100%)",desc:"Enchanted Jade Forest"},{id:"hyperdrive",name:"Hyperdrive",grad:"linear-gradient(135deg, #b224ef 0%, #7579ff 100%)",desc:"Warp Speed Purple"},{id:"solar-flare",name:"Solar Flare",grad:"linear-gradient(135deg, #f12711 0%, #f5af19 100%)",desc:"Thermonuclear Gold"},{id:"plasma",name:"Plasma",grad:"linear-gradient(135deg, #ff0844 0%, #ffb199 100%)",desc:"Superheated Neon Coral"},{id:"deep-space",name:"Deep Space",grad:"linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",desc:"Alien Planet Aurora"},{id:"velvet",name:"Velvet",grad:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",desc:"Royal Indigo Velvet"},{id:"hologram",name:"Hologram",grad:"linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)",desc:"Iridescent Prismatic Glass"},{id:"radiance",name:"Radiance",grad:"linear-gradient(135deg, #f6d365 0%, #fda085 100%)",desc:"Sun-drenched Coral"},{id:"amethyst",name:"Amethyst",grad:"linear-gradient(135deg, #9b51e0 0%, #bb6bd9 50%, #f2994a 100%)",desc:"Geode Crystal Glow"},{id:"glitch",name:"Glitch",grad:"linear-gradient(135deg, #00f0ff 0%, #ff007f 50%, #70ff00 100%)",desc:"Tri-Color RGB Shift"},{id:"matrix",name:"Matrix",grad:"linear-gradient(135deg, #00ff87 0%, #60efff 100%)",desc:"Cybernetic Stream"},{id:"magma",name:"Magma",grad:"linear-gradient(135deg, #f77062 0%, #fe5196 100%)",desc:"Molten Core Flow"},{id:"oasis",name:"Oasis",grad:"linear-gradient(135deg, #48c6ef 0%, #6f86d6 100%)",desc:"Mirage Lagoon"},{id:"starlight",name:"Starlight",grad:"linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)",desc:"Celestial Silver Violet"},{id:"frostfire",name:"Frostfire",grad:"linear-gradient(135deg, #00c6ff 0%, #0072ff 50%, #ff7675 100%)",desc:"Glacial Ice Meets Flame"},{id:"vaporwave",name:"Vaporwave",grad:"linear-gradient(135deg, #ff9a9e 0%, #fecfef 50%, #a1c4fd 100%)",desc:"90s Nostalgia Mist"},{id:"cherry-blossom",name:"Cherry Blossom",grad:"linear-gradient(135deg, #ff758c 0%, #ff7eb3 100%)",desc:"Tokyo Spring Sakura"},{id:"phoenix",name:"Phoenix",grad:"linear-gradient(135deg, #ff0844 0%, #ffb199 50%, #f83600 100%)",desc:"Reborn Fire Wings"},{id:"neon-abyss",name:"Neon Abyss",grad:"linear-gradient(135deg, #0acffe 0%, #495aff 100%)",desc:"Bioluminescent Depths"},{id:"quantum",name:"Quantum",grad:"linear-gradient(135deg, #0fd850 0%, #f9f047 100%)",desc:"Subatomic Particle Surge"},{id:"zenith",name:"Zenith",grad:"linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)",desc:"High Altitude Stratosphere"},{id:"golden-hour",name:"Golden Hour",grad:"linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%)",desc:"Magic Twilight Glow"},{id:"enchanted",name:"Enchanted",grad:"linear-gradient(135deg, #13547a 0%, #80d0c7 100%)",desc:"Mystic Forest Stream"},{id:"bioluminescence",name:"Bioluminescence",grad:"linear-gradient(135deg, #2af598 0%, #009efd 100%)",desc:"Deep Ocean Neon Flow"}],na=[...zk,...Uk],Bk="eliza_user_selected_theme";function LL(){if(typeof window>"u")return"green";try{const t=localStorage.getItem(Bk);if(t&&na.some(n=>n.id===t))return t}catch{}return na[Math.floor(Math.random()*na.length)].id}function Vk(e){if(!(typeof window>"u"))try{localStorage.setItem(Bk,e)}catch{}}function DL({open:e,onClose:t,providers:n,settings:r,onChange:i}){var y;const s=n.filter(v=>v.available),a=r.default_provider==="auto"?s[0]:n.find(v=>v.id===r.default_provider),o=(a==null?void 0:a.models)||[],[l,u]=C.useState([]),[d,f]=C.useState(null);C.useEffect(()=>{var E,w;if(typeof window>"u"||!("speechSynthesis"in window))return;const v=()=>u(window.speechSynthesis.getVoices());return v(),(w=(E=window.speechSynthesis).addEventListener)==null||w.call(E,"voiceschanged",v),()=>{var I,N;return(N=(I=window.speechSynthesis).removeEventListener)==null?void 0:N.call(I,"voiceschanged",v)}},[]);const p=(v,E)=>{if(E&&E.stopPropagation&&E.stopPropagation(),d===v){ql(),f(null);return}ql();const w=dr[v]||dr.eliza;f(v),Ok(w.sample,{...r,voice_profile:w.id},{onEnd:()=>f(null),onError:()=>f(null)})},h=()=>{const v=r.voice_profile||"eliza";p(v)},x=v=>{const E=v==="auto"?s[0]:n.find(w=>w.id===v);i({default_provider:v,default_model:(E==null?void 0:E.default_model)||""})},b=v=>{Vk(v),i({theme:v})},k=()=>{const v=na[Math.floor(Math.random()*na.length)];b(v.id)},g=(a==null?void 0:a.name)||(r.default_provider==="auto"?"Automatic Routing":r.default_provider),m=r.default_model||(a==null?void 0:a.default_model)||"None configured";return e?c.jsx("div",{className:"drawer-backdrop",onMouseDown:v=>v.target===v.currentTarget&&t(),children:c.jsxs("aside",{className:"settings-drawer",role:"dialog","aria-label":"Settings",children:[c.jsxs("header",{className:"drawer-header",children:[c.jsxs("div",{children:[c.jsx("div",{className:"eyebrow",children:"SYSTEM CONFIGURATION"}),c.jsx("h2",{children:"Settings"})]}),c.jsx("button",{className:"icon-button",onClick:t,"aria-label":"Close settings",children:c.jsx(It,{size:18})})]}),c.jsxs("section",{className:"settings-section",children:[c.jsxs("div",{className:"section-heading",children:[c.jsx(u_,{size:16}),c.jsx("h3",{children:"AI Model"})]}),c.jsxs("div",{className:"active-model-card",children:[c.jsx("span",{className:"card-title",children:"Connected Backend AI Model"}),c.jsxs("span",{className:"card-value",children:[c.jsx("span",{className:`status-dot ${s.length?"online":""}`}),c.jsx("b",{children:m}),c.jsxs("small",{style:{color:"#7a9582",marginLeft:"auto",fontSize:"10px"},children:["via ",g]})]})]}),c.jsx("label",{className:"field-label",htmlFor:"provider",children:"Provider"}),c.jsxs("select",{id:"provider",value:r.default_provider||"auto",onChange:v=>x(v.target.value),children:[c.jsx("option",{value:"auto",children:"Automatic routing (prioritizes active credentials)"}),n.map(v=>c.jsxs("option",{value:v.id,disabled:!v.available,children:[v.name,v.available?` (${v.default_model||"Connected"})`:" — not configured"]},v.id))]}),c.jsxs("label",{className:"field-label",htmlFor:"model-select",children:["Model Selection ",o.length>0?`(${o.length} models available)`:""]}),o.length>0?c.jsx("select",{id:"model-select",value:r.default_model||(a==null?void 0:a.default_model)||o[0]||"",onChange:v=>i({default_model:v.target.value}),children:o.map(v=>c.jsx("option",{value:v,children:v},v))}):c.jsx("input",{id:"model",value:r.default_model||"",onChange:v=>i({default_model:v.target.value}),placeholder:(a==null?void 0:a.default_model)||((y=s[0])==null?void 0:y.default_model)||"Model identifier"}),c.jsx("p",{className:"field-help",children:"Backend is connected to active providers. Keys and credentials are securely managed on the server."})]}),c.jsxs("section",{className:"settings-section",children:[c.jsxs("div",{className:"section-heading",children:[c.jsx(J1,{size:16}),c.jsx("h3",{children:"Voice Library & Synthesis"})]}),c.jsxs("label",{className:"toggle-row",children:[c.jsxs("span",{children:[c.jsx("b",{children:"Speak responses"}),c.jsx("small",{children:"Read the assistant's answer aloud with natural speech"})]}),c.jsx("input",{type:"checkbox",checked:r.auto_speak!==!1,onChange:v=>i({auto_speak:v.target.checked})})]}),c.jsx("label",{className:"field-label",htmlFor:"voice-engine",children:"Voice Synthesis Engine"}),c.jsxs("select",{id:"voice-engine",value:r.voice_engine||"auto",onChange:v=>i({voice_engine:v.target.value}),children:[c.jsx("option",{value:"auto",children:"ElevenLabs Neural Voice + Device Fallback (Recommended)"}),c.jsx("option",{value:"elevenlabs",children:"ElevenLabs Neural Voice Only"}),c.jsx("option",{value:"browser",children:"Device Web Speech API Only"})]}),c.jsx("p",{className:"field-help",children:"ElevenLabs provides natural, studio-quality AI voices. If unavailable or offline, the app automatically falls back to your device's browser speech engine."}),c.jsxs("label",{className:"field-label",style:{marginTop:"14px"},children:["Assistant Voice Profile (",Object.keys(dr).length," curated personas)"]}),c.jsx("div",{className:"voice-profiles-grid",children:Object.values(dr).map(v=>{const E=(r.voice_profile||"eliza").toLowerCase()===v.id,w=d===v.id;return c.jsxs("div",{className:`voice-profile-card ${E?"active":""}`,onClick:()=>i({voice_profile:v.id}),children:[c.jsxs("div",{className:"voice-card-header",children:[c.jsxs("div",{className:"voice-card-title",children:[E?c.jsx(Up,{size:14,color:"var(--accent)"}):c.jsx(Yo,{size:14}),c.jsx("span",{children:v.name}),c.jsxs("small",{style:{color:"#748a7b",fontSize:"10px"},children:["· ",v.gender]})]}),v.badge&&c.jsx("span",{className:"voice-card-badge",children:v.badge})]}),c.jsxs("div",{className:"voice-card-meta",children:[c.jsx("span",{children:v.accent}),c.jsx("span",{children:"•"}),c.jsx("span",{children:v.role})]}),c.jsx("p",{className:"voice-card-desc",children:v.description}),c.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginTop:"6px"},children:[c.jsxs("small",{style:{fontSize:"9px",color:"#5a7563"},children:["Search: ",v.search]}),c.jsxs("button",{type:"button",className:`voice-preview-btn ${w?"playing":""}`,onClick:I=>p(v.id,I),title:`Preview ${v.name}'s voice`,children:[w?c.jsx(hb,{size:11}):c.jsx(Cg,{size:11}),c.jsx("span",{children:w?"Stop":"Preview"})]})]})]},v.id)})}),c.jsx("label",{className:"field-label",htmlFor:"voice-lang",style:{marginTop:"12px"},children:c.jsxs("span",{style:{display:"flex",alignItems:"center",gap:"5px"},children:[c.jsx(c_,{size:13})," Spoken Voice Language (",Lc.length," Indian languages supported)"]})}),c.jsxs("select",{id:"voice-lang",value:r.voice_lang||"en-IN",onChange:v=>i({voice_lang:v.target.value}),children:[c.jsxs("optgroup",{label:"Recommended Defaults & International",children:[c.jsx("option",{value:"en-IN",children:"English (India) · en-IN (Recommended Default)"}),c.jsx("option",{value:"hi-IN",children:"Hindi (हिन्दी) · hi-IN"}),c.jsx("option",{value:"en-US",children:"English (United States) · en-US"}),c.jsx("option",{value:"en-GB",children:"English (United Kingdom) · en-GB"})]}),c.jsx("optgroup",{label:"Major Indian Languages (ElevenLabs & Multilingual)",children:Lc.filter(v=>v.code!=="en-IN"&&v.code!=="hi-IN").map(v=>c.jsxs("option",{value:v.code,children:[v.name," (",v.native,") · ",v.code]},v.code))})]}),c.jsx("label",{className:"field-label",htmlFor:"speech-recognition-lang",style:{marginTop:"14px"},children:c.jsxs("span",{style:{display:"flex",alignItems:"center",gap:"5px"},children:[c.jsx(qd,{size:13,color:"var(--accent)"})," Microphone Recognition Language (STT)"]})}),c.jsxs("select",{id:"speech-recognition-lang",value:r.speech_recognition_lang||"en-IN",onChange:v=>i({speech_recognition_lang:v.target.value}),children:[c.jsxs("optgroup",{label:"Standard Microphones",children:[c.jsx("option",{value:"en-IN",children:"English (India) · en-IN"}),c.jsx("option",{value:"hi-IN",children:"Hindi (हिन्दी) · hi-IN"}),c.jsx("option",{value:"en-US",children:"English (US) · en-US"}),c.jsx("option",{value:"en-GB",children:"English (UK) · en-GB"})]}),c.jsx("optgroup",{label:"All Indian Languages",children:Lc.filter(v=>v.code!=="en-IN"&&v.code!=="hi-IN").map(v=>c.jsxs("option",{value:v.code,children:[v.name," (",v.native,") · ",v.code]},v.code))})]}),c.jsx("p",{className:"field-help",children:"Microphone speech recognition and assistant voice output are configured independently. Selecting an Indian language or English for speech recognition lets you speak in your preferred tongue."}),c.jsx("label",{className:"field-label",htmlFor:"voice",style:{marginTop:"14px"},children:"Device Browser Voice Fallback (optional override)"}),c.jsxs("select",{id:"voice",value:r.voice_name||"",onChange:v=>i({voice_name:v.target.value}),children:[c.jsx("option",{value:"",children:"Auto-match installed voice based on profile"}),l.map(v=>c.jsxs("option",{value:v.name,children:[v.name," [",v.lang,"] ",v.default?" · device default":""]},`${v.name}-${v.lang}`))]}),c.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"10px",marginTop:"12px"},children:[c.jsxs("div",{children:[c.jsxs("label",{className:"field-label",htmlFor:"rate",children:["Speed: ",Number(r.speech_rate||1).toFixed(1),"×"]}),c.jsx("input",{id:"rate",type:"range",min:"0.5",max:"2",step:"0.1",value:r.speech_rate||1,onChange:v=>i({speech_rate:Number(v.target.value)})})]}),c.jsxs("div",{children:[c.jsxs("label",{className:"field-label",htmlFor:"pitch",children:["Pitch: ",Number(r.speech_pitch||1).toFixed(1),"×"]}),c.jsx("input",{id:"pitch",type:"range",min:"0.7",max:"1.3",step:"0.05",value:r.speech_pitch||1,onChange:v=>i({speech_pitch:Number(v.target.value)})})]})]}),c.jsxs("button",{className:"text-action",type:"button",onClick:h,style:{marginTop:"10px"},children:[c.jsx(Cg,{size:13})," Test Selected Voice & Speed"]})]}),c.jsxs("section",{className:"settings-section",children:[c.jsxs("div",{className:"section-heading",children:[c.jsx(Gp,{size:16}),c.jsx("h3",{children:"Answer Quality & Persona"})]}),c.jsx("label",{className:"field-label",htmlFor:"response-style",children:"Response Persona / Profile"}),c.jsxs("select",{id:"response-style",value:r.response_style||"balanced",onChange:v=>i({response_style:v.target.value}),children:[c.jsx("option",{value:"balanced",children:"Balanced · Clear, natural & well-structured (Recommended)"}),c.jsx("option",{value:"concise",children:"Concise · Direct answer with key takeaways"}),c.jsx("option",{value:"tutor",children:"Patient Tutor · Step-by-step breakdown & analogies"}),c.jsx("option",{value:"expert",children:"Senior Expert · Technical precision & trade-offs"}),c.jsx("option",{value:"coding",children:"Software Engineer · Production code, tests & edge cases"}),c.jsx("option",{value:"creative",children:"Creative · Imaginative, original & expressive"})]}),c.jsxs("label",{className:"toggle-row",children:[c.jsxs("span",{children:[c.jsx("b",{children:"Detailed answers"}),c.jsx("small",{children:"Include comprehensive examples, edge cases, and summaries"})]}),c.jsx("input",{type:"checkbox",checked:r.detailed_responses===!0,onChange:v=>i({detailed_responses:v.target.checked})})]}),c.jsx("label",{className:"field-label",htmlFor:"custom-prompt",children:"Additional instructions (optional)"}),c.jsx("textarea",{id:"custom-prompt",rows:4,maxLength:4e3,value:r.custom_system_prompt||"",onChange:v=>i({custom_system_prompt:v.target.value}),placeholder:"Example: Explain technical concepts in simple English, include practical code examples, and outline clear next steps."}),c.jsx("p",{className:"field-help",children:"These instructions are sent with each chat request. Keep them focused on your preferred style and task; do not put API keys or private credentials here."})]}),c.jsxs("section",{className:"settings-section",children:[c.jsxs("div",{className:"section-heading",style:{justifyContent:"space-between"},children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"9px"},children:[c.jsx(h_,{size:16}),c.jsx("h3",{children:"Appearance & Themes"})]}),c.jsxs("button",{type:"button",className:"text-action",onClick:k,style:{fontSize:"10px",padding:"3px 7px"},title:"Pick a random theme",children:[c.jsx(y_,{size:11})," Random Theme"]})]}),c.jsx("div",{className:"theme-category-label",children:"36 Gradient Mixed Themes (Dynamic Atmospheric Glow)"}),c.jsx("div",{className:"theme-swatches-grid",style:{gridTemplateColumns:"repeat(4, 1fr)",maxHeight:"240px",overflowY:"auto",paddingRight:"4px"},children:Uk.map(v=>c.jsxs("button",{type:"button",className:`theme-swatch ${r.theme===v.id?"active":""}`,onClick:()=>b(v.id),title:`${v.name}: ${v.desc}`,children:[c.jsx("span",{className:"swatch-color-pill",style:{background:v.grad}}),c.jsx("span",{className:"swatch-name",children:v.name})]},v.id))}),c.jsx("div",{className:"theme-category-label",style:{marginTop:"14px"},children:"15 Solid Minimalist Colors"}),c.jsx("div",{className:"theme-swatches-grid",style:{gridTemplateColumns:"repeat(5, 1fr)"},children:zk.map(v=>c.jsxs("button",{type:"button",className:`theme-swatch ${r.theme===v.id?"active":""}`,onClick:()=>b(v.id),title:`${v.name}: ${v.desc}`,children:[c.jsx("span",{className:"swatch-color-pill",style:{backgroundColor:v.color}}),c.jsx("span",{className:"swatch-name",children:v.name})]},v.id))}),c.jsx("p",{className:"field-help",children:"Every new visitor is assigned a unique random theme color. When you pick your favorite theme, it stays locked until you choose to change it again."})]}),c.jsxs("div",{className:"dev-credit-card",children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[c.jsx(v_,{size:12,color:"var(--accent)"}),c.jsxs("span",{children:["Developed by ",c.jsx("strong",{children:"Akhil Thadaka"})]})]}),c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px",marginTop:"2px"},children:[c.jsx(Ca,{size:12,color:"var(--accent)"}),c.jsxs("span",{children:["Contact: ",c.jsx("a",{href:"tel:9121751697",children:"9121751697"})]})]})]}),c.jsxs("footer",{className:"drawer-footer",children:[c.jsx(x_,{size:14}),c.jsx("span",{children:"Settings save automatically for your session."})]})]})}):null}function ML(e,t){const n={};return(e[e.length-1]===""?[...e,""]:e).join((n.padRight?" ":"")+","+(n.padLeft===!1?"":" ")).trim()}const FL=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,OL=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,zL={};function yx(e,t){return(zL.jsx?OL:FL).test(e)}const UL=/[ \t\n\f\r]/g;function BL(e){return typeof e=="object"?e.type==="text"?xx(e.value):!1:xx(e)}function xx(e){return e.replace(UL,"")===""}class to{constructor(t,n,r){this.normal=n,this.property=t,r&&(this.space=r)}}to.prototype.normal={};to.prototype.property={};to.prototype.space=void 0;function $k(e,t){const n={},r={};for(const i of e)Object.assign(n,i.property),Object.assign(r,i.normal);return new to(n,r,t)}function wf(e){return e.toLowerCase()}class kt{constructor(t,n){this.attribute=n,this.property=t}}kt.prototype.attribute="";kt.prototype.booleanish=!1;kt.prototype.boolean=!1;kt.prototype.commaOrSpaceSeparated=!1;kt.prototype.commaSeparated=!1;kt.prototype.defined=!1;kt.prototype.mustUseProperty=!1;kt.prototype.number=!1;kt.prototype.overloadedBoolean=!1;kt.prototype.property="";kt.prototype.spaceSeparated=!1;kt.prototype.space=void 0;let VL=0;const ne=pi(),Be=pi(),kf=pi(),O=pi(),be=pi(),ti=pi(),Tt=pi();function pi(){return 2**++VL}const Sf=Object.freeze(Object.defineProperty({__proto__:null,boolean:ne,booleanish:Be,commaOrSpaceSeparated:Tt,commaSeparated:ti,number:O,overloadedBoolean:kf,spaceSeparated:be},Symbol.toStringTag,{value:"Module"})),Dc=Object.keys(Sf);class Fh extends kt{constructor(t,n,r,i){let s=-1;if(super(t,n),vx(this,"space",i),typeof r=="number")for(;++s<Dc.length;){const a=Dc[s];vx(this,Dc[s],(r&Sf[a])===Sf[a])}}}Fh.prototype.defined=!0;function vx(e,t,n){n&&(e[t]=n)}function xs(e){const t={},n={};for(const[r,i]of Object.entries(e.properties)){const s=new Fh(r,e.transform(e.attributes||{},r),i,e.space);e.mustUseProperty&&e.mustUseProperty.includes(r)&&(s.mustUseProperty=!0),t[r]=s,n[wf(r)]=r,n[wf(s.attribute)]=r}return new to(t,n,e.space)}const Hk=xs({properties:{ariaActiveDescendant:null,ariaAtomic:Be,ariaAutoComplete:null,ariaBusy:Be,ariaChecked:Be,ariaColCount:O,ariaColIndex:O,ariaColSpan:O,ariaControls:be,ariaCurrent:null,ariaDescribedBy:be,ariaDetails:null,ariaDisabled:Be,ariaDropEffect:be,ariaErrorMessage:null,ariaExpanded:Be,ariaFlowTo:be,ariaGrabbed:Be,ariaHasPopup:null,ariaHidden:Be,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:be,ariaLevel:O,ariaLive:null,ariaModal:Be,ariaMultiLine:Be,ariaMultiSelectable:Be,ariaOrientation:null,ariaOwns:be,ariaPlaceholder:null,ariaPosInSet:O,ariaPressed:Be,ariaReadOnly:Be,ariaRelevant:null,ariaRequired:Be,ariaRoleDescription:be,ariaRowCount:O,ariaRowIndex:O,ariaRowSpan:O,ariaSelected:Be,ariaSetSize:O,ariaSort:null,ariaValueMax:O,ariaValueMin:O,ariaValueNow:O,ariaValueText:null,role:null},transform(e,t){return t==="role"?t:"aria-"+t.slice(4).toLowerCase()}});function Wk(e,t){return t in e?e[t]:t}function Gk(e,t){return Wk(e,t.toLowerCase())}const $L=xs({attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:ti,acceptCharset:be,accessKey:be,action:null,allow:null,allowFullScreen:ne,allowPaymentRequest:ne,allowUserMedia:ne,alpha:ne,alt:null,as:null,async:ne,autoCapitalize:null,autoComplete:be,autoFocus:ne,autoPlay:ne,blocking:be,capture:null,charSet:null,checked:ne,cite:null,className:be,closedBy:null,colorSpace:null,cols:O,colSpan:O,command:null,commandFor:null,content:null,contentEditable:Be,controls:ne,controlsList:be,coords:O|ti,crossOrigin:null,data:null,dateTime:null,decoding:null,default:ne,defer:ne,dir:null,dirName:null,disabled:ne,download:kf,draggable:Be,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:ne,formTarget:null,headers:be,height:O,hidden:kf,high:O,href:null,hrefLang:null,htmlFor:be,httpEquiv:be,id:null,imageSizes:null,imageSrcSet:null,inert:ne,inputMode:null,integrity:null,is:null,isMap:ne,itemId:null,itemProp:be,itemRef:be,itemScope:ne,itemType:be,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:ne,low:O,manifest:null,max:null,maxLength:O,media:null,method:null,min:null,minLength:O,multiple:ne,muted:ne,name:null,nonce:null,noModule:ne,noValidate:ne,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:ne,optimum:O,pattern:null,ping:be,placeholder:null,playsInline:ne,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:ne,referrerPolicy:null,rel:be,required:ne,reversed:ne,rows:O,rowSpan:O,sandbox:be,scope:null,scoped:ne,seamless:ne,selected:ne,shadowRootClonable:ne,shadowRootCustomElementRegistry:ne,shadowRootDelegatesFocus:ne,shadowRootMode:null,shadowRootSerializable:ne,shape:null,size:O,sizes:null,slot:null,span:O,spellCheck:Be,src:null,srcDoc:null,srcLang:null,srcSet:null,start:O,step:null,style:null,tabIndex:O,target:null,title:null,translate:null,type:null,typeMustMatch:ne,useMap:null,value:Be,width:O,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:be,axis:null,background:null,bgColor:null,border:O,borderColor:null,bottomMargin:O,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:ne,declare:ne,event:null,face:null,frame:null,frameBorder:null,hSpace:O,leftMargin:O,link:null,longDesc:null,lowSrc:null,marginHeight:O,marginWidth:O,noResize:ne,noHref:ne,noShade:ne,noWrap:ne,object:null,profile:null,prompt:null,rev:null,rightMargin:O,rules:null,scheme:null,scrolling:Be,standby:null,summary:null,text:null,topMargin:O,valueType:null,version:null,vAlign:null,vLink:null,vSpace:O,allowTransparency:null,autoCorrect:null,autoSave:null,credentialless:ne,disablePictureInPicture:ne,disableRemotePlayback:ne,exportParts:ti,part:be,prefix:null,property:null,results:O,security:null,unselectable:null},space:"html",transform:Gk}),HL=xs({attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",maskType:"mask-type",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},properties:{about:Tt,accentHeight:O,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:O,amplitude:O,arabicForm:null,ascent:O,attributeName:null,attributeType:null,azimuth:O,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:O,by:null,calcMode:null,capHeight:O,className:be,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:O,diffuseConstant:O,direction:null,display:null,dur:null,divisor:O,dominantBaseline:null,download:ne,dx:null,dy:null,edgeMode:null,editable:null,elevation:O,enableBackground:null,end:null,event:null,exponent:O,externalResourcesRequired:null,fill:null,fillOpacity:O,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:ti,g2:ti,glyphName:ti,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:O,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:O,horizOriginX:O,horizOriginY:O,id:null,ideographic:O,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:O,k:O,k1:O,k2:O,k3:O,k4:O,kernelMatrix:Tt,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:O,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskType:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:O,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:O,overlineThickness:O,paintOrder:null,panose1:null,path:null,pathLength:O,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:be,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:O,pointsAtY:O,pointsAtZ:O,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:Tt,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:Tt,rev:Tt,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:Tt,requiredFeatures:Tt,requiredFonts:Tt,requiredFormats:Tt,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:O,specularExponent:O,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:O,strikethroughThickness:O,string:null,stroke:null,strokeDashArray:Tt,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:O,strokeOpacity:O,strokeWidth:null,style:null,surfaceScale:O,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:Tt,tabIndex:O,tableValues:null,target:null,targetX:O,targetY:O,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:Tt,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:O,underlineThickness:O,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:O,values:null,vAlphabetic:O,vMathematical:O,vectorEffect:null,vHanging:O,vIdeographic:O,version:null,vertAdvY:O,vertOriginX:O,vertOriginY:O,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:O,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:"svg",transform:Wk}),qk=xs({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:"xlink",transform(e,t){return"xlink:"+t.slice(5).toLowerCase()}}),Kk=xs({attributes:{xmlnsxlink:"xmlns:xlink"},properties:{xmlnsXLink:null,xmlns:null},space:"xmlns",transform:Gk}),Yk=xs({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:"xml",transform(e,t){return"xml:"+t.slice(3).toLowerCase()}}),WL={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"},GL=/[A-Z]/g,bx=/-[a-z]/g,qL=/^data[-\w.:]+$/i;function KL(e,t){const n=wf(t);let r=t,i=kt;if(n in e.normal)return e.property[e.normal[n]];if(n.length>4&&n.slice(0,4)==="data"&&qL.test(t)){if(t.charAt(4)==="-"){const s=t.slice(5).replace(bx,XL);r="data"+s.charAt(0).toUpperCase()+s.slice(1)}else{const s=t.slice(4);if(!bx.test(s)){let a=s.replace(GL,YL);a.charAt(0)!=="-"&&(a="-"+a),t="data"+a}}i=Fh}return new i(r,t)}function YL(e){return"-"+e.toLowerCase()}function XL(e){return e.charAt(1).toUpperCase()}const QL=$k([Hk,$L,qk,Kk,Yk],"html"),Oh=$k([Hk,HL,qk,Kk,Yk],"svg");function ZL(e){return e.join(" ").trim()}var zh={},wx=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,JL=/\n/g,eD=/^\s*/,tD=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,nD=/^:\s*/,rD=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,iD=/^[;\s]*/,sD=/^\s+|\s+$/g,aD=`
`,kx="/",Sx="*",$r="",oD="comment",lD="declaration";function uD(e,t){if(typeof e!="string")throw new TypeError("First argument must be a string");if(!e)return[];t=t||{};var n=1,r=1;function i(x){var b=x.match(JL);b&&(n+=b.length);var k=x.lastIndexOf(aD);r=~k?x.length-k:r+x.length}function s(){var x={line:n,column:r};return function(b){return b.position=new a(x),u(),b}}function a(x){this.start=x,this.end={line:n,column:r},this.source=t.source}a.prototype.content=e;function o(x){var b=new Error(t.source+":"+n+":"+r+": "+x);if(b.reason=x,b.filename=t.source,b.line=n,b.column=r,b.source=e,!t.silent)throw b}function l(x){var b=x.exec(e);if(b){var k=b[0];return i(k),e=e.slice(k.length),b}}function u(){l(eD)}function d(x){var b;for(x=x||[];b=f();)b!==!1&&x.push(b);return x}function f(){var x=s();if(!(kx!=e.charAt(0)||Sx!=e.charAt(1))){for(var b=2;$r!=e.charAt(b)&&(Sx!=e.charAt(b)||kx!=e.charAt(b+1));)++b;if(b+=2,$r===e.charAt(b-1))return o("End of comment missing");var k=e.slice(2,b-2);return r+=2,i(k),e=e.slice(b),r+=2,x({type:oD,comment:k})}}function p(){var x=s(),b=l(tD);if(b){if(f(),!l(nD))return o("property missing ':'");var k=l(rD),g=x({type:lD,property:Ex(b[0].replace(wx,$r)),value:k?Ex(k[0].replace(wx,$r)):$r});return l(iD),g}}function h(){var x=[];d(x);for(var b;b=p();)b!==!1&&(x.push(b),d(x));return x}return u(),h()}function Ex(e){return e?e.replace(sD,$r):$r}var cD=uD,dD=Wi&&Wi.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(zh,"__esModule",{value:!0});zh.default=pD;const fD=dD(cD);function pD(e,t){let n=null;if(!e||typeof e!="string")return n;const r=(0,fD.default)(e),i=typeof t=="function";return r.forEach(s=>{if(s.type!=="declaration")return;const{property:a,value:o}=s;i?t(a,o,s):o&&(n=n||{},n[a]=o)}),n}var Nu={};Object.defineProperty(Nu,"__esModule",{value:!0});Nu.camelCase=void 0;var hD=/^--[a-zA-Z0-9_-]+$/,mD=/-([a-z])/g,gD=/^[^-]+$/,yD=/^-(webkit|moz|ms|o|khtml)-/,xD=/^-(ms)-/,vD=function(e){return!e||gD.test(e)||hD.test(e)},bD=function(e,t){return t.toUpperCase()},Cx=function(e,t){return"".concat(t,"-")},wD=function(e,t){return t===void 0&&(t={}),vD(e)?e:(e=e.toLowerCase(),t.reactCompat?e=e.replace(xD,Cx):e=e.replace(yD,Cx),e.replace(mD,bD))};Nu.camelCase=wD;var kD=Wi&&Wi.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},SD=kD(zh),ED=Nu;function Ef(e,t){var n={};return!e||typeof e!="string"||(0,SD.default)(e,function(r,i){r&&i&&(n[(0,ED.camelCase)(r,t)]=i)}),n}Ef.default=Ef;var CD=Ef;const TD=Jl(CD),Xk=Qk("end"),Uh=Qk("start");function Qk(e){return t;function t(n){const r=n&&n.position&&n.position[e]||{};if(typeof r.line=="number"&&r.line>0&&typeof r.column=="number"&&r.column>0)return{line:r.line,column:r.column,offset:typeof r.offset=="number"&&r.offset>-1?r.offset:void 0}}}function _D(e){const t=Uh(e),n=Xk(e);if(t&&n)return{start:t,end:n}}function ra(e){return!e||typeof e!="object"?"":"position"in e||"type"in e?Tx(e.position):"start"in e||"end"in e?Tx(e):"line"in e||"column"in e?Cf(e):""}function Cf(e){return _x(e&&e.line)+":"+_x(e&&e.column)}function Tx(e){return Cf(e&&e.start)+"-"+Cf(e&&e.end)}function _x(e){return e&&typeof e=="number"?e:1}class ut extends Error{constructor(t,n,r){super(),typeof n=="string"&&(r=n,n=void 0);let i="",s={},a=!1;if(n&&("line"in n&&"column"in n?s={place:n}:"start"in n&&"end"in n?s={place:n}:"type"in n?s={ancestors:[n],place:n.position}:s={...n}),typeof t=="string"?i=t:!s.cause&&t&&(a=!0,i=t.message,s.cause=t),!s.ruleId&&!s.source&&typeof r=="string"){const l=r.indexOf(":");l===-1?s.ruleId=r:(s.source=r.slice(0,l),s.ruleId=r.slice(l+1))}if(!s.place&&s.ancestors&&s.ancestors){const l=s.ancestors[s.ancestors.length-1];l&&(s.place=l.position)}const o=s.place&&"start"in s.place?s.place.start:s.place;this.ancestors=s.ancestors||void 0,this.cause=s.cause||void 0,this.column=o?o.column:void 0,this.fatal=void 0,this.file="",this.message=i,this.line=o?o.line:void 0,this.name=ra(s.place)||"1:1",this.place=s.place||void 0,this.reason=this.message,this.ruleId=s.ruleId||void 0,this.source=s.source||void 0,this.stack=a&&s.cause&&typeof s.cause.stack=="string"?s.cause.stack:"",this.actual=void 0,this.expected=void 0,this.note=void 0,this.url=void 0}}ut.prototype.file="";ut.prototype.name="";ut.prototype.reason="";ut.prototype.message="";ut.prototype.stack="";ut.prototype.column=void 0;ut.prototype.line=void 0;ut.prototype.ancestors=void 0;ut.prototype.cause=void 0;ut.prototype.fatal=void 0;ut.prototype.place=void 0;ut.prototype.ruleId=void 0;ut.prototype.source=void 0;const Bh={}.hasOwnProperty,AD=new Map,ID=/[A-Z]/g,ND=new Set(["table","tbody","thead","tfoot","tr"]),PD=new Set(["td","th"]),Zk="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function jD(e,t){if(!t||t.Fragment===void 0)throw new TypeError("Expected `Fragment` in options");const n=t.filePath||void 0;let r;if(t.development){if(typeof t.jsxDEV!="function")throw new TypeError("Expected `jsxDEV` in options when `development: true`");r=UD(n,t.jsxDEV)}else{if(typeof t.jsx!="function")throw new TypeError("Expected `jsx` in production options");if(typeof t.jsxs!="function")throw new TypeError("Expected `jsxs` in production options");r=zD(n,t.jsx,t.jsxs)}const i={Fragment:t.Fragment,ancestors:[],components:t.components||{},create:r,elementAttributeNameCase:t.elementAttributeNameCase||"react",evaluater:t.createEvaluater?t.createEvaluater():void 0,filePath:n,ignoreInvalidStyle:t.ignoreInvalidStyle||!1,passKeys:t.passKeys!==!1,passNode:t.passNode||!1,schema:t.space==="svg"?Oh:QL,stylePropertyNameCase:t.stylePropertyNameCase||"dom",tableCellAlignToStyle:t.tableCellAlignToStyle!==!1},s=Jk(i,e,void 0);return s&&typeof s!="string"?s:i.create(e,i.Fragment,{children:s||void 0},void 0)}function Jk(e,t,n){if(t.type==="element")return RD(e,t,n);if(t.type==="mdxFlowExpression"||t.type==="mdxTextExpression")return LD(e,t);if(t.type==="mdxJsxFlowElement"||t.type==="mdxJsxTextElement")return MD(e,t,n);if(t.type==="mdxjsEsm")return DD(e,t);if(t.type==="root")return FD(e,t,n);if(t.type==="text")return OD(e,t)}function RD(e,t,n){const r=e.schema;let i=r;t.tagName.toLowerCase()==="svg"&&r.space==="html"&&(i=Oh,e.schema=i),e.ancestors.push(t);const s=t2(e,t.tagName,!1),a=BD(e,t);let o=$h(e,t);return ND.has(t.tagName)&&(o=o.filter(function(l){return typeof l=="string"?!BL(l):!0})),e2(e,a,s,t),Vh(a,o),e.ancestors.pop(),e.schema=r,e.create(t,s,a,n)}function LD(e,t){if(t.data&&t.data.estree&&e.evaluater){const r=t.data.estree.body[0];return r.type,e.evaluater.evaluateExpression(r.expression)}Fa(e,t.position)}function DD(e,t){if(t.data&&t.data.estree&&e.evaluater)return e.evaluater.evaluateProgram(t.data.estree);Fa(e,t.position)}function MD(e,t,n){const r=e.schema;let i=r;t.name==="svg"&&r.space==="html"&&(i=Oh,e.schema=i),e.ancestors.push(t);const s=t.name===null?e.Fragment:t2(e,t.name,!0),a=VD(e,t),o=$h(e,t);return e2(e,a,s,t),Vh(a,o),e.ancestors.pop(),e.schema=r,e.create(t,s,a,n)}function FD(e,t,n){const r={};return Vh(r,$h(e,t)),e.create(t,e.Fragment,r,n)}function OD(e,t){return t.value}function e2(e,t,n,r){typeof n!="string"&&n!==e.Fragment&&e.passNode&&(t.node=r)}function Vh(e,t){if(t.length>0){const n=t.length>1?t:t[0];n&&(e.children=n)}}function zD(e,t,n){return r;function r(i,s,a,o){const u=Array.isArray(a.children)?n:t;return o?u(s,a,o):u(s,a)}}function UD(e,t){return n;function n(r,i,s,a){const o=Array.isArray(s.children),l=Uh(r);return t(i,s,a,o,{columnNumber:l?l.column-1:void 0,fileName:e,lineNumber:l?l.line:void 0},void 0)}}function BD(e,t){const n={};let r,i;for(i in t.properties)if(i!=="children"&&Bh.call(t.properties,i)){const s=$D(e,i,t.properties[i]);if(s){const[a,o]=s;e.tableCellAlignToStyle&&a==="align"&&typeof o=="string"&&PD.has(t.tagName)?r=o:n[a]=o}}if(r){const s=n.style||(n.style={});s[e.stylePropertyNameCase==="css"?"text-align":"textAlign"]=r}return n}function VD(e,t){const n={};for(const r of t.attributes)if(r.type==="mdxJsxExpressionAttribute")if(r.data&&r.data.estree&&e.evaluater){const s=r.data.estree.body[0];s.type;const a=s.expression;a.type;const o=a.properties[0];o.type,Object.assign(n,e.evaluater.evaluateExpression(o.argument))}else Fa(e,t.position);else{const i=r.name;let s;if(r.value&&typeof r.value=="object")if(r.value.data&&r.value.data.estree&&e.evaluater){const o=r.value.data.estree.body[0];o.type,s=e.evaluater.evaluateExpression(o.expression)}else Fa(e,t.position);else s=r.value===null?!0:r.value;n[i]=s}return n}function $h(e,t){const n=[];let r=-1;const i=e.passKeys?new Map:AD;for(;++r<t.children.length;){const s=t.children[r];let a;if(e.passKeys){const l=s.type==="element"?s.tagName:s.type==="mdxJsxFlowElement"||s.type==="mdxJsxTextElement"?s.name:void 0;if(l){const u=i.get(l)||0;a=l+"-"+u,i.set(l,u+1)}}const o=Jk(e,s,a);o!==void 0&&n.push(o)}return n}function $D(e,t,n){const r=KL(e.schema,t);if(!(n==null||typeof n=="number"&&Number.isNaN(n))){if(Array.isArray(n)&&(n=r.commaSeparated?ML(n):ZL(n)),r.property==="style"){let i=typeof n=="object"?n:HD(e,String(n));return e.stylePropertyNameCase==="css"&&(i=WD(i)),["style",i]}return[e.elementAttributeNameCase==="react"&&r.space?WL[r.property]||r.property:r.attribute,n]}}function HD(e,t){try{return TD(t,{reactCompat:!0})}catch(n){if(e.ignoreInvalidStyle)return{};const r=n,i=new ut("Cannot parse `style` attribute",{ancestors:e.ancestors,cause:r,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw i.file=e.filePath||void 0,i.url=Zk+"#cannot-parse-style-attribute",i}}function t2(e,t,n){let r;if(!n)r={type:"Literal",value:t};else if(t.includes(".")){const i=t.split(".");let s=-1,a;for(;++s<i.length;){const o=yx(i[s])?{type:"Identifier",name:i[s]}:{type:"Literal",value:i[s]};a=a?{type:"MemberExpression",object:a,property:o,computed:!!(s&&o.type==="Literal"),optional:!1}:o}r=a}else r=yx(t)&&!/^[a-z]/.test(t)?{type:"Identifier",name:t}:{type:"Literal",value:t};if(r.type==="Literal"){const i=r.value;return Bh.call(e.components,i)?e.components[i]:i}if(e.evaluater)return e.evaluater.evaluateExpression(r);Fa(e)}function Fa(e,t){const n=new ut("Cannot handle MDX estrees without `createEvaluater`",{ancestors:e.ancestors,place:t,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw n.file=e.filePath||void 0,n.url=Zk+"#cannot-handle-mdx-estrees-without-createevaluater",n}function WD(e){const t={};let n;for(n in e)Bh.call(e,n)&&(t[GD(n)]=e[n]);return t}function GD(e){let t=e.replace(ID,qD);return t.slice(0,3)==="ms-"&&(t="-"+t),t}function qD(e){return"-"+e.toLowerCase()}const Mc={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]},KD={};function Hh(e,t){const n=KD,r=typeof n.includeImageAlt=="boolean"?n.includeImageAlt:!0,i=typeof n.includeHtml=="boolean"?n.includeHtml:!0;return n2(e,r,i)}function n2(e,t,n){if(YD(e)){if("value"in e)return e.type==="html"&&!n?"":e.value;if(t&&"alt"in e&&e.alt)return e.alt;if("children"in e)return Ax(e.children,t,n)}return Array.isArray(e)?Ax(e,t,n):""}function Ax(e,t,n){const r=[];let i=-1;for(;++i<e.length;)r[i]=n2(e[i],t,n);return r.join("")}function YD(e){return!!(e&&typeof e=="object")}const Ix=document.createElement("i");function Wh(e){const t="&"+e+";";Ix.innerHTML=t;const n=Ix.textContent;return n.charCodeAt(n.length-1)===59&&e!=="semi"||n===t?!1:n}function on(e,t,n,r){const i=e.length;let s=0,a;if(t<0?t=-t>i?0:i+t:t=t>i?i:t,n=n>0?n:0,r.length<1e4)a=Array.from(r),a.unshift(t,n),e.splice(...a);else for(n&&e.splice(t,n);s<r.length;)a=r.slice(s,s+1e4),a.unshift(t,0),e.splice(...a),s+=1e4,t+=1e4}function Bt(e,t){return e.length>0?(on(e,e.length,0,t),e):t}const Nx={}.hasOwnProperty;function r2(e){const t={};let n=-1;for(;++n<e.length;)XD(t,e[n]);return t}function XD(e,t){let n;for(n in t){const i=(Nx.call(e,n)?e[n]:void 0)||(e[n]={}),s=t[n];let a;if(s)for(a in s){Nx.call(i,a)||(i[a]=[]);const o=s[a];QD(i[a],Array.isArray(o)?o:o?[o]:[])}}}function QD(e,t){let n=-1;const r=[];for(;++n<t.length;)(t[n].add==="after"?e:r).push(t[n]);on(e,0,0,r)}function i2(e,t){const n=Number.parseInt(e,t);return n<9||n===11||n>13&&n<32||n>126&&n<160||n>55295&&n<57344||n>64975&&n<65008||(n&65535)===65535||(n&65535)===65534||n>1114111?"�":String.fromCodePoint(n)}function ln(e){return e.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}const dt=Pr(/[A-Za-z]/),ot=Pr(/[\dA-Za-z]/),ZD=Pr(/[#-'*+\--9=?A-Z^-~]/);function Kl(e){return e!==null&&(e<32||e===127)}const Tf=Pr(/\d/),JD=Pr(/[\dA-Fa-f]/),e3=Pr(/[!-/:-@[-`{-~]/);function Z(e){return e!==null&&e<-2}function ke(e){return e!==null&&(e<0||e===32)}function oe(e){return e===-2||e===-1||e===32}const Pu=Pr(new RegExp("\\p{P}|\\p{S}","u")),ui=Pr(/\s/);function Pr(e){return t;function t(n){return n!==null&&n>-1&&e.test(String.fromCharCode(n))}}function vs(e){const t=[];let n=-1,r=0,i=0;for(;++n<e.length;){const s=e.charCodeAt(n);let a="";if(s===37&&ot(e.charCodeAt(n+1))&&ot(e.charCodeAt(n+2)))i=2;else if(s<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(s))||(a=String.fromCharCode(s));else if(s>55295&&s<57344){const o=e.charCodeAt(n+1);s<56320&&o>56319&&o<57344?(a=String.fromCharCode(s,o),i=1):a="�"}else a=String.fromCharCode(s);a&&(t.push(e.slice(r,n),encodeURIComponent(a)),r=n+i+1,a=""),i&&(n+=i,i=0)}return t.join("")+e.slice(r)}function ye(e,t,n,r){const i=r?r-1:1/0;let s=0;return a;function a(l){return oe(l)?(e.enter(n),o(l)):t(l)}function o(l){return oe(l)&&s++<i?(e.consume(l),o):(e.exit(n),t(l))}}function s2(e,t,n,r,i,s){let a=0;return o;function o(d){return oe(d)?(e.enter(r),l(d)):u(d)}function l(d){return oe(d)&&a<s?(e.consume(d),a++,l):(e.exit(r),u(d))}function u(d){return a>=i?t(d):n(d)}}const t3={tokenize:n3};function n3(e){const t=e.attempt(this.parser.constructs.contentInitial,r,i);let n;return t;function r(o){if(o===null){e.consume(o);return}return e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),ye(e,t,"linePrefix")}function i(o){return e.enter("paragraph"),s(o)}function s(o){const l=e.enter("chunkText",{contentType:"text",previous:n});return n&&(n.next=l),n=l,a(o)}function a(o){if(o===null){e.exit("chunkText"),e.exit("paragraph"),e.consume(o);return}return Z(o)?(e.consume(o),e.exit("chunkText"),s):(e.consume(o),a)}}let Yl=class{constructor(){this.index=new Map,this.map=[]}add(t,n,r){Px(this,t,n,r,!1)}addBefore(t,n,r){Px(this,t,n,r,!0)}consume(t){if(this.map.sort(function(s,a){return s[0]-a[0]}),this.map.length===0)return;let n=this.map.length;const r=[];for(;n>0;)n-=1,r.push(t.slice(this.map[n][0]+this.map[n][1]),this.map[n][2]),t.length=this.map[n][0];r.push(t.slice()),t.length=0;let i=r.pop();for(;i;){for(const s of i)t.push(s);i=r.pop()}this.map.length=0,this.index.clear()}};function Px(e,t,n,r,i){if(n===0&&r.length===0)return;const s=e.index.get(t);if(s){s[1]+=n,i?(r.push(...s[2]),s[2]=r):s[2].push(...r);return}const a=[t,n,r];e.map.push(a),e.index.set(t,a)}const r3={tokenize:i3},jx={tokenize:s3};function i3(e){const t=this,n=[];let r=0,i,s,a;return o;function o(y){if(r<n.length){const v=n[r];return t.containerState=v[1],e.attempt(v[0].continuation,l,u)(y)}return u(y)}function l(y){if(r++,t.containerState._closeFlow){t.containerState._closeFlow=void 0,i&&m();const v=t.events.length;let E=v,w;for(;E--;)if(t.events[E][0]==="exit"&&t.events[E][1].type==="chunkFlow"){w=t.events[E][1].end;break}g(r);let I=v;for(;I<t.events.length;)t.events[I][1].end={...w},I++;const N=new Yl;return N.add(E+1,0,t.events.slice(v)),N.add(v,I-v,[]),N.consume(t.events),u(y)}return o(y)}function u(y){if(r===n.length){if(!i)return p(y);if(i.currentConstruct&&i.currentConstruct.concrete)return x(y);t.interrupt=!!(i.currentConstruct&&!i._gfmTableDynamicInterruptHack)}return t.containerState={},e.check(jx,d,f)(y)}function d(y){return i&&m(),g(r),p(y)}function f(y){return t.parser.lazy[t.now().line]=r!==n.length,a=t.now().offset,x(y)}function p(y){return t.containerState={},e.attempt(jx,h,x)(y)}function h(y){return r++,n.push([t.currentConstruct,t.containerState]),p(y)}function x(y){if(y===null){i&&m(),g(0),e.consume(y);return}return i=i||t.parser.flow(t.now()),e.enter("chunkFlow",{_tokenizer:i,contentType:"flow",previous:s}),b(y)}function b(y){if(y===null){k(e.exit("chunkFlow"),!0),g(0),e.consume(y);return}return Z(y)?(e.consume(y),k(e.exit("chunkFlow")),r=0,t.interrupt=void 0,o):(e.consume(y),b)}function k(y,v){const E=t.sliceStream(y);if(v&&E.push(null),y.previous=s,s&&(s.next=y),s=y,i.defineSkip(y.start),i.write(E),t.parser.lazy[y.start.line]){let w=i.events.length;for(;w--;)if(i.events[w][1].start.offset<a&&(!i.events[w][1].end||i.events[w][1].end.offset>a))return;const I=t.events.length;let N=I,R,_;for(;N--;)if(t.events[N][0]==="exit"&&t.events[N][1].type==="chunkFlow"){if(R){_=t.events[N][1].end;break}R=!0}for(g(r),w=I;w<t.events.length;)t.events[w][1].end={..._},w++;const j=new Yl;j.add(N+1,0,t.events.slice(I)),j.add(I,w-I,[]),j.consume(t.events)}}function g(y){let v=n.length;for(;v-- >y;){const E=n[v];t.containerState=E[1],E[0].exit.call(t,e)}n.length=y}function m(){i.write([null]),s=void 0,i=void 0,t.containerState._closeFlow=void 0}}function s3(e,t,n){return ye(e,e.attempt(this.parser.constructs.document,t,n),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function Xl(e){if(e===null||ke(e)||ui(e))return 1;if(Pu(e))return 2}function ju(e,t,n){const r=[];let i=-1;for(;++i<e.length;){const s=e[i].resolveAll;s&&!r.includes(s)&&(t=s(t,n),r.push(s))}return t}const _f={name:"attention",resolveAll:a3,tokenize:o3};function a3(e,t){let n=-1,r;for(;++n<e.length;)if(e[n][0]==="enter"&&e[n][1].type==="attentionSequence"&&e[n][1]._close){let i=n;for(;i--;)if(e[i][0]==="exit"&&e[i][1].type==="attentionSequence"&&e[i][1]._open&&t.sliceSerialize(e[i][1]).charCodeAt(0)===t.sliceSerialize(e[n][1]).charCodeAt(0)){if((e[i][1]._close||e[n][1]._open)&&(e[n][1].end.offset-e[n][1].start.offset)%3&&!((e[i][1].end.offset-e[i][1].start.offset+e[n][1].end.offset-e[n][1].start.offset)%3))continue;const s=e[i][1].end.offset-e[i][1].start.offset>1&&e[n][1].end.offset-e[n][1].start.offset>1?2:1,a={...e[i][1].end},o={...e[n][1].start};Rx(a,-s),Rx(o,s);const l={type:s>1?"strongSequence":"emphasisSequence",start:a,end:{...e[i][1].end}},u={type:s>1?"strongSequence":"emphasisSequence",start:{...e[n][1].start},end:o},d={type:s>1?"strongText":"emphasisText",start:{...e[i][1].end},end:{...e[n][1].start}},f={type:s>1?"strong":"emphasis",start:{...l.start},end:{...u.end}};e[i][1].end={...l.start},e[n][1].start={...u.end},r=[],e[i][1].end.offset-e[i][1].start.offset&&(r=Bt(r,[["enter",e[i][1],t],["exit",e[i][1],t]])),r=Bt(r,[["enter",f,t],["enter",l,t],["exit",l,t],["enter",d,t]]),r=Bt(r,ju(t.parser.constructs.insideSpan.null,e.slice(i+1,n),t)),r=Bt(r,[["exit",d,t],["enter",u,t],["exit",u,t],["exit",f,t]]);let p=0;e[n][1].end.offset-e[n][1].start.offset&&(p=2,r=Bt(r,[["enter",e[n][1],t],["exit",e[n][1],t]])),on(e,i-1,n-i+3,r),n=i+r.length-p-2;break}}for(n=-1;++n<e.length;)e[n][1].type==="attentionSequence"&&(e[n][1].type="data");return e}function o3(e,t){const n=this.parser.constructs.attentionMarkers.null,r=this.previous,i=Xl(r);let s;return a;function a(l){return s=l,e.enter("attentionSequence"),o(l)}function o(l){if(l===s)return e.consume(l),o;const u=e.exit("attentionSequence"),d=Xl(l),f=!d||d===2&&i||n.includes(l)&&l!==42&&l!==95,p=!i||i===2&&d||n.includes(r)&&r!==42&&r!==95;return u._open=!!(s===42?f:f&&(i||!p)),u._close=!!(s===42?p:p&&(d||!f)),t(l)}}function Rx(e,t){e.column+=t,e.offset+=t,e._bufferIndex+=t}const l3={name:"autolink",tokenize:u3};function u3(e,t,n){let r=0;return i;function i(h){return e.enter("autolink"),e.enter("autolinkMarker"),e.consume(h),e.exit("autolinkMarker"),e.enter("autolinkProtocol"),s}function s(h){return dt(h)?(e.consume(h),a):h===64?n(h):u(h)}function a(h){return h===43||h===45||h===46||ot(h)?(r=1,o(h)):u(h)}function o(h){return h===58?(e.consume(h),r=0,l):(h===43||h===45||h===46||ot(h))&&r++<32?(e.consume(h),o):(r=0,u(h))}function l(h){return h===62?(e.exit("autolinkProtocol"),e.enter("autolinkMarker"),e.consume(h),e.exit("autolinkMarker"),e.exit("autolink"),t):h===null||h===32||h===60||Kl(h)?n(h):(e.consume(h),l)}function u(h){return h===64?(e.consume(h),d):ZD(h)?(e.consume(h),u):n(h)}function d(h){return ot(h)?f(h):n(h)}function f(h){return h===46?(e.consume(h),r=0,d):h===62?(e.exit("autolinkProtocol").type="autolinkEmail",e.enter("autolinkMarker"),e.consume(h),e.exit("autolinkMarker"),e.exit("autolink"),t):p(h)}function p(h){if((h===45||ot(h))&&r++<63){const x=h===45?p:f;return e.consume(h),x}return n(h)}}const no={partial:!0,tokenize:c3};function c3(e,t,n){return r;function r(s){return oe(s)?ye(e,i,"linePrefix")(s):i(s)}function i(s){return s===null||Z(s)?t(s):n(s)}}const a2={continuation:{tokenize:f3},exit:p3,name:"blockQuote",tokenize:d3};function d3(e,t,n){const r=this;return i;function i(a){if(a===62){const o=r.containerState;return o.open||(e.enter("blockQuote",{_container:!0}),o.open=!0),e.enter("blockQuotePrefix"),e.enter("blockQuoteMarker"),e.consume(a),e.exit("blockQuoteMarker"),s}return n(a)}function s(a){return oe(a)?(e.enter("blockQuotePrefixWhitespace"),e.consume(a),e.exit("blockQuotePrefixWhitespace"),e.exit("blockQuotePrefix"),t):(e.exit("blockQuotePrefix"),t(a))}}function f3(e,t,n){const r=this;return i;function i(a){return oe(a)?ye(e,s,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(a):s(a)}function s(a){return e.attempt(a2,t,n)(a)}}function p3(e){e.exit("blockQuote")}const o2={name:"characterEscape",tokenize:h3};function h3(e,t,n){return r;function r(s){return e.enter("characterEscape"),e.enter("escapeMarker"),e.consume(s),e.exit("escapeMarker"),i}function i(s){return e3(s)?(e.enter("characterEscapeValue"),e.consume(s),e.exit("characterEscapeValue"),e.exit("characterEscape"),t):n(s)}}const l2={name:"characterReference",tokenize:m3};function m3(e,t,n){const r=this;let i=0,s,a;return o;function o(f){return e.enter("characterReference"),e.enter("characterReferenceMarker"),e.consume(f),e.exit("characterReferenceMarker"),l}function l(f){return f===35?(e.enter("characterReferenceMarkerNumeric"),e.consume(f),e.exit("characterReferenceMarkerNumeric"),u):(e.enter("characterReferenceValue"),s=31,a=ot,d(f))}function u(f){return f===88||f===120?(e.enter("characterReferenceMarkerHexadecimal"),e.consume(f),e.exit("characterReferenceMarkerHexadecimal"),e.enter("characterReferenceValue"),s=6,a=JD,d):(e.enter("characterReferenceValue"),s=7,a=Tf,d(f))}function d(f){if(f===59&&i){const p=e.exit("characterReferenceValue");return a===ot&&!Wh(r.sliceSerialize(p))?n(f):(e.enter("characterReferenceMarker"),e.consume(f),e.exit("characterReferenceMarker"),e.exit("characterReference"),t)}return a(f)&&i++<s?(e.consume(f),d):n(f)}}const Af={partial:!0,tokenize:g3};function g3(e,t,n){const r=this;return i;function i(a){return a===null?n(a):(e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),s)}function s(a){return r.parser.lazy[r.now().line]?n(a):t(a)}}const Lx={concrete:!0,name:"codeFenced",tokenize:y3};function y3(e,t,n){const r=this,i={partial:!0,tokenize:E};let s=0,a=0,o;return l;function l(w){return u(w)}function u(w){const I=r.events[r.events.length-1];return s=I&&I[1].type==="linePrefix"?I[2].sliceSerialize(I[1],!0).length:0,o=w,e.enter("codeFenced"),e.enter("codeFencedFence"),e.enter("codeFencedFenceSequence"),d(w)}function d(w){return w===o?(a++,e.consume(w),d):a<3?n(w):(e.exit("codeFencedFenceSequence"),oe(w)?ye(e,f,"whitespace")(w):f(w))}function f(w){return w===null||Z(w)?(e.exit("codeFencedFence"),r.interrupt?t(w):e.check(Af,b,v)(w)):(e.enter("codeFencedFenceInfo"),e.enter("chunkString",{contentType:"string"}),p(w))}function p(w){return w===null||Z(w)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),f(w)):oe(w)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),ye(e,h,"whitespace")(w)):w===96&&w===o?n(w):(e.consume(w),p)}function h(w){return w===null||Z(w)?f(w):(e.enter("codeFencedFenceMeta"),e.enter("chunkString",{contentType:"string"}),x(w))}function x(w){return w===null||Z(w)?(e.exit("chunkString"),e.exit("codeFencedFenceMeta"),f(w)):w===96&&w===o?n(w):(e.consume(w),x)}function b(w){return e.attempt(i,v,k)(w)}function k(w){return e.enter("lineEnding"),e.consume(w),e.exit("lineEnding"),g}function g(w){return s>0&&oe(w)?ye(e,m,"linePrefix",s+1)(w):m(w)}function m(w){return w===null||Z(w)?e.check(Af,b,v)(w):(e.enter("codeFlowValue"),y(w))}function y(w){return w===null||Z(w)?(e.exit("codeFlowValue"),m(w)):(e.consume(w),y)}function v(w){return e.exit("codeFenced"),t(w)}function E(w,I,N){let R=0;return _;function _(H){return w.enter("lineEnding"),w.consume(H),w.exit("lineEnding"),j}function j(H){return w.enter("codeFencedFence"),oe(H)?ye(w,U,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(H):U(H)}function U(H){return H===o?(w.enter("codeFencedFenceSequence"),G(H)):N(H)}function G(H){return H===o?(R++,w.consume(H),G):R>=a?(w.exit("codeFencedFenceSequence"),oe(H)?ye(w,q,"whitespace")(H):q(H)):N(H)}function q(H){return H===null||Z(H)?(w.exit("codeFencedFence"),I(H)):N(H)}}}const Fc={name:"codeIndented",tokenize:v3},x3={partial:!0,tokenize:b3};function v3(e,t,n){return r;function r(o){return e.enter("codeIndented"),s2(e,i,n,"linePrefix",4,4)(o)}function i(o){return o===null?a(o):Z(o)?e.attempt(x3,i,a)(o):(e.enter("codeFlowValue"),s(o))}function s(o){return o===null||Z(o)?(e.exit("codeFlowValue"),i(o)):(e.consume(o),s)}function a(o){return e.exit("codeIndented"),t(o)}}function b3(e,t,n){const r=this;return i;function i(a){return r.parser.lazy[r.now().line]?n(a):Z(a)?(e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),i):s2(e,t,s,"linePrefix",4,4)(a)}function s(a){return Z(a)?i(a):n(a)}}const w3={name:"codeText",previous:S3,resolve:k3,tokenize:E3};function k3(e){let t=e.length-4,n=3,r,i;if((e[n][1].type==="lineEnding"||e[n][1].type==="space")&&(e[t][1].type==="lineEnding"||e[t][1].type==="space")){for(r=n;++r<t;)if(e[r][1].type==="codeTextData"){e[n][1].type="codeTextPadding",e[t][1].type="codeTextPadding",n+=2,t-=2;break}}for(r=n-1,t++;++r<=t;)i===void 0?r!==t&&e[r][1].type!=="lineEnding"&&(i=r):(r===t||e[r][1].type==="lineEnding")&&(e[i][1].type="codeTextData",r!==i+2&&(e[i][1].end=e[r-1][1].end,e.splice(i+2,r-i-2),t-=r-i-2,r=i+2),i=void 0);return e}function S3(e){return e!==96||this.events[this.events.length-1][1].type==="characterEscape"}function E3(e,t,n){let r=0,i,s;return a;function a(f){return e.enter("codeText"),e.enter("codeTextSequence"),o(f)}function o(f){return f===96?(e.consume(f),r++,o):(e.exit("codeTextSequence"),l(f))}function l(f){return f===null?n(f):f===32?(e.enter("space"),e.consume(f),e.exit("space"),l):f===96?(s=e.enter("codeTextSequence"),i=0,d(f)):Z(f)?(e.enter("lineEnding"),e.consume(f),e.exit("lineEnding"),l):(e.enter("codeTextData"),u(f))}function u(f){return f===null||f===32||f===96||Z(f)?(e.exit("codeTextData"),l(f)):(e.consume(f),u)}function d(f){return f===96?(e.consume(f),i++,d):i===r?(e.exit("codeTextSequence"),e.exit("codeText"),t(f)):(s.type="codeTextData",u(f))}}class C3{constructor(t){this.left=t?[...t]:[],this.right=[]}get(t){if(t<0||t>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+t+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return t<this.left.length?this.left[t]:this.right[this.right.length-t+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(t,n){const r=n??Number.POSITIVE_INFINITY;return r<this.left.length?this.left.slice(t,r):t>this.left.length?this.right.slice(this.right.length-r+this.left.length,this.right.length-t+this.left.length).reverse():this.left.slice(t).concat(this.right.slice(this.right.length-r+this.left.length).reverse())}splice(t,n,r){const i=n||0;this.setCursor(Math.trunc(t));const s=this.right.splice(this.right.length-i,Number.POSITIVE_INFINITY);return r&&Ns(this.left,r),s.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(t){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(t)}pushMany(t){this.setCursor(Number.POSITIVE_INFINITY),Ns(this.left,t)}unshift(t){this.setCursor(0),this.right.push(t)}unshiftMany(t){this.setCursor(0),Ns(this.right,t.reverse())}setCursor(t){if(!(t===this.left.length||t>this.left.length&&this.right.length===0||t<0&&this.left.length===0))if(t<this.left.length){const n=this.left.splice(t,Number.POSITIVE_INFINITY);Ns(this.right,n.reverse())}else{const n=this.right.splice(this.left.length+this.right.length-t,Number.POSITIVE_INFINITY);Ns(this.left,n.reverse())}}}function Ns(e,t){let n=0;if(t.length<1e4)e.push(...t);else for(;n<t.length;)e.push(...t.slice(n,n+1e4)),n+=1e4}function u2(e){const t={};let n=-1,r,i,s,a,o,l,u;const d=new C3(e);for(;++n<d.length;){for(;n in t;)n=t[n];if(r=d.get(n),n&&r[1].type==="chunkFlow"&&d.get(n-1)[1].type==="listItemPrefix"&&(l=r[1]._tokenizer.events,s=0,s<l.length&&l[s][1].type==="lineEndingBlank"&&(s+=2),s<l.length&&l[s][1].type==="content"))for(;++s<l.length&&l[s][1].type!=="content";)l[s][1].type==="chunkText"&&(l[s][1]._isInFirstContentOfListItem=!0,s++);if(r[0]==="enter")r[1].contentType&&(Object.assign(t,T3(d,n)),n=t[n],u=!0);else if(r[1]._container){for(s=n,i=void 0;s--;)if(a=d.get(s),a[1].type==="lineEnding"||a[1].type==="lineEndingBlank")a[0]==="enter"&&(i&&(d.get(i)[1].type="lineEndingBlank"),a[1].type="lineEnding",i=s);else if(!(a[1].type==="linePrefix"||a[1].type==="listItemIndent"))break;i&&(r[1].end={...d.get(i)[1].start},o=d.slice(i,n),o.unshift(r),d.splice(i,n-i+1,o))}}return on(e,0,Number.POSITIVE_INFINITY,d.slice(0)),!u}function T3(e,t){const n=e.get(t)[1],r=e.get(t)[2];let i=t-1;const s=[];let a=n._tokenizer;a||(a=r.parser[n.contentType](n.start),n._contentTypeTextTrailing&&(a._contentTypeTextTrailing=!0));const o=a.events,l=[],u={};let d,f,p=-1,h=n,x=0,b=0;const k=[b];for(;h;){for(;e.get(++i)[1]!==h;);s.push(i),h._tokenizer||(d=r.sliceStream(h),h.next||d.push(null),f&&a.defineSkip(h.start),h._isInFirstContentOfListItem&&(a._gfmTasklistFirstContentOfListItem=!0),a.write(d),h._isInFirstContentOfListItem&&(a._gfmTasklistFirstContentOfListItem=void 0)),f=h,h=h.next}for(h=n;++p<o.length;)o[p][0]==="exit"&&o[p-1][0]==="enter"&&o[p][1].type===o[p-1][1].type&&o[p][1].start.line!==o[p][1].end.line&&(b=p+1,k.push(b),h._tokenizer=void 0,h.previous=void 0,h=h.next);for(a.events=[],h?(h._tokenizer=void 0,h.previous=void 0):k.pop(),p=k.length;p--;){const g=o.slice(k[p],k[p+1]),m=s.pop();l.push([m,m+g.length-1]),e.splice(m,2,g)}for(l.reverse(),p=-1;++p<l.length;)u[x+l[p][0]]=x+l[p][1],x+=l[p][1]-l[p][0]-1;return u}const _3={resolve:I3,tokenize:N3},A3={partial:!0,tokenize:P3};function I3(e){return u2(e),e}function N3(e,t){let n;return r;function r(o){return e.enter("content"),n=e.enter("chunkContent",{contentType:"content"}),i(o)}function i(o){return o===null?s(o):Z(o)?e.check(A3,a,s)(o):(e.consume(o),i)}function s(o){return e.exit("chunkContent"),e.exit("content"),t(o)}function a(o){return e.consume(o),e.exit("chunkContent"),n.next=e.enter("chunkContent",{contentType:"content",previous:n}),n=n.next,i}}function P3(e,t,n){const r=this;return i;function i(a){return e.exit("chunkContent"),e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),ye(e,s,"linePrefix")}function s(a){if(a===null||Z(a))return n(a);const o=r.events[r.events.length-1];return!r.parser.constructs.disable.null.includes("codeIndented")&&o&&o[1].type==="linePrefix"&&o[2].sliceSerialize(o[1],!0).length>=4?t(a):e.interrupt(r.parser.constructs.flow,n,t)(a)}}function c2(e,t,n,r,i,s,a,o,l){const u=l||Number.POSITIVE_INFINITY;let d=0;return f;function f(g){return g===60?(e.enter(r),e.enter(i),e.enter(s),e.consume(g),e.exit(s),p):g===null||g===32||g===41||Kl(g)?n(g):(e.enter(r),e.enter(a),e.enter(o),e.enter("chunkString",{contentType:"string"}),b(g))}function p(g){return g===62?(e.enter(s),e.consume(g),e.exit(s),e.exit(i),e.exit(r),t):(e.enter(o),e.enter("chunkString",{contentType:"string"}),h(g))}function h(g){return g===62?(e.exit("chunkString"),e.exit(o),p(g)):g===null||g===60||Z(g)?n(g):(e.consume(g),g===92?x:h)}function x(g){return g===60||g===62||g===92?(e.consume(g),h):h(g)}function b(g){return!d&&(g===null||g===41||ke(g))?(e.exit("chunkString"),e.exit(o),e.exit(a),e.exit(r),t(g)):d<u&&g===40?(e.consume(g),d++,b):g===41?(e.consume(g),d--,b):g===null||g===32||g===40||Kl(g)?n(g):(e.consume(g),g===92?k:b)}function k(g){return g===40||g===41||g===92?(e.consume(g),b):b(g)}}function d2(e,t,n,r,i,s){const a=this;let o=0,l;return u;function u(h){return e.enter(r),e.enter(i),e.consume(h),e.exit(i),e.enter(s),d}function d(h){return o>999||h===null||h===91||h===93&&!l||h===94&&!o&&"_hiddenFootnoteSupport"in a.parser.constructs?n(h):h===93?(e.exit(s),e.enter(i),e.consume(h),e.exit(i),e.exit(r),t):Z(h)?(e.enter("lineEnding"),e.consume(h),e.exit("lineEnding"),d):(e.enter("chunkString",{contentType:"string"}),f(h))}function f(h){return h===null||h===91||h===93||Z(h)||o++>999?(e.exit("chunkString"),d(h)):(e.consume(h),l||(l=!oe(h)),h===92?p:f)}function p(h){return h===91||h===92||h===93?(e.consume(h),o++,f):f(h)}}function f2(e,t,n,r,i,s){let a;return o;function o(p){return p===34||p===39||p===40?(e.enter(r),e.enter(i),e.consume(p),e.exit(i),a=p===40?41:p,l):n(p)}function l(p){return p===a?(e.enter(i),e.consume(p),e.exit(i),e.exit(r),t):(e.enter(s),u(p))}function u(p){return p===a?(e.exit(s),l(a)):p===null?n(p):Z(p)?(e.enter("lineEnding"),e.consume(p),e.exit("lineEnding"),ye(e,u,"linePrefix")):(e.enter("chunkString",{contentType:"string"}),d(p))}function d(p){return p===a||p===null||Z(p)?(e.exit("chunkString"),u(p)):(e.consume(p),p===92?f:d)}function f(p){return p===a||p===92?(e.consume(p),d):d(p)}}function ia(e,t){let n;return r;function r(i){return Z(i)?(e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),n=!0,r):oe(i)?ye(e,r,n?"linePrefix":"lineSuffix")(i):t(i)}}const j3={name:"definition",tokenize:L3},R3={partial:!0,tokenize:D3};function L3(e,t,n){const r=this;let i;return s;function s(h){return e.enter("definition"),a(h)}function a(h){return d2.call(r,e,o,n,"definitionLabel","definitionLabelMarker","definitionLabelString")(h)}function o(h){return i=ln(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)),h===58?(e.enter("definitionMarker"),e.consume(h),e.exit("definitionMarker"),l):n(h)}function l(h){return ke(h)?ia(e,u)(h):u(h)}function u(h){return c2(e,d,n,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(h)}function d(h){return e.attempt(R3,f,f)(h)}function f(h){return oe(h)?ye(e,p,"whitespace")(h):p(h)}function p(h){return h===null||Z(h)?(e.exit("definition"),r.parser.defined.push(i),t(h)):n(h)}}function D3(e,t,n){return r;function r(o){return ke(o)?ia(e,i)(o):n(o)}function i(o){return f2(e,s,n,"definitionTitle","definitionTitleMarker","definitionTitleString")(o)}function s(o){return oe(o)?ye(e,a,"whitespace")(o):a(o)}function a(o){return o===null||Z(o)?t(o):n(o)}}const M3={name:"hardBreakEscape",tokenize:F3};function F3(e,t,n){return r;function r(s){return e.enter("hardBreakEscape"),e.consume(s),i}function i(s){return Z(s)?(e.exit("hardBreakEscape"),t(s)):n(s)}}const O3={name:"headingAtx",resolve:z3,tokenize:U3};function z3(e,t){let n=e.length-2,r=3;if(e[r][1].type==="whitespace"&&(r+=2),n-2>r&&e[n][1].type==="whitespace"&&(n-=2),e[n][1].type==="atxHeadingSequence"&&(r===n-1||n-4>r&&e[n-2][1].type==="whitespace")&&(n-=r+1===n?2:4),n>r){const i={type:"atxHeadingText",start:e[r][1].start,end:e[n][1].end},s={type:"chunkText",start:e[r][1].start,end:e[n][1].end,contentType:"text"};on(e,r,n-r+1,[["enter",i,t],["enter",s,t],["exit",s,t],["exit",i,t]])}return e}function U3(e,t,n){let r=0;return i;function i(d){return e.enter("atxHeading"),s(d)}function s(d){return e.enter("atxHeadingSequence"),a(d)}function a(d){return d===35&&r++<6?(e.consume(d),a):d===null||ke(d)?(e.exit("atxHeadingSequence"),o(d)):n(d)}function o(d){return d===35?(e.enter("atxHeadingSequence"),l(d)):d===null||Z(d)?(e.exit("atxHeading"),t(d)):oe(d)?ye(e,o,"whitespace")(d):(e.enter("atxHeadingText"),u(d))}function l(d){return d===35?(e.consume(d),l):(e.exit("atxHeadingSequence"),o(d))}function u(d){return d===null||d===35||ke(d)?(e.exit("atxHeadingText"),o(d)):(e.consume(d),u)}}const B3=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],Dx=["pre","script","style","textarea"],V3={concrete:!0,name:"htmlFlow",resolveTo:H3,tokenize:W3},$3={partial:!0,tokenize:G3};function H3(e){let t=e.length;for(;t--&&!(e[t][0]==="enter"&&e[t][1].type==="htmlFlow"););return t>1&&e[t-2][1].type==="linePrefix"&&(e[t][1].start=e[t-2][1].start,e[t+1][1].start=e[t-2][1].start,e.splice(t-2,2)),e}function W3(e,t,n){const r=this;let i,s,a,o,l;return u;function u(A){return d(A)}function d(A){return e.enter("htmlFlow"),e.enter("htmlFlowData"),e.consume(A),f}function f(A){return A===33?(e.consume(A),p):A===47?(e.consume(A),s=!0,b):A===63?(e.consume(A),i=3,r.interrupt?t:S):dt(A)?(e.consume(A),a=String.fromCharCode(A),k):n(A)}function p(A){return A===45?(e.consume(A),i=2,h):A===91?(e.consume(A),i=5,o=0,x):dt(A)?(e.consume(A),i=4,r.interrupt?t:S):n(A)}function h(A){return A===45?(e.consume(A),r.interrupt?t:S):n(A)}function x(A){const ue="CDATA[";return A===ue.charCodeAt(o++)?(e.consume(A),o===ue.length?r.interrupt?t:U:x):n(A)}function b(A){return dt(A)?(e.consume(A),a=String.fromCharCode(A),k):n(A)}function k(A){if(A===null||A===47||A===62||ke(A)){const ue=A===47,Se=a.toLowerCase();return!ue&&!s&&Dx.includes(Se)?(i=1,r.interrupt?t(A):U(A)):B3.includes(a.toLowerCase())?(i=6,ue?(e.consume(A),g):r.interrupt?t(A):U(A)):(i=7,r.interrupt&&!r.parser.lazy[r.now().line]?n(A):s?m(A):y(A))}return A===45||ot(A)?(e.consume(A),a+=String.fromCharCode(A),k):n(A)}function g(A){return A===62?(e.consume(A),r.interrupt?t:U):n(A)}function m(A){return oe(A)?(e.consume(A),m):_(A)}function y(A){return A===47?(e.consume(A),_):A===58||A===95||dt(A)?(e.consume(A),v):oe(A)?(e.consume(A),y):_(A)}function v(A){return A===45||A===46||A===58||A===95||ot(A)?(e.consume(A),v):E(A)}function E(A){return A===61?(e.consume(A),w):oe(A)?(e.consume(A),E):y(A)}function w(A){return A===null||A===60||A===61||A===62||A===96?n(A):A===34||A===39?(e.consume(A),l=A,I):oe(A)?(e.consume(A),w):N(A)}function I(A){return A===l?(e.consume(A),l=null,R):A===null||Z(A)?n(A):(e.consume(A),I)}function N(A){return A===null||A===34||A===39||A===47||A===60||A===61||A===62||A===96||ke(A)?E(A):(e.consume(A),N)}function R(A){return A===47||A===62||oe(A)?y(A):n(A)}function _(A){return A===62?(e.consume(A),j):n(A)}function j(A){return A===null||Z(A)?U(A):oe(A)?(e.consume(A),j):n(A)}function U(A){return A===45&&i===2?(e.consume(A),le):A===60&&i===1?(e.consume(A),Q):A===62&&i===4?(e.consume(A),Y):A===63&&i===3?(e.consume(A),S):A===93&&i===5?(e.consume(A),B):Z(A)&&(i===6||i===7)?(e.exit("htmlFlowData"),e.check($3,ee,G)(A)):A===null||Z(A)?(e.exit("htmlFlowData"),G(A)):(e.consume(A),U)}function G(A){return e.check(Af,q,ee)(A)}function q(A){return e.enter("lineEnding"),e.consume(A),e.exit("lineEnding"),H}function H(A){return A===null||Z(A)?G(A):(e.enter("htmlFlowData"),U(A))}function le(A){return A===45?(e.consume(A),S):U(A)}function Q(A){return A===47?(e.consume(A),a="",L):U(A)}function L(A){if(A===62){const ue=a.toLowerCase();return Dx.includes(ue)?(e.consume(A),Y):U(A)}return dt(A)&&a.length<8?(e.consume(A),a+=String.fromCharCode(A),L):U(A)}function B(A){return A===93?(e.consume(A),S):U(A)}function S(A){return A===62?(e.consume(A),Y):A===45&&i===2?(e.consume(A),S):U(A)}function Y(A){return A===null||Z(A)?(e.exit("htmlFlowData"),ee(A)):(e.consume(A),Y)}function ee(A){return e.exit("htmlFlow"),t(A)}}function G3(e,t,n){return r;function r(i){return e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),e.attempt(no,t,n)}}const q3={name:"htmlText",tokenize:K3};function K3(e,t,n){const r=this;let i,s,a;return o;function o(S){return e.enter("htmlText"),e.enter("htmlTextData"),e.consume(S),l}function l(S){return S===33?(e.consume(S),u):S===47?(e.consume(S),E):S===63?(e.consume(S),y):dt(S)?(e.consume(S),N):n(S)}function u(S){return S===45?(e.consume(S),d):S===91?(e.consume(S),s=0,x):dt(S)?(e.consume(S),m):n(S)}function d(S){return S===45?(e.consume(S),h):n(S)}function f(S){return S===null?n(S):S===45?(e.consume(S),p):Z(S)?(a=f,Q(S)):(e.consume(S),f)}function p(S){return S===45?(e.consume(S),h):f(S)}function h(S){return S===62?le(S):S===45?p(S):f(S)}function x(S){const Y="CDATA[";return S===Y.charCodeAt(s++)?(e.consume(S),s===Y.length?b:x):n(S)}function b(S){return S===null?n(S):S===93?(e.consume(S),k):Z(S)?(a=b,Q(S)):(e.consume(S),b)}function k(S){return S===93?(e.consume(S),g):b(S)}function g(S){return S===62?le(S):S===93?(e.consume(S),g):b(S)}function m(S){return S===null||S===62?le(S):Z(S)?(a=m,Q(S)):(e.consume(S),m)}function y(S){return S===null?n(S):S===63?(e.consume(S),v):Z(S)?(a=y,Q(S)):(e.consume(S),y)}function v(S){return S===62?le(S):y(S)}function E(S){return dt(S)?(e.consume(S),w):n(S)}function w(S){return S===45||ot(S)?(e.consume(S),w):I(S)}function I(S){return Z(S)?(a=I,Q(S)):oe(S)?(e.consume(S),I):le(S)}function N(S){return S===45||ot(S)?(e.consume(S),N):S===47||S===62||ke(S)?R(S):n(S)}function R(S){return S===47?(e.consume(S),le):S===58||S===95||dt(S)?(e.consume(S),_):Z(S)?(a=R,Q(S)):oe(S)?(e.consume(S),R):le(S)}function _(S){return S===45||S===46||S===58||S===95||ot(S)?(e.consume(S),_):j(S)}function j(S){return S===61?(e.consume(S),U):Z(S)?(a=j,Q(S)):oe(S)?(e.consume(S),j):R(S)}function U(S){return S===null||S===60||S===61||S===62||S===96?n(S):S===34||S===39?(e.consume(S),i=S,G):Z(S)?(a=U,Q(S)):oe(S)?(e.consume(S),U):(e.consume(S),q)}function G(S){return S===i?(e.consume(S),i=void 0,H):S===null?n(S):Z(S)?(a=G,Q(S)):(e.consume(S),G)}function q(S){return S===null||S===34||S===39||S===60||S===61||S===96?n(S):S===47||S===62||ke(S)?R(S):(e.consume(S),q)}function H(S){return S===47||S===62||ke(S)?R(S):n(S)}function le(S){return S===62?(e.consume(S),e.exit("htmlTextData"),e.exit("htmlText"),t):n(S)}function Q(S){return e.exit("htmlTextData"),e.enter("lineEnding"),e.consume(S),e.exit("lineEnding"),L}function L(S){return oe(S)?ye(e,B,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(S):B(S)}function B(S){return e.enter("htmlTextData"),a(S)}}const Gh={name:"labelEnd",resolveAll:Z3,resolveTo:J3,tokenize:eM},Y3={tokenize:tM},X3={tokenize:nM},Q3={tokenize:rM};function Z3(e){let t=-1;const n=[];for(;++t<e.length;){const r=e[t][1];if(n.push(e[t]),r.type==="labelImage"||r.type==="labelLink"||r.type==="labelEnd"){const i=r.type==="labelImage"?4:2;r.type="data",t+=i}}return e.length!==n.length&&on(e,0,e.length,n),e}function J3(e,t){let n=e.length,r=0,i,s,a;for(;n--;){const d=e[n][1];if(i){if(d.type==="link"||d.type==="labelLink"&&d._inactive)break;e[n][0]==="enter"&&d.type==="labelLink"&&(d._inactive=!0)}else if(s){if(e[n][0]==="enter"&&(d.type==="labelImage"||d.type==="labelLink")&&!d._balanced&&(i=n,d.type!=="labelLink")){r=2;break}}else d.type==="labelEnd"&&(s=n)}const o={type:e[i][1].type==="labelLink"?"link":"image",start:{...e[i][1].start},end:{...e[e.length-1][1].end}},l={type:"label",start:{...e[i][1].start},end:{...e[s][1].end}},u={type:"labelText",start:{...e[i+r+2][1].end},end:{...e[s-2][1].start}};return a=[["enter",o,t],["enter",l,t]],a=Bt(a,e.slice(i+1,i+r+3)),a=Bt(a,[["enter",u,t]]),a=Bt(a,ju(t.parser.constructs.insideSpan.null,e.slice(i+r+4,s-3),t)),a=Bt(a,[["exit",u,t],e[s-2],e[s-1],["exit",l,t]]),a=Bt(a,e.slice(s+1)),a=Bt(a,[["exit",o,t]]),on(e,i,e.length,a),e}function eM(e,t,n){const r=this,i=r._labelStarts;let s,a;if(i){for(;i.length>0&&i[i.length-1]._balanced;)i.pop();s=i[i.length-1]}return o;function o(p){return s?s._inactive?f(p):(a=r.parser.defined.includes(ln(r.sliceSerialize({start:s.end,end:r.now()}))),e.enter("labelEnd"),e.enter("labelMarker"),e.consume(p),e.exit("labelMarker"),e.exit("labelEnd"),l):n(p)}function l(p){return p===40?e.attempt(Y3,d,a?d:f)(p):p===91?e.attempt(X3,d,a?u:f)(p):a?d(p):f(p)}function u(p){return e.attempt(Q3,d,f)(p)}function d(p){return i.pop(),t(p)}function f(p){return s._balanced=!0,n(p)}}function tM(e,t,n){return r;function r(f){return e.enter("resource"),e.enter("resourceMarker"),e.consume(f),e.exit("resourceMarker"),i}function i(f){return ke(f)?ia(e,s)(f):s(f)}function s(f){return f===41?d(f):c2(e,a,o,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(f)}function a(f){return ke(f)?ia(e,l)(f):d(f)}function o(f){return n(f)}function l(f){return f===34||f===39||f===40?f2(e,u,n,"resourceTitle","resourceTitleMarker","resourceTitleString")(f):d(f)}function u(f){return ke(f)?ia(e,d)(f):d(f)}function d(f){return f===41?(e.enter("resourceMarker"),e.consume(f),e.exit("resourceMarker"),e.exit("resource"),t):n(f)}}function nM(e,t,n){const r=this;return i;function i(o){return d2.call(r,e,s,a,"reference","referenceMarker","referenceString")(o)}function s(o){return r.parser.defined.includes(ln(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)))?t(o):n(o)}function a(o){return n(o)}}function rM(e,t,n){return r;function r(s){return e.enter("reference"),e.enter("referenceMarker"),e.consume(s),e.exit("referenceMarker"),i}function i(s){return s===93?(e.enter("referenceMarker"),e.consume(s),e.exit("referenceMarker"),e.exit("reference"),t):n(s)}}const iM={name:"labelStartImage",resolveAll:Gh.resolveAll,tokenize:sM};function sM(e,t,n){const r=this;let i;return s;function s(l){return e.enter("labelImage"),e.enter("labelImageMarker"),e.consume(l),e.exit("labelImageMarker"),a}function a(l){return l===91?(e.enter("labelMarker"),e.consume(l),e.exit("labelMarker"),i=e.exit("labelImage"),o):n(l)}function o(l){return l===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(l):(r._labelStarts=r._labelStarts||[],r._labelStarts.push(i),t(l))}}const aM={name:"labelStartLink",resolveAll:Gh.resolveAll,tokenize:oM};function oM(e,t,n){const r=this;let i;return s;function s(o){return e.enter("labelLink"),e.enter("labelMarker"),e.consume(o),e.exit("labelMarker"),i=e.exit("labelLink"),a}function a(o){return o===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(o):(r._labelStarts=r._labelStarts||[],r._labelStarts.push(i),t(o))}}const Oc={name:"lineEnding",tokenize:lM};function lM(e,t){return n;function n(r){return e.enter("lineEnding"),e.consume(r),e.exit("lineEnding"),ye(e,t,"linePrefix")}}const il={name:"thematicBreak",tokenize:uM};function uM(e,t,n){let r=0,i;return s;function s(u){return e.enter("thematicBreak"),a(u)}function a(u){return i=u,o(u)}function o(u){return u===i?(e.enter("thematicBreakSequence"),l(u)):r>=3&&(u===null||Z(u))?(e.exit("thematicBreak"),t(u)):n(u)}function l(u){return u===i?(e.consume(u),r++,l):(e.exit("thematicBreakSequence"),oe(u)?ye(e,o,"whitespace")(u):o(u))}}const gt={continuation:{tokenize:pM},exit:mM,name:"list",tokenize:fM},cM={partial:!0,tokenize:gM},dM={partial:!0,tokenize:hM};function fM(e,t,n){const r=this,i=r.events[r.events.length-1];let s=i&&i[1].type==="linePrefix"?i[2].sliceSerialize(i[1],!0).length:0,a=0;return o;function o(h){const x=r.containerState.type||(h===42||h===43||h===45?"listUnordered":"listOrdered");if(x==="listUnordered"?!r.containerState.marker||h===r.containerState.marker:Tf(h)){if(r.containerState.type||(r.containerState.type=x,e.enter(x,{_container:!0})),x==="listUnordered")return e.enter("listItemPrefix"),h===42||h===45?e.check(il,n,u)(h):u(h);if(!r.interrupt||h===49)return e.enter("listItemPrefix"),e.enter("listItemValue"),l(h)}return n(h)}function l(h){return Tf(h)&&++a<10?(e.consume(h),l):(!r.interrupt||a<2)&&(r.containerState.marker?h===r.containerState.marker:h===41||h===46)?(e.exit("listItemValue"),u(h)):n(h)}function u(h){return e.enter("listItemMarker"),e.consume(h),e.exit("listItemMarker"),r.containerState.marker=r.containerState.marker||h,e.check(no,r.interrupt?n:d,e.attempt(cM,p,f))}function d(h){return r.containerState.initialBlankLine=!0,s++,p(h)}function f(h){return oe(h)?(e.enter("listItemPrefixWhitespace"),e.consume(h),e.exit("listItemPrefixWhitespace"),p):n(h)}function p(h){return r.containerState.size=s+r.sliceSerialize(e.exit("listItemPrefix"),!0).length,t(h)}}function pM(e,t,n){const r=this;return r.containerState._closeFlow=void 0,e.check(no,i,s);function i(o){return r.containerState.furtherBlankLines=r.containerState.furtherBlankLines||r.containerState.initialBlankLine,ye(e,t,"listItemIndent",r.containerState.size+1)(o)}function s(o){return r.containerState.furtherBlankLines||!oe(o)?(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,a(o)):(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,e.attempt(dM,t,a)(o))}function a(o){return r.containerState._closeFlow=!0,r.interrupt=void 0,ye(e,e.attempt(gt,t,n),"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(o)}}function hM(e,t,n){const r=this;return ye(e,i,"listItemIndent",r.containerState.size+1);function i(s){const a=r.events[r.events.length-1];return a&&a[1].type==="listItemIndent"&&a[2].sliceSerialize(a[1],!0).length===r.containerState.size?t(s):n(s)}}function mM(e){e.exit(this.containerState.type)}function gM(e,t,n){const r=this;return ye(e,i,"listItemPrefixWhitespace",r.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function i(s){const a=r.events[r.events.length-1];return!oe(s)&&a&&a[1].type==="listItemPrefixWhitespace"?t(s):n(s)}}const Mx={name:"setextUnderline",resolveTo:yM,tokenize:xM};function yM(e,t){const n=new Yl;let r=e.length,i,s,a;for(;r--;)if(e[r][0]==="enter"){if(e[r][1].type==="content"){i=r;break}e[r][1].type==="paragraph"&&(s=r)}else e[r][1].type==="content"&&n.add(r,1,[]),!a&&e[r][1].type==="definition"&&(a=r);const o={type:"setextHeading",start:{...e[i][1].start},end:{...e[e.length-1][1].end}};return e[s][1].type="setextHeadingText",a?(n.add(s,0,[["enter",o,t]]),n.add(a+1,0,[["exit",e[i][1],t]]),e[i][1].end={...e[a][1].end}):e[i][1]=o,n.add(e.length,0,[["exit",o,t]]),n.consume(e),e}function xM(e,t,n){const r=this;let i;return s;function s(u){let d=r.events.length,f;for(;d--;)if(r.events[d][1].type!=="lineEnding"&&r.events[d][1].type!=="linePrefix"&&r.events[d][1].type!=="content"){f=r.events[d][1].type==="paragraph";break}return!r.parser.lazy[r.now().line]&&(r.interrupt||f)?(e.enter("setextHeadingLine"),i=u,a(u)):n(u)}function a(u){return e.enter("setextHeadingLineSequence"),o(u)}function o(u){return u===i?(e.consume(u),o):(e.exit("setextHeadingLineSequence"),oe(u)?ye(e,l,"lineSuffix")(u):l(u))}function l(u){return u===null||Z(u)?(e.exit("setextHeadingLine"),t(u)):n(u)}}const vM={tokenize:bM};function bM(e){const t=this,n=e.attempt(no,r,e.attempt(this.parser.constructs.flowInitial,i,ye(e,e.attempt(this.parser.constructs.flow,i,e.attempt(_3,i)),"linePrefix")));return n;function r(s){if(s===null){e.consume(s);return}return e.enter("lineEndingBlank"),e.consume(s),e.exit("lineEndingBlank"),t.currentConstruct=void 0,n}function i(s){if(s===null){e.consume(s);return}return e.enter("lineEnding"),e.consume(s),e.exit("lineEnding"),t.currentConstruct=void 0,n}}const wM={resolveAll:h2()},kM=p2("string"),SM=p2("text");function p2(e){return{resolveAll:h2(e==="text"?EM:void 0),tokenize:t};function t(n){const r=this,i=this.parser.constructs[e],s=n.attempt(i,a,o);return a;function a(d){return u(d)?s(d):o(d)}function o(d){if(d===null){n.consume(d);return}return n.enter("data"),n.consume(d),l}function l(d){return u(d)?(n.exit("data"),s(d)):(n.consume(d),l)}function u(d){if(d===null)return!0;const f=i[d];let p=-1;if(f)for(;++p<f.length;){const h=f[p];if(!h.previous||h.previous.call(r,r.previous))return!0}return!1}}}function h2(e){return t;function t(n,r){let i=-1,s;for(;++i<=n.length;)s===void 0?n[i]&&n[i][1].type==="data"&&(s=i,i++):(!n[i]||n[i][1].type!=="data")&&(i!==s+2&&(n[s][1].end=n[i-1][1].end,n.splice(s+2,i-s-2),i=s+2),s=void 0);return e?e(n,r):n}}function EM(e,t){const n=new Yl;let r=0;for(;++r<=e.length;)if((r===e.length||e[r][1].type==="lineEnding")&&e[r-1][1].type==="data"){const i=e[r-1][1],s=t.sliceStream(i);let a=s.length,o=-1,l=0,u;for(;a--;){const d=s[a];if(typeof d=="string"){for(o=d.length;d.charCodeAt(o-1)===32;)l++,o--;if(o)break;o=-1}else if(d===-2)u=!0,l++;else if(d!==-1){a++;break}}if(t._contentTypeTextTrailing&&r===e.length&&(l=0),l){const d={type:r===e.length||u||l<2?"lineSuffix":"hardBreakTrailing",start:{_bufferIndex:a?o:i.start._bufferIndex+o,_index:i.start._index+a,line:i.end.line,column:i.end.column-l,offset:i.end.offset-l},end:{...i.end}};i.end={...d.start},i.start.offset===i.end.offset?Object.assign(i,d):n.add(r,0,[["enter",d,t],["exit",d,t]])}r++}return n.consume(e),e}const CM={42:gt,43:gt,45:gt,48:gt,49:gt,50:gt,51:gt,52:gt,53:gt,54:gt,55:gt,56:gt,57:gt,62:a2},TM={91:j3},_M={[-2]:Fc,[-1]:Fc,32:Fc},AM={35:O3,42:il,45:[Mx,il],60:V3,61:Mx,95:il,96:Lx,126:Lx},IM={38:l2,92:o2},NM={[-5]:Oc,[-4]:Oc,[-3]:Oc,33:iM,38:l2,42:_f,60:[l3,q3],91:aM,92:[M3,o2],93:Gh,95:_f,96:w3},PM={null:[_f,wM]},jM={null:[42,95]},RM={null:[]},LM=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers:jM,contentInitial:TM,disable:RM,document:CM,flow:AM,flowInitial:_M,insideSpan:PM,string:IM,text:NM},Symbol.toStringTag,{value:"Module"}));function DM(e,t,n){let r={_bufferIndex:-1,_index:0,line:n&&n.line||1,column:n&&n.column||1,offset:n&&n.offset||0};const i={},s=[];let a=[],o=[];const l={attempt:I(E),check:I(w),consume:m,enter:y,exit:v,interrupt:I(w,{interrupt:!0})},u={code:null,containerState:{},defineSkip:b,events:[],now:x,parser:e,previous:null,sliceSerialize:p,sliceStream:h,write:f};let d=t.tokenize.call(u,l);return t.resolveAll&&s.push(t),u;function f(j){return a=Bt(a,j),k(),a[a.length-1]!==null?[]:(N(t,0),u.events=ju(s,u.events,u),u.events)}function p(j,U){return FM(h(j),U)}function h(j){return MM(a,j)}function x(){const{_bufferIndex:j,_index:U,line:G,column:q,offset:H}=r;return{_bufferIndex:j,_index:U,line:G,column:q,offset:H}}function b(j){i[j.line]=j.column,_()}function k(){for(;r._index<a.length;){const j=a[r._index];if(typeof j=="string"){const U=r._index;for(r._bufferIndex<0&&(r._bufferIndex=0);r._index===U&&r._bufferIndex<j.length;)g(j.charCodeAt(r._bufferIndex))}else g(j)}}function g(j){d=d(j)}function m(j){Z(j)?(r.line++,r.column=1,r.offset+=j===-3?2:1,_()):j!==-1&&(r.column++,r.offset++),r._bufferIndex<0?r._index++:(r._bufferIndex++,r._bufferIndex===a[r._index].length&&(r._bufferIndex=-1,r._index++)),u.previous=j}function y(j,U){const G=U||{};return G.type=j,G.start=x(),u.events.push(["enter",G,u]),o.push(G),G}function v(j){const U=o.pop();return U.end=x(),u.events.push(["exit",U,u]),U}function E(j,U){N(j,U.from)}function w(j,U){U.restore()}function I(j,U){return G;function G(q,H,le){let Q,L,B,S;return Array.isArray(q)?ee(q):"tokenize"in q?ee([q]):Y(q);function Y(se){return Ee;function Ee($e){const Ye=$e!==null&&se[$e],pe=$e!==null&&se.null,et=[...Array.isArray(Ye)?Ye:Ye?[Ye]:[],...Array.isArray(pe)?pe:pe?[pe]:[]];return ee(et)($e)}}function ee(se){return Q=se,L=0,se.length===0?le:A(se[L])}function A(se){return Ee;function Ee($e){return S=R(),B=se,se.partial||(u.currentConstruct=se),se.name&&u.parser.constructs.disable.null.includes(se.name)?Se():se.tokenize.call(U?Object.assign(Object.create(u),U):u,l,ue,Se)($e)}}function ue(se){return j(B,S),H}function Se(se){return S.restore(),++L<Q.length?A(Q[L]):le}}}function N(j,U){j.resolveAll&&!s.includes(j)&&s.push(j),j.resolve&&on(u.events,U,u.events.length-U,j.resolve(u.events.slice(U),u)),j.resolveTo&&(u.events=j.resolveTo(u.events,u))}function R(){const j=x(),U=u.previous,G=u.currentConstruct,q=u.events.length,H=Array.from(o);return{from:q,restore:le};function le(){r=j,u.previous=U,u.currentConstruct=G,u.events.length=q,o=H,_()}}function _(){r.line in i&&r.column<2&&(r.column=i[r.line],r.offset+=i[r.line]-1)}}function MM(e,t){const n=t.start._index,r=t.start._bufferIndex,i=t.end._index,s=t.end._bufferIndex;let a;if(n===i)a=[e[n].slice(r,s)];else{if(a=e.slice(n,i),r>-1){const o=a[0];typeof o=="string"?a[0]=o.slice(r):a.shift()}s>0&&a.push(e[i].slice(0,s))}return a}function FM(e,t){let n=-1;const r=[];let i;for(;++n<e.length;){const s=e[n];let a;if(typeof s=="string")a=s;else switch(s){case-5:{a="\r";break}case-4:{a=`
`;break}case-3:{a=`\r
`;break}case-2:{a=t?" ":"	";break}case-1:{if(!t&&i)continue;a=" ";break}default:a=String.fromCharCode(s)}i=s===-2,r.push(a)}return r.join("")}function OM(e){const r={constructs:r2([LM,...(e||{}).extensions||[]]),content:i(t3),defined:[],document:i(r3),flow:i(vM),lazy:{},string:i(kM),text:i(SM)};return r;function i(s){return a;function a(o){return DM(r,s,o)}}}function zM(e){for(;!u2(e););return e}const Fx=/[\0\t\n\r]/g;function UM(){let e=1,t="",n=!0,r;return i;function i(s,a,o){s=t+(typeof s=="string"?s.toString():new TextDecoder(a||void 0).decode(s));const l=[];let u=0;for(t="",n&&(s.charCodeAt(0)===65279&&u++,n=void 0);u<s.length;){Fx.lastIndex=u;const d=Fx.exec(s),f=d&&d.index!==void 0?d.index:s.length,p=s.charCodeAt(f);if(!d){t=s.slice(u);break}if(p===10&&u===f&&r)l.push(-3),r=void 0;else switch(r&&(l.push(-5),r=void 0),u<f&&(l.push(s.slice(u,f)),e+=f-u),p){case 0:{l.push(65533),e++;break}case 9:{const h=Math.ceil(e/4)*4;for(l.push(-2);e++<h;)l.push(-1);break}case 10:{l.push(-4),e=1;break}default:r=!0,e=1}u=f+1}return o&&(r&&l.push(-5),t&&l.push(t),l.push(null)),l}}const BM=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function VM(e){return e.replace(BM,$M)}function $M(e,t,n){if(t)return t;if(n.charCodeAt(0)===35){const i=n.charCodeAt(1),s=i===120||i===88;return i2(n.slice(s?2:1),s?16:10)}return Wh(n)||e}const m2={}.hasOwnProperty;function HM(e,t,n){return t&&typeof t=="object"&&(n=t,t=void 0),WM(n)(zM(OM(n).document().write(UM()(e,t,!0))))}function WM(e){const t={afterExit:[],beforeEnter:[],transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:a(ge),autolinkProtocol:_,autolinkEmail:_,atxHeading:a(Me),blockQuote:a(et),characterEscape:_,characterReference:_,codeFenced:a(St),codeFencedFenceInfo:o,codeFencedFenceMeta:o,codeIndented:a(St,o),codeText:a(Ge,o),codeTextData:_,data:_,codeFlowValue:_,definition:a(Gt),definitionDestinationString:o,definitionLabelString:o,definitionTitleString:o,emphasis:a(jr),hardBreakEscape:a(Cn),hardBreakTrailing:a(Cn),htmlFlow:a(qt,o),htmlFlowData:_,htmlText:a(qt,o),htmlTextData:_,image:a(D),label:o,link:a(ge),listItem:a(xe),listItemValue:h,listOrdered:a(re,p),listUnordered:a(re),paragraph:a(M),reference:ue,referenceString:o,resourceDestinationString:o,resourceTitleString:o,setextHeading:a(Me),strong:a($),thematicBreak:a(ce)},exit:{atxHeading:u(),atxHeadingSequence:w,autolink:u(),autolinkEmail:pe,autolinkProtocol:Ye,blockQuote:u(),characterEscapeValue:j,characterReferenceMarkerHexadecimal:se,characterReferenceMarkerNumeric:se,characterReferenceValue:Ee,characterReference:$e,codeFenced:u(g),codeFencedFence:k,codeFencedFenceInfo:x,codeFencedFenceMeta:b,codeFlowValue:j,codeIndented:u(m),codeText:u(le),codeTextData:j,data:j,definition:u(),definitionDestinationString:E,definitionLabelString:y,definitionTitleString:v,emphasis:u(),hardBreakEscape:u(G),hardBreakTrailing:u(G),htmlFlow:u(q),htmlFlowData:j,htmlText:u(H),htmlTextData:j,image:u(L),label:S,labelText:B,lineEnding:U,link:u(Q),listItem:u(),listOrdered:u(),listUnordered:u(),paragraph:u(),referenceString:Se,resourceDestinationString:Y,resourceTitleString:ee,resource:A,setextHeading:u(R),setextHeadingLineSequence:N,setextHeadingText:I,strong:u(),thematicBreak:u()}};g2(t,(e||{}).mdastExtensions||[]);const n={};return r;function r(P){let T={type:"root",children:[],position:void 0};const z={stack:[T],tokenStack:[],config:t,enter:l,exit:d,buffer:o,resume:f,data:n},V=[],X=[];let ie=-1;for(;++ie<P.length;)if(X.push(P[ie]),P[ie][1].type==="listOrdered"||P[ie][1].type==="listUnordered")if(P[ie][0]==="enter")V.push(X.length-1);else{const fe=V.pop();s(X,fe)}for(P=X,ie=-1;++ie<P.length;){const fe=t[P[ie][0]];P[ie][0]==="enter"&&t.beforeEnter.length>0&&i(t.beforeEnter,{...z,sliceSerialize:P[ie][2].sliceSerialize},P[ie][1]),m2.call(fe,P[ie][1].type)&&fe[P[ie][1].type].call({...z,sliceSerialize:P[ie][2].sliceSerialize},P[ie][1]),P[ie][0]==="exit"&&t.afterExit.length>0&&i(t.afterExit,{...z,sliceSerialize:P[ie][2].sliceSerialize},P[ie][1])}if(z.tokenStack.length>0){const fe=z.tokenStack[z.tokenStack.length-1];(fe[1]||Ox).call(z,void 0,fe[0])}for(T.position={start:Jn(P.length>0?P[0][1].start:{line:1,column:1,offset:0}),end:Jn(P.length>0?P[P.length-2][1].end:{line:1,column:1,offset:0})},ie=-1;++ie<t.transforms.length;)T=t.transforms[ie](T)||T;return T}function i(P,T,z){let V=-1;for(;++V<P.length;)P[V].call(T,z)}function s(P,T){const z=P.length-1;let V=T-1,X=-1,ie=!1,fe,he,Pe,Tn;const Rr=[];for(;++V<=z;){const Et=P[V];switch(Et[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{Et[0]==="enter"?X++:X--,Tn=void 0;break}case"lineEndingBlank":{Et[0]==="enter"&&(fe&&!Tn&&!X&&!Pe&&(Pe=V),Tn=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:Tn=void 0}if(!X&&Et[0]==="enter"&&Et[1].type==="listItemPrefix"||X===-1&&Et[0]==="exit"&&(Et[1].type==="listUnordered"||Et[1].type==="listOrdered")){if(fe){let hi=V;for(he=void 0;hi--;){const _n=P[hi];if(_n[1].type==="lineEnding"||_n[1].type==="lineEndingBlank"){if(_n[0]==="exit")continue;he&&(P[he][1].type="lineEndingBlank",ie=!0),_n[1].type="lineEnding",he=hi}else if(!(_n[1].type==="linePrefix"||_n[1].type==="blockQuotePrefix"||_n[1].type==="blockQuotePrefixWhitespace"||_n[1].type==="blockQuoteMarker"||_n[1].type==="listItemIndent"))break}Pe&&(!he||Pe<he)&&(fe._spread=!0),fe.end=Object.assign({},he?P[he][1].start:Et[1].end),Rr.push({at:he||V,event:["exit",fe,Et[2]]})}if(Et[1].type==="listItemPrefix"){const hi={type:"listItem",_spread:!1,start:Object.assign({},Et[1].start),end:void 0};fe=hi,Rr.push({at:V,event:["enter",hi,Et[2]]}),Pe=void 0,Tn=!0}}}const om=P.splice(T);let Mu=0;for(V=-1;++V<om.length;){for(;Mu<Rr.length&&Rr[Mu].at===T+V;)P.push(Rr[Mu++].event);P.push(om[V])}P[T][1]._spread=ie}function a(P,T){return z;function z(V){l.call(this,P(V),V),T&&T.call(this,V)}}function o(){this.stack.push({type:"fragment",children:[]})}function l(P,T,z){this.stack[this.stack.length-1].children.push(P),this.stack.push(P),this.tokenStack.push([T,z||void 0]),P.position={start:Jn(T.start),end:void 0}}function u(P){return T;function T(z){P&&P.call(this,z),d.call(this,z)}}function d(P,T){const z=this.stack.pop(),V=this.tokenStack.pop();if(!V)throw new Error("Cannot close `"+P.type+"` ("+ra({start:P.start,end:P.end})+"): it’s not open");V[0].type!==P.type&&(T?T.call(this,P,V[0]):(V[1]||Ox).call(this,P,V[0])),z.position.end=Jn(P.end)}function f(){return Hh(this.stack.pop())}function p(){this.data.expectingFirstListItemValue=!0}function h(P){if(this.data.expectingFirstListItemValue){const T=this.stack[this.stack.length-2];T.start=Number.parseInt(this.sliceSerialize(P),10),this.data.expectingFirstListItemValue=void 0}}function x(){const P=this.resume(),T=this.stack[this.stack.length-1];T.lang=P}function b(){const P=this.resume(),T=this.stack[this.stack.length-1];T.meta=P}function k(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function g(){const P=this.resume(),T=this.stack[this.stack.length-1];T.value=P.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function m(){const P=this.resume(),T=this.stack[this.stack.length-1];T.value=P.replace(/(\r?\n|\r)$/g,"")}function y(P){const T=this.resume(),z=this.stack[this.stack.length-1];z.label=T,z.identifier=ln(this.sliceSerialize(P)).toLowerCase()}function v(){const P=this.resume(),T=this.stack[this.stack.length-1];T.title=P}function E(){const P=this.resume(),T=this.stack[this.stack.length-1];T.url=P}function w(P){const T=this.stack[this.stack.length-1];if(!T.depth){const z=this.sliceSerialize(P).length;T.depth=z}}function I(){this.data.setextHeadingSlurpLineEnding=!0}function N(P){const T=this.stack[this.stack.length-1];T.depth=this.sliceSerialize(P).codePointAt(0)===61?1:2}function R(){this.data.setextHeadingSlurpLineEnding=void 0}function _(P){const z=this.stack[this.stack.length-1].children;let V=z[z.length-1];(!V||V.type!=="text")&&(V=ae(),V.position={start:Jn(P.start),end:void 0},z.push(V)),this.stack.push(V)}function j(P){const T=this.stack.pop();T.value+=this.sliceSerialize(P),T.position.end=Jn(P.end)}function U(P){const T=this.stack[this.stack.length-1];if(this.data.atHardBreak){const z=T.children[T.children.length-1];z.position.end=Jn(P.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&t.canContainEols.includes(T.type)&&(_.call(this,P),j.call(this,P))}function G(){this.data.atHardBreak=!0}function q(){const P=this.resume(),T=this.stack[this.stack.length-1];T.value=P}function H(){const P=this.resume(),T=this.stack[this.stack.length-1];T.value=P}function le(){const P=this.resume(),T=this.stack[this.stack.length-1];T.value=P}function Q(){const P=this.stack[this.stack.length-1];if(this.data.inReference){const T=this.data.referenceType||"shortcut";P.type+="Reference",P.referenceType=T,delete P.url,delete P.title}else delete P.identifier,delete P.label;this.data.referenceType=void 0}function L(){const P=this.stack[this.stack.length-1];if(this.data.inReference){const T=this.data.referenceType||"shortcut";P.type+="Reference",P.referenceType=T,delete P.url,delete P.title}else delete P.identifier,delete P.label;this.data.referenceType=void 0}function B(P){const T=this.sliceSerialize(P),z=this.stack[this.stack.length-2];z.label=VM(T),z.identifier=ln(T).toLowerCase()}function S(){const P=this.stack[this.stack.length-1],T=this.resume(),z=this.stack[this.stack.length-1];if(this.data.inReference=!0,z.type==="link"){const V=P.children;z.children=V}else z.alt=T}function Y(){const P=this.resume(),T=this.stack[this.stack.length-1];T.url=P}function ee(){const P=this.resume(),T=this.stack[this.stack.length-1];T.title=P}function A(){this.data.inReference=void 0}function ue(){this.data.referenceType="collapsed"}function Se(P){const T=this.resume(),z=this.stack[this.stack.length-1];z.label=T,z.identifier=ln(this.sliceSerialize(P)).toLowerCase(),this.data.referenceType="full"}function se(P){this.data.characterReferenceType=P.type}function Ee(P){const T=this.sliceSerialize(P),z=this.data.characterReferenceType;let V;z?(V=i2(T,z==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):V=Wh(T);const X=this.stack[this.stack.length-1];X.value+=V}function $e(P){const T=this.stack.pop();T.position.end=Jn(P.end)}function Ye(P){j.call(this,P);const T=this.stack[this.stack.length-1];T.url=this.sliceSerialize(P)}function pe(P){j.call(this,P);const T=this.stack[this.stack.length-1];T.url="mailto:"+this.sliceSerialize(P)}function et(){return{type:"blockquote",children:[],position:void 0}}function St(){return{type:"code",lang:null,meta:null,value:"",position:void 0}}function Ge(){return{type:"inlineCode",value:"",position:void 0}}function Gt(){return{type:"definition",identifier:"",label:null,title:null,url:"",position:void 0}}function jr(){return{type:"emphasis",children:[],position:void 0}}function Me(){return{type:"heading",depth:0,children:[],position:void 0}}function Cn(){return{type:"break",position:void 0}}function qt(){return{type:"html",value:"",position:void 0}}function D(){return{type:"image",title:null,url:"",alt:null,position:void 0}}function ge(){return{type:"link",title:null,url:"",children:[],position:void 0}}function re(P){return{type:"list",ordered:P.type==="listOrdered",start:null,spread:P._spread,children:[],position:void 0}}function xe(P){return{type:"listItem",spread:P._spread,checked:null,children:[],position:void 0}}function M(){return{type:"paragraph",children:[],position:void 0}}function $(){return{type:"strong",children:[],position:void 0}}function ae(){return{type:"text",value:"",position:void 0}}function ce(){return{type:"thematicBreak",position:void 0}}}function Jn(e){return{line:e.line,column:e.column,offset:e.offset}}function g2(e,t){let n=-1;for(;++n<t.length;){const r=t[n];Array.isArray(r)?g2(e,r):GM(e,r)}}function GM(e,t){let n;for(n in t)if(m2.call(t,n))switch(n){case"canContainEols":{const r=t[n];r&&e[n].push(...r);break}case"transforms":{const r=t[n];r&&e[n].push(...r);break}case"afterExit":case"beforeEnter":{const r=t[n];r&&e[n].push(r);break}case"enter":case"exit":{const r=t[n];r&&Object.assign(e[n],r);break}}}function Ox(e,t){throw e?new Error("Cannot close `"+e.type+"` ("+ra({start:e.start,end:e.end})+"): a different token (`"+t.type+"`, "+ra({start:t.start,end:t.end})+") is open"):new Error("Cannot close document, a token (`"+t.type+"`, "+ra({start:t.start,end:t.end})+") is still open")}function qM(e){const t=this;t.parser=n;function n(r){return HM(r,{...t.data("settings"),...e,extensions:t.data("micromarkExtensions")||[],mdastExtensions:t.data("fromMarkdownExtensions")||[]})}}function KM(e,t){const n={type:"element",tagName:"blockquote",properties:{},children:e.wrap(e.all(t),!0)};return e.patch(t,n),e.applyData(t,n)}function YM(e,t){const n={type:"element",tagName:"br",properties:{},children:[]};return e.patch(t,n),[e.applyData(t,n),{type:"text",value:`
`}]}function XM(e,t){const n=t.value?t.value+`
`:"",r={},i=t.lang?t.lang.split(/\s+/):[];i.length>0&&(r.className=["language-"+i[0]]);let s={type:"element",tagName:"code",properties:r,children:[{type:"text",value:n}]};return t.meta&&(s.data={meta:t.meta}),e.patch(t,s),s=e.applyData(t,s),s={type:"element",tagName:"pre",properties:{},children:[s]},e.patch(t,s),s}function QM(e,t){const n={type:"element",tagName:"del",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function ZM(e,t){const n={type:"element",tagName:"em",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function JM(e,t){const n=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",r=String(t.identifier).toUpperCase(),i=vs(r.toLowerCase()),s=e.footnoteOrder.indexOf(r);let a,o=e.footnoteCounts.get(r);o===void 0?(o=0,e.footnoteOrder.push(r),a=e.footnoteOrder.length):a=s+1,o+=1,e.footnoteCounts.set(r,o);const l={type:"element",tagName:"a",properties:{href:"#"+n+"fn-"+i,id:n+"fnref-"+i+(o>1?"-"+o:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(a)}]};e.patch(t,l);const u={type:"element",tagName:"sup",properties:{},children:[l]};return e.patch(t,u),e.applyData(t,u)}function eF(e,t){const n={type:"element",tagName:"h"+t.depth,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function tF(e,t){if(e.options.allowDangerousHtml){const n={type:"raw",value:t.value};return e.patch(t,n),e.applyData(t,n)}}function y2(e,t){const n=t.referenceType;let r="]";if(n==="collapsed"?r+="[]":n==="full"&&(r+="["+(t.label||t.identifier)+"]"),t.type==="imageReference")return[{type:"text",value:"!["+t.alt+r}];const i=e.all(t),s=i[0];s&&s.type==="text"?s.value="["+s.value:i.unshift({type:"text",value:"["});const a=i[i.length-1];return a&&a.type==="text"?a.value+=r:i.push({type:"text",value:r}),i}function nF(e,t){const n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return y2(e,t);const i={src:vs(r.url||""),alt:t.alt};r.title!==null&&r.title!==void 0&&(i.title=r.title);const s={type:"element",tagName:"img",properties:i,children:[]};return e.patch(t,s),e.applyData(t,s)}function rF(e,t){const n={src:vs(t.url)};t.alt!==null&&t.alt!==void 0&&(n.alt=t.alt),t.title!==null&&t.title!==void 0&&(n.title=t.title);const r={type:"element",tagName:"img",properties:n,children:[]};return e.patch(t,r),e.applyData(t,r)}function iF(e,t){const n={type:"text",value:t.value.replace(/\r?\n|\r/g," ")};e.patch(t,n);const r={type:"element",tagName:"code",properties:{},children:[n]};return e.patch(t,r),e.applyData(t,r)}function sF(e,t){const n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return y2(e,t);const i={href:vs(r.url||"")};r.title!==null&&r.title!==void 0&&(i.title=r.title);const s={type:"element",tagName:"a",properties:i,children:e.all(t)};return e.patch(t,s),e.applyData(t,s)}function aF(e,t){const n={href:vs(t.url)};t.title!==null&&t.title!==void 0&&(n.title=t.title);const r={type:"element",tagName:"a",properties:n,children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function oF(e,t,n){const r=e.all(t),i=n?lF(n):x2(t),s={},a=[];if(typeof t.checked=="boolean"){const d=r[0];let f;d&&d.type==="element"&&d.tagName==="p"?f=d:(f={type:"element",tagName:"p",properties:{},children:[]},r.unshift(f)),f.children.length>0&&f.children.unshift({type:"text",value:" "}),f.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:t.checked,disabled:!0},children:[]}),s.className=["task-list-item"]}let o=-1;for(;++o<r.length;){const d=r[o];(i||o!==0||d.type!=="element"||d.tagName!=="p")&&a.push({type:"text",value:`
`}),d.type==="element"&&d.tagName==="p"&&!i?a.push(...d.children):a.push(d)}const l=r[r.length-1];l&&(i||l.type!=="element"||l.tagName!=="p")&&a.push({type:"text",value:`
`});const u={type:"element",tagName:"li",properties:s,children:a};return e.patch(t,u),e.applyData(t,u)}function lF(e){let t=!1;if(e.type==="list"){t=e.spread||!1;const n=e.children;let r=-1;for(;!t&&++r<n.length;)t=x2(n[r])}return t}function x2(e){const t=e.spread;return t??e.children.length>1}function uF(e,t){const n={},r=e.all(t);let i=-1;for(typeof t.start=="number"&&t.start!==1&&(n.start=t.start);++i<r.length;){const a=r[i];if(a.type==="element"&&a.tagName==="li"&&a.properties&&Array.isArray(a.properties.className)&&a.properties.className.includes("task-list-item")){n.className=["contains-task-list"];break}}const s={type:"element",tagName:t.ordered?"ol":"ul",properties:n,children:e.wrap(r,!0)};return e.patch(t,s),e.applyData(t,s)}function cF(e,t){const n={type:"element",tagName:"p",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function dF(e,t){const n={type:"root",children:e.wrap(e.all(t))};return e.patch(t,n),e.applyData(t,n)}function fF(e,t){const n={type:"element",tagName:"strong",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function pF(e,t){const n=e.all(t),r=n.shift(),i=[];if(r){const a={type:"element",tagName:"thead",properties:{},children:e.wrap([r],!0)};e.patch(t.children[0],a),i.push(a)}if(n.length>0){const a={type:"element",tagName:"tbody",properties:{},children:e.wrap(n,!0)},o=Uh(t.children[1]),l=Xk(t.children[t.children.length-1]);o&&l&&(a.position={start:o,end:l}),i.push(a)}const s={type:"element",tagName:"table",properties:{},children:e.wrap(i,!0)};return e.patch(t,s),e.applyData(t,s)}function hF(e,t,n){const r=n?n.children:void 0,s=(r?r.indexOf(t):1)===0?"th":"td",a=n&&n.type==="table"?n.align:void 0,o=a?a.length:t.children.length;let l=-1;const u=[];for(;++l<o;){const f=t.children[l],p={},h=a?a[l]:void 0;h&&(p.align=h);let x={type:"element",tagName:s,properties:p,children:[]};f&&(x.children=e.all(f),e.patch(f,x),x=e.applyData(f,x)),u.push(x)}const d={type:"element",tagName:"tr",properties:{},children:e.wrap(u,!0)};return e.patch(t,d),e.applyData(t,d)}function mF(e,t){const n={type:"element",tagName:"td",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}const zx=9,Ux=32;function gF(e){const t=String(e),n=/\r?\n|\r/g;let r=n.exec(t),i=0;const s=[];for(;r;)s.push(Bx(t.slice(i,r.index),i>0,!0),r[0]),i=r.index+r[0].length,r=n.exec(t);return s.push(Bx(t.slice(i),i>0,!1)),s.join("")}function Bx(e,t,n){let r=0,i=e.length;if(t){let s=e.codePointAt(r);for(;s===zx||s===Ux;)r++,s=e.codePointAt(r)}if(n){let s=e.codePointAt(i-1);for(;s===zx||s===Ux;)i--,s=e.codePointAt(i-1)}return i>r?e.slice(r,i):""}function yF(e,t){const n={type:"text",value:gF(String(t.value))};return e.patch(t,n),e.applyData(t,n)}function xF(e,t){const n={type:"element",tagName:"hr",properties:{},children:[]};return e.patch(t,n),e.applyData(t,n)}const vF={blockquote:KM,break:YM,code:XM,delete:QM,emphasis:ZM,footnoteReference:JM,heading:eF,html:tF,imageReference:nF,image:rF,inlineCode:iF,linkReference:sF,link:aF,listItem:oF,list:uF,paragraph:cF,root:dF,strong:fF,table:pF,tableCell:mF,tableRow:hF,text:yF,thematicBreak:xF,toml:No,yaml:No,definition:No,footnoteDefinition:No};function No(){}const v2=-1,Ru=0,sa=1,Ql=2,qh=3,Kh=4,Yh=5,Xh=6,b2=7,w2=8,{defineProperty:bF}=Object,k2=typeof self=="object"?self:globalThis,Vx=(e,t)=>{switch(e){case"Function":case"SharedWorker":case"Worker":case"eval":case"setInterval":case"setTimeout":throw new TypeError("unable to deserialize "+e)}return new k2[e](t)},wF=(e,t)=>{const n=(i,s)=>(e.set(s,i),i),r=i=>{if(e.has(i))return e.get(i);const[s,a]=t[i];switch(s){case Ru:case v2:return n(a,i);case sa:{const o=n([],i);for(const l of a)o.push(r(l));return o}case Ql:{const o=n({},i);for(const[l,u]of a){const d=r(l),f=r(u);d==="__proto__"?bF(o,d,{value:f,configurable:!0,enumerable:!0,writable:!0}):o[d]=f}return o}case qh:return n(new Date(a),i);case Kh:{const{source:o,flags:l}=a;return n(new RegExp(o,l),i)}case Yh:{const o=n(new Map,i);for(const[l,u]of a)o.set(r(l),r(u));return o}case Xh:{const o=n(new Set,i);for(const l of a)o.add(r(l));return o}case b2:{const{name:o,message:l}=a;return n(typeof k2[o]=="function"?Vx(o,l):new Error(l),i)}case w2:return n(BigInt(a),i);case"BigInt":return n(Object(BigInt(a)),i);case"ArrayBuffer":return n(new Uint8Array(a).buffer,a);case"DataView":{const{buffer:o}=new Uint8Array(a);return n(new DataView(o),a)}case"-0":return-0}return n(Vx(s,a),i)};return r},$x=e=>wF(new Map,e)(0),Vr="",{toString:kF}={},{keys:SF,is:EF}=Object,Ps=e=>{const t=typeof e;if(t!=="object"||!e)return[Ru,t];const n=kF.call(e).slice(8,-1);switch(n){case"Array":return[sa,Vr];case"Object":return[Ql,Vr];case"Date":return[qh,Vr];case"RegExp":return[Kh,Vr];case"Map":return[Yh,Vr];case"Set":return[Xh,Vr];case"DataView":return[sa,n]}return n.includes("Array")?[sa,n]:e instanceof Error?[b2,e.name||"Error"]:[Ql,n]},Po=([e,t])=>e===Ru&&(t==="function"||t==="symbol"),CF=(e,t,n,r)=>{const i=(a,o)=>{const l=r.push(a)-1;return n.set(o,l),l},s=a=>{if(n.has(a))return n.get(a);let[o,l]=Ps(a);switch(o){case Ru:{let d=a;switch(l){case"bigint":o=w2,d=a.toString();break;case"number":if(!a&&EF(a,-0))return r.push(["-0"])-1;break;case"function":case"symbol":if(e)throw new TypeError("unable to serialize "+l);d=null;break;case"undefined":return i([v2],a)}return i([o,d],a)}case sa:{if(l){let p=a;return l==="DataView"?p=new Uint8Array(a.buffer):l==="ArrayBuffer"&&(p=new Uint8Array(a)),i([l,[...p]],a)}const d=[],f=i([o,d],a);for(const p of a)d.push(s(p));return f}case Ql:{if(l)switch(l){case"BigInt":return i([l,a.toString()],a);case"Boolean":case"Number":case"String":return i([l,a.valueOf()],a)}if(t&&"toJSON"in a)return s(a.toJSON());const d=[],f=i([o,d],a);for(const p of SF(a))(e||!Po(Ps(a[p])))&&d.push([s(p),s(a[p])]);return f}case qh:return i([o,isNaN(a.getTime())?Vr:a.toISOString()],a);case Kh:{const{source:d,flags:f}=a;return i([o,{source:d,flags:f}],a)}case Yh:{const d=[],f=i([o,d],a);for(const[p,h]of a)(e||!(Po(Ps(p))||Po(Ps(h))))&&d.push([s(p),s(h)]);return f}case Xh:{const d=[],f=i([o,d],a);for(const p of a)(e||!Po(Ps(p)))&&d.push(s(p));return f}}const{message:u}=a;return i([o,{name:l,message:u}],a)};return s},Hx=(e,{json:t,lossy:n}={})=>{const r=[];return CF(!(t||n),!!t,new Map,r)(e),r},Zl=typeof structuredClone=="function"?(e,t)=>t&&("json"in t||"lossy"in t)?$x(Hx(e,t)):structuredClone(e):(e,t)=>$x(Hx(e,t));function TF(e,t){const n=[{type:"text",value:"↩"}];return t>1&&n.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(t)}]}),n}function _F(e,t){return"Back to reference "+(e+1)+(t>1?"-"+t:"")}function AF(e){const t=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",n=e.options.footnoteBackContent||TF,r=e.options.footnoteBackLabel||_F,i=e.options.footnoteLabel||"Footnotes",s=e.options.footnoteLabelTagName||"h2",a=e.options.footnoteLabelProperties||{className:["sr-only"]},o=[];let l=-1;for(;++l<e.footnoteOrder.length;){const u=e.footnoteById.get(e.footnoteOrder[l]);if(!u)continue;const d=e.all(u),f=String(u.identifier).toUpperCase(),p=vs(f.toLowerCase());let h=0;const x=[],b=e.footnoteCounts.get(f);for(;b!==void 0&&++h<=b;){x.length>0&&x.push({type:"text",value:" "});let m=typeof n=="string"?n:n(l,h);typeof m=="string"&&(m={type:"text",value:m}),x.push({type:"element",tagName:"a",properties:{href:"#"+t+"fnref-"+p+(h>1?"-"+h:""),dataFootnoteBackref:"",ariaLabel:typeof r=="string"?r:r(l,h),className:["data-footnote-backref"]},children:Array.isArray(m)?m:[m]})}const k=d[d.length-1];if(k&&k.type==="element"&&k.tagName==="p"){const m=k.children[k.children.length-1];m&&m.type==="text"?m.value+=" ":k.children.push({type:"text",value:" "}),k.children.push(...x)}else d.push(...x);const g={type:"element",tagName:"li",properties:{id:t+"fn-"+p},children:e.wrap(d,!0)};e.patch(u,g),o.push(g)}if(o.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:s,properties:{...Zl(a),id:"footnote-label"},children:[{type:"text",value:i}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:e.wrap(o,!0)},{type:"text",value:`
`}]}}const Lu=function(e){if(e==null)return jF;if(typeof e=="function")return Du(e);if(typeof e=="object")return Array.isArray(e)?IF(e):NF(e);if(typeof e=="string")return PF(e);throw new Error("Expected function, string, or object as test")};function IF(e){const t=[];let n=-1;for(;++n<e.length;)t[n]=Lu(e[n]);return Du(r);function r(...i){let s=-1;for(;++s<t.length;)if(t[s].apply(this,i))return!0;return!1}}function NF(e){const t=e;return Du(n);function n(r){const i=r;let s;for(s in e)if(i[s]!==t[s])return!1;return!0}}function PF(e){return Du(t);function t(n){return n&&n.type===e}}function Du(e){return t;function t(n,r,i){return!!(RF(n)&&e.call(this,n,typeof r=="number"?r:void 0,i||void 0))}}function jF(){return!0}function RF(e){return e!==null&&typeof e=="object"&&"type"in e}const S2=[],LF=!0,If=!1,DF="skip";function E2(e,t,n,r){let i;typeof t=="function"&&typeof n!="function"?(r=n,n=t):i=t;const s=Lu(i),a=r?-1:1;o(e,void 0,[])();function o(l,u,d){const f=l&&typeof l=="object"?l:{};if(typeof f.type=="string"){const h=typeof f.tagName=="string"?f.tagName:typeof f.name=="string"?f.name:void 0;Object.defineProperty(p,"name",{value:"node ("+(l.type+(h?"<"+h+">":""))+")"})}return p;function p(){let h=S2,x,b,k;if((!t||s(l,u,d[d.length-1]||void 0))&&(h=MF(n(l,d)),h[0]===If))return h;if("children"in l&&l.children){const g=l;if(g.children&&h[0]!==DF)for(b=(r?g.children.length:-1)+a,k=d.concat(g);b>-1&&b<g.children.length;){const m=g.children[b];if(x=o(m,b,k)(),x[0]===If)return x;b=typeof x[1]=="number"?x[1]:b+a}}return h}}}function MF(e){return Array.isArray(e)?e:typeof e=="number"?[LF,e]:e==null?S2:[e]}function Qh(e,t,n,r){let i,s,a;typeof t=="function"&&typeof n!="function"?(s=void 0,a=t,i=n):(s=t,a=n,i=r),E2(e,s,o,i);function o(l,u){const d=u[u.length-1],f=d?d.children.indexOf(l):void 0;return a(l,f,d)}}const Nf={}.hasOwnProperty,FF={};function OF(e,t){const n=t||FF,r=new Map,i=new Map,s=new Map,a={...vF,...n.handlers},o={all:u,applyData:UF,definitionById:r,footnoteById:i,footnoteCounts:s,footnoteOrder:[],handlers:a,one:l,options:n,patch:zF,wrap:VF};return Qh(e,function(d){if(d.type==="definition"||d.type==="footnoteDefinition"){const f=d.type==="definition"?r:i,p=String(d.identifier).toUpperCase();f.has(p)||f.set(p,d)}}),o;function l(d,f){const p=d.type,h=o.handlers[p];if(Nf.call(o.handlers,p)&&h)return h(o,d,f);if(o.options.passThrough&&o.options.passThrough.includes(p)){if("children"in d){const{children:b,...k}=d,g=Zl(k);return g.children=o.all(d),g}return Zl(d)}return(o.options.unknownHandler||BF)(o,d,f)}function u(d){const f=[];if("children"in d){const p=d.children;let h=-1;for(;++h<p.length;){const x=o.one(p[h],d);if(x){if(h&&p[h-1].type==="break"&&(!Array.isArray(x)&&x.type==="text"&&(x.value=Wx(x.value)),!Array.isArray(x)&&x.type==="element")){const b=x.children[0];b&&b.type==="text"&&(b.value=Wx(b.value))}Array.isArray(x)?f.push(...x):f.push(x)}}}return f}}function zF(e,t){e.position&&(t.position=_D(e))}function UF(e,t){let n=t;if(e&&e.data){const r=e.data.hName,i=e.data.hChildren,s=e.data.hProperties;if(typeof r=="string")if(n.type==="element")n.tagName=r;else{const a="children"in n?n.children:[n];n={type:"element",tagName:r,properties:{},children:a}}n.type==="element"&&s&&Object.assign(n.properties,Zl(s)),"children"in n&&n.children&&i!==null&&i!==void 0&&(n.children=i)}return n}function BF(e,t){const n=t.data||{},r="value"in t&&!(Nf.call(n,"hProperties")||Nf.call(n,"hChildren"))?{type:"text",value:t.value}:{type:"element",tagName:"div",properties:{},children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function VF(e,t){const n=[];let r=-1;for(t&&n.push({type:"text",value:`
`});++r<e.length;)r&&n.push({type:"text",value:`
`}),n.push(e[r]);return t&&e.length>0&&n.push({type:"text",value:`
`}),n}function Wx(e){let t=0,n=e.charCodeAt(t);for(;n===9||n===32;)t++,n=e.charCodeAt(t);return e.slice(t)}function Gx(e,t){const n=OF(e,t),r=n.one(e,void 0),i=AF(n),s=Array.isArray(r)?{type:"root",children:r}:r||{type:"root",children:[]};return i&&s.children.push({type:"text",value:`
`},i),s}function $F(e,t){return e&&"run"in e?async function(n,r){const i=Gx(n,{file:r,...t});await e.run(i,r)}:function(n,r){return Gx(n,{file:r,...e||t})}}function qx(e){if(e)throw e}var sl=Object.prototype.hasOwnProperty,C2=Object.prototype.toString,Kx=Object.defineProperty,Yx=Object.getOwnPropertyDescriptor,Xx=function(t){return typeof Array.isArray=="function"?Array.isArray(t):C2.call(t)==="[object Array]"},Qx=function(t){if(!t||C2.call(t)!=="[object Object]")return!1;var n=sl.call(t,"constructor"),r=t.constructor&&t.constructor.prototype&&sl.call(t.constructor.prototype,"isPrototypeOf");if(t.constructor&&!n&&!r)return!1;var i;for(i in t);return typeof i>"u"||sl.call(t,i)},Zx=function(t,n){Kx&&n.name==="__proto__"?Kx(t,n.name,{enumerable:!0,configurable:!0,value:n.newValue,writable:!0}):t[n.name]=n.newValue},Jx=function(t,n){if(n==="__proto__")if(sl.call(t,n)){if(Yx)return Yx(t,n).value}else return;return t[n]},HF=function e(){var t,n,r,i,s,a,o=arguments[0],l=1,u=arguments.length,d=!1;for(typeof o=="boolean"&&(d=o,o=arguments[1]||{},l=2),(o==null||typeof o!="object"&&typeof o!="function")&&(o={});l<u;++l)if(t=arguments[l],t!=null)for(n in t)r=Jx(o,n),i=Jx(t,n),o!==i&&(d&&i&&(Qx(i)||(s=Xx(i)))?(s?(s=!1,a=r&&Xx(r)?r:[]):a=r&&Qx(r)?r:{},Zx(o,{name:n,newValue:e(d,a,i)})):typeof i<"u"&&Zx(o,{name:n,newValue:i}));return o};const zc=Jl(HF);function Pf(e){if(typeof e!="object"||e===null)return!1;const t=Object.getPrototypeOf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function WF(){const e=[],t={run:n,use:r};return t;function n(...i){let s=-1;const a=i.pop();if(typeof a!="function")throw new TypeError("Expected function as last argument, not "+a);o(null,...i);function o(l,...u){const d=e[++s];let f=-1;if(l){a(l);return}for(;++f<i.length;)(u[f]===null||u[f]===void 0)&&(u[f]=i[f]);i=u,d?GF(d,o)(...u):a(null,...u)}}function r(i){if(typeof i!="function")throw new TypeError("Expected `middelware` to be a function, not "+i);return e.push(i),t}}function GF(e,t){let n;return r;function r(...a){const o=e.length>a.length;let l;o&&a.push(i);try{l=e.apply(this,a)}catch(u){const d=u;if(o&&n)throw d;return i(d)}o||(l&&l.then&&typeof l.then=="function"?l.then(s,i):l instanceof Error?i(l):s(l))}function i(a,...o){n||(n=!0,t(a,...o))}function s(a){i(null,a)}}const hn={basename:qF,dirname:KF,extname:YF,join:XF,sep:"/"};function qF(e,t){if(t!==void 0&&typeof t!="string")throw new TypeError('"ext" argument must be a string');ro(e);let n=0,r=-1,i=e.length,s;if(t===void 0||t.length===0||t.length>e.length){for(;i--;)if(e.codePointAt(i)===47){if(s){n=i+1;break}}else r<0&&(s=!0,r=i+1);return r<0?"":e.slice(n,r)}if(t===e)return"";let a=-1,o=t.length-1;for(;i--;)if(e.codePointAt(i)===47){if(s){n=i+1;break}}else a<0&&(s=!0,a=i+1),o>-1&&(e.codePointAt(i)===t.codePointAt(o--)?o<0&&(r=i):(o=-1,r=a));return n===r?r=a:r<0&&(r=e.length),e.slice(n,r)}function KF(e){if(ro(e),e.length===0)return".";let t=-1,n=e.length,r;for(;--n;)if(e.codePointAt(n)===47){if(r){t=n;break}}else r||(r=!0);return t<0?e.codePointAt(0)===47?"/":".":t===1&&e.codePointAt(0)===47?"//":e.slice(0,t)}function YF(e){ro(e);let t=e.length,n=-1,r=0,i=-1,s=0,a;for(;t--;){const o=e.codePointAt(t);if(o===47){if(a){r=t+1;break}continue}n<0&&(a=!0,n=t+1),o===46?i<0?i=t:s!==1&&(s=1):i>-1&&(s=-1)}return i<0||n<0||s===0||s===1&&i===n-1&&i===r+1?"":e.slice(i,n)}function XF(...e){let t=-1,n;for(;++t<e.length;)ro(e[t]),e[t]&&(n=n===void 0?e[t]:n+"/"+e[t]);return n===void 0?".":QF(n)}function QF(e){ro(e);const t=e.codePointAt(0)===47;let n=ZF(e,!t);return n.length===0&&!t&&(n="."),n.length>0&&e.codePointAt(e.length-1)===47&&(n+="/"),t?"/"+n:n}function ZF(e,t){let n="",r=0,i=-1,s=0,a=-1,o,l;for(;++a<=e.length;){if(a<e.length)o=e.codePointAt(a);else{if(o===47)break;o=47}if(o===47){if(!(i===a-1||s===1))if(i!==a-1&&s===2){if(n.length<2||r!==2||n.codePointAt(n.length-1)!==46||n.codePointAt(n.length-2)!==46){if(n.length>2){if(l=n.lastIndexOf("/"),l!==n.length-1){l<0?(n="",r=0):(n=n.slice(0,l),r=n.length-1-n.lastIndexOf("/")),i=a,s=0;continue}}else if(n.length>0){n="",r=0,i=a,s=0;continue}}t&&(n=n.length>0?n+"/..":"..",r=2)}else n.length>0?n+="/"+e.slice(i+1,a):n=e.slice(i+1,a),r=a-i-1;i=a,s=0}else o===46&&s>-1?s++:s=-1}return n}function ro(e){if(typeof e!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}const JF={cwd:e4};function e4(){return"/"}function jf(e){return!!(e!==null&&typeof e=="object"&&"href"in e&&e.href&&"protocol"in e&&e.protocol&&e.auth===void 0)}function t4(e){if(typeof e=="string")e=new URL(e);else if(!jf(e)){const t=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+e+"`");throw t.code="ERR_INVALID_ARG_TYPE",t}if(e.protocol!=="file:"){const t=new TypeError("The URL must be of scheme file");throw t.code="ERR_INVALID_URL_SCHEME",t}return n4(e)}function n4(e){if(e.hostname!==""){const r=new TypeError('File URL host must be "localhost" or empty on darwin');throw r.code="ERR_INVALID_FILE_URL_HOST",r}const t=e.pathname;let n=-1;for(;++n<t.length;)if(t.codePointAt(n)===37&&t.codePointAt(n+1)===50){const r=t.codePointAt(n+2);if(r===70||r===102){const i=new TypeError("File URL path must not include encoded / characters");throw i.code="ERR_INVALID_FILE_URL_PATH",i}}return decodeURIComponent(t)}const Uc=["history","path","basename","stem","extname","dirname"];class T2{constructor(t){let n;t?jf(t)?n={path:t}:typeof t=="string"||r4(t)?n={value:t}:n=t:n={},this.cwd="cwd"in n?"":JF.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let r=-1;for(;++r<Uc.length;){const s=Uc[r];s in n&&n[s]!==void 0&&n[s]!==null&&(this[s]=s==="history"?[...n[s]]:n[s])}let i;for(i in n)Uc.includes(i)||(this[i]=n[i])}get basename(){return typeof this.path=="string"?hn.basename(this.path):void 0}set basename(t){Vc(t,"basename"),Bc(t,"basename"),this.path=hn.join(this.dirname||"",t)}get dirname(){return typeof this.path=="string"?hn.dirname(this.path):void 0}set dirname(t){e0(this.basename,"dirname"),this.path=hn.join(t||"",this.basename)}get extname(){return typeof this.path=="string"?hn.extname(this.path):void 0}set extname(t){if(Bc(t,"extname"),e0(this.dirname,"extname"),t){if(t.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(t.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=hn.join(this.dirname,this.stem+(t||""))}get path(){return this.history[this.history.length-1]}set path(t){jf(t)&&(t=t4(t)),Vc(t,"path"),this.path!==t&&this.history.push(t)}get stem(){return typeof this.path=="string"?hn.basename(this.path,this.extname):void 0}set stem(t){Vc(t,"stem"),Bc(t,"stem"),this.path=hn.join(this.dirname||"",t+(this.extname||""))}fail(t,n,r){const i=this.message(t,n,r);throw i.fatal=!0,i}info(t,n,r){const i=this.message(t,n,r);return i.fatal=void 0,i}message(t,n,r){const i=new ut(t,n,r);return this.path&&(i.name=this.path+":"+i.name,i.file=this.path),i.fatal=!1,this.messages.push(i),i}toString(t){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(t||void 0).decode(this.value)}}function Bc(e,t){if(e&&e.includes(hn.sep))throw new Error("`"+t+"` cannot be a path: did not expect `"+hn.sep+"`")}function Vc(e,t){if(!e)throw new Error("`"+t+"` cannot be empty")}function e0(e,t){if(!e)throw new Error("Setting `"+t+"` requires `path` to be set too")}function r4(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const i4=function(e){const r=this.constructor.prototype,i=r[e],s=function(){return i.apply(s,arguments)};return Object.setPrototypeOf(s,r),s},s4={}.hasOwnProperty;class Zh extends i4{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=WF()}copy(){const t=new Zh;let n=-1;for(;++n<this.attachers.length;){const r=this.attachers[n];t.use(...r)}return t.data(zc(!0,{},this.namespace)),t}data(t,n){return typeof t=="string"?arguments.length===2?(Wc("data",this.frozen),this.namespace[t]=n,this):s4.call(this.namespace,t)&&this.namespace[t]||void 0:t?(Wc("data",this.frozen),this.namespace=t,this):this.namespace}freeze(){if(this.frozen)return this;const t=this;for(;++this.freezeIndex<this.attachers.length;){const[n,...r]=this.attachers[this.freezeIndex];if(r[0]===!1)continue;r[0]===!0&&(r[0]=void 0);const i=n.call(t,...r);typeof i=="function"&&this.transformers.use(i)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(t){this.freeze();const n=jo(t),r=this.parser||this.Parser;return $c("parse",r),r(String(n),n)}process(t,n){const r=this;return this.freeze(),$c("process",this.parser||this.Parser),Hc("process",this.compiler||this.Compiler),n?i(void 0,n):new Promise(i);function i(s,a){const o=jo(t),l=r.parse(o);r.run(l,o,function(d,f,p){if(d||!f||!p)return u(d);const h=f,x=r.stringify(h,p);l4(x)?p.value=x:p.result=x,u(d,p)});function u(d,f){d||!f?a(d):s?s(f):n(void 0,f)}}}processSync(t){let n=!1,r;return this.freeze(),$c("processSync",this.parser||this.Parser),Hc("processSync",this.compiler||this.Compiler),this.process(t,i),n0("processSync","process",n),r;function i(s,a){n=!0,qx(s),r=a}}run(t,n,r){t0(t),this.freeze();const i=this.transformers;return!r&&typeof n=="function"&&(r=n,n=void 0),r?s(void 0,r):new Promise(s);function s(a,o){const l=jo(n);i.run(t,l,u);function u(d,f,p){const h=f||t;d?o(d):a?a(h):r(void 0,h,p)}}}runSync(t,n){let r=!1,i;return this.run(t,n,s),n0("runSync","run",r),i;function s(a,o){qx(a),i=o,r=!0}}stringify(t,n){this.freeze();const r=jo(n),i=this.compiler||this.Compiler;return Hc("stringify",i),t0(t),i(t,r)}use(t,...n){const r=this.attachers,i=this.namespace;if(Wc("use",this.frozen),t!=null)if(typeof t=="function")l(t,n);else if(typeof t=="object")Array.isArray(t)?o(t):a(t);else throw new TypeError("Expected usable value, not `"+t+"`");return this;function s(u){if(typeof u=="function")l(u,[]);else if(typeof u=="object")if(Array.isArray(u)){const[d,...f]=u;l(d,f)}else a(u);else throw new TypeError("Expected usable value, not `"+u+"`")}function a(u){if(!("plugins"in u)&&!("settings"in u))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");o(u.plugins),u.settings&&(i.settings=zc(!0,i.settings,u.settings))}function o(u){let d=-1;if(u!=null)if(Array.isArray(u))for(;++d<u.length;){const f=u[d];s(f)}else throw new TypeError("Expected a list of plugins, not `"+u+"`")}function l(u,d){let f=-1,p=-1;for(;++f<r.length;)if(r[f][0]===u){p=f;break}if(p===-1)r.push([u,...d]);else if(d.length>0){let[h,...x]=d;const b=r[p][1];Pf(b)&&Pf(h)&&(h=zc(!0,b,h)),r[p]=[u,h,...x]}}}}const a4=new Zh().freeze();function $c(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `parser`")}function Hc(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `compiler`")}function Wc(e,t){if(t)throw new Error("Cannot call `"+e+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function t0(e){if(!Pf(e)||typeof e.type!="string")throw new TypeError("Expected node, got `"+e+"`")}function n0(e,t,n){if(!n)throw new Error("`"+e+"` finished async. Use `"+t+"` instead")}function jo(e){return o4(e)?e:new T2(e)}function o4(e){return!!(e&&typeof e=="object"&&"message"in e&&"messages"in e)}function l4(e){return typeof e=="string"||u4(e)}function u4(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const c4="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",r0=[],i0={allowDangerousHtml:!0},d4=/^(https?|ircs?|mailto|xmpp)$/i,f4=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"className",id:"remove-classname"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function p4(e){const t=h4(e),n=m4(e);return g4(t.runSync(t.parse(n),n),e)}function h4(e){const t=e.rehypePlugins||r0,n=e.remarkPlugins||r0,r=e.remarkRehypeOptions?{...e.remarkRehypeOptions,...i0}:i0;return a4().use(qM).use(n).use($F,r).use(t)}function m4(e){const t=e.children||"",n=new T2;return typeof t=="string"&&(n.value=t),n}function g4(e,t){const n=t.allowedElements,r=t.allowElement,i=t.components,s=t.disallowedElements,a=t.skipHtml,o=t.unwrapDisallowed,l=t.urlTransform||y4;for(const d of f4)Object.hasOwn(t,d.from)&&(""+d.from+(d.to?"use `"+d.to+"` instead":"remove it")+c4+d.id,void 0);return Qh(e,u),jD(e,{Fragment:c.Fragment,components:i,ignoreInvalidStyle:!0,jsx:c.jsx,jsxs:c.jsxs,passKeys:!0,passNode:!0});function u(d,f,p){if(d.type==="raw"&&p&&typeof f=="number")return a?p.children.splice(f,1):p.children[f]={type:"text",value:d.value},f;if(d.type==="element"){let h;for(h in Mc)if(Object.hasOwn(Mc,h)&&Object.hasOwn(d.properties,h)){const x=d.properties[h],b=Mc[h];(b===null||b.includes(d.tagName))&&(d.properties[h]=l(String(x||""),h,d))}}if(d.type==="element"){let h=n?!n.includes(d.tagName):s?s.includes(d.tagName):!1;if(!h&&r&&typeof f=="number"&&(h=!r(d,f,p)),h&&p&&typeof f=="number")return o&&d.children?p.children.splice(f,1,...d.children):p.children.splice(f,1),f}}}function y4(e){const t=e.indexOf(":"),n=e.indexOf("?"),r=e.indexOf("#"),i=e.indexOf("/");return t===-1||i!==-1&&t>i||n!==-1&&t>n||r!==-1&&t>r||d4.test(e.slice(0,t))?e:""}function s0(e,t){const n=String(e);if(typeof t!="string")throw new TypeError("Expected character");let r=0,i=n.indexOf(t);for(;i!==-1;)r++,i=n.indexOf(t,i+t.length);return r}function x4(e){if(typeof e!="string")throw new TypeError("Expected a string");return e.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")}function v4(e,t,n){const i=Lu((n||{}).ignore||[]),s=b4(t);let a=-1;for(;++a<s.length;)E2(e,"text",o);function o(u,d){let f=-1,p;for(;++f<d.length;){const h=d[f],x=p?p.children:void 0;if(i(h,x?x.indexOf(h):void 0,p))return;p=h}if(p)return l(u,d)}function l(u,d){const f=d[d.length-1],p=s[a][0],h=s[a][1];let x=0;const k=f.children.indexOf(u);let g=!1,m=[];p.lastIndex=0;let y=p.exec(u.value);for(;y;){const E=y.index,w={index:y.index,input:y.input,stack:[...d,u]};let I=h(...y,w);if(typeof I=="string"&&(I=I.length>0?{type:"text",value:I}:void 0),I===!1)p.lastIndex=E+1;else{if(x!==E&&v({type:"text",value:u.value.slice(x,E)}),Array.isArray(I))for(const N of I)v(N);else I&&v(I);x=E+y[0].length,g=!0}if(!p.global)break;y=p.exec(u.value)}return g?(x<u.value.length&&v({type:"text",value:u.value.slice(x)}),f.children.splice(k,1,...m)):m=[u],k+m.length;function v(E){const w=m[m.length-1];w&&w.type==="text"&&E.type==="text"?w.value+=E.value:m.push(E)}}}function b4(e){if(!Array.isArray(e))throw new TypeError("Expected find and replace tuple or list of tuples");const t=[],n=!e[0]||Array.isArray(e[0])?e:[e];let r=-1;for(;++r<n.length;){const i=n[r];t.push([w4(i[0]),k4(i[1])])}return t}function w4(e){return typeof e=="string"?new RegExp(x4(e),"g"):e}function k4(e){return typeof e=="function"?e:function(){return e}}const Gc="phrasing",qc=["autolink","link","image","label"];function S4(){return{transforms:[N4],enter:{literalAutolink:C4,literalAutolinkEmail:Kc,literalAutolinkHttp:Kc,literalAutolinkWww:Kc},exit:{literalAutolink:I4,literalAutolinkEmail:A4,literalAutolinkHttp:T4,literalAutolinkWww:_4}}}function E4(){return{unsafe:[{character:"@",before:"[+\\-.\\w]",after:"[\\-.\\w]",inConstruct:Gc,notInConstruct:qc},{character:".",before:"[Ww]",after:"[\\-.\\w]",inConstruct:Gc,notInConstruct:qc},{character:":",before:"[ps]",after:"\\/",inConstruct:Gc,notInConstruct:qc}]}}function C4(e){this.enter({type:"link",title:null,url:"",children:[]},e)}function Kc(e){this.config.enter.autolinkProtocol.call(this,e)}function T4(e){this.config.exit.autolinkProtocol.call(this,e)}function _4(e){this.config.exit.data.call(this,e);const t=this.stack[this.stack.length-1];t.type,t.url="http://"+this.sliceSerialize(e)}function A4(e){this.config.exit.autolinkEmail.call(this,e)}function I4(e){this.exit(e)}function N4(e){v4(e,[[/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi,P4],[new RegExp("(?<=^|\\s|\\p{P}|\\p{S})([-.\\w+]+)@([-\\w]+(?:\\.[-\\w]+)+)","gu"),j4]],{ignore:["link","linkReference"]})}function P4(e,t,n,r,i){let s="";if(!_2(i)||(/^w/i.test(t)&&(n=t+n,t="",s="http://"),!R4(n)))return!1;const a=L4(n+r);if(!a[0])return!1;const o={type:"link",title:null,url:s+t+a[0],children:[{type:"text",value:t+a[0]}]};return a[1]?[o,{type:"text",value:a[1]}]:o}function j4(e,t,n,r){return!_2(r,!0)||/[-\d_]$/.test(n)?!1:{type:"link",title:null,url:"mailto:"+t+"@"+n,children:[{type:"text",value:t+"@"+n}]}}function R4(e){const t=e.split(".");return!(t.length<2||t[t.length-1]&&(/_/.test(t[t.length-1])||!/[a-zA-Z\d]/.test(t[t.length-1]))||t[t.length-2]&&(/_/.test(t[t.length-2])||!/[a-zA-Z\d]/.test(t[t.length-2])))}function L4(e){const t=/[!"&'),.:;<>?\]}]+$/.exec(e);if(!t)return[e,void 0];e=e.slice(0,t.index);let n=t[0],r=n.indexOf(")");const i=s0(e,"(");let s=s0(e,")");for(;r!==-1&&i>s;)e+=n.slice(0,r+1),n=n.slice(r+1),r=n.indexOf(")"),s++;return[e,n]}function _2(e,t){const n=e.input.charCodeAt(e.index-1);return(e.index===0||ui(n)||Pu(n))&&(!t||n!==47)}A2.peek=$4;function D4(){this.buffer()}function M4(e){this.enter({type:"footnoteReference",identifier:"",label:""},e)}function F4(){this.buffer()}function O4(e){this.enter({type:"footnoteDefinition",identifier:"",label:"",children:[]},e)}function z4(e){const t=this.resume(),n=this.stack[this.stack.length-1];n.type,n.identifier=ln(this.sliceSerialize(e)).toLowerCase(),n.label=t}function U4(e){this.exit(e)}function B4(e){const t=this.resume(),n=this.stack[this.stack.length-1];n.type,n.identifier=ln(this.sliceSerialize(e)).toLowerCase(),n.label=t}function V4(e){this.exit(e)}function $4(){return"["}function A2(e,t,n,r){const i=n.createTracker(r);let s=i.move("[^");const a=n.enter("footnoteReference"),o=n.enter("reference");return s+=i.move(n.safe(n.associationId(e),{after:"]",before:s})),o(),a(),s+=i.move("]"),s}function H4(){return{enter:{gfmFootnoteCallString:D4,gfmFootnoteCall:M4,gfmFootnoteDefinitionLabelString:F4,gfmFootnoteDefinition:O4},exit:{gfmFootnoteCallString:z4,gfmFootnoteCall:U4,gfmFootnoteDefinitionLabelString:B4,gfmFootnoteDefinition:V4}}}function W4(e){let t=!1;return e&&e.firstLineBlank&&(t=!0),{handlers:{footnoteDefinition:n,footnoteReference:A2},unsafe:[{character:"[",inConstruct:["label","phrasing","reference"]}]};function n(r,i,s,a){const o=s.createTracker(a);let l=o.move("[^");const u=s.enter("footnoteDefinition"),d=s.enter("label");return l+=o.move(s.safe(s.associationId(r),{before:l,after:"]"})),d(),l+=o.move("]:"),r.children&&r.children.length>0&&(o.shift(4),l+=o.move((t?`
`:" ")+s.indentLines(s.containerFlow(r,o.current()),t?I2:G4))),u(),l}}function G4(e,t,n){return t===0?e:I2(e,t,n)}function I2(e,t,n){return(n?"":"    ")+e}const q4=["autolink","destinationLiteral","destinationRaw","reference","titleQuote","titleApostrophe"];Jh.attention=Z4;Jh.peek=J4;function K4(){return{canContainEols:["delete"],enter:{strikethrough:X4},exit:{strikethrough:Q4}}}function Y4(){return{handlers:{delete:Jh},unsafe:[{character:"~",inConstruct:"phrasing",notInConstruct:q4}]}}function X4(e){this.enter({type:"delete",children:[],position:void 0},e)}function Q4(e){this.exit(e)}function Jh(e,t,n,r){const i=n.createTracker(r),s=n.stack.includes("strikethrough")?"~":"~~",a=n.enter("strikethrough");let o=i.move(s);return o+=n.containerPhrasing(e,{...i.current(),before:o,after:"~"}),o+=i.move(s),a(),o}function Z4(){return{construct:"strikethrough",markers:["~"],sizes:[2,1]}}function J4(){return"~"}function eO(e){return e.length}function tO(e,t){const n=t||{},r=(n.align||[]).concat(),i=n.stringLength||eO,s=[],a=[],o=[],l=[];let u=0,d=-1;for(;++d<e.length;){const b=[],k=[];let g=-1;for(e[d].length>u&&(u=e[d].length);++g<e[d].length;){const m=nO(e[d][g]);if(n.alignDelimiters!==!1){const y=i(m);k[g]=y,(l[g]===void 0||y>l[g])&&(l[g]=y)}b.push(m)}a[d]=b,o[d]=k}let f=-1;if(typeof r=="object"&&"length"in r)for(;++f<u;)s[f]=a0(r[f]);else{const b=a0(r);for(;++f<u;)s[f]=b}f=-1;const p=[],h=[];for(;++f<u;){const b=s[f];let k="",g="";b===99?(k=":",g=":"):b===108?k=":":b===114&&(g=":");let m=n.alignDelimiters===!1?1:Math.max(1,l[f]-k.length-g.length);const y=k+"-".repeat(m)+g;n.alignDelimiters!==!1&&(m=k.length+m+g.length,m>l[f]&&(l[f]=m),h[f]=m),p[f]=y}a.splice(1,0,p),o.splice(1,0,h),d=-1;const x=[];for(;++d<a.length;){const b=a[d],k=o[d];f=-1;const g=[];for(;++f<u;){const m=b[f]||"";let y="",v="";if(n.alignDelimiters!==!1){const E=l[f]-(k[f]||0),w=s[f];w===114?y=" ".repeat(E):w===99?E%2?(y=" ".repeat(E/2+.5),v=" ".repeat(E/2-.5)):(y=" ".repeat(E/2),v=y):v=" ".repeat(E)}n.delimiterStart!==!1&&!f&&g.push("|"),n.padding!==!1&&!(n.alignDelimiters===!1&&m==="")&&(n.delimiterStart!==!1||f)&&g.push(" "),n.alignDelimiters!==!1&&g.push(y),g.push(m),n.alignDelimiters!==!1&&g.push(v),n.padding!==!1&&g.push(" "),(n.delimiterEnd!==!1||f!==u-1)&&g.push("|")}x.push(n.delimiterEnd===!1?g.join("").replace(/ +$/,""):g.join(""))}return x.join(`
`)}function nO(e){return e==null?"":String(e)}function a0(e){const t=typeof e=="string"?e.codePointAt(0):0;return t===67||t===99?99:t===76||t===108?108:t===82||t===114?114:0}const rO=Lu(["break","delete","emphasis","footnote","footnoteReference","image","imageReference","inlineCode","inlineMath","link","linkReference","mdxJsxTextElement","mdxTextExpression","strong","text","textDirective"]);function iO(e,t,n,r){const i=n.enter("blockquote"),s=n.createTracker(r);s.move("> "),s.shift(2);const a=n.indentLines(n.containerFlow(e,s.current()),sO);return i(),a}function sO(e,t,n){return">"+(n?"":" ")+e}function aO(e,t){return o0(e,t.inConstruct,!0)&&!o0(e,t.notInConstruct,!1)}function o0(e,t,n){if(typeof t=="string"&&(t=[t]),!t||t.length===0)return n;let r=-1;for(;++r<t.length;)if(e.includes(t[r]))return!0;return!1}function l0(e,t,n,r){let i=-1;for(;++i<n.unsafe.length;){const s=n.unsafe[i];if(s.character===`
`&&!s.before&&!s.after&&aO(n.stack,s))return/[\t ]/.test(r.before)?"":" "}return`\\
`}function oO(e,t){const n=String(e);let r=n.indexOf(t),i=r,s=0,a=0;if(typeof t!="string")throw new TypeError("Expected substring");for(;r!==-1;)r===i?++s>a&&(a=s):s=1,i=r+t.length,r=n.indexOf(t,i);return a}function lO(e,t){return!!(t.options.fences===!1&&e.value&&!e.lang&&/[^\n\r ]/.test(e.value)&&!/^[\t ]*(?:[\n\r]|$)|(?:^|[\n\r])[\t ]*$/.test(e.value))}function uO(e){const t=e.options.fence||"`";if(t!=="`"&&t!=="~")throw new Error("Cannot serialize code with `"+t+"` for `options.fence`, expected `` ` `` or `~`");return t}function cO(e,t,n,r){const i=uO(n),s=e.value||"";if(lO(e,n)){const f=n.enter("codeIndented"),p=n.indentLines(s,dO);return f(),p}const a=n.createTracker(r),o=i.repeat(Math.max(oO(s,i)+1,3)),l=n.enter("codeFenced"),u=i==="`"?"GraveAccent":"Tilde";let d=a.move(o);if(e.lang){const f=n.enter(`codeFencedLang${u}`);d+=a.move(n.safe(e.lang,{before:d,after:" ",encode:["`"],...a.current()})),f()}if(e.lang&&e.meta){const f=n.enter(`codeFencedMeta${u}`);d+=a.move(" "),d+=a.move(n.safe(e.meta,{before:d,after:`
`,encode:["`"],...a.current()})),f()}return d+=a.move(`
`),s&&(d+=a.move(s+`
`)),d+=a.move(o),l(),d}function dO(e,t,n){return(n?"":"    ")+e}function em(e){const t=e.options.quote||'"';if(t!=='"'&&t!=="'")throw new Error("Cannot serialize title with `"+t+"` for `options.quote`, expected `\"`, or `'`");return t}function fO(e,t,n,r){const i=em(n),s=i==='"'?"Quote":"Apostrophe",a=n.enter("definition");let o=n.enter("label");const l=n.createTracker(r);let u=l.move("[");return u+=l.move(n.safe(n.associationId(e),{before:u,after:"]",...l.current()})),u+=l.move("]: "),o(),!e.url||/[\0- \u007F]/.test(e.url)?(o=n.enter("destinationLiteral"),u+=l.move("<"),u+=l.move(n.safe(e.url,{before:u,after:">",...l.current()})),u+=l.move(">")):(o=n.enter("destinationRaw"),u+=l.move(n.safe(e.url,{before:u,after:e.title?" ":`
`,...l.current()}))),o(),e.title&&(o=n.enter(`title${s}`),u+=l.move(" "+i),u+=l.move(n.safe(e.title,{before:u,after:i,...l.current()})),u+=l.move(i),o()),a(),u}function pO(e){const t=e.options.emphasis||"*";if(t!=="*"&&t!=="_")throw new Error("Cannot serialize emphasis with `"+t+"` for `options.emphasis`, expected `*`, or `_`");return t}tm.attention=hO;tm.peek=mO;function tm(e,t,n,r){const i=n.enter("phrasing"),s=n.containerPhrasing({type:"root",children:[e]},r);return i(),s}function hO(e,t){return{construct:"emphasis",markers:pO(t)==="*"?["*","_"]:["_","*"],sizes:[1]}}function mO(e,t,n){return n.options.emphasis||"*"}function gO(e){return"&#x"+e.toString(16).toUpperCase()+";"}function yO(e,t){let n=!1;return Qh(e,function(r){if("value"in r&&/\r?\n|\r/.test(r.value)||r.type==="break")return n=!0,If}),!!((!e.depth||e.depth<3)&&Hh(e)&&(t.options.setext||n))}function xO(e,t,n,r){const i=Math.max(Math.min(6,e.depth||1),1),s=n.createTracker(r);if(yO(e,n)){const f=n.enter("headingSetext"),p=n.enter("phrasing"),h=n.containerPhrasing(e,{...s.current(),before:`
`,after:`
`});return p(),f(),h+`
`+(i===1?"=":"-").repeat(h.length-(Math.max(h.lastIndexOf("\r"),h.lastIndexOf(`
`))+1))}const a="#".repeat(i),o=n.enter("headingAtx"),l=n.enter("phrasing");s.move(a+" ");let u=n.containerPhrasing(e,{before:"# ",after:`
`,...s.current()});const d=u.charCodeAt(0);return(d===9||d===32)&&(u=gO(d)+u.slice(1)),u=u?a+" "+u:a,n.options.closeAtx&&(u+=" "+a),l(),o(),u}N2.peek=vO;function N2(e){return e.value||""}function vO(){return"<"}P2.peek=bO;function P2(e,t,n,r){const i=em(n),s=i==='"'?"Quote":"Apostrophe",a=n.enter("image");let o=n.enter("label");const l=n.createTracker(r);let u=l.move("![");return u+=l.move(n.safe(e.alt,{before:u,after:"]",...l.current()})),u+=l.move("]("),o(),!e.url&&e.title||/[\0- \u007F]/.test(e.url)?(o=n.enter("destinationLiteral"),u+=l.move("<"),u+=l.move(n.safe(e.url,{before:u,after:">",...l.current()})),u+=l.move(">")):(o=n.enter("destinationRaw"),u+=l.move(n.safe(e.url,{before:u,after:e.title?" ":")",...l.current()}))),o(),e.title&&(o=n.enter(`title${s}`),u+=l.move(" "+i),u+=l.move(n.safe(e.title,{before:u,after:i,...l.current()})),u+=l.move(i),o()),u+=l.move(")"),a(),u}function bO(){return"!"}j2.peek=wO;function j2(e,t,n,r){const i=e.referenceType,s=n.enter("imageReference");let a=n.enter("label");const o=n.createTracker(r);let l=o.move("![");const u=n.safe(e.alt,{before:l,after:"]",...o.current()});l+=o.move(u+"]["),a();const d=n.stack;n.stack=d.filter(function(p){return p!=="phrasing"}),a=n.enter("reference");const f=n.safe(n.associationId(e),{before:l,after:"]",...o.current()});return a(),n.stack=d,s(),i==="full"||!u||u!==f?l+=o.move(f+"]"):i==="shortcut"?l=l.slice(0,-1):l+=o.move("]"),l}function wO(){return"!"}R2.peek=kO;function R2(e,t,n){let r=e.value||"",i="`",s=-1;for(;new RegExp("(^|[^`])"+i+"([^`]|$)").test(r);)i+="`";for(/[^\n\r ]/.test(r)&&(/^[\n\r ]/.test(r)&&/[\n\r ]$/.test(r)||/^`|`$/.test(r))&&(r=" "+r+" ");++s<n.unsafe.length;){const a=n.unsafe[s],o=n.compilePattern(a);if(!a.atBreak)continue;let l;for(;l=o.exec(r);){let u=l.index;r.charCodeAt(u)===10&&r.charCodeAt(u-1)===13&&u--,r=r.slice(0,u)+" "+r.slice(l.index+1)}}return i+r+i}function kO(){return"`"}function L2(e,t){const n=Hh(e);return!!(!t.options.resourceLink&&e.url&&!e.title&&e.children&&e.children.length===1&&e.children[0].type==="text"&&(n===e.url||"mailto:"+n===e.url)&&/^[a-z][+\-.a-z]+:/i.test(e.url)&&!/[\0- <>\u007F]/.test(e.url))}D2.peek=SO;function D2(e,t,n,r){const i=em(n),s=i==='"'?"Quote":"Apostrophe",a=n.createTracker(r);if(L2(e,n)){const d=n.stack;n.stack=d.filter(function(h){return h!=="phrasing"});const f=n.enter("autolink");let p=a.move("<");return p+=a.move(n.containerPhrasing(e,{before:p,after:">",...a.current()})),p+=a.move(">"),f(),n.stack=d,p}const o=n.enter("link");let l=n.enter("label"),u=a.move("[");return u+=a.move(n.containerPhrasing(e,{before:u,after:"](",...a.current()})),u+=a.move("]("),l(),!e.url&&e.title||/[\0- \u007F]/.test(e.url)?(l=n.enter("destinationLiteral"),u+=a.move("<"),u+=a.move(n.safe(e.url,{before:u,after:">",...a.current()})),u+=a.move(">")):(l=n.enter("destinationRaw"),u+=a.move(n.safe(e.url,{before:u,after:e.title?" ":")",...a.current()}))),l(),e.title&&(l=n.enter(`title${s}`),u+=a.move(" "+i),u+=a.move(n.safe(e.title,{before:u,after:i,...a.current()})),u+=a.move(i),l()),u+=a.move(")"),o(),u}function SO(e,t,n){return L2(e,n)?"<":"["}M2.peek=EO;function M2(e,t,n,r){const i=e.referenceType,s=n.enter("linkReference");let a=n.enter("label");const o=n.createTracker(r);let l=o.move("[");const u=n.containerPhrasing(e,{before:l,after:"]",...o.current()});l+=o.move(u+"]["),a();const d=n.stack;n.stack=d.filter(function(p){return p!=="phrasing"}),a=n.enter("reference");const f=n.safe(n.associationId(e),{before:l,after:"]",...o.current()});return a(),n.stack=d,s(),i==="full"||!u||u!==f?l+=o.move(f+"]"):i==="shortcut"?l=l.slice(0,-1):l+=o.move("]"),l}function EO(){return"["}function nm(e){const t=e.options.bullet||"*";if(t!=="*"&&t!=="+"&&t!=="-")throw new Error("Cannot serialize items with `"+t+"` for `options.bullet`, expected `*`, `+`, or `-`");return t}function CO(e){const t=nm(e),n=e.options.bulletOther;if(!n)return t==="*"?"-":"*";if(n!=="*"&&n!=="+"&&n!=="-")throw new Error("Cannot serialize items with `"+n+"` for `options.bulletOther`, expected `*`, `+`, or `-`");if(n===t)throw new Error("Expected `bullet` (`"+t+"`) and `bulletOther` (`"+n+"`) to be different");return n}function TO(e){const t=e.options.bulletOrdered||".";if(t!=="."&&t!==")")throw new Error("Cannot serialize items with `"+t+"` for `options.bulletOrdered`, expected `.` or `)`");return t}function F2(e){const t=e.options.rule||"*";if(t!=="*"&&t!=="-"&&t!=="_")throw new Error("Cannot serialize rules with `"+t+"` for `options.rule`, expected `*`, `-`, or `_`");return t}function _O(e,t,n,r){const i=n.enter("list"),s=n.bulletCurrent;let a=e.ordered?TO(n):nm(n);const o=e.ordered?a==="."?")":".":CO(n);let l=t&&n.bulletLastUsed?a===n.bulletLastUsed:!1;if(!e.ordered){const d=e.children?e.children[0]:void 0;if((a==="*"||a==="-")&&d&&(!d.children||!d.children[0])&&n.stack[n.stack.length-1]==="list"&&n.stack[n.stack.length-2]==="listItem"&&n.stack[n.stack.length-3]==="list"&&n.stack[n.stack.length-4]==="listItem"&&n.indexStack[n.indexStack.length-1]===0&&n.indexStack[n.indexStack.length-2]===0&&n.indexStack[n.indexStack.length-3]===0&&(l=!0),F2(n)===a&&d){let f=-1;for(;++f<e.children.length;){const p=e.children[f];if(p&&p.type==="listItem"&&p.children&&p.children[0]&&p.children[0].type==="thematicBreak"){l=!0;break}}}}l&&(a=o),n.bulletCurrent=a;const u=n.containerFlow(e,r);return n.bulletLastUsed=a,n.bulletCurrent=s,i(),u}function AO(e){const t=e.options.listItemIndent||"one";if(t!=="tab"&&t!=="one"&&t!=="mixed")throw new Error("Cannot serialize items with `"+t+"` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`");return t}function IO(e,t,n,r){const i=AO(n);let s=n.bulletCurrent||nm(n);t&&t.type==="list"&&t.ordered&&(s=(typeof t.start=="number"&&t.start>-1?t.start:1)+(n.options.incrementListMarker===!1?0:t.children.indexOf(e))+s);let a=s.length+1;(i==="tab"||i==="mixed"&&(t&&t.type==="list"&&t.spread||e.spread))&&(a=Math.ceil(a/4)*4);const o=n.createTracker(r);o.move(s+" ".repeat(a-s.length)),o.shift(a);const l=n.enter("listItem"),u=n.indentLines(n.containerFlow(e,o.current()),d);return l(),u;function d(f,p,h){return p?(h?"":" ".repeat(a))+f:(h?s:s+" ".repeat(a-s.length))+f}}function NO(e,t,n,r){const i=n.enter("paragraph"),s=n.enter("phrasing"),a=n.containerPhrasing(e,r);return s(),i(),a}function PO(e,t,n,r){if(!e.children.some(function(o){return rO(o)}))return n.containerFlow(e,r);const s=n.enter("phrasing"),a=n.containerPhrasing(e,r);return s(),a}function jO(e){const t=e.options.strong||"*";if(t!=="*"&&t!=="_")throw new Error("Cannot serialize strong with `"+t+"` for `options.strong`, expected `*`, or `_`");return t}rm.attention=RO;rm.peek=LO;function rm(e,t,n,r){const i=n.enter("phrasing"),s=n.containerPhrasing({type:"root",children:[e]},r);return i(),s}function RO(e,t){return{construct:"strong",markers:jO(t)==="*"?["*","_"]:["_","*"],sizes:[2]}}function LO(e,t,n){return n.options.strong||"*"}function DO(e,t,n,r){const i=t?t.children:[],s=i.indexOf(e);return n.safe(e.value,{...r,afterNode:i[s+1],beforeNode:i[s-1]})}function MO(e){const t=e.options.ruleRepetition||3;if(t<3)throw new Error("Cannot serialize rules with repetition `"+t+"` for `options.ruleRepetition`, expected `3` or more");return t}function FO(e,t,n){const r=(F2(n)+(n.options.ruleSpaces?" ":"")).repeat(MO(n));return n.options.ruleSpaces?r.slice(0,-1):r}const O2={blockquote:iO,break:l0,code:cO,definition:fO,emphasis:tm,hardBreak:l0,heading:xO,html:N2,image:P2,imageReference:j2,inlineCode:R2,link:D2,linkReference:M2,list:_O,listItem:IO,paragraph:NO,root:PO,strong:rm,text:DO,thematicBreak:FO};function OO(){return{enter:{table:zO,tableData:u0,tableHeader:u0,tableRow:BO},exit:{codeText:VO,table:UO,tableData:Yc,tableHeader:Yc,tableRow:Yc}}}function zO(e){const t=e._align;this.enter({type:"table",align:t.map(function(n){return n==="none"?null:n}),children:[]},e),this.data.inTable=!0}function UO(e){this.exit(e),this.data.inTable=void 0}function BO(e){this.enter({type:"tableRow",children:[]},e)}function Yc(e){this.exit(e)}function u0(e){this.enter({type:"tableCell",children:[]},e)}function VO(e){let t=this.resume();this.data.inTable&&(t=t.replace(/\\([\\|])/g,$O));const n=this.stack[this.stack.length-1];n.type,n.value=t,this.exit(e)}function $O(e,t){return t==="|"?t:e}function HO(e){const t=e||{},n=t.tableCellPadding,r=t.tablePipeAlign,i=t.stringLength,s=n?" ":"|";return{unsafe:[{character:"\r",inConstruct:"tableCell"},{character:`
`,inConstruct:"tableCell"},{atBreak:!0,character:"|",after:"[	 :-]"},{character:"|",inConstruct:"tableCell"},{atBreak:!0,character:":",after:"-"},{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{inlineCode:p,table:a,tableCell:l,tableRow:o}};function a(h,x,b,k){return u(d(h,b,k),h.align)}function o(h,x,b,k){const g=f(h,b,k),m=u([g]);return m.slice(0,m.indexOf(`
`))}function l(h,x,b,k){const g=b.enter("tableCell"),m=b.enter("phrasing"),y=b.containerPhrasing(h,{...k,before:s,after:s});return m(),g(),y}function u(h,x){return tO(h,{align:x,alignDelimiters:r,padding:n,stringLength:i})}function d(h,x,b){const k=h.children;let g=-1;const m=[],y=x.enter("table");for(;++g<k.length;)m[g]=f(k[g],x,b);return y(),m}function f(h,x,b){const k=h.children;let g=-1;const m=[],y=x.enter("tableRow");for(;++g<k.length;)m[g]=l(k[g],h,x,b);return y(),m}function p(h,x,b){let k=O2.inlineCode(h,x,b);return b.stack.includes("tableCell")&&(k=k.replace(/\|/g,"\\$&")),k}}function WO(){return{exit:{taskListCheckValueChecked:c0,taskListCheckValueUnchecked:c0,paragraph:qO}}}function GO(){return{unsafe:[{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{listItem:KO}}}function c0(e){const t=this.stack[this.stack.length-2];t.type,t.checked=e.type==="taskListCheckValueChecked"}function qO(e){const t=this.stack[this.stack.length-2];if(t&&t.type==="listItem"&&typeof t.checked=="boolean"){const n=this.stack[this.stack.length-1];n.type;const r=n.children[0];if(r&&r.type==="text"){const i=t.children;let s=-1,a;for(;++s<i.length;){const o=i[s];if(o.type==="paragraph"){a=o;break}}a===n&&(r.value=r.value.slice(1),r.value.length===0?n.children.shift():n.position&&r.position&&typeof r.position.start.offset=="number"&&(r.position.start.column++,r.position.start.offset++,n.position.start=Object.assign({},r.position.start)))}}this.exit(e)}function KO(e,t,n,r){const i=e.children[0],s=typeof e.checked=="boolean"&&i&&i.type==="paragraph",a="["+(e.checked?"x":" ")+"] ",o=n.createTracker(r);s&&o.move(a);let l=O2.listItem(e,t,n,{...r,...o.current()});return s&&(l=l.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/,u)),l;function u(d){return d+a}}function YO(){return[S4(),H4(),K4(),OO(),WO()]}function XO(e){return{extensions:[E4(),W4(e),Y4(),HO(e),GO()]}}const QO={tokenize:rz,partial:!0},z2={tokenize:iz,partial:!0},U2={tokenize:sz,partial:!0},B2={tokenize:az,partial:!0},ZO={tokenize:oz,partial:!0},V2={name:"wwwAutolink",tokenize:tz,previous:H2},$2={name:"protocolAutolink",tokenize:nz,previous:W2},Xn={name:"emailAutolink",tokenize:ez,previous:G2},En={};function JO(){return{text:En}}let Dr=48;for(;Dr<123;)En[Dr]=Xn,Dr++,Dr===58?Dr=65:Dr===91&&(Dr=97);En[43]=Xn;En[45]=Xn;En[46]=Xn;En[95]=Xn;En[72]=[Xn,$2];En[104]=[Xn,$2];En[87]=[Xn,V2];En[119]=[Xn,V2];function ez(e,t,n){const r=this;let i,s;return a;function a(f){return!Rf(f)||!G2.call(r,r.previous)||im(r.events)?n(f):(e.enter("literalAutolink"),e.enter("literalAutolinkEmail"),o(f))}function o(f){return Rf(f)?(e.consume(f),o):f===64?(e.consume(f),l):n(f)}function l(f){return f===46?e.check(ZO,d,u)(f):f===45||f===95||ot(f)?(s=!0,e.consume(f),l):d(f)}function u(f){return e.consume(f),i=!0,l}function d(f){return s&&i&&dt(r.previous)?(e.exit("literalAutolinkEmail"),e.exit("literalAutolink"),t(f)):n(f)}}function tz(e,t,n){const r=this;return i;function i(a){return a!==87&&a!==119||!H2.call(r,r.previous)||im(r.events)?n(a):(e.enter("literalAutolink"),e.enter("literalAutolinkWww"),e.check(QO,e.attempt(z2,e.attempt(U2,s),n),n)(a))}function s(a){return e.exit("literalAutolinkWww"),e.exit("literalAutolink"),t(a)}}function nz(e,t,n){const r=this;let i="",s=!1;return a;function a(f){return(f===72||f===104)&&W2.call(r,r.previous)&&!im(r.events)?(e.enter("literalAutolink"),e.enter("literalAutolinkHttp"),i+=String.fromCodePoint(f),e.consume(f),o):n(f)}function o(f){if(dt(f)&&i.length<5)return i+=String.fromCodePoint(f),e.consume(f),o;if(f===58){const p=i.toLowerCase();if(p==="http"||p==="https")return e.consume(f),l}return n(f)}function l(f){return f===47?(e.consume(f),s?u:(s=!0,l)):n(f)}function u(f){return f===null||Kl(f)||ke(f)||ui(f)||Pu(f)?n(f):e.attempt(z2,e.attempt(U2,d),n)(f)}function d(f){return e.exit("literalAutolinkHttp"),e.exit("literalAutolink"),t(f)}}function rz(e,t,n){let r=0;return i;function i(a){return(a===87||a===119)&&r<3?(r++,e.consume(a),i):a===46&&r===3?(e.consume(a),s):n(a)}function s(a){return a===null?n(a):t(a)}}function iz(e,t,n){let r,i,s;return a;function a(u){return u===46||u===95?e.check(B2,l,o)(u):u===null||ke(u)||ui(u)||u!==45&&Pu(u)?l(u):(s=!0,e.consume(u),a)}function o(u){return u===95?r=!0:(i=r,r=void 0),e.consume(u),a}function l(u){return i||r||!s?n(u):t(u)}}function sz(e,t){let n=0,r=0;return i;function i(a){return a===40?(n++,e.consume(a),i):a===41&&r<n?s(a):a===33||a===34||a===38||a===39||a===41||a===42||a===44||a===46||a===58||a===59||a===60||a===63||a===93||a===95||a===126?e.check(B2,t,s)(a):a===null||ke(a)||ui(a)?t(a):(e.consume(a),i)}function s(a){return a===41&&r++,e.consume(a),i}}function az(e,t,n){return r;function r(o){return o===33||o===34||o===39||o===41||o===42||o===44||o===46||o===58||o===59||o===63||o===95||o===126?(e.consume(o),r):o===38?(e.consume(o),s):o===93?(e.consume(o),i):o===60||o===null||ke(o)||ui(o)?t(o):n(o)}function i(o){return o===null||o===40||o===91||ke(o)||ui(o)?t(o):r(o)}function s(o){return dt(o)?a(o):n(o)}function a(o){return o===59?(e.consume(o),r):dt(o)?(e.consume(o),a):n(o)}}function oz(e,t,n){return r;function r(s){return e.consume(s),i}function i(s){return ot(s)?n(s):t(s)}}function H2(e){return e===null||e===40||e===42||e===95||e===91||e===93||e===126||ke(e)}function W2(e){return!dt(e)}function G2(e){return!(e===47||Rf(e))}function Rf(e){return e===43||e===45||e===46||e===95||ot(e)}function im(e){let t=e.length,n=!1;for(;t--;){const r=e[t][1];if((r.type==="labelLink"||r.type==="labelImage")&&!r._balanced){n=!0;break}if(r._gfmAutolinkLiteralWalkedInto){n=!1;break}}return e.length>0&&!n&&(e[e.length-1][1]._gfmAutolinkLiteralWalkedInto=!0),n}const lz={tokenize:gz,partial:!0};function uz(){return{document:{91:{name:"gfmFootnoteDefinition",tokenize:pz,continuation:{tokenize:hz},exit:mz}},text:{91:{name:"gfmFootnoteCall",tokenize:fz},93:{name:"gfmPotentialFootnoteCall",add:"after",tokenize:cz,resolveTo:dz}}}}function cz(e,t,n){const r=this;let i=r.events.length;const s=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]);let a;for(;i--;){const l=r.events[i][1];if(l.type==="labelImage"){a=l;break}if(l.type==="gfmFootnoteCall"||l.type==="labelLink"||l.type==="label"||l.type==="image"||l.type==="link")break}return o;function o(l){if(!a||!a._balanced)return n(l);const u=ln(r.sliceSerialize({start:a.end,end:r.now()}));return u.codePointAt(0)!==94||!s.includes(u.slice(1))?n(l):(e.enter("gfmFootnoteCallLabelMarker"),e.consume(l),e.exit("gfmFootnoteCallLabelMarker"),t(l))}}function dz(e,t){let n=e.length;for(;n--;)if(e[n][1].type==="labelImage"&&e[n][0]==="enter"){e[n][1];break}e[n+1][1].type="data",e[n+3][1].type="gfmFootnoteCallLabelMarker";const r={type:"gfmFootnoteCall",start:Object.assign({},e[n+3][1].start),end:Object.assign({},e[e.length-1][1].end)},i={type:"gfmFootnoteCallMarker",start:Object.assign({},e[n+3][1].end),end:Object.assign({},e[n+3][1].end)};i.end.column++,i.end.offset++,i.end._bufferIndex++;const s={type:"gfmFootnoteCallString",start:Object.assign({},i.end),end:Object.assign({},e[e.length-1][1].start)},a={type:"chunkString",contentType:"string",start:Object.assign({},s.start),end:Object.assign({},s.end)},o=[e[n+1],e[n+2],["enter",r,t],e[n+3],e[n+4],["enter",i,t],["exit",i,t],["enter",s,t],["enter",a,t],["exit",a,t],["exit",s,t],e[e.length-2],e[e.length-1],["exit",r,t]];return e.splice(n,e.length-n+1,...o),e}function fz(e,t,n){const r=this,i=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]);let s=0,a;return o;function o(f){return e.enter("gfmFootnoteCall"),e.enter("gfmFootnoteCallLabelMarker"),e.consume(f),e.exit("gfmFootnoteCallLabelMarker"),l}function l(f){return f!==94?n(f):(e.enter("gfmFootnoteCallMarker"),e.consume(f),e.exit("gfmFootnoteCallMarker"),e.enter("gfmFootnoteCallString"),e.enter("chunkString").contentType="string",u)}function u(f){if(s>999||f===93&&!a||f===null||f===91||ke(f))return n(f);if(f===93){e.exit("chunkString");const p=e.exit("gfmFootnoteCallString");return i.includes(ln(r.sliceSerialize(p)))?(e.enter("gfmFootnoteCallLabelMarker"),e.consume(f),e.exit("gfmFootnoteCallLabelMarker"),e.exit("gfmFootnoteCall"),t):n(f)}return ke(f)||(a=!0),s++,e.consume(f),f===92?d:u}function d(f){return f===91||f===92||f===93?(e.consume(f),s++,u):u(f)}}function pz(e,t,n){const r=this,i=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]);let s,a=0,o;return l;function l(x){return e.enter("gfmFootnoteDefinition")._container=!0,e.enter("gfmFootnoteDefinitionLabel"),e.enter("gfmFootnoteDefinitionLabelMarker"),e.consume(x),e.exit("gfmFootnoteDefinitionLabelMarker"),u}function u(x){return x===94?(e.enter("gfmFootnoteDefinitionMarker"),e.consume(x),e.exit("gfmFootnoteDefinitionMarker"),e.enter("gfmFootnoteDefinitionLabelString"),e.enter("chunkString").contentType="string",d):n(x)}function d(x){if(a>999||x===93&&!o||x===null||x===91||ke(x))return n(x);if(x===93){e.exit("chunkString");const b=e.exit("gfmFootnoteDefinitionLabelString");return s=ln(r.sliceSerialize(b)),e.enter("gfmFootnoteDefinitionLabelMarker"),e.consume(x),e.exit("gfmFootnoteDefinitionLabelMarker"),e.exit("gfmFootnoteDefinitionLabel"),p}return ke(x)||(o=!0),a++,e.consume(x),x===92?f:d}function f(x){return x===91||x===92||x===93?(e.consume(x),a++,d):d(x)}function p(x){return x===58?(e.enter("definitionMarker"),e.consume(x),e.exit("definitionMarker"),i.includes(s)||i.push(s),ye(e,h,"gfmFootnoteDefinitionWhitespace")):n(x)}function h(x){return t(x)}}function hz(e,t,n){return e.check(no,t,e.attempt(lz,t,n))}function mz(e){e.exit("gfmFootnoteDefinition")}function gz(e,t,n){const r=this;return ye(e,i,"gfmFootnoteDefinitionIndent",5);function i(s){const a=r.events[r.events.length-1];return a&&a[1].type==="gfmFootnoteDefinitionIndent"&&a[2].sliceSerialize(a[1],!0).length===4?t(s):n(s)}}function yz(e){let n=(e||{}).singleTilde;const r={name:"strikethrough",tokenize:s,resolveAll:i};return n==null&&(n=!0),{text:{126:r},insideSpan:{null:[r]},attentionMarkers:{null:[126]}};function i(a,o){let l=-1;for(;++l<a.length;)if(a[l][0]==="enter"&&a[l][1].type==="strikethroughSequenceTemporary"&&a[l][1]._close){let u=l;for(;u--;)if(a[u][0]==="exit"&&a[u][1].type==="strikethroughSequenceTemporary"&&a[u][1]._open&&a[l][1].end.offset-a[l][1].start.offset===a[u][1].end.offset-a[u][1].start.offset){a[l][1].type="strikethroughSequence",a[u][1].type="strikethroughSequence";const d={type:"strikethrough",start:Object.assign({},a[u][1].start),end:Object.assign({},a[l][1].end)},f={type:"strikethroughText",start:Object.assign({},a[u][1].end),end:Object.assign({},a[l][1].start)},p=[["enter",d,o],["enter",a[u][1],o],["exit",a[u][1],o],["enter",f,o]],h=o.parser.constructs.insideSpan.null;h&&on(p,p.length,0,ju(h,a.slice(u+1,l),o)),on(p,p.length,0,[["exit",f,o],["enter",a[l][1],o],["exit",a[l][1],o],["exit",d,o]]),on(a,u-1,l-u+3,p),l=u+p.length-2;break}}for(l=-1;++l<a.length;)a[l][1].type==="strikethroughSequenceTemporary"&&(a[l][1].type="data");return a}function s(a,o,l){const u=this.previous,d=this.events;let f=0;return p;function p(x){return u===126&&d[d.length-1][1].type!=="characterEscape"?l(x):(a.enter("strikethroughSequenceTemporary"),h(x))}function h(x){const b=Xl(u);if(x===126)return f>1?l(x):(a.consume(x),f++,h);if(f<2&&!n)return l(x);const k=a.exit("strikethroughSequenceTemporary"),g=Xl(x);return k._open=!g||g===2&&!!b,k._close=!b||b===2&&!!g,o(x)}}}class xz{constructor(){this.map=[],this.index=new Map}add(t,n,r){vz(this,t,n,r)}consume(t){if(this.map.sort(function(s,a){return s[0]-a[0]}),this.map.length===0)return;let n=this.map.length;const r=[];for(;n>0;)n-=1,r.push(t.slice(this.map[n][0]+this.map[n][1]),this.map[n][2]),t.length=this.map[n][0];r.push(t.slice()),t.length=0;let i=r.pop();for(;i;){for(const s of i)t.push(s);i=r.pop()}this.map.length=0,this.index.clear()}}function vz(e,t,n,r){if(n===0&&r.length===0)return;const i=e.index.get(t);if(i){i[1]+=n,i[2].push(...r);return}const s=[t,n,r];e.map.push(s),e.index.set(t,s)}function bz(e,t){let n=!1;const r=[];for(;t<e.length;){const i=e[t];if(n){if(i[0]==="enter")i[1].type==="tableContent"&&r.push(e[t+1][1].type==="tableDelimiterMarker"?"left":"none");else if(i[1].type==="tableContent"){if(e[t-1][1].type==="tableDelimiterMarker"){const s=r.length-1;r[s]=r[s]==="left"?"center":"right"}}else if(i[1].type==="tableDelimiterRow")break}else i[0]==="enter"&&i[1].type==="tableDelimiterRow"&&(n=!0);t+=1}return r}function wz(){return{flow:{null:{name:"table",tokenize:kz,resolveAll:Sz}}}}function kz(e,t,n){const r=this;let i=0,s=0,a;return o;function o(_){let j=r.events.length-1;for(;j>-1;){const{type:q}=r.events[j][1];if(q==="lineEnding"||q==="linePrefix")j--;else break}const U=j>-1?r.events[j][1].type:null,G=U==="tableHead"||U==="tableRow"?w:l;return G===w&&r.parser.lazy[r.now().line]?n(_):G(_)}function l(_){return e.enter("tableHead"),e.enter("tableRow"),u(_)}function u(_){return _===124||(a=!0,s+=1),d(_)}function d(_){return _===null?n(_):Z(_)?s>1?(s=0,r.interrupt=!0,e.exit("tableRow"),e.enter("lineEnding"),e.consume(_),e.exit("lineEnding"),h):n(_):oe(_)?ye(e,d,"whitespace")(_):(s+=1,a&&(a=!1,i+=1),_===124?(e.enter("tableCellDivider"),e.consume(_),e.exit("tableCellDivider"),a=!0,d):(e.enter("data"),f(_)))}function f(_){return _===null||_===124||ke(_)?(e.exit("data"),d(_)):(e.consume(_),_===92?p:f)}function p(_){return _===92||_===124?(e.consume(_),f):f(_)}function h(_){return r.interrupt=!1,r.parser.lazy[r.now().line]?n(_):(e.enter("tableDelimiterRow"),a=!1,oe(_)?ye(e,x,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(_):x(_))}function x(_){return _===45||_===58?k(_):_===124?(a=!0,e.enter("tableCellDivider"),e.consume(_),e.exit("tableCellDivider"),b):E(_)}function b(_){return oe(_)?ye(e,k,"whitespace")(_):k(_)}function k(_){return _===58?(s+=1,a=!0,e.enter("tableDelimiterMarker"),e.consume(_),e.exit("tableDelimiterMarker"),g):_===45?(s+=1,g(_)):_===null||Z(_)?v(_):E(_)}function g(_){return _===45?(e.enter("tableDelimiterFiller"),m(_)):E(_)}function m(_){return _===45?(e.consume(_),m):_===58?(a=!0,e.exit("tableDelimiterFiller"),e.enter("tableDelimiterMarker"),e.consume(_),e.exit("tableDelimiterMarker"),y):(e.exit("tableDelimiterFiller"),y(_))}function y(_){return oe(_)?ye(e,v,"whitespace")(_):v(_)}function v(_){return _===124?x(_):_===null||Z(_)?!a||i!==s?E(_):(e.exit("tableDelimiterRow"),e.exit("tableHead"),t(_)):E(_)}function E(_){return n(_)}function w(_){return e.enter("tableRow"),I(_)}function I(_){return _===124?(e.enter("tableCellDivider"),e.consume(_),e.exit("tableCellDivider"),I):_===null||Z(_)?(e.exit("tableRow"),t(_)):oe(_)?ye(e,I,"whitespace")(_):(e.enter("data"),N(_))}function N(_){return _===null||_===124||ke(_)?(e.exit("data"),I(_)):(e.consume(_),_===92?R:N)}function R(_){return _===92||_===124?(e.consume(_),N):N(_)}}function Sz(e,t){let n=-1,r=!0,i=0,s=[0,0,0,0],a=[0,0,0,0],o=!1,l=0,u,d,f;const p=new xz;for(;++n<e.length;){const h=e[n],x=h[1];h[0]==="enter"?x.type==="tableHead"?(o=!1,l!==0&&(d0(p,t,l,u,d),d=void 0,l=0),u={type:"table",start:Object.assign({},x.start),end:Object.assign({},x.end)},p.add(n,0,[["enter",u,t]])):x.type==="tableRow"||x.type==="tableDelimiterRow"?(r=!0,f=void 0,s=[0,0,0,0],a=[0,n+1,0,0],o&&(o=!1,d={type:"tableBody",start:Object.assign({},x.start),end:Object.assign({},x.end)},p.add(n,0,[["enter",d,t]])),i=x.type==="tableDelimiterRow"?2:d?3:1):i&&(x.type==="data"||x.type==="tableDelimiterMarker"||x.type==="tableDelimiterFiller")?(r=!1,a[2]===0&&(s[1]!==0&&(a[0]=a[1],f=Ro(p,t,s,i,void 0,f),s=[0,0,0,0]),a[2]=n)):x.type==="tableCellDivider"&&(r?r=!1:(s[1]!==0&&(a[0]=a[1],f=Ro(p,t,s,i,void 0,f)),s=a,a=[s[1],n,0,0])):x.type==="tableHead"?(o=!0,l=n):x.type==="tableRow"||x.type==="tableDelimiterRow"?(l=n,s[1]!==0?(a[0]=a[1],f=Ro(p,t,s,i,n,f)):a[1]!==0&&(f=Ro(p,t,a,i,n,f)),i=0):i&&(x.type==="data"||x.type==="tableDelimiterMarker"||x.type==="tableDelimiterFiller")&&(a[3]=n)}for(l!==0&&d0(p,t,l,u,d),p.consume(t.events),n=-1;++n<t.events.length;){const h=t.events[n];h[0]==="enter"&&h[1].type==="table"&&(h[1]._align=bz(t.events,n))}return e}function Ro(e,t,n,r,i,s){const a=r===1?"tableHeader":r===2?"tableDelimiter":"tableData",o="tableContent";n[0]!==0&&(s.end=Object.assign({},gi(t.events,n[0])),e.add(n[0],0,[["exit",s,t]]));const l=gi(t.events,n[1]);if(s={type:a,start:Object.assign({},l),end:Object.assign({},l)},e.add(n[1],0,[["enter",s,t]]),n[2]!==0){const u=gi(t.events,n[2]),d=gi(t.events,n[3]),f={type:o,start:Object.assign({},u),end:Object.assign({},d)};if(e.add(n[2],0,[["enter",f,t]]),r!==2){const p=t.events[n[2]],h=t.events[n[3]];if(p[1].end=Object.assign({},h[1].end),p[1].type="chunkText",p[1].contentType="text",n[3]>n[2]+1){const x=n[2]+1,b=n[3]-n[2]-1;e.add(x,b,[])}}e.add(n[3]+1,0,[["exit",f,t]])}return i!==void 0&&(s.end=Object.assign({},gi(t.events,i)),e.add(i,0,[["exit",s,t]]),s=void 0),s}function d0(e,t,n,r,i){const s=[],a=gi(t.events,n);i&&(i.end=Object.assign({},a),s.push(["exit",i,t])),r.end=Object.assign({},a),s.push(["exit",r,t]),e.add(n+1,0,s)}function gi(e,t){const n=e[t],r=n[0]==="enter"?"start":"end";return n[1][r]}const Ez={name:"tasklistCheck",tokenize:Tz};function Cz(){return{text:{91:Ez}}}function Tz(e,t,n){const r=this;return i;function i(l){return r.previous!==null||!r._gfmTasklistFirstContentOfListItem?n(l):(e.enter("taskListCheck"),e.enter("taskListCheckMarker"),e.consume(l),e.exit("taskListCheckMarker"),s)}function s(l){return ke(l)?(e.enter("taskListCheckValueUnchecked"),e.consume(l),e.exit("taskListCheckValueUnchecked"),a):l===88||l===120?(e.enter("taskListCheckValueChecked"),e.consume(l),e.exit("taskListCheckValueChecked"),a):n(l)}function a(l){return l===93?(e.enter("taskListCheckMarker"),e.consume(l),e.exit("taskListCheckMarker"),e.exit("taskListCheck"),o):n(l)}function o(l){return Z(l)?t(l):oe(l)?e.check({tokenize:_z},t,n)(l):n(l)}}function _z(e,t,n){return ye(e,r,"whitespace");function r(i){return i===null?n(i):t(i)}}function Az(e){return r2([JO(),uz(),yz(e),wz(),Cz()])}const Iz={};function Nz(e){const t=this,n=e||Iz,r=t.data(),i=r.micromarkExtensions||(r.micromarkExtensions=[]),s=r.fromMarkdownExtensions||(r.fromMarkdownExtensions=[]),a=r.toMarkdownExtensions||(r.toMarkdownExtensions=[]);i.push(Az(n)),s.push(YO()),a.push(XO(n))}var q2={exports:{}};(function(e){var t=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var n=function(r){var i=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,s=0,a={},o={manual:r.Prism&&r.Prism.manual,disableWorkerMessageHandler:r.Prism&&r.Prism.disableWorkerMessageHandler,util:{encode:function m(y){return y instanceof l?new l(y.type,m(y.content),y.alias):Array.isArray(y)?y.map(m):y.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(m){return Object.prototype.toString.call(m).slice(8,-1)},objId:function(m){return m.__id||Object.defineProperty(m,"__id",{value:++s}),m.__id},clone:function m(y,v){v=v||{};var E,w;switch(o.util.type(y)){case"Object":if(w=o.util.objId(y),v[w])return v[w];E={},v[w]=E;for(var I in y)y.hasOwnProperty(I)&&(E[I]=m(y[I],v));return E;case"Array":return w=o.util.objId(y),v[w]?v[w]:(E=[],v[w]=E,y.forEach(function(N,R){E[R]=m(N,v)}),E);default:return y}},getLanguage:function(m){for(;m;){var y=i.exec(m.className);if(y)return y[1].toLowerCase();m=m.parentElement}return"none"},setLanguage:function(m,y){m.className=m.className.replace(RegExp(i,"gi"),""),m.classList.add("language-"+y)},currentScript:function(){if(typeof document>"u")return null;if(document.currentScript&&document.currentScript.tagName==="SCRIPT")return document.currentScript;try{throw new Error}catch(E){var m=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(E.stack)||[])[1];if(m){var y=document.getElementsByTagName("script");for(var v in y)if(y[v].src==m)return y[v]}return null}},isActive:function(m,y,v){for(var E="no-"+y;m;){var w=m.classList;if(w.contains(y))return!0;if(w.contains(E))return!1;m=m.parentElement}return!!v}},languages:{plain:a,plaintext:a,text:a,txt:a,extend:function(m,y){var v=o.util.clone(o.languages[m]);for(var E in y)v[E]=y[E];return v},insertBefore:function(m,y,v,E){E=E||o.languages;var w=E[m],I={};for(var N in w)if(w.hasOwnProperty(N)){if(N==y)for(var R in v)v.hasOwnProperty(R)&&(I[R]=v[R]);v.hasOwnProperty(N)||(I[N]=w[N])}var _=E[m];return E[m]=I,o.languages.DFS(o.languages,function(j,U){U===_&&j!=m&&(this[j]=I)}),I},DFS:function m(y,v,E,w){w=w||{};var I=o.util.objId;for(var N in y)if(y.hasOwnProperty(N)){v.call(y,N,y[N],E||N);var R=y[N],_=o.util.type(R);_==="Object"&&!w[I(R)]?(w[I(R)]=!0,m(R,v,null,w)):_==="Array"&&!w[I(R)]&&(w[I(R)]=!0,m(R,v,N,w))}}},plugins:{},highlightAll:function(m,y){o.highlightAllUnder(document,m,y)},highlightAllUnder:function(m,y,v){var E={callback:v,container:m,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};o.hooks.run("before-highlightall",E),E.elements=Array.prototype.slice.apply(E.container.querySelectorAll(E.selector)),o.hooks.run("before-all-elements-highlight",E);for(var w=0,I;I=E.elements[w++];)o.highlightElement(I,y===!0,E.callback)},highlightElement:function(m,y,v){var E=o.util.getLanguage(m),w=o.languages[E];o.util.setLanguage(m,E);var I=m.parentElement;I&&I.nodeName.toLowerCase()==="pre"&&o.util.setLanguage(I,E);var N=m.textContent,R={element:m,language:E,grammar:w,code:N};function _(U){R.highlightedCode=U,o.hooks.run("before-insert",R),R.element.innerHTML=R.highlightedCode,o.hooks.run("after-highlight",R),o.hooks.run("complete",R),v&&v.call(R.element)}if(o.hooks.run("before-sanity-check",R),I=R.element.parentElement,I&&I.nodeName.toLowerCase()==="pre"&&!I.hasAttribute("tabindex")&&I.setAttribute("tabindex","0"),!R.code){o.hooks.run("complete",R),v&&v.call(R.element);return}if(o.hooks.run("before-highlight",R),!R.grammar){_(o.util.encode(R.code));return}if(y&&r.Worker){var j=new Worker(o.filename);j.onmessage=function(U){_(U.data)},j.postMessage(JSON.stringify({language:R.language,code:R.code,immediateClose:!0}))}else _(o.highlight(R.code,R.grammar,R.language))},highlight:function(m,y,v){var E={code:m,grammar:y,language:v};if(o.hooks.run("before-tokenize",E),!E.grammar)throw new Error('The language "'+E.language+'" has no grammar.');return E.tokens=o.tokenize(E.code,E.grammar),o.hooks.run("after-tokenize",E),l.stringify(o.util.encode(E.tokens),E.language)},tokenize:function(m,y){var v=y.rest;if(v){for(var E in v)y[E]=v[E];delete y.rest}var w=new f;return p(w,w.head,m),d(m,w,y,w.head,0),x(w)},hooks:{all:{},add:function(m,y){var v=o.hooks.all;v[m]=v[m]||[],v[m].push(y)},run:function(m,y){var v=o.hooks.all[m];if(!(!v||!v.length))for(var E=0,w;w=v[E++];)w(y)}},Token:l};r.Prism=o;function l(m,y,v,E){this.type=m,this.content=y,this.alias=v,this.length=(E||"").length|0}l.stringify=function m(y,v){if(typeof y=="string")return y;if(Array.isArray(y)){var E="";return y.forEach(function(_){E+=m(_,v)}),E}var w={type:y.type,content:m(y.content,v),tag:"span",classes:["token",y.type],attributes:{},language:v},I=y.alias;I&&(Array.isArray(I)?Array.prototype.push.apply(w.classes,I):w.classes.push(I)),o.hooks.run("wrap",w);var N="";for(var R in w.attributes)N+=" "+R+'="'+(w.attributes[R]||"").replace(/"/g,"&quot;")+'"';return"<"+w.tag+' class="'+w.classes.join(" ")+'"'+N+">"+w.content+"</"+w.tag+">"};function u(m,y,v,E){m.lastIndex=y;var w=m.exec(v);if(w&&E&&w[1]){var I=w[1].length;w.index+=I,w[0]=w[0].slice(I)}return w}function d(m,y,v,E,w,I){for(var N in v)if(!(!v.hasOwnProperty(N)||!v[N])){var R=v[N];R=Array.isArray(R)?R:[R];for(var _=0;_<R.length;++_){if(I&&I.cause==N+","+_)return;var j=R[_],U=j.inside,G=!!j.lookbehind,q=!!j.greedy,H=j.alias;if(q&&!j.pattern.global){var le=j.pattern.toString().match(/[imsuy]*$/)[0];j.pattern=RegExp(j.pattern.source,le+"g")}for(var Q=j.pattern||j,L=E.next,B=w;L!==y.tail&&!(I&&B>=I.reach);B+=L.value.length,L=L.next){var S=L.value;if(y.length>m.length)return;if(!(S instanceof l)){var Y=1,ee;if(q){if(ee=u(Q,B,m,G),!ee||ee.index>=m.length)break;var se=ee.index,A=ee.index+ee[0].length,ue=B;for(ue+=L.value.length;se>=ue;)L=L.next,ue+=L.value.length;if(ue-=L.value.length,B=ue,L.value instanceof l)continue;for(var Se=L;Se!==y.tail&&(ue<A||typeof Se.value=="string");Se=Se.next)Y++,ue+=Se.value.length;Y--,S=m.slice(B,ue),ee.index-=B}else if(ee=u(Q,0,S,G),!ee)continue;var se=ee.index,Ee=ee[0],$e=S.slice(0,se),Ye=S.slice(se+Ee.length),pe=B+S.length;I&&pe>I.reach&&(I.reach=pe);var et=L.prev;$e&&(et=p(y,et,$e),B+=$e.length),h(y,et,Y);var St=new l(N,U?o.tokenize(Ee,U):Ee,H,Ee);if(L=p(y,et,St),Ye&&p(y,L,Ye),Y>1){var Ge={cause:N+","+_,reach:pe};d(m,y,v,L.prev,B,Ge),I&&Ge.reach>I.reach&&(I.reach=Ge.reach)}}}}}}function f(){var m={value:null,prev:null,next:null},y={value:null,prev:m,next:null};m.next=y,this.head=m,this.tail=y,this.length=0}function p(m,y,v){var E=y.next,w={value:v,prev:y,next:E};return y.next=w,E.prev=w,m.length++,w}function h(m,y,v){for(var E=y.next,w=0;w<v&&E!==m.tail;w++)E=E.next;y.next=E,E.prev=y,m.length-=w}function x(m){for(var y=[],v=m.head.next;v!==m.tail;)y.push(v.value),v=v.next;return y}if(!r.document)return r.addEventListener&&(o.disableWorkerMessageHandler||r.addEventListener("message",function(m){var y=JSON.parse(m.data),v=y.language,E=y.code,w=y.immediateClose;r.postMessage(o.highlight(E,o.languages[v],v)),w&&r.close()},!1)),o;var b=o.util.currentScript();b&&(o.filename=b.src,b.hasAttribute("data-manual")&&(o.manual=!0));function k(){o.manual||o.highlightAll()}if(!o.manual){var g=document.readyState;g==="loading"||g==="interactive"&&b&&b.defer?document.addEventListener("DOMContentLoaded",k):window.requestAnimationFrame?window.requestAnimationFrame(k):window.setTimeout(k,16)}return o}(t);e.exports&&(e.exports=n),typeof Wi<"u"&&(Wi.Prism=n),n.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},n.languages.markup.tag.inside["attr-value"].inside.entity=n.languages.markup.entity,n.languages.markup.doctype.inside["internal-subset"].inside=n.languages.markup,n.hooks.add("wrap",function(r){r.type==="entity"&&(r.attributes.title=r.content.replace(/&amp;/,"&"))}),Object.defineProperty(n.languages.markup.tag,"addInlined",{value:function(i,s){var a={};a["language-"+s]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:n.languages[s]},a.cdata=/^<!\[CDATA\[|\]\]>$/i;var o={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:a}};o["language-"+s]={pattern:/[\s\S]+/,inside:n.languages[s]};var l={};l[i]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return i}),"i"),lookbehind:!0,greedy:!0,inside:o},n.languages.insertBefore("markup","cdata",l)}}),Object.defineProperty(n.languages.markup.tag,"addAttribute",{value:function(r,i){n.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+r+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[i,"language-"+i],inside:n.languages[i]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),n.languages.html=n.languages.markup,n.languages.mathml=n.languages.markup,n.languages.svg=n.languages.markup,n.languages.xml=n.languages.extend("markup",{}),n.languages.ssml=n.languages.xml,n.languages.atom=n.languages.xml,n.languages.rss=n.languages.xml,function(r){var i=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;r.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+i.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+i.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+i.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+i.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:i,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},r.languages.css.atrule.inside.rest=r.languages.css;var s=r.languages.markup;s&&(s.tag.addInlined("style","css"),s.tag.addAttribute("style","css"))}(n),n.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},n.languages.javascript=n.languages.extend("clike",{"class-name":[n.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),n.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,n.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:n.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:n.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:n.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:n.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:n.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),n.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:n.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),n.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),n.languages.markup&&(n.languages.markup.tag.addInlined("script","javascript"),n.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),n.languages.js=n.languages.javascript,function(){if(typeof n>"u"||typeof document>"u")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var r="Loading…",i=function(b,k){return"✖ Error "+b+" while fetching file: "+k},s="✖ Error: File does not exist or is empty",a={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},o="data-src-status",l="loading",u="loaded",d="failed",f="pre[data-src]:not(["+o+'="'+u+'"]):not(['+o+'="'+l+'"])';function p(b,k,g){var m=new XMLHttpRequest;m.open("GET",b,!0),m.onreadystatechange=function(){m.readyState==4&&(m.status<400&&m.responseText?k(m.responseText):m.status>=400?g(i(m.status,m.statusText)):g(s))},m.send(null)}function h(b){var k=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(b||"");if(k){var g=Number(k[1]),m=k[2],y=k[3];return m?y?[g,Number(y)]:[g,void 0]:[g,g]}}n.hooks.add("before-highlightall",function(b){b.selector+=", "+f}),n.hooks.add("before-sanity-check",function(b){var k=b.element;if(k.matches(f)){b.code="",k.setAttribute(o,l);var g=k.appendChild(document.createElement("CODE"));g.textContent=r;var m=k.getAttribute("data-src"),y=b.language;if(y==="none"){var v=(/\.(\w+)$/.exec(m)||[,"none"])[1];y=a[v]||v}n.util.setLanguage(g,y),n.util.setLanguage(k,y);var E=n.plugins.autoloader;E&&E.loadLanguages(y),p(m,function(w){k.setAttribute(o,u);var I=h(k.getAttribute("data-range"));if(I){var N=w.split(/\r\n?|\n/g),R=I[0],_=I[1]==null?N.length:I[1];R<0&&(R+=N.length),R=Math.max(0,Math.min(R-1,N.length)),_<0&&(_+=N.length),_=Math.max(0,Math.min(_,N.length)),w=N.slice(R,_).join(`
`),k.hasAttribute("data-start")||k.setAttribute("data-start",String(R+1))}g.textContent=w,n.highlightElement(g)},function(w){k.setAttribute(o,d),g.textContent=w})}}),n.plugins.fileHighlight={highlight:function(k){for(var g=(k||document).querySelectorAll(f),m=0,y;y=g[m++];)n.highlightElement(y)}};var x=!1;n.fileHighlight=function(){x||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),x=!0),n.plugins.fileHighlight.highlight.apply(this,arguments)}}()})(q2);var Pz=q2.exports;const f0=Jl(Pz);Prism.languages.python={comment:{pattern:/(^|[^\\])#.*/,lookbehind:!0,greedy:!0},"string-interpolation":{pattern:/(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,greedy:!0,inside:{interpolation:{pattern:/((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,lookbehind:!0,inside:{"format-spec":{pattern:/(:)[^:(){}]+(?=\}$)/,lookbehind:!0},"conversion-option":{pattern:/![sra](?=[:}]$)/,alias:"punctuation"},rest:null}},string:/[\s\S]+/}},"triple-quoted-string":{pattern:/(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i,greedy:!0,alias:"string"},string:{pattern:/(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,greedy:!0},function:{pattern:/((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,lookbehind:!0},"class-name":{pattern:/(\bclass\s+)\w+/i,lookbehind:!0},decorator:{pattern:/(^[\t ]*)@\w+(?:\.\w+)*/m,lookbehind:!0,alias:["annotation","punctuation"],inside:{punctuation:/\./}},keyword:/\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,builtin:/\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,boolean:/\b(?:False|None|True)\b/,number:/\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,operator:/[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,punctuation:/[{}[\];(),.:]/};Prism.languages.python["string-interpolation"].inside.interpolation.inside.rest=Prism.languages.python;Prism.languages.py=Prism.languages.python;Prism.languages.javascript=Prism.languages.extend("clike",{"class-name":[Prism.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/});Prism.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/;Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:Prism.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:Prism.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/});Prism.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:Prism.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}});Prism.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}});Prism.languages.markup&&(Prism.languages.markup.tag.addInlined("script","javascript"),Prism.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript"));Prism.languages.js=Prism.languages.javascript;(function(e){e.languages.typescript=e.languages.extend("javascript",{"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,lookbehind:!0,greedy:!0,inside:null},builtin:/\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/}),e.languages.typescript.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/,/\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,/\btype\b(?=\s*(?:[\{*]|$))/),delete e.languages.typescript.parameter,delete e.languages.typescript["literal-property"];var t=e.languages.extend("typescript",{});delete t["class-name"],e.languages.typescript["class-name"].inside=t,e.languages.insertBefore("typescript","function",{decorator:{pattern:/@[$\w\xA0-\uFFFF]+/,inside:{at:{pattern:/^@/,alias:"operator"},function:/^[\s\S]+/}},"generic-function":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,greedy:!0,inside:{function:/^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,generic:{pattern:/<[\s\S]+/,alias:"class-name",inside:t}}}}),e.languages.ts=e.languages.typescript})(Prism);(function(e){var t=e.util.clone(e.languages.javascript),n=/(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source,r=/(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source,i=/(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;function s(l,u){return l=l.replace(/<S>/g,function(){return n}).replace(/<BRACES>/g,function(){return r}).replace(/<SPREAD>/g,function(){return i}),RegExp(l,u)}i=s(i).source,e.languages.jsx=e.languages.extend("markup",t),e.languages.jsx.tag.pattern=s(/<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/.source),e.languages.jsx.tag.inside.tag.pattern=/^<\/?[^\s>\/]*/,e.languages.jsx.tag.inside["attr-value"].pattern=/=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/,e.languages.jsx.tag.inside.tag.inside["class-name"]=/^[A-Z]\w*(?:\.[A-Z]\w*)*$/,e.languages.jsx.tag.inside.comment=t.comment,e.languages.insertBefore("inside","attr-name",{spread:{pattern:s(/<SPREAD>/.source),inside:e.languages.jsx}},e.languages.jsx.tag),e.languages.insertBefore("inside","special-attr",{script:{pattern:s(/=<BRACES>/.source),alias:"language-javascript",inside:{"script-punctuation":{pattern:/^=(?=\{)/,alias:"punctuation"},rest:e.languages.jsx}}},e.languages.jsx.tag);var a=function(l){return l?typeof l=="string"?l:typeof l.content=="string"?l.content:l.content.map(a).join(""):""},o=function(l){for(var u=[],d=0;d<l.length;d++){var f=l[d],p=!1;if(typeof f!="string"&&(f.type==="tag"&&f.content[0]&&f.content[0].type==="tag"?f.content[0].content[0].content==="</"?u.length>0&&u[u.length-1].tagName===a(f.content[0].content[1])&&u.pop():f.content[f.content.length-1].content==="/>"||u.push({tagName:a(f.content[0].content[1]),openedBraces:0}):u.length>0&&f.type==="punctuation"&&f.content==="{"?u[u.length-1].openedBraces++:u.length>0&&u[u.length-1].openedBraces>0&&f.type==="punctuation"&&f.content==="}"?u[u.length-1].openedBraces--:p=!0),(p||typeof f=="string")&&u.length>0&&u[u.length-1].openedBraces===0){var h=a(f);d<l.length-1&&(typeof l[d+1]=="string"||l[d+1].type==="plain-text")&&(h+=a(l[d+1]),l.splice(d+1,1)),d>0&&(typeof l[d-1]=="string"||l[d-1].type==="plain-text")&&(h=a(l[d-1])+h,l.splice(d-1,1),d--),l[d]=new e.Token("plain-text",h,null,h)}f.content&&typeof f.content!="string"&&o(f.content)}};e.hooks.add("after-tokenize",function(l){l.language!=="jsx"&&l.language!=="tsx"||o(l.tokens)})})(Prism);(function(e){var t=e.util.clone(e.languages.typescript);e.languages.tsx=e.languages.extend("jsx",t),delete e.languages.tsx.parameter,delete e.languages.tsx["literal-property"];var n=e.languages.tsx.tag;n.pattern=RegExp(/(^|[^\w$]|(?=<\/))/.source+"(?:"+n.pattern.source+")",n.pattern.flags),n.lookbehind=!0})(Prism);(function(e){var t="\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",n={pattern:/(^(["']?)\w+\2)[ \t]+\S.*/,lookbehind:!0,alias:"punctuation",inside:null},r={bash:n,environment:{pattern:RegExp("\\$"+t),alias:"constant"},variable:[{pattern:/\$?\(\([\s\S]+?\)\)/,greedy:!0,inside:{variable:[{pattern:/(^\$\(\([\s\S]+)\)\)/,lookbehind:!0},/^\$\(\(/],number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,operator:/--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,punctuation:/\(\(?|\)\)?|,|;/}},{pattern:/\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,greedy:!0,inside:{variable:/^\$\(|^`|\)$|`$/}},{pattern:/\$\{[^}]+\}/,greedy:!0,inside:{operator:/:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,punctuation:/[\[\]]/,environment:{pattern:RegExp("(\\{)"+t),lookbehind:!0,alias:"constant"}}},/\$(?:\w+|[#?*!@$])/],entity:/\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/};e.languages.bash={shebang:{pattern:/^#!\s*\/.*/,alias:"important"},comment:{pattern:/(^|[^"{\\$])#.*/,lookbehind:!0},"function-name":[{pattern:/(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,lookbehind:!0,alias:"function"},{pattern:/\b[\w-]+(?=\s*\(\s*\)\s*\{)/,alias:"function"}],"for-or-select":{pattern:/(\b(?:for|select)\s+)\w+(?=\s+in\s)/,alias:"variable",lookbehind:!0},"assign-left":{pattern:/(^|[\s;|&]|[<>]\()\w+(?:\.\w+)*(?=\+?=)/,inside:{environment:{pattern:RegExp("(^|[\\s;|&]|[<>]\\()"+t),lookbehind:!0,alias:"constant"}},alias:"variable",lookbehind:!0},parameter:{pattern:/(^|\s)-{1,2}(?:\w+:[+-]?)?\w+(?:\.\w+)*(?=[=\s]|$)/,alias:"variable",lookbehind:!0},string:[{pattern:/((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,lookbehind:!0,greedy:!0,inside:r},{pattern:/((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,lookbehind:!0,greedy:!0,inside:{bash:n}},{pattern:/(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,lookbehind:!0,greedy:!0,inside:r},{pattern:/(^|[^$\\])'[^']*'/,lookbehind:!0,greedy:!0},{pattern:/\$'(?:[^'\\]|\\[\s\S])*'/,greedy:!0,inside:{entity:r.entity}}],environment:{pattern:RegExp("\\$?"+t),alias:"constant"},variable:r.variable,function:{pattern:/(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cargo|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|java|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|sysctl|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,lookbehind:!0},keyword:{pattern:/(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,lookbehind:!0},builtin:{pattern:/(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,lookbehind:!0,alias:"class-name"},boolean:{pattern:/(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,lookbehind:!0},"file-descriptor":{pattern:/\B&\d\b/,alias:"important"},operator:{pattern:/\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,inside:{"file-descriptor":{pattern:/^\d/,alias:"important"}}},punctuation:/\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,number:{pattern:/(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,lookbehind:!0}},n.inside=e.languages.bash;for(var i=["comment","function-name","for-or-select","assign-left","parameter","string","environment","function","keyword","builtin","boolean","file-descriptor","operator","punctuation","number"],s=r.variable[1].inside,a=0;a<i.length;a++)s[i[a]]=e.languages.bash[i[a]];e.languages.sh=e.languages.bash,e.languages.shell=e.languages.bash})(Prism);Prism.languages.json={property:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,lookbehind:!0,greedy:!0},string:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,lookbehind:!0,greedy:!0},comment:{pattern:/\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},number:/-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,punctuation:/[{}[\],]/,operator:/:/,boolean:/\b(?:false|true)\b/,null:{pattern:/\bnull\b/,alias:"keyword"}};Prism.languages.webmanifest=Prism.languages.json;Prism.languages.sql={comment:{pattern:/(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/,lookbehind:!0},variable:[{pattern:/@(["'`])(?:\\[\s\S]|(?!\1)[^\\])+\1/,greedy:!0},/@[\w.$]+/],string:{pattern:/(^|[^@\\])("|')(?:\\[\s\S]|(?!\2)[^\\]|\2\2)*\2/,greedy:!0,lookbehind:!0},identifier:{pattern:/(^|[^@\\])`(?:\\[\s\S]|[^`\\]|``)*`/,greedy:!0,lookbehind:!0,inside:{punctuation:/^`|`$/}},function:/\b(?:AVG|COUNT|FIRST|FORMAT|LAST|LCASE|LEN|MAX|MID|MIN|MOD|NOW|ROUND|SUM|UCASE)(?=\s*\()/i,keyword:/\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|AUTO_INCREMENT|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR(?:ACTER|SET)?|CHECK(?:POINT)?|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMNS?|COMMENT|COMMIT(?:TED)?|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS(?:TABLE)?|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|CYCLE|DATA(?:BASES?)?|DATE(?:TIME)?|DAY|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DELIMITERS?|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE|ELSE(?:IF)?|ENABLE|ENCLOSED|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPED?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|HOUR|IDENTITY(?:COL|_INSERT)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTERVAL|INTO|INVOKER|ISOLATION|ITERATE|JOIN|KEYS?|KILL|LANGUAGE|LAST|LEAVE|LEFT|LEVEL|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|LOOP|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MINUTE|MODE|MODIFIES|MODIFY|MONTH|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL|NATURAL|NCHAR|NEXT|NO|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREPARE|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READS?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEAT(?:ABLE)?|REPLACE|REPLICATION|REQUIRE|RESIGNAL|RESTORE|RESTRICT|RETURN(?:ING|S)?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SECOND|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|SQL|START(?:ING)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED|TEXT(?:SIZE)?|THEN|TIME(?:STAMP)?|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNLOCK|UNPIVOT|UNSIGNED|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?|YEAR)\b/i,boolean:/\b(?:FALSE|NULL|TRUE)\b/i,number:/\b0x[\da-f]+\b|\b\d+(?:\.\d*)?|\B\.\d+\b/i,operator:/[-+*\/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|DIV|ILIKE|IN|IS|LIKE|NOT|OR|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i,punctuation:/[;[\]()`,.]/};(function(e){var t=/(?:\\.|[^\\\n\r]|(?:\n|\r\n?)(?![\r\n]))/.source;function n(d){return d=d.replace(/<inner>/g,function(){return t}),RegExp(/((?:^|[^\\])(?:\\{2})*)/.source+"(?:"+d+")")}var r=/(?:\\.|``(?:[^`\r\n]|`(?!`))+``|`[^`\r\n]+`|[^\\|\r\n`])+/.source,i=/\|?__(?:\|__)+\|?(?:(?:\n|\r\n?)|(?![\s\S]))/.source.replace(/__/g,function(){return r}),s=/\|?[ \t]*:?-{3,}:?[ \t]*(?:\|[ \t]*:?-{3,}:?[ \t]*)+\|?(?:\n|\r\n?)/.source;e.languages.markdown=e.languages.extend("markup",{}),e.languages.insertBefore("markdown","prolog",{"front-matter-block":{pattern:/(^(?:\s*[\r\n])?)---(?!.)[\s\S]*?[\r\n]---(?!.)/,lookbehind:!0,greedy:!0,inside:{punctuation:/^---|---$/,"front-matter":{pattern:/\S+(?:\s+\S+)*/,alias:["yaml","language-yaml"],inside:e.languages.yaml}}},blockquote:{pattern:/^>(?:[\t ]*>)*/m,alias:"punctuation"},table:{pattern:RegExp("^"+i+s+"(?:"+i+")*","m"),inside:{"table-data-rows":{pattern:RegExp("^("+i+s+")(?:"+i+")*$"),lookbehind:!0,inside:{"table-data":{pattern:RegExp(r),inside:e.languages.markdown},punctuation:/\|/}},"table-line":{pattern:RegExp("^("+i+")"+s+"$"),lookbehind:!0,inside:{punctuation:/\||:?-{3,}:?/}},"table-header-row":{pattern:RegExp("^"+i+"$"),inside:{"table-header":{pattern:RegExp(r),alias:"important",inside:e.languages.markdown},punctuation:/\|/}}}},code:[{pattern:/((?:^|\n)[ \t]*\n|(?:^|\r\n?)[ \t]*\r\n?)(?: {4}|\t).+(?:(?:\n|\r\n?)(?: {4}|\t).+)*/,lookbehind:!0,alias:"keyword"},{pattern:/^```[\s\S]*?^```$/m,greedy:!0,inside:{"code-block":{pattern:/^(```.*(?:\n|\r\n?))[\s\S]+?(?=(?:\n|\r\n?)^```$)/m,lookbehind:!0},"code-language":{pattern:/^(```).+/,lookbehind:!0},punctuation:/```/}}],title:[{pattern:/\S.*(?:\n|\r\n?)(?:==+|--+)(?=[ \t]*$)/m,alias:"important",inside:{punctuation:/==+$|--+$/}},{pattern:/(^\s*)#.+/m,lookbehind:!0,alias:"important",inside:{punctuation:/^#+|#+$/}}],hr:{pattern:/(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,lookbehind:!0,alias:"punctuation"},list:{pattern:/(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,lookbehind:!0,alias:"punctuation"},"url-reference":{pattern:/!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,inside:{variable:{pattern:/^(!?\[)[^\]]+/,lookbehind:!0},string:/(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,punctuation:/^[\[\]!:]|[<>]/},alias:"url"},bold:{pattern:n(/\b__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__\b|\*\*(?:(?!\*)<inner>|\*(?:(?!\*)<inner>)+\*)+\*\*/.source),lookbehind:!0,greedy:!0,inside:{content:{pattern:/(^..)[\s\S]+(?=..$)/,lookbehind:!0,inside:{}},punctuation:/\*\*|__/}},italic:{pattern:n(/\b_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_\b|\*(?:(?!\*)<inner>|\*\*(?:(?!\*)<inner>)+\*\*)+\*/.source),lookbehind:!0,greedy:!0,inside:{content:{pattern:/(^.)[\s\S]+(?=.$)/,lookbehind:!0,inside:{}},punctuation:/[*_]/}},strike:{pattern:n(/(~~?)(?:(?!~)<inner>)+\2/.source),lookbehind:!0,greedy:!0,inside:{content:{pattern:/(^~~?)[\s\S]+(?=\1$)/,lookbehind:!0,inside:{}},punctuation:/~~?/}},"code-snippet":{pattern:/(^|[^\\`])(?:``[^`\r\n]+(?:`[^`\r\n]+)*``(?!`)|`[^`\r\n]+`(?!`))/,lookbehind:!0,greedy:!0,alias:["code","keyword"]},url:{pattern:n(/!?\[(?:(?!\])<inner>)+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)|[ \t]?\[(?:(?!\])<inner>)+\])/.source),lookbehind:!0,greedy:!0,inside:{operator:/^!/,content:{pattern:/(^\[)[^\]]+(?=\])/,lookbehind:!0,inside:{}},variable:{pattern:/(^\][ \t]?\[)[^\]]+(?=\]$)/,lookbehind:!0},url:{pattern:/(^\]\()[^\s)]+/,lookbehind:!0},string:{pattern:/(^[ \t]+)"(?:\\.|[^"\\])*"(?=\)$)/,lookbehind:!0}}}}),["url","bold","italic","strike"].forEach(function(d){["url","bold","italic","strike","code-snippet"].forEach(function(f){d!==f&&(e.languages.markdown[d].inside.content.inside[f]=e.languages.markdown[f])})}),e.hooks.add("after-tokenize",function(d){if(d.language!=="markdown"&&d.language!=="md")return;function f(p){if(!(!p||typeof p=="string"))for(var h=0,x=p.length;h<x;h++){var b=p[h];if(b.type!=="code"){f(b.content);continue}var k=b.content[1],g=b.content[3];if(k&&g&&k.type==="code-language"&&g.type==="code-block"&&typeof k.content=="string"){var m=k.content.replace(/\b#/g,"sharp").replace(/\b\+\+/g,"pp");m=(/[a-z][\w-]*/i.exec(m)||[""])[0].toLowerCase();var y="language-"+m;g.alias?typeof g.alias=="string"?g.alias=[g.alias,y]:g.alias.push(y):g.alias=[y]}}}f(d.tokens)}),e.hooks.add("wrap",function(d){if(d.type==="code-block"){for(var f="",p=0,h=d.classes.length;p<h;p++){var x=d.classes[p],b=/language-(.+)/.exec(x);if(b){f=b[1];break}}var k=e.languages[f];if(k)d.content=e.highlight(u(d.content),k,f);else if(f&&f!=="none"&&e.plugins.autoloader){var g="md-"+new Date().valueOf()+"-"+Math.floor(Math.random()*1e16);d.attributes.id=g,e.plugins.autoloader.loadLanguages(f,function(){var m=document.getElementById(g);m&&(m.innerHTML=e.highlight(m.textContent,e.languages[f],f))})}}});var a=RegExp(e.languages.markup.tag.pattern.source,"gi"),o={amp:"&",lt:"<",gt:">",quot:'"'},l=String.fromCodePoint||String.fromCharCode;function u(d){var f=d.replace(a,"");return f=f.replace(/&(\w{1,8}|#x?[\da-f]{1,8});/gi,function(p,h){if(h=h.toLowerCase(),h[0]==="#"){var x;return h[1]==="x"?x=parseInt(h.slice(2),16):x=Number(h.slice(1)),l(x)}else{var b=o[h];return b||p}}),f}e.languages.md=e.languages.markdown})(Prism);(function(e){var t=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;e.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+t.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+t.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+t.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+t.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:t,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},e.languages.css.atrule.inside.rest=e.languages.css;var n=e.languages.markup;n&&(n.tag.addInlined("style","css"),n.tag.addAttribute("style","css"))})(Prism);Prism.languages.c=Prism.languages.extend("clike",{comment:{pattern:/\/\/(?:[^\r\n\\]|\\(?:\r\n?|\n|(?![\r\n])))*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},string:{pattern:/"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,greedy:!0},"class-name":{pattern:/(\b(?:enum|struct)\s+(?:__attribute__\s*\(\([\s\S]*?\)\)\s*)?)\w+|\b[a-z]\w*_t\b/,lookbehind:!0},keyword:/\b(?:_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|__attribute__|asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|inline|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|typeof|union|unsigned|void|volatile|while)\b/,function:/\b[a-z_]\w*(?=\s*\()/i,number:/(?:\b0x(?:[\da-f]+(?:\.[\da-f]*)?|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)[ful]{0,4}/i,operator:/>>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?/});Prism.languages.insertBefore("c","string",{char:{pattern:/'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n]){0,32}'/,greedy:!0}});Prism.languages.insertBefore("c","string",{macro:{pattern:/(^[\t ]*)#\s*[a-z](?:[^\r\n\\/]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|\\(?:\r\n|[\s\S]))*/im,lookbehind:!0,greedy:!0,alias:"property",inside:{string:[{pattern:/^(#\s*include\s*)<[^>]+>/,lookbehind:!0},Prism.languages.c.string],char:Prism.languages.c.char,comment:Prism.languages.c.comment,"macro-name":[{pattern:/(^#\s*define\s+)\w+\b(?!\()/i,lookbehind:!0},{pattern:/(^#\s*define\s+)\w+\b(?=\()/i,lookbehind:!0,alias:"function"}],directive:{pattern:/^(#\s*)[a-z]+/,lookbehind:!0,alias:"keyword"},"directive-hash":/^#/,punctuation:/##|\\(?=[\r\n])/,expression:{pattern:/\S[\s\S]*/,inside:Prism.languages.c}}}});Prism.languages.insertBefore("c","function",{constant:/\b(?:EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|__DATE__|__FILE__|__LINE__|__TIMESTAMP__|__TIME__|__func__|stderr|stdin|stdout)\b/});delete Prism.languages.c.boolean;(function(e){var t=/\b(?:alignas|alignof|asm|auto|bool|break|case|catch|char|char16_t|char32_t|char8_t|class|co_await|co_return|co_yield|compl|concept|const|const_cast|consteval|constexpr|constinit|continue|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|final|float|for|friend|goto|if|import|inline|int|int16_t|int32_t|int64_t|int8_t|long|module|mutable|namespace|new|noexcept|nullptr|operator|override|private|protected|public|register|reinterpret_cast|requires|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|uint16_t|uint32_t|uint64_t|uint8_t|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/,n=/\b(?!<keyword>)\w+(?:\s*\.\s*\w+)*\b/.source.replace(/<keyword>/g,function(){return t.source});e.languages.cpp=e.languages.extend("c",{"class-name":[{pattern:RegExp(/(\b(?:class|concept|enum|struct|typename)\s+)(?!<keyword>)\w+/.source.replace(/<keyword>/g,function(){return t.source})),lookbehind:!0},/\b[A-Z]\w*(?=\s*::\s*\w+\s*\()/,/\b[A-Z_]\w*(?=\s*::\s*~\w+\s*\()/i,/\b\w+(?=\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>\s*::\s*\w+\s*\()/],keyword:t,number:{pattern:/(?:\b0b[01']+|\b0x(?:[\da-f']+(?:\.[\da-f']*)?|\.[\da-f']+)(?:p[+-]?[\d']+)?|(?:\b[\d']+(?:\.[\d']*)?|\B\.[\d']+)(?:e[+-]?[\d']+)?)[ful]{0,4}/i,greedy:!0},operator:/>>=?|<<=?|->|--|\+\+|&&|\|\||[?:~]|<=>|[-+*/%&|^!=<>]=?|\b(?:and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/,boolean:/\b(?:false|true)\b/}),e.languages.insertBefore("cpp","string",{module:{pattern:RegExp(/(\b(?:import|module)\s+)/.source+"(?:"+/"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|<[^<>\r\n]*>/.source+"|"+/<mod-name>(?:\s*:\s*<mod-name>)?|:\s*<mod-name>/.source.replace(/<mod-name>/g,function(){return n})+")"),lookbehind:!0,greedy:!0,inside:{string:/^[<"][\s\S]+/,operator:/:/,punctuation:/\./}},"raw-string":{pattern:/R"([^()\\ ]{0,16})\([\s\S]*?\)\1"/,alias:"string",greedy:!0}}),e.languages.insertBefore("cpp","keyword",{"generic-function":{pattern:/\b(?!operator\b)[a-z_]\w*\s*<(?:[^<>]|<[^<>]*>)*>(?=\s*\()/i,inside:{function:/^\w+/,generic:{pattern:/<[\s\S]+/,alias:"class-name",inside:e.languages.cpp}}}}),e.languages.insertBefore("cpp","operator",{"double-colon":{pattern:/::/,alias:"punctuation"}}),e.languages.insertBefore("cpp","class-name",{"base-clause":{pattern:/(\b(?:class|struct)\s+\w+\s*:\s*)[^;{}"'\s]+(?:\s+[^;{}"'\s]+)*(?=\s*[;{])/,lookbehind:!0,greedy:!0,inside:e.languages.extend("cpp",{})}}),e.languages.insertBefore("inside","double-colon",{"class-name":/\b[a-z_]\w*\b(?!\s*::)/i},e.languages.cpp["base-clause"])})(Prism);(function(e){var t=/\b(?:abstract|assert|boolean|break|byte|case|catch|char|class|const|continue|default|do|double|else|enum|exports|extends|final|finally|float|for|goto|if|implements|import|instanceof|int|interface|long|module|native|new|non-sealed|null|open|opens|package|permits|private|protected|provides|public|record(?!\s*[(){}[\]<>=%~.:,;?+\-*/&|^])|requires|return|sealed|short|static|strictfp|super|switch|synchronized|this|throw|throws|to|transient|transitive|try|uses|var|void|volatile|while|with|yield)\b/,n=/(?:[a-z]\w*\s*\.\s*)*(?:[A-Z]\w*\s*\.\s*)*/.source,r={pattern:RegExp(/(^|[^\w.])/.source+n+/[A-Z](?:[\d_A-Z]*[a-z]\w*)?\b/.source),lookbehind:!0,inside:{namespace:{pattern:/^[a-z]\w*(?:\s*\.\s*[a-z]\w*)*(?:\s*\.)?/,inside:{punctuation:/\./}},punctuation:/\./}};e.languages.java=e.languages.extend("clike",{string:{pattern:/(^|[^\\])"(?:\\.|[^"\\\r\n])*"/,lookbehind:!0,greedy:!0},"class-name":[r,{pattern:RegExp(/(^|[^\w.])/.source+n+/[A-Z]\w*(?=\s+\w+\s*[;,=()]|\s*(?:\[[\s,]*\]\s*)?::\s*new\b)/.source),lookbehind:!0,inside:r.inside},{pattern:RegExp(/(\b(?:class|enum|extends|implements|instanceof|interface|new|record|throws)\s+)/.source+n+/[A-Z]\w*\b/.source),lookbehind:!0,inside:r.inside}],keyword:t,function:[e.languages.clike.function,{pattern:/(::\s*)[a-z_]\w*/,lookbehind:!0}],number:/\b0b[01][01_]*L?\b|\b0x(?:\.[\da-f_p+-]+|[\da-f_]+(?:\.[\da-f_p+-]+)?)\b|(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?\d[\d_]*)?[dfl]?/i,operator:{pattern:/(^|[^.])(?:<<=?|>>>?=?|->|--|\+\+|&&|\|\||::|[?:~]|[-+*/%&|^!=<>]=?)/m,lookbehind:!0},constant:/\b[A-Z][A-Z_\d]+\b/}),e.languages.insertBefore("java","string",{"triple-quoted-string":{pattern:/"""[ \t]*[\r\n](?:(?:"|"")?(?:\\.|[^"\\]))*"""/,greedy:!0,alias:"string"},char:{pattern:/'(?:\\.|[^'\\\r\n]){1,6}'/,greedy:!0}}),e.languages.insertBefore("java","class-name",{annotation:{pattern:/(^|[^.])@\w+(?:\s*\.\s*\w+)*/,lookbehind:!0,alias:"punctuation"},generics:{pattern:/<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&))*>)*>)*>)*>/,inside:{"class-name":r,keyword:t,punctuation:/[<>(),.:]/,operator:/[?&|]/}},import:[{pattern:RegExp(/(\bimport\s+)/.source+n+/(?:[A-Z]\w*|\*)(?=\s*;)/.source),lookbehind:!0,inside:{namespace:r.inside.namespace,punctuation:/\./,operator:/\*/,"class-name":/\w+/}},{pattern:RegExp(/(\bimport\s+static\s+)/.source+n+/(?:\w+|\*)(?=\s*;)/.source),lookbehind:!0,alias:"static",inside:{namespace:r.inside.namespace,static:/\b\w+$/,punctuation:/\./,operator:/\*/,"class-name":/\w+/}}],namespace:{pattern:RegExp(/(\b(?:exports|import(?:\s+static)?|module|open|opens|package|provides|requires|to|transitive|uses|with)\s+)(?!<keyword>)[a-z]\w*(?:\.[a-z]\w*)*\.?/.source.replace(/<keyword>/g,function(){return t.source})),lookbehind:!0,inside:{punctuation:/\./}}})})(Prism);(function(e){for(var t=/\/\*(?:[^*/]|\*(?!\/)|\/(?!\*)|<self>)*\*\//.source,n=0;n<2;n++)t=t.replace(/<self>/g,function(){return t});t=t.replace(/<self>/g,function(){return/[^\s\S]/.source}),e.languages.rust={comment:[{pattern:RegExp(/(^|[^\\])/.source+t),lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/b?"(?:\\[\s\S]|[^\\"])*"|b?r(#*)"(?:[^"]|"(?!\1))*"\1/,greedy:!0},char:{pattern:/b?'(?:\\(?:x[0-7][\da-fA-F]|u\{(?:[\da-fA-F]_*){1,6}\}|.)|[^\\\r\n\t'])'/,greedy:!0},attribute:{pattern:/#!?\[(?:[^\[\]"]|"(?:\\[\s\S]|[^\\"])*")*\]/,greedy:!0,alias:"attr-name",inside:{string:null}},"closure-params":{pattern:/([=(,:]\s*|\bmove\s*)\|[^|]*\||\|[^|]*\|(?=\s*(?:\{|->))/,lookbehind:!0,greedy:!0,inside:{"closure-punctuation":{pattern:/^\||\|$/,alias:"punctuation"},rest:null}},"lifetime-annotation":{pattern:/'\w+/,alias:"symbol"},"fragment-specifier":{pattern:/(\$\w+:)[a-z]+/,lookbehind:!0,alias:"punctuation"},variable:/\$\w+/,"function-definition":{pattern:/(\bfn\s+)\w+/,lookbehind:!0,alias:"function"},"type-definition":{pattern:/(\b(?:enum|struct|trait|type|union)\s+)\w+/,lookbehind:!0,alias:"class-name"},"module-declaration":[{pattern:/(\b(?:crate|mod)\s+)[a-z][a-z_\d]*/,lookbehind:!0,alias:"namespace"},{pattern:/(\b(?:crate|self|super)\s*)::\s*[a-z][a-z_\d]*\b(?:\s*::(?:\s*[a-z][a-z_\d]*\s*::)*)?/,lookbehind:!0,alias:"namespace",inside:{punctuation:/::/}}],keyword:[/\b(?:Self|abstract|as|async|await|become|box|break|const|continue|crate|do|dyn|else|enum|extern|final|fn|for|if|impl|in|let|loop|macro|match|mod|move|mut|override|priv|pub|ref|return|self|static|struct|super|trait|try|type|typeof|union|unsafe|unsized|use|virtual|where|while|yield)\b/,/\b(?:bool|char|f(?:32|64)|[ui](?:8|16|32|64|128|size)|str)\b/],function:/\b[a-z_]\w*(?=\s*(?:::\s*<|\())/,macro:{pattern:/\b\w+!/,alias:"property"},constant:/\b[A-Z_][A-Z_\d]+\b/,"class-name":/\b[A-Z]\w*\b/,namespace:{pattern:/(?:\b[a-z][a-z_\d]*\s*::\s*)*\b[a-z][a-z_\d]*\s*::(?!\s*<)/,inside:{punctuation:/::/}},number:/\b(?:0x[\dA-Fa-f](?:_?[\dA-Fa-f])*|0o[0-7](?:_?[0-7])*|0b[01](?:_?[01])*|(?:(?:\d(?:_?\d)*)?\.)?\d(?:_?\d)*(?:[Ee][+-]?\d+)?)(?:_?(?:f32|f64|[iu](?:8|16|32|64|size)?))?\b/,boolean:/\b(?:false|true)\b/,punctuation:/->|\.\.=|\.{1,3}|::|[{}[\];(),:]/,operator:/[-+*\/%!^]=?|=[=>]?|&[&=]?|\|[|=]?|<<?=?|>>?=?|[@?]/},e.languages.rust["closure-params"].inside.rest=e.languages.rust,e.languages.rust.attribute.inside.string=e.languages.rust.string})(Prism);Prism.languages.go=Prism.languages.extend("clike",{string:{pattern:/(^|[^\\])"(?:\\.|[^"\\\r\n])*"|`[^`]*`/,lookbehind:!0,greedy:!0},keyword:/\b(?:break|case|chan|const|continue|default|defer|else|fallthrough|for|func|go(?:to)?|if|import|interface|map|package|range|return|select|struct|switch|type|var)\b/,boolean:/\b(?:_|false|iota|nil|true)\b/,number:[/\b0(?:b[01_]+|o[0-7_]+)i?\b/i,/\b0x(?:[a-f\d_]+(?:\.[a-f\d_]*)?|\.[a-f\d_]+)(?:p[+-]?\d+(?:_\d+)*)?i?(?!\w)/i,/(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?[\d_]+)?i?(?!\w)/i],operator:/[*\/%^!=]=?|\+[=+]?|-[=-]?|\|[=|]?|&(?:=|&|\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\.\.\./,builtin:/\b(?:append|bool|byte|cap|close|complex|complex(?:64|128)|copy|delete|error|float(?:32|64)|u?int(?:8|16|32|64)?|imag|len|make|new|panic|print(?:ln)?|real|recover|rune|string|uintptr)\b/});Prism.languages.insertBefore("go","string",{char:{pattern:/'(?:\\.|[^'\\\r\n]){0,10}'/,greedy:!0}});delete Prism.languages.go["class-name"];(function(e){var t=/[*&][^\s[\]{},]+/,n=/!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/,r="(?:"+n.source+"(?:[ 	]+"+t.source+")?|"+t.source+"(?:[ 	]+"+n.source+")?)",i=/(?:[^\s\x00-\x08\x0e-\x1f!"#%&'*,\-:>?@[\]`{|}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*/.source.replace(/<PLAIN>/g,function(){return/[^\s\x00-\x08\x0e-\x1f,[\]{}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]/.source}),s=/"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/.source;function a(o,l){l=(l||"").replace(/m/g,"")+"m";var u=/([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|\]|\}|(?:[\r\n]\s*)?#))/.source.replace(/<<prop>>/g,function(){return r}).replace(/<<value>>/g,function(){return o});return RegExp(u,l)}e.languages.yaml={scalar:{pattern:RegExp(/([\-:]\s*(?:\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\S[^\r\n]*(?:\2[^\r\n]+)*)/.source.replace(/<<prop>>/g,function(){return r})),lookbehind:!0,alias:"string"},comment:/#.*/,key:{pattern:RegExp(/((?:^|[:\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\s*:\s)/.source.replace(/<<prop>>/g,function(){return r}).replace(/<<key>>/g,function(){return"(?:"+i+"|"+s+")"})),lookbehind:!0,greedy:!0,alias:"atrule"},directive:{pattern:/(^[ \t]*)%.+/m,lookbehind:!0,alias:"important"},datetime:{pattern:a(/\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?(?:[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?))?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?/.source),lookbehind:!0,alias:"number"},boolean:{pattern:a(/false|true/.source,"i"),lookbehind:!0,alias:"important"},null:{pattern:a(/null|~/.source,"i"),lookbehind:!0,alias:"important"},string:{pattern:a(s),lookbehind:!0,greedy:!0},number:{pattern:a(/[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|\.inf|\.nan)/.source,"i"),lookbehind:!0},tag:n,important:t,punctuation:/---|[:[\]{}\-,|>?]|\.\.\./},e.languages.yml=e.languages.yaml})(Prism);function p0(e){return String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function jz({children:e}){const[t,n]=C.useState(!1),r=(e==null?void 0:e.props)||{},i=r.className||"",s=/language-(\w+)/.exec(i),a=s?s[1].toLowerCase():"",o=String(r.children||"").replace(/\n$/,""),u={py:"python",js:"javascript",ts:"typescript",sh:"bash",shell:"bash",yml:"yaml",html:"markup",xml:"markup"}[a]||a||"text",d=C.useMemo(()=>{if(!o)return"";const p=f0.languages[u];if(p)try{return f0.highlight(o,p,u)}catch{return p0(o)}return p0(o)},[o,u]),f=()=>{o&&(navigator.clipboard.writeText(o),n(!0),setTimeout(()=>n(!1),2e3))};return c.jsxs("div",{className:"code-block-wrapper",children:[c.jsxs("div",{className:"code-block-header",children:[c.jsx("span",{className:"code-block-lang",children:a||"CODE"}),c.jsxs("button",{type:"button",onClick:f,className:"copy-code-btn","aria-label":"Copy code to clipboard",children:[t?c.jsx(Up,{size:12,className:"text-accent"}):c.jsx(nb,{size:12}),c.jsx("span",{children:t?"Copied!":"Copy"})]})]}),c.jsx("pre",{className:"code-block-pre",children:c.jsx("code",{className:i||`language-${u}`,dangerouslySetInnerHTML:{__html:d}})})]})}function Rz({children:e,className:t,...n}){return t&&t.includes("language-")?c.jsx("code",{className:t,...n,children:e}):c.jsx("code",{className:"inline-code",...n,children:e})}function Lz({href:e,children:t,...n}){return e&&/^(https?:|mailto:|\/|#)/i.test(e.trim())?c.jsx("a",{href:e,target:"_blank",rel:"noopener noreferrer",className:"markdown-link",...n,children:t}):c.jsx("span",{children:t})}function Dz({content:e}){return e?c.jsx("div",{className:"markdown-content",children:c.jsx(p4,{remarkPlugins:[Nz],components:{pre:jz,code:Rz,a:Lz,table:({node:t,...n})=>c.jsx("div",{className:"table-wrapper",children:c.jsx("table",{className:"markdown-table",...n})})},children:e})}):null}const h0={dont:"don't",cant:"can't",wont:"won't",didnt:"didn't",doesnt:"doesn't",isnt:"isn't",arent:"aren't",wasnt:"wasn't",werent:"weren't",hasnt:"hasn't",havent:"haven't",hadnt:"hadn't",couldnt:"couldn't",shouldnt:"shouldn't",wouldnt:"wouldn't",youre:"you're",theyre:"they're",weve:"we've",theyve:"they've",youve:"you've",im:"I'm",ive:"I've",ill:"I'll",id:"I'd",youll:"you'll",theyll:"they'll",thats:"that's",whats:"what's",hows:"how's",wheres:"where's",theres:"there's",lets:"let's",itll:"it'll"},m0={grammer:"grammar",gramer:"grammar",gramar:"grammar",fropdown:"dropdown",fropdowns:"dropdowns",modelall:"models",teh:"the",hte:"the",recieve:"receive",recieved:"received",recieving:"receiving",seperate:"separate",seperated:"separated",seperating:"separating",definately:"definitely",definatly:"definitely",occured:"occurred",occuring:"occurring",untill:"until",alot:"a lot",wich:"which",becuase:"because",beleive:"believe",wierd:"weird",thier:"their",truely:"truly",goverment:"government",enviroment:"environment",tommorrow:"tomorrow",tomorow:"tomorrow",accomodate:"accommodate",embarass:"embarrass",neccessary:"necessary",necesary:"necessary",acheive:"achieve",existance:"existence",occurance:"occurrence",refering:"referring",intrest:"interest",intresting:"interesting",diffrent:"different",compleatly:"completely",usfull:"useful",helpfull:"helpful",progam:"program",progams:"programs",programing:"programming",fucntion:"function",fucntions:"functions",varible:"variable",varibles:"variables",libary:"library",libaries:"libraries",databse:"database",databses:"databases",lenght:"length",heigth:"height",hight:"height",exmaple:"example",exmaples:"examples",resposne:"response",resposnes:"responses",qustion:"question",qustions:"questions",exaplin:"explain",alright:"all right",anycase:"any case",cannot:"can not",calender:"calendar",collegue:"colleague",concious:"conscious",foregin:"foreign",gaurentee:"guarantee",happend:"happened",ignorant:"ignorant",independant:"independent",mispell:"misspell",mispelled:"misspelled",noticable:"noticeable",oppurtunity:"opportunity",persue:"pursue",posession:"possession",priviledge:"privilege",reccomend:"recommend",recommand:"recommend",succesful:"successful",suprise:"surprise",threshhold:"threshold",appreance:"appearance",appriciate:"appreciate",begining:"beginning",beeing:"being",bussiness:"business",cematography:"cinematography",definate:"definite",enviorment:"environment",experiance:"experience",finaly:"finally",foriegn:"foreign",greatful:"grateful",hapiness:"happiness",indepent:"independent",liason:"liaison",publically:"publicly",refered:"referred",relevent:"relevant",restaraunt:"restaurant",resturant:"restaurant",rhym:"rhyme",satsify:"satisfy",sepperate:"separate",serius:"serious",sponser:"sponsor",successfull:"successful",wether:"weather"},Mz=["monday","tuesday","wednesday","thursday","friday","saturday","sunday","january","february","march","april","may","june","july","august","september","october","november","december","python","javascript","typescript","react","fastapi","flask","redis","docker","ollama","eliza"];function g0(e,t){return!e||!t?t:e===e.toUpperCase()&&e.length>1?t.toUpperCase():e[0]===e[0].toUpperCase()?t.charAt(0).toUpperCase()+t.slice(1):t}function K2(e){if(!e)return e;const t=e.toLowerCase();return t==="i"?"I":h0[t]?g0(e,h0[t]):m0[t]?g0(e,m0[t]):Mz.includes(t)?t.charAt(0).toUpperCase()+t.slice(1):e}function Lo(e){if(!e||typeof e!="string")return"";const t=/([a-zA-Z0-9_']+|\s+|[^\s\w'])/g,n=e.match(t)||[e];let r=!0;return n.map(s=>{if(/^[.!?\n]+$/.test(s))return r=!0,s;if(/^\s+$/.test(s))return s;if(/^[a-zA-Z0-9_']+$/.test(s)){let a=K2(s);return r&&a.length>0&&(a=a.charAt(0).toUpperCase()+a.slice(1)),r=!1,a}return s}).join("")}function Fz(e){if(!e)return e;const t=e.match(/^(.*?)(\b[a-zA-Z0-9_']+\b)(\s*[\s.,?!])$/);if(!t)return e;const[,n,r,i]=t,s=K2(r),a=n.trimEnd(),l=a.length===0||/[.!?\n]$/.test(a)?s.charAt(0).toUpperCase()+s.slice(1):s;return l!==r?n+l+i:e}const Oz={default_provider:"auto",default_model:"",auto_speak:!0,voice_name:"",voice_profile:"eliza",voice_lang:"en-IN",speech_recognition_lang:"en-IN",voice_engine:"auto",speech_rate:1,speech_pitch:1,response_style:"balanced",custom_system_prompt:"",detailed_responses:!1,theme:LL()},y0={balanced:"Deliver a clear, well-structured, insightful response. Lead with the direct answer or main takeaway, follow with step-by-step reasoning or context, and conclude with practical next steps. Use headings, lists, or tables where they improve readability.",concise:"Provide the most useful answer in the fewest words possible. Lead with the core conclusion, use compact bullet points where helpful, and omit filler while preserving essential caveats and accuracy.",tutor:"Act as an exceptional, patient tutor. Explain complex concepts step by step in plain language, define technical terminology clearly, provide an intuitive analogy or concrete real-world example, and finish with a brief check-for-understanding recap.",expert:"Respond as a senior subject-matter expert. Provide technical rigor, state assumptions and trade-offs explicitly, discuss architectural and edge-case implications, and give production-grade depth without unnecessary filler.",coding:"Act as a principal software engineer. Provide correct, secure, and production-ready code. Use fenced code blocks with appropriate language identifiers. Include clear explanation of edge cases, dependencies, tests, and error handling. Do not invent non-existent APIs.",creative:"Be imaginative, engaging, and articulate while remaining coherent and insightful. Explore multiple perspectives or structured creative options and explain why the best idea stands out."};function Us(e){return e?e.replace(/<\/?(?:user_input|user_message|assistant|system)[^>]*>/gi,"").trim():""}function zz(e){return e?e.replace(new RegExp("\\p{Regional_Indicator}{2}","gu"),"").replace(/[\u{1F3F4}][\u{E0020}-\u{E007E}]+\u{E007F}/gu,"").replace(/[\uFE0E\uFE0F]?\u20E3/gu,"").replace(new RegExp("(?:\\p{Extended_Pictographic}|\\p{Emoji_Presentation}|\\p{Emoji_Modifier_Base})(?:[\\uFE0E\\uFE0F]|\\p{Emoji_Modifier})*(?:\\u200D(?:\\p{Extended_Pictographic}|\\p{Emoji_Presentation}|\\p{Emoji_Modifier_Base}|\\p{Emoji_Component})(?:[\\uFE0E\\uFE0F]|\\p{Emoji_Modifier})*)*","gu"),"").replace(/[\p{Emoji_Modifier}\uFE0E\uFE0F\u200D\u200C]/gu,"").replace(/\s+([.,!?;:])/g,"$1").replace(/\s+/g," ").trim():""}function Uz(e){if(!e)return"";let t=Us(e);return t=t.replace(/```[\s\S]*?```/g," [code snippet omitted] "),t=t.replace(/`([^`]+)`/g,"$1"),t=t.replace(/!\[([^\]]*)\]\([^)]+\)/g,""),t=t.replace(/\[([^\]]+)\]\([^)]+\)/g,"$1"),t=t.replace(/^#{1,6}\s+/gm,""),t=t.replace(/^\s*>\s+/gm,""),t=t.replace(/(\*\*|__)(.*?)\1/g,"$2"),t=t.replace(/(\*|_)(.*?)\1/g,"$2"),t=t.replace(/^[ \t]*[-*_]{3,}[ \t]*$/gm,""),t=t.replace(/\|/g," "),t=zz(t),t=t.replace(/\s+/g," ").trim(),t}function x0(e){var r;const t=["You are ELIZA AI, a helpful, accurate, and conversational AI assistant. Answer the user's actual question directly.","IDENTITY RULES:","- Your name is strictly 'ELIZA AI' (or 'Eliza AI'). If asked who you are or what your name is, state: 'I am ELIZA AI, your advanced conversational AI assistant.'","- Never state you do not have an identity or name.","","FORMATTING & RESPONSE RULES:","- Produce clean, well-structured Markdown that can be rendered directly by the frontend.","- Adapt the structure and length to the question: simple questions deserve concise answers (1-3 sentences, no unnecessary headings); complex questions deserve detailed, organized explanations.","- Headings: Use '# Title' or '## Section' only when appropriate. Never generate repetitive headings.","- Paragraphs: One main idea per short paragraph with blank lines between them. Explain technical terms in simple English.","- Lists: Use bullet points for features, items, and collections. Use numbered lists for sequential steps and workflows.","- Bold formatting: Use bold for important terms, definitions, and key takeaways. Do not bold entire paragraphs.","- Code: Use inline `code` for identifiers. Always use fenced code blocks with language identifiers (e.g., ```python) for code examples, with correct indentation.","- Tables: Use Markdown tables (| Col 1 | Col 2 |) when comparing items or displaying structured tabular data.","- Troubleshooting: Clearly state the problem, cause, solution, and verification steps.","- Avoid filler, repetition, excessive bolding, and generic disclaimers. Maintain conversation context across follow-ups."].join(`
`),n=e.detailed_responses?"Provide thorough, comprehensive answers with practical examples, edge cases, and actionable next steps.":"Keep the response appropriately sized and focused on the core request without unnecessary filler.";return[t,y0[e.response_style]||y0.balanced,n,(r=e.custom_system_prompt)==null?void 0:r.trim()].filter(Boolean).join(`

`)}function Xc(e,t,n,r){if(typeof window>"u")return!1;const i=Uz(e);return!i||!i.trim()?!1:(Ok(i,t,{onStart:n,onEnd:r}),!0)}const Bz=C.forwardRef(function({accessData:t,freeQuestionsCount:n=0,onQuestionUsed:r,onRequestEmailGate:i,onOpenFeedback:s,isModalActive:a=!1},o){const[l,u]=C.useState([]),[d,f]=C.useState(""),[p,h]=C.useState("idle"),[x,b]=C.useState(!1),[k,g]=C.useState(!1),[m,y]=C.useState([]),[v,E]=C.useState(Oz),[w,I]=C.useState(null),[N,R]=C.useState([]),[_,j]=C.useState(""),[U,G]=C.useState(!1),[q,H]=C.useState(!1),[le,Q]=C.useState(!1),[L,B]=C.useState(!0),[S,Y]=C.useState(!1),[ee,A]=C.useState(!1),[ue,Se]=C.useState(!0),se=C.useRef(null),Ee=C.useRef(null);C.useRef(null),C.useImperativeHandle(o,()=>({sendPendingMessage:()=>{},stopVoiceAndMic:()=>{pe(),Ge()}}));const $e=C.useMemo(()=>{var ce,P,T,z;const M=(ce=v.default_model)==null?void 0:ce.trim();if(v.default_provider==="auto"){const V=m.find(ie=>ie.available),X=((P=V==null?void 0:V.name)==null?void 0:P.toUpperCase())||"AUTO";return M?`${X} · ${M.toUpperCase()}`:"AUTO ROUTING"}const $=m.find(V=>V.id===v.default_provider),ae=((T=$==null?void 0:$.name)==null?void 0:T.toUpperCase())||((z=v.default_provider)==null?void 0:z.toUpperCase())||"MANUAL";return M?`${ae} · ${M.toUpperCase()}`:ae},[m,v.default_provider,v.default_model]),Ye=C.useCallback(async(M=!1)=>{try{const[$,ae,ce,P]=await Promise.all([In.health(),In.providers(),In.settings(),In.conversations()]);G($.status==="ok"),y(ae.providers||[]),E(T=>{let z=T.theme;try{const V=localStorage.getItem("eliza_user_selected_theme");V?z=V:T.theme?z=T.theme:ce.theme&&(z=ce.theme)}catch{}return{...T,...ce,theme:z}}),R(P.conversations||[]),j("")}catch{if(G(!1),M||m.length===0){const $=typeof window<"u"&&(window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1");j($?"Backend unavailable. Please start the FastAPI backend server and refresh.":"Backend unavailable. Please verify that the backend on Render is active.")}}},[m.length]);C.useEffect(()=>{Ye(!0);const M=setInterval(()=>Ye(!1),2e4);return()=>clearInterval(M)},[Ye]),C.useEffect(()=>{se.current&&(se.current.scrollTop=se.current.scrollHeight)},[l,p]);const pe=C.useCallback(()=>{ql(),p==="speaking"&&h("idle")},[p]),et=C.useCallback(M=>{if(M&&M.stopPropagation&&M.stopPropagation(),typeof window<"u"&&"speechSynthesis"in window)try{const $=new SpeechSynthesisUtterance("");$.volume=0,window.speechSynthesis.speak($)}catch{}Q($=>{const ae=!$;return ae&&pe(),ae})},[pe]),St=C.useCallback(async()=>{const M=window.SpeechRecognition||window.webkitSpeechRecognition;if(!M){j("Speech recognition is not supported in this browser. Please use Chrome or Safari over HTTPS.");return}if(pe(),typeof window<"u"&&"speechSynthesis"in window)try{const $=new SpeechSynthesisUtterance("");$.volume=0,window.speechSynthesis.speak($)}catch{}if(typeof navigator<"u"&&navigator.mediaDevices&&navigator.mediaDevices.getUserMedia)try{(await navigator.mediaDevices.getUserMedia({audio:!0})).getTracks().forEach(ae=>ae.stop())}catch($){if($.name==="NotAllowedError"||$.name==="PermissionDeniedError"){j("Microphone permission was denied. Please allow microphone access in your browser settings.");return}}try{const $=new M;$.continuous=!1,$.interimResults=!0,$.maxAlternatives=1,$.lang=v.speech_recognition_lang||"en-IN",$.onstart=()=>{H(!0),h("listening"),j("")},$.onresult=ae=>{const ce=Array.from(ae.results).map(P=>P[0].transcript).join("");f(ce)},$.onerror=ae=>{H(!1),h("idle"),ae.error==="not-allowed"||ae.error==="service-not-allowed"?j("Microphone not eligible. Please ensure HTTPS or localhost and allow microphone permissions."):ae.error!=="no-speech"&&j(`Microphone error: ${ae.error}`)},$.onend=()=>{H(!1),h("idle")},Ee.current=$,$.start()}catch($){H(!1),h("idle"),j($.message||"Failed to start microphone.")}},[pe]),Ge=C.useCallback(()=>{Ee.current&&Ee.current.stop(),H(!1),h("idle")},[]);C.useEffect(()=>{a&&(pe(),Ge())},[a,pe,Ge]),C.useEffect(()=>{(x||k||ee)&&pe()},[x,k,ee,pe]);const Gt=M=>{const $=M.target.value;if(L){const ae=$.slice(-1);if(/[\s.,?!]/.test(ae)){const ce=Fz($);f(ce);return}}f($)},jr=()=>{if(!d.trim())return;const M=Lo(d);f(M),Y(!0),setTimeout(()=>Y(!1),2e3)},Me=async M=>{var T,z,V,X,ie;let $=(typeof M=="string"?M:d).trim();if(!$||p==="thinking")return;if(L&&($=Lo($)),f(""),!Ta()&&n>=1&&(pe(),Ge(),i)){i();return}j(""),pe();const ce={role:"user",content:$,created_at:new Date().toISOString()},P=[...l,ce];u(P),h("thinking");try{const fe=Ta();let he;fe?(he=await _a.submitQuestion({message:$,provider:v.default_provider||"auto",model:v.default_model||void 0,routing_mode:v.default_provider==="auto"?"auto":"manual",system_prompt:x0(v),conversation_id:w,history:l.slice(-10)}),r&&he.remainingQuestions!==void 0&&r(he.remainingQuestions,he.blocked,he.blockedUntil)):(he=await In.chat({message:$,provider:v.default_provider||"auto",model:v.default_model||void 0,routing_mode:v.default_provider==="auto"?"auto":"manual",system_prompt:x0(v),conversation_id:w,history:l.slice(-10)}),r&&r(2,!1,null));const Pe={role:"assistant",content:Us(he.answer),provider:he.provider,model:he.model,created_at:he.created_at||new Date().toISOString()};u([...P,Pe]),I(he.conversation_id),h("idle");const Tn=he.remainingQuestions!==void 0&&(he.remainingQuestions<=0||he.blocked)||(t==null?void 0:t.blocked)||(t==null?void 0:t.remainingQuestions)!==void 0&&t.remainingQuestions<=0;v.auto_speak&&!le&&!a&&!Tn?Xc(he.answer,v,()=>h("speaking"),()=>h("idle")):pe()}catch(fe){if(pe(),Ge(),fe.data&&(fe.data.blocked||fe.status===403||(T=fe.message)!=null&&T.includes("limit"))){const Rr=((V=(z=fe.data)==null?void 0:z.detail)==null?void 0:V.blockedUntil)||((X=fe.data)==null?void 0:X.blockedUntil);r&&r(0,!0,Rr)}h("idle");const Pe=!fe.status&&(fe.message==="Failed to fetch"||((ie=fe.message)==null?void 0:ie.includes("NetworkError"))||fe.name==="TypeError")?"Network connection issue. Please check your connection or retry in a moment.":fe.message||"Failed to reach AI provider.",Tn={role:"assistant",content:Pe,error:!0,created_at:new Date().toISOString()};u([...P,Tn]),j(Pe)}},Cn=()=>{pe(),u([]),I(null),j(""),h("idle")},qt=async M=>{var $,ae,ce,P;try{pe();const T=await In.conversation(M);u(T.messages||[]),I(T.id),g(!1),j("")}catch(T){if(T.data&&(T.data.blocked||T.status===403||($=T.message)!=null&&$.includes("limit"))){const z=((ce=(ae=T.data)==null?void 0:ae.detail)==null?void 0:ce.blockedUntil)||((P=T.data)==null?void 0:P.blockedUntil);r&&r(0,!0,z)}j(T.message||"Failed to load conversation.")}},D=async(M,$)=>{var ae,ce,P,T;$.stopPropagation();try{await In.deleteConversation(M),R(z=>z.filter(V=>V.id!==M)),w===M&&Cn()}catch(z){if(z.data&&(z.data.blocked||z.status===403||(ae=z.message)!=null&&ae.includes("limit"))){const V=((P=(ce=z.data)==null?void 0:ce.detail)==null?void 0:P.blockedUntil)||((T=z.data)==null?void 0:T.blockedUntil);r&&r(0,!0,V)}j(z.message||"Failed to delete conversation.")}},ge=async M=>{M.theme&&Vk(M.theme);const $={...v,...M};E($);try{await In.saveSettings(M)}catch{}},re=M=>{navigator.clipboard.writeText(M)},xe=()=>{const M=l.map(P=>`[${P.role.toUpperCase()}] ${P.created_at||""}
${P.content}
`).join(`
---

`),$=new Blob([M],{type:"text/plain"}),ae=URL.createObjectURL($),ce=document.createElement("a");ce.href=ae,ce.download="eliza-conversation.txt",ce.click(),URL.revokeObjectURL(ae)};return c.jsxs("main",{className:`app-shell theme-${v.theme||"green"}`,children:[c.jsx("div",{className:"scanlines","aria-hidden":"true"}),c.jsxs("header",{className:"topbar",children:[c.jsxs("div",{className:"brand-lockup",children:[c.jsx("div",{className:"brand-mark",children:c.jsx(Gd,{size:20})}),c.jsxs("div",{children:[c.jsxs("div",{className:"brand-name",children:["ELIZA",c.jsx("span",{children:"AI"})]}),c.jsx("div",{className:"brand-subtitle",children:"CONVERSATIONAL INTELLIGENCE"})]})]}),c.jsxs("div",{className:"top-status",children:[c.jsx("span",{className:`status-dot ${U?"online":""}`}),U?"SYSTEM ONLINE":"BACKEND OFFLINE",c.jsx("span",{className:"status-divider"}),$e,t&&c.jsxs(c.Fragment,{children:[c.jsx("span",{className:"status-divider"}),c.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:"5px",padding:"2px 8px",borderRadius:"6px",background:"rgba(192, 132, 252, 0.15)",border:"1px solid rgba(192, 132, 252, 0.35)",color:"#c084fc",fontSize:"11px",fontFamily:"'DM Mono', monospace",fontWeight:"700"},title:`Account: ${t.email||""}`,children:["QUESTIONS REMAINING: ",t.remainingQuestions??t.remaining_questions??0,"/3"]})]})]}),c.jsxs("div",{className:"top-actions",children:[c.jsx("button",{className:"icon-button",onClick:()=>b(!0),title:"Settings","aria-label":"Settings",children:c.jsx(g_,{size:17})}),s&&c.jsxs("button",{className:"icon-button",onClick:s,title:"Give Feedback","aria-label":"Give Feedback",style:{display:"inline-flex",alignItems:"center",gap:"4px",width:"auto",padding:"8px 10px",fontSize:"12px",color:"#c084fc",borderColor:"rgba(192, 132, 252, 0.35)",background:"rgba(192, 132, 252, 0.08)"},children:[c.jsx(sb,{size:15}),c.jsx("span",{children:"Feedback"})]})]})]}),k&&c.jsxs("aside",{className:"history-panel",children:[c.jsxs("div",{className:"history-head",children:[c.jsxs("div",{children:[c.jsx("div",{className:"eyebrow",children:"MEMORY BANK"}),c.jsx("h3",{children:"Conversations"})]}),c.jsx("button",{className:"icon-button",onClick:()=>g(!1),"aria-label":"Close history",children:c.jsx(It,{size:16})})]}),N.length===0?c.jsx("p",{className:"empty-history",children:"No saved conversations yet."}):N.map(M=>{var $;return c.jsxs("div",{className:"history-item",role:"button",tabIndex:0,onClick:()=>qt(M.id),onKeyDown:ae=>ae.key==="Enter"&&qt(M.id),children:[c.jsxs("div",{className:"history-item-copy",children:[c.jsx("b",{children:M.title||"Untitled conversation"}),c.jsxs("small",{children:[(($=M.messages)==null?void 0:$.length)||0," messages"]})]}),c.jsx("button",{className:"tiny-icon",onClick:ae=>D(M.id,ae),title:"Delete conversation","aria-label":"Delete conversation",children:c.jsx(It,{size:14})})]},M.id)})]}),c.jsxs("section",{className:"hero-layout",children:[c.jsxs("div",{className:"system-meta",children:[c.jsx("span",{children:"FIG. 01"}),c.jsx("span",{children:"NEURAL INTERFACE"}),c.jsx("span",{children:"BUILD 2.0.0"})]}),c.jsxs("div",{className:"hero-center",children:[c.jsx(jL,{status:p}),c.jsxs("div",{className:"system-title",children:[c.jsx("span",{className:"eyebrow",children:"PERSONAL AI TERMINAL"}),c.jsxs("h1",{children:["How may I ",c.jsx("em",{children:"help you?"})]}),c.jsx("p",{children:"Ask a question. Start a conversation. Explore an idea."})]}),c.jsxs("div",{className:`state-pill state-${p}`,children:[c.jsx("span",{className:"state-light"}),p==="idle"?"AWAITING INPUT":p==="thinking"?"PROCESSING REQUEST":p==="listening"?"LISTENING TO YOU":"SPEAKING RESPONSE",c.jsx("span",{className:"state-pulse",children:p==="thinking"?"•••":p==="speaking"?c.jsx(J1,{size:14}):null})]})]}),c.jsxs("div",{className:"system-meta bottom-meta",children:[c.jsxs("span",{children:["VOICE I/O ","SpeechSynthesisUtterance"in window?"AVAILABLE":"LIMITED"]}),c.jsxs("span",{children:["MODEL ROUTING: ",$e]}),c.jsx("span",{children:"LATENCY: LIVE"})]})]}),c.jsxs("section",{className:"conversation-area",children:[c.jsxs("div",{className:"conversation-head",children:[c.jsxs("div",{children:[c.jsx("span",{className:"eyebrow",children:"LIVE TRANSMISSION"}),c.jsx("span",{className:"message-count",children:l.length?`${l.length} MESSAGES`:"NEW SESSION"})]}),c.jsxs("div",{className:"conversation-tools",style:{display:"flex",alignItems:"center",gap:"6px"},children:[c.jsxs("button",{className:"text-action",onClick:xe,disabled:!l.length,children:["Export ",c.jsx(o_,{size:13})]}),c.jsx("button",{className:"text-action",onClick:()=>u([]),disabled:!l.length,children:"Clear"}),c.jsx("button",{className:"text-action voice-toggle-btn",type:"button",onClick:et,onTouchEnd:M=>{M.preventDefault(),et(M)},title:le?"Voice response: OFF (Click to turn ON)":"Voice response: ON (Click to turn OFF)","aria-label":le?"Voice response is OFF":"Voice response is ON",style:{display:"inline-flex",alignItems:"center",justifyContent:"center",width:"28px",height:"28px",minWidth:"28px",padding:0,borderRadius:"6px",background:le?"rgba(255, 255, 255, 0.03)":"rgba(255, 255, 255, 0.08)",borderColor:le?"rgba(255, 255, 255, 0.08)":"rgba(255, 255, 255, 0.18)",color:le?"rgba(226, 238, 230, 0.35)":"#e2eee6",cursor:"pointer",touchAction:"manipulation"},children:le?c.jsx(k_,{size:14}):c.jsx(Yo,{size:14})})]})]}),c.jsxs("div",{className:"transcript",ref:se,children:[l.length===0?c.jsxs("div",{className:"welcome-line",children:[c.jsx("span",{className:"prompt-symbol",children:"›"}),c.jsx("span",{children:"Terminal ready. Ask anything or click the microphone to speak."}),c.jsx("span",{className:"cursor-block"})]}):l.map((M,$)=>c.jsxs("article",{className:`message message-${M.role} ${M.error?"message-error":""}`,children:[c.jsx("div",{className:"message-avatar",children:M.role==="assistant"?c.jsx(Gd,{size:14}):"YOU"}),c.jsxs("div",{className:"message-body",children:[c.jsxs("div",{className:"message-meta",children:[M.role==="assistant"?"ELIZA AI":"USER",c.jsx("span",{children:M.created_at?new Date(M.created_at).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}):"NOW"}),M.model&&c.jsxs("span",{className:"model-chip",children:[M.provider," / ",M.model]})]}),M.role==="assistant"&&!M.error?c.jsx(Dz,{content:Us(M.content)}):c.jsx("p",{children:Us(M.content)}),M.role==="assistant"&&!M.error&&c.jsxs("div",{className:"message-actions",children:[c.jsxs("button",{onClick:()=>re(Us(M.content)),title:"Copy response",children:[c.jsx(nb,{size:13})," Copy"]}),c.jsxs("button",{onClick:()=>Xc(M.content,v,()=>h("speaking"),()=>h("idle")),title:"Read response aloud",children:[c.jsx(Yo,{size:13})," Speak"]})]})]})]},`${M.created_at||"msg"}-${$}`)),p==="thinking"&&c.jsxs("div",{className:"thinking-line",children:[c.jsxs("span",{className:"thinking-dots",children:[c.jsx("i",{}),c.jsx("i",{}),c.jsx("i",{})]})," ","Synthesizing response..."]})]}),_&&c.jsxs("div",{className:"error-banner",children:[c.jsx("span",{children:_}),c.jsx("button",{onClick:()=>j(""),"aria-label":"Dismiss error",children:c.jsx(It,{size:14})})]}),c.jsxs("form",{className:"input-console",onSubmit:M=>{M.preventDefault();const $=L?Lo(d):d;Me($)},children:[c.jsx("div",{className:"input-prefix",children:"›"}),c.jsx("textarea",{rows:"1",value:d,onChange:Gt,onKeyDown:M=>{if(M.key==="Enter"&&!M.shiftKey){M.preventDefault();const $=L?Lo(d):d;Me($)}},placeholder:"Ask me anything, or speak to begin...","aria-label":"Your question",spellCheck:"true",autoCorrect:"on",autoCapitalize:"sentences",lang:"en"}),c.jsxs("div",{className:"input-actions",children:[d.trim()&&c.jsx("button",{type:"button",className:`console-icon ${S?"active":""}`,onClick:jr,title:S?"Grammar corrected!":"Fix grammar & spelling now","aria-label":"Fix grammar and spelling now",children:c.jsx(Gp,{size:16})}),p==="speaking"&&c.jsx("button",{type:"button",className:"console-icon",onClick:pe,title:"Stop speaking","aria-label":"Stop speaking",children:c.jsx(hb,{size:16})}),c.jsx("button",{type:"button",className:`console-icon ${q?"active":""}`,onClick:q?Ge:St,onTouchEnd:M=>{M.preventDefault(),q?Ge():St()},style:{touchAction:"manipulation"},title:q?"Stop listening":"Speak your question","aria-label":q?"Stop listening":"Speak your question",children:q?c.jsx(p_,{size:17}):c.jsx(qd,{size:17})}),c.jsx("button",{type:"submit",className:"send-button",disabled:!d.trim()||p==="thinking","aria-label":"Send message",children:c.jsx(ub,{size:16})})]})]}),c.jsxs("div",{className:"console-foot",children:[c.jsxs("span",{children:[c.jsx("span",{className:"tiny-led"})," ENCRYPTED LOCAL CONNECTION"]}),c.jsxs("span",{children:["ENTER TO SEND ",c.jsx("i",{children:"·"})," SHIFT + ENTER FOR NEW LINE"]}),c.jsxs("span",{onClick:()=>B(M=>!M),style:{cursor:"pointer"},title:"Click to toggle auto-grammar correction",children:["AUTO-GRAMMAR ",L?"ENABLED":"OFF"]})]})]}),c.jsxs("footer",{className:"app-footer",children:[c.jsxs("span",{children:["ELIZA AI ",c.jsx("b",{children:"©"})," 2026"]}),c.jsx("span",{children:"AI makes mistakes, but every mistake drives improvement"}),c.jsx("span",{children:"DEVELOPED BY AKHIL THADAKA · READY TO WORK & FREELANCE · CONTACT: 9121751697"})]}),ee&&c.jsxs("div",{className:"accessibility-panel",role:"dialog","aria-label":"Accessibility",children:[c.jsxs("div",{className:"accessibility-head",children:[c.jsxs("div",{children:[c.jsx("div",{className:"eyebrow",children:"ACCESSIBILITY"}),c.jsx("h3",{children:"Voice & Interaction"})]}),c.jsx("button",{className:"icon-button",onClick:()=>A(!1),"aria-label":"Close",children:c.jsx(It,{size:16})})]}),c.jsxs("label",{className:"toggle-row",children:[c.jsxs("span",{children:[c.jsx("b",{children:"Auto-grammar correction"}),c.jsx("small",{children:"Fix spelling and grammar as you type"})]}),c.jsx("input",{type:"checkbox",checked:L,onChange:M=>B(M.target.checked)})]}),c.jsxs("label",{className:"toggle-row",children:[c.jsxs("span",{children:[c.jsx("b",{children:"Show navigation bar"}),c.jsx("small",{children:"Toggle the quick-action navbar"})]}),c.jsx("input",{type:"checkbox",checked:ue,onChange:M=>Se(M.target.checked)})]}),c.jsxs("label",{className:"toggle-row",children:[c.jsxs("span",{children:[c.jsx("b",{children:"Mute voice output"}),c.jsx("small",{children:"Disable text-to-speech"})]}),c.jsx("input",{type:"checkbox",checked:le,onChange:M=>{Q(M.target.checked),M.target.checked||pe()}})]}),c.jsxs("div",{className:"accessibility-actions",children:[c.jsxs("button",{className:"text-action",type:"button",onClick:St,children:[c.jsx(qd,{size:14})," Test microphone"]}),c.jsxs("button",{className:"text-action",type:"button",onClick:()=>Xc("Hello, I am ELIZA AI.",v,()=>h("speaking"),()=>h("idle")),children:[c.jsx(Yo,{size:14})," Test voice"]})]})]}),c.jsx(DL,{open:x,onClose:()=>b(!1),providers:m,settings:v,onChange:ge})]})});function Vz(){const[e,t]=C.useState(!0),[n,r]=C.useState({isAnonymousFree:!0,remainingQuestions:3,remaining_questions:3,blocked:!1,email:""}),[i,s]=C.useState(!1),[a,o]=C.useState(""),[l,u]=C.useState(!1),[d,f]=C.useState(!1),[p,h]=C.useState(()=>{try{return Number(sessionStorage.getItem("eliza_free_q_count")||"0")}catch{return 0}}),x=C.useRef(null),b=C.useCallback(async()=>{const E=Ta(),w=_g();if(!E||!w){r({isAnonymousFree:!0,remainingQuestions:Math.max(0,3-p),remaining_questions:Math.max(0,3-p),blocked:!1,email:""}),t(!1);return}try{const I=await _a.getStatus();r({...I,email:w,isAnonymousFree:!1}),(I.blocked||I.remainingQuestions<=0)&&f(!0)}catch{E_(),r({isAnonymousFree:!0,remainingQuestions:Math.max(0,3-p),remaining_questions:Math.max(0,3-p),blocked:!1,email:""})}finally{t(!1)}},[p]);C.useEffect(()=>{b();const E=typeof window<"u"&&window.location.hash||"";if(E.includes("access_token=")){const I=new URLSearchParams(E.replace(/^#/,"")).get("access_token");I&&(window.history.replaceState(null,"",window.location.pathname+window.location.search),t(!0),fetch("https://www.googleapis.com/oauth2/v3/userinfo",{headers:{Authorization:`Bearer ${I}`}}).then(N=>N.json()).then(async N=>{if(N&&N.email){const R=await _a.googleLogin({email:N.email,name:N.name,picture:N.picture});sessionStorage.getItem("eliza_pending_q"),sessionStorage.removeItem("eliza_pending_q"),m(R)}}).catch(N=>{console.error("Failed to verify Google email:",N)}).finally(()=>{t(!1)}))}},[b]);const k=n.blocked||n.remainingQuestions<=0,g=!!(i||k&&d||l);C.useEffect(()=>{var E,w;if(g){if(typeof window<"u"&&"speechSynthesis"in window)try{window.speechSynthesis.cancel()}catch{}(w=(E=x.current)==null?void 0:E.stopVoiceAndMic)==null||w.call(E)}},[g]);const m=E=>{if(s(!1),r({...E,isAnonymousFree:!1}),E.blocked||E.remainingQuestions<=0){f(!0);return}o("");try{sessionStorage.removeItem("eliza_pending_q")}catch{}},y=(E,w,I)=>{var R,_;const N=w||E<=0;if(N){if(typeof window<"u"&&"speechSynthesis"in window)try{window.speechSynthesis.cancel()}catch{}(_=(R=x.current)==null?void 0:R.stopVoiceAndMic)==null||_.call(R)}if(r(j=>({...j,remainingQuestions:E,remaining_questions:E,blocked:N,blockedUntil:I||(j==null?void 0:j.blockedUntil)})),!Ta()){const j=p+1;h(j);try{sessionStorage.setItem("eliza_free_q_count",String(j))}catch{}}N&&(f(!0),u(!0))},v=()=>{var E,w;if(typeof window<"u"&&"speechSynthesis"in window)try{window.speechSynthesis.cancel()}catch{}(w=(E=x.current)==null?void 0:E.stopVoiceAndMic)==null||w.call(E),o(""),s(!0)};return e?c.jsxs("div",{className:"app-init-loader",children:[c.jsx("div",{className:"init-spinner"}),c.jsx("span",{children:"Initializing Neural Interface..."}),c.jsx("style",{children:`
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
        `})]}):c.jsxs(c.Fragment,{children:[c.jsx(Bz,{ref:x,accessData:n,freeQuestionsCount:p,onQuestionUsed:y,onRequestEmailGate:v,onOpenFeedback:()=>u(!0),isModalActive:g}),i&&c.jsx(r5,{isModal:!0,onAccessGranted:m,onShowFeedback:E=>{s(!1),r(E),u(!0)},onClose:()=>s(!1)}),k&&d&&c.jsx(i5,{blockedUntil:n.blockedUntil,onGiveFeedback:()=>u(!0)}),l&&c.jsx(a5,{email:n.email||_g()||"visitor@trial",onClose:()=>u(!1),onSubmitted:()=>{u(!1),k&&f(!0)}})]})}function Y2(){try{return localStorage.getItem("eliza_admin_token")||""}catch{return""}}function $z(e){try{e?localStorage.setItem("eliza_admin_token",e):localStorage.removeItem("eliza_admin_token")}catch{}}function sm(){try{localStorage.removeItem("eliza_admin_token")}catch{}}async function Ct(e,t={}){const n=Y2(),r={"Content-Type":"application/json",...n?{Authorization:`Bearer ${n}`}:{},...t.headers||{}},i=await ts(`${es}${e}`,{...t,headers:r}),s=await i.json().catch(()=>({}));if(!i.ok){i.status===401&&typeof window<"u"&&sm();const a=s.detail||s.message||`Admin request failed (${i.status})`,o=new Error(a);throw o.status=i.status,o.data=s,o}return s}const st={login:async(e,t)=>{const n=await Ct("/api/v1/admin/login",{method:"POST",body:JSON.stringify({username:e,password:t})});return n.token&&$z(n.token),n},me:async()=>Ct("/api/v1/admin/me"),logout:async()=>{try{await Ct("/api/v1/admin/logout",{method:"POST"})}finally{sm()}},getOverview:async(e="last30days",t=null,n=null)=>{const r=new URLSearchParams({preset:e});return t&&r.append("start_date",t),n&&r.append("end_date",n),Ct(`/api/v1/admin/dashboard/overview?${r.toString()}`)},getEmails:async(e={})=>{const t=new URLSearchParams;return Object.entries(e).forEach(([n,r])=>{r!=null&&r!==""&&t.append(n,r)}),Ct(`/api/v1/admin/dashboard/emails?${t.toString()}`)},getCustomerDetail:async e=>Ct(`/api/v1/admin/dashboard/emails/${encodeURIComponent(e)}`),getFeedback:async(e={})=>{const t=new URLSearchParams;return Object.entries(e).forEach(([n,r])=>{r!=null&&r!==""&&t.append(n,r)}),Ct(`/api/v1/admin/dashboard/feedback?${t.toString()}`)},updateFeedback:async(e,{status:t,admin_notes:n})=>Ct(`/api/v1/admin/dashboard/feedback/${encodeURIComponent(e)}`,{method:"PATCH",body:JSON.stringify({status:t,admin_notes:n})}),unblockCustomer:async e=>Ct(`/api/v1/admin/customers/${encodeURIComponent(e)}/unblock`,{method:"POST"}),deleteCustomer:async e=>Ct(`/api/v1/admin/customers/${encodeURIComponent(e)}`,{method:"DELETE"}),bulkDeleteCustomers:async e=>Ct("/api/v1/admin/customers/bulk-delete",{method:"POST",body:JSON.stringify({customer_ids:e})}),deleteFeedback:async e=>Ct(`/api/v1/admin/feedback/${encodeURIComponent(e)}`,{method:"DELETE"}),bulkDeleteFeedback:async e=>Ct("/api/v1/admin/feedback/bulk-delete",{method:"POST",body:JSON.stringify({feedback_ids:e})})};function Hz(){const e=xu(),[t,n]=C.useState(""),[r,i]=C.useState(""),[s,a]=C.useState(!1),[o,l]=C.useState(""),u=async d=>{if(d.preventDefault(),!t.trim()||!r){l("Please provide both username and password.");return}l(""),a(!0);try{await st.login(t.trim(),r),e("/admin/dashboard",{replace:!0})}catch(f){l(f.message||"Invalid credentials. Please verify username and password.")}finally{a(!1)}};return c.jsxs("div",{className:"admin-login-wrapper theme-violet",children:[c.jsx("div",{className:"login-glow","aria-hidden":"true"}),c.jsxs("div",{className:"login-card",children:[c.jsxs("div",{className:"login-header",children:[c.jsx("div",{className:"icon-shield-wrap",children:c.jsx(db,{size:28})}),c.jsxs("h1",{children:["ELIZA",c.jsx("span",{children:"AI"})]}),c.jsx("span",{className:"login-badge",children:"ADMINISTRATIVE CONSOLE"}),c.jsx("p",{className:"login-desc",children:"Sign in with administrator credentials to manage access, review analytics, and inspect feedback."})]}),c.jsxs("form",{onSubmit:u,className:"login-form",children:[c.jsxs("div",{className:"login-field",children:[c.jsx("label",{htmlFor:"admin-user",children:"Administrator Username"}),c.jsxs("div",{className:"input-with-icon",children:[c.jsx(w_,{size:16,className:"field-icon"}),c.jsx("input",{id:"admin-user",type:"text",value:t,onChange:d=>{n(d.target.value),o&&l("")},placeholder:"admin",autoComplete:"username",autoFocus:!0,disabled:s})]})]}),c.jsxs("div",{className:"login-field",children:[c.jsx("label",{htmlFor:"admin-pass",children:"Password"}),c.jsxs("div",{className:"input-with-icon",children:[c.jsx(ib,{size:16,className:"field-icon"}),c.jsx("input",{id:"admin-pass",type:"password",value:r,onChange:d=>{i(d.target.value),o&&l("")},placeholder:"••••••••••••",autoComplete:"current-password",disabled:s})]})]}),o&&c.jsxs("div",{className:"login-error",children:[c.jsx(Bp,{size:16}),c.jsx("span",{children:o})]}),c.jsx("button",{type:"submit",className:"btn-admin-submit",disabled:s||!t.trim()||!r,children:s?c.jsx("span",{children:"Authenticating..."}):c.jsxs(c.Fragment,{children:[c.jsx("span",{children:"Sign In to Dashboard"}),c.jsx(a_,{size:16})]})})]}),c.jsx("div",{className:"login-foot",children:c.jsxs(Sa,{to:"/",className:"link-back-agent",children:[c.jsx(Op,{size:14}),c.jsx("span",{children:"Return to Voice Assistant"})]})})]}),c.jsx("style",{children:`
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
      `})]})}function am({children:e,title:t,subtitle:n}){const r=xu(),i=dn(),[s,a]=C.useState(null),[o,l]=C.useState(!0);C.useEffect(()=>{if(!Y2()){r("/admin/login",{replace:!0});return}st.me().then(p=>{a(p),l(!1)}).catch(()=>{sm(),r("/admin/login",{replace:!0})})},[r]);const u=async()=>{await st.logout(),r("/admin/login")};if(o)return c.jsxs("div",{className:"admin-loading-screen",children:[c.jsx("div",{className:"admin-spinner"}),c.jsx("span",{children:"Authenticating administrator session..."}),c.jsx("style",{children:`
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
        `})]});const d=[{label:"Overview",path:"/admin/dashboard",icon:d_},{label:"Email Access & Analytics",path:"/admin/emails",icon:gb},{label:"Feedback Management",path:"/admin/feedback",icon:ab}];return c.jsxs("div",{className:"admin-container theme-violet",children:[c.jsxs("header",{className:"admin-topbar",children:[c.jsxs("div",{className:"topbar-left",children:[c.jsxs("div",{className:"admin-brand",children:[c.jsx("div",{className:"brand-badge-icon",children:c.jsx(db,{size:18})}),c.jsxs("div",{children:[c.jsxs("div",{className:"admin-title",children:["ELIZA",c.jsx("span",{children:"AI"})," ",c.jsx("span",{className:"tag-admin",children:"ADMIN"})]}),c.jsx("div",{className:"admin-subtitle",children:"ACCESS CONTROL & ANALYTICS"})]})]}),c.jsx("nav",{className:"admin-nav-tabs",children:d.map(f=>{const p=f.icon,h=i.pathname===f.path;return c.jsxs(Sa,{to:f.path,className:`nav-tab-link ${h?"active":""}`,children:[c.jsx(p,{size:16}),c.jsx("span",{children:f.label})]},f.path)})})]}),c.jsxs("div",{className:"topbar-right",children:[c.jsxs(Sa,{to:"/",className:"btn-back-to-app",title:"Open Voice Agent Interface",children:[c.jsx(Op,{size:14}),c.jsx("span",{children:"Voice Agent"})]}),c.jsxs("div",{className:"user-profile-badge",children:[c.jsx("span",{className:"dot-active"}),c.jsx("span",{className:"user-name",children:(s==null?void 0:s.username)||"Admin"})]}),c.jsxs("button",{type:"button",className:"btn-logout",onClick:u,title:"Sign out of Admin Dashboard",children:[c.jsx(f_,{size:16}),c.jsx("span",{children:"Sign Out"})]})]})]}),c.jsxs("main",{className:"admin-content-shell",children:[(t||n)&&c.jsx("div",{className:"page-header-row",children:c.jsxs("div",{children:[t&&c.jsx("h1",{className:"page-title",children:t}),n&&c.jsx("p",{className:"page-subtitle",children:n})]})}),e]}),c.jsx("style",{children:`
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
      `})]})}const Wz=[{id:"today",label:"Today"},{id:"yesterday",label:"Yesterday"},{id:"last7days",label:"Last 7 Days"},{id:"last30days",label:"Last 30 Days"},{id:"thismonth",label:"This Month"},{id:"custom",label:"Custom Range"}];function Gz(){const[e,t]=C.useState("last30days"),[n,r]=C.useState(""),[i,s]=C.useState(""),[a,o]=C.useState(null),[l,u]=C.useState(!0),[d,f]=C.useState(""),p=async(k=e,g=n,m=i)=>{u(!0),f("");try{const y=await st.getOverview(k,k==="custom"?g:null,k==="custom"?m:null);o(y)}catch(y){f(y.message||"Failed to load dashboard overview.")}finally{u(!1)}};C.useEffect(()=>{p(e,n,i)},[e]);const h=k=>{k.preventDefault(),n&&i&&p("custom",n,i)},x=(a==null?void 0:a.metrics)||{},b=(a==null?void 0:a.charts)||{};return c.jsxs(am,{title:"System Overview & Analytics",subtitle:"Real-time access metrics, visitor sessions, and question usage from live database records.",children:[c.jsxs("div",{className:"filter-bar",children:[c.jsx("div",{className:"filter-presets",children:Wz.map(k=>c.jsx("button",{type:"button",className:`preset-btn ${e===k.id?"active":""}`,onClick:()=>t(k.id),children:k.label},k.id))}),e==="custom"&&c.jsxs("form",{onSubmit:h,className:"custom-range-form",children:[c.jsx("input",{type:"date",value:n,onChange:k=>r(k.target.value),className:"date-input","aria-label":"Start date"}),c.jsx("span",{className:"date-sep",children:"to"}),c.jsx("input",{type:"date",value:i,onChange:k=>s(k.target.value),className:"date-input","aria-label":"End date"}),c.jsx("button",{type:"submit",className:"btn-apply-date",children:"Apply"})]}),c.jsxs("button",{type:"button",className:"btn-refresh",onClick:()=>p(),disabled:l,title:"Refresh statistics",children:[c.jsx(Wp,{size:14,className:l?"spin":""}),c.jsx("span",{children:"Refresh"})]})]}),d&&c.jsxs("div",{className:"dash-error-banner",children:[c.jsx("span",{children:d}),c.jsx("button",{onClick:()=>p(),children:"Retry"})]}),c.jsxs("div",{className:"metrics-grid",children:[c.jsx(An,{title:"Total Unique Email IDs",value:x.total_emails??0,icon:gb,color:"violet"}),c.jsx(An,{title:"New Email IDs Today",value:x.new_emails_today??0,icon:b_,color:"emerald"}),c.jsx(An,{title:"Unique Visitors Today",value:x.unique_visitors_today??0,icon:Hp,color:"cyan",hint:"Distinct customer IDs seen today"}),c.jsx(An,{title:"Total Access Sessions Today",value:x.total_sessions_today??0,icon:zp,color:"amber",hint:"Total daily visit records today"}),c.jsx(An,{title:"Total Accepted Questions Today",value:x.total_questions_today??0,icon:Vp,color:"violet",hint:"Deducted and processed today"}),c.jsx(An,{title:"Currently Blocked Email IDs",value:x.currently_blocked??0,icon:cb,color:"crimson",hint:"3/3 questions used in active cycle"}),c.jsx(An,{title:"Email IDs Eligible for Access",value:x.eligible_emails??0,icon:l_,color:"emerald",hint:"Active with queries remaining"}),c.jsx(An,{title:"Total Feedback Submissions",value:x.total_feedback??0,icon:ab,color:"cyan"}),c.jsx(An,{title:"Average Feedback Rating",value:`${x.average_rating??0} / 5`,icon:br,color:"solar",stars:x.average_rating??0})]}),c.jsxs("div",{className:"charts-grid",children:[c.jsxs("div",{className:"chart-card",children:[c.jsxs("div",{className:"chart-header",children:[c.jsx("h3",{children:"Daily Unique Visitors"}),c.jsx("span",{className:"chart-badge",children:"DISTINCT DAILY CUSTOMERS"})]}),c.jsx(Qc,{data:b.daily_visitors||[],color:"#c084fc",emptyText:"No visitor activity in selected date range."})]}),c.jsxs("div",{className:"chart-card",children:[c.jsxs("div",{className:"chart-header",children:[c.jsx("h3",{children:"Daily New Email Registrations"}),c.jsx("span",{className:"chart-badge",children:"NEW CUSTOMERS ONBOARDED"})]}),c.jsx(Qc,{data:b.daily_registrations||[],color:"#78f6a8",emptyText:"No registrations in selected date range."})]}),c.jsxs("div",{className:"chart-card",children:[c.jsxs("div",{className:"chart-header",children:[c.jsx("h3",{children:"Daily Question Usage"}),c.jsx("span",{className:"chart-badge",children:"ACCEPTED AI QUERIES"})]}),c.jsx(Qc,{data:b.daily_questions||[],color:"#7cecff",emptyText:"No question activity in selected date range."})]}),c.jsxs("div",{className:"chart-card-dual",children:[c.jsxs("div",{className:"chart-half",children:[c.jsxs("div",{className:"chart-header",children:[c.jsx("h3",{children:"Feedback Rating Distribution"}),c.jsx("span",{className:"chart-badge",children:"1 TO 5 STARS"})]}),c.jsx(qz,{distribution:b.rating_distribution||{}})]}),c.jsxs("div",{className:"chart-half",children:[c.jsxs("div",{className:"chart-header",children:[c.jsx("h3",{children:"Device Distribution"}),c.jsx("span",{className:"chart-badge",children:"VISIT PLATFORMS"})]}),c.jsx(Kz,{devices:b.device_distribution||{}})]})]})]}),c.jsx("style",{children:`
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
      `})]})}function An({title:e,value:t,icon:n,color:r,hint:i,stars:s}){return c.jsxs("div",{className:`metric-card color-${r}`,children:[c.jsxs("div",{className:"metric-top",children:[c.jsx("span",{className:"metric-title",children:e}),c.jsx("div",{className:"metric-icon-wrap",children:c.jsx(n,{size:17})})]}),c.jsx("div",{className:"metric-val",children:t}),s!==void 0&&c.jsx("div",{className:"metric-stars",children:[1,2,3,4,5].map(a=>c.jsx(br,{size:14,fill:a<=Math.round(Number(s)||0)?"#fbbf24":"transparent",color:a<=Math.round(Number(s)||0)?"#fbbf24":"rgba(255,255,255,0.2)"},a))}),i&&c.jsx("span",{className:"metric-hint",children:i})]})}function Qc({data:e=[],color:t="#c084fc",emptyText:n="No data"}){if(!e||e.length===0)return c.jsx("div",{className:"chart-empty",children:n});const r=Math.max(...e.map(s=>s.count||0),1),i=160;return c.jsx("div",{className:"svg-chart-wrap",children:c.jsx("div",{style:{display:"flex",alignItems:"flex-end",gap:"6px",height:`${i+40}px`,minWidth:`${e.length*32}px`,padding:"10px 0"},children:e.map((s,a)=>{const o=s.count||0,l=Math.max(4,Math.round(o/r*i)),u=s.date?s.date.slice(5):"";return c.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",alignItems:"center",gap:"6px",height:"100%",justifyContent:"flex-end"},title:`${s.date}: ${o}`,children:[c.jsx("span",{style:{fontSize:"10px",color:o>0?"#ffffff":"rgba(255,255,255,0.3)",fontFamily:"DM Mono"},children:o>0?o:""}),c.jsx("div",{style:{width:"100%",maxWidth:"28px",height:`${l}px`,backgroundColor:o>0?t:"rgba(255, 255, 255, 0.05)",borderRadius:"4px 4px 0 0",transition:"height 0.3s ease"}}),c.jsx("span",{style:{fontSize:"10px",color:"rgba(226,238,230,0.5)",fontFamily:"DM Mono",whiteSpace:"nowrap"},children:u})]},a)})})})}function qz({distribution:e={}}){const t=Object.values(e).reduce((r,i)=>r+i,0)||1,n=[5,4,3,2,1];return c.jsx("div",{className:"rating-bars-wrap",children:n.map(r=>{const i=e[r]||0,s=Math.round(i/t*100);return c.jsxs("div",{className:"rating-bar-row",children:[c.jsxs("span",{className:"star-label",children:[r," ",c.jsx(br,{size:13,fill:"#fbbf24"})]}),c.jsx("div",{className:"bar-track",children:c.jsx("div",{className:"bar-fill",style:{width:`${s}%`}})}),c.jsx("span",{className:"bar-count",children:i})]},r)})})}function Kz({devices:e={}}){const t=[{key:"desktop",label:"Desktop",icon:ob},{key:"mobile",label:"Mobile",icon:fb},{key:"tablet",label:"Tablet",icon:mb},{key:"unknown",label:"Unknown",icon:Vp}];return c.jsx("div",{className:"devices-wrap",children:t.map(n=>{const r=n.icon,i=e[n.key]||0;return c.jsxs("div",{className:"device-card",children:[c.jsx("div",{className:"device-icon-box",children:c.jsx(r,{size:18})}),c.jsxs("div",{className:"device-info",children:[c.jsx("span",{className:"device-name",children:n.label}),c.jsxs("span",{className:"device-val",children:[i," visits"]})]})]},n.key)})})}function Yz(){var Cn,qt,D,ge,re,xe,M,$,ae,ce,P;const[e,t]=C.useState([]),[n,r]=C.useState(0),[i,s]=C.useState(1),[a,o]=C.useState(1),[l,u]=C.useState(15),[d,f]=C.useState(""),[p,h]=C.useState(""),[x,b]=C.useState(""),[k,g]=C.useState(""),[m,y]=C.useState("newest"),[v,E]=C.useState(""),[w,I]=C.useState(""),[N,R]=C.useState(!0),[_,j]=C.useState(""),[U,G]=C.useState(new Set),[q,H]=C.useState(!1),[le,Q]=C.useState(""),[L,B]=C.useState(null),[S,Y]=C.useState(null),[ee,A]=C.useState(!1),ue=T=>{Q(T),setTimeout(()=>Q(""),4500)},Se=async()=>{R(!0),j("");try{const T=await st.getEmails({page:a,per_page:l,search:d.trim(),status:p,device:x,question_usage:k!==""?Number(k):void 0,sort_by:m,start_date:v||void 0,end_date:w||void 0});t(T.items||[]),r(T.total||0),s(T.total_pages||1)}catch(T){j(T.message||"Failed to load email records.")}finally{R(!1)}};C.useEffect(()=>{Se()},[a,l,p,x,k,m,v,w]);const se=T=>{T.preventDefault(),o(1),Se()},Ee=()=>{f(""),h(""),b(""),g(""),y("newest"),E(""),I(""),G(new Set),o(1)},$e=T=>{T.target.checked?G(new Set(e.map(z=>z.id))):G(new Set)},Ye=(T,z)=>{z&&z.stopPropagation(),G(V=>{const X=new Set(V);return X.has(T)?X.delete(T):X.add(T),X})},pe=async(T,z)=>{var V;if(z&&z.stopPropagation(),!!window.confirm("Immediately unblock this customer and restore their 3 questions access?")){H(!0);try{const X=await st.unblockCustomer(T);ue(X.message||"User unblocked successfully!"),t(ie=>ie.map(fe=>fe.id===T?{...fe,blocked:!1,access_status:"eligible",remaining_questions:3,questions_used:0,blocked_until:null}:fe)),((V=S==null?void 0:S.customer)==null?void 0:V.id)===T&&Y(ie=>({...ie,customer:{...ie.customer,status:"eligible"}}))}catch(X){alert("Failed to unblock customer: "+X.message)}finally{H(!1)}}},et=async(T,z,V)=>{if(V&&V.stopPropagation(),!!window.confirm(`Permanently delete customer ${z}? All access periods, questions, and records will be deleted.`)){H(!0);try{await st.deleteCustomer(T),ue(`Permanently deleted ${z}`),t(X=>X.filter(ie=>ie.id!==T)),r(X=>Math.max(0,X-1)),G(X=>{const ie=new Set(X);return ie.delete(T),ie}),L===T&&Gt()}catch(X){alert("Failed to delete customer: "+X.message)}finally{H(!1)}}},St=async()=>{if(U.size!==0&&window.confirm(`Permanently delete ${U.size} selected customer records? This action cannot be undone.`)){H(!0);try{const T=Array.from(U),z=await st.bulkDeleteCustomers(T);ue(z.message||`Deleted ${T.length} customers`);const V=new Set(T);t(X=>X.filter(ie=>!V.has(ie.id))),r(X=>Math.max(0,X-V.size)),G(new Set),L&&V.has(L)&&Gt()}catch(T){alert("Failed to delete records: "+T.message)}finally{H(!1)}}},Ge=async T=>{B(T),A(!0);try{const z=await st.getCustomerDetail(T);Y(z)}catch(z){alert("Failed to load customer profile: "+z.message)}finally{A(!1)}},Gt=()=>{B(null),Y(null)},jr=async()=>{try{const z=(await st.getEmails({page:1,per_page:2e3,search:d.trim(),status:p,device:x,question_usage:k!==""?Number(k):void 0,sort_by:m,start_date:v||void 0,end_date:w||void 0})).items||e;if(!z.length){alert("No records to export.");return}const X=[["Email","Status","Questions Used","Remaining Questions","First Seen","First Question","Last Active","Visits Count","Device Category","Blocked Until","Period Expires At"].join(","),...z.map(Pe=>[`"${(Pe.email||"").replace(/"/g,'""')}"`,`"${Pe.access_status||(Pe.blocked?"blocked":"active")}"`,Pe.questions_used??0,Pe.remaining_questions??0,`"${Pe.first_seen_at||""}"`,`"${Pe.first_question_at||""}"`,`"${Pe.last_activity_at||""}"`,Pe.visits_count??1,`"${Pe.device_category||"unknown"}"`,`"${Pe.blocked_until||""}"`,`"${Pe.current_period_expires_at||""}"`].join(","))].join(`
`),ie=new Blob([X],{type:"text/csv;charset=utf-8;"}),fe=URL.createObjectURL(ie),he=document.createElement("a");he.href=fe,he.setAttribute("download",`eliza-users-export-${new Date().toISOString().slice(0,10)}.csv`),document.body.appendChild(he),he.click(),document.body.removeChild(he),URL.revokeObjectURL(fe)}catch(T){alert("Failed to export data: "+T.message)}},Me=T=>{if(!T)return"—";try{return new Date(T).toLocaleDateString(void 0,{month:"short",day:"numeric",year:"numeric",hour:"2-digit",minute:"2-digit"})}catch{return T}};return c.jsxs(am,{title:"Email IDs & Access Analytics",subtitle:"Searchable and sortable registry of all customer accounts, active restriction windows, and usage balances.",children:[le&&c.jsxs("div",{className:"admin-toast-banner",children:[c.jsx(Ea,{size:16}),c.jsx("span",{children:le})]}),c.jsxs("div",{className:"emails-toolbar",children:[c.jsxs("form",{onSubmit:se,className:"search-box",children:[c.jsx(lb,{size:16,className:"search-icon"}),c.jsx("input",{type:"text",value:d,onChange:T=>f(T.target.value),placeholder:"Search by customer email address..."}),d&&c.jsx("button",{type:"button",className:"btn-clear-input",onClick:()=>{f(""),o(1)},children:c.jsx(It,{size:14})})]}),c.jsxs("div",{className:"filter-selects",children:[c.jsxs("div",{className:"calendar-date-group",children:[c.jsx(zp,{size:14,className:"cal-icon"}),c.jsxs("div",{className:"date-field",children:[c.jsx("span",{className:"date-label",children:"From"}),c.jsx("input",{type:"date",value:v,onChange:T=>{E(T.target.value),o(1)},className:"filter-date-input"})]}),c.jsx("span",{className:"date-sep",children:"→"}),c.jsxs("div",{className:"date-field",children:[c.jsx("span",{className:"date-label",children:"To"}),c.jsx("input",{type:"date",value:w,onChange:T=>{I(T.target.value),o(1)},className:"filter-date-input"})]}),(v||w)&&c.jsx("button",{type:"button",className:"btn-clear-date",onClick:()=>{E(""),I(""),o(1)},title:"Clear date range",children:c.jsx(It,{size:13})})]}),c.jsxs("select",{value:p,onChange:T=>{h(T.target.value),o(1)},className:"filter-select",children:[c.jsx("option",{value:"",children:"All Statuses"}),c.jsx("option",{value:"eligible",children:"Eligible"}),c.jsx("option",{value:"blocked",children:"Blocked"}),c.jsx("option",{value:"active",children:"Active"}),c.jsx("option",{value:"expired",children:"Expired"})]}),c.jsxs("select",{value:k,onChange:T=>{g(T.target.value),o(1)},className:"filter-select",children:[c.jsx("option",{value:"",children:"Any Usage"}),c.jsx("option",{value:"0",children:"0 Questions (0/3)"}),c.jsx("option",{value:"1",children:"1 Question (1/3)"}),c.jsx("option",{value:"2",children:"2 Questions (2/3)"}),c.jsx("option",{value:"3",children:"3 Questions (3/3)"})]}),c.jsxs("select",{value:x,onChange:T=>{b(T.target.value),o(1)},className:"filter-select",children:[c.jsx("option",{value:"",children:"All Devices"}),c.jsx("option",{value:"desktop",children:"Desktop"}),c.jsx("option",{value:"mobile",children:"Mobile"}),c.jsx("option",{value:"tablet",children:"Tablet"})]}),c.jsxs("select",{value:m,onChange:T=>{y(T.target.value),o(1)},className:"filter-select",children:[c.jsx("option",{value:"newest",children:"Sort: Newest"}),c.jsx("option",{value:"oldest",children:"Sort: Oldest"}),c.jsx("option",{value:"most_active",children:"Sort: Most Active"})]}),c.jsx("button",{type:"button",className:"btn-action-refresh",onClick:Se,title:"Refresh records",children:c.jsx(Wp,{size:14,className:N?"spin":""})}),c.jsxs("button",{type:"button",className:"btn-action-export",onClick:jr,title:"Download all customer records as CSV",children:[c.jsx(rb,{size:14}),c.jsx("span",{children:"Export CSV"})]}),(d||p||x||k||m!=="newest"||v||w)&&c.jsx("button",{type:"button",className:"btn-clear-all",onClick:Ee,children:"Clear Filters"})]})]}),U.size>0&&c.jsxs("div",{className:"bulk-actions-card",children:[c.jsxs("div",{className:"bulk-info",children:[c.jsx(pb,{size:17,className:"bulk-icon"}),c.jsxs("span",{children:[c.jsx("b",{children:U.size})," customer(s) selected"]})]}),c.jsxs("div",{className:"bulk-btns",children:[c.jsxs("button",{type:"button",className:"btn-bulk-delete",onClick:St,disabled:q,children:[c.jsx(Bi,{size:14}),c.jsxs("span",{children:["Delete Selected (",U.size,")"]})]}),c.jsx("button",{type:"button",className:"btn-bulk-cancel",onClick:()=>G(new Set),children:"Cancel Selection"})]})]}),_&&c.jsxs("div",{className:"table-error-banner",children:[c.jsx("span",{children:_}),c.jsx("button",{onClick:Se,children:"Retry"})]}),c.jsxs("div",{className:"table-card",children:[c.jsx("div",{className:"table-responsive",children:c.jsxs("table",{className:"admin-table",children:[c.jsx("thead",{children:c.jsxs("tr",{children:[c.jsx("th",{style:{width:42,textAlign:"center"},children:c.jsx("input",{type:"checkbox",className:"row-checkbox",checked:e.length>0&&e.every(T=>U.has(T.id)),onChange:$e,title:"Select all on this page"})}),c.jsx("th",{children:"Email Address"}),c.jsx("th",{children:"Status"}),c.jsx("th",{children:"Usage"}),c.jsx("th",{children:"Left"}),c.jsx("th",{children:"First Seen"}),c.jsx("th",{children:"First Question"}),c.jsx("th",{children:"Last Active"}),c.jsx("th",{children:"Visits"}),c.jsx("th",{children:"Device"}),c.jsx("th",{children:"Blocked Until"}),c.jsx("th",{children:"Cycle Expiry"}),c.jsx("th",{className:"text-right",children:"Actions"})]})}),c.jsx("tbody",{children:N?c.jsx("tr",{children:c.jsxs("td",{colSpan:"13",className:"table-loading-cell",children:[c.jsx("span",{className:"table-spinner"})," Loading records..."]})}):e.length===0?c.jsx("tr",{children:c.jsx("td",{colSpan:"13",className:"table-empty-cell",children:"No matching customer emails found."})}):e.map(T=>{const z=T.blocked||T.remaining_questions!==void 0&&T.remaining_questions<=0||T.access_status==="blocked",V=U.has(T.id);return c.jsxs("tr",{className:`table-row-clickable ${V?"row-selected":""}`,onClick:()=>Ge(T.id),children:[c.jsx("td",{style:{textAlign:"center"},onClick:X=>X.stopPropagation(),children:c.jsx("input",{type:"checkbox",className:"row-checkbox",checked:V,onChange:X=>Ye(T.id,X)})}),c.jsx("td",{className:"font-semibold text-white",children:c.jsx("span",{className:"email-cell",children:T.email})}),c.jsx("td",{children:c.jsx(Xz,{status:T.access_status,blocked:T.blocked})}),c.jsx("td",{children:c.jsxs("span",{className:"usage-pill",children:[T.questions_used,"/3"]})}),c.jsx("td",{children:c.jsx("span",{className:"font-mono text-purple-200",children:T.remaining_questions})}),c.jsx("td",{className:"text-muted",children:Me(T.first_seen_at)}),c.jsx("td",{className:"text-muted",children:Me(T.first_question_at)}),c.jsx("td",{className:"text-muted",children:Me(T.last_activity_at)}),c.jsx("td",{children:c.jsx("span",{className:"font-mono",children:T.visits_count})}),c.jsx("td",{children:c.jsx(Qz,{device:T.device_category})}),c.jsx("td",{children:T.blocked_until?c.jsx("span",{className:"blocked-date-tag",children:Me(T.blocked_until)}):c.jsx("span",{className:"text-muted",children:"—"})}),c.jsx("td",{className:"text-muted",children:Me(T.current_period_expires_at)}),c.jsx("td",{className:"text-right",onClick:X=>X.stopPropagation(),children:c.jsxs("div",{className:"row-actions-group",children:[z&&c.jsxs("button",{type:"button",className:"btn-action-unblock",onClick:X=>pe(T.id,X),disabled:q,title:"Unblock customer & restore 3 questions",children:[c.jsx(Kd,{size:13}),c.jsx("span",{children:"Unblock"})]}),c.jsxs("button",{type:"button",className:"btn-view-detail",onClick:()=>Ge(T.id),title:"View Customer Profile",children:[c.jsx(Hp,{size:13}),c.jsx("span",{children:"Details"})]}),c.jsx("button",{type:"button",className:"btn-action-delete",onClick:X=>et(T.id,T.email,X),disabled:q,title:"Permanently delete customer",children:c.jsx(Bi,{size:13})})]})})]},T.id)})})]})}),c.jsxs("div",{className:"pagination-bar",children:[c.jsxs("div",{className:"pagination-info",children:["Showing ",c.jsx("b",{children:e.length})," of ",c.jsx("b",{children:n})," total emails (Page ",a," of ",i,")"]}),c.jsxs("div",{className:"pagination-controls",children:[c.jsxs("label",{className:"page-size-label",children:[c.jsx("span",{children:"Per page:"}),c.jsxs("select",{value:l,onChange:T=>{u(Number(T.target.value)),o(1)},children:[c.jsx("option",{value:"15",children:"15"}),c.jsx("option",{value:"30",children:"30"}),c.jsx("option",{value:"50",children:"50"})]})]}),c.jsx("button",{type:"button",className:"btn-page",disabled:a<=1,onClick:()=>o(T=>Math.max(1,T-1)),title:"Previous page",children:c.jsx(eb,{size:16})}),c.jsxs("span",{className:"current-page-num",children:[a," / ",i]}),c.jsx("button",{type:"button",className:"btn-page",disabled:a>=i,onClick:()=>o(T=>Math.min(i,T+1)),title:"Next page",children:c.jsx(tb,{size:16})})]})]})]}),L&&c.jsx("div",{className:"detail-modal-overlay",onClick:Gt,children:c.jsxs("div",{className:"detail-modal-card",onClick:T=>T.stopPropagation(),children:[c.jsxs("div",{className:"detail-modal-head",children:[c.jsxs("div",{children:[c.jsx("span",{className:"detail-eyebrow",children:"CUSTOMER PROFILE & AUDIT"}),c.jsx("h3",{children:((Cn=S==null?void 0:S.customer)==null?void 0:Cn.email)||"Loading..."})]}),c.jsxs("div",{className:"head-actions",children:[(S==null?void 0:S.customer)&&c.jsxs(c.Fragment,{children:[c.jsxs("button",{type:"button",className:"btn-drawer-unblock",onClick:T=>pe(S.customer.id,T),title:"Unblock user and restore 3 questions",children:[c.jsx(Kd,{size:14})," Unblock"]}),c.jsxs("button",{type:"button",className:"btn-drawer-delete",onClick:T=>et(S.customer.id,S.customer.email,T),title:"Delete customer record",children:[c.jsx(Bi,{size:14})," Delete"]})]}),c.jsx("button",{type:"button",className:"btn-modal-close",onClick:Gt,children:c.jsx(It,{size:18})})]})]}),ee?c.jsxs("div",{className:"detail-loading",children:[c.jsx("span",{className:"table-spinner"})," Loading full customer profile..."]}):S?c.jsxs("div",{className:"detail-modal-body",children:[c.jsxs("div",{className:"profile-summary-box",children:[c.jsxs("div",{className:"summary-item",children:[c.jsx("span",{children:"First Seen"}),c.jsx("b",{children:Me((qt=S.customer)==null?void 0:qt.first_seen_at)})]}),c.jsxs("div",{className:"summary-item",children:[c.jsx("span",{children:"Last Active"}),c.jsx("b",{children:Me((D=S.customer)==null?void 0:D.last_activity_at)})]}),c.jsxs("div",{className:"summary-item",children:[c.jsx("span",{children:"Primary Device"}),c.jsx("b",{children:((ge=S.customer)==null?void 0:ge.device_type)||"unknown"})]}),c.jsxs("div",{className:"summary-item",children:[c.jsx("span",{children:"Account Status"}),c.jsx("b",{children:c.jsx("span",{className:"status-highlight",children:(re=S.customer)==null?void 0:re.status})})]})]}),c.jsxs("div",{className:"detail-section",children:[c.jsxs("h4",{children:["Access Cycles & Quotas (",((xe=S.periods)==null?void 0:xe.length)||0,")"]}),c.jsx("div",{className:"periods-list",children:(M=S.periods)==null?void 0:M.map(T=>c.jsxs("div",{className:"period-card",children:[c.jsxs("div",{className:"period-card-top",children:[c.jsx("span",{className:`period-status status-${T.status}`,children:T.status}),c.jsxs("span",{className:"period-q-count",children:["Questions: ",c.jsxs("b",{children:[T.questions_used,"/3"]})]})]}),c.jsxs("div",{className:"period-grid",children:[c.jsxs("div",{children:[c.jsx("span",{children:"Period Start"}),c.jsx("b",{children:Me(T.period_started_at)})]}),c.jsxs("div",{children:[c.jsx("span",{children:"Expires At"}),c.jsx("b",{children:Me(T.period_expires_at)})]}),c.jsxs("div",{children:[c.jsx("span",{children:"First Question"}),c.jsx("b",{children:Me(T.first_question_at)})]}),c.jsxs("div",{children:[c.jsx("span",{children:"Blocked Until"}),c.jsx("b",{children:Me(T.blocked_until)})]})]})]},T.id))})]}),c.jsxs("div",{className:"detail-section",children:[c.jsxs("h4",{children:["Question Usage Log (",(($=S.questions)==null?void 0:$.length)||0,")"]}),((ae=S.questions)==null?void 0:ae.length)===0?c.jsx("p",{className:"section-empty",children:"No questions submitted yet."}):c.jsx("div",{className:"log-table-wrap",children:c.jsxs("table",{className:"log-table",children:[c.jsx("thead",{children:c.jsxs("tr",{children:[c.jsx("th",{children:"Time"}),c.jsx("th",{children:"Status"}),c.jsx("th",{children:"Device"})]})}),c.jsx("tbody",{children:S.questions.map(T=>c.jsxs("tr",{children:[c.jsx("td",{children:Me(T.created_at)}),c.jsx("td",{children:c.jsx("span",{className:"log-badge-status",children:T.status})}),c.jsx("td",{children:T.device_type||"unknown"})]},T.id))})]})})]}),c.jsxs("div",{className:"detail-section",children:[c.jsxs("h4",{children:["Feedback Submissions (",((ce=S.feedbacks)==null?void 0:ce.length)||0,")"]}),((P=S.feedbacks)==null?void 0:P.length)===0?c.jsx("p",{className:"section-empty",children:"No feedback submitted by this customer."}):c.jsx("div",{className:"feedback-cards-list",children:S.feedbacks.map(T=>c.jsxs("div",{className:"feedback-mini-card",children:[c.jsxs("div",{className:"fb-mini-top",children:[c.jsx("div",{className:"fb-stars",children:[...Array(T.rating)].map((z,V)=>c.jsx(br,{size:14,fill:"#fbbf24",color:"#fbbf24"},V))}),c.jsx("span",{className:"fb-cat-tag",children:T.category}),c.jsx("span",{className:"fb-date",children:Me(T.created_at)})]}),c.jsx("p",{className:"fb-mini-msg",children:T.message})]},T.id))})]})]}):null]})}),c.jsx("style",{children:`
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
      `})]})}function Xz({status:e,blocked:t}){return t||e==="blocked"?c.jsxs("span",{className:"status-badge status-blocked",children:[c.jsx(cb,{size:12}),c.jsx("span",{children:"Blocked"})]}):e==="expired"?c.jsxs("span",{className:"status-badge status-expired",children:[c.jsx($p,{size:12}),c.jsx("span",{children:"Expired"})]}):e==="active"?c.jsxs("span",{className:"status-badge status-active",children:[c.jsx(Ea,{size:12}),c.jsx("span",{children:"Active"})]}):c.jsxs("span",{className:"status-badge status-eligible",children:[c.jsx(Ea,{size:12}),c.jsx("span",{children:"Eligible"})]})}function Qz({device:e}){const t=(e||"unknown").toLowerCase();let n=Vp;return t.includes("desk")?n=ob:t.includes("mob")?n=fb:t.includes("tab")&&(n=mb),c.jsxs("span",{className:"device-pill",children:[c.jsx(n,{size:12}),c.jsx("span",{children:t})]})}const Zz=["Voice Experience","Answer Quality","UI/UX","Bug","Feature Request","Other"];function Jz(){const[e,t]=C.useState([]),[n,r]=C.useState({}),[i,s]=C.useState(0),[a,o]=C.useState(1),[l,u]=C.useState(1),[d,f]=C.useState(15),[p,h]=C.useState(""),[x,b]=C.useState(""),[k,g]=C.useState(""),[m,y]=C.useState(""),[v,E]=C.useState("newest"),[w,I]=C.useState(""),[N,R]=C.useState(""),[_,j]=C.useState(!0),[U,G]=C.useState(""),[q,H]=C.useState(new Set),[le,Q]=C.useState(!1),[L,B]=C.useState(""),[S,Y]=C.useState(null),[ee,A]=C.useState(!1),[ue,Se]=C.useState(""),se=D=>{B(D),setTimeout(()=>B(""),4500)},Ee=async()=>{j(!0),G("");try{const D=await st.getFeedback({page:l,per_page:d,search:p.trim(),rating:x!==""?Number(x):void 0,category:k,status:m,start_date:w||void 0,end_date:N||void 0,sort_order:v});t(D.items||[]),r(D.summary||{}),s(D.total||0),o(D.total_pages||1)}catch(D){G(D.message||"Failed to load feedback records.")}finally{j(!1)}};C.useEffect(()=>{Ee()},[l,d,x,k,m,v,w,N]);const $e=D=>{D.preventDefault(),u(1),Ee()},Ye=()=>{h(""),b(""),g(""),y(""),E("newest"),I(""),R(""),H(new Set),u(1)},pe=D=>{D.target.checked?H(new Set(e.map(ge=>ge.id))):H(new Set)},et=(D,ge)=>{ge&&ge.stopPropagation(),H(re=>{const xe=new Set(re);return xe.has(D)?xe.delete(D):xe.add(D),xe})},St=async(D,ge)=>{if(ge&&ge.stopPropagation(),!!window.confirm("Permanently delete this feedback review? This action cannot be undone.")){Q(!0);try{await st.deleteFeedback(D),se("Feedback review deleted."),t(re=>re.filter(xe=>xe.id!==D)),s(re=>Math.max(0,re-1)),H(re=>{const xe=new Set(re);return xe.delete(D),xe}),(S==null?void 0:S.id)===D&&Y(null)}catch(re){alert("Failed to delete feedback: "+re.message)}finally{Q(!1)}}},Ge=async()=>{if(q.size!==0&&window.confirm(`Permanently delete ${q.size} selected feedback reviews? This cannot be undone.`)){Q(!0);try{const D=Array.from(q),ge=await st.bulkDeleteFeedback(D);se(ge.message||`Deleted ${D.length} feedback review(s).`);const re=new Set(D);t(xe=>xe.filter(M=>!re.has(M.id))),s(xe=>Math.max(0,xe-re.size)),H(new Set),S&&re.has(S.id)&&Y(null)}catch(D){alert("Failed to bulk delete feedback: "+D.message)}finally{Q(!1)}}},Gt=async(D,ge)=>{try{const re=await st.updateFeedback(D,{status:ge});t(xe=>xe.map(M=>M.id===D?{...M,status:re.status}:M)),S&&S.id===D&&Y(xe=>({...xe,status:re.status})),se(`Feedback status updated to ${ge}.`)}catch(re){alert("Failed to update status: "+re.message)}},jr=async()=>{if(S){A(!0);try{const D=await st.updateFeedback(S.id,{admin_notes:ue});Y(ge=>({...ge,admin_notes:D.admin_notes})),t(ge=>ge.map(re=>re.id===S.id?{...re,admin_notes:D.admin_notes}:re)),se("Internal notes saved successfully.")}catch(D){alert("Failed to save admin notes: "+D.message)}finally{A(!1)}}},Me=D=>{Y(D),Se(D.admin_notes||"")},Cn=async()=>{try{const ge=(await st.getFeedback({page:1,per_page:2e3,search:p.trim(),rating:x!==""?Number(x):void 0,category:k,status:m,start_date:w||void 0,end_date:N||void 0,sort_order:v})).items||e;if(!ge.length){alert("No feedback records to export.");return}const xe=[["Date","Email","Rating","Category","Message","Device","Browser","Status","Admin Notes"].join(","),...ge.map(ce=>[`"${ce.created_at||""}"`,`"${(ce.email||"").replace(/"/g,'""')}"`,ce.rating,`"${(ce.category||"").replace(/"/g,'""')}"`,`"${(ce.message||"").replace(/"/g,'""').replace(/\n/g," ")}"`,`"${ce.device_type||"desktop"}"`,`"${ce.browser_name||"Chrome"}"`,`"${ce.status||"new"}"`,`"${(ce.admin_notes||"").replace(/"/g,'""').replace(/\n/g," ")}"`].join(","))].join(`
`),M=new Blob([xe],{type:"text/csv;charset=utf-8;"}),$=URL.createObjectURL(M),ae=document.createElement("a");ae.href=$,ae.setAttribute("download",`eliza-feedback-export-${new Date().toISOString().slice(0,10)}.csv`),document.body.appendChild(ae),ae.click(),document.body.removeChild(ae),URL.revokeObjectURL($)}catch(D){alert("Failed to export feedback: "+D.message)}},qt=D=>{if(!D)return"—";try{return new Date(D).toLocaleDateString(void 0,{month:"short",day:"numeric",year:"numeric",hour:"2-digit",minute:"2-digit"})}catch{return D}};return c.jsxs(am,{title:"Feedback & Reviews Management",subtitle:"Examine visitor ratings, categorize UX evaluations, and record operational follow-ups.",children:[L&&c.jsxs("div",{className:"admin-toast-banner",children:[c.jsx(Ea,{size:16}),c.jsx("span",{children:L})]}),c.jsxs("div",{className:"fb-summary-grid",children:[c.jsxs("div",{className:"fb-summary-card",children:[c.jsx("span",{className:"summary-card-title",children:"Total Submissions"}),c.jsx("div",{className:"summary-card-val",children:n.total_feedback??0}),c.jsx("span",{className:"summary-card-sub",children:"All-time reviews received"})]}),c.jsxs("div",{className:"fb-summary-card",children:[c.jsx("span",{className:"summary-card-title",children:"Average Rating"}),c.jsxs("div",{className:"summary-card-val",children:[n.average_rating?Number(n.average_rating).toFixed(1):"0.0"," / 5"]}),c.jsx("div",{className:"stars-mini-row",children:[1,2,3,4,5].map(D=>c.jsx(br,{size:14,fill:D<=Math.round(n.average_rating||0)?"#fbbf24":"transparent",color:D<=Math.round(n.average_rating||0)?"#fbbf24":"rgba(255,255,255,0.2)"},D))})]}),c.jsxs("div",{className:"fb-summary-card",children:[c.jsx("span",{className:"summary-card-title",children:"Feedback Received Today"}),c.jsx("div",{className:"summary-card-val",children:n.feedback_today??0}),c.jsx("span",{className:"summary-card-sub",children:"Past 24 hours"})]}),c.jsxs("div",{className:"fb-summary-card",children:[c.jsx("span",{className:"summary-card-title",children:"Pending Review"}),c.jsx("div",{className:"summary-card-val",children:e.filter(D=>D.status==="new").length}),c.jsx("span",{className:"summary-card-sub",children:"Marked as 'New' on this page"})]})]}),c.jsxs("div",{className:"fb-toolbar",children:[c.jsxs("form",{onSubmit:$e,className:"search-box",children:[c.jsx(lb,{size:16,className:"search-icon"}),c.jsx("input",{type:"text",value:p,onChange:D=>h(D.target.value),placeholder:"Search feedback by email or message..."}),p&&c.jsx("button",{type:"button",className:"btn-clear-input",onClick:()=>{h(""),u(1)},children:c.jsx(It,{size:14})})]}),c.jsxs("div",{className:"fb-filters",children:[c.jsxs("div",{className:"calendar-date-group",children:[c.jsx(zp,{size:14,className:"cal-icon"}),c.jsxs("div",{className:"date-field",children:[c.jsx("span",{className:"date-label",children:"From"}),c.jsx("input",{type:"date",value:w,onChange:D=>{I(D.target.value),u(1)},className:"filter-date-input"})]}),c.jsx("span",{className:"date-sep",children:"→"}),c.jsxs("div",{className:"date-field",children:[c.jsx("span",{className:"date-label",children:"To"}),c.jsx("input",{type:"date",value:N,onChange:D=>{R(D.target.value),u(1)},className:"filter-date-input"})]}),(w||N)&&c.jsx("button",{type:"button",className:"btn-clear-date",onClick:()=>{I(""),R(""),u(1)},title:"Clear date range",children:c.jsx(It,{size:13})})]}),c.jsxs("select",{value:x,onChange:D=>{b(D.target.value),u(1)},className:"filter-select",children:[c.jsx("option",{value:"",children:"All Ratings"}),c.jsx("option",{value:"5",children:"5 Stars"}),c.jsx("option",{value:"4",children:"4 Stars"}),c.jsx("option",{value:"3",children:"3 Stars"}),c.jsx("option",{value:"2",children:"2 Stars"}),c.jsx("option",{value:"1",children:"1 Star"})]}),c.jsxs("select",{value:k,onChange:D=>{g(D.target.value),u(1)},className:"filter-select",children:[c.jsx("option",{value:"",children:"All Categories"}),Zz.map(D=>c.jsx("option",{value:D,children:D},D))]}),c.jsxs("select",{value:m,onChange:D=>{y(D.target.value),u(1)},className:"filter-select",children:[c.jsx("option",{value:"",children:"All Statuses"}),c.jsx("option",{value:"new",children:"New"}),c.jsx("option",{value:"reviewed",children:"Reviewed"}),c.jsx("option",{value:"resolved",children:"Resolved"})]}),c.jsxs("select",{value:v,onChange:D=>{E(D.target.value),u(1)},className:"filter-select",children:[c.jsx("option",{value:"newest",children:"Sort: Newest"}),c.jsx("option",{value:"oldest",children:"Sort: Oldest"})]}),c.jsx("button",{type:"button",className:"btn-action-refresh",onClick:Ee,title:"Refresh feedback",children:c.jsx(Wp,{size:14,className:_?"spin":""})}),c.jsxs("button",{type:"button",className:"btn-action-export",onClick:Cn,title:"Download all feedback reviews as CSV",children:[c.jsx(rb,{size:14}),c.jsx("span",{children:"Export CSV"})]}),(p||x||k||m||v!=="newest"||w||N)&&c.jsx("button",{type:"button",className:"btn-clear-all",onClick:Ye,children:"Clear Filters"})]})]}),q.size>0&&c.jsxs("div",{className:"bulk-actions-card",children:[c.jsxs("div",{className:"bulk-info",children:[c.jsx(pb,{size:17,className:"bulk-icon"}),c.jsxs("span",{children:[c.jsx("b",{children:q.size})," review(s) selected"]})]}),c.jsxs("div",{className:"bulk-btns",children:[c.jsxs("button",{type:"button",className:"btn-bulk-delete",onClick:Ge,disabled:le,children:[c.jsx(Bi,{size:14}),c.jsxs("span",{children:["Delete Selected (",q.size,")"]})]}),c.jsx("button",{type:"button",className:"btn-bulk-cancel",onClick:()=>H(new Set),children:"Cancel Selection"})]})]}),U&&c.jsxs("div",{className:"table-error-banner",children:[c.jsx("span",{children:U}),c.jsx("button",{onClick:Ee,children:"Retry"})]}),c.jsxs("div",{className:"table-card",children:[c.jsx("div",{className:"table-responsive",children:c.jsxs("table",{className:"admin-table",children:[c.jsx("thead",{children:c.jsxs("tr",{children:[c.jsx("th",{style:{width:42,textAlign:"center"},children:c.jsx("input",{type:"checkbox",className:"row-checkbox",checked:e.length>0&&e.every(D=>q.has(D.id)),onChange:pe,title:"Select all on this page"})}),c.jsx("th",{children:"Date / Time"}),c.jsx("th",{children:"Email Address"}),c.jsx("th",{children:"Rating"}),c.jsx("th",{children:"Category"}),c.jsx("th",{children:"Feedback Message"}),c.jsx("th",{children:"Device"}),c.jsx("th",{children:"Browser"}),c.jsx("th",{children:"Status"}),c.jsx("th",{className:"text-right",children:"Actions"})]})}),c.jsx("tbody",{children:_?c.jsx("tr",{children:c.jsxs("td",{colSpan:"10",className:"table-loading-cell",children:[c.jsx("span",{className:"table-spinner"})," Loading feedback..."]})}):e.length===0?c.jsx("tr",{children:c.jsx("td",{colSpan:"10",className:"table-empty-cell",children:"No matching feedback entries found."})}):e.map(D=>{const ge=q.has(D.id);return c.jsxs("tr",{className:`table-row-clickable ${ge?"row-selected":""}`,onClick:()=>Me(D),children:[c.jsx("td",{style:{textAlign:"center"},onClick:re=>re.stopPropagation(),children:c.jsx("input",{type:"checkbox",className:"row-checkbox",checked:ge,onChange:re=>et(D.id,re)})}),c.jsx("td",{className:"text-muted",children:qt(D.created_at)}),c.jsx("td",{className:"font-semibold text-white",children:D.email}),c.jsx("td",{children:c.jsx("div",{className:"table-stars",children:[...Array(5)].map((re,xe)=>c.jsx(br,{size:13,fill:xe<D.rating?"#fbbf24":"transparent",color:xe<D.rating?"#fbbf24":"rgba(255,255,255,0.2)"},xe))})}),c.jsx("td",{children:c.jsx("span",{className:`cat-chip cat-chip-${(D.category||"").toLowerCase().replace(/[^a-z]/g,"")}`,children:D.category})}),c.jsx("td",{className:"message-preview-cell",children:c.jsx("p",{children:D.message})}),c.jsx("td",{children:c.jsx("span",{className:"device-chip",children:D.device_type||"desktop"})}),c.jsx("td",{children:c.jsx("span",{className:"browser-chip",children:D.browser_name||"Chrome"})}),c.jsx("td",{onClick:re=>re.stopPropagation(),children:c.jsxs("select",{value:D.status,onChange:re=>Gt(D.id,re.target.value),className:`status-dropdown status-style-${D.status}`,children:[c.jsx("option",{value:"new",children:"New"}),c.jsx("option",{value:"reviewed",children:"Reviewed"}),c.jsx("option",{value:"resolved",children:"Resolved"})]})}),c.jsx("td",{className:"text-right",onClick:re=>re.stopPropagation(),children:c.jsxs("div",{className:"row-actions-group",children:[c.jsxs("button",{type:"button",className:"btn-view-detail",onClick:()=>Me(D),title:"View Full Feedback & Notes",children:[c.jsx(Hp,{size:13})," View"]}),c.jsx("button",{type:"button",className:"btn-action-delete",onClick:re=>St(D.id,re),disabled:le,title:"Delete feedback entry",children:c.jsx(Bi,{size:13})})]})})]},D.id)})})]})}),c.jsxs("div",{className:"pagination-bar",children:[c.jsxs("div",{className:"pagination-info",children:["Showing ",c.jsx("b",{children:e.length})," of ",c.jsx("b",{children:i})," total reviews (Page ",l," of ",a,")"]}),c.jsxs("div",{className:"pagination-controls",children:[c.jsxs("label",{className:"page-size-label",children:[c.jsx("span",{children:"Per page:"}),c.jsxs("select",{value:d,onChange:D=>{f(Number(D.target.value)),u(1)},children:[c.jsx("option",{value:"15",children:"15"}),c.jsx("option",{value:"30",children:"30"}),c.jsx("option",{value:"50",children:"50"})]})]}),c.jsx("button",{type:"button",className:"btn-page",disabled:l<=1,onClick:()=>u(D=>Math.max(1,D-1)),title:"Previous page",children:c.jsx(eb,{size:16})}),c.jsxs("span",{className:"current-page-num",children:[l," / ",a]}),c.jsx("button",{type:"button",className:"btn-page",disabled:l>=a,onClick:()=>u(D=>Math.min(a,D+1)),title:"Next page",children:c.jsx(tb,{size:16})})]})]})]}),S&&c.jsx("div",{className:"detail-modal-overlay",onClick:()=>Y(null),children:c.jsxs("div",{className:"detail-modal-card",onClick:D=>D.stopPropagation(),children:[c.jsxs("div",{className:"detail-modal-head",children:[c.jsxs("div",{children:[c.jsx("span",{className:"detail-eyebrow",children:"FEEDBACK INSPECTION"}),c.jsxs("h3",{children:["Review from ",S.email]})]}),c.jsxs("div",{className:"head-actions",children:[c.jsxs("button",{type:"button",className:"btn-drawer-delete",onClick:D=>St(S.id,D),title:"Delete this feedback entry",children:[c.jsx(Bi,{size:14})," Delete"]}),c.jsx("button",{type:"button",className:"btn-modal-close",onClick:()=>Y(null),children:c.jsx(It,{size:18})})]})]}),c.jsxs("div",{className:"detail-modal-body",children:[c.jsxs("div",{className:"fb-inspect-meta",children:[c.jsxs("div",{children:[c.jsx("span",{children:"Submitted At"}),c.jsx("b",{children:qt(S.created_at)})]}),c.jsxs("div",{children:[c.jsx("span",{children:"Category"}),c.jsx("b",{children:S.category})]}),c.jsxs("div",{children:[c.jsx("span",{children:"Device & Browser"}),c.jsxs("b",{children:[S.device_type," • ",S.browser_name]})]}),c.jsxs("div",{children:[c.jsx("span",{children:"Rating"}),c.jsx("div",{className:"table-stars",children:[...Array(S.rating)].map((D,ge)=>c.jsx(br,{size:15,fill:"#fbbf24",color:"#fbbf24"},ge))})]})]}),c.jsxs("div",{className:"fb-inspect-message-box",children:[c.jsx("span",{className:"box-label",children:"Visitor Feedback Message"}),c.jsx("p",{className:"full-message-text",children:S.message})]}),c.jsxs("div",{className:"fb-inspect-status-box",children:[c.jsx("span",{className:"box-label",children:"Resolution Status"}),c.jsx("div",{className:"status-button-group",children:["new","reviewed","resolved"].map(D=>c.jsxs("button",{type:"button",className:`status-btn ${S.status===D?"active-"+D:""}`,onClick:()=>Gt(S.id,D),children:[S.status===D&&c.jsx(Up,{size:14}),c.jsx("span",{style:{textTransform:"capitalize"},children:D})]},D))})]}),c.jsxs("div",{className:"fb-inspect-notes-box",children:[c.jsxs("div",{className:"notes-box-head",children:[c.jsx("span",{className:"box-label",children:"Administrator Internal Notes"}),c.jsxs("button",{type:"button",className:"btn-save-notes",onClick:jr,disabled:ee,children:[c.jsx(m_,{size:13}),c.jsx("span",{children:ee?"Saving...":"Save Notes"})]})]}),c.jsx("textarea",{rows:"4",value:ue,onChange:D=>Se(D.target.value),placeholder:"Record follow-up actions, customer bug reports, or engineering notes here...",className:"notes-textarea"})]})]})]})}),c.jsx("style",{children:`
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
      `})]})}P1(document.getElementById("root")).render(c.jsx(dS.StrictMode,{children:c.jsx(qT,{children:c.jsxs(ST,{children:[c.jsx(Or,{path:"/",element:c.jsx(Vz,{})}),c.jsx(Or,{path:"/admin/login",element:c.jsx(Hz,{})}),c.jsx(Or,{path:"/admin/dashboard",element:c.jsx(Gz,{})}),c.jsx(Or,{path:"/admin/emails",element:c.jsx(Yz,{})}),c.jsx(Or,{path:"/admin/feedback",element:c.jsx(Jz,{})}),c.jsx(Or,{path:"*",element:c.jsx(wT,{to:"/",replace:!0})})]})})}));
