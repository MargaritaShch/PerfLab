(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(o){if(o.ep)return;o.ep=!0;const r=n(o);fetch(o.href,r)}})();/**
* @vue/shared v3.5.6
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Rs(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const X={},Ot=[],ke=()=>{},gi=()=>!1,Mn=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),Ss=e=>e.startsWith("onUpdate:"),le=Object.assign,Es=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},mi=Object.prototype.hasOwnProperty,$=(e,t)=>mi.call(e,t),U=Array.isArray,Nt=e=>rn(e)==="[object Map]",Pn=e=>rn(e)==="[object Set]",Gs=e=>rn(e)==="[object Date]",H=e=>typeof e=="function",oe=e=>typeof e=="string",$e=e=>typeof e=="symbol",ee=e=>e!==null&&typeof e=="object",Bo=e=>(ee(e)||H(e))&&H(e.then)&&H(e.catch),Go=Object.prototype.toString,rn=e=>Go.call(e),vi=e=>rn(e).slice(8,-1),Ko=e=>rn(e)==="[object Object]",Is=e=>oe(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Vt=Rs(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Cn=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},yi=/-(\w)/g,xe=Cn(e=>e.replace(yi,(t,n)=>n?n.toUpperCase():"")),_i=/\B([A-Z])/g,_t=Cn(e=>e.replace(_i,"-$1").toLowerCase()),qn=Cn(e=>e.charAt(0).toUpperCase()+e.slice(1)),Gn=Cn(e=>e?`on${qn(e)}`:""),ct=(e,t)=>!Object.is(e,t),vn=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},Wo=(e,t,n,s=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:s,value:n})},En=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Ks;const Qo=()=>Ks||(Ks=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ws(e){if(U(e)){const t={};for(let n=0;n<e.length;n++){const s=e[n],o=oe(s)?Ei(s):ws(s);if(o)for(const r in o)t[r]=o[r]}return t}else if(oe(e)||ee(e))return e}const bi=/;(?![^(]*\))/g,Ri=/:([^]+)/,Si=/\/\*[^]*?\*\//g;function Ei(e){const t={};return e.replace(Si,"").split(bi).forEach(n=>{if(n){const s=n.split(Ri);s.length>1&&(t[s[0].trim()]=s[1].trim())}}),t}function Jn(e){let t="";if(oe(e))t=e;else if(U(e))for(let n=0;n<e.length;n++){const s=Jn(e[n]);s&&(t+=s+" ")}else if(ee(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Ii="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",wi=Rs(Ii);function zo(e){return!!e||e===""}function Ti(e,t){if(e.length!==t.length)return!1;let n=!0;for(let s=0;n&&s<e.length;s++)n=An(e[s],t[s]);return n}function An(e,t){if(e===t)return!0;let n=Gs(e),s=Gs(t);if(n||s)return n&&s?e.getTime()===t.getTime():!1;if(n=$e(e),s=$e(t),n||s)return e===t;if(n=U(e),s=U(t),n||s)return n&&s?Ti(e,t):!1;if(n=ee(e),s=ee(t),n||s){if(!n||!s)return!1;const o=Object.keys(e).length,r=Object.keys(t).length;if(o!==r)return!1;for(const i in e){const l=e.hasOwnProperty(i),c=t.hasOwnProperty(i);if(l&&!c||!l&&c||!An(e[i],t[i]))return!1}}return String(e)===String(t)}function Oi(e,t){return e.findIndex(n=>An(n,t))}const Yo=e=>!!(e&&e.__v_isRef===!0),Tt=e=>oe(e)?e:e==null?"":U(e)||ee(e)&&(e.toString===Go||!H(e.toString))?Yo(e)?Tt(e.value):JSON.stringify(e,Xo,2):String(e),Xo=(e,t)=>Yo(t)?Xo(e,t.value):Nt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[s,o],r)=>(n[Kn(s,r)+" =>"]=o,n),{})}:Pn(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>Kn(n))}:$e(t)?Kn(t):ee(t)&&!U(t)&&!Ko(t)?String(t):t,Kn=(e,t="")=>{var n;return $e(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.5.6
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let be;class Ni{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=be,!t&&be&&(this.index=(be.scopes||(be.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].pause();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].resume();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].resume()}}run(t){if(this._active){const n=be;try{return be=this,t()}finally{be=n}}}on(){be=this}off(){be=this.parent}stop(t){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const o=this.parent.scopes.pop();o&&o!==this&&(this.parent.scopes[this.index]=o,o.index=this.index)}this.parent=void 0,this._active=!1}}}function xi(){return be}let z;const Wn=new WeakSet;class Zo{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,be&&be.active&&be.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Wn.has(this)&&(Wn.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||tr(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Ws(this),nr(this);const t=z,n=Ne;z=this,Ne=!0;try{return this.fn()}finally{sr(this),z=t,Ne=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Ns(t);this.deps=this.depsTail=void 0,Ws(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Wn.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){rs(this)&&this.run()}get dirty(){return rs(this)}}let er=0,Bt;function tr(e){e.flags|=8,e.next=Bt,Bt=e}function Ts(){er++}function Os(){if(--er>0)return;let e;for(;Bt;){let t=Bt;for(Bt=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(s){e||(e=s)}t=n}}if(e)throw e}function nr(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function sr(e){let t,n=e.depsTail,s=n;for(;s;){const o=s.prevDep;s.version===-1?(s===n&&(n=o),Ns(s),Mi(s)):t=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=o}e.deps=t,e.depsTail=n}function rs(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(or(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function or(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Yt))return;e.globalVersion=Yt;const t=e.dep;if(e.flags|=2,t.version>0&&!e.isSSR&&e.deps&&!rs(e)){e.flags&=-3;return}const n=z,s=Ne;z=e,Ne=!0;try{nr(e);const o=e.fn(e._value);(t.version===0||ct(o,e._value))&&(e._value=o,t.version++)}catch(o){throw t.version++,o}finally{z=n,Ne=s,sr(e),e.flags&=-3}}function Ns(e){const{dep:t,prevSub:n,nextSub:s}=e;if(n&&(n.nextSub=s,e.prevSub=void 0),s&&(s.prevSub=n,e.nextSub=void 0),t.subs===e&&(t.subs=n),!t.subs&&t.computed){t.computed.flags&=-5;for(let o=t.computed.deps;o;o=o.nextDep)Ns(o)}}function Mi(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let Ne=!0;const rr=[];function ut(){rr.push(Ne),Ne=!1}function at(){const e=rr.pop();Ne=e===void 0?!0:e}function Ws(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=z;z=void 0;try{t()}finally{z=n}}}let Yt=0;class Pi{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class xs{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0}track(t){if(!z||!Ne||z===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==z)n=this.activeLink=new Pi(z,this),z.deps?(n.prevDep=z.depsTail,z.depsTail.nextDep=n,z.depsTail=n):z.deps=z.depsTail=n,z.flags&4&&ir(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=z.depsTail,n.nextDep=void 0,z.depsTail.nextDep=n,z.depsTail=n,z.deps===n&&(z.deps=s)}return n}trigger(t){this.version++,Yt++,this.notify(t)}notify(t){Ts();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Os()}}}function ir(e){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let s=t.deps;s;s=s.nextDep)ir(s)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}const is=new WeakMap,mt=Symbol(""),ls=Symbol(""),Xt=Symbol("");function de(e,t,n){if(Ne&&z){let s=is.get(e);s||is.set(e,s=new Map);let o=s.get(n);o||s.set(n,o=new xs),o.track()}}function ze(e,t,n,s,o,r){const i=is.get(e);if(!i){Yt++;return}const l=c=>{c&&c.trigger()};if(Ts(),t==="clear")i.forEach(l);else{const c=U(e),p=c&&Is(n);if(c&&n==="length"){const f=Number(s);i.forEach((d,h)=>{(h==="length"||h===Xt||!$e(h)&&h>=f)&&l(d)})}else switch(n!==void 0&&l(i.get(n)),p&&l(i.get(Xt)),t){case"add":c?p&&l(i.get("length")):(l(i.get(mt)),Nt(e)&&l(i.get(ls)));break;case"delete":c||(l(i.get(mt)),Nt(e)&&l(i.get(ls)));break;case"set":Nt(e)&&l(i.get(mt));break}}Os()}function Et(e){const t=V(e);return t===e?t:(de(t,"iterate",Xt),we(e)?t:t.map(ue))}function Dn(e){return de(e=V(e),"iterate",Xt),e}const Ci={__proto__:null,[Symbol.iterator](){return Qn(this,Symbol.iterator,ue)},concat(...e){return Et(this).concat(...e.map(t=>U(t)?Et(t):t))},entries(){return Qn(this,"entries",e=>(e[1]=ue(e[1]),e))},every(e,t){return Ge(this,"every",e,t,void 0,arguments)},filter(e,t){return Ge(this,"filter",e,t,n=>n.map(ue),arguments)},find(e,t){return Ge(this,"find",e,t,ue,arguments)},findIndex(e,t){return Ge(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return Ge(this,"findLast",e,t,ue,arguments)},findLastIndex(e,t){return Ge(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return Ge(this,"forEach",e,t,void 0,arguments)},includes(...e){return zn(this,"includes",e)},indexOf(...e){return zn(this,"indexOf",e)},join(e){return Et(this).join(e)},lastIndexOf(...e){return zn(this,"lastIndexOf",e)},map(e,t){return Ge(this,"map",e,t,void 0,arguments)},pop(){return Ht(this,"pop")},push(...e){return Ht(this,"push",e)},reduce(e,...t){return Qs(this,"reduce",e,t)},reduceRight(e,...t){return Qs(this,"reduceRight",e,t)},shift(){return Ht(this,"shift")},some(e,t){return Ge(this,"some",e,t,void 0,arguments)},splice(...e){return Ht(this,"splice",e)},toReversed(){return Et(this).toReversed()},toSorted(e){return Et(this).toSorted(e)},toSpliced(...e){return Et(this).toSpliced(...e)},unshift(...e){return Ht(this,"unshift",e)},values(){return Qn(this,"values",ue)}};function Qn(e,t,n){const s=Dn(e),o=s[t]();return s!==e&&!we(e)&&(o._next=o.next,o.next=()=>{const r=o._next();return r.value&&(r.value=n(r.value)),r}),o}const qi=Array.prototype;function Ge(e,t,n,s,o,r){const i=Dn(e),l=i!==e&&!we(e),c=i[t];if(c!==qi[t]){const d=c.apply(e,r);return l?ue(d):d}let p=n;i!==e&&(l?p=function(d,h){return n.call(this,ue(d),h,e)}:n.length>2&&(p=function(d,h){return n.call(this,d,h,e)}));const f=c.call(i,p,s);return l&&o?o(f):f}function Qs(e,t,n,s){const o=Dn(e);let r=n;return o!==e&&(we(e)?n.length>3&&(r=function(i,l,c){return n.call(this,i,l,c,e)}):r=function(i,l,c){return n.call(this,i,ue(l),c,e)}),o[t](r,...s)}function zn(e,t,n){const s=V(e);de(s,"iterate",Xt);const o=s[t](...n);return(o===-1||o===!1)&&qs(n[0])?(n[0]=V(n[0]),s[t](...n)):o}function Ht(e,t,n=[]){ut(),Ts();const s=V(e)[t].apply(e,n);return Os(),at(),s}const Ji=Rs("__proto__,__v_isRef,__isVue"),lr=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter($e));function Ai(e){$e(e)||(e=String(e));const t=V(this);return de(t,"has",e),t.hasOwnProperty(e)}class cr{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,s){const o=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!o;if(n==="__v_isReadonly")return o;if(n==="__v_isShallow")return r;if(n==="__v_raw")return s===(o?r?Wi:dr:r?fr:ar).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(s)?t:void 0;const i=U(t);if(!o){let c;if(i&&(c=Ci[n]))return c;if(n==="hasOwnProperty")return Ai}const l=Reflect.get(t,n,fe(t)?t:s);return($e(n)?lr.has(n):Ji(n))||(o||de(t,"get",n),r)?l:fe(l)?i&&Is(n)?l:l.value:ee(l)?o?hr(l):Ln(l):l}}class ur extends cr{constructor(t=!1){super(!1,t)}set(t,n,s,o){let r=t[n];if(!this._isShallow){const c=vt(r);if(!we(s)&&!vt(s)&&(r=V(r),s=V(s)),!U(t)&&fe(r)&&!fe(s))return c?!1:(r.value=s,!0)}const i=U(t)&&Is(n)?Number(n)<t.length:$(t,n),l=Reflect.set(t,n,s,fe(t)?t:o);return t===V(o)&&(i?ct(s,r)&&ze(t,"set",n,s):ze(t,"add",n,s)),l}deleteProperty(t,n){const s=$(t,n);t[n];const o=Reflect.deleteProperty(t,n);return o&&s&&ze(t,"delete",n,void 0),o}has(t,n){const s=Reflect.has(t,n);return(!$e(n)||!lr.has(n))&&de(t,"has",n),s}ownKeys(t){return de(t,"iterate",U(t)?"length":mt),Reflect.ownKeys(t)}}class Di extends cr{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const Ui=new ur,Li=new Di,Hi=new ur(!0);const Ms=e=>e,Un=e=>Reflect.getPrototypeOf(e);function fn(e,t,n=!1,s=!1){e=e.__v_raw;const o=V(e),r=V(t);n||(ct(t,r)&&de(o,"get",t),de(o,"get",r));const{has:i}=Un(o),l=s?Ms:n?Js:ue;if(i.call(o,t))return l(e.get(t));if(i.call(o,r))return l(e.get(r));e!==o&&e.get(t)}function dn(e,t=!1){const n=this.__v_raw,s=V(n),o=V(e);return t||(ct(e,o)&&de(s,"has",e),de(s,"has",o)),e===o?n.has(e):n.has(e)||n.has(o)}function pn(e,t=!1){return e=e.__v_raw,!t&&de(V(e),"iterate",mt),Reflect.get(e,"size",e)}function zs(e,t=!1){!t&&!we(e)&&!vt(e)&&(e=V(e));const n=V(this);return Un(n).has.call(n,e)||(n.add(e),ze(n,"add",e,e)),this}function Ys(e,t,n=!1){!n&&!we(t)&&!vt(t)&&(t=V(t));const s=V(this),{has:o,get:r}=Un(s);let i=o.call(s,e);i||(e=V(e),i=o.call(s,e));const l=r.call(s,e);return s.set(e,t),i?ct(t,l)&&ze(s,"set",e,t):ze(s,"add",e,t),this}function Xs(e){const t=V(this),{has:n,get:s}=Un(t);let o=n.call(t,e);o||(e=V(e),o=n.call(t,e)),s&&s.call(t,e);const r=t.delete(e);return o&&ze(t,"delete",e,void 0),r}function Zs(){const e=V(this),t=e.size!==0,n=e.clear();return t&&ze(e,"clear",void 0,void 0),n}function hn(e,t){return function(s,o){const r=this,i=r.__v_raw,l=V(i),c=t?Ms:e?Js:ue;return!e&&de(l,"iterate",mt),i.forEach((p,f)=>s.call(o,c(p),c(f),r))}}function gn(e,t,n){return function(...s){const o=this.__v_raw,r=V(o),i=Nt(r),l=e==="entries"||e===Symbol.iterator&&i,c=e==="keys"&&i,p=o[e](...s),f=n?Ms:t?Js:ue;return!t&&de(r,"iterate",c?ls:mt),{next(){const{value:d,done:h}=p.next();return h?{value:d,done:h}:{value:l?[f(d[0]),f(d[1])]:f(d),done:h}},[Symbol.iterator](){return this}}}}function nt(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function Fi(){const e={get(r){return fn(this,r)},get size(){return pn(this)},has:dn,add:zs,set:Ys,delete:Xs,clear:Zs,forEach:hn(!1,!1)},t={get(r){return fn(this,r,!1,!0)},get size(){return pn(this)},has:dn,add(r){return zs.call(this,r,!0)},set(r,i){return Ys.call(this,r,i,!0)},delete:Xs,clear:Zs,forEach:hn(!1,!0)},n={get(r){return fn(this,r,!0)},get size(){return pn(this,!0)},has(r){return dn.call(this,r,!0)},add:nt("add"),set:nt("set"),delete:nt("delete"),clear:nt("clear"),forEach:hn(!0,!1)},s={get(r){return fn(this,r,!0,!0)},get size(){return pn(this,!0)},has(r){return dn.call(this,r,!0)},add:nt("add"),set:nt("set"),delete:nt("delete"),clear:nt("clear"),forEach:hn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{e[r]=gn(r,!1,!1),n[r]=gn(r,!0,!1),t[r]=gn(r,!1,!0),s[r]=gn(r,!0,!0)}),[e,n,t,s]}const[ki,ji,$i,Vi]=Fi();function Ps(e,t){const n=t?e?Vi:$i:e?ji:ki;return(s,o,r)=>o==="__v_isReactive"?!e:o==="__v_isReadonly"?e:o==="__v_raw"?s:Reflect.get($(n,o)&&o in s?n:s,o,r)}const Bi={get:Ps(!1,!1)},Gi={get:Ps(!1,!0)},Ki={get:Ps(!0,!1)};const ar=new WeakMap,fr=new WeakMap,dr=new WeakMap,Wi=new WeakMap;function Qi(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function zi(e){return e.__v_skip||!Object.isExtensible(e)?0:Qi(vi(e))}function Ln(e){return vt(e)?e:Cs(e,!1,Ui,Bi,ar)}function pr(e){return Cs(e,!1,Hi,Gi,fr)}function hr(e){return Cs(e,!0,Li,Ki,dr)}function Cs(e,t,n,s,o){if(!ee(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const r=o.get(e);if(r)return r;const i=zi(e);if(i===0)return e;const l=new Proxy(e,i===2?s:n);return o.set(e,l),l}function xt(e){return vt(e)?xt(e.__v_raw):!!(e&&e.__v_isReactive)}function vt(e){return!!(e&&e.__v_isReadonly)}function we(e){return!!(e&&e.__v_isShallow)}function qs(e){return e?!!e.__v_raw:!1}function V(e){const t=e&&e.__v_raw;return t?V(t):e}function Yi(e){return!$(e,"__v_skip")&&Object.isExtensible(e)&&Wo(e,"__v_skip",!0),e}const ue=e=>ee(e)?Ln(e):e,Js=e=>ee(e)?hr(e):e;function fe(e){return e?e.__v_isRef===!0:!1}function Xi(e){return gr(e,!1)}function Zi(e){return gr(e,!0)}function gr(e,t){return fe(e)?e:new el(e,t)}class el{constructor(t,n){this.dep=new xs,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:V(t),this._value=n?t:ue(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,s=this.__v_isShallow||we(t)||vt(t);t=s?t:V(t),ct(t,n)&&(this._rawValue=t,this._value=s?t:ue(t),this.dep.trigger())}}function Mt(e){return fe(e)?e.value:e}const tl={get:(e,t,n)=>t==="__v_raw"?e:Mt(Reflect.get(e,t,n)),set:(e,t,n,s)=>{const o=e[t];return fe(o)&&!fe(n)?(o.value=n,!0):Reflect.set(e,t,n,s)}};function mr(e){return xt(e)?e:new Proxy(e,tl)}class nl{constructor(t,n,s){this.fn=t,this.setter=n,this._value=void 0,this.dep=new xs(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Yt-1,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&z!==this)return tr(this),!0}get value(){const t=this.dep.track();return or(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function sl(e,t,n=!1){let s,o;return H(e)?s=e:(s=e.get,o=e.set),new nl(s,o,n)}const mn={},In=new WeakMap;let ht;function ol(e,t=!1,n=ht){if(n){let s=In.get(n);s||In.set(n,s=[]),s.push(e)}}function rl(e,t,n=X){const{immediate:s,deep:o,once:r,scheduler:i,augmentJob:l,call:c}=n,p=M=>o?M:we(M)||o===!1||o===0?Qe(M,1):Qe(M);let f,d,h,m,N=!1,x=!1;if(fe(e)?(d=()=>e.value,N=we(e)):xt(e)?(d=()=>p(e),N=!0):U(e)?(x=!0,N=e.some(M=>xt(M)||we(M)),d=()=>e.map(M=>{if(fe(M))return M.value;if(xt(M))return p(M);if(H(M))return c?c(M,2):M()})):H(e)?t?d=c?()=>c(e,2):e:d=()=>{if(h){ut();try{h()}finally{at()}}const M=ht;ht=f;try{return c?c(e,3,[m]):e(m)}finally{ht=M}}:d=ke,t&&o){const M=d,Q=o===!0?1/0:o;d=()=>Qe(M(),Q)}const F=xi(),J=()=>{f.stop(),F&&Es(F.effects,f)};if(r&&t){const M=t;t=(...Q)=>{M(...Q),J()}}let q=x?new Array(e.length).fill(mn):mn;const A=M=>{if(!(!(f.flags&1)||!f.dirty&&!M))if(t){const Q=f.run();if(o||N||(x?Q.some((ie,ne)=>ct(ie,q[ne])):ct(Q,q))){h&&h();const ie=ht;ht=f;try{const ne=[Q,q===mn?void 0:x&&q[0]===mn?[]:q,m];c?c(t,3,ne):t(...ne),q=Q}finally{ht=ie}}}else f.run()};return l&&l(A),f=new Zo(d),f.scheduler=i?()=>i(A,!1):A,m=M=>ol(M,!1,f),h=f.onStop=()=>{const M=In.get(f);if(M){if(c)c(M,4);else for(const Q of M)Q();In.delete(f)}},t?s?A(!0):q=f.run():i?i(A.bind(null,!0),!0):f.run(),J.pause=f.pause.bind(f),J.resume=f.resume.bind(f),J.stop=J,J}function Qe(e,t=1/0,n){if(t<=0||!ee(e)||e.__v_skip||(n=n||new Set,n.has(e)))return e;if(n.add(e),t--,fe(e))Qe(e.value,t,n);else if(U(e))for(let s=0;s<e.length;s++)Qe(e[s],t,n);else if(Pn(e)||Nt(e))e.forEach(s=>{Qe(s,t,n)});else if(Ko(e)){for(const s in e)Qe(e[s],t,n);for(const s of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,s)&&Qe(e[s],t,n)}return e}/**
* @vue/runtime-core v3.5.6
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ln(e,t,n,s){try{return s?e(...s):e()}catch(o){Hn(o,t,n)}}function Ve(e,t,n,s){if(H(e)){const o=ln(e,t,n,s);return o&&Bo(o)&&o.catch(r=>{Hn(r,t,n)}),o}if(U(e)){const o=[];for(let r=0;r<e.length;r++)o.push(Ve(e[r],t,n,s));return o}}function Hn(e,t,n,s=!0){const o=t?t.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:i}=t&&t.appContext.config||X;if(t){let l=t.parent;const c=t.proxy,p=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const f=l.ec;if(f){for(let d=0;d<f.length;d++)if(f[d](e,c,p)===!1)return}l=l.parent}if(r){ut(),ln(r,null,10,[e,c,p]),at();return}}il(e,n,o,s,i)}function il(e,t,n,s=!0,o=!1){if(o)throw e;console.error(e)}let Zt=!1,cs=!1;const he=[];let Ue=0;const Pt=[];let ot=null,It=0;const vr=Promise.resolve();let As=null;function Ds(e){const t=As||vr;return e?t.then(this?e.bind(this):e):t}function ll(e){let t=Zt?Ue+1:0,n=he.length;for(;t<n;){const s=t+n>>>1,o=he[s],r=en(o);r<e||r===e&&o.flags&2?t=s+1:n=s}return t}function Us(e){if(!(e.flags&1)){const t=en(e),n=he[he.length-1];!n||!(e.flags&2)&&t>=en(n)?he.push(e):he.splice(ll(t),0,e),e.flags|=1,yr()}}function yr(){!Zt&&!cs&&(cs=!0,As=vr.then(br))}function cl(e){U(e)?Pt.push(...e):ot&&e.id===-1?ot.splice(It+1,0,e):e.flags&1||(Pt.push(e),e.flags|=1),yr()}function eo(e,t,n=Zt?Ue+1:0){for(;n<he.length;n++){const s=he[n];if(s&&s.flags&2){if(e&&s.id!==e.uid)continue;he.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&=-2}}}function _r(e){if(Pt.length){const t=[...new Set(Pt)].sort((n,s)=>en(n)-en(s));if(Pt.length=0,ot){ot.push(...t);return}for(ot=t,It=0;It<ot.length;It++){const n=ot[It];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}ot=null,It=0}}const en=e=>e.id==null?e.flags&2?-1:1/0:e.id;function br(e){cs=!1,Zt=!0;try{for(Ue=0;Ue<he.length;Ue++){const t=he[Ue];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),ln(t,t.i,t.i?15:14),t.flags&=-2)}}finally{for(;Ue<he.length;Ue++){const t=he[Ue];t&&(t.flags&=-2)}Ue=0,he.length=0,_r(),Zt=!1,As=null,(he.length||Pt.length)&&br()}}let Re=null,Rr=null;function wn(e){const t=Re;return Re=e,Rr=e&&e.type.__scopeId||null,t}function He(e,t=Re,n){if(!t||e._n)return e;const s=(...o)=>{s._d&&uo(-1);const r=wn(t);let i;try{i=e(...o)}finally{wn(r),s._d&&uo(1)}return i};return s._n=!0,s._c=!0,s._d=!0,s}function Sr(e,t){if(Re===null)return e;const n=Vn(Re),s=e.dirs||(e.dirs=[]);for(let o=0;o<t.length;o++){let[r,i,l,c=X]=t[o];r&&(H(r)&&(r={mounted:r,updated:r}),r.deep&&Qe(i),s.push({dir:r,instance:n,value:i,oldValue:void 0,arg:l,modifiers:c}))}return e}function dt(e,t,n,s){const o=e.dirs,r=t&&t.dirs;for(let i=0;i<o.length;i++){const l=o[i];r&&(l.oldValue=r[i].value);let c=l.dir[s];c&&(ut(),Ve(c,n,8,[e.el,l,e,t]),at())}}const ul=Symbol("_vte"),al=e=>e.__isTeleport;function Ls(e,t){e.shapeFlag&6&&e.component?(e.transition=t,Ls(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}/*! #__NO_SIDE_EFFECTS__ */function Er(e,t){return H(e)?le({name:e.name},t,{setup:e}):e}function Ir(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function us(e,t,n,s,o=!1){if(U(e)){e.forEach((N,x)=>us(N,t&&(U(t)?t[x]:t),n,s,o));return}if(Gt(s)&&!o)return;const r=s.shapeFlag&4?Vn(s.component):s.el,i=o?null:r,{i:l,r:c}=e,p=t&&t.r,f=l.refs===X?l.refs={}:l.refs,d=l.setupState,h=V(d),m=d===X?()=>!1:N=>$(h,N);if(p!=null&&p!==c&&(oe(p)?(f[p]=null,m(p)&&(d[p]=null)):fe(p)&&(p.value=null)),H(c))ln(c,l,12,[i,f]);else{const N=oe(c),x=fe(c);if(N||x){const F=()=>{if(e.f){const J=N?m(c)?d[c]:f[c]:c.value;o?U(J)&&Es(J,r):U(J)?J.includes(r)||J.push(r):N?(f[c]=[r],m(c)&&(d[c]=f[c])):(c.value=[r],e.k&&(f[e.k]=c.value))}else N?(f[c]=i,m(c)&&(d[c]=i)):x&&(c.value=i,e.k&&(f[e.k]=i))};i?(F.id=-1,_e(F,n)):F()}}}const Gt=e=>!!e.type.__asyncLoader,wr=e=>e.type.__isKeepAlive;function fl(e,t){Tr(e,"a",t)}function dl(e,t){Tr(e,"da",t)}function Tr(e,t,n=ae){const s=e.__wdc||(e.__wdc=()=>{let o=n;for(;o;){if(o.isDeactivated)return;o=o.parent}return e()});if(Fn(t,s,n),n){let o=n.parent;for(;o&&o.parent;)wr(o.parent.vnode)&&pl(s,t,n,o),o=o.parent}}function pl(e,t,n,s){const o=Fn(t,e,s,!0);Or(()=>{Es(s[t],o)},n)}function Fn(e,t,n=ae,s=!1){if(n){const o=n[e]||(n[e]=[]),r=t.__weh||(t.__weh=(...i)=>{ut();const l=cn(n),c=Ve(t,n,e,i);return l(),at(),c});return s?o.unshift(r):o.push(r),r}}const Xe=e=>(t,n=ae)=>{(!$n||e==="sp")&&Fn(e,(...s)=>t(...s),n)},hl=Xe("bm"),gl=Xe("m"),ml=Xe("bu"),vl=Xe("u"),yl=Xe("bum"),Or=Xe("um"),_l=Xe("sp"),bl=Xe("rtg"),Rl=Xe("rtc");function Sl(e,t=ae){Fn("ec",e,t)}const Nr="components";function tn(e,t){return Il(Nr,e,!0,t)||e}const El=Symbol.for("v-ndc");function Il(e,t,n=!0,s=!1){const o=Re||ae;if(o){const r=o.type;if(e===Nr){const l=dc(r,!1);if(l&&(l===t||l===xe(t)||l===qn(xe(t))))return r}const i=to(o[e]||r[e],t)||to(o.appContext[e],t);return!i&&s?r:i}}function to(e,t){return e&&(e[t]||e[xe(t)]||e[qn(xe(t))])}function xr(e,t,n,s){let o;const r=n,i=U(e);if(i||oe(e)){const l=i&&xt(e);let c=!1;l&&(c=!we(e),e=Dn(e)),o=new Array(e.length);for(let p=0,f=e.length;p<f;p++)o[p]=t(c?ue(e[p]):e[p],p,void 0,r)}else if(typeof e=="number"){o=new Array(e);for(let l=0;l<e;l++)o[l]=t(l+1,l,void 0,r)}else if(ee(e))if(e[Symbol.iterator])o=Array.from(e,(l,c)=>t(l,c,void 0,r));else{const l=Object.keys(e);o=new Array(l.length);for(let c=0,p=l.length;c<p;c++){const f=l[c];o[c]=t(e[f],f,c,r)}}else o=[];return o}const as=e=>e?zr(e)?Vn(e):as(e.parent):null,Kt=le(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>as(e.parent),$root:e=>as(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Hs(e),$forceUpdate:e=>e.f||(e.f=()=>{Us(e.update)}),$nextTick:e=>e.n||(e.n=Ds.bind(e.proxy)),$watch:e=>Bl.bind(e)}),Yn=(e,t)=>e!==X&&!e.__isScriptSetup&&$(e,t),wl={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:s,data:o,props:r,accessCache:i,type:l,appContext:c}=e;let p;if(t[0]!=="$"){const m=i[t];if(m!==void 0)switch(m){case 1:return s[t];case 2:return o[t];case 4:return n[t];case 3:return r[t]}else{if(Yn(s,t))return i[t]=1,s[t];if(o!==X&&$(o,t))return i[t]=2,o[t];if((p=e.propsOptions[0])&&$(p,t))return i[t]=3,r[t];if(n!==X&&$(n,t))return i[t]=4,n[t];fs&&(i[t]=0)}}const f=Kt[t];let d,h;if(f)return t==="$attrs"&&de(e.attrs,"get",""),f(e);if((d=l.__cssModules)&&(d=d[t]))return d;if(n!==X&&$(n,t))return i[t]=4,n[t];if(h=c.config.globalProperties,$(h,t))return h[t]},set({_:e},t,n){const{data:s,setupState:o,ctx:r}=e;return Yn(o,t)?(o[t]=n,!0):s!==X&&$(s,t)?(s[t]=n,!0):$(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(r[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:s,appContext:o,propsOptions:r}},i){let l;return!!n[i]||e!==X&&$(e,i)||Yn(t,i)||(l=r[0])&&$(l,i)||$(s,i)||$(Kt,i)||$(o.config.globalProperties,i)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:$(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function no(e){return U(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let fs=!0;function Tl(e){const t=Hs(e),n=e.proxy,s=e.ctx;fs=!1,t.beforeCreate&&so(t.beforeCreate,e,"bc");const{data:o,computed:r,methods:i,watch:l,provide:c,inject:p,created:f,beforeMount:d,mounted:h,beforeUpdate:m,updated:N,activated:x,deactivated:F,beforeDestroy:J,beforeUnmount:q,destroyed:A,unmounted:M,render:Q,renderTracked:ie,renderTriggered:ne,errorCaptured:Pe,serverPrefetch:Ze,expose:Ce,inheritAttrs:et,components:ft,directives:qe,filters:Ut}=t;if(p&&Ol(p,s,null),i)for(const W in i){const j=i[W];H(j)&&(s[W]=j.bind(n))}if(o){const W=o.call(n,n);ee(W)&&(e.data=Ln(W))}if(fs=!0,r)for(const W in r){const j=r[W],Be=H(j)?j.bind(n,n):H(j.get)?j.get.bind(n,n):ke,tt=!H(j)&&H(j.set)?j.set.bind(n):ke,Je=Oe({get:Be,set:tt});Object.defineProperty(s,W,{enumerable:!0,configurable:!0,get:()=>Je.value,set:ge=>Je.value=ge})}if(l)for(const W in l)Mr(l[W],s,n,W);if(c){const W=H(c)?c.call(n):c;Reflect.ownKeys(W).forEach(j=>{yn(j,W[j])})}f&&so(f,e,"c");function re(W,j){U(j)?j.forEach(Be=>W(Be.bind(n))):j&&W(j.bind(n))}if(re(hl,d),re(gl,h),re(ml,m),re(vl,N),re(fl,x),re(dl,F),re(Sl,Pe),re(Rl,ie),re(bl,ne),re(yl,q),re(Or,M),re(_l,Ze),U(Ce))if(Ce.length){const W=e.exposed||(e.exposed={});Ce.forEach(j=>{Object.defineProperty(W,j,{get:()=>n[j],set:Be=>n[j]=Be})})}else e.exposed||(e.exposed={});Q&&e.render===ke&&(e.render=Q),et!=null&&(e.inheritAttrs=et),ft&&(e.components=ft),qe&&(e.directives=qe),Ze&&Ir(e)}function Ol(e,t,n=ke){U(e)&&(e=ds(e));for(const s in e){const o=e[s];let r;ee(o)?"default"in o?r=Ye(o.from||s,o.default,!0):r=Ye(o.from||s):r=Ye(o),fe(r)?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:i=>r.value=i}):t[s]=r}}function so(e,t,n){Ve(U(e)?e.map(s=>s.bind(t.proxy)):e.bind(t.proxy),t,n)}function Mr(e,t,n,s){let o=s.includes(".")?Vr(n,s):()=>n[s];if(oe(e)){const r=t[e];H(r)&&_n(o,r)}else if(H(e))_n(o,e.bind(n));else if(ee(e))if(U(e))e.forEach(r=>Mr(r,t,n,s));else{const r=H(e.handler)?e.handler.bind(n):t[e.handler];H(r)&&_n(o,r,e)}}function Hs(e){const t=e.type,{mixins:n,extends:s}=t,{mixins:o,optionsCache:r,config:{optionMergeStrategies:i}}=e.appContext,l=r.get(t);let c;return l?c=l:!o.length&&!n&&!s?c=t:(c={},o.length&&o.forEach(p=>Tn(c,p,i,!0)),Tn(c,t,i)),ee(t)&&r.set(t,c),c}function Tn(e,t,n,s=!1){const{mixins:o,extends:r}=t;r&&Tn(e,r,n,!0),o&&o.forEach(i=>Tn(e,i,n,!0));for(const i in t)if(!(s&&i==="expose")){const l=Nl[i]||n&&n[i];e[i]=l?l(e[i],t[i]):t[i]}return e}const Nl={data:oo,props:ro,emits:ro,methods:$t,computed:$t,beforeCreate:pe,created:pe,beforeMount:pe,mounted:pe,beforeUpdate:pe,updated:pe,beforeDestroy:pe,beforeUnmount:pe,destroyed:pe,unmounted:pe,activated:pe,deactivated:pe,errorCaptured:pe,serverPrefetch:pe,components:$t,directives:$t,watch:Ml,provide:oo,inject:xl};function oo(e,t){return t?e?function(){return le(H(e)?e.call(this,this):e,H(t)?t.call(this,this):t)}:t:e}function xl(e,t){return $t(ds(e),ds(t))}function ds(e){if(U(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function pe(e,t){return e?[...new Set([].concat(e,t))]:t}function $t(e,t){return e?le(Object.create(null),e,t):t}function ro(e,t){return e?U(e)&&U(t)?[...new Set([...e,...t])]:le(Object.create(null),no(e),no(t??{})):t}function Ml(e,t){if(!e)return t;if(!t)return e;const n=le(Object.create(null),e);for(const s in t)n[s]=pe(e[s],t[s]);return n}function Pr(){return{app:null,config:{isNativeTag:gi,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Pl=0;function Cl(e,t){return function(s,o=null){H(s)||(s=le({},s)),o!=null&&!ee(o)&&(o=null);const r=Pr(),i=new WeakSet,l=[];let c=!1;const p=r.app={_uid:Pl++,_component:s,_props:o,_container:null,_context:r,_instance:null,version:hc,get config(){return r.config},set config(f){},use(f,...d){return i.has(f)||(f&&H(f.install)?(i.add(f),f.install(p,...d)):H(f)&&(i.add(f),f(p,...d))),p},mixin(f){return r.mixins.includes(f)||r.mixins.push(f),p},component(f,d){return d?(r.components[f]=d,p):r.components[f]},directive(f,d){return d?(r.directives[f]=d,p):r.directives[f]},mount(f,d,h){if(!c){const m=p._ceVNode||te(s,o);return m.appContext=r,h===!0?h="svg":h===!1&&(h=void 0),d&&t?t(m,f):e(m,f,h),c=!0,p._container=f,f.__vue_app__=p,Vn(m.component)}},onUnmount(f){l.push(f)},unmount(){c&&(Ve(l,p._instance,16),e(null,p._container),delete p._container.__vue_app__)},provide(f,d){return r.provides[f]=d,p},runWithContext(f){const d=Ct;Ct=p;try{return f()}finally{Ct=d}}};return p}}let Ct=null;function yn(e,t){if(ae){let n=ae.provides;const s=ae.parent&&ae.parent.provides;s===n&&(n=ae.provides=Object.create(s)),n[e]=t}}function Ye(e,t,n=!1){const s=ae||Re;if(s||Ct){const o=Ct?Ct._context.provides:s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(o&&e in o)return o[e];if(arguments.length>1)return n&&H(t)?t.call(s&&s.proxy):t}}const Cr={},qr=()=>Object.create(Cr),Jr=e=>Object.getPrototypeOf(e)===Cr;function ql(e,t,n,s=!1){const o={},r=qr();e.propsDefaults=Object.create(null),Ar(e,t,o,r);for(const i in e.propsOptions[0])i in o||(o[i]=void 0);n?e.props=s?o:pr(o):e.type.props?e.props=o:e.props=r,e.attrs=r}function Jl(e,t,n,s){const{props:o,attrs:r,vnode:{patchFlag:i}}=e,l=V(o),[c]=e.propsOptions;let p=!1;if((s||i>0)&&!(i&16)){if(i&8){const f=e.vnode.dynamicProps;for(let d=0;d<f.length;d++){let h=f[d];if(kn(e.emitsOptions,h))continue;const m=t[h];if(c)if($(r,h))m!==r[h]&&(r[h]=m,p=!0);else{const N=xe(h);o[N]=ps(c,l,N,m,e,!1)}else m!==r[h]&&(r[h]=m,p=!0)}}}else{Ar(e,t,o,r)&&(p=!0);let f;for(const d in l)(!t||!$(t,d)&&((f=_t(d))===d||!$(t,f)))&&(c?n&&(n[d]!==void 0||n[f]!==void 0)&&(o[d]=ps(c,l,d,void 0,e,!0)):delete o[d]);if(r!==l)for(const d in r)(!t||!$(t,d))&&(delete r[d],p=!0)}p&&ze(e.attrs,"set","")}function Ar(e,t,n,s){const[o,r]=e.propsOptions;let i=!1,l;if(t)for(let c in t){if(Vt(c))continue;const p=t[c];let f;o&&$(o,f=xe(c))?!r||!r.includes(f)?n[f]=p:(l||(l={}))[f]=p:kn(e.emitsOptions,c)||(!(c in s)||p!==s[c])&&(s[c]=p,i=!0)}if(r){const c=V(n),p=l||X;for(let f=0;f<r.length;f++){const d=r[f];n[d]=ps(o,c,d,p[d],e,!$(p,d))}}return i}function ps(e,t,n,s,o,r){const i=e[n];if(i!=null){const l=$(i,"default");if(l&&s===void 0){const c=i.default;if(i.type!==Function&&!i.skipFactory&&H(c)){const{propsDefaults:p}=o;if(n in p)s=p[n];else{const f=cn(o);s=p[n]=c.call(null,t),f()}}else s=c;o.ce&&o.ce._setProp(n,s)}i[0]&&(r&&!l?s=!1:i[1]&&(s===""||s===_t(n))&&(s=!0))}return s}const Al=new WeakMap;function Dr(e,t,n=!1){const s=n?Al:t.propsCache,o=s.get(e);if(o)return o;const r=e.props,i={},l=[];let c=!1;if(!H(e)){const f=d=>{c=!0;const[h,m]=Dr(d,t,!0);le(i,h),m&&l.push(...m)};!n&&t.mixins.length&&t.mixins.forEach(f),e.extends&&f(e.extends),e.mixins&&e.mixins.forEach(f)}if(!r&&!c)return ee(e)&&s.set(e,Ot),Ot;if(U(r))for(let f=0;f<r.length;f++){const d=xe(r[f]);io(d)&&(i[d]=X)}else if(r)for(const f in r){const d=xe(f);if(io(d)){const h=r[f],m=i[d]=U(h)||H(h)?{type:h}:le({},h),N=m.type;let x=!1,F=!0;if(U(N))for(let J=0;J<N.length;++J){const q=N[J],A=H(q)&&q.name;if(A==="Boolean"){x=!0;break}else A==="String"&&(F=!1)}else x=H(N)&&N.name==="Boolean";m[0]=x,m[1]=F,(x||$(m,"default"))&&l.push(d)}}const p=[i,l];return ee(e)&&s.set(e,p),p}function io(e){return e[0]!=="$"&&!Vt(e)}const Ur=e=>e[0]==="_"||e==="$stable",Fs=e=>U(e)?e.map(Le):[Le(e)],Dl=(e,t,n)=>{if(t._n)return t;const s=He((...o)=>Fs(t(...o)),n);return s._c=!1,s},Lr=(e,t,n)=>{const s=e._ctx;for(const o in e){if(Ur(o))continue;const r=e[o];if(H(r))t[o]=Dl(o,r,s);else if(r!=null){const i=Fs(r);t[o]=()=>i}}},Hr=(e,t)=>{const n=Fs(t);e.slots.default=()=>n},Fr=(e,t,n)=>{for(const s in t)(n||s!=="_")&&(e[s]=t[s])},Ul=(e,t,n)=>{const s=e.slots=qr();if(e.vnode.shapeFlag&32){const o=t._;o?(Fr(s,t,n),n&&Wo(s,"_",o,!0)):Lr(t,s)}else t&&Hr(e,t)},Ll=(e,t,n)=>{const{vnode:s,slots:o}=e;let r=!0,i=X;if(s.shapeFlag&32){const l=t._;l?n&&l===1?r=!1:Fr(o,t,n):(r=!t.$stable,Lr(t,o)),i=t}else t&&(Hr(e,t),i={default:1});if(r)for(const l in o)!Ur(l)&&i[l]==null&&delete o[l]},_e=Xl;function Hl(e){return Fl(e)}function Fl(e,t){const n=Qo();n.__VUE__=!0;const{insert:s,remove:o,patchProp:r,createElement:i,createText:l,createComment:c,setText:p,setElementText:f,parentNode:d,nextSibling:h,setScopeId:m=ke,insertStaticContent:N}=e,x=(u,a,g,_=null,v=null,b=null,I=void 0,E=null,S=!!a.dynamicChildren)=>{if(u===a)return;u&&!Ft(u,a)&&(_=y(u),ge(u,v,b,!0),u=null),a.patchFlag===-2&&(S=!1,a.dynamicChildren=null);const{type:R,ref:D,shapeFlag:T}=a;switch(R){case jn:F(u,a,g,_);break;case yt:J(u,a,g,_);break;case bn:u==null&&q(a,g,_,I);break;case Ie:ft(u,a,g,_,v,b,I,E,S);break;default:T&1?Q(u,a,g,_,v,b,I,E,S):T&6?qe(u,a,g,_,v,b,I,E,S):(T&64||T&128)&&R.process(u,a,g,_,v,b,I,E,S,P)}D!=null&&v&&us(D,u&&u.ref,b,a||u,!a)},F=(u,a,g,_)=>{if(u==null)s(a.el=l(a.children),g,_);else{const v=a.el=u.el;a.children!==u.children&&p(v,a.children)}},J=(u,a,g,_)=>{u==null?s(a.el=c(a.children||""),g,_):a.el=u.el},q=(u,a,g,_)=>{[u.el,u.anchor]=N(u.children,a,g,_,u.el,u.anchor)},A=({el:u,anchor:a},g,_)=>{let v;for(;u&&u!==a;)v=h(u),s(u,g,_),u=v;s(a,g,_)},M=({el:u,anchor:a})=>{let g;for(;u&&u!==a;)g=h(u),o(u),u=g;o(a)},Q=(u,a,g,_,v,b,I,E,S)=>{a.type==="svg"?I="svg":a.type==="math"&&(I="mathml"),u==null?ie(a,g,_,v,b,I,E,S):Ze(u,a,v,b,I,E,S)},ie=(u,a,g,_,v,b,I,E)=>{let S,R;const{props:D,shapeFlag:T,transition:C,dirs:L}=u;if(S=u.el=i(u.type,b,D&&D.is,D),T&8?f(S,u.children):T&16&&Pe(u.children,S,null,_,v,Xn(u,b),I,E),L&&dt(u,null,_,"created"),ne(S,u,u.scopeId,I,_),D){for(const Z in D)Z!=="value"&&!Vt(Z)&&r(S,Z,null,D[Z],b,_);"value"in D&&r(S,"value",null,D.value,b),(R=D.onVnodeBeforeMount)&&De(R,_,u)}L&&dt(u,null,_,"beforeMount");const k=kl(v,C);k&&C.beforeEnter(S),s(S,a,g),((R=D&&D.onVnodeMounted)||k||L)&&_e(()=>{R&&De(R,_,u),k&&C.enter(S),L&&dt(u,null,_,"mounted")},v)},ne=(u,a,g,_,v)=>{if(g&&m(u,g),_)for(let b=0;b<_.length;b++)m(u,_[b]);if(v){let b=v.subTree;if(a===b||Gr(b.type)&&(b.ssContent===a||b.ssFallback===a)){const I=v.vnode;ne(u,I,I.scopeId,I.slotScopeIds,v.parent)}}},Pe=(u,a,g,_,v,b,I,E,S=0)=>{for(let R=S;R<u.length;R++){const D=u[R]=E?rt(u[R]):Le(u[R]);x(null,D,a,g,_,v,b,I,E)}},Ze=(u,a,g,_,v,b,I)=>{const E=a.el=u.el;let{patchFlag:S,dynamicChildren:R,dirs:D}=a;S|=u.patchFlag&16;const T=u.props||X,C=a.props||X;let L;if(g&&pt(g,!1),(L=C.onVnodeBeforeUpdate)&&De(L,g,a,u),D&&dt(a,u,g,"beforeUpdate"),g&&pt(g,!0),(T.innerHTML&&C.innerHTML==null||T.textContent&&C.textContent==null)&&f(E,""),R?Ce(u.dynamicChildren,R,E,g,_,Xn(a,v),b):I||j(u,a,E,null,g,_,Xn(a,v),b,!1),S>0){if(S&16)et(E,T,C,g,v);else if(S&2&&T.class!==C.class&&r(E,"class",null,C.class,v),S&4&&r(E,"style",T.style,C.style,v),S&8){const k=a.dynamicProps;for(let Z=0;Z<k.length;Z++){const G=k[Z],me=T[G],ce=C[G];(ce!==me||G==="value")&&r(E,G,me,ce,v,g)}}S&1&&u.children!==a.children&&f(E,a.children)}else!I&&R==null&&et(E,T,C,g,v);((L=C.onVnodeUpdated)||D)&&_e(()=>{L&&De(L,g,a,u),D&&dt(a,u,g,"updated")},_)},Ce=(u,a,g,_,v,b,I)=>{for(let E=0;E<a.length;E++){const S=u[E],R=a[E],D=S.el&&(S.type===Ie||!Ft(S,R)||S.shapeFlag&70)?d(S.el):g;x(S,R,D,null,_,v,b,I,!0)}},et=(u,a,g,_,v)=>{if(a!==g){if(a!==X)for(const b in a)!Vt(b)&&!(b in g)&&r(u,b,a[b],null,v,_);for(const b in g){if(Vt(b))continue;const I=g[b],E=a[b];I!==E&&b!=="value"&&r(u,b,E,I,v,_)}"value"in g&&r(u,"value",a.value,g.value,v)}},ft=(u,a,g,_,v,b,I,E,S)=>{const R=a.el=u?u.el:l(""),D=a.anchor=u?u.anchor:l("");let{patchFlag:T,dynamicChildren:C,slotScopeIds:L}=a;L&&(E=E?E.concat(L):L),u==null?(s(R,g,_),s(D,g,_),Pe(a.children||[],g,D,v,b,I,E,S)):T>0&&T&64&&C&&u.dynamicChildren?(Ce(u.dynamicChildren,C,g,v,b,I,E),(a.key!=null||v&&a===v.subTree)&&kr(u,a,!0)):j(u,a,g,D,v,b,I,E,S)},qe=(u,a,g,_,v,b,I,E,S)=>{a.slotScopeIds=E,u==null?a.shapeFlag&512?v.ctx.activate(a,g,_,I,S):Ut(a,g,_,v,b,I,S):bt(u,a,S)},Ut=(u,a,g,_,v,b,I)=>{const E=u.component=lc(u,_,v);if(wr(u)&&(E.ctx.renderer=P),cc(E,!1,I),E.asyncDep){if(v&&v.registerDep(E,re,I),!u.el){const S=E.subTree=te(yt);J(null,S,a,g)}}else re(E,u,a,g,v,b,I)},bt=(u,a,g)=>{const _=a.component=u.component;if(zl(u,a,g))if(_.asyncDep&&!_.asyncResolved){W(_,a,g);return}else _.next=a,_.update();else a.el=u.el,_.vnode=a},re=(u,a,g,_,v,b,I)=>{const E=()=>{if(u.isMounted){let{next:T,bu:C,u:L,parent:k,vnode:Z}=u;{const ve=jr(u);if(ve){T&&(T.el=Z.el,W(u,T,I)),ve.asyncDep.then(()=>{u.isUnmounted||E()});return}}let G=T,me;pt(u,!1),T?(T.el=Z.el,W(u,T,I)):T=Z,C&&vn(C),(me=T.props&&T.props.onVnodeBeforeUpdate)&&De(me,k,T,Z),pt(u,!0);const ce=Zn(u),Te=u.subTree;u.subTree=ce,x(Te,ce,d(Te.el),y(Te),u,v,b),T.el=ce.el,G===null&&Yl(u,ce.el),L&&_e(L,v),(me=T.props&&T.props.onVnodeUpdated)&&_e(()=>De(me,k,T,Z),v)}else{let T;const{el:C,props:L}=a,{bm:k,m:Z,parent:G,root:me,type:ce}=u,Te=Gt(a);if(pt(u,!1),k&&vn(k),!Te&&(T=L&&L.onVnodeBeforeMount)&&De(T,G,a),pt(u,!0),C&&se){const ve=()=>{u.subTree=Zn(u),se(C,u.subTree,u,v,null)};Te&&ce.__asyncHydrate?ce.__asyncHydrate(C,u,ve):ve()}else{me.ce&&me.ce._injectChildStyle(ce);const ve=u.subTree=Zn(u);x(null,ve,g,_,u,v,b),a.el=ve.el}if(Z&&_e(Z,v),!Te&&(T=L&&L.onVnodeMounted)){const ve=a;_e(()=>De(T,G,ve),v)}(a.shapeFlag&256||G&&Gt(G.vnode)&&G.vnode.shapeFlag&256)&&u.a&&_e(u.a,v),u.isMounted=!0,a=g=_=null}};u.scope.on();const S=u.effect=new Zo(E);u.scope.off();const R=u.update=S.run.bind(S),D=u.job=S.runIfDirty.bind(S);D.i=u,D.id=u.uid,S.scheduler=()=>Us(D),pt(u,!0),R()},W=(u,a,g)=>{a.component=u;const _=u.vnode.props;u.vnode=a,u.next=null,Jl(u,a.props,_,g),Ll(u,a.children,g),ut(),eo(u),at()},j=(u,a,g,_,v,b,I,E,S=!1)=>{const R=u&&u.children,D=u?u.shapeFlag:0,T=a.children,{patchFlag:C,shapeFlag:L}=a;if(C>0){if(C&128){tt(R,T,g,_,v,b,I,E,S);return}else if(C&256){Be(R,T,g,_,v,b,I,E,S);return}}L&8?(D&16&&Ee(R,v,b),T!==R&&f(g,T)):D&16?L&16?tt(R,T,g,_,v,b,I,E,S):Ee(R,v,b,!0):(D&8&&f(g,""),L&16&&Pe(T,g,_,v,b,I,E,S))},Be=(u,a,g,_,v,b,I,E,S)=>{u=u||Ot,a=a||Ot;const R=u.length,D=a.length,T=Math.min(R,D);let C;for(C=0;C<T;C++){const L=a[C]=S?rt(a[C]):Le(a[C]);x(u[C],L,g,null,v,b,I,E,S)}R>D?Ee(u,v,b,!0,!1,T):Pe(a,g,_,v,b,I,E,S,T)},tt=(u,a,g,_,v,b,I,E,S)=>{let R=0;const D=a.length;let T=u.length-1,C=D-1;for(;R<=T&&R<=C;){const L=u[R],k=a[R]=S?rt(a[R]):Le(a[R]);if(Ft(L,k))x(L,k,g,null,v,b,I,E,S);else break;R++}for(;R<=T&&R<=C;){const L=u[T],k=a[C]=S?rt(a[C]):Le(a[C]);if(Ft(L,k))x(L,k,g,null,v,b,I,E,S);else break;T--,C--}if(R>T){if(R<=C){const L=C+1,k=L<D?a[L].el:_;for(;R<=C;)x(null,a[R]=S?rt(a[R]):Le(a[R]),g,k,v,b,I,E,S),R++}}else if(R>C)for(;R<=T;)ge(u[R],v,b,!0),R++;else{const L=R,k=R,Z=new Map;for(R=k;R<=C;R++){const ye=a[R]=S?rt(a[R]):Le(a[R]);ye.key!=null&&Z.set(ye.key,R)}let G,me=0;const ce=C-k+1;let Te=!1,ve=0;const Lt=new Array(ce);for(R=0;R<ce;R++)Lt[R]=0;for(R=L;R<=T;R++){const ye=u[R];if(me>=ce){ge(ye,v,b,!0);continue}let Ae;if(ye.key!=null)Ae=Z.get(ye.key);else for(G=k;G<=C;G++)if(Lt[G-k]===0&&Ft(ye,a[G])){Ae=G;break}Ae===void 0?ge(ye,v,b,!0):(Lt[Ae-k]=R+1,Ae>=ve?ve=Ae:Te=!0,x(ye,a[Ae],g,null,v,b,I,E,S),me++)}const Vs=Te?jl(Lt):Ot;for(G=Vs.length-1,R=ce-1;R>=0;R--){const ye=k+R,Ae=a[ye],Bs=ye+1<D?a[ye+1].el:_;Lt[R]===0?x(null,Ae,g,Bs,v,b,I,E,S):Te&&(G<0||R!==Vs[G]?Je(Ae,g,Bs,2):G--)}}},Je=(u,a,g,_,v=null)=>{const{el:b,type:I,transition:E,children:S,shapeFlag:R}=u;if(R&6){Je(u.component.subTree,a,g,_);return}if(R&128){u.suspense.move(a,g,_);return}if(R&64){I.move(u,a,g,P);return}if(I===Ie){s(b,a,g);for(let T=0;T<S.length;T++)Je(S[T],a,g,_);s(u.anchor,a,g);return}if(I===bn){A(u,a,g);return}if(_!==2&&R&1&&E)if(_===0)E.beforeEnter(b),s(b,a,g),_e(()=>E.enter(b),v);else{const{leave:T,delayLeave:C,afterLeave:L}=E,k=()=>s(b,a,g),Z=()=>{T(b,()=>{k(),L&&L()})};C?C(b,k,Z):Z()}else s(b,a,g)},ge=(u,a,g,_=!1,v=!1)=>{const{type:b,props:I,ref:E,children:S,dynamicChildren:R,shapeFlag:D,patchFlag:T,dirs:C,cacheIndex:L}=u;if(T===-2&&(v=!1),E!=null&&us(E,null,g,u,!0),L!=null&&(a.renderCache[L]=void 0),D&256){a.ctx.deactivate(u);return}const k=D&1&&C,Z=!Gt(u);let G;if(Z&&(G=I&&I.onVnodeBeforeUnmount)&&De(G,a,u),D&6)an(u.component,g,_);else{if(D&128){u.suspense.unmount(g,_);return}k&&dt(u,null,a,"beforeUnmount"),D&64?u.type.remove(u,a,g,P,_):R&&!R.hasOnce&&(b!==Ie||T>0&&T&64)?Ee(R,a,g,!1,!0):(b===Ie&&T&384||!v&&D&16)&&Ee(S,a,g),_&&Rt(u)}(Z&&(G=I&&I.onVnodeUnmounted)||k)&&_e(()=>{G&&De(G,a,u),k&&dt(u,null,a,"unmounted")},g)},Rt=u=>{const{type:a,el:g,anchor:_,transition:v}=u;if(a===Ie){St(g,_);return}if(a===bn){M(u);return}const b=()=>{o(g),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(u.shapeFlag&1&&v&&!v.persisted){const{leave:I,delayLeave:E}=v,S=()=>I(g,b);E?E(u.el,b,S):S()}else b()},St=(u,a)=>{let g;for(;u!==a;)g=h(u),o(u),u=g;o(a)},an=(u,a,g)=>{const{bum:_,scope:v,job:b,subTree:I,um:E,m:S,a:R}=u;lo(S),lo(R),_&&vn(_),v.stop(),b&&(b.flags|=8,ge(I,u,a,g)),E&&_e(E,a),_e(()=>{u.isUnmounted=!0},a),a&&a.pendingBranch&&!a.isUnmounted&&u.asyncDep&&!u.asyncResolved&&u.suspenseId===a.pendingId&&(a.deps--,a.deps===0&&a.resolve())},Ee=(u,a,g,_=!1,v=!1,b=0)=>{for(let I=b;I<u.length;I++)ge(u[I],a,g,_,v)},y=u=>{if(u.shapeFlag&6)return y(u.component.subTree);if(u.shapeFlag&128)return u.suspense.next();const a=h(u.anchor||u.el),g=a&&a[ul];return g?h(g):a};let O=!1;const w=(u,a,g)=>{u==null?a._vnode&&ge(a._vnode,null,null,!0):x(a._vnode||null,u,a,null,null,null,g),a._vnode=u,O||(O=!0,eo(),_r(),O=!1)},P={p:x,um:ge,m:Je,r:Rt,mt:Ut,mc:Pe,pc:j,pbc:Ce,n:y,o:e};let B,se;return{render:w,hydrate:B,createApp:Cl(w,B)}}function Xn({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function pt({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function kl(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function kr(e,t,n=!1){const s=e.children,o=t.children;if(U(s)&&U(o))for(let r=0;r<s.length;r++){const i=s[r];let l=o[r];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=o[r]=rt(o[r]),l.el=i.el),!n&&l.patchFlag!==-2&&kr(i,l)),l.type===jn&&(l.el=i.el)}}function jl(e){const t=e.slice(),n=[0];let s,o,r,i,l;const c=e.length;for(s=0;s<c;s++){const p=e[s];if(p!==0){if(o=n[n.length-1],e[o]<p){t[s]=o,n.push(s);continue}for(r=0,i=n.length-1;r<i;)l=r+i>>1,e[n[l]]<p?r=l+1:i=l;p<e[n[r]]&&(r>0&&(t[s]=n[r-1]),n[r]=s)}}for(r=n.length,i=n[r-1];r-- >0;)n[r]=i,i=t[i];return n}function jr(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:jr(t)}function lo(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}const $l=Symbol.for("v-scx"),Vl=()=>Ye($l);function _n(e,t,n){return $r(e,t,n)}function $r(e,t,n=X){const{immediate:s,deep:o,flush:r,once:i}=n,l=le({},n);let c;if($n)if(r==="sync"){const h=Vl();c=h.__watcherHandles||(h.__watcherHandles=[])}else if(!t||s)l.once=!0;else{const h=()=>{};return h.stop=ke,h.resume=ke,h.pause=ke,h}const p=ae;l.call=(h,m,N)=>Ve(h,p,m,N);let f=!1;r==="post"?l.scheduler=h=>{_e(h,p&&p.suspense)}:r!=="sync"&&(f=!0,l.scheduler=(h,m)=>{m?h():Us(h)}),l.augmentJob=h=>{t&&(h.flags|=4),f&&(h.flags|=2,p&&(h.id=p.uid,h.i=p))};const d=rl(e,t,l);return c&&c.push(d),d}function Bl(e,t,n){const s=this.proxy,o=oe(e)?e.includes(".")?Vr(s,e):()=>s[e]:e.bind(s,s);let r;H(t)?r=t:(r=t.handler,n=t);const i=cn(this),l=$r(o,r.bind(s),n);return i(),l}function Vr(e,t){const n=t.split(".");return()=>{let s=e;for(let o=0;o<n.length&&s;o++)s=s[n[o]];return s}}const Gl=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${xe(t)}Modifiers`]||e[`${_t(t)}Modifiers`];function Kl(e,t,...n){if(e.isUnmounted)return;const s=e.vnode.props||X;let o=n;const r=t.startsWith("update:"),i=r&&Gl(s,t.slice(7));i&&(i.trim&&(o=n.map(f=>oe(f)?f.trim():f)),i.number&&(o=n.map(En)));let l,c=s[l=Gn(t)]||s[l=Gn(xe(t))];!c&&r&&(c=s[l=Gn(_t(t))]),c&&Ve(c,e,6,o);const p=s[l+"Once"];if(p){if(!e.emitted)e.emitted={};else if(e.emitted[l])return;e.emitted[l]=!0,Ve(p,e,6,o)}}function Br(e,t,n=!1){const s=t.emitsCache,o=s.get(e);if(o!==void 0)return o;const r=e.emits;let i={},l=!1;if(!H(e)){const c=p=>{const f=Br(p,t,!0);f&&(l=!0,le(i,f))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!r&&!l?(ee(e)&&s.set(e,null),null):(U(r)?r.forEach(c=>i[c]=null):le(i,r),ee(e)&&s.set(e,i),i)}function kn(e,t){return!e||!Mn(t)?!1:(t=t.slice(2).replace(/Once$/,""),$(e,t[0].toLowerCase()+t.slice(1))||$(e,_t(t))||$(e,t))}function Zn(e){const{type:t,vnode:n,proxy:s,withProxy:o,propsOptions:[r],slots:i,attrs:l,emit:c,render:p,renderCache:f,props:d,data:h,setupState:m,ctx:N,inheritAttrs:x}=e,F=wn(e);let J,q;try{if(n.shapeFlag&4){const M=o||s,Q=M;J=Le(p.call(Q,M,f,d,m,h,N)),q=l}else{const M=t;J=Le(M.length>1?M(d,{attrs:l,slots:i,emit:c}):M(d,null)),q=t.props?l:Wl(l)}}catch(M){Wt.length=0,Hn(M,e,1),J=te(yt)}let A=J;if(q&&x!==!1){const M=Object.keys(q),{shapeFlag:Q}=A;M.length&&Q&7&&(r&&M.some(Ss)&&(q=Ql(q,r)),A=Jt(A,q,!1,!0))}return n.dirs&&(A=Jt(A,null,!1,!0),A.dirs=A.dirs?A.dirs.concat(n.dirs):n.dirs),n.transition&&Ls(A,n.transition),J=A,wn(F),J}const Wl=e=>{let t;for(const n in e)(n==="class"||n==="style"||Mn(n))&&((t||(t={}))[n]=e[n]);return t},Ql=(e,t)=>{const n={};for(const s in e)(!Ss(s)||!(s.slice(9)in t))&&(n[s]=e[s]);return n};function zl(e,t,n){const{props:s,children:o,component:r}=e,{props:i,children:l,patchFlag:c}=t,p=r.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?co(s,i,p):!!i;if(c&8){const f=t.dynamicProps;for(let d=0;d<f.length;d++){const h=f[d];if(i[h]!==s[h]&&!kn(p,h))return!0}}}else return(o||l)&&(!l||!l.$stable)?!0:s===i?!1:s?i?co(s,i,p):!0:!!i;return!1}function co(e,t,n){const s=Object.keys(t);if(s.length!==Object.keys(e).length)return!0;for(let o=0;o<s.length;o++){const r=s[o];if(t[r]!==e[r]&&!kn(n,r))return!0}return!1}function Yl({vnode:e,parent:t},n){for(;t;){const s=t.subTree;if(s.suspense&&s.suspense.activeBranch===e&&(s.el=e.el),s===e)(e=t.vnode).el=n,t=t.parent;else break}}const Gr=e=>e.__isSuspense;function Xl(e,t){t&&t.pendingBranch?U(e)?t.effects.push(...e):t.effects.push(e):cl(e)}const Ie=Symbol.for("v-fgt"),jn=Symbol.for("v-txt"),yt=Symbol.for("v-cmt"),bn=Symbol.for("v-stc"),Wt=[];let Se=null;function je(e=!1){Wt.push(Se=e?null:[])}function Zl(){Wt.pop(),Se=Wt[Wt.length-1]||null}let nn=1;function uo(e){nn+=e,e<0&&Se&&(Se.hasOnce=!0)}function Kr(e){return e.dynamicChildren=nn>0?Se||Ot:null,Zl(),nn>0&&Se&&Se.push(e),e}function lt(e,t,n,s,o,r){return Kr(Y(e,t,n,s,o,r,!0))}function Wr(e,t,n,s,o){return Kr(te(e,t,n,s,o,!0))}function hs(e){return e?e.__v_isVNode===!0:!1}function Ft(e,t){return e.type===t.type&&e.key===t.key}const Qr=({key:e})=>e??null,Rn=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?oe(e)||fe(e)||H(e)?{i:Re,r:e,k:t,f:!!n}:e:null);function Y(e,t=null,n=null,s=0,o=null,r=e===Ie?0:1,i=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Qr(t),ref:t&&Rn(t),scopeId:Rr,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:o,dynamicChildren:null,appContext:null,ctx:Re};return l?(ks(c,n),r&128&&e.normalize(c)):n&&(c.shapeFlag|=oe(n)?8:16),nn>0&&!i&&Se&&(c.patchFlag>0||r&6)&&c.patchFlag!==32&&Se.push(c),c}const te=ec;function ec(e,t=null,n=null,s=0,o=null,r=!1){if((!e||e===El)&&(e=yt),hs(e)){const l=Jt(e,t,!0);return n&&ks(l,n),nn>0&&!r&&Se&&(l.shapeFlag&6?Se[Se.indexOf(e)]=l:Se.push(l)),l.patchFlag=-2,l}if(pc(e)&&(e=e.__vccOpts),t){t=tc(t);let{class:l,style:c}=t;l&&!oe(l)&&(t.class=Jn(l)),ee(c)&&(qs(c)&&!U(c)&&(c=le({},c)),t.style=ws(c))}const i=oe(e)?1:Gr(e)?128:al(e)?64:ee(e)?4:H(e)?2:0;return Y(e,t,n,s,o,i,r,!0)}function tc(e){return e?qs(e)||Jr(e)?le({},e):e:null}function Jt(e,t,n=!1,s=!1){const{props:o,ref:r,patchFlag:i,children:l,transition:c}=e,p=t?oc(o||{},t):o,f={__v_isVNode:!0,__v_skip:!0,type:e.type,props:p,key:p&&Qr(p),ref:t&&t.ref?n&&r?U(r)?r.concat(Rn(t)):[r,Rn(t)]:Rn(t):r,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:l,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Ie?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Jt(e.ssContent),ssFallback:e.ssFallback&&Jt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return c&&s&&Ls(f,c.clone(f)),f}function Fe(e=" ",t=0){return te(jn,null,e,t)}function nc(e,t){const n=te(bn,null,e);return n.staticCount=t,n}function sc(e="",t=!1){return t?(je(),Wr(yt,null,e)):te(yt,null,e)}function Le(e){return e==null||typeof e=="boolean"?te(yt):U(e)?te(Ie,null,e.slice()):typeof e=="object"?rt(e):te(jn,null,String(e))}function rt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Jt(e)}function ks(e,t){let n=0;const{shapeFlag:s}=e;if(t==null)t=null;else if(U(t))n=16;else if(typeof t=="object")if(s&65){const o=t.default;o&&(o._c&&(o._d=!1),ks(e,o()),o._c&&(o._d=!0));return}else{n=32;const o=t._;!o&&!Jr(t)?t._ctx=Re:o===3&&Re&&(Re.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else H(t)?(t={default:t,_ctx:Re},n=32):(t=String(t),s&64?(n=16,t=[Fe(t)]):n=8);e.children=t,e.shapeFlag|=n}function oc(...e){const t={};for(let n=0;n<e.length;n++){const s=e[n];for(const o in s)if(o==="class")t.class!==s.class&&(t.class=Jn([t.class,s.class]));else if(o==="style")t.style=ws([t.style,s.style]);else if(Mn(o)){const r=t[o],i=s[o];i&&r!==i&&!(U(r)&&r.includes(i))&&(t[o]=r?[].concat(r,i):i)}else o!==""&&(t[o]=s[o])}return t}function De(e,t,n,s=null){Ve(e,t,7,[n,s])}const rc=Pr();let ic=0;function lc(e,t,n){const s=e.type,o=(t?t.appContext:e.appContext)||rc,r={uid:ic++,vnode:e,type:s,parent:t,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Ni(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(o.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Dr(s,o),emitsOptions:Br(s,o),emit:null,emitted:null,propsDefaults:X,inheritAttrs:s.inheritAttrs,ctx:X,data:X,props:X,attrs:X,slots:X,refs:X,setupState:X,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=t?t.root:r,r.emit=Kl.bind(null,r),e.ce&&e.ce(r),r}let ae=null,On,gs;{const e=Qo(),t=(n,s)=>{let o;return(o=e[n])||(o=e[n]=[]),o.push(s),r=>{o.length>1?o.forEach(i=>i(r)):o[0](r)}};On=t("__VUE_INSTANCE_SETTERS__",n=>ae=n),gs=t("__VUE_SSR_SETTERS__",n=>$n=n)}const cn=e=>{const t=ae;return On(e),e.scope.on(),()=>{e.scope.off(),On(t)}},ao=()=>{ae&&ae.scope.off(),On(null)};function zr(e){return e.vnode.shapeFlag&4}let $n=!1;function cc(e,t=!1,n=!1){t&&gs(t);const{props:s,children:o}=e.vnode,r=zr(e);ql(e,s,r,t),Ul(e,o,n);const i=r?uc(e,t):void 0;return t&&gs(!1),i}function uc(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,wl);const{setup:s}=n;if(s){const o=e.setupContext=s.length>1?fc(e):null,r=cn(e);ut();const i=ln(s,e,0,[e.props,o]);if(at(),r(),Bo(i)){if(Gt(e)||Ir(e),i.then(ao,ao),t)return i.then(l=>{fo(e,l,t)}).catch(l=>{Hn(l,e,0)});e.asyncDep=i}else fo(e,i,t)}else Yr(e,t)}function fo(e,t,n){H(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:ee(t)&&(e.setupState=mr(t)),Yr(e,n)}let po;function Yr(e,t,n){const s=e.type;if(!e.render){if(!t&&po&&!s.render){const o=s.template||Hs(e).template;if(o){const{isCustomElement:r,compilerOptions:i}=e.appContext.config,{delimiters:l,compilerOptions:c}=s,p=le(le({isCustomElement:r,delimiters:l},i),c);s.render=po(o,p)}}e.render=s.render||ke}{const o=cn(e);ut();try{Tl(e)}finally{at(),o()}}}const ac={get(e,t){return de(e,"get",""),e[t]}};function fc(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,ac),slots:e.slots,emit:e.emit,expose:t}}function Vn(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(mr(Yi(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Kt)return Kt[n](e)},has(t,n){return n in t||n in Kt}})):e.proxy}function dc(e,t=!0){return H(e)?e.displayName||e.name:e.name||t&&e.__name}function pc(e){return H(e)&&"__vccOpts"in e}const Oe=(e,t)=>sl(e,t,$n);function Xr(e,t,n){const s=arguments.length;return s===2?ee(t)&&!U(t)?hs(t)?te(e,null,[t]):te(e,t):te(e,null,t):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&hs(n)&&(n=[n]),te(e,t,n))}const hc="3.5.6";/**
* @vue/runtime-dom v3.5.6
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ms;const ho=typeof window<"u"&&window.trustedTypes;if(ho)try{ms=ho.createPolicy("vue",{createHTML:e=>e})}catch{}const Zr=ms?e=>ms.createHTML(e):e=>e,gc="http://www.w3.org/2000/svg",mc="http://www.w3.org/1998/Math/MathML",We=typeof document<"u"?document:null,go=We&&We.createElement("template"),vc={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,s)=>{const o=t==="svg"?We.createElementNS(gc,e):t==="mathml"?We.createElementNS(mc,e):n?We.createElement(e,{is:n}):We.createElement(e);return e==="select"&&s&&s.multiple!=null&&o.setAttribute("multiple",s.multiple),o},createText:e=>We.createTextNode(e),createComment:e=>We.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>We.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,s,o,r){const i=n?n.previousSibling:t.lastChild;if(o&&(o===r||o.nextSibling))for(;t.insertBefore(o.cloneNode(!0),n),!(o===r||!(o=o.nextSibling)););else{go.innerHTML=Zr(s==="svg"?`<svg>${e}</svg>`:s==="mathml"?`<math>${e}</math>`:e);const l=go.content;if(s==="svg"||s==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}t.insertBefore(l,n)}return[i?i.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},yc=Symbol("_vtc");function _c(e,t,n){const s=e[yc];s&&(t=(t?[t,...s]:[...s]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const mo=Symbol("_vod"),bc=Symbol("_vsh"),Rc=Symbol(""),Sc=/(^|;)\s*display\s*:/;function Ec(e,t,n){const s=e.style,o=oe(n);let r=!1;if(n&&!o){if(t)if(oe(t))for(const i of t.split(";")){const l=i.slice(0,i.indexOf(":")).trim();n[l]==null&&Sn(s,l,"")}else for(const i in t)n[i]==null&&Sn(s,i,"");for(const i in n)i==="display"&&(r=!0),Sn(s,i,n[i])}else if(o){if(t!==n){const i=s[Rc];i&&(n+=";"+i),s.cssText=n,r=Sc.test(n)}}else t&&e.removeAttribute("style");mo in e&&(e[mo]=r?s.display:"",e[bc]&&(s.display="none"))}const vo=/\s*!important$/;function Sn(e,t,n){if(U(n))n.forEach(s=>Sn(e,t,s));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const s=Ic(e,t);vo.test(n)?e.setProperty(_t(s),n.replace(vo,""),"important"):e[s]=n}}const yo=["Webkit","Moz","ms"],es={};function Ic(e,t){const n=es[t];if(n)return n;let s=xe(t);if(s!=="filter"&&s in e)return es[t]=s;s=qn(s);for(let o=0;o<yo.length;o++){const r=yo[o]+s;if(r in e)return es[t]=r}return t}const _o="http://www.w3.org/1999/xlink";function bo(e,t,n,s,o,r=wi(t)){s&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(_o,t.slice(6,t.length)):e.setAttributeNS(_o,t,n):n==null||r&&!zo(n)?e.removeAttribute(t):e.setAttribute(t,r?"":$e(n)?String(n):n)}function wc(e,t,n,s){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?Zr(n):n);return}const o=e.tagName;if(t==="value"&&o!=="PROGRESS"&&!o.includes("-")){const i=o==="OPTION"?e.getAttribute("value")||"":e.value,l=n==null?e.type==="checkbox"?"on":"":String(n);(i!==l||!("_value"in e))&&(e.value=l),n==null&&e.removeAttribute(t),e._value=n;return}let r=!1;if(n===""||n==null){const i=typeof e[t];i==="boolean"?n=zo(n):n==null&&i==="string"?(n="",r=!0):i==="number"&&(n=0,r=!0)}try{e[t]=n}catch{}r&&e.removeAttribute(t)}function gt(e,t,n,s){e.addEventListener(t,n,s)}function Tc(e,t,n,s){e.removeEventListener(t,n,s)}const Ro=Symbol("_vei");function Oc(e,t,n,s,o=null){const r=e[Ro]||(e[Ro]={}),i=r[t];if(s&&i)i.value=s;else{const[l,c]=Nc(t);if(s){const p=r[t]=Pc(s,o);gt(e,l,p,c)}else i&&(Tc(e,l,i,c),r[t]=void 0)}}const So=/(?:Once|Passive|Capture)$/;function Nc(e){let t;if(So.test(e)){t={};let s;for(;s=e.match(So);)e=e.slice(0,e.length-s[0].length),t[s[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):_t(e.slice(2)),t]}let ts=0;const xc=Promise.resolve(),Mc=()=>ts||(xc.then(()=>ts=0),ts=Date.now());function Pc(e,t){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Ve(Cc(s,n.value),t,5,[s])};return n.value=e,n.attached=Mc(),n}function Cc(e,t){if(U(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(s=>o=>!o._stopped&&s&&s(o))}else return t}const Eo=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,qc=(e,t,n,s,o,r)=>{const i=o==="svg";t==="class"?_c(e,s,i):t==="style"?Ec(e,n,s):Mn(t)?Ss(t)||Oc(e,t,n,s,r):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Jc(e,t,s,i))?(wc(e,t,s),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&bo(e,t,s,i,r,t!=="value")):(t==="true-value"?e._trueValue=s:t==="false-value"&&(e._falseValue=s),bo(e,t,s,i))};function Jc(e,t,n,s){if(s)return!!(t==="innerHTML"||t==="textContent"||t in e&&Eo(t)&&H(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const o=e.tagName;if(o==="IMG"||o==="VIDEO"||o==="CANVAS"||o==="SOURCE")return!1}return Eo(t)&&oe(n)?!1:!!(t in e||e._isVueCE&&(/[A-Z]/.test(t)||!oe(n)))}const Nn=e=>{const t=e.props["onUpdate:modelValue"]||!1;return U(t)?n=>vn(t,n):t};function Ac(e){e.target.composing=!0}function Io(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const qt=Symbol("_assign"),Dc={created(e,{modifiers:{lazy:t,trim:n,number:s}},o){e[qt]=Nn(o);const r=s||o.props&&o.props.type==="number";gt(e,t?"change":"input",i=>{if(i.target.composing)return;let l=e.value;n&&(l=l.trim()),r&&(l=En(l)),e[qt](l)}),n&&gt(e,"change",()=>{e.value=e.value.trim()}),t||(gt(e,"compositionstart",Ac),gt(e,"compositionend",Io),gt(e,"change",Io))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,oldValue:n,modifiers:{lazy:s,trim:o,number:r}},i){if(e[qt]=Nn(i),e.composing)return;const l=(r||e.type==="number")&&!/^0\d/.test(e.value)?En(e.value):e.value,c=t??"";l!==c&&(document.activeElement===e&&e.type!=="range"&&(s&&t===n||o&&e.value.trim()===c)||(e.value=c))}},Uc={deep:!0,created(e,{value:t,modifiers:{number:n}},s){const o=Pn(t);gt(e,"change",()=>{const r=Array.prototype.filter.call(e.options,i=>i.selected).map(i=>n?En(xn(i)):xn(i));e[qt](e.multiple?o?new Set(r):r:r[0]),e._assigning=!0,Ds(()=>{e._assigning=!1})}),e[qt]=Nn(s)},mounted(e,{value:t,modifiers:{number:n}}){wo(e,t)},beforeUpdate(e,t,n){e[qt]=Nn(n)},updated(e,{value:t,modifiers:{number:n}}){e._assigning||wo(e,t)}};function wo(e,t,n){const s=e.multiple,o=U(t);if(!(s&&!o&&!Pn(t))){for(let r=0,i=e.options.length;r<i;r++){const l=e.options[r],c=xn(l);if(s)if(o){const p=typeof c;p==="string"||p==="number"?l.selected=t.some(f=>String(f)===String(c)):l.selected=Oi(t,c)>-1}else l.selected=t.has(c);else if(An(xn(l),t)){e.selectedIndex!==r&&(e.selectedIndex=r);return}}!s&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function xn(e){return"_value"in e?e._value:e.value}const Lc=["ctrl","shift","alt","meta"],Hc={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>Lc.some(n=>e[`${n}Key`]&&!t.includes(n))},To=(e,t)=>{const n=e._withMods||(e._withMods={}),s=t.join(".");return n[s]||(n[s]=(o,...r)=>{for(let i=0;i<t.length;i++){const l=Hc[t[i]];if(l&&l(o,t))return}return e(o,...r)})},Fc=le({patchProp:qc},vc);let Oo;function kc(){return Oo||(Oo=Hl(Fc))}const jc=(...e)=>{const t=kc().createApp(...e),{mount:n}=t;return t.mount=s=>{const o=Vc(s);if(!o)return;const r=t._component;!H(r)&&!r.render&&!r.template&&(r.template=o.innerHTML),o.nodeType===1&&(o.textContent="");const i=n(o,!1,$c(o));return o instanceof Element&&(o.removeAttribute("v-cloak"),o.setAttribute("data-v-app","")),i},t};function $c(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function Vc(e){return oe(e)?document.querySelector(e):e}const un=(e,t)=>{const n=e.__vccOpts||e;for(const[s,o]of t)n[s]=o;return n},Bc={},Gc={class:"main-menu"},Kc={class:"menu"};function Wc(e,t,n,s,o,r){const i=tn("router-link"),l=tn("router-view");return je(),lt(Ie,null,[t[4]||(t[4]=Y("div",{class:"header"},[Y("h2",null,"PerfLAB")],-1)),Y("div",Gc,[Y("nav",Kc,[te(i,{to:"/performance",class:"menu-item"},{default:He(()=>t[0]||(t[0]=[Fe("Performance Engineer")])),_:1}),te(i,{to:"/frontend",class:"menu-item"},{default:He(()=>t[1]||(t[1]=[Fe("Frontend")])),_:1}),te(i,{to:"/backend",class:"menu-item"},{default:He(()=>t[2]||(t[2]=[Fe("Backend")])),_:1}),te(i,{to:"/tools",class:"menu-item"},{default:He(()=>t[3]||(t[3]=[Fe("Tools")])),_:1})])]),te(l)],64)}const Qc=un(Bc,[["render",Wc]]);/*!
  * vue-router v4.4.5
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const wt=typeof document<"u";function ei(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function zc(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&ei(e.default)}const K=Object.assign;function ns(e,t){const n={};for(const s in t){const o=t[s];n[s]=Me(o)?o.map(e):e(o)}return n}const Qt=()=>{},Me=Array.isArray,ti=/#/g,Yc=/&/g,Xc=/\//g,Zc=/=/g,eu=/\?/g,ni=/\+/g,tu=/%5B/g,nu=/%5D/g,si=/%5E/g,su=/%60/g,oi=/%7B/g,ou=/%7C/g,ri=/%7D/g,ru=/%20/g;function js(e){return encodeURI(""+e).replace(ou,"|").replace(tu,"[").replace(nu,"]")}function iu(e){return js(e).replace(oi,"{").replace(ri,"}").replace(si,"^")}function vs(e){return js(e).replace(ni,"%2B").replace(ru,"+").replace(ti,"%23").replace(Yc,"%26").replace(su,"`").replace(oi,"{").replace(ri,"}").replace(si,"^")}function lu(e){return vs(e).replace(Zc,"%3D")}function cu(e){return js(e).replace(ti,"%23").replace(eu,"%3F")}function uu(e){return e==null?"":cu(e).replace(Xc,"%2F")}function sn(e){try{return decodeURIComponent(""+e)}catch{}return""+e}const au=/\/$/,fu=e=>e.replace(au,"");function ss(e,t,n="/"){let s,o={},r="",i="";const l=t.indexOf("#");let c=t.indexOf("?");return l<c&&l>=0&&(c=-1),c>-1&&(s=t.slice(0,c),r=t.slice(c+1,l>-1?l:t.length),o=e(r)),l>-1&&(s=s||t.slice(0,l),i=t.slice(l,t.length)),s=gu(s??t,n),{fullPath:s+(r&&"?")+r+i,path:s,query:o,hash:sn(i)}}function du(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function No(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function pu(e,t,n){const s=t.matched.length-1,o=n.matched.length-1;return s>-1&&s===o&&At(t.matched[s],n.matched[o])&&ii(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function At(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function ii(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!hu(e[n],t[n]))return!1;return!0}function hu(e,t){return Me(e)?xo(e,t):Me(t)?xo(t,e):e===t}function xo(e,t){return Me(t)?e.length===t.length&&e.every((n,s)=>n===t[s]):e.length===1&&e[0]===t}function gu(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),s=e.split("/"),o=s[s.length-1];(o===".."||o===".")&&s.push("");let r=n.length-1,i,l;for(i=0;i<s.length;i++)if(l=s[i],l!==".")if(l==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(i).join("/")}const st={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var on;(function(e){e.pop="pop",e.push="push"})(on||(on={}));var zt;(function(e){e.back="back",e.forward="forward",e.unknown=""})(zt||(zt={}));function mu(e){if(!e)if(wt){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),fu(e)}const vu=/^[^#]+#/;function yu(e,t){return e.replace(vu,"#")+t}function _u(e,t){const n=document.documentElement.getBoundingClientRect(),s=e.getBoundingClientRect();return{behavior:t.behavior,left:s.left-n.left-(t.left||0),top:s.top-n.top-(t.top||0)}}const Bn=()=>({left:window.scrollX,top:window.scrollY});function bu(e){let t;if("el"in e){const n=e.el,s=typeof n=="string"&&n.startsWith("#"),o=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!o)return;t=_u(o,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function Mo(e,t){return(history.state?history.state.position-t:-1)+e}const ys=new Map;function Ru(e,t){ys.set(e,t)}function Su(e){const t=ys.get(e);return ys.delete(e),t}let Eu=()=>location.protocol+"//"+location.host;function li(e,t){const{pathname:n,search:s,hash:o}=t,r=e.indexOf("#");if(r>-1){let l=o.includes(e.slice(r))?e.slice(r).length:1,c=o.slice(l);return c[0]!=="/"&&(c="/"+c),No(c,"")}return No(n,e)+s+o}function Iu(e,t,n,s){let o=[],r=[],i=null;const l=({state:h})=>{const m=li(e,location),N=n.value,x=t.value;let F=0;if(h){if(n.value=m,t.value=h,i&&i===N){i=null;return}F=x?h.position-x.position:0}else s(m);o.forEach(J=>{J(n.value,N,{delta:F,type:on.pop,direction:F?F>0?zt.forward:zt.back:zt.unknown})})};function c(){i=n.value}function p(h){o.push(h);const m=()=>{const N=o.indexOf(h);N>-1&&o.splice(N,1)};return r.push(m),m}function f(){const{history:h}=window;h.state&&h.replaceState(K({},h.state,{scroll:Bn()}),"")}function d(){for(const h of r)h();r=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",f,{passive:!0}),{pauseListeners:c,listen:p,destroy:d}}function Po(e,t,n,s=!1,o=!1){return{back:e,current:t,forward:n,replaced:s,position:window.history.length,scroll:o?Bn():null}}function wu(e){const{history:t,location:n}=window,s={value:li(e,n)},o={value:t.state};o.value||r(s.value,{back:null,current:s.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function r(c,p,f){const d=e.indexOf("#"),h=d>-1?(n.host&&document.querySelector("base")?e:e.slice(d))+c:Eu()+e+c;try{t[f?"replaceState":"pushState"](p,"",h),o.value=p}catch(m){console.error(m),n[f?"replace":"assign"](h)}}function i(c,p){const f=K({},t.state,Po(o.value.back,c,o.value.forward,!0),p,{position:o.value.position});r(c,f,!0),s.value=c}function l(c,p){const f=K({},o.value,t.state,{forward:c,scroll:Bn()});r(f.current,f,!0);const d=K({},Po(s.value,c,null),{position:f.position+1},p);r(c,d,!1),s.value=c}return{location:s,state:o,push:l,replace:i}}function Tu(e){e=mu(e);const t=wu(e),n=Iu(e,t.state,t.location,t.replace);function s(r,i=!0){i||n.pauseListeners(),history.go(r)}const o=K({location:"",base:e,go:s,createHref:yu.bind(null,e)},t,n);return Object.defineProperty(o,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(o,"state",{enumerable:!0,get:()=>t.state.value}),o}function Ou(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),Tu(e)}function Nu(e){return typeof e=="string"||e&&typeof e=="object"}function ci(e){return typeof e=="string"||typeof e=="symbol"}const ui=Symbol("");var Co;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Co||(Co={}));function Dt(e,t){return K(new Error,{type:e,[ui]:!0},t)}function Ke(e,t){return e instanceof Error&&ui in e&&(t==null||!!(e.type&t))}const qo="[^/]+?",xu={sensitive:!1,strict:!1,start:!0,end:!0},Mu=/[.+*?^${}()[\]/\\]/g;function Pu(e,t){const n=K({},xu,t),s=[];let o=n.start?"^":"";const r=[];for(const p of e){const f=p.length?[]:[90];n.strict&&!p.length&&(o+="/");for(let d=0;d<p.length;d++){const h=p[d];let m=40+(n.sensitive?.25:0);if(h.type===0)d||(o+="/"),o+=h.value.replace(Mu,"\\$&"),m+=40;else if(h.type===1){const{value:N,repeatable:x,optional:F,regexp:J}=h;r.push({name:N,repeatable:x,optional:F});const q=J||qo;if(q!==qo){m+=10;try{new RegExp(`(${q})`)}catch(M){throw new Error(`Invalid custom RegExp for param "${N}" (${q}): `+M.message)}}let A=x?`((?:${q})(?:/(?:${q}))*)`:`(${q})`;d||(A=F&&p.length<2?`(?:/${A})`:"/"+A),F&&(A+="?"),o+=A,m+=20,F&&(m+=-8),x&&(m+=-20),q===".*"&&(m+=-50)}f.push(m)}s.push(f)}if(n.strict&&n.end){const p=s.length-1;s[p][s[p].length-1]+=.7000000000000001}n.strict||(o+="/?"),n.end?o+="$":n.strict&&(o+="(?:/|$)");const i=new RegExp(o,n.sensitive?"":"i");function l(p){const f=p.match(i),d={};if(!f)return null;for(let h=1;h<f.length;h++){const m=f[h]||"",N=r[h-1];d[N.name]=m&&N.repeatable?m.split("/"):m}return d}function c(p){let f="",d=!1;for(const h of e){(!d||!f.endsWith("/"))&&(f+="/"),d=!1;for(const m of h)if(m.type===0)f+=m.value;else if(m.type===1){const{value:N,repeatable:x,optional:F}=m,J=N in p?p[N]:"";if(Me(J)&&!x)throw new Error(`Provided param "${N}" is an array but it is not repeatable (* or + modifiers)`);const q=Me(J)?J.join("/"):J;if(!q)if(F)h.length<2&&(f.endsWith("/")?f=f.slice(0,-1):d=!0);else throw new Error(`Missing required param "${N}"`);f+=q}}return f||"/"}return{re:i,score:s,keys:r,parse:l,stringify:c}}function Cu(e,t){let n=0;for(;n<e.length&&n<t.length;){const s=t[n]-e[n];if(s)return s;n++}return e.length<t.length?e.length===1&&e[0]===80?-1:1:e.length>t.length?t.length===1&&t[0]===80?1:-1:0}function ai(e,t){let n=0;const s=e.score,o=t.score;for(;n<s.length&&n<o.length;){const r=Cu(s[n],o[n]);if(r)return r;n++}if(Math.abs(o.length-s.length)===1){if(Jo(s))return 1;if(Jo(o))return-1}return o.length-s.length}function Jo(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const qu={type:0,value:""},Ju=/[a-zA-Z0-9_]/;function Au(e){if(!e)return[[]];if(e==="/")return[[qu]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(m){throw new Error(`ERR (${n})/"${p}": ${m}`)}let n=0,s=n;const o=[];let r;function i(){r&&o.push(r),r=[]}let l=0,c,p="",f="";function d(){p&&(n===0?r.push({type:0,value:p}):n===1||n===2||n===3?(r.length>1&&(c==="*"||c==="+")&&t(`A repeatable param (${p}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:p,regexp:f,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):t("Invalid state to consume buffer"),p="")}function h(){p+=c}for(;l<e.length;){if(c=e[l++],c==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:c==="/"?(p&&d(),i()):c===":"?(d(),n=1):h();break;case 4:h(),n=s;break;case 1:c==="("?n=2:Ju.test(c)?h():(d(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--);break;case 2:c===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+c:n=3:f+=c;break;case 3:d(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--,f="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${p}"`),d(),i(),o}function Du(e,t,n){const s=Pu(Au(e.path),n),o=K(s,{record:e,parent:t,children:[],alias:[]});return t&&!o.record.aliasOf==!t.record.aliasOf&&t.children.push(o),o}function Uu(e,t){const n=[],s=new Map;t=Lo({strict:!1,end:!0,sensitive:!1},t);function o(d){return s.get(d)}function r(d,h,m){const N=!m,x=Do(d);x.aliasOf=m&&m.record;const F=Lo(t,d),J=[x];if("alias"in d){const M=typeof d.alias=="string"?[d.alias]:d.alias;for(const Q of M)J.push(Do(K({},x,{components:m?m.record.components:x.components,path:Q,aliasOf:m?m.record:x})))}let q,A;for(const M of J){const{path:Q}=M;if(h&&Q[0]!=="/"){const ie=h.record.path,ne=ie[ie.length-1]==="/"?"":"/";M.path=h.record.path+(Q&&ne+Q)}if(q=Du(M,h,F),m?m.alias.push(q):(A=A||q,A!==q&&A.alias.push(q),N&&d.name&&!Uo(q)&&i(d.name)),fi(q)&&c(q),x.children){const ie=x.children;for(let ne=0;ne<ie.length;ne++)r(ie[ne],q,m&&m.children[ne])}m=m||q}return A?()=>{i(A)}:Qt}function i(d){if(ci(d)){const h=s.get(d);h&&(s.delete(d),n.splice(n.indexOf(h),1),h.children.forEach(i),h.alias.forEach(i))}else{const h=n.indexOf(d);h>-1&&(n.splice(h,1),d.record.name&&s.delete(d.record.name),d.children.forEach(i),d.alias.forEach(i))}}function l(){return n}function c(d){const h=Fu(d,n);n.splice(h,0,d),d.record.name&&!Uo(d)&&s.set(d.record.name,d)}function p(d,h){let m,N={},x,F;if("name"in d&&d.name){if(m=s.get(d.name),!m)throw Dt(1,{location:d});F=m.record.name,N=K(Ao(h.params,m.keys.filter(A=>!A.optional).concat(m.parent?m.parent.keys.filter(A=>A.optional):[]).map(A=>A.name)),d.params&&Ao(d.params,m.keys.map(A=>A.name))),x=m.stringify(N)}else if(d.path!=null)x=d.path,m=n.find(A=>A.re.test(x)),m&&(N=m.parse(x),F=m.record.name);else{if(m=h.name?s.get(h.name):n.find(A=>A.re.test(h.path)),!m)throw Dt(1,{location:d,currentLocation:h});F=m.record.name,N=K({},h.params,d.params),x=m.stringify(N)}const J=[];let q=m;for(;q;)J.unshift(q.record),q=q.parent;return{name:F,path:x,params:N,matched:J,meta:Hu(J)}}e.forEach(d=>r(d));function f(){n.length=0,s.clear()}return{addRoute:r,resolve:p,removeRoute:i,clearRoutes:f,getRoutes:l,getRecordMatcher:o}}function Ao(e,t){const n={};for(const s of t)s in e&&(n[s]=e[s]);return n}function Do(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:Lu(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function Lu(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const s in e.components)t[s]=typeof n=="object"?n[s]:n;return t}function Uo(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Hu(e){return e.reduce((t,n)=>K(t,n.meta),{})}function Lo(e,t){const n={};for(const s in e)n[s]=s in t?t[s]:e[s];return n}function Fu(e,t){let n=0,s=t.length;for(;n!==s;){const r=n+s>>1;ai(e,t[r])<0?s=r:n=r+1}const o=ku(e);return o&&(s=t.lastIndexOf(o,s-1)),s}function ku(e){let t=e;for(;t=t.parent;)if(fi(t)&&ai(e,t)===0)return t}function fi({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function ju(e){const t={};if(e===""||e==="?")return t;const s=(e[0]==="?"?e.slice(1):e).split("&");for(let o=0;o<s.length;++o){const r=s[o].replace(ni," "),i=r.indexOf("="),l=sn(i<0?r:r.slice(0,i)),c=i<0?null:sn(r.slice(i+1));if(l in t){let p=t[l];Me(p)||(p=t[l]=[p]),p.push(c)}else t[l]=c}return t}function Ho(e){let t="";for(let n in e){const s=e[n];if(n=lu(n),s==null){s!==void 0&&(t+=(t.length?"&":"")+n);continue}(Me(s)?s.map(r=>r&&vs(r)):[s&&vs(s)]).forEach(r=>{r!==void 0&&(t+=(t.length?"&":"")+n,r!=null&&(t+="="+r))})}return t}function $u(e){const t={};for(const n in e){const s=e[n];s!==void 0&&(t[n]=Me(s)?s.map(o=>o==null?null:""+o):s==null?s:""+s)}return t}const Vu=Symbol(""),Fo=Symbol(""),$s=Symbol(""),di=Symbol(""),_s=Symbol("");function kt(){let e=[];function t(s){return e.push(s),()=>{const o=e.indexOf(s);o>-1&&e.splice(o,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function it(e,t,n,s,o,r=i=>i()){const i=s&&(s.enterCallbacks[o]=s.enterCallbacks[o]||[]);return()=>new Promise((l,c)=>{const p=h=>{h===!1?c(Dt(4,{from:n,to:t})):h instanceof Error?c(h):Nu(h)?c(Dt(2,{from:t,to:h})):(i&&s.enterCallbacks[o]===i&&typeof h=="function"&&i.push(h),l())},f=r(()=>e.call(s&&s.instances[o],t,n,p));let d=Promise.resolve(f);e.length<3&&(d=d.then(p)),d.catch(h=>c(h))})}function os(e,t,n,s,o=r=>r()){const r=[];for(const i of e)for(const l in i.components){let c=i.components[l];if(!(t!=="beforeRouteEnter"&&!i.instances[l]))if(ei(c)){const f=(c.__vccOpts||c)[t];f&&r.push(it(f,n,s,i,l,o))}else{let p=c();r.push(()=>p.then(f=>{if(!f)throw new Error(`Couldn't resolve component "${l}" at "${i.path}"`);const d=zc(f)?f.default:f;i.mods[l]=f,i.components[l]=d;const m=(d.__vccOpts||d)[t];return m&&it(m,n,s,i,l,o)()}))}}return r}function ko(e){const t=Ye($s),n=Ye(di),s=Oe(()=>{const c=Mt(e.to);return t.resolve(c)}),o=Oe(()=>{const{matched:c}=s.value,{length:p}=c,f=c[p-1],d=n.matched;if(!f||!d.length)return-1;const h=d.findIndex(At.bind(null,f));if(h>-1)return h;const m=jo(c[p-2]);return p>1&&jo(f)===m&&d[d.length-1].path!==m?d.findIndex(At.bind(null,c[p-2])):h}),r=Oe(()=>o.value>-1&&Wu(n.params,s.value.params)),i=Oe(()=>o.value>-1&&o.value===n.matched.length-1&&ii(n.params,s.value.params));function l(c={}){return Ku(c)?t[Mt(e.replace)?"replace":"push"](Mt(e.to)).catch(Qt):Promise.resolve()}return{route:s,href:Oe(()=>s.value.href),isActive:r,isExactActive:i,navigate:l}}const Bu=Er({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:ko,setup(e,{slots:t}){const n=Ln(ko(e)),{options:s}=Ye($s),o=Oe(()=>({[$o(e.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[$o(e.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=t.default&&t.default(n);return e.custom?r:Xr("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:o.value},r)}}}),Gu=Bu;function Ku(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Wu(e,t){for(const n in t){const s=t[n],o=e[n];if(typeof s=="string"){if(s!==o)return!1}else if(!Me(o)||o.length!==s.length||s.some((r,i)=>r!==o[i]))return!1}return!0}function jo(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const $o=(e,t,n)=>e??t??n,Qu=Er({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const s=Ye(_s),o=Oe(()=>e.route||s.value),r=Ye(Fo,0),i=Oe(()=>{let p=Mt(r);const{matched:f}=o.value;let d;for(;(d=f[p])&&!d.components;)p++;return p}),l=Oe(()=>o.value.matched[i.value]);yn(Fo,Oe(()=>i.value+1)),yn(Vu,l),yn(_s,o);const c=Xi();return _n(()=>[c.value,l.value,e.name],([p,f,d],[h,m,N])=>{f&&(f.instances[d]=p,m&&m!==f&&p&&p===h&&(f.leaveGuards.size||(f.leaveGuards=m.leaveGuards),f.updateGuards.size||(f.updateGuards=m.updateGuards))),p&&f&&(!m||!At(f,m)||!h)&&(f.enterCallbacks[d]||[]).forEach(x=>x(p))},{flush:"post"}),()=>{const p=o.value,f=e.name,d=l.value,h=d&&d.components[f];if(!h)return Vo(n.default,{Component:h,route:p});const m=d.props[f],N=m?m===!0?p.params:typeof m=="function"?m(p):m:null,F=Xr(h,K({},N,t,{onVnodeUnmounted:J=>{J.component.isUnmounted&&(d.instances[f]=null)},ref:c}));return Vo(n.default,{Component:F,route:p})||F}}});function Vo(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const zu=Qu;function Yu(e){const t=Uu(e.routes,e),n=e.parseQuery||ju,s=e.stringifyQuery||Ho,o=e.history,r=kt(),i=kt(),l=kt(),c=Zi(st);let p=st;wt&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=ns.bind(null,y=>""+y),d=ns.bind(null,uu),h=ns.bind(null,sn);function m(y,O){let w,P;return ci(y)?(w=t.getRecordMatcher(y),P=O):P=y,t.addRoute(P,w)}function N(y){const O=t.getRecordMatcher(y);O&&t.removeRoute(O)}function x(){return t.getRoutes().map(y=>y.record)}function F(y){return!!t.getRecordMatcher(y)}function J(y,O){if(O=K({},O||c.value),typeof y=="string"){const a=ss(n,y,O.path),g=t.resolve({path:a.path},O),_=o.createHref(a.fullPath);return K(a,g,{params:h(g.params),hash:sn(a.hash),redirectedFrom:void 0,href:_})}let w;if(y.path!=null)w=K({},y,{path:ss(n,y.path,O.path).path});else{const a=K({},y.params);for(const g in a)a[g]==null&&delete a[g];w=K({},y,{params:d(a)}),O.params=d(O.params)}const P=t.resolve(w,O),B=y.hash||"";P.params=f(h(P.params));const se=du(s,K({},y,{hash:iu(B),path:P.path})),u=o.createHref(se);return K({fullPath:se,hash:B,query:s===Ho?$u(y.query):y.query||{}},P,{redirectedFrom:void 0,href:u})}function q(y){return typeof y=="string"?ss(n,y,c.value.path):K({},y)}function A(y,O){if(p!==y)return Dt(8,{from:O,to:y})}function M(y){return ne(y)}function Q(y){return M(K(q(y),{replace:!0}))}function ie(y){const O=y.matched[y.matched.length-1];if(O&&O.redirect){const{redirect:w}=O;let P=typeof w=="function"?w(y):w;return typeof P=="string"&&(P=P.includes("?")||P.includes("#")?P=q(P):{path:P},P.params={}),K({query:y.query,hash:y.hash,params:P.path!=null?{}:y.params},P)}}function ne(y,O){const w=p=J(y),P=c.value,B=y.state,se=y.force,u=y.replace===!0,a=ie(w);if(a)return ne(K(q(a),{state:typeof a=="object"?K({},B,a.state):B,force:se,replace:u}),O||w);const g=w;g.redirectedFrom=O;let _;return!se&&pu(s,P,w)&&(_=Dt(16,{to:g,from:P}),Je(P,P,!0,!1)),(_?Promise.resolve(_):Ce(g,P)).catch(v=>Ke(v)?Ke(v,2)?v:tt(v):j(v,g,P)).then(v=>{if(v){if(Ke(v,2))return ne(K({replace:u},q(v.to),{state:typeof v.to=="object"?K({},B,v.to.state):B,force:se}),O||g)}else v=ft(g,P,!0,u,B);return et(g,P,v),v})}function Pe(y,O){const w=A(y,O);return w?Promise.reject(w):Promise.resolve()}function Ze(y){const O=St.values().next().value;return O&&typeof O.runWithContext=="function"?O.runWithContext(y):y()}function Ce(y,O){let w;const[P,B,se]=Xu(y,O);w=os(P.reverse(),"beforeRouteLeave",y,O);for(const a of P)a.leaveGuards.forEach(g=>{w.push(it(g,y,O))});const u=Pe.bind(null,y,O);return w.push(u),Ee(w).then(()=>{w=[];for(const a of r.list())w.push(it(a,y,O));return w.push(u),Ee(w)}).then(()=>{w=os(B,"beforeRouteUpdate",y,O);for(const a of B)a.updateGuards.forEach(g=>{w.push(it(g,y,O))});return w.push(u),Ee(w)}).then(()=>{w=[];for(const a of se)if(a.beforeEnter)if(Me(a.beforeEnter))for(const g of a.beforeEnter)w.push(it(g,y,O));else w.push(it(a.beforeEnter,y,O));return w.push(u),Ee(w)}).then(()=>(y.matched.forEach(a=>a.enterCallbacks={}),w=os(se,"beforeRouteEnter",y,O,Ze),w.push(u),Ee(w))).then(()=>{w=[];for(const a of i.list())w.push(it(a,y,O));return w.push(u),Ee(w)}).catch(a=>Ke(a,8)?a:Promise.reject(a))}function et(y,O,w){l.list().forEach(P=>Ze(()=>P(y,O,w)))}function ft(y,O,w,P,B){const se=A(y,O);if(se)return se;const u=O===st,a=wt?history.state:{};w&&(P||u?o.replace(y.fullPath,K({scroll:u&&a&&a.scroll},B)):o.push(y.fullPath,B)),c.value=y,Je(y,O,w,u),tt()}let qe;function Ut(){qe||(qe=o.listen((y,O,w)=>{if(!an.listening)return;const P=J(y),B=ie(P);if(B){ne(K(B,{replace:!0}),P).catch(Qt);return}p=P;const se=c.value;wt&&Ru(Mo(se.fullPath,w.delta),Bn()),Ce(P,se).catch(u=>Ke(u,12)?u:Ke(u,2)?(ne(u.to,P).then(a=>{Ke(a,20)&&!w.delta&&w.type===on.pop&&o.go(-1,!1)}).catch(Qt),Promise.reject()):(w.delta&&o.go(-w.delta,!1),j(u,P,se))).then(u=>{u=u||ft(P,se,!1),u&&(w.delta&&!Ke(u,8)?o.go(-w.delta,!1):w.type===on.pop&&Ke(u,20)&&o.go(-1,!1)),et(P,se,u)}).catch(Qt)}))}let bt=kt(),re=kt(),W;function j(y,O,w){tt(y);const P=re.list();return P.length?P.forEach(B=>B(y,O,w)):console.error(y),Promise.reject(y)}function Be(){return W&&c.value!==st?Promise.resolve():new Promise((y,O)=>{bt.add([y,O])})}function tt(y){return W||(W=!y,Ut(),bt.list().forEach(([O,w])=>y?w(y):O()),bt.reset()),y}function Je(y,O,w,P){const{scrollBehavior:B}=e;if(!wt||!B)return Promise.resolve();const se=!w&&Su(Mo(y.fullPath,0))||(P||!w)&&history.state&&history.state.scroll||null;return Ds().then(()=>B(y,O,se)).then(u=>u&&bu(u)).catch(u=>j(u,y,O))}const ge=y=>o.go(y);let Rt;const St=new Set,an={currentRoute:c,listening:!0,addRoute:m,removeRoute:N,clearRoutes:t.clearRoutes,hasRoute:F,getRoutes:x,resolve:J,options:e,push:M,replace:Q,go:ge,back:()=>ge(-1),forward:()=>ge(1),beforeEach:r.add,beforeResolve:i.add,afterEach:l.add,onError:re.add,isReady:Be,install(y){const O=this;y.component("RouterLink",Gu),y.component("RouterView",zu),y.config.globalProperties.$router=O,Object.defineProperty(y.config.globalProperties,"$route",{enumerable:!0,get:()=>Mt(c)}),wt&&!Rt&&c.value===st&&(Rt=!0,M(o.location).catch(B=>{}));const w={};for(const B in st)Object.defineProperty(w,B,{get:()=>c.value[B],enumerable:!0});y.provide($s,O),y.provide(di,pr(w)),y.provide(_s,c);const P=y.unmount;St.add(y),y.unmount=function(){St.delete(y),St.size<1&&(p=st,qe&&qe(),qe=null,c.value=st,Rt=!1,W=!1),P()}}};function Ee(y){return y.reduce((O,w)=>O.then(()=>Ze(w)),Promise.resolve())}return an}function Xu(e,t){const n=[],s=[],o=[],r=Math.max(t.matched.length,e.matched.length);for(let i=0;i<r;i++){const l=t.matched[i];l&&(e.matched.find(p=>At(p,l))?s.push(l):n.push(l));const c=e.matched[i];c&&(t.matched.find(p=>At(p,c))||o.push(c))}return[n,s,o]}const Zu={props:{question:Object},data(){return{likes:0,comments:[],newComment:""}},computed:{levelText(){return`Level: ${this.question.level}`},levelClass(){return{"level-intern":this.question.level==="INTERN","level-junior":this.question.level==="JUNIOR","level-middle":this.question.level==="MIDDLE"}}},methods:{goToDetail(){this.$router.push(`/questions/${this.question.id}`)},likeQuestion(){this.likes++},addComment(){this.newComment.trim()&&(this.comments.push(this.newComment.trim()),this.newComment="")}}},ea={class:"question-text"};function ta(e,t,n,s,o,r){return je(),lt("div",{onClick:t[5]||(t[5]=(...i)=>r.goToDetail&&r.goToDetail(...i)),class:"question-card"},[Y("h3",ea,Tt(n.question.question),1),Y("p",{class:Jn([r.levelClass,"level-text"])},Tt(r.levelText),3),Y("div",{class:"like-section",onClick:t[1]||(t[1]=To(()=>{},["stop"]))},[Y("button",{onClick:t[0]||(t[0]=(...i)=>r.likeQuestion&&r.likeQuestion(...i)),class:"like-button"},"👍 "+Tt(o.likes)+" Like",1)]),Y("div",{class:"comments-section",onClick:t[4]||(t[4]=To(()=>{},["stop"]))},[t[6]||(t[6]=Y("h4",null,"Комментарии:",-1)),Y("ul",null,[(je(!0),lt(Ie,null,xr(o.comments,(i,l)=>(je(),lt("li",{key:l,class:"comment-item"},Tt(i),1))),128))]),Sr(Y("textarea",{"onUpdate:modelValue":t[2]||(t[2]=i=>o.newComment=i),placeholder:"Добавьте комментарий"},null,512),[[Dc,o.newComment]]),Y("button",{onClick:t[3]||(t[3]=(...i)=>r.addComment&&r.addComment(...i)),class:"add-comment-button"},"Добавить комментарий")])])}const na=un(Zu,[["render",ta],["__scopeId","data-v-9638ed63"]]),sa={components:{QuestionCard:na},props:{questions:Array},data(){return{currentLevel:"ALL",selectedAction:"ALL",shuffledQuestions:[]}},computed:{filteredQuestions(){return this.selectedAction==="SHUFFLE"?this.shuffledQuestions:this.currentLevel==="ALL"?this.questions:this.questions.filter(e=>e.level===this.currentLevel)}},methods:{handleAction(){this.selectedAction==="SHUFFLE"?this.shuffleQuestions():this.filterLevel(this.selectedAction)},filterLevel(e){this.currentLevel=e},shuffleQuestions(){this.shuffledQuestions=[...this.questions].sort(()=>Math.random()-.5)}}},oa={class:"filter-section"},ra={class:"question-grid"};function ia(e,t,n,s,o,r){const i=tn("QuestionCard");return je(),lt("div",null,[Y("div",oa,[Sr(Y("select",{"onUpdate:modelValue":t[0]||(t[0]=l=>o.selectedAction=l),id:"levelFilter",onChange:t[1]||(t[1]=(...l)=>r.handleAction&&r.handleAction(...l))},t[2]||(t[2]=[nc('<option value="ALL" data-v-fc0da70e>Все уровни</option><option value="INTERN" data-v-fc0da70e>Intern</option><option value="JUNIOR" data-v-fc0da70e>Junior</option><option value="MIDDLE" data-v-fc0da70e>Middle</option><option value="SHUFFLE" data-v-fc0da70e>Перемешать вопросы</option>',5)]),544),[[Uc,o.selectedAction]])]),Y("div",ra,[(je(!0),lt(Ie,null,xr(r.filteredQuestions,l=>(je(),Wr(i,{key:l.id,question:l},null,8,["question"]))),128))])])}const jt=un(sa,[["render",ia],["__scopeId","data-v-fc0da70e"]]),pi=[{id:1,question:"Что такое цикл событий (event loop) и как он работает?",answer:`
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
        `,level:"JUNIOR"},{id:2,question:"Какие типы данных есть в JS?",answer:`
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
        `,level:"JUNIOR"},{id:3,question:"Что такое NaN? Какого типа это значение? Как можно узнать, равно ли значение переменной NaN?",answer:`
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
        `,level:"JUNIOR"},{id:4,question:"В чем разница между let, const и var?",answer:`
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
        `,level:"JUNIOR"},{id:5,question:"Что такое this? Отличие this в function declaration и стрелочных функциях",answer:`
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
        `,level:"JUNIOR"},{id:6,question:"С помощью чего в JS реализуются наследование?",answer:`
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
        `,level:"JUNIOR"},{id:7,question:"Что такое IIFE (Immediately Invoked Function Expression)?",answer:`
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
        `,level:"JUNIOR"},{id:8,question:"В чем разница между == и ===?",answer:`
          <p>Операторы сравнения <code>==</code> (нестрогое равенство) и <code>===</code> (строгое равенство) используются для сравнения значений. Вот их различия:</p>
          <ul>
            <li><strong><code>==</code> (нестрогое равенство):</strong> выполняет приведение типов перед сравнением. Например:</li>
            <pre><code>console.log(5 == '5'); // true</code></pre>
            <li><strong><code>===</code> (строгое равенство):</strong> сравнивает значения без приведения типов, то есть сравнивает и типы, и значения:</li>
            <pre><code>console.log(5 === '5'); // false</code></pre>
          </ul>
        `,level:"JUNIOR"},{id:9,question:"Что такое замыкание в JavaScript?",answer:`
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
        `,level:"JUNIOR"},{id:10,question:"Что такое Promise, и какие бывают состояния",answer:`
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
        `,level:"JUNIOR"},{id:11,question:"В чем разница и схожесть между null и undefined?",answer:`
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
        `,level:"JUNIOR"},{id:12,question:"Почему результатом сравнения двух похожих объектов является false?",answer:`
          <p>При сравнении объектов в JavaScript используется сравнение по ссылке, а не по содержимому. Даже если объекты содержат одинаковые свойства и значения, они являются разными объектами в памяти.</p>
          <pre><code>
    const obj1 = { name: 'John', age: 25 };
    const obj2 = { name: 'John', age: 25 };
    
    console.log(obj1 === obj2); // false
          </code></pre>
          <p>Для сравнения содержимого объектов нужно сравнивать их свойства вручную.</p>
        `,level:"JUNIOR"},{id:13,question:"Для чего используется директива «use strict»?",answer:`
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
        `,level:"JUNIOR"},{id:15,question:"В чем разница между методами call, apply, bind?",answer:`
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
        `,level:"JUNIOR"},{id:17,question:"Что такое функции высшего порядка?",answer:`
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
        `,level:"JUNIOR"},{id:18,question:"Как создать объект, не имеющий прототипа?",answer:`
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
        `,level:"JUNIOR"},{id:19,question:"Что такое async/await?",answer:`
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
        `,level:"JUNIOR"},{id:20,question:"В чем разница между spread-оператором и rest-оператором?",answer:`
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
        `,level:"JUNIOR"}],bs=[{id:1,question:"Что такое НТ?",answer:`Нагрузочное тестирование (НТ) — это проверка устойчивости и производительности программного обеспечения под нагрузкой, сопоставимой с реальными условиями использования."
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
      `,level:"MIDDLE"}],hi=[{id:1,question:"",answer:`
 
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
       
        `,level:"JUNIOR"}],la={data(){return{question:null}},created(){const e=parseInt(this.$route.params.id),t=[...pi,...bs,...hi];this.question=t.find(n=>n.id===e)}},ca={key:0,class:"question-detail"},ua={class:"question-text"},aa={class:"answer-box"},fa=["innerHTML"];function da(e,t,n,s,o,r){const i=tn("router-link");return o.question?(je(),lt("div",ca,[Y("h2",ua,Tt(o.question.question),1),Y("div",aa,[Y("div",{innerHTML:o.question.answer,class:"answer-text"},null,8,fa)]),te(i,{to:"/",class:"back-button"},{default:He(()=>t[0]||(t[0]=[Fe("← Back to Questions")])),_:1})])):sc("",!0)}const pa=un(la,[["render",da],["__scopeId","data-v-5b3d56f6"]]),ha=[{id:1,question:"Что такое JMeter и для чего он используется?",answer:`
        <p>Приложение Apache JMeter ™ представляет собой программное обеспечение с открытым исходным кодом, на 100% чистое Java-приложение, предназначенное для нагрузочного тестирования функционального поведения и измерения производительности</p>
        <p>Apache JMeter может использоваться для тестирования производительности как статических, так и динамических ресурсов, веб-динамических приложений. Его можно использовать для моделирования высокой нагрузки на сервер, группу серверов, сеть или объект, чтобы проверить их прочность или проанализировать общую производительность при различных типах нагрузки.и</p>
        `},{id:2,question:"Какие типы тестов поддерживает JMeter (нагрузочные, функциональные и т.д.)?",answer:`
        <p>JMeter поддерживает несколько типов тестирования:</p>
        <ul>
            <li><strong>Нагрузочное тестирование (Load Testing)</strong> — измерение производительности системы при увеличении нагрузки (количество пользователей, запросов и т.д.).</li>
            <li><strong>Стресс-тестирование (Stress Testing)</strong> — проверка поведения системы при условиях, превышающих нормальные рабочие нагрузки, чтобы определить, когда система начинает давать сбои.</li>
            <li><strong>Тестирование производительности (Performance Testing)</strong> — измерение отклика системы и её производительности под определёнными нагрузками.</li>
            <li><strong>Тестирование стабильности (Soak Testing)</strong> — долговременное тестирование, целью которого является проверка стабильности системы под постоянной нагрузкой.</li>
            <li><strong>Функциональное тестирование (Functional Testing)</strong> — проверка правильности работы приложения или его отдельных функций, например, тестирование API.</li>
            <li><strong>Тестирование на основе протоколов (Protocol Testing)</strong> — проверка производительности и корректности работы приложений, использующих различные сетевые протоколы, такие как HTTP, FTP, SOAP, JDBC и другие.</li>
        </ul>
        `},{id:3,question:"Как установить JMeter на операционной системе Windows/Linux/Mac?",level:"JUNIOR"},{id:4,question:"Что такое тестовый план в JMeter и как его создать?",level:"JUNIOR"},{id:5,question:"Какие компоненты тестового плана существуют в JMeter?",level:"JUNIOR"},{id:6,question:"Как добавить HTTP Request в JMeter и для чего он используется?",level:"JUNIOR"},{id:7,question:"Что такое Sampler в JMeter и какие виды сэмплеров поддерживаются?",level:"JUNIOR"},{id:8,question:"Как настроить таймауты для HTTP запросов в JMeter?",level:"JUNIOR"},{id:9,question:"Как использовать Thread Group и что она определяет?",level:"JUNIOR"},{id:10,question:"Чем отличается Thread Group от Ultimate Thread Group?",level:"JUNIOR"},{id:11,question:"Как задать количество потоков (users) и время выполнения теста в Thread Group?",level:"JUNIOR"},{id:12,question:"Что такое Ramp-Up Period и как его правильно рассчитать?",level:"JUNIOR"},{id:13,question:"Что такое Listener в JMeter и как он используется для получения результатов?",level:"JUNIOR"},{id:14,question:"Какой Listener лучше всего использовать для анализа времени отклика и пропускной способности?",level:"JUNIOR"},{id:15,question:"Как экспортировать результаты тестирования в JMeter в формат CSV?",level:"JUNIOR"},{id:16,question:"Как создать отчеты на основе тестирования в JMeter?",level:"JUNIOR"},{id:17,question:"Какие плагины доступны для JMeter и как их установить?",level:"JUNIOR"},{id:18,question:"Как использовать JMeter для тестирования WebSocket-соединений?",level:"JUNIOR"},{id:19,question:"Что такое Assertion в JMeter и как его использовать для проверки ответа сервера?",level:"JUNIOR"},{id:20,question:"Как настроить Cookie Manager в JMeter?",level:"JUNIOR"},{id:21,question:"Что такое HTTP Proxy Server в JMeter и как с его помощью записать сценарий?",level:"JUNIOR"},{id:22,question:"Как тестировать REST API с использованием JMeter?",level:"JUNIOR"},{id:23,question:"Какие данные можно передавать через параметры HTTP запроса?",level:"JUNIOR"},{id:24,question:"Как использовать Timer в JMeter для контроля времени задержки между запросами?",level:"JUNIOR"},{id:25,question:"Что такое конфигурационные элементы в JMeter и как они работают?",level:"JUNIOR"},{id:26,question:"Как использовать CSV Data Set Config для параметризации данных в тесте JMeter?",level:"JUNIOR"},{id:27,question:"Что такое Post Processor и Pre Processor в JMeter? Примеры использования.",level:"JUNIOR"},{id:28,question:"Как использовать JMeter для тестирования производительности базы данных (JDBC Sampler)?",level:"JUNIOR"},{id:29,question:"Как настроить запуск теста с удаленных серверов в распределенном режиме в JMeter?",level:"JUNIOR"},{id:30,question:"Что такое BeanShell Sampler в JMeter и для чего он используется?",level:"JUNIOR"},{id:31,question:"Как происходит сбор и анализ метрик с использованием JMeter и внешних инструментов (например, InfluxDB или Grafana)?",level:"JUNIOR"},{id:32,question:"Какие параметры нужно учитывать для проведения нагрузочного тестирования в JMeter?",level:"JUNIOR"},{id:33,question:"Как работает автообновление параметров в JMeter при изменении данных?",level:"JUNIOR"},{id:34,question:"Какие ошибки могут возникнуть при тестировании с использованием JMeter и как их избежать?",level:"JUNIOR"},{id:35,question:"Как контролировать и уменьшать нагрузку на систему тестирования при большом количестве пользователей?",level:"JUNIOR"}],ga=[{id:1,question:"Что такое Chrome Dev Tools и для чего они используются?",level:"MID"},{id:2,question:"Как открыть и начать использовать Chrome Dev Tools в браузере?",level:"MID"},{id:3,question:"Как использовать вкладку Network для анализа сетевого трафика?",level:"MID"},{id:4,question:"Какие данные можно собирать на вкладке Network (время загрузки, статус код, размер и т.д.)?",level:"MID"},{id:5,question:"Как фильтровать запросы в Chrome Dev Tools по типу (XHR, JS, CSS и т.д.)?",level:"MID"},{id:6,question:"Как отслеживать время загрузки веб-страницы с помощью вкладки Network?",level:"MID"},{id:7,question:"Как работать с запросами и ответами HTTP на вкладке Network (просмотр, копирование и повторное выполнение запросов)?",level:"MID"},{id:8,question:"Как анализировать и устранять ошибки CORS с использованием Chrome Dev Tools?",level:"MID"},{id:9,question:"Что такое waterfall диаграмма и как ее интерпретировать для анализа производительности сайта?",level:"MID"},{id:10,question:"Как измерять и анализировать время ответа сервера с помощью Chrome Dev Tools?",level:"MID"},{id:11,question:"Как использовать вкладку Performance для анализа производительности рендеринга и JavaScript?",level:"MID"},{id:12,question:"Как отслеживать загрузку ресурсов (картинки, стили, скрипты) и их влияние на производительность?",level:"MID"},{id:13,question:"Как просматривать заголовки запросов и ответов HTTP с помощью Chrome Dev Tools?",level:"MID"},{id:14,question:"Как использовать вкладку Timeline для анализа активности на странице?",level:"MID"},{id:15,question:"Как анализировать и оптимизировать использование JavaScript с помощью вкладки Sources?",level:"MID"},{id:16,question:"Как отлаживать JavaScript-код с использованием Chrome Dev Tools (точки останова, пошаговое выполнение)?",level:"MID"},{id:17,question:"Как анализировать WebSocket соединения с помощью Chrome Dev Tools?",level:"MID"},{id:18,question:"Как просматривать и анализировать состояние кэша для оптимизации загрузки страниц?",level:"MID"},{id:19,question:"Как использовать вкладку Security для анализа сертификатов SSL и шифрования соединений?",level:"MID"},{id:20,question:"Как записывать и воспроизводить сетевые запросы с использованием инструмента HAR в Chrome Dev Tools?",level:"MID"},{id:21,question:"Как анализировать производительность сайта при медленных сетевых соединениях (использование профилирования сети)?",level:"MID"},{id:22,question:"Как использовать симуляцию медленных сетей и устройств с низкой производительностью для тестирования?",level:"MID"},{id:23,question:"Как работать с панелью Application для управления локальным хранилищем, куками и другими веб-данными?",level:"MID"},{id:24,question:"Как анализировать поток данных на уровне HTTP/2 с помощью Chrome Dev Tools?",level:"MID"},{id:25,question:"Какие инструменты Chrome Dev Tools можно использовать для профилирования производительности на мобильных устройствах?",level:"MID"},{id:26,question:"Как использовать панель Lighthouse для аудита производительности и SEO-оптимизации сайта?",level:"MID"},{id:27,question:"Как сохранить и экспортировать логи сети и производительности для дальнейшего анализа?",level:"MID"},{id:28,question:"Как отслеживать выполнение синхронных и асинхронных операций в JavaScript с помощью вкладки Sources?",level:"MID"},{id:29,question:"Как снимать и анализировать снимки стека вызовов (stack traces) в процессе выполнения JavaScript?",level:"MID"},{id:30,question:"Как использовать панель Memory для анализа утечек памяти и оптимизации использования памяти на веб-странице?",level:"MID"}],ma=[{id:1,question:"Что такое Git и для чего он используется?",level:"MID"},{id:2,question:"Как инициализировать новый репозиторий Git?",level:"MID"},{id:3,question:"Как добавить файлы в индекс (staging area) с помощью команды `git add`?",level:"MID"},{id:4,question:"Как выполнить коммит изменений с помощью команды `git commit`?",level:"MID"},{id:5,question:"Как просмотреть историю коммитов в Git с помощью команды `git log`?",level:"MID"},{id:6,question:"Что такое ветки (branches) в Git и как их создавать?",level:"MID"},{id:7,question:"Как переключаться между ветками в Git с помощью команды `git checkout`?",level:"MID"},{id:8,question:"Чем отличается команда `git merge` от команды `git rebase`?",level:"MID"},{id:9,question:"Как разрешить конфликты при слиянии веток в Git?",level:"MID"},{id:10,question:"Что такое `git pull` и как он отличается от `git fetch`?",level:"MID"},{id:11,question:"Как отменить последний коммит с помощью команды `git reset`?",level:"MID"},{id:12,question:"Как создать тег (tag) в Git для релиза?",level:"MID"},{id:13,question:"Как удалить файл из репозитория с помощью команды `git rm`?",level:"MID"},{id:14,question:"Как работать с удаленными репозиториями (remote repositories) в Git?",level:"MID"},{id:15,question:"Как просматривать и изменять историю коммитов с помощью команды `git reflog`?",level:"MID"},{id:16,question:"Что такое `git stash` и как его использовать для временного сохранения изменений?",level:"MID"},{id:17,question:"Как использовать команды `git cherry-pick` для выборочного переноса коммитов?",level:"MID"},{id:18,question:"Что такое submodules в Git и как их использовать?",level:"MID"},{id:19,question:"Как восстановить удаленные файлы или ветки с помощью команды `git reflog`?",level:"MID"},{id:20,question:"Как настроить глобальные и локальные конфигурации Git (например, имя пользователя, email)?",level:"MID"},{id:21,question:"Как создать alias для команд Git для упрощения работы?",level:"MID"},{id:22,question:"Что такое fast-forward merge и как он отличается от обычного merge?",level:"MID"},{id:23,question:"Как отложить коммит (amend) для внесения изменений в уже совершенный коммит?",level:"MID"},{id:24,question:"Как настроить hooks (хуки) в Git для выполнения автоматических действий перед или после коммита?",level:"MID"},{id:25,question:"Как работать с .gitignore и для чего он используется?",level:"MID"},{id:26,question:"Как работать с большими файлами и данными в Git с помощью Git LFS (Large File Storage)?",level:"MID"},{id:27,question:"Как настроить SSH-ключи для безопасной работы с удаленными репозиториями?",level:"MID"},{id:28,question:"Как клонировать удаленный репозиторий с помощью команды `git clone`?",level:"MID"},{id:29,question:"Как настроить двухфакторную аутентификацию для доступа к репозиторию?",level:"MID"},{id:30,question:"Как работать с ветками для параллельной разработки в Git Flow?",level:"MID"}],va=[{id:1,question:"Что такое Java и для чего она используется?",level:"JUNIOR"},{id:2,question:"Какие основные принципы объектно-ориентированного программирования (ООП) поддерживает Java?",level:"JUNIOR"},{id:3,question:"Как объявить и инициализировать переменную в Java?",level:"JUNIOR"},{id:4,question:"Какие типы данных существуют в Java (примитивные и ссылочные)?",level:"JUNIOR"},{id:5,question:"Что такое классы и объекты в Java?",level:"JUNIOR"},{id:6,question:"Как создать объект класса в Java и вызвать методы класса?",level:"JUNIOR"},{id:7,question:"Что такое конструктор в Java и как он используется для инициализации объекта?",level:"JUNIOR"},{id:8,question:"Каковы отличия между статическими методами и методами экземпляра в Java?",level:"JUNIOR"},{id:9,question:"Что такое инкапсуляция и как она реализуется в Java?",level:"JUNIOR"},{id:10,question:"Как работать с наследованием в Java и для чего оно используется?",level:"JUNIOR"},{id:11,question:"Что такое интерфейсы в Java и как они используются?",level:"JUNIOR"},{id:12,question:"Что такое абстрактный класс и чем он отличается от интерфейса в Java?",level:"JUNIOR"},{id:13,question:"Что такое полиморфизм и как он работает в Java?",level:"JUNIOR"},{id:14,question:"Как работают исключения (exceptions) в Java и как они обрабатываются?",level:"JUNIOR"},{id:15,question:"Как использовать `try-catch-finally` для обработки исключений в Java?",level:"JUNIOR"},{id:16,question:"Что такое коллекторы (Garbage Collection) в Java и как они работают?",level:"JUNIOR"},{id:17,question:"Какова роль метода `main()` в Java и что он означает?",level:"JUNIOR"},{id:18,question:"Какие существуют коллекции в Java (например, `ArrayList`, `HashMap`, `Set`) и как с ними работать?",level:"JUNIOR"},{id:19,question:"Что такое Generics в Java и как они используются?",level:"JUNIOR"},{id:20,question:"Как работает цикл `for-each` в Java и когда его следует использовать?",level:"JUNIOR"},{id:21,question:"Как организовать многопоточность в Java (классы `Thread` и интерфейс `Runnable`)?",level:"JUNIOR"},{id:22,question:"Что такое синхронизация потоков в Java и как её реализовать?",level:"JUNIOR"},{id:23,question:"Что такое лямбда-выражения в Java и как их использовать?",level:"JUNIOR"},{id:24,question:"Как работать с файлами и потоками ввода-вывода (I/O) в Java?",level:"JUNIOR"},{id:25,question:"Как работает система модулей (modules) в Java?",level:"JUNIOR"},{id:26,question:"Что такое Enum в Java и как он используется?",level:"JUNIOR"},{id:27,question:"Как подключать и использовать сторонние библиотеки в Java с помощью Maven или Gradle?",level:"JUNIOR"},{id:28,question:"Как организовать работу с базами данных в Java (JDBC, ORM)?",level:"JUNIOR"},{id:29,question:"Как использовать аннотации в Java и для чего они нужны?",level:"JUNIOR"},{id:30,question:"Как выполнять юнит-тестирование в Java с использованием JUnit?",level:"JUNIOR"}],ya={name:"ToolsList"},_a={class:"tools-list"};function ba(e,t,n,s,o,r){const i=tn("router-link");return je(),lt("div",_a,[t[4]||(t[4]=Y("h2",null,"Выберите инструмент",-1)),Y("ul",null,[Y("li",null,[te(i,{to:"/tools/jmeter"},{default:He(()=>t[0]||(t[0]=[Fe("Jmeter")])),_:1})]),Y("li",null,[te(i,{to:"/tools/chrome"},{default:He(()=>t[1]||(t[1]=[Fe("Chrome DevTools")])),_:1})]),Y("li",null,[te(i,{to:"/tools/git"},{default:He(()=>t[2]||(t[2]=[Fe("Git")])),_:1})]),Y("li",null,[te(i,{to:"/tools/java"},{default:He(()=>t[3]||(t[3]=[Fe("Java")])),_:1})])])])}const Ra=un(ya,[["render",ba],["__scopeId","data-v-acdd3fa3"]]),Sa=[{path:"/",component:jt,props:{questions:bs}},{path:"/performance",component:jt,props:{questions:bs}},{path:"/frontend",component:jt,props:{questions:pi}},{path:"/backend",component:jt,props:{questions:hi}},{path:"/tools",component:Ra},{path:"/tools/:tool",component:jt,props:e=>({questions:Ia(e.params.tool)})},{path:"/questions/:id",component:pa}],Ea=Yu({history:Ou(),routes:Sa});function Ia(e){return{jmeter:ha,chrome:ga,git:ma,java:va}[e]||[]}jc(Qc).use(Ea).mount("#app");
