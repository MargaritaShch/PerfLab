(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function o(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(n){if(n.ep)return;n.ep=!0;const s=o(n);fetch(n.href,s)}})();/**
* @vue/shared v3.5.6
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Cr(e){const t=Object.create(null);for(const o of e.split(","))t[o]=1;return o=>o in t}const Y={},Et=[],Be=()=>{},Ti=()=>!1,Ao=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),Pr=e=>e.startsWith("onUpdate:"),le=Object.assign,Mr=(e,t)=>{const o=e.indexOf(t);o>-1&&e.splice(o,1)},bi=Object.prototype.hasOwnProperty,G=(e,t)=>bi.call(e,t),q=Array.isArray,Jt=e=>so(e)==="[object Map]",_o=e=>so(e)==="[object Set]",Wr=e=>so(e)==="[object Date]",H=e=>typeof e=="function",ne=e=>typeof e=="string",Ge=e=>typeof e=="symbol",ee=e=>e!==null&&typeof e=="object",$n=e=>(ee(e)||H(e))&&H(e.then)&&H(e.catch),Wn=Object.prototype.toString,so=e=>Wn.call(e),Ci=e=>so(e).slice(8,-1),Qn=e=>so(e)==="[object Object]",Rr=e=>ne(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Gt=Cr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Do=e=>{const t=Object.create(null);return o=>t[o]||(t[o]=e(o))},Pi=/-(\w)/g,De=Do(e=>e.replace(Pi,(t,o)=>o?o.toUpperCase():"")),Mi=/\B([A-Z])/g,Tt=Do(e=>e.replace(Mi,"-$1").toLowerCase()),xo=Do(e=>e.charAt(0).toUpperCase()+e.slice(1)),$o=Do(e=>e?`on${xo(e)}`:""),at=(e,t)=>!Object.is(e,t),vo=(e,...t)=>{for(let o=0;o<e.length;o++)e[o](...t)},Kn=(e,t,o,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:o})},Po=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Qr;const zn=()=>Qr||(Qr=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function wr(e){if(q(e)){const t={};for(let o=0;o<e.length;o++){const r=e[o],n=ne(r)?Ji(r):wr(r);if(n)for(const s in n)t[s]=n[s]}return t}else if(ne(e)||ee(e))return e}const Ri=/;(?![^(]*\))/g,wi=/:([^]+)/,Ei=/\/\*[^]*?\*\//g;function Ji(e){const t={};return e.replace(Ei,"").split(Ri).forEach(o=>{if(o){const r=o.split(wi);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function Oo(e){let t="";if(ne(e))t=e;else if(q(e))for(let o=0;o<e.length;o++){const r=Oo(e[o]);r&&(t+=r+" ")}else if(ee(e))for(const o in e)e[o]&&(t+=o+" ");return t.trim()}const Ii="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ai=Cr(Ii);function Xn(e){return!!e||e===""}function _i(e,t){if(e.length!==t.length)return!1;let o=!0;for(let r=0;o&&r<e.length;r++)o=Lo(e[r],t[r]);return o}function Lo(e,t){if(e===t)return!0;let o=Wr(e),r=Wr(t);if(o||r)return o&&r?e.getTime()===t.getTime():!1;if(o=Ge(e),r=Ge(t),o||r)return e===t;if(o=q(e),r=q(t),o||r)return o&&r?_i(e,t):!1;if(o=ee(e),r=ee(t),o||r){if(!o||!r)return!1;const n=Object.keys(e).length,s=Object.keys(t).length;if(n!==s)return!1;for(const i in e){const l=e.hasOwnProperty(i),a=t.hasOwnProperty(i);if(l&&!a||!l&&a||!Lo(e[i],t[i]))return!1}}return String(e)===String(t)}function Di(e,t){return e.findIndex(o=>Lo(o,t))}const Yn=e=>!!(e&&e.__v_isRef===!0),mt=e=>ne(e)?e:e==null?"":q(e)||ee(e)&&(e.toString===Wn||!H(e.toString))?Yn(e)?mt(e.value):JSON.stringify(e,Zn,2):String(e),Zn=(e,t)=>Yn(t)?Zn(e,t.value):Jt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((o,[r,n],s)=>(o[Wo(r,s)+" =>"]=n,o),{})}:_o(t)?{[`Set(${t.size})`]:[...t.values()].map(o=>Wo(o))}:Ge(t)?Wo(t):ee(t)&&!q(t)&&!Qn(t)?String(t):t,Wo=(e,t="")=>{var o;return Ge(e)?`Symbol(${(o=e.description)!=null?o:t})`:e};/**
* @vue/reactivity v3.5.6
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Te;class xi{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Te,!t&&Te&&(this.index=(Te.scopes||(Te.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,o;if(this.scopes)for(t=0,o=this.scopes.length;t<o;t++)this.scopes[t].pause();for(t=0,o=this.effects.length;t<o;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,o;if(this.scopes)for(t=0,o=this.scopes.length;t<o;t++)this.scopes[t].resume();for(t=0,o=this.effects.length;t<o;t++)this.effects[t].resume()}}run(t){if(this._active){const o=Te;try{return Te=this,t()}finally{Te=o}}}on(){Te=this}off(){Te=this.parent}stop(t){if(this._active){let o,r;for(o=0,r=this.effects.length;o<r;o++)this.effects[o].stop();for(o=0,r=this.cleanups.length;o<r;o++)this.cleanups[o]();if(this.scopes)for(o=0,r=this.scopes.length;o<r;o++)this.scopes[o].stop(!0);if(!this.detached&&this.parent&&!t){const n=this.parent.scopes.pop();n&&n!==this&&(this.parent.scopes[this.index]=n,n.index=this.index)}this.parent=void 0,this._active=!1}}}function Oi(){return Te}let X;const Qo=new WeakSet;class es{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Te&&Te.active&&Te.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Qo.has(this)&&(Qo.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||os(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Kr(this),rs(this);const t=X,o=_e;X=this,_e=!0;try{return this.fn()}finally{ns(this),X=t,_e=o,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Ir(t);this.deps=this.depsTail=void 0,Kr(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Qo.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){sr(this)&&this.run()}get dirty(){return sr(this)}}let ts=0,Vt;function os(e){e.flags|=8,e.next=Vt,Vt=e}function Er(){ts++}function Jr(){if(--ts>0)return;let e;for(;Vt;){let t=Vt;for(Vt=void 0;t;){const o=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(r){e||(e=r)}t=o}}if(e)throw e}function rs(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function ns(e){let t,o=e.depsTail,r=o;for(;r;){const n=r.prevDep;r.version===-1?(r===o&&(o=n),Ir(r),Li(r)):t=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=n}e.deps=t,e.depsTail=o}function sr(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(ss(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function ss(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Xt))return;e.globalVersion=Xt;const t=e.dep;if(e.flags|=2,t.version>0&&!e.isSSR&&e.deps&&!sr(e)){e.flags&=-3;return}const o=X,r=_e;X=e,_e=!0;try{rs(e);const n=e.fn(e._value);(t.version===0||at(n,e._value))&&(e._value=n,t.version++)}catch(n){throw t.version++,n}finally{X=o,_e=r,ns(e),e.flags&=-3}}function Ir(e){const{dep:t,prevSub:o,nextSub:r}=e;if(o&&(o.nextSub=r,e.prevSub=void 0),r&&(r.prevSub=o,e.nextSub=void 0),t.subs===e&&(t.subs=o),!t.subs&&t.computed){t.computed.flags&=-5;for(let n=t.computed.deps;n;n=n.nextDep)Ir(n)}}function Li(e){const{prevDep:t,nextDep:o}=e;t&&(t.nextDep=o,e.prevDep=void 0),o&&(o.prevDep=t,e.nextDep=void 0)}let _e=!0;const is=[];function ct(){is.push(_e),_e=!1}function ut(){const e=is.pop();_e=e===void 0?!0:e}function Kr(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const o=X;X=void 0;try{t()}finally{X=o}}}let Xt=0;class Ni{constructor(t,o){this.sub=t,this.dep=o,this.version=o.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Ar{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0}track(t){if(!X||!_e||X===this.computed)return;let o=this.activeLink;if(o===void 0||o.sub!==X)o=this.activeLink=new Ni(X,this),X.deps?(o.prevDep=X.depsTail,X.depsTail.nextDep=o,X.depsTail=o):X.deps=X.depsTail=o,X.flags&4&&ls(o);else if(o.version===-1&&(o.version=this.version,o.nextDep)){const r=o.nextDep;r.prevDep=o.prevDep,o.prevDep&&(o.prevDep.nextDep=r),o.prevDep=X.depsTail,o.nextDep=void 0,X.depsTail.nextDep=o,X.depsTail=o,X.deps===o&&(X.deps=r)}return o}trigger(t){this.version++,Xt++,this.notify(t)}notify(t){Er();try{for(let o=this.subs;o;o=o.prevSub)o.sub.notify()&&o.sub.dep.notify()}finally{Jr()}}}function ls(e){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let r=t.deps;r;r=r.nextDep)ls(r)}const o=e.dep.subs;o!==e&&(e.prevSub=o,o&&(o.nextSub=e)),e.dep.subs=e}const ir=new WeakMap,vt=Symbol(""),lr=Symbol(""),Yt=Symbol("");function ge(e,t,o){if(_e&&X){let r=ir.get(e);r||ir.set(e,r=new Map);let n=r.get(o);n||r.set(o,n=new Ar),n.track()}}function Xe(e,t,o,r,n,s){const i=ir.get(e);if(!i){Xt++;return}const l=a=>{a&&a.trigger()};if(Er(),t==="clear")i.forEach(l);else{const a=q(e),p=a&&Rr(o);if(a&&o==="length"){const d=Number(r);i.forEach((g,h)=>{(h==="length"||h===Yt||!Ge(h)&&h>=d)&&l(g)})}else switch(o!==void 0&&l(i.get(o)),p&&l(i.get(Yt)),t){case"add":a?p&&l(i.get("length")):(l(i.get(vt)),Jt(e)&&l(i.get(lr)));break;case"delete":a||(l(i.get(vt)),Jt(e)&&l(i.get(lr)));break;case"set":Jt(e)&&l(i.get(vt));break}}Jr()}function Mt(e){const t=V(e);return t===e?t:(ge(t,"iterate",Yt),Ee(e)?t:t.map(ce))}function No(e){return ge(e=V(e),"iterate",Yt),e}const qi={__proto__:null,[Symbol.iterator](){return Ko(this,Symbol.iterator,ce)},concat(...e){return Mt(this).concat(...e.map(t=>q(t)?Mt(t):t))},entries(){return Ko(this,"entries",e=>(e[1]=ce(e[1]),e))},every(e,t){return We(this,"every",e,t,void 0,arguments)},filter(e,t){return We(this,"filter",e,t,o=>o.map(ce),arguments)},find(e,t){return We(this,"find",e,t,ce,arguments)},findIndex(e,t){return We(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return We(this,"findLast",e,t,ce,arguments)},findLastIndex(e,t){return We(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return We(this,"forEach",e,t,void 0,arguments)},includes(...e){return zo(this,"includes",e)},indexOf(...e){return zo(this,"indexOf",e)},join(e){return Mt(this).join(e)},lastIndexOf(...e){return zo(this,"lastIndexOf",e)},map(e,t){return We(this,"map",e,t,void 0,arguments)},pop(){return Ht(this,"pop")},push(...e){return Ht(this,"push",e)},reduce(e,...t){return zr(this,"reduce",e,t)},reduceRight(e,...t){return zr(this,"reduceRight",e,t)},shift(){return Ht(this,"shift")},some(e,t){return We(this,"some",e,t,void 0,arguments)},splice(...e){return Ht(this,"splice",e)},toReversed(){return Mt(this).toReversed()},toSorted(e){return Mt(this).toSorted(e)},toSpliced(...e){return Mt(this).toSpliced(...e)},unshift(...e){return Ht(this,"unshift",e)},values(){return Ko(this,"values",ce)}};function Ko(e,t,o){const r=No(e),n=r[t]();return r!==e&&!Ee(e)&&(n._next=n.next,n.next=()=>{const s=n._next();return s.value&&(s.value=o(s.value)),s}),n}const ji=Array.prototype;function We(e,t,o,r,n,s){const i=No(e),l=i!==e&&!Ee(e),a=i[t];if(a!==ji[t]){const g=a.apply(e,s);return l?ce(g):g}let p=o;i!==e&&(l?p=function(g,h){return o.call(this,ce(g),h,e)}:o.length>2&&(p=function(g,h){return o.call(this,g,h,e)}));const d=a.call(i,p,r);return l&&n?n(d):d}function zr(e,t,o,r){const n=No(e);let s=o;return n!==e&&(Ee(e)?o.length>3&&(s=function(i,l,a){return o.call(this,i,l,a,e)}):s=function(i,l,a){return o.call(this,i,ce(l),a,e)}),n[t](s,...r)}function zo(e,t,o){const r=V(e);ge(r,"iterate",Yt);const n=r[t](...o);return(n===-1||n===!1)&&Or(o[0])?(o[0]=V(o[0]),r[t](...o)):n}function Ht(e,t,o=[]){ct(),Er();const r=V(e)[t].apply(e,o);return Jr(),ut(),r}const Hi=Cr("__proto__,__v_isRef,__isVue"),as=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Ge));function Fi(e){Ge(e)||(e=String(e));const t=V(this);return ge(t,"has",e),t.hasOwnProperty(e)}class cs{constructor(t=!1,o=!1){this._isReadonly=t,this._isShallow=o}get(t,o,r){const n=this._isReadonly,s=this._isShallow;if(o==="__v_isReactive")return!n;if(o==="__v_isReadonly")return n;if(o==="__v_isShallow")return s;if(o==="__v_raw")return r===(n?s?Zi:ps:s?gs:ds).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(r)?t:void 0;const i=q(t);if(!n){let a;if(i&&(a=qi[o]))return a;if(o==="hasOwnProperty")return Fi}const l=Reflect.get(t,o,de(t)?t:r);return(Ge(o)?as.has(o):Hi(o))||(n||ge(t,"get",o),s)?l:de(l)?i&&Rr(o)?l:l.value:ee(l)?n?fs(l):jo(l):l}}class us extends cs{constructor(t=!1){super(!1,t)}set(t,o,r,n){let s=t[o];if(!this._isShallow){const a=yt(s);if(!Ee(r)&&!yt(r)&&(s=V(s),r=V(r)),!q(t)&&de(s)&&!de(r))return a?!1:(s.value=r,!0)}const i=q(t)&&Rr(o)?Number(o)<t.length:G(t,o),l=Reflect.set(t,o,r,de(t)?t:n);return t===V(n)&&(i?at(r,s)&&Xe(t,"set",o,r):Xe(t,"add",o,r)),l}deleteProperty(t,o){const r=G(t,o);t[o];const n=Reflect.deleteProperty(t,o);return n&&r&&Xe(t,"delete",o,void 0),n}has(t,o){const r=Reflect.has(t,o);return(!Ge(o)||!as.has(o))&&ge(t,"has",o),r}ownKeys(t){return ge(t,"iterate",q(t)?"length":vt),Reflect.ownKeys(t)}}class ki extends cs{constructor(t=!1){super(!0,t)}set(t,o){return!0}deleteProperty(t,o){return!0}}const Ui=new us,Bi=new ki,Gi=new us(!0);const _r=e=>e,qo=e=>Reflect.getPrototypeOf(e);function uo(e,t,o=!1,r=!1){e=e.__v_raw;const n=V(e),s=V(t);o||(at(t,s)&&ge(n,"get",t),ge(n,"get",s));const{has:i}=qo(n),l=r?_r:o?Lr:ce;if(i.call(n,t))return l(e.get(t));if(i.call(n,s))return l(e.get(s));e!==n&&e.get(t)}function go(e,t=!1){const o=this.__v_raw,r=V(o),n=V(e);return t||(at(e,n)&&ge(r,"has",e),ge(r,"has",n)),e===n?o.has(e):o.has(e)||o.has(n)}function po(e,t=!1){return e=e.__v_raw,!t&&ge(V(e),"iterate",vt),Reflect.get(e,"size",e)}function Xr(e,t=!1){!t&&!Ee(e)&&!yt(e)&&(e=V(e));const o=V(this);return qo(o).has.call(o,e)||(o.add(e),Xe(o,"add",e,e)),this}function Yr(e,t,o=!1){!o&&!Ee(t)&&!yt(t)&&(t=V(t));const r=V(this),{has:n,get:s}=qo(r);let i=n.call(r,e);i||(e=V(e),i=n.call(r,e));const l=s.call(r,e);return r.set(e,t),i?at(t,l)&&Xe(r,"set",e,t):Xe(r,"add",e,t),this}function Zr(e){const t=V(this),{has:o,get:r}=qo(t);let n=o.call(t,e);n||(e=V(e),n=o.call(t,e)),r&&r.call(t,e);const s=t.delete(e);return n&&Xe(t,"delete",e,void 0),s}function en(){const e=V(this),t=e.size!==0,o=e.clear();return t&&Xe(e,"clear",void 0,void 0),o}function ho(e,t){return function(r,n){const s=this,i=s.__v_raw,l=V(i),a=t?_r:e?Lr:ce;return!e&&ge(l,"iterate",vt),i.forEach((p,d)=>r.call(n,a(p),a(d),s))}}function fo(e,t,o){return function(...r){const n=this.__v_raw,s=V(n),i=Jt(s),l=e==="entries"||e===Symbol.iterator&&i,a=e==="keys"&&i,p=n[e](...r),d=o?_r:t?Lr:ce;return!t&&ge(s,"iterate",a?lr:vt),{next(){const{value:g,done:h}=p.next();return h?{value:g,done:h}:{value:l?[d(g[0]),d(g[1])]:d(g),done:h}},[Symbol.iterator](){return this}}}}function rt(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function Vi(){const e={get(s){return uo(this,s)},get size(){return po(this)},has:go,add:Xr,set:Yr,delete:Zr,clear:en,forEach:ho(!1,!1)},t={get(s){return uo(this,s,!1,!0)},get size(){return po(this)},has:go,add(s){return Xr.call(this,s,!0)},set(s,i){return Yr.call(this,s,i,!0)},delete:Zr,clear:en,forEach:ho(!1,!0)},o={get(s){return uo(this,s,!0)},get size(){return po(this,!0)},has(s){return go.call(this,s,!0)},add:rt("add"),set:rt("set"),delete:rt("delete"),clear:rt("clear"),forEach:ho(!0,!1)},r={get(s){return uo(this,s,!0,!0)},get size(){return po(this,!0)},has(s){return go.call(this,s,!0)},add:rt("add"),set:rt("set"),delete:rt("delete"),clear:rt("clear"),forEach:ho(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{e[s]=fo(s,!1,!1),o[s]=fo(s,!0,!1),t[s]=fo(s,!1,!0),r[s]=fo(s,!0,!0)}),[e,o,t,r]}const[$i,Wi,Qi,Ki]=Vi();function Dr(e,t){const o=t?e?Ki:Qi:e?Wi:$i;return(r,n,s)=>n==="__v_isReactive"?!e:n==="__v_isReadonly"?e:n==="__v_raw"?r:Reflect.get(G(o,n)&&n in r?o:r,n,s)}const zi={get:Dr(!1,!1)},Xi={get:Dr(!1,!0)},Yi={get:Dr(!0,!1)};const ds=new WeakMap,gs=new WeakMap,ps=new WeakMap,Zi=new WeakMap;function el(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function tl(e){return e.__v_skip||!Object.isExtensible(e)?0:el(Ci(e))}function jo(e){return yt(e)?e:xr(e,!1,Ui,zi,ds)}function hs(e){return xr(e,!1,Gi,Xi,gs)}function fs(e){return xr(e,!0,Bi,Yi,ps)}function xr(e,t,o,r,n){if(!ee(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const s=n.get(e);if(s)return s;const i=tl(e);if(i===0)return e;const l=new Proxy(e,i===2?r:o);return n.set(e,l),l}function It(e){return yt(e)?It(e.__v_raw):!!(e&&e.__v_isReactive)}function yt(e){return!!(e&&e.__v_isReadonly)}function Ee(e){return!!(e&&e.__v_isShallow)}function Or(e){return e?!!e.__v_raw:!1}function V(e){const t=e&&e.__v_raw;return t?V(t):e}function ol(e){return!G(e,"__v_skip")&&Object.isExtensible(e)&&Kn(e,"__v_skip",!0),e}const ce=e=>ee(e)?jo(e):e,Lr=e=>ee(e)?fs(e):e;function de(e){return e?e.__v_isRef===!0:!1}function rl(e){return ms(e,!1)}function nl(e){return ms(e,!0)}function ms(e,t){return de(e)?e:new sl(e,t)}class sl{constructor(t,o){this.dep=new Ar,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=o?t:V(t),this._value=o?t:ce(t),this.__v_isShallow=o}get value(){return this.dep.track(),this._value}set value(t){const o=this._rawValue,r=this.__v_isShallow||Ee(t)||yt(t);t=r?t:V(t),at(t,o)&&(this._rawValue=t,this._value=r?t:ce(t),this.dep.trigger())}}function At(e){return de(e)?e.value:e}const il={get:(e,t,o)=>t==="__v_raw"?e:At(Reflect.get(e,t,o)),set:(e,t,o,r)=>{const n=e[t];return de(n)&&!de(o)?(n.value=o,!0):Reflect.set(e,t,o,r)}};function vs(e){return It(e)?e:new Proxy(e,il)}class ll{constructor(t,o,r){this.fn=t,this.setter=o,this._value=void 0,this.dep=new Ar(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Xt-1,this.effect=this,this.__v_isReadonly=!o,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&X!==this)return os(this),!0}get value(){const t=this.dep.track();return ss(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function al(e,t,o=!1){let r,n;return H(e)?r=e:(r=e.get,n=e.set),new ll(r,n,o)}const mo={},Mo=new WeakMap;let ht;function cl(e,t=!1,o=ht){if(o){let r=Mo.get(o);r||Mo.set(o,r=[]),r.push(e)}}function ul(e,t,o=Y){const{immediate:r,deep:n,once:s,scheduler:i,augmentJob:l,call:a}=o,p=A=>n?A:Ee(A)||n===!1||n===0?ze(A,1):ze(A);let d,g,h,m,J=!1,I=!1;if(de(e)?(g=()=>e.value,J=Ee(e)):It(e)?(g=()=>p(e),J=!0):q(e)?(I=!0,J=e.some(A=>It(A)||Ee(A)),g=()=>e.map(A=>{if(de(A))return A.value;if(It(A))return p(A);if(H(A))return a?a(A,2):A()})):H(e)?t?g=a?()=>a(e,2):e:g=()=>{if(h){ct();try{h()}finally{ut()}}const A=ht;ht=d;try{return a?a(e,3,[m]):e(m)}finally{ht=A}}:g=Be,t&&n){const A=g,z=n===!0?1/0:n;g=()=>ze(A(),z)}const F=Oi(),O=()=>{d.stop(),F&&Mr(F.effects,d)};if(s&&t){const A=t;t=(...z)=>{A(...z),O()}}let x=I?new Array(e.length).fill(mo):mo;const L=A=>{if(!(!(d.flags&1)||!d.dirty&&!A))if(t){const z=d.run();if(n||J||(I?z.some((ie,oe)=>at(ie,x[oe])):at(z,x))){h&&h();const ie=ht;ht=d;try{const oe=[z,x===mo?void 0:I&&x[0]===mo?[]:x,m];a?a(t,3,oe):t(...oe),x=z}finally{ht=ie}}}else d.run()};return l&&l(L),d=new es(g),d.scheduler=i?()=>i(L,!1):L,m=A=>cl(A,!1,d),h=d.onStop=()=>{const A=Mo.get(d);if(A){if(a)a(A,4);else for(const z of A)z();Mo.delete(d)}},t?r?L(!0):x=d.run():i?i(L.bind(null,!0),!0):d.run(),O.pause=d.pause.bind(d),O.resume=d.resume.bind(d),O.stop=O,O}function ze(e,t=1/0,o){if(t<=0||!ee(e)||e.__v_skip||(o=o||new Set,o.has(e)))return e;if(o.add(e),t--,de(e))ze(e.value,t,o);else if(q(e))for(let r=0;r<e.length;r++)ze(e[r],t,o);else if(_o(e)||Jt(e))e.forEach(r=>{ze(r,t,o)});else if(Qn(e)){for(const r in e)ze(e[r],t,o);for(const r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&ze(e[r],t,o)}return e}/**
* @vue/runtime-core v3.5.6
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function io(e,t,o,r){try{return r?e(...r):e()}catch(n){Ho(n,t,o)}}function Ve(e,t,o,r){if(H(e)){const n=io(e,t,o,r);return n&&$n(n)&&n.catch(s=>{Ho(s,t,o)}),n}if(q(e)){const n=[];for(let s=0;s<e.length;s++)n.push(Ve(e[s],t,o,r));return n}}function Ho(e,t,o,r=!0){const n=t?t.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:i}=t&&t.appContext.config||Y;if(t){let l=t.parent;const a=t.proxy,p=`https://vuejs.org/error-reference/#runtime-${o}`;for(;l;){const d=l.ec;if(d){for(let g=0;g<d.length;g++)if(d[g](e,a,p)===!1)return}l=l.parent}if(s){ct(),io(s,null,10,[e,a,p]),ut();return}}dl(e,o,n,r,i)}function dl(e,t,o,r=!0,n=!1){if(n)throw e;console.error(e)}let Zt=!1,ar=!1;const he=[];let Fe=0;const _t=[];let st=null,Rt=0;const ys=Promise.resolve();let Nr=null;function qr(e){const t=Nr||ys;return e?t.then(this?e.bind(this):e):t}function gl(e){let t=Zt?Fe+1:0,o=he.length;for(;t<o;){const r=t+o>>>1,n=he[r],s=eo(n);s<e||s===e&&n.flags&2?t=r+1:o=r}return t}function jr(e){if(!(e.flags&1)){const t=eo(e),o=he[he.length-1];!o||!(e.flags&2)&&t>=eo(o)?he.push(e):he.splice(gl(t),0,e),e.flags|=1,Ss()}}function Ss(){!Zt&&!ar&&(ar=!0,Nr=ys.then(bs))}function pl(e){q(e)?_t.push(...e):st&&e.id===-1?st.splice(Rt+1,0,e):e.flags&1||(_t.push(e),e.flags|=1),Ss()}function tn(e,t,o=Zt?Fe+1:0){for(;o<he.length;o++){const r=he[o];if(r&&r.flags&2){if(e&&r.id!==e.uid)continue;he.splice(o,1),o--,r.flags&4&&(r.flags&=-2),r(),r.flags&=-2}}}function Ts(e){if(_t.length){const t=[...new Set(_t)].sort((o,r)=>eo(o)-eo(r));if(_t.length=0,st){st.push(...t);return}for(st=t,Rt=0;Rt<st.length;Rt++){const o=st[Rt];o.flags&4&&(o.flags&=-2),o.flags&8||o(),o.flags&=-2}st=null,Rt=0}}const eo=e=>e.id==null?e.flags&2?-1:1/0:e.id;function bs(e){ar=!1,Zt=!0;try{for(Fe=0;Fe<he.length;Fe++){const t=he[Fe];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),io(t,t.i,t.i?15:14),t.flags&=-2)}}finally{for(;Fe<he.length;Fe++){const t=he[Fe];t&&(t.flags&=-2)}Fe=0,he.length=0,Ts(),Zt=!1,Nr=null,(he.length||_t.length)&&bs()}}let be=null,Cs=null;function Ro(e){const t=be;return be=e,Cs=e&&e.type.__scopeId||null,t}function Ie(e,t=be,o){if(!t||e._n)return e;const r=(...n)=>{r._d&&dn(-1);const s=Ro(t);let i;try{i=e(...n)}finally{Ro(s),r._d&&dn(1)}return i};return r._n=!0,r._c=!0,r._d=!0,r}function cr(e,t){if(be===null)return e;const o=Go(be),r=e.dirs||(e.dirs=[]);for(let n=0;n<t.length;n++){let[s,i,l,a=Y]=t[n];s&&(H(s)&&(s={mounted:s,updated:s}),s.deep&&ze(i),r.push({dir:s,instance:o,value:i,oldValue:void 0,arg:l,modifiers:a}))}return e}function gt(e,t,o,r){const n=e.dirs,s=t&&t.dirs;for(let i=0;i<n.length;i++){const l=n[i];s&&(l.oldValue=s[i].value);let a=l.dir[r];a&&(ct(),Ve(a,o,8,[e.el,l,e,t]),ut())}}const hl=Symbol("_vte"),fl=e=>e.__isTeleport;function Hr(e,t){e.shapeFlag&6&&e.component?(e.transition=t,Hr(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}/*! #__NO_SIDE_EFFECTS__ */function Ps(e,t){return H(e)?le({name:e.name},t,{setup:e}):e}function Ms(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function ur(e,t,o,r,n=!1){if(q(e)){e.forEach((J,I)=>ur(J,t&&(q(t)?t[I]:t),o,r,n));return}if($t(r)&&!n)return;const s=r.shapeFlag&4?Go(r.component):r.el,i=n?null:s,{i:l,r:a}=e,p=t&&t.r,d=l.refs===Y?l.refs={}:l.refs,g=l.setupState,h=V(g),m=g===Y?()=>!1:J=>G(h,J);if(p!=null&&p!==a&&(ne(p)?(d[p]=null,m(p)&&(g[p]=null)):de(p)&&(p.value=null)),H(a))io(a,l,12,[i,d]);else{const J=ne(a),I=de(a);if(J||I){const F=()=>{if(e.f){const O=J?m(a)?g[a]:d[a]:a.value;n?q(O)&&Mr(O,s):q(O)?O.includes(s)||O.push(s):J?(d[a]=[s],m(a)&&(g[a]=d[a])):(a.value=[s],e.k&&(d[e.k]=a.value))}else J?(d[a]=i,m(a)&&(g[a]=i)):I&&(a.value=i,e.k&&(d[e.k]=i))};i?(F.id=-1,Se(F,o)):F()}}}const $t=e=>!!e.type.__asyncLoader,Rs=e=>e.type.__isKeepAlive;function ml(e,t){ws(e,"a",t)}function vl(e,t){ws(e,"da",t)}function ws(e,t,o=ue){const r=e.__wdc||(e.__wdc=()=>{let n=o;for(;n;){if(n.isDeactivated)return;n=n.parent}return e()});if(Fo(t,r,o),o){let n=o.parent;for(;n&&n.parent;)Rs(n.parent.vnode)&&yl(r,t,o,n),n=n.parent}}function yl(e,t,o,r){const n=Fo(t,e,r,!0);Es(()=>{Mr(r[t],n)},o)}function Fo(e,t,o=ue,r=!1){if(o){const n=o[e]||(o[e]=[]),s=t.__weh||(t.__weh=(...i)=>{ct();const l=lo(o),a=Ve(t,o,e,i);return l(),ut(),a});return r?n.unshift(s):n.push(s),s}}const Ze=e=>(t,o=ue)=>{(!Bo||e==="sp")&&Fo(e,(...r)=>t(...r),o)},Sl=Ze("bm"),Tl=Ze("m"),bl=Ze("bu"),Cl=Ze("u"),Pl=Ze("bum"),Es=Ze("um"),Ml=Ze("sp"),Rl=Ze("rtg"),wl=Ze("rtc");function El(e,t=ue){Fo("ec",e,t)}const Js="components";function to(e,t){return Il(Js,e,!0,t)||e}const Jl=Symbol.for("v-ndc");function Il(e,t,o=!0,r=!1){const n=be||ue;if(n){const s=n.type;if(e===Js){const l=va(s,!1);if(l&&(l===t||l===De(t)||l===xo(De(t))))return s}const i=on(n[e]||s[e],t)||on(n.appContext[e],t);return!i&&r?s:i}}function on(e,t){return e&&(e[t]||e[De(t)]||e[xo(De(t))])}function Is(e,t,o,r){let n;const s=o,i=q(e);if(i||ne(e)){const l=i&&It(e);let a=!1;l&&(a=!Ee(e),e=No(e)),n=new Array(e.length);for(let p=0,d=e.length;p<d;p++)n[p]=t(a?ce(e[p]):e[p],p,void 0,s)}else if(typeof e=="number"){n=new Array(e);for(let l=0;l<e;l++)n[l]=t(l+1,l,void 0,s)}else if(ee(e))if(e[Symbol.iterator])n=Array.from(e,(l,a)=>t(l,a,void 0,s));else{const l=Object.keys(e);n=new Array(l.length);for(let a=0,p=l.length;a<p;a++){const d=l[a];n[a]=t(e[d],d,a,s)}}else n=[];return n}const dr=e=>e?zs(e)?Go(e):dr(e.parent):null,Wt=le(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>dr(e.parent),$root:e=>dr(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Fr(e),$forceUpdate:e=>e.f||(e.f=()=>{jr(e.update)}),$nextTick:e=>e.n||(e.n=qr.bind(e.proxy)),$watch:e=>zl.bind(e)}),Xo=(e,t)=>e!==Y&&!e.__isScriptSetup&&G(e,t),Al={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:o,setupState:r,data:n,props:s,accessCache:i,type:l,appContext:a}=e;let p;if(t[0]!=="$"){const m=i[t];if(m!==void 0)switch(m){case 1:return r[t];case 2:return n[t];case 4:return o[t];case 3:return s[t]}else{if(Xo(r,t))return i[t]=1,r[t];if(n!==Y&&G(n,t))return i[t]=2,n[t];if((p=e.propsOptions[0])&&G(p,t))return i[t]=3,s[t];if(o!==Y&&G(o,t))return i[t]=4,o[t];gr&&(i[t]=0)}}const d=Wt[t];let g,h;if(d)return t==="$attrs"&&ge(e.attrs,"get",""),d(e);if((g=l.__cssModules)&&(g=g[t]))return g;if(o!==Y&&G(o,t))return i[t]=4,o[t];if(h=a.config.globalProperties,G(h,t))return h[t]},set({_:e},t,o){const{data:r,setupState:n,ctx:s}=e;return Xo(n,t)?(n[t]=o,!0):r!==Y&&G(r,t)?(r[t]=o,!0):G(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(s[t]=o,!0)},has({_:{data:e,setupState:t,accessCache:o,ctx:r,appContext:n,propsOptions:s}},i){let l;return!!o[i]||e!==Y&&G(e,i)||Xo(t,i)||(l=s[0])&&G(l,i)||G(r,i)||G(Wt,i)||G(n.config.globalProperties,i)},defineProperty(e,t,o){return o.get!=null?e._.accessCache[t]=0:G(o,"value")&&this.set(e,t,o.value,null),Reflect.defineProperty(e,t,o)}};function rn(e){return q(e)?e.reduce((t,o)=>(t[o]=null,t),{}):e}let gr=!0;function _l(e){const t=Fr(e),o=e.proxy,r=e.ctx;gr=!1,t.beforeCreate&&nn(t.beforeCreate,e,"bc");const{data:n,computed:s,methods:i,watch:l,provide:a,inject:p,created:d,beforeMount:g,mounted:h,beforeUpdate:m,updated:J,activated:I,deactivated:F,beforeDestroy:O,beforeUnmount:x,destroyed:L,unmounted:A,render:z,renderTracked:ie,renderTriggered:oe,errorCaptured:Oe,serverPrefetch:et,expose:Le,inheritAttrs:tt,components:dt,directives:Ne,filters:qt}=t;if(p&&Dl(p,r,null),i)for(const K in i){const B=i[K];H(B)&&(r[K]=B.bind(o))}if(n){const K=n.call(o,o);ee(K)&&(e.data=jo(K))}if(gr=!0,s)for(const K in s){const B=s[K],$e=H(B)?B.bind(o,o):H(B.get)?B.get.bind(o,o):Be,ot=!H(B)&&H(B.set)?B.set.bind(o):Be,qe=Ae({get:$e,set:ot});Object.defineProperty(r,K,{enumerable:!0,configurable:!0,get:()=>qe.value,set:fe=>qe.value=fe})}if(l)for(const K in l)As(l[K],r,o,K);if(a){const K=H(a)?a.call(o):a;Reflect.ownKeys(K).forEach(B=>{yo(B,K[B])})}d&&nn(d,e,"c");function se(K,B){q(B)?B.forEach($e=>K($e.bind(o))):B&&K(B.bind(o))}if(se(Sl,g),se(Tl,h),se(bl,m),se(Cl,J),se(ml,I),se(vl,F),se(El,Oe),se(wl,ie),se(Rl,oe),se(Pl,x),se(Es,A),se(Ml,et),q(Le))if(Le.length){const K=e.exposed||(e.exposed={});Le.forEach(B=>{Object.defineProperty(K,B,{get:()=>o[B],set:$e=>o[B]=$e})})}else e.exposed||(e.exposed={});z&&e.render===Be&&(e.render=z),tt!=null&&(e.inheritAttrs=tt),dt&&(e.components=dt),Ne&&(e.directives=Ne),et&&Ms(e)}function Dl(e,t,o=Be){q(e)&&(e=pr(e));for(const r in e){const n=e[r];let s;ee(n)?"default"in n?s=Ye(n.from||r,n.default,!0):s=Ye(n.from||r):s=Ye(n),de(s)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>s.value,set:i=>s.value=i}):t[r]=s}}function nn(e,t,o){Ve(q(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,o)}function As(e,t,o,r){let n=r.includes(".")?Gs(o,r):()=>o[r];if(ne(e)){const s=t[e];H(s)&&So(n,s)}else if(H(e))So(n,e.bind(o));else if(ee(e))if(q(e))e.forEach(s=>As(s,t,o,r));else{const s=H(e.handler)?e.handler.bind(o):t[e.handler];H(s)&&So(n,s,e)}}function Fr(e){const t=e.type,{mixins:o,extends:r}=t,{mixins:n,optionsCache:s,config:{optionMergeStrategies:i}}=e.appContext,l=s.get(t);let a;return l?a=l:!n.length&&!o&&!r?a=t:(a={},n.length&&n.forEach(p=>wo(a,p,i,!0)),wo(a,t,i)),ee(t)&&s.set(t,a),a}function wo(e,t,o,r=!1){const{mixins:n,extends:s}=t;s&&wo(e,s,o,!0),n&&n.forEach(i=>wo(e,i,o,!0));for(const i in t)if(!(r&&i==="expose")){const l=xl[i]||o&&o[i];e[i]=l?l(e[i],t[i]):t[i]}return e}const xl={data:sn,props:ln,emits:ln,methods:Bt,computed:Bt,beforeCreate:pe,created:pe,beforeMount:pe,mounted:pe,beforeUpdate:pe,updated:pe,beforeDestroy:pe,beforeUnmount:pe,destroyed:pe,unmounted:pe,activated:pe,deactivated:pe,errorCaptured:pe,serverPrefetch:pe,components:Bt,directives:Bt,watch:Ll,provide:sn,inject:Ol};function sn(e,t){return t?e?function(){return le(H(e)?e.call(this,this):e,H(t)?t.call(this,this):t)}:t:e}function Ol(e,t){return Bt(pr(e),pr(t))}function pr(e){if(q(e)){const t={};for(let o=0;o<e.length;o++)t[e[o]]=e[o];return t}return e}function pe(e,t){return e?[...new Set([].concat(e,t))]:t}function Bt(e,t){return e?le(Object.create(null),e,t):t}function ln(e,t){return e?q(e)&&q(t)?[...new Set([...e,...t])]:le(Object.create(null),rn(e),rn(t??{})):t}function Ll(e,t){if(!e)return t;if(!t)return e;const o=le(Object.create(null),e);for(const r in t)o[r]=pe(e[r],t[r]);return o}function _s(){return{app:null,config:{isNativeTag:Ti,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Nl=0;function ql(e,t){return function(r,n=null){H(r)||(r=le({},r)),n!=null&&!ee(n)&&(n=null);const s=_s(),i=new WeakSet,l=[];let a=!1;const p=s.app={_uid:Nl++,_component:r,_props:n,_container:null,_context:s,_instance:null,version:Sa,get config(){return s.config},set config(d){},use(d,...g){return i.has(d)||(d&&H(d.install)?(i.add(d),d.install(p,...g)):H(d)&&(i.add(d),d(p,...g))),p},mixin(d){return s.mixins.includes(d)||s.mixins.push(d),p},component(d,g){return g?(s.components[d]=g,p):s.components[d]},directive(d,g){return g?(s.directives[d]=g,p):s.directives[d]},mount(d,g,h){if(!a){const m=p._ceVNode||te(r,n);return m.appContext=s,h===!0?h="svg":h===!1&&(h=void 0),g&&t?t(m,d):e(m,d,h),a=!0,p._container=d,d.__vue_app__=p,Go(m.component)}},onUnmount(d){l.push(d)},unmount(){a&&(Ve(l,p._instance,16),e(null,p._container),delete p._container.__vue_app__)},provide(d,g){return s.provides[d]=g,p},runWithContext(d){const g=Dt;Dt=p;try{return d()}finally{Dt=g}}};return p}}let Dt=null;function yo(e,t){if(ue){let o=ue.provides;const r=ue.parent&&ue.parent.provides;r===o&&(o=ue.provides=Object.create(r)),o[e]=t}}function Ye(e,t,o=!1){const r=ue||be;if(r||Dt){const n=Dt?Dt._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(n&&e in n)return n[e];if(arguments.length>1)return o&&H(t)?t.call(r&&r.proxy):t}}const Ds={},xs=()=>Object.create(Ds),Os=e=>Object.getPrototypeOf(e)===Ds;function jl(e,t,o,r=!1){const n={},s=xs();e.propsDefaults=Object.create(null),Ls(e,t,n,s);for(const i in e.propsOptions[0])i in n||(n[i]=void 0);o?e.props=r?n:hs(n):e.type.props?e.props=n:e.props=s,e.attrs=s}function Hl(e,t,o,r){const{props:n,attrs:s,vnode:{patchFlag:i}}=e,l=V(n),[a]=e.propsOptions;let p=!1;if((r||i>0)&&!(i&16)){if(i&8){const d=e.vnode.dynamicProps;for(let g=0;g<d.length;g++){let h=d[g];if(ko(e.emitsOptions,h))continue;const m=t[h];if(a)if(G(s,h))m!==s[h]&&(s[h]=m,p=!0);else{const J=De(h);n[J]=hr(a,l,J,m,e,!1)}else m!==s[h]&&(s[h]=m,p=!0)}}}else{Ls(e,t,n,s)&&(p=!0);let d;for(const g in l)(!t||!G(t,g)&&((d=Tt(g))===g||!G(t,d)))&&(a?o&&(o[g]!==void 0||o[d]!==void 0)&&(n[g]=hr(a,l,g,void 0,e,!0)):delete n[g]);if(s!==l)for(const g in s)(!t||!G(t,g))&&(delete s[g],p=!0)}p&&Xe(e.attrs,"set","")}function Ls(e,t,o,r){const[n,s]=e.propsOptions;let i=!1,l;if(t)for(let a in t){if(Gt(a))continue;const p=t[a];let d;n&&G(n,d=De(a))?!s||!s.includes(d)?o[d]=p:(l||(l={}))[d]=p:ko(e.emitsOptions,a)||(!(a in r)||p!==r[a])&&(r[a]=p,i=!0)}if(s){const a=V(o),p=l||Y;for(let d=0;d<s.length;d++){const g=s[d];o[g]=hr(n,a,g,p[g],e,!G(p,g))}}return i}function hr(e,t,o,r,n,s){const i=e[o];if(i!=null){const l=G(i,"default");if(l&&r===void 0){const a=i.default;if(i.type!==Function&&!i.skipFactory&&H(a)){const{propsDefaults:p}=n;if(o in p)r=p[o];else{const d=lo(n);r=p[o]=a.call(null,t),d()}}else r=a;n.ce&&n.ce._setProp(o,r)}i[0]&&(s&&!l?r=!1:i[1]&&(r===""||r===Tt(o))&&(r=!0))}return r}const Fl=new WeakMap;function Ns(e,t,o=!1){const r=o?Fl:t.propsCache,n=r.get(e);if(n)return n;const s=e.props,i={},l=[];let a=!1;if(!H(e)){const d=g=>{a=!0;const[h,m]=Ns(g,t,!0);le(i,h),m&&l.push(...m)};!o&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!s&&!a)return ee(e)&&r.set(e,Et),Et;if(q(s))for(let d=0;d<s.length;d++){const g=De(s[d]);an(g)&&(i[g]=Y)}else if(s)for(const d in s){const g=De(d);if(an(g)){const h=s[d],m=i[g]=q(h)||H(h)?{type:h}:le({},h),J=m.type;let I=!1,F=!0;if(q(J))for(let O=0;O<J.length;++O){const x=J[O],L=H(x)&&x.name;if(L==="Boolean"){I=!0;break}else L==="String"&&(F=!1)}else I=H(J)&&J.name==="Boolean";m[0]=I,m[1]=F,(I||G(m,"default"))&&l.push(g)}}const p=[i,l];return ee(e)&&r.set(e,p),p}function an(e){return e[0]!=="$"&&!Gt(e)}const qs=e=>e[0]==="_"||e==="$stable",kr=e=>q(e)?e.map(ke):[ke(e)],kl=(e,t,o)=>{if(t._n)return t;const r=Ie((...n)=>kr(t(...n)),o);return r._c=!1,r},js=(e,t,o)=>{const r=e._ctx;for(const n in e){if(qs(n))continue;const s=e[n];if(H(s))t[n]=kl(n,s,r);else if(s!=null){const i=kr(s);t[n]=()=>i}}},Hs=(e,t)=>{const o=kr(t);e.slots.default=()=>o},Fs=(e,t,o)=>{for(const r in t)(o||r!=="_")&&(e[r]=t[r])},Ul=(e,t,o)=>{const r=e.slots=xs();if(e.vnode.shapeFlag&32){const n=t._;n?(Fs(r,t,o),o&&Kn(r,"_",n,!0)):js(t,r)}else t&&Hs(e,t)},Bl=(e,t,o)=>{const{vnode:r,slots:n}=e;let s=!0,i=Y;if(r.shapeFlag&32){const l=t._;l?o&&l===1?s=!1:Fs(n,t,o):(s=!t.$stable,js(t,n)),i=t}else t&&(Hs(e,t),i={default:1});if(s)for(const l in n)!qs(l)&&i[l]==null&&delete n[l]},Se=ra;function Gl(e){return Vl(e)}function Vl(e,t){const o=zn();o.__VUE__=!0;const{insert:r,remove:n,patchProp:s,createElement:i,createText:l,createComment:a,setText:p,setElementText:d,parentNode:g,nextSibling:h,setScopeId:m=Be,insertStaticContent:J}=e,I=(c,u,f,S=null,v=null,T=null,M=void 0,P=null,C=!!u.dynamicChildren)=>{if(c===u)return;c&&!Ft(c,u)&&(S=y(c),fe(c,v,T,!0),c=null),u.patchFlag===-2&&(C=!1,u.dynamicChildren=null);const{type:b,ref:N,shapeFlag:w}=u;switch(b){case Uo:F(c,u,f,S);break;case St:O(c,u,f,S);break;case To:c==null&&x(u,f,S,M);break;case Me:dt(c,u,f,S,v,T,M,P,C);break;default:w&1?z(c,u,f,S,v,T,M,P,C):w&6?Ne(c,u,f,S,v,T,M,P,C):(w&64||w&128)&&b.process(c,u,f,S,v,T,M,P,C,_)}N!=null&&v&&ur(N,c&&c.ref,T,u||c,!u)},F=(c,u,f,S)=>{if(c==null)r(u.el=l(u.children),f,S);else{const v=u.el=c.el;u.children!==c.children&&p(v,u.children)}},O=(c,u,f,S)=>{c==null?r(u.el=a(u.children||""),f,S):u.el=c.el},x=(c,u,f,S)=>{[c.el,c.anchor]=J(c.children,u,f,S,c.el,c.anchor)},L=({el:c,anchor:u},f,S)=>{let v;for(;c&&c!==u;)v=h(c),r(c,f,S),c=v;r(u,f,S)},A=({el:c,anchor:u})=>{let f;for(;c&&c!==u;)f=h(c),n(c),c=f;n(u)},z=(c,u,f,S,v,T,M,P,C)=>{u.type==="svg"?M="svg":u.type==="math"&&(M="mathml"),c==null?ie(u,f,S,v,T,M,P,C):et(c,u,v,T,M,P,C)},ie=(c,u,f,S,v,T,M,P)=>{let C,b;const{props:N,shapeFlag:w,transition:D,dirs:j}=c;if(C=c.el=i(c.type,T,N&&N.is,N),w&8?d(C,c.children):w&16&&Oe(c.children,C,null,S,v,Yo(c,T),M,P),j&&gt(c,null,S,"created"),oe(C,c,c.scopeId,M,S),N){for(const Z in N)Z!=="value"&&!Gt(Z)&&s(C,Z,null,N[Z],T,S);"value"in N&&s(C,"value",null,N.value,T),(b=N.onVnodeBeforeMount)&&He(b,S,c)}j&&gt(c,null,S,"beforeMount");const k=$l(v,D);k&&D.beforeEnter(C),r(C,u,f),((b=N&&N.onVnodeMounted)||k||j)&&Se(()=>{b&&He(b,S,c),k&&D.enter(C),j&&gt(c,null,S,"mounted")},v)},oe=(c,u,f,S,v)=>{if(f&&m(c,f),S)for(let T=0;T<S.length;T++)m(c,S[T]);if(v){let T=v.subTree;if(u===T||$s(T.type)&&(T.ssContent===u||T.ssFallback===u)){const M=v.vnode;oe(c,M,M.scopeId,M.slotScopeIds,v.parent)}}},Oe=(c,u,f,S,v,T,M,P,C=0)=>{for(let b=C;b<c.length;b++){const N=c[b]=P?it(c[b]):ke(c[b]);I(null,N,u,f,S,v,T,M,P)}},et=(c,u,f,S,v,T,M)=>{const P=u.el=c.el;let{patchFlag:C,dynamicChildren:b,dirs:N}=u;C|=c.patchFlag&16;const w=c.props||Y,D=u.props||Y;let j;if(f&&pt(f,!1),(j=D.onVnodeBeforeUpdate)&&He(j,f,u,c),N&&gt(u,c,f,"beforeUpdate"),f&&pt(f,!0),(w.innerHTML&&D.innerHTML==null||w.textContent&&D.textContent==null)&&d(P,""),b?Le(c.dynamicChildren,b,P,f,S,Yo(u,v),T):M||B(c,u,P,null,f,S,Yo(u,v),T,!1),C>0){if(C&16)tt(P,w,D,f,v);else if(C&2&&w.class!==D.class&&s(P,"class",null,D.class,v),C&4&&s(P,"style",w.style,D.style,v),C&8){const k=u.dynamicProps;for(let Z=0;Z<k.length;Z++){const W=k[Z],me=w[W],ae=D[W];(ae!==me||W==="value")&&s(P,W,me,ae,v,f)}}C&1&&c.children!==u.children&&d(P,u.children)}else!M&&b==null&&tt(P,w,D,f,v);((j=D.onVnodeUpdated)||N)&&Se(()=>{j&&He(j,f,u,c),N&&gt(u,c,f,"updated")},S)},Le=(c,u,f,S,v,T,M)=>{for(let P=0;P<u.length;P++){const C=c[P],b=u[P],N=C.el&&(C.type===Me||!Ft(C,b)||C.shapeFlag&70)?g(C.el):f;I(C,b,N,null,S,v,T,M,!0)}},tt=(c,u,f,S,v)=>{if(u!==f){if(u!==Y)for(const T in u)!Gt(T)&&!(T in f)&&s(c,T,u[T],null,v,S);for(const T in f){if(Gt(T))continue;const M=f[T],P=u[T];M!==P&&T!=="value"&&s(c,T,P,M,v,S)}"value"in f&&s(c,"value",u.value,f.value,v)}},dt=(c,u,f,S,v,T,M,P,C)=>{const b=u.el=c?c.el:l(""),N=u.anchor=c?c.anchor:l("");let{patchFlag:w,dynamicChildren:D,slotScopeIds:j}=u;j&&(P=P?P.concat(j):j),c==null?(r(b,f,S),r(N,f,S),Oe(u.children||[],f,N,v,T,M,P,C)):w>0&&w&64&&D&&c.dynamicChildren?(Le(c.dynamicChildren,D,f,v,T,M,P),(u.key!=null||v&&u===v.subTree)&&ks(c,u,!0)):B(c,u,f,N,v,T,M,P,C)},Ne=(c,u,f,S,v,T,M,P,C)=>{u.slotScopeIds=P,c==null?u.shapeFlag&512?v.ctx.activate(u,f,S,M,C):qt(u,f,S,v,T,M,C):bt(c,u,C)},qt=(c,u,f,S,v,T,M)=>{const P=c.component=ga(c,S,v);if(Rs(c)&&(P.ctx.renderer=_),pa(P,!1,M),P.asyncDep){if(v&&v.registerDep(P,se,M),!c.el){const C=P.subTree=te(St);O(null,C,u,f)}}else se(P,c,u,f,v,T,M)},bt=(c,u,f)=>{const S=u.component=c.component;if(ta(c,u,f))if(S.asyncDep&&!S.asyncResolved){K(S,u,f);return}else S.next=u,S.update();else u.el=c.el,S.vnode=u},se=(c,u,f,S,v,T,M)=>{const P=()=>{if(c.isMounted){let{next:w,bu:D,u:j,parent:k,vnode:Z}=c;{const ve=Us(c);if(ve){w&&(w.el=Z.el,K(c,w,M)),ve.asyncDep.then(()=>{c.isUnmounted||P()});return}}let W=w,me;pt(c,!1),w?(w.el=Z.el,K(c,w,M)):w=Z,D&&vo(D),(me=w.props&&w.props.onVnodeBeforeUpdate)&&He(me,k,w,Z),pt(c,!0);const ae=Zo(c),Je=c.subTree;c.subTree=ae,I(Je,ae,g(Je.el),y(Je),c,v,T),w.el=ae.el,W===null&&oa(c,ae.el),j&&Se(j,v),(me=w.props&&w.props.onVnodeUpdated)&&Se(()=>He(me,k,w,Z),v)}else{let w;const{el:D,props:j}=u,{bm:k,m:Z,parent:W,root:me,type:ae}=c,Je=$t(u);if(pt(c,!1),k&&vo(k),!Je&&(w=j&&j.onVnodeBeforeMount)&&He(w,W,u),pt(c,!0),D&&re){const ve=()=>{c.subTree=Zo(c),re(D,c.subTree,c,v,null)};Je&&ae.__asyncHydrate?ae.__asyncHydrate(D,c,ve):ve()}else{me.ce&&me.ce._injectChildStyle(ae);const ve=c.subTree=Zo(c);I(null,ve,f,S,c,v,T),u.el=ve.el}if(Z&&Se(Z,v),!Je&&(w=j&&j.onVnodeMounted)){const ve=u;Se(()=>He(w,W,ve),v)}(u.shapeFlag&256||W&&$t(W.vnode)&&W.vnode.shapeFlag&256)&&c.a&&Se(c.a,v),c.isMounted=!0,u=f=S=null}};c.scope.on();const C=c.effect=new es(P);c.scope.off();const b=c.update=C.run.bind(C),N=c.job=C.runIfDirty.bind(C);N.i=c,N.id=c.uid,C.scheduler=()=>jr(N),pt(c,!0),b()},K=(c,u,f)=>{u.component=c;const S=c.vnode.props;c.vnode=u,c.next=null,Hl(c,u.props,S,f),Bl(c,u.children,f),ct(),tn(c),ut()},B=(c,u,f,S,v,T,M,P,C=!1)=>{const b=c&&c.children,N=c?c.shapeFlag:0,w=u.children,{patchFlag:D,shapeFlag:j}=u;if(D>0){if(D&128){ot(b,w,f,S,v,T,M,P,C);return}else if(D&256){$e(b,w,f,S,v,T,M,P,C);return}}j&8?(N&16&&Pe(b,v,T),w!==b&&d(f,w)):N&16?j&16?ot(b,w,f,S,v,T,M,P,C):Pe(b,v,T,!0):(N&8&&d(f,""),j&16&&Oe(w,f,S,v,T,M,P,C))},$e=(c,u,f,S,v,T,M,P,C)=>{c=c||Et,u=u||Et;const b=c.length,N=u.length,w=Math.min(b,N);let D;for(D=0;D<w;D++){const j=u[D]=C?it(u[D]):ke(u[D]);I(c[D],j,f,null,v,T,M,P,C)}b>N?Pe(c,v,T,!0,!1,w):Oe(u,f,S,v,T,M,P,C,w)},ot=(c,u,f,S,v,T,M,P,C)=>{let b=0;const N=u.length;let w=c.length-1,D=N-1;for(;b<=w&&b<=D;){const j=c[b],k=u[b]=C?it(u[b]):ke(u[b]);if(Ft(j,k))I(j,k,f,null,v,T,M,P,C);else break;b++}for(;b<=w&&b<=D;){const j=c[w],k=u[D]=C?it(u[D]):ke(u[D]);if(Ft(j,k))I(j,k,f,null,v,T,M,P,C);else break;w--,D--}if(b>w){if(b<=D){const j=D+1,k=j<N?u[j].el:S;for(;b<=D;)I(null,u[b]=C?it(u[b]):ke(u[b]),f,k,v,T,M,P,C),b++}}else if(b>D)for(;b<=w;)fe(c[b],v,T,!0),b++;else{const j=b,k=b,Z=new Map;for(b=k;b<=D;b++){const ye=u[b]=C?it(u[b]):ke(u[b]);ye.key!=null&&Z.set(ye.key,b)}let W,me=0;const ae=D-k+1;let Je=!1,ve=0;const jt=new Array(ae);for(b=0;b<ae;b++)jt[b]=0;for(b=j;b<=w;b++){const ye=c[b];if(me>=ae){fe(ye,v,T,!0);continue}let je;if(ye.key!=null)je=Z.get(ye.key);else for(W=k;W<=D;W++)if(jt[W-k]===0&&Ft(ye,u[W])){je=W;break}je===void 0?fe(ye,v,T,!0):(jt[je-k]=b+1,je>=ve?ve=je:Je=!0,I(ye,u[je],f,null,v,T,M,P,C),me++)}const Vr=Je?Wl(jt):Et;for(W=Vr.length-1,b=ae-1;b>=0;b--){const ye=k+b,je=u[ye],$r=ye+1<N?u[ye+1].el:S;jt[b]===0?I(null,je,f,$r,v,T,M,P,C):Je&&(W<0||b!==Vr[W]?qe(je,f,$r,2):W--)}}},qe=(c,u,f,S,v=null)=>{const{el:T,type:M,transition:P,children:C,shapeFlag:b}=c;if(b&6){qe(c.component.subTree,u,f,S);return}if(b&128){c.suspense.move(u,f,S);return}if(b&64){M.move(c,u,f,_);return}if(M===Me){r(T,u,f);for(let w=0;w<C.length;w++)qe(C[w],u,f,S);r(c.anchor,u,f);return}if(M===To){L(c,u,f);return}if(S!==2&&b&1&&P)if(S===0)P.beforeEnter(T),r(T,u,f),Se(()=>P.enter(T),v);else{const{leave:w,delayLeave:D,afterLeave:j}=P,k=()=>r(T,u,f),Z=()=>{w(T,()=>{k(),j&&j()})};D?D(T,k,Z):Z()}else r(T,u,f)},fe=(c,u,f,S=!1,v=!1)=>{const{type:T,props:M,ref:P,children:C,dynamicChildren:b,shapeFlag:N,patchFlag:w,dirs:D,cacheIndex:j}=c;if(w===-2&&(v=!1),P!=null&&ur(P,null,f,c,!0),j!=null&&(u.renderCache[j]=void 0),N&256){u.ctx.deactivate(c);return}const k=N&1&&D,Z=!$t(c);let W;if(Z&&(W=M&&M.onVnodeBeforeUnmount)&&He(W,u,c),N&6)co(c.component,f,S);else{if(N&128){c.suspense.unmount(f,S);return}k&&gt(c,null,u,"beforeUnmount"),N&64?c.type.remove(c,u,f,_,S):b&&!b.hasOnce&&(T!==Me||w>0&&w&64)?Pe(b,u,f,!1,!0):(T===Me&&w&384||!v&&N&16)&&Pe(C,u,f),S&&Ct(c)}(Z&&(W=M&&M.onVnodeUnmounted)||k)&&Se(()=>{W&&He(W,u,c),k&&gt(c,null,u,"unmounted")},f)},Ct=c=>{const{type:u,el:f,anchor:S,transition:v}=c;if(u===Me){Pt(f,S);return}if(u===To){A(c);return}const T=()=>{n(f),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(c.shapeFlag&1&&v&&!v.persisted){const{leave:M,delayLeave:P}=v,C=()=>M(f,T);P?P(c.el,T,C):C()}else T()},Pt=(c,u)=>{let f;for(;c!==u;)f=h(c),n(c),c=f;n(u)},co=(c,u,f)=>{const{bum:S,scope:v,job:T,subTree:M,um:P,m:C,a:b}=c;cn(C),cn(b),S&&vo(S),v.stop(),T&&(T.flags|=8,fe(M,c,u,f)),P&&Se(P,u),Se(()=>{c.isUnmounted=!0},u),u&&u.pendingBranch&&!u.isUnmounted&&c.asyncDep&&!c.asyncResolved&&c.suspenseId===u.pendingId&&(u.deps--,u.deps===0&&u.resolve())},Pe=(c,u,f,S=!1,v=!1,T=0)=>{for(let M=T;M<c.length;M++)fe(c[M],u,f,S,v)},y=c=>{if(c.shapeFlag&6)return y(c.component.subTree);if(c.shapeFlag&128)return c.suspense.next();const u=h(c.anchor||c.el),f=u&&u[hl];return f?h(f):u};let E=!1;const R=(c,u,f)=>{c==null?u._vnode&&fe(u._vnode,null,null,!0):I(u._vnode||null,c,u,null,null,null,f),u._vnode=c,E||(E=!0,tn(),Ts(),E=!1)},_={p:I,um:fe,m:qe,r:Ct,mt:qt,mc:Oe,pc:B,pbc:Le,n:y,o:e};let $,re;return{render:R,hydrate:$,createApp:ql(R,$)}}function Yo({type:e,props:t},o){return o==="svg"&&e==="foreignObject"||o==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:o}function pt({effect:e,job:t},o){o?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function $l(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function ks(e,t,o=!1){const r=e.children,n=t.children;if(q(r)&&q(n))for(let s=0;s<r.length;s++){const i=r[s];let l=n[s];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=n[s]=it(n[s]),l.el=i.el),!o&&l.patchFlag!==-2&&ks(i,l)),l.type===Uo&&(l.el=i.el)}}function Wl(e){const t=e.slice(),o=[0];let r,n,s,i,l;const a=e.length;for(r=0;r<a;r++){const p=e[r];if(p!==0){if(n=o[o.length-1],e[n]<p){t[r]=n,o.push(r);continue}for(s=0,i=o.length-1;s<i;)l=s+i>>1,e[o[l]]<p?s=l+1:i=l;p<e[o[s]]&&(s>0&&(t[r]=o[s-1]),o[s]=r)}}for(s=o.length,i=o[s-1];s-- >0;)o[s]=i,i=t[i];return o}function Us(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Us(t)}function cn(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}const Ql=Symbol.for("v-scx"),Kl=()=>Ye(Ql);function So(e,t,o){return Bs(e,t,o)}function Bs(e,t,o=Y){const{immediate:r,deep:n,flush:s,once:i}=o,l=le({},o);let a;if(Bo)if(s==="sync"){const h=Kl();a=h.__watcherHandles||(h.__watcherHandles=[])}else if(!t||r)l.once=!0;else{const h=()=>{};return h.stop=Be,h.resume=Be,h.pause=Be,h}const p=ue;l.call=(h,m,J)=>Ve(h,p,m,J);let d=!1;s==="post"?l.scheduler=h=>{Se(h,p&&p.suspense)}:s!=="sync"&&(d=!0,l.scheduler=(h,m)=>{m?h():jr(h)}),l.augmentJob=h=>{t&&(h.flags|=4),d&&(h.flags|=2,p&&(h.id=p.uid,h.i=p))};const g=ul(e,t,l);return a&&a.push(g),g}function zl(e,t,o){const r=this.proxy,n=ne(e)?e.includes(".")?Gs(r,e):()=>r[e]:e.bind(r,r);let s;H(t)?s=t:(s=t.handler,o=t);const i=lo(this),l=Bs(n,s.bind(r),o);return i(),l}function Gs(e,t){const o=t.split(".");return()=>{let r=e;for(let n=0;n<o.length&&r;n++)r=r[o[n]];return r}}const Xl=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${De(t)}Modifiers`]||e[`${Tt(t)}Modifiers`];function Yl(e,t,...o){if(e.isUnmounted)return;const r=e.vnode.props||Y;let n=o;const s=t.startsWith("update:"),i=s&&Xl(r,t.slice(7));i&&(i.trim&&(n=o.map(d=>ne(d)?d.trim():d)),i.number&&(n=o.map(Po)));let l,a=r[l=$o(t)]||r[l=$o(De(t))];!a&&s&&(a=r[l=$o(Tt(t))]),a&&Ve(a,e,6,n);const p=r[l+"Once"];if(p){if(!e.emitted)e.emitted={};else if(e.emitted[l])return;e.emitted[l]=!0,Ve(p,e,6,n)}}function Vs(e,t,o=!1){const r=t.emitsCache,n=r.get(e);if(n!==void 0)return n;const s=e.emits;let i={},l=!1;if(!H(e)){const a=p=>{const d=Vs(p,t,!0);d&&(l=!0,le(i,d))};!o&&t.mixins.length&&t.mixins.forEach(a),e.extends&&a(e.extends),e.mixins&&e.mixins.forEach(a)}return!s&&!l?(ee(e)&&r.set(e,null),null):(q(s)?s.forEach(a=>i[a]=null):le(i,s),ee(e)&&r.set(e,i),i)}function ko(e,t){return!e||!Ao(t)?!1:(t=t.slice(2).replace(/Once$/,""),G(e,t[0].toLowerCase()+t.slice(1))||G(e,Tt(t))||G(e,t))}function Zo(e){const{type:t,vnode:o,proxy:r,withProxy:n,propsOptions:[s],slots:i,attrs:l,emit:a,render:p,renderCache:d,props:g,data:h,setupState:m,ctx:J,inheritAttrs:I}=e,F=Ro(e);let O,x;try{if(o.shapeFlag&4){const A=n||r,z=A;O=ke(p.call(z,A,d,g,m,h,J)),x=l}else{const A=t;O=ke(A.length>1?A(g,{attrs:l,slots:i,emit:a}):A(g,null)),x=t.props?l:Zl(l)}}catch(A){Qt.length=0,Ho(A,e,1),O=te(St)}let L=O;if(x&&I!==!1){const A=Object.keys(x),{shapeFlag:z}=L;A.length&&z&7&&(s&&A.some(Pr)&&(x=ea(x,s)),L=Ot(L,x,!1,!0))}return o.dirs&&(L=Ot(L,null,!1,!0),L.dirs=L.dirs?L.dirs.concat(o.dirs):o.dirs),o.transition&&Hr(L,o.transition),O=L,Ro(F),O}const Zl=e=>{let t;for(const o in e)(o==="class"||o==="style"||Ao(o))&&((t||(t={}))[o]=e[o]);return t},ea=(e,t)=>{const o={};for(const r in e)(!Pr(r)||!(r.slice(9)in t))&&(o[r]=e[r]);return o};function ta(e,t,o){const{props:r,children:n,component:s}=e,{props:i,children:l,patchFlag:a}=t,p=s.emitsOptions;if(t.dirs||t.transition)return!0;if(o&&a>=0){if(a&1024)return!0;if(a&16)return r?un(r,i,p):!!i;if(a&8){const d=t.dynamicProps;for(let g=0;g<d.length;g++){const h=d[g];if(i[h]!==r[h]&&!ko(p,h))return!0}}}else return(n||l)&&(!l||!l.$stable)?!0:r===i?!1:r?i?un(r,i,p):!0:!!i;return!1}function un(e,t,o){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let n=0;n<r.length;n++){const s=r[n];if(t[s]!==e[s]&&!ko(o,s))return!0}return!1}function oa({vnode:e,parent:t},o){for(;t;){const r=t.subTree;if(r.suspense&&r.suspense.activeBranch===e&&(r.el=e.el),r===e)(e=t.vnode).el=o,t=t.parent;else break}}const $s=e=>e.__isSuspense;function ra(e,t){t&&t.pendingBranch?q(e)?t.effects.push(...e):t.effects.push(e):pl(e)}const Me=Symbol.for("v-fgt"),Uo=Symbol.for("v-txt"),St=Symbol.for("v-cmt"),To=Symbol.for("v-stc"),Qt=[];let Ce=null;function Re(e=!1){Qt.push(Ce=e?null:[])}function na(){Qt.pop(),Ce=Qt[Qt.length-1]||null}let oo=1;function dn(e){oo+=e,e<0&&Ce&&(Ce.hasOnce=!0)}function Ws(e){return e.dynamicChildren=oo>0?Ce||Et:null,na(),oo>0&&Ce&&Ce.push(e),e}function Ue(e,t,o,r,n,s){return Ws(U(e,t,o,r,n,s,!0))}function Qs(e,t,o,r,n){return Ws(te(e,t,o,r,n,!0))}function fr(e){return e?e.__v_isVNode===!0:!1}function Ft(e,t){return e.type===t.type&&e.key===t.key}const Ks=({key:e})=>e??null,bo=({ref:e,ref_key:t,ref_for:o})=>(typeof e=="number"&&(e=""+e),e!=null?ne(e)||de(e)||H(e)?{i:be,r:e,k:t,f:!!o}:e:null);function U(e,t=null,o=null,r=0,n=null,s=e===Me?0:1,i=!1,l=!1){const a={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Ks(t),ref:t&&bo(t),scopeId:Cs,slotScopeIds:null,children:o,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:n,dynamicChildren:null,appContext:null,ctx:be};return l?(Ur(a,o),s&128&&e.normalize(a)):o&&(a.shapeFlag|=ne(o)?8:16),oo>0&&!i&&Ce&&(a.patchFlag>0||s&6)&&a.patchFlag!==32&&Ce.push(a),a}const te=sa;function sa(e,t=null,o=null,r=0,n=null,s=!1){if((!e||e===Jl)&&(e=St),fr(e)){const l=Ot(e,t,!0);return o&&Ur(l,o),oo>0&&!s&&Ce&&(l.shapeFlag&6?Ce[Ce.indexOf(e)]=l:Ce.push(l)),l.patchFlag=-2,l}if(ya(e)&&(e=e.__vccOpts),t){t=ia(t);let{class:l,style:a}=t;l&&!ne(l)&&(t.class=Oo(l)),ee(a)&&(Or(a)&&!q(a)&&(a=le({},a)),t.style=wr(a))}const i=ne(e)?1:$s(e)?128:fl(e)?64:ee(e)?4:H(e)?2:0;return U(e,t,o,r,n,i,s,!0)}function ia(e){return e?Or(e)||Os(e)?le({},e):e:null}function Ot(e,t,o=!1,r=!1){const{props:n,ref:s,patchFlag:i,children:l,transition:a}=e,p=t?ca(n||{},t):n,d={__v_isVNode:!0,__v_skip:!0,type:e.type,props:p,key:p&&Ks(p),ref:t&&t.ref?o&&s?q(s)?s.concat(bo(t)):[s,bo(t)]:bo(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:l,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Me?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:a,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Ot(e.ssContent),ssFallback:e.ssFallback&&Ot(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return a&&r&&Hr(d,a.clone(d)),d}function we(e=" ",t=0){return te(Uo,null,e,t)}function la(e,t){const o=te(To,null,e);return o.staticCount=t,o}function aa(e="",t=!1){return t?(Re(),Qs(St,null,e)):te(St,null,e)}function ke(e){return e==null||typeof e=="boolean"?te(St):q(e)?te(Me,null,e.slice()):typeof e=="object"?it(e):te(Uo,null,String(e))}function it(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Ot(e)}function Ur(e,t){let o=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(q(t))o=16;else if(typeof t=="object")if(r&65){const n=t.default;n&&(n._c&&(n._d=!1),Ur(e,n()),n._c&&(n._d=!0));return}else{o=32;const n=t._;!n&&!Os(t)?t._ctx=be:n===3&&be&&(be.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else H(t)?(t={default:t,_ctx:be},o=32):(t=String(t),r&64?(o=16,t=[we(t)]):o=8);e.children=t,e.shapeFlag|=o}function ca(...e){const t={};for(let o=0;o<e.length;o++){const r=e[o];for(const n in r)if(n==="class")t.class!==r.class&&(t.class=Oo([t.class,r.class]));else if(n==="style")t.style=wr([t.style,r.style]);else if(Ao(n)){const s=t[n],i=r[n];i&&s!==i&&!(q(s)&&s.includes(i))&&(t[n]=s?[].concat(s,i):i)}else n!==""&&(t[n]=r[n])}return t}function He(e,t,o,r=null){Ve(e,t,7,[o,r])}const ua=_s();let da=0;function ga(e,t,o){const r=e.type,n=(t?t.appContext:e.appContext)||ua,s={uid:da++,vnode:e,type:r,parent:t,appContext:n,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new xi(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(n.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ns(r,n),emitsOptions:Vs(r,n),emit:null,emitted:null,propsDefaults:Y,inheritAttrs:r.inheritAttrs,ctx:Y,data:Y,props:Y,attrs:Y,slots:Y,refs:Y,setupState:Y,setupContext:null,suspense:o,suspenseId:o?o.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=t?t.root:s,s.emit=Yl.bind(null,s),e.ce&&e.ce(s),s}let ue=null,Eo,mr;{const e=zn(),t=(o,r)=>{let n;return(n=e[o])||(n=e[o]=[]),n.push(r),s=>{n.length>1?n.forEach(i=>i(s)):n[0](s)}};Eo=t("__VUE_INSTANCE_SETTERS__",o=>ue=o),mr=t("__VUE_SSR_SETTERS__",o=>Bo=o)}const lo=e=>{const t=ue;return Eo(e),e.scope.on(),()=>{e.scope.off(),Eo(t)}},gn=()=>{ue&&ue.scope.off(),Eo(null)};function zs(e){return e.vnode.shapeFlag&4}let Bo=!1;function pa(e,t=!1,o=!1){t&&mr(t);const{props:r,children:n}=e.vnode,s=zs(e);jl(e,r,s,t),Ul(e,n,o);const i=s?ha(e,t):void 0;return t&&mr(!1),i}function ha(e,t){const o=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Al);const{setup:r}=o;if(r){const n=e.setupContext=r.length>1?ma(e):null,s=lo(e);ct();const i=io(r,e,0,[e.props,n]);if(ut(),s(),$n(i)){if($t(e)||Ms(e),i.then(gn,gn),t)return i.then(l=>{pn(e,l,t)}).catch(l=>{Ho(l,e,0)});e.asyncDep=i}else pn(e,i,t)}else Xs(e,t)}function pn(e,t,o){H(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:ee(t)&&(e.setupState=vs(t)),Xs(e,o)}let hn;function Xs(e,t,o){const r=e.type;if(!e.render){if(!t&&hn&&!r.render){const n=r.template||Fr(e).template;if(n){const{isCustomElement:s,compilerOptions:i}=e.appContext.config,{delimiters:l,compilerOptions:a}=r,p=le(le({isCustomElement:s,delimiters:l},i),a);r.render=hn(n,p)}}e.render=r.render||Be}{const n=lo(e);ct();try{_l(e)}finally{ut(),n()}}}const fa={get(e,t){return ge(e,"get",""),e[t]}};function ma(e){const t=o=>{e.exposed=o||{}};return{attrs:new Proxy(e.attrs,fa),slots:e.slots,emit:e.emit,expose:t}}function Go(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(vs(ol(e.exposed)),{get(t,o){if(o in t)return t[o];if(o in Wt)return Wt[o](e)},has(t,o){return o in t||o in Wt}})):e.proxy}function va(e,t=!0){return H(e)?e.displayName||e.name:e.name||t&&e.__name}function ya(e){return H(e)&&"__vccOpts"in e}const Ae=(e,t)=>al(e,t,Bo);function Ys(e,t,o){const r=arguments.length;return r===2?ee(t)&&!q(t)?fr(t)?te(e,null,[t]):te(e,t):te(e,null,t):(r>3?o=Array.prototype.slice.call(arguments,2):r===3&&fr(o)&&(o=[o]),te(e,t,o))}const Sa="3.5.6";/**
* @vue/runtime-dom v3.5.6
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let vr;const fn=typeof window<"u"&&window.trustedTypes;if(fn)try{vr=fn.createPolicy("vue",{createHTML:e=>e})}catch{}const Zs=vr?e=>vr.createHTML(e):e=>e,Ta="http://www.w3.org/2000/svg",ba="http://www.w3.org/1998/Math/MathML",Ke=typeof document<"u"?document:null,mn=Ke&&Ke.createElement("template"),Ca={insert:(e,t,o)=>{t.insertBefore(e,o||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,o,r)=>{const n=t==="svg"?Ke.createElementNS(Ta,e):t==="mathml"?Ke.createElementNS(ba,e):o?Ke.createElement(e,{is:o}):Ke.createElement(e);return e==="select"&&r&&r.multiple!=null&&n.setAttribute("multiple",r.multiple),n},createText:e=>Ke.createTextNode(e),createComment:e=>Ke.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Ke.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,o,r,n,s){const i=o?o.previousSibling:t.lastChild;if(n&&(n===s||n.nextSibling))for(;t.insertBefore(n.cloneNode(!0),o),!(n===s||!(n=n.nextSibling)););else{mn.innerHTML=Zs(r==="svg"?`<svg>${e}</svg>`:r==="mathml"?`<math>${e}</math>`:e);const l=mn.content;if(r==="svg"||r==="mathml"){const a=l.firstChild;for(;a.firstChild;)l.appendChild(a.firstChild);l.removeChild(a)}t.insertBefore(l,o)}return[i?i.nextSibling:t.firstChild,o?o.previousSibling:t.lastChild]}},Pa=Symbol("_vtc");function Ma(e,t,o){const r=e[Pa];r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):o?e.setAttribute("class",t):e.className=t}const vn=Symbol("_vod"),Ra=Symbol("_vsh"),wa=Symbol(""),Ea=/(^|;)\s*display\s*:/;function Ja(e,t,o){const r=e.style,n=ne(o);let s=!1;if(o&&!n){if(t)if(ne(t))for(const i of t.split(";")){const l=i.slice(0,i.indexOf(":")).trim();o[l]==null&&Co(r,l,"")}else for(const i in t)o[i]==null&&Co(r,i,"");for(const i in o)i==="display"&&(s=!0),Co(r,i,o[i])}else if(n){if(t!==o){const i=r[wa];i&&(o+=";"+i),r.cssText=o,s=Ea.test(o)}}else t&&e.removeAttribute("style");vn in e&&(e[vn]=s?r.display:"",e[Ra]&&(r.display="none"))}const yn=/\s*!important$/;function Co(e,t,o){if(q(o))o.forEach(r=>Co(e,t,r));else if(o==null&&(o=""),t.startsWith("--"))e.setProperty(t,o);else{const r=Ia(e,t);yn.test(o)?e.setProperty(Tt(r),o.replace(yn,""),"important"):e[r]=o}}const Sn=["Webkit","Moz","ms"],er={};function Ia(e,t){const o=er[t];if(o)return o;let r=De(t);if(r!=="filter"&&r in e)return er[t]=r;r=xo(r);for(let n=0;n<Sn.length;n++){const s=Sn[n]+r;if(s in e)return er[t]=s}return t}const Tn="http://www.w3.org/1999/xlink";function bn(e,t,o,r,n,s=Ai(t)){r&&t.startsWith("xlink:")?o==null?e.removeAttributeNS(Tn,t.slice(6,t.length)):e.setAttributeNS(Tn,t,o):o==null||s&&!Xn(o)?e.removeAttribute(t):e.setAttribute(t,s?"":Ge(o)?String(o):o)}function Aa(e,t,o,r){if(t==="innerHTML"||t==="textContent"){o!=null&&(e[t]=t==="innerHTML"?Zs(o):o);return}const n=e.tagName;if(t==="value"&&n!=="PROGRESS"&&!n.includes("-")){const i=n==="OPTION"?e.getAttribute("value")||"":e.value,l=o==null?e.type==="checkbox"?"on":"":String(o);(i!==l||!("_value"in e))&&(e.value=l),o==null&&e.removeAttribute(t),e._value=o;return}let s=!1;if(o===""||o==null){const i=typeof e[t];i==="boolean"?o=Xn(o):o==null&&i==="string"?(o="",s=!0):i==="number"&&(o=0,s=!0)}try{e[t]=o}catch{}s&&e.removeAttribute(t)}function ft(e,t,o,r){e.addEventListener(t,o,r)}function _a(e,t,o,r){e.removeEventListener(t,o,r)}const Cn=Symbol("_vei");function Da(e,t,o,r,n=null){const s=e[Cn]||(e[Cn]={}),i=s[t];if(r&&i)i.value=r;else{const[l,a]=xa(t);if(r){const p=s[t]=Na(r,n);ft(e,l,p,a)}else i&&(_a(e,l,i,a),s[t]=void 0)}}const Pn=/(?:Once|Passive|Capture)$/;function xa(e){let t;if(Pn.test(e)){t={};let r;for(;r=e.match(Pn);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Tt(e.slice(2)),t]}let tr=0;const Oa=Promise.resolve(),La=()=>tr||(Oa.then(()=>tr=0),tr=Date.now());function Na(e,t){const o=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=o.attached)return;Ve(qa(r,o.value),t,5,[r])};return o.value=e,o.attached=La(),o}function qa(e,t){if(q(t)){const o=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{o.call(e),e._stopped=!0},t.map(r=>n=>!n._stopped&&r&&r(n))}else return t}const Mn=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,ja=(e,t,o,r,n,s)=>{const i=n==="svg";t==="class"?Ma(e,r,i):t==="style"?Ja(e,o,r):Ao(t)?Pr(t)||Da(e,t,o,r,s):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Ha(e,t,r,i))?(Aa(e,t,r),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&bn(e,t,r,i,s,t!=="value")):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),bn(e,t,r,i))};function Ha(e,t,o,r){if(r)return!!(t==="innerHTML"||t==="textContent"||t in e&&Mn(t)&&H(o));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const n=e.tagName;if(n==="IMG"||n==="VIDEO"||n==="CANVAS"||n==="SOURCE")return!1}return Mn(t)&&ne(o)?!1:!!(t in e||e._isVueCE&&(/[A-Z]/.test(t)||!ne(o)))}const Jo=e=>{const t=e.props["onUpdate:modelValue"]||!1;return q(t)?o=>vo(t,o):t};function Fa(e){e.target.composing=!0}function Rn(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const xt=Symbol("_assign"),wn={created(e,{modifiers:{lazy:t,trim:o,number:r}},n){e[xt]=Jo(n);const s=r||n.props&&n.props.type==="number";ft(e,t?"change":"input",i=>{if(i.target.composing)return;let l=e.value;o&&(l=l.trim()),s&&(l=Po(l)),e[xt](l)}),o&&ft(e,"change",()=>{e.value=e.value.trim()}),t||(ft(e,"compositionstart",Fa),ft(e,"compositionend",Rn),ft(e,"change",Rn))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,oldValue:o,modifiers:{lazy:r,trim:n,number:s}},i){if(e[xt]=Jo(i),e.composing)return;const l=(s||e.type==="number")&&!/^0\d/.test(e.value)?Po(e.value):e.value,a=t??"";l!==a&&(document.activeElement===e&&e.type!=="range"&&(r&&t===o||n&&e.value.trim()===a)||(e.value=a))}},ka={deep:!0,created(e,{value:t,modifiers:{number:o}},r){const n=_o(t);ft(e,"change",()=>{const s=Array.prototype.filter.call(e.options,i=>i.selected).map(i=>o?Po(Io(i)):Io(i));e[xt](e.multiple?n?new Set(s):s:s[0]),e._assigning=!0,qr(()=>{e._assigning=!1})}),e[xt]=Jo(r)},mounted(e,{value:t,modifiers:{number:o}}){En(e,t)},beforeUpdate(e,t,o){e[xt]=Jo(o)},updated(e,{value:t,modifiers:{number:o}}){e._assigning||En(e,t)}};function En(e,t,o){const r=e.multiple,n=q(t);if(!(r&&!n&&!_o(t))){for(let s=0,i=e.options.length;s<i;s++){const l=e.options[s],a=Io(l);if(r)if(n){const p=typeof a;p==="string"||p==="number"?l.selected=t.some(d=>String(d)===String(a)):l.selected=Di(t,a)>-1}else l.selected=t.has(a);else if(Lo(Io(l),t)){e.selectedIndex!==s&&(e.selectedIndex=s);return}}!r&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function Io(e){return"_value"in e?e._value:e.value}const Ua=le({patchProp:ja},Ca);let Jn;function Ba(){return Jn||(Jn=Gl(Ua))}const Ga=(...e)=>{const t=Ba().createApp(...e),{mount:o}=t;return t.mount=r=>{const n=$a(r);if(!n)return;const s=t._component;!H(s)&&!s.render&&!s.template&&(s.template=n.innerHTML),n.nodeType===1&&(n.textContent="");const i=o(n,!1,Va(n));return n instanceof Element&&(n.removeAttribute("v-cloak"),n.setAttribute("data-v-app","")),i},t};function Va(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function $a(e){return ne(e)?document.querySelector(e):e}const ao=(e,t)=>{const o=e.__vccOpts||e;for(const[r,n]of t)o[r]=n;return o},Wa={},Qa={class:"main-menu"},Ka={class:"menu"};function za(e,t,o,r,n,s){const i=to("router-link"),l=to("router-view");return Re(),Ue(Me,null,[t[4]||(t[4]=U("div",{class:"header"},[U("h2",null,"PerfLAB")],-1)),U("div",Qa,[U("nav",Ka,[te(i,{to:"/performance",class:"menu-item","active-class":"active-menu-item"},{default:Ie(()=>t[0]||(t[0]=[we("Performance Engineer")])),_:1}),te(i,{to:"/frontend",class:"menu-item","active-class":"active-menu-item"},{default:Ie(()=>t[1]||(t[1]=[we("Frontend")])),_:1}),te(i,{to:"/backend",class:"menu-item","active-class":"active-menu-item"},{default:Ie(()=>t[2]||(t[2]=[we("Backend")])),_:1}),te(i,{to:"/tools",class:"menu-item","active-class":"active-menu-item"},{default:Ie(()=>t[3]||(t[3]=[we("Tools")])),_:1})])]),te(l)],64)}const Xa=ao(Wa,[["render",za]]);/*!
  * vue-router v4.4.5
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const wt=typeof document<"u";function ei(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Ya(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&ei(e.default)}const Q=Object.assign;function or(e,t){const o={};for(const r in t){const n=t[r];o[r]=xe(n)?n.map(e):e(n)}return o}const Kt=()=>{},xe=Array.isArray,ti=/#/g,Za=/&/g,ec=/\//g,tc=/=/g,oc=/\?/g,oi=/\+/g,rc=/%5B/g,nc=/%5D/g,ri=/%5E/g,sc=/%60/g,ni=/%7B/g,ic=/%7C/g,si=/%7D/g,lc=/%20/g;function Br(e){return encodeURI(""+e).replace(ic,"|").replace(rc,"[").replace(nc,"]")}function ac(e){return Br(e).replace(ni,"{").replace(si,"}").replace(ri,"^")}function yr(e){return Br(e).replace(oi,"%2B").replace(lc,"+").replace(ti,"%23").replace(Za,"%26").replace(sc,"`").replace(ni,"{").replace(si,"}").replace(ri,"^")}function cc(e){return yr(e).replace(tc,"%3D")}function uc(e){return Br(e).replace(ti,"%23").replace(oc,"%3F")}function dc(e){return e==null?"":uc(e).replace(ec,"%2F")}function ro(e){try{return decodeURIComponent(""+e)}catch{}return""+e}const gc=/\/$/,pc=e=>e.replace(gc,"");function rr(e,t,o="/"){let r,n={},s="",i="";const l=t.indexOf("#");let a=t.indexOf("?");return l<a&&l>=0&&(a=-1),a>-1&&(r=t.slice(0,a),s=t.slice(a+1,l>-1?l:t.length),n=e(s)),l>-1&&(r=r||t.slice(0,l),i=t.slice(l,t.length)),r=vc(r??t,o),{fullPath:r+(s&&"?")+s+i,path:r,query:n,hash:ro(i)}}function hc(e,t){const o=t.query?e(t.query):"";return t.path+(o&&"?")+o+(t.hash||"")}function In(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function fc(e,t,o){const r=t.matched.length-1,n=o.matched.length-1;return r>-1&&r===n&&Lt(t.matched[r],o.matched[n])&&ii(t.params,o.params)&&e(t.query)===e(o.query)&&t.hash===o.hash}function Lt(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function ii(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const o in e)if(!mc(e[o],t[o]))return!1;return!0}function mc(e,t){return xe(e)?An(e,t):xe(t)?An(t,e):e===t}function An(e,t){return xe(t)?e.length===t.length&&e.every((o,r)=>o===t[r]):e.length===1&&e[0]===t}function vc(e,t){if(e.startsWith("/"))return e;if(!e)return t;const o=t.split("/"),r=e.split("/"),n=r[r.length-1];(n===".."||n===".")&&r.push("");let s=o.length-1,i,l;for(i=0;i<r.length;i++)if(l=r[i],l!==".")if(l==="..")s>1&&s--;else break;return o.slice(0,s).join("/")+"/"+r.slice(i).join("/")}const nt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var no;(function(e){e.pop="pop",e.push="push"})(no||(no={}));var zt;(function(e){e.back="back",e.forward="forward",e.unknown=""})(zt||(zt={}));function yc(e){if(!e)if(wt){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),pc(e)}const Sc=/^[^#]+#/;function Tc(e,t){return e.replace(Sc,"#")+t}function bc(e,t){const o=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-o.left-(t.left||0),top:r.top-o.top-(t.top||0)}}const Vo=()=>({left:window.scrollX,top:window.scrollY});function Cc(e){let t;if("el"in e){const o=e.el,r=typeof o=="string"&&o.startsWith("#"),n=typeof o=="string"?r?document.getElementById(o.slice(1)):document.querySelector(o):o;if(!n)return;t=bc(n,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function _n(e,t){return(history.state?history.state.position-t:-1)+e}const Sr=new Map;function Pc(e,t){Sr.set(e,t)}function Mc(e){const t=Sr.get(e);return Sr.delete(e),t}let Rc=()=>location.protocol+"//"+location.host;function li(e,t){const{pathname:o,search:r,hash:n}=t,s=e.indexOf("#");if(s>-1){let l=n.includes(e.slice(s))?e.slice(s).length:1,a=n.slice(l);return a[0]!=="/"&&(a="/"+a),In(a,"")}return In(o,e)+r+n}function wc(e,t,o,r){let n=[],s=[],i=null;const l=({state:h})=>{const m=li(e,location),J=o.value,I=t.value;let F=0;if(h){if(o.value=m,t.value=h,i&&i===J){i=null;return}F=I?h.position-I.position:0}else r(m);n.forEach(O=>{O(o.value,J,{delta:F,type:no.pop,direction:F?F>0?zt.forward:zt.back:zt.unknown})})};function a(){i=o.value}function p(h){n.push(h);const m=()=>{const J=n.indexOf(h);J>-1&&n.splice(J,1)};return s.push(m),m}function d(){const{history:h}=window;h.state&&h.replaceState(Q({},h.state,{scroll:Vo()}),"")}function g(){for(const h of s)h();s=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",d,{passive:!0}),{pauseListeners:a,listen:p,destroy:g}}function Dn(e,t,o,r=!1,n=!1){return{back:e,current:t,forward:o,replaced:r,position:window.history.length,scroll:n?Vo():null}}function Ec(e){const{history:t,location:o}=window,r={value:li(e,o)},n={value:t.state};n.value||s(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function s(a,p,d){const g=e.indexOf("#"),h=g>-1?(o.host&&document.querySelector("base")?e:e.slice(g))+a:Rc()+e+a;try{t[d?"replaceState":"pushState"](p,"",h),n.value=p}catch(m){console.error(m),o[d?"replace":"assign"](h)}}function i(a,p){const d=Q({},t.state,Dn(n.value.back,a,n.value.forward,!0),p,{position:n.value.position});s(a,d,!0),r.value=a}function l(a,p){const d=Q({},n.value,t.state,{forward:a,scroll:Vo()});s(d.current,d,!0);const g=Q({},Dn(r.value,a,null),{position:d.position+1},p);s(a,g,!1),r.value=a}return{location:r,state:n,push:l,replace:i}}function Jc(e){e=yc(e);const t=Ec(e),o=wc(e,t.state,t.location,t.replace);function r(s,i=!0){i||o.pauseListeners(),history.go(s)}const n=Q({location:"",base:e,go:r,createHref:Tc.bind(null,e)},t,o);return Object.defineProperty(n,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(n,"state",{enumerable:!0,get:()=>t.state.value}),n}function Ic(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),Jc(e)}function Ac(e){return typeof e=="string"||e&&typeof e=="object"}function ai(e){return typeof e=="string"||typeof e=="symbol"}const ci=Symbol("");var xn;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(xn||(xn={}));function Nt(e,t){return Q(new Error,{type:e,[ci]:!0},t)}function Qe(e,t){return e instanceof Error&&ci in e&&(t==null||!!(e.type&t))}const On="[^/]+?",_c={sensitive:!1,strict:!1,start:!0,end:!0},Dc=/[.+*?^${}()[\]/\\]/g;function xc(e,t){const o=Q({},_c,t),r=[];let n=o.start?"^":"";const s=[];for(const p of e){const d=p.length?[]:[90];o.strict&&!p.length&&(n+="/");for(let g=0;g<p.length;g++){const h=p[g];let m=40+(o.sensitive?.25:0);if(h.type===0)g||(n+="/"),n+=h.value.replace(Dc,"\\$&"),m+=40;else if(h.type===1){const{value:J,repeatable:I,optional:F,regexp:O}=h;s.push({name:J,repeatable:I,optional:F});const x=O||On;if(x!==On){m+=10;try{new RegExp(`(${x})`)}catch(A){throw new Error(`Invalid custom RegExp for param "${J}" (${x}): `+A.message)}}let L=I?`((?:${x})(?:/(?:${x}))*)`:`(${x})`;g||(L=F&&p.length<2?`(?:/${L})`:"/"+L),F&&(L+="?"),n+=L,m+=20,F&&(m+=-8),I&&(m+=-20),x===".*"&&(m+=-50)}d.push(m)}r.push(d)}if(o.strict&&o.end){const p=r.length-1;r[p][r[p].length-1]+=.7000000000000001}o.strict||(n+="/?"),o.end?n+="$":o.strict&&(n+="(?:/|$)");const i=new RegExp(n,o.sensitive?"":"i");function l(p){const d=p.match(i),g={};if(!d)return null;for(let h=1;h<d.length;h++){const m=d[h]||"",J=s[h-1];g[J.name]=m&&J.repeatable?m.split("/"):m}return g}function a(p){let d="",g=!1;for(const h of e){(!g||!d.endsWith("/"))&&(d+="/"),g=!1;for(const m of h)if(m.type===0)d+=m.value;else if(m.type===1){const{value:J,repeatable:I,optional:F}=m,O=J in p?p[J]:"";if(xe(O)&&!I)throw new Error(`Provided param "${J}" is an array but it is not repeatable (* or + modifiers)`);const x=xe(O)?O.join("/"):O;if(!x)if(F)h.length<2&&(d.endsWith("/")?d=d.slice(0,-1):g=!0);else throw new Error(`Missing required param "${J}"`);d+=x}}return d||"/"}return{re:i,score:r,keys:s,parse:l,stringify:a}}function Oc(e,t){let o=0;for(;o<e.length&&o<t.length;){const r=t[o]-e[o];if(r)return r;o++}return e.length<t.length?e.length===1&&e[0]===80?-1:1:e.length>t.length?t.length===1&&t[0]===80?1:-1:0}function ui(e,t){let o=0;const r=e.score,n=t.score;for(;o<r.length&&o<n.length;){const s=Oc(r[o],n[o]);if(s)return s;o++}if(Math.abs(n.length-r.length)===1){if(Ln(r))return 1;if(Ln(n))return-1}return n.length-r.length}function Ln(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Lc={type:0,value:""},Nc=/[a-zA-Z0-9_]/;function qc(e){if(!e)return[[]];if(e==="/")return[[Lc]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(m){throw new Error(`ERR (${o})/"${p}": ${m}`)}let o=0,r=o;const n=[];let s;function i(){s&&n.push(s),s=[]}let l=0,a,p="",d="";function g(){p&&(o===0?s.push({type:0,value:p}):o===1||o===2||o===3?(s.length>1&&(a==="*"||a==="+")&&t(`A repeatable param (${p}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:p,regexp:d,repeatable:a==="*"||a==="+",optional:a==="*"||a==="?"})):t("Invalid state to consume buffer"),p="")}function h(){p+=a}for(;l<e.length;){if(a=e[l++],a==="\\"&&o!==2){r=o,o=4;continue}switch(o){case 0:a==="/"?(p&&g(),i()):a===":"?(g(),o=1):h();break;case 4:h(),o=r;break;case 1:a==="("?o=2:Nc.test(a)?h():(g(),o=0,a!=="*"&&a!=="?"&&a!=="+"&&l--);break;case 2:a===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+a:o=3:d+=a;break;case 3:g(),o=0,a!=="*"&&a!=="?"&&a!=="+"&&l--,d="";break;default:t("Unknown state");break}}return o===2&&t(`Unfinished custom RegExp for param "${p}"`),g(),i(),n}function jc(e,t,o){const r=xc(qc(e.path),o),n=Q(r,{record:e,parent:t,children:[],alias:[]});return t&&!n.record.aliasOf==!t.record.aliasOf&&t.children.push(n),n}function Hc(e,t){const o=[],r=new Map;t=Hn({strict:!1,end:!0,sensitive:!1},t);function n(g){return r.get(g)}function s(g,h,m){const J=!m,I=qn(g);I.aliasOf=m&&m.record;const F=Hn(t,g),O=[I];if("alias"in g){const A=typeof g.alias=="string"?[g.alias]:g.alias;for(const z of A)O.push(qn(Q({},I,{components:m?m.record.components:I.components,path:z,aliasOf:m?m.record:I})))}let x,L;for(const A of O){const{path:z}=A;if(h&&z[0]!=="/"){const ie=h.record.path,oe=ie[ie.length-1]==="/"?"":"/";A.path=h.record.path+(z&&oe+z)}if(x=jc(A,h,F),m?m.alias.push(x):(L=L||x,L!==x&&L.alias.push(x),J&&g.name&&!jn(x)&&i(g.name)),di(x)&&a(x),I.children){const ie=I.children;for(let oe=0;oe<ie.length;oe++)s(ie[oe],x,m&&m.children[oe])}m=m||x}return L?()=>{i(L)}:Kt}function i(g){if(ai(g)){const h=r.get(g);h&&(r.delete(g),o.splice(o.indexOf(h),1),h.children.forEach(i),h.alias.forEach(i))}else{const h=o.indexOf(g);h>-1&&(o.splice(h,1),g.record.name&&r.delete(g.record.name),g.children.forEach(i),g.alias.forEach(i))}}function l(){return o}function a(g){const h=Uc(g,o);o.splice(h,0,g),g.record.name&&!jn(g)&&r.set(g.record.name,g)}function p(g,h){let m,J={},I,F;if("name"in g&&g.name){if(m=r.get(g.name),!m)throw Nt(1,{location:g});F=m.record.name,J=Q(Nn(h.params,m.keys.filter(L=>!L.optional).concat(m.parent?m.parent.keys.filter(L=>L.optional):[]).map(L=>L.name)),g.params&&Nn(g.params,m.keys.map(L=>L.name))),I=m.stringify(J)}else if(g.path!=null)I=g.path,m=o.find(L=>L.re.test(I)),m&&(J=m.parse(I),F=m.record.name);else{if(m=h.name?r.get(h.name):o.find(L=>L.re.test(h.path)),!m)throw Nt(1,{location:g,currentLocation:h});F=m.record.name,J=Q({},h.params,g.params),I=m.stringify(J)}const O=[];let x=m;for(;x;)O.unshift(x.record),x=x.parent;return{name:F,path:I,params:J,matched:O,meta:kc(O)}}e.forEach(g=>s(g));function d(){o.length=0,r.clear()}return{addRoute:s,resolve:p,removeRoute:i,clearRoutes:d,getRoutes:l,getRecordMatcher:n}}function Nn(e,t){const o={};for(const r of t)r in e&&(o[r]=e[r]);return o}function qn(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:Fc(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function Fc(e){const t={},o=e.props||!1;if("component"in e)t.default=o;else for(const r in e.components)t[r]=typeof o=="object"?o[r]:o;return t}function jn(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function kc(e){return e.reduce((t,o)=>Q(t,o.meta),{})}function Hn(e,t){const o={};for(const r in e)o[r]=r in t?t[r]:e[r];return o}function Uc(e,t){let o=0,r=t.length;for(;o!==r;){const s=o+r>>1;ui(e,t[s])<0?r=s:o=s+1}const n=Bc(e);return n&&(r=t.lastIndexOf(n,r-1)),r}function Bc(e){let t=e;for(;t=t.parent;)if(di(t)&&ui(e,t)===0)return t}function di({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function Gc(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let n=0;n<r.length;++n){const s=r[n].replace(oi," "),i=s.indexOf("="),l=ro(i<0?s:s.slice(0,i)),a=i<0?null:ro(s.slice(i+1));if(l in t){let p=t[l];xe(p)||(p=t[l]=[p]),p.push(a)}else t[l]=a}return t}function Fn(e){let t="";for(let o in e){const r=e[o];if(o=cc(o),r==null){r!==void 0&&(t+=(t.length?"&":"")+o);continue}(xe(r)?r.map(s=>s&&yr(s)):[r&&yr(r)]).forEach(s=>{s!==void 0&&(t+=(t.length?"&":"")+o,s!=null&&(t+="="+s))})}return t}function Vc(e){const t={};for(const o in e){const r=e[o];r!==void 0&&(t[o]=xe(r)?r.map(n=>n==null?null:""+n):r==null?r:""+r)}return t}const $c=Symbol(""),kn=Symbol(""),Gr=Symbol(""),gi=Symbol(""),Tr=Symbol("");function kt(){let e=[];function t(r){return e.push(r),()=>{const n=e.indexOf(r);n>-1&&e.splice(n,1)}}function o(){e=[]}return{add:t,list:()=>e.slice(),reset:o}}function lt(e,t,o,r,n,s=i=>i()){const i=r&&(r.enterCallbacks[n]=r.enterCallbacks[n]||[]);return()=>new Promise((l,a)=>{const p=h=>{h===!1?a(Nt(4,{from:o,to:t})):h instanceof Error?a(h):Ac(h)?a(Nt(2,{from:t,to:h})):(i&&r.enterCallbacks[n]===i&&typeof h=="function"&&i.push(h),l())},d=s(()=>e.call(r&&r.instances[n],t,o,p));let g=Promise.resolve(d);e.length<3&&(g=g.then(p)),g.catch(h=>a(h))})}function nr(e,t,o,r,n=s=>s()){const s=[];for(const i of e)for(const l in i.components){let a=i.components[l];if(!(t!=="beforeRouteEnter"&&!i.instances[l]))if(ei(a)){const d=(a.__vccOpts||a)[t];d&&s.push(lt(d,o,r,i,l,n))}else{let p=a();s.push(()=>p.then(d=>{if(!d)throw new Error(`Couldn't resolve component "${l}" at "${i.path}"`);const g=Ya(d)?d.default:d;i.mods[l]=d,i.components[l]=g;const m=(g.__vccOpts||g)[t];return m&&lt(m,o,r,i,l,n)()}))}}return s}function Un(e){const t=Ye(Gr),o=Ye(gi),r=Ae(()=>{const a=At(e.to);return t.resolve(a)}),n=Ae(()=>{const{matched:a}=r.value,{length:p}=a,d=a[p-1],g=o.matched;if(!d||!g.length)return-1;const h=g.findIndex(Lt.bind(null,d));if(h>-1)return h;const m=Bn(a[p-2]);return p>1&&Bn(d)===m&&g[g.length-1].path!==m?g.findIndex(Lt.bind(null,a[p-2])):h}),s=Ae(()=>n.value>-1&&zc(o.params,r.value.params)),i=Ae(()=>n.value>-1&&n.value===o.matched.length-1&&ii(o.params,r.value.params));function l(a={}){return Kc(a)?t[At(e.replace)?"replace":"push"](At(e.to)).catch(Kt):Promise.resolve()}return{route:r,href:Ae(()=>r.value.href),isActive:s,isExactActive:i,navigate:l}}const Wc=Ps({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Un,setup(e,{slots:t}){const o=jo(Un(e)),{options:r}=Ye(Gr),n=Ae(()=>({[Gn(e.activeClass,r.linkActiveClass,"router-link-active")]:o.isActive,[Gn(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:o.isExactActive}));return()=>{const s=t.default&&t.default(o);return e.custom?s:Ys("a",{"aria-current":o.isExactActive?e.ariaCurrentValue:null,href:o.href,onClick:o.navigate,class:n.value},s)}}}),Qc=Wc;function Kc(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function zc(e,t){for(const o in t){const r=t[o],n=e[o];if(typeof r=="string"){if(r!==n)return!1}else if(!xe(n)||n.length!==r.length||r.some((s,i)=>s!==n[i]))return!1}return!0}function Bn(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Gn=(e,t,o)=>e??t??o,Xc=Ps({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:o}){const r=Ye(Tr),n=Ae(()=>e.route||r.value),s=Ye(kn,0),i=Ae(()=>{let p=At(s);const{matched:d}=n.value;let g;for(;(g=d[p])&&!g.components;)p++;return p}),l=Ae(()=>n.value.matched[i.value]);yo(kn,Ae(()=>i.value+1)),yo($c,l),yo(Tr,n);const a=rl();return So(()=>[a.value,l.value,e.name],([p,d,g],[h,m,J])=>{d&&(d.instances[g]=p,m&&m!==d&&p&&p===h&&(d.leaveGuards.size||(d.leaveGuards=m.leaveGuards),d.updateGuards.size||(d.updateGuards=m.updateGuards))),p&&d&&(!m||!Lt(d,m)||!h)&&(d.enterCallbacks[g]||[]).forEach(I=>I(p))},{flush:"post"}),()=>{const p=n.value,d=e.name,g=l.value,h=g&&g.components[d];if(!h)return Vn(o.default,{Component:h,route:p});const m=g.props[d],J=m?m===!0?p.params:typeof m=="function"?m(p):m:null,F=Ys(h,Q({},J,t,{onVnodeUnmounted:O=>{O.component.isUnmounted&&(g.instances[d]=null)},ref:a}));return Vn(o.default,{Component:F,route:p})||F}}});function Vn(e,t){if(!e)return null;const o=e(t);return o.length===1?o[0]:o}const Yc=Xc;function Zc(e){const t=Hc(e.routes,e),o=e.parseQuery||Gc,r=e.stringifyQuery||Fn,n=e.history,s=kt(),i=kt(),l=kt(),a=nl(nt);let p=nt;wt&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=or.bind(null,y=>""+y),g=or.bind(null,dc),h=or.bind(null,ro);function m(y,E){let R,_;return ai(y)?(R=t.getRecordMatcher(y),_=E):_=y,t.addRoute(_,R)}function J(y){const E=t.getRecordMatcher(y);E&&t.removeRoute(E)}function I(){return t.getRoutes().map(y=>y.record)}function F(y){return!!t.getRecordMatcher(y)}function O(y,E){if(E=Q({},E||a.value),typeof y=="string"){const u=rr(o,y,E.path),f=t.resolve({path:u.path},E),S=n.createHref(u.fullPath);return Q(u,f,{params:h(f.params),hash:ro(u.hash),redirectedFrom:void 0,href:S})}let R;if(y.path!=null)R=Q({},y,{path:rr(o,y.path,E.path).path});else{const u=Q({},y.params);for(const f in u)u[f]==null&&delete u[f];R=Q({},y,{params:g(u)}),E.params=g(E.params)}const _=t.resolve(R,E),$=y.hash||"";_.params=d(h(_.params));const re=hc(r,Q({},y,{hash:ac($),path:_.path})),c=n.createHref(re);return Q({fullPath:re,hash:$,query:r===Fn?Vc(y.query):y.query||{}},_,{redirectedFrom:void 0,href:c})}function x(y){return typeof y=="string"?rr(o,y,a.value.path):Q({},y)}function L(y,E){if(p!==y)return Nt(8,{from:E,to:y})}function A(y){return oe(y)}function z(y){return A(Q(x(y),{replace:!0}))}function ie(y){const E=y.matched[y.matched.length-1];if(E&&E.redirect){const{redirect:R}=E;let _=typeof R=="function"?R(y):R;return typeof _=="string"&&(_=_.includes("?")||_.includes("#")?_=x(_):{path:_},_.params={}),Q({query:y.query,hash:y.hash,params:_.path!=null?{}:y.params},_)}}function oe(y,E){const R=p=O(y),_=a.value,$=y.state,re=y.force,c=y.replace===!0,u=ie(R);if(u)return oe(Q(x(u),{state:typeof u=="object"?Q({},$,u.state):$,force:re,replace:c}),E||R);const f=R;f.redirectedFrom=E;let S;return!re&&fc(r,_,R)&&(S=Nt(16,{to:f,from:_}),qe(_,_,!0,!1)),(S?Promise.resolve(S):Le(f,_)).catch(v=>Qe(v)?Qe(v,2)?v:ot(v):B(v,f,_)).then(v=>{if(v){if(Qe(v,2))return oe(Q({replace:c},x(v.to),{state:typeof v.to=="object"?Q({},$,v.to.state):$,force:re}),E||f)}else v=dt(f,_,!0,c,$);return tt(f,_,v),v})}function Oe(y,E){const R=L(y,E);return R?Promise.reject(R):Promise.resolve()}function et(y){const E=Pt.values().next().value;return E&&typeof E.runWithContext=="function"?E.runWithContext(y):y()}function Le(y,E){let R;const[_,$,re]=eu(y,E);R=nr(_.reverse(),"beforeRouteLeave",y,E);for(const u of _)u.leaveGuards.forEach(f=>{R.push(lt(f,y,E))});const c=Oe.bind(null,y,E);return R.push(c),Pe(R).then(()=>{R=[];for(const u of s.list())R.push(lt(u,y,E));return R.push(c),Pe(R)}).then(()=>{R=nr($,"beforeRouteUpdate",y,E);for(const u of $)u.updateGuards.forEach(f=>{R.push(lt(f,y,E))});return R.push(c),Pe(R)}).then(()=>{R=[];for(const u of re)if(u.beforeEnter)if(xe(u.beforeEnter))for(const f of u.beforeEnter)R.push(lt(f,y,E));else R.push(lt(u.beforeEnter,y,E));return R.push(c),Pe(R)}).then(()=>(y.matched.forEach(u=>u.enterCallbacks={}),R=nr(re,"beforeRouteEnter",y,E,et),R.push(c),Pe(R))).then(()=>{R=[];for(const u of i.list())R.push(lt(u,y,E));return R.push(c),Pe(R)}).catch(u=>Qe(u,8)?u:Promise.reject(u))}function tt(y,E,R){l.list().forEach(_=>et(()=>_(y,E,R)))}function dt(y,E,R,_,$){const re=L(y,E);if(re)return re;const c=E===nt,u=wt?history.state:{};R&&(_||c?n.replace(y.fullPath,Q({scroll:c&&u&&u.scroll},$)):n.push(y.fullPath,$)),a.value=y,qe(y,E,R,c),ot()}let Ne;function qt(){Ne||(Ne=n.listen((y,E,R)=>{if(!co.listening)return;const _=O(y),$=ie(_);if($){oe(Q($,{replace:!0}),_).catch(Kt);return}p=_;const re=a.value;wt&&Pc(_n(re.fullPath,R.delta),Vo()),Le(_,re).catch(c=>Qe(c,12)?c:Qe(c,2)?(oe(c.to,_).then(u=>{Qe(u,20)&&!R.delta&&R.type===no.pop&&n.go(-1,!1)}).catch(Kt),Promise.reject()):(R.delta&&n.go(-R.delta,!1),B(c,_,re))).then(c=>{c=c||dt(_,re,!1),c&&(R.delta&&!Qe(c,8)?n.go(-R.delta,!1):R.type===no.pop&&Qe(c,20)&&n.go(-1,!1)),tt(_,re,c)}).catch(Kt)}))}let bt=kt(),se=kt(),K;function B(y,E,R){ot(y);const _=se.list();return _.length?_.forEach($=>$(y,E,R)):console.error(y),Promise.reject(y)}function $e(){return K&&a.value!==nt?Promise.resolve():new Promise((y,E)=>{bt.add([y,E])})}function ot(y){return K||(K=!y,qt(),bt.list().forEach(([E,R])=>y?R(y):E()),bt.reset()),y}function qe(y,E,R,_){const{scrollBehavior:$}=e;if(!wt||!$)return Promise.resolve();const re=!R&&Mc(_n(y.fullPath,0))||(_||!R)&&history.state&&history.state.scroll||null;return qr().then(()=>$(y,E,re)).then(c=>c&&Cc(c)).catch(c=>B(c,y,E))}const fe=y=>n.go(y);let Ct;const Pt=new Set,co={currentRoute:a,listening:!0,addRoute:m,removeRoute:J,clearRoutes:t.clearRoutes,hasRoute:F,getRoutes:I,resolve:O,options:e,push:A,replace:z,go:fe,back:()=>fe(-1),forward:()=>fe(1),beforeEach:s.add,beforeResolve:i.add,afterEach:l.add,onError:se.add,isReady:$e,install(y){const E=this;y.component("RouterLink",Qc),y.component("RouterView",Yc),y.config.globalProperties.$router=E,Object.defineProperty(y.config.globalProperties,"$route",{enumerable:!0,get:()=>At(a)}),wt&&!Ct&&a.value===nt&&(Ct=!0,A(n.location).catch($=>{}));const R={};for(const $ in nt)Object.defineProperty(R,$,{get:()=>a.value[$],enumerable:!0});y.provide(Gr,E),y.provide(gi,hs(R)),y.provide(Tr,a);const _=y.unmount;Pt.add(y),y.unmount=function(){Pt.delete(y),Pt.size<1&&(p=nt,Ne&&Ne(),Ne=null,a.value=nt,Ct=!1,K=!1),_()}}};function Pe(y){return y.reduce((E,R)=>E.then(()=>et(R)),Promise.resolve())}return co}function eu(e,t){const o=[],r=[],n=[],s=Math.max(t.matched.length,e.matched.length);for(let i=0;i<s;i++){const l=t.matched[i];l&&(e.matched.find(p=>Lt(p,l))?r.push(l):o.push(l));const a=e.matched[i];a&&(t.matched.find(p=>Lt(p,a))||n.push(a))}return[o,r,n]}const tu={props:{question:Object},data(){return{likes:0,comments:[],newComment:""}},computed:{levelText(){return`Level: ${this.question.level}`},levelClass(){return{"level-intern":this.question.level==="INTERN","level-junior":this.question.level==="JUNIOR","level-middle":this.question.level==="MIDDLE"}}},methods:{goToDetail(){this.$router.push({path:`/questions/${this.question.id}`,query:{category:this.question.category||"unknown",tool:this.question.tool||null}})},likeQuestion(){this.likes++},addComment(){this.newComment.trim()&&(this.comments.push(this.newComment.trim()),this.newComment="")}}},ou={class:"question-text"};function ru(e,t,o,r,n,s){return Re(),Ue("div",{onClick:t[0]||(t[0]=(...i)=>s.goToDetail&&s.goToDetail(...i)),class:"question-card"},[U("h3",ou,mt(o.question.question),1),U("p",{class:Oo([s.levelClass,"level-text"])},mt(s.levelText),3)])}const nu=ao(tu,[["render",ru],["__scopeId","data-v-8f365f5e"]]),su={components:{QuestionCard:nu},props:{questions:Array},data(){return{currentLevel:"ALL",selectedAction:"ALL",shuffledQuestions:[]}},computed:{filteredQuestions(){return this.selectedAction==="SHUFFLE"?this.shuffledQuestions:this.currentLevel==="ALL"?this.questions:this.questions.filter(e=>e.level===this.currentLevel)}},methods:{handleAction(){this.selectedAction==="SHUFFLE"?this.shuffleQuestions():this.filterLevel(this.selectedAction)},filterLevel(e){this.currentLevel=e},shuffleQuestions(){this.shuffledQuestions=[...this.questions].sort(()=>Math.random()-.5)}}},iu={class:"filter-section"},lu={class:"question-grid"};function au(e,t,o,r,n,s){const i=to("QuestionCard");return Re(),Ue("div",null,[U("div",iu,[cr(U("select",{"onUpdate:modelValue":t[0]||(t[0]=l=>n.selectedAction=l),id:"levelFilter",onChange:t[1]||(t[1]=(...l)=>s.handleAction&&s.handleAction(...l))},t[2]||(t[2]=[la('<option value="ALL" data-v-fc0da70e>Все уровни</option><option value="INTERN" data-v-fc0da70e>Intern</option><option value="JUNIOR" data-v-fc0da70e>Junior</option><option value="MIDDLE" data-v-fc0da70e>Middle</option><option value="SHUFFLE" data-v-fc0da70e>Перемешать вопросы</option>',5)]),544),[[ka,n.selectedAction]])]),U("div",lu,[(Re(!0),Ue(Me,null,Is(s.filteredQuestions,l=>(Re(),Qs(i,{key:l.id,question:l},null,8,["question"]))),128))])])}const Ut=ao(su,[["render",au],["__scopeId","data-v-fc0da70e"]]),pi=[{id:1,question:"Что такое цикл событий (event loop) и как он работает?",answer:`
          <p>Цикл событий (event loop) - это механизм, используемый в JavaScript для обработки событий и выполнения асинхронного кода. Он позволяет программе эффективно обрабатывать события, такие как пользовательские действия, таймеры, сетевые запросы и другие асинхронные операции.</p>
          <p>Работа цикла событий в JavaScript обычно выглядит следующим образом:</p>
          <ol>
            <li><strong>Ожидание событий:</strong> Цикл событий начинает свою работу, ожидая возникновения событий, таких как пользовательские действия, таймеры или сетевые запросы.</li>
            <li><strong>Обработка событий:</strong> Когда событие происходит, оно помещается в очередь событий (event queue).</li>
            <li><strong>Выполнение обработчиков:</strong> Цикл событий вызывает обработчик события для выполнения в ответ на событие. Обработчик выполняется синхронно.</li>
            <li><strong>Асинхронный код:</strong> Асинхронные операции помещаются в очередь задач (task queue) и выполняются позже.</li>
            <li><strong>Ожидание новых событий:</strong> Цикл событий возвращается к ожиданию новых событий после обработки текущих.</li>
          </ol>
          <p>Цикл событий позволяет JavaScript выполнять асинхронный код без блокировки основного потока выполнения.</p>
        `,level:"JUNIOR",category:"frontend"},{id:2,question:"Какие типы данных есть в JS?",answer:`
          <p>Всего в JS существует 8 типов данных:</p>
          <ul>
            <li><strong>Number:</strong> Числа.</li>
            <li><strong>String:</strong> Строки.</li>
            <li><strong>Boolean:</strong> Логические значения (true или false).</li>
            <li><strong>BigInt:</strong> Большие числа.</li>
            <li><strong>Symbol:</strong> Уникальные идентификаторы.</li>
            <li><strong>null:</strong> Явное отсутствие значения.</li>
            <li><strong>undefined:</strong> Неопределенное значение.</li>
            <li><strong>Object:</strong> Объекты.</li>
          </ul>
        `,level:"JUNIOR",category:"frontend"},{id:3,question:"Что такое NaN? Какого типа это значение? Как можно узнать, равно ли значение переменной NaN?",answer:`
          <p>NaN расшифровывается как "Not A Number". Это значение типа Number. Чтобы проверить, является ли значение NaN, можно использовать методы:</p>
          <pre>
            <code>
              let x = NaN;
              console.log(isNaN(x)); // true
            </code>
          </pre>
          <p>Пример для метода <strong>Number.isNaN</strong>:</p>
          <pre>
            <code>
              let y = 5 / "hello";
              console.log(Number.isNaN(y)); // true
            </code>
          </pre>
        `,level:"JUNIOR",category:"frontend"},{id:4,question:"В чем разница между let, const и var?",answer:`
          <p>Различия между <strong>let</strong>, <strong>const</strong> и <strong>var</strong>:</p>
          <ul>
            <li><strong>var:</strong> Имеет функциональную область видимости и поднимается в начале выполнения.</li>
            <li><strong>let:</strong> Имеет блочную область видимости, не поднимается.</li>
            <li><strong>const:</strong> Как и let, имеет блочную область видимости, но не может быть переопределено после инициализации.</li>
          </ul>
          <pre>
            <code>
              let x = 5;
              console.log(x); // 5
              const y = 10;
              console.log(y); // 10
            </code>
          </pre>
        `,level:"JUNIOR",category:"frontend"},{id:5,question:"Что такое this? Отличие this в function declaration и стрелочных функциях",answer:`
          <p><strong>this</strong> - это специальное ключевое слово, которое ссылается на контекст вызова функции.</p>
          <ul>
            <li>В function declaration значение this зависит от того, как была вызвана функция.</li>
            <li>В стрелочных функциях значение this берется из окружающего контекста и не изменяется.</li>
          </ul>
          <pre>
            <code>
              const obj = {
                name: 'John',
                greet: function() {
                  console.log(this.name);
                }
              };
              obj.greet(); // 'John'
            </code>
          </pre>
        `,level:"JUNIOR",category:"frontend"},{id:6,question:"С помощью чего в JS реализуются наследование?",answer:`
          <p>В JavaScript наследование реализуется с помощью прототипов. Прототипное наследование позволяет объектам наследовать свойства и методы других объектов. С выходом ECMAScript 2015 (ES6) было добавлено ключевое слово <strong>class</strong> для реализации классов.</p>
          <h4>Прототипное наследование с использованием <code>prototype</code>:</h4>
          <p>Создается конструктор (функция-класс), у которого есть свойство <code>prototype</code>. Новые объекты создаются с помощью конструктора <code>new</code>. Прототип нового объекта равен прототипу конструктора.</p>
          <pre><code>
    function Animal(name) {
      this.name = name;
    }
    
    Animal.prototype.sayHello = function() {
      console.log('Hello, my name is ' + this.name);
    };
    
    function Dog(name, breed) {
      Animal.call(this, name);
      this.breed = breed;
    }
    
    Dog.prototype = Object.create(Animal.prototype);
    Dog.prototype.constructor = Dog;
    
    Dog.prototype.bark = function() {
      console.log('Woof!');
    };
    
    const myDog = new Dog('Buddy', 'Labrador');
    myDog.sayHello(); // 'Hello, my name is Buddy'
    myDog.bark(); // 'Woof!'
          </code></pre>
    
          <h4>Наследование с использованием <code>class</code> (ES6):</h4>
          <p>Синтаксис <code>class</code> позволяет использовать ключевые слова <code>extends</code> и <code>super</code> для указания родительского класса.</p>
          <pre><code>
    class Animal {
      constructor(name) {
        this.name = name;
      }
    
      sayHello() {
        console.log('Hello, my name is ' + this.name);
      }
    }
    
    class Dog extends Animal {
      constructor(name, breed) {
        super(name);
        this.breed = breed;
      }
    
      bark() {
        console.log('Woof!');
      }
    }
    
    const myDog = new Dog('Buddy', 'Labrador');
    myDog.sayHello(); // 'Hello, my name is Buddy'
    myDog.bark(); // 'Woof!'
          </code></pre>
        `,level:"JUNIOR",category:"frontend"},{id:7,question:"Что такое IIFE (Immediately Invoked Function Expression)?",answer:`
          <p>IIFE (Immediately Invoked Function Expression) — это функция, которая вызывается сразу же после того, как была объявлена. Она создает собственную область видимости, что позволяет изолировать переменные и функции.</p>
          <pre><code>
    (function() {
      var x = 5;
      console.log(x); // 5
    })();
    
    console.log(x); // ReferenceError: x is not defined
          </code></pre>
          <p>IIFE также может принимать аргументы:</p>
          <pre><code>
    (function(name) {
      console.log('Hello, ' + name);
    })('John'); // 'Hello, John'
          </code></pre>
          <p>IIFE помогает изолировать код и предотвращает его влияние на глобальную область видимости.</p>
        `,level:"JUNIOR",category:"frontend"},{id:8,question:"В чем разница между == и ===?",answer:`
          <p>Операторы сравнения <code>==</code> (нестрогое равенство) и <code>===</code> (строгое равенство) используются для сравнения значений. Вот их различия:</p>
          <ul>
            <li><strong><code>==</code> (нестрогое равенство):</strong> выполняет приведение типов перед сравнением. Например:</li>
            <pre><code>console.log(5 == '5'); // true</code></pre>
            <li><strong><code>===</code> (строгое равенство):</strong> сравнивает значения без приведения типов, то есть сравнивает и типы, и значения:</li>
            <pre><code>console.log(5 === '5'); // false</code></pre>
          </ul>
        `,level:"JUNIOR",category:"frontend"},{id:9,question:"Что такое замыкание в JavaScript?",answer:`
          <p>Замыкание (closure) — это функция, которая "запоминает" своё окружение, даже если она вызывается вне своего лексического контекста. Замыкание сохраняет доступ к переменным из внешней функции.</p>
          <pre><code>
    function outerFunction() {
      var outerVariable = 'Hello';
    
      function innerFunction() {
        console.log(outerVariable);
      }
    
      return innerFunction;
    }
    
    var closure = outerFunction();
    closure(); // 'Hello'
          </code></pre>
          <p>Пример счетчика с использованием замыкания:</p>
          <pre><code>
    function createCounter() {
      var count = 0;
    
      return {
        increment: function() {
          count++;
          console.log(count);
        },
        decrement: function() {
          count--;
          console.log(count);
        }
      };
    }
    
    var counter = createCounter();
    counter.increment(); // 1
    counter.increment(); // 2
    counter.decrement(); // 1
          </code></pre>
        `,level:"JUNIOR",category:"frontend"},{id:10,question:"Что такое Promise, и какие бывают состояния",answer:`
          <p><strong>Promise</strong> — это объект, представляющий результат асинхронной операции. Он может находиться в одном из трех состояний:</p>
          <ul>
            <li><strong>Pending:</strong> Ожидание завершения.</li>
            <li><strong>Fulfilled:</strong> Успешное выполнение, возвращает результат.</li>
            <li><strong>Rejected:</strong> Ошибка выполнения, возвращает причину ошибки.</li>
          </ul>
          <p>Пример Promise:</p>
          <pre><code>
    function fetchData() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const data = 'Some data';
          resolve(data);
        }, 2000);
      });
    }
    
    fetchData()
      .then(result => {
        console.log('Результат:', result);
      })
      .catch(error => {
        console.log('Ошибка:', error);
      });
          </code></pre>
        `,level:"JUNIOR",category:"frontend"},{id:11,question:"В чем разница и схожесть между null и undefined?",answer:`
          <p><strong>null</strong> и <strong>undefined</strong> — это значения, которые указывают на отсутствие значения, но с разным смыслом:</p>
          <ul>
            <li><strong>null:</strong> Явное отсутствие значения, объектный тип данных.</li>
            <li><strong>undefined:</strong> Неинициализированное значение, примитивный тип данных.</li>
          </ul>
          <p>Сходства:</p>
          <ul>
            <li>Оба значения указывают на отсутствие значения.</li>
            <li>Оба значения являются "ложными" (falsy) в логических выражениях.</li>
          </ul>
        `,level:"JUNIOR",category:"frontend"},{id:12,question:"Почему результатом сравнения двух похожих объектов является false?",answer:`
          <p>При сравнении объектов в JavaScript используется сравнение по ссылке, а не по содержимому. Даже если объекты содержат одинаковые свойства и значения, они являются разными объектами в памяти.</p>
          <pre><code>
    const obj1 = { name: 'John', age: 25 };
    const obj2 = { name: 'John', age: 25 };
    
    console.log(obj1 === obj2); // false
          </code></pre>
          <p>Для сравнения содержимого объектов нужно сравнивать их свойства вручную.</p>
        `,level:"JUNIOR",category:"frontend"},{id:13,question:"Для чего используется директива «use strict»?",answer:`
          <p>Директива "use strict" используется в JavaScript для включения строгого режима выполнения кода. Когда эта директива указана в начале скрипта или функции, JavaScript выполняет код в строгом режиме, что означает, что некоторые неявные или устаревшие функции и конструкции языка будут запрещены или изменены, а некоторые ошибки будут вызывать исключения.</p>
          
          <h4>Основные задачи строгого режима:</h4>
          <ul>
            <li>Предотвращение ошибок.</li>
            <li>Устранение неявных глобальных переменных.</li>
            <li>Запрет использования некоторых устаревших функций и конструкций.</li>
            <li>Улучшение безопасности.</li>
          </ul>
    
          <h4>Примеры использования:</h4>
          <pre><code>
    "use strict";
    x = 10; // Ошибка: переменная "x" не была объявлена
    
    function sum(a, a, c) { // Ошибка: Повторное объявление параметра
      return a + a + c;
    }
    
    delete Object.prototype; // Ошибка: Удаление свойства объекта запрещено
          </code></pre>
        `,level:"JUNIOR",category:"frontend"},{id:15,question:"В чем разница между методами call, apply, bind?",answer:`
          <p>Методы <code>call</code>, <code>apply</code> и <code>bind</code> используются для управления контекстом выполнения функций в JavaScript. Вот их основные различия:</p>
    
          <h4><code>call</code>:</h4>
          <p>Вызывает функцию с указанным контекстом и аргументами, переданными в виде отдельных параметров:</p>
          <pre><code>function.call(context, arg1, arg2, ...);</code></pre>
    
          <h4><code>apply</code>:</h4>
          <p>Вызывает функцию с указанным контекстом, но аргументы передаются в виде массива:</p>
          <pre><code>function.apply(context, [arg1, arg2, ...]);</code></pre>
    
          <h4><code>bind</code>:</h4>
          <p>Создает новую функцию с привязанным контекстом, которую можно вызвать позже:</p>
          <pre><code>function.bind(context);</code></pre>
    
          <h4>Пример использования:</h4>
          <pre><code>
    const obj = {
      name: 'John',
      greet: function(message) {
        console.log(\`\${message}, \${this.name}!\`);
      }
    };
    
    const otherObj = { name: 'Jane' };
    
    // call
    obj.greet.call(otherObj, 'Hello'); // Hello, Jane!
    
    // apply
    obj.greet.apply(otherObj, ['Hi']); // Hi, Jane!
    
    // bind
    const boundGreet = obj.greet.bind(otherObj);
    boundGreet('Hey'); // Hey, Jane!
          </code></pre>
        `,level:"JUNIOR",category:"frontend"},{id:17,question:"Что такое функции высшего порядка?",answer:`
          <p>Функции высшего порядка — это функции, которые могут принимать другие функции в качестве аргументов или возвращать функции в качестве результата. Они позволяют писать более гибкий и модульный код.</p>
    
          <h4>Пример функции обратного вызова (callback):</h4>
          <pre><code>
    function calculate(num1, num2, operation) {
      return operation(num1, num2);
    }
    
    function add(a, b) {
      return a + b;
    }
    
    function multiply(a, b) {
      return a * b;
    }
    
    const result1 = calculate(5, 3, add); // 8
    const result2 = calculate(5, 3, multiply); // 15
          </code></pre>
    
          <h4>Пример функции-обертки (wrapper):</h4>
          <pre><code>
    function withLogging(func) {
      return function(...args) {
        console.log('Calling function:', func.name);
        const result = func(...args);
        console.log('Result:', result);
        return result;
      };
    }
    
    function multiply(a, b) {
      return a * b;
    }
    
    const wrappedMultiply = withLogging(multiply);
    wrappedMultiply(5, 3); // 15
          </code></pre>
        `,level:"JUNIOR",category:"frontend"},{id:18,question:"Как создать объект, не имеющий прототипа?",answer:`
          <p>В JavaScript можно создать объект без прототипа несколькими способами. Вот некоторые из них:</p>
    
          <h4>Использование <code>Object.create(null)</code>:</h4>
          <pre><code>
    const obj = Object.create(null);
    console.log(obj.toString); // undefined
          </code></pre>
    
          <h4>Использование <code>Object.setPrototypeOf</code>:</h4>
          <pre><code>
    const obj = Object.setPrototypeOf({}, null);
    console.log(obj.toString); // undefined
          </code></pre>
    
          <p>Объекты без прототипа могут быть полезны, если вам нужно избежать наследования стандартных свойств и методов.</p>
        `,level:"JUNIOR",category:"frontend"},{id:19,question:"Что такое async/await?",answer:`
          <p><strong>async/await</strong> — это синтаксический сахар для работы с промисами, позволяющий писать асинхронный код в более линейном стиле.</p>
    
          <h4>Пример использования:</h4>
          <pre><code>
    async function fetchData() {
      try {
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error('Ошибка:', error);
      }
    }
    
    fetchData();
          </code></pre>
    
          <h4>Пример с задержкой (delay):</h4>
          <pre><code>
    function delay(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }
    
    async function delayedFunction() {
      console.log('Начало выполнения');
      await delay(2000);
      console.log('Задержка окончена');
    }
    
    delayedFunction();
          </code></pre>
        `,level:"JUNIOR",category:"frontend"},{id:20,question:"В чем разница между spread-оператором и rest-оператором?",answer:`
          <p>Spread-оператор и rest-оператор выполняют противоположные функции, но оба используют символ <code>...</code> в JavaScript.</p>
    
          <h4>Spread-оператор:</h4>
          <p>Распространяет элементы массива или свойства объекта. Пример:</p>
          <pre><code>
    const numbers = [1, 2, 3];
    const newArray = [...numbers, 4, 5]; // [1, 2, 3, 4, 5]
          </code></pre>
    
          <h4>Rest-оператор:</h4>
          <p>Собирает оставшиеся аргументы функции в массив. Пример:</p>
          <pre><code>
    function sum(...numbers) {
      return numbers.reduce((total, number) => total + number, 0);
    }
    
    console.log(sum(1, 2, 3, 4, 5)); // 15
          </code></pre>
        `,level:"JUNIOR",category:"frontend"}],br=[{id:1,question:"Что такое НТ?",answer:`Нагрузочное тестирование (НТ) — это проверка устойчивости и производительности программного обеспечения под нагрузкой, сопоставимой с реальными условиями использования."
      <p>Источник: <a href="https://habr.com/ru/companies/otus/articles/842150/" target="_blank">https://habr.com/ru/companies/otus/articles/842150//</a></p>`,level:"INTERN",category:"load"},{id:2,question:"Что такое МНТ?",answer:`
      <p>Методика нагрузочного тестирования (МНТ) – согласованный с заказчиком документ, регламентирующий проводимые тесты, средства тестирования, профиль нагрузки, SLA (Service level agreement – соглашение о качестве предоставляемых услуг).</p>
      <ul>
        <li><strong>Объект тестирования:</strong> Описание системы и её функций.</li>
        <li><strong>Цели испытаний:</strong> Определение максимальной нагрузки, проверка требований, выявление узких мест.</li>
        <li><strong>Конфигурация оборудования:</strong> Описание ресурсов (CPU, память), используемых для тестирования на различных стендах.</li>
        <li><strong>Требования к производительности:</strong> Определение допустимых показателей (например, утилизация CPU и RAM, процент ошибок).</li>
        <li><strong>Сценарии нагрузочного тестирования:</strong> Ссылки на сценарии и описание запросов для выполнения тестов.</li>
        <li><strong>Профили нагрузки:</strong> Описание интенсивности запросов и задержек.</li>
        <li><strong>Список нагрузочных испытаний:</strong> Тесты на максимальную нагрузку, стабильность, с указанием ключевых метрик.</li>
        <li><strong>Средства нагрузочного тестирования:</strong> Инструменты для тестирования (Locust, Grafana, Prometheus) и генерация нагрузки.</li>
        <li><strong>Список метрик:</strong> Время отклика, успешность операций, пропускная способность системы.</li>
        <li><strong>Отчеты:</strong> Порядок формирования отчётов с результатами испытаний и сравнение с эталонными тестами.</li>
        <li><strong>Генерация:</strong> Процесс сбора и управления большим объемом данных из различных ресурсов только для реализации тестовых примеров для обеспечения функциональной надежности тестируемой системы.</li>
      </ul>
    `,level:"INTERN",category:"load"},{id:3,question:"В МНТ есть раздел генерация БД, о чем он и зачем нужен?",answer:`
         <p><strong>Основные цели раздела "Генерация БД":</strong></p>
    
    <ol>
      <li><strong>Создание объёма данных:</strong> 
        Для проведения нагрузочного тестирования требуется, чтобы база данных содержала значительное количество записей (например, пользователей, транзакций, продуктов). 
        Это помогает симулировать реальную работу системы под высокой нагрузкой. Генерация данных позволяет протестировать работу системы с большими объёмами информации 
        и убедиться, что она справляется с нагрузкой.
      </li>

      <li><strong>Реалистичное тестирование:</strong> 
        Данные, генерируемые для тестов, должны быть максимально приближены к реальным данным. Это позволит более точно оценить поведение системы в продакшене. 
        Генерация данных может включать создание не только записей в таблицах, но и заполнение связей между таблицами, создание индексов и других элементов структуры базы данных.
      </li>

      <li><strong>Сценарии тестирования:</strong> 
        Некоторые сценарии нагрузочного тестирования могут предполагать выполнение операций с различными объёмами данных. Например, тестирование производительности поиска по базе данных 
        или выполнения сложных SQL-запросов. Для таких тестов необходима база с различным количеством записей.
      </li>

      <li><strong>Избежание дублирования:</strong> 
        Генерация данных также может помочь избежать использования одних и тех же данных многими виртуальными пользователями, что сделает тестирование более приближённым к реальной эксплуатации.
      </li>
    </ol>

    <p><strong>Зачем нужна генерация БД:</strong></p>
    <ul>
      <li>Тестирование на больших объёмах данных: Генерация БД позволяет протестировать систему с реальными объёмами данных, которые она будет обрабатывать в продакшене.</li>
      <li>Подготовка данных для разных тестовых сценариев: Разные типы тестов могут требовать различных данных (например, для сценариев с чтением, записью, обновлением или удалением данных).</li>
      <li>Оценка производительности базы данных: Нагрузка на базу данных и время отклика зависят от количества данных. Генерация данных позволяет создать условия, при которых можно оценить, как система будет работать под реальной нагрузкой.</li>
      <li>Имитирование реальных условий: Генерация БД создаёт реальные или реалистичные данные, чтобы симулировать реальные сценарии использования.</li>
    </ul>

    <p>
      Таким образом, раздел "Генерация БД" является важной частью подготовки к нагрузочному тестированию, так как он обеспечивает наличие данных 
      для полноценной проверки работы системы под нагрузкой.
    </p>
      `,level:"INTERN",category:"load"},{id:4,question:"Что нужно прописывать в отчёте?",answer:`
          <ul>
            <li><strong>Объект тестирования:</strong> Описание системы, как в МНТ.</li>
            <li><strong>Цели испытаний:</strong> Конкретные задачи теста, например, выявление узких мест.</li>
            <li><strong>Конфигурация стендов:</strong> Параметры ресурсов (CPU, память, количество реплик).</li>
            <li><strong>Требования к производительности:</strong> Описание достигнутых результатов по утилизации ресурсов и процент ошибок.</li>
            <li><strong>Результаты тестов:</strong> Метрики по времени отклика, пропускной способности, количеству ошибок и успешных операций.</li>
            <li><strong>Анализ результатов:</strong> Сравнение с эталонными тестами (если применимо) и выявление проблем.</li>
            <li><strong>Отчеты по тестам:</strong> Ссылки на подробные отчёты и краткий анализ по итогам тестов.</li>
          </ul>
        `,level:"INTERN",category:"load"},{id:5,question:"Как записать простой скрипт с помощью Recording в JMeter?",answer:`
          <ul>
            <li><strong>Открой JMeter</strong> и добавь HTTP(S) Test Script Recorder.</li>
            <li><strong>Настрой прокси-сервер</strong> для захвата трафика (укажи порт).</li>
            <li><strong>Добавь Thread Group</strong> для организации сценария.</li>
            <li><strong>Запусти запись</strong> и проведи необходимые действия в браузере/приложении.</li>
            <li><strong>Останови запись</strong> — все запросы будут сохранены в виде шагов в сценарии.</li>
          </ul>
        `,level:"INTERN",category:"load"},{id:6,question:"Основные шаги настройки скрипта в JMeter после записи?",answer:`
         <ol>
      <li><strong>Очистка скрипта:</strong>
        <ul>
          <li>Удалите ненужные запросы (статические ресурсы: CSS, JS, изображения).</li>
          <li>Группируйте запросы с помощью Transaction Controller для удобства и измерения времени выполнения транзакций.</li>
        </ul>
      </li>

      <li><strong>Параметризация:</strong>
        <ul>
          <li>Используйте CSV Data Set Config для замены статических данных (логины, пароли) на динамические переменные из файла.</li>
          <li>Пример:
            <pre>
              POST /login
              {
                "username": "\${username}",
                "password": "\${password}"
              }
            </pre>
          </li>
        </ul>
      </li>

      <li><strong>Корреляция:</strong>
        <ul>
          <li>Извлекайте динамические данные (например, токены) с помощью Regular Expression Extractor или JSON Extractor.</li>
          <li>Пример регулярного выражения: <code>"sessionId":"(.+?)"</code>.</li>
        </ul>
      </li>

      <li><strong>Добавление тайм-аутов (Think Time):</strong>
        <ul>
          <li>Добавьте паузы между запросами с помощью Constant Timer или Uniform Random Timer для симуляции реального поведения пользователей.</li>
        </ul>
      </li>

      <li><strong>Настройка Thread Group:</strong>
        <ul>
          <li>Установите количество пользователей (Number of Threads), время разгона (Ramp-Up Period) и количество повторений сценария (Loop Count).</li>
        </ul>
      </li>

      <li><strong>Проверки (Assertions):</strong>
        <ul>
          <li>Добавьте Response Assertion для проверки кода ответа или содержания ответа, чтобы убедиться, что запросы успешны.</li>
        </ul>
      </li>

      <li><strong>Сбор метрик (Listeners):</strong>
        <ul>
          <li>Используйте Summary Report, View Results Tree для сбора метрик по времени отклика, проценту ошибок и другим параметрам.</li>
        </ul>
      </li>

      <li><strong>Мониторинг производительности:</strong>
        <ul>
          <li>Добавьте PerfMon Metrics Collector для мониторинга нагрузки на сервер (CPU, память) во время тестов.</li>
        </ul>
      </li>
    </ol>
        `,level:"INTERN",category:"load"},{id:7,question:"Что такое параметризация?",answer:`
          <p>Параметризация — это процесс использования переменных вместо фиксированных данных в запросах. Это позволяет запускать тест с различными значениями (например, разные логины) для симуляции реальных пользователей.</p>
    <p>Пример из вашего проекта: В вашем файле JMeter используется User Defined Variables, где определены следующие переменные:</p>
    <ul>
      <li>protocol = https</li>
      <li>port = 443</li>
      <li>host = profit-test.finportal-dev-2.salt.x5.ru</li>
      <li>authHost = key-stage.x5.ru</li>
      <li>client_id = finportal</li>
      <li>username = [ваши данные]</li>
    </ul>
    <p>Эти переменные используются в запросах для построения URL и других параметров:</p>
    <pre><code>\${protocol}://\${host}:\${port}/api/v1/data</code></pre>
    <p>Таким образом, вместо фиксированного URL используются переменные, что облегчает изменение конфигурации и поддерживает гибкость тестирования.</p>
        `,level:"INTERN",category:"load"},{id:8,question:"Что такое корреляция?",answer:`
         <p>Корреляция — это извлечение динамических данных (например, токенов) из ответа одного запроса для последующего использования в другом запросе. Это необходимо, когда система генерирует уникальные данные для каждой сессии.</p>
    <p>Пример из вашего проекта: Предположим, что сервер возвращает токен авторизации в одном из запросов, который нужно использовать в дальнейшем для аутентификации. Для этого используется JSON Extractor:</p>
    <ol>
      <li>Добавьте JSON Extractor в запрос, где возвращается токен:
        <ul>
          <li>JSON Path: <code>$.access_token</code></li>
          <li>Имя переменной: <code>accessToken</code></li>
        </ul>
      </li>
      <li>В следующих запросах используйте переменную для передачи токена:
        <pre><code>Authorization: Bearer \${accessToken}</code></pre>
      </li>
    </ol>
    <p>Теперь токен будет автоматически подставляться в каждый новый запрос, обеспечивая корректную работу теста.</p>
        `,level:"INTERN",category:"load"},{id:9,question:"Виды проверок в JMeter",answer:`
          <ol>
      <li><strong>Response Assertion:</strong>
        <p>Применяется для проверки ответа от сервера. Позволяет проверять код ответа HTTP, тело ответа, заголовки и сообщения об ошибках.</p>
        <ul>
          <li>Поиск текста — проверка на наличие или отсутствие конкретного текста в ответе.</li>
          <li>Регулярные выражения — гибкий поиск данных в теле ответа.</li>
          <li>Коды ответов — проверка HTTP статус-кодов, например, 200 OK.</li>
        </ul>
      </li>
      
      <li><strong>Size Assertion:</strong>
        <p>Проверяет, что размер тела ответа меньше или больше указанного значения.</p>
        <pre><code>Пример: Проверка, что размер тела ответа меньше 5000 байт</code></pre>
      </li>
      
      <li><strong>Duration Assertion:</strong>
        <p>Проверяет, что запрос выполнен за определенное время.</p>
        <pre><code>Пример: Запрос должен быть выполнен за 2 секунды</code></pre>
      </li>
      
      <li><strong>XPath Assertion:</strong>
        <p>Проверяет содержимое XML-ответа с помощью XPath.</p>
        <pre><code>Пример: Проверка, что XML-ответ содержит элемент <status>Success</status></code></pre>
      </li>
      
      <li><strong>JSON Assertion:</strong>
        <p>Проверка содержимого JSON-ответов.</p>
        <pre><code>Пример: Проверка, что JSON-ответ содержит поле "status": "Success"</code></pre>
      </li>
      
      <li><strong>JSR223/BeanShell Assertion:</strong>
        <p>Используется для кастомных проверок с помощью скриптов на Groovy или BeanShell.</p>
        <pre><code>Пример: Проверка, что длина тела ответа больше 100 символов.</code></pre>
      </li>
    </ol>
        `,level:"INTERN",category:"load"},{id:10,question:"Определение профиля НТ и методы его сбора",answer:`
          <p>Профиль нагрузки — это набор операций с заданными интенсивностями, полученный на основе сбора статистических данных либо определенный путем анализа требований к тестируемой системе.</p>
          <p><strong>Методы сбора профиля НТ:</strong></p>
          <ul>
            <li><strong>Анализ бизнес-требований:</strong> Сбор данных о прогнозируемом количестве пользователей и типичных сценариях использования.</li>
            <li><strong>Логирование реальных пользователей:</strong> Анализ логов реальных систем для определения характерных нагрузок.</li>
            <li><strong>Анализ мониторинга системы:</strong> Использование данных мониторинга производительности (например, Grafana, Prometheus) для понимания, как система работает под нагрузкой.</li>
            <li><strong>Консультации с разработчиками и бизнес-аналитиками:</strong> Определение критичных операций и нагрузочных сценариев.</li>
          </ul>
        `,level:"INTERN",category:"load"},{id:11,question:"Перечень основных тестов нагрузочного тестирования и их цели",answer:`
          <ul>
            <li><strong>Тест на максимальную нагрузку:</strong> Определение предела, при котором система перестает справляться с запросами. Цель — найти узкие места.</li>
            <li><strong>Тест стабильности:</strong> Проверка работы системы при постоянной нагрузке в течение длительного времени (например, 10 часов). Цель — выявить проблемы с утечкой памяти и нестабильностью работы.</li>
            <li><strong>Стрессовое тестирование:</strong> Тестирование системы при экстремальных условиях, когда ее ресурсы могут быть исчерпаны. Основная цель — проверка устойчивости системы при экстремальных условиях.</li>
            <li><strong>Тестирование отказоустойчивости:</strong> Оценка способности системы сохранять работоспособность в условиях неблагоприятных факторов, таких как сбои в сети и отключение серверов.</li>
          </ul>
        `,level:"INTERN",category:"load"},{id:12,question:"Основные метрики, на которые смотрят в Grafana при нагрузочном тестировании",answer:`
          <ul>
            <li><strong>CPU Utilization:</strong> Показывает, сколько процессорных ресурсов использует система.</li>
            <li><strong>Memory Utilization:</strong> Показывает использование оперативной памяти, важно, чтобы оно не превышало 80%.</li>
            <li><strong>Request Rate (RPS):</strong> Количество запросов в секунду, которые система обрабатывает.</li>
            <li><strong>Response Time:</strong> Время отклика системы, особенно важно для критичных операций.</li>
            <li><strong>Error Rate:</strong> Процент ошибок в системе, следует отслеживать, чтобы он был ниже 1%.</li>
            <li><strong>Throughput:</strong> Пропускная способность системы, измеряемая в мегабайтах или гигабайтах в секунду.</li>
          </ul>
        `,level:"INTERN",category:"load"},{id:13,question:"Статистика базы данных",answer:`
          <ul>
            <li><strong>Количество запросов:</strong> Общее количество SQL-запросов, обрабатываемых базой данных.</li>
            <li><strong>Время выполнения запросов:</strong> Показывает среднее, максимальное и минимальное время выполнения запросов.</li>
            <li><strong>Количество соединений:</strong> Количество активных соединений к базе данных.</li>
            <li><strong>Закэшированные данные:</strong> Статистика использования кэша для ускорения выполнения запросов.</li>
            <li><strong>Использование индексов:</strong> Статистика использования индексов для оптимизации запросов.</li>
            <li><strong>Количество блокировок:</strong> Блокировки строк или таблиц, замедляющие работу базы данных.</li>
          </ul>
        `,level:"INTERN",category:"load"},{id:14,question:"Различия между реляционной и нереляционной БД",answer:`
        <p>База данных (БД) — это организованная коллекция данных, предназначенная для хранения, управления и обработки информации. Базы данных позволяют эффективно сохранять большие объёмы данных, легко находить нужные сведения и управлять ими. Базы данных могут быть реляционными и нереляционными</p>
          <ul>
            <li><strong>Реляционные базы данных (RDBMS):</strong> организуют данные в таблицы с четко определенной схемой (строки и столбцы). Они поддерживают сложные связи между таблицами с помощью первичных и внешних ключей, что делает их идеальными для работы с четко структурированными данными и сложными взаимосвязями. Для работы с данными используют язык SQL. Примеры: MySQL, PostgreSQL, Oracle, SQL Server.</li>
            <li><strong>Нереляционные базы данных (NoSQL):</strong> могут хранить данные в различных форматах — документы, графы, ключ-значение или столбцы — без строгой схемы. Обычно они не поддерживают сложные связи, но хорошо масштабируются и оптимизированы для быстрого доступа к большим объемам неструктурированных данных. Примеры: MongoDB, Cassandra, Redis, Couchbase.</li>
          </ul>
        `,level:"INTERN",category:"load"},{id:15,question:"Как посмотреть, что находится в конкретной таблице?",answer:`
          <p>Для этого можно использовать следующий SQL-запрос:</p>
          <pre><code>SELECT * FROM table_name;</code></pre>
          <p>Здесь <code>table_name</code> — это название таблицы, данные которой нужно посмотреть.</p>
        `,level:"INTERN",category:"load"},{id:16,question:"Как выбрать конкретные столбцы?",answer:`
          <p>Для этого нужно указать конкретные столбцы в SQL-запросе:</p>
          <pre><code>SELECT column1, column2 FROM table_name;</code></pre>
          <p>Пример:</p>
          <pre><code>SELECT first_name, last_name FROM employees;</code></pre>
        `,level:"INTERN",category:"load"},{id:17,question:"Как писать условия для фильтрации? (WHERE)",answer:`
          <p>Для фильтрации данных используется ключевое слово <code>WHERE</code>:</p>
          <pre><code>SELECT * FROM table_name WHERE condition;</code></pre>
          <p>Пример:</p>
          <pre><code>SELECT * FROM employees WHERE salary > 50000;</code></pre>
        `,level:"INTERN",category:"load"},{id:18,question:"Что такое HTTP протокол?",answer:`
          <p><strong>HTTP (HyperText Transfer Protocol)</strong> — это протокол прикладного уровня, который используется для передачи данных в интернете. Он обеспечивает взаимодействие между клиентом (например, браузером) и сервером, работая по принципу "запрос-ответ". Этот протокол передаёт данные, такие как текст, изображения, видео и другие форматы, используя протоколы TCP/IP для доставки.</p>
          
          <h4>Как работает HTTP:</h4>
          <ol>
            <li><strong>Запрос клиента:</strong> Когда пользователь вводит URL в браузере или нажимает на ссылку, браузер отправляет HTTP-запрос на сервер. Запрос состоит из:
              <ul>
                <li>Метода (например, GET для получения данных или POST для отправки),</li>
                <li>URI (адреса ресурса, который запрашивается),</li>
                <li>Версии HTTP (например, HTTP/1.1 или HTTP/2),</li>
                <li>Дополнительных заголовков (например, типы данных, которые браузер может принять).</li>
              </ul>
            </li>
            <li><strong>Роль DNS:</strong> Прежде чем отправить запрос, браузер обращается к DNS (Domain Name System), чтобы преобразовать URL (например, www.example.com) в IP-адрес сервера.</li>
            <li><strong>Обработка на сервере:</strong> После получения запроса сервер обрабатывает его и возвращает HTTP-ответ, который состоит из:
              <ul>
                <li>Статуса ответа (например, 200 OK означает успешное выполнение),</li>
                <li>Заголовков (например, Content-Type — тип возвращаемого содержимого, и Content-Length — его размер),</li>
                <li>Тела ответа, которое может содержать запрашиваемую HTML-страницу или другой ресурс.</li>
              </ul>
            </li>
            <li><strong>Ответ сервера:</strong> Сервер отправляет данные обратно клиенту через тот же протокол TCP/IP. Браузер принимает данные и отображает их пользователю.</li>
          </ol>
          
          <h4>Безопасность в HTTP:</h4>
          <p>HTTPS — это защищённая версия HTTP, которая использует шифрование данных с помощью протоколов TLS (Transport Layer Security). Это необходимо для безопасной передачи данных, таких как пароли или информация о банковских картах. В отличие от HTTP, в HTTPS данные перед отправкой шифруются, что защищает их от перехвата.</p>
          
          <h4>Пример использования:</h4>
          <p>Когда вы вводите URL в браузере, например, https://www.example.com, браузер отправляет HTTPS-запрос на сервер, где данные шифруются и защищаются от несанкционированного доступа, а сервер возвращает зашифрованный ответ с запрашиваемыми данными.</p>
          
          <p>Таким образом, HTTP — это основа веб-связи, которая работает на уровне запросов и ответов, а HTTPS обеспечивает безопасность передачи данных в интернете.</p>
          
          <p>Источник: <a href="https://skillbox.ru/media/code/chto-takoe-http-i-zachem-on-nuzhen/" target="_blank">https://skillbox.ru/media/code/chto-takoe-http-i-zachem-on-nuzhen/</a></p>
        `,level:"INTERN",category:"load"},{id:19,question:"Что такое Request?",answer:"Request (Запрос) — это сообщение от клиента к серверу для получения данных или выполнения операций.",level:"INTERN",category:"load"},{id:20,question:"Что такое Response?",answer:"Response (Ответ) — это сообщение, которое сервер отправляет в ответ на запрос клиента.",level:"INTERN",category:"load"},{id:21,question:"Что такое Headers?",answer:"Headers (Заголовки) — это метаинформация, передаваемая в запросах и ответах HTTP.",level:"INTERN",category:"load"},{id:22,question:"Что такое Cookie?",answer:"Cookie — это небольшие данные, которые сервер отправляет клиенту для хранения информации о сессиях и настройках.",level:"INTERN",category:"load"},{id:23,question:"Что такое Body?",answer:"Body (Тело) — это основное содержимое HTTP-запроса или ответа, содержащее данные.",level:"INTERN",category:"load"},{id:24,question:"Что такое Method?",answer:`
          <ul>
            <li><strong>GET:</strong> Получить данные с сервера.</li>
            <li><strong>POST:</strong> Отправить данные на сервер.</li>
            <li><strong>PUT:</strong> Обновить или создать ресурс на сервере.</li>
            <li><strong>DELETE:</strong> Удалить ресурс на сервере.</li>
            <li><strong>PATCH:</strong> Частичное обновление ресурса.</li>
          </ul>
        `,level:"INTERN",category:"load"},{id:25,question:"Коды состояния и текст статуса",answer:`
          <ul>
            <li><strong>200 OK:</strong> Запрос успешно выполнен.</li>
            <li><strong>201 Created:</strong> Запрос выполнен успешно, создан новый ресурс.</li>
            <li><strong>404 Not Found:</strong> Ресурс не найден.</li>
            <li><strong>500 Internal Server Error:</strong> На сервере произошла ошибка.</li>
          </ul>
        `,level:"INTERN",category:"load"},{id:26,question:"Простые циклы с условиями на Python и Java",answer:`
          <p><strong>Цикл с условием while (Python):</strong></p>
          <pre><code>i = 0
while i < 5:
    if i % 2 == 0:
        print(f"{i} is even")
    else:
        print(f"{i} is odd")
    i += 1</code></pre>
          
          <p><strong>Цикл с условием while (Java):</strong></p>
          <pre><code>int i = 0;
while (i < 5) {
    if (i % 2 == 0) {
        System.out.println(i + " is even");
    } else {
        System.out.println(i + " is odd");
    }
    i++;
}</code></pre>
        `,level:"INTERN",category:"load"},{id:27,question:"Реализация простейших алгоритмов на Python и Java",answer:`
          <p><strong>Алгоритм нахождения максимума в списке (Python):</strong></p>
          <pre><code>def find_max(arr):
    max_value = arr[0]
    for num in arr:
        if num > max_value:
            max_value = num
    return max_value

numbers = [3, 5, 1, 9, 2]
print(find_max(numbers))  # Вывод: 9</code></pre>
          
          <p><strong>Алгоритм нахождения максимума в массиве (Java):</strong></p>
          <pre><code>public class Main {
    public static int findMax(int[] arr) {
        int maxValue = arr[0];
        for (int num : arr) {
            if (num > maxValue) {
                maxValue = num;
            }
        }
        return maxValue;
    }

    public static void main(String[] args) {
        int[] numbers = {3, 5, 1, 9, 2};
        System.out.println(findMax(numbers));  // Вывод: 9
    }
}</code></pre>
        `,level:"INTERN",category:"load"},{id:28,question:"Функции работы с массивами на Python и Java",answer:`
          <p><strong>Обращение массива (Python):</strong></p>
          <pre><code>arr = [1, 2, 3, 4, 5]
reversed_arr = arr[::-1]  # Метод срезов
print(reversed_arr)  # Вывод: [5, 4, 3, 2, 1]</code></pre>
          
          <p><strong>Обращение массива (Java):</strong></p>
          <pre><code>public class Main {
    public static void reverseArray(int[] arr) {
        for (int i = 0; i < arr.length / 2; i++) {
            int temp = arr[i];
            arr[i] = arr[arr.length - 1 - i];
            arr[arr.length - 1 - i] = temp;
        }
    }

    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 4, 5};
        reverseArray(arr);
        for (int num : arr) {
            System.out.print(num + " ");  // Вывод: 5 4 3 2 1
        }
    }
}</code></pre>
        `,level:"INTERN",category:"load"},{id:29,question:"Как правильно использовать функции корреляции, проверок и границ транзакций в JMeter или другом инструменте нагрузочного тестирования?",answer:`
          <p><strong>JMeter:</strong></p>
          <ul>
            <li><strong>Корреляция:</strong> Это процесс захвата динамических данных из ответов сервера и их использования в последующих запросах.</li>
            <li>Пример в JMeter:</li>
            <pre><code>
              В JMeter используется Regular Expression Extractor для извлечения нужных данных. 
              Пример: после успешного входа в систему может быть возвращен уникальный токен сессии. Этот токен нужно захватить и передать в каждом последующем запросе для аутентификации.
            </code></pre>
            <li><strong>Проверки (Assertions):</strong> Позволяют убедиться, что система работает правильно, используя Response Assertion для проверки текста ответа или статус-кодов.</li>
            <li><strong>Границы транзакций (Transaction Controller):</strong> Измеряет время выполнения определённой группы запросов как одну транзакцию.</li>
          </ul>
    
          <p><strong>Locust:</strong></p>
          <ul>
            <li><strong>Корреляция:</strong> Выполняется вручную через парсинг ответов, используя библиотеки Python.</li>
            <pre><code>
              from locust import HttpUser, task
              
              class MyUser(HttpUser):
                  @task
                  def my_task(self):
                      response = self.client.get("/login")
                      token = response.json()["token"]
                      self.client.post("/submit", json={"token": token})
            </code></pre>
            <li><strong>Проверки:</strong> В Locust делаются вручную, как в обычном Python-коде.</li>
            <pre><code>
              class MyUser(HttpUser):
                  @task
                  def my_task(self):
                      response = self.client.get("/api/data")
                      assert response.status_code == 200, "Неправильный статус-код"
                      assert "expected_value" in response.text, "Ожидаемое значение не найдено"
            </code></pre>
            <li><strong>Границы транзакций:</strong> Используйте таймеры для измерения времени выполнения задач.</li>
            <pre><code>
              import time
              from locust import HttpUser, task
    
              class MyUser(HttpUser):
                  @task
                  def my_task(self):
                      start_time = time.time()
                      self.client.get("/api/data")
                      end_time = time.time()
                      elapsed_time = end_time - start_time
                      print(f"Время выполнения транзакции: {elapsed_time} секунд")
            </code></pre>
          </ul>
    
          <p><strong>Gatling:</strong></p>
          <ul>
            <li><strong>Корреляция:</strong> Динамические значения можно извлекать с помощью встроенных методов, таких как <code>check</code> и <code>saveAs</code>.</li>
            <li><strong>Проверки:</strong> Используются <code>Checks</code>, например, для проверки кода ответа.</li>
            <li><strong>Границы транзакций:</strong> Транзакции автоматически измеряются, но можно добавить тайминги с помощью <code>exec().startTimer().stopTimer()</code>.</li>
          </ul>
        `,level:"JUNIOR",category:"load"},{id:30,question:"Что такое пейсинг?",answer:`
          <p>Пейсинг — это интервал времени между выполнением последовательных действий одного и того же виртуального пользователя в нагрузочном тесте. Пейсинг контролирует интенсивность нагрузки.</p>
        `,level:"JUNIOR",category:"load"},{id:31,question:"Как правильно вычислять пейсинг и количество пользователей?",answer:`
          <p>Формула пейсинга:</p>
          <pre><code>
            Пейсинг = (60 / Целевая нагрузка) - Время выполнения сценария
          </code></pre>
          <p>Пример:</p>
          <ul>
            <li>Целевая нагрузка: 1000 запросов в минуту</li>
            <li>100 пользователей</li>
            <li>Среднее время выполнения: 5 секунд</li>
          </ul>
        `,level:"JUNIOR",category:"load"},{id:32,question:"Как правильно вычислить количество виртуальных пользователей и пейсинг?",answer:`
         <p>Для правильного расчета количества виртуальных пользователей и пейсинга нужно учитывать следующие параметры:</p>
    
    <h4>1. Количество виртуальных пользователей (Vusers):</h4>
    <p>- Количество виртуальных пользователей зависит от того, сколько пользователей вы хотите симулировать в реальной системе.</p>
    <p>- Для расчета количества виртуальных пользователей можно использовать следующую формулу:</p>
    <pre><code>Vusers = (R * T) / P</code></pre>
    <ul>
      <li><strong>R</strong> — это желаемое количество запросов в секунду (RPS),</li>
      <li><strong>T</strong> — это время выполнения одного сценария (в секундах),</li>
      <li><strong>P</strong> — это пейсинг, то есть интервал между выполнением сценариев пользователями.</li>
    </ul>
    
    <h4>2. Пейсинг (Pacing):</h4>
    <p>- Пейсинг — это интервал времени между последовательными выполнениями сценариев одним пользователем.</p>
    <p>- Формула для расчета пейсинга:</p>
    <pre><code>P = (T * Vusers) / R</code></pre>
    <ul>
      <li><strong>P</strong> — это пейсинг (время между началом одного и начала следующего сценария),</li>
      <li><strong>T</strong> — это время выполнения одного цикла сценария (в секундах),</li>
      <li><strong>Vusers</strong> — это количество виртуальных пользователей,</li>
      <li><strong>R</strong> — это желаемое количество запросов в секунду.</li>
    </ul>
    
    <h4>Пример расчета:</h4>
    <p>Допустим, вам нужно симулировать 1000 запросов в минуту (R = 1000 / 60 = ~16.67 RPS).</p>
    <p>Если сценарий одного пользователя выполняется за 5 секунд (T = 5), и вы хотите использовать 100 виртуальных пользователей (Vusers = 100),</p>
    <p>Тогда пейсинг можно рассчитать как:</p>
    <pre><code>P = (T * Vusers) / R = (5 * 100) / 16.67 = ~30 секунд</code></pre>
    <p>Это значит, что каждый виртуальный пользователь должен запускать сценарий каждые 30 секунд, чтобы достичь 1000 запросов в минуту.</p>
        `,level:"JUNIOR",category:"load"},{id:33,question:"Что такое сущность в БД?",answer:`
           <p>Сущность в базе данных (БД) — это объект или концепция, которая представляет собой некоторую информацию, которую необходимо хранить в системе. В контексте реляционных баз данных сущность обычно отображается в виде таблицы, где каждая строка представляет собой запись (экземпляр сущности), а столбцы — атрибуты (свойства) сущности.</p>
    
    <h4>Основные характеристики сущности:</h4>
    <ol>
      <li>Сущность — это объект, который может быть идентифицирован в системе. Примеры сущностей: пользователи, заказы, товары, транзакции и т.д.</li>
      <li>Атрибуты сущности — это характеристики, которые описывают сущность. Например, сущность "Пользователь" может иметь атрибуты, такие как имя, электронная почта, возраст и т.д.</li>
      <li>Экземпляры сущности — это конкретные записи в таблице базы данных. Например, каждый пользователь в таблице "Пользователи" — это экземпляр сущности "Пользователь".</li>
    </ol>
    
    <h4>Пример:</h4>
    <p>Для сущности "Пользователь" может быть создана таблица в базе данных, которая содержит следующие атрибуты:</p>
    <ul>
      <li>id (идентификатор пользователя),</li>
      <li>first_name (имя),</li>
      <li>last_name (фамилия),</li>
      <li>email (электронная почта).</li>
    </ul>
    
    <h4>Пример таблицы "Пользователи":</h4>
    <pre><code>id   first_name  last_name  email
1    Иван        Иванов     ivan@example.com
2    Ольга       Смирнова   olga@example.com
    </code></pre>
    
    <p>В данном случае сущность — это "Пользователь", а каждая строка таблицы представляет собой конкретного пользователя, то есть экземпляр этой сущности.</p>
    
    <h4>Заключение:</h4>
    <p>Сущность — это ключевая концепция в базах данных, которая отражает объекты, с которыми работает система, и хранит информацию о них в виде записей (строк) в таблицах.</p
        `,level:"JUNIOR",category:"load"},{id:34,question:"Как снять статистику с базы данных (PostgreSQL)?",answer:`
          <ul>
            <li>Включите расширение <code>pg_stat_statements</code> в конфигурации PostgreSQL:</li>
            <pre><code>shared_preload_libraries = 'pg_stat_statements'</code></pre>
            <li>Запрос для мониторинга производительности баз данных:</li>
            <pre><code>
              SELECT * FROM pg_stat_statements;
            </code></pre>
            <li>Запрос для мониторинга текущих активных запросов:</li>
            <pre><code>
              SELECT * FROM pg_stat_activity;
            </code></pre>
          </ul>
        `,level:"JUNIOR",category:"load"},{id:35,question:"Что такое многопоточность в приложениях?",answer:`
          <p>Многопоточность — это способность приложения выполнять несколько задач одновременно (параллельно) с использованием нескольких потоков. Программы, которые могут одновременно выполнять несколько задач, используя для этого разные потоки. Такие приложения обычно используются для улучшения производительности и эффективности работы.</p>
          <p>В контексте многопоточности, поток — это отдельная последовательность инструкций, которая выполняется параллельно с другими потоками в пределах одного процесса.</p>
          <h4>Основные характеристики потока:</h4>
          <ol>
            <li><strong>Легковесный процесс:</strong> Поток может рассматриваться как "легковесный" процесс, который разделяет память и ресурсы с другими потоками в одном процессе.</li>
            <li><strong>Совместное использование ресурсов:</strong> Все потоки в одном процессе используют общую память, что позволяет обмениваться данными между ними быстрее, чем между отдельными процессами.</li>
            <li><strong>Параллелизм:</strong> В многопоточном приложении несколько потоков могут выполняться одновременно, что улучшает производительность за счёт использования нескольких процессоров или ядер.</li>
          </ol>
          <p><strong>В контексте определения:</strong></p>
          <p>В многопоточном приложении потоки используются для выполнения нескольких задач параллельно. Например, один поток может обрабатывать пользовательский ввод, в то время как другой выполняет сетевые запросы или вычисления. Это помогает более эффективно использовать ресурсы системы и улучшать отзывчивость приложения.</p>
          <h4>Пример:</h4>
          <p>В веб-сервере каждый запрос может обрабатываться отдельным потоком, что позволяет серверу одновременно обслуживать несколько клиентов.</p>
        `,level:"JUNIOR",category:"load"},{id:36,question:"Какой есть предел потоков у приложения?",answer:`
          <p>Предел количества потоков у приложения зависит от нескольких факторов, включая ресурсы системы и настройки операционной системы. Хотя теоретически можно создать очень много потоков, на практике существуют ограничения, которые зависят от следующих аспектов:</p>
          <ol>
            <li><strong>Ограничения операционной системы:</strong>
              <ul>
                <li>Операционная система устанавливает ограничения на количество потоков, которые можно запустить в одном процессе. Это ограничение зависит от архитектуры системы, настройки ядра, доступных ресурсов (памяти, CPU).</li>
                <li>В системах Linux и Windows есть параметры, которые можно настроить для увеличения или уменьшения количества допустимых потоков.</li>
              </ul>
            </li>
            <li><strong>Память:</strong>
              <ul>
                <li>Каждый поток требует выделения памяти для своего стека (обычно от 256 КБ до 1 МБ на поток). Чем больше потоков, тем больше оперативной памяти требуется для их поддержания.</li>
                <li>Если количество потоков превышает возможности системы по памяти, это приведет к OutOfMemoryError или другим ошибкам, связанным с нехваткой ресурсов.</li>
              </ul>
            </li>
            <li><strong>Ресурсы процессора (CPU):</strong>
              <ul>
                <li>Количество ядер процессора влияет на эффективность многопоточных приложений. Большое количество потоков может приводить к "контекстным переключениям", когда процессор переключается между потоками, что снижает производительность. Хотя можно создать много потоков, они не будут одновременно выполняться, если не хватает физических или логических ядер.</li>
              </ul>
            </li>
            <li><strong>Конфигурации JVM (для Java-приложений):</strong>
              <ul>
                <li>В Java приложениям можно задать предел количества потоков через параметры JVM, такие как -Xss (размер стека для потока). Например, уменьшив размер стека потока, можно создать больше потоков, но это приведет к меньшему количеству доступной памяти для каждого потока.</li>
              </ul>
            </li>
          </ol>
          <h4>Пример практических ограничений:</h4>
          <ul>
            <li><strong>В 32-битных системах:</strong> Ограничение на количество потоков может быть около 1000-2000, так как 32-битная система имеет ограниченный объём памяти.</li>
            <li><strong>В 64-битных системах:</strong> Количество потоков может быть значительно больше (десятки тысяч), так как 64-битная система поддерживает больше памяти.</li>
          </ul>
        `,level:"JUNIOR",category:"load"},{id:37,question:"Чем отличается виртуальный пользователь(Thread) от потока внутри приложения?",answer:`
          <p><strong>Виртуальный пользователь (Thread)</strong> в нагрузочном тестировании и поток внутри приложения — это два разных понятия, хотя и имеют похожие принципы работы.</p>
          <h4>1. Виртуальный пользователь (Thread) в нагрузочном тестировании:</h4>
          <ul>
            <li><strong>Определение:</strong> Виртуальный пользователь (VU, виртуальный поток) в таких инструментах, как JMeter или Locust, — это эмуляция действий одного пользователя, который взаимодействует с системой. Он имитирует реальных пользователей, отправляя запросы на сервер для тестирования его производительности.</li>
            <li><strong>Назначение:</strong> Основная задача виртуальных пользователей — создать нагрузку на систему, чтобы оценить её поведение под различной интенсивностью запросов (например, при 100, 1000 или 10 000 пользователей).</li>
            <li><strong>Особенности:</strong>
              <ul>
                <li>Виртуальные пользователи могут запускаться параллельно, но не обязательно напрямую связаны с многопоточностью внутри приложения.</li>
                <li>Каждый виртуальный пользователь может выполнять сценарий теста, который включает последовательность действий (например, логин, запрос данных, выход).</li>
                <li>В JMeter или Locust виртуальные пользователи настраиваются через Thread Group, которая указывает, сколько "пользователей" будет одновременно выполнять тестовые сценарии.</li>
              </ul>
            </li>
          </ul>
          <h4>2. Поток внутри приложения:</h4>
          <ul>
            <li><strong>Определение:</strong> Поток (thread) в контексте многопоточности приложения — это "параллельная" единица выполнения, которая работает в одном процессе. Потоки внутри приложения делят общую память и ресурсы между собой и могут выполнять различные задачи одновременно.</li>
            <li><strong>Назначение:</strong> Потоки в приложении используются для повышения производительности и эффективности. Например, один поток может обрабатывать пользовательский ввод, другой — выполнять вычисления, третий — ждать ответа от сервера.</li>
            <li><strong>Особенности:</strong>
              <ul>
                <li>Потоки внутри приложения делят между собой общие ресурсы, такие как память, что требует тщательной синхронизации, чтобы избежать конфликтов.</li>
                <li>Потоки используют процессорные ресурсы и могут выполнять задачи параллельно, если система поддерживает многопоточность.</li>
                <li>Управление потоками осуществляется через код приложения, и их выполнение может быть более сложным, так как нужно учитывать синхронизацию и управление доступом к общим ресурсам.</li>
              </ul>
            </li>
          </ul>
          <h4>Основные отличия:</h4>
          <table>
            <thead>
              <tr>
                <th>Критерий</th>
                <th>Виртуальный пользователь (Thread в нагрузочном тестировании)</th>
                <th>Поток внутри приложения (Thread)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Назначение</td>
                <td>Имитация действий реальных пользователей для тестирования нагрузки на систему</td>
                <td>Выполнение нескольких задач одновременно внутри одного процесса</td>
              </tr>
              <tr>
                <td>Контекст работы</td>
                <td>Работает как независимая сущность, выполняя сценарий теста, взаимодействуя с сервером</td>
                <td>Выполняет задачи в рамках одного процесса, может делить память и ресурсы с другими потоками</td>
              </tr>
              <tr>
                <td>Взаимодействие с системой</td>
                <td>Отправляет HTTP-запросы или выполняет другие действия для создания нагрузки</td>
                <td>Выполняет вычисления, операции ввода-вывода, обработку данных и др. внутри программы</td>
              </tr>
              <tr>
                <td>Управление</td>
                <td>Настраивается через инструменты тестирования (например, JMeter, Locust)</td>
                <td>Управляется разработчиками через код приложения</td>
              </tr>
              <tr>
                <td>Ресурсы</td>
                <td>Использует ресурсы тестирующего инструмента и создаёт нагрузку на сервер</td>
                <td>Использует процессорные ресурсы и память приложения, требуя синхронизации</td>
              </tr>
            </tbody>
          </table>
          <h4>Пример:</h4>
          <ul>
            <li><strong>Виртуальный пользователь:</strong> В JMeter может отправлять HTTP-запросы, имитируя поведение пользователя, заходящего на веб-сайт, отправляя запросы и получая ответы.</li>
            <li><strong>Поток внутри приложения:</strong> В Java может одновременно обрабатывать запросы от нескольких пользователей, где один поток работает с базой данных, а другой отправляет данные обратно пользователю.</li>
          </ul>
          <p><strong>Заключение:</strong> Виртуальный пользователь в нагрузочном тестировании — это инструмент для имитации реальных пользователей, создающий нагрузку на систему. Поток внутри приложения — это механизм параллельного выполнения задач в одном процессе программы, который повышает производительность работы приложения.</p>
        `,level:"JUNIOR",category:"load"},{id:38,question:"Например, у нас залогинились 1000 виртуальных пользователей одновременно, сколько будет потоков?",answer:`
          <p>Если у вас 1000 виртуальных пользователей в JMeter, это создаст 1000 потоков в самом JMeter, каждый из которых будет выполнять свои действия параллельно (например, логин).</p>
          <p>Однако на сервере количество потоков будет зависеть от его настроек. Сервер может использовать пул потоков (например, 200 потоков), и обрабатывать запросы по очереди, а не все одновременно.</p>
          <p>То есть:</p>
          <ul>
            <li>1000 виртуальных пользователей в JMeter = 1000 потоков в JMeter.</li>
            <li>Сервер может иметь меньше потоков, в зависимости от своей конфигурации.</li>
          </ul>
        `,level:"JUNIOR",category:"load"},{id:39,question:"Пул коннектов это?",answer:`
          <p><strong>Пул коннектов</strong> — это механизм управления соединениями с базой данных или другим ресурсом, который позволяет многократно использовать созданные соединения. Вместо того чтобы каждый раз создавать и закрывать соединение, пул коннектов сохраняет несколько активных соединений, готовых к использованию, и предоставляет их по запросу.</p>
          <h4>Основные характеристики:</h4>
          <ul>
            <li><strong>Повторное использование:</strong> Соединения не создаются каждый раз заново, а берутся из пула.</li>
            <li><strong>Эффективность:</strong> Экономится время на создание и закрытие соединений, что улучшает производительность приложения.</li>
            <li><strong>Ограничение ресурсов:</strong> Пул управляет количеством одновременно активных соединений, чтобы не перегружать базу данных.</li>
          </ul>
          <h4>Пример:</h4>
          <p>Приложение может создать пул из 10 коннектов. Когда пользователю нужно соединение с базой данных, оно берётся из пула. После завершения работы соединение возвращается в пул для повторного использования другими пользователями.</p>
        `,level:"JUNIOR",category:"load"},{id:40,question:"Что такое уровни логирования?",answer:`
          <ul>
            <li><strong>TRACE:</strong> Самый детализированный уровень.</li>
            <li><strong>DEBUG:</strong> Отладочная информация.</li>
            <li><strong>INFO:</strong> Общая информация о работе приложения.</li>
            <li><strong>WARN:</strong> Предупреждения о возможных проблемах.</li>
            <li><strong>ERROR:</strong> Ошибки, которые требуют внимания.</li>
            <li><strong>FATAL:</strong> Критические ошибки, приводящие к завершению работы приложения.</li>
          </ul>
        `,level:"JUNIOR",category:"load"},{id:41,question:"Что такое парсинг логов?",answer:`
         <p>
      Парсинг логов — это процесс автоматического анализа и обработки лог-файлов с целью извлечения полезной информации, такой как ошибки, предупреждения, статистика производительности, успешные или неуспешные операции. Лог-файлы обычно содержат информацию о работе системы, которая записывается в текстовые файлы. Парсинг помогает структурировать эти данные и использовать их для мониторинга, анализа и отладки.
    </p>
    <h4>Основные задачи парсинга логов:</h4>
    <ol>
      <li><strong>Поиск ошибок:</strong> Автоматическое извлечение и классификация ошибок, которые произошли в системе.</li>
      <li><strong>Мониторинг производительности:</strong> Сбор данных о времени отклика, загрузке системы и других метриках из логов.</li>
      <li><strong>Фильтрация данных:</strong> Удаление ненужной информации и извлечение только тех данных, которые важны для анализа.</li>
      <li><strong>Анализ событий:</strong> Определение последовательности событий и их влияние на производительность или стабильность системы.</li>
    </ol>
        `,level:"JUNIOR",category:"load"},{id:42,question:"Простые запросы с помощью SELECT",answer:`
          <ul>
            <li>Получение всех строк из таблицы:</li>
            <pre><code>SELECT * FROM employees;</code></pre>
            <li>Получение конкретных столбцов:</li>
            <pre><code>SELECT first_name, last_name FROM employees;</code></pre>
            <li>Фильтрация с использованием WHERE:</li>
            <pre><code>SELECT * FROM employees WHERE age > 30;</code></pre>
          </ul>
        `,level:"JUNIOR",category:"load"},{id:43,question:"Использование функций JOIN, GROUP BY, HAVING",answer:`
          <ul>
            <li><strong>JOIN:</strong> Объединение данных из двух таблиц.</li>
            <pre><code>
              SELECT employees.first_name, departments.department_name
              FROM employees
              INNER JOIN departments ON employees.department_id = departments.id;
            </code></pre>
            <li><strong>GROUP BY:</strong> Группировка строк по столбцам.</li>
            <pre><code>
              SELECT department_id, COUNT(*)
              FROM employees
              GROUP BY department_id;
            </code></pre>
            <li><strong>HAVING:</strong> Фильтрация результатов после группировки.</li>
            <pre><code>
              SELECT department_id, COUNT(*)
              FROM employees
              GROUP BY department_id
              HAVING COUNT(*) > 5;
            </code></pre>
          </ul>
        `,level:"JUNIOR",category:"load"},{id:44,question:"Что такое агрегирование функций?",answer:`
        <p>Агрегатные функции — это функции, которые применяются к группе строк и возвращают одно значение для каждой группы. Часто используются вместе с <code>GROUP BY</code>.</p>
        <ul>
          <li><strong>COUNT():</strong> Возвращает количество строк.</li>
          <pre><code>SELECT COUNT(*) FROM employees;</code></pre>
          <li><strong>SUM():</strong> Возвращает сумму значений в столбце.</li>
          <pre><code>SELECT SUM(salary) FROM employees;</code></pre>
          <li><strong>AVG():</strong> Возвращает среднее значение.</li>
          <pre><code>SELECT AVG(salary) FROM employees;</code></pre>
          <li><strong>MAX():</strong> Возвращает максимальное значение.</li>
          <pre><code>SELECT MAX(salary) FROM employees;</code></pre>
          <li><strong>MIN():</strong> Возвращает минимальное значение.</li>
          <pre><code>SELECT MIN(salary) FROM employees;</code></pre>
        </ul>
        <p>Пример объединения всех функций:</p>
        <pre><code>
          SELECT department_id, AVG(salary), MAX(salary), MIN(salary)
          FROM employees
          GROUP BY department_id
          HAVING AVG(salary) > 50000;
        </code></pre>
        <p>Этот запрос группирует сотрудников по отделам, вычисляет среднюю, максимальную и минимальную зарплату, и выводит только те отделы, где средняя зарплата больше 50 000.</p>
      `,level:"JUNIOR",category:"load"},{id:45,question:"Что такое Spring Boot?",answer:`
        <p><strong>Spring Boot</strong> — это фреймворк для упрощенной разработки Java-приложений с использованием экосистемы Spring. Он предоставляет встроенные механизмы для быстрой настройки и запуска приложений, минимизируя конфигурацию.</p>
        <p>Основные особенности Spring Boot:</p>
        <ul>
          <li><strong>Автоконфигурация:</strong> Автоматически настраивает компоненты приложения на основе зависимостей.</li>
          <li><strong>Встроенные серверы:</strong> Включает встроенные серверы, такие как Tomcat и Jetty.</li>
          <li><strong>Поддержка микросервисов:</strong> Легко использовать для создания микросервисов.</li>
        </ul>
        <p>Пример простого Spring Boot приложения:</p>
        <pre><code class="language-java">
          import org.springframework.boot.SpringApplication;
          import org.springframework.boot.autoconfigure.SpringBootApplication;
          import org.springframework.web.bind.annotation.GetMapping;
          import org.springframework.web.bind.annotation.RestController;
  
          @SpringBootApplication
          public class MySpringBootApplication {
  
            public static void main(String[] args) {
              SpringApplication.run(MySpringBootApplication.class, args);
            }
  
            @RestController
            class MyController {
              @GetMapping("/hello")
              public String sayHello() {
                return "Hello, Spring Boot!";
              }
            }
          }
        </code></pre>
        <p>Этот код является простым примером Spring Boot приложения, которое запускает встроенный веб-сервер и предоставляет REST API с единственным HTTP-методом GET по пути <code>/hello</code>.</p>
      `,level:"JUNIOR",category:"load"},{id:46,question:"Что такое Apache Kafka и основные принципы?",answer:`
        <p><strong>Apache Kafka</strong> — это распределённая платформа потоковой передачи сообщений, используемая для создания высокопроизводительных систем реального времени.</p>
        <p>Основные принципы работы Apache Kafka:</p>
        <ul>
          <li><strong>Тема (Topic):</strong> Логический канал для организации сообщений в Kafka.</li>
          <li><strong>Производитель (Producer):</strong> Отправляет сообщения в тему Kafka.</li>
          <li><strong>Потребитель (Consumer):</strong> Читает сообщения из темы Kafka.</li>
          <li><strong>Разделы (Partitions):</strong> Темы разделены на несколько частей для параллельной обработки.</li>
          <li><strong>Репликация и отказоустойчивость:</strong> Kafka поддерживает репликацию данных для повышения надёжности.</li>
        </ul>
      `,level:"JUNIOR",category:"load"},{id:47,question:"Что такое Kubernetes и основные элементы?",answer:`
        <p><strong>Kubernetes (K8s)</strong> — это платформа для автоматизации развертывания и управления контейнеризованными приложениями.</p>
        <p>Основные элементы Kubernetes:</p>
        <ul>
          <li><strong>Кластер (Cluster):</strong> Группа серверов (узлов), на которых развернуты приложения.</li>
          <li><strong>Под (Pod):</strong> Базовая единица развертывания в Kubernetes, которая может содержать один или несколько контейнеров.</li>
          <li><strong>Узлы (Nodes):</strong> Физические или виртуальные серверы в кластере Kubernetes.</li>
          <li><strong>Service:</strong> Обеспечивает доступ к подам через стабильный сетевой адрес.</li>
          <li><strong>ReplicaSet:</strong> Гарантирует, что заданное количество подов работает в кластере в любое время.</li>
        </ul>
      `,level:"JUNIOR",category:"load"},{id:48,question:"Что такое пулы данных в нагрузочном тестировании и как их использовать?",answer:`
        <p>Пулы данных — это наборы данных, которые используются для параметризации запросов в тестах, чтобы симулировать различные входные данные и избежать отправки однотипных запросов.</p>
        <p><strong>Зачем нужны пулы данных:</strong></p>
        <ul>
          <li>Они позволяют разнообразить запросы, обеспечивая более реалистичное тестирование.</li>
          <li>Помогают избежать кэширования запросов.</li>
          <li>Используются для тестирования больших объёмов данных.</li>
        </ul>
        <p><strong>Как использовать пулы данных в нагрузочном тестировании:</strong></p>
        <ol>
          <li>Подготовьте пул данных в виде файла (например, CSV).</li>
          <li>Настройте инструменты (JMeter, Locust) для использования данных из этого файла.</li>
        </ol>
        <p>Пример использования пула данных в JMeter:</p>
        <pre><code>
          user1,password1
          user2,password2
          user3,password3
        </code></pre>
      `,level:"MIDDLE",category:"load"},{id:49,question:"Скрипт для сбора логов",answer:`
        <p>Пример скрипта на Python для сбора логов:</p>
        <pre><code class="language-python">
          import os
          import time
  
          log_file = "/path/to/logfile.log"
  
          def follow_log(file_path):
              with open(file_path, 'r') as f:
                  f.seek(0, os.SEEK_END)
                  while True:
                      line = f.readline()
                      if not line:
                          time.sleep(0.1)
                          continue
                      yield line
  
          def write_logs_to_file(log_lines, output_file):
              with open(output_file, 'a') as f:
                  for line in log_lines:
                      f.write(line)
  
          if __name__ == "__main__":
              log_lines = follow_log(log_file)
              output_log_file = "/path/to/output_logfile.log"
              write_logs_to_file(log_lines, output_log_file)
        </code></pre>
        <p>Пример на Java:</p>
        <pre><code class="language-java">
          import java.io.IOException;
          import java.nio.file.*;
  
          public class LogCollector {
  
              public static void main(String[] args) {
                  Path logFile = Paths.get("/path/to/logfile.log");
                  Path outputLogFile = Paths.get("/path/to/output_logfile.log");
  
                  try {
                      WatchService watchService = FileSystems.getDefault().newWatchService();
                      logFile.getParent().register(watchService, StandardWatchEventKinds.ENTRY_MODIFY);
  
                      while (true) {
                          WatchKey key = watchService.take();
                          for (WatchEvent<?> event : key.pollEvents()) {
                              if (event.context().toString().equals(logFile.getFileName().toString())) {
                                  Files.lines(logFile)
                                      .forEach(line -> {
                                          try {
                                              Files.write(outputLogFile, (line + "\\n").getBytes(), StandardOpenOption.APPEND);
                                          } catch (IOException e) {
                                              e.printStackTrace();
                                          }
                                      });
                              }
                          }
                          key.reset();
                      }
                  } catch (IOException | InterruptedException e) {
                      e.printStackTrace();
                  }
              }
          }
        </code></pre>
      `,level:"MIDDLE",category:"load"},{id:50,question:"Как анализировать систему по количеству потоков, пулов, коннектов, времени работы GC, heap и non-heap?",answer:`
        <p><strong>1. Количество потоков (Threads):</strong> Используйте <code>jconsole</code> или <code>jstack</code> для мониторинга потоков в JVM.</p>
        <p><strong>2. Пулы потоков (Thread Pools):</strong> Анализируйте пулы потоков, чтобы избежать перегрузки.</p>
        <p><strong>3. Пулы соединений (Connection Pools):</strong> Контролируйте количество соединений к БД (например, с HikariCP).</p>
        <p><strong>4. Время работы GC (Garbage Collection):</strong> Используйте <code>jstat</code> или <code>VisualVM</code> для мониторинга.</p>
        <p><strong>5. Heap и Non-Heap память:</strong> Анализируйте состояние heap и non-heap памяти с помощью <code>jconsole</code> или <code>VisualVM</code>.</p>
      `,level:"MIDDLE",category:"load"},{id:51,question:"Как выявить долгие запросы в БД?",answer:`
        <p>Мониторинг медленных запросов можно выполнять с помощью системных таблиц или включения логов медленных запросов.</p>
        <p>Пример запроса для PostgreSQL:</p>
        <pre><code>
          SELECT pid, query, state, age(now(), query_start) AS duration
          FROM pg_stat_activity
          WHERE state = 'active'
          ORDER BY duration DESC;
        </code></pre>
      `,level:"MIDDLE",category:"load"},{id:52,question:"Как снять heap dump и thread dump?",answer:`
        <p><strong>1. Heap Dump:</strong> Используйте команду <code>jmap</code> для создания heap dump:</p>
        <pre><code>jmap -dump:live,format=b,file=heapdump.hprof &lt;pid&gt;</code></pre>
        <p><strong>2. Thread Dump:</strong> Используйте команду <code>jstack</code> для получения состояния потоков:</p>
        <pre><code>jstack -l &lt;pid&gt; > threaddump.txt</code></pre>
      `,level:"MIDDLE",category:"load"},{id:53,question:"INSERT и UPDATE в SQL",answer:`
        <p><strong>INSERT:</strong> Команда для добавления новых записей в таблицу:</p>
        <pre><code>
          INSERT INTO employees (first_name, last_name, age, department)
          VALUES ('John', 'Doe', 30, 'IT');
        </code></pre>
        <p><strong>UPDATE:</strong> Команда для обновления существующих записей:</p>
        <pre><code>
          UPDATE employees
          SET age = 31
          WHERE first_name = 'John' AND last_name = 'Doe';
        </code></pre>
      `,level:"MIDDLE",category:"load"},{id:54,question:"Как массово обновить данные в БД?",answer:`
        <p>Массовое обновление данных в базе данных можно выполнить с помощью <code>UPDATE</code>:</p>
        <pre><code>
          UPDATE employees
          SET department = 'Sales'
          WHERE department = 'Marketing';
        </code></pre>
      `,level:"MIDDLE",category:"load"},{id:55,question:"Что такое индекс и как с ним работать? Как проверять индексы в БД?",answer:`
        <p><strong>Индекс</strong> — это структура данных для ускорения поиска и сортировки данных в таблице.</p>
        <p><strong>Преимущества индексов:</strong></p>
        <ul>
          <li>Улучшают производительность запросов на выборку (SELECT).</li>
        </ul>
        <p>Пример создания индекса:</p>
        <pre><code>
          CREATE INDEX idx_employee_name ON employees (first_name, last_name);
        </code></pre>
      `,level:"MIDDLE",category:"load"},{id:56,question:"Что такое системные таблицы в БД?",answer:`
        <p>Системные таблицы — это таблицы, которые хранят метаинформацию о структуре базы данных и активных сессиях.</p>
        <p>Пример для PostgreSQL:</p>
        <pre><code>
          SELECT pid, usename, state, query
          FROM pg_stat_activity;
        </code></pre>
      `,level:"MIDDLE",category:"load"}],hi=[{id:1,question:"",answer:`
 
        `,level:"JUNIOR"},{id:2,question:"",answer:`
>
        `,level:"JUNIOR"},{id:3,question:"",answer:`

        `,level:"JUNIOR"},{id:4,question:"",answer:`

        `,level:"JUNIOR"},{id:5,question:"",answer:`

        `,level:"JUNIOR"},{id:6,question:"",answer:`

        `,level:"JUNIOR"},{id:7,question:"",answer:`
  
        `,level:"JUNIOR"},{id:8,question:"",answer:`

        `,level:"JUNIOR"},{id:9,question:"",answer:`
 
        `,level:"JUNIOR"},{id:10,question:"",answer:`

        `,level:"JUNIOR"},{id:11,question:"",answer:`

        `,level:"JUNIOR"},{id:12,question:"",answer:`

        `,level:"JUNIOR"},{id:13,question:"",answer:`

        `,level:"JUNIOR"},{id:15,question:"",answer:`

        `,level:"JUNIOR"},{id:17,question:"",answer:`

        `,level:"JUNIOR"},{id:19,question:"",answer:`

        `,level:"JUNIOR"},{id:20,question:"",answer:`
       
        `,level:"JUNIOR"}],fi=[{id:1,question:"Что такое JMeter и для чего он используется?",answer:`
        <p>Приложение Apache JMeter ™ представляет собой программное обеспечение с открытым исходным кодом, на 100% чистое Java-приложение, предназначенное для нагрузочного тестирования функционального поведения и измерения производительности</p>
        <p>Apache JMeter может использоваться для тестирования производительности как статических, так и динамических ресурсов, веб-динамических приложений. Его можно использовать для моделирования высокой нагрузки на сервер, группу серверов, сеть или объект, чтобы проверить их прочность или проанализировать общую производительность при различных типах нагрузки.и</p>
        `,category:"tools",tool:"jmeter"},{id:2,question:"Какие типы тестов поддерживает JMeter (нагрузочные, функциональные и т.д.)?",answer:`
        <p>JMeter поддерживает несколько типов тестирования:</p>
        <ul>
            <li><strong>Нагрузочное тестирование (Load Testing)</strong> — измерение производительности системы при увеличении нагрузки (количество пользователей, запросов и т.д.).</li>
            <li><strong>Стресс-тестирование (Stress Testing)</strong> — проверка поведения системы при условиях, превышающих нормальные рабочие нагрузки, чтобы определить, когда система начинает давать сбои.</li>
            <li><strong>Тестирование производительности (Performance Testing)</strong> — измерение отклика системы и её производительности под определёнными нагрузками.</li>
            <li><strong>Тестирование стабильности (Soak Testing)</strong> — долговременное тестирование, целью которого является проверка стабильности системы под постоянной нагрузкой.</li>
            <li><strong>Функциональное тестирование (Functional Testing)</strong> — проверка правильности работы приложения или его отдельных функций, например, тестирование API.</li>
            <li><strong>Тестирование на основе протоколов (Protocol Testing)</strong> — проверка производительности и корректности работы приложений, использующих различные сетевые протоколы, такие как HTTP, FTP, SOAP, JDBC и другие.</li>
        </ul>
        `,category:"tools",tool:"jmeter"},{id:3,question:"Как установить JMeter на операционной системе Windows/Linux/Mac?",answer:`
        <p>Для установки Apache JMeter на различных операционных системах выполните следующие шаги:</p>

        <h3>Windows</h3>
        <ol>
            <li>Скачайте последнюю версию JMeter с официального сайта Apache: <a href="https://jmeter.apache.org/download_jmeter.cgi" target="_blank">https://jmeter.apache.org/download_jmeter.cgi</a>.</li>
            <li>Убедитесь, что на вашем компьютере установлен Java (JRE или JDK). Вы можете проверить это с помощью команды <code>java -version</code> в командной строке.</li>
            <li>Распакуйте архив с JMeter в любую папку на вашем компьютере.</li>
            <li>Запустите JMeter, дважды кликнув по файлу <code>jmeter.bat</code>, который находится в папке <code>bin</code>.</li>
        </ol>

        <h3>Linux</h3>
        <ol>
            <li>Скачайте архив с JMeter с официального сайта: <a href="https://jmeter.apache.org/download_jmeter.cgi" target="_blank">https://jmeter.apache.org/download_jmeter.cgi</a>.</li>
            <li>Убедитесь, что на вашей системе установлена Java, используя команду <code>java -version</code>.</li>
            <li>Распакуйте скачанный архив с помощью команды: <code>tar -xvzf apache-jmeter-<version>.tgz</code>.</li>
            <li>Перейдите в папку <code>bin</code> и запустите JMeter с помощью команды: <code>./jmeter</code>.</li>
        </ol>

        <h3>Mac</h3>
        <ol>
            <li>Убедитесь, что на вашем Mac установлена Java, используя команду <code>java -version</code>. Если Java не установлена, установите её через <code>brew install java</code>.</li>
            <li>Скачайте JMeter с официального сайта: <a href="https://jmeter.apache.org/download_jmeter.cgi" target="_blank">https://jmeter.apache.org/download_jmeter.cgi</a>.</li>
            <li>Распакуйте скачанный архив с помощью команды <code>tar -xvzf apache-jmeter-<version>.tgz</code>.</li>
            <li>Перейдите в папку <code>bin</code> и запустите JMeter командой: <code>./jmeter</code>.</li>
        </ol>
    `,category:"tools",tool:"jmeter"},{id:4,question:"Что такое тестовый план в JMeter и как его создать?",answer:`
        <p><strong>Тестовый план</strong> в JMeter — это структура, которая описывает последовательность выполнения тестов, их параметры и настройки. Он включает в себя все элементы, необходимые для проведения тестирования, такие как группы потоков (Thread Groups), сэмплеры (Samplers), логические контроллеры (Controllers), слушатели (Listeners) и другие конфигурационные элементы.</p>

        <h3>Основные компоненты тестового плана:</h3>
        <ul>
            <li><strong>Thread Group (Группа потоков)</strong> — определяет количество пользователей (потоков) и параметры нагрузки, такие как количество запросов и продолжительность теста.</li>
            <li><strong>Samplers (Сэмплеры)</strong> — отправляют запросы к серверу. Например, HTTP Request, FTP Request и т.д.</li>
            <li><strong>Listeners (Слушатели)</strong> — собирают результаты выполнения тестов и отображают их в различных форматах (графики, таблицы и т.д.).</li>
            <li><strong>Timers (Таймеры)</strong> — добавляют задержки между запросами для имитации реальных задержек пользователей.</li>
            <li><strong>Assertions (Утверждения)</strong> — проверяют правильность ответов сервера на запросы.</li>
            <li><strong>Config Elements (Конфигурационные элементы)</strong> — позволяют задавать настройки для сэмплеров, такие как параметры HTTP-запросов.</li>
        </ul>

        <h3>Как создать тестовый план в JMeter:</h3>
        <ol>
            <li>Запустите JMeter, дважды кликнув по файлу <code>jmeter.bat</code> (Windows) или <code>./jmeter</code> (Linux/Mac) из папки <code>bin</code>.</li>
            <li>На панели инструментов выберите <strong>File</strong> → <strong>New</strong>, чтобы создать новый тестовый план.</li>
            <li>Добавьте группу потоков (Thread Group): щелкните правой кнопкой мыши на <strong>Test Plan</strong>, выберите <strong>Add</strong> → <strong>Threads (Users)</strong> → <strong>Thread Group</strong>.</li>
            <li>Настройте параметры группы потоков, такие как количество пользователей (Number of Threads), период разгона (Ramp-Up Period) и количество циклов (Loop Count).</li>
            <li>Добавьте сэмплер, например, HTTP Request: правой кнопкой мыши щелкните на <strong>Thread Group</strong>, выберите <strong>Add</strong> → <strong>Sampler</strong> → <strong>HTTP Request</strong>. Настройте URL-адрес и другие параметры запроса.</li>
            <li>Добавьте слушатель для просмотра результатов: правой кнопкой мыши щелкните на <strong>Thread Group</strong>, выберите <strong>Add</strong> → <strong>Listener</strong> → <strong>View Results Tree</strong>.</li>
            <li>Сохраните тестовый план, выбрав <strong>File</strong> → <strong>Save As</strong>.</li>
            <li>Запустите тест, нажав на кнопку <strong>Start</strong> на панели инструментов.</li>
        </ol>

        <p>Тестовый план является центральным элементом в JMeter и позволяет гибко настраивать параметры тестирования, адаптируя их под конкретные требования.</p>
    `,category:"tools",tool:"jmeter"},{id:5,question:"Какие компоненты тестового плана существуют в JMeter?",answer:`
        <p>Тестовый план в JMeter состоит из следующих ключевых компонентов:</p>
        <ul>
            <li><strong>Thread Group (Группа потоков)</strong> — это основа любого теста. Она определяет:
                <ul>
                    <li>Количество виртуальных пользователей (потоков), которые будут отправлять запросы.</li>
                    <li>Период разгона (Ramp-Up), который указывает, как быстро эти пользователи начнут отправлять запросы.</li>
                    <li>Количество итераций или длительность теста.</li>
                </ul>
                Каждый поток выполняет тестовый план независимо, что позволяет симулировать реальную нагрузку.
            </li>
            <li><strong>Samplers (Сэмплеры)</strong> — отправляют запросы на сервер и ожидают ответа. В JMeter поддерживаются разные виды сэмплеров:
                <ul>
                    <li>HTTP Request (для тестирования веб-приложений).</li>
                    <li>JDBC Request (для работы с базами данных).</li>
                    <li>FTP Request, SOAP/REST запросы и другие.</li>
                </ul>
                Сэмплеры являются основным элементом, с помощью которого JMeter взаимодействует с тестируемой системой.
            </li>
            <li><strong>Listeners (Слушатели)</strong> — собирают и отображают результаты тестирования. Они могут:
                <ul>
                    <li>Представлять данные в виде графиков, таблиц и диаграмм.</li>
                    <li>Экспортировать результаты в файлы форматов CSV или XML для дальнейшего анализа.</li>
                </ul>
                Слушатели помогают визуализировать и анализировать производительность системы.
            </li>
            <li><strong>Timers (Таймеры)</strong> — добавляют задержки между запросами, чтобы симулировать реальные задержки, которые могут быть между действиями пользователей. Таймеры можно настроить для всех запросов или для отдельных сэмплеров.
            </li>
            <li><strong>Assertions (Утверждения)</strong> — проверяют корректность ответов сервера. Например, можно проверить:
                <ul>
                    <li>Содержит ли ответ определённый текст или код состояния (например, 200 OK).</li>
                    <li>Проверку времени отклика сервера.</li>
                </ul>
                Утверждения помогают убедиться, что сервер возвращает корректные данные.
            </li>
            <li><strong>Config Elements (Конфигурационные элементы)</strong> — позволяют настраивать параметры для сэмплеров. Примеры:
                <ul>
                    <li>HTTP Cookie Manager — управляет cookies.</li>
                    <li>HTTP Header Manager — добавляет заголовки к запросам.</li>
                    <li>CSV Data Set Config — позволяет передавать параметры теста из файлов данных (например, передача логинов и паролей).</li>
                </ul>
                Эти элементы помогают адаптировать запросы к конкретным сценариям тестирования.
            </li>
            <li><strong>Pre/Post Processors</strong> — выполняют действия до (Pre) или после (Post) сэмплеров:
                <ul>
                    <li><strong>Pre-Processors</strong> могут подготавливать данные для запроса (например, генерировать динамические параметры).</li>
                    <li><strong>Post-Processors</strong> используются для обработки ответа сервера (например, извлечение данных с помощью регулярных выражений).</li>
                </ul>
                Эти элементы позволяют автоматизировать подготовку и обработку данных в тесте.
            </li>
            <li><strong>Controllers (Логические контроллеры)</strong> — определяют логику выполнения запросов. Например:
                <ul>
                    <li><strong>Loop Controller</strong> — повторяет определённый набор запросов несколько раз.</li>
                    <li><strong>If Controller</strong> — выполняет запросы в зависимости от выполнения условий.</li>
                    <li><strong>Transaction Controller</strong> — объединяет несколько запросов в одну транзакцию для измерения времени выполнения.</li>
                </ul>
                Эти контроллеры позволяют гибко настраивать логику выполнения тестов.
            </li>
        </ul>
    `,category:"tools",tool:"jmeter"},{id:6,question:"Как добавить HTTP Request в JMeter и для чего он используется?",answer:`
        <p>HTTP Request в JMeter используется для отправки HTTP-запросов к веб-серверу. Это один из самых распространённых сэмплеров, который позволяет тестировать производительность веб-приложений, API (REST, SOAP) и других сервисов, использующих HTTP/HTTPS протоколы.</p>

        <h3>Для чего используется HTTP Request в JMeter:</h3>
        <ul>
            <li>Тестирование производительности веб-сайтов и веб-приложений.</li>
            <li>Тестирование REST и SOAP API.</li>
            <li>Отправка GET, POST, PUT, DELETE и других HTTP-запросов к серверу.</li>
            <li>Измерение времени отклика, пропускной способности, а также тестирование на устойчивость под нагрузкой.</li>
        </ul>

        <h3>Как добавить HTTP Request в JMeter:</h3>
        <ol>
            <li>Откройте JMeter и создайте новый <strong>тестовый план</strong> (File → New).</li>
            <li>Добавьте <strong>Thread Group</strong> (группу потоков):
                <ul>
                    <li>Щелкните правой кнопкой мыши на Test Plan → Add → Threads (Users) → Thread Group.</li>
                </ul>
            </li>
            <li>Внутри Thread Group добавьте сэмплер <strong>HTTP Request</strong>:
                <ul>
                    <li>Щелкните правой кнопкой мыши на Thread Group → Add → Sampler → HTTP Request.</li>
                </ul>
            </li>
            <li>Настройте HTTP Request:
                <ul>
                    <li>В поле <strong>Server Name or IP</strong> укажите домен или IP-адрес сервера, к которому будут отправлены запросы.</li>
                    <li>В поле <strong>Path</strong> укажите путь к ресурсу (например, <code>/api/users</code> для API-запросов).</li>
                    <li>Выберите HTTP-метод (GET, POST, PUT, DELETE) в поле <strong>Method</strong>.</li>
                    <li>Добавьте параметры запроса в раздел <strong>Parameters</strong> (если необходимо).</li>
                </ul>
            </li>
            <li>Добавьте <strong>Listener</strong> (например, View Results Tree) для просмотра результатов теста:
                <ul>
                    <li>Щелкните правой кнопкой мыши на Thread Group → Add → Listener → View Results Tree.</li>
                </ul>
            </li>
            <li>Запустите тест, нажав на кнопку <strong>Start</strong> на панели инструментов.</li>
        </ol>

        <p>HTTP Request сэмплер в JMeter позволяет отправлять различные виды запросов к серверам и измерять их производительность, что делает его основным инструментом для тестирования веб-приложений.</p>
    `,category:"tools",tool:"jmeter"},{id:7,question:"Что такое Sampler в JMeter и какие виды сэмплеров поддерживаются?",answer:`
        <p><strong>Sampler (Сэмплер)</strong> в JMeter — это элемент, который инициирует запросы к серверу и ожидает ответа. Это могут быть запросы различных типов (HTTP, FTP, SQL и т.д.). Сэмплеры фактически представляют собой реальные запросы, которые отправляются на тестируемый сервер, и возвращают результаты, такие как успех или неудача запроса, время отклика, объём переданных данных и другие метрики. Эти результаты можно анализировать с помощью слушателей (Listeners).</p>

        <h3>Основные виды сэмплеров, поддерживаемые JMeter:</h3>
        <ul>
            <li><strong>HTTP Request</strong> — наиболее часто используемый сэмплер для отправки HTTP/HTTPS-запросов на веб-серверы. Этот сэмплер позволяет тестировать веб-приложения, API, проверять время отклика и стабильность веб-сервера под нагрузкой. Он поддерживает различные HTTP-методы (GET, POST, PUT, DELETE и др.), а также может отправлять параметры и файлы.</li>
            <li><strong>FTP Request</strong> — предназначен для тестирования FTP-серверов. С его помощью можно выполнять команды загрузки (PUT) или скачивания (GET) файлов. Этот сэмплер полезен для проверки производительности FTP-серверов при передаче больших объёмов данных.</li>
            <li><strong>JDBC Request</strong> — используется для отправки SQL-запросов к базе данных через JDBC. С его помощью можно измерить время выполнения SQL-запросов, тестировать производительность и корректность работы базы данных под нагрузкой. Для его работы необходимо настроить подключение к базе данных через элемент конфигурации JDBC Connection Configuration.</li>
            <li><strong>SMTP Sampler</strong> — позволяет тестировать работу почтовых серверов, отправляя электронные письма через протокол SMTP. Этот сэмплер позволяет настроить параметры отправителя, получателя, тему и содержимое сообщения, а также поддерживает SSL/TLS для безопасной передачи данных.</li>
            <li><strong>Debug Sampler</strong> — используется для отладки тестов. Он отображает текущие значения переменных и свойств, которые используются во время выполнения сценария. Это полезный инструмент для анализа и устранения проблем в тестовом плане.</li>
        </ul>

        <p>Эти сэмплеры играют ключевую роль в тестировании производительности систем, так как именно они инициируют запросы и собирают данные для дальнейшего анализа. В зависимости от характера тестируемой системы, можно использовать различные типы сэмплеров для эффективной проверки производительности и функциональности серверов, веб-приложений, баз данных и почтовых серверов.</p>
    `,category:"tools",tool:"jmeter"},{id:8,question:"Как настроить таймауты для HTTP запросов в JMeter?",answer:`
        <p>Настройка таймаутов в JMeter позволяет управлять задержками между отправкой HTTP-запросов, что помогает имитировать реальное поведение пользователей и сеть, а также измерить стабильность сервера под различными условиями. Таймауты можно настроить с помощью <strong>таймеров</strong> (Timers), которые позволяют задавать фиксированные или случайные задержки перед выполнением каждого запроса.</p>

        <h3>Основные таймеры для настройки таймаутов в JMeter:</h3>
        <ul>
            <li><strong>Constant Timer</strong> — задает фиксированную задержку перед выполнением каждого запроса. Например, если установить значение 3000 миллисекунд, JMeter будет добавлять задержку в 3 секунды перед каждым запросом.</li>
            <li><strong>Uniform Random Timer</strong> — генерирует случайную задержку в заданном диапазоне. Например, если указать максимальную задержку 2000 миллисекунд, время ожидания будет варьироваться от 0 до 2 секунд. Можно также добавить постоянное смещение (Constant Delay Offset), которое прибавляется к случайной задержке.</li>
            <li><strong>Gaussian Random Timer</strong> — генерирует случайную задержку с использованием нормального (Гауссова) распределения. Задержка рассчитывается как постоянное значение с добавлением случайного отклонения, которое определено параметром Deviation.</li>
            <li><strong>JSR223 Timer</strong> — позволяет задать время задержки с помощью сценариев на языке Groovy, JavaScript или других поддерживаемых языках. Это полезно, если вам нужно задать уникальный алгоритм для вычисления времени ожидания.</li>
            <li><strong>BeanShell Timer</strong> — аналогично JSR223 Timer, но используется язык BeanShell для создания скриптов, которые рассчитывают задержку перед запросами.</li>
        </ul>

        <p>Таймеры в JMeter размещаются между сэмплерами для того, чтобы применить задержку перед каждым запросом, что особенно полезно для имитации реального поведения пользователей в сети. В случае стресс-тестирования таймеры могут быть отключены для максимальной нагрузки на сервер.</p>
    `,category:"tools",tool:"jmeter"},{id:9,question:"Как использовать Thread Group и что она определяет?",answer:`
        <p><strong>Thread Group</strong> (группа потоков) — это один из основных элементов в JMeter, который определяет нагрузку на тестируемое приложение. Она используется для эмуляции поведения пользователей (потоков) и управления их действиями в тестовом плане. В JMeter минимальный тестовый сценарий включает в себя Test Plan, Thread Group и один или несколько сэмплеров для отправки запросов к серверу.</p>

        <h3>Основные функции Thread Group:</h3>
        <ul>
            <li>Задает количество потоков (виртуальных пользователей), которые будут одновременно отправлять запросы на сервер.</li>
            <li>Определяет поведение теста в случае возникновения ошибки с помощью параметра <strong>Action to be taken after a Sample Error</strong> (например, продолжить тест, остановить поток или завершить тест).</li>
            <li>Позволяет настроить параметры нагрузки через <strong>Thread Properties</strong>, такие как:
                <ul>
                    <li><strong>Number of Threads</strong> — количество виртуальных пользователей, которые будут отправлять запросы одновременно.</li>
                    <li><strong>Ramp-up Period</strong> — время разгона, указывающее, как быстро будут запускаться потоки. Например, если задать 10 потоков и время разгона 100 секунд, новый поток будет запускаться каждые 10 секунд.</li>
                    <li><strong>Loop Count</strong> — количество циклов, в течение которых будут выполняться запросы. Можно задать бесконечный цикл, чтобы тест продолжался, пока его не остановят вручную.</li>
                </ul>
            </li>
            <li>Включает настройку <strong>Scheduler</strong> для задания времени старта и продолжительности выполнения теста. Параметры <strong>Duration</strong> и <strong>Startup Delay</strong> позволяют установить длительность теста и задержку перед его началом.</li>
        </ul>

        <p>Thread Group является начальной точкой для любого тестового плана в JMeter. Она контролирует количество виртуальных пользователей, параметры нагрузки и поведение теста в случае ошибок, а также позволяет гибко настраивать сценарии тестирования.</p>
    `,category:"tools",tool:"jmeter"},{id:10,question:"Чем отличается Thread Group от Ultimate Thread Group?",answer:`
        <p><strong>Thread Group</strong> и <strong>Ultimate Thread Group</strong> — это два различных элемента в JMeter, которые используются для моделирования поведения виртуальных пользователей в тестах. Основные отличия между ними заключаются в гибкости настройки нагрузки и в способе управления потоками (пользователями).</p>

        <h3>Основные отличия:</h3>
        <ul>
            <li><strong>Thread Group</strong> — это стандартный элемент JMeter для задания количества потоков (виртуальных пользователей) и параметров их работы:
                <ul>
                    <li>Позволяет задать количество потоков, время разгона (Ramp-up Period) и количество циклов (Loop Count).</li>
                    <li>Все потоки запускаются равномерно с указанным временем разгона.</li>
                    <li>Может работать бесконечно, если указать параметр "Forever".</li>
                    <li>Основной для простых тестов с постоянной или равномерно распределенной нагрузкой.</li>
                </ul>
            </li>
            <li><strong>Ultimate Thread Group</strong> — это расширенная версия Thread Group с более гибкой настройкой нагрузки:
                <ul>
                    <li>Позволяет настроить отдельные этапы нагрузки для каждого потока (например, плавное увеличение и уменьшение нагрузки).</li>
                    <li>Можно задать несколько интервалов времени для запуска различных количеств потоков в разные моменты времени.</li>
                    <li>Поддерживает сложные сценарии нагрузки, такие как стресс-тестирование и тесты с динамической нагрузкой (например, постепенное увеличение нагрузки и резкое её снижение).</li>
                    <li>Каждый поток может иметь свою уникальную конфигурацию времени разгона и продолжительности выполнения.</li>
                    <li>Идеален для сложных нагрузочных сценариев, где требуется более точное моделирование реального поведения пользователей.</li>
                </ul>
            </li>
        </ul>

        <h3>Пример использования:</h3>
        <p>Если нужно протестировать веб-приложение с постоянной нагрузкой 100 пользователей, которые запускаются постепенно за 100 секунд, будет достаточно использовать стандартную <strong>Thread Group</strong>. Однако, если требуется смоделировать нагрузку, при которой количество пользователей сначала увеличивается, а затем снижается, лучше использовать <strong>Ultimate Thread Group</strong>, где можно задать несколько фаз нагрузки (например, 50 пользователей в течение первых 2 минут, затем 100 пользователей в течение следующих 5 минут, и постепенное снижение нагрузки).</p>

        <p>Таким образом, <strong>Thread Group</strong> лучше подходит для простых сценариев тестирования с постоянной нагрузкой, в то время как <strong>Ultimate Thread Group</strong> позволяет реализовать более сложные и гибкие сценарии нагрузки.</p>
    `,category:"tools",tool:"jmeter"},{id:11,question:"Как задать количество потоков (users) и время выполнения теста в Thread Group?",answer:`
        <p>В <strong>Thread Group</strong> в JMeter можно настроить количество потоков (виртуальных пользователей) и время выполнения теста с помощью параметров в разделе <strong>Thread Properties</strong>. Эти параметры позволяют контролировать нагрузку, которую будет генерировать JMeter, и продолжительность тестирования.</p>

        <h3>Как задать количество потоков (users):</h3>
        <ul>
            <li>Откройте JMeter и создайте новый <strong>тестовый план</strong>.</li>
            <li>Добавьте <strong>Thread Group</strong> в тестовый план: правой кнопкой мыши на Test Plan → Add → Threads (Users) → Thread Group.</li>
            <li>В параметре <strong>Number of Threads (users)</strong> задайте количество виртуальных пользователей. Это число определяет, сколько потоков одновременно будет отправлять запросы на тестируемый сервер.</li>
            <li>Каждый поток будет выполнять полный цикл теста независимо от других потоков, что позволяет симулировать поведение реальных пользователей.</li>
        </ul>

        <h3>Как задать время выполнения теста:</h3>
        <ul>
            <li>Параметр <strong>Ramp-Up Period (seconds)</strong> определяет время разгона потоков. Он указывает, как быстро потоки будут запускаться. Например, если у вас 10 потоков и Ramp-Up Period = 100 секунд, то новый поток будет запускаться каждые 10 секунд (100/10).</li>
            <li>Задайте количество циклов (повторений) с помощью параметра <strong>Loop Count</strong>. Если необходимо выполнить тест бесконечно, установите флажок <strong>Forever</strong>.</li>
            <li>Для более точного контроля времени выполнения теста включите <strong>Scheduler</strong>. Вы можете задать:
                <ul>
                    <li><strong>Duration (seconds)</strong> — общее время выполнения теста. Например, если указать 600 секунд, тест будет выполняться в течение 10 минут.</li>
                    <li><strong>Startup Delay (seconds)</strong> — задержка перед запуском теста. Это позволяет отложить начало выполнения теста на заданное время после его старта.</li>
                </ul>
            </li>
        </ul>

        <p>Таким образом, в JMeter можно гибко настраивать количество потоков, скорость их запуска и общую продолжительность теста, что позволяет моделировать различные сценарии нагрузки на систему.</p>
    `,category:"tools",tool:"jmeter"},{id:12,question:"Что такое Ramp-Up Period и как его правильно рассчитать?",answer:`
        <p><strong>Ramp-Up Period</strong> — это параметр в JMeter, который определяет время разгона потоков (виртуальных пользователей) перед началом выполнения теста. Он указывает, сколько времени потребуется для запуска всех потоков. Другими словами, это интервал времени, в течение которого JMeter постепенно активирует все потоки.</p>

        <h3>Как работает Ramp-Up Period:</h3>
        <ul>
            <li>Если в тесте используется, например, 10 потоков, а Ramp-Up Period установлен в 100 секунд, то каждый новый поток будет запускаться через каждые 10 секунд (100 секунд / 10 потоков).</li>
            <li>Если количество потоков больше, то каждый поток начнет работу с меньшими интервалами. Например, для 50 потоков и Ramp-Up Period = 100 секунд, новый поток будет запускаться каждые 2 секунды (100 / 50).</li>
            <li>Этот параметр позволяет избежать мгновенного запуска всех потоков, что может создать резкую нагрузку на сервер. Вместо этого потоки запускаются постепенно, что позволяет серверу адаптироваться к нагрузке.</li>
        </ul>

        <h3>Как правильно рассчитать Ramp-Up Period:</h3>
        <ul>
            <li>**Общее правило** — установить Ramp-Up Period, равный количеству потоков. Например, если у вас 20 потоков, можно задать Ramp-Up Period в 20 секунд, чтобы потоки запускались по одному каждую секунду.</li>
            <li>**Сложность системы** — если система требует больше времени для обработки каждого запроса (например, тяжелые операции или запросы к базе данных), можно увеличить Ramp-Up Period, чтобы потоки запускались медленнее и система успевала обрабатывать запросы.</li>
            <li>**Цель теста** — если цель теста состоит в моделировании резкой нагрузки (например, стресс-тест), можно сократить Ramp-Up Period, чтобы потоки запускались быстрее. Для плавного увеличения нагрузки рекомендуется использовать более длинный Ramp-Up Period.</li>
        </ul>

    `,category:"tools",tool:"jmeter"},{id:13,question:"Что такое Listener в JMeter и как он используется для получения результатов?",answer:`<p><strong>Listener (Листенер)</strong> в JMeter — это элемент тестового плана, который используется для просмотра и анализа результатов выполнения тестов. Листенеры собирают данные, полученные в ходе теста, и отображают их в различных формах, таких как таблицы, графики или текстовые отчеты. Эти данные могут включать информацию о времени отклика, количестве ошибок, пропускной способности и других метриках производительности системы.</p>

        <h3>Основные функции Listener:</h3>
        <ul>
            <li>Листенеры отображают результаты теста в реальном времени или записывают их в файл для последующего анализа.</li>
            <li>Они группируют и отображают метрики, такие как количество запросов, процент ошибок, среднее время отклика и другие показатели.</li>
            <li>Листенеры могут быть добавлены как к Thread Group для анализа всех запросов, так и к отдельным сэмплерам или логическим контроллерам для более детализированного анализа.</li>
        </ul>

        <h3>Популярные листенеры в JMeter:</h3>
        <ul>
            <li><strong>View Results Tree</strong> — отображает подробную информацию о каждом запросе и ответе в древовидной структуре. Включает данные запроса, ответы от сервера, коды состояния, заголовки и содержимое тела ответа.</li>
            <li><strong>Aggregate Report</strong> — собирает сводную информацию по каждому сэмплеру и отображает статистические данные, такие как среднее время отклика, процент ошибок, 90-й и 95-й перцентили.</li>
            <li><strong>Summary Report</strong> — аналогичен Aggregate Report, но потребляет меньше памяти и не включает перцентили. Он отображает ключевые показатели производительности, такие как количество запросов, среднее и максимальное время отклика.</li>
            <li><strong>Simple Data Writer</strong> — записывает результаты теста в файл без отображения в графическом интерфейсе. Используется для сбора данных для дальнейшего анализа.</li>
            <li><strong>Aggregate Graph</strong> — создает графическое представление данных, подобное Aggregate Report, с возможностью экспортировать графики в формате PNG.</li>
        </ul>
    `,category:"tools",tool:"jmeter"},{id:14,question:"Какой Listener лучше всего использовать для анализа времени отклика и пропускной способности?",answer:`
        <p>Для анализа времени отклика и пропускной способности в JMeter рекомендуется использовать <strong>Aggregate Report</strong> и <strong>Summary Report</strong>.</p>

        <h3>Почему Aggregate Report:</h3>
        <ul>
            <li><strong>Aggregate Report</strong> предоставляет подробную сводку ключевых метрик производительности, таких как:
                <ul>
                    <li><strong>Среднее время отклика (Average)</strong> — показывает, сколько времени в среднем требуется серверу для обработки запросов.</li>
                    <li><strong>Производительность (Throughput)</strong> — отображает количество запросов, которые система может обработать в секунду, что является основной метрикой пропускной способности.</li>
                    <li><strong>Перцентили (90%, 95%, 99%)</strong> — дают представление о том, за какое время система отвечает на определенный процент запросов, что позволяет оценить распределение времени отклика.</li>
                </ul>
            </li>
            <li>Данные могут быть сохранены в файл для дальнейшего анализа.</li>
        </ul>

        <h3>Почему Summary Report:</h3>
        <ul>
            <li><strong>Summary Report</strong> также является полезным инструментом для анализа, так как:
                <ul>
                    <li>Предоставляет основные метрики, такие как <strong>среднее время отклика</strong>, <strong>максимальное время отклика</strong> и <strong>пропускная способность</strong> (Throughput).</li>
                    <li>Использует меньше ресурсов, чем Aggregate Report, что делает его подходящим для более продолжительных тестов или тестов с высокой нагрузкой.</li>
                </ul>
            </li>
        </ul>

        <p>Оба листенера — <strong>Aggregate Report</strong> и <strong>Summary Report</strong> — позволяют получить ключевую информацию о времени отклика и пропускной способности системы, но <strong>Aggregate Report</strong> предоставляет более детализированные данные с перцентилями, в то время как <strong>Summary Report</strong> легче по ресурсоемкости.</p>
    `,category:"tools",tool:"jmeter"},{id:15,question:"Как экспортировать результаты тестирования в JMeter в формат CSV?",answer:`
        <p>Экспорт результатов тестирования в JMeter в формате CSV можно выполнить с помощью листенеров, таких как <strong>Aggregate Report</strong>, <strong>Summary Report</strong> или <strong>Simple Data Writer</strong>. Эти листенеры позволяют сохранять данные тестов в файл для дальнейшего анализа.</p>

        <h3>Шаги для экспорта результатов в CSV:</h3>
        <ol>
            <li>После настройки тестового плана добавьте листенер для сбора данных. Например, можно добавить <strong>Aggregate Report</strong>:
                <ul>
                    <li>Щелкните правой кнопкой мыши на <strong>Thread Group</strong>, выберите <strong>Add</strong> → <strong>Listener</strong> → <strong>Aggregate Report</strong>.</li>
                </ul>
            </li>
            <li>После завершения теста результаты отобразятся в выбранном листенере.</li>
            <li>Для экспорта данных:
                <ul>
                    <li>Нажмите кнопку <strong>Save Table Data</strong> в листенере (например, в <strong>Aggregate Report</strong> или <strong>Summary Report</strong>).</li>
                    <li>Выберите расположение для сохранения файла и укажите его имя.</li>
                    <li>Выберите формат <strong>CSV</strong> в выпадающем списке форматов и нажмите <strong>Save</strong>.</li>
                </ul>
            </li>
            <li>Результаты будут сохранены в формате CSV и могут быть открыты в любой программе для работы с электронными таблицами (например, Excel).</li>
        </ol>

        <h3>Использование Simple Data Writer для экспорта в CSV:</h3>
        <ul>
            <li>Добавьте элемент <strong>Simple Data Writer</strong>:
                <ul>
                    <li>Щелкните правой кнопкой мыши на <strong>Thread Group</strong> → <strong>Add</strong> → <strong>Listener</strong> → <strong>Simple Data Writer</strong>.</li>
                </ul>
            </li>
            <li>В настройках укажите путь для сохранения результатов и выберите формат <strong>CSV</strong>.</li>
            <li>Simple Data Writer автоматически сохраняет результаты тестирования в указанный файл во время выполнения теста.</li>
        </ul>
    `,level:"JUNIOR",category:"tools",tool:"jmeter"},{id:16,question:"Как создать отчеты на основе тестирования в JMeter?",answer:`
        <p>В JMeter можно создавать отчеты на основе тестирования для анализа производительности системы. Эти отчеты включают сводные данные о времени отклика, пропускной способности, количестве ошибок и других важных метриках. Основные способы создания отчетов включают использование встроенных листенеров и автоматическую генерацию HTML-отчетов.</p>

        <h3>Основные способы создания отчетов:</h3>
        <ul>
            <li><strong>Листенеры</strong> — JMeter предоставляет множество листенеров для анализа данных:
                <ul>
                    <li><strong>Aggregate Report</strong> — сводная таблица с ключевыми показателями, такими как среднее время отклика, процент ошибок и производительность.</li>
                    <li><strong>Summary Report</strong> — аналогичен Aggregate Report, но более легкий по потреблению ресурсов.</li>
                    <li><strong>View Results Tree</strong> — отображает детальные результаты каждого запроса, что полезно для отладки.</li>
                    <li><strong>Graph Results</strong> — отображает данные в графическом виде для визуального анализа.</li>
                </ul>
                После выполнения теста данные можно экспортировать в файл (например, в формат CSV) для дальнейшего анализа.
            </li>
            <li><strong>Генерация HTML-отчета после теста</strong> — JMeter поддерживает автоматическую генерацию HTML-отчета на основе данных тестирования. Этот отчет включает в себя подробные графики и таблицы, такие как перцентили, время отклика, пропускная способность и другие показатели.
                <h4>Шаги для создания HTML-отчета:</h4>
                <ol>
                    <li>После завершения теста убедитесь, что все результаты сохранены в формате JTL (JMeter Test Log).</li>
                    <li>Для генерации отчета используйте следующую команду в терминале:
                        <pre><code>jmeter -g путь_к_файлу.jtl -o путь_к_папке_для_отчета</code></pre>
                        Эта команда генерирует HTML-отчет, который можно открыть в браузере.
                    </li>
                    <li>Откройте созданный отчет в веб-браузере, чтобы просмотреть сводные данные и графики.</li>
                </ol>
            </li>
        </ul>

        <h3>Использование встроенных инструментов для создания отчетов:</h3>
        <ul>
            <li><strong>Simple Data Writer</strong> — этот элемент сохраняет результаты тестирования в файл, который можно использовать для генерации отчетов после завершения теста.</li>
            <li><strong>PerfMon Plugin</strong> — плагин для мониторинга производительности системы, который можно использовать для более глубокого анализа данных и построения отчетов.</li>
        </ul>
    `,category:"tools",tool:"jmeter"},{id:17,question:"Какие плагины доступны для JMeter и как их установить?",answer:`
        <p>JMeter поддерживает множество плагинов, которые расширяют функциональность инструмента и добавляют новые возможности для тестирования производительности. Эти плагины могут включать дополнительные типы сэмплеров, листенеров, таймеров и другие элементы, полезные для проведения нагрузочного тестирования.</p>

        <h3>Популярные плагины для JMeter:</h3>
        <ul>
            <li><strong>PerfMon Plugin</strong> — плагин для мониторинга производительности серверов. Он позволяет отслеживать системные метрики (например, использование CPU, памяти и диска) во время теста.</li>
            <li><strong>Custom Thread Groups</strong> — плагин добавляет различные типы групп потоков, такие как <strong>Ultimate Thread Group</strong>, <strong>Stepping Thread Group</strong> и другие, для более гибкой настройки нагрузки.</li>
            <li><strong>Throughput Shaping Timer</strong> — позволяет контролировать пропускную способность теста, моделируя постоянную или изменяющуюся нагрузку.</li>
            <li><strong>Flexible File Writer</strong> — улучшает возможности записи результатов в файл, предоставляя больше опций для кастомизации данных.</li>
            <li><strong>Redis Data Set</strong> — плагин для интеграции с Redis, который позволяет использовать данные из Redis в тестовых сценариях JMeter.</li>
            <li><strong>MongoDB Source Config</strong> — плагин для работы с MongoDB, который позволяет подключаться к базам данных MongoDB и использовать их данные в тестах.</li>
        </ul>

        <h3>Как установить плагины в JMeter:</h3>
        <p>Для удобной установки плагинов в JMeter используется <strong>JMeter Plugins Manager</strong>, который упрощает процесс установки и обновления плагинов.</p>

        <h4>Шаги для установки плагинов через Plugins Manager:</h4>
        <ol>
            <li>Скачайте <strong>JMeter Plugins Manager</strong> с официального сайта: <a href="https://jmeter-plugins.org/install/Install/">https://jmeter-plugins.org/install/Install/</a>.</li>
            <li>Скопируйте файл <code>JMeterPlugins-Manager.jar</code> в папку <code>lib/ext</code> внутри директории JMeter.</li>
            <li>Перезапустите JMeter.</li>
            <li>После перезапуска в верхнем меню JMeter появится пункт <strong>Plugins Manager</strong>. Откройте его.</li>
            <li>В <strong>Plugins Manager</strong> перейдите на вкладку <strong>Available Plugins</strong>, выберите нужные плагины и нажмите кнопку <strong>Apply Changes and Restart JMeter</strong>.</li>
        </ol>

        <p>После перезапуска выбранные плагины будут установлены и доступны для использования в тестовых планах JMeter.</p>

        <h4>Альтернативный метод установки:</h4>
        <p>Вы также можете скачать плагины вручную с <a href="https://jmeter-plugins.org/">официального сайта JMeter Plugins</a>, затем распаковать и скопировать необходимые файлы в папку <code>lib/ext</code> внутри директории JMeter.</p>

        <p>Плагины расширяют возможности JMeter, позволяя тестировщикам использовать дополнительные инструменты для создания более гибких и мощных тестовых планов.</p>
    `,category:"tools",tool:"jmeter"},{id:18,question:"Как использовать JMeter для тестирования WebSocket-соединений?",answer:`
        <p><strong>WebSocket</strong> — это протокол, который обеспечивает двустороннюю связь между клиентом и сервером через одно соединение, что делает его эффективным для тестирования реального времени и интерактивных приложений. В JMeter стандартных средств для работы с WebSocket нет, однако можно использовать плагины, такие как <strong>WebSocket Sampler</strong>, для тестирования WebSocket-соединений.</p>

        <h3>Шаги для настройки тестирования WebSocket-соединений в JMeter:</h3>
        <h4>1. Установка плагина для WebSocket:</h4>
        <ol>
            <li>Сначала установите <strong>JMeter Plugins Manager</strong>, если он ещё не установлен (шаги установки описаны выше).</li>
            <li>Откройте <strong>Plugins Manager</strong>, найдите и установите плагин <strong>JMeter WebSocket Samplers</strong>.</li>
        </ol>

        <h4>2. Настройка WebSocket Sampler:</h4>
        <ol>
            <li>После установки плагина добавьте в ваш тестовый план <strong>Thread Group</strong>.</li>
            <li>Внутри Thread Group добавьте новый сэмплер: <strong>Add</strong> → <strong>Sampler</strong> → <strong>WebSocket Open Connection</strong>.</li>
            <li>Настройте параметры соединения:
                <ul>
                    <li><strong>Server</strong> — укажите адрес WebSocket-сервера (например, <code>ws://example.com/socket</code>).</li>
                    <li><strong>Port</strong> — укажите порт, на котором работает WebSocket-сервер (например, 8080).</li>
                    <li><strong>Timeout</strong> — задайте время ожидания для установления соединения.</li>
                </ul>
            </li>
        </ol>

        <h4>3. Добавление WebSocket запросов:</h4>
        <ul>
            <li>Чтобы отправить сообщения через WebSocket-соединение, добавьте сэмплер <strong>WebSocket Single Read</strong> или <strong>WebSocket Write</strong> для отправки сообщений на сервер.</li>
            <li>Настройте текст сообщения, которое будет отправлено на сервер, или данные, которые должны быть прочитаны с сервера.</li>
        </ul>

        <h4>4. Завершение WebSocket-соединения:</h4>
        <p>Чтобы корректно завершить WebSocket-соединение, добавьте сэмплер <strong>WebSocket Close</strong>, который завершит соединение после выполнения теста.</p>

        <h3>Пример теста WebSocket-соединения:</h3>
        <ol>
            <li><strong>WebSocket Open Connection</strong> — открывает WebSocket-соединение с сервером.</li>
            <li><strong>WebSocket Write</strong> — отправляет сообщение на сервер.</li>
            <li><strong>WebSocket Read</strong> — ожидает ответ от сервера.</li>
            <li><strong>WebSocket Close</strong> — закрывает соединение после завершения всех операций.</li>
        </ol>

        <h3>Анализ результатов:</h3>
        <p>Используйте листенеры, такие как <strong>View Results Tree</strong> или <strong>Summary Report</strong>, для просмотра результатов и анализа данных, отправленных и полученных по WebSocket-соединению. Эти листенеры позволяют видеть как запросы, так и ответы, а также диагностировать ошибки.</p>
    `,category:"tools",tool:"jmeter"},{id:19,question:"Что такое Assertion в JMeter и как его использовать для проверки ответа сервера?",answer:`
        <p><strong>Assertion</strong> (элемент подтверждения) в JMeter — это инструмент для проверки корректности ответа сервера. Assertion позволяет задать условия, которые проверяют, соответствует ли ответ сервера ожидаемым значениям. Если проверка не прошла, сэмплер считается проваленным, а тест может быть прерван или продолжен в зависимости от настроек.</p>

        <h3>Как работает Assertion:</h3>
        <p>Assertion выполняется после получения ответа от сервера (как пост-обработчик) и проверяет ответ на соответствие заданным условиям. Если ответ удовлетворяет условиям, тест продолжается. В противном случае, Assertion помечает сэмплер как "проваленный".</p>

        <h3>Типы Assertion в JMeter:</h3>
        <ul>
            <li><strong>Response Assertion</strong> — проверяет наличие конкретной строки, кода ответа, сообщения или заголовков в ответе от сервера.</li>
            <li><strong>Size Assertion</strong> — проверяет размер ответа (например, объем данных или длину заголовка).</li>
            <li><strong>Duration Assertion</strong> — проверяет, что время отклика не превышает заданное значение.</li>
            <li><strong>JSR223 Assertion</strong> — позволяет написать кастомные проверки на скриптовых языках, таких как Groovy или JavaScript.</li>
        </ul>

        <h3>Пример использования Response Assertion:</h3>
        <p>Для проверки, что ответ от сервера содержит определенный текст или код ответа, можно использовать <strong>Response Assertion</strong>:</p>
        <ul>
            <li>Добавьте Assertion как дочерний элемент к сэмплеру, который вы хотите проверить.</li>
            <li>В параметре <strong>Field to Check</strong> выберите, что проверять: тело ответа (Text Response), код ответа (Response Code) или заголовки (Response Headers).</li>
            <li>В параметре <strong>Pattern Matching Rules</strong> укажите правило соответствия (например, <strong>Contains</strong> для поиска текста или <strong>Equals</strong> для точного соответствия).</li>
        </ul>

        <h3>Пример настройки Response Assertion:</h3>
        <p>Допустим, вам нужно проверить, что сервер возвращает код ответа 200. Для этого:</p>
        <ul>
            <li>Добавьте <strong>Response Assertion</strong> к сэмплеру HTTP Request.</li>
            <li>В поле <strong>Field to Check</strong> выберите <strong>Response Code</strong>.</li>
            <li>В поле <strong>Patterns to Test</strong> укажите значение <code>200</code>.</li>
        </ul>

        <h3>Советы по использованию Assertion:</h3>
        <ul>
            <li>Не используйте слишком много Assertion, так как это может замедлить тест и снизить производительность.</li>
            <li>Убедитесь, что проверяемый шаблон уникален, чтобы результаты были корректными.</li>
            <li>Assertion может применяться как ко всем сэмплерам тестового плана, так и к отдельным сэмплерам, в зависимости от его расположения в дереве теста.</li>
        </ul>

        <p>Assertion помогает убедиться, что система работает корректно и возвращает ожидаемые результаты, что важно для тестирования производительности и стабильности системы под нагрузкой.</p>
    `,category:"tools",tool:"jmeter"},{id:20,question:"Как настроить Cookie Manager в JMeter?",answer:`
        <p><strong>HTTP Cookie Manager</strong> в JMeter используется для управления cookies, полученными от сервера, аналогично тому, как это делает веб-браузер. Он эмулирует сохранение и отправку cookies для всех запросов в рамках сессии, что особенно важно при тестировании веб-сайтов, использующих cookies для отслеживания сеансов.</p>

        <h3>Шаги для настройки HTTP Cookie Manager:</h3>
        <ol>
            <li>Добавьте <strong>HTTP Cookie Manager</strong> в тестовый план:
                <ul>
                    <li>Щелкните правой кнопкой мыши на <strong>Thread Group</strong> → <strong>Add</strong> → <strong>Config Element</strong> → <strong>HTTP Cookie Manager</strong>.</li>
                </ul>
            </li>
            <li>После добавления Cookie Manager автоматически начинает сохранять и отправлять cookies для каждого запроса.</li>
        </ol>

        <h3>Функции HTTP Cookie Manager:</h3>
        <ul>
            <li><strong>Эмуляция работы браузера:</strong> JMeter автоматически сохраняет и отправляет cookies для каждого HTTP-запроса, как это делает браузер. Каждый поток (пользователь) в JMeter имеет свою сессию с уникальными cookies.</li>
            <li><strong>Сохранение cookies как переменные:</strong> Можно настроить JMeter для сохранения cookies как переменных с помощью свойства <code>CookieManager.save.cookies=true</code>. В этом случае каждая cookie будет сохранена с префиксом <code>COOKIE_</code>, чтобы избежать конфликтов с локальными переменными.</li>
            <li><strong>Ручное добавление cookies:</strong> Вы можете вручную добавить cookies, которые будут применяться ко всем потокам. Это полезно для тестирования с заранее заданными значениями cookies.</li>
        </ul>

        <h3>Параметры настройки:</h3>
        <ul>
            <li><strong>Clear cookies each iteration?</strong> — если этот параметр включен, cookies будут очищаться в начале каждой новой итерации теста, что позволяет эмулировать нового пользователя при каждом повторе.</li>
        </ul>

        <h3>Пример использования:</h3>
        <p>Если веб-приложение использует cookies для авторизации, добавление <strong>HTTP Cookie Manager</strong> позволит JMeter автоматически обрабатывать cookies при отправке запросов, чтобы сохранить состояние сессии.</p>
    `,category:"tools",tool:"jmeter"},{id:21,question:"Что такое HTTP Proxy Server в JMeter и как с его помощью записать сценарий?",answer:`
        <p><strong>HTTP Proxy Server</strong> в JMeter — это инструмент для записи тестовых сценариев путем перехвата HTTP-запросов между веб-браузером и веб-сервером. Он используется для автоматической генерации HTTP-запросов в JMeter на основе действий, которые пользователь выполняет в браузере, например, посещения веб-страниц, кликов по ссылкам и отправки форм.</p>

        <h3>Как работает HTTP Proxy Server:</h3>
        <p>JMeter настраивает локальный прокси-сервер, через который вы направляете трафик из браузера. Все запросы и ответы, проходящие через этот прокси, фиксируются и автоматически превращаются в сэмплеры HTTP Request в JMeter.</p>

        <h3>Шаги для записи сценария с использованием HTTP Proxy Server:</h3>
        <ol>
            <li>Запустите JMeter и создайте новый тестовый план.</li>
            <li>Добавьте <strong>Thread Group</strong>:
                <ul>
                    <li>Правой кнопкой мыши на <strong>Test Plan</strong> → <strong>Add</strong> → <strong>Threads (Users)</strong> → <strong>Thread Group</strong>.</li>
                </ul>
            </li>
            <li>Добавьте <strong>HTTP Proxy Server</strong>:
                <ul>
                    <li>Правой кнопкой мыши на <strong>Test Plan</strong> → <strong>Add</strong> → <strong>Non-Test Elements</strong> → <strong>HTTP(S) Test Script Recorder</strong>.</li>
                </ul>
            </li>
            <li>Настройте HTTP Proxy Server:
                <ul>
                    <li>В поле <strong>Port</strong> укажите номер порта, через который будет работать прокси (например, 8888).</li>
                    <li>В разделе <strong>Target Controller</strong> выберите <strong>Thread Group</strong>, куда будут записываться сэмплеры.</li>
                    <li>Добавьте фильтры для исключения нежелательного трафика (например, запросов к ресурсам, таким как картинки или стили).</li>
                </ul>
            </li>
            <li>Настройте браузер для использования прокси-сервера:
                <ul>
                    <li>Перейдите в настройки вашего браузера и установите использование локального прокси (например, 127.0.0.1:8888).</li>
                </ul>
            </li>
            <li>Нажмите кнопку <strong>Start</strong> в JMeter для запуска прокси-сервера.</li>
            <li>Откройте браузер и выполните нужные действия (например, откройте сайт, заполните форму). Все действия будут записаны в JMeter.</li>
            <li>После завершения действий нажмите кнопку <strong>Stop</strong> в JMeter, чтобы остановить запись.</li>
        </ol>

        <h3>После записи сценария:</h3>
        <p>JMeter создаст сэмплеры HTTP Request на основе записанных запросов. Вы сможете просмотреть и отредактировать эти сэмплеры, чтобы настроить их для дальнейшего использования в нагрузочном тестировании.</p>

        <h3>Советы по использованию HTTP Proxy Server:</h3>
        <ul>
            <li>Используйте фильтры для исключения ненужных запросов, таких как запросы к изображениям и статическим ресурсам.</li>
            <li>Редактируйте записанные запросы, чтобы добавить параметры, сделать их динамическими или улучшить их структуру перед выполнением нагрузочного тестирования.</li>
        </ul>
    `,category:"tools",tool:"jmeter"},{id:22,question:"Как тестировать REST API с использованием JMeter?",answer:`
        <p>JMeter является отличным инструментом для тестирования REST API. Он позволяет создавать запросы к API, проверять ответы сервера и измерять производительность системы под нагрузкой. Тестирование REST API с помощью JMeter может включать запросы GET, POST, PUT, DELETE и другие HTTP-методы.</p>

        <h3>Шаги для тестирования REST API в JMeter:</h3>
        
        <h4>1. Создание тестового плана:</h4>
        <ol>
            <li>Запустите JMeter и создайте новый тестовый план.</li>
            <li>Добавьте <strong>Thread Group</strong> в тестовый план:
                <ul>
                    <li>Правой кнопкой мыши на <strong>Test Plan</strong> → <strong>Add</strong> → <strong>Threads (Users)</strong> → <strong>Thread Group</strong>.</li>
                </ul>
            </li>
        </ol>
        
        <h4>2. Добавление HTTP Request Sampler:</h4>
        <ol>
            <li>Добавьте <strong>HTTP Request</strong> в <strong>Thread Group</strong> для отправки запросов к REST API:
                <ul>
                    <li>Правой кнопкой мыши на <strong>Thread Group</strong> → <strong>Add</strong> → <strong>Sampler</strong> → <strong>HTTP Request</strong>.</li>
                </ul>
            </li>
            <li>Настройте параметры HTTP-запроса:
                <ul>
                    <li><strong>Server Name or IP</strong> — укажите адрес сервера API (например, <code>api.example.com</code>).</li>
                    <li><strong>Protocol</strong> — выберите <code>http</code> или <code>https</code> в зависимости от конфигурации API.</li>
                    <li><strong>HTTP Request Method</strong> — выберите метод запроса (GET, POST, PUT, DELETE).</li>
                    <li><strong>Path</strong> — укажите путь к ресурсу API (например, <code>/users</code>).</li>
                    <li>Если запрос требует передачи параметров (например, для POST-запросов), укажите их в разделе <strong>Body Data</strong> или <strong>Parameters</strong>.</li>
                </ul>
            </li>
        </ol>

        <h4>3. Настройка заголовков HTTP (Headers):</h4>
        <ol>
            <li>Если ваш API требует использования специальных заголовков (например, Content-Type или Authorization), добавьте <strong>HTTP Header Manager</strong>:
                <ul>
                    <li>Правой кнопкой мыши на <strong>Thread Group</strong> → <strong>Add</strong> → <strong>Config Element</strong> → <strong>HTTP Header Manager</strong>.</li>
                </ul>
            </li>
            <li>Добавьте необходимые заголовки, например:
                <ul>
                    <li><strong>Content-Type</strong>: <code>application/json</code> для работы с JSON-данными.</li>
                    <li><strong>Authorization</strong>: Bearer токен для аутентификации (если требуется).</li>
                </ul>
            </li>
        </ol>

        <h4>4. Добавление проверки ответа (Assertions):</h4>
        <ol>
            <li>Чтобы проверить, что API возвращает ожидаемый результат, добавьте <strong>Response Assertion</strong>:
                <ul>
                    <li>Правой кнопкой мыши на <strong>HTTP Request</strong> → <strong>Add</strong> → <strong>Assertions</strong> → <strong>Response Assertion</strong>.</li>
                </ul>
            </li>
            <li>Настройте проверку ответа:
                <ul>
                    <li>Выберите, что проверять: <strong>Text Response</strong>, <strong>Response Code</strong> или <strong>Response Headers</strong>.</li>
                    <li>Укажите ожидаемое значение. Например, код ответа <code>200</code> или наличие определенного текста в теле ответа.</li>
                </ul>
            </li>
        </ol>

        <h4>5. Добавление листенеров для анализа результатов:</h4>
        <ol>
            <li>Для просмотра и анализа результатов тестирования добавьте <strong>View Results Tree</strong> или <strong>Summary Report</strong>:
                <ul>
                    <li>Правой кнопкой мыши на <strong>Thread Group</strong> → <strong>Add</strong> → <strong>Listener</strong> → <strong>View Results Tree</strong> или <strong>Summary Report</strong>.</li>
                </ul>
            </li>
        </ol>

        <h4>6. Запуск теста:</h4>
        <ol>
            <li>После настройки теста нажмите кнопку <strong>Start</strong> в верхней панели JMeter.</li>
            <li>Проанализируйте результаты с помощью добавленных листенеров. Проверьте, корректно ли работает API, а также оцените время отклика и другие показатели.</li>
        </ol>

        <h3>Пример теста REST API с использованием POST-запроса:</h3>
        <ul>
            <li>Создайте HTTP Request с методом <strong>POST</strong> и укажите URL-адрес API (например, <code>https://api.example.com/users</code>).</li>
            <li>В разделе <strong>Body Data</strong> добавьте данные для отправки, например:
                <pre><code>{
    "name": "John Doe",
    "email": "john.doe@example.com"
}</code></pre>
            </li>
            <li>Настройте заголовки с помощью <strong>HTTP Header Manager</strong> (например, <code>Content-Type: application/json</code>).</li>
            <li>Запустите тест и проанализируйте ответ с помощью листенера <strong>View Results Tree</strong>.</li>
        </ul>

        <p>Таким образом, с помощью JMeter можно тестировать REST API, измерять время отклика, проверять корректность работы API и оценивать его производительность под нагрузкой.</p>
    `,category:"tools",tool:"jmeter"},{id:23,question:"Какие данные можно передавать через параметры HTTP запроса?",answer:`
        <p>Через параметры HTTP запроса можно передавать различные данные, которые сервер обрабатывает для выполнения операций, таких как фильтрация, поиск, аутентификация и передача контента. В HTTP запросах данные могут передаваться как в URL-строке (в случае GET-запросов), так и в теле запроса (POST, PUT, DELETE и другие методы).</p>

        <h3>Типы данных, которые можно передавать через параметры HTTP запроса:</h3>
        <ul>
            <li><strong>Строковые параметры (Query Parameters):</strong> используются в URL для передачи данных в формате ключ-значение. Например:
                <pre><code>GET /api/users?name=John&amp;age=30</code></pre>
                Здесь параметры <code>name=John</code> и <code>age=30</code> передаются серверу для обработки.
            </li>

            <li><strong>Данные в теле запроса (Request Body):</strong> используются в запросах POST, PUT и PATCH для передачи более объемных данных, таких как JSON, XML, или формы. Например, для POST-запроса:
                <pre><code>POST /api/users
Content-Type: application/json

{
    "name": "John Doe",
    "email": "john.doe@example.com"
}</code></pre>
                В этом случае данные передаются в теле запроса в формате JSON.
            </li>

            <li><strong>Формы (Form Data):</strong> используются при отправке HTML-форм (например, через POST-запросы). Данные формы могут быть переданы в формате <code>application/x-www-form-urlencoded</code> или <code>multipart/form-data</code> для передачи файлов.
                <pre><code>POST /submit-form
Content-Type: application/x-www-form-urlencoded

name=John&amp;age=30</code></pre>
            </li>

            <li><strong>Заголовки (Headers):</strong> хотя заголовки не являются параметрами, они играют важную роль в передаче данных, таких как аутентификация (например, с помощью токенов), информация о типе контента (Content-Type) и языке запроса.
                <ul>
                    <li><strong>Authorization</strong>: передача токенов или других данных для аутентификации пользователя.</li>
                    <li><strong>Content-Type</strong>: указывает тип передаваемых данных (например, JSON, XML, HTML).</li>
                </ul>
            </li>

            <li><strong>Файлы:</strong> при использовании метода <strong>multipart/form-data</strong> через HTTP можно передавать файлы на сервер. Это используется для загрузки изображений, документов и других данных в форме.
            </li>
        </ul>

        <h3>Примеры передачи параметров в HTTP запросах:</h3>
        <ul>
            <li><strong>GET запрос:</strong> параметры передаются через URL-строку:
                <pre><code>GET /api/products?category=books&amp;sort=price_desc</code></pre>
            </li>

            <li><strong>POST запрос с JSON:</strong> параметры передаются в теле запроса:
                <pre><code>POST /api/users
Content-Type: application/json

{
    "name": "John Doe",
    "password": "secure_password"
}</code></pre>
            </li>
            
            <li><strong>Загрузка файла через форму:</strong> используется <code>multipart/form-data</code> для передачи файлов:
                <pre><code>POST /upload
Content-Type: multipart/form-data

--boundary
Content-Disposition: form-data; name="file"; filename="example.png"
Content-Type: image/png

(файл)</code></pre>
            </li>
        </ul>
    `,category:"tools",tool:"jmeter"},{id:24,question:"Как использовать Timer в JMeter для контроля времени задержки между запросами?",answer:`
        <p><strong>Timer</strong> в JMeter используется для задания времени задержки между запросами (сэмплерами) в тестовом плане. По умолчанию JMeter отправляет запросы без пауз, но с помощью таймеров можно настроить задержки для эмуляции реального поведения пользователей и нагрузки на сервер.</p>

        <h3>Шаги для добавления Timer в JMeter:</h3>
        <ol>
            <li>Добавьте <strong>Thread Group</strong> в тестовый план, если она еще не создана:
                <ul>
                    <li>Правой кнопкой мыши на <strong>Test Plan</strong> → <strong>Add</strong> → <strong>Threads (Users)</strong> → <strong>Thread Group</strong>.</li>
                </ul>
            </li>
            <li>Добавьте <strong>Timer</strong> в Thread Group или конкретный сэмплер:
                <ul>
                    <li>Правой кнопкой мыши на <strong>Thread Group</strong> или сэмплере → <strong>Add</strong> → <strong>Timer</strong> → выберите нужный тип таймера.</li>
                </ul>
            </li>
        </ol>

        <h3>Типы таймеров в JMeter:</h3>
        <ul>
            <li><strong>Constant Timer</strong> — задает постоянную задержку перед каждым запросом.
                <ul>
                    <li>В поле <strong>Thread Delay (in milliseconds)</strong> укажите значение задержки в миллисекундах. Например, если указать <code>3000</code>, будет добавлена задержка в 3 секунды между запросами.</li>
                </ul>
            </li>

            <li><strong>Uniform Random Timer</strong> — задает случайную задержку перед запросами.
                <ul>
                    <li>Параметр <strong>Random Delay Maximum</strong> задает максимальное время случайной задержки (например, 2000 мс).</li>
                    <li>Параметр <strong>Constant Delay Offset</strong> добавляет постоянную задержку к случайной (например, если указано 1000 мс, итоговая задержка будет в диапазоне от 1000 до 3000 мс).</li>
                </ul>
            </li>

            <li><strong>Gaussian Random Timer</strong> — добавляет случайную задержку с нормальным распределением (распределение Гаусса).
                <ul>
                    <li>Параметр <strong>Deviation</strong> задает стандартное отклонение в миллисекундах.</li>
                    <li>Параметр <strong>Constant Delay Offset</strong> задает фиксированную задержку.</li>
                </ul>
            </li>

            <li><strong>JSR223 Timer</strong> — позволяет задавать задержку с помощью пользовательских скриптов на Groovy или BeanShell. Это полезно для создания уникальных алгоритмов задержек.</li>

            <li><strong>Synchronizing Timer</strong> — позволяет синхронизировать потоки так, чтобы они все отправляли запросы одновременно после определенной задержки.</li>
        </ul>

        <h3>Пример использования Constant Timer:</h3>
        <p>Для добавления 2-секундной задержки между каждым запросом:</p>
        <ul>
            <li>Добавьте <strong>Constant Timer</strong> в <strong>Thread Group</strong> или сэмплер.</li>
            <li>Укажите значение <strong>Thread Delay</strong> равное <code>2000</code>.</li>
            <li>JMeter будет ждать 2 секунды перед выполнением каждого запроса.</li>
        </ul>

        <h3>Пример использования Uniform Random Timer:</h3>
        <p>Чтобы настроить случайные задержки от 1 до 3 секунд между запросами:</p>
        <ul>
            <li>Добавьте <strong>Uniform Random Timer</strong>.</li>
            <li>Задайте <strong>Random Delay Maximum</strong> как <code>2000</code> (это добавит случайную задержку до 2 секунд).</li>
            <li>Задайте <strong>Constant Delay Offset</strong> как <code>1000</code> (это добавит фиксированную задержку в 1 секунду).</li>
        </ul>

        <h3>Зачем использовать Timer в тестах:</h3>
        <ul>
            <li>Для эмуляции реальных условий, где пользователи не отправляют запросы мгновенно один за другим.</li>
            <li>Для контроля нагрузки на сервер и избегания резких пиков запросов.</li>
            <li>Для тестирования поведения системы при разных временных задержках между запросами.</li>
        </ul>

        <p>Использование таймеров в JMeter позволяет моделировать более реалистичные сценарии нагрузки, что делает тесты ближе к поведению реальных пользователей.</p>
    `,category:"tools",tool:"jmeter"},{id:25,question:"Что такое конфигурационные элементы в JMeter и как они работают?",answer:`
        <p><strong>Конфигурационные элементы</strong> в JMeter — это компоненты, которые используются для установки общих параметров, влияющих на выполнение сэмплеров. Эти элементы не отправляют запросы напрямую, но они могут добавлять, изменять или настраивать данные, которые будут использованы в запросах.</p>

        <h3>Как работают конфигурационные элементы:</h3>
        <p>Конфигурационные элементы предоставляют настройки для сэмплеров, контроллеров и других тестовых элементов. Они могут быть использованы для задания значений по умолчанию для определенных параметров (например, URL или заголовков), установки переменных или подключения к базам данных. Конфигурационные элементы активны только в пределах их области (scope) и могут оказывать влияние на дочерние элементы в дереве теста.</p>

        <h3>Типы конфигурационных элементов в JMeter:</h3>
        <ul>
            <li><strong>HTTP Request Defaults</strong> — задает параметры по умолчанию для HTTP-запросов, такие как сервер, порт, протокол. Если несколько запросов используют одни и те же настройки (например, один сервер), этот элемент позволяет избежать повторного указания этих данных для каждого запроса.</li>

            <li><strong>CSV Data Set Config</strong> — используется для параметризации данных в тесте. Он позволяет загружать данные из CSV-файла (например, логины и пароли) и передавать их в сэмплеры для выполнения тестов с разными входными данными.</li>

            <li><strong>JDBC Connection Configuration</strong> — элемент, используемый для настройки соединения с базой данных через JDBC. После настройки соединения можно выполнять SQL-запросы с помощью <strong>JDBC Request</strong>.</li>

            <li><strong>HTTP Header Manager</strong> — позволяет задавать HTTP-заголовки для запросов, такие как Content-Type, Authorization, User-Agent и другие. Это важно для работы с API, которые требуют аутентификации или специфичных заголовков.</li>

            <li><strong>HTTP Cookie Manager</strong> — управляет cookie, полученными от сервера, и автоматически отправляет их в следующих запросах, что позволяет эмулировать поведение браузера с использованием сессий.</li>

            <li><strong>User Defined Variables</strong> — позволяет задавать переменные, которые можно использовать в разных частях теста. Эти переменные можно использовать в сэмплерах и других элементах теста с помощью синтаксиса <code>($){variable_name}</code>.</li>

            <li><strong>DNS Cache Manager</strong> — управляет кешированием DNS-запросов для того, чтобы избежать повторных запросов к DNS-серверу, улучшая производительность тестов.</li>

            <li><strong>Login Config Element</strong> — элемент для настройки логина, который может быть использован для аутентификации в запросах, особенно при тестировании веб-сайтов с авторизацией.</li>
        </ul>

        <h3>Пример использования HTTP Request Defaults:</h3>
        <p>Допустим, у вас несколько запросов к одному и тому же серверу (например, <code>https://api.example.com</code>), и вы хотите избежать указания адреса в каждом запросе. Для этого:
        <ul>
            <li>Добавьте <strong>HTTP Request Defaults</strong> в ваш тестовый план.</li>
            <li>Укажите значения по умолчанию для сервера, порта, протокола и других параметров.</li>
            <li>Теперь все HTTP-запросы внутри теста будут использовать эти значения по умолчанию, если они не переопределены на уровне сэмплера.</li>
        </ul></p>

        <h3>Как работает область видимости (Scope):</h3>
        <p>Конфигурационные элементы применяются ко всем сэмплерам и контроллерам, которые находятся внутри той же ветки дерева теста. Если конфигурационный элемент находится на уровне <strong>Thread Group</strong>, его настройки будут применяться ко всем запросам внутри этой группы.</p>

        <h3>Зачем использовать конфигурационные элементы:</h3>
        <ul>
            <li>Для упрощения настройки тестов и уменьшения дублирования параметров (например, сервера, заголовков, данных).</li>
            <li>Для параметризации данных и создания динамических тестов, которые могут использовать разные наборы входных данных.</li>
            <li>Для улучшения производительности тестов, например, с помощью кеширования DNS-запросов.</li>
        </ul>

        <p>Конфигурационные элементы в JMeter помогают гибко настраивать тесты, управлять данными и делать тестовые сценарии более удобными и эффективными.</p>
    `,category:"tools",tool:"jmeter"},{id:26,question:"Как использовать CSV Data Set Config для параметризации данных в тесте JMeter?",answer:`
        <p><strong>CSV Data Set Config</strong> — это конфигурационный элемент в JMeter, который позволяет параметризировать тестовые данные, загружая их из CSV-файла. Этот элемент особенно полезен, когда нужно использовать разные наборы данных (например, логины, пароли, или другие параметры) для каждого запроса или каждого пользователя в тесте.</p>

        <h3>Шаги для использования CSV Data Set Config:</h3>
        <ol>
            <li>Подготовьте <strong>CSV-файл</strong> с тестовыми данными. Например, создайте файл <code>users.csv</code>, содержащий следующие данные:
                <pre><code>username,password
user1,password1
user2,password2
user3,password3</code></pre>
            </li>
            <li>Добавьте <strong>CSV Data Set Config</strong> в тестовый план:
                <ul>
                    <li>Щелкните правой кнопкой на <strong>Thread Group</strong> → <strong>Add</strong> → <strong>Config Element</strong> → <strong>CSV Data Set Config</strong>.</li>
                </ul>
            </li>
            <li>Настройте параметры CSV Data Set Config:
                <ul>
                    <li><strong>Filename</strong>: укажите путь к вашему CSV-файлу (например, <code>/path/to/users.csv</code>).</li>
                    <li><strong>Variable Names</strong>: укажите имена переменных, которые будут связаны с колонками из CSV-файла (например, <code>username,password</code>).</li>
                    <li><strong>Delimiter</strong>: укажите разделитель, который используется в вашем файле (по умолчанию это запятая).</li>
                    <li><strong>Recycle on EOF</strong>: выберите <code>true</code>, если вы хотите, чтобы данные использовались повторно после достижения конца файла.</li>
                    <li><strong>Stop Thread on EOF</strong>: выберите <code>true</code>, если вы хотите, чтобы поток завершался при достижении конца файла.</li>
                    <li><strong>Sharing Mode</strong>: выберите, как данные будут использоваться между потоками (например, <strong>All Threads</strong> или <strong>Current Thread</strong>).</li>
                </ul>
            </li>
            <li>Используйте переменные из CSV Data Set Config в запросах:
                <ul>
                    <li>Добавьте HTTP-запрос или другой сэмплер в тестовый план.</li>
                    <li>Используйте переменные, указанные в CSV Data Set Config, в сэмплере. Например:
                        <pre><code>POST /api/login
                Content-Type: application/json

                {
                    "username": "($){username}",
                    "password": "($){password}"
                }</code></pre>
                    </li>
                </ul>
            </li>
        </ol>

        <h3>Параметры CSV Data Set Config:</h3>
        <ul>
            <li><strong>Filename</strong> — путь к CSV-файлу с данными.</li>
            <li><strong>Variable Names</strong> — имена переменных, соответствующих столбцам CSV-файла.</li>
            <li><strong>Delimiter</strong> — разделитель, используемый в файле (например, запятая или точка с запятой).</li>
            <li><strong>Recycle on EOF</strong> — указывает, следует ли повторно использовать данные после завершения файла.</li>
            <li><strong>Stop Thread on EOF</strong> — завершить поток при достижении конца файла.</li>
            <li><strong>Sharing Mode</strong> — определяет, как данные будут использоваться между потоками (для всех потоков, для текущего потока и т.д.).</li>
        </ul>

        <h3>Пример использования:</h3>
        <p>Допустим, у вас есть API, которое нужно протестировать с разными учетными данными. Вы создаете CSV-файл <code>users.csv</code> с логинами и паролями, а затем используете <strong>CSV Data Set Config</strong>, чтобы передавать эти данные в HTTP-запросы. При каждом запуске теста JMeter автоматически подставляет новые значения логинов и паролей из CSV-файла, создавая сценарий с параметризацией данных.</p>

        <p>Таким образом, <strong>CSV Data Set Config</strong> позволяет динамически передавать данные в тесты, что делает их более гибкими и масштабируемыми для выполнения нагрузочного тестирования с различными входными параметрами.</p>
    `,category:"tools",tool:"jmeter"},{id:27,question:"Что такое Post Processor и Pre Processor в JMeter? Примеры использования.",answer:`
        <p><strong>CSV Data Set Config</strong> — это конфигурационный элемент в JMeter, который используется для параметризации тестовых данных, загружая их из CSV-файла. Это полезно при тестировании, когда нужно передавать различные значения параметров (например, логины и пароли) для каждого запроса или пользователя.</p>

        <h3>Шаги для использования CSV Data Set Config:</h3>
        <ol>
            <li>Подготовьте <strong>CSV-файл</strong> с тестовыми данными. Например, создайте файл <code>data.csv</code>, содержащий следующие данные:
                <pre><code>username,password
user1,password1
user2,password2
user3,password3</code></pre>
            </li>
            <li>Добавьте <strong>CSV Data Set Config</strong> в тестовый план:
                <ul>
                    <li>Щелкните правой кнопкой на <strong>Thread Group</strong> → <strong>Add</strong> → <strong>Config Element</strong> → <strong>CSV Data Set Config</strong>.</li>
                </ul>
            </li>
            <li>Настройте параметры CSV Data Set Config:
                <ul>
                    <li><strong>Filename</strong>: укажите путь к вашему CSV-файлу (например, <code>data.csv</code>).</li>
                    <li><strong>Variable Names</strong>: укажите имена переменных, которые будут связаны с колонками из CSV-файла (например, <code>username,password</code>).</li>
                    <li><strong>Delimiter</strong>: укажите разделитель, который используется в вашем файле (например, запятая).</li>
                    <li><strong>Recycle on EOF</strong>: выберите <code>true</code>, если хотите, чтобы данные использовались повторно после достижения конца файла.</li>
                    <li><strong>Stop Thread on EOF</strong>: выберите <code>true</code>, если хотите завершить поток при достижении конца файла.</li>
                    <li><strong>Sharing Mode</strong>: выберите режим использования данных между потоками (например, <strong>All Threads</strong> для всех потоков или <strong>Current Thread</strong> для текущего потока).</li>
                </ul>
            </li>
            <li>Используйте переменные из CSV Data Set Config в сэмплерах:
                <ul>
                    <li>Добавьте HTTP Request или другой сэмплер.</li>
                    <li>Используйте переменные, определенные в CSV Data Set Config, в параметрах запроса. Например:
                        <pre><code>{
    "username": "($){username}",
    "password": "($){password}"
}</code></pre>
                    </li>
                </ul>
            </li>
        </ol>

        <h3>Как работает CSV Data Set Config:</h3>
        <p>Элемент <strong>CSV Data Set Config</strong> загружает данные из указанного CSV-файла и передает их в виде переменных JMeter в каждый запрос. Например, если ваш файл содержит список пользователей и паролей, каждый новый поток или запрос может использовать разные учетные данные из этого файла, что позволяет динамически изменять параметры запроса.</p>

        <h3>Параметры CSV Data Set Config:</h3>
        <ul>
            <li><strong>Filename</strong> — путь к CSV-файлу.</li>
            <li><strong>Variable Names</strong> — имена переменных, которые будут использоваться для каждого столбца данных.</li>
            <li><strong>Delimiter</strong> — разделитель между столбцами данных (например, запятая или точка с запятой).</li>
            <li><strong>Recycle on EOF</strong> — параметр, который указывает, следует ли использовать данные повторно, когда файл достигнет конца.</li>
            <li><strong>Stop Thread on EOF</strong> — параметр, который завершает поток при достижении конца файла.</li>
            <li><strong>Sharing Mode</strong> — определяет, как данные будут использоваться между потоками (например, для всех потоков или для каждого потока отдельно).</li>
        </ul>

        <h3>Пример использования:</h3>
        <p>Предположим, что вы тестируете API с логином и паролем, которые хранятся в CSV-файле. Вы можете создать <strong>CSV Data Set Config</strong>, указать файл с данными и переменные для логина и пароля, а затем использовать эти переменные в HTTP-запросах для каждого нового пользователя. Это позволяет динамически менять данные при каждом выполнении теста, что делает нагрузочные тесты более реалистичными.</p>
    `,category:"tools",tool:"jmeter"},{id:28,question:"Как использовать JMeter для тестирования производительности базы данных (JDBC Sampler)?",answer:`
        <p><strong>JDBC Sampler</strong> в JMeter используется для тестирования производительности баз данных, выполняя SQL-запросы и измеряя время отклика сервера базы данных. С помощью JDBC Sampler можно эмулировать различные сценарии работы с базой данных, включая выполнение SELECT, INSERT, UPDATE и DELETE запросов.</p>

        <h3>Шаги для настройки JDBC Sampler в JMeter:</h3>
        <ol>
            <li>Добавьте <strong>JDBC Connection Configuration</strong>:
                <ul>
                    <li>Щелкните правой кнопкой на <strong>Thread Group</strong> → <strong>Add</strong> → <strong>Config Element</strong> → <strong>JDBC Connection Configuration</strong>.</li>
                    <li>В поле <strong>Variable Name</strong> задайте имя переменной, которое будет использоваться для идентификации соединения с базой данных (например, <code>mydb</code>).</li>
                    <li>Укажите параметры подключения к базе данных:
                        <ul>
                            <li><strong>Database URL</strong>: укажите URL подключения к базе данных, например, <code>jdbc:mysql://localhost:3306/mydb</code>.</li>
                            <li><strong>JDBC Driver Class</strong>: укажите полный путь к классу драйвера JDBC, например, <code>com.mysql.cj.jdbc.Driver</code> для MySQL.</li>
                            <li><strong>Username</strong> и <strong>Password</strong>: укажите учетные данные для подключения к базе данных.</li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li>Добавьте <strong>JDBC Request Sampler</strong>:
                <ul>
                    <li>Щелкните правой кнопкой на <strong>Thread Group</strong> → <strong>Add</strong> → <strong>Sampler</strong> → <strong>JDBC Request</strong>.</li>
                    <li>Выберите ранее созданную переменную соединения (например, <code>mydb</code>) в поле <strong>Variable Name</strong>.</li>
                    <li>Укажите тип SQL-запроса, который будет выполнен (например, <strong>SELECT</strong>, <strong>INSERT</strong>, <strong>UPDATE</strong>, <strong>DELETE</strong>).</li>
                    <li>Введите SQL-запрос в поле <strong>SQL Query</strong>, например:
                        <pre><code>SELECT * FROM users WHERE id = 1</code></pre>
                    </li>
                    <li>Настройте параметры:
                        <ul>
                            <li><strong>Parameter Values</strong>: укажите значения параметров для параметризованных запросов (например, <code>1</code> для <code>id = ?</code>).</li>
                            <li><strong>Parameter Types</strong>: укажите типы параметров (например, <code>INTEGER</code>).</li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li>Добавьте <strong>Listener</strong> для просмотра результатов:
                <ul>
                    <li>Щелкните правой кнопкой на <strong>Thread Group</strong> → <strong>Add</strong> → <strong>Listener</strong> → <strong>View Results Tree</strong> или <strong>Summary Report</strong>.</li>
                </ul>
            </li>
            <li>Запустите тест:
                <ul>
                    <li>Нажмите кнопку <strong>Start</strong> для запуска теста.</li>
                    <li>Результаты выполнения SQL-запросов будут отображаться в листенере.</li>
                </ul>
            </li>
        </ol>

        <h3>Ключевые параметры JDBC Sampler:</h3>
        <ul>
            <li><strong>Variable Name</strong> — имя переменной, связанное с соединением базы данных (должно совпадать с именем в JDBC Connection Configuration).</li>
            <li><strong>Query Type</strong> — тип SQL-запроса (например, <code>SELECT</code>, <code>INSERT</code>, <code>UPDATE</code>, <code>DELETE</code>).</li>
            <li><strong>SQL Query</strong> — SQL-запрос, который будет выполнен на сервере базы данных.</li>
            <li><strong>Parameter Values</strong> — значения параметров для параметризованных запросов.</li>
            <li><strong>Parameter Types</strong> — типы данных для параметров SQL-запроса (например, <code>INTEGER</code>, <code>VARCHAR</code>).</li>
        </ul>

        <h3>Пример использования:</h3>
        <p>Предположим, вам нужно протестировать производительность базы данных MySQL при выполнении запросов на выборку данных. Для этого вы создаете <strong>JDBC Connection Configuration</strong> для подключения к базе данных, а затем добавляете <strong>JDBC Sampler</strong>, в котором указываете SQL-запрос для выборки данных. Каждый запрос, выполняемый в JMeter, будет замерять время отклика базы данных, что позволит оценить её производительность при высокой нагрузке.</p>

        <p>Таким образом, <strong>JDBC Sampler</strong> в JMeter позволяет тестировать производительность баз данных, измерять время отклика и анализировать поведение базы данных под различными нагрузками.</p>
    `,category:"tools",tool:"jmeter"},{id:29,question:"Как настроить запуск теста с удаленных серверов в распределенном режиме в JMeter?",answer:`
        <p><strong>Распределенное тестирование</strong> в JMeter позволяет запускать тестовые сценарии с нескольких удаленных серверов (JMeter slave-агентов), что помогает создать большую нагрузку на систему и эффективно распределить вычислительные ресурсы.</p>

        <h3>Шаги для настройки распределенного тестирования в JMeter:</h3>
        <ol>
            <li>Настройка серверов (slave):
                <ul>
                    <li>На каждом удаленном сервере (slave) установите JMeter. Убедитесь, что версии JMeter на всех машинах одинаковы.</li>
                    <li>Откройте файл <code>jmeter.properties</code>, который находится в каталоге <code>bin</code> JMeter.</li>
                    <li>Найдите параметр <code>server.rmi.ssl.disable</code> и установите его в значение <code>true</code>:
                        <pre><code>server.rmi.ssl.disable=true</code></pre>
                        Это отключит SSL для удаленных серверов и упростит конфигурацию.
                    </li>
                    <li>Запустите JMeter в режиме сервера на каждом slave-сервере, выполнив следующую команду в каталоге <code>bin</code>:
                        <pre><code>./jmeter-server</code></pre>
                        (Для Windows используйте команду <code>jmeter-server.bat</code>).
                    </li>
                </ul>
            </li>
            <li>Настройка главного сервера (master):
                <ul>
                    <li>На машине master (с которой будет запускаться тест) установите JMeter.</li>
                    <li>Откройте файл <code>jmeter.properties</code> и добавьте IP-адреса всех slave-серверов в параметр <code>remote_hosts</code>:
                        <pre><code>remote_hosts=192.168.0.2,192.168.0.3</code></pre>
                        Замените IP-адреса на IP-адреса ваших slave-серверов.
                    </li>
                    <li>Если используете DNS-имена вместо IP-адресов, добавьте их в этот параметр:
                        <pre><code>remote_hosts=slave1.example.com,slave2.example.com</code></pre>
                    </li>
                </ul>
            </li>
            <li>Запуск теста:
                <ul>
                    <li>Запустите JMeter на главной машине в графическом режиме (GUI). Вы можете сделать это с помощью команды:
                        <pre><code>./jmeter</code></pre>
                    </li>
                    <li>Настройте тестовый план как обычно.</li>
                    <li>Для запуска теста на удаленных серверах выберите пункт меню <strong>Run</strong> → <strong>Remote Start</strong> и выберите нужные slave-серверы.</li>
                    <li>Вы также можете выбрать <strong>Run</strong> → <strong>Remote Start All</strong>, чтобы запустить тест на всех указанных slave-серверах.</li>
                </ul>
            </li>
        </ol>

        <h3>Ключевые моменты:</h3>
        <ul>
            <li>Все машины (как master, так и slave) должны иметь одинаковые версии JMeter и Java.</li>
            <li>Убедитесь, что порты 1099 и 60000-60002 открыты на всех slave-серверах, так как они используются для связи между master и slave.</li>
            <li>Распределенное тестирование помогает значительно увеличить нагрузку на систему, распределяя тестовые запросы между несколькими машинами.</li>
        </ul>

        <h3>Пример:</h3>
        <p>Предположим, у вас есть два slave-сервера с IP-адресами <code>192.168.0.2</code> и <code>192.168.0.3</code>. Вы можете настроить <strong>remote_hosts</strong> на главной машине следующим образом:
            <pre><code>remote_hosts=192.168.0.2,192.168.0.3</code></pre>
            После этого вы можете запустить тест на обоих серверах, выбрав <strong>Remote Start All</strong> в JMeter, что позволит выполнять тест с обеих машин одновременно и собирать результаты.</p>
    `,category:"tools",tool:"jmeter"},{id:30,question:"Что такое BeanShell Sampler в JMeter и для чего он используется?",answer:`
        <p><strong>BeanShell Sampler</strong> — это мощный элемент JMeter, который позволяет выполнять скрипты на языке <strong>BeanShell</strong>, основанном на Java. Он используется для выполнения произвольного кода, который может включать любую логику, требуемую для теста. Это полезно для задач, которые нельзя выполнить стандартными сэмплерами JMeter.</p>

        <h3>Применение BeanShell Sampler:</h3>
        <ul>
            <li>Выполнение сложных вычислений, которые невозможно реализовать стандартными средствами JMeter.</li>
            <li>Интеракция с внешними системами, используя произвольный Java-код (например, выполнение кастомных HTTP-запросов или взаимодействие с базой данных).</li>
            <li>Создание, модификация и чтение переменных JMeter для последующего использования в других сэмплерах или элементах теста.</li>
            <li>Логирование и отладка данных во время выполнения теста.</li>
        </ul>

        <h3>Шаги для использования BeanShell Sampler:</h3>
        <ol>
            <li>Добавьте BeanShell Sampler:
                <ul>
                    <li>Щелкните правой кнопкой на <strong>Thread Group</strong> → <strong>Add</strong> → <strong>Sampler</strong> → <strong>BeanShell Sampler</strong>.</li>
                </ul>
            </li>
            <li>Напишите BeanShell-скрипт:
                <ul>
                    <li>В поле <strong>Script</strong> напишите код на языке BeanShell. Например, следующий код генерирует случайное число и сохраняет его в переменную JMeter:
                        <pre><code>int randomNumber = (int)(Math.random() * 1000);
vars.put("randomNumber", Integer.toString(randomNumber));</code></pre>
                    </li>
                    <li>Этот скрипт создает случайное число от 0 до 1000 и сохраняет его в переменную <code>randomNumber</code>, которую можно использовать в других сэмплерах.</li>
                </ul>
            </li>
            <li>Используйте переменные JMeter:
                <ul>
                    <li>BeanShell Sampler поддерживает переменные JMeter. Например, для получения значения переменной <code>username</code> можно использовать следующий код:
                        <pre><code>String username = vars.get("username");</code></pre>
                    </li>
                    <li>Для логирования сообщений можно использовать:
                        <pre><code>log.info("Тестовое сообщение");</code></pre>
                    </li>
                </ul>
            </li>
        </ol>

        <h3>Ключевые параметры BeanShell Sampler:</h3>
        <ul>
            <li><strong>Script</strong> — поле для написания BeanShell-скрипта. В этом поле можно использовать стандартный Java-код и встроенные переменные JMeter.</li>
            <li><strong>Parameters</strong> — передача параметров в скрипт BeanShell.</li>
            <li><strong>Reset bsh.Interpreter</strong> — сброс интерпретатора перед каждым вызовом, что помогает управлять памятью при повторных вызовах.</li>
        </ul>

        <h3>Пример использования BeanShell Sampler:</h3>
        <p>Допустим, вам нужно выполнить SQL-запрос к базе данных, но стандартные JDBC-сэмплеры JMeter не подходят для вашего случая. Вы можете написать кастомный Java-код в BeanShell Sampler для выполнения SQL-запроса, обработки результата и сохранения его в переменные JMeter для последующего использования в тесте.</p>
    `,category:"tools",tool:"jmeter"},{id:31,question:"Как происходит сбор и анализ метрик с использованием JMeter и внешних инструментов (например, InfluxDB или Grafana)?",answer:`
        <p>Сбор и анализ метрик в JMeter можно выполнять с помощью внешних инструментов, таких как <strong>InfluxDB</strong> и <strong>Grafana</strong>. Это позволяет собирать данные о тестах в реальном времени и визуализировать их для более глубокого анализа производительности системы.</p>

        <h3>Шаги для настройки JMeter с InfluxDB и Grafana:</h3>
        <ol>
            <li>Настройка InfluxDB:
                <ul>
                    <li>Установите и настройте <strong>InfluxDB</strong> на вашем сервере. InfluxDB используется для хранения временных рядов метрик, таких как время отклика, количество запросов и другие параметры.</li>
                    <li>Создайте базу данных для метрик JMeter. Выполните команду в консоли InfluxDB:
                        <pre><code>CREATE DATABASE jmeter</code></pre>
                    </li>
                </ul>
            </li>
            <li>Настройка JMeter для отправки данных в InfluxDB:
                <ul>
                    <li>Добавьте <strong>Backend Listener</strong> в JMeter:
                        <ul>
                            <li>Щелкните правой кнопкой мыши на <strong>Thread Group</strong> → <strong>Add</strong> → <strong>Listener</strong> → <strong>Backend Listener</strong>.</li>
                            <li>В поле <strong>Backend Listener implementation</strong> выберите <strong>InfluxDBBackendListenerClient</strong>.</li>
                        </ul>
                    </li>
                    <li>Настройте параметры Backend Listener:
                        <ul>
                            <li><strong>influxdbUrl</strong> — URL сервера InfluxDB (например, <code>http://localhost:8086/write?db=jmeter</code>).</li>
                            <li><strong>application</strong> — имя приложения (например, <code>JMeterTest</code>).</li>
                            <li><strong>measurement</strong> — название измерения (например, <code>performance</code>).</li>
                            <li><strong>testTitle</strong> — имя теста.</li>
                            <li><strong>summaryOnly</strong> — отправлять только сводные данные (значение <code>false</code> отправит детализированные данные).</li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li>Настройка Grafana для визуализации данных:
                <ul>
                    <li>Установите и настройте <strong>Grafana</strong> для подключения к InfluxDB:
                        <ul>
                            <li>Откройте Grafana и добавьте <strong>Data Source</strong> для InfluxDB:
                                <ul>
                                    <li>Перейдите в раздел <strong>Configuration</strong> → <strong>Data Sources</strong> → <strong>Add Data Source</strong>.</li>
                                    <li>Выберите <strong>InfluxDB</strong> и укажите URL вашего сервера InfluxDB (например, <code>http://localhost:8086</code>).</li>
                                    <li>Укажите базу данных (например, <code>jmeter</code>).</li>
                                </ul>
                            </li>
                            <li>Настройте дашборды для отображения метрик:
                                <ul>
                                    <li>Создайте новый дашборд, добавьте панели для визуализации метрик, таких как время отклика, количество запросов, ошибки и другие параметры.</li>
                                    <li>Используйте графики, диаграммы и другие виды визуализаций для анализа производительности системы.</li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li>Запуск теста:
                <ul>
                    <li>Запустите тест в JMeter. Все метрики (время отклика, пропускная способность, количество запросов и ошибок) будут автоматически отправляться в InfluxDB через <strong>Backend Listener</strong>.</li>
                    <li>Вы можете наблюдать метрики в реальном времени на дашборде Grafana.</li>
                </ul>
            </li>
        </ol>

        <h3>Ключевые метрики, которые можно отслеживать в Grafana:</h3>
        <ul>
            <li><strong>Время отклика (Response Time)</strong> — показывает, сколько времени система отвечает на запросы.</li>
            <li><strong>Пропускная способность (Throughput)</strong> — количество запросов, обработанных системой в секунду.</li>
            <li><strong>Процент ошибок (Error Rate)</strong> — процент запросов, завершившихся с ошибками.</li>
            <li><strong>Активные потоки (Active Threads)</strong> — количество виртуальных пользователей, выполняющих тесты в данный момент.</li>
        </ul>

        <h3>Пример использования:</h3>
        <p>Допустим, вы тестируете производительность веб-приложения под нагрузкой с 1000 виртуальными пользователями. Вы добавляете <strong>Backend Listener</strong> в JMeter, чтобы отправлять метрики в InfluxDB. Затем вы настраиваете Grafana для визуализации таких параметров, как время отклика и процент ошибок. Во время теста вы можете наблюдать в реальном времени, как изменяется производительность системы при увеличении нагрузки.</p>

        <p>Таким образом, использование JMeter с InfluxDB и Grafana позволяет собирать, хранить и визуализировать метрики тестирования производительности, что делает анализ данных более наглядным и эффективным.</p>
    `,category:"tools",tool:"jmeter"},{id:32,question:"Какие параметры нужно учитывать для проведения нагрузочного тестирования в JMeter?",answer:`
        <p>При проведении нагрузочного тестирования в JMeter необходимо учитывать несколько ключевых параметров, которые помогут корректно спланировать тест и добиться адекватных результатов.</p>

        <h3>Основные параметры для настройки нагрузочного тестирования:</h3>
        <ol>
            <li><strong>Количество потоков (Threads)</strong>:
                <ul>
                    <li>Этот параметр задает число виртуальных пользователей, которые будут эмулированы во время теста. Количество потоков определяется в <strong>Thread Group</strong>.</li>
                    <li>Чем больше потоков, тем больше нагрузки на тестируемую систему.</li>
                </ul>
            </li>
            <li><strong>Период разгона (Ramp-up Period)</strong>:
                <ul>
                    <li>Задает время, в течение которого все потоки будут запущены. Например, если у вас 100 потоков и период разгона 100 секунд, то каждые 1 секунду будет запускаться 1 поток.</li>
                    <li>Этот параметр помогает избежать мгновенной максимальной нагрузки на систему и позволяет постепенно увеличивать количество запросов.</li>
                </ul>
            </li>
            <li><strong>Количество итераций (Loop Count)</strong>:
                <ul>
                    <li>Количество циклов, которое каждый поток выполнит за тестовую сессию. Этот параметр определяет, сколько раз каждый виртуальный пользователь выполнит тестовый план.</li>
                    <li>При установке опции "Forever" тест будет выполняться до его явной остановки.</li>
                </ul>
            </li>
            <li><strong>Продолжительность теста (Duration)</strong>:
                <ul>
                    <li>Время, в течение которого будет выполняться тест. Устанавливается через планировщик <strong>Scheduler</strong> в параметрах <strong>Thread Group</strong>.</li>
                    <li>Использование продолжительности позволяет тесту выполняться в течение заранее определенного времени, независимо от количества итераций.</li>
                </ul>
            </li>
            <li><strong>Время задержки между запросами (Timers)</strong>:
                <ul>
                    <li>Этот параметр добавляет паузы между выполнением запросов. Использование таймеров делает сценарий более реалистичным, моделируя реальные задержки между действиями пользователя.</li>
                    <li>Примеры таймеров: <strong>Constant Timer</strong>, <strong>Uniform Random Timer</strong>, <strong>Gaussian Random Timer</strong>.</li>
                </ul>
            </li>
            <li><strong>Тип и количество запросов (Samplers)</strong>:
                <ul>
                    <li>Определяет, какие действия выполняются виртуальными пользователями. Например, это могут быть HTTP-запросы, JDBC-запросы к базе данных или FTP-запросы.</li>
                    <li>Количество запросов и их тип оказывают влияние на нагрузку на систему.</li>
                </ul>
            </li>
            <li><strong>Проверка ответов (Assertions)</strong>:
                <ul>
                    <li>Используйте Assertions для проверки корректности ответов от сервера (например, проверка кода ответа или содержания текста в ответе).</li>
                    <li>Assertions помогают убедиться, что система возвращает правильные ответы даже при высокой нагрузке.</li>
                </ul>
            </li>
            <li><strong>Обработка сессий (Cookie Manager, Cache Manager)</strong>:
                <ul>
                    <li>Если ваша система использует куки для управления сессиями, добавьте <strong>HTTP Cookie Manager</strong>, чтобы обеспечить сохранение сессионных данных между запросами.</li>
                    <li><strong>Cache Manager</strong> помогает имитировать кеширование браузера, что делает тестирование более приближенным к реальным условиям.</li>
                </ul>
            </li>
            <li><strong>Ограничения производительности (Listeners)</strong>:
                <ul>
                    <li>Используйте различные листенеры (например, <strong>View Results Tree</strong>, <strong>Aggregate Report</strong>, <strong>Summary Report</strong>), чтобы собирать и анализировать метрики производительности, такие как время отклика, пропускная способность, процент ошибок.</li>
                </ul>
            </li>
            <li><strong>Динамические данные и параметризация (CSV Data Set Config)</strong>:
                <ul>
                    <li>Если ваш тест требует передачи динамических данных (например, различные логины пользователей или уникальные запросы), используйте <strong>CSV Data Set Config</strong> для параметризации данных.</li>
                    <li>Это помогает избежать передачи одних и тех же данных при каждом запросе, что делает тесты более реалистичными.</li>
                </ul>
            </li>
            <li><strong>Объем передаваемых данных</strong>:
                <ul>
                    <li>Размер данных, отправляемых в запросах и получаемых в ответах, влияет на нагрузку на сервер и сеть. Следите за тем, чтобы объем данных был реалистичным.</li>
                </ul>
            </li>
            <li><strong>Распределенное тестирование</strong>:
                <ul>
                    <li>Если требуется создать высокую нагрузку, распределите тесты между несколькими машинами с использованием распределенного тестирования JMeter. Это позволяет создать большую нагрузку на тестируемую систему.</li>
                </ul>
            </li>
        </ol>

        <h3>Пример настройки теста:</h3>
        <p>Допустим, вы тестируете веб-приложение с 1000 виртуальными пользователями, выполняющими действия в течение 30 минут. Для этого можно настроить <strong>Thread Group</strong> с 1000 потоками, периодом разгона 100 секунд (10 потоков запускаются каждую секунду) и продолжительностью 1800 секунд. Используя таймеры для моделирования пауз между действиями, а также листенеры для сбора метрик, можно получить точное представление о производительности системы под нагрузкой.</p>
    `,category:"tools",tool:"jmeter"},{id:33,question:"Как работает автообновление параметров в JMeter при изменении данных?",answer:`
        <p>В JMeter автообновление параметров при изменении данных может быть реализовано с помощью различных механизмов, таких как использование переменных, функций и конфигурационных элементов. Эти инструменты позволяют динамически изменять параметры теста без необходимости ручного вмешательства в тестовый план. Вот несколько способов, как это можно организовать:</p>

        <h3>1. Использование переменных JMeter:</h3>
        <ul>
            <li>JMeter поддерживает <strong>переменные</strong>, которые могут динамически изменяться во время выполнения теста. Например, можно использовать переменные, чтобы динамически задавать параметры запроса (URL, параметры запросов, заголовки и т.д.).</li>
            <li>Для обновления значений переменных используются различные функции JMeter, такие как <strong>\${__Random()}</strong> для генерации случайных значений или <strong>\${__time()}</strong> для получения текущего времени.</li>
            <li>Переменные могут быть объявлены в конфигурационных элементах (например, <strong>User Defined Variables</strong>), или их значения могут обновляться в процессе теста с помощью <strong>Post-Processors</strong> или <strong>Pre-Processors</strong>.</li>
        </ul>

        <h3>2. Обновление параметров с помощью CSV Data Set Config:</h3>
        <ul>
            <li><strong>CSV Data Set Config</strong> позволяет загружать данные из внешнего CSV-файла, что делает параметры теста динамически изменяемыми. Каждый новый запрос может использовать новые значения из файла, обновляя параметры автоматически при каждой итерации.</li>
            <li>Этот подход часто используется для параметризации данных, таких как логины пользователей или уникальные параметры запросов, что делает тесты более реалистичными.</li>
        </ul>

        <h3>3. Использование функций JMeter:</h3>
        <ul>
            <li>JMeter поддерживает различные встроенные функции, такие как <strong>\${__Random()}</strong>, <strong>\${__time()}</strong>, <strong>\${__UUID()}</strong>, которые позволяют генерировать случайные значения, даты, уникальные идентификаторы и многое другое.</li>
            <li>Эти функции динамически вычисляют значения во время выполнения теста и автоматически обновляют параметры с каждым запросом или каждой итерацией.</li>
        </ul>

        <h3>4. BeanShell и JSR223 Samplers:</h3>
        <ul>
            <li>С помощью <strong>BeanShell</strong> и <strong>JSR223 Samplers</strong> можно использовать скрипты на Java, Groovy или других поддерживаемых языках для динамического обновления параметров в тесте.</li>
            <li>Эти скрипты могут, например, получать данные из базы данных, файлов или внешних систем и обновлять переменные JMeter для использования в следующих запросах.</li>
        </ul>

        <h3>5. Использование Post-Processors для обновления параметров:</h3>
        <ul>
            <li>Post-Processors, такие как <strong>Regular Expression Extractor</strong> или <strong>JSON Extractor</strong>, могут извлекать данные из ответов сервера и сохранять их в переменные JMeter.</li>
            <li>Эти переменные можно использовать в последующих запросах, что позволяет динамически обновлять параметры на основе предыдущих ответов сервера.</li>
        </ul>

        <h3>Пример:</h3>
        <p>Предположим, вам нужно протестировать веб-сайт, где каждому пользователю выдается уникальный идентификатор сессии. Вы можете использовать <strong>CSV Data Set Config</strong> для загрузки списка пользователей и <strong>JSON Extractor</strong> для извлечения идентификатора сессии из ответа сервера. Затем этот идентификатор можно использовать в последующих запросах, автоматически обновляя параметры теста при каждом выполнении.</p>

        <p>Таким образом, JMeter предоставляет множество инструментов для динамического обновления параметров теста, что делает нагрузочное тестирование гибким и более реалистичным.</p>
    `,category:"tools",tool:"jmeter"},{id:34,question:"Какие ошибки могут возникнуть при тестировании с использованием JMeter и как их избежать?",answer:`
        <p>При тестировании с использованием JMeter могут возникнуть различные ошибки, связанные как с настройкой тестов, так и с производительностью самого инструмента. Вот основные типы ошибок и рекомендации по их избеганию:</p>

        <h3>1. Ошибки в конфигурации тестового плана:</h3>
        <ul>
            <li><strong>Неправильная настройка Thread Group</strong>: неверное количество потоков (users), слишком короткий или длинный период разгона (Ramp-up period) могут привести к неадекватным результатам тестирования.
                <ul>
                    <li><strong>Решение</strong>: Настраивайте потоки и период разгона в зависимости от мощности тестируемой системы и задач. Обычно рекомендуется начинать с небольшого числа потоков и постепенно увеличивать нагрузку.</li>
                </ul>
            </li>
            <li><strong>Недостаточное использование таймеров</strong>: отсутствие задержек между запросами может привести к чрезмерной нагрузке на систему.
                <ul>
                    <li><strong>Решение</strong>: Используйте таймеры, такие как <strong>Constant Timer</strong> или <strong>Random Timer</strong>, для моделирования пауз между запросами.</li>
                </ul>
            </li>
            <li><strong>Отсутствие проверки ответов (Assertions)</strong>: если не используются проверки ответов, тест может считаться успешным даже при неправильных ответах сервера.
                <ul>
                    <li><strong>Решение</strong>: Добавляйте Assertions для проверки кода ответа, содержания тела ответа и других критичных параметров.</li>
                </ul>
            </li>
        </ul>

        <h3>2. Производственные ошибки:</h3>
        <ul>
            <li><strong>Недостаток системных ресурсов</strong>: при запуске теста с большим числом потоков (users) JMeter может потреблять слишком много памяти и CPU.
                <ul>
                    <li><strong>Решение</strong>: Следите за производительностью системы, на которой запущен JMeter. При необходимости используйте распределенное тестирование для разгрузки системы.</li>
                </ul>
            </li>
            <li><strong>Чрезмерное использование Listener'ов</strong>: если активно используются ресурсоемкие Listener'ы, такие как <strong>View Results Tree</strong>, это может привести к сильной загрузке памяти.
                <ul>
                    <li><strong>Решение</strong>: Отключайте тяжеловесные Listener'ы во время стресс-тестов и используйте их только на этапе отладки. Для анализа используйте менее ресурсоемкие элементы, такие как <strong>Summary Report</strong> или <strong>Aggregate Report</strong>.</li>
                </ul>
            </li>
        </ul>

        <h3>3. Ошибки, связанные с сетью и серверами:</h3>
        <ul>
            <li><strong>Потери соединения с сервером</strong>: при слишком высокой нагрузке на тестируемую систему могут возникать ошибки соединения или таймауты.
                <ul>
                    <li><strong>Решение</strong>: Убедитесь, что сервер может выдерживать запрашиваемую нагрузку, а также настраивайте таймауты для запросов и период разгона потоков для предотвращения резких нагрузок.</li>
                </ul>
            </li>
            <li><strong>Ошибки таймаутов</strong>: слишком короткие или длинные таймауты могут приводить к непредсказуемым результатам.
                <ul>
                    <li><strong>Решение</strong>: Настраивайте таймауты в зависимости от характеристик сервера и сети, чтобы избежать преждевременного обрыва соединений или неоправданного ожидания.</li>
                </ul>
            </li>
        </ul>

        <h3>4. Ошибки с обработкой данных:</h3>
        <ul>
            <li><strong>Некорректная параметризация</strong>: при использовании элементов, таких как <strong>CSV Data Set Config</strong>, неверная настройка параметров или путь к файлу могут привести к ошибкам или некорректным данным.
                <ul>
                    <li><strong>Решение</strong>: Убедитесь, что пути к файлам заданы корректно, а данные правильно структурированы и параметризованы.</li>
                </ul>
            </li>
            <li><strong>Неправильное использование переменных</strong>: ошибки в объявлении или использовании переменных могут приводить к неверным результатам теста.
                <ul>
                    <li><strong>Решение</strong>: Всегда проверяйте синтаксис переменных и следите за их корректным использованием в запросах и ответах.</li>
                </ul>
            </li>
        </ul>

        <h3>5. Проблемы с масштабируемостью тестов:</h3>
        <ul>
            <li><strong>Недостаточно данных для тестирования</strong>: если в тесте используются ограниченные данные (например, в параметризации через CSV), это может вызвать проблемы при масштабировании нагрузки.
                <ul>
                    <li><strong>Решение</strong>: Подготовьте достаточное количество данных для проведения масштабных тестов, чтобы избежать повторения одних и тех же данных.</li>
                </ul>
            </li>
            <li><strong>Использование однотипных сценариев</strong>: однотипные запросы от разных потоков могут не отражать реальную нагрузку на систему.
                <ul>
                    <li><strong>Решение</strong>: Разнообразьте сценарии тестирования, чтобы нагрузка была более реальной, и проверяйте разные аспекты системы.</li>
                </ul>
            </li>
        </ul>

        <h3>Заключение:</h3>
        <p>Для успешного проведения нагрузочного тестирования в JMeter важно правильно настраивать параметры теста, использовать адекватные ресурсы и избегать типичных ошибок. Следуя этим рекомендациям, вы сможете избежать большинства проблем и получить более точные результаты тестирования.</p>
    `,category:"tools",tool:"jmeter"},{id:35,question:"Как контролировать и уменьшать нагрузку на систему тестирования при большом количестве пользователей?",answer:`
        <p>Когда количество пользователей в тесте JMeter увеличивается, это может вызвать чрезмерную нагрузку на систему тестирования. Чтобы контролировать и уменьшить эту нагрузку, можно использовать несколько методов и настроек:</p>

        <h3>1. Оптимизация использования ресурсов JMeter:</h3>
        <ul>
            <li><strong>Отключение тяжелых Listener'ов</strong>: такие элементы, как <strong>View Results Tree</strong> или <strong>View Results in Table</strong>, требуют значительных ресурсов памяти и процессора. Отключите их во время массовых нагрузочных тестов и используйте их только для отладки или анализа небольших тестов.</li>
            <li><strong>Сбор метрик только в файлы</strong>: вместо отображения результатов в интерфейсе, используйте элементы типа <strong>Simple Data Writer</strong> для записи данных прямо в файлы.</li>
        </ul>

        <h3>2. Настройка таймеров:</h3>
        <ul>
            <li><strong>Использование Timers</strong>: добавляйте таймеры, такие как <strong>Constant Timer</strong> или <strong>Uniform Random Timer</strong>, чтобы распределить нагрузку по времени и избежать одновременных запросов от большого количества пользователей.</li>
            <li><strong>Плавное увеличение нагрузки</strong>: с помощью параметра <strong>Ramp-Up Period</strong> в Thread Group можно постепенно увеличивать количество пользователей за заданный промежуток времени, что позволит избежать резких скачков нагрузки на тестируемую систему.</li>
        </ul>

        <h3>3. Использование распределенного тестирования:</h3>
        <ul>
            <li><strong>Распределение нагрузки</strong>: JMeter поддерживает распределенное тестирование, что позволяет запускать тесты на нескольких серверах (slave), которые передают результаты на главный сервер (master). Это позволяет распределить нагрузку между несколькими машинами и снизить нагрузку на одну систему.</li>
            <li><strong>Запуск JMeter в режиме без графического интерфейса (headless)</strong>: при запуске тестов с большого количества пользователей используйте JMeter в консольном режиме (<strong>non-GUI mode</strong>), что значительно снижает потребление ресурсов по сравнению с графическим интерфейсом.</li>
        </ul>

        <h3>4. Оптимизация настроек JVM:</h3>
        <ul>
            <li><strong>Увеличение выделенной памяти</strong>: при работе с большим количеством пользователей необходимо увеличить объем выделяемой памяти для JMeter. Это можно сделать, настроив параметры JVM в файле <strong>jmeter.bat</strong> или <strong>jmeter.sh</strong>:
                <pre>-Xms1g -Xmx4g</pre> 
                Установите значения, соответствующие ресурсам вашей системы.
            </li>
            <li><strong>Использование параметров GC (Garbage Collection)</strong>: настройте параметры сборки мусора для оптимизации использования памяти:
                <pre>-XX:+UseG1GC</pre>
                Этот параметр позволяет более эффективно управлять памятью при больших нагрузках.
            </li>
        </ul>

        <h3>5. Минимизация нагрузки на тестируемую систему:</h3>
        <ul>
            <li><strong>Контроль частоты запросов</strong>: если слишком много запросов отправляется за короткое время, это может вызвать перегрузку системы. Регулируйте количество пользователей и частоту запросов, используя таймеры и параметры Thread Group.</li>
            <li><strong>Ограничение количества подключений</strong>: используйте конфигурационные элементы, такие как <strong>Connection Manager</strong>, для контроля числа одновременных подключений к тестируемой системе.</li>
        </ul>

        <h3>6. Постепенное увеличение нагрузки:</h3>
        <ul>
            <li><strong>Ступенчатое увеличение нагрузки</strong>: планируйте тесты с постепенным увеличением нагрузки, чтобы система могла адаптироваться к возрастанию запросов. Это также поможет избежать мгновенных перегрузок системы и даст возможность выявить критические пороги производительности.</li>
        </ul>
    `,category:"tools",tool:"jmeter"}],mi=[{id:1,question:"Что такое Chrome Dev Tools и для чего они используются?",level:"MID"},{id:2,question:"Как открыть и начать использовать Chrome Dev Tools в браузере?",level:"MID"},{id:3,question:"Как использовать вкладку Network для анализа сетевого трафика?",level:"MID"},{id:4,question:"Какие данные можно собирать на вкладке Network (время загрузки, статус код, размер и т.д.)?",level:"MID"},{id:5,question:"Как фильтровать запросы в Chrome Dev Tools по типу (XHR, JS, CSS и т.д.)?",level:"MID"},{id:6,question:"Как отслеживать время загрузки веб-страницы с помощью вкладки Network?",level:"MID"},{id:7,question:"Как работать с запросами и ответами HTTP на вкладке Network (просмотр, копирование и повторное выполнение запросов)?",level:"MID"},{id:8,question:"Как анализировать и устранять ошибки CORS с использованием Chrome Dev Tools?",level:"MID"},{id:9,question:"Что такое waterfall диаграмма и как ее интерпретировать для анализа производительности сайта?",level:"MID"},{id:10,question:"Как измерять и анализировать время ответа сервера с помощью Chrome Dev Tools?",level:"MID"},{id:11,question:"Как использовать вкладку Performance для анализа производительности рендеринга и JavaScript?",level:"MID"},{id:12,question:"Как отслеживать загрузку ресурсов (картинки, стили, скрипты) и их влияние на производительность?",level:"MID"},{id:13,question:"Как просматривать заголовки запросов и ответов HTTP с помощью Chrome Dev Tools?",level:"MID"},{id:14,question:"Как использовать вкладку Timeline для анализа активности на странице?",level:"MID"},{id:15,question:"Как анализировать и оптимизировать использование JavaScript с помощью вкладки Sources?",level:"MID"},{id:16,question:"Как отлаживать JavaScript-код с использованием Chrome Dev Tools (точки останова, пошаговое выполнение)?",level:"MID"},{id:17,question:"Как анализировать WebSocket соединения с помощью Chrome Dev Tools?",level:"MID"},{id:18,question:"Как просматривать и анализировать состояние кэша для оптимизации загрузки страниц?",level:"MID"},{id:19,question:"Как использовать вкладку Security для анализа сертификатов SSL и шифрования соединений?",level:"MID"},{id:20,question:"Как записывать и воспроизводить сетевые запросы с использованием инструмента HAR в Chrome Dev Tools?",level:"MID"},{id:21,question:"Как анализировать производительность сайта при медленных сетевых соединениях (использование профилирования сети)?",level:"MID"},{id:22,question:"Как использовать симуляцию медленных сетей и устройств с низкой производительностью для тестирования?",level:"MID"},{id:23,question:"Как работать с панелью Application для управления локальным хранилищем, куками и другими веб-данными?",level:"MID"},{id:24,question:"Как анализировать поток данных на уровне HTTP/2 с помощью Chrome Dev Tools?",level:"MID"},{id:25,question:"Какие инструменты Chrome Dev Tools можно использовать для профилирования производительности на мобильных устройствах?",level:"MID"},{id:26,question:"Как использовать панель Lighthouse для аудита производительности и SEO-оптимизации сайта?",level:"MID"},{id:27,question:"Как сохранить и экспортировать логи сети и производительности для дальнейшего анализа?",level:"MID"},{id:28,question:"Как отслеживать выполнение синхронных и асинхронных операций в JavaScript с помощью вкладки Sources?",level:"MID"},{id:29,question:"Как снимать и анализировать снимки стека вызовов (stack traces) в процессе выполнения JavaScript?",level:"MID"},{id:30,question:"Как использовать панель Memory для анализа утечек памяти и оптимизации использования памяти на веб-странице?",level:"MID"}],vi=[{id:1,question:"Что такое Git и для чего он используется?",level:"MID"},{id:2,question:"Как инициализировать новый репозиторий Git?",level:"MID"},{id:3,question:"Как добавить файлы в индекс (staging area) с помощью команды `git add`?",level:"MID"},{id:4,question:"Как выполнить коммит изменений с помощью команды `git commit`?",level:"MID"},{id:5,question:"Как просмотреть историю коммитов в Git с помощью команды `git log`?",level:"MID"},{id:6,question:"Что такое ветки (branches) в Git и как их создавать?",level:"MID"},{id:7,question:"Как переключаться между ветками в Git с помощью команды `git checkout`?",level:"MID"},{id:8,question:"Чем отличается команда `git merge` от команды `git rebase`?",level:"MID"},{id:9,question:"Как разрешить конфликты при слиянии веток в Git?",level:"MID"},{id:10,question:"Что такое `git pull` и как он отличается от `git fetch`?",level:"MID"},{id:11,question:"Как отменить последний коммит с помощью команды `git reset`?",level:"MID"},{id:12,question:"Как создать тег (tag) в Git для релиза?",level:"MID"},{id:13,question:"Как удалить файл из репозитория с помощью команды `git rm`?",level:"MID"},{id:14,question:"Как работать с удаленными репозиториями (remote repositories) в Git?",level:"MID"},{id:15,question:"Как просматривать и изменять историю коммитов с помощью команды `git reflog`?",level:"MID"},{id:16,question:"Что такое `git stash` и как его использовать для временного сохранения изменений?",level:"MID"},{id:17,question:"Как использовать команды `git cherry-pick` для выборочного переноса коммитов?",level:"MID"},{id:18,question:"Что такое submodules в Git и как их использовать?",level:"MID"},{id:19,question:"Как восстановить удаленные файлы или ветки с помощью команды `git reflog`?",level:"MID"},{id:20,question:"Как настроить глобальные и локальные конфигурации Git (например, имя пользователя, email)?",level:"MID"},{id:21,question:"Как создать alias для команд Git для упрощения работы?",level:"MID"},{id:22,question:"Что такое fast-forward merge и как он отличается от обычного merge?",level:"MID"},{id:23,question:"Как отложить коммит (amend) для внесения изменений в уже совершенный коммит?",level:"MID"},{id:24,question:"Как настроить hooks (хуки) в Git для выполнения автоматических действий перед или после коммита?",level:"MID"},{id:25,question:"Как работать с .gitignore и для чего он используется?",level:"MID"},{id:26,question:"Как работать с большими файлами и данными в Git с помощью Git LFS (Large File Storage)?",level:"MID"},{id:27,question:"Как настроить SSH-ключи для безопасной работы с удаленными репозиториями?",level:"MID"},{id:28,question:"Как клонировать удаленный репозиторий с помощью команды `git clone`?",level:"MID"},{id:29,question:"Как настроить двухфакторную аутентификацию для доступа к репозиторию?",level:"MID"},{id:30,question:"Как работать с ветками для параллельной разработки в Git Flow?",level:"MID"}],yi=[{id:1,question:"Что такое Java и для чего она используется?",answer:`
        <p><strong>Java</strong> — это объектно-ориентированный, высокоуровневый язык программирования, разработанный компанией Sun Microsystems (ныне принадлежащей Oracle) в 1995 году. Он используется для создания широкого спектра приложений, от настольных и веб-приложений до мобильных, серверных и встроенных систем. Java известна своей кроссплатформенностью, так как программы, написанные на Java, могут выполняться на любой системе с установленной виртуальной машиной Java (JVM).</p>

<h4>Основные сферы применения Java:</h4>
<ul>
    <li><strong>Веб-приложения:</strong> Java используется для создания веб-приложений и веб-сервисов с помощью таких технологий, как JavaServer Pages (JSP) и Spring.</li>
    <li><strong>Мобильные приложения:</strong> Java является основным языком для разработки приложений на платформе Android.</li>
    <li><strong>Корпоративные приложения:</strong> Java широко используется для создания масштабируемых серверных решений и систем на основе микросервисов с использованием Java EE или Spring.</li>
    <li><strong>Встроенные системы:</strong> Java применяется для создания программного обеспечения для умных устройств и IoT.</li>
    <li><strong>Большие данные:</strong> Java используется в проектах по работе с большими данными, например, в Hadoop.</li>
</ul>
<h4>Работа с Java:</h4>
<p>Java пользуется большим спросом, и многие крупные компании нанимают Java-программистов для разработки своих настольных, веб- и мобильных приложений. Сегодня Java-программист с 3-5-летним опытом работы может зарабатывать около 120 000 долларов в год, хотя это может варьироваться в зависимости от местоположения.</p>

<p>Крупные компании, использующие Java и нанимающие Java-программистов:</p>
<ul>
    <li>Google</li>
    <li>Microsoft</li>
    <li>Facebook</li>
    <li>IBM</li>
    <li>Amazon</li>
    <li>Netflix</li>
    <li>Pinterest</li>
    <li>Uber</li>
    <li>JetBrains</li>
    <li>и другие.</li>
        `,category:"tools",tool:"java"},{id:2,question:"Какие основные принципы объектно-ориентированного программирования (ООП) поддерживает Java?",answer:`
    <p>Объектно-ориентированное программирование (ООП) в Java строится на четырех ключевых принципах: абстракция, инкапсуляция, наследование и полиморфизм. Эти принципы помогают разработчикам организовать код так, чтобы он был более структурированным, модульным и легким для поддержки. Рассмотрим каждый из них более подробно с примерами кода.</p>

    <h4>1. Абстракция</h4>
    <p>Абстракция подразумевает выделение наиболее значимых характеристик объекта и сокрытие ненужных деталей реализации. Это помогает разработчику сосредоточиться на ключевой функциональности объекта, не вдаваясь в подробности его внутренней реализации. В Java абстракция реализуется с помощью абстрактных классов и интерфейсов.</p>
    
    <p>Пример абстрактного класса, описывающего телефон:</p>
    <pre><code>
    public abstract class Phone {
        private int year;
        
        public Phone(int year) {
            this.year = year;
        }
        
        // Абстрактные методы, которые должны быть реализованы в подклассах
        public abstract void call(int outputNumber);
        public abstract void ring(int inputNumber);
    }
    </code></pre>

    <p>В этом примере класс <strong>Phone</strong> задает общую структуру телефона, а конкретные модели (подклассы) должны реализовать логику вызовов и звонков.</p>

    <h4>2. Инкапсуляция</h4>
    <p>Инкапсуляция заключается в сокрытии внутреннего состояния объекта и предоставлении только ограниченного интерфейса для работы с ним. Это защищает данные объекта от нежелательных изменений извне. В Java инкапсуляция достигается с помощью модификаторов доступа (<code>private</code>, <code>protected</code>, <code>public</code>).</p>
    
    <p>Пример класса с инкапсуляцией данных:</p>
    <pre><code>
    public class SomePhone {

        // Приватные поля, недоступные извне
        private int year;
        private String company;

        // Конструктор для инициализации полей
        public SomePhone(int year, String company) {
            this.year = year;
            this.company = company;
        }

        // Приватный метод, скрытый от внешнего доступа
        private void openConnection() {
            // Открытие соединения...
        }

        // Публичный метод для вызова
        public void call() {
            openConnection();
            System.out.println("Вызываю номер");
        }

        // Публичный метод для звонка
        public void ring() {
            System.out.println("Дзынь-дзынь");
        }
    }
    </code></pre>

    <p>В этом примере методы <code>call</code> и <code>ring</code> являются публичными и доступны внешним объектам, в то время как метод <code>openConnection</code> скрыт и используется только внутри класса.</p>

    <h4>3. Наследование</h4>
    <p>Наследование позволяет создавать новые классы на основе существующих. Подклассы могут наследовать поля и методы родительского класса, а также добавлять новые или переопределять существующие. Это снижает дублирование кода и упрощает поддержку системы.</p>
    
    <p>Пример использования наследования для создания нового типа телефона:</p>
    <pre><code>
    // Абстрактный класс беспроводного телефона
    public abstract class WirelessPhone extends Phone {
        private int batteryLife;

        public WirelessPhone(int year, int batteryLife) {
            super(year);
            this.batteryLife = batteryLife;
        }
    }

    // Класс сотового телефона, наследующий беспроводной телефон
    public class CellPhone extends WirelessPhone {
        public CellPhone(int year, int batteryLife) {
            super(year, batteryLife);
        }

        @Override
        public void call(int outputNumber) {
            System.out.println("Вызываю номер " + outputNumber);
        }

        @Override
        public void ring(int inputNumber) {
            System.out.println("Вам звонит абонент " + inputNumber);
        }
    }
    </code></pre>

    <p>Здесь класс <code>CellPhone</code> наследует от <code>WirelessPhone</code> и реализует методы <code>call</code> и <code>ring</code>, определенные в абстрактном классе.</p>

    <h4>4. Полиморфизм</h4>
    <p>Полиморфизм позволяет работать с объектами различных классов через общий интерфейс или абстрактный класс, не зная о конкретной реализации. Это упрощает добавление новых классов и изменение поведения программы без изменения существующего кода.</p>
    
    <p>Пример использования полиморфизма в работе с разными моделями телефонов:</p>
    <pre><code>
    public class User {
        private String name;

        public User(String name) {
            this.name = name;
        }

        public void callAnotherUser(int number, Phone phone) {
            // Использование полиморфизма: неважно, какой тип телефона используется
            phone.call(number);
        }
    }

    // Пример использования
    public static void main(String[] args) {
        Phone myPhone = new CellPhone(2023, 10);
        User user = new User("Alice");
        user.callAnotherUser(123456, myPhone);  // Вызываю номер 123456
    }
    </code></pre>

    <p>В этом примере полиморфизм позволяет объекту <code>User</code> работать с любым типом телефона, который реализует абстрактные методы <code>call</code> и <code>ring</code>.</p>

    <p>Таким образом, основные принципы ООП (абстракция, инкапсуляция, наследование и полиморфизм) помогают разработчикам строить гибкие, масштабируемые и легко поддерживаемые системы на Java.</p>
    `,category:"tools",tool:"java"},{id:3,question:"Как объявить и инициализировать переменную в Java?",answer:`
    <p>В Java переменные используются для хранения данных и могут быть изменяемыми (переменные) или неизменяемыми (константы). Переменные в Java делятся на примитивные и ссылочные типы. Давайте рассмотрим, как объявить и инициализировать переменные в Java.</p>
    
    <h4>1. Объявление переменных</h4>
    <p>Чтобы объявить переменную в Java, необходимо указать тип данных, за которым следует имя переменной. Например:</p>
    <pre><code>
    int a;          // объявление целочисленной переменной
    double pi;      // объявление переменной с плавающей точкой
    char letter;    // объявление символьной переменной
    </code></pre>

    <p>Если требуется объявить несколько переменных одного типа, их можно перечислить через запятую:</p>
    <pre><code>
    int x, y, z;    // объявление трех целочисленных переменных
    </code></pre>

    <h4>2. Инициализация переменных</h4>
    <p>Инициализация переменной — это присвоение ей начального значения. Это важно, так как в Java нельзя использовать переменные до их инициализации.</p>
    <pre><code>
    int a = 10;              // инициализация целочисленной переменной
    double pi = 3.14159;      // инициализация переменной с плавающей точкой
    char letter = 'A';        // инициализация символьной переменной
    boolean isTrue = false;   // инициализация логической переменной
    </code></pre>

    <p>Пример инициализации нескольких переменных одновременно:</p>
    <pre><code>
    int x = 5, y = 10;       // одновременная инициализация двух переменных
    </code></pre>

    <h4>3. Локальные переменные</h4>
    <p>Локальные переменные объявляются внутри методов, блоков или конструкторов и доступны только в пределах этой области видимости. Локальные переменные не имеют значения по умолчанию, поэтому их обязательно нужно инициализировать перед использованием.</p>
    <pre><code>
    public class Example {
        public void showAge() {
            int age = 25;   // объявление и инициализация локальной переменной
            System.out.println("Возраст: " + age);
        }
    }
    </code></pre>

    <h4>4. Переменные экземпляра</h4>
    <p>Переменные экземпляра (или поля класса) объявляются на уровне класса, но за пределами методов. Они доступны для всех методов в классе и могут иметь значения по умолчанию: 0 для чисел, <code>false</code> для логических переменных и <code>null</code> для ссылочных типов.</p>
    <pre><code>
    public class Employee {
        private String name;  // переменная экземпляра
        private double salary;

        public Employee(String name, double salary) {
            this.name = name;          // инициализация переменной экземпляра
            this.salary = salary;
        }

        public void display() {
            System.out.println("Имя: " + name + ", Зарплата: " + salary);
        }
    }
    </code></pre>

    <h4>5. Константы в Java</h4>
    <p>Константы объявляются с использованием ключевого слова <code>final</code>. Их значения присваиваются один раз и не могут быть изменены в дальнейшем. Обычно имена констант записываются заглавными буквами.</p>
    <pre><code>
    final double PI = 3.14159;   // объявление и инициализация константы
    </code></pre>

    <p>Константы помогают предотвратить случайные изменения значений, которые не должны изменяться в ходе выполнения программы.</p>

    <h4>6. Примеры кода</h4>
    <pre><code>
    public class VariableExample {
        public static void main(String[] args) {
            // Объявление и инициализация переменных
            int number = 10;
            double pi = 3.14159;
            char letter = 'A';
            boolean isActive = true;

            // Вывод значений переменных
            System.out.println("Number: " + number);
            System.out.println("Pi: " + pi);
            System.out.println("Letter: " + letter);
            System.out.println("Is Active: " + isActive);
        }
    }
    </code></pre>

    <p>Вывод программы:</p>
    <pre>
    Number: 10
    Pi: 3.14159
    Letter: A
    Is Active: true
    </pre>
    `,category:"tools",tool:"java"},{id:4,question:"Какие типы данных существуют в Java (примитивные и ссылочные)?",answer:`
    <p>В Java существует два основных типа данных: примитивные и ссылочные. Давайте рассмотрим каждый из них подробнее.</p>

    <h4>Примитивные типы данных</h4>
    <p>Примитивные типы данных в Java представляют собой базовые типы, которые не являются объектами. Они включают в себя:</p>
    
    <ul>
        <li><strong>Целочисленные типы:</strong>
            <ul>
                <li><strong>byte</strong> (8 бит, диапазон от -128 до 127)</li>
                <li><strong>short</strong> (16 бит, диапазон от -32,768 до 32,767)</li>
                <li><strong>int</strong> (32 бит, диапазон от -2,147,483,648 до 2,147,483,647)</li>
                <li><strong>long</strong> (64 бит, диапазон от -9,223,372,036,854,775,808 до 9,223,372,036,854,775,807)</li>
            </ul>
        </li>
        <li><strong>Символьный тип:</strong>
            <ul>
                <li><strong>char</strong> (16 бит, символы в кодировке Unicode от ‘\\u0000’ до ‘\\uFFFF’)</li>
            </ul>
        </li>
        <li><strong>Типы с плавающей точкой:</strong>
            <ul>
                <li><strong>float</strong> (32 бит, диапазон от ~1.4e-45 до ~3.4e38)</li>
                <li><strong>double</strong> (64 бит, диапазон от ~4.9e-324 до ~1.8e308)</li>
            </ul>
        </li>
        <li><strong>Логический тип:</strong>
            <ul>
                <li><strong>boolean</strong> (имеет два значения: <code>true</code> и <code>false</code>)</li>
            </ul>
        </li>
    </ul>

    <p>Пример использования примитивных типов данных:</p>
    <pre><code>
    byte b = 10;
    short s = 500;
    int i = 10000;
    long l = 1000000000L;
    char c = 'A';
    float f = 10.5f;
    double d = 20.5;
    boolean flag = true;
    </code></pre>

    <h4>Ссылочные типы данных</h4>
    <p>Ссылочные типы данных в Java представляют собой объекты и массивы. К ним относятся:</p>
    <ul>
        <li><strong>Классы:</strong> пользовательские классы и предоставляемые Java-библиотеками, такие как <code>String</code>, <code>Integer</code>, <code>Double</code> и т.д.</li>
        <li><strong>Интерфейсы:</strong> определения интерфейсов, которые могут быть реализованы классами.</li>
        <li><strong>Массивы:</strong> структуры данных, которые хранят элементы одного типа, например, массив целых чисел <code>int[]</code> или массив объектов <code>String[]</code>.</li>
    </ul>

    <p>Пример использования ссылочных типов данных:</p>
    <pre><code>
    String name = "John";
    Integer age = 25;
    Double salary = 50000.0;
    int[] numbers = {1, 2, 3, 4, 5};
    </code></pre>

    <p>Примитивные типы данных обеспечивают эффективное использование памяти и быстродействие, тогда как ссылочные типы позволяют работать с объектами и коллекциями данных.</p>
    `,category:"tools",tool:"java"},{id:5,question:"Что такое классы и объекты в Java?",answer:`
        <p><strong>Класс</strong> — это шаблон или «чертеж», на основе которого создаются объекты. Класс описывает характеристики и поведение, которыми будут обладать объекты, создаваемые на его основе. Он содержит <em>поля</em> (переменные) и <em>методы</em> (функции), которые определяют состояние и действия объекта.</p>
    
        <p><strong>Объект</strong> — это экземпляр класса, созданный на основе его описания. Объект содержит конкретные значения полей класса и может выполнять действия, определенные в его методах. В Java, объекты создаются с использованием ключевого слова <code>new</code>.</p>
    
        <h4>Пример создания класса и объекта в Java:</h4>
        <pre><code>
    // Определение класса Car
    class Car {
        // Поля класса (характеристики объекта)
        String model;
        int year;
    
        // Конструктор для инициализации объекта
        public Car(String model, int year) {
            this.model = model;
            this.year = year;
        }
    
        // Метод класса (поведение объекта)
        public void drive() {
            System.out.println("Машина " + model + " поехала.");
        }
    }
    
    // Создание объекта на основе класса Car
    public class Main {
        public static void main(String[] args) {
            // Создаем объект car1 типа Car
            Car car1 = new Car("Toyota", 2020);
            // Вызов метода объекта
            car1.drive();  // Вывод: Машина Toyota поехала.
        }
    }
        </code></pre>
    
        <h4>Объяснение:</h4>
        <ul>
            <li><strong>Класс Car</strong> — это шаблон, который описывает машину. В нем есть два поля: <code>model</code> (модель машины) и <code>year</code> (год выпуска), а также метод <code>drive()</code>, который выводит сообщение о том, что машина поехала.</li>
            <li><strong>Объект car1</strong> — это конкретный экземпляр класса <code>Car</code>, который мы создали с моделью «Toyota» и годом выпуска 2020.</li>
            <li>Метод <code>drive()</code> вызывается для объекта <code>car1</code>, и программа выводит текст «Машина Toyota поехала».</li>
        </ul>
    
        <h4>Основные характеристики классов и объектов:</h4>
        <ul>
            <li><strong>Поля (переменные)</strong> — описывают состояние объекта (например, модель и год выпуска машины).</li>
            <li><strong>Методы (функции)</strong> — описывают действия, которые объект может выполнять (например, метод <code>drive()</code>).</li>
            <li><strong>Конструкторы</strong> — специальные методы, которые используются для создания и инициализации объектов (например, <code>Car(String model, int year)</code>).</li>
            <li><strong>Объекты</strong> — конкретные экземпляры классов с уникальными значениями полей (например, объект <code>car1</code>).</li>
        </ul>
    
        <p>Таким образом, классы — это шаблоны для создания объектов, а объекты — это конкретные экземпляры, которые взаимодействуют с программой и выполняют определенные действия.</p>
        `,category:"tools",tool:"java"},{id:6,question:"Как создать объект класса в Java и вызвать методы класса?",answer:`
    <p>Для создания объекта в Java используется ключевое слово <strong>new</strong>, которое выделяет память под объект и вызывает конструктор класса. После создания объекта можно обращаться к его методам с помощью оператора точки (<strong>.</strong>).</p>

    <h4>Пример создания объекта и вызова методов класса:</h4>
    <pre><code>
// Определение класса Person
class Person {
    // Поля класса
    String name;
    int age;

    // Конструктор для инициализации объекта
    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    // Метод для вывода информации о человеке
    public void introduce() {
        System.out.println("Привет! Меня зовут " + name + ", мне " + age + " лет.");
    }

    // Метод для изменения возраста
    public void haveBirthday() {
        age++;
        System.out.println(name + " отпраздновал день рождения! Теперь ему " + age + " лет.");
    }
}

// Главный класс
public class Main {
    public static void main(String[] args) {
        // Создание объекта класса Person
        Person person1 = new Person("Алексей", 30);

        // Вызов методов объекта
        person1.introduce();  // Вывод: Привет! Меня зовут Алексей, мне 30 лет.
        person1.haveBirthday();  // Вывод: Алексей отпраздновал день рождения! Теперь ему 31 лет.
    }
}
    </code></pre>

    <h4>Объяснение:</h4>
    <ul>
        <li><strong>Класс Person</strong> — описывает человека с полями <code>name</code> (имя) и <code>age</code> (возраст), а также методами <code>introduce()</code> для вывода информации и <code>haveBirthday()</code> для увеличения возраста на 1 год.</li>
        <li>Мы создаем объект <code>person1</code> с именем "Алексей" и возрастом 30, используя конструктор <code>Person(String name, int age)</code>.</li>
        <li>С помощью оператора точки (<code>.</code>) мы вызываем методы <code>introduce()</code> и <code>haveBirthday()</code> для объекта <code>person1</code>.</li>
    </ul>

    <h4>Шаги создания объекта и вызова метода:</h4>
    <ol>
        <li>Создайте класс с полями и методами.</li>
        <li>Используйте ключевое слово <code>new</code> для создания объекта.</li>
        <li>Используйте оператор точки (<code>.</code>) для вызова методов объекта.</li>
    </ol>

    <p>Таким образом, процесс создания объекта класса и вызова его методов включает создание экземпляра класса с использованием <code>new</code> и обращение к его методам через оператор точки.</p>
    `,category:"tools",tool:"java"},{id:7,question:"Что такое конструктор в Java и как он используется для инициализации объекта?",answer:`
    <p><strong>Конструктор</strong> — это специальный метод, который вызывается при создании нового объекта класса и используется для инициализации его полей. Конструктор имеет то же имя, что и класс, и не возвращает никакого значения, даже <code>void</code>.</p>

    <h4>Пример простого конструктора:</h4>
    <pre><code>
class Person {
    String name;
    int age;

    // Конструктор
    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }
}
    </code></pre>
    <p>В этом примере конструктор <code>Person(String name, int age)</code> принимает два параметра: имя и возраст, и инициализирует поля <code>name</code> и <code>age</code> объекта их значениями.</p>

    <h4>Использование конструктора для создания объекта:</h4>
    <pre><code>
Person person = new Person("John", 30);
    </code></pre>
    <p>Здесь мы создаем объект <code>person</code> класса <code>Person</code> с именем "John" и возрастом 30.</p>

    <h4>Перегрузка конструкторов:</h4>
    <p>Java позволяет создавать несколько конструкторов с разными параметрами, что называется перегрузкой конструкторов. Это позволяет создавать объекты с разными начальными параметрами.</p>

    <pre><code>
class Person {
    String name;
    int age;

    // Конструктор с двумя параметрами
    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    // Конструктор с одним параметром
    public Person(String name) {
        this.name = name;
        this.age = 0; // значение по умолчанию
    }
}

Person person1 = new Person("John", 30);  // имя "John", возраст 30
Person person2 = new Person("Alice");  // имя "Alice", возраст по умолчанию 0
    </code></pre>
    <p>В этом примере используется два конструктора. Первый создает объект с именем и возрастом, а второй — только с именем, устанавливая возраст по умолчанию в 0.</p>

    <h4>Основные моменты:</h4>
    <ul>
        <li><strong>Конструктор</strong> всегда имеет то же имя, что и класс.</li>
        <li>Он используется для инициализации объектов и присвоения значений полям класса.</li>
        <li>Можно использовать <strong>перегрузку</strong>, чтобы создать несколько вариантов конструкторов с разными параметрами.</li>
    </ul>
    <p>Таким образом, конструкторы в Java обеспечивают гибкий способ создания объектов с инициализацией полей при создании.</p>
    `,category:"tools",tool:"java"},{id:8,question:"Каковы отличия между статическими методами и методами экземпляра в Java?",answer:`
        <p><strong>Статические методы</strong> и <strong>методы экземпляра</strong> — это два разных типа методов в Java, которые различаются по тому, как они вызываются и на что воздействуют.</p>
    
        <h4>1. Статические методы:</h4>
        <ul>
            <li>Объявляются с ключевым словом <code>static</code>.</li>
            <li>Принадлежат самому классу, а не конкретному объекту этого класса.</li>
            <li>Могут вызываться напрямую с помощью имени класса, без создания объекта.</li>
            <li>Не имеют доступа к полям и методам экземпляра (нужен объект для их доступа).</li>
        </ul>
    
        <h4>Пример статического метода:</h4>
        <pre><code>
    class MathUtils {
        // Статический метод для вычисления квадрата числа
        public static int square(int number) {
            return number * number;
        }
    }
    
    int result = MathUtils.square(5);  // Вызов без создания объекта
    System.out.println(result);  // Вывод: 25
        </code></pre>
        <p>Здесь метод <code>square</code> является статическим и вызывается напрямую через имя класса <code>MathUtils</code>.</p>
    
        <h4>2. Методы экземпляра:</h4>
        <ul>
            <li>Не используют ключевое слово <code>static</code>.</li>
            <li>Принадлежат конкретному объекту и могут изменять состояние этого объекта (работают с его полями).</li>
            <li>Для вызова метода экземпляра необходимо создать объект класса.</li>
            <li>Имеют доступ к полям и другим методам экземпляра класса.</li>
        </ul>
    
        <h4>Пример метода экземпляра:</h4>
        <pre><code>
    class Person {
        String name;
    
        // Метод экземпляра
        public void introduce() {
            System.out.println("Привет, меня зовут " + name);
        }
    }
    
    Person person = new Person();
    person.name = "John";
    person.introduce();  // Вывод: Привет, меня зовут John
        </code></pre>
        <p>В этом примере метод <code>introduce</code> является методом экземпляра и вызывается через объект <code>person</code>. Он может работать с полем <code>name</code> этого объекта.</p>
    
        <h4>Основные отличия:</h4>
        <ul>
            <li><strong>Статические методы:</strong> принадлежат классу, вызываются без создания объекта, не могут обращаться к полям и методам экземпляра.</li>
            <li><strong>Методы экземпляра:</strong> принадлежат объекту, требуют создания объекта для вызова, могут обращаться к полям и другим методам этого объекта.</li>
        </ul>
        `,category:"tools",tool:"java"},{id:9,question:"Что такое инкапсуляция и как она реализуется в Java?",answer:`
    <p><strong>Инкапсуляция</strong> — это концепция в языке Java, которая объединяет данные (переменные) и методы, работающие с ними, в единое целое, называемое классом. Она скрывает внутренние детали реализации от других классов и предоставляет доступ к данным только через специально определённые методы.</p>

    <h4>Зачем нужна инкапсуляция в Java?</h4>
    <ul>
        <li>Для лучшего контроля доступа к полям и методам класса.</li>
        <li>Для улучшения организации кода и повышения его читаемости.</li>
        <li>Для упрощения управления и сопровождения большого количества кода.</li>
    </ul>

    <h4>Пример реализации инкапсуляции:</h4>
    <pre><code>
class MyBankAccount {
    // Переменные класса скрыты (private) и недоступны напрямую
    private int acc_number;
    private int acc_balance;

    // Конструктор для инициализации объекта
    public MyBankAccount(int acc_number, int acc_balance) {
        this.acc_number = acc_number;
        this.acc_balance = acc_balance;
    }

    // Метод для получения баланса счета
    public int printAccountBalance() {
        return acc_balance;
    }

    // Метод для получения номера счета
    public int printAccountNumber() {
        return acc_number;
    }

    // Метод для внесения денег на счет
    public void depositMoney(int money) {
        acc_balance += money;
    }
}
    </code></pre>

    <p>В этом примере инкапсуляция реализуется за счет использования модификатора <code>private</code> для полей <code>acc_number</code> и <code>acc_balance</code>. Эти поля скрыты от внешнего доступа и могут быть изменены только через публичные методы <code>depositMoney()</code>, <code>printAccountBalance()</code> и <code>printAccountNumber()</code>.</p>

    <h4>Преимущества инкапсуляции:</h4>
    <ul>
        <li>Помогает организовать код, улучшая его структуру и читабельность.</li>
        <li>Обеспечивает контроль над изменениями данных, ограничивая доступ к ним через методы.</li>
        <li>Упрощает сопровождение кода, особенно в больших проектах.</li>
    </ul>

    <h4>Что произойдет без инкапсуляции?</h4>
    <p>Без инкапсуляции код может стать неорганизованным и сложным для понимания. Поля могут быть изменены напрямую, что увеличивает вероятность ошибок и затрудняет отладку. Инкапсуляция позволяет избежать этих проблем, структурируя код более эффективно.</p>
    `,category:"tools",tool:"java"},{id:10,question:"Как работать с наследованием в Java и для чего оно используется?",answer:`
    <p><strong>Наследование</strong> — это один из основных принципов объектно-ориентированного программирования, который позволяет одному классу (называемому дочерним) наследовать свойства и методы другого класса (родительского). Это делает код более повторно используемым и упрощает разработку.</p>

    <h4>Как наследование работает в Java</h4>
    <p>Для создания наследования в Java используется ключевое слово <code>extends</code>, которое связывает дочерний и родительский классы. Дочерний класс получает доступ ко всем полям и методам родительского класса.</p>

    <h4>Пример:</h4>
    <pre><code>
class Parent {
    int a = 10;
 
    void display() {
        System.out.println("This is the parent class.");
    }
}
 
class Child extends Parent {
    int b = 20;
 
    void show() {
        System.out.println("This is the child class.");
    }
}
 
public class Main {
    public static void main(String[] args) {
        Child obj = new Child();
        obj.display(); // вызываем метод родительского класса
        obj.show();    // вызываем метод дочернего класса
        System.out.println("Value of a: " + obj.a); // доступ к полю родительского класса
        System.out.println("Value of b: " + obj.b); // доступ к полю дочернего класса
    }
}
    </code></pre>

    <p>В этом примере <code>Child</code> наследует все поля и методы от класса <code>Parent</code>. Объект дочернего класса <code>obj</code> может вызывать методы и обращаться к полям как родительского, так и дочернего класса.</p>

    <h4>Переопределение методов</h4>
    <p>Если в дочернем классе есть метод с тем же именем, что и в родительском классе, дочерний метод «переопределяет» родительский. Вызов метода из родительского класса можно выполнить с помощью ключевого слова <code>super</code>.</p>

    <pre><code>
class Parent {
    void display() {
        System.out.println("This is the parent class method.");
    }
}
 
class Child extends Parent {
    void display() {
        System.out.println("This is the child class method.");
    }

    void callParentMethod() {
        super.display(); // вызываем метод родительского класса с помощью super
    }
}

public class Main {
    public static void main(String[] args) {
        Child obj = new Child();
        obj.display();         // вызывается метод дочернего класса
        obj.callParentMethod(); // вызывается метод родительского класса
    }
}
    </code></pre>

    <p>В этом примере метод <code>display()</code> дочернего класса переопределяет метод родительского класса. С помощью <code>super.display()</code> можно вызвать метод родителя внутри дочернего класса.</p>

    <h4>Зачем нужно наследование?</h4>
    <ul>
        <li>Повторное использование кода: позволяет избежать дублирования кода, поскольку дочерний класс использует уже существующую логику родительского класса.</li>
        <li>Расширение функциональности: можно добавлять новые методы и поля к наследуемым классам, расширяя их поведение.</li>
        <li>Организация кода: улучшает структуру и иерархию кода, делая его более управляемым и логичным.</li>
    </ul>
    
    <p>Таким образом, наследование в Java упрощает разработку, улучшает организацию кода и повышает его переиспользуемость.</p>
        `,category:"tools",tool:"java"},{id:11,question:"Что такое интерфейсы в Java и как они используются?",answer:`
    <p><strong>Интерфейс</strong> в Java — это абстрактный контракт, который определяет набор методов, которые должны быть реализованы классами, его использующими. Интерфейсы определяют <strong>сигнатуры методов</strong>, но не содержат их реализацию. Классы, которые реализуют интерфейс, обязаны предоставлять реализацию всех методов, объявленных в интерфейсе.</p>

    <h4>Пример интерфейса:</h4>
    <pre><code>
public interface MyInterface {
    void myMethod1();
    void myMethod2();
}
    </code></pre>
    <p>В этом примере интерфейс <code>MyInterface</code> содержит два метода, которые должны быть реализованы классом, который будет его использовать.</p>

    <h4>Реализация интерфейса:</h4>
    <pre><code>
public class MyClass implements MyInterface {
    @Override
    public void myMethod1() {
        System.out.println("Реализация метода myMethod1");
    }
    
    @Override
    public void myMethod2() {
        System.out.println("Реализация метода myMethod2");
    }
}
    </code></pre>
    <p>Класс <code>MyClass</code> реализует интерфейс <code>MyInterface</code>, предоставляя собственную реализацию для методов <code>myMethod1()</code> и <code>myMethod2()</code>.</p>

    <h4>Особенности интерфейсов:</h4>
    <ul>
        <li>Класс может реализовывать несколько интерфейсов одновременно, что позволяет реализовать множественное наследование поведения.</li>
        <li>Интерфейсы могут содержать <strong>константы</strong>, которые автоматически считаются <code>static final</code>.</li>
        <li>Интерфейсы могут наследовать другие интерфейсы с помощью ключевого слова <code>extends</code>.</li>
    </ul>

    <h4>Пример с константами:</h4>
    <pre><code>
public interface MyInterface {
    int MAX_VALUE = 100; // Константа
    void myMethod();
}
    </code></pre>

    <h4>Методы по умолчанию (Java 8):</h4>
    <p>Начиная с Java 8, интерфейсы могут содержать методы с реализацией по умолчанию. Эти методы можно использовать в классах, реализующих интерфейс, без необходимости их переопределения.</p>
    <pre><code>
public interface MyInterface {
    void myMethod();
    
    default void defaultMethod() {
        System.out.println("Метод по умолчанию.");
    }
}
    </code></pre>
    <p>Метод <code>defaultMethod()</code> предоставляет реализацию по умолчанию, которую класс может использовать или переопределить.</p>

    <h4>Статические методы (Java 8):</h4>
    <p>Интерфейсы также могут содержать статические методы, которые можно вызывать напрямую через интерфейс без создания объекта класса.</p>
    <pre><code>
public interface MyInterface {
    static void staticMethod() {
        System.out.println("Это статический метод.");
    }
}
MyInterface.staticMethod(); // Вызов статического метода
    </code></pre>

    <h4>Интерфейсы и наследование:</h4>
    <p>В отличие от классов, которые могут наследовать только один родительский класс, класс может реализовывать несколько интерфейсов одновременно. Это помогает создать гибкую архитектуру, в которой класс может поддерживать различные функциональности через интерфейсы.</p>
    `,category:"tools",tool:"java"},{id:12,question:"Что такое абстрактный класс и чем он отличается от интерфейса в Java?",answer:`
    <p><strong>Абстрактный класс</strong> — это класс, который может содержать абстрактные методы (методы без реализации) и не может быть создан как объект напрямую. Абстрактные классы используются для описания общих характеристик и поведения для классов-наследников. Они могут содержать как абстрактные, так и обычные методы с реализацией.</p>

    <p><strong>Интерфейс</strong> в Java — это контракт, который определяет набор методов, которые должны быть реализованы классами, его использующими. В отличие от абстрактных классов, интерфейсы не могут содержать состояния (изменяемых полей) и содержат только сигнатуры методов. В интерфейсах методы не имеют реализации (кроме методов по умолчанию), и они должны быть реализованы классами, которые применяют данный интерфейс.</p>

    <h4>Пример абстрактного класса:</h4>
    <pre><code>
abstract class Animal {
    String name;

    abstract void makeSound(); // абстрактный метод

    public void sleep() { // метод с реализацией
        System.out.println("Спит...");
    }
}

class Dog extends Animal {
    @Override
    void makeSound() {
        System.out.println("Гав-гав");
    }
}
    </code></pre>

    <h4>Пример интерфейса:</h4>
    <pre><code>
public interface Drivable {
    void drive(); // метод без реализации
}

class Car implements Drivable {
    @Override
    public void drive() {
        System.out.println("Машина едет");
    }
}
    </code></pre>

    <h4>Основные отличия между абстрактным классом и интерфейсом:</h4>
    <ul>
        <li><strong>Наследование:</strong> Класс может расширять только один абстрактный класс, но может реализовывать несколько интерфейсов.</li>
        <li><strong>Состояние:</strong> Абстрактные классы могут содержать изменяемые поля (состояние), в то время как интерфейсы не могут содержать состояния и могут иметь только <code>final static</code> поля (константы).</li>
        <li><strong>Методы:</strong> В абстрактных классах могут быть как абстрактные, так и обычные методы с реализацией. В интерфейсах методы по умолчанию появились только с Java 8, но они не могут содержать состояния.</li>
        <li><strong>Конструкторы:</strong> Абстрактные классы могут иметь конструкторы, а интерфейсы — нет.</li>
        <li><strong>Полиморфизм:</strong> Интерфейсы часто используются для достижения полиморфизма, так как один класс может реализовывать несколько интерфейсов, а абстрактный класс служит для наследования общего поведения.</li>
    </ul>

    <h4>Пример использования абстрактного класса:</h4>
    <pre><code>
abstract class Shape {
    abstract double area();
}

class Circle extends Shape {
    double radius;

    Circle(double radius) {
        this.radius = radius;
    }

    @Override
    double area() {
        return Math.PI * radius * radius;
    }
}
    </code></pre>

    <h4>Пример использования интерфейса:</h4>
    <pre><code>
interface Flyable {
    void fly();
}

class Bird implements Flyable {
    @Override
    public void fly() {
        System.out.println("Птица летит");
    }
}
    </code></pre>

    <h4>Таблица сравнений:</h4>
    <table>
        <tr>
            <th>Интерфейс</th>
            <th>Абстрактный класс</th>
        </tr>
        <tr>
            <td>Не может содержать состояние (изменяемые поля).</td>
            <td>Может содержать состояние (изменяемые поля).</td>
        </tr>
        <tr>
            <td>Может содержать только абстрактные методы (кроме default и static методов).</td>
            <td>Может содержать как абстрактные, так и обычные методы с реализацией.</td>
        </tr>
        <tr>
            <td>Класс может реализовывать несколько интерфейсов.</td>
            <td>Класс может расширять только один абстрактный класс.</td>
        </tr>
        <tr>
            <td>Не может иметь конструктор.</td>
            <td>Может иметь конструктор.</td>
        </tr>
        <tr>
            <td>Используется для описания общего поведения, без хранения состояния.</td>
            <td>Используется для описания общего поведения с возможностью хранения состояния.</td>
        </tr>
    </table>

    <p>Таким образом, абстрактные классы используются, когда требуется наследовать общее поведение с возможностью хранения состояния, а интерфейсы — для определения контракта, который могут реализовать различные классы, не связанные между собой и не имеющие общего состояния.</p>
    `,category:"tools",tool:"java"},{id:13,question:"Что такое полиморфизм и как он работает в Java?",answer:`
           <p><strong>Полиморфизм</strong> — это один из ключевых принципов объектно-ориентированного программирования (ООП), который позволяет объектам разных классов обрабатывать вызовы одного и того же метода, при этом каждая реализация этого метода может вести себя по-разному. В Java полиморфизм достигается за счет использования наследования и интерфейсов, когда объект одного класса может быть использован как объект его суперкласса или интерфейса, а метод будет вызываться в зависимости от реального типа объекта.</p>
        
        <h4>Пример полиморфизма через наследование:</h4>
        <pre><code>
public class Dancer {
    private String name;
    private int age;

    public Dancer(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public void dance() {
        System.out.println(name + " танцует как все.");
    }
}

public class BreakDancer extends Dancer {
    public BreakDancer(String name, int age) {
        super(name, age);
    }

    @Override
    public void dance() {
        System.out.println(name + " танцует брейк-данс!");
    }
}

public class ElectricBoogieDancer extends Dancer {
    public ElectricBoogieDancer(String name, int age) {
        super(name, age);
    }

    @Override
    public void dance() {
        System.out.println(name + " танцует электрик буги!");
    }
}
        </code></pre>

        <h4>Пример использования полиморфизма:</h4>
        <pre><code>
public class Main {
    public static void main(String[] args) {
        Dancer dancer = new Dancer("Антон", 18);
        Dancer breakDancer = new BreakDancer("Алексей", 19);
        Dancer electricBoogieDancer = new ElectricBoogieDancer("Игорь", 20);

        List<Dancer> dancers = Arrays.asList(dancer, breakDancer, electricBoogieDancer);
        for (Dancer d : dancers) {
            d.dance();  // Полиморфный вызов метода dance()
        }
    }
}
        </code></pre>
        
        <p>В этом примере создаются три объекта типа <code>Dancer</code>, <code>BreakDancer</code> и <code>ElectricBoogieDancer</code>. Несмотря на то, что мы используем переменные типа <code>Dancer</code>, благодаря полиморфизму, программа автоматически вызывает переопределенные методы <code>dance()</code> в зависимости от типа объекта. Это демонстрирует, как полиморфизм позволяет работать с объектами различных типов через общий интерфейс.</p>

        <h4>Типы полиморфизма в Java:</h4>
        <ul>
            <li><strong>Компиляторный (ранний) полиморфизм:</strong> Включает в себя перегрузку методов (overloading), когда несколько методов могут иметь одно и то же имя, но разные параметры.</li>
            <li><strong>Исполнительный (поздний) полиморфизм:</strong> Включает переопределение методов (overriding), когда класс-наследник предоставляет свою реализацию метода родителя, что и демонстрируется в примере выше. При этом решение о том, какой метод вызвать, принимается во время выполнения программы.</li>
        </ul>
        
        <h4>Преимущества полиморфизма:</h4>
        <ul>
            <li>Позволяет использовать единый интерфейс для объектов разных классов.</li>
            <li>Обеспечивает гибкость и расширяемость программы.</li>
            <li>Облегчает поддержку и модификацию кода за счет возможности добавления новых классов без изменения существующего кода.</li>
        </ul>

        <p>Полиморфизм помогает создавать более гибкие и расширяемые программы, позволяя объектам разных классов по-разному реализовывать один и тот же метод. Это один из самых мощных инструментов в объектно-ориентированном программировании, который помогает писать поддерживаемый и расширяемый код.</p>
        `,category:"tools",tool:"java"},{id:14,question:"Как работают исключения (exceptions) в Java и как они обрабатываются?",answer:`
        <p>В программировании исключения (exceptions) — это события, которые возникают при выполнении программы и нарушают нормальное выполнение программы. Причинами исключений могут быть ошибки ввода/вывода, неправильные действия пользователя, отсутствие необходимого ресурса или ошибка программирования. В Java существует специальный механизм обработки исключений, который позволяет программе продолжить работу, обработав ошибку.</p>
        
        <h4>Основные ключевые слова для работы с исключениями:</h4>
        <ul>
            <li><strong>try</strong> — определяет блок кода, в котором может произойти исключение.</li>
            <li><strong>catch</strong> — перехватывает и обрабатывает исключение.</li>
            <li><strong>finally</strong> — необязательный блок, который выполняется в любом случае после блока try и catch, даже если возникло исключение.</li>
            <li><strong>throw</strong> — используется для явного выброса исключения.</li>
            <li><strong>throws</strong> — указывается в сигнатуре метода и предупреждает, что метод может выбросить исключение.</li>
        </ul>

        <h4>Пример обработки исключений в Java:</h4>
        <pre><code>
public String input() throws MyException {
    BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));
    String s = null;
    try {
        s = reader.readLine();  // Возможное исключение IOException
    } catch (IOException e) {
        System.out.println(e.getMessage());  // Обработка исключения
    } finally {
        try {
            reader.close();  // Закрытие ресурса
        } catch (IOException e) {
            System.out.println(e.getMessage());  // Обработка исключения при закрытии
        }
    }
    if (s.equals("")) {
        throw new MyException("String can not be empty!");  // Генерация собственного исключения
    }
    return s;
}
        </code></pre>

        <p>Механизм исключений позволяет программе защищать код от неожиданных ошибок. При возникновении исключения программа переходит в блок <code>catch</code>, где может обработать ошибку и продолжить работу. Блок <code>finally</code> всегда выполняется, что делает его удобным для освобождения ресурсов, таких как закрытие файлов или соединений.</p>

        <h4>Иерархия исключений в Java:</h4>
        <p>Все исключения в Java наследуются от класса <code>Throwable</code>. В зависимости от типа исключения, они делятся на две категории:</p>
        <ul>
            <li><strong>Checked Exceptions</strong> — исключения, которые должны быть обработаны во время компиляции. Например, <code>IOException</code>.</li>
            <li><strong>Unchecked Exceptions</strong> — исключения, которые происходят во время выполнения программы. Например, <code>NullPointerException</code> или <code>ArithmeticException</code>.</li>
        </ul>

        <h4>Пример обработки исключений:</h4>
        <pre><code>
public class Main {
    public static void main(String[] args) {
        try {
            int result = divide(10, 0);  // Попытка деления на 0
        } catch (ArithmeticException e) {
            System.out.println("Error: " + e.getMessage());  // Обработка исключения
        } finally {
            System.out.println("Программа завершена.");  // Всегда выполняется
        }
    }

    public static int divide(int a, int b) {
        return a / b;  // Возможное исключение ArithmeticException
    }
}
        </code></pre>
        
        <h4>Использование try-with-resources:</h4>
        <p>Для автоматического закрытия ресурсов, таких как файлы или соединения, используется конструкция <strong>try-with-resources</strong>. Она автоматически закрывает ресурс после завершения блока <code>try</code>, что делает код более чистым.</p>
        <pre><code>
try (BufferedReader reader = new BufferedReader(new InputStreamReader(System.in))) {
    String s = reader.readLine();
} catch (IOException e) {
    System.out.println(e.getMessage());
}
        </code></pre>

        <h4>Итог:</h4>
        <p>Механизм исключений в Java помогает защитить программу от сбоев и неожиданных ситуаций. Используя <code>try</code>, <code>catch</code> и <code>finally</code>, можно безопасно обрабатывать ошибки и продолжать выполнение программы. Кроме того, Java позволяет создавать собственные типы исключений для обработки специфических ситуаций.</p>
    `,category:"tools",tool:"java"},{id:15,question:"Как использовать `try-catch-finally` для обработки исключений в Java?",answer:`
        <p>В Java механизм обработки исключений основан на использовании ключевых слов <code>try</code>, <code>catch</code> и <code>finally</code>, что позволяет программе продолжать выполнение, даже если в процессе ее работы возникают исключения (ошибки). Давайте рассмотрим каждое из этих ключевых слов:</p>

        <h4>Ключевые слова:</h4>
        <ul>
            <li><strong>try</strong> — используется для определения блока кода, в котором могут возникнуть исключения. В этом блоке помещается код, выполнение которого может привести к ошибке.</li>
            <li><strong>catch</strong> — используется для перехвата и обработки исключений, которые возникают в блоке <code>try</code>. В этом блоке программа обрабатывает возникшую ошибку и предотвращает ее дальнейшее распространение.</li>
            <li><strong>finally</strong> — определяет блок кода, который всегда выполняется после завершения блока <code>try</code> и <code>catch</code>, независимо от того, было исключение или нет. Этот блок обычно используется для освобождения ресурсов (например, закрытие файлов или сетевых соединений).</li>
        </ul>

        <h4>Пример использования try -catch -finally в Java:</h4>
        <pre><code>
public String input() throws MyException {
    BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));
    String s = null;
    
    try {
        s = reader.readLine();  // Блок кода, где может произойти исключение
    } catch (IOException e) {
        System.out.println("Ошибка ввода/вывода: " + e.getMessage());  // Обработка исключения
    } finally {
        try {
            reader.close();  // Закрытие ресурса в блоке finally
        } catch (IOException e) {
            System.out.println("Ошибка при закрытии ресурса: " + e.getMessage());
        }
    }
    
    if (s.equals("")) {
        throw new MyException("String cannot be empty!");  // Генерация пользовательского исключения
    }
    
    return s;
}
        </code></pre>

        <h4>Объяснение:</h4>
        <p>В данном примере:</p>
        <ul>
            <li><code>try</code> блок содержит код для чтения строки с клавиатуры. Поскольку метод <code>readLine()</code> может выбросить исключение <code>IOException</code>, этот код обернут в блок <code>try</code>.</li>
            <li>В блоке <code>catch</code> обрабатывается исключение, если оно возникает. В данном случае, если произойдет ошибка ввода-вывода, программа выведет сообщение об ошибке.</li>
            <li>Блок <code>finally</code> используется для закрытия <code>BufferedReader</code> после завершения чтения, независимо от того, произошло ли исключение или нет. Это гарантирует освобождение ресурсов.</li>
        </ul>

        <p>Таким образом, комбинация блоков <code>try</code>, <code>catch</code> и <code>finally</code> позволяет надежно обрабатывать исключения и обеспечивать завершение работы программы даже в случае ошибки.</p>
    `,category:"tools",tool:"java"},{id:16,question:"Что такое коллекторы (Garbage Collection) в Java и как они работают?",answer:`
        <p><strong>Garbage Collection (GC)</strong> — это автоматический механизм управления памятью в Java, который отвечает за освобождение памяти, занятой объектами, которые больше не используются в программе. Этот процесс известен как сборка мусора (garbage collection), и он позволяет разработчикам не заботиться о ручном освобождении памяти, как это требуется в некоторых других языках программирования.</p>

        <h4>Как работает Garbage Collection в Java?</h4>
        <p>Java использует механизм автоматического управления памятью, который мониторит объекты во время выполнения программы. Когда объекты становятся недостижимыми — то есть к ним больше нет ссылок, и они больше не могут быть использованы программой — GC автоматически освобождает память, которую занимали эти объекты.</p>

        <h4>Основные этапы работы GC:</h4>
        <ul>
            <li><strong>Поиск недостижимых объектов:</strong> GC периодически проверяет кучу памяти (heap), чтобы найти объекты, которые больше не используются. Если объект больше не имеет активных ссылок в программе, он считается "мусором".</li>
            <li><strong>Очистка памяти:</strong> После того как объект признан "мусором", GC освобождает память, которую занимал этот объект, чтобы она могла быть повторно использована другими объектами или новыми данными.</li>
        </ul>

        <h4>Алгоритмы Garbage Collection:</h4>
        <p>Java использует различные алгоритмы для реализации сборки мусора, самые распространенные из которых:</p>
        <ul>
            <li><strong>Mark and Sweep (Пометка и очистка):</strong> Этот алгоритм сначала помечает все объекты, которые все еще доступны из корневых объектов (root), а затем удаляет все объекты, которые не были помечены, освобождая их память.</li>
            <li><strong>Generational Garbage Collection (Поколенческая сборка мусора):</strong> Этот подход разделяет объекты на поколения — молодое, старшее и постоянное. Новые объекты сначала создаются в молодом поколении. Если они "выживают" несколько циклов сборки мусора, они перемещаются в старшее поколение, где сборка происходит реже.</li>
        </ul>

        <h4>Преимущества использования GC в Java:</h4>
        <ul>
            <li><strong>Автоматическое управление памятью:</strong> Разработчикам не нужно вручную освобождать память, что снижает количество ошибок, связанных с утечками памяти.</li>
            <li><strong>Повышение производительности:</strong> GC эффективно управляет памятью, освобождая неиспользуемые объекты, что позволяет улучшить производительность программы в долгосрочной перспективе.</li>
        </ul>

        <h4>Пример работы с GC:</h4>
        <p>Хотя Java автоматически выполняет сборку мусора, можно вызвать GC вручную с помощью метода <code>System.gc()</code>. Однако, в большинстве случаев, доверять управление сборкой мусора лучше JVM:</p>
        <pre><code>
public class GarbageCollectionExample {
    public static void main(String[] args) {
        GarbageCollectionExample obj = new GarbageCollectionExample();
        obj = null;  // Объект становится недостижимым
        System.gc(); // Запрос на выполнение сборки мусора
    }
    
    @Override
    protected void finalize() throws Throwable {
        System.out.println("Garbage Collection завершена!");
    }
}
        </code></pre>
        <p>В этом примере объект <code>obj</code> становится недостижимым после присвоения значения <code>null</code>, и после вызова <code>System.gc()</code>, JVM выполняет сборку мусора.</p>

        <p>Важно помнить, что вызов <code>System.gc()</code> — это всего лишь запрос, и фактическая сборка мусора будет выполнена только тогда, когда JVM решит, что это необходимо.</p>
    `,category:"tools",tool:"java"},{id:17,question:"Какова роль метода `main()` в Java и что он означает?",answer:`
        <p>Метод <strong><code>main()</code></strong> в Java является точкой входа в программу и используется JVM (Java Virtual Machine) для запуска программы. Это обязательный метод, с которого начинается выполнение всех Java-программ.</p>

        <h4>Сигнатура метода <code>main()</code>:</h4>
        <pre><code>
public static void main(String[] args)
        </code></pre>

        <p>Каждый элемент в этой сигнатуре имеет свое значение:</p>
        <ul>
            <li><strong>public</strong> — метод доступен из любой части программы. Это необходимо, чтобы JVM могла запустить его.</li>
            <li><strong>static</strong> — метод принадлежит классу, а не объекту. JVM может вызывать <code>main()</code> без создания экземпляра класса.</li>
            <li><strong>void</strong> — метод не возвращает никакого значения.</li>
            <li><strong>main</strong> — это имя метода, который JVM ищет для запуска программы.</li>
            <li><strong>String[] args</strong> — массив строк, представляющий аргументы командной строки, передаваемые программе при ее запуске. Эти аргументы могут быть использованы для передачи данных в программу на этапе запуска.</li>
        </ul>

        <h4>Пример метода <code>main()</code>:</h4>
        <pre><code>
public class MainExample {
    public static void main(String[] args) {
        System.out.println("Привет, Java!");
    }
}
        </code></pre>
        <p>Когда эта программа запускается, JVM ищет метод <code>main()</code> и начинает выполнение с первой строки внутри этого метода. В данном случае программа выведет на экран строку <code>Привет, Java!</code>.</p>

        <h4>Аргументы командной строки:</h4>
        <p>Вы можете передавать значения в программу через массив <code>String[] args</code>. Например:</p>
        <pre><code>
public class CommandLineExample {
    public static void main(String[] args) {
        if (args.length > 0) {
            System.out.println("Переданные аргументы: " + args[0]);
        } else {
            System.out.println("Аргументы не были переданы.");
        }
    }
}
        </code></pre>
        <p>Запустив эту программу с аргументами командной строки (например, <code>java CommandLineExample Hello</code>), вы получите вывод: <code>Переданные аргументы: Hello</code>.</p>

        <p>Метод <code>main()</code> играет ключевую роль в запуске Java-программ и является необходимым компонентом для исполнения кода. Без корректно написанного метода <code>main()</code> JVM не сможет запустить программу.</p>
    `,category:"tools",tool:"java"},{id:18,question:"Какие существуют коллекции в Java (например, `ArrayList`, `HashMap`, `Set`) и как с ними работать?",answer:`
        <p>Основные типы коллекций в Java можно разделить на четыре категории: <strong>List</strong>, <strong>Set</strong>, <strong>Queue</strong> и <strong>Map</strong>.</p>

        <h4>Типы коллекций:</h4>
        <ul>
            <li><strong>List</strong> представляет собой упорядоченный список, где элементы могут повторяться. Примеры классов List: <code>ArrayList</code>, <code>LinkedList</code>, <code>Vector</code>.</li>
            <li><strong>Set</strong> — это коллекция уникальных элементов, где каждый элемент может быть добавлен только один раз. Примеры классов Set: <code>HashSet</code>, <code>TreeSet</code>, <code>LinkedHashSet</code>.</li>
            <li><strong>Queue</strong> — коллекция, работающая по принципу «первым пришел — первым вышел» (FIFO — First-In-First-Out). Примеры классов Queue: <code>LinkedList</code>, <code>PriorityQueue</code>.</li>
            <li><strong>Map</strong> — это коллекция пар ключ-значение, где каждый ключ является уникальным. Примеры классов Map: <code>HashMap</code>, <code>TreeMap</code>, <code>LinkedHashMap</code>.</li>
        </ul>

        <h4>Основные операции с коллекциями:</h4>
        <ul>
            <li><strong>Добавление элемента</strong>: <code>list.add(element)</code>, <code>set.add(element)</code>, <code>queue.add(element)</code>, <code>map.put(key, value)</code>.</li>
            <li><strong>Получение элемента</strong>: <code>list.get(index)</code>, <code>set.contains(element)</code>, <code>queue.peek()</code>, <code>map.get(key)</code>.</li>
            <li><strong>Удаление элемента</strong>: <code>list.remove(element)</code>, <code>set.remove(element)</code>, <code>queue.poll()</code>, <code>map.remove(key)</code>.</li>
            <li><strong>Итерация по коллекции</strong>: Цикл <code>for-each</code> или итератор, например <code>for (Element element : list)</code>, <code>for (Entry entry : map.entrySet())</code>.</li>
            <li><strong>Размер коллекции</strong>: <code>list.size()</code>, <code>set.size()</code>, <code>queue.size()</code>, <code>map.size()</code>.</li>
        </ul>

        <h4>Пример использования итератора:</h4>
        <pre><code>
List<String> list = new ArrayList<>();
list.add("Элемент 1");
list.add("Элемент 2");
list.add("Элемент 3");

Iterator<String> iterator = list.iterator();
while (iterator.hasNext()) {
    String element = iterator.next();
    System.out.println(element);
}
        </code></pre>

        <h4>Примеры использования коллекций:</h4>
        <ul>
            <li><strong>ArrayList</strong>:
                <pre><code>
List<String> list = new ArrayList<>();
list.add("Элемент 1");
list.add("Элемент 2");
list.add("Элемент 3");
System.out.println(list.get(1)); // Выводит "Элемент 2"
                </code></pre>
            </li>

            <li><strong>HashSet</strong>:
                <pre><code>
Set<String> set = new HashSet<>();
set.add("Элемент 1");
set.add("Элемент 2");
set.add("Элемент 3");
System.out.println(set.contains("Элемент 2")); // Выводит true
                </code></pre>
            </li>

            <li><strong>HashMap</strong>:
                <pre><code>
Map<String, Integer> map = new HashMap<>();
map.put("Ключ 1", 1);
map.put("Ключ 2", 2);
map.put("Ключ 3", 3);
System.out.println(map.get("Ключ 2")); // Выводит 2
                </code></pre>
            </li>
        </ul>

        <h4>Заключение:</h4>
        <p>При выборе подходящей коллекции важно учитывать, нужны ли уникальные элементы (<code>Set</code>), порядок добавления (<code>List</code>) или работа с парами ключ-значение (<code>Map</code>).</p>
    `,category:"tools",tool:"java"},{id:19,question:"Что такое Generics в Java и как они используются?",answer:`
        <p><strong>Generics</strong> (или дженерики) в Java — это механизм, который позволяет создавать классы, методы и интерфейсы с использованием параметров типов, обеспечивая их работу с различными типами данных, сохраняя безопасность типов во время компиляции.</p>

        <h4>Основная цель использования Generics:</h4>
        <p>Generics помогают писать код, который работает с определенным типом данных, снижая вероятность ошибок и повышая безопасность типов. Это избавляет от необходимости писать однотипные классы и методы для каждого конкретного типа данных.</p>

        <h4>Пример создания дженерик-класса:</h4>
        <pre><code>
class MyClass<T> {
    private T value;

    public MyClass(T value) {
        this.value = value;
    }

    public T getValue() {
        return value;
    }
}
        </code></pre>

        <p>В этом примере класс <code>MyClass</code> является дженерик-классом, который может работать с любым типом данных. При создании объекта этого класса тип указывается следующим образом: <code>MyClass<Integer> obj = new MyClass<>(10);</code>.</p>

        <h4>Generics-классы и методы:</h4>
        <ul>
            <li><strong>Generics-классы</strong> — это классы, которые используют параметры типов для работы с разными типами данных. Параметры типов указываются в треугольных скобках при объявлении класса.</li>
            <li><strong>Generics-методы</strong> — это методы, которые могут работать с различными типами данных. Тип данных передается методу как параметр при его вызове.</li>
        </ul>

        <h4>Raw Types:</h4>
        <p><strong>Raw types</strong> — это дженерик-классы, у которых не указан тип. Их использование не рекомендуется, так как это может привести к ошибкам во время выполнения программы. Например: <code>MyClass obj = new MyClass();</code>.</p>

        <h4>Стирание типов:</h4>
        <p>После компиляции информация о типах в дженериках "стирается", и программа не хранит типовую информацию в байт-коде. Это сделано для обратной совместимости с более старыми версиями Java.</p>

        <h4>Пример использования дженерик-метода:</h4>
        <pre><code>
public class GenericsExample {
    public static <T> void print(T item) {
        System.out.println(item);
    }

    public static void main(String[] args) {
        print(123);   // Работает с Integer
        print("abc"); // Работает со String
    }
}
        </code></pre>

        <h4>Wildcards (дикие карты):</h4>
        <p>Wildcards (дикие карты) используются для того, чтобы указать неопределенный тип данных в дженерике. В Java это обозначается знаком вопроса (<code>?</code>). Например, <code>List&lt;?&gt;</code> может хранить данные любого типа. Также существуют ограниченные wildcards:</p>
        <ul>
            <li><strong>Upper bounded wildcards:</strong> <code>List&lt;? extends Number&gt;</code> — допускает использование <code>Number</code> и его подклассов.</li>
            <li><strong>Lower bounded wildcards:</strong> <code>List&lt;? super Integer&gt;</code> — допускает использование <code>Integer</code> и его суперклассов.</li>
        </ul>

        <h4>Заключение:</h4>
        <p>Generics делают код более гибким и типобезопасным, упрощая работу с различными типами данных, при этом минимизируя количество ошибок в ходе компиляции. Использование дженериков также помогает избежать дублирования кода.</p>
    `,category:"tools",tool:"java"},{id:20,question:"Как работает цикл `for-each` в Java и когда его следует использовать?",answer:`
        <p>Цикл <strong>for-each</strong> в Java предназначен для перебора элементов коллекций, массивов или любых объектов, реализующих интерфейс <code>Iterable</code>. Этот цикл упрощает процесс итерации по элементам, устраняя необходимость использовать индексы или явные итераторы.</p>

        <h4>Синтаксис:</h4>
        <pre><code>
for (тип_элемента переменная : коллекция) {
    // действия с переменной
}
        </code></pre>
        <p><strong>Объяснение:</strong></p>
        <ul>
            <li><strong>тип_элемента</strong> — тип элементов в коллекции (например, <code>String</code>).</li>
            <li><strong>переменная</strong> — переменная, содержащая элемент коллекции на текущей итерации.</li>
            <li><strong>коллекция</strong> — объект, реализующий <code>Iterable</code> (например, массив, <code>List</code>, <code>Set</code>).</li>
        </ul>

        <h4>Пример использования:</h4>
        <pre><code>
List&lt;String&gt; elements = new ArrayList&lt;&gt;();
elements.add("foo");
elements.add("bar");
elements.add("baz");

for (String element : elements) {
    System.out.println(element);
}
        </code></pre>

        <p><strong>Результат:</strong></p>
        <pre><code>
foo
bar
baz
        </code></pre>

        <h4>Когда использовать for-each:</h4>
        <p>Цикл <strong>for-each</strong> следует использовать, когда нужно пройтись по всем элементам коллекции без изменения или удаления элементов. Он особенно полезен, когда не требуется доступ к индексу элемента. Для операций, связанных с изменением коллекции во время итерации (например, удаление элементов), лучше использовать итераторы или классический цикл <code>for</code>.</p>
        `,category:"tools",tool:"java"},{id:21,question:"Как организовать многопоточность в Java (классы `Thread` и интерфейс `Runnable`)?",answer:`
        <p>В Java многопоточность можно организовать с помощью класса <code>Thread</code> и интерфейса <code>Runnable</code>. Многопоточность позволяет программе выполнять несколько задач одновременно, что улучшает производительность при работе с долгими процессами, такими как ввод/вывод или сетевые операции.</p>

        <h4>Способы создания потоков:</h4>
        
        <h5>1. Наследование от класса <code>Thread</code>:</h5>
        <p>Вы можете создать новый поток, создав класс, который наследует <code>Thread</code> и переопределяет его метод <code>run()</code>.</p>
        
        <pre><code>
class MyThread extends Thread {
    @Override
    public void run() {
        // Код, который будет выполнен в новом потоке
        System.out.println("Выполняется поток: " + Thread.currentThread().getName());
    }
}

public class Main {
    public static void main(String[] args) {
        MyThread thread = new MyThread();
        thread.start();  // Запуск нового потока
    }
}
        </code></pre>
        <p>Метод <code>start()</code> запускает новый поток, который выполняет код внутри метода <code>run()</code>.</p>
        
        <h5>2. Реализация интерфейса <code>Runnable</code>:</h5>
        <p>Другой способ создания потока — реализация интерфейса <code>Runnable</code>. Это предпочтительный подход, поскольку Java поддерживает только одиночное наследование, и реализация интерфейса позволяет классу быть более гибким.</p>

        <pre><code>
class MyRunnable implements Runnable {
    @Override
    public void run() {
        System.out.println("Выполняется поток: " + Thread.currentThread().getName());
    }
}

public class Main {
    public static void main(String[] args) {
        Thread thread = new Thread(new MyRunnable());
        thread.start();  // Запуск нового потока
    }
}
        </code></pre>

        <p>Интерфейс <code>Runnable</code> требует реализации метода <code>run()</code>, в котором пишется код, который будет выполнен в потоке. Создание потока происходит с помощью передачи объекта <code>Runnable</code> в конструктор <code>Thread</code>.</p>
        
        <h4>Когда использовать Thread и Runnable:</h4>
        <p>Используйте <code>Thread</code>, когда вам нужно создавать поток, который расширяет возможности класса. <code>Runnable</code> лучше использовать, если ваш класс уже наследуется от другого и вам просто нужно добавить функциональность многопоточности.</p>
        
        <h4>Запуск нескольких потоков:</h4>
        <p>Для запуска нескольких потоков создайте несколько экземпляров класса <code>Thread</code> или <code>Runnable</code>, каждый из которых будет запускать свои потоки параллельно.</p>

        <pre><code>
public class Main {
    public static void main(String[] args) {
        for (int i = 0; i < 5; i++) {
            new Thread(new MyRunnable()).start();
        }
    }
}
        </code></pre>
    `,category:"tools",tool:"java"},{id:22,question:"Что такое синхронизация потоков в Java и как её реализовать?",answer:`
        <p>Синхронизация потоков в Java — это механизм, который позволяет контролировать доступ нескольких потоков к общим ресурсам, чтобы предотвратить непредсказуемое поведение программы и несогласованность данных. Синхронизация используется, чтобы избежать ситуаций, когда несколько потоков одновременно изменяют или получают доступ к одному и тому же ресурсу.</p>
        
        <h4>Зачем нужна синхронизация:</h4>
        <ul>
            <li>Для предотвращения одновременного доступа потоков к общим ресурсам.</li>
            <li>Чтобы устранить проблему согласованности данных, возникающую при параллельной обработке данных несколькими потоками.</li>
        </ul>
        
        <h4>Типы синхронизации:</h4>
        <ul>
            <li><strong>Синхронизация процессов</strong> — обеспечивает согласованное выполнение нескольких процессов.</li>
            <li><strong>Синхронизация потоков</strong> — координирует доступ потоков к общим ресурсам для предотвращения конфликтов и ошибок.</li>
        </ul>
        
        <h4>Механизмы синхронизации:</h4>
        <p>Для реализации синхронизации в Java используются следующие инструменты:</p>
        <ul>
            <li><strong>Синхронизированные методы</strong> — метод помечается ключевым словом <code>synchronized</code>, что ограничивает доступ к методу только одному потоку за раз.</li>
            <li><strong>Синхронизированные блоки</strong> — синхронизация небольшого участка кода, а не всего метода, что делает программу более эффективной.</li>
        </ul>
        
        <h4>Пример синхронизированного метода:</h4>
        <pre><code>
class Table {
    synchronized void printTable(int n) {
        for (int i = 1; i <= 5; i++) {
            System.out.println(n * i);
            try {
                Thread.sleep(400);
            } catch (Exception e) {
                System.out.println(e);
            }
        }
    }
}

class MyThread1 extends Thread {
    Table t;
    MyThread1(Table t) {
        this.t = t;
    }
    public void run() {
        t.printTable(2);
    }
}

class MyThread2 extends Thread {
    Table t;
    MyThread2(Table t) {
        this.t = t;
    }
    public void run() {
        t.printTable(10);
    }
}

public class TestSynchronization {
    public static void main(String[] args) {
        Table obj = new Table();
        MyThread1 t1 = new MyThread1(obj);
        MyThread2 t2 = new MyThread2(obj);
        t1.start();
        t2.start();
    }
}
        </code></pre>
        
        <h4>Выход программы:</h4>
        <p>Поскольку метод <code>printTable()</code> синхронизирован, потоки t1 и t2 будут выполняться последовательно, избегая одновременного доступа к методу:</p>
        <pre>
2
4
6
8
10
20
30
40
50
60
        </pre>
        
        <h4>Использование анонимных классов для синхронизации:</h4>
        <pre><code>
class Table {
    synchronized void printTable(int n) {
        for (int i = 1; i <= 5; i++) {
            System.out.println(n * i);
            try {
                Thread.sleep(400);
            } catch (Exception e) {
                System.out.println(e);
            }
        }
    }
}

public class TestSynchronization {
    public static void main(String[] args) {
        final Table obj = new Table();

        Thread t1 = new Thread() {
            public void run() {
                obj.printTable(2);
            }
        };
        Thread t2 = new Thread() {
            public void run() {
                obj.printTable(10);
            }
        };

        t1.start();
        t2.start();
    }
}
        </code></pre>
        
        <h4>Заключение:</h4>
        <p>Синхронизация потоков позволяет управлять доступом к общим ресурсам в многопоточных приложениях, предотвращая возможные проблемы с согласованностью данных. В Java синхронизация реализуется через ключевое слово <code>synchronized</code>, которое может быть применено к методам или блокам кода.</p>
    `,category:"tools",tool:"java"},{id:23,question:"Что такое лямбда-выражения в Java и как их использовать?",answer:`
        <p><strong>Лямбда-выражения</strong> в Java — это компактный синтаксис для передачи кода в качестве параметра в другой код. Лямбда позволяет значительно сократить запись функциональных интерфейсов и избежать громоздких анонимных классов, которые были необходимы до появления лямбд в Java 8.</p>
        
        <h4>Основной синтаксис лямбда-выражений:</h4>
        <pre><code>(параметры) -> (тело выражения)</code></pre>
        <p>Например, следующая запись представляет лямбда-выражение для сложения двух чисел:</p>
        <pre><code>(a, b) -> a + b</code></pre>
        <p>Здесь <code>a</code> и <code>b</code> — это параметры, а <code>a + b</code> — тело выражения, которое возвращает результат.</p>

        <h4>Использование лямбд с функциональными интерфейсами:</h4>
        <p>Лямбда-выражения реализуют методы функциональных интерфейсов — интерфейсов с одним абстрактным методом. Например, лямбда для интерфейса <code>ToIntBiFunction&lt;Integer, Integer&gt;</code>:</p>
        <pre><code>
ToIntBiFunction&lt;Integer, Integer&gt; biFunction = (a, b) -> a + b;
processTwoNumbers(1, 2, biFunction);
        </code></pre>

        <p>Компилятор проверяет, что лямбда соответствует типу функционального интерфейса — принимает нужное число параметров и возвращает правильный тип.</p>

        <h4>Применение лямбд в коде:</h4>
        <ul>
            <li><strong>Итерация по коллекциям:</strong>
                <pre><code>
List&lt;Integer&gt; integers = Arrays.asList(1, 2, 3, 4, 5);
integers.forEach(item -> System.out.println(item));
                </code></pre>
            </li>
            <li><strong>Использование в компараторах:</strong>
                <pre><code>
List&lt;String&gt; colors = Arrays.asList("Black", "White", "Red");
Collections.sort(colors, (o1, o2) -> {
   String o1LastLetter = o1.substring(o1.length() - 1);
   String o2LastLetter = o2.substring(o2.length() - 1);
   return o1LastLetter.compareTo(o2LastLetter);
});
                </code></pre>
            </li>
            <li><strong>Работа с Stream API:</strong>
                <pre><code>
List&lt;Double&gt; pricesRub = Arrays.asList(25d, 50d , 60d, 12d, 45d, 89d);
List&lt;Double&gt; pricesUsdGreater50Rub = pricesRub.stream()
   .filter(d -> d &gt; 50) 
   .map(d -> d / 80) 
   .collect(Collectors.toList());
                </code></pre>
            </li>
        </ul>

        <h4>Заключение:</h4>
        <p>Лямбда-выражения в Java позволяют писать более лаконичный код, избавляясь от лишней синтаксической нагрузки. Они делают код более понятным и удобным, особенно при работе с функциональными интерфейсами и API, такими как <code>Stream</code>.</p>
    `,category:"tools",tool:"java"},{id:24,question:"Как работать с файлами и потоками ввода-вывода (I/O) в Java?",answer:`
        <p>В Java для работы с файлами и потоками ввода-вывода (I/O) существует несколько классов и интерфейсов, которые предоставляют различные способы чтения и записи данных.</p>
        
        <h4>Основные классы для работы с файлами:</h4>
        <ul>
            <li><code>File</code> — класс для работы с файлами и директориями (создание, удаление, получение информации).</li>
            <li><code>FileReader</code> и <code>FileWriter</code> — классы для работы с символьными потоками (чтение и запись текста).</li>
            <li><code>BufferedReader</code> и <code>BufferedWriter</code> — классы для буферизированного чтения и записи, которые повышают производительность при работе с большими объемами данных.</li>
            <li><code>FileInputStream</code> и <code>FileOutputStream</code> — классы для работы с байтовыми потоками (чтение и запись двоичных данных).</li>
            <li><code>Scanner</code> — класс для удобного чтения текстовых файлов построчно.</li>
        </ul>

        <h4>Пример чтения файла с помощью <code>FileReader</code>:</h4>
        <pre><code>
import java.io.FileReader;
import java.io.IOException;

public class FileReadExample {
    public static void main(String[] args) {
        try (FileReader reader = new FileReader("example.txt")) {
            int character;
            while ((character = reader.read()) != -1) {
                System.out.print((char) character);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
        </code></pre>

        <h4>Пример записи в файл с помощью <code>FileWriter</code>:</h4>
        <pre><code>
import java.io.FileWriter;
import java.io.IOException;

public class FileWriteExample {
    public static void main(String[] args) {
        try (FileWriter writer = new FileWriter("example.txt")) {
            writer.write("Hello, World!");
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
        </code></pre>

        <h4>Использование <code>BufferedReader</code> для построчного чтения файла:</h4>
        <pre><code>
import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

public class BufferedReadExample {
    public static void main(String[] args) {
        try (BufferedReader reader = new BufferedReader(new FileReader("example.txt"))) {
            String line;
            while ((line = reader.readLine()) != null) {
                System.out.println(line);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
        </code></pre>

        <h4>Использование <code>FileInputStream</code> и <code>FileOutputStream</code> для работы с байтовыми данными:</h4>
        <pre><code>
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;

public class ByteStreamExample {
    public static void main(String[] args) {
        try (FileInputStream input = new FileInputStream("input.bin");
             FileOutputStream output = new FileOutputStream("output.bin")) {
            
            int byteData;
            while ((byteData = input.read()) != -1) {
                output.write(byteData);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
        </code></pre>

        <h4>Чтение файла с помощью <code>Scanner</code>:</h4>
        <pre><code>
import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

public class ScannerExample {
    public static void main(String[] args) {
        try (Scanner scanner = new Scanner(new File("example.txt"))) {
            while (scanner.hasNextLine()) {
                System.out.println(scanner.nextLine());
            }
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        }
    }
}
        </code></pre>

        <h4>Заключение:</h4>
        <p>Работа с файлами и потоками в Java предоставляется через множество классов для работы с символьными и байтовыми потоками. Использование буферизации и правильное управление ресурсами (через try-with-resources) помогает эффективно обрабатывать данные.</p>
    `,category:"tools",tool:"java"},{id:25,question:"Как работает система модулей (modules) в Java?",answer:`
        <p>Модули в Java — это способ организации и структурирования программного кода, который был введен в Java 9 в рамках проекта Jigsaw. Модули помогают разделить приложение на логически независимые части, управлять зависимостями и улучшить инкапсуляцию.</p>

        <h4>Основные понятия модулей в Java:</h4>
        <ul>
            <li><strong>Модуль</strong> — независимая единица кода, содержащая классы, интерфейсы, ресурсы и другие компоненты. Он определяется с помощью файла <code>module-info.java</code>.</li>
            <li><strong>Файл module-info.java</strong> — файл, который описывает имя модуля, экспортируемые пакеты и зависимости на другие модули.</li>
            <li><strong>Экспорт пакетов</strong> — модули могут экспортировать свои пакеты для использования другими модулями через ключевое слово <code>exports</code>.</li>
            <li><strong>Зависимости</strong> — модули могут зависеть от других модулей, и эти зависимости указываются с помощью ключевого слова <code>requires</code>.</li>
        </ul>

        <h4>Пример файла <code>module-info.java</code>:</h4>
        <pre><code>
module mymodule {
    requires java.base;  // Зависимость от модуля java.base
    exports com.mypackage;  // Экспорт пакета для использования другими модулями
}
        </code></pre>

        <h4>Основные преимущества модульной системы:</h4>
        <ul>
            <li><strong>Четкая инкапсуляция:</strong> модули позволяют скрывать внутренние детали реализации и экспортировать только необходимые компоненты.</li>
            <li><strong>Управление зависимостями:</strong> модули управляют зависимостями, что улучшает сборку, тестирование и развертывание приложений.</li>
            <li><strong>Масштабируемость:</strong> модули упрощают работу с большими проектами за счет разделения на логические блоки.</li>
        </ul>

        <h4>Пример простого проекта с модулями:</h4>
        <p>Представим, что у нас есть два модуля: <code>core</code> для бизнес-логики и <code>ui</code> для пользовательского интерфейса.</p>
        
        <h5>Файл <code>module-info.java</code> для модуля <code>core</code>:</h5>
        <pre><code>
module core {
    exports com.core;  // Экспорт пакета com.core
}
        </code></pre>

        <h5>Файл <code>module-info.java</code> для модуля <code>ui</code>:</h5>
        <pre><code>
module ui {
    requires core;  // Зависимость от модуля core
}
        </code></pre>

        <h4>Заключение:</h4>
        <p>Система модулей в Java помогает улучшить архитектуру приложения, управлять зависимостями и инкапсуляцией, а также повышает безопасность и производительность. Модульный подход делает код более структурированным и масштабируемым, что особенно полезно для больших проектов.</p>
    `,category:"tools",tool:"java"},{id:26,question:"Что такое Enum в Java и как он используется?",answer:`
        <p><strong>Enum</strong> (перечисление) в Java — это специальный тип данных, который позволяет разработчику создавать переменные с ограниченным набором значений, представляющих собой константы. Он используется для определения фиксированных наборов элементов, таких как дни недели, месяцы года или состояния программы.</p>
        
        <h4>Особенности перечислений (Enum) в Java:</h4>
        <ul>
            <li>Enum является подклассом класса <code>java.lang.Enum</code>, и он не может наследоваться от других классов.</li>
            <li>Каждый элемент перечисления является экземпляром <code>Enum</code> и по сути представляет собой объект.</li>
            <li>Enum поддерживает методы <code>ordinal()</code>, <code>name()</code>, <code>valueOf(String)</code>, <code>values()</code> и другие.</li>
            <li>Перечисления можно использовать в операторах <code>switch</code>.</li>
        </ul>

        <h4>Пример простого перечисления:</h4>
        <pre><code>
public enum SimpleProtocol {
    DHCP, HTTP, HTTPS, NFS;
}
        </code></pre>
        <p>Использование перечисления:</p>
        <pre><code>
SimpleProtocol protocol = SimpleProtocol.HTTP;
System.out.println("Protocol: " + protocol);
        </code></pre>
        
        <h4>Методы Enum:</h4>
        <ul>
            <li><code>name()</code> — возвращает строковое имя константы.</li>
            <li><code>ordinal()</code> — возвращает порядковый номер константы.</li>
            <li><code>valueOf()</code> — возвращает константу по строковому имени.</li>
            <li><code>values()</code> — возвращает массив всех констант перечисления.</li>
        </ul>

        <h4>Перечисления с конструктором и полями:</h4>
        <p>Вы можете добавлять поля и методы в перечисления. Например:</p>
        <pre><code>
public enum NamedProtocol {
    DHCP("Dynamic Host Configuration Protocol"),
    HTTP("Hypertext Transfer Protocol"),
    HTTPS("Hyper Text Transfer Protocol Secure");

    private String fullName;

    NamedProtocol(String fullName) {
        this.fullName = fullName;
    }

    public String getFullName() {
        return fullName;
    }
}
        </code></pre>
        <p>Пример использования:</p>
        <pre><code>
System.out.println(NamedProtocol.HTTP.getFullName());
        </code></pre>

        <h4>Enum в операторе switch:</h4>
        <pre><code>
SimpleProtocol protocol = SimpleProtocol.HTTPS;
switch (protocol) {
    case DHCP:
        System.out.println("Using DHCP protocol");
        break;
    case HTTP:
        System.out.println("Using HTTP protocol");
        break;
    case HTTPS:
        System.out.println("Using HTTPS protocol");
        break;
    case NFS:
        System.out.println("Using NFS protocol");
        break;
}
        </code></pre>

        <h4>Заключение:</h4>
        <p>Перечисления (Enum) в Java упрощают работу с предопределенными наборами значений, обеспечивают безопасность типов и помогают избегать ошибок, связанных с использованием недопустимых значений. Они могут быть расширены с помощью полей, методов, а также могут реализовывать интерфейсы, что делает их мощным инструментом в Java.</p>
    `,category:"tools",tool:"java"},{id:27,question:"Как подключать и использовать сторонние библиотеки в Java с помощью Maven или Gradle?",answer:`
        <p>В Java для управления зависимостями и сборки проектов широко используются инструменты Maven и Gradle. Оба инструмента помогают подключать сторонние библиотеки, управлять версиями и автоматически загружать необходимые зависимости из центральных репозиториев. Рассмотрим, как это делается на примере Maven и Gradle.</p>

        <h3>1. Использование Maven</h3>
        <p><strong>Maven</strong> — это популярный инструмент для управления проектами и зависимостями. Для того чтобы подключить стороннюю библиотеку в Maven-проекте, необходимо отредактировать файл <code>pom.xml</code>.</p>

        <h4>Пример подключения библиотеки с помощью Maven:</h4>
        <pre><code>&lt;project xmlns="http://maven.apache.org/POM/4.0.0"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd"&gt;
    &lt;modelVersion&gt;4.0.0&lt;/modelVersion&gt;

    &lt;groupId&gt;com.example&lt;/groupId&gt;
    &lt;artifactId&gt;my-project&lt;/artifactId&gt;
    &lt;version&gt;1.0-SNAPSHOT&lt;/version&gt;

    &lt;dependencies&gt;
        &lt;dependency&gt;
            &lt;groupId&gt;org.springframework&lt;/groupId&gt;
            &lt;artifactId&gt;spring-context&lt;/artifactId&gt;
            &lt;version&gt;5.3.10&lt;/version&gt;
        &lt;/dependency&gt;
    &lt;/dependencies&gt;
&lt;/project&gt;
        </code></pre>

        <p>Для добавления зависимости в Maven необходимо указать:</p>
        <ul>
            <li><code>groupId</code> — группа, к которой принадлежит библиотека;</li>
            <li><code>artifactId</code> — идентификатор артефакта (библиотеки);</li>
            <li><code>version</code> — версия библиотеки.</li>
        </ul>
        <p>После добавления зависимости в <code>pom.xml</code>, Maven автоматически загрузит библиотеку из центрального репозитория Maven, как только вы выполните команду <code>mvn install</code> или <code>mvn package</code>.</p>

        <h3>2. Использование Gradle</h3>
        <p><strong>Gradle</strong> — это современный инструмент для автоматизации сборки, который предлагает более гибкий и декларативный подход. В Gradle зависимости добавляются в файл <code>build.gradle</code>.</p>

        <h4>Пример подключения библиотеки с помощью Gradle:</h4>
        <pre><code>plugins {
    id 'java'
}

repositories {
    mavenCentral()
}

dependencies {
    implementation 'org.springframework:spring-context:5.3.10'
}
        </code></pre>

        <p>Для добавления зависимости в Gradle нужно указать:</p>
        <ul>
            <li><code>repositories</code> — место, откуда будут загружаться зависимости, например, <code>mavenCentral()</code>;</li>
            <li><code>dependencies</code> — секцию, где подключаются библиотеки. Используются ключевые слова <code>implementation</code>, <code>api</code> и другие для указания зависимости.</li>
        </ul>
        <p>После добавления зависимости нужно запустить команду <code>gradle build</code> для автоматической загрузки и подключения библиотеки.</p>

        <h3>3. Заключение</h3>
        <p>И <strong>Maven</strong>, и <strong>Gradle</strong> позволяют легко подключать сторонние библиотеки и управлять зависимостями. Maven использует XML для описания проекта, а Gradle — Groovy или Kotlin DSL. Оба инструмента активно используются в Java-разработке, и выбор между ними зависит от предпочтений команды и специфики проекта.</p>
    `,category:"tools",tool:"java"},{id:28,question:"Как организовать работу с базами данных в Java (JDBC, ORM)?",answer:`
        <p>Работа с базами данных в Java может быть организована несколькими способами, включая использование низкоуровневого API JDBC и более высокоуровневых ORM-фреймворков, таких как Hibernate.</p>

        <h3>1. JDBC (Java Database Connectivity)</h3>
        <p><strong>JDBC</strong> — это низкоуровневый API для выполнения SQL-запросов к базе данных. Он предоставляет все необходимые инструменты для работы с базами данных, включая открытие соединений, выполнение запросов, получение результатов и обработку транзакций.</p>

        <h4>Пример работы с JDBC:</h4>
        <pre><code>
        try (Connection conn = DriverManager.getConnection("jdbc:mysql://localhost/test", "user", "password")) {
            PreparedStatement stmt = conn.prepareStatement("SELECT * FROM users");
            ResultSet rs = stmt.executeQuery();

            while (rs.next()) {
                int id = rs.getInt("id");
                String name = rs.getString("name");
                System.out.println("ID: " + id + ", Name: " + name);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        </code></pre>
        <p>JDBC требует ручной работы с SQL-запросами, ResultSet и управлением соединениями. Это может быть трудоемко, особенно для крупных проектов, где используется большое количество запросов.</p>

        <h3>2. ORM-фреймворки (например, Hibernate)</h3>
        <p><strong>Hibernate</strong> — это один из самых популярных ORM-фреймворков, который значительно упрощает работу с базами данных. ORM (Object-Relational Mapping) позволяет разработчикам отображать объектные модели Java на реляционные базы данных. Это помогает избежать написания SQL-запросов вручную и автоматизировать процесс преобразования данных между Java-объектами и базой данных.</p>

        <h4>Пример использования Hibernate:</h4>
        <pre><code>
        @Entity
        @Table(name="users")
        public class User {
            @Id
            @GeneratedValue(strategy = GenerationType.AUTO)
            private Integer id;

            @Column(name="first_name")
            private String firstName;

            @Column(name="last_name")
            private String lastName;

            // Getters and setters
        }

        SessionFactory sessionFactory = new Configuration().configure().buildSessionFactory();
        Session session = sessionFactory.openSession();
        session.beginTransaction();

        User user = new User();
        user.setFirstName("John");
        user.setLastName("Doe");
        session.save(user);

        session.getTransaction().commit();
        session.close();
        </code></pre>

        <p>В отличие от JDBC, ORM-фреймворки автоматически преобразуют данные между объектами Java и таблицами базы данных. Hibernate поддерживает автоматическую генерацию SQL, ленивую загрузку данных, каскадные операции и другие функции, упрощающие работу с базами данных.</p>

        <h3>3. Итог</h3>
        <p>Для низкоуровневого доступа к базе данных в Java можно использовать <strong>JDBC</strong>, который предоставляет полный контроль над SQL-запросами, но требует больше кода для обработки данных. Для более удобной и абстрактной работы с базами данных разработчики могут использовать <strong>ORM-фреймворки</strong> (например, Hibernate), которые позволяют сосредоточиться на работе с объектами, а не с SQL-кодом.</p>
    `,category:"tools",tool:"java"},{id:29,question:"Как использовать аннотации в Java и для чего они нужны?",answer:`
        <p>Аннотации в Java — это специальные метки, которые могут быть добавлены к коду для предоставления дополнительной информации компилятору, фреймворкам или инструментам. Они не влияют напрямую на логику выполнения программы, но могут использоваться для задания инструкций, управления поведением программных компонентов или создания метаданных.</p>

        <h3>1. Основные аннотации в Java</h3>
        <ul>
            <li><strong>@Override</strong>: Указывает, что метод переопределяет метод суперкласса. Это помогает избежать ошибок при неправильном переопределении.</li>
            <li><strong>@Deprecated</strong>: Помечает метод или класс как устаревший. Компилятор генерирует предупреждение при его использовании.</li>
            <li><strong>@SuppressWarnings</strong>: Инструктирует компилятор игнорировать определенные предупреждения.</li>
            <li><strong>@FunctionalInterface</strong>: Указывает, что интерфейс является функциональным, то есть содержит только один абстрактный метод.</li>
        </ul>

        <h3>2. Пользовательские аннотации</h3>
        <p>В Java можно создавать свои собственные аннотации. Для этого используется ключевое слово <strong>@interface</strong>. Аннотация может содержать параметры, задаваемые при ее использовании.</p>

        <h4>Пример пользовательской аннотации:</h4>
        <pre><code>
        @Retention(RetentionPolicy.RUNTIME)
        @Target(ElementType.METHOD)
        public @interface MyAnnotation {
            String value();
        }

        public class Example {
            @MyAnnotation(value = "Custom Annotation")
            public void myMethod() {
                System.out.println("Method with custom annotation");
            }
        }
        </code></pre>
        <p>В примере аннотация <strong>@MyAnnotation</strong> создана с параметром <code>value</code>. Она применяется к методу <code>myMethod</code>. Аннотации могут использоваться для создания собственных метаданных и инструкций.</p>

        <h3>3. Применение аннотаций</h3>
        <p>Аннотации часто используются в таких фреймворках, как Spring и Hibernate, для автоматической настройки компонентов, обработки запросов и выполнения различных операций без необходимости написания большого количества кода. Например, в Spring аннотации <code>@Autowired</code> позволяют автоматически внедрять зависимости.</p>

        <h4>Пример с аннотацией Spring:</h4>
        <pre><code>
        @Service
        public class UserService {
            @Autowired
            private UserRepository userRepository;
            
            public List<User> getAllUsers() {
                return userRepository.findAll();
            }
        }
        </code></pre>
        <p>В этом примере аннотация <strong>@Service</strong> указывает на то, что класс <code>UserService</code> является сервисом, а аннотация <strong>@Autowired</strong> автоматически внедряет зависимость <code>UserRepository</code>.</p>

        <h3>4. Заключение</h3>
        <p>Аннотации в Java — это мощный инструмент для улучшения читаемости кода, автоматизации задач и управления зависимостями. Они широко используются для задания метаданных и инструкций как в стандартных библиотеках, так и в сторонних фреймворках, таких как Spring и Hibernate.</p>
    `,category:"tools",tool:"java"},{id:30,question:"Как выполнять юнит-тестирование в Java с использованием JUnit?",answer:`
        <p>JUnit — это открытый фреймворк для написания и запуска тестов на языке программирования Java. Он разработан с целью поддержки автоматизированных тестов, особенно модульных тестов (unit tests), и обеспечивает удобные аннотации, утверждения и утилиты, которые позволяют легко писать и запускать тесты для Java-кода.</p>

        <h3>1. Настройка тестовой среды JUnit</h3>
        <p>Для начала вам необходимо установить JUnit в ваш проект. Если вы используете Maven или Gradle, добавьте зависимость JUnit в ваш файл настроек. Ниже приведен пример для Maven:</p>

        <pre><code>
        &lt;dependency&gt;
            &lt;groupId&gt;org.junit.jupiter&lt;/groupId&gt;
            &lt;artifactId&gt;junit-jupiter-api&lt;/artifactId&gt;
            &lt;version&gt;5.7.0&lt;/version&gt;
            &lt;scope&gt;test&lt;/scope&gt;
        &lt;/dependency&gt;
        </code></pre>

        <h3>2. Основы и примеры написания тестов с JUnit</h3>
        <h4>Структура теста</h4>
        <p>Тестовый класс создается отдельно от основного кода. Он содержит один или несколько тестовых методов, каждый из которых проверяет отдельный аспект работы кода. Тестовые методы помечаются аннотацией <code>@Test</code>.</p>

        <pre><code>
        import org.junit.jupiter.api.Test;
        import static org.junit.jupiter.api.Assertions.assertEquals;

        public class CalculatorTest {

            @Test
            public void testAddition() {
                Calculator calculator = new Calculator();
                int result = calculator.add(2, 3);
                assertEquals(5, result, "2 + 3 should equal 5");
            }
        }
        </code></pre>

        <h4>Использование утверждений</h4>
        <p>Утверждения в JUnit позволяют проверять, соответствует ли результат работы вашего кода ожидаемому. Если утверждение не проходит, тест считается неудачным. Для утверждений используйте класс <code>org.junit.jupiter.api.Assertions</code>.</p>

        <pre><code>
        @Test
        public void testSubtraction() {
            Calculator calculator = new Calculator();
            int result = calculator.subtract(5, 3);
            assertEquals(2, result, "5 - 3 should equal 2");
        }
        </code></pre>

        <h4>Тестирование исключений</h4>
        <p>JUnit позволяет проверять, возникают ли соответствующие исключения при исполнении кода. Используйте метод <code>assertThrows()</code> для этого.</p>

        <pre><code>
        @Test
        public void testDivisionByZero() {
            Calculator calculator = new Calculator();
            assertThrows(ArithmeticException.class, () -> calculator.divide(10, 0), "Division by zero should throw ArithmeticException");
        }
        </code></pre>

        <h4>Использование параметризированных тестов</h4>
        <p>Параметризованные тесты позволяют запускать один тестовый метод с разными наборами данных. Они полезны для проверки многих случаев, использующих одну и ту же логику. Для этого используйте аннотации <code>@ParameterizedTest</code> и <code>@ValueSource</code>, <code>@CsvSource</code> или <code>@MethodSource</code>.</p>

        <pre><code>
        import org.junit.jupiter.params.ParameterizedTest;
        import org.junit.jupiter.params.provider.ValueSource;

        public class PrimeNumberTest {

            private PrimeNumberChecker checker = new PrimeNumberChecker();

            @ParameterizedTest
            @ValueSource(ints = {2, 3, 5, 7, 11, 13, 17})
            public void testPrimeNumbers(int number) {
                assertTrue(checker.isPrime(number), number + " should be a prime number");
            }
        }
        </code></pre>

        <h4>Использование тестовых жизненных циклов</h4>
        <p>JUnit позволяет использовать методы, которые вызываются перед и после каждого теста или всего тестового класса. Они полезны для инициализации и очистки ресурсов. Для этого используйте аннотации <code>@BeforeEach</code>, <code>@AfterEach</code>, <code>@BeforeAll</code> и <code>@AfterAll</code>.</p>

        <pre><code>
        import org.junit.jupiter.api.*;

        public class DatabaseTest {

            private DatabaseConnection connection;

            @BeforeAll
            public static void setupClass() {
                // Выполнить действия перед всеми тестами в классе
            }

            @BeforeEach
            public void setup() {
                connection = new DatabaseConnection();
                connection.connect();
                // Выполнить действия перед каждым тестом
            }

            @Test
            public void testDatabaseQuery() {
                // Тестирование запроса к базе данных
            }

            @AfterEach
            public void tearDown() {
                connection.disconnect();
                // Выполнить действия после каждого теста
            }

            @AfterAll
            public static void tearDownClass() {
                // Выполнить действия после всех тестов в классе
            }
        }
        </code></pre>

        <h4>Использование вложенных тестов</h4>
        <p>Вложенные тесты позволяют группировать тесты во вложенных классах. Это полезно для структурирования тестов и предотвращения дублирования кода.</p>

        <pre><code>
        import org.junit.jupiter.api.Nested;
        import org.junit.jupiter.api.Test;

        public class ShoppingCartTest {

            @Nested
            class AddingItems {

                @Test
                public void testAddSingleItem() {
                    // Тестирование добавления одного товара
                }

                @Test
                public void testAddMultipleItems() {
                    // Тестирование добавления нескольких товаров
                }
            }

            @Nested
            class RemovingItems {

                @Test
                public void testRemoveItem() {
                    // Тестирование удаления товара
                }

                @Test
                public void testRemoveNonExistingItem() {
                    // Тестирование удаления несуществующего товара
                }
            }
        }
        </code></pre>

        <h4>Настройка и отладка тестов</h4>
        <p>JUnit позволяет настраивать тесты с помощью аннотаций <code>@Timeout</code>, <code>@Disabled</code> и <code>@DisplayName</code>.</p>

        <pre><code>
        @Test
        @Timeout(5) // Установить временной лимит выполнения теста
        @DisplayName("Кастомное текстовое описание теста")
        public void testLongRunningOperation() {
            // Тестирование длительной операции
        }

        @Test
        @Disabled("Причина отключения теста")
        public void testDisabled() {
            // Тест, который временно отключен
        }
        </code></pre>

        <h3>3. Заключение</h3>
        <p>Тестирование Java-кода с помощью JUnit — важный и полезный процесс, который помогает обеспечить качество и стабильность вашего программного обеспечения. Используя тестовые методы, утверждения, параметризованные тесты, жизненные циклы, вложенные тесты и настройки, вы можете создавать тщательно протестированные и надежные программы на языке Java.</p>
        `,category:"tools",tool:"java"},{id:31,question:"Что такое Stream API в Java и как его использовать для обработки коллекций?",answer:`
        <p>Java Stream API — это инструмент, который позволяет использовать функциональный стиль при работе с разными структурами данных. Он был введен в Java 8 и предоставляет мощные средства для работы с коллекциями, массивами, файлами и другими источниками данных.</p>

        <h3>Основные элементы Stream API</h3>
        <p>Stream API работает с данными в виде потоков. Поток — это последовательность элементов, которые можно фильтровать, сортировать, преобразовывать и агрегировать. Потоки обрабатываются в несколько этапов: 
        <ul>
            <li><strong>Источник данных:</strong> поток всегда начинается с источника, которым может быть коллекция, массив, генератор или файл.</li>
            <li><strong>Промежуточные операции:</strong> это такие методы, как <code>filter</code>, <code>map</code>, <code>sorted</code> и другие, которые преобразуют поток, но не завершают его.</li>
            <li><strong>Терминальные операции:</strong> это конечные операции, которые поглощают поток и возвращают результат, например, <code>collect</code>, <code>forEach</code>, <code>reduce</code>.</li>
        </ul>
        </p>

        <h4>Пример использования Stream API</h4>
        <p>Допустим, вам нужно найти сумму всех нечетных чисел в коллекции:</p>

        <pre><code>
        Integer sumOdd = collection.stream()
            .filter(p -> p % 2 != 0)
            .reduce((c1, c2) -> c1 + c2)
            .orElse(0);
        </code></pre>
        
        <p>Без Stream API та же задача решается через использование циклов:</p>

        <pre><code>
        Integer sumOdd = 0;
        for(Integer i: collection) {
            if(i % 2 != 0) {
                sumOdd += i;
            }
        }
        </code></pre>

        <p>Stream API позволяет выразить тот же алгоритм более лаконично и читабельно.</p>

        <h3>Преимущества Stream API</h3>
        <ul>
            <li><strong>Краткость кода:</strong> меньше шаблонного кода для обработки данных.</li>
            <li><strong>Поддержка параллельности:</strong> можно легко распараллелить обработку данных с помощью метода <code>parallelStream()</code>.</li>
            <li><strong>Функциональный стиль программирования:</strong> поддержка работы с лямбда-выражениями и потоками данных.</li>
        </ul>

        <h3>Создание потоков</h3>
        <p>Stream API поддерживает несколько способов создания потоков:</p>
        <table>
            <thead>
                <tr><th>Источник</th><th>Способ создания</th><th>Пример</th></tr>
            </thead>
            <tbody>
                <tr><td>Коллекция</td><td><code>collection.stream()</code></td><td><code>List<String> list = Arrays.asList("a", "b", "c"); Stream<String> stream = list.stream();</code></td></tr>
                <tr><td>Значения</td><td><code>Stream.of(v1,… vN)</code></td><td><code>Stream<String> stream = Stream.of("a", "b", "c");</code></td></tr>
                <tr><td>Массив</td><td><code>Arrays.stream(array)</code></td><td><code>String[] arr = {"a", "b", "c"}; Stream<String> stream = Arrays.stream(arr);</code></td></tr>
                <tr><td>Файлы</td><td><code>Files.lines(file_path)</code></td><td><code>Stream<String> stream = Files.lines(Paths.get("file.txt"));</code></td></tr>
                <tr><td>Генератор</td><td><code>Stream.generate()</code></td><td><code>Stream<String> stream = Stream.generate(() -> "value");</code></td></tr>
            </tbody>
        </table>

        <h3>Основные методы Stream API</h3>
        <h4>Промежуточные операции</h4>
        <p>Промежуточные операции не изменяют исходные данные и возвращают новый поток:</p>
        <ul>
            <li><code>filter</code>: фильтрация элементов по условию.</li>
            <li><code>map</code>: преобразование элементов.</li>
            <li><code>sorted</code>: сортировка потока.</li>
            <li><code>distinct</code>: удаление дубликатов.</li>
            <li><code>limit</code> и <code>skip</code>: ограничение числа элементов или пропуск первых элементов.</li>
        </ul>

        <h4>Терминальные операции</h4>
        <p>Терминальные операции завершают поток:</p>
        <ul>
            <li><code>collect</code>: сбор элементов в коллекцию.</li>
            <li><code>forEach</code>: выполнение действия над каждым элементом.</li>
            <li><code>reduce</code>: преобразование всех элементов в один объект (например, сумма всех элементов).</li>
            <li><code>count</code>: подсчет количества элементов.</li>
            <li><code>findFirst</code>, <code>findAny</code>: возвращают первый или любой элемент.</li>
            <li><code>min</code>, <code>max</code>: нахождение минимального или максимального элемента.</li>
        </ul>

        <h3>Параллельные и последовательные стримы</h3>
        <p>Для повышения производительности можно использовать параллельные стримы. Достаточно заменить <code>stream()</code> на <code>parallelStream()</code>, чтобы операции на коллекциях выполнялись параллельно.</p>

        <h3>Заключение</h3>
        <p>Stream API позволяет работать с данными в Java с использованием функционального подхода, значительно сокращая код и улучшая его читаемость. Потоки помогают разработчикам эффективно обрабатывать данные и обеспечивают возможность распараллеливания операций.</p>
        `,category:"tools",tool:"java"},{id:32,question:"Что такое Optional в Java и как он помогает избежать NullPointerException?",answer:`
        <p>В Java 8 был введен новый класс <code>Optional</code>, который помогает избежать распространенной проблемы с <code>null</code> и <code>NullPointerException</code>. Класс <code>Optional</code> представляет собой контейнер для значений, которые могут отсутствовать, что позволяет разработчикам писать более безопасный и предсказуемый код.</p>

        <h3>Проблема с null</h3>
        <p>Работа с <code>null</code> — это одна из главных причин возникновения ошибок <code>NullPointerException</code> в Java. Когда мы пытаемся получить доступ к объекту, который может быть <code>null</code>, возникает вероятность ошибки. Программисты часто вынуждены проверять объект на <code>null</code>, что может делать код более громоздким и сложным для поддержки:</p>

        <pre><code>
        if (obj != null) {
            obj.doSomething();
        }
        </code></pre>

        <h3>Как решает проблему Optional</h3>
        <p>Класс <code>Optional</code> предоставляет безопасный контейнер для значений, которые могут отсутствовать. Вместо того, чтобы работать с <code>null</code>, мы можем использовать <code>Optional</code>, что позволяет избежать <code>NullPointerException</code> и сделать код более чистым и предсказуемым.</p>

        <p>Пример использования:</p>
        <pre><code>
        Optional&lt;String&gt; optional = getOptional();
        String value = optional.orElse("default");
        </code></pre>
        <p>Здесь метод <code>orElse()</code> предоставляет значение по умолчанию, если <code>Optional</code> не содержит значения.</p>

        <h3>Когда использовать Optional</h3>
        <p>Использование <code>Optional</code> полезно в следующих случаях:</p>
        <ul>
            <li><strong>Возвращаемое значение методов:</strong> Если метод может вернуть <code>null</code>, лучше использовать <code>Optional</code> в качестве возвращаемого значения:</li>
            <pre><code>
            public Optional&lt;Foo&gt; findFoo(String id) {
                // ...
            }
            </code></pre>
            <li><strong>Необязательные параметры методов:</strong> Если параметр метода может быть необязательным, можно использовать <code>Optional</code> для его передачи:</li>
            <pre><code>
            public Foo doSomething(String id, Optional&lt;Bar&gt; barOptional) {
                // ...
            }
            </code></pre>
            <li><strong>Необязательные поля класса:</strong> Поля, которые могут отсутствовать, можно обозначить как <code>Optional</code>:</li>
            <pre><code>
            public class Book {
                private List&lt;Pages&gt; pages;
                private Optional&lt;Index&gt; index;
            }
            </code></pre>
        </ul>

        <h3>Когда не использовать Optional</h3>
        <p>Несмотря на полезность, <code>Optional</code> не следует использовать в коллекциях или массивах, так как это может усложнить код и негативно повлиять на производительность. В таких случаях лучше использовать другие подходы для работы с <code>null</code>.</p>

        <h3>Заключение</h3>
        <p><code>Optional</code> — это мощный инструмент, который помогает избежать проблем с <code>null</code> и <code>NullPointerException</code> в Java. Он улучшает читаемость кода и делает его более безопасным. Однако, как и любой инструмент, <code>Optional</code> следует использовать с осторожностью и осознанно, чтобы не усложнять код и не снижать производительность.</p>
        `,category:"tools",tool:"java"},{id:33,question:"Как работает функциональный интерфейс в Java?",answer:`
        <p>Функциональные интерфейсы в Java представляют собой интерфейсы, которые содержат только один абстрактный метод. Они используются для представления функций, которые можно передать и использовать в лямбда-выражениях или ссылках на методы. В Java 8 и новее функциональные интерфейсы играют ключевую роль в использовании функциональных возможностей языка.</p>

<h3>Что такое функциональный интерфейс?</h3>
<p>Функциональным считается интерфейс с одним абстрактным методом. Примером может быть интерфейс <code>Comparator</code> или созданный вами интерфейс с одним методом:</p>

<pre><code>
@FunctionalInterface
public interface Converter&lt;T, N&gt; {
   N convert(T t);
}
</code></pre>

<p>Аннотация <code>@FunctionalInterface</code> используется для указания, что интерфейс является функциональным, и должен содержать не более одного абстрактного метода. Однако она необязательна, так как компилятор автоматически распознает функциональные интерфейсы.</p>

<h3>Особенности функциональных интерфейсов</h3>
<ul>
<li><strong>Статические методы:</strong> функциональные интерфейсы могут содержать статические методы. Эти методы не нарушают правила единственного абстрактного метода, так как не требуют экземпляра объекта для вызова.</li>
<li><strong>Методы по умолчанию (default методы):</strong> начиная с Java 8, интерфейсы могут содержать методы по умолчанию, которые предоставляют реализацию по умолчанию. Эти методы также не нарушают концепцию функционального интерфейса.</li>
<li><strong>Методы класса Object:</strong> функциональные интерфейсы могут содержать методы, совпадающие с методами класса <code>Object</code> (например, <code>equals()</code>, <code>hashCode()</code>). Эти методы не считаются абстрактными и не нарушают ограничение одного абстрактного метода.</li>
</ul>

<h3>Пример использования функционального интерфейса</h3>
<p>Допустим, у нас есть интерфейс <code>Converter</code>, который преобразует объект одного типа в объект другого. Мы можем использовать его с лямбда-выражением:</p>

<pre><code>
Converter&lt;Dog, Raccoon&gt; converter = (dog) -> new Raccoon(dog.name, dog.age, dog.weight);
Raccoon raccoon = converter.convert(new Dog("Bobbie", 5, 10));
System.out.println("Raccoon: " + raccoon.name + ", " + raccoon.age + ", " + raccoon.weight);
</code></pre>

<h3>Базовые функциональные интерфейсы в Java 8</h3>
<p>Java 8 предоставляет множество готовых функциональных интерфейсов, используемых вместе со Stream API и лямбда-выражениями:</p>

<ul>
<li><strong>Predicate&lt;T&gt;:</strong> проверяет условие для объекта типа T и возвращает <code>true</code> или <code>false</code>.</li>
<li><strong>Consumer&lt;T&gt;:</strong> выполняет операцию над объектом типа T, не возвращая результата.</li>
<li><strong>Supplier&lt;T&gt;:</strong> возвращает объект типа T без входных параметров.</li>
<li><strong>Function&lt;T, R&gt;:</strong> преобразует объект типа T в объект типа R.</li>
<li><strong>UnaryOperator&lt;T&gt;:</strong> принимает и возвращает объект одного типа T, выполняя над ним операции.</li>
</ul>

<h3>Пример использования функциональных интерфейсов в Stream API</h3>
<p>Многие методы Stream API используют функциональные интерфейсы. Например, метод <code>filter()</code> принимает <code>Predicate</code>, а метод <code>map()</code> — <code>Function</code>:</p>

<pre><code>
List&lt;Integer&gt; numbers = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8);
List&lt;Integer&gt; evenNumbers = numbers.stream()
   .filter(x -> x % 2 == 0)
   .collect(Collectors.toList());
</code></pre>

<h3>Заключение</h3>
<p>Функциональные интерфейсы — это основа для использования лямбда-выражений и функционального программирования в Java. Они позволяют создавать более лаконичный, гибкий и читаемый код, особенно в сочетании со Stream API и другими функциональными возможностями языка.</p>
        `,category:"tools",tool:"java"},{id:34,question:"Что такое CompletableFuture и как использовать асинхронные задачи в Java?",answer:`
        <p><strong>CompletableFuture</strong> — это класс в пакете <code>java.util.concurrent</code>, который предоставляет мощные инструменты для асинхронного программирования в Java. Этот класс позволяет выполнять задачи в фоновом режиме, объединять задачи, обрабатывать исключения, задавать тайм-ауты и создавать сложные цепочки операций. CompletableFuture особенно полезен для параллельной работы с задачами, их комбинации и обработки результатов.</p>

<h3>Основные методы CompletableFuture</h3>
<ul>
<li><strong>supplyAsync()</strong> — выполняет задачу асинхронно, возвращает результат и использует фоновый поток для выполнения задачи.</li>
<pre><code>
CompletableFuture&lt;String&gt; future = CompletableFuture.supplyAsync(() -> {
    // Выполнение задачи
    return "Результат";
});
future.thenAccept(result -> System.out.println("Результат: " + result));
</code></pre>

<li><strong>thenApply()</strong> — преобразует результат <code>CompletableFuture</code> и возвращает новый <code>CompletableFuture</code> с измененным результатом.</li>
<pre><code>
CompletableFuture&lt;String&gt; transformedFuture = future.thenApply(result -> result.toUpperCase());
transformedFuture.thenAccept(result -> System.out.println("Преобразованный результат: " + result));
</code></pre>

<li><strong>thenAccept()</strong> — принимает результат и выполняет действие без возврата нового значения.</li>
<pre><code>
future.thenAccept(result -> System.out.println("Результат: " + result));
</code></pre>

<li><strong>thenRun()</strong> — выполняет действие после завершения задачи без использования результата.</li>
<pre><code>
future.thenRun(() -> System.out.println("Задача завершена!"));
</code></pre>
</ul>

<h3>Комбинирование и цепочки задач</h3>
<ul>
<li><strong>thenCompose()</strong> — объединяет две зависимые задачи, передавая результат первой задачи второй:</li>
<pre><code>
CompletableFuture&lt;User&gt; userFuture = getUserDetail("123");
CompletableFuture&lt;Double&gt; result = userFuture.thenCompose(user -> getCreditRating(user));
result.thenAccept(rating -> System.out.println("Кредитный рейтинг: " + rating));
</code></pre>

<li><strong>thenCombine()</strong> — объединяет результаты двух независимых задач, выполняемых параллельно:</li>
<pre><code>
CompletableFuture&lt;Double&gt; bmiFuture = weightInKgFuture.thenCombine(heightInCmFuture, (weight, height) -> {
    double heightInMeters = height / 100;
    return weight / (heightInMeters * heightInMeters);
});
bmiFuture.thenAccept(bmi -> System.out.println("Индекс массы тела: " + bmi));
</code></pre>

<li><strong>allOf()</strong> — позволяет выполнить несколько задач параллельно и дождаться их завершения:</li>
<pre><code>
CompletableFuture&lt;Void&gt; combinedFuture = CompletableFuture.allOf(future1, future2);
combinedFuture.thenRun(() -> System.out.println("Все задачи выполнены"));
</code></pre>
</ul>

<h3>Обработка ошибок</h3>
<ul>
<li><strong>exceptionally()</strong> — обрабатывает исключение и возвращает значение, если задача завершилась с ошибкой:</li>
<pre><code>
CompletableFuture&lt;String&gt; future = CompletableFuture.supplyAsync(() -> {
    if (new Random().nextBoolean()) {
        throw new RuntimeException("Ошибка");
    }
    return "Успех";
}).exceptionally(ex -> {
    System.out.println("Обработка исключения: " + ex.getMessage());
    return "Восстановлено";
});
future.thenAccept(result -> System.out.println("Результат: " + result));
</code></pre>

<li><strong>handle()</strong> — обрабатывает как результат, так и исключение, возвращая соответствующее значение:</li>
<pre><code>
CompletableFuture&lt;String&gt; future = CompletableFuture.supplyAsync(() -> {
    if (new Random().nextBoolean()) {
        throw new RuntimeException("Ошибка");
    }
    return "Успех";
}).handle((result, ex) -> {
    if (ex != null) {
        return "Обработка исключения";
    }
    return result;
});
future.thenAccept(result -> System.out.println("Результат: " + result));
</code></pre>
</ul>

<h3>Тайм-ауты</h3>
<ul>
<li><strong>completeOnTimeout()</strong> — возвращает значение, если задача не завершится в течение указанного времени:</li>
<pre><code>
CompletableFuture&lt;String&gt; future = CompletableFuture.supplyAsync(() -> {
    try {
        Thread.sleep(3000);
    } catch (InterruptedException e) {
        e.printStackTrace();
    }
    return "Успех!";
}).completeOnTimeout("Тайм-аут", 1, TimeUnit.SECONDS);
future.thenAccept(result -> System.out.println("Результат: " + result));
</code></pre>
</ul>

<p>CompletableFuture предоставляет гибкий механизм для асинхронных задач в Java. Он позволяет создавать сложные цепочки выполнения, обрабатывать результаты и исключения, а также эффективно работать с параллельными задачами.</p>
        `,category:"tools",tool:"java"},{id:35,question:"Как использовать Reflection API в Java?",answer:`
        <p><strong>Reflection API</strong> в Java — это мощный механизм, позволяющий динамически исследовать и управлять классами, объектами, методами и полями во время выполнения программы. Это открывает ряд возможностей, включая доступ к приватным полям и методам, создание экземпляров классов и вызов методов, которые могут быть неизвестны на момент компиляции.</p>

<h3>Основные возможности Reflection API:</h3>
<ul>
<li>Получение класса объекта и его полей, методов, конструкторов</li>
<li>Доступ к приватным полям и методам</li>
<li>Создание объектов во время выполнения программы</li>
<li>Вызов методов по имени</li>
<li>Изменение значений полей объектов</li>
</ul>

<h3>Пример работы с приватными полями:</h3>
<pre><code>
public class MyClass {
   private int number = 42;
   private String name = "default";

   public int getNumber() {
       return number;
   }
}

public static void main(String[] args) {
   MyClass myClass = new MyClass();
   try {
       Field field = myClass.getClass().getDeclaredField("name");
       field.setAccessible(true);  // Даем доступ к приватному полю
       String name = (String) field.get(myClass);
       System.out.println("Значение поля name: " + name);
   } catch (NoSuchFieldException | IllegalAccessException e) {
       e.printStackTrace();
   }
}
</code></pre>

<p>В этом примере с помощью рефлексии мы получили доступ к приватному полю <code>name</code>, несмотря на то, что оно не имеет публичного метода <code>getter</code>.</p>

<h3>Вызов приватного метода с помощью рефлексии:</h3>
<pre><code>
public class MyClass {
   private void printData() {
       System.out.println("Приватный метод вызван");
   }
}

public static void main(String[] args) {
   MyClass myClass = new MyClass();
   try {
       Method method = myClass.getClass().getDeclaredMethod("printData");
       method.setAccessible(true);  // Даем доступ к приватному методу
       method.invoke(myClass);  // Вызываем метод
   } catch (NoSuchMethodException | IllegalAccessException | InvocationTargetException e) {
       e.printStackTrace();
   }
}
</code></pre>

<p>В этом примере мы получили доступ к приватному методу <code>printData()</code> и успешно вызвали его с помощью метода <code>invoke()</code>.</p>

<h3>Создание объекта с помощью рефлексии:</h3>
<pre><code>
public static void main(String[] args) {
   try {
       Class clazz = Class.forName("MyClass");
       MyClass myClass = (MyClass) clazz.newInstance();  // Создание экземпляра класса
       System.out.println("Создан объект: " + myClass);
   } catch (ClassNotFoundException | InstantiationException | IllegalAccessException e) {
       e.printStackTrace();
   }
}
</code></pre>

<p>Этот пример показывает, как с помощью рефлексии можно создать объект класса, используя его полное имя.</p>

<h3>Применение в реальных проектах</h3>
<p>Reflection API широко используется в таких технологиях, как фреймворки для Dependency Injection (например, Spring или Dagger), сериализация объектов, ORM-фреймворки (например, Hibernate), а также в инструментах для тестирования (JUnit) и многих других.</p>

<h3>Заключение</h3>
<p>Рефлексия — это мощный инструмент, который позволяет динамически взаимодействовать с программой во время её выполнения. Однако она нарушает принципы инкапсуляции, поэтому ее следует использовать с осторожностью, так как злоупотребление рефлексией может привести к сложностям в отладке и поддержке кода.</p>
        `,category:"tools",tool:"java"},{id:36,question:"Как реализовать Dependency Injection в Java с использованием Spring?",answer:`
        <p><strong>Dependency Injection (DI)</strong> — это процесс предоставления внешних зависимостей компоненту. Внедрение зависимости помогает улучшить структуру кода, уменьшить его связность и упростить тестирование. Основной принцип DI заключается в том, что объект не создает свои зависимости сам, а получает их извне.</p>

<h3>Основные преимущества Dependency Injection:</h3>
<ul>
<li><strong>Сокращение связующего кода:</strong> уменьшение количества кода, необходимого для создания и управления зависимостями.</li>
<li><strong>Упрощение конфигурации:</strong> конфигурация зависимостей может управляться через аннотации или внешние файлы (например, XML).</li>
<li><strong>Централизованное управление зависимостями:</strong> в одном репозитории можно управлять зависимостями, что упрощает их поддержку и изменение.</li>
<li><strong>Упрощение тестирования:</strong> возможность легко заменять зависимости для тестирования (например, использовать mock-объекты).</li>
<li><strong>Качественное проектирование:</strong> DI поощряет использование интерфейсов и модульный дизайн, что упрощает архитектуру приложения.</li>
</ul>

<h3>Реализация DI в Spring</h3>
<p>Spring Framework предоставляет несколько способов внедрения зависимостей, основанных на двух ключевых концепциях Java: интерфейсах и JavaBeans (POJO). С помощью Spring можно конфигурировать зависимости тремя основными способами:</p>
<ul>
<li>Через XML-файлы конфигурации.</li>
<li>Через Java-классы конфигурации (JavaConfig).</li>
<li>С помощью аннотаций в коде (например, @Autowired).</li>
</ul>

<h4>Типы внедрения зависимостей в Spring:</h4>

<ul>
<li><strong>Constructor Dependency Injection:</strong> зависимости предоставляются через конструктор объекта. Это предпочтительный способ, так как он гарантирует, что все зависимости будут предоставлены при создании объекта.</li>
<pre><code>
@Component
public class MyService {
    private final Dependency dependency;

    @Autowired
    public MyService(Dependency dependency) {
        this.dependency = dependency;
    }
}
</code></pre>

<li><strong>Setter Dependency Injection:</strong> зависимости устанавливаются через сеттеры. Этот метод полезен, когда зависимости необязательны или могут быть изменены после создания объекта.</li>
<pre><code>
@Component
public class MyService {
    private Dependency dependency;

    @Autowired
    public void setDependency(Dependency dependency) {
        this.dependency = dependency;
    }
}
</code></pre>
</ul>

<h4>Основные способы конфигурации DI в Spring:</h4>
<ul>
<li><strong>XML-конфигурация:</strong> В более ранних версиях Spring часто использовали XML-файлы для конфигурации зависимостей. В них определяются бины и их зависимости.</li>
<pre><code>
<bean id="myService" class="com.example.MyService">
    <constructor-arg ref="dependency"/>
</bean>

<bean id="dependency" class="com.example.Dependency"/>
</code></pre>

<li><strong>Java-классы конфигурации (JavaConfig):</strong> Начиная с Spring 3, появился способ конфигурировать зависимости с помощью Java-классов.</li>
<pre><code>
@Configuration
public class AppConfig {
    @Bean
    public MyService myService() {
        return new MyService(dependency());
    }

    @Bean
    public Dependency dependency() {
        return new Dependency();
    }
}
</code></pre>

<li><strong>Аннотации:</strong> С помощью аннотации <code>@Autowired</code> можно автоматически внедрять зависимости.</li>
<pre><code>
@Service
public class MyService {
    @Autowired
    private Dependency dependency;
}
</code></pre>
</ul>

<h3>Заключение</h3>
<p>Использование Dependency Injection в Spring значительно упрощает разработку и тестирование Java-приложений. Spring предоставляет гибкие и удобные способы управления зависимостями с помощью аннотаций, конфигурационных классов и XML-файлов. DI улучшает модульность кода, упрощает его тестирование и поддержку, а также стимулирует использование хороших архитектурных практик.</p>
        `,category:"tools",tool:"java"},{id:37,question:"Что такое микросервисы в контексте Java и как их создавать с помощью Spring Boot?",answer:`
        <p><strong>Микросервисы</strong> — это архитектурный стиль, при котором приложение делится на множество независимых и слабо связанных сервисов. Каждый сервис отвечает за выполнение одной конкретной задачи и может развиваться, развертываться и масштабироваться отдельно от других. Микросервисы взаимодействуют друг с другом через легковесные протоколы, такие как HTTP или gRPC, и используют отдельные базы данных.</p>

<h3>Основные преимущества микросервисной архитектуры:</h3>
<ul>
<li><strong>Масштабируемость:</strong> каждый микросервис можно масштабировать независимо от других.</li>
<li><strong>Гибкость:</strong> микросервисы можно разрабатывать на разных языках программирования и развертывать на различных платформах.</li>
<li><strong>Упрощение поддержки:</strong> изменение в одном сервисе не влияет на работу других сервисов, что упрощает сопровождение и обновление приложений.</li>
<li><strong>Независимая разработка:</strong> команды разработчиков могут работать над разными микросервисами одновременно, что ускоряет процесс разработки.</li>
</ul>

<h3>Создание микросервисов с помощью Spring Boot</h3>
<p>Spring Boot — это фреймворк, который упрощает создание микросервисов в Java. Он предоставляет встроенные инструменты для быстрого создания веб-приложений и микросервисов с минимальной конфигурацией.</p>

<h4>Основные шаги для создания микросервиса с Spring Boot:</h4>

<h5>1. Инициализация проекта:</h5>
<p>Для создания микросервиса можно воспользоваться Spring Initializr (https://start.spring.io/). Выберите необходимые зависимости, такие как Spring Web, Spring Boot DevTools, Spring Data JPA и другие в зависимости от потребностей.</p>

<h5>2. Создание REST API:</h5>
<p>Создайте контроллеры для обработки HTTP-запросов. Например, можно создать простое приложение, которое предоставляет REST API для управления сущностями, такими как пользователи:</p>
<pre><code>
@RestController
@RequestMapping("/users")
public class UserController {

    @GetMapping("/{id}")
    public ResponseEntity<User> getUser(@PathVariable Long id) {
        User user = new User(id, "John", "Doe");
        return ResponseEntity.ok(user);
    }
}
</code></pre>

<h5>3. Подключение к базе данных:</h5>
<p>Используйте Spring Data JPA для работы с базой данных. Например, для работы с сущностью <code>User</code> создайте репозиторий:</p>
<pre><code>
@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String firstName;
    private String lastName;
    // Геттеры и сеттеры
}

public interface UserRepository extends JpaRepository<User, Long> {}
</code></pre>

<h5>4. Конфигурация микросервисов:</h5>
<p>Для каждого микросервиса создайте отдельное приложение с собственными настройками и конфигурацией. С помощью Spring Boot легко управлять конфигурацией через файлы <code>application.properties</code> или <code>application.yml</code>.</p>

<h5>5. Взаимодействие между микросервисами:</h5>
<p>Для взаимодействия между микросервисами можно использовать REST API или такие инструменты, как Spring Cloud OpenFeign. Например, чтобы микросервис "A" мог вызвать микросервис "B", можно воспользоваться Feign-клиентом:</p>
<pre><code>
@FeignClient(name = "user-service")
public interface UserServiceClient {

    @GetMapping("/users/{id}")
    User getUserById(@PathVariable("id") Long id);
}
</code></pre>

<h5>6. Мониторинг и управление:</h5>
<p>Spring Boot легко интегрируется с такими инструментами, как Spring Boot Actuator, Zipkin и Prometheus, для мониторинга и управления микросервисами.</p>

<h5>7. Docker и Kubernetes:</h5>
<p>Микросервисы часто разворачивают в контейнерах с помощью Docker. Каждому микросервису создается Docker-образ, который затем можно развернуть в Kubernetes для управления и масштабирования.</p>

<pre><code>
// Dockerfile для Spring Boot приложения
FROM openjdk:11-jre-slim
COPY target/myapp.jar myapp.jar
ENTRYPOINT ["java", "-jar", "myapp.jar"]
</code></pre>

<h3>Заключение</h3>
<p>Микросервисы в контексте Java и Spring Boot предоставляют гибкость и масштабируемость для создания распределенных приложений. С помощью Spring Boot можно быстро разрабатывать, конфигурировать и разворачивать микросервисные приложения, что делает его идеальным выбором для построения современных микросервисных архитектур.</p>
        `,category:"tools",tool:"java"},{id:38,question:"Как работает виртуальная машина Java (JVM) и что такое сборка мусора (Garbage Collection)?",answer:`
        <h3>Виртуальная машина Java (JVM)</h3>
<p>JVM (Java Virtual Machine) — это виртуальная машина, которая обеспечивает выполнение программ, написанных на языке Java, независимо от аппаратной платформы. JVM является частью JRE (Java Runtime Environment) и отвечает за выполнение байт-кода, который генерируется после компиляции Java-кода.</p>

<h4>Основные функции JVM:</h4>
<ul>
<li><strong>Загрузка кода:</strong> JVM загружает байт-код классов в память с помощью ClassLoader'ов.</li>
<li><strong>Исполнение кода:</strong> JVM интерпретирует байт-код и/или компилирует его в машинный код с использованием JIT-компилятора (Just-In-Time), чтобы программа работала быстрее.</li>
<li><strong>Управление памятью:</strong> JVM управляет выделением и освобождением памяти для объектов во время выполнения программы.</li>
<li><strong>Сборка мусора:</strong> JVM автоматически управляет удалением неиспользуемых объектов из памяти, что помогает избегать утечек памяти и переполнения.</li>
</ul>

<h3>Сборка мусора (Garbage Collection)</h3>
<p><strong>Сборка мусора (Garbage Collection)</strong> — это процесс автоматического освобождения памяти от объектов, которые больше не используются программой. JVM отслеживает, какие объекты в памяти больше не имеют ссылок, и очищает память, выделенную под них.</p>

<h4>Основные этапы процесса сборки мусора:</h4>
<ol>
<li><strong>Выявление объектов:</strong> JVM отслеживает объекты в куче (heap) и определяет, какие из них больше не нужны (не имеют активных ссылок).</li>
<li><strong>Маркировка:</strong> JVM помечает объекты, которые остаются доступными, начиная с корневых объектов (GC Roots), и помечает их как живые. Остальные объекты считаются мусором.</li>
<li><strong>Удаление мусора:</strong> Объекты, не помеченные как живые, удаляются, и их память освобождается для последующего использования.</li>
<li><strong>Компактирование:</strong> Некоторые сборщики мусора могут также выполнять процесс "уплотнения", который перемещает объекты в памяти, чтобы освободить непрерывные блоки памяти.</li>
</ol>

<h4>Алгоритмы сборки мусора:</h4>
<p>JVM поддерживает несколько алгоритмов сборки мусора, которые можно настраивать в зависимости от типа приложения и требований к производительности:</p>
<ul>
<li><strong>Serial GC:</strong> Простой однопоточный сборщик мусора, используемый для небольших приложений.</li>
<li><strong>Parallel GC:</strong> Сборщик мусора с многопоточностью, который используется для увеличения производительности путем параллельного выполнения очистки.</li>
<li><strong>CMS (Concurrent Mark-Sweep):</strong> Алгоритм, который минимизирует паузы при сборке мусора, так как некоторые этапы выполняются параллельно с работой приложения.</li>
<li><strong>G1 GC (Garbage First):</strong> Сборщик мусора, разработанный для работы с большими объемами данных, разделяет кучу на регионы и выполняет сборку постепенно, обеспечивая предсказуемые паузы.</li>
</ul>

<h4>Понятие "куча" (Heap) и "стек" (Stack):</h4>
<p>JVM использует две основные области памяти: кучу (heap) и стек (stack):</p>
<ul>
<li><strong>Куча (heap):</strong> Используется для динамического выделения памяти под объекты. Сюда помещаются все объекты, которые создаются через операторы <code>new</code>.</li>
<li><strong>Стек (stack):</strong> Используется для хранения локальных переменных, вызовов методов и ссылок на объекты, созданные в куче. Он управляется в рамках выполнения методов.</li>
</ul>

<h3>Заключение</h3>
<p>JVM играет ключевую роль в обеспечении кроссплатформенности Java-приложений, управляя выполнением байт-кода и памятью. Сборка мусора — важная функция JVM, которая автоматически освобождает память от ненужных объектов, позволяя избежать утечек памяти и улучшить управление ресурсами. Понимание принципов работы JVM и различных алгоритмов сборки мусора помогает оптимизировать производительность Java-приложений.</p>
        `,category:"tools",tool:"java"},{id:39,question:"Что такое JPA и как организовать работу с базами данных с использованием Hibernate?",answer:`
        
        `,category:"tools",tool:"java"},{id:40,question:"Что такое паттерны проектирования и какие из них можно использовать в Java?",answer:`
        
        `,category:"tools",tool:"java"}],Si=[{id:1,question:"Что такое архитектура системы и зачем она нужна?",answer:`
        <p><strong>Архитектура системы</strong> — это структурированное описание того, как компоненты системы взаимодействуют друг с другом и с внешней средой. Она определяет основные элементы системы, их функции, взаимодействие между ними, а также принципы, которые обеспечивают выполнение требований к системе, таких как производительность, масштабируемость, безопасность и отказоустойчивость.</p>

        <h3>Зачем нужна архитектура системы:</h3>
        <ul>
            <li><strong>Моделирование и планирование:</strong> Архитектура помогает заранее спроектировать структуру системы, определяя компоненты, их взаимодействие и расположение. Это упрощает планирование и оценку требований к проекту.</li>
            <li><strong>Масштабируемость:</strong> Хорошо спроектированная архитектура позволяет системе легко масштабироваться, добавляя новые модули или серверы, чтобы поддерживать рост нагрузки и количества пользователей.</li>
            <li><strong>Упрощение разработки и сопровождения:</strong> Архитектура системы разделяет проект на отдельные компоненты, что упрощает разработку, тестирование и дальнейшую поддержку системы.</li>
            <li><strong>Отказоустойчивость:</strong> Определенные архитектурные решения могут обеспечить высокую доступность и устойчивость к отказам, что критично для обеспечения бесперебойной работы системы.</li>
            <li><strong>Безопасность:</strong> Архитектура помогает внедрить правильные меры безопасности, такие как разграничение доступа, шифрование данных и контроль над внешними взаимодействиями.</li>
            <li><strong>Повышение производительности:</strong> Правильное распределение компонентов и ресурсов позволяет достичь оптимальной производительности системы, избегая узких мест и перегрузок.</li>
        </ul>

        <h3>Примеры архитектур:</h3>
        <ul>
            <li>Монолитная</li>
            <li>Микросервисная</li>
            <li>Клиент-серверная</li>
            <li>Слоеная</li>
        </ul>
    `,category:"tools",tool:"architecture"},{id:2,question:"Чем отличается монолитная архитектура от микросервисной?",answer:`
        <p><strong>Монолитная архитектура</strong> — это архитектурный подход, при котором все компоненты приложения объединены в один цельный блок, работающий как единое целое. Все функции и модули системы тесно связаны и развертываются совместно.</p>

        <h3>Основные характеристики монолитной архитектуры:</h3>
        <ul>
            <li>Единая кодовая база и общее развертывание.</li>
            <li>Все компоненты приложения тесно связаны друг с другом.</li>
            <li>Трудно масштабировать отдельные части системы — масштабирование осуществляется только для всей системы целиком.</li>
            <li>Простота разработки и отладки на начальных этапах.</li>
            <li>Сложность сопровождения и внесения изменений в крупных приложениях.</li>
        </ul>

        <p><strong>Микросервисная архитектура</strong> — это подход, при котором приложение делится на небольшие независимые сервисы, каждый из которых отвечает за определенную бизнес-логику. Эти сервисы работают автономно и могут взаимодействовать через API или сообщения.</p>

        <h3>Основные характеристики микросервисной архитектуры:</h3>
        <ul>
            <li>Каждый сервис независим, что позволяет разрабатывать и развертывать их отдельно.</li>
            <li>Легко масштабировать отдельные компоненты в зависимости от нагрузки.</li>
            <li>Сложность управления, поскольку требуется оркестрация микросервисов и решение вопросов с межсервисной коммуникацией.</li>
            <li>Повышенная отказоустойчивость — сбой одного сервиса не приводит к остановке всей системы.</li>
            <li>Легкость внедрения новых технологий для отдельных сервисов.</li>
        </ul>

        <h3>Основные отличия между монолитной и микросервисной архитектурами:</h3>
        <ul>
            <li><strong>Структура:</strong> Монолит — это единое приложение, тогда как микросервисы состоят из множества автономных компонентов.</li>
            <li><strong>Масштабируемость:</strong> Монолитное приложение масштабируется как единое целое, а микросервисы позволяют масштабировать отдельные компоненты.</li>
            <li><strong>Развертывание:</strong> Монолит требует единовременного развертывания, в то время как микросервисы можно развертывать по отдельности.</li>
            <li><strong>Поддержка и обновления:</strong> Монолитная архитектура сложнее в поддержке и внесении изменений, в то время как микросервисная архитектура более гибкая, позволяя быстро обновлять отдельные сервисы.</li>
        </ul>
    `,category:"tools",tool:"architecture"},{id:3,question:"Что такое слоеная архитектура и как она структурирует приложение?",answer:`
        <p><strong>Слоеная архитектура</strong> предлагает деление программного обеспечения на отдельные уровни (слои), каждый из которых выполняет строго определенный набор функций. Главная цель такого подхода — обеспечить независимость и модульность компонентов, а также четкую организацию кода для оптимизации разработки, масштабирования и поддержки приложений.</p>

        <h3>Основные слои в слоеной архитектуре:</h3>
        <ul>
            <li><strong>Презентационный слой (Presentation Layer):</strong> отвечает за взаимодействие с пользователем, отображение данных и получение пользовательского ввода.</li>
            <li><strong>Логический слой (Business Logic Layer):</strong> реализует бизнес-логику приложения, управляет данными и процессами.</li>
            <li><strong>Слой доступа к данным (Data Access Layer):</strong> занимается взаимодействием с базами данных и другими источниками данных, включая выполнение CRUD операций (создание, чтение, обновление, удаление данных).</li>
            <li><strong>Инфраструктурный слой (Infrastructure Layer):</strong> обеспечивает поддержку остальных слоев через взаимодействие с внешними системами, такими как серверы, файлы или сетевые ресурсы.</li>
        </ul>

        <h3>Преимущества слоеной архитектуры:</h3>
        <ul>
            <li>Четкое разделение ответственности между слоями.</li>
            <li>Легкость в сопровождении и масштабировании.</li>
            <li>Улучшение читаемости и повторного использования кода.</li>
            <li>Гибкость при внедрении изменений — можно модифицировать один слой, не затрагивая другие.</li>
        </ul>
    `,category:"tools",tool:"architecture"},{id:4,question:"Что такое клиент-серверная архитектура и как она работает?",answer:`
        <p><strong>Клиент-серверная архитектура</strong> — это модель взаимодействия, которая описывает, как программы и данные распределяются между сервером и клиентом.</p>
        
        <h3>Основные компоненты клиент-серверной архитектуры:</h3>
        <ul>
            <li><strong>Клиент</strong> — это программа, через которую пользователи взаимодействуют с сервером. Чаще всего это веб-браузер, но может быть и другое приложение. Клиент отправляет запросы на сервер и отображает полученные данные.</li>
            <li><strong>Сервер</strong> — это мощный компьютер, на котором хранится сайт или приложение. Он обрабатывает запросы от клиентов и отправляет им ответы. Сервер может обслуживать тысячи и даже миллионы запросов одновременно.</li>
            <li><strong>База данных</strong> — это программа, которая хранит все данные приложения, такие как информация о пользователях, продуктах или заказах. Клиенты не имеют прямого доступа к базе данных, что обеспечивает защиту данных и безопасность.</li>
        </ul>

        <h3>Как работает клиент-серверная архитектура:</h3>
        <p>Когда пользователь взаимодействует с приложением (например, заказывает продукты через сайт), его действия отправляются серверу в виде запросов. Сервер обрабатывает эти запросы и возвращает клиенту ответ, который отображается на экране пользователя. Сервер взаимодействует с базой данных, чтобы получить или сохранить данные, необходимые для обработки запроса.</p>
        
        <h3>Плюсы клиент-серверной архитектуры:</h3>
        <ul>
            <li><strong>Отсутствие дублирования:</strong> Все данные и приложение хранятся на сервере, что позволяет пользователям работать с ними с разных устройств без необходимости скачивать их на свое устройство.</li>
            <li><strong>Минимальные требования к клиенту:</strong> Пользователю достаточно иметь браузер или приложение-клиент, чтобы взаимодействовать с сервером.</li>
            <li><strong>Безопасность данных:</strong> Клиенты не имеют прямого доступа к базе данных, что защищает личную информацию и другие важные данные.</li>
            <li><strong>Производительность:</strong> Серверы обычно более мощные, чем пользовательские устройства, что позволяет им обрабатывать большие объемы запросов одновременно.</li>
        </ul>

        <h3>Минусы клиент-серверной архитектуры:</h3>
        <ul>
            <li><strong>Перегрузка сервера:</strong> Если количество запросов слишком велико, сервер может не выдержать нагрузки и выйти из строя.</li>
            <li><strong>Выход из строя сервера:</strong> Если сервер или база данных выйдут из строя, приложение станет недоступным для всех пользователей.</li>
            <li><strong>Высокая стоимость оборудования:</strong> Серверы должны быть надежными и работать круглосуточно, что требует дорогостоящего оборудования и его регулярной поддержки.</li>
        </ul>

        <h3>Как решить проблемы:</h3>
        <p>Для решения проблем с производительностью и надежностью разработчики используют кластеры серверов и балансировщики нагрузки. Кластер серверов — это несколько серверов, на которых дублируются данные и приложение. Если один сервер выходит из строя, другой автоматически начинает его заменять, и пользователи не замечают перебоев в работе. Балансировщики распределяют запросы между серверами, чтобы предотвратить перегрузку одного из них.</p>
    `,category:"tools",tool:"architecture"},{id:5,question:"Какие компоненты входят в типичную трехуровневую архитектуру (presentation, application, data)?",answer:`
        <p><strong>Трехуровневая архитектура</strong> (Three-Tier Architecture) — это модель разработки программных систем, которая разделяет приложение на три логических слоя: презентационный (presentation), прикладной (application) и уровень данных (data). Каждый из этих слоев выполняет свои функции и взаимодействует с другими для достижения оптимальной организации кода, упрощения поддержки и улучшения масштабируемости.</p>

        <h3>1. Презентационный уровень (Presentation Layer)</h3>
        <p>Этот уровень отвечает за взаимодействие с пользователем. Он предоставляет интерфейс, через который пользователи взаимодействуют с приложением. Веб-страницы, мобильные интерфейсы или графические элементы — все это относится к презентационному уровню. Основные задачи данного слоя:</p>
        <ul>
            <li>Отображение данных, полученных от прикладного уровня</li>
            <li>Сбор и передача пользовательских запросов к прикладному уровню</li>
            <li>Управление интерфейсом и обработка пользовательского ввода</li>
        </ul>
        <p>Пример: веб-браузер, отображающий веб-страницу интернет-магазина, где пользователь может выбирать товары.</p>

        <h3>2. Прикладной уровень (Application Layer)</h3>
        <p>Этот слой содержит логику бизнес-процессов. Он обрабатывает запросы пользователей, управляет взаимодействием между презентационным и уровнем данных. Основные задачи прикладного уровня:</p>
        <ul>
            <li>Обработка логики приложения, таких как авторизация пользователей, обработка заказов или расчеты</li>
            <li>Управление транзакциями и выполнение бизнес-правил</li>
            <li>Проверка и обработка данных перед передачей их на уровень данных</li>
        </ul>
        <p>Пример: серверное приложение, которое обрабатывает запрос на добавление товара в корзину, проверяет наличие товара и передает данные на уровень хранения.</p>

        <h3>3. Уровень данных (Data Layer)</h3>
        <p>Этот уровень отвечает за управление данными и их хранение. Он обеспечивает доступ к базе данных, чтение, запись и обновление данных. Основные задачи уровня данных:</p>
        <ul>
            <li>Хранение данных в базе данных или других хранилищах</li>
            <li>Обеспечение надежного и быстрого доступа к данным</li>
            <li>Предоставление данных для прикладного уровня по запросу</li>
        </ul>
        <p>Пример: база данных, в которой хранится информация о пользователях, товарах, заказах и платежах интернет-магазина.</p>

        <h3>Преимущества трехуровневой архитектуры:</h3>
        <ul>
            <li><strong>Модульность:</strong> Каждый уровень отвечает за свои задачи, что упрощает поддержку и развитие системы.</li>
            <li><strong>Масштабируемость:</strong> Можно масштабировать слои отдельно друг от друга, например, увеличить количество серверов для прикладного уровня.</li>
            <li><strong>Повышенная безопасность:</strong> Данные не передаются напрямую между клиентом и базой данных, что защищает их от прямого доступа.</li>
        </ul>
    `,category:"tools",tool:"architecture"},{id:6,question:"Что такое микросервисы и каковы их ключевые преимущества?",answer:`
        <p><strong>Микросервисы</strong> — это архитектурный стиль, при котором приложения разбиваются на небольшие независимые сервисы, каждый из которых выполняет определенную задачу и взаимодействует с другими сервисами через легковесные протоколы, такие как REST или gRPC. Микросервисы позволяют разрабатывать, тестировать, развертывать и масштабировать каждый сервис независимо от других, что упрощает управление большими и сложными системами.</p>
        
        <h3>Преимущества микросервисов</h3>
        <p>Микросервисы обеспечивают гибкость и маневренность за счет модульной архитектуры, что способствует ускорению циклов разработки и упрощению обслуживания. Ниже приведены пять основных причин, по которым компании внедряют архитектуру микросервисов:</p>

        <ol>
            <li><strong>Ускорение масштабируемости:</strong> Независимая работа каждой службы позволяет легко добавлять новые компоненты без простоев. Команды могут выбирать оптимальные технологии для каждого сервиса, что снижает проблемы с совместимостью и улучшает гибкость архитектуры.</li>
            
            <li><strong>Улучшение изоляции неисправностей:</strong> В случае сбоя одного из сервисов это не влияет на работу других. Это разделение помогает минимизировать последствия ошибок и повысить надежность системы.</li>
            
            <li><strong>Повышение производительности команды:</strong> Микросервисы позволяют небольшим специализированным командам сосредоточиться на разработке и обслуживании конкретных сервисов, что ускоряет процессы разработки и улучшает качество поддержки.</li>
            
            <li><strong>Более быстрое время развертывания:</strong> Изменения в монолитной архитектуре требуют развертывания всего приложения, в то время как микросервисы позволяют выпускать обновления быстрее и с меньшими рисками, так как каждый сервис может обновляться независимо.</li>
            
            <li><strong>Повышение экономической эффективности:</strong> Архитектура микросервисов позволяет оптимизировать использование ресурсов, поскольку команды могут сосредоточиться на конкретных сервисах, снижая общие затраты на разработку и обслуживание системы.</li>
        </ol>

        <h3>Недостатки микросервисов</h3>
        <p>Однако микросервисы имеют и свои сложности:</p>

        <ul>
            <li><strong>Повышенная сложность:</strong> Управление коммуникацией между распределенными сервисами может потребовать дополнительного кода и средств обеспечения бесперебойной работы.</li>
            
            <li><strong>Проблемы развертывания и управления версиями:</strong> Координация между различными версиями сервисов может быть сложной задачей и привести к проблемам совместимости.</li>
            
            <li><strong>Сложность тестирования:</strong> Интеграционное тестирование между различными сервисами может быть сложным и потребовать дополнительных усилий по оркестрации.</li>
            
            <li><strong>Трудности отладки:</strong> Отладка распределенного приложения, состоящего из множества микросервисов с разными логами, может оказаться сложной задачей.</li>
            
            <li><strong>Проблемы управления данными:</strong> Координация транзакций и согласованность данных между сервисами требуют тщательного управления и могут вызывать сложности.</li>
        </ul>
    `,category:"tools",tool:"architecture"},{id:7,question:"Что такое SOA (Service-Oriented Architecture) и чем она отличается от микросервисной архитектуры?",answer:`
        <p><strong>Service-Oriented Architecture (SOA)</strong> — это архитектурный стиль, при котором приложение разбивается на крупные бизнес-функции, реализованные как отдельные службы (сервисы). Эти службы взаимодействуют друг с другом через стандартные протоколы, такие как SOAP или REST, и предоставляют общие функции для всего предприятия.</p>
        
        <p>SOA включает более крупные, часто взаимозависимые сервисы, которые могут разделять ресурсы и данные. Это дает возможность для повторного использования компонентов и интеграции с существующими системами, что делает SOA популярной в корпоративных средах.</p>
        
        <h3>Ключевые отличия между SOA и микросервисной архитектурой:</h3>
        <ul>
            <li><strong>Размер сервисов:</strong> В SOA сервисы, как правило, более крупные и могут предоставлять общие функции для различных приложений. Микросервисы же нацелены на более мелкие, автономные компоненты, которые независимы друг от друга.</li>
            <li><strong>Уровень независимости:</strong> В SOA сервисы часто зависят от общих ресурсов и центрального управления (например, Enterprise Service Bus), тогда как в микросервисах каждый компонент является полностью автономным и взаимодействует напрямую через API.</li>
            <li><strong>Интеграция:</strong> SOA больше ориентирована на интеграцию сложных корпоративных систем, тогда как микросервисы лучше подходят для гибких, современных приложений, которые нуждаются в частом обновлении и масштабируемости.</li>
            <li><strong>Коммуникация:</strong> SOA может использовать более тяжеловесные протоколы, такие как SOAP, в то время как микросервисы чаще всего используют более легкие протоколы, такие как REST или gRPC, что упрощает коммуникацию между сервисами.</li>
        </ul>
    `,category:"tools",tool:"architecture"},{id:8,question:"Что такое REST архитектура и как она применяется в веб-приложениях?",answer:`
        <p><strong>REST (Representational State Transfer)</strong> — это архитектурный стиль для создания веб-сервисов, который использует стандартные HTTP методы (GET, POST, PUT, DELETE) для взаимодействия между клиентом и сервером. В REST архитектуре ресурсы представляются уникальными URI, а данные передаются в формате JSON, XML или HTML.</p>
        
        <h3>Ключевые принципы REST:</h3>
        <ul>
            <li><strong>Идентификация ресурсов:</strong> Каждый ресурс в системе идентифицируется уникальным URI (Uniform Resource Identifier). Например, ресурсом может быть пользователь, товар или заказ.</li>
            <li><strong>Использование стандартных методов HTTP:</strong> REST-сервисы используют такие методы как GET (для чтения данных), POST (для создания ресурсов), PUT (для обновления ресурсов) и DELETE (для удаления ресурсов).</li>
            <li><strong>Без состояния:</strong> REST-сервисы не сохраняют состояние между запросами. Каждое взаимодействие клиента и сервера является независимым, что делает систему более масштабируемой и простой в управлении.</li>
            <li><strong>Кэшируемость:</strong> Ответы на REST-запросы могут быть закэшированы, что улучшает производительность веб-приложений.</li>
            <li><strong>Единый интерфейс:</strong> REST требует единообразного интерфейса для взаимодействия с ресурсами, что упрощает разработку и поддержку API.</li>
        </ul>
        
        <h3>Применение REST в веб-приложениях:</h3>
        <p>REST широко применяется для создания веб-приложений и API. Например, в e-commerce платформе REST API может быть использован для обработки запросов на получение списка товаров, добавление их в корзину и оформление заказа. Клиенты, такие как браузеры или мобильные приложения, могут отправлять REST-запросы на сервер для получения и изменения данных в приложении.</p>
    `,category:"tools",tool:"architecture"},{id:9,question:"Как работает CQRS (Command Query Responsibility Segregation) и для чего она используется?",answer:`
        <p><strong>Command and Query Responsibility Segregation (CQRS)</strong> — это подход проектирования программного обеспечения, при котором операции на изменение данных (Command) и операции на чтение данных (Query) разделяются на два отдельных пути.</p>

        <p>Основная идея CQRS заключается в том, что команда (Command) изменяет состояние системы, а запрос (Query) лишь извлекает данные. Это позволяет оптимизировать и усложнить системы в зависимости от их задач. Например, часть системы, отвечающая за запросы, может быть более масштабируемой и оптимизированной для высокопроизводительных операций чтения, в то время как команды обрабатываются отдельным образом для надежного выполнения изменений.</p>

        <h3>Основные компоненты CQRS:</h3>
        <ul>
            <li><strong>Команды (Commands):</strong> используются для внесения изменений в состояние системы. Например, создать заказ, обновить информацию о клиенте и т.д.</li>
            <li><strong>Запросы (Queries):</strong> отвечают за получение данных. Например, получить список всех заказов или детали конкретного пользователя.</li>
        </ul>
        
        <h3>Преимущества использования CQRS:</h3>
        <ul>
            <li>Улучшение производительности за счет оптимизации запросов и команд.</li>
            <li>Лучшее разделение ответственности, упрощение разработки и поддержки кода.</li>
            <li>Возможность использовать разные подходы для чтения и записи данных, что помогает в системах с высокой нагрузкой и сложной логикой.</li>
            <li>Легкость в реализации аудита и отслеживания команд (command history).</li>
        </ul>

        <h3>Применение CQRS:</h3>
        <p>CQRS часто используется в высоконагруженных системах, где требуется высокая производительность при обработке большого количества данных. Он также полезен для систем, где чтение и запись данных имеют разные требования по производительности и масштабируемости.</p>
    `,category:"tools",tool:"architecture"},{id:10,question:"Что такое паттерн Event-Driven архитектуры и как он реализуется?",answer:`
        <p><strong>Событийно-ориентированная архитектура (Event-Driven Architecture)</strong> — это популярный распределённый асинхронный шаблон архитектуры, который используется для создания масштабируемых приложений. В такой архитектуре система реагирует на события, происходящие в реальном времени, обрабатывая их по мере возникновения.</p>

        <p>Основные компоненты событийно-ориентированной архитектуры:</p>
        <ul>
            <li><strong>Производители событий (Event Producers):</strong> компоненты, которые генерируют события в системе. Это могут быть пользовательские действия, изменения данных или системные процессы.</li>
            <li><strong>Потребители событий (Event Consumers):</strong> компоненты, которые реагируют на события. Они выполняют необходимые операции в ответ на возникшие события.</li>
            <li><strong>Шина событий (Event Bus):</strong> механизм, который управляет передачей событий между производителями и потребителями. Это центральная часть, обеспечивающая асинхронную коммуникацию.</li>
        </ul>

        <p>В такой архитектуре взаимодействие между компонентами происходит через события, что позволяет системе оставаться гибкой и легко масштабируемой. Компоненты могут функционировать независимо друг от друга, что упрощает их обновление и тестирование.</p>

        <h3>Преимущества Event-Driven архитектуры:</h3>
        <ul>
            <li>Высокая масштабируемость за счет асинхронной обработки событий.</li>
            <li>Гибкость системы: компоненты можно легко добавлять или обновлять без изменения всей архитектуры.</li>
            <li>Улучшенная адаптивность: система может реагировать на изменения в реальном времени.</li>
        </ul>

        <p>Событийно-ориентированная архитектура активно используется в приложениях с высокой нагрузкой, где требуется быстрая обработка большого количества событий, таких как торговые платформы, IoT-системы и распределенные системы.</p>
    `,category:"tools",tool:"architecture"},{id:11,question:"Какие преимущества и недостатки у монолитной архитектуры?",answer:`
    <p><strong>Преимущества монолитной архитектуры:</strong></p>
    <ul>
        <li><strong>Быстрый старт разработки.</strong> Монолитная архитектура позволяет быстрее запустить разработку и выпуск первых версий продукта за счет готовых решений «из коробки». Все компоненты объединены в одну систему, что делает процесс разработки более простым и понятным.</li>
        <li><strong>Единая кодовая база.</strong> Вся система имеет одну кодовую базу, что упрощает разработку, тестирование и отладку. Программисты могут легче отслеживать и исправлять ошибки, поскольку все компоненты находятся в одном месте.</li>
        <li><strong>Простота тестирования.</strong> Тестирование монолитных приложений проще, так как все компоненты тестируются в единой среде. Нет необходимости отдельно тестировать каждый компонент, что упрощает выявление проблем.</li>
        <li><strong>Экономичность.</strong> Развертывание и поддержка одного сервиса обходятся дешевле и требуют меньше ресурсов по сравнению с множеством микросервисов.</li>
    </ul>

    <p><strong>Недостатки монолитной архитектуры:</strong></p>
    <ul>
        <li><strong>Масштабируемость.</strong> С увеличением количества пользователей и функциональности приложения монолитная архитектура становится сложной для масштабирования. Из-за единой кодовой базы сложно изменить отдельные компоненты, не затронув всю систему.</li>
        <li><strong>Сложность обновлений.</strong> Любое изменение или добавление новой функциональности требует полного развертывания приложения, что увеличивает риск возникновения ошибок и остановки системы.</li>
        <li><strong>Сложность поддержки больших приложений.</strong> По мере роста приложения увеличивается сложность управления кодовой базой, что затрудняет работу с ним, особенно если над проектом работает несколько команд разработчиков.</li>
        <li><strong>Технологическая зависимость.</strong> В монолитной архитектуре все компоненты тесно связаны друг с другом, что затрудняет использование различных технологий для разных частей системы.</li>
    </ul>
    `,category:"tools",tool:"architecture"},{id:12,question:"Что такое CAP теорема и как она влияет на выбор архитектуры системы?",answer:`
    <p><strong>CAP теорема</strong> (или теорема Брюэра) гласит, что в распределенной системе невозможно одновременно обеспечить полное выполнение всех трех принципов: <strong>согласованности</strong> (Consistency), <strong>доступности</strong> (Availability) и <strong>устойчивости к разделению</strong> (Partition Tolerance). Система всегда должна выбирать между этими тремя характеристиками, и выбор зависит от специфики задачи и требований системы.</p>
    
    <p>CAP теорема включает три ключевых принципа:</p>
    <ul>
        <li><strong>Согласованность (Consistency):</strong> Все узлы системы в любой момент времени содержат одинаковые данные. Это важно для поддержания предсказуемости системы и используется в приложениях, где критична точность данных, например, в финансовых системах.</li>
        <li><strong>Доступность (Availability):</strong> Система должна отвечать на запросы пользователей в любое время, даже при сбоях отдельных узлов. Это важная характеристика для приложений, где простои недопустимы, таких как онлайн-магазины или социальные сети.</li>
        <li><strong>Устойчивость к разделению (Partition Tolerance):</strong> Система продолжает функционировать, даже если части узлов потеряли связь между собой. Это критически важно для распределенных систем, работающих в условиях сетевых сбоев.</li>
    </ul>
    
    <p>Выбор между этими принципами зависит от целей системы:</p>
    <ul>
        <li>Системы, ориентированные на <strong>согласованность</strong>, гарантируют, что данные всегда будут актуальны, но при этом могут жертвовать доступностью в случае сетевых проблем.</li>
        <li>Системы, ориентированные на <strong>доступность</strong>, обеспечивают быстрый отклик на запросы, даже если данные могут быть временно не согласованы.</li>
        <li>Системы, ориентированные на <strong>устойчивость к разделению</strong>, продолжают работать в условиях сетевых сбоев, обеспечивая как доступность, так и согласованность в пределах возможного.</li>
    </ul>
    
    <p>В реальной практике разработчики часто сталкиваются с компромиссами, выбирая баланс между этими принципами. Например, системы управления данными в e-commerce требуют высокой согласованности, тогда как облачные сервисы часто ориентируются на доступность и устойчивость к разделению.</p>
    `,category:"tools",tool:"architecture"},{id:13,question:"Как работают брокеры сообщений (message brokers) в микросервисной архитектуре?",answer:`
    <p><strong>Брокеры сообщений (Message Brokers)</strong> — это программные посредники, которые обеспечивают обмен сообщениями между различными микросервисами в распределенной системе. Они помогают микросервисам взаимодействовать асинхронно, передавая сообщения от отправителя (producer) к получателю (consumer) с минимальной задержкой.</p>

    <p>В микросервисной архитектуре брокеры сообщений выполняют несколько ключевых задач:</p>
    <ul>
        <li><strong>Асинхронная коммуникация:</strong> Брокеры позволяют микросервисам общаться независимо друг от друга. Например, если один сервис отправляет сообщение, другой может получить его в любое время, не ожидая немедленного ответа.</li>
        <li><strong>Буферизация и управление нагрузкой:</strong> Брокеры сообщений буферизуют сообщения, сохраняя их до тех пор, пока получатель не будет готов их обработать. Это важно для управления всплесками трафика и поддержания стабильной работы системы.</li>
        <li><strong>Отказоустойчивость:</strong> При сбоях в работе одного из сервисов сообщения сохраняются у брокера и могут быть доставлены позднее, когда сервис восстановится, что обеспечивает устойчивость системы.</li>
        <li><strong>Масштабируемость:</strong> Использование брокеров позволяет легче масштабировать микросервисную архитектуру, так как каждый сервис может обрабатывать сообщения независимо и увеличивать мощность по мере необходимости.</li>
        <li><strong>Разделение обязанностей:</strong> Сервисы могут быть ответственны за разные задачи и взаимодействовать между собой через обмен сообщениями, что позволяет разделять функциональные области и снижает связность между микросервисами.</li>
    </ul>
    
    <p>Примеры популярных брокеров сообщений:</p>
    <ul>
        <li><strong>RabbitMQ:</strong> поддерживает широкие возможности маршрутизации сообщений и асинхронной коммуникации.</li>
        <li><strong>Apache Kafka:</strong> оптимизирован для высокой пропускной способности и хранения большого объема сообщений, часто используется для обработки потоков данных в реальном времени.</li>
        <li><strong>ActiveMQ:</strong> брокер сообщений, поддерживающий разнообразные протоколы и модели сообщений.</li>
    </ul>

    <p>Таким образом, брокеры сообщений играют ключевую роль в микросервисной архитектуре, обеспечивая надежное и масштабируемое взаимодействие между микросервисами и способствуя более гибкому управлению ресурсами.</p>
    `,category:"tools",tool:"architecture"},{id:14,question:"Что такое паттерн Шина службы (Service Bus) в архитектуре систем?",answer:`
    <p><strong>Шина службы (Service Bus)</strong> — это архитектурный паттерн, который обеспечивает обмен сообщениями и взаимодействие между различными сервисами в распределенной системе. В основе данного подхода лежит идея использования центрального канала коммуникации, через который микросервисы или компоненты системы могут передавать сообщения друг другу, не зная о деталях реализации других участников взаимодействия.</p>

    <p>Основные функции и характеристики Service Bus:</p>
    <ul>
        <li><strong>Управление сообщениями:</strong> Шина службы координирует и маршрутизирует сообщения между сервисами, обеспечивая доставку сообщений нужным получателям.</li>
        <li><strong>Интеграция:</strong> Service Bus помогает интегрировать различные сервисы и компоненты системы, обеспечивая их взаимодействие независимо от их внутренней логики или используемых протоколов.</li>
        <li><strong>Оркестрация и трансформация:</strong> Сервисы могут отправлять данные в одном формате, а Service Bus может преобразовать их в нужный формат для получателя. Также Service Bus может выполнять задачи по оркестрации, управляя последовательностью операций между сервисами.</li>
        <li><strong>Обработка ошибок:</strong> Service Bus может обеспечивать устойчивость системы за счет обработки ошибок, повторных попыток доставки сообщений и их сохранения в случае сбоев.</li>
        <li><strong>Разделение обязанностей:</strong> Шина службы уменьшает связность между сервисами, предоставляя централизованную точку для управления взаимодействиями, что упрощает обслуживание и масштабирование системы.</li>
    </ul>

    <p>Примеры реализаций Service Bus:</p>
    <ul>
        <li><strong>Azure Service Bus:</strong> облачная служба, предоставляющая сервис для обмена сообщениями между различными приложениями и сервисами.</li>
        <li><strong>IBM MQ:</strong> решение для интеграции корпоративных приложений через обмен сообщениями и управления очередями.</li>
        <li><strong>Apache ServiceMix:</strong> платформа с открытым исходным кодом для интеграции систем на базе принципов ESB (Enterprise Service Bus).</li>
    </ul>
    `,category:"tools",tool:"architecture"},{id:15,question:"Как реализовать балансировку нагрузки в распределенной системе?",answer:`
    <p><strong>Балансировка нагрузки</strong> — это процесс распределения входящего трафика и запросов между несколькими серверами или узлами в системе для обеспечения равномерной загрузки и предотвращения перегрузок отдельных серверов. Это важно для поддержания высокой доступности, производительности и отказоустойчивости в распределенных системах.</p>

    <p>Основные подходы к реализации балансировки нагрузки в распределенной системе:</p>
    <ul>
        <li><strong>Round Robin:</strong> Один из самых простых алгоритмов, где запросы распределяются по серверам по очереди. Это обеспечивает равномерное распределение нагрузки, но не учитывает фактическое состояние серверов.</li>
        <li><strong>Least Connections:</strong> Запросы отправляются на сервер с наименьшим количеством активных подключений. Этот подход полезен, если разные запросы требуют разного времени для обработки.</li>
        <li><strong>Hashing:</strong> В этом подходе используется хэширование для определения сервера, на который будет отправлен запрос. Например, запросы от одного пользователя могут быть всегда направлены на один и тот же сервер.</li>
        <li><strong>Weighted Round Robin:</strong> Серверы получают "вес", и запросы распределяются на основе этого веса. Серверы с большим весом получают больше запросов, что полезно, если у серверов разные вычислительные мощности.</li>
        <li><strong>Geo-Balancing:</strong> Запросы распределяются на серверы, которые географически ближе к пользователю, что снижает задержки и улучшает производительность.</li>
        <li><strong>Health Checking:</strong> Балансировщики нагрузки могут проводить периодические проверки состояния серверов и отправлять запросы только на работающие серверы, что повышает отказоустойчивость системы.</li>
    </ul>

    <p>Основные инструменты для реализации балансировки нагрузки:</p>
    <ul>
        <li><strong>Nginx:</strong> Веб-сервер и обратный прокси с поддержкой балансировки нагрузки. Поддерживает разные алгоритмы распределения запросов.</li>
        <li><strong>HAProxy:</strong> Высокопроизводительный балансировщик нагрузки, который часто используется в крупных распределенных системах для распределения запросов между серверами.</li>
        <li><strong>Cloud Load Balancers:</strong> Облачные решения, такие как AWS Elastic Load Balancer, Azure Load Balancer, Google Cloud Load Balancer, предлагают встроенные функции для масштабирования и распределения трафика между серверами.</li>
    </ul>
    `,category:"tools",tool:"architecture"},{id:16,question:"Что такое API Gateway и как он помогает в микросервисной архитектуре?",answer:`
    <p><strong>API Gateway</strong> — это сервис, который управляет запросами к API веб-сервисов и приложений. Он служит единой точкой входа для запросов от клиентов, направляя их к нужным микросервисам и выполняя дополнительные функции, такие как маршрутизация, агрегация данных, управление доступом, мониторинг и кэширование.</p>

    <p>В микросервисной архитектуре <strong>API Gateway</strong> выполняет ключевые задачи:</p>
    <ul>
        <li><strong>Маршрутизация запросов:</strong> API Gateway направляет запросы клиентов к нужным микросервисам, упрощая взаимодействие между пользователем и системой.</li>
        <li><strong>Агрегация данных:</strong> Gateway собирает данные из нескольких микросервисов и возвращает их как единый ответ, оптимизируя количество запросов.</li>
        <li><strong>Управление доступом:</strong> API Gateway может контролировать права доступа пользователей, ограничивая возможности для неавторизованных запросов.</li>
        <li><strong>Управление трафиком:</strong> Он ограничивает количество запросов от одного клиента, защищая систему от перегрузок в периоды пикового трафика.</li>
        <li><strong>Кэширование данных:</strong> Повторяющиеся запросы кэшируются, что снижает нагрузку на микросервисы и ускоряет ответы.</li>
    </ul>

    <p>API Gateway помогает упростить управление сложными системами, построенными на микросервисах, обеспечивая единое управление доступом, мониторинг и защиту. Однако он также создает точку отказа и требует сложной настройки.</p>
    `,category:"tools",tool:"architecture"},{id:17,question:"Что такое отказоустойчивость (Fault Tolerance) в архитектуре систем?",answer:`
    <p><strong>Отказоустойчивость (Fault Tolerance)</strong> — это способность системы продолжать свою работу даже в случае возникновения сбоев в одном или нескольких её компонентах. Отказоустойчивая архитектура позволяет системе справляться с непредвиденными ситуациями и обеспечивать работоспособность, минимизируя влияние сбоев на пользователей.</p>

    <p>Основные аспекты отказоустойчивости включают:</p>
    <ul>
        <li><strong>Резервирование (Redundancy):</strong> Использование резервных компонентов, таких как серверы или базы данных, которые могут заменить вышедшие из строя элементы.</li>
        <li><strong>Распределение нагрузки:</strong> Балансировка нагрузки между несколькими серверами для предотвращения перегрузки и обеспечения высокой доступности.</li>
        <li><strong>Автоматическое переключение (Failover):</strong> Механизмы, которые автоматически переключают работу на резервные системы в случае сбоя.</li>
        <li><strong>Масштабирование:</strong> Возможность системы адаптироваться к изменениям в трафике и нагрузке, не вызывая простоев.</li>
    </ul>

    <p>Отказоустойчивость критически важна для систем, которые должны работать круглосуточно и без перерывов, таких как банковские приложения, системы управления транспортом или облачные сервисы. Благодаря отказоустойчивости системы продолжают функционировать даже в условиях сбоев, обеспечивая высокий уровень доступности и надёжности.</p>
    `,category:"tools",tool:"architecture"},{id:18,question:"Что такое масштабируемость системы и какие виды масштабирования существуют (горизонтальное, вертикальное)?",answer:`
    <p><strong>Масштабируемость системы</strong> — это способность системы увеличивать свои ресурсы и производительность по мере роста нагрузки и данных. Масштабируемость позволяет системе эффективно работать, даже при увеличении объема запросов, данных или пользователей.</p>
    
    <p>Существуют два основных типа масштабирования:</p>
    
    <h4>1. Вертикальное масштабирование:</h4>
    <p>Вертикальное масштабирование заключается в увеличении ресурсов в существующем оборудовании. Например, добавление процессоров, памяти или дисков в уже имеющийся сервер для повышения его производительности.</p>
    <ul>
        <li><strong>Преимущества:</strong> Компании могут заменять компоненты на более мощные, повышая общую производительность всей системы без изменений в архитектуре.</li>
        <li><strong>Недостатки:</strong> Существуют ограничения по увеличению производительности оборудования. Также при сбое единственного узла система может остановиться, что делает миграцию и восстановление более сложными и затратными.</li>
    </ul>
    
    <h4>2. Горизонтальное масштабирование:</h4>
    <p>Горизонтальное масштабирование подразумевает добавление новых узлов (серверов) в инфраструктуру для распределения нагрузки между ними. Вместо того чтобы увеличивать мощность одного сервера, добавляются новые, что позволяет системе обрабатывать больший объем данных и запросов.</p>
    <ul>
        <li><strong>Преимущества:</strong> Можно использовать недорогое оборудование, масштабирование происходит без остановки системы, распределение нагрузки между узлами снижает риск сбоев.</li>
        <li><strong>Недостатки:</strong> Требует более сложной настройки распределения нагрузки и взаимодействия между узлами.</li>
    </ul>
    
    <p>Выбор между вертикальным и горизонтальным масштабированием зависит от специфики системы и требований бизнеса. Горизонтальное масштабирование лучше подходит для крупных систем, где важна непрерывная работа и минимальные простои.</p>
    `,category:"tools",tool:"architecture"},{id:19,question:"Какие задачи решает архитектура с учетом высокой доступности (High Availability)?",answer:`
    <p><strong>Высокая доступность (High Availability, HA)</strong> — это архитектурный подход, обеспечивающий непрерывную и бесперебойную работу системы даже при возникновении сбоев или отказов в отдельных ее компонентах. Основная цель такой архитектуры — минимизация времени простоя (downtime) и поддержание доступности сервиса для пользователей.</p>
    
    <h4>Основные задачи, которые решает архитектура с учетом высокой доступности:</h4>
    
    <ul>
        <li><strong>Устранение точек отказа (Single Points of Failure):</strong> Проектирование системы таким образом, чтобы сбой одного компонента не приводил к полному отказу всей системы. Это достигается с помощью дублирования компонентов и отказоустойчивых механизмов.</li>
        
        <li><strong>Балансировка нагрузки:</strong> Использование балансировщиков нагрузки для равномерного распределения запросов между несколькими серверами или узлами, что позволяет системе оставаться доступной при увеличении нагрузки или отказе одного из узлов.</li>
        
        <li><strong>Автоматическое переключение на резервные системы (Failover):</strong> При сбое основного сервера или компонента система автоматически переключается на резервный сервер или узел без потери доступности для пользователя.</li>
        
        <li><strong>Репликация данных:</strong> Данные дублируются между разными серверами или дата-центрами для обеспечения доступности информации даже при сбое одного из хранилищ.</li>
        
        <li><strong>Мониторинг и оповещения:</strong> Постоянный мониторинг работы системы для своевременного обнаружения сбоев и немедленного оповещения команды поддержки, чтобы минимизировать время простоя.</li>
        
        <li><strong>Географическая избыточность (Geo-redundancy):</strong> Размещение копий системы в разных географических регионах для повышения устойчивости к глобальным сбоям, таким как природные катастрофы или отказ одного дата-центра.</li>
    </ul>
    
    <p>Архитектура с высокой доступностью необходима для критически важных систем, где простой недопустим, таких как онлайн-сервисы, финансовые приложения или медицинские системы. Внедрение таких механизмов значительно повышает надежность и доступность системы для конечных пользователей.</p>
    `,category:"tools",tool:"architecture"},{id:20,question:"Что такое паттерн Circuit Breaker и для чего он используется в архитектуре?",answer:`
    <p><strong>Паттерн Circuit Breaker</strong> — это важный механизм обеспечения отказоустойчивости, используемый в архитектуре микросервисов для предотвращения каскадных отказов сервисов в распределенной системе. Вдохновленный концепцией электрических выключателей, этот паттерн помогает плавно устранять неожиданные ошибки, не выводя из строя всю систему.</p>
    
    <p>Когда один из сервисов сталкивается с проблемами, такими как недоступность или повышенная задержка, зависимые сервисы также могут начать испытывать задержки или перестать реагировать на запросы. Паттерн Circuit Breaker определяет, когда сервис находится в опасном состоянии, и перенаправляет трафик, сохраняя стабильность системы.</p>
    
    <p>Паттерн работает в трех состояниях:</p>
    <ul>
        <li><strong>Закрытое состояние:</strong> нормальное рабочее состояние, когда ошибки не возникают, и запросы передаются в сервис.</li>
        <li><strong>Открытое состояние:</strong> возникает после определенного количества ошибок, и запросы не отправляются к сервису для предотвращения распространения проблем.</li>
        <li><strong>Полуоткрытое состояние:</strong> через установленный таймаут проверяется, восстановился ли сервис. Если ошибки не возникают, состояние возвращается в закрытое.</li>
    </ul>

    <p>Для реализации паттерна могут быть использованы библиотеки, такие как Hystrix, Resilience4j или Polly, которые обеспечивают отказоустойчивость в микросервисных системах.</p>
    `,category:"tools",tool:"architecture"},{id:21,question:"Какие существуют способы интеграции различных сервисов в системе (синхронные и асинхронные)?",answer:`
        <p><strong>Интеграция сервисов</strong> в системе может происходить двумя основными способами: синхронно и асинхронно.</p>

        <h4>1. Синхронная интеграция</h4>
        <p>Синхронная интеграция предполагает, что сервисы взаимодействуют напрямую, и каждый сервис ожидает ответа от другого сервиса до того, как продолжить выполнение. Типичным примером синхронного взаимодействия является использование HTTP-запросов, когда один сервис отправляет запрос и ждет, пока другой вернет ответ.</p>
        <ul>
            <li>Простота реализации</li>
            <li>Прямое и предсказуемое взаимодействие</li>
            <li>Недостатки: высокая задержка при ожидании ответа, зависимость от доступности других сервисов</li>
        </ul>

        <h4>2. Асинхронная интеграция</h4>
        <p>Асинхронная интеграция позволяет сервисам взаимодействовать, не ожидая немедленного ответа. В этом случае данные передаются через промежуточные компоненты, такие как брокеры сообщений (например, Kafka или RabbitMQ), что позволяет сервисам работать независимо друг от друга. Каждый сервис может отправлять и получать сообщения, не влияя на производительность других сервисов.</p>
        <ul>
            <li>Позволяет достичь высокой отказоустойчивости и масштабируемости</li>
            <li>Лучше подходит для систем с высокой нагрузкой</li>
            <li>Недостатки: усложнение системы и необходимость обработки событий</li>
        </ul>
        `,category:"tools",tool:"architecture"},{id:22,question:"Какую роль играют базы данных в архитектуре систем и какие типы баз данных лучше подходят для разных архитектур?",answer:`
        <p>Базы данных играют ключевую роль в архитектуре систем, так как они обеспечивают хранение, обработку и управление данными, которые необходимы для функционирования приложений. Выбор правильного типа базы данных напрямую влияет на производительность, масштабируемость и отказоустойчивость системы.</p>

<h4>Роль баз данных в архитектуре:</h4>
<ul>
    <li><strong>Хранение данных:</strong> Базы данных предоставляют структурированные или неструктурированные хранилища для данных, используемых в системе.</li>
    <li><strong>Управление транзакциями:</strong> Современные базы данных поддерживают транзакционную целостность, что критически важно для финансовых и других систем, где важна надежность обработки данных.</li>
    <li><strong>Масштабируемость:</strong> Различные типы баз данных поддерживают как горизонтальное, так и вертикальное масштабирование в зависимости от потребностей системы.</li>
    <li><strong>Обеспечение согласованности данных:</strong> Многие базы данных поддерживают распределённую архитектуру, позволяя работать с данными в разных узлах системы.</li>
</ul>

<h4>Типы баз данных и их применение:</h4>
<ul>
    <li><strong>Реляционные базы данных (SQL):</strong> Структурированные данные с поддержкой ACID-транзакций (Atomicity, Consistency, Isolation, Durability). Примеры: MySQL, PostgreSQL, Oracle. Подходят для микросервисной архитектуры, монолитных приложений и систем с высокими требованиями к транзакционной целостности (например, ERP, CRM).</li>
    
    <li><strong>Документно-ориентированные базы данных (NoSQL):</strong> Гибкость структуры данных (JSON, BSON), масштабируемость и высокая производительность при работе с неструктурированными данными. Примеры: MongoDB, Couchbase. Подходят для микросервисов, веб-приложений и систем реального времени.</li>
    
    <li><strong>Ключ-значение (Key-Value) хранилища:</strong> Простая структура "ключ-значение", высокая скорость доступа и масштабируемость. Примеры: Redis, Amazon DynamoDB. Подходят для систем кэширования, хранения сессий и API Gateway.</li>
    
    <li><strong>Графовые базы данных:</strong> Оптимизированы для моделирования связей между сущностями. Примеры: Neo4j, Amazon Neptune. Используются в социальных сетях и рекомендательных системах.</li>
    
    <li><strong>Временные базы данных (Time-Series DB):</strong> Специализируются на данных, изменяющихся с течением времени. Примеры: InfluxDB, TimescaleDB. Подходят для систем мониторинга и IoT.</li>
    
    <li><strong>Колонко-ориентированные базы данных (Columnar databases):</strong> Организация данных в виде столбцов, оптимизированных для аналитических запросов и работы с большими наборами данных. Примеры: Apache Cassandra, HBase. Применяются в системах аналитики и хранения данных (Data Warehouses).</li>
    
    <li><strong>NewSQL базы данных:</strong> Совмещают транзакционную целостность реляционных баз и масштабируемость NoSQL. Примеры: CockroachDB, Google Spanner. Подходят для высоконагруженных микросервисных систем с требованиями к согласованности данных.</li>
</ul>

<p>Выбор типа базы данных зависит от специфики приложения, объёма данных, требований к производительности и устойчивости системы.</p>
        `,category:"tools",tool:"architecture"},{id:23,question:"Как работают контейнеры (например, Docker) в архитектуре современных систем?",answer:`
    <p><strong>Контейнеры</strong> — это легковесные и изолированные среды выполнения, которые позволяют запускать приложения и их зависимости в единых и стандартизированных упаковках. Контейнеры часто используются в современной архитектуре систем, так как они упрощают процесс разработки, тестирования, развертывания и масштабирования приложений.</p>
    
    <h4>Основные преимущества контейнеров:</h4>
    <ul>
        <li><strong>Изоляция:</strong> Каждый контейнер работает в своей собственной изолированной среде, что обеспечивает независимость от основной операционной системы и других контейнеров.</li>
        <li><strong>Портативность:</strong> Контейнеры могут быть легко перенесены между различными окружениями (например, с локальной машины разработчика на серверы), так как содержат всё необходимое для выполнения приложения.</li>
        <li><strong>Масштабируемость:</strong> Контейнеры могут быть быстро развернуты и масштабированы для удовлетворения увеличивающихся нагрузок. Это особенно полезно в облачных и микросервисных архитектурах.</li>
        <li><strong>Легковесность:</strong> Контейнеры потребляют меньше ресурсов по сравнению с виртуальными машинами, что делает их более эффективными в использовании вычислительных ресурсов.</li>
    </ul>

    <h4>Docker как инструмент контейнеризации:</h4>
    <p>Docker — одна из наиболее популярных платформ для контейнеризации. Он позволяет создавать, развертывать и управлять контейнерами. С Docker, разработчики могут паковать свои приложения вместе со всеми зависимостями и развертывать их на любом сервере, поддерживающем Docker, что обеспечивает предсказуемую работу приложения в любых средах.</p>
    
    <h4>Роль контейнеров в современной архитектуре:</h4>
    <ul>
        <li><strong>Микросервисная архитектура:</strong> Контейнеры позволяют развертывать и масштабировать каждый микросервис независимо, что упрощает управление и обновление отдельных компонентов системы.</li>
        <li><strong>DevOps процессы:</strong> Контейнеры облегчают процессы CI/CD (непрерывной интеграции и доставки), позволяя быстро развертывать приложения и проводить тестирование в стандартизированной среде.</li>
        <li><strong>Облачные платформы:</strong> Контейнеры широко используются в облачных платформах (например, Kubernetes), где они помогают организовать гибкое и динамическое распределение ресурсов.</li>
    </ul>

    <p>Контейнеризация, с использованием инструментов вроде Docker, стала стандартом для создания масштабируемых и легко управляемых приложений в современной архитектуре систем.</p>
    `,category:"tools",tool:"architecture"},{id:24,question:"Что такое оркестрация контейнеров (например, Kubernetes) и как она помогает управлять микросервисами?",answer:`
        <p><strong>Оркестрация контейнеров</strong> – это процесс автоматизации объединения контейнеров в сеть и управления ими, позволяющий развертывать приложения в нужном масштабе. Контейнеризация связывает код приложения со всеми файлами и библиотеками, необходимыми для работы в любой инфраструктуре. Архитектура микросервисов может содержать сотни или даже тысячи контейнеров по мере роста и усложнения приложений. Инструменты оркестрации контейнеров призваны упростить управление инфраструктурой контейнеров за счет автоматизации всего их жизненного цикла – от выделения ресурсов и планирования до развертывания и удаления. Организации могут извлечь выгоду из масштабной контейнеризации без дополнительных накладных расходов на обслуживание. </p>
        <h4>Как оркестрация помогает управлять микросервисами:</h4>
    <ul>
        <li><strong>Масштабирование:</strong> Автоматическое масштабирование контейнеров в зависимости от нагрузки.</li>
        <li><strong>Высокая доступность:</strong> Обеспечение непрерывной работы приложений и автоматическое восстановление контейнеров в случае сбоев.</li>
        <li><strong>Мониторинг и управление:</strong> Инструменты оркестрации, такие как Kubernetes, предоставляют централизованные средства для мониторинга состояния контейнеров и управления ими.</li>
        <li><strong>Распределение нагрузки:</strong> Интеллектуальная маршрутизация трафика между контейнерами для обеспечения равномерной нагрузки.</li>
    </ul>
        `,category:"tools",tool:"architecture"},{id:25,question:"Что такое DevOps и как архитектура систем адаптируется для CICD процессов?",answer:`
        <p><strong>DevOps</strong> — это методология разработки программного обеспечения, которая объединяет разработку (Development) и эксплуатацию (Operations) для ускорения и повышения эффективности процесса доставки приложений. Основная цель DevOps — автоматизация, улучшение взаимодействия команд и обеспечение непрерывной интеграции и доставки (CI/CD).</p>
    
        <h4>DevOps и архитектура систем:</h4>
        <p>Архитектура систем адаптируется для DevOps и CI/CD процессов путем внедрения различных принципов и инструментов, которые поддерживают непрерывную разработку, тестирование и развертывание приложений. Основные аспекты архитектуры, адаптируемые для DevOps:</p>
        
        <ul>
            <li><strong>Контейнеризация:</strong> Использование контейнеров (например, Docker) для изоляции приложений и обеспечения их стабильной работы в любых средах. Это упрощает развертывание приложений и обеспечивает согласованность между различными средами.</li>
            <li><strong>Микросервисы:</strong> Разделение приложений на микросервисы позволяет обновлять и развертывать компоненты независимо, что значительно ускоряет процессы CI/CD и упрощает управление масштабируемостью и отказоустойчивостью.</li>
            <li><strong>Оркестрация:</strong> Инструменты вроде Kubernetes помогают управлять контейнерами в масштабе, автоматизируя развертывание, масштабирование и обновление приложений.</li>
            <li><strong>Непрерывная интеграция и доставка (CI/CD):</strong> Автоматизация процессов тестирования, сборки и развертывания с помощью инструментов CI/CD (например, Jenkins, GitLab CI) позволяет быстро и безопасно обновлять приложения.</li>
            <li><strong>Мониторинг и логирование:</strong> Интеграция инструментов мониторинга (Prometheus, Grafana) и логирования позволяет отслеживать производительность приложений и быстро реагировать на сбои или изменения.</li>
        </ul>
    
        <p>Внедрение DevOps-практик и адаптация архитектуры систем для CI/CD позволяет значительно ускорить время выхода на рынок, повысить гибкость и надежность приложений, а также улучшить взаимодействие между командами разработки и эксплуатации.</p>
        `,category:"tools",tool:"architecture"},{id:26,question:"Какие инструменты мониторинга можно использовать для анализа производительности архитектуры системы?",answer:`
    <p>Для мониторинга производительности архитектуры системы используется множество инструментов, которые помогают отслеживать состояние серверов, приложений, баз данных и сети в реальном времени. Они позволяют выявлять узкие места, анализировать загрузку ресурсов и обеспечивать стабильную работу системы.</p>

    <h4>Основные инструменты мониторинга:</h4>
    <ul>
        <li><strong>Prometheus:</strong> Система мониторинга и оповещения, которая собирает метрики с сервисов и систем, позволяя анализировать производительность и выявлять проблемы. Часто используется в связке с инструментами визуализации, такими как Grafana.</li>
        <li><strong>Grafana:</strong> Инструмент для визуализации метрик в реальном времени. Поддерживает интеграцию с различными источниками данных (Prometheus, InfluxDB) и позволяет строить наглядные дашборды.</li>
        <li><strong>InfluxDB:</strong> База данных для временных рядов, оптимизированная для хранения и анализа метрик производительности. Часто используется в системах IoT и мониторинга инфраструктуры.</li>
        <li><strong>Elasticsearch, Logstash, Kibana (ELK Stack):</strong> Платформа для анализа и визуализации журналов и логов системы. Используется для централизованного хранения и анализа логов, выявления аномалий и отслеживания производительности.</li>
        <li><strong>Datadog:</strong> Облачная платформа мониторинга, которая отслеживает метрики, логи и события с различных систем и сервисов. Предоставляет удобные дашборды и оповещения о проблемах в реальном времени.</li>
        <li><strong>New Relic:</strong> Инструмент для мониторинга производительности приложений, позволяющий отслеживать производительность кода, запросов, баз данных и инфраструктуры.</li>
        <li><strong>Zabbix:</strong> Система мониторинга сетей и серверов, которая обеспечивает контроль состояния инфраструктуры и приложений, предоставляет оповещения о сбоях и аномалиях.</li>
        <li><strong>Nagios:</strong> Ветеран среди инструментов мониторинга, который позволяет отслеживать состояние серверов, приложений и сети с возможностью гибкой настройки оповещений.</li>
    </ul>

    <p>Эти инструменты помогают выявлять проблемы с производительностью системы, обеспечивают прозрачность процессов и способствуют поддержанию высокой доступности и стабильности архитектуры.</p>
    `,category:"tools",tool:"architecture"},{id:27,question:"Как архитектура системы влияет на безопасность приложения?",answer:`
    <p>Архитектура системы оказывает значительное влияние на безопасность приложения, так как заложенные в ней решения определяют способы защиты данных, управление доступом и предотвращение угроз. Безопасная архитектура помогает минимизировать риски взлома и утечек данных.</p>

    <h4>Ключевые аспекты архитектуры, влияющие на безопасность:</h4>
    <ul>
        <li><strong>Сегментация и изоляция компонентов:</strong> Правильное разделение приложений на отдельные компоненты (например, микросервисы) с ограничением их взаимодействия помогает предотвратить распространение угроз. Изоляция сервисов и данных усложняет атаки, такие как доступ к несанкционированной информации.</li>
        <li><strong>Шифрование данных:</strong> Архитектура должна поддерживать использование шифрования для передачи данных (TLS/SSL) и для их хранения. Это защитит данные даже в случае перехвата запросов или доступа к базе данных злоумышленником.</li>
        <li><strong>Аутентификация и авторизация:</strong> Централизованная система управления доступом (например, OAuth2, OpenID) помогает контролировать, кто может взаимодействовать с различными частями системы, и предотвращает несанкционированные действия.</li>
        <li><strong>Принцип наименьших привилегий:</strong> Каждый компонент системы должен обладать только теми правами доступа, которые ему необходимы. Это ограничивает потенциальный ущерб в случае взлома одного из сервисов.</li>
        <li><strong>Мониторинг и аудит:</strong> Архитектура должна включать механизмы журналирования и мониторинга для выявления подозрительных действий, анализа атак и быстрой реакции на инциденты безопасности.</li>
        <li><strong>Использование защитных механизмов:</strong> Важной частью архитектуры является применение таких механизмов, как брандмауэры, системы предотвращения вторжений (IDS/IPS), API Gateways, WAF (Web Application Firewall) для защиты от атак.</li>
    </ul>

    <p>Безопасность приложения начинается с архитектуры системы. Принятие решений о том, как разделяются и защищаются данные, как осуществляется контроль доступа и как системы взаимодействуют друг с другом, оказывает непосредственное влияние на защиту от внешних и внутренних угроз.</p>
    `,category:"tools",tool:"architecture"},{id:28,question:"Что такое распределенная архитектура и какие её особенности?",answer:`
    <p><strong>Распределенная архитектура</strong> — это архитектурный подход, при котором компоненты системы распределены по разным физическим или виртуальным узлам, работающим как единое целое. Такие системы могут состоять из множества серверов, которые взаимодействуют через сеть для выполнения различных задач.</p>
    
    <h4>Особенности распределенной архитектуры:</h4>
    <ul>
        <li><strong>Масштабируемость:</strong> Благодаря распределению компонентов на разные узлы, система легко масштабируется путем добавления новых серверов или виртуальных машин для обработки увеличивающегося объема данных и нагрузки.</li>
        <li><strong>Отказоустойчивость:</strong> В случае выхода из строя одного узла система продолжает работу за счет оставшихся узлов, что обеспечивает высокую доступность и устойчивость к сбоям.</li>
        <li><strong>Географическая децентрализация:</strong> Компоненты системы могут быть расположены в разных географических местах, что улучшает производительность и снижает задержки для пользователей из разных регионов.</li>
        <li><strong>Консистентность данных:</strong> Одной из сложностей распределенных систем является поддержание согласованности данных между разными узлами. Для этого применяются алгоритмы, такие как кворумы или распределенные транзакции.</li>
        <li><strong>Асинхронное взаимодействие:</strong> В распределенных системах часто используется асинхронная коммуникация между компонентами для увеличения производительности и снижения задержек при обмене данными.</li>
        <li><strong>Сложность управления:</strong> Управление и мониторинг распределенных систем требует дополнительных усилий и использования специализированных инструментов для обеспечения связи между узлами, контроля состояния и обработки отказов.</li>
    </ul>

    <p>Распределенная архитектура широко используется в облачных приложениях, микросервисах и больших корпоративных системах, где требуется масштабируемость, отказоустойчивость и гибкость в управлении ресурсами.</p>
    `,category:"tools",tool:"architecture"},{id:29,question:"Как проектировать архитектуру для больших данных (Big Data)?",answer:`
    <p><strong>Архитектура для больших данных (Big Data)</strong> требует особого подхода для эффективной обработки, хранения и анализа огромных объемов данных, поступающих из различных источников. Основные принципы проектирования такой архитектуры направлены на масштабируемость, отказоустойчивость и производительность.</p>

    <h4>Основные аспекты проектирования архитектуры для Big Data:</h4>
    
    <ul>
        <li><strong>Масштабируемость:</strong> Архитектура должна быть гибкой и способной масштабироваться как горизонтально (добавление узлов или серверов), так и вертикально (увеличение мощности существующих серверов) для обработки растущих объемов данных.</li>
        
        <li><strong>Децентрализованное хранение данных:</strong> Использование распределенных систем хранения, таких как Hadoop HDFS, Apache Cassandra, Amazon S3, позволяет хранить данные на множестве серверов, что обеспечивает высокую отказоустойчивость и доступность данных.</li>
        
        <li><strong>Обработка данных в реальном времени и пакетная обработка:</strong> Архитектура должна поддерживать как потоковую обработку (например, Apache Kafka, Apache Flink) для анализа данных в реальном времени, так и пакетную обработку (например, Apache Spark, Hadoop MapReduce) для анализа больших объемов данных.</li>
        
        <li><strong>Обработка данных в распределенных системах:</strong> Для повышения производительности и параллельной обработки больших объемов данных используются распределенные системы, такие как Apache Spark и Hadoop. Это позволяет ускорить выполнение аналитических и вычислительных задач.</li>
        
        <li><strong>Гибкость и поддержка различных типов данных:</strong> Системы для Big Data должны уметь работать с различными типами данных — структурированными, неструктурированными и полу-структурированными (тексты, логи, изображения, видео, данные из IoT-устройств и т. д.). В качестве хранилищ часто используют NoSQL базы данных (например, MongoDB, HBase) или распределенные файловые системы.</li>
        
        <li><strong>Инструменты анализа и машинного обучения:</strong> Для эффективной работы с большими данными часто используются инструменты анализа данных, визуализации и предсказательного моделирования, такие как Apache Mahout, TensorFlow и другие системы машинного обучения и аналитики.</li>
        
        <li><strong>Обеспечение безопасности и конфиденциальности данных:</strong> Большие объемы данных часто содержат чувствительную информацию, поэтому архитектура должна обеспечивать шифрование данных, управление доступом, а также защиту от несанкционированного использования данных.</li>
    </ul>

    <p>Проектирование архитектуры для Big Data требует комплексного подхода с учетом характеристик данных, необходимых инструментов для анализа и потребностей бизнеса. Выбор технологий зависит от конкретного случая использования и требований к производительности, надежности и безопасности.</p>
    `,category:"tools",tool:"architecture"},{id:30,question:"Какие основные различия между архитектурами on-premises и облачных приложений (Cloud)?",answer:`
    <p><strong>On-premises архитектура</strong> и <strong>облачные приложения (Cloud)</strong> — это два разных подхода к развертыванию, управлению и масштабированию систем. Основные различия между ними заключаются в способах хранения данных, управлении ресурсами, масштабируемости и стоимости.</p>

    <h4>Основные различия:</h4>

    <ul>
        <li><strong>Местоположение инфраструктуры:</strong>
            <ul>
                <li><strong>On-premises:</strong> Инфраструктура размещается и управляется на собственных серверах компании, расположенных в физическом дата-центре организации.</li>
                <li><strong>Облачные приложения (Cloud):</strong> Инфраструктура размещена на серверах облачного провайдера (например, AWS, Google Cloud, Microsoft Azure) и управляется удаленно через интернет.</li>
            </ul>
        </li>
        
        <li><strong>Управление и администрирование:</strong>
            <ul>
                <li><strong>On-premises:</strong> Компания полностью контролирует и управляет всеми аспектами инфраструктуры, включая обновления, обслуживание и безопасность.</li>
                <li><strong>Облачные приложения (Cloud):</strong> Облачный провайдер отвечает за обслуживание серверов, обновления, масштабирование и безопасность, предоставляя пользователю более простое управление через панели управления или API.</li>
            </ul>
        </li>

        <li><strong>Масштабируемость:</strong>
            <ul>
                <li><strong>On-premises:</strong> Масштабирование требует покупки нового оборудования, что может занять много времени и быть затратным.</li>
                <li><strong>Облачные приложения (Cloud):</strong> Масштабирование можно выполнить мгновенно за счет добавления ресурсов в облаке, что делает его более гибким и удобным.</li>
            </ul>
        </li>

        <li><strong>Стоимость:</strong>
            <ul>
                <li><strong>On-premises:</strong> Значительные капитальные затраты на покупку оборудования и лицензий, а также затраты на техническое обслуживание.</li>
                <li><strong>Облачные приложения (Cloud):</strong> Операционные расходы (OPEX), так как вы платите за потребляемые ресурсы, что снижает начальные инвестиции.</li>
            </ul>
        </li>

        <li><strong>Безопасность:</strong>
            <ul>
                <li><strong>On-premises:</strong> Полный контроль над безопасностью, но компании нужно самостоятельно внедрять все меры безопасности, что требует дополнительных ресурсов.</li>
                <li><strong>Облачные приложения (Cloud):</strong> Облачные провайдеры предоставляют встроенные инструменты безопасности, но организация должна также управлять безопасностью на уровне приложений и данных.</li>
            </ul>
        </li>

        <li><strong>Гибкость и доступность:</strong>
            <ul>
                <li><strong>On-premises:</strong> Системы могут быть менее гибкими и доступными, так как зависят от локальной инфраструктуры и обслуживания.</li>
                <li><strong>Облачные приложения (Cloud):</strong> Высокая доступность и гибкость благодаря распределенной инфраструктуре и резервированию данных в различных регионах.</li>
            </ul>
        </li>

        <li><strong>Обновления и поддержка:</strong>
            <ul>
                <li><strong>On-premises:</strong> Ответственность за обновления, патчи и техническую поддержку лежит на компании.</li>
                <li><strong>Облачные приложения (Cloud):</strong> Обновления и поддержка автоматизированы и предоставляются облачным провайдером, что снижает административные усилия.</li>
            </ul>
        </li>
    </ul>

    <p>Выбор между on-premises и облачной архитектурой зависит от специфики бизнеса, требований безопасности, гибкости и доступных ресурсов. Облачные решения популярны благодаря гибкости, масштабируемости и сокращению затрат, в то время как on-premises подходит для организаций, требующих полного контроля над инфраструктурой и данными.</p>
    `,category:"tools",tool:"architecture"},{id:31,question:"Как реализовать безопасность данных в распределенной архитектуре?",answer:`
    <p>Реализация безопасности данных в распределенной архитектуре является сложной задачей, так как данные находятся на разных узлах сети, что увеличивает риск их утечки и компрометации. Важно обеспечить защиту данных на всех уровнях: от физической безопасности серверов до защиты данных при передаче и хранении. Вот ключевые меры для обеспечения безопасности данных в распределенной системе:</p>

    <h4>Основные меры безопасности:</h4>
    
    <ul>
        <li><strong>Шифрование данных:</strong>
            <ul>
                <li><strong>Шифрование данных при передаче (TLS/SSL):</strong> Использование протоколов шифрования при передаче данных по сети, таких как TLS или SSL, предотвращает перехват данных в процессе их перемещения между узлами.</li>
                <li><strong>Шифрование данных на хранении:</strong> Для защиты данных, хранящихся на узлах системы, следует применять шифрование на уровне баз данных и файловых систем.</li>
            </ul>
        </li>

        <li><strong>Аутентификация и авторизация:</strong>
            <ul>
                <li><strong>Многофакторная аутентификация (MFA):</strong> Для доступа к данным и узлам системы требуется использование многофакторной аутентификации, что повышает уровень безопасности.</li>
                <li><strong>Ролевое управление доступом (RBAC):</strong> Контроль доступа к данным должен быть основан на ролях пользователей и сервисов, с минимальными привилегиями для выполнения только необходимых операций.</li>
            </ul>
        </li>

        <li><strong>Мониторинг и аудит:</strong>
            <ul>
                <li><strong>Логирование и аудит действий:</strong> Регулярное логирование действий пользователей и сервисов с последующим аудитом для обнаружения аномалий и попыток несанкционированного доступа.</li>
                <li><strong>Мониторинг безопасности:</strong> Внедрение систем мониторинга и обнаружения вторжений (IDS/IPS) для отслеживания активности и выявления подозрительных действий в системе.</li>
            </ul>
        </li>

        <li><strong>Резервное копирование и восстановление:</strong>
            <ul>
                <li><strong>Регулярное резервное копирование данных:</strong> Организация автоматического резервного копирования данных и их хранения в защищенных локациях.</li>
                <li><strong>План восстановления после сбоев:</strong> Разработка и регулярное тестирование планов по восстановлению данных и систем после сбоев или атак.</li>
            </ul>
        </li>

        <li><strong>Управление ключами шифрования:</strong>
            <ul>
                <li>Использование безопасных механизмов управления ключами шифрования для предотвращения несанкционированного доступа к данным.</li>
            </ul>
        </li>

        <li><strong>Сегментация сети и изоляция данных:</strong>
            <ul>
                <li>Использование сегментации сети для ограничения доступа к критически важным данным и серверам. Изоляция данных позволяет ограничить риски, если какой-либо узел скомпрометирован.</li>
            </ul>
        </li>
    </ul>
    `,category:"tools",tool:"architecture"},{id:32,question:"Какие существуют стратегии кэширования и как они улучшают производительность архитектуры?",answer:`
        <p>Кэширование – это одна из наиболее эффективных стратегий повышения производительности и масштабируемости систем. Оно заключается в сохранении часто запрашиваемых данных в более быстрых хранилищах (кэше), чтобы избежать многократного обращения к базам данных или удаленным сервисам. Стратегии кэширования варьируются в зависимости от характера данных и потребностей приложения.</p>
        
        <h4>Основные стратегии кэширования:</h4>
        
        <ul>
            <li><strong>Кэширование на стороне клиента:</strong>
                <p>Данные сохраняются непосредственно на устройстве клиента (например, в браузере). Это позволяет избежать лишних сетевых запросов, увеличивая скорость отклика приложения.</p>
            </li>
            
            <li><strong>Кэширование на стороне сервера:</strong>
                <p>Сервер кэширует часто запрашиваемые данные в оперативной памяти или специализированных кэширующих системах (например, Redis, Memcached), чтобы сократить время обработки запросов и нагрузку на базу данных.</p>
            </li>
            
            <li><strong>Кэширование на уровне CDN:</strong>
                <p>Контент-доставка через CDN (Content Delivery Network) используется для кэширования статических ресурсов (изображений, видео, файлов) на серверах, расположенных ближе к пользователям, что снижает задержки при доступе к данным.</p>
            </li>
            
            <li><strong>Full Page Caching (FPC):</strong>
                <p>Кэширование целых страниц сайта или приложения. Это позволяет сократить время генерации страниц, особенно в тех случаях, когда содержимое страницы редко изменяется.</p>
            </li>
            
            <li><strong>Кэширование на уровне базы данных:</strong>
                <p>Часто используемые результаты запросов к базе данных сохраняются в кэше, что уменьшает нагрузку на базу данных и ускоряет обработку последующих запросов.</p>
            </li>
    
            <li><strong>Lazy Caching (ленивое кэширование):</strong>
                <p>При ленивом кэшировании данные записываются в кэш только при первом запросе, и последующие обращения используют кэшированные данные.</p>
            </li>
    
            <li><strong>Write-Through Caching:</strong>
                <p>Данные записываются одновременно в кэш и основное хранилище. Это обеспечивает высокую доступность данных, но может снижать производительность записи.</p>
            </li>
    
            <li><strong>Write-Behind Caching (write-back):</strong>
                <p>Запись сначала выполняется в кэш, а данные переносятся в основное хранилище позже. Эта стратегия уменьшает задержку записи, но есть риск потери данных при сбоях.</p>
            </li>
    
            <li><strong>Time-to-Live (TTL):</strong>
                <p>Эта стратегия устанавливает время жизни данных в кэше. Когда срок истекает, данные обновляются из основного источника, что предотвращает использование устаревшей информации.</p>
            </li>
        </ul>
    
        <h4>Как кэширование улучшает производительность:</h4>
        <ul>
            <li><strong>Снижение нагрузки на серверы:</strong> Кэширование позволяет разгрузить серверы баз данных и другие удаленные источники, так как данные предоставляются быстрее из кэша.</li>
            <li><strong>Увеличение скорости отклика:</strong> Запросы обрабатываются быстрее, так как данные уже находятся в кэше, что минимизирует задержки и улучшает пользовательский опыт.</li>
            <li><strong>Экономия ресурсов:</strong> За счет повторного использования кэшированных данных, снижаются затраты на процессорное время и сетевые операции.</li>
            <li><strong>Масштабируемость:</strong> С помощью кэширования можно масштабировать систему более эффективно, минимизируя количество операций, требующих ресурсов базы данных.</li>
        </ul>
        `,category:"tools",tool:"architecture"},{id:33,question:"Что такое серверless архитектура и как она используется в современных системах?",answer:`
    <p><strong>Serverless архитектура</strong> — это модель выполнения облачных вычислений, при которой поставщик облачных услуг управляет динамическим распределением машинных ресурсов.</p>
    <h4>Основные черты serverless вычислений:</h4>
    <ul>
        <li><strong>Абстракция</strong>: отсутствует необходимость управления сервером, на котором запускается программа.</li>
        <li><strong>Экономичность</strong>: бизнес платит только за фактически потребленные ресурсы.</li>
        <li><strong>Эластичность</strong>: провайдер автоматически предоставляет необходимое количество ресурсов в зависимости от нагрузки.</li>
        <li><strong>Ограниченный жизненный цикл</strong>: приложения запускаются в контейнерах и останавливаются после выполнения задачи.</li>
    </ul>

    <h4>Преимущества serverless архитектуры:</h4>
    <ul>
        <li><strong>Масштабируемость и гибкость</strong>: serverless архитектура поддерживает автоматическое масштабирование под текущие нагрузки.</li>
        <li><strong>Снижение затрат</strong>: оплата только за фактическое использование ресурсов.</li>
        <li><strong>Упрощение управления инфраструктурой</strong>: разработчикам не нужно заботиться об обслуживании серверов, это делает поставщик облачных услуг.</li>
    </ul>

    <h4>Пример использования:</h4>
    <p>Компания Coca-Cola использует serverless функции для управления интеллектуальными торговыми автоматами, что значительно снижает операционные расходы и повышает производительность.</p>

    <h4>Когда не следует использовать serverless архитектуру:</h4>
    <ul>
        <li>При высоком предсказуемом спросе — контейнеры могут быть более рентабельны.</li>
        <li>Для долгосрочных задач — если задача занимает более 10 минут, serverless не лучший выбор.</li>
        <li>Когда необходим высокий уровень контроля над инфраструктурой.</li>
    </ul>
    `,category:"tools",tool:"architecture"},{id:34,question:"Как выбрать подходящую архитектуру для высоконагруженных систем?",answer:`
    <p>Выбор архитектуры для высоконагруженных систем требует учёта множества факторов, таких как производительность, масштабируемость, отказоустойчивость и безопасность. Основные критерии выбора архитектуры для таких систем:</p>

    <h4>1. Масштабируемость:</h4>
    <p>Высоконагруженные системы должны легко масштабироваться как по вертикали (увеличение ресурсов на существующих серверах), так и по горизонтали (добавление новых серверов). Для этого обычно используются микросервисные или распределенные архитектуры, где каждая функциональная часть системы работает автономно.</p>

    <h4>2. Балансировка нагрузки:</h4>
    <p>Для распределения трафика между несколькими серверами применяются балансировщики нагрузки. Они помогают равномерно распределять запросы и предотвращают перегрузку отдельных компонентов системы.</p>

    <h4>3. Отказоустойчивость:</h4>
    <p>Для поддержания работы системы в условиях сбоев необходимо обеспечить отказоустойчивость. Это достигается за счёт резервирования компонентов системы и использования таких паттернов, как <strong>Circuit Breaker</strong>, которые предотвращают каскадные сбои.</p>

    <h4>4. Кэширование:</h4>
    <p>Использование стратегий кэширования помогает снизить нагрузку на базу данных и ускорить обработку запросов. Кэширование может быть реализовано на уровне приложений или с помощью сторонних решений, таких как Redis или Memcached.</p>

    <h4>5. Работа с данными:</h4>
    <p>Выбор базы данных также играет важную роль. Для высоконагруженных систем используются распределённые базы данных (например, Cassandra) или базы данных с возможностью горизонтального масштабирования, такие как MySQL Cluster или PostgreSQL с шардингом.</p>

    <h4>6. Асинхронная обработка:</h4>
    <p>Использование асинхронных операций и очередей сообщений (например, RabbitMQ или Kafka) помогает обрабатывать большие объёмы данных без блокировки основного потока работы системы.</p>

    <h4>7. Безопасность:</h4>
    <p>Высоконагруженные системы требуют усиленной защиты данных и предотвращения угроз. Важными аспектами являются защита от DDoS-атак, использование шифрования данных и аутентификация запросов.</p>
    `,category:"tools",tool:"architecture"},{id:35,question:"Что такое API First подход в проектировании архитектуры и как он применяется?",answer:`
        <p><strong>API First</strong> — это методология проектирования программного обеспечения, при которой API (интерфейс прикладного программирования) становится центральным элементом разработки. API разрабатывается и документируется на первых этапах создания приложения, обеспечивая единые стандарты для взаимодействия всех компонентов системы.</p>

    <h4>Основные принципы API First:</h4>
    <ul>
        <li><strong>Первоначальное проектирование API:</strong> Прежде чем приступить к разработке приложения, создается и утверждается API. Это позволяет чётко определить, как различные компоненты системы будут взаимодействовать друг с другом.</li>
        <li><strong>Консистентность:</strong> Все команды разработки используют один и тот же API, что гарантирует совместимость между различными сервисами и упрощает интеграцию.</li>
        <li><strong>Документирование:</strong> API детально документируется с самого начала, что облегчает разработку, поддержку и использование API как внутренними командами, так и внешними потребителями.</li>
        <li><strong>Тестируемость:</strong> API First позволяет создать мок-сервисы для тестирования взаимодействий на ранних этапах разработки, еще до реализации полной функциональности.</li>
    </ul>

    <h4>Преимущества API First:</h4>
    <ul>
        <li><strong>Гибкость разработки:</strong> Поскольку API разрабатывается до реализации, разработчики фронтенда и бэкенда могут работать параллельно, основываясь на спецификации API.</li>
        <li><strong>Модульность и переиспользуемость:</strong> API First способствует созданию модульной архитектуры, где каждый компонент системы может быть легко заменен или переиспользован в другом контексте.</li>
        <li><strong>Упрощение интеграции:</strong> Ясная структура и стандартизация API упрощает интеграцию с другими системами и внешними сервисами.</li>
    </ul>

    <h4>Применение API First:</h4>
    <p>API First подход чаще всего используется в микросервисных архитектурах, где каждый сервис имеет чётко определённый API для взаимодействия с другими сервисами. Например, при разработке крупного веб-приложения, API описывается и утверждается в самом начале, после чего команды фронтенда и бэкенда могут разрабатывать свои компоненты независимо друг от друга. Также этот подход часто применяется для создания публичных API, доступных внешним разработчикам, таких как API для интеграции с платёжными системами или социальными сетями.</p>
    `,category:"tools",tool:"architecture"},{id:36,question:"Какие существуют типы архитектур для систем с высокой надежностью и отказоустойчивостью?",answer:`
        <p><strong>Архитектуры с высокой надежностью и отказоустойчивостью</strong> разработаны для минимизации сбоев и обеспечения бесперебойной работы систем, даже при отказе отдельных компонентов. Для достижения этих целей существует несколько типов архитектур:</p>

    <h4>1. Реплицированная архитектура (Replicated Architecture):</h4>
    <p>Данная архитектура основана на репликации данных и сервисов между несколькими узлами системы. Это позволяет обеспечить доступность данных и операций даже при выходе из строя одного из узлов. Например, базы данных с репликацией данных (master-slave или master-master) обеспечивают целостность данных и возможность чтения/записи на резервных узлах.</p>

    <h4>2. Кластерная архитектура (Clustered Architecture):</h4>
    <p>Кластеризация подразумевает объединение нескольких серверов в единый кластер, который работает как единая система. Это увеличивает производительность и отказоустойчивость, так как, если один сервер выходит из строя, нагрузка перераспределяется на остальные сервера кластера. Часто используется в базах данных (например, Cassandra) или веб-серверах (например, NGINX с балансировкой нагрузки).</p>

    <h4>3. Архитектура с балансировкой нагрузки (Load Balancing Architecture):</h4>
    <p>Система с балансировкой нагрузки распределяет входящие запросы между несколькими серверами, что позволяет избежать перегрузки одного сервера и улучшить отказоустойчивость. При сбое одного из серверов балансировщик направляет запросы на оставшиеся активные серверы.</p>

    <h4>4. Архитектура с геораспределением (Geo-Distributed Architecture):</h4>
    <p>В таких архитектурах системы развертываются в нескольких географических регионах, что повышает отказоустойчивость и надежность на случай сбоев в определенном регионе или зоне. Этот подход также уменьшает задержки для пользователей, которые могут обращаться к ближайшему географически узлу.</p>

    <h4>5. Архитектура с активным-резервным режимом (Active-Passive Architecture):</h4>
    <p>В такой архитектуре один сервер работает как основной (активный), а резервный сервер (пассивный) находится в режиме ожидания. В случае сбоя активного сервера пассивный становится активным, обеспечивая отказоустойчивость системы. Примером может быть резервное копирование баз данных или системы на основе кластеров с пассивным узлом.</p>

    <h4>6. Микросервисная архитектура (Microservices Architecture):</h4>
    <p>Микросервисы распределяют систему на независимые сервисы, каждый из которых может быть развернут и масштабирован отдельно. Отказ одного сервиса не приведет к остановке всей системы. Паттерн Circuit Breaker часто используется для обеспечения отказоустойчивости микросервисов.</p>

    <h4>7. Архитектура с применением паттернов отказоустойчивости (Fault-Tolerant Patterns):</h4>
    <p>Для повышения надежности систем применяются различные паттерны отказоустойчивости, такие как <strong>паттерн Circuit Breaker</strong>, который предотвращает каскадные сбои, и <strong>паттерн Bulkhead</strong>, который разделяет систему на изолированные секции для ограничения воздействия сбоев.</p>
    `,category:"tools",tool:"architecture"},{id:37,question:"Что такое Edge Computing и как его архитектура влияет на распределенные системы?",answer:`
    <p><strong>Edge Computing</strong> (периферийные вычисления) — это децентрализованная модель обработки данных, при которой вычислительные ресурсы и хранение данных перемещаются ближе к источникам данных, то есть к краю сети (edge). В отличие от традиционных централизованных облачных вычислений, периферийные вычисления позволяют обрабатывать данные локально, непосредственно на устройствах или в ближайших узлах сети, а не отправлять их в централизованные облачные серверы для обработки.</p>

    <h4>Основные преимущества Edge Computing:</h4>
    <ul>
        <li><strong>Снижение задержек:</strong> Поскольку данные обрабатываются ближе к месту их генерации (например, на устройствах IoT), это существенно уменьшает задержку и обеспечивает более быструю реакцию на события в реальном времени.</li>
        <li><strong>Уменьшение нагрузки на центральные серверы:</strong> Edge Computing уменьшает количество данных, передаваемых в облако или центральные серверы для обработки, что снижает нагрузку на основную инфраструктуру.</li>
        <li><strong>Снижение затрат на передачу данных:</strong> За счет локальной обработки уменьшаются объемы данных, отправляемых по сети, что снижает затраты на сетевую инфраструктуру и облачные услуги.</li>
        <li><strong>Увеличение надежности:</strong> Локальная обработка позволяет продолжать работу даже при временной недоступности облачных серверов или сетевых сбоев, что повышает отказоустойчивость системы.</li>
    </ul>

    <h4>Влияние архитектуры Edge Computing на распределенные системы:</h4>
    <ul>
        <li><strong>Децентрализация обработки данных:</strong> В традиционных распределенных системах данные обычно отправляются в центральные облачные сервера для обработки. Архитектура Edge Computing смещает акцент на обработку данных вблизи их источника, что улучшает производительность и уменьшает зависимость от централизованных ресурсов.</li>
        <li><strong>Улучшение масштабируемости:</strong> Благодаря распределенной архитектуре Edge Computing можно легко увеличивать число узлов (edge-устройств), что повышает способность системы справляться с увеличением количества данных и подключений без необходимости увеличивать централизованные вычислительные мощности.</li>
        <li><strong>Безопасность и приватность:</strong> Периферийные вычисления позволяют хранить и обрабатывать чувствительные данные локально, что уменьшает риски, связанные с передачей данных в облако. Это особенно важно для конфиденциальных данных, таких как медицинские или финансовые данные.</li>
        <li><strong>Интеграция с облачными сервисами:</strong> Edge Computing часто используется в сочетании с облачными вычислениями, когда часть данных обрабатывается локально, а оставшиеся отправляются в облако для глубокой аналитики или длительного хранения. Это создает гибридную архитектуру, которая сочетает в себе преимущества обоих подходов.</li>
    </ul>

    <p>Таким образом, архитектура Edge Computing играет ключевую роль в современных распределенных системах, повышая производительность, снижая задержки и обеспечивая более надежное и масштабируемое решение для работы с большими объемами данных в реальном времени.</p>
    `,category:"tools",tool:"architecture"},{id:38,question:"Как проектировать архитектуру для систем с поддержкой IoT (Internet of Things)?",answer:`
    <p><strong>Проектирование архитектуры для систем с поддержкой IoT (Internet of Things)</strong> — это сложный процесс, который должен учитывать требования к подключению множества устройств, обработке больших объемов данных в реальном времени и обеспечению безопасности. IoT-системы включают сенсоры, устройства, облачные сервисы, системы хранения данных и интерфейсы для управления и аналитики.</p>

    <h4>Основные компоненты IoT-архитектуры:</h4>
    <ul>
        <li><strong>Устройства и сенсоры:</strong> Физические устройства, которые собирают данные из окружающей среды или взаимодействуют с ней. Эти устройства могут быть оборудованы сенсорами, актюаторами и модулями связи (например, Wi-Fi, Zigbee, Bluetooth).</li>
        <li><strong>Сетевое соединение:</strong> IoT-устройства должны быть подключены к сети для передачи данных. Сеть может быть локальной (Wi-Fi, Bluetooth) или глобальной (сотовые сети, LPWAN).</li>
        <li><strong>Шлюзы (Gateways):</strong> Шлюзы служат промежуточным узлом, который собирает данные от IoT-устройств, обрабатывает их и отправляет на серверы или в облачные хранилища. Шлюзы могут также выполнять локальную обработку данных (Edge Computing) для уменьшения задержек.</li>
        <li><strong>Облачные платформы и серверы:</strong> Большая часть данных, собранных IoT-устройствами, обрабатывается и хранится на облачных платформах. Облачные системы также предоставляют API для взаимодействия с устройствами и управления ими.</li>
        <li><strong>Аналитика и обработка данных:</strong> Сервисы обработки и анализа данных, которые обрабатывают большой объем данных в реальном времени, полученных от устройств. Это может быть машинное обучение, предсказательная аналитика и системы оповещения.</li>
        <li><strong>Интерфейсы управления:</strong> Это пользовательские приложения или веб-интерфейсы, через которые пользователи могут управлять устройствами и мониторить их состояние.</li>
    </ul>

    <h4>Ключевые аспекты при проектировании IoT-архитектуры:</h4>
    <ul>
        <li><strong>Масштабируемость:</strong> IoT-системы должны быть готовы к подключению тысяч или миллионов устройств, что требует высокой масштабируемости как на уровне устройства, так и на уровне сети и облака.</li>
        <li><strong>Обработка данных в реальном времени:</strong> IoT-устройства часто генерируют большие объемы данных, и критически важно обеспечивать быструю обработку данных, чтобы реагировать на события в реальном времени. Для этого используются такие подходы, как <strong>Edge Computing</strong> для локальной обработки.</li>
        <li><strong>Безопасность:</strong> IoT-устройства могут быть уязвимы к атакам, поэтому нужно обеспечить защиту данных, аутентификацию устройств и шифрование каналов связи. Также важно следить за обновлениями прошивки для всех устройств.</li>
        <li><strong>Энергоэффективность:</strong> Многие IoT-устройства работают от батарей, поэтому необходимо оптимизировать энергопотребление, используя экономичные протоколы связи и энергосберегающие технологии.</li>
        <li><strong>Совместимость и стандарты:</strong> Архитектура должна поддерживать различные стандарты связи и протоколы, такие как MQTT, CoAP, HTTP, чтобы обеспечить совместимость устройств от разных производителей.</li>
        <li><strong>Управление устройствами:</strong> Важно предусмотреть возможности для удаленного управления, мониторинга состояния устройств, обновления прошивок и диагностики.</li>
    </ul>

    <h4>Примеры использования IoT-архитектуры:</h4>
    <ul>
        <li><strong>Умные дома:</strong> Управление освещением, климатом, охранными системами и бытовыми приборами с помощью сенсоров и устройств, подключенных к центральному серверу или облачной платформе.</li>
        <li><strong>Промышленные IoT (IIoT):</strong> Использование сенсоров и устройств для мониторинга производственного оборудования, управления производственными процессами и предсказательного обслуживания на основе анализа данных.</li>
        <li><strong>Медицина и здравоохранение:</strong> Устройства для удаленного мониторинга состояния здоровья пациентов, сбора данных о медицинских показателях и управления медицинскими приборами.</li>
    </ul>

    <p>При проектировании IoT-систем важно учитывать требования к масштабируемости, безопасности, энергопотреблению и совместимости, чтобы обеспечить надежную и гибкую архитектуру, способную поддерживать большое количество подключенных устройств и эффективную обработку данных в реальном времени.</p>
    `,category:"tools",tool:"architecture"}],cu={data(){return{question:null}},created(){const e=parseInt(this.$route.params.id),t=this.$route.query.category||"unknown",o=this.$route.query.tool||null;let r=[];t==="frontend"?r=pi:t==="load"?r=br:t==="backend"?r=hi:t==="tools"&&o&&(r={architecture:Si,jmeter:fi,chrome:mi,git:vi,java:yi}[o]||[]),this.question=r.find(n=>n.id===e),console.log("Loaded question:",this.question)}},uu={key:0,class:"question-detail"},du={class:"question-text"},gu={class:"answer-box"},pu=["innerHTML"],hu={class:"like-comments-section"},fu={class:"like-section"},mu=["disabled"],vu={class:"comments-section"},yu={key:0},Su={key:1};function Tu(e,t,o,r,n,s){const i=to("router-link");return n.question?(Re(),Ue("div",uu,[U("h2",du,mt(n.question.question),1),U("div",gu,[U("div",{innerHTML:n.question.answer,class:"answer-text"},null,8,pu)]),te(i,{to:"/",class:"back-button"},{default:Ie(()=>t[4]||(t[4]=[we("← Back to Questions")])),_:1}),U("div",hu,[U("div",fu,[U("button",{onClick:t[0]||(t[0]=(...l)=>e.likeQuestion&&e.likeQuestion(...l)),disabled:e.liked,class:"like-button"}," 👍 "+mt(e.likes)+" Like ",9,mu)]),U("div",vu,[t[6]||(t[6]=U("h4",null,"Комментарии:",-1)),U("ul",null,[(Re(!0),Ue(Me,null,Is(e.comments,(l,a)=>(Re(),Ue("li",{key:a,class:"comment-item"},[U("strong",null,mt(l.name)+":",1),we(" "+mt(l.text),1)]))),128))]),e.commentAdded?(Re(),Ue("div",Su,t[5]||(t[5]=[U("p",null,"Вы уже оставили комментарий для этого ответа.",-1)]))):(Re(),Ue("div",yu,[cr(U("input",{"onUpdate:modelValue":t[1]||(t[1]=l=>e.username=l),placeholder:"Ваше имя"},null,512),[[wn,e.username]]),cr(U("textarea",{"onUpdate:modelValue":t[2]||(t[2]=l=>e.newComment=l),placeholder:"Добавьте комментарий"},null,512),[[wn,e.newComment]]),U("button",{onClick:t[3]||(t[3]=(...l)=>e.addComment&&e.addComment(...l)),class:"add-comment-button"},"Добавить комментарий")]))])])])):aa("",!0)}const bu=ao(cu,[["render",Tu],["__scopeId","data-v-2319b3b6"]]),Cu={name:"ToolsList"},Pu={class:"tools-list"},Mu={class:"tool-cards"},Ru={class:"tool-card"},wu={class:"tool-card"},Eu={class:"tool-card"},Ju={class:"tool-card"},Iu={class:"tool-card"};function Au(e,t,o,r,n,s){const i=to("router-link");return Re(),Ue("div",Pu,[t[5]||(t[5]=U("h2",null,"Выберите инструмент",-1)),U("div",Mu,[U("div",Ru,[te(i,{to:{path:"/tools/jmeter"}},{default:Ie(()=>t[0]||(t[0]=[we("JMeter")])),_:1})]),U("div",wu,[te(i,{to:{path:"/tools/chrome"}},{default:Ie(()=>t[1]||(t[1]=[we("Chrome DevTools")])),_:1})]),U("div",Eu,[te(i,{to:{path:"/tools/git"}},{default:Ie(()=>t[2]||(t[2]=[we("Git")])),_:1})]),U("div",Ju,[te(i,{to:{path:"/tools/java"}},{default:Ie(()=>t[3]||(t[3]=[we("Java")])),_:1})]),U("div",Iu,[te(i,{to:{path:"/tools/architecture"}},{default:Ie(()=>t[4]||(t[4]=[we("Architecture")])),_:1})])])])}const _u=ao(Cu,[["render",Au],["__scopeId","data-v-efd68766"]]),Du=[{path:"/",component:Ut,props:{questions:br}},{path:"/performance",component:Ut,props:{questions:br}},{path:"/frontend",component:Ut,props:{questions:pi}},{path:"/backend",component:Ut,props:{questions:hi}},{path:"/tools",component:_u},{path:"/tools/:tool",component:Ut,props:e=>({questions:Ou(e.params.tool)})},{path:"/questions/:id",component:bu}],xu=Zc({history:Ic(),routes:Du});function Ou(e){return{architecture:Si,jmeter:fi,chrome:mi,git:vi,java:yi}[e]||[]}Ga(Xa).use(xu).mount("#app");
