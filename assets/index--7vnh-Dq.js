(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();/**
* @vue/shared v3.5.6
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function ys(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const Y={},wt=[],ke=()=>{},di=()=>!1,Cn=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),bs=e=>e.startsWith("onUpdate:"),le=Object.assign,Es=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},pi=Object.prototype.hasOwnProperty,V=(e,t)=>pi.call(e,t),F=Array.isArray,xt=e=>sn(e)==="[object Map]",On=e=>sn(e)==="[object Set]",Bs=e=>sn(e)==="[object Date]",k=e=>typeof e=="function",se=e=>typeof e=="string",qe=e=>typeof e=="symbol",Z=e=>e!==null&&typeof e=="object",jr=e=>(Z(e)||k(e))&&k(e.then)&&k(e.catch),Vr=Object.prototype.toString,sn=e=>Vr.call(e),hi=e=>sn(e).slice(8,-1),Br=e=>sn(e)==="[object Object]",Ss=e=>se(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,$t=ys(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),An=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},gi=/-(\w)/g,Oe=An(e=>e.replace(gi,(t,n)=>n?n.toUpperCase():"")),mi=/\B([A-Z])/g,_t=An(e=>e.replace(mi,"-$1").toLowerCase()),In=An(e=>e.charAt(0).toUpperCase()+e.slice(1)),Kn=An(e=>e?`on${In(e)}`:""),ot=(e,t)=>!Object.is(e,t),hn=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},Kr=(e,t,n,s=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:s,value:n})},bn=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Ks;const Jr=()=>Ks||(Ks=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Rs(e){if(F(e)){const t={};for(let n=0;n<e.length;n++){const s=e[n],r=se(s)?bi(s):Rs(s);if(r)for(const o in r)t[o]=r[o]}return t}else if(se(e)||Z(e))return e}const _i=/;(?![^(]*\))/g,vi=/:([^]+)/,yi=/\/\*[^]*?\*\//g;function bi(e){const t={};return e.replace(yi,"").split(_i).forEach(n=>{if(n){const s=n.split(vi);s.length>1&&(t[s[0].trim()]=s[1].trim())}}),t}function Mn(e){let t="";if(se(e))t=e;else if(F(e))for(let n=0;n<e.length;n++){const s=Mn(e[n]);s&&(t+=s+" ")}else if(Z(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Ei="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Si=ys(Ei);function Wr(e){return!!e||e===""}function Ri(e,t){if(e.length!==t.length)return!1;let n=!0;for(let s=0;n&&s<e.length;s++)n=Nn(e[s],t[s]);return n}function Nn(e,t){if(e===t)return!0;let n=Bs(e),s=Bs(t);if(n||s)return n&&s?e.getTime()===t.getTime():!1;if(n=qe(e),s=qe(t),n||s)return e===t;if(n=F(e),s=F(t),n||s)return n&&s?Ri(e,t):!1;if(n=Z(e),s=Z(t),n||s){if(!n||!s)return!1;const r=Object.keys(e).length,o=Object.keys(t).length;if(r!==o)return!1;for(const i in e){const l=e.hasOwnProperty(i),c=t.hasOwnProperty(i);if(l&&!c||!l&&c||!Nn(e[i],t[i]))return!1}}return String(e)===String(t)}function Ti(e,t){return e.findIndex(n=>Nn(n,t))}const Gr=e=>!!(e&&e.__v_isRef===!0),Tt=e=>se(e)?e:e==null?"":F(e)||Z(e)&&(e.toString===Vr||!k(e.toString))?Gr(e)?Tt(e.value):JSON.stringify(e,Qr,2):String(e),Qr=(e,t)=>Gr(t)?Qr(e,t.value):xt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[s,r],o)=>(n[Jn(s,o)+" =>"]=r,n),{})}:On(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>Jn(n))}:qe(t)?Jn(t):Z(t)&&!F(t)&&!Br(t)?String(t):t,Jn=(e,t="")=>{var n;return qe(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.5.6
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let be;class wi{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=be,!t&&be&&(this.index=(be.scopes||(be.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].pause();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].resume();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].resume()}}run(t){if(this._active){const n=be;try{return be=this,t()}finally{be=n}}}on(){be=this}off(){be=this.parent}stop(t){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function xi(){return be}let z;const Wn=new WeakSet;class zr{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,be&&be.active&&be.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Wn.has(this)&&(Wn.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Xr(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Js(this),Zr(this);const t=z,n=Ce;z=this,Ce=!0;try{return this.fn()}finally{eo(this),z=t,Ce=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)xs(t);this.deps=this.depsTail=void 0,Js(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Wn.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){rs(this)&&this.run()}get dirty(){return rs(this)}}let Yr=0,jt;function Xr(e){e.flags|=8,e.next=jt,jt=e}function Ts(){Yr++}function ws(){if(--Yr>0)return;let e;for(;jt;){let t=jt;for(jt=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(s){e||(e=s)}t=n}}if(e)throw e}function Zr(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function eo(e){let t,n=e.depsTail,s=n;for(;s;){const r=s.prevDep;s.version===-1?(s===n&&(n=r),xs(s),Pi(s)):t=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=r}e.deps=t,e.depsTail=n}function rs(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(to(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function to(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===zt))return;e.globalVersion=zt;const t=e.dep;if(e.flags|=2,t.version>0&&!e.isSSR&&e.deps&&!rs(e)){e.flags&=-3;return}const n=z,s=Ce;z=e,Ce=!0;try{Zr(e);const r=e.fn(e._value);(t.version===0||ot(r,e._value))&&(e._value=r,t.version++)}catch(r){throw t.version++,r}finally{z=n,Ce=s,eo(e),e.flags&=-3}}function xs(e){const{dep:t,prevSub:n,nextSub:s}=e;if(n&&(n.nextSub=s,e.prevSub=void 0),s&&(s.prevSub=n,e.nextSub=void 0),t.subs===e&&(t.subs=n),!t.subs&&t.computed){t.computed.flags&=-5;for(let r=t.computed.deps;r;r=r.nextDep)xs(r)}}function Pi(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let Ce=!0;const no=[];function it(){no.push(Ce),Ce=!1}function lt(){const e=no.pop();Ce=e===void 0?!0:e}function Js(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=z;z=void 0;try{t()}finally{z=n}}}let zt=0;class Ci{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Ps{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0}track(t){if(!z||!Ce||z===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==z)n=this.activeLink=new Ci(z,this),z.deps?(n.prevDep=z.depsTail,z.depsTail.nextDep=n,z.depsTail=n):z.deps=z.depsTail=n,z.flags&4&&so(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=z.depsTail,n.nextDep=void 0,z.depsTail.nextDep=n,z.depsTail=n,z.deps===n&&(z.deps=s)}return n}trigger(t){this.version++,zt++,this.notify(t)}notify(t){Ts();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{ws()}}}function so(e){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let s=t.deps;s;s=s.nextDep)so(s)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}const os=new WeakMap,pt=Symbol(""),is=Symbol(""),Yt=Symbol("");function de(e,t,n){if(Ce&&z){let s=os.get(e);s||os.set(e,s=new Map);let r=s.get(n);r||s.set(n,r=new Ps),r.track()}}function We(e,t,n,s,r,o){const i=os.get(e);if(!i){zt++;return}const l=c=>{c&&c.trigger()};if(Ts(),t==="clear")i.forEach(l);else{const c=F(e),p=c&&Ss(n);if(c&&n==="length"){const f=Number(s);i.forEach((d,h)=>{(h==="length"||h===Yt||!qe(h)&&h>=f)&&l(d)})}else switch(n!==void 0&&l(i.get(n)),p&&l(i.get(Yt)),t){case"add":c?p&&l(i.get("length")):(l(i.get(pt)),xt(e)&&l(i.get(is)));break;case"delete":c||(l(i.get(pt)),xt(e)&&l(i.get(is)));break;case"set":xt(e)&&l(i.get(pt));break}}ws()}function Et(e){const t=B(e);return t===e?t:(de(t,"iterate",Yt),we(e)?t:t.map(ue))}function Ln(e){return de(e=B(e),"iterate",Yt),e}const Oi={__proto__:null,[Symbol.iterator](){return Gn(this,Symbol.iterator,ue)},concat(...e){return Et(this).concat(...e.map(t=>F(t)?Et(t):t))},entries(){return Gn(this,"entries",e=>(e[1]=ue(e[1]),e))},every(e,t){return Ve(this,"every",e,t,void 0,arguments)},filter(e,t){return Ve(this,"filter",e,t,n=>n.map(ue),arguments)},find(e,t){return Ve(this,"find",e,t,ue,arguments)},findIndex(e,t){return Ve(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return Ve(this,"findLast",e,t,ue,arguments)},findLastIndex(e,t){return Ve(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return Ve(this,"forEach",e,t,void 0,arguments)},includes(...e){return Qn(this,"includes",e)},indexOf(...e){return Qn(this,"indexOf",e)},join(e){return Et(this).join(e)},lastIndexOf(...e){return Qn(this,"lastIndexOf",e)},map(e,t){return Ve(this,"map",e,t,void 0,arguments)},pop(){return Ft(this,"pop")},push(...e){return Ft(this,"push",e)},reduce(e,...t){return Ws(this,"reduce",e,t)},reduceRight(e,...t){return Ws(this,"reduceRight",e,t)},shift(){return Ft(this,"shift")},some(e,t){return Ve(this,"some",e,t,void 0,arguments)},splice(...e){return Ft(this,"splice",e)},toReversed(){return Et(this).toReversed()},toSorted(e){return Et(this).toSorted(e)},toSpliced(...e){return Et(this).toSpliced(...e)},unshift(...e){return Ft(this,"unshift",e)},values(){return Gn(this,"values",ue)}};function Gn(e,t,n){const s=Ln(e),r=s[t]();return s!==e&&!we(e)&&(r._next=r.next,r.next=()=>{const o=r._next();return o.value&&(o.value=n(o.value)),o}),r}const Ai=Array.prototype;function Ve(e,t,n,s,r,o){const i=Ln(e),l=i!==e&&!we(e),c=i[t];if(c!==Ai[t]){const d=c.apply(e,o);return l?ue(d):d}let p=n;i!==e&&(l?p=function(d,h){return n.call(this,ue(d),h,e)}:n.length>2&&(p=function(d,h){return n.call(this,d,h,e)}));const f=c.call(i,p,s);return l&&r?r(f):f}function Ws(e,t,n,s){const r=Ln(e);let o=n;return r!==e&&(we(e)?n.length>3&&(o=function(i,l,c){return n.call(this,i,l,c,e)}):o=function(i,l,c){return n.call(this,i,ue(l),c,e)}),r[t](o,...s)}function Qn(e,t,n){const s=B(e);de(s,"iterate",Yt);const r=s[t](...n);return(r===-1||r===!1)&&Is(n[0])?(n[0]=B(n[0]),s[t](...n)):r}function Ft(e,t,n=[]){it(),Ts();const s=B(e)[t].apply(e,n);return ws(),lt(),s}const Ii=ys("__proto__,__v_isRef,__isVue"),ro=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(qe));function Mi(e){qe(e)||(e=String(e));const t=B(this);return de(t,"has",e),t.hasOwnProperty(e)}class oo{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,s){const r=this._isReadonly,o=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return o;if(n==="__v_raw")return s===(r?o?Ki:uo:o?co:lo).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(s)?t:void 0;const i=F(t);if(!r){let c;if(i&&(c=Oi[n]))return c;if(n==="hasOwnProperty")return Mi}const l=Reflect.get(t,n,fe(t)?t:s);return(qe(n)?ro.has(n):Ii(n))||(r||de(t,"get",n),o)?l:fe(l)?i&&Ss(n)?l:l.value:Z(l)?r?fo(l):Dn(l):l}}class io extends oo{constructor(t=!1){super(!1,t)}set(t,n,s,r){let o=t[n];if(!this._isShallow){const c=gt(o);if(!we(s)&&!gt(s)&&(o=B(o),s=B(s)),!F(t)&&fe(o)&&!fe(s))return c?!1:(o.value=s,!0)}const i=F(t)&&Ss(n)?Number(n)<t.length:V(t,n),l=Reflect.set(t,n,s,fe(t)?t:r);return t===B(r)&&(i?ot(s,o)&&We(t,"set",n,s):We(t,"add",n,s)),l}deleteProperty(t,n){const s=V(t,n);t[n];const r=Reflect.deleteProperty(t,n);return r&&s&&We(t,"delete",n,void 0),r}has(t,n){const s=Reflect.has(t,n);return(!qe(n)||!ro.has(n))&&de(t,"has",n),s}ownKeys(t){return de(t,"iterate",F(t)?"length":pt),Reflect.ownKeys(t)}}class Ni extends oo{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const Li=new io,Hi=new Ni,Di=new io(!0);const Cs=e=>e,Hn=e=>Reflect.getPrototypeOf(e);function cn(e,t,n=!1,s=!1){e=e.__v_raw;const r=B(e),o=B(t);n||(ot(t,o)&&de(r,"get",t),de(r,"get",o));const{has:i}=Hn(r),l=s?Cs:n?Ms:ue;if(i.call(r,t))return l(e.get(t));if(i.call(r,o))return l(e.get(o));e!==r&&e.get(t)}function un(e,t=!1){const n=this.__v_raw,s=B(n),r=B(e);return t||(ot(e,r)&&de(s,"has",e),de(s,"has",r)),e===r?n.has(e):n.has(e)||n.has(r)}function an(e,t=!1){return e=e.__v_raw,!t&&de(B(e),"iterate",pt),Reflect.get(e,"size",e)}function Gs(e,t=!1){!t&&!we(e)&&!gt(e)&&(e=B(e));const n=B(this);return Hn(n).has.call(n,e)||(n.add(e),We(n,"add",e,e)),this}function Qs(e,t,n=!1){!n&&!we(t)&&!gt(t)&&(t=B(t));const s=B(this),{has:r,get:o}=Hn(s);let i=r.call(s,e);i||(e=B(e),i=r.call(s,e));const l=o.call(s,e);return s.set(e,t),i?ot(t,l)&&We(s,"set",e,t):We(s,"add",e,t),this}function zs(e){const t=B(this),{has:n,get:s}=Hn(t);let r=n.call(t,e);r||(e=B(e),r=n.call(t,e)),s&&s.call(t,e);const o=t.delete(e);return r&&We(t,"delete",e,void 0),o}function Ys(){const e=B(this),t=e.size!==0,n=e.clear();return t&&We(e,"clear",void 0,void 0),n}function fn(e,t){return function(s,r){const o=this,i=o.__v_raw,l=B(i),c=t?Cs:e?Ms:ue;return!e&&de(l,"iterate",pt),i.forEach((p,f)=>s.call(r,c(p),c(f),o))}}function dn(e,t,n){return function(...s){const r=this.__v_raw,o=B(r),i=xt(o),l=e==="entries"||e===Symbol.iterator&&i,c=e==="keys"&&i,p=r[e](...s),f=n?Cs:t?Ms:ue;return!t&&de(o,"iterate",c?is:pt),{next(){const{value:d,done:h}=p.next();return h?{value:d,done:h}:{value:l?[f(d[0]),f(d[1])]:f(d),done:h}},[Symbol.iterator](){return this}}}}function et(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function Fi(){const e={get(o){return cn(this,o)},get size(){return an(this)},has:un,add:Gs,set:Qs,delete:zs,clear:Ys,forEach:fn(!1,!1)},t={get(o){return cn(this,o,!1,!0)},get size(){return an(this)},has:un,add(o){return Gs.call(this,o,!0)},set(o,i){return Qs.call(this,o,i,!0)},delete:zs,clear:Ys,forEach:fn(!1,!0)},n={get(o){return cn(this,o,!0)},get size(){return an(this,!0)},has(o){return un.call(this,o,!0)},add:et("add"),set:et("set"),delete:et("delete"),clear:et("clear"),forEach:fn(!0,!1)},s={get(o){return cn(this,o,!0,!0)},get size(){return an(this,!0)},has(o){return un.call(this,o,!0)},add:et("add"),set:et("set"),delete:et("delete"),clear:et("clear"),forEach:fn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(o=>{e[o]=dn(o,!1,!1),n[o]=dn(o,!0,!1),t[o]=dn(o,!1,!0),s[o]=dn(o,!0,!0)}),[e,n,t,s]}const[Ui,ki,qi,$i]=Fi();function Os(e,t){const n=t?e?$i:qi:e?ki:Ui;return(s,r,o)=>r==="__v_isReactive"?!e:r==="__v_isReadonly"?e:r==="__v_raw"?s:Reflect.get(V(n,r)&&r in s?n:s,r,o)}const ji={get:Os(!1,!1)},Vi={get:Os(!1,!0)},Bi={get:Os(!0,!1)};const lo=new WeakMap,co=new WeakMap,uo=new WeakMap,Ki=new WeakMap;function Ji(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Wi(e){return e.__v_skip||!Object.isExtensible(e)?0:Ji(hi(e))}function Dn(e){return gt(e)?e:As(e,!1,Li,ji,lo)}function ao(e){return As(e,!1,Di,Vi,co)}function fo(e){return As(e,!0,Hi,Bi,uo)}function As(e,t,n,s,r){if(!Z(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const o=r.get(e);if(o)return o;const i=Wi(e);if(i===0)return e;const l=new Proxy(e,i===2?s:n);return r.set(e,l),l}function Pt(e){return gt(e)?Pt(e.__v_raw):!!(e&&e.__v_isReactive)}function gt(e){return!!(e&&e.__v_isReadonly)}function we(e){return!!(e&&e.__v_isShallow)}function Is(e){return e?!!e.__v_raw:!1}function B(e){const t=e&&e.__v_raw;return t?B(t):e}function Gi(e){return!V(e,"__v_skip")&&Object.isExtensible(e)&&Kr(e,"__v_skip",!0),e}const ue=e=>Z(e)?Dn(e):e,Ms=e=>Z(e)?fo(e):e;function fe(e){return e?e.__v_isRef===!0:!1}function Qi(e){return po(e,!1)}function zi(e){return po(e,!0)}function po(e,t){return fe(e)?e:new Yi(e,t)}class Yi{constructor(t,n){this.dep=new Ps,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:B(t),this._value=n?t:ue(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,s=this.__v_isShallow||we(t)||gt(t);t=s?t:B(t),ot(t,n)&&(this._rawValue=t,this._value=s?t:ue(t),this.dep.trigger())}}function Ct(e){return fe(e)?e.value:e}const Xi={get:(e,t,n)=>t==="__v_raw"?e:Ct(Reflect.get(e,t,n)),set:(e,t,n,s)=>{const r=e[t];return fe(r)&&!fe(n)?(r.value=n,!0):Reflect.set(e,t,n,s)}};function ho(e){return Pt(e)?e:new Proxy(e,Xi)}class Zi{constructor(t,n,s){this.fn=t,this.setter=n,this._value=void 0,this.dep=new Ps(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=zt-1,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&z!==this)return Xr(this),!0}get value(){const t=this.dep.track();return to(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function el(e,t,n=!1){let s,r;return k(e)?s=e:(s=e.get,r=e.set),new Zi(s,r,n)}const pn={},En=new WeakMap;let ft;function tl(e,t=!1,n=ft){if(n){let s=En.get(n);s||En.set(n,s=[]),s.push(e)}}function nl(e,t,n=Y){const{immediate:s,deep:r,once:o,scheduler:i,augmentJob:l,call:c}=n,p=A=>r?A:we(A)||r===!1||r===0?Je(A,1):Je(A);let f,d,h,m,C=!1,O=!1;if(fe(e)?(d=()=>e.value,C=we(e)):Pt(e)?(d=()=>p(e),C=!0):F(e)?(O=!0,C=e.some(A=>Pt(A)||we(A)),d=()=>e.map(A=>{if(fe(A))return A.value;if(Pt(A))return p(A);if(k(A))return c?c(A,2):A()})):k(e)?t?d=c?()=>c(e,2):e:d=()=>{if(h){it();try{h()}finally{lt()}}const A=ft;ft=f;try{return c?c(e,3,[m]):e(m)}finally{ft=A}}:d=ke,t&&r){const A=d,Q=r===!0?1/0:r;d=()=>Je(A(),Q)}const q=xi(),L=()=>{f.stop(),q&&Es(q.effects,f)};if(o&&t){const A=t;t=(...Q)=>{A(...Q),L()}}let N=O?new Array(e.length).fill(pn):pn;const H=A=>{if(!(!(f.flags&1)||!f.dirty&&!A))if(t){const Q=f.run();if(r||C||(O?Q.some((ie,ee)=>ot(ie,N[ee])):ot(Q,N))){h&&h();const ie=ft;ft=f;try{const ee=[Q,N===pn?void 0:O&&N[0]===pn?[]:N,m];c?c(t,3,ee):t(...ee),N=Q}finally{ft=ie}}}else f.run()};return l&&l(H),f=new zr(d),f.scheduler=i?()=>i(H,!1):H,m=A=>tl(A,!1,f),h=f.onStop=()=>{const A=En.get(f);if(A){if(c)c(A,4);else for(const Q of A)Q();En.delete(f)}},t?s?H(!0):N=f.run():i?i(H.bind(null,!0),!0):f.run(),L.pause=f.pause.bind(f),L.resume=f.resume.bind(f),L.stop=L,L}function Je(e,t=1/0,n){if(t<=0||!Z(e)||e.__v_skip||(n=n||new Set,n.has(e)))return e;if(n.add(e),t--,fe(e))Je(e.value,t,n);else if(F(e))for(let s=0;s<e.length;s++)Je(e[s],t,n);else if(On(e)||xt(e))e.forEach(s=>{Je(s,t,n)});else if(Br(e)){for(const s in e)Je(e[s],t,n);for(const s of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,s)&&Je(e[s],t,n)}return e}/**
* @vue/runtime-core v3.5.6
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function rn(e,t,n,s){try{return s?e(...s):e()}catch(r){Fn(r,t,n)}}function $e(e,t,n,s){if(k(e)){const r=rn(e,t,n,s);return r&&jr(r)&&r.catch(o=>{Fn(o,t,n)}),r}if(F(e)){const r=[];for(let o=0;o<e.length;o++)r.push($e(e[o],t,n,s));return r}}function Fn(e,t,n,s=!0){const r=t?t.vnode:null,{errorHandler:o,throwUnhandledErrorInProduction:i}=t&&t.appContext.config||Y;if(t){let l=t.parent;const c=t.proxy,p=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const f=l.ec;if(f){for(let d=0;d<f.length;d++)if(f[d](e,c,p)===!1)return}l=l.parent}if(o){it(),rn(o,null,10,[e,c,p]),lt();return}}sl(e,n,r,s,i)}function sl(e,t,n,s=!0,r=!1){if(r)throw e;console.error(e)}let Xt=!1,ls=!1;const he=[];let Fe=0;const Ot=[];let nt=null,St=0;const go=Promise.resolve();let Ns=null;function Ls(e){const t=Ns||go;return e?t.then(this?e.bind(this):e):t}function rl(e){let t=Xt?Fe+1:0,n=he.length;for(;t<n;){const s=t+n>>>1,r=he[s],o=Zt(r);o<e||o===e&&r.flags&2?t=s+1:n=s}return t}function Hs(e){if(!(e.flags&1)){const t=Zt(e),n=he[he.length-1];!n||!(e.flags&2)&&t>=Zt(n)?he.push(e):he.splice(rl(t),0,e),e.flags|=1,mo()}}function mo(){!Xt&&!ls&&(ls=!0,Ns=go.then(vo))}function ol(e){F(e)?Ot.push(...e):nt&&e.id===-1?nt.splice(St+1,0,e):e.flags&1||(Ot.push(e),e.flags|=1),mo()}function Xs(e,t,n=Xt?Fe+1:0){for(;n<he.length;n++){const s=he[n];if(s&&s.flags&2){if(e&&s.id!==e.uid)continue;he.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&=-2}}}function _o(e){if(Ot.length){const t=[...new Set(Ot)].sort((n,s)=>Zt(n)-Zt(s));if(Ot.length=0,nt){nt.push(...t);return}for(nt=t,St=0;St<nt.length;St++){const n=nt[St];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}nt=null,St=0}}const Zt=e=>e.id==null?e.flags&2?-1:1/0:e.id;function vo(e){ls=!1,Xt=!0;try{for(Fe=0;Fe<he.length;Fe++){const t=he[Fe];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),rn(t,t.i,t.i?15:14),t.flags&=-2)}}finally{for(;Fe<he.length;Fe++){const t=he[Fe];t&&(t.flags&=-2)}Fe=0,he.length=0,_o(),Xt=!1,Ns=null,(he.length||Ot.length)&&vo()}}let Ee=null,yo=null;function Sn(e){const t=Ee;return Ee=e,yo=e&&e.type.__scopeId||null,t}function Vt(e,t=Ee,n){if(!t||e._n)return e;const s=(...r)=>{s._d&&lr(-1);const o=Sn(t);let i;try{i=e(...r)}finally{Sn(o),s._d&&lr(1)}return i};return s._n=!0,s._c=!0,s._d=!0,s}function bo(e,t){if(Ee===null)return e;const n=jn(Ee),s=e.dirs||(e.dirs=[]);for(let r=0;r<t.length;r++){let[o,i,l,c=Y]=t[r];o&&(k(o)&&(o={mounted:o,updated:o}),o.deep&&Je(i),s.push({dir:o,instance:n,value:i,oldValue:void 0,arg:l,modifiers:c}))}return e}function ut(e,t,n,s){const r=e.dirs,o=t&&t.dirs;for(let i=0;i<r.length;i++){const l=r[i];o&&(l.oldValue=o[i].value);let c=l.dir[s];c&&(it(),$e(c,n,8,[e.el,l,e,t]),lt())}}const il=Symbol("_vte"),ll=e=>e.__isTeleport;function Ds(e,t){e.shapeFlag&6&&e.component?(e.transition=t,Ds(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}/*! #__NO_SIDE_EFFECTS__ */function Eo(e,t){return k(e)?le({name:e.name},t,{setup:e}):e}function So(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function cs(e,t,n,s,r=!1){if(F(e)){e.forEach((C,O)=>cs(C,t&&(F(t)?t[O]:t),n,s,r));return}if(Bt(s)&&!r)return;const o=s.shapeFlag&4?jn(s.component):s.el,i=r?null:o,{i:l,r:c}=e,p=t&&t.r,f=l.refs===Y?l.refs={}:l.refs,d=l.setupState,h=B(d),m=d===Y?()=>!1:C=>V(h,C);if(p!=null&&p!==c&&(se(p)?(f[p]=null,m(p)&&(d[p]=null)):fe(p)&&(p.value=null)),k(c))rn(c,l,12,[i,f]);else{const C=se(c),O=fe(c);if(C||O){const q=()=>{if(e.f){const L=C?m(c)?d[c]:f[c]:c.value;r?F(L)&&Es(L,o):F(L)?L.includes(o)||L.push(o):C?(f[c]=[o],m(c)&&(d[c]=f[c])):(c.value=[o],e.k&&(f[e.k]=c.value))}else C?(f[c]=i,m(c)&&(d[c]=i)):O&&(c.value=i,e.k&&(f[e.k]=i))};i?(q.id=-1,ye(q,n)):q()}}}const Bt=e=>!!e.type.__asyncLoader,Ro=e=>e.type.__isKeepAlive;function cl(e,t){To(e,"a",t)}function ul(e,t){To(e,"da",t)}function To(e,t,n=ae){const s=e.__wdc||(e.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return e()});if(Un(t,s,n),n){let r=n.parent;for(;r&&r.parent;)Ro(r.parent.vnode)&&al(s,t,n,r),r=r.parent}}function al(e,t,n,s){const r=Un(t,e,s,!0);wo(()=>{Es(s[t],r)},n)}function Un(e,t,n=ae,s=!1){if(n){const r=n[e]||(n[e]=[]),o=t.__weh||(t.__weh=(...i)=>{it();const l=on(n),c=$e(t,n,e,i);return l(),lt(),c});return s?r.unshift(o):r.push(o),o}}const ze=e=>(t,n=ae)=>{(!$n||e==="sp")&&Un(e,(...s)=>t(...s),n)},fl=ze("bm"),dl=ze("m"),pl=ze("bu"),hl=ze("u"),gl=ze("bum"),wo=ze("um"),ml=ze("sp"),_l=ze("rtg"),vl=ze("rtc");function yl(e,t=ae){Un("ec",e,t)}const xo="components";function Rn(e,t){return El(xo,e,!0,t)||e}const bl=Symbol.for("v-ndc");function El(e,t,n=!0,s=!1){const r=Ee||ae;if(r){const o=r.type;if(e===xo){const l=uc(o,!1);if(l&&(l===t||l===Oe(t)||l===In(Oe(t))))return o}const i=Zs(r[e]||o[e],t)||Zs(r.appContext[e],t);return!i&&s?o:i}}function Zs(e,t){return e&&(e[t]||e[Oe(t)]||e[In(Oe(t))])}function Po(e,t,n,s){let r;const o=n,i=F(e);if(i||se(e)){const l=i&&Pt(e);let c=!1;l&&(c=!we(e),e=Ln(e)),r=new Array(e.length);for(let p=0,f=e.length;p<f;p++)r[p]=t(c?ue(e[p]):e[p],p,void 0,o)}else if(typeof e=="number"){r=new Array(e);for(let l=0;l<e;l++)r[l]=t(l+1,l,void 0,o)}else if(Z(e))if(e[Symbol.iterator])r=Array.from(e,(l,c)=>t(l,c,void 0,o));else{const l=Object.keys(e);r=new Array(l.length);for(let c=0,p=l.length;c<p;c++){const f=l[c];r[c]=t(e[f],f,c,o)}}else r=[];return r}const us=e=>e?Go(e)?jn(e):us(e.parent):null,Kt=le(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>us(e.parent),$root:e=>us(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Fs(e),$forceUpdate:e=>e.f||(e.f=()=>{Hs(e.update)}),$nextTick:e=>e.n||(e.n=Ls.bind(e.proxy)),$watch:e=>jl.bind(e)}),zn=(e,t)=>e!==Y&&!e.__isScriptSetup&&V(e,t),Sl={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:s,data:r,props:o,accessCache:i,type:l,appContext:c}=e;let p;if(t[0]!=="$"){const m=i[t];if(m!==void 0)switch(m){case 1:return s[t];case 2:return r[t];case 4:return n[t];case 3:return o[t]}else{if(zn(s,t))return i[t]=1,s[t];if(r!==Y&&V(r,t))return i[t]=2,r[t];if((p=e.propsOptions[0])&&V(p,t))return i[t]=3,o[t];if(n!==Y&&V(n,t))return i[t]=4,n[t];as&&(i[t]=0)}}const f=Kt[t];let d,h;if(f)return t==="$attrs"&&de(e.attrs,"get",""),f(e);if((d=l.__cssModules)&&(d=d[t]))return d;if(n!==Y&&V(n,t))return i[t]=4,n[t];if(h=c.config.globalProperties,V(h,t))return h[t]},set({_:e},t,n){const{data:s,setupState:r,ctx:o}=e;return zn(r,t)?(r[t]=n,!0):s!==Y&&V(s,t)?(s[t]=n,!0):V(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(o[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:s,appContext:r,propsOptions:o}},i){let l;return!!n[i]||e!==Y&&V(e,i)||zn(t,i)||(l=o[0])&&V(l,i)||V(s,i)||V(Kt,i)||V(r.config.globalProperties,i)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:V(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function er(e){return F(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let as=!0;function Rl(e){const t=Fs(e),n=e.proxy,s=e.ctx;as=!1,t.beforeCreate&&tr(t.beforeCreate,e,"bc");const{data:r,computed:o,methods:i,watch:l,provide:c,inject:p,created:f,beforeMount:d,mounted:h,beforeUpdate:m,updated:C,activated:O,deactivated:q,beforeDestroy:L,beforeUnmount:N,destroyed:H,unmounted:A,render:Q,renderTracked:ie,renderTriggered:ee,errorCaptured:Ie,serverPrefetch:Ye,expose:Me,inheritAttrs:Xe,components:ct,directives:Ne,filters:Ht}=t;if(p&&Tl(p,s,null),i)for(const G in i){const j=i[G];k(j)&&(s[G]=j.bind(n))}if(r){const G=r.call(n,n);Z(G)&&(e.data=Dn(G))}if(as=!0,o)for(const G in o){const j=o[G],je=k(j)?j.bind(n,n):k(j.get)?j.get.bind(n,n):ke,Ze=!k(j)&&k(j.set)?j.set.bind(n):ke,Le=Pe({get:je,set:Ze});Object.defineProperty(s,G,{enumerable:!0,configurable:!0,get:()=>Le.value,set:ge=>Le.value=ge})}if(l)for(const G in l)Co(l[G],s,n,G);if(c){const G=k(c)?c.call(n):c;Reflect.ownKeys(G).forEach(j=>{gn(j,G[j])})}f&&tr(f,e,"c");function oe(G,j){F(j)?j.forEach(je=>G(je.bind(n))):j&&G(j.bind(n))}if(oe(fl,d),oe(dl,h),oe(pl,m),oe(hl,C),oe(cl,O),oe(ul,q),oe(yl,Ie),oe(vl,ie),oe(_l,ee),oe(gl,N),oe(wo,A),oe(ml,Ye),F(Me))if(Me.length){const G=e.exposed||(e.exposed={});Me.forEach(j=>{Object.defineProperty(G,j,{get:()=>n[j],set:je=>n[j]=je})})}else e.exposed||(e.exposed={});Q&&e.render===ke&&(e.render=Q),Xe!=null&&(e.inheritAttrs=Xe),ct&&(e.components=ct),Ne&&(e.directives=Ne),Ye&&So(e)}function Tl(e,t,n=ke){F(e)&&(e=fs(e));for(const s in e){const r=e[s];let o;Z(r)?"default"in r?o=Ge(r.from||s,r.default,!0):o=Ge(r.from||s):o=Ge(r),fe(o)?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:i=>o.value=i}):t[s]=o}}function tr(e,t,n){$e(F(e)?e.map(s=>s.bind(t.proxy)):e.bind(t.proxy),t,n)}function Co(e,t,n,s){let r=s.includes(".")?jo(n,s):()=>n[s];if(se(e)){const o=t[e];k(o)&&mn(r,o)}else if(k(e))mn(r,e.bind(n));else if(Z(e))if(F(e))e.forEach(o=>Co(o,t,n,s));else{const o=k(e.handler)?e.handler.bind(n):t[e.handler];k(o)&&mn(r,o,e)}}function Fs(e){const t=e.type,{mixins:n,extends:s}=t,{mixins:r,optionsCache:o,config:{optionMergeStrategies:i}}=e.appContext,l=o.get(t);let c;return l?c=l:!r.length&&!n&&!s?c=t:(c={},r.length&&r.forEach(p=>Tn(c,p,i,!0)),Tn(c,t,i)),Z(t)&&o.set(t,c),c}function Tn(e,t,n,s=!1){const{mixins:r,extends:o}=t;o&&Tn(e,o,n,!0),r&&r.forEach(i=>Tn(e,i,n,!0));for(const i in t)if(!(s&&i==="expose")){const l=wl[i]||n&&n[i];e[i]=l?l(e[i],t[i]):t[i]}return e}const wl={data:nr,props:sr,emits:sr,methods:qt,computed:qt,beforeCreate:pe,created:pe,beforeMount:pe,mounted:pe,beforeUpdate:pe,updated:pe,beforeDestroy:pe,beforeUnmount:pe,destroyed:pe,unmounted:pe,activated:pe,deactivated:pe,errorCaptured:pe,serverPrefetch:pe,components:qt,directives:qt,watch:Pl,provide:nr,inject:xl};function nr(e,t){return t?e?function(){return le(k(e)?e.call(this,this):e,k(t)?t.call(this,this):t)}:t:e}function xl(e,t){return qt(fs(e),fs(t))}function fs(e){if(F(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function pe(e,t){return e?[...new Set([].concat(e,t))]:t}function qt(e,t){return e?le(Object.create(null),e,t):t}function sr(e,t){return e?F(e)&&F(t)?[...new Set([...e,...t])]:le(Object.create(null),er(e),er(t??{})):t}function Pl(e,t){if(!e)return t;if(!t)return e;const n=le(Object.create(null),e);for(const s in t)n[s]=pe(e[s],t[s]);return n}function Oo(){return{app:null,config:{isNativeTag:di,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Cl=0;function Ol(e,t){return function(s,r=null){k(s)||(s=le({},s)),r!=null&&!Z(r)&&(r=null);const o=Oo(),i=new WeakSet,l=[];let c=!1;const p=o.app={_uid:Cl++,_component:s,_props:r,_container:null,_context:o,_instance:null,version:fc,get config(){return o.config},set config(f){},use(f,...d){return i.has(f)||(f&&k(f.install)?(i.add(f),f.install(p,...d)):k(f)&&(i.add(f),f(p,...d))),p},mixin(f){return o.mixins.includes(f)||o.mixins.push(f),p},component(f,d){return d?(o.components[f]=d,p):o.components[f]},directive(f,d){return d?(o.directives[f]=d,p):o.directives[f]},mount(f,d,h){if(!c){const m=p._ceVNode||re(s,r);return m.appContext=o,h===!0?h="svg":h===!1&&(h=void 0),d&&t?t(m,f):e(m,f,h),c=!0,p._container=f,f.__vue_app__=p,jn(m.component)}},onUnmount(f){l.push(f)},unmount(){c&&($e(l,p._instance,16),e(null,p._container),delete p._container.__vue_app__)},provide(f,d){return o.provides[f]=d,p},runWithContext(f){const d=At;At=p;try{return f()}finally{At=d}}};return p}}let At=null;function gn(e,t){if(ae){let n=ae.provides;const s=ae.parent&&ae.parent.provides;s===n&&(n=ae.provides=Object.create(s)),n[e]=t}}function Ge(e,t,n=!1){const s=ae||Ee;if(s||At){const r=At?At._context.provides:s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(r&&e in r)return r[e];if(arguments.length>1)return n&&k(t)?t.call(s&&s.proxy):t}}const Ao={},Io=()=>Object.create(Ao),Mo=e=>Object.getPrototypeOf(e)===Ao;function Al(e,t,n,s=!1){const r={},o=Io();e.propsDefaults=Object.create(null),No(e,t,r,o);for(const i in e.propsOptions[0])i in r||(r[i]=void 0);n?e.props=s?r:ao(r):e.type.props?e.props=r:e.props=o,e.attrs=o}function Il(e,t,n,s){const{props:r,attrs:o,vnode:{patchFlag:i}}=e,l=B(r),[c]=e.propsOptions;let p=!1;if((s||i>0)&&!(i&16)){if(i&8){const f=e.vnode.dynamicProps;for(let d=0;d<f.length;d++){let h=f[d];if(kn(e.emitsOptions,h))continue;const m=t[h];if(c)if(V(o,h))m!==o[h]&&(o[h]=m,p=!0);else{const C=Oe(h);r[C]=ds(c,l,C,m,e,!1)}else m!==o[h]&&(o[h]=m,p=!0)}}}else{No(e,t,r,o)&&(p=!0);let f;for(const d in l)(!t||!V(t,d)&&((f=_t(d))===d||!V(t,f)))&&(c?n&&(n[d]!==void 0||n[f]!==void 0)&&(r[d]=ds(c,l,d,void 0,e,!0)):delete r[d]);if(o!==l)for(const d in o)(!t||!V(t,d))&&(delete o[d],p=!0)}p&&We(e.attrs,"set","")}function No(e,t,n,s){const[r,o]=e.propsOptions;let i=!1,l;if(t)for(let c in t){if($t(c))continue;const p=t[c];let f;r&&V(r,f=Oe(c))?!o||!o.includes(f)?n[f]=p:(l||(l={}))[f]=p:kn(e.emitsOptions,c)||(!(c in s)||p!==s[c])&&(s[c]=p,i=!0)}if(o){const c=B(n),p=l||Y;for(let f=0;f<o.length;f++){const d=o[f];n[d]=ds(r,c,d,p[d],e,!V(p,d))}}return i}function ds(e,t,n,s,r,o){const i=e[n];if(i!=null){const l=V(i,"default");if(l&&s===void 0){const c=i.default;if(i.type!==Function&&!i.skipFactory&&k(c)){const{propsDefaults:p}=r;if(n in p)s=p[n];else{const f=on(r);s=p[n]=c.call(null,t),f()}}else s=c;r.ce&&r.ce._setProp(n,s)}i[0]&&(o&&!l?s=!1:i[1]&&(s===""||s===_t(n))&&(s=!0))}return s}const Ml=new WeakMap;function Lo(e,t,n=!1){const s=n?Ml:t.propsCache,r=s.get(e);if(r)return r;const o=e.props,i={},l=[];let c=!1;if(!k(e)){const f=d=>{c=!0;const[h,m]=Lo(d,t,!0);le(i,h),m&&l.push(...m)};!n&&t.mixins.length&&t.mixins.forEach(f),e.extends&&f(e.extends),e.mixins&&e.mixins.forEach(f)}if(!o&&!c)return Z(e)&&s.set(e,wt),wt;if(F(o))for(let f=0;f<o.length;f++){const d=Oe(o[f]);rr(d)&&(i[d]=Y)}else if(o)for(const f in o){const d=Oe(f);if(rr(d)){const h=o[f],m=i[d]=F(h)||k(h)?{type:h}:le({},h),C=m.type;let O=!1,q=!0;if(F(C))for(let L=0;L<C.length;++L){const N=C[L],H=k(N)&&N.name;if(H==="Boolean"){O=!0;break}else H==="String"&&(q=!1)}else O=k(C)&&C.name==="Boolean";m[0]=O,m[1]=q,(O||V(m,"default"))&&l.push(d)}}const p=[i,l];return Z(e)&&s.set(e,p),p}function rr(e){return e[0]!=="$"&&!$t(e)}const Ho=e=>e[0]==="_"||e==="$stable",Us=e=>F(e)?e.map(Ue):[Ue(e)],Nl=(e,t,n)=>{if(t._n)return t;const s=Vt((...r)=>Us(t(...r)),n);return s._c=!1,s},Do=(e,t,n)=>{const s=e._ctx;for(const r in e){if(Ho(r))continue;const o=e[r];if(k(o))t[r]=Nl(r,o,s);else if(o!=null){const i=Us(o);t[r]=()=>i}}},Fo=(e,t)=>{const n=Us(t);e.slots.default=()=>n},Uo=(e,t,n)=>{for(const s in t)(n||s!=="_")&&(e[s]=t[s])},Ll=(e,t,n)=>{const s=e.slots=Io();if(e.vnode.shapeFlag&32){const r=t._;r?(Uo(s,t,n),n&&Kr(s,"_",r,!0)):Do(t,s)}else t&&Fo(e,t)},Hl=(e,t,n)=>{const{vnode:s,slots:r}=e;let o=!0,i=Y;if(s.shapeFlag&32){const l=t._;l?n&&l===1?o=!1:Uo(r,t,n):(o=!t.$stable,Do(t,r)),i=t}else t&&(Fo(e,t),i={default:1});if(o)for(const l in r)!Ho(l)&&i[l]==null&&delete r[l]},ye=Ql;function Dl(e){return Fl(e)}function Fl(e,t){const n=Jr();n.__VUE__=!0;const{insert:s,remove:r,patchProp:o,createElement:i,createText:l,createComment:c,setText:p,setElementText:f,parentNode:d,nextSibling:h,setScopeId:m=ke,insertStaticContent:C}=e,O=(u,a,g,y=null,_=null,b=null,T=void 0,R=null,S=!!a.dynamicChildren)=>{if(u===a)return;u&&!Ut(u,a)&&(y=v(u),ge(u,_,b,!0),u=null),a.patchFlag===-2&&(S=!1,a.dynamicChildren=null);const{type:E,ref:D,shapeFlag:x}=a;switch(E){case qn:q(u,a,g,y);break;case mt:L(u,a,g,y);break;case _n:u==null&&N(a,g,y,T);break;case Te:ct(u,a,g,y,_,b,T,R,S);break;default:x&1?Q(u,a,g,y,_,b,T,R,S):x&6?Ne(u,a,g,y,_,b,T,R,S):(x&64||x&128)&&E.process(u,a,g,y,_,b,T,R,S,I)}D!=null&&_&&cs(D,u&&u.ref,b,a||u,!a)},q=(u,a,g,y)=>{if(u==null)s(a.el=l(a.children),g,y);else{const _=a.el=u.el;a.children!==u.children&&p(_,a.children)}},L=(u,a,g,y)=>{u==null?s(a.el=c(a.children||""),g,y):a.el=u.el},N=(u,a,g,y)=>{[u.el,u.anchor]=C(u.children,a,g,y,u.el,u.anchor)},H=({el:u,anchor:a},g,y)=>{let _;for(;u&&u!==a;)_=h(u),s(u,g,y),u=_;s(a,g,y)},A=({el:u,anchor:a})=>{let g;for(;u&&u!==a;)g=h(u),r(u),u=g;r(a)},Q=(u,a,g,y,_,b,T,R,S)=>{a.type==="svg"?T="svg":a.type==="math"&&(T="mathml"),u==null?ie(a,g,y,_,b,T,R,S):Ye(u,a,_,b,T,R,S)},ie=(u,a,g,y,_,b,T,R)=>{let S,E;const{props:D,shapeFlag:x,transition:M,dirs:U}=u;if(S=u.el=i(u.type,b,D&&D.is,D),x&8?f(S,u.children):x&16&&Ie(u.children,S,null,y,_,Yn(u,b),T,R),U&&ut(u,null,y,"created"),ee(S,u,u.scopeId,T,y),D){for(const X in D)X!=="value"&&!$t(X)&&o(S,X,null,D[X],b,y);"value"in D&&o(S,"value",null,D.value,b),(E=D.onVnodeBeforeMount)&&De(E,y,u)}U&&ut(u,null,y,"beforeMount");const $=Ul(_,M);$&&M.beforeEnter(S),s(S,a,g),((E=D&&D.onVnodeMounted)||$||U)&&ye(()=>{E&&De(E,y,u),$&&M.enter(S),U&&ut(u,null,y,"mounted")},_)},ee=(u,a,g,y,_)=>{if(g&&m(u,g),y)for(let b=0;b<y.length;b++)m(u,y[b]);if(_){let b=_.subTree;if(a===b||Bo(b.type)&&(b.ssContent===a||b.ssFallback===a)){const T=_.vnode;ee(u,T,T.scopeId,T.slotScopeIds,_.parent)}}},Ie=(u,a,g,y,_,b,T,R,S=0)=>{for(let E=S;E<u.length;E++){const D=u[E]=R?st(u[E]):Ue(u[E]);O(null,D,a,g,y,_,b,T,R)}},Ye=(u,a,g,y,_,b,T)=>{const R=a.el=u.el;let{patchFlag:S,dynamicChildren:E,dirs:D}=a;S|=u.patchFlag&16;const x=u.props||Y,M=a.props||Y;let U;if(g&&at(g,!1),(U=M.onVnodeBeforeUpdate)&&De(U,g,a,u),D&&ut(a,u,g,"beforeUpdate"),g&&at(g,!0),(x.innerHTML&&M.innerHTML==null||x.textContent&&M.textContent==null)&&f(R,""),E?Me(u.dynamicChildren,E,R,g,y,Yn(a,_),b):T||j(u,a,R,null,g,y,Yn(a,_),b,!1),S>0){if(S&16)Xe(R,x,M,g,_);else if(S&2&&x.class!==M.class&&o(R,"class",null,M.class,_),S&4&&o(R,"style",x.style,M.style,_),S&8){const $=a.dynamicProps;for(let X=0;X<$.length;X++){const J=$[X],me=x[J],ce=M[J];(ce!==me||J==="value")&&o(R,J,me,ce,_,g)}}S&1&&u.children!==a.children&&f(R,a.children)}else!T&&E==null&&Xe(R,x,M,g,_);((U=M.onVnodeUpdated)||D)&&ye(()=>{U&&De(U,g,a,u),D&&ut(a,u,g,"updated")},y)},Me=(u,a,g,y,_,b,T)=>{for(let R=0;R<a.length;R++){const S=u[R],E=a[R],D=S.el&&(S.type===Te||!Ut(S,E)||S.shapeFlag&70)?d(S.el):g;O(S,E,D,null,y,_,b,T,!0)}},Xe=(u,a,g,y,_)=>{if(a!==g){if(a!==Y)for(const b in a)!$t(b)&&!(b in g)&&o(u,b,a[b],null,_,y);for(const b in g){if($t(b))continue;const T=g[b],R=a[b];T!==R&&b!=="value"&&o(u,b,R,T,_,y)}"value"in g&&o(u,"value",a.value,g.value,_)}},ct=(u,a,g,y,_,b,T,R,S)=>{const E=a.el=u?u.el:l(""),D=a.anchor=u?u.anchor:l("");let{patchFlag:x,dynamicChildren:M,slotScopeIds:U}=a;U&&(R=R?R.concat(U):U),u==null?(s(E,g,y),s(D,g,y),Ie(a.children||[],g,D,_,b,T,R,S)):x>0&&x&64&&M&&u.dynamicChildren?(Me(u.dynamicChildren,M,g,_,b,T,R),(a.key!=null||_&&a===_.subTree)&&ko(u,a,!0)):j(u,a,g,D,_,b,T,R,S)},Ne=(u,a,g,y,_,b,T,R,S)=>{a.slotScopeIds=R,u==null?a.shapeFlag&512?_.ctx.activate(a,g,y,T,S):Ht(a,g,y,_,b,T,S):vt(u,a,S)},Ht=(u,a,g,y,_,b,T)=>{const R=u.component=rc(u,y,_);if(Ro(u)&&(R.ctx.renderer=I),oc(R,!1,T),R.asyncDep){if(_&&_.registerDep(R,oe,T),!u.el){const S=R.subTree=re(mt);L(null,S,a,g)}}else oe(R,u,a,g,_,b,T)},vt=(u,a,g)=>{const y=a.component=u.component;if(Wl(u,a,g))if(y.asyncDep&&!y.asyncResolved){G(y,a,g);return}else y.next=a,y.update();else a.el=u.el,y.vnode=a},oe=(u,a,g,y,_,b,T)=>{const R=()=>{if(u.isMounted){let{next:x,bu:M,u:U,parent:$,vnode:X}=u;{const _e=qo(u);if(_e){x&&(x.el=X.el,G(u,x,T)),_e.asyncDep.then(()=>{u.isUnmounted||R()});return}}let J=x,me;at(u,!1),x?(x.el=X.el,G(u,x,T)):x=X,M&&hn(M),(me=x.props&&x.props.onVnodeBeforeUpdate)&&De(me,$,x,X),at(u,!0);const ce=Xn(u),xe=u.subTree;u.subTree=ce,O(xe,ce,d(xe.el),v(xe),u,_,b),x.el=ce.el,J===null&&Gl(u,ce.el),U&&ye(U,_),(me=x.props&&x.props.onVnodeUpdated)&&ye(()=>De(me,$,x,X),_)}else{let x;const{el:M,props:U}=a,{bm:$,m:X,parent:J,root:me,type:ce}=u,xe=Bt(a);if(at(u,!1),$&&hn($),!xe&&(x=U&&U.onVnodeBeforeMount)&&De(x,J,a),at(u,!0),M&&te){const _e=()=>{u.subTree=Xn(u),te(M,u.subTree,u,_,null)};xe&&ce.__asyncHydrate?ce.__asyncHydrate(M,u,_e):_e()}else{me.ce&&me.ce._injectChildStyle(ce);const _e=u.subTree=Xn(u);O(null,_e,g,y,u,_,b),a.el=_e.el}if(X&&ye(X,_),!xe&&(x=U&&U.onVnodeMounted)){const _e=a;ye(()=>De(x,J,_e),_)}(a.shapeFlag&256||J&&Bt(J.vnode)&&J.vnode.shapeFlag&256)&&u.a&&ye(u.a,_),u.isMounted=!0,a=g=y=null}};u.scope.on();const S=u.effect=new zr(R);u.scope.off();const E=u.update=S.run.bind(S),D=u.job=S.runIfDirty.bind(S);D.i=u,D.id=u.uid,S.scheduler=()=>Hs(D),at(u,!0),E()},G=(u,a,g)=>{a.component=u;const y=u.vnode.props;u.vnode=a,u.next=null,Il(u,a.props,y,g),Hl(u,a.children,g),it(),Xs(u),lt()},j=(u,a,g,y,_,b,T,R,S=!1)=>{const E=u&&u.children,D=u?u.shapeFlag:0,x=a.children,{patchFlag:M,shapeFlag:U}=a;if(M>0){if(M&128){Ze(E,x,g,y,_,b,T,R,S);return}else if(M&256){je(E,x,g,y,_,b,T,R,S);return}}U&8?(D&16&&Re(E,_,b),x!==E&&f(g,x)):D&16?U&16?Ze(E,x,g,y,_,b,T,R,S):Re(E,_,b,!0):(D&8&&f(g,""),U&16&&Ie(x,g,y,_,b,T,R,S))},je=(u,a,g,y,_,b,T,R,S)=>{u=u||wt,a=a||wt;const E=u.length,D=a.length,x=Math.min(E,D);let M;for(M=0;M<x;M++){const U=a[M]=S?st(a[M]):Ue(a[M]);O(u[M],U,g,null,_,b,T,R,S)}E>D?Re(u,_,b,!0,!1,x):Ie(a,g,y,_,b,T,R,S,x)},Ze=(u,a,g,y,_,b,T,R,S)=>{let E=0;const D=a.length;let x=u.length-1,M=D-1;for(;E<=x&&E<=M;){const U=u[E],$=a[E]=S?st(a[E]):Ue(a[E]);if(Ut(U,$))O(U,$,g,null,_,b,T,R,S);else break;E++}for(;E<=x&&E<=M;){const U=u[x],$=a[M]=S?st(a[M]):Ue(a[M]);if(Ut(U,$))O(U,$,g,null,_,b,T,R,S);else break;x--,M--}if(E>x){if(E<=M){const U=M+1,$=U<D?a[U].el:y;for(;E<=M;)O(null,a[E]=S?st(a[E]):Ue(a[E]),g,$,_,b,T,R,S),E++}}else if(E>M)for(;E<=x;)ge(u[E],_,b,!0),E++;else{const U=E,$=E,X=new Map;for(E=$;E<=M;E++){const ve=a[E]=S?st(a[E]):Ue(a[E]);ve.key!=null&&X.set(ve.key,E)}let J,me=0;const ce=M-$+1;let xe=!1,_e=0;const Dt=new Array(ce);for(E=0;E<ce;E++)Dt[E]=0;for(E=U;E<=x;E++){const ve=u[E];if(me>=ce){ge(ve,_,b,!0);continue}let He;if(ve.key!=null)He=X.get(ve.key);else for(J=$;J<=M;J++)if(Dt[J-$]===0&&Ut(ve,a[J])){He=J;break}He===void 0?ge(ve,_,b,!0):(Dt[He-$]=E+1,He>=_e?_e=He:xe=!0,O(ve,a[He],g,null,_,b,T,R,S),me++)}const js=xe?kl(Dt):wt;for(J=js.length-1,E=ce-1;E>=0;E--){const ve=$+E,He=a[ve],Vs=ve+1<D?a[ve+1].el:y;Dt[E]===0?O(null,He,g,Vs,_,b,T,R,S):xe&&(J<0||E!==js[J]?Le(He,g,Vs,2):J--)}}},Le=(u,a,g,y,_=null)=>{const{el:b,type:T,transition:R,children:S,shapeFlag:E}=u;if(E&6){Le(u.component.subTree,a,g,y);return}if(E&128){u.suspense.move(a,g,y);return}if(E&64){T.move(u,a,g,I);return}if(T===Te){s(b,a,g);for(let x=0;x<S.length;x++)Le(S[x],a,g,y);s(u.anchor,a,g);return}if(T===_n){H(u,a,g);return}if(y!==2&&E&1&&R)if(y===0)R.beforeEnter(b),s(b,a,g),ye(()=>R.enter(b),_);else{const{leave:x,delayLeave:M,afterLeave:U}=R,$=()=>s(b,a,g),X=()=>{x(b,()=>{$(),U&&U()})};M?M(b,$,X):X()}else s(b,a,g)},ge=(u,a,g,y=!1,_=!1)=>{const{type:b,props:T,ref:R,children:S,dynamicChildren:E,shapeFlag:D,patchFlag:x,dirs:M,cacheIndex:U}=u;if(x===-2&&(_=!1),R!=null&&cs(R,null,g,u,!0),U!=null&&(a.renderCache[U]=void 0),D&256){a.ctx.deactivate(u);return}const $=D&1&&M,X=!Bt(u);let J;if(X&&(J=T&&T.onVnodeBeforeUnmount)&&De(J,a,u),D&6)ln(u.component,g,y);else{if(D&128){u.suspense.unmount(g,y);return}$&&ut(u,null,a,"beforeUnmount"),D&64?u.type.remove(u,a,g,I,y):E&&!E.hasOnce&&(b!==Te||x>0&&x&64)?Re(E,a,g,!1,!0):(b===Te&&x&384||!_&&D&16)&&Re(S,a,g),y&&yt(u)}(X&&(J=T&&T.onVnodeUnmounted)||$)&&ye(()=>{J&&De(J,a,u),$&&ut(u,null,a,"unmounted")},g)},yt=u=>{const{type:a,el:g,anchor:y,transition:_}=u;if(a===Te){bt(g,y);return}if(a===_n){A(u);return}const b=()=>{r(g),_&&!_.persisted&&_.afterLeave&&_.afterLeave()};if(u.shapeFlag&1&&_&&!_.persisted){const{leave:T,delayLeave:R}=_,S=()=>T(g,b);R?R(u.el,b,S):S()}else b()},bt=(u,a)=>{let g;for(;u!==a;)g=h(u),r(u),u=g;r(a)},ln=(u,a,g)=>{const{bum:y,scope:_,job:b,subTree:T,um:R,m:S,a:E}=u;or(S),or(E),y&&hn(y),_.stop(),b&&(b.flags|=8,ge(T,u,a,g)),R&&ye(R,a),ye(()=>{u.isUnmounted=!0},a),a&&a.pendingBranch&&!a.isUnmounted&&u.asyncDep&&!u.asyncResolved&&u.suspenseId===a.pendingId&&(a.deps--,a.deps===0&&a.resolve())},Re=(u,a,g,y=!1,_=!1,b=0)=>{for(let T=b;T<u.length;T++)ge(u[T],a,g,y,_)},v=u=>{if(u.shapeFlag&6)return v(u.component.subTree);if(u.shapeFlag&128)return u.suspense.next();const a=h(u.anchor||u.el),g=a&&a[il];return g?h(g):a};let P=!1;const w=(u,a,g)=>{u==null?a._vnode&&ge(a._vnode,null,null,!0):O(a._vnode||null,u,a,null,null,null,g),a._vnode=u,P||(P=!0,Xs(),_o(),P=!1)},I={p:O,um:ge,m:Le,r:yt,mt:Ht,mc:Ie,pc:j,pbc:Me,n:v,o:e};let K,te;return{render:w,hydrate:K,createApp:Ol(w,K)}}function Yn({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function at({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function Ul(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function ko(e,t,n=!1){const s=e.children,r=t.children;if(F(s)&&F(r))for(let o=0;o<s.length;o++){const i=s[o];let l=r[o];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=r[o]=st(r[o]),l.el=i.el),!n&&l.patchFlag!==-2&&ko(i,l)),l.type===qn&&(l.el=i.el)}}function kl(e){const t=e.slice(),n=[0];let s,r,o,i,l;const c=e.length;for(s=0;s<c;s++){const p=e[s];if(p!==0){if(r=n[n.length-1],e[r]<p){t[s]=r,n.push(s);continue}for(o=0,i=n.length-1;o<i;)l=o+i>>1,e[n[l]]<p?o=l+1:i=l;p<e[n[o]]&&(o>0&&(t[s]=n[o-1]),n[o]=s)}}for(o=n.length,i=n[o-1];o-- >0;)n[o]=i,i=t[i];return n}function qo(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:qo(t)}function or(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}const ql=Symbol.for("v-scx"),$l=()=>Ge(ql);function mn(e,t,n){return $o(e,t,n)}function $o(e,t,n=Y){const{immediate:s,deep:r,flush:o,once:i}=n,l=le({},n);let c;if($n)if(o==="sync"){const h=$l();c=h.__watcherHandles||(h.__watcherHandles=[])}else if(!t||s)l.once=!0;else{const h=()=>{};return h.stop=ke,h.resume=ke,h.pause=ke,h}const p=ae;l.call=(h,m,C)=>$e(h,p,m,C);let f=!1;o==="post"?l.scheduler=h=>{ye(h,p&&p.suspense)}:o!=="sync"&&(f=!0,l.scheduler=(h,m)=>{m?h():Hs(h)}),l.augmentJob=h=>{t&&(h.flags|=4),f&&(h.flags|=2,p&&(h.id=p.uid,h.i=p))};const d=nl(e,t,l);return c&&c.push(d),d}function jl(e,t,n){const s=this.proxy,r=se(e)?e.includes(".")?jo(s,e):()=>s[e]:e.bind(s,s);let o;k(t)?o=t:(o=t.handler,n=t);const i=on(this),l=$o(r,o.bind(s),n);return i(),l}function jo(e,t){const n=t.split(".");return()=>{let s=e;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}const Vl=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${Oe(t)}Modifiers`]||e[`${_t(t)}Modifiers`];function Bl(e,t,...n){if(e.isUnmounted)return;const s=e.vnode.props||Y;let r=n;const o=t.startsWith("update:"),i=o&&Vl(s,t.slice(7));i&&(i.trim&&(r=n.map(f=>se(f)?f.trim():f)),i.number&&(r=n.map(bn)));let l,c=s[l=Kn(t)]||s[l=Kn(Oe(t))];!c&&o&&(c=s[l=Kn(_t(t))]),c&&$e(c,e,6,r);const p=s[l+"Once"];if(p){if(!e.emitted)e.emitted={};else if(e.emitted[l])return;e.emitted[l]=!0,$e(p,e,6,r)}}function Vo(e,t,n=!1){const s=t.emitsCache,r=s.get(e);if(r!==void 0)return r;const o=e.emits;let i={},l=!1;if(!k(e)){const c=p=>{const f=Vo(p,t,!0);f&&(l=!0,le(i,f))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!o&&!l?(Z(e)&&s.set(e,null),null):(F(o)?o.forEach(c=>i[c]=null):le(i,o),Z(e)&&s.set(e,i),i)}function kn(e,t){return!e||!Cn(t)?!1:(t=t.slice(2).replace(/Once$/,""),V(e,t[0].toLowerCase()+t.slice(1))||V(e,_t(t))||V(e,t))}function Xn(e){const{type:t,vnode:n,proxy:s,withProxy:r,propsOptions:[o],slots:i,attrs:l,emit:c,render:p,renderCache:f,props:d,data:h,setupState:m,ctx:C,inheritAttrs:O}=e,q=Sn(e);let L,N;try{if(n.shapeFlag&4){const A=r||s,Q=A;L=Ue(p.call(Q,A,f,d,m,h,C)),N=l}else{const A=t;L=Ue(A.length>1?A(d,{attrs:l,slots:i,emit:c}):A(d,null)),N=t.props?l:Kl(l)}}catch(A){Jt.length=0,Fn(A,e,1),L=re(mt)}let H=L;if(N&&O!==!1){const A=Object.keys(N),{shapeFlag:Q}=H;A.length&&Q&7&&(o&&A.some(bs)&&(N=Jl(N,o)),H=Mt(H,N,!1,!0))}return n.dirs&&(H=Mt(H,null,!1,!0),H.dirs=H.dirs?H.dirs.concat(n.dirs):n.dirs),n.transition&&Ds(H,n.transition),L=H,Sn(q),L}const Kl=e=>{let t;for(const n in e)(n==="class"||n==="style"||Cn(n))&&((t||(t={}))[n]=e[n]);return t},Jl=(e,t)=>{const n={};for(const s in e)(!bs(s)||!(s.slice(9)in t))&&(n[s]=e[s]);return n};function Wl(e,t,n){const{props:s,children:r,component:o}=e,{props:i,children:l,patchFlag:c}=t,p=o.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?ir(s,i,p):!!i;if(c&8){const f=t.dynamicProps;for(let d=0;d<f.length;d++){const h=f[d];if(i[h]!==s[h]&&!kn(p,h))return!0}}}else return(r||l)&&(!l||!l.$stable)?!0:s===i?!1:s?i?ir(s,i,p):!0:!!i;return!1}function ir(e,t,n){const s=Object.keys(t);if(s.length!==Object.keys(e).length)return!0;for(let r=0;r<s.length;r++){const o=s[r];if(t[o]!==e[o]&&!kn(n,o))return!0}return!1}function Gl({vnode:e,parent:t},n){for(;t;){const s=t.subTree;if(s.suspense&&s.suspense.activeBranch===e&&(s.el=e.el),s===e)(e=t.vnode).el=n,t=t.parent;else break}}const Bo=e=>e.__isSuspense;function Ql(e,t){t&&t.pendingBranch?F(e)?t.effects.push(...e):t.effects.push(e):ol(e)}const Te=Symbol.for("v-fgt"),qn=Symbol.for("v-txt"),mt=Symbol.for("v-cmt"),_n=Symbol.for("v-stc"),Jt=[];let Se=null;function Qe(e=!1){Jt.push(Se=e?null:[])}function zl(){Jt.pop(),Se=Jt[Jt.length-1]||null}let en=1;function lr(e){en+=e,e<0&&Se&&(Se.hasOnce=!0)}function Ko(e){return e.dynamicChildren=en>0?Se||wt:null,zl(),en>0&&Se&&Se.push(e),e}function ht(e,t,n,s,r,o){return Ko(ne(e,t,n,s,r,o,!0))}function Jo(e,t,n,s,r){return Ko(re(e,t,n,s,r,!0))}function ps(e){return e?e.__v_isVNode===!0:!1}function Ut(e,t){return e.type===t.type&&e.key===t.key}const Wo=({key:e})=>e??null,vn=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?se(e)||fe(e)||k(e)?{i:Ee,r:e,k:t,f:!!n}:e:null);function ne(e,t=null,n=null,s=0,r=null,o=e===Te?0:1,i=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Wo(t),ref:t&&vn(t),scopeId:yo,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Ee};return l?(ks(c,n),o&128&&e.normalize(c)):n&&(c.shapeFlag|=se(n)?8:16),en>0&&!i&&Se&&(c.patchFlag>0||o&6)&&c.patchFlag!==32&&Se.push(c),c}const re=Yl;function Yl(e,t=null,n=null,s=0,r=null,o=!1){if((!e||e===bl)&&(e=mt),ps(e)){const l=Mt(e,t,!0);return n&&ks(l,n),en>0&&!o&&Se&&(l.shapeFlag&6?Se[Se.indexOf(e)]=l:Se.push(l)),l.patchFlag=-2,l}if(ac(e)&&(e=e.__vccOpts),t){t=Xl(t);let{class:l,style:c}=t;l&&!se(l)&&(t.class=Mn(l)),Z(c)&&(Is(c)&&!F(c)&&(c=le({},c)),t.style=Rs(c))}const i=se(e)?1:Bo(e)?128:ll(e)?64:Z(e)?4:k(e)?2:0;return ne(e,t,n,s,r,i,o,!0)}function Xl(e){return e?Is(e)||Mo(e)?le({},e):e:null}function Mt(e,t,n=!1,s=!1){const{props:r,ref:o,patchFlag:i,children:l,transition:c}=e,p=t?tc(r||{},t):r,f={__v_isVNode:!0,__v_skip:!0,type:e.type,props:p,key:p&&Wo(p),ref:t&&t.ref?n&&o?F(o)?o.concat(vn(t)):[o,vn(t)]:vn(t):o,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:l,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Te?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Mt(e.ssContent),ssFallback:e.ssFallback&&Mt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return c&&s&&Ds(f,c.clone(f)),f}function Wt(e=" ",t=0){return re(qn,null,e,t)}function Zl(e,t){const n=re(_n,null,e);return n.staticCount=t,n}function ec(e="",t=!1){return t?(Qe(),Jo(mt,null,e)):re(mt,null,e)}function Ue(e){return e==null||typeof e=="boolean"?re(mt):F(e)?re(Te,null,e.slice()):typeof e=="object"?st(e):re(qn,null,String(e))}function st(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Mt(e)}function ks(e,t){let n=0;const{shapeFlag:s}=e;if(t==null)t=null;else if(F(t))n=16;else if(typeof t=="object")if(s&65){const r=t.default;r&&(r._c&&(r._d=!1),ks(e,r()),r._c&&(r._d=!0));return}else{n=32;const r=t._;!r&&!Mo(t)?t._ctx=Ee:r===3&&Ee&&(Ee.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else k(t)?(t={default:t,_ctx:Ee},n=32):(t=String(t),s&64?(n=16,t=[Wt(t)]):n=8);e.children=t,e.shapeFlag|=n}function tc(...e){const t={};for(let n=0;n<e.length;n++){const s=e[n];for(const r in s)if(r==="class")t.class!==s.class&&(t.class=Mn([t.class,s.class]));else if(r==="style")t.style=Rs([t.style,s.style]);else if(Cn(r)){const o=t[r],i=s[r];i&&o!==i&&!(F(o)&&o.includes(i))&&(t[r]=o?[].concat(o,i):i)}else r!==""&&(t[r]=s[r])}return t}function De(e,t,n,s=null){$e(e,t,7,[n,s])}const nc=Oo();let sc=0;function rc(e,t,n){const s=e.type,r=(t?t.appContext:e.appContext)||nc,o={uid:sc++,vnode:e,type:s,parent:t,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new wi(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(r.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Lo(s,r),emitsOptions:Vo(s,r),emit:null,emitted:null,propsDefaults:Y,inheritAttrs:s.inheritAttrs,ctx:Y,data:Y,props:Y,attrs:Y,slots:Y,refs:Y,setupState:Y,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=t?t.root:o,o.emit=Bl.bind(null,o),e.ce&&e.ce(o),o}let ae=null,wn,hs;{const e=Jr(),t=(n,s)=>{let r;return(r=e[n])||(r=e[n]=[]),r.push(s),o=>{r.length>1?r.forEach(i=>i(o)):r[0](o)}};wn=t("__VUE_INSTANCE_SETTERS__",n=>ae=n),hs=t("__VUE_SSR_SETTERS__",n=>$n=n)}const on=e=>{const t=ae;return wn(e),e.scope.on(),()=>{e.scope.off(),wn(t)}},cr=()=>{ae&&ae.scope.off(),wn(null)};function Go(e){return e.vnode.shapeFlag&4}let $n=!1;function oc(e,t=!1,n=!1){t&&hs(t);const{props:s,children:r}=e.vnode,o=Go(e);Al(e,s,o,t),Ll(e,r,n);const i=o?ic(e,t):void 0;return t&&hs(!1),i}function ic(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Sl);const{setup:s}=n;if(s){const r=e.setupContext=s.length>1?cc(e):null,o=on(e);it();const i=rn(s,e,0,[e.props,r]);if(lt(),o(),jr(i)){if(Bt(e)||So(e),i.then(cr,cr),t)return i.then(l=>{ur(e,l,t)}).catch(l=>{Fn(l,e,0)});e.asyncDep=i}else ur(e,i,t)}else Qo(e,t)}function ur(e,t,n){k(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Z(t)&&(e.setupState=ho(t)),Qo(e,n)}let ar;function Qo(e,t,n){const s=e.type;if(!e.render){if(!t&&ar&&!s.render){const r=s.template||Fs(e).template;if(r){const{isCustomElement:o,compilerOptions:i}=e.appContext.config,{delimiters:l,compilerOptions:c}=s,p=le(le({isCustomElement:o,delimiters:l},i),c);s.render=ar(r,p)}}e.render=s.render||ke}{const r=on(e);it();try{Rl(e)}finally{lt(),r()}}}const lc={get(e,t){return de(e,"get",""),e[t]}};function cc(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,lc),slots:e.slots,emit:e.emit,expose:t}}function jn(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(ho(Gi(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Kt)return Kt[n](e)},has(t,n){return n in t||n in Kt}})):e.proxy}function uc(e,t=!0){return k(e)?e.displayName||e.name:e.name||t&&e.__name}function ac(e){return k(e)&&"__vccOpts"in e}const Pe=(e,t)=>el(e,t,$n);function zo(e,t,n){const s=arguments.length;return s===2?Z(t)&&!F(t)?ps(t)?re(e,null,[t]):re(e,t):re(e,null,t):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&ps(n)&&(n=[n]),re(e,t,n))}const fc="3.5.6";/**
* @vue/runtime-dom v3.5.6
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let gs;const fr=typeof window<"u"&&window.trustedTypes;if(fr)try{gs=fr.createPolicy("vue",{createHTML:e=>e})}catch{}const Yo=gs?e=>gs.createHTML(e):e=>e,dc="http://www.w3.org/2000/svg",pc="http://www.w3.org/1998/Math/MathML",Ke=typeof document<"u"?document:null,dr=Ke&&Ke.createElement("template"),hc={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,s)=>{const r=t==="svg"?Ke.createElementNS(dc,e):t==="mathml"?Ke.createElementNS(pc,e):n?Ke.createElement(e,{is:n}):Ke.createElement(e);return e==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:e=>Ke.createTextNode(e),createComment:e=>Ke.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Ke.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,s,r,o){const i=n?n.previousSibling:t.lastChild;if(r&&(r===o||r.nextSibling))for(;t.insertBefore(r.cloneNode(!0),n),!(r===o||!(r=r.nextSibling)););else{dr.innerHTML=Yo(s==="svg"?`<svg>${e}</svg>`:s==="mathml"?`<math>${e}</math>`:e);const l=dr.content;if(s==="svg"||s==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}t.insertBefore(l,n)}return[i?i.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},gc=Symbol("_vtc");function mc(e,t,n){const s=e[gc];s&&(t=(t?[t,...s]:[...s]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const pr=Symbol("_vod"),_c=Symbol("_vsh"),vc=Symbol(""),yc=/(^|;)\s*display\s*:/;function bc(e,t,n){const s=e.style,r=se(n);let o=!1;if(n&&!r){if(t)if(se(t))for(const i of t.split(";")){const l=i.slice(0,i.indexOf(":")).trim();n[l]==null&&yn(s,l,"")}else for(const i in t)n[i]==null&&yn(s,i,"");for(const i in n)i==="display"&&(o=!0),yn(s,i,n[i])}else if(r){if(t!==n){const i=s[vc];i&&(n+=";"+i),s.cssText=n,o=yc.test(n)}}else t&&e.removeAttribute("style");pr in e&&(e[pr]=o?s.display:"",e[_c]&&(s.display="none"))}const hr=/\s*!important$/;function yn(e,t,n){if(F(n))n.forEach(s=>yn(e,t,s));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const s=Ec(e,t);hr.test(n)?e.setProperty(_t(s),n.replace(hr,""),"important"):e[s]=n}}const gr=["Webkit","Moz","ms"],Zn={};function Ec(e,t){const n=Zn[t];if(n)return n;let s=Oe(t);if(s!=="filter"&&s in e)return Zn[t]=s;s=In(s);for(let r=0;r<gr.length;r++){const o=gr[r]+s;if(o in e)return Zn[t]=o}return t}const mr="http://www.w3.org/1999/xlink";function _r(e,t,n,s,r,o=Si(t)){s&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(mr,t.slice(6,t.length)):e.setAttributeNS(mr,t,n):n==null||o&&!Wr(n)?e.removeAttribute(t):e.setAttribute(t,o?"":qe(n)?String(n):n)}function Sc(e,t,n,s){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?Yo(n):n);return}const r=e.tagName;if(t==="value"&&r!=="PROGRESS"&&!r.includes("-")){const i=r==="OPTION"?e.getAttribute("value")||"":e.value,l=n==null?e.type==="checkbox"?"on":"":String(n);(i!==l||!("_value"in e))&&(e.value=l),n==null&&e.removeAttribute(t),e._value=n;return}let o=!1;if(n===""||n==null){const i=typeof e[t];i==="boolean"?n=Wr(n):n==null&&i==="string"?(n="",o=!0):i==="number"&&(n=0,o=!0)}try{e[t]=n}catch{}o&&e.removeAttribute(t)}function dt(e,t,n,s){e.addEventListener(t,n,s)}function Rc(e,t,n,s){e.removeEventListener(t,n,s)}const vr=Symbol("_vei");function Tc(e,t,n,s,r=null){const o=e[vr]||(e[vr]={}),i=o[t];if(s&&i)i.value=s;else{const[l,c]=wc(t);if(s){const p=o[t]=Cc(s,r);dt(e,l,p,c)}else i&&(Rc(e,l,i,c),o[t]=void 0)}}const yr=/(?:Once|Passive|Capture)$/;function wc(e){let t;if(yr.test(e)){t={};let s;for(;s=e.match(yr);)e=e.slice(0,e.length-s[0].length),t[s[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):_t(e.slice(2)),t]}let es=0;const xc=Promise.resolve(),Pc=()=>es||(xc.then(()=>es=0),es=Date.now());function Cc(e,t){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;$e(Oc(s,n.value),t,5,[s])};return n.value=e,n.attached=Pc(),n}function Oc(e,t){if(F(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(s=>r=>!r._stopped&&s&&s(r))}else return t}const br=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Ac=(e,t,n,s,r,o)=>{const i=r==="svg";t==="class"?mc(e,s,i):t==="style"?bc(e,n,s):Cn(t)?bs(t)||Tc(e,t,n,s,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Ic(e,t,s,i))?(Sc(e,t,s),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&_r(e,t,s,i,o,t!=="value")):(t==="true-value"?e._trueValue=s:t==="false-value"&&(e._falseValue=s),_r(e,t,s,i))};function Ic(e,t,n,s){if(s)return!!(t==="innerHTML"||t==="textContent"||t in e&&br(t)&&k(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const r=e.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return br(t)&&se(n)?!1:!!(t in e||e._isVueCE&&(/[A-Z]/.test(t)||!se(n)))}const xn=e=>{const t=e.props["onUpdate:modelValue"]||!1;return F(t)?n=>hn(t,n):t};function Mc(e){e.target.composing=!0}function Er(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const It=Symbol("_assign"),Nc={created(e,{modifiers:{lazy:t,trim:n,number:s}},r){e[It]=xn(r);const o=s||r.props&&r.props.type==="number";dt(e,t?"change":"input",i=>{if(i.target.composing)return;let l=e.value;n&&(l=l.trim()),o&&(l=bn(l)),e[It](l)}),n&&dt(e,"change",()=>{e.value=e.value.trim()}),t||(dt(e,"compositionstart",Mc),dt(e,"compositionend",Er),dt(e,"change",Er))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,oldValue:n,modifiers:{lazy:s,trim:r,number:o}},i){if(e[It]=xn(i),e.composing)return;const l=(o||e.type==="number")&&!/^0\d/.test(e.value)?bn(e.value):e.value,c=t??"";l!==c&&(document.activeElement===e&&e.type!=="range"&&(s&&t===n||r&&e.value.trim()===c)||(e.value=c))}},Lc={deep:!0,created(e,{value:t,modifiers:{number:n}},s){const r=On(t);dt(e,"change",()=>{const o=Array.prototype.filter.call(e.options,i=>i.selected).map(i=>n?bn(Pn(i)):Pn(i));e[It](e.multiple?r?new Set(o):o:o[0]),e._assigning=!0,Ls(()=>{e._assigning=!1})}),e[It]=xn(s)},mounted(e,{value:t,modifiers:{number:n}}){Sr(e,t)},beforeUpdate(e,t,n){e[It]=xn(n)},updated(e,{value:t,modifiers:{number:n}}){e._assigning||Sr(e,t)}};function Sr(e,t,n){const s=e.multiple,r=F(t);if(!(s&&!r&&!On(t))){for(let o=0,i=e.options.length;o<i;o++){const l=e.options[o],c=Pn(l);if(s)if(r){const p=typeof c;p==="string"||p==="number"?l.selected=t.some(f=>String(f)===String(c)):l.selected=Ti(t,c)>-1}else l.selected=t.has(c);else if(Nn(Pn(l),t)){e.selectedIndex!==o&&(e.selectedIndex=o);return}}!s&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function Pn(e){return"_value"in e?e._value:e.value}const Hc=["ctrl","shift","alt","meta"],Dc={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>Hc.some(n=>e[`${n}Key`]&&!t.includes(n))},Rr=(e,t)=>{const n=e._withMods||(e._withMods={}),s=t.join(".");return n[s]||(n[s]=(r,...o)=>{for(let i=0;i<t.length;i++){const l=Dc[t[i]];if(l&&l(r,t))return}return e(r,...o)})},Fc=le({patchProp:Ac},hc);let Tr;function Uc(){return Tr||(Tr=Dl(Fc))}const kc=(...e)=>{const t=Uc().createApp(...e),{mount:n}=t;return t.mount=s=>{const r=$c(s);if(!r)return;const o=t._component;!k(o)&&!o.render&&!o.template&&(o.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const i=n(r,!1,qc(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),i},t};function qc(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function $c(e){return se(e)?document.querySelector(e):e}const Vn=(e,t)=>{const n=e.__vccOpts||e;for(const[s,r]of t)n[s]=r;return n},jc={},Vc={class:"main-menu"},Bc={class:"menu"};function Kc(e,t,n,s,r,o){const i=Rn("router-link"),l=Rn("router-view");return Qe(),ht(Te,null,[t[3]||(t[3]=ne("div",{class:"header"},[ne("h2",null,"PerfLAB")],-1)),ne("div",Vc,[ne("nav",Bc,[re(i,{to:"/performance",class:"menu-item"},{default:Vt(()=>t[0]||(t[0]=[Wt("Performance Engineer")])),_:1}),re(i,{to:"/frontend",class:"menu-item"},{default:Vt(()=>t[1]||(t[1]=[Wt("Frontend")])),_:1}),re(i,{to:"/backend",class:"menu-item"},{default:Vt(()=>t[2]||(t[2]=[Wt("Backend")])),_:1})])]),re(l)],64)}const Jc=Vn(jc,[["render",Kc]]);/*!
  * vue-router v4.4.5
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Rt=typeof document<"u";function Xo(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Wc(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&Xo(e.default)}const W=Object.assign;function ts(e,t){const n={};for(const s in t){const r=t[s];n[s]=Ae(r)?r.map(e):e(r)}return n}const Gt=()=>{},Ae=Array.isArray,Zo=/#/g,Gc=/&/g,Qc=/\//g,zc=/=/g,Yc=/\?/g,ei=/\+/g,Xc=/%5B/g,Zc=/%5D/g,ti=/%5E/g,eu=/%60/g,ni=/%7B/g,tu=/%7C/g,si=/%7D/g,nu=/%20/g;function qs(e){return encodeURI(""+e).replace(tu,"|").replace(Xc,"[").replace(Zc,"]")}function su(e){return qs(e).replace(ni,"{").replace(si,"}").replace(ti,"^")}function ms(e){return qs(e).replace(ei,"%2B").replace(nu,"+").replace(Zo,"%23").replace(Gc,"%26").replace(eu,"`").replace(ni,"{").replace(si,"}").replace(ti,"^")}function ru(e){return ms(e).replace(zc,"%3D")}function ou(e){return qs(e).replace(Zo,"%23").replace(Yc,"%3F")}function iu(e){return e==null?"":ou(e).replace(Qc,"%2F")}function tn(e){try{return decodeURIComponent(""+e)}catch{}return""+e}const lu=/\/$/,cu=e=>e.replace(lu,"");function ns(e,t,n="/"){let s,r={},o="",i="";const l=t.indexOf("#");let c=t.indexOf("?");return l<c&&l>=0&&(c=-1),c>-1&&(s=t.slice(0,c),o=t.slice(c+1,l>-1?l:t.length),r=e(o)),l>-1&&(s=s||t.slice(0,l),i=t.slice(l,t.length)),s=du(s??t,n),{fullPath:s+(o&&"?")+o+i,path:s,query:r,hash:tn(i)}}function uu(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function wr(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function au(e,t,n){const s=t.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&Nt(t.matched[s],n.matched[r])&&ri(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Nt(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function ri(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!fu(e[n],t[n]))return!1;return!0}function fu(e,t){return Ae(e)?xr(e,t):Ae(t)?xr(t,e):e===t}function xr(e,t){return Ae(t)?e.length===t.length&&e.every((n,s)=>n===t[s]):e.length===1&&e[0]===t}function du(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),s=e.split("/"),r=s[s.length-1];(r===".."||r===".")&&s.push("");let o=n.length-1,i,l;for(i=0;i<s.length;i++)if(l=s[i],l!==".")if(l==="..")o>1&&o--;else break;return n.slice(0,o).join("/")+"/"+s.slice(i).join("/")}const tt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var nn;(function(e){e.pop="pop",e.push="push"})(nn||(nn={}));var Qt;(function(e){e.back="back",e.forward="forward",e.unknown=""})(Qt||(Qt={}));function pu(e){if(!e)if(Rt){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),cu(e)}const hu=/^[^#]+#/;function gu(e,t){return e.replace(hu,"#")+t}function mu(e,t){const n=document.documentElement.getBoundingClientRect(),s=e.getBoundingClientRect();return{behavior:t.behavior,left:s.left-n.left-(t.left||0),top:s.top-n.top-(t.top||0)}}const Bn=()=>({left:window.scrollX,top:window.scrollY});function _u(e){let t;if("el"in e){const n=e.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;t=mu(r,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function Pr(e,t){return(history.state?history.state.position-t:-1)+e}const _s=new Map;function vu(e,t){_s.set(e,t)}function yu(e){const t=_s.get(e);return _s.delete(e),t}let bu=()=>location.protocol+"//"+location.host;function oi(e,t){const{pathname:n,search:s,hash:r}=t,o=e.indexOf("#");if(o>-1){let l=r.includes(e.slice(o))?e.slice(o).length:1,c=r.slice(l);return c[0]!=="/"&&(c="/"+c),wr(c,"")}return wr(n,e)+s+r}function Eu(e,t,n,s){let r=[],o=[],i=null;const l=({state:h})=>{const m=oi(e,location),C=n.value,O=t.value;let q=0;if(h){if(n.value=m,t.value=h,i&&i===C){i=null;return}q=O?h.position-O.position:0}else s(m);r.forEach(L=>{L(n.value,C,{delta:q,type:nn.pop,direction:q?q>0?Qt.forward:Qt.back:Qt.unknown})})};function c(){i=n.value}function p(h){r.push(h);const m=()=>{const C=r.indexOf(h);C>-1&&r.splice(C,1)};return o.push(m),m}function f(){const{history:h}=window;h.state&&h.replaceState(W({},h.state,{scroll:Bn()}),"")}function d(){for(const h of o)h();o=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",f,{passive:!0}),{pauseListeners:c,listen:p,destroy:d}}function Cr(e,t,n,s=!1,r=!1){return{back:e,current:t,forward:n,replaced:s,position:window.history.length,scroll:r?Bn():null}}function Su(e){const{history:t,location:n}=window,s={value:oi(e,n)},r={value:t.state};r.value||o(s.value,{back:null,current:s.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function o(c,p,f){const d=e.indexOf("#"),h=d>-1?(n.host&&document.querySelector("base")?e:e.slice(d))+c:bu()+e+c;try{t[f?"replaceState":"pushState"](p,"",h),r.value=p}catch(m){console.error(m),n[f?"replace":"assign"](h)}}function i(c,p){const f=W({},t.state,Cr(r.value.back,c,r.value.forward,!0),p,{position:r.value.position});o(c,f,!0),s.value=c}function l(c,p){const f=W({},r.value,t.state,{forward:c,scroll:Bn()});o(f.current,f,!0);const d=W({},Cr(s.value,c,null),{position:f.position+1},p);o(c,d,!1),s.value=c}return{location:s,state:r,push:l,replace:i}}function Ru(e){e=pu(e);const t=Su(e),n=Eu(e,t.state,t.location,t.replace);function s(o,i=!0){i||n.pauseListeners(),history.go(o)}const r=W({location:"",base:e,go:s,createHref:gu.bind(null,e)},t,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>t.state.value}),r}function Tu(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),Ru(e)}function wu(e){return typeof e=="string"||e&&typeof e=="object"}function ii(e){return typeof e=="string"||typeof e=="symbol"}const li=Symbol("");var Or;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Or||(Or={}));function Lt(e,t){return W(new Error,{type:e,[li]:!0},t)}function Be(e,t){return e instanceof Error&&li in e&&(t==null||!!(e.type&t))}const Ar="[^/]+?",xu={sensitive:!1,strict:!1,start:!0,end:!0},Pu=/[.+*?^${}()[\]/\\]/g;function Cu(e,t){const n=W({},xu,t),s=[];let r=n.start?"^":"";const o=[];for(const p of e){const f=p.length?[]:[90];n.strict&&!p.length&&(r+="/");for(let d=0;d<p.length;d++){const h=p[d];let m=40+(n.sensitive?.25:0);if(h.type===0)d||(r+="/"),r+=h.value.replace(Pu,"\\$&"),m+=40;else if(h.type===1){const{value:C,repeatable:O,optional:q,regexp:L}=h;o.push({name:C,repeatable:O,optional:q});const N=L||Ar;if(N!==Ar){m+=10;try{new RegExp(`(${N})`)}catch(A){throw new Error(`Invalid custom RegExp for param "${C}" (${N}): `+A.message)}}let H=O?`((?:${N})(?:/(?:${N}))*)`:`(${N})`;d||(H=q&&p.length<2?`(?:/${H})`:"/"+H),q&&(H+="?"),r+=H,m+=20,q&&(m+=-8),O&&(m+=-20),N===".*"&&(m+=-50)}f.push(m)}s.push(f)}if(n.strict&&n.end){const p=s.length-1;s[p][s[p].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const i=new RegExp(r,n.sensitive?"":"i");function l(p){const f=p.match(i),d={};if(!f)return null;for(let h=1;h<f.length;h++){const m=f[h]||"",C=o[h-1];d[C.name]=m&&C.repeatable?m.split("/"):m}return d}function c(p){let f="",d=!1;for(const h of e){(!d||!f.endsWith("/"))&&(f+="/"),d=!1;for(const m of h)if(m.type===0)f+=m.value;else if(m.type===1){const{value:C,repeatable:O,optional:q}=m,L=C in p?p[C]:"";if(Ae(L)&&!O)throw new Error(`Provided param "${C}" is an array but it is not repeatable (* or + modifiers)`);const N=Ae(L)?L.join("/"):L;if(!N)if(q)h.length<2&&(f.endsWith("/")?f=f.slice(0,-1):d=!0);else throw new Error(`Missing required param "${C}"`);f+=N}}return f||"/"}return{re:i,score:s,keys:o,parse:l,stringify:c}}function Ou(e,t){let n=0;for(;n<e.length&&n<t.length;){const s=t[n]-e[n];if(s)return s;n++}return e.length<t.length?e.length===1&&e[0]===80?-1:1:e.length>t.length?t.length===1&&t[0]===80?1:-1:0}function ci(e,t){let n=0;const s=e.score,r=t.score;for(;n<s.length&&n<r.length;){const o=Ou(s[n],r[n]);if(o)return o;n++}if(Math.abs(r.length-s.length)===1){if(Ir(s))return 1;if(Ir(r))return-1}return r.length-s.length}function Ir(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Au={type:0,value:""},Iu=/[a-zA-Z0-9_]/;function Mu(e){if(!e)return[[]];if(e==="/")return[[Au]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(m){throw new Error(`ERR (${n})/"${p}": ${m}`)}let n=0,s=n;const r=[];let o;function i(){o&&r.push(o),o=[]}let l=0,c,p="",f="";function d(){p&&(n===0?o.push({type:0,value:p}):n===1||n===2||n===3?(o.length>1&&(c==="*"||c==="+")&&t(`A repeatable param (${p}) must be alone in its segment. eg: '/:ids+.`),o.push({type:1,value:p,regexp:f,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):t("Invalid state to consume buffer"),p="")}function h(){p+=c}for(;l<e.length;){if(c=e[l++],c==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:c==="/"?(p&&d(),i()):c===":"?(d(),n=1):h();break;case 4:h(),n=s;break;case 1:c==="("?n=2:Iu.test(c)?h():(d(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--);break;case 2:c===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+c:n=3:f+=c;break;case 3:d(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--,f="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${p}"`),d(),i(),r}function Nu(e,t,n){const s=Cu(Mu(e.path),n),r=W(s,{record:e,parent:t,children:[],alias:[]});return t&&!r.record.aliasOf==!t.record.aliasOf&&t.children.push(r),r}function Lu(e,t){const n=[],s=new Map;t=Hr({strict:!1,end:!0,sensitive:!1},t);function r(d){return s.get(d)}function o(d,h,m){const C=!m,O=Nr(d);O.aliasOf=m&&m.record;const q=Hr(t,d),L=[O];if("alias"in d){const A=typeof d.alias=="string"?[d.alias]:d.alias;for(const Q of A)L.push(Nr(W({},O,{components:m?m.record.components:O.components,path:Q,aliasOf:m?m.record:O})))}let N,H;for(const A of L){const{path:Q}=A;if(h&&Q[0]!=="/"){const ie=h.record.path,ee=ie[ie.length-1]==="/"?"":"/";A.path=h.record.path+(Q&&ee+Q)}if(N=Nu(A,h,q),m?m.alias.push(N):(H=H||N,H!==N&&H.alias.push(N),C&&d.name&&!Lr(N)&&i(d.name)),ui(N)&&c(N),O.children){const ie=O.children;for(let ee=0;ee<ie.length;ee++)o(ie[ee],N,m&&m.children[ee])}m=m||N}return H?()=>{i(H)}:Gt}function i(d){if(ii(d)){const h=s.get(d);h&&(s.delete(d),n.splice(n.indexOf(h),1),h.children.forEach(i),h.alias.forEach(i))}else{const h=n.indexOf(d);h>-1&&(n.splice(h,1),d.record.name&&s.delete(d.record.name),d.children.forEach(i),d.alias.forEach(i))}}function l(){return n}function c(d){const h=Fu(d,n);n.splice(h,0,d),d.record.name&&!Lr(d)&&s.set(d.record.name,d)}function p(d,h){let m,C={},O,q;if("name"in d&&d.name){if(m=s.get(d.name),!m)throw Lt(1,{location:d});q=m.record.name,C=W(Mr(h.params,m.keys.filter(H=>!H.optional).concat(m.parent?m.parent.keys.filter(H=>H.optional):[]).map(H=>H.name)),d.params&&Mr(d.params,m.keys.map(H=>H.name))),O=m.stringify(C)}else if(d.path!=null)O=d.path,m=n.find(H=>H.re.test(O)),m&&(C=m.parse(O),q=m.record.name);else{if(m=h.name?s.get(h.name):n.find(H=>H.re.test(h.path)),!m)throw Lt(1,{location:d,currentLocation:h});q=m.record.name,C=W({},h.params,d.params),O=m.stringify(C)}const L=[];let N=m;for(;N;)L.unshift(N.record),N=N.parent;return{name:q,path:O,params:C,matched:L,meta:Du(L)}}e.forEach(d=>o(d));function f(){n.length=0,s.clear()}return{addRoute:o,resolve:p,removeRoute:i,clearRoutes:f,getRoutes:l,getRecordMatcher:r}}function Mr(e,t){const n={};for(const s of t)s in e&&(n[s]=e[s]);return n}function Nr(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:Hu(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function Hu(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const s in e.components)t[s]=typeof n=="object"?n[s]:n;return t}function Lr(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Du(e){return e.reduce((t,n)=>W(t,n.meta),{})}function Hr(e,t){const n={};for(const s in e)n[s]=s in t?t[s]:e[s];return n}function Fu(e,t){let n=0,s=t.length;for(;n!==s;){const o=n+s>>1;ci(e,t[o])<0?s=o:n=o+1}const r=Uu(e);return r&&(s=t.lastIndexOf(r,s-1)),s}function Uu(e){let t=e;for(;t=t.parent;)if(ui(t)&&ci(e,t)===0)return t}function ui({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function ku(e){const t={};if(e===""||e==="?")return t;const s=(e[0]==="?"?e.slice(1):e).split("&");for(let r=0;r<s.length;++r){const o=s[r].replace(ei," "),i=o.indexOf("="),l=tn(i<0?o:o.slice(0,i)),c=i<0?null:tn(o.slice(i+1));if(l in t){let p=t[l];Ae(p)||(p=t[l]=[p]),p.push(c)}else t[l]=c}return t}function Dr(e){let t="";for(let n in e){const s=e[n];if(n=ru(n),s==null){s!==void 0&&(t+=(t.length?"&":"")+n);continue}(Ae(s)?s.map(o=>o&&ms(o)):[s&&ms(s)]).forEach(o=>{o!==void 0&&(t+=(t.length?"&":"")+n,o!=null&&(t+="="+o))})}return t}function qu(e){const t={};for(const n in e){const s=e[n];s!==void 0&&(t[n]=Ae(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return t}const $u=Symbol(""),Fr=Symbol(""),$s=Symbol(""),ai=Symbol(""),vs=Symbol("");function kt(){let e=[];function t(s){return e.push(s),()=>{const r=e.indexOf(s);r>-1&&e.splice(r,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function rt(e,t,n,s,r,o=i=>i()){const i=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((l,c)=>{const p=h=>{h===!1?c(Lt(4,{from:n,to:t})):h instanceof Error?c(h):wu(h)?c(Lt(2,{from:t,to:h})):(i&&s.enterCallbacks[r]===i&&typeof h=="function"&&i.push(h),l())},f=o(()=>e.call(s&&s.instances[r],t,n,p));let d=Promise.resolve(f);e.length<3&&(d=d.then(p)),d.catch(h=>c(h))})}function ss(e,t,n,s,r=o=>o()){const o=[];for(const i of e)for(const l in i.components){let c=i.components[l];if(!(t!=="beforeRouteEnter"&&!i.instances[l]))if(Xo(c)){const f=(c.__vccOpts||c)[t];f&&o.push(rt(f,n,s,i,l,r))}else{let p=c();o.push(()=>p.then(f=>{if(!f)throw new Error(`Couldn't resolve component "${l}" at "${i.path}"`);const d=Wc(f)?f.default:f;i.mods[l]=f,i.components[l]=d;const m=(d.__vccOpts||d)[t];return m&&rt(m,n,s,i,l,r)()}))}}return o}function Ur(e){const t=Ge($s),n=Ge(ai),s=Pe(()=>{const c=Ct(e.to);return t.resolve(c)}),r=Pe(()=>{const{matched:c}=s.value,{length:p}=c,f=c[p-1],d=n.matched;if(!f||!d.length)return-1;const h=d.findIndex(Nt.bind(null,f));if(h>-1)return h;const m=kr(c[p-2]);return p>1&&kr(f)===m&&d[d.length-1].path!==m?d.findIndex(Nt.bind(null,c[p-2])):h}),o=Pe(()=>r.value>-1&&Ku(n.params,s.value.params)),i=Pe(()=>r.value>-1&&r.value===n.matched.length-1&&ri(n.params,s.value.params));function l(c={}){return Bu(c)?t[Ct(e.replace)?"replace":"push"](Ct(e.to)).catch(Gt):Promise.resolve()}return{route:s,href:Pe(()=>s.value.href),isActive:o,isExactActive:i,navigate:l}}const ju=Eo({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Ur,setup(e,{slots:t}){const n=Dn(Ur(e)),{options:s}=Ge($s),r=Pe(()=>({[qr(e.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[qr(e.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const o=t.default&&t.default(n);return e.custom?o:zo("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},o)}}}),Vu=ju;function Bu(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Ku(e,t){for(const n in t){const s=t[n],r=e[n];if(typeof s=="string"){if(s!==r)return!1}else if(!Ae(r)||r.length!==s.length||s.some((o,i)=>o!==r[i]))return!1}return!0}function kr(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const qr=(e,t,n)=>e??t??n,Ju=Eo({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const s=Ge(vs),r=Pe(()=>e.route||s.value),o=Ge(Fr,0),i=Pe(()=>{let p=Ct(o);const{matched:f}=r.value;let d;for(;(d=f[p])&&!d.components;)p++;return p}),l=Pe(()=>r.value.matched[i.value]);gn(Fr,Pe(()=>i.value+1)),gn($u,l),gn(vs,r);const c=Qi();return mn(()=>[c.value,l.value,e.name],([p,f,d],[h,m,C])=>{f&&(f.instances[d]=p,m&&m!==f&&p&&p===h&&(f.leaveGuards.size||(f.leaveGuards=m.leaveGuards),f.updateGuards.size||(f.updateGuards=m.updateGuards))),p&&f&&(!m||!Nt(f,m)||!h)&&(f.enterCallbacks[d]||[]).forEach(O=>O(p))},{flush:"post"}),()=>{const p=r.value,f=e.name,d=l.value,h=d&&d.components[f];if(!h)return $r(n.default,{Component:h,route:p});const m=d.props[f],C=m?m===!0?p.params:typeof m=="function"?m(p):m:null,q=zo(h,W({},C,t,{onVnodeUnmounted:L=>{L.component.isUnmounted&&(d.instances[f]=null)},ref:c}));return $r(n.default,{Component:q,route:p})||q}}});function $r(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const Wu=Ju;function Gu(e){const t=Lu(e.routes,e),n=e.parseQuery||ku,s=e.stringifyQuery||Dr,r=e.history,o=kt(),i=kt(),l=kt(),c=zi(tt);let p=tt;Rt&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=ts.bind(null,v=>""+v),d=ts.bind(null,iu),h=ts.bind(null,tn);function m(v,P){let w,I;return ii(v)?(w=t.getRecordMatcher(v),I=P):I=v,t.addRoute(I,w)}function C(v){const P=t.getRecordMatcher(v);P&&t.removeRoute(P)}function O(){return t.getRoutes().map(v=>v.record)}function q(v){return!!t.getRecordMatcher(v)}function L(v,P){if(P=W({},P||c.value),typeof v=="string"){const a=ns(n,v,P.path),g=t.resolve({path:a.path},P),y=r.createHref(a.fullPath);return W(a,g,{params:h(g.params),hash:tn(a.hash),redirectedFrom:void 0,href:y})}let w;if(v.path!=null)w=W({},v,{path:ns(n,v.path,P.path).path});else{const a=W({},v.params);for(const g in a)a[g]==null&&delete a[g];w=W({},v,{params:d(a)}),P.params=d(P.params)}const I=t.resolve(w,P),K=v.hash||"";I.params=f(h(I.params));const te=uu(s,W({},v,{hash:su(K),path:I.path})),u=r.createHref(te);return W({fullPath:te,hash:K,query:s===Dr?qu(v.query):v.query||{}},I,{redirectedFrom:void 0,href:u})}function N(v){return typeof v=="string"?ns(n,v,c.value.path):W({},v)}function H(v,P){if(p!==v)return Lt(8,{from:P,to:v})}function A(v){return ee(v)}function Q(v){return A(W(N(v),{replace:!0}))}function ie(v){const P=v.matched[v.matched.length-1];if(P&&P.redirect){const{redirect:w}=P;let I=typeof w=="function"?w(v):w;return typeof I=="string"&&(I=I.includes("?")||I.includes("#")?I=N(I):{path:I},I.params={}),W({query:v.query,hash:v.hash,params:I.path!=null?{}:v.params},I)}}function ee(v,P){const w=p=L(v),I=c.value,K=v.state,te=v.force,u=v.replace===!0,a=ie(w);if(a)return ee(W(N(a),{state:typeof a=="object"?W({},K,a.state):K,force:te,replace:u}),P||w);const g=w;g.redirectedFrom=P;let y;return!te&&au(s,I,w)&&(y=Lt(16,{to:g,from:I}),Le(I,I,!0,!1)),(y?Promise.resolve(y):Me(g,I)).catch(_=>Be(_)?Be(_,2)?_:Ze(_):j(_,g,I)).then(_=>{if(_){if(Be(_,2))return ee(W({replace:u},N(_.to),{state:typeof _.to=="object"?W({},K,_.to.state):K,force:te}),P||g)}else _=ct(g,I,!0,u,K);return Xe(g,I,_),_})}function Ie(v,P){const w=H(v,P);return w?Promise.reject(w):Promise.resolve()}function Ye(v){const P=bt.values().next().value;return P&&typeof P.runWithContext=="function"?P.runWithContext(v):v()}function Me(v,P){let w;const[I,K,te]=Qu(v,P);w=ss(I.reverse(),"beforeRouteLeave",v,P);for(const a of I)a.leaveGuards.forEach(g=>{w.push(rt(g,v,P))});const u=Ie.bind(null,v,P);return w.push(u),Re(w).then(()=>{w=[];for(const a of o.list())w.push(rt(a,v,P));return w.push(u),Re(w)}).then(()=>{w=ss(K,"beforeRouteUpdate",v,P);for(const a of K)a.updateGuards.forEach(g=>{w.push(rt(g,v,P))});return w.push(u),Re(w)}).then(()=>{w=[];for(const a of te)if(a.beforeEnter)if(Ae(a.beforeEnter))for(const g of a.beforeEnter)w.push(rt(g,v,P));else w.push(rt(a.beforeEnter,v,P));return w.push(u),Re(w)}).then(()=>(v.matched.forEach(a=>a.enterCallbacks={}),w=ss(te,"beforeRouteEnter",v,P,Ye),w.push(u),Re(w))).then(()=>{w=[];for(const a of i.list())w.push(rt(a,v,P));return w.push(u),Re(w)}).catch(a=>Be(a,8)?a:Promise.reject(a))}function Xe(v,P,w){l.list().forEach(I=>Ye(()=>I(v,P,w)))}function ct(v,P,w,I,K){const te=H(v,P);if(te)return te;const u=P===tt,a=Rt?history.state:{};w&&(I||u?r.replace(v.fullPath,W({scroll:u&&a&&a.scroll},K)):r.push(v.fullPath,K)),c.value=v,Le(v,P,w,u),Ze()}let Ne;function Ht(){Ne||(Ne=r.listen((v,P,w)=>{if(!ln.listening)return;const I=L(v),K=ie(I);if(K){ee(W(K,{replace:!0}),I).catch(Gt);return}p=I;const te=c.value;Rt&&vu(Pr(te.fullPath,w.delta),Bn()),Me(I,te).catch(u=>Be(u,12)?u:Be(u,2)?(ee(u.to,I).then(a=>{Be(a,20)&&!w.delta&&w.type===nn.pop&&r.go(-1,!1)}).catch(Gt),Promise.reject()):(w.delta&&r.go(-w.delta,!1),j(u,I,te))).then(u=>{u=u||ct(I,te,!1),u&&(w.delta&&!Be(u,8)?r.go(-w.delta,!1):w.type===nn.pop&&Be(u,20)&&r.go(-1,!1)),Xe(I,te,u)}).catch(Gt)}))}let vt=kt(),oe=kt(),G;function j(v,P,w){Ze(v);const I=oe.list();return I.length?I.forEach(K=>K(v,P,w)):console.error(v),Promise.reject(v)}function je(){return G&&c.value!==tt?Promise.resolve():new Promise((v,P)=>{vt.add([v,P])})}function Ze(v){return G||(G=!v,Ht(),vt.list().forEach(([P,w])=>v?w(v):P()),vt.reset()),v}function Le(v,P,w,I){const{scrollBehavior:K}=e;if(!Rt||!K)return Promise.resolve();const te=!w&&yu(Pr(v.fullPath,0))||(I||!w)&&history.state&&history.state.scroll||null;return Ls().then(()=>K(v,P,te)).then(u=>u&&_u(u)).catch(u=>j(u,v,P))}const ge=v=>r.go(v);let yt;const bt=new Set,ln={currentRoute:c,listening:!0,addRoute:m,removeRoute:C,clearRoutes:t.clearRoutes,hasRoute:q,getRoutes:O,resolve:L,options:e,push:A,replace:Q,go:ge,back:()=>ge(-1),forward:()=>ge(1),beforeEach:o.add,beforeResolve:i.add,afterEach:l.add,onError:oe.add,isReady:je,install(v){const P=this;v.component("RouterLink",Vu),v.component("RouterView",Wu),v.config.globalProperties.$router=P,Object.defineProperty(v.config.globalProperties,"$route",{enumerable:!0,get:()=>Ct(c)}),Rt&&!yt&&c.value===tt&&(yt=!0,A(r.location).catch(K=>{}));const w={};for(const K in tt)Object.defineProperty(w,K,{get:()=>c.value[K],enumerable:!0});v.provide($s,P),v.provide(ai,ao(w)),v.provide(vs,c);const I=v.unmount;bt.add(v),v.unmount=function(){bt.delete(v),bt.size<1&&(p=tt,Ne&&Ne(),Ne=null,c.value=tt,yt=!1,G=!1),I()}}};function Re(v){return v.reduce((P,w)=>P.then(()=>Ye(w)),Promise.resolve())}return ln}function Qu(e,t){const n=[],s=[],r=[],o=Math.max(t.matched.length,e.matched.length);for(let i=0;i<o;i++){const l=t.matched[i];l&&(e.matched.find(p=>Nt(p,l))?s.push(l):n.push(l));const c=e.matched[i];c&&(t.matched.find(p=>Nt(p,c))||r.push(c))}return[n,s,r]}const fi=[{id:1,question:"Что такое НТ?",answer:`Нагрузочное тестирование (НТ) — это проверка устойчивости и производительности программного обеспечения под нагрузкой, сопоставимой с реальными условиями использования."
      <p>Источник: <a href="https://habr.com/ru/companies/otus/articles/842150/" target="_blank">https://habr.com/ru/companies/otus/articles/842150//</a></p>`,level:"INTERN"},{id:2,question:"Что такое МНТ?",answer:`
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
    `,level:"INTERN"},{id:3,question:"В МНТ есть раздел генерация БД, о чем он и зачем нужен?",answer:`
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
      `,level:"INTERN"},{id:4,question:"Что нужно прописывать в отчёте?",answer:`
          <ul>
            <li><strong>Объект тестирования:</strong> Описание системы, как в МНТ.</li>
            <li><strong>Цели испытаний:</strong> Конкретные задачи теста, например, выявление узких мест.</li>
            <li><strong>Конфигурация стендов:</strong> Параметры ресурсов (CPU, память, количество реплик).</li>
            <li><strong>Требования к производительности:</strong> Описание достигнутых результатов по утилизации ресурсов и процент ошибок.</li>
            <li><strong>Результаты тестов:</strong> Метрики по времени отклика, пропускной способности, количеству ошибок и успешных операций.</li>
            <li><strong>Анализ результатов:</strong> Сравнение с эталонными тестами (если применимо) и выявление проблем.</li>
            <li><strong>Отчеты по тестам:</strong> Ссылки на подробные отчёты и краткий анализ по итогам тестов.</li>
          </ul>
        `,level:"INTERN"},{id:5,question:"Как записать простой скрипт с помощью Recording в JMeter?",answer:`
          <ul>
            <li><strong>Открой JMeter</strong> и добавь HTTP(S) Test Script Recorder.</li>
            <li><strong>Настрой прокси-сервер</strong> для захвата трафика (укажи порт).</li>
            <li><strong>Добавь Thread Group</strong> для организации сценария.</li>
            <li><strong>Запусти запись</strong> и проведи необходимые действия в браузере/приложении.</li>
            <li><strong>Останови запись</strong> — все запросы будут сохранены в виде шагов в сценарии.</li>
          </ul>
        `,level:"INTERN"},{id:6,question:"Основные шаги настройки скрипта в JMeter после записи?",answer:`
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
        `,level:"INTERN"},{id:7,question:"Что такое параметризация?",answer:`
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
        `,level:"INTERN"},{id:8,question:"Что такое корреляция?",answer:`
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
        `,level:"INTERN"},{id:9,question:"Виды проверок в JMeter",answer:`
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
        `,level:"INTERN"},{id:10,question:"Определение профиля НТ и методы его сбора",answer:`
          <p>Профиль нагрузки — это набор операций с заданными интенсивностями, полученный на основе сбора статистических данных либо определенный путем анализа требований к тестируемой системе.</p>
          <p><strong>Методы сбора профиля НТ:</strong></p>
          <ul>
            <li><strong>Анализ бизнес-требований:</strong> Сбор данных о прогнозируемом количестве пользователей и типичных сценариях использования.</li>
            <li><strong>Логирование реальных пользователей:</strong> Анализ логов реальных систем для определения характерных нагрузок.</li>
            <li><strong>Анализ мониторинга системы:</strong> Использование данных мониторинга производительности (например, Grafana, Prometheus) для понимания, как система работает под нагрузкой.</li>
            <li><strong>Консультации с разработчиками и бизнес-аналитиками:</strong> Определение критичных операций и нагрузочных сценариев.</li>
          </ul>
        `,level:"INTERN"},{id:11,question:"Перечень основных тестов нагрузочного тестирования и их цели",answer:`
          <ul>
            <li><strong>Тест на максимальную нагрузку:</strong> Определение предела, при котором система перестает справляться с запросами. Цель — найти узкие места.</li>
            <li><strong>Тест стабильности:</strong> Проверка работы системы при постоянной нагрузке в течение длительного времени (например, 10 часов). Цель — выявить проблемы с утечкой памяти и нестабильностью работы.</li>
            <li><strong>Стрессовое тестирование:</strong> Тестирование системы при экстремальных условиях, когда ее ресурсы могут быть исчерпаны. Основная цель — проверка устойчивости системы при экстремальных условиях.</li>
            <li><strong>Тестирование отказоустойчивости:</strong> Оценка способности системы сохранять работоспособность в условиях неблагоприятных факторов, таких как сбои в сети и отключение серверов.</li>
          </ul>
        `,level:"INTERN"},{id:12,question:"Основные метрики, на которые смотрят в Grafana при нагрузочном тестировании",answer:`
          <ul>
            <li><strong>CPU Utilization:</strong> Показывает, сколько процессорных ресурсов использует система.</li>
            <li><strong>Memory Utilization:</strong> Показывает использование оперативной памяти, важно, чтобы оно не превышало 80%.</li>
            <li><strong>Request Rate (RPS):</strong> Количество запросов в секунду, которые система обрабатывает.</li>
            <li><strong>Response Time:</strong> Время отклика системы, особенно важно для критичных операций.</li>
            <li><strong>Error Rate:</strong> Процент ошибок в системе, следует отслеживать, чтобы он был ниже 1%.</li>
            <li><strong>Throughput:</strong> Пропускная способность системы, измеряемая в мегабайтах или гигабайтах в секунду.</li>
          </ul>
        `,level:"INTERN"},{id:13,question:"Статистика базы данных",answer:`
          <ul>
            <li><strong>Количество запросов:</strong> Общее количество SQL-запросов, обрабатываемых базой данных.</li>
            <li><strong>Время выполнения запросов:</strong> Показывает среднее, максимальное и минимальное время выполнения запросов.</li>
            <li><strong>Количество соединений:</strong> Количество активных соединений к базе данных.</li>
            <li><strong>Закэшированные данные:</strong> Статистика использования кэша для ускорения выполнения запросов.</li>
            <li><strong>Использование индексов:</strong> Статистика использования индексов для оптимизации запросов.</li>
            <li><strong>Количество блокировок:</strong> Блокировки строк или таблиц, замедляющие работу базы данных.</li>
          </ul>
        `,level:"INTERN"},{id:14,question:"Различия между реляционной и нереляционной БД",answer:`
        <p>База данных (БД) — это организованная коллекция данных, предназначенная для хранения, управления и обработки информации. Базы данных позволяют эффективно сохранять большие объёмы данных, легко находить нужные сведения и управлять ими. Базы данных могут быть реляционными и нереляционными</p>
          <ul>
            <li><strong>Реляционные базы данных (RDBMS):</strong> организуют данные в таблицы с четко определенной схемой (строки и столбцы). Они поддерживают сложные связи между таблицами с помощью первичных и внешних ключей, что делает их идеальными для работы с четко структурированными данными и сложными взаимосвязями. Для работы с данными используют язык SQL. Примеры: MySQL, PostgreSQL, Oracle, SQL Server.</li>
            <li><strong>Нереляционные базы данных (NoSQL):</strong> могут хранить данные в различных форматах — документы, графы, ключ-значение или столбцы — без строгой схемы. Обычно они не поддерживают сложные связи, но хорошо масштабируются и оптимизированы для быстрого доступа к большим объемам неструктурированных данных. Примеры: MongoDB, Cassandra, Redis, Couchbase.</li>
          </ul>
        `,level:"INTERN"},{id:15,question:"Как посмотреть, что находится в конкретной таблице?",answer:`
          <p>Для этого можно использовать следующий SQL-запрос:</p>
          <pre><code>SELECT * FROM table_name;</code></pre>
          <p>Здесь <code>table_name</code> — это название таблицы, данные которой нужно посмотреть.</p>
        `,level:"INTERN"},{id:16,question:"Как выбрать конкретные столбцы?",answer:`
          <p>Для этого нужно указать конкретные столбцы в SQL-запросе:</p>
          <pre><code>SELECT column1, column2 FROM table_name;</code></pre>
          <p>Пример:</p>
          <pre><code>SELECT first_name, last_name FROM employees;</code></pre>
        `,level:"INTERN"},{id:17,question:"Как писать условия для фильтрации? (WHERE)",answer:`
          <p>Для фильтрации данных используется ключевое слово <code>WHERE</code>:</p>
          <pre><code>SELECT * FROM table_name WHERE condition;</code></pre>
          <p>Пример:</p>
          <pre><code>SELECT * FROM employees WHERE salary > 50000;</code></pre>
        `,level:"INTERN"},{id:18,question:"Что такое HTTP протокол?",answer:`
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
        `,level:"INTERN"},{id:19,question:"Что такое Request?",answer:"Request (Запрос) — это сообщение от клиента к серверу для получения данных или выполнения операций.",level:"INTERN"},{id:20,question:"Что такое Response?",answer:"Response (Ответ) — это сообщение, которое сервер отправляет в ответ на запрос клиента.",level:"INTERN"},{id:21,question:"Что такое Headers?",answer:"Headers (Заголовки) — это метаинформация, передаваемая в запросах и ответах HTTP.",level:"INTERN"},{id:22,question:"Что такое Cookie?",answer:"Cookie — это небольшие данные, которые сервер отправляет клиенту для хранения информации о сессиях и настройках.",level:"INTERN"},{id:23,question:"Что такое Body?",answer:"Body (Тело) — это основное содержимое HTTP-запроса или ответа, содержащее данные.",level:"INTERN"},{id:24,question:"Что такое Method?",answer:`
          <ul>
            <li><strong>GET:</strong> Получить данные с сервера.</li>
            <li><strong>POST:</strong> Отправить данные на сервер.</li>
            <li><strong>PUT:</strong> Обновить или создать ресурс на сервере.</li>
            <li><strong>DELETE:</strong> Удалить ресурс на сервере.</li>
            <li><strong>PATCH:</strong> Частичное обновление ресурса.</li>
          </ul>
        `,level:"INTERN"},{id:25,question:"Коды состояния и текст статуса",answer:`
          <ul>
            <li><strong>200 OK:</strong> Запрос успешно выполнен.</li>
            <li><strong>201 Created:</strong> Запрос выполнен успешно, создан новый ресурс.</li>
            <li><strong>404 Not Found:</strong> Ресурс не найден.</li>
            <li><strong>500 Internal Server Error:</strong> На сервере произошла ошибка.</li>
          </ul>
        `,level:"INTERN"},{id:26,question:"Простые циклы с условиями на Python и Java",answer:`
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
        `,level:"INTERN"},{id:27,question:"Реализация простейших алгоритмов на Python и Java",answer:`
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
        `,level:"INTERN"},{id:28,question:"Функции работы с массивами на Python и Java",answer:`
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
        `,level:"INTERN"},{id:29,question:"Как правильно использовать функции корреляции, проверок и границ транзакций в JMeter или другом инструменте нагрузочного тестирования?",answer:`
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
        `,level:"JUNIOR"},{id:30,question:"Что такое пейсинг?",answer:`
          <p>Пейсинг — это интервал времени между выполнением последовательных действий одного и того же виртуального пользователя в нагрузочном тесте. Пейсинг контролирует интенсивность нагрузки.</p>
        `,level:"JUNIOR"},{id:31,question:"Как правильно вычислять пейсинг и количество пользователей?",answer:`
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
        `,level:"JUNIOR"},{id:32,question:"Как правильно вычислить количество виртуальных пользователей и пейсинг?",answer:`
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
        `,level:"JUNIOR"},{id:33,question:"Что такое сущность в БД?",answer:`
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
        `,level:"JUNIOR"},{id:34,question:"Как снять статистику с базы данных (PostgreSQL)?",answer:`
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
        `,level:"JUNIOR"},{id:35,question:"Что такое многопоточность в приложениях?",answer:`
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
        `,level:"JUNIOR"},{id:36,question:"Какой есть предел потоков у приложения?",answer:`
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
        `,level:"JUNIOR"},{id:37,question:"Чем отличается виртуальный пользователь(Thread) от потока внутри приложения?",answer:`
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
        `,level:"JUNIOR"},{id:38,question:"Например, у нас залогинились 1000 виртуальных пользователей одновременно, сколько будет потоков?",answer:`
          <p>Если у вас 1000 виртуальных пользователей в JMeter, это создаст 1000 потоков в самом JMeter, каждый из которых будет выполнять свои действия параллельно (например, логин).</p>
          <p>Однако на сервере количество потоков будет зависеть от его настроек. Сервер может использовать пул потоков (например, 200 потоков), и обрабатывать запросы по очереди, а не все одновременно.</p>
          <p>То есть:</p>
          <ul>
            <li>1000 виртуальных пользователей в JMeter = 1000 потоков в JMeter.</li>
            <li>Сервер может иметь меньше потоков, в зависимости от своей конфигурации.</li>
          </ul>
        `,level:"JUNIOR"},{id:39,question:"Пул коннектов это?",answer:`
          <p><strong>Пул коннектов</strong> — это механизм управления соединениями с базой данных или другим ресурсом, который позволяет многократно использовать созданные соединения. Вместо того чтобы каждый раз создавать и закрывать соединение, пул коннектов сохраняет несколько активных соединений, готовых к использованию, и предоставляет их по запросу.</p>
          <h4>Основные характеристики:</h4>
          <ul>
            <li><strong>Повторное использование:</strong> Соединения не создаются каждый раз заново, а берутся из пула.</li>
            <li><strong>Эффективность:</strong> Экономится время на создание и закрытие соединений, что улучшает производительность приложения.</li>
            <li><strong>Ограничение ресурсов:</strong> Пул управляет количеством одновременно активных соединений, чтобы не перегружать базу данных.</li>
          </ul>
          <h4>Пример:</h4>
          <p>Приложение может создать пул из 10 коннектов. Когда пользователю нужно соединение с базой данных, оно берётся из пула. После завершения работы соединение возвращается в пул для повторного использования другими пользователями.</p>
        `,level:"JUNIOR"},{id:40,question:"Что такое уровни логирования?",answer:`
          <ul>
            <li><strong>TRACE:</strong> Самый детализированный уровень.</li>
            <li><strong>DEBUG:</strong> Отладочная информация.</li>
            <li><strong>INFO:</strong> Общая информация о работе приложения.</li>
            <li><strong>WARN:</strong> Предупреждения о возможных проблемах.</li>
            <li><strong>ERROR:</strong> Ошибки, которые требуют внимания.</li>
            <li><strong>FATAL:</strong> Критические ошибки, приводящие к завершению работы приложения.</li>
          </ul>
        `,level:"JUNIOR"},{id:41,question:"Что такое парсинг логов?",answer:`
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
        `,level:"JUNIOR"},{id:42,question:"Простые запросы с помощью SELECT",answer:`
          <ul>
            <li>Получение всех строк из таблицы:</li>
            <pre><code>SELECT * FROM employees;</code></pre>
            <li>Получение конкретных столбцов:</li>
            <pre><code>SELECT first_name, last_name FROM employees;</code></pre>
            <li>Фильтрация с использованием WHERE:</li>
            <pre><code>SELECT * FROM employees WHERE age > 30;</code></pre>
          </ul>
        `,level:"JUNIOR"},{id:43,question:"Использование функций JOIN, GROUP BY, HAVING",answer:`
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
        `,level:"JUNIOR"},{id:44,question:"Что такое агрегирование функций?",answer:`
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
      `,level:"JUNIOR"},{id:45,question:"Что такое Spring Boot?",answer:`
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
      `,level:"JUNIOR"},{id:46,question:"Что такое Apache Kafka и основные принципы?",answer:`
        <p><strong>Apache Kafka</strong> — это распределённая платформа потоковой передачи сообщений, используемая для создания высокопроизводительных систем реального времени.</p>
        <p>Основные принципы работы Apache Kafka:</p>
        <ul>
          <li><strong>Тема (Topic):</strong> Логический канал для организации сообщений в Kafka.</li>
          <li><strong>Производитель (Producer):</strong> Отправляет сообщения в тему Kafka.</li>
          <li><strong>Потребитель (Consumer):</strong> Читает сообщения из темы Kafka.</li>
          <li><strong>Разделы (Partitions):</strong> Темы разделены на несколько частей для параллельной обработки.</li>
          <li><strong>Репликация и отказоустойчивость:</strong> Kafka поддерживает репликацию данных для повышения надёжности.</li>
        </ul>
      `,level:"JUNIOR"},{id:47,question:"Что такое Kubernetes и основные элементы?",answer:`
        <p><strong>Kubernetes (K8s)</strong> — это платформа для автоматизации развертывания и управления контейнеризованными приложениями.</p>
        <p>Основные элементы Kubernetes:</p>
        <ul>
          <li><strong>Кластер (Cluster):</strong> Группа серверов (узлов), на которых развернуты приложения.</li>
          <li><strong>Под (Pod):</strong> Базовая единица развертывания в Kubernetes, которая может содержать один или несколько контейнеров.</li>
          <li><strong>Узлы (Nodes):</strong> Физические или виртуальные серверы в кластере Kubernetes.</li>
          <li><strong>Service:</strong> Обеспечивает доступ к подам через стабильный сетевой адрес.</li>
          <li><strong>ReplicaSet:</strong> Гарантирует, что заданное количество подов работает в кластере в любое время.</li>
        </ul>
      `,level:"JUNIOR"},{id:48,question:"Что такое пулы данных в нагрузочном тестировании и как их использовать?",answer:`
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
      `,level:"MIDDLE"},{id:49,question:"Скрипт для сбора логов",answer:`
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
      `,level:"MIDDLE"},{id:50,question:"Как анализировать систему по количеству потоков, пулов, коннектов, времени работы GC, heap и non-heap?",answer:`
        <p><strong>1. Количество потоков (Threads):</strong> Используйте <code>jconsole</code> или <code>jstack</code> для мониторинга потоков в JVM.</p>
        <p><strong>2. Пулы потоков (Thread Pools):</strong> Анализируйте пулы потоков, чтобы избежать перегрузки.</p>
        <p><strong>3. Пулы соединений (Connection Pools):</strong> Контролируйте количество соединений к БД (например, с HikariCP).</p>
        <p><strong>4. Время работы GC (Garbage Collection):</strong> Используйте <code>jstat</code> или <code>VisualVM</code> для мониторинга.</p>
        <p><strong>5. Heap и Non-Heap память:</strong> Анализируйте состояние heap и non-heap памяти с помощью <code>jconsole</code> или <code>VisualVM</code>.</p>
      `,level:"MIDDLE"},{id:51,question:"Как выявить долгие запросы в БД?",answer:`
        <p>Мониторинг медленных запросов можно выполнять с помощью системных таблиц или включения логов медленных запросов.</p>
        <p>Пример запроса для PostgreSQL:</p>
        <pre><code>
          SELECT pid, query, state, age(now(), query_start) AS duration
          FROM pg_stat_activity
          WHERE state = 'active'
          ORDER BY duration DESC;
        </code></pre>
      `,level:"MIDDLE"},{id:52,question:"Как снять heap dump и thread dump?",answer:`
        <p><strong>1. Heap Dump:</strong> Используйте команду <code>jmap</code> для создания heap dump:</p>
        <pre><code>jmap -dump:live,format=b,file=heapdump.hprof &lt;pid&gt;</code></pre>
        <p><strong>2. Thread Dump:</strong> Используйте команду <code>jstack</code> для получения состояния потоков:</p>
        <pre><code>jstack -l &lt;pid&gt; > threaddump.txt</code></pre>
      `,level:"MIDDLE"},{id:53,question:"INSERT и UPDATE в SQL",answer:`
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
      `,level:"MIDDLE"},{id:54,question:"Как массово обновить данные в БД?",answer:`
        <p>Массовое обновление данных в базе данных можно выполнить с помощью <code>UPDATE</code>:</p>
        <pre><code>
          UPDATE employees
          SET department = 'Sales'
          WHERE department = 'Marketing';
        </code></pre>
      `,level:"MIDDLE"},{id:55,question:"Что такое индекс и как с ним работать? Как проверять индексы в БД?",answer:`
        <p><strong>Индекс</strong> — это структура данных для ускорения поиска и сортировки данных в таблице.</p>
        <p><strong>Преимущества индексов:</strong></p>
        <ul>
          <li>Улучшают производительность запросов на выборку (SELECT).</li>
        </ul>
        <p>Пример создания индекса:</p>
        <pre><code>
          CREATE INDEX idx_employee_name ON employees (first_name, last_name);
        </code></pre>
      `,level:"MIDDLE"},{id:56,question:"Что такое системные таблицы в БД?",answer:`
        <p>Системные таблицы — это таблицы, которые хранят метаинформацию о структуре базы данных и активных сессиях.</p>
        <p>Пример для PostgreSQL:</p>
        <pre><code>
          SELECT pid, usename, state, query
          FROM pg_stat_activity;
        </code></pre>
      `,level:"MIDDLE"}],zu={props:{question:Object},data(){return{likes:0,comments:[],newComment:""}},computed:{levelText(){return`Level: ${this.question.level}`},levelClass(){return{"level-intern":this.question.level==="INTERN","level-junior":this.question.level==="JUNIOR","level-middle":this.question.level==="MIDDLE"}}},methods:{goToDetail(){this.$router.push(`/questions/${this.question.id}`)},likeQuestion(){this.likes++},addComment(){this.newComment.trim()&&(this.comments.push(this.newComment.trim()),this.newComment="")}}},Yu={class:"question-text"};function Xu(e,t,n,s,r,o){return Qe(),ht("div",{onClick:t[5]||(t[5]=(...i)=>o.goToDetail&&o.goToDetail(...i)),class:"question-card"},[ne("h3",Yu,Tt(n.question.question),1),ne("p",{class:Mn([o.levelClass,"level-text"])},Tt(o.levelText),3),ne("div",{class:"like-section",onClick:t[1]||(t[1]=Rr(()=>{},["stop"]))},[ne("button",{onClick:t[0]||(t[0]=(...i)=>o.likeQuestion&&o.likeQuestion(...i)),class:"like-button"},"👍 "+Tt(r.likes)+" Like",1)]),ne("div",{class:"comments-section",onClick:t[4]||(t[4]=Rr(()=>{},["stop"]))},[t[6]||(t[6]=ne("h4",null,"Комментарии:",-1)),ne("ul",null,[(Qe(!0),ht(Te,null,Po(r.comments,(i,l)=>(Qe(),ht("li",{key:l,class:"comment-item"},Tt(i),1))),128))]),bo(ne("textarea",{"onUpdate:modelValue":t[2]||(t[2]=i=>r.newComment=i),placeholder:"Добавьте комментарий"},null,512),[[Nc,r.newComment]]),ne("button",{onClick:t[3]||(t[3]=(...i)=>o.addComment&&o.addComment(...i)),class:"add-comment-button"},"Добавить комментарий")])])}const Zu=Vn(zu,[["render",Xu],["__scopeId","data-v-9638ed63"]]),ea={components:{QuestionCard:Zu},data(){return{questions:fi,currentLevel:"ALL",selectedAction:"ALL",shuffledQuestions:[]}},computed:{filteredQuestions(){return this.selectedAction==="SHUFFLE"?this.shuffledQuestions:this.currentLevel==="ALL"?this.questions:this.questions.filter(e=>e.level===this.currentLevel)}},methods:{handleAction(){this.selectedAction==="SHUFFLE"?this.shuffleQuestions():this.filterLevel(this.selectedAction)},filterLevel(e){this.currentLevel=e},shuffleQuestions(){this.shuffledQuestions=[...this.questions].sort(()=>Math.random()-.5)}}},ta={class:"filter-section"},na={class:"question-grid"};function sa(e,t,n,s,r,o){const i=Rn("QuestionCard");return Qe(),ht("div",null,[ne("div",ta,[bo(ne("select",{"onUpdate:modelValue":t[0]||(t[0]=l=>r.selectedAction=l),id:"levelFilter",onChange:t[1]||(t[1]=(...l)=>o.handleAction&&o.handleAction(...l))},t[2]||(t[2]=[Zl('<option value="ALL" data-v-0546f048>Все уровни</option><option value="INTERN" data-v-0546f048>Intern</option><option value="JUNIOR" data-v-0546f048>Junior</option><option value="MIDDLE" data-v-0546f048>Middle</option><option value="SHUFFLE" data-v-0546f048>Перемешать вопросы</option>',5)]),544),[[Lc,r.selectedAction]])]),ne("div",na,[(Qe(!0),ht(Te,null,Po(o.filteredQuestions,l=>(Qe(),Jo(i,{key:l.id,question:l},null,8,["question"]))),128))])])}const ra=Vn(ea,[["render",sa],["__scopeId","data-v-0546f048"]]),oa={data(){return{question:null}},created(){const e=parseInt(this.$route.params.id);this.question=fi.find(t=>t.id===e)}},ia={key:0,class:"question-detail"},la={class:"question-text"},ca={class:"answer-box"},ua=["innerHTML"];function aa(e,t,n,s,r,o){const i=Rn("router-link");return r.question?(Qe(),ht("div",ia,[ne("h2",la,Tt(r.question.question),1),ne("div",ca,[ne("div",{innerHTML:r.question.answer,class:"answer-text"},null,8,ua)]),re(i,{to:"/",class:"back-button"},{default:Vt(()=>t[0]||(t[0]=[Wt("← Back to Questions")])),_:1})])):ec("",!0)}const fa=Vn(oa,[["render",aa],["__scopeId","data-v-0608972d"]]),da=[{path:"/",component:ra},{path:"/questions/:id",component:fa}],pa=Gu({history:Tu(),routes:da});kc(Jc).use(pa).mount("#app");
