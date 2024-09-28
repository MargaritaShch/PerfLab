(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();/**
* @vue/shared v3.5.6
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function ms(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const Y={},wt=[],qe=()=>{},di=()=>!1,wn=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),_s=e=>e.startsWith("onUpdate:"),ie=Object.assign,vs=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},pi=Object.prototype.hasOwnProperty,V=(e,t)=>pi.call(e,t),F=Array.isArray,xt=e=>tn(e)==="[object Map]",xn=e=>tn(e)==="[object Set]",js=e=>tn(e)==="[object Date]",q=e=>typeof e=="function",ne=e=>typeof e=="string",ke=e=>typeof e=="symbol",Z=e=>e!==null&&typeof e=="object",kr=e=>(Z(e)||q(e))&&q(e.then)&&q(e.catch),$r=Object.prototype.toString,tn=e=>$r.call(e),hi=e=>tn(e).slice(8,-1),jr=e=>tn(e)==="[object Object]",ys=e=>ne(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,$t=ms(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Pn=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},gi=/-(\w)/g,Oe=Pn(e=>e.replace(gi,(t,n)=>n?n.toUpperCase():"")),mi=/\B([A-Z])/g,_t=Pn(e=>e.replace(mi,"-$1").toLowerCase()),Cn=Pn(e=>e.charAt(0).toUpperCase()+e.slice(1)),jn=Pn(e=>e?`on${Cn(e)}`:""),ot=(e,t)=>!Object.is(e,t),dn=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},Vr=(e,t,n,s=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:s,value:n})},vn=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Vs;const Br=()=>Vs||(Vs=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function bs(e){if(F(e)){const t={};for(let n=0;n<e.length;n++){const s=e[n],r=ne(s)?bi(s):bs(s);if(r)for(const o in r)t[o]=r[o]}return t}else if(ne(e)||Z(e))return e}const _i=/;(?![^(]*\))/g,vi=/:([^]+)/,yi=/\/\*[^]*?\*\//g;function bi(e){const t={};return e.replace(yi,"").split(_i).forEach(n=>{if(n){const s=n.split(vi);s.length>1&&(t[s[0].trim()]=s[1].trim())}}),t}function On(e){let t="";if(ne(e))t=e;else if(F(e))for(let n=0;n<e.length;n++){const s=On(e[n]);s&&(t+=s+" ")}else if(Z(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Ei="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Si=ms(Ei);function Jr(e){return!!e||e===""}function Ri(e,t){if(e.length!==t.length)return!1;let n=!0;for(let s=0;n&&s<e.length;s++)n=An(e[s],t[s]);return n}function An(e,t){if(e===t)return!0;let n=js(e),s=js(t);if(n||s)return n&&s?e.getTime()===t.getTime():!1;if(n=ke(e),s=ke(t),n||s)return e===t;if(n=F(e),s=F(t),n||s)return n&&s?Ri(e,t):!1;if(n=Z(e),s=Z(t),n||s){if(!n||!s)return!1;const r=Object.keys(e).length,o=Object.keys(t).length;if(r!==o)return!1;for(const i in e){const l=e.hasOwnProperty(i),c=t.hasOwnProperty(i);if(l&&!c||!l&&c||!An(e[i],t[i]))return!1}}return String(e)===String(t)}function Ti(e,t){return e.findIndex(n=>An(n,t))}const Kr=e=>!!(e&&e.__v_isRef===!0),Tt=e=>ne(e)?e:e==null?"":F(e)||Z(e)&&(e.toString===$r||!q(e.toString))?Kr(e)?Tt(e.value):JSON.stringify(e,Wr,2):String(e),Wr=(e,t)=>Kr(t)?Wr(e,t.value):xt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[s,r],o)=>(n[Vn(s,o)+" =>"]=r,n),{})}:xn(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>Vn(n))}:ke(t)?Vn(t):Z(t)&&!F(t)&&!jr(t)?String(t):t,Vn=(e,t="")=>{var n;return ke(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.5.6
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let be;class wi{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=be,!t&&be&&(this.index=(be.scopes||(be.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].pause();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].resume();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].resume()}}run(t){if(this._active){const n=be;try{return be=this,t()}finally{be=n}}}on(){be=this}off(){be=this.parent}stop(t){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function xi(){return be}let z;const Bn=new WeakSet;class Gr{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,be&&be.active&&be.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Bn.has(this)&&(Bn.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||zr(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Bs(this),Yr(this);const t=z,n=Ce;z=this,Ce=!0;try{return this.fn()}finally{Xr(this),z=t,Ce=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Rs(t);this.deps=this.depsTail=void 0,Bs(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Bn.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){ts(this)&&this.run()}get dirty(){return ts(this)}}let Qr=0,jt;function zr(e){e.flags|=8,e.next=jt,jt=e}function Es(){Qr++}function Ss(){if(--Qr>0)return;let e;for(;jt;){let t=jt;for(jt=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(s){e||(e=s)}t=n}}if(e)throw e}function Yr(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Xr(e){let t,n=e.depsTail,s=n;for(;s;){const r=s.prevDep;s.version===-1?(s===n&&(n=r),Rs(s),Pi(s)):t=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=r}e.deps=t,e.depsTail=n}function ts(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Zr(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function Zr(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Gt))return;e.globalVersion=Gt;const t=e.dep;if(e.flags|=2,t.version>0&&!e.isSSR&&e.deps&&!ts(e)){e.flags&=-3;return}const n=z,s=Ce;z=e,Ce=!0;try{Yr(e);const r=e.fn(e._value);(t.version===0||ot(r,e._value))&&(e._value=r,t.version++)}catch(r){throw t.version++,r}finally{z=n,Ce=s,Xr(e),e.flags&=-3}}function Rs(e){const{dep:t,prevSub:n,nextSub:s}=e;if(n&&(n.nextSub=s,e.prevSub=void 0),s&&(s.prevSub=n,e.nextSub=void 0),t.subs===e&&(t.subs=n),!t.subs&&t.computed){t.computed.flags&=-5;for(let r=t.computed.deps;r;r=r.nextDep)Rs(r)}}function Pi(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let Ce=!0;const eo=[];function it(){eo.push(Ce),Ce=!1}function lt(){const e=eo.pop();Ce=e===void 0?!0:e}function Bs(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=z;z=void 0;try{t()}finally{z=n}}}let Gt=0;class Ci{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Ts{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0}track(t){if(!z||!Ce||z===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==z)n=this.activeLink=new Ci(z,this),z.deps?(n.prevDep=z.depsTail,z.depsTail.nextDep=n,z.depsTail=n):z.deps=z.depsTail=n,z.flags&4&&to(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=z.depsTail,n.nextDep=void 0,z.depsTail.nextDep=n,z.depsTail=n,z.deps===n&&(z.deps=s)}return n}trigger(t){this.version++,Gt++,this.notify(t)}notify(t){Es();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Ss()}}}function to(e){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let s=t.deps;s;s=s.nextDep)to(s)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}const ns=new WeakMap,pt=Symbol(""),ss=Symbol(""),Qt=Symbol("");function de(e,t,n){if(Ce&&z){let s=ns.get(e);s||ns.set(e,s=new Map);let r=s.get(n);r||s.set(n,r=new Ts),r.track()}}function We(e,t,n,s,r,o){const i=ns.get(e);if(!i){Gt++;return}const l=c=>{c&&c.trigger()};if(Es(),t==="clear")i.forEach(l);else{const c=F(e),p=c&&ys(n);if(c&&n==="length"){const f=Number(s);i.forEach((d,h)=>{(h==="length"||h===Qt||!ke(h)&&h>=f)&&l(d)})}else switch(n!==void 0&&l(i.get(n)),p&&l(i.get(Qt)),t){case"add":c?p&&l(i.get("length")):(l(i.get(pt)),xt(e)&&l(i.get(ss)));break;case"delete":c||(l(i.get(pt)),xt(e)&&l(i.get(ss)));break;case"set":xt(e)&&l(i.get(pt));break}}Ss()}function Et(e){const t=B(e);return t===e?t:(de(t,"iterate",Qt),we(e)?t:t.map(ce))}function Mn(e){return de(e=B(e),"iterate",Qt),e}const Oi={__proto__:null,[Symbol.iterator](){return Jn(this,Symbol.iterator,ce)},concat(...e){return Et(this).concat(...e.map(t=>F(t)?Et(t):t))},entries(){return Jn(this,"entries",e=>(e[1]=ce(e[1]),e))},every(e,t){return Ve(this,"every",e,t,void 0,arguments)},filter(e,t){return Ve(this,"filter",e,t,n=>n.map(ce),arguments)},find(e,t){return Ve(this,"find",e,t,ce,arguments)},findIndex(e,t){return Ve(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return Ve(this,"findLast",e,t,ce,arguments)},findLastIndex(e,t){return Ve(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return Ve(this,"forEach",e,t,void 0,arguments)},includes(...e){return Kn(this,"includes",e)},indexOf(...e){return Kn(this,"indexOf",e)},join(e){return Et(this).join(e)},lastIndexOf(...e){return Kn(this,"lastIndexOf",e)},map(e,t){return Ve(this,"map",e,t,void 0,arguments)},pop(){return Ft(this,"pop")},push(...e){return Ft(this,"push",e)},reduce(e,...t){return Js(this,"reduce",e,t)},reduceRight(e,...t){return Js(this,"reduceRight",e,t)},shift(){return Ft(this,"shift")},some(e,t){return Ve(this,"some",e,t,void 0,arguments)},splice(...e){return Ft(this,"splice",e)},toReversed(){return Et(this).toReversed()},toSorted(e){return Et(this).toSorted(e)},toSpliced(...e){return Et(this).toSpliced(...e)},unshift(...e){return Ft(this,"unshift",e)},values(){return Jn(this,"values",ce)}};function Jn(e,t,n){const s=Mn(e),r=s[t]();return s!==e&&!we(e)&&(r._next=r.next,r.next=()=>{const o=r._next();return o.value&&(o.value=n(o.value)),o}),r}const Ai=Array.prototype;function Ve(e,t,n,s,r,o){const i=Mn(e),l=i!==e&&!we(e),c=i[t];if(c!==Ai[t]){const d=c.apply(e,o);return l?ce(d):d}let p=n;i!==e&&(l?p=function(d,h){return n.call(this,ce(d),h,e)}:n.length>2&&(p=function(d,h){return n.call(this,d,h,e)}));const f=c.call(i,p,s);return l&&r?r(f):f}function Js(e,t,n,s){const r=Mn(e);let o=n;return r!==e&&(we(e)?n.length>3&&(o=function(i,l,c){return n.call(this,i,l,c,e)}):o=function(i,l,c){return n.call(this,i,ce(l),c,e)}),r[t](o,...s)}function Kn(e,t,n){const s=B(e);de(s,"iterate",Qt);const r=s[t](...n);return(r===-1||r===!1)&&Cs(n[0])?(n[0]=B(n[0]),s[t](...n)):r}function Ft(e,t,n=[]){it(),Es();const s=B(e)[t].apply(e,n);return Ss(),lt(),s}const Mi=ms("__proto__,__v_isRef,__isVue"),no=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(ke));function Ii(e){ke(e)||(e=String(e));const t=B(this);return de(t,"has",e),t.hasOwnProperty(e)}class so{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,s){const r=this._isReadonly,o=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return o;if(n==="__v_raw")return s===(r?o?Ji:lo:o?io:oo).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(s)?t:void 0;const i=F(t);if(!r){let c;if(i&&(c=Oi[n]))return c;if(n==="hasOwnProperty")return Ii}const l=Reflect.get(t,n,fe(t)?t:s);return(ke(n)?no.has(n):Mi(n))||(r||de(t,"get",n),o)?l:fe(l)?i&&ys(n)?l:l.value:Z(l)?r?uo(l):Nn(l):l}}class ro extends so{constructor(t=!1){super(!1,t)}set(t,n,s,r){let o=t[n];if(!this._isShallow){const c=gt(o);if(!we(s)&&!gt(s)&&(o=B(o),s=B(s)),!F(t)&&fe(o)&&!fe(s))return c?!1:(o.value=s,!0)}const i=F(t)&&ys(n)?Number(n)<t.length:V(t,n),l=Reflect.set(t,n,s,fe(t)?t:r);return t===B(r)&&(i?ot(s,o)&&We(t,"set",n,s):We(t,"add",n,s)),l}deleteProperty(t,n){const s=V(t,n);t[n];const r=Reflect.deleteProperty(t,n);return r&&s&&We(t,"delete",n,void 0),r}has(t,n){const s=Reflect.has(t,n);return(!ke(n)||!no.has(n))&&de(t,"has",n),s}ownKeys(t){return de(t,"iterate",F(t)?"length":pt),Reflect.ownKeys(t)}}class Ni extends so{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const Li=new ro,Hi=new Ni,Di=new ro(!0);const ws=e=>e,In=e=>Reflect.getPrototypeOf(e);function on(e,t,n=!1,s=!1){e=e.__v_raw;const r=B(e),o=B(t);n||(ot(t,o)&&de(r,"get",t),de(r,"get",o));const{has:i}=In(r),l=s?ws:n?Os:ce;if(i.call(r,t))return l(e.get(t));if(i.call(r,o))return l(e.get(o));e!==r&&e.get(t)}function ln(e,t=!1){const n=this.__v_raw,s=B(n),r=B(e);return t||(ot(e,r)&&de(s,"has",e),de(s,"has",r)),e===r?n.has(e):n.has(e)||n.has(r)}function cn(e,t=!1){return e=e.__v_raw,!t&&de(B(e),"iterate",pt),Reflect.get(e,"size",e)}function Ks(e,t=!1){!t&&!we(e)&&!gt(e)&&(e=B(e));const n=B(this);return In(n).has.call(n,e)||(n.add(e),We(n,"add",e,e)),this}function Ws(e,t,n=!1){!n&&!we(t)&&!gt(t)&&(t=B(t));const s=B(this),{has:r,get:o}=In(s);let i=r.call(s,e);i||(e=B(e),i=r.call(s,e));const l=o.call(s,e);return s.set(e,t),i?ot(t,l)&&We(s,"set",e,t):We(s,"add",e,t),this}function Gs(e){const t=B(this),{has:n,get:s}=In(t);let r=n.call(t,e);r||(e=B(e),r=n.call(t,e)),s&&s.call(t,e);const o=t.delete(e);return r&&We(t,"delete",e,void 0),o}function Qs(){const e=B(this),t=e.size!==0,n=e.clear();return t&&We(e,"clear",void 0,void 0),n}function un(e,t){return function(s,r){const o=this,i=o.__v_raw,l=B(i),c=t?ws:e?Os:ce;return!e&&de(l,"iterate",pt),i.forEach((p,f)=>s.call(r,c(p),c(f),o))}}function an(e,t,n){return function(...s){const r=this.__v_raw,o=B(r),i=xt(o),l=e==="entries"||e===Symbol.iterator&&i,c=e==="keys"&&i,p=r[e](...s),f=n?ws:t?Os:ce;return!t&&de(o,"iterate",c?ss:pt),{next(){const{value:d,done:h}=p.next();return h?{value:d,done:h}:{value:l?[f(d[0]),f(d[1])]:f(d),done:h}},[Symbol.iterator](){return this}}}}function et(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function Fi(){const e={get(o){return on(this,o)},get size(){return cn(this)},has:ln,add:Ks,set:Ws,delete:Gs,clear:Qs,forEach:un(!1,!1)},t={get(o){return on(this,o,!1,!0)},get size(){return cn(this)},has:ln,add(o){return Ks.call(this,o,!0)},set(o,i){return Ws.call(this,o,i,!0)},delete:Gs,clear:Qs,forEach:un(!1,!0)},n={get(o){return on(this,o,!0)},get size(){return cn(this,!0)},has(o){return ln.call(this,o,!0)},add:et("add"),set:et("set"),delete:et("delete"),clear:et("clear"),forEach:un(!0,!1)},s={get(o){return on(this,o,!0,!0)},get size(){return cn(this,!0)},has(o){return ln.call(this,o,!0)},add:et("add"),set:et("set"),delete:et("delete"),clear:et("clear"),forEach:un(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(o=>{e[o]=an(o,!1,!1),n[o]=an(o,!0,!1),t[o]=an(o,!1,!0),s[o]=an(o,!0,!0)}),[e,n,t,s]}const[Ui,qi,ki,$i]=Fi();function xs(e,t){const n=t?e?$i:ki:e?qi:Ui;return(s,r,o)=>r==="__v_isReactive"?!e:r==="__v_isReadonly"?e:r==="__v_raw"?s:Reflect.get(V(n,r)&&r in s?n:s,r,o)}const ji={get:xs(!1,!1)},Vi={get:xs(!1,!0)},Bi={get:xs(!0,!1)};const oo=new WeakMap,io=new WeakMap,lo=new WeakMap,Ji=new WeakMap;function Ki(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Wi(e){return e.__v_skip||!Object.isExtensible(e)?0:Ki(hi(e))}function Nn(e){return gt(e)?e:Ps(e,!1,Li,ji,oo)}function co(e){return Ps(e,!1,Di,Vi,io)}function uo(e){return Ps(e,!0,Hi,Bi,lo)}function Ps(e,t,n,s,r){if(!Z(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const o=r.get(e);if(o)return o;const i=Wi(e);if(i===0)return e;const l=new Proxy(e,i===2?s:n);return r.set(e,l),l}function Pt(e){return gt(e)?Pt(e.__v_raw):!!(e&&e.__v_isReactive)}function gt(e){return!!(e&&e.__v_isReadonly)}function we(e){return!!(e&&e.__v_isShallow)}function Cs(e){return e?!!e.__v_raw:!1}function B(e){const t=e&&e.__v_raw;return t?B(t):e}function Gi(e){return!V(e,"__v_skip")&&Object.isExtensible(e)&&Vr(e,"__v_skip",!0),e}const ce=e=>Z(e)?Nn(e):e,Os=e=>Z(e)?uo(e):e;function fe(e){return e?e.__v_isRef===!0:!1}function Qi(e){return ao(e,!1)}function zi(e){return ao(e,!0)}function ao(e,t){return fe(e)?e:new Yi(e,t)}class Yi{constructor(t,n){this.dep=new Ts,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:B(t),this._value=n?t:ce(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,s=this.__v_isShallow||we(t)||gt(t);t=s?t:B(t),ot(t,n)&&(this._rawValue=t,this._value=s?t:ce(t),this.dep.trigger())}}function Ct(e){return fe(e)?e.value:e}const Xi={get:(e,t,n)=>t==="__v_raw"?e:Ct(Reflect.get(e,t,n)),set:(e,t,n,s)=>{const r=e[t];return fe(r)&&!fe(n)?(r.value=n,!0):Reflect.set(e,t,n,s)}};function fo(e){return Pt(e)?e:new Proxy(e,Xi)}class Zi{constructor(t,n,s){this.fn=t,this.setter=n,this._value=void 0,this.dep=new Ts(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Gt-1,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&z!==this)return zr(this),!0}get value(){const t=this.dep.track();return Zr(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function el(e,t,n=!1){let s,r;return q(e)?s=e:(s=e.get,r=e.set),new Zi(s,r,n)}const fn={},yn=new WeakMap;let ft;function tl(e,t=!1,n=ft){if(n){let s=yn.get(n);s||yn.set(n,s=[]),s.push(e)}}function nl(e,t,n=Y){const{immediate:s,deep:r,once:o,scheduler:i,augmentJob:l,call:c}=n,p=A=>r?A:we(A)||r===!1||r===0?Ke(A,1):Ke(A);let f,d,h,m,C=!1,O=!1;if(fe(e)?(d=()=>e.value,C=we(e)):Pt(e)?(d=()=>p(e),C=!0):F(e)?(O=!0,C=e.some(A=>Pt(A)||we(A)),d=()=>e.map(A=>{if(fe(A))return A.value;if(Pt(A))return p(A);if(q(A))return c?c(A,2):A()})):q(e)?t?d=c?()=>c(e,2):e:d=()=>{if(h){it();try{h()}finally{lt()}}const A=ft;ft=f;try{return c?c(e,3,[m]):e(m)}finally{ft=A}}:d=qe,t&&r){const A=d,Q=r===!0?1/0:r;d=()=>Ke(A(),Q)}const k=xi(),L=()=>{f.stop(),k&&vs(k.effects,f)};if(o&&t){const A=t;t=(...Q)=>{A(...Q),L()}}let N=O?new Array(e.length).fill(fn):fn;const H=A=>{if(!(!(f.flags&1)||!f.dirty&&!A))if(t){const Q=f.run();if(r||C||(O?Q.some((oe,ee)=>ot(oe,N[ee])):ot(Q,N))){h&&h();const oe=ft;ft=f;try{const ee=[Q,N===fn?void 0:O&&N[0]===fn?[]:N,m];c?c(t,3,ee):t(...ee),N=Q}finally{ft=oe}}}else f.run()};return l&&l(H),f=new Gr(d),f.scheduler=i?()=>i(H,!1):H,m=A=>tl(A,!1,f),h=f.onStop=()=>{const A=yn.get(f);if(A){if(c)c(A,4);else for(const Q of A)Q();yn.delete(f)}},t?s?H(!0):N=f.run():i?i(H.bind(null,!0),!0):f.run(),L.pause=f.pause.bind(f),L.resume=f.resume.bind(f),L.stop=L,L}function Ke(e,t=1/0,n){if(t<=0||!Z(e)||e.__v_skip||(n=n||new Set,n.has(e)))return e;if(n.add(e),t--,fe(e))Ke(e.value,t,n);else if(F(e))for(let s=0;s<e.length;s++)Ke(e[s],t,n);else if(xn(e)||xt(e))e.forEach(s=>{Ke(s,t,n)});else if(jr(e)){for(const s in e)Ke(e[s],t,n);for(const s of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,s)&&Ke(e[s],t,n)}return e}/**
* @vue/runtime-core v3.5.6
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function nn(e,t,n,s){try{return s?e(...s):e()}catch(r){Ln(r,t,n)}}function $e(e,t,n,s){if(q(e)){const r=nn(e,t,n,s);return r&&kr(r)&&r.catch(o=>{Ln(o,t,n)}),r}if(F(e)){const r=[];for(let o=0;o<e.length;o++)r.push($e(e[o],t,n,s));return r}}function Ln(e,t,n,s=!0){const r=t?t.vnode:null,{errorHandler:o,throwUnhandledErrorInProduction:i}=t&&t.appContext.config||Y;if(t){let l=t.parent;const c=t.proxy,p=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const f=l.ec;if(f){for(let d=0;d<f.length;d++)if(f[d](e,c,p)===!1)return}l=l.parent}if(o){it(),nn(o,null,10,[e,c,p]),lt();return}}sl(e,n,r,s,i)}function sl(e,t,n,s=!0,r=!1){if(r)throw e;console.error(e)}let zt=!1,rs=!1;const he=[];let Fe=0;const Ot=[];let nt=null,St=0;const po=Promise.resolve();let As=null;function Ms(e){const t=As||po;return e?t.then(this?e.bind(this):e):t}function rl(e){let t=zt?Fe+1:0,n=he.length;for(;t<n;){const s=t+n>>>1,r=he[s],o=Yt(r);o<e||o===e&&r.flags&2?t=s+1:n=s}return t}function Is(e){if(!(e.flags&1)){const t=Yt(e),n=he[he.length-1];!n||!(e.flags&2)&&t>=Yt(n)?he.push(e):he.splice(rl(t),0,e),e.flags|=1,ho()}}function ho(){!zt&&!rs&&(rs=!0,As=po.then(mo))}function ol(e){F(e)?Ot.push(...e):nt&&e.id===-1?nt.splice(St+1,0,e):e.flags&1||(Ot.push(e),e.flags|=1),ho()}function zs(e,t,n=zt?Fe+1:0){for(;n<he.length;n++){const s=he[n];if(s&&s.flags&2){if(e&&s.id!==e.uid)continue;he.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&=-2}}}function go(e){if(Ot.length){const t=[...new Set(Ot)].sort((n,s)=>Yt(n)-Yt(s));if(Ot.length=0,nt){nt.push(...t);return}for(nt=t,St=0;St<nt.length;St++){const n=nt[St];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}nt=null,St=0}}const Yt=e=>e.id==null?e.flags&2?-1:1/0:e.id;function mo(e){rs=!1,zt=!0;try{for(Fe=0;Fe<he.length;Fe++){const t=he[Fe];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),nn(t,t.i,t.i?15:14),t.flags&=-2)}}finally{for(;Fe<he.length;Fe++){const t=he[Fe];t&&(t.flags&=-2)}Fe=0,he.length=0,go(),zt=!1,As=null,(he.length||Ot.length)&&mo()}}let Ee=null,_o=null;function bn(e){const t=Ee;return Ee=e,_o=e&&e.type.__scopeId||null,t}function vo(e,t=Ee,n){if(!t||e._n)return e;const s=(...r)=>{s._d&&or(-1);const o=bn(t);let i;try{i=e(...r)}finally{bn(o),s._d&&or(1)}return i};return s._n=!0,s._c=!0,s._d=!0,s}function yo(e,t){if(Ee===null)return e;const n=qn(Ee),s=e.dirs||(e.dirs=[]);for(let r=0;r<t.length;r++){let[o,i,l,c=Y]=t[r];o&&(q(o)&&(o={mounted:o,updated:o}),o.deep&&Ke(i),s.push({dir:o,instance:n,value:i,oldValue:void 0,arg:l,modifiers:c}))}return e}function ut(e,t,n,s){const r=e.dirs,o=t&&t.dirs;for(let i=0;i<r.length;i++){const l=r[i];o&&(l.oldValue=o[i].value);let c=l.dir[s];c&&(it(),$e(c,n,8,[e.el,l,e,t]),lt())}}const il=Symbol("_vte"),ll=e=>e.__isTeleport;function Ns(e,t){e.shapeFlag&6&&e.component?(e.transition=t,Ns(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}/*! #__NO_SIDE_EFFECTS__ */function bo(e,t){return q(e)?ie({name:e.name},t,{setup:e}):e}function Eo(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function os(e,t,n,s,r=!1){if(F(e)){e.forEach((C,O)=>os(C,t&&(F(t)?t[O]:t),n,s,r));return}if(Vt(s)&&!r)return;const o=s.shapeFlag&4?qn(s.component):s.el,i=r?null:o,{i:l,r:c}=e,p=t&&t.r,f=l.refs===Y?l.refs={}:l.refs,d=l.setupState,h=B(d),m=d===Y?()=>!1:C=>V(h,C);if(p!=null&&p!==c&&(ne(p)?(f[p]=null,m(p)&&(d[p]=null)):fe(p)&&(p.value=null)),q(c))nn(c,l,12,[i,f]);else{const C=ne(c),O=fe(c);if(C||O){const k=()=>{if(e.f){const L=C?m(c)?d[c]:f[c]:c.value;r?F(L)&&vs(L,o):F(L)?L.includes(o)||L.push(o):C?(f[c]=[o],m(c)&&(d[c]=f[c])):(c.value=[o],e.k&&(f[e.k]=c.value))}else C?(f[c]=i,m(c)&&(d[c]=i)):O&&(c.value=i,e.k&&(f[e.k]=i))};i?(k.id=-1,ye(k,n)):k()}}}const Vt=e=>!!e.type.__asyncLoader,So=e=>e.type.__isKeepAlive;function cl(e,t){Ro(e,"a",t)}function ul(e,t){Ro(e,"da",t)}function Ro(e,t,n=ue){const s=e.__wdc||(e.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return e()});if(Hn(t,s,n),n){let r=n.parent;for(;r&&r.parent;)So(r.parent.vnode)&&al(s,t,n,r),r=r.parent}}function al(e,t,n,s){const r=Hn(t,e,s,!0);To(()=>{vs(s[t],r)},n)}function Hn(e,t,n=ue,s=!1){if(n){const r=n[e]||(n[e]=[]),o=t.__weh||(t.__weh=(...i)=>{it();const l=sn(n),c=$e(t,n,e,i);return l(),lt(),c});return s?r.unshift(o):r.push(o),o}}const ze=e=>(t,n=ue)=>{(!Un||e==="sp")&&Hn(e,(...s)=>t(...s),n)},fl=ze("bm"),dl=ze("m"),pl=ze("bu"),hl=ze("u"),gl=ze("bum"),To=ze("um"),ml=ze("sp"),_l=ze("rtg"),vl=ze("rtc");function yl(e,t=ue){Hn("ec",e,t)}const wo="components";function Ls(e,t){return El(wo,e,!0,t)||e}const bl=Symbol.for("v-ndc");function El(e,t,n=!0,s=!1){const r=Ee||ue;if(r){const o=r.type;if(e===wo){const l=uc(o,!1);if(l&&(l===t||l===Oe(t)||l===Cn(Oe(t))))return o}const i=Ys(r[e]||o[e],t)||Ys(r.appContext[e],t);return!i&&s?o:i}}function Ys(e,t){return e&&(e[t]||e[Oe(t)]||e[Cn(Oe(t))])}function xo(e,t,n,s){let r;const o=n,i=F(e);if(i||ne(e)){const l=i&&Pt(e);let c=!1;l&&(c=!we(e),e=Mn(e)),r=new Array(e.length);for(let p=0,f=e.length;p<f;p++)r[p]=t(c?ce(e[p]):e[p],p,void 0,o)}else if(typeof e=="number"){r=new Array(e);for(let l=0;l<e;l++)r[l]=t(l+1,l,void 0,o)}else if(Z(e))if(e[Symbol.iterator])r=Array.from(e,(l,c)=>t(l,c,void 0,o));else{const l=Object.keys(e);r=new Array(l.length);for(let c=0,p=l.length;c<p;c++){const f=l[c];r[c]=t(e[f],f,c,o)}}else r=[];return r}const is=e=>e?Go(e)?qn(e):is(e.parent):null,Bt=ie(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>is(e.parent),$root:e=>is(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Hs(e),$forceUpdate:e=>e.f||(e.f=()=>{Is(e.update)}),$nextTick:e=>e.n||(e.n=Ms.bind(e.proxy)),$watch:e=>jl.bind(e)}),Wn=(e,t)=>e!==Y&&!e.__isScriptSetup&&V(e,t),Sl={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:s,data:r,props:o,accessCache:i,type:l,appContext:c}=e;let p;if(t[0]!=="$"){const m=i[t];if(m!==void 0)switch(m){case 1:return s[t];case 2:return r[t];case 4:return n[t];case 3:return o[t]}else{if(Wn(s,t))return i[t]=1,s[t];if(r!==Y&&V(r,t))return i[t]=2,r[t];if((p=e.propsOptions[0])&&V(p,t))return i[t]=3,o[t];if(n!==Y&&V(n,t))return i[t]=4,n[t];ls&&(i[t]=0)}}const f=Bt[t];let d,h;if(f)return t==="$attrs"&&de(e.attrs,"get",""),f(e);if((d=l.__cssModules)&&(d=d[t]))return d;if(n!==Y&&V(n,t))return i[t]=4,n[t];if(h=c.config.globalProperties,V(h,t))return h[t]},set({_:e},t,n){const{data:s,setupState:r,ctx:o}=e;return Wn(r,t)?(r[t]=n,!0):s!==Y&&V(s,t)?(s[t]=n,!0):V(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(o[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:s,appContext:r,propsOptions:o}},i){let l;return!!n[i]||e!==Y&&V(e,i)||Wn(t,i)||(l=o[0])&&V(l,i)||V(s,i)||V(Bt,i)||V(r.config.globalProperties,i)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:V(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Xs(e){return F(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let ls=!0;function Rl(e){const t=Hs(e),n=e.proxy,s=e.ctx;ls=!1,t.beforeCreate&&Zs(t.beforeCreate,e,"bc");const{data:r,computed:o,methods:i,watch:l,provide:c,inject:p,created:f,beforeMount:d,mounted:h,beforeUpdate:m,updated:C,activated:O,deactivated:k,beforeDestroy:L,beforeUnmount:N,destroyed:H,unmounted:A,render:Q,renderTracked:oe,renderTriggered:ee,errorCaptured:Me,serverPrefetch:Ye,expose:Ie,inheritAttrs:Xe,components:ct,directives:Ne,filters:Ht}=t;if(p&&Tl(p,s,null),i)for(const G in i){const j=i[G];q(j)&&(s[G]=j.bind(n))}if(r){const G=r.call(n,n);Z(G)&&(e.data=Nn(G))}if(ls=!0,o)for(const G in o){const j=o[G],je=q(j)?j.bind(n,n):q(j.get)?j.get.bind(n,n):qe,Ze=!q(j)&&q(j.set)?j.set.bind(n):qe,Le=Pe({get:je,set:Ze});Object.defineProperty(s,G,{enumerable:!0,configurable:!0,get:()=>Le.value,set:ge=>Le.value=ge})}if(l)for(const G in l)Po(l[G],s,n,G);if(c){const G=q(c)?c.call(n):c;Reflect.ownKeys(G).forEach(j=>{pn(j,G[j])})}f&&Zs(f,e,"c");function re(G,j){F(j)?j.forEach(je=>G(je.bind(n))):j&&G(j.bind(n))}if(re(fl,d),re(dl,h),re(pl,m),re(hl,C),re(cl,O),re(ul,k),re(yl,Me),re(vl,oe),re(_l,ee),re(gl,N),re(To,A),re(ml,Ye),F(Ie))if(Ie.length){const G=e.exposed||(e.exposed={});Ie.forEach(j=>{Object.defineProperty(G,j,{get:()=>n[j],set:je=>n[j]=je})})}else e.exposed||(e.exposed={});Q&&e.render===qe&&(e.render=Q),Xe!=null&&(e.inheritAttrs=Xe),ct&&(e.components=ct),Ne&&(e.directives=Ne),Ye&&Eo(e)}function Tl(e,t,n=qe){F(e)&&(e=cs(e));for(const s in e){const r=e[s];let o;Z(r)?"default"in r?o=Ge(r.from||s,r.default,!0):o=Ge(r.from||s):o=Ge(r),fe(o)?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:i=>o.value=i}):t[s]=o}}function Zs(e,t,n){$e(F(e)?e.map(s=>s.bind(t.proxy)):e.bind(t.proxy),t,n)}function Po(e,t,n,s){let r=s.includes(".")?$o(n,s):()=>n[s];if(ne(e)){const o=t[e];q(o)&&hn(r,o)}else if(q(e))hn(r,e.bind(n));else if(Z(e))if(F(e))e.forEach(o=>Po(o,t,n,s));else{const o=q(e.handler)?e.handler.bind(n):t[e.handler];q(o)&&hn(r,o,e)}}function Hs(e){const t=e.type,{mixins:n,extends:s}=t,{mixins:r,optionsCache:o,config:{optionMergeStrategies:i}}=e.appContext,l=o.get(t);let c;return l?c=l:!r.length&&!n&&!s?c=t:(c={},r.length&&r.forEach(p=>En(c,p,i,!0)),En(c,t,i)),Z(t)&&o.set(t,c),c}function En(e,t,n,s=!1){const{mixins:r,extends:o}=t;o&&En(e,o,n,!0),r&&r.forEach(i=>En(e,i,n,!0));for(const i in t)if(!(s&&i==="expose")){const l=wl[i]||n&&n[i];e[i]=l?l(e[i],t[i]):t[i]}return e}const wl={data:er,props:tr,emits:tr,methods:kt,computed:kt,beforeCreate:pe,created:pe,beforeMount:pe,mounted:pe,beforeUpdate:pe,updated:pe,beforeDestroy:pe,beforeUnmount:pe,destroyed:pe,unmounted:pe,activated:pe,deactivated:pe,errorCaptured:pe,serverPrefetch:pe,components:kt,directives:kt,watch:Pl,provide:er,inject:xl};function er(e,t){return t?e?function(){return ie(q(e)?e.call(this,this):e,q(t)?t.call(this,this):t)}:t:e}function xl(e,t){return kt(cs(e),cs(t))}function cs(e){if(F(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function pe(e,t){return e?[...new Set([].concat(e,t))]:t}function kt(e,t){return e?ie(Object.create(null),e,t):t}function tr(e,t){return e?F(e)&&F(t)?[...new Set([...e,...t])]:ie(Object.create(null),Xs(e),Xs(t??{})):t}function Pl(e,t){if(!e)return t;if(!t)return e;const n=ie(Object.create(null),e);for(const s in t)n[s]=pe(e[s],t[s]);return n}function Co(){return{app:null,config:{isNativeTag:di,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Cl=0;function Ol(e,t){return function(s,r=null){q(s)||(s=ie({},s)),r!=null&&!Z(r)&&(r=null);const o=Co(),i=new WeakSet,l=[];let c=!1;const p=o.app={_uid:Cl++,_component:s,_props:r,_container:null,_context:o,_instance:null,version:fc,get config(){return o.config},set config(f){},use(f,...d){return i.has(f)||(f&&q(f.install)?(i.add(f),f.install(p,...d)):q(f)&&(i.add(f),f(p,...d))),p},mixin(f){return o.mixins.includes(f)||o.mixins.push(f),p},component(f,d){return d?(o.components[f]=d,p):o.components[f]},directive(f,d){return d?(o.directives[f]=d,p):o.directives[f]},mount(f,d,h){if(!c){const m=p._ceVNode||ae(s,r);return m.appContext=o,h===!0?h="svg":h===!1&&(h=void 0),d&&t?t(m,f):e(m,f,h),c=!0,p._container=f,f.__vue_app__=p,qn(m.component)}},onUnmount(f){l.push(f)},unmount(){c&&($e(l,p._instance,16),e(null,p._container),delete p._container.__vue_app__)},provide(f,d){return o.provides[f]=d,p},runWithContext(f){const d=At;At=p;try{return f()}finally{At=d}}};return p}}let At=null;function pn(e,t){if(ue){let n=ue.provides;const s=ue.parent&&ue.parent.provides;s===n&&(n=ue.provides=Object.create(s)),n[e]=t}}function Ge(e,t,n=!1){const s=ue||Ee;if(s||At){const r=At?At._context.provides:s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(r&&e in r)return r[e];if(arguments.length>1)return n&&q(t)?t.call(s&&s.proxy):t}}const Oo={},Ao=()=>Object.create(Oo),Mo=e=>Object.getPrototypeOf(e)===Oo;function Al(e,t,n,s=!1){const r={},o=Ao();e.propsDefaults=Object.create(null),Io(e,t,r,o);for(const i in e.propsOptions[0])i in r||(r[i]=void 0);n?e.props=s?r:co(r):e.type.props?e.props=r:e.props=o,e.attrs=o}function Ml(e,t,n,s){const{props:r,attrs:o,vnode:{patchFlag:i}}=e,l=B(r),[c]=e.propsOptions;let p=!1;if((s||i>0)&&!(i&16)){if(i&8){const f=e.vnode.dynamicProps;for(let d=0;d<f.length;d++){let h=f[d];if(Dn(e.emitsOptions,h))continue;const m=t[h];if(c)if(V(o,h))m!==o[h]&&(o[h]=m,p=!0);else{const C=Oe(h);r[C]=us(c,l,C,m,e,!1)}else m!==o[h]&&(o[h]=m,p=!0)}}}else{Io(e,t,r,o)&&(p=!0);let f;for(const d in l)(!t||!V(t,d)&&((f=_t(d))===d||!V(t,f)))&&(c?n&&(n[d]!==void 0||n[f]!==void 0)&&(r[d]=us(c,l,d,void 0,e,!0)):delete r[d]);if(o!==l)for(const d in o)(!t||!V(t,d))&&(delete o[d],p=!0)}p&&We(e.attrs,"set","")}function Io(e,t,n,s){const[r,o]=e.propsOptions;let i=!1,l;if(t)for(let c in t){if($t(c))continue;const p=t[c];let f;r&&V(r,f=Oe(c))?!o||!o.includes(f)?n[f]=p:(l||(l={}))[f]=p:Dn(e.emitsOptions,c)||(!(c in s)||p!==s[c])&&(s[c]=p,i=!0)}if(o){const c=B(n),p=l||Y;for(let f=0;f<o.length;f++){const d=o[f];n[d]=us(r,c,d,p[d],e,!V(p,d))}}return i}function us(e,t,n,s,r,o){const i=e[n];if(i!=null){const l=V(i,"default");if(l&&s===void 0){const c=i.default;if(i.type!==Function&&!i.skipFactory&&q(c)){const{propsDefaults:p}=r;if(n in p)s=p[n];else{const f=sn(r);s=p[n]=c.call(null,t),f()}}else s=c;r.ce&&r.ce._setProp(n,s)}i[0]&&(o&&!l?s=!1:i[1]&&(s===""||s===_t(n))&&(s=!0))}return s}const Il=new WeakMap;function No(e,t,n=!1){const s=n?Il:t.propsCache,r=s.get(e);if(r)return r;const o=e.props,i={},l=[];let c=!1;if(!q(e)){const f=d=>{c=!0;const[h,m]=No(d,t,!0);ie(i,h),m&&l.push(...m)};!n&&t.mixins.length&&t.mixins.forEach(f),e.extends&&f(e.extends),e.mixins&&e.mixins.forEach(f)}if(!o&&!c)return Z(e)&&s.set(e,wt),wt;if(F(o))for(let f=0;f<o.length;f++){const d=Oe(o[f]);nr(d)&&(i[d]=Y)}else if(o)for(const f in o){const d=Oe(f);if(nr(d)){const h=o[f],m=i[d]=F(h)||q(h)?{type:h}:ie({},h),C=m.type;let O=!1,k=!0;if(F(C))for(let L=0;L<C.length;++L){const N=C[L],H=q(N)&&N.name;if(H==="Boolean"){O=!0;break}else H==="String"&&(k=!1)}else O=q(C)&&C.name==="Boolean";m[0]=O,m[1]=k,(O||V(m,"default"))&&l.push(d)}}const p=[i,l];return Z(e)&&s.set(e,p),p}function nr(e){return e[0]!=="$"&&!$t(e)}const Lo=e=>e[0]==="_"||e==="$stable",Ds=e=>F(e)?e.map(Ue):[Ue(e)],Nl=(e,t,n)=>{if(t._n)return t;const s=vo((...r)=>Ds(t(...r)),n);return s._c=!1,s},Ho=(e,t,n)=>{const s=e._ctx;for(const r in e){if(Lo(r))continue;const o=e[r];if(q(o))t[r]=Nl(r,o,s);else if(o!=null){const i=Ds(o);t[r]=()=>i}}},Do=(e,t)=>{const n=Ds(t);e.slots.default=()=>n},Fo=(e,t,n)=>{for(const s in t)(n||s!=="_")&&(e[s]=t[s])},Ll=(e,t,n)=>{const s=e.slots=Ao();if(e.vnode.shapeFlag&32){const r=t._;r?(Fo(s,t,n),n&&Vr(s,"_",r,!0)):Ho(t,s)}else t&&Do(e,t)},Hl=(e,t,n)=>{const{vnode:s,slots:r}=e;let o=!0,i=Y;if(s.shapeFlag&32){const l=t._;l?n&&l===1?o=!1:Fo(r,t,n):(o=!t.$stable,Ho(t,r)),i=t}else t&&(Do(e,t),i={default:1});if(o)for(const l in r)!Lo(l)&&i[l]==null&&delete r[l]},ye=Ql;function Dl(e){return Fl(e)}function Fl(e,t){const n=Br();n.__VUE__=!0;const{insert:s,remove:r,patchProp:o,createElement:i,createText:l,createComment:c,setText:p,setElementText:f,parentNode:d,nextSibling:h,setScopeId:m=qe,insertStaticContent:C}=e,O=(u,a,g,y=null,_=null,b=null,T=void 0,R=null,S=!!a.dynamicChildren)=>{if(u===a)return;u&&!Ut(u,a)&&(y=v(u),ge(u,_,b,!0),u=null),a.patchFlag===-2&&(S=!1,a.dynamicChildren=null);const{type:E,ref:D,shapeFlag:x}=a;switch(E){case Fn:k(u,a,g,y);break;case mt:L(u,a,g,y);break;case gn:u==null&&N(a,g,y,T);break;case Te:ct(u,a,g,y,_,b,T,R,S);break;default:x&1?Q(u,a,g,y,_,b,T,R,S):x&6?Ne(u,a,g,y,_,b,T,R,S):(x&64||x&128)&&E.process(u,a,g,y,_,b,T,R,S,M)}D!=null&&_&&os(D,u&&u.ref,b,a||u,!a)},k=(u,a,g,y)=>{if(u==null)s(a.el=l(a.children),g,y);else{const _=a.el=u.el;a.children!==u.children&&p(_,a.children)}},L=(u,a,g,y)=>{u==null?s(a.el=c(a.children||""),g,y):a.el=u.el},N=(u,a,g,y)=>{[u.el,u.anchor]=C(u.children,a,g,y,u.el,u.anchor)},H=({el:u,anchor:a},g,y)=>{let _;for(;u&&u!==a;)_=h(u),s(u,g,y),u=_;s(a,g,y)},A=({el:u,anchor:a})=>{let g;for(;u&&u!==a;)g=h(u),r(u),u=g;r(a)},Q=(u,a,g,y,_,b,T,R,S)=>{a.type==="svg"?T="svg":a.type==="math"&&(T="mathml"),u==null?oe(a,g,y,_,b,T,R,S):Ye(u,a,_,b,T,R,S)},oe=(u,a,g,y,_,b,T,R)=>{let S,E;const{props:D,shapeFlag:x,transition:I,dirs:U}=u;if(S=u.el=i(u.type,b,D&&D.is,D),x&8?f(S,u.children):x&16&&Me(u.children,S,null,y,_,Gn(u,b),T,R),U&&ut(u,null,y,"created"),ee(S,u,u.scopeId,T,y),D){for(const X in D)X!=="value"&&!$t(X)&&o(S,X,null,D[X],b,y);"value"in D&&o(S,"value",null,D.value,b),(E=D.onVnodeBeforeMount)&&De(E,y,u)}U&&ut(u,null,y,"beforeMount");const $=Ul(_,I);$&&I.beforeEnter(S),s(S,a,g),((E=D&&D.onVnodeMounted)||$||U)&&ye(()=>{E&&De(E,y,u),$&&I.enter(S),U&&ut(u,null,y,"mounted")},_)},ee=(u,a,g,y,_)=>{if(g&&m(u,g),y)for(let b=0;b<y.length;b++)m(u,y[b]);if(_){let b=_.subTree;if(a===b||Vo(b.type)&&(b.ssContent===a||b.ssFallback===a)){const T=_.vnode;ee(u,T,T.scopeId,T.slotScopeIds,_.parent)}}},Me=(u,a,g,y,_,b,T,R,S=0)=>{for(let E=S;E<u.length;E++){const D=u[E]=R?st(u[E]):Ue(u[E]);O(null,D,a,g,y,_,b,T,R)}},Ye=(u,a,g,y,_,b,T)=>{const R=a.el=u.el;let{patchFlag:S,dynamicChildren:E,dirs:D}=a;S|=u.patchFlag&16;const x=u.props||Y,I=a.props||Y;let U;if(g&&at(g,!1),(U=I.onVnodeBeforeUpdate)&&De(U,g,a,u),D&&ut(a,u,g,"beforeUpdate"),g&&at(g,!0),(x.innerHTML&&I.innerHTML==null||x.textContent&&I.textContent==null)&&f(R,""),E?Ie(u.dynamicChildren,E,R,g,y,Gn(a,_),b):T||j(u,a,R,null,g,y,Gn(a,_),b,!1),S>0){if(S&16)Xe(R,x,I,g,_);else if(S&2&&x.class!==I.class&&o(R,"class",null,I.class,_),S&4&&o(R,"style",x.style,I.style,_),S&8){const $=a.dynamicProps;for(let X=0;X<$.length;X++){const K=$[X],me=x[K],le=I[K];(le!==me||K==="value")&&o(R,K,me,le,_,g)}}S&1&&u.children!==a.children&&f(R,a.children)}else!T&&E==null&&Xe(R,x,I,g,_);((U=I.onVnodeUpdated)||D)&&ye(()=>{U&&De(U,g,a,u),D&&ut(a,u,g,"updated")},y)},Ie=(u,a,g,y,_,b,T)=>{for(let R=0;R<a.length;R++){const S=u[R],E=a[R],D=S.el&&(S.type===Te||!Ut(S,E)||S.shapeFlag&70)?d(S.el):g;O(S,E,D,null,y,_,b,T,!0)}},Xe=(u,a,g,y,_)=>{if(a!==g){if(a!==Y)for(const b in a)!$t(b)&&!(b in g)&&o(u,b,a[b],null,_,y);for(const b in g){if($t(b))continue;const T=g[b],R=a[b];T!==R&&b!=="value"&&o(u,b,R,T,_,y)}"value"in g&&o(u,"value",a.value,g.value,_)}},ct=(u,a,g,y,_,b,T,R,S)=>{const E=a.el=u?u.el:l(""),D=a.anchor=u?u.anchor:l("");let{patchFlag:x,dynamicChildren:I,slotScopeIds:U}=a;U&&(R=R?R.concat(U):U),u==null?(s(E,g,y),s(D,g,y),Me(a.children||[],g,D,_,b,T,R,S)):x>0&&x&64&&I&&u.dynamicChildren?(Ie(u.dynamicChildren,I,g,_,b,T,R),(a.key!=null||_&&a===_.subTree)&&Uo(u,a,!0)):j(u,a,g,D,_,b,T,R,S)},Ne=(u,a,g,y,_,b,T,R,S)=>{a.slotScopeIds=R,u==null?a.shapeFlag&512?_.ctx.activate(a,g,y,T,S):Ht(a,g,y,_,b,T,S):vt(u,a,S)},Ht=(u,a,g,y,_,b,T)=>{const R=u.component=rc(u,y,_);if(So(u)&&(R.ctx.renderer=M),oc(R,!1,T),R.asyncDep){if(_&&_.registerDep(R,re,T),!u.el){const S=R.subTree=ae(mt);L(null,S,a,g)}}else re(R,u,a,g,_,b,T)},vt=(u,a,g)=>{const y=a.component=u.component;if(Wl(u,a,g))if(y.asyncDep&&!y.asyncResolved){G(y,a,g);return}else y.next=a,y.update();else a.el=u.el,y.vnode=a},re=(u,a,g,y,_,b,T)=>{const R=()=>{if(u.isMounted){let{next:x,bu:I,u:U,parent:$,vnode:X}=u;{const _e=qo(u);if(_e){x&&(x.el=X.el,G(u,x,T)),_e.asyncDep.then(()=>{u.isUnmounted||R()});return}}let K=x,me;at(u,!1),x?(x.el=X.el,G(u,x,T)):x=X,I&&dn(I),(me=x.props&&x.props.onVnodeBeforeUpdate)&&De(me,$,x,X),at(u,!0);const le=Qn(u),xe=u.subTree;u.subTree=le,O(xe,le,d(xe.el),v(xe),u,_,b),x.el=le.el,K===null&&Gl(u,le.el),U&&ye(U,_),(me=x.props&&x.props.onVnodeUpdated)&&ye(()=>De(me,$,x,X),_)}else{let x;const{el:I,props:U}=a,{bm:$,m:X,parent:K,root:me,type:le}=u,xe=Vt(a);if(at(u,!1),$&&dn($),!xe&&(x=U&&U.onVnodeBeforeMount)&&De(x,K,a),at(u,!0),I&&te){const _e=()=>{u.subTree=Qn(u),te(I,u.subTree,u,_,null)};xe&&le.__asyncHydrate?le.__asyncHydrate(I,u,_e):_e()}else{me.ce&&me.ce._injectChildStyle(le);const _e=u.subTree=Qn(u);O(null,_e,g,y,u,_,b),a.el=_e.el}if(X&&ye(X,_),!xe&&(x=U&&U.onVnodeMounted)){const _e=a;ye(()=>De(x,K,_e),_)}(a.shapeFlag&256||K&&Vt(K.vnode)&&K.vnode.shapeFlag&256)&&u.a&&ye(u.a,_),u.isMounted=!0,a=g=y=null}};u.scope.on();const S=u.effect=new Gr(R);u.scope.off();const E=u.update=S.run.bind(S),D=u.job=S.runIfDirty.bind(S);D.i=u,D.id=u.uid,S.scheduler=()=>Is(D),at(u,!0),E()},G=(u,a,g)=>{a.component=u;const y=u.vnode.props;u.vnode=a,u.next=null,Ml(u,a.props,y,g),Hl(u,a.children,g),it(),zs(u),lt()},j=(u,a,g,y,_,b,T,R,S=!1)=>{const E=u&&u.children,D=u?u.shapeFlag:0,x=a.children,{patchFlag:I,shapeFlag:U}=a;if(I>0){if(I&128){Ze(E,x,g,y,_,b,T,R,S);return}else if(I&256){je(E,x,g,y,_,b,T,R,S);return}}U&8?(D&16&&Re(E,_,b),x!==E&&f(g,x)):D&16?U&16?Ze(E,x,g,y,_,b,T,R,S):Re(E,_,b,!0):(D&8&&f(g,""),U&16&&Me(x,g,y,_,b,T,R,S))},je=(u,a,g,y,_,b,T,R,S)=>{u=u||wt,a=a||wt;const E=u.length,D=a.length,x=Math.min(E,D);let I;for(I=0;I<x;I++){const U=a[I]=S?st(a[I]):Ue(a[I]);O(u[I],U,g,null,_,b,T,R,S)}E>D?Re(u,_,b,!0,!1,x):Me(a,g,y,_,b,T,R,S,x)},Ze=(u,a,g,y,_,b,T,R,S)=>{let E=0;const D=a.length;let x=u.length-1,I=D-1;for(;E<=x&&E<=I;){const U=u[E],$=a[E]=S?st(a[E]):Ue(a[E]);if(Ut(U,$))O(U,$,g,null,_,b,T,R,S);else break;E++}for(;E<=x&&E<=I;){const U=u[x],$=a[I]=S?st(a[I]):Ue(a[I]);if(Ut(U,$))O(U,$,g,null,_,b,T,R,S);else break;x--,I--}if(E>x){if(E<=I){const U=I+1,$=U<D?a[U].el:y;for(;E<=I;)O(null,a[E]=S?st(a[E]):Ue(a[E]),g,$,_,b,T,R,S),E++}}else if(E>I)for(;E<=x;)ge(u[E],_,b,!0),E++;else{const U=E,$=E,X=new Map;for(E=$;E<=I;E++){const ve=a[E]=S?st(a[E]):Ue(a[E]);ve.key!=null&&X.set(ve.key,E)}let K,me=0;const le=I-$+1;let xe=!1,_e=0;const Dt=new Array(le);for(E=0;E<le;E++)Dt[E]=0;for(E=U;E<=x;E++){const ve=u[E];if(me>=le){ge(ve,_,b,!0);continue}let He;if(ve.key!=null)He=X.get(ve.key);else for(K=$;K<=I;K++)if(Dt[K-$]===0&&Ut(ve,a[K])){He=K;break}He===void 0?ge(ve,_,b,!0):(Dt[He-$]=E+1,He>=_e?_e=He:xe=!0,O(ve,a[He],g,null,_,b,T,R,S),me++)}const ks=xe?ql(Dt):wt;for(K=ks.length-1,E=le-1;E>=0;E--){const ve=$+E,He=a[ve],$s=ve+1<D?a[ve+1].el:y;Dt[E]===0?O(null,He,g,$s,_,b,T,R,S):xe&&(K<0||E!==ks[K]?Le(He,g,$s,2):K--)}}},Le=(u,a,g,y,_=null)=>{const{el:b,type:T,transition:R,children:S,shapeFlag:E}=u;if(E&6){Le(u.component.subTree,a,g,y);return}if(E&128){u.suspense.move(a,g,y);return}if(E&64){T.move(u,a,g,M);return}if(T===Te){s(b,a,g);for(let x=0;x<S.length;x++)Le(S[x],a,g,y);s(u.anchor,a,g);return}if(T===gn){H(u,a,g);return}if(y!==2&&E&1&&R)if(y===0)R.beforeEnter(b),s(b,a,g),ye(()=>R.enter(b),_);else{const{leave:x,delayLeave:I,afterLeave:U}=R,$=()=>s(b,a,g),X=()=>{x(b,()=>{$(),U&&U()})};I?I(b,$,X):X()}else s(b,a,g)},ge=(u,a,g,y=!1,_=!1)=>{const{type:b,props:T,ref:R,children:S,dynamicChildren:E,shapeFlag:D,patchFlag:x,dirs:I,cacheIndex:U}=u;if(x===-2&&(_=!1),R!=null&&os(R,null,g,u,!0),U!=null&&(a.renderCache[U]=void 0),D&256){a.ctx.deactivate(u);return}const $=D&1&&I,X=!Vt(u);let K;if(X&&(K=T&&T.onVnodeBeforeUnmount)&&De(K,a,u),D&6)rn(u.component,g,y);else{if(D&128){u.suspense.unmount(g,y);return}$&&ut(u,null,a,"beforeUnmount"),D&64?u.type.remove(u,a,g,M,y):E&&!E.hasOnce&&(b!==Te||x>0&&x&64)?Re(E,a,g,!1,!0):(b===Te&&x&384||!_&&D&16)&&Re(S,a,g),y&&yt(u)}(X&&(K=T&&T.onVnodeUnmounted)||$)&&ye(()=>{K&&De(K,a,u),$&&ut(u,null,a,"unmounted")},g)},yt=u=>{const{type:a,el:g,anchor:y,transition:_}=u;if(a===Te){bt(g,y);return}if(a===gn){A(u);return}const b=()=>{r(g),_&&!_.persisted&&_.afterLeave&&_.afterLeave()};if(u.shapeFlag&1&&_&&!_.persisted){const{leave:T,delayLeave:R}=_,S=()=>T(g,b);R?R(u.el,b,S):S()}else b()},bt=(u,a)=>{let g;for(;u!==a;)g=h(u),r(u),u=g;r(a)},rn=(u,a,g)=>{const{bum:y,scope:_,job:b,subTree:T,um:R,m:S,a:E}=u;sr(S),sr(E),y&&dn(y),_.stop(),b&&(b.flags|=8,ge(T,u,a,g)),R&&ye(R,a),ye(()=>{u.isUnmounted=!0},a),a&&a.pendingBranch&&!a.isUnmounted&&u.asyncDep&&!u.asyncResolved&&u.suspenseId===a.pendingId&&(a.deps--,a.deps===0&&a.resolve())},Re=(u,a,g,y=!1,_=!1,b=0)=>{for(let T=b;T<u.length;T++)ge(u[T],a,g,y,_)},v=u=>{if(u.shapeFlag&6)return v(u.component.subTree);if(u.shapeFlag&128)return u.suspense.next();const a=h(u.anchor||u.el),g=a&&a[il];return g?h(g):a};let P=!1;const w=(u,a,g)=>{u==null?a._vnode&&ge(a._vnode,null,null,!0):O(a._vnode||null,u,a,null,null,null,g),a._vnode=u,P||(P=!0,zs(),go(),P=!1)},M={p:O,um:ge,m:Le,r:yt,mt:Ht,mc:Me,pc:j,pbc:Ie,n:v,o:e};let J,te;return{render:w,hydrate:J,createApp:Ol(w,J)}}function Gn({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function at({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function Ul(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Uo(e,t,n=!1){const s=e.children,r=t.children;if(F(s)&&F(r))for(let o=0;o<s.length;o++){const i=s[o];let l=r[o];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=r[o]=st(r[o]),l.el=i.el),!n&&l.patchFlag!==-2&&Uo(i,l)),l.type===Fn&&(l.el=i.el)}}function ql(e){const t=e.slice(),n=[0];let s,r,o,i,l;const c=e.length;for(s=0;s<c;s++){const p=e[s];if(p!==0){if(r=n[n.length-1],e[r]<p){t[s]=r,n.push(s);continue}for(o=0,i=n.length-1;o<i;)l=o+i>>1,e[n[l]]<p?o=l+1:i=l;p<e[n[o]]&&(o>0&&(t[s]=n[o-1]),n[o]=s)}}for(o=n.length,i=n[o-1];o-- >0;)n[o]=i,i=t[i];return n}function qo(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:qo(t)}function sr(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}const kl=Symbol.for("v-scx"),$l=()=>Ge(kl);function hn(e,t,n){return ko(e,t,n)}function ko(e,t,n=Y){const{immediate:s,deep:r,flush:o,once:i}=n,l=ie({},n);let c;if(Un)if(o==="sync"){const h=$l();c=h.__watcherHandles||(h.__watcherHandles=[])}else if(!t||s)l.once=!0;else{const h=()=>{};return h.stop=qe,h.resume=qe,h.pause=qe,h}const p=ue;l.call=(h,m,C)=>$e(h,p,m,C);let f=!1;o==="post"?l.scheduler=h=>{ye(h,p&&p.suspense)}:o!=="sync"&&(f=!0,l.scheduler=(h,m)=>{m?h():Is(h)}),l.augmentJob=h=>{t&&(h.flags|=4),f&&(h.flags|=2,p&&(h.id=p.uid,h.i=p))};const d=nl(e,t,l);return c&&c.push(d),d}function jl(e,t,n){const s=this.proxy,r=ne(e)?e.includes(".")?$o(s,e):()=>s[e]:e.bind(s,s);let o;q(t)?o=t:(o=t.handler,n=t);const i=sn(this),l=ko(r,o.bind(s),n);return i(),l}function $o(e,t){const n=t.split(".");return()=>{let s=e;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}const Vl=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${Oe(t)}Modifiers`]||e[`${_t(t)}Modifiers`];function Bl(e,t,...n){if(e.isUnmounted)return;const s=e.vnode.props||Y;let r=n;const o=t.startsWith("update:"),i=o&&Vl(s,t.slice(7));i&&(i.trim&&(r=n.map(f=>ne(f)?f.trim():f)),i.number&&(r=n.map(vn)));let l,c=s[l=jn(t)]||s[l=jn(Oe(t))];!c&&o&&(c=s[l=jn(_t(t))]),c&&$e(c,e,6,r);const p=s[l+"Once"];if(p){if(!e.emitted)e.emitted={};else if(e.emitted[l])return;e.emitted[l]=!0,$e(p,e,6,r)}}function jo(e,t,n=!1){const s=t.emitsCache,r=s.get(e);if(r!==void 0)return r;const o=e.emits;let i={},l=!1;if(!q(e)){const c=p=>{const f=jo(p,t,!0);f&&(l=!0,ie(i,f))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!o&&!l?(Z(e)&&s.set(e,null),null):(F(o)?o.forEach(c=>i[c]=null):ie(i,o),Z(e)&&s.set(e,i),i)}function Dn(e,t){return!e||!wn(t)?!1:(t=t.slice(2).replace(/Once$/,""),V(e,t[0].toLowerCase()+t.slice(1))||V(e,_t(t))||V(e,t))}function Qn(e){const{type:t,vnode:n,proxy:s,withProxy:r,propsOptions:[o],slots:i,attrs:l,emit:c,render:p,renderCache:f,props:d,data:h,setupState:m,ctx:C,inheritAttrs:O}=e,k=bn(e);let L,N;try{if(n.shapeFlag&4){const A=r||s,Q=A;L=Ue(p.call(Q,A,f,d,m,h,C)),N=l}else{const A=t;L=Ue(A.length>1?A(d,{attrs:l,slots:i,emit:c}):A(d,null)),N=t.props?l:Jl(l)}}catch(A){Jt.length=0,Ln(A,e,1),L=ae(mt)}let H=L;if(N&&O!==!1){const A=Object.keys(N),{shapeFlag:Q}=H;A.length&&Q&7&&(o&&A.some(_s)&&(N=Kl(N,o)),H=It(H,N,!1,!0))}return n.dirs&&(H=It(H,null,!1,!0),H.dirs=H.dirs?H.dirs.concat(n.dirs):n.dirs),n.transition&&Ns(H,n.transition),L=H,bn(k),L}const Jl=e=>{let t;for(const n in e)(n==="class"||n==="style"||wn(n))&&((t||(t={}))[n]=e[n]);return t},Kl=(e,t)=>{const n={};for(const s in e)(!_s(s)||!(s.slice(9)in t))&&(n[s]=e[s]);return n};function Wl(e,t,n){const{props:s,children:r,component:o}=e,{props:i,children:l,patchFlag:c}=t,p=o.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?rr(s,i,p):!!i;if(c&8){const f=t.dynamicProps;for(let d=0;d<f.length;d++){const h=f[d];if(i[h]!==s[h]&&!Dn(p,h))return!0}}}else return(r||l)&&(!l||!l.$stable)?!0:s===i?!1:s?i?rr(s,i,p):!0:!!i;return!1}function rr(e,t,n){const s=Object.keys(t);if(s.length!==Object.keys(e).length)return!0;for(let r=0;r<s.length;r++){const o=s[r];if(t[o]!==e[o]&&!Dn(n,o))return!0}return!1}function Gl({vnode:e,parent:t},n){for(;t;){const s=t.subTree;if(s.suspense&&s.suspense.activeBranch===e&&(s.el=e.el),s===e)(e=t.vnode).el=n,t=t.parent;else break}}const Vo=e=>e.__isSuspense;function Ql(e,t){t&&t.pendingBranch?F(e)?t.effects.push(...e):t.effects.push(e):ol(e)}const Te=Symbol.for("v-fgt"),Fn=Symbol.for("v-txt"),mt=Symbol.for("v-cmt"),gn=Symbol.for("v-stc"),Jt=[];let Se=null;function Qe(e=!1){Jt.push(Se=e?null:[])}function zl(){Jt.pop(),Se=Jt[Jt.length-1]||null}let Xt=1;function or(e){Xt+=e,e<0&&Se&&(Se.hasOnce=!0)}function Bo(e){return e.dynamicChildren=Xt>0?Se||wt:null,zl(),Xt>0&&Se&&Se.push(e),e}function ht(e,t,n,s,r,o){return Bo(se(e,t,n,s,r,o,!0))}function Jo(e,t,n,s,r){return Bo(ae(e,t,n,s,r,!0))}function as(e){return e?e.__v_isVNode===!0:!1}function Ut(e,t){return e.type===t.type&&e.key===t.key}const Ko=({key:e})=>e??null,mn=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?ne(e)||fe(e)||q(e)?{i:Ee,r:e,k:t,f:!!n}:e:null);function se(e,t=null,n=null,s=0,r=null,o=e===Te?0:1,i=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Ko(t),ref:t&&mn(t),scopeId:_o,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Ee};return l?(Fs(c,n),o&128&&e.normalize(c)):n&&(c.shapeFlag|=ne(n)?8:16),Xt>0&&!i&&Se&&(c.patchFlag>0||o&6)&&c.patchFlag!==32&&Se.push(c),c}const ae=Yl;function Yl(e,t=null,n=null,s=0,r=null,o=!1){if((!e||e===bl)&&(e=mt),as(e)){const l=It(e,t,!0);return n&&Fs(l,n),Xt>0&&!o&&Se&&(l.shapeFlag&6?Se[Se.indexOf(e)]=l:Se.push(l)),l.patchFlag=-2,l}if(ac(e)&&(e=e.__vccOpts),t){t=Xl(t);let{class:l,style:c}=t;l&&!ne(l)&&(t.class=On(l)),Z(c)&&(Cs(c)&&!F(c)&&(c=ie({},c)),t.style=bs(c))}const i=ne(e)?1:Vo(e)?128:ll(e)?64:Z(e)?4:q(e)?2:0;return se(e,t,n,s,r,i,o,!0)}function Xl(e){return e?Cs(e)||Mo(e)?ie({},e):e:null}function It(e,t,n=!1,s=!1){const{props:r,ref:o,patchFlag:i,children:l,transition:c}=e,p=t?tc(r||{},t):r,f={__v_isVNode:!0,__v_skip:!0,type:e.type,props:p,key:p&&Ko(p),ref:t&&t.ref?n&&o?F(o)?o.concat(mn(t)):[o,mn(t)]:mn(t):o,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:l,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Te?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&It(e.ssContent),ssFallback:e.ssFallback&&It(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return c&&s&&Ns(f,c.clone(f)),f}function Wo(e=" ",t=0){return ae(Fn,null,e,t)}function Zl(e,t){const n=ae(gn,null,e);return n.staticCount=t,n}function ec(e="",t=!1){return t?(Qe(),Jo(mt,null,e)):ae(mt,null,e)}function Ue(e){return e==null||typeof e=="boolean"?ae(mt):F(e)?ae(Te,null,e.slice()):typeof e=="object"?st(e):ae(Fn,null,String(e))}function st(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:It(e)}function Fs(e,t){let n=0;const{shapeFlag:s}=e;if(t==null)t=null;else if(F(t))n=16;else if(typeof t=="object")if(s&65){const r=t.default;r&&(r._c&&(r._d=!1),Fs(e,r()),r._c&&(r._d=!0));return}else{n=32;const r=t._;!r&&!Mo(t)?t._ctx=Ee:r===3&&Ee&&(Ee.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else q(t)?(t={default:t,_ctx:Ee},n=32):(t=String(t),s&64?(n=16,t=[Wo(t)]):n=8);e.children=t,e.shapeFlag|=n}function tc(...e){const t={};for(let n=0;n<e.length;n++){const s=e[n];for(const r in s)if(r==="class")t.class!==s.class&&(t.class=On([t.class,s.class]));else if(r==="style")t.style=bs([t.style,s.style]);else if(wn(r)){const o=t[r],i=s[r];i&&o!==i&&!(F(o)&&o.includes(i))&&(t[r]=o?[].concat(o,i):i)}else r!==""&&(t[r]=s[r])}return t}function De(e,t,n,s=null){$e(e,t,7,[n,s])}const nc=Co();let sc=0;function rc(e,t,n){const s=e.type,r=(t?t.appContext:e.appContext)||nc,o={uid:sc++,vnode:e,type:s,parent:t,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new wi(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(r.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:No(s,r),emitsOptions:jo(s,r),emit:null,emitted:null,propsDefaults:Y,inheritAttrs:s.inheritAttrs,ctx:Y,data:Y,props:Y,attrs:Y,slots:Y,refs:Y,setupState:Y,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=t?t.root:o,o.emit=Bl.bind(null,o),e.ce&&e.ce(o),o}let ue=null,Sn,fs;{const e=Br(),t=(n,s)=>{let r;return(r=e[n])||(r=e[n]=[]),r.push(s),o=>{r.length>1?r.forEach(i=>i(o)):r[0](o)}};Sn=t("__VUE_INSTANCE_SETTERS__",n=>ue=n),fs=t("__VUE_SSR_SETTERS__",n=>Un=n)}const sn=e=>{const t=ue;return Sn(e),e.scope.on(),()=>{e.scope.off(),Sn(t)}},ir=()=>{ue&&ue.scope.off(),Sn(null)};function Go(e){return e.vnode.shapeFlag&4}let Un=!1;function oc(e,t=!1,n=!1){t&&fs(t);const{props:s,children:r}=e.vnode,o=Go(e);Al(e,s,o,t),Ll(e,r,n);const i=o?ic(e,t):void 0;return t&&fs(!1),i}function ic(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Sl);const{setup:s}=n;if(s){const r=e.setupContext=s.length>1?cc(e):null,o=sn(e);it();const i=nn(s,e,0,[e.props,r]);if(lt(),o(),kr(i)){if(Vt(e)||Eo(e),i.then(ir,ir),t)return i.then(l=>{lr(e,l,t)}).catch(l=>{Ln(l,e,0)});e.asyncDep=i}else lr(e,i,t)}else Qo(e,t)}function lr(e,t,n){q(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Z(t)&&(e.setupState=fo(t)),Qo(e,n)}let cr;function Qo(e,t,n){const s=e.type;if(!e.render){if(!t&&cr&&!s.render){const r=s.template||Hs(e).template;if(r){const{isCustomElement:o,compilerOptions:i}=e.appContext.config,{delimiters:l,compilerOptions:c}=s,p=ie(ie({isCustomElement:o,delimiters:l},i),c);s.render=cr(r,p)}}e.render=s.render||qe}{const r=sn(e);it();try{Rl(e)}finally{lt(),r()}}}const lc={get(e,t){return de(e,"get",""),e[t]}};function cc(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,lc),slots:e.slots,emit:e.emit,expose:t}}function qn(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(fo(Gi(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Bt)return Bt[n](e)},has(t,n){return n in t||n in Bt}})):e.proxy}function uc(e,t=!0){return q(e)?e.displayName||e.name:e.name||t&&e.__name}function ac(e){return q(e)&&"__vccOpts"in e}const Pe=(e,t)=>el(e,t,Un);function zo(e,t,n){const s=arguments.length;return s===2?Z(t)&&!F(t)?as(t)?ae(e,null,[t]):ae(e,t):ae(e,null,t):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&as(n)&&(n=[n]),ae(e,t,n))}const fc="3.5.6";/**
* @vue/runtime-dom v3.5.6
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ds;const ur=typeof window<"u"&&window.trustedTypes;if(ur)try{ds=ur.createPolicy("vue",{createHTML:e=>e})}catch{}const Yo=ds?e=>ds.createHTML(e):e=>e,dc="http://www.w3.org/2000/svg",pc="http://www.w3.org/1998/Math/MathML",Je=typeof document<"u"?document:null,ar=Je&&Je.createElement("template"),hc={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,s)=>{const r=t==="svg"?Je.createElementNS(dc,e):t==="mathml"?Je.createElementNS(pc,e):n?Je.createElement(e,{is:n}):Je.createElement(e);return e==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:e=>Je.createTextNode(e),createComment:e=>Je.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Je.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,s,r,o){const i=n?n.previousSibling:t.lastChild;if(r&&(r===o||r.nextSibling))for(;t.insertBefore(r.cloneNode(!0),n),!(r===o||!(r=r.nextSibling)););else{ar.innerHTML=Yo(s==="svg"?`<svg>${e}</svg>`:s==="mathml"?`<math>${e}</math>`:e);const l=ar.content;if(s==="svg"||s==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}t.insertBefore(l,n)}return[i?i.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},gc=Symbol("_vtc");function mc(e,t,n){const s=e[gc];s&&(t=(t?[t,...s]:[...s]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const fr=Symbol("_vod"),_c=Symbol("_vsh"),vc=Symbol(""),yc=/(^|;)\s*display\s*:/;function bc(e,t,n){const s=e.style,r=ne(n);let o=!1;if(n&&!r){if(t)if(ne(t))for(const i of t.split(";")){const l=i.slice(0,i.indexOf(":")).trim();n[l]==null&&_n(s,l,"")}else for(const i in t)n[i]==null&&_n(s,i,"");for(const i in n)i==="display"&&(o=!0),_n(s,i,n[i])}else if(r){if(t!==n){const i=s[vc];i&&(n+=";"+i),s.cssText=n,o=yc.test(n)}}else t&&e.removeAttribute("style");fr in e&&(e[fr]=o?s.display:"",e[_c]&&(s.display="none"))}const dr=/\s*!important$/;function _n(e,t,n){if(F(n))n.forEach(s=>_n(e,t,s));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const s=Ec(e,t);dr.test(n)?e.setProperty(_t(s),n.replace(dr,""),"important"):e[s]=n}}const pr=["Webkit","Moz","ms"],zn={};function Ec(e,t){const n=zn[t];if(n)return n;let s=Oe(t);if(s!=="filter"&&s in e)return zn[t]=s;s=Cn(s);for(let r=0;r<pr.length;r++){const o=pr[r]+s;if(o in e)return zn[t]=o}return t}const hr="http://www.w3.org/1999/xlink";function gr(e,t,n,s,r,o=Si(t)){s&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(hr,t.slice(6,t.length)):e.setAttributeNS(hr,t,n):n==null||o&&!Jr(n)?e.removeAttribute(t):e.setAttribute(t,o?"":ke(n)?String(n):n)}function Sc(e,t,n,s){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?Yo(n):n);return}const r=e.tagName;if(t==="value"&&r!=="PROGRESS"&&!r.includes("-")){const i=r==="OPTION"?e.getAttribute("value")||"":e.value,l=n==null?e.type==="checkbox"?"on":"":String(n);(i!==l||!("_value"in e))&&(e.value=l),n==null&&e.removeAttribute(t),e._value=n;return}let o=!1;if(n===""||n==null){const i=typeof e[t];i==="boolean"?n=Jr(n):n==null&&i==="string"?(n="",o=!0):i==="number"&&(n=0,o=!0)}try{e[t]=n}catch{}o&&e.removeAttribute(t)}function dt(e,t,n,s){e.addEventListener(t,n,s)}function Rc(e,t,n,s){e.removeEventListener(t,n,s)}const mr=Symbol("_vei");function Tc(e,t,n,s,r=null){const o=e[mr]||(e[mr]={}),i=o[t];if(s&&i)i.value=s;else{const[l,c]=wc(t);if(s){const p=o[t]=Cc(s,r);dt(e,l,p,c)}else i&&(Rc(e,l,i,c),o[t]=void 0)}}const _r=/(?:Once|Passive|Capture)$/;function wc(e){let t;if(_r.test(e)){t={};let s;for(;s=e.match(_r);)e=e.slice(0,e.length-s[0].length),t[s[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):_t(e.slice(2)),t]}let Yn=0;const xc=Promise.resolve(),Pc=()=>Yn||(xc.then(()=>Yn=0),Yn=Date.now());function Cc(e,t){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;$e(Oc(s,n.value),t,5,[s])};return n.value=e,n.attached=Pc(),n}function Oc(e,t){if(F(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(s=>r=>!r._stopped&&s&&s(r))}else return t}const vr=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Ac=(e,t,n,s,r,o)=>{const i=r==="svg";t==="class"?mc(e,s,i):t==="style"?bc(e,n,s):wn(t)?_s(t)||Tc(e,t,n,s,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Mc(e,t,s,i))?(Sc(e,t,s),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&gr(e,t,s,i,o,t!=="value")):(t==="true-value"?e._trueValue=s:t==="false-value"&&(e._falseValue=s),gr(e,t,s,i))};function Mc(e,t,n,s){if(s)return!!(t==="innerHTML"||t==="textContent"||t in e&&vr(t)&&q(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const r=e.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return vr(t)&&ne(n)?!1:!!(t in e||e._isVueCE&&(/[A-Z]/.test(t)||!ne(n)))}const Rn=e=>{const t=e.props["onUpdate:modelValue"]||!1;return F(t)?n=>dn(t,n):t};function Ic(e){e.target.composing=!0}function yr(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Mt=Symbol("_assign"),Nc={created(e,{modifiers:{lazy:t,trim:n,number:s}},r){e[Mt]=Rn(r);const o=s||r.props&&r.props.type==="number";dt(e,t?"change":"input",i=>{if(i.target.composing)return;let l=e.value;n&&(l=l.trim()),o&&(l=vn(l)),e[Mt](l)}),n&&dt(e,"change",()=>{e.value=e.value.trim()}),t||(dt(e,"compositionstart",Ic),dt(e,"compositionend",yr),dt(e,"change",yr))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,oldValue:n,modifiers:{lazy:s,trim:r,number:o}},i){if(e[Mt]=Rn(i),e.composing)return;const l=(o||e.type==="number")&&!/^0\d/.test(e.value)?vn(e.value):e.value,c=t??"";l!==c&&(document.activeElement===e&&e.type!=="range"&&(s&&t===n||r&&e.value.trim()===c)||(e.value=c))}},Lc={deep:!0,created(e,{value:t,modifiers:{number:n}},s){const r=xn(t);dt(e,"change",()=>{const o=Array.prototype.filter.call(e.options,i=>i.selected).map(i=>n?vn(Tn(i)):Tn(i));e[Mt](e.multiple?r?new Set(o):o:o[0]),e._assigning=!0,Ms(()=>{e._assigning=!1})}),e[Mt]=Rn(s)},mounted(e,{value:t,modifiers:{number:n}}){br(e,t)},beforeUpdate(e,t,n){e[Mt]=Rn(n)},updated(e,{value:t,modifiers:{number:n}}){e._assigning||br(e,t)}};function br(e,t,n){const s=e.multiple,r=F(t);if(!(s&&!r&&!xn(t))){for(let o=0,i=e.options.length;o<i;o++){const l=e.options[o],c=Tn(l);if(s)if(r){const p=typeof c;p==="string"||p==="number"?l.selected=t.some(f=>String(f)===String(c)):l.selected=Ti(t,c)>-1}else l.selected=t.has(c);else if(An(Tn(l),t)){e.selectedIndex!==o&&(e.selectedIndex=o);return}}!s&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function Tn(e){return"_value"in e?e._value:e.value}const Hc=["ctrl","shift","alt","meta"],Dc={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>Hc.some(n=>e[`${n}Key`]&&!t.includes(n))},Er=(e,t)=>{const n=e._withMods||(e._withMods={}),s=t.join(".");return n[s]||(n[s]=(r,...o)=>{for(let i=0;i<t.length;i++){const l=Dc[t[i]];if(l&&l(r,t))return}return e(r,...o)})},Fc=ie({patchProp:Ac},hc);let Sr;function Uc(){return Sr||(Sr=Dl(Fc))}const qc=(...e)=>{const t=Uc().createApp(...e),{mount:n}=t;return t.mount=s=>{const r=$c(s);if(!r)return;const o=t._component;!q(o)&&!o.render&&!o.template&&(o.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const i=n(r,!1,kc(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),i},t};function kc(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function $c(e){return ne(e)?document.querySelector(e):e}const kn=(e,t)=>{const n=e.__vccOpts||e;for(const[s,r]of t)n[s]=r;return n},jc={};function Vc(e,t,n,s,r,o){const i=Ls("router-view");return Qe(),ht(Te,null,[t[0]||(t[0]=se("div",{class:"header"},[se("h2",null,"PerfLAB")],-1)),ae(i)],64)}const Bc=kn(jc,[["render",Vc]]);/*!
  * vue-router v4.4.5
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Rt=typeof document<"u";function Xo(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Jc(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&Xo(e.default)}const W=Object.assign;function Xn(e,t){const n={};for(const s in t){const r=t[s];n[s]=Ae(r)?r.map(e):e(r)}return n}const Kt=()=>{},Ae=Array.isArray,Zo=/#/g,Kc=/&/g,Wc=/\//g,Gc=/=/g,Qc=/\?/g,ei=/\+/g,zc=/%5B/g,Yc=/%5D/g,ti=/%5E/g,Xc=/%60/g,ni=/%7B/g,Zc=/%7C/g,si=/%7D/g,eu=/%20/g;function Us(e){return encodeURI(""+e).replace(Zc,"|").replace(zc,"[").replace(Yc,"]")}function tu(e){return Us(e).replace(ni,"{").replace(si,"}").replace(ti,"^")}function ps(e){return Us(e).replace(ei,"%2B").replace(eu,"+").replace(Zo,"%23").replace(Kc,"%26").replace(Xc,"`").replace(ni,"{").replace(si,"}").replace(ti,"^")}function nu(e){return ps(e).replace(Gc,"%3D")}function su(e){return Us(e).replace(Zo,"%23").replace(Qc,"%3F")}function ru(e){return e==null?"":su(e).replace(Wc,"%2F")}function Zt(e){try{return decodeURIComponent(""+e)}catch{}return""+e}const ou=/\/$/,iu=e=>e.replace(ou,"");function Zn(e,t,n="/"){let s,r={},o="",i="";const l=t.indexOf("#");let c=t.indexOf("?");return l<c&&l>=0&&(c=-1),c>-1&&(s=t.slice(0,c),o=t.slice(c+1,l>-1?l:t.length),r=e(o)),l>-1&&(s=s||t.slice(0,l),i=t.slice(l,t.length)),s=au(s??t,n),{fullPath:s+(o&&"?")+o+i,path:s,query:r,hash:Zt(i)}}function lu(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function Rr(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function cu(e,t,n){const s=t.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&Nt(t.matched[s],n.matched[r])&&ri(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Nt(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function ri(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!uu(e[n],t[n]))return!1;return!0}function uu(e,t){return Ae(e)?Tr(e,t):Ae(t)?Tr(t,e):e===t}function Tr(e,t){return Ae(t)?e.length===t.length&&e.every((n,s)=>n===t[s]):e.length===1&&e[0]===t}function au(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),s=e.split("/"),r=s[s.length-1];(r===".."||r===".")&&s.push("");let o=n.length-1,i,l;for(i=0;i<s.length;i++)if(l=s[i],l!==".")if(l==="..")o>1&&o--;else break;return n.slice(0,o).join("/")+"/"+s.slice(i).join("/")}const tt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var en;(function(e){e.pop="pop",e.push="push"})(en||(en={}));var Wt;(function(e){e.back="back",e.forward="forward",e.unknown=""})(Wt||(Wt={}));function fu(e){if(!e)if(Rt){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),iu(e)}const du=/^[^#]+#/;function pu(e,t){return e.replace(du,"#")+t}function hu(e,t){const n=document.documentElement.getBoundingClientRect(),s=e.getBoundingClientRect();return{behavior:t.behavior,left:s.left-n.left-(t.left||0),top:s.top-n.top-(t.top||0)}}const $n=()=>({left:window.scrollX,top:window.scrollY});function gu(e){let t;if("el"in e){const n=e.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;t=hu(r,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function wr(e,t){return(history.state?history.state.position-t:-1)+e}const hs=new Map;function mu(e,t){hs.set(e,t)}function _u(e){const t=hs.get(e);return hs.delete(e),t}let vu=()=>location.protocol+"//"+location.host;function oi(e,t){const{pathname:n,search:s,hash:r}=t,o=e.indexOf("#");if(o>-1){let l=r.includes(e.slice(o))?e.slice(o).length:1,c=r.slice(l);return c[0]!=="/"&&(c="/"+c),Rr(c,"")}return Rr(n,e)+s+r}function yu(e,t,n,s){let r=[],o=[],i=null;const l=({state:h})=>{const m=oi(e,location),C=n.value,O=t.value;let k=0;if(h){if(n.value=m,t.value=h,i&&i===C){i=null;return}k=O?h.position-O.position:0}else s(m);r.forEach(L=>{L(n.value,C,{delta:k,type:en.pop,direction:k?k>0?Wt.forward:Wt.back:Wt.unknown})})};function c(){i=n.value}function p(h){r.push(h);const m=()=>{const C=r.indexOf(h);C>-1&&r.splice(C,1)};return o.push(m),m}function f(){const{history:h}=window;h.state&&h.replaceState(W({},h.state,{scroll:$n()}),"")}function d(){for(const h of o)h();o=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",f,{passive:!0}),{pauseListeners:c,listen:p,destroy:d}}function xr(e,t,n,s=!1,r=!1){return{back:e,current:t,forward:n,replaced:s,position:window.history.length,scroll:r?$n():null}}function bu(e){const{history:t,location:n}=window,s={value:oi(e,n)},r={value:t.state};r.value||o(s.value,{back:null,current:s.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function o(c,p,f){const d=e.indexOf("#"),h=d>-1?(n.host&&document.querySelector("base")?e:e.slice(d))+c:vu()+e+c;try{t[f?"replaceState":"pushState"](p,"",h),r.value=p}catch(m){console.error(m),n[f?"replace":"assign"](h)}}function i(c,p){const f=W({},t.state,xr(r.value.back,c,r.value.forward,!0),p,{position:r.value.position});o(c,f,!0),s.value=c}function l(c,p){const f=W({},r.value,t.state,{forward:c,scroll:$n()});o(f.current,f,!0);const d=W({},xr(s.value,c,null),{position:f.position+1},p);o(c,d,!1),s.value=c}return{location:s,state:r,push:l,replace:i}}function Eu(e){e=fu(e);const t=bu(e),n=yu(e,t.state,t.location,t.replace);function s(o,i=!0){i||n.pauseListeners(),history.go(o)}const r=W({location:"",base:e,go:s,createHref:pu.bind(null,e)},t,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>t.state.value}),r}function Su(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),Eu(e)}function Ru(e){return typeof e=="string"||e&&typeof e=="object"}function ii(e){return typeof e=="string"||typeof e=="symbol"}const li=Symbol("");var Pr;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Pr||(Pr={}));function Lt(e,t){return W(new Error,{type:e,[li]:!0},t)}function Be(e,t){return e instanceof Error&&li in e&&(t==null||!!(e.type&t))}const Cr="[^/]+?",Tu={sensitive:!1,strict:!1,start:!0,end:!0},wu=/[.+*?^${}()[\]/\\]/g;function xu(e,t){const n=W({},Tu,t),s=[];let r=n.start?"^":"";const o=[];for(const p of e){const f=p.length?[]:[90];n.strict&&!p.length&&(r+="/");for(let d=0;d<p.length;d++){const h=p[d];let m=40+(n.sensitive?.25:0);if(h.type===0)d||(r+="/"),r+=h.value.replace(wu,"\\$&"),m+=40;else if(h.type===1){const{value:C,repeatable:O,optional:k,regexp:L}=h;o.push({name:C,repeatable:O,optional:k});const N=L||Cr;if(N!==Cr){m+=10;try{new RegExp(`(${N})`)}catch(A){throw new Error(`Invalid custom RegExp for param "${C}" (${N}): `+A.message)}}let H=O?`((?:${N})(?:/(?:${N}))*)`:`(${N})`;d||(H=k&&p.length<2?`(?:/${H})`:"/"+H),k&&(H+="?"),r+=H,m+=20,k&&(m+=-8),O&&(m+=-20),N===".*"&&(m+=-50)}f.push(m)}s.push(f)}if(n.strict&&n.end){const p=s.length-1;s[p][s[p].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const i=new RegExp(r,n.sensitive?"":"i");function l(p){const f=p.match(i),d={};if(!f)return null;for(let h=1;h<f.length;h++){const m=f[h]||"",C=o[h-1];d[C.name]=m&&C.repeatable?m.split("/"):m}return d}function c(p){let f="",d=!1;for(const h of e){(!d||!f.endsWith("/"))&&(f+="/"),d=!1;for(const m of h)if(m.type===0)f+=m.value;else if(m.type===1){const{value:C,repeatable:O,optional:k}=m,L=C in p?p[C]:"";if(Ae(L)&&!O)throw new Error(`Provided param "${C}" is an array but it is not repeatable (* or + modifiers)`);const N=Ae(L)?L.join("/"):L;if(!N)if(k)h.length<2&&(f.endsWith("/")?f=f.slice(0,-1):d=!0);else throw new Error(`Missing required param "${C}"`);f+=N}}return f||"/"}return{re:i,score:s,keys:o,parse:l,stringify:c}}function Pu(e,t){let n=0;for(;n<e.length&&n<t.length;){const s=t[n]-e[n];if(s)return s;n++}return e.length<t.length?e.length===1&&e[0]===80?-1:1:e.length>t.length?t.length===1&&t[0]===80?1:-1:0}function ci(e,t){let n=0;const s=e.score,r=t.score;for(;n<s.length&&n<r.length;){const o=Pu(s[n],r[n]);if(o)return o;n++}if(Math.abs(r.length-s.length)===1){if(Or(s))return 1;if(Or(r))return-1}return r.length-s.length}function Or(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Cu={type:0,value:""},Ou=/[a-zA-Z0-9_]/;function Au(e){if(!e)return[[]];if(e==="/")return[[Cu]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(m){throw new Error(`ERR (${n})/"${p}": ${m}`)}let n=0,s=n;const r=[];let o;function i(){o&&r.push(o),o=[]}let l=0,c,p="",f="";function d(){p&&(n===0?o.push({type:0,value:p}):n===1||n===2||n===3?(o.length>1&&(c==="*"||c==="+")&&t(`A repeatable param (${p}) must be alone in its segment. eg: '/:ids+.`),o.push({type:1,value:p,regexp:f,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):t("Invalid state to consume buffer"),p="")}function h(){p+=c}for(;l<e.length;){if(c=e[l++],c==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:c==="/"?(p&&d(),i()):c===":"?(d(),n=1):h();break;case 4:h(),n=s;break;case 1:c==="("?n=2:Ou.test(c)?h():(d(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--);break;case 2:c===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+c:n=3:f+=c;break;case 3:d(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--,f="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${p}"`),d(),i(),r}function Mu(e,t,n){const s=xu(Au(e.path),n),r=W(s,{record:e,parent:t,children:[],alias:[]});return t&&!r.record.aliasOf==!t.record.aliasOf&&t.children.push(r),r}function Iu(e,t){const n=[],s=new Map;t=Nr({strict:!1,end:!0,sensitive:!1},t);function r(d){return s.get(d)}function o(d,h,m){const C=!m,O=Mr(d);O.aliasOf=m&&m.record;const k=Nr(t,d),L=[O];if("alias"in d){const A=typeof d.alias=="string"?[d.alias]:d.alias;for(const Q of A)L.push(Mr(W({},O,{components:m?m.record.components:O.components,path:Q,aliasOf:m?m.record:O})))}let N,H;for(const A of L){const{path:Q}=A;if(h&&Q[0]!=="/"){const oe=h.record.path,ee=oe[oe.length-1]==="/"?"":"/";A.path=h.record.path+(Q&&ee+Q)}if(N=Mu(A,h,k),m?m.alias.push(N):(H=H||N,H!==N&&H.alias.push(N),C&&d.name&&!Ir(N)&&i(d.name)),ui(N)&&c(N),O.children){const oe=O.children;for(let ee=0;ee<oe.length;ee++)o(oe[ee],N,m&&m.children[ee])}m=m||N}return H?()=>{i(H)}:Kt}function i(d){if(ii(d)){const h=s.get(d);h&&(s.delete(d),n.splice(n.indexOf(h),1),h.children.forEach(i),h.alias.forEach(i))}else{const h=n.indexOf(d);h>-1&&(n.splice(h,1),d.record.name&&s.delete(d.record.name),d.children.forEach(i),d.alias.forEach(i))}}function l(){return n}function c(d){const h=Hu(d,n);n.splice(h,0,d),d.record.name&&!Ir(d)&&s.set(d.record.name,d)}function p(d,h){let m,C={},O,k;if("name"in d&&d.name){if(m=s.get(d.name),!m)throw Lt(1,{location:d});k=m.record.name,C=W(Ar(h.params,m.keys.filter(H=>!H.optional).concat(m.parent?m.parent.keys.filter(H=>H.optional):[]).map(H=>H.name)),d.params&&Ar(d.params,m.keys.map(H=>H.name))),O=m.stringify(C)}else if(d.path!=null)O=d.path,m=n.find(H=>H.re.test(O)),m&&(C=m.parse(O),k=m.record.name);else{if(m=h.name?s.get(h.name):n.find(H=>H.re.test(h.path)),!m)throw Lt(1,{location:d,currentLocation:h});k=m.record.name,C=W({},h.params,d.params),O=m.stringify(C)}const L=[];let N=m;for(;N;)L.unshift(N.record),N=N.parent;return{name:k,path:O,params:C,matched:L,meta:Lu(L)}}e.forEach(d=>o(d));function f(){n.length=0,s.clear()}return{addRoute:o,resolve:p,removeRoute:i,clearRoutes:f,getRoutes:l,getRecordMatcher:r}}function Ar(e,t){const n={};for(const s of t)s in e&&(n[s]=e[s]);return n}function Mr(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:Nu(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function Nu(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const s in e.components)t[s]=typeof n=="object"?n[s]:n;return t}function Ir(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Lu(e){return e.reduce((t,n)=>W(t,n.meta),{})}function Nr(e,t){const n={};for(const s in e)n[s]=s in t?t[s]:e[s];return n}function Hu(e,t){let n=0,s=t.length;for(;n!==s;){const o=n+s>>1;ci(e,t[o])<0?s=o:n=o+1}const r=Du(e);return r&&(s=t.lastIndexOf(r,s-1)),s}function Du(e){let t=e;for(;t=t.parent;)if(ui(t)&&ci(e,t)===0)return t}function ui({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function Fu(e){const t={};if(e===""||e==="?")return t;const s=(e[0]==="?"?e.slice(1):e).split("&");for(let r=0;r<s.length;++r){const o=s[r].replace(ei," "),i=o.indexOf("="),l=Zt(i<0?o:o.slice(0,i)),c=i<0?null:Zt(o.slice(i+1));if(l in t){let p=t[l];Ae(p)||(p=t[l]=[p]),p.push(c)}else t[l]=c}return t}function Lr(e){let t="";for(let n in e){const s=e[n];if(n=nu(n),s==null){s!==void 0&&(t+=(t.length?"&":"")+n);continue}(Ae(s)?s.map(o=>o&&ps(o)):[s&&ps(s)]).forEach(o=>{o!==void 0&&(t+=(t.length?"&":"")+n,o!=null&&(t+="="+o))})}return t}function Uu(e){const t={};for(const n in e){const s=e[n];s!==void 0&&(t[n]=Ae(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return t}const qu=Symbol(""),Hr=Symbol(""),qs=Symbol(""),ai=Symbol(""),gs=Symbol("");function qt(){let e=[];function t(s){return e.push(s),()=>{const r=e.indexOf(s);r>-1&&e.splice(r,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function rt(e,t,n,s,r,o=i=>i()){const i=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((l,c)=>{const p=h=>{h===!1?c(Lt(4,{from:n,to:t})):h instanceof Error?c(h):Ru(h)?c(Lt(2,{from:t,to:h})):(i&&s.enterCallbacks[r]===i&&typeof h=="function"&&i.push(h),l())},f=o(()=>e.call(s&&s.instances[r],t,n,p));let d=Promise.resolve(f);e.length<3&&(d=d.then(p)),d.catch(h=>c(h))})}function es(e,t,n,s,r=o=>o()){const o=[];for(const i of e)for(const l in i.components){let c=i.components[l];if(!(t!=="beforeRouteEnter"&&!i.instances[l]))if(Xo(c)){const f=(c.__vccOpts||c)[t];f&&o.push(rt(f,n,s,i,l,r))}else{let p=c();o.push(()=>p.then(f=>{if(!f)throw new Error(`Couldn't resolve component "${l}" at "${i.path}"`);const d=Jc(f)?f.default:f;i.mods[l]=f,i.components[l]=d;const m=(d.__vccOpts||d)[t];return m&&rt(m,n,s,i,l,r)()}))}}return o}function Dr(e){const t=Ge(qs),n=Ge(ai),s=Pe(()=>{const c=Ct(e.to);return t.resolve(c)}),r=Pe(()=>{const{matched:c}=s.value,{length:p}=c,f=c[p-1],d=n.matched;if(!f||!d.length)return-1;const h=d.findIndex(Nt.bind(null,f));if(h>-1)return h;const m=Fr(c[p-2]);return p>1&&Fr(f)===m&&d[d.length-1].path!==m?d.findIndex(Nt.bind(null,c[p-2])):h}),o=Pe(()=>r.value>-1&&Vu(n.params,s.value.params)),i=Pe(()=>r.value>-1&&r.value===n.matched.length-1&&ri(n.params,s.value.params));function l(c={}){return ju(c)?t[Ct(e.replace)?"replace":"push"](Ct(e.to)).catch(Kt):Promise.resolve()}return{route:s,href:Pe(()=>s.value.href),isActive:o,isExactActive:i,navigate:l}}const ku=bo({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Dr,setup(e,{slots:t}){const n=Nn(Dr(e)),{options:s}=Ge(qs),r=Pe(()=>({[Ur(e.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Ur(e.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const o=t.default&&t.default(n);return e.custom?o:zo("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},o)}}}),$u=ku;function ju(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Vu(e,t){for(const n in t){const s=t[n],r=e[n];if(typeof s=="string"){if(s!==r)return!1}else if(!Ae(r)||r.length!==s.length||s.some((o,i)=>o!==r[i]))return!1}return!0}function Fr(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Ur=(e,t,n)=>e??t??n,Bu=bo({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const s=Ge(gs),r=Pe(()=>e.route||s.value),o=Ge(Hr,0),i=Pe(()=>{let p=Ct(o);const{matched:f}=r.value;let d;for(;(d=f[p])&&!d.components;)p++;return p}),l=Pe(()=>r.value.matched[i.value]);pn(Hr,Pe(()=>i.value+1)),pn(qu,l),pn(gs,r);const c=Qi();return hn(()=>[c.value,l.value,e.name],([p,f,d],[h,m,C])=>{f&&(f.instances[d]=p,m&&m!==f&&p&&p===h&&(f.leaveGuards.size||(f.leaveGuards=m.leaveGuards),f.updateGuards.size||(f.updateGuards=m.updateGuards))),p&&f&&(!m||!Nt(f,m)||!h)&&(f.enterCallbacks[d]||[]).forEach(O=>O(p))},{flush:"post"}),()=>{const p=r.value,f=e.name,d=l.value,h=d&&d.components[f];if(!h)return qr(n.default,{Component:h,route:p});const m=d.props[f],C=m?m===!0?p.params:typeof m=="function"?m(p):m:null,k=zo(h,W({},C,t,{onVnodeUnmounted:L=>{L.component.isUnmounted&&(d.instances[f]=null)},ref:c}));return qr(n.default,{Component:k,route:p})||k}}});function qr(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const Ju=Bu;function Ku(e){const t=Iu(e.routes,e),n=e.parseQuery||Fu,s=e.stringifyQuery||Lr,r=e.history,o=qt(),i=qt(),l=qt(),c=zi(tt);let p=tt;Rt&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=Xn.bind(null,v=>""+v),d=Xn.bind(null,ru),h=Xn.bind(null,Zt);function m(v,P){let w,M;return ii(v)?(w=t.getRecordMatcher(v),M=P):M=v,t.addRoute(M,w)}function C(v){const P=t.getRecordMatcher(v);P&&t.removeRoute(P)}function O(){return t.getRoutes().map(v=>v.record)}function k(v){return!!t.getRecordMatcher(v)}function L(v,P){if(P=W({},P||c.value),typeof v=="string"){const a=Zn(n,v,P.path),g=t.resolve({path:a.path},P),y=r.createHref(a.fullPath);return W(a,g,{params:h(g.params),hash:Zt(a.hash),redirectedFrom:void 0,href:y})}let w;if(v.path!=null)w=W({},v,{path:Zn(n,v.path,P.path).path});else{const a=W({},v.params);for(const g in a)a[g]==null&&delete a[g];w=W({},v,{params:d(a)}),P.params=d(P.params)}const M=t.resolve(w,P),J=v.hash||"";M.params=f(h(M.params));const te=lu(s,W({},v,{hash:tu(J),path:M.path})),u=r.createHref(te);return W({fullPath:te,hash:J,query:s===Lr?Uu(v.query):v.query||{}},M,{redirectedFrom:void 0,href:u})}function N(v){return typeof v=="string"?Zn(n,v,c.value.path):W({},v)}function H(v,P){if(p!==v)return Lt(8,{from:P,to:v})}function A(v){return ee(v)}function Q(v){return A(W(N(v),{replace:!0}))}function oe(v){const P=v.matched[v.matched.length-1];if(P&&P.redirect){const{redirect:w}=P;let M=typeof w=="function"?w(v):w;return typeof M=="string"&&(M=M.includes("?")||M.includes("#")?M=N(M):{path:M},M.params={}),W({query:v.query,hash:v.hash,params:M.path!=null?{}:v.params},M)}}function ee(v,P){const w=p=L(v),M=c.value,J=v.state,te=v.force,u=v.replace===!0,a=oe(w);if(a)return ee(W(N(a),{state:typeof a=="object"?W({},J,a.state):J,force:te,replace:u}),P||w);const g=w;g.redirectedFrom=P;let y;return!te&&cu(s,M,w)&&(y=Lt(16,{to:g,from:M}),Le(M,M,!0,!1)),(y?Promise.resolve(y):Ie(g,M)).catch(_=>Be(_)?Be(_,2)?_:Ze(_):j(_,g,M)).then(_=>{if(_){if(Be(_,2))return ee(W({replace:u},N(_.to),{state:typeof _.to=="object"?W({},J,_.to.state):J,force:te}),P||g)}else _=ct(g,M,!0,u,J);return Xe(g,M,_),_})}function Me(v,P){const w=H(v,P);return w?Promise.reject(w):Promise.resolve()}function Ye(v){const P=bt.values().next().value;return P&&typeof P.runWithContext=="function"?P.runWithContext(v):v()}function Ie(v,P){let w;const[M,J,te]=Wu(v,P);w=es(M.reverse(),"beforeRouteLeave",v,P);for(const a of M)a.leaveGuards.forEach(g=>{w.push(rt(g,v,P))});const u=Me.bind(null,v,P);return w.push(u),Re(w).then(()=>{w=[];for(const a of o.list())w.push(rt(a,v,P));return w.push(u),Re(w)}).then(()=>{w=es(J,"beforeRouteUpdate",v,P);for(const a of J)a.updateGuards.forEach(g=>{w.push(rt(g,v,P))});return w.push(u),Re(w)}).then(()=>{w=[];for(const a of te)if(a.beforeEnter)if(Ae(a.beforeEnter))for(const g of a.beforeEnter)w.push(rt(g,v,P));else w.push(rt(a.beforeEnter,v,P));return w.push(u),Re(w)}).then(()=>(v.matched.forEach(a=>a.enterCallbacks={}),w=es(te,"beforeRouteEnter",v,P,Ye),w.push(u),Re(w))).then(()=>{w=[];for(const a of i.list())w.push(rt(a,v,P));return w.push(u),Re(w)}).catch(a=>Be(a,8)?a:Promise.reject(a))}function Xe(v,P,w){l.list().forEach(M=>Ye(()=>M(v,P,w)))}function ct(v,P,w,M,J){const te=H(v,P);if(te)return te;const u=P===tt,a=Rt?history.state:{};w&&(M||u?r.replace(v.fullPath,W({scroll:u&&a&&a.scroll},J)):r.push(v.fullPath,J)),c.value=v,Le(v,P,w,u),Ze()}let Ne;function Ht(){Ne||(Ne=r.listen((v,P,w)=>{if(!rn.listening)return;const M=L(v),J=oe(M);if(J){ee(W(J,{replace:!0}),M).catch(Kt);return}p=M;const te=c.value;Rt&&mu(wr(te.fullPath,w.delta),$n()),Ie(M,te).catch(u=>Be(u,12)?u:Be(u,2)?(ee(u.to,M).then(a=>{Be(a,20)&&!w.delta&&w.type===en.pop&&r.go(-1,!1)}).catch(Kt),Promise.reject()):(w.delta&&r.go(-w.delta,!1),j(u,M,te))).then(u=>{u=u||ct(M,te,!1),u&&(w.delta&&!Be(u,8)?r.go(-w.delta,!1):w.type===en.pop&&Be(u,20)&&r.go(-1,!1)),Xe(M,te,u)}).catch(Kt)}))}let vt=qt(),re=qt(),G;function j(v,P,w){Ze(v);const M=re.list();return M.length?M.forEach(J=>J(v,P,w)):console.error(v),Promise.reject(v)}function je(){return G&&c.value!==tt?Promise.resolve():new Promise((v,P)=>{vt.add([v,P])})}function Ze(v){return G||(G=!v,Ht(),vt.list().forEach(([P,w])=>v?w(v):P()),vt.reset()),v}function Le(v,P,w,M){const{scrollBehavior:J}=e;if(!Rt||!J)return Promise.resolve();const te=!w&&_u(wr(v.fullPath,0))||(M||!w)&&history.state&&history.state.scroll||null;return Ms().then(()=>J(v,P,te)).then(u=>u&&gu(u)).catch(u=>j(u,v,P))}const ge=v=>r.go(v);let yt;const bt=new Set,rn={currentRoute:c,listening:!0,addRoute:m,removeRoute:C,clearRoutes:t.clearRoutes,hasRoute:k,getRoutes:O,resolve:L,options:e,push:A,replace:Q,go:ge,back:()=>ge(-1),forward:()=>ge(1),beforeEach:o.add,beforeResolve:i.add,afterEach:l.add,onError:re.add,isReady:je,install(v){const P=this;v.component("RouterLink",$u),v.component("RouterView",Ju),v.config.globalProperties.$router=P,Object.defineProperty(v.config.globalProperties,"$route",{enumerable:!0,get:()=>Ct(c)}),Rt&&!yt&&c.value===tt&&(yt=!0,A(r.location).catch(J=>{}));const w={};for(const J in tt)Object.defineProperty(w,J,{get:()=>c.value[J],enumerable:!0});v.provide(qs,P),v.provide(ai,co(w)),v.provide(gs,c);const M=v.unmount;bt.add(v),v.unmount=function(){bt.delete(v),bt.size<1&&(p=tt,Ne&&Ne(),Ne=null,c.value=tt,yt=!1,G=!1),M()}}};function Re(v){return v.reduce((P,w)=>P.then(()=>Ye(w)),Promise.resolve())}return rn}function Wu(e,t){const n=[],s=[],r=[],o=Math.max(t.matched.length,e.matched.length);for(let i=0;i<o;i++){const l=t.matched[i];l&&(e.matched.find(p=>Nt(p,l))?s.push(l):n.push(l));const c=e.matched[i];c&&(t.matched.find(p=>Nt(p,c))||r.push(c))}return[n,s,r]}const fi=[{id:1,question:"Что такое НТ?",answer:`Нагрузочное тестирование (НТ) — это проверка устойчивости и производительности программного обеспечения под нагрузкой, сопоставимой с реальными условиями использования."
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
    `,level:"INTERN"},{id:2.1,question:"В МНТ есть раздел генерация БД, о чем он и зачем нужен?",answer:`
        Основные цели раздела "Генерация БД":
    
        1. Создание объёма данных:
          Для проведения нагрузочного тестирования требуется, чтобы база данных содержала значительное количество записей (например, пользователей, транзакций, продуктов). Это помогает симулировать реальную работу системы под высокой нагрузкой.
          Генерация данных позволяет протестировать работу системы с большими объёмами информации и убедиться, что она справляется с нагрузкой.
          
        2. Реалистичное тестирование:
          Данные, генерируемые для тестов, должны быть максимально приближены к реальным данным. Это позволит более точно оценить поведение системы в продакшене.
          Генерация данных может включать создание не только записей в таблицах, но и заполнение связей между таблицами, создание индексов и других элементов структуры базы данных.
        
        3. Сценарии тестирования:
          Некоторые сценарии нагрузочного тестирования могут предполагать выполнение операций с различными объёмами данных. Например, тестирование производительности поиска по базе данных или выполнения сложных SQL-запросов. Для таких тестов необходима база с различным количеством записей.
        
        4. Избежание дублирования:
          Генерация данных также может помочь избежать использования одних и тех же данных многими виртуальными пользователями, что сделает тестирование более приближённым к реальной эксплуатации.
    
        Зачем нужна генерация БД:
          - Тестирование на больших объёмах данных: Генерация БД позволяет протестировать систему с реальными объёмами данных, которые она будет обрабатывать в продакшене.
          - Подготовка данных для разных тестовых сценариев: Разные типы тестов могут требовать различных данных (например, для сценариев с чтением, записью, обновлением или удалением данных).
          - Оценка производительности базы данных: Нагрузка на базу данных и время отклика зависят от количества данных. Генерация данных позволяет создать условия, при которых можно оценить, как система будет работать под реальной нагрузкой.
          - Имитирование реальных условий: Генерация БД создаёт реальные или реалистичные данные, чтобы симулировать реальные сценарии использования.
    
        Таким образом, раздел "Генерация БД" является важной частью подготовки к нагрузочному тестированию, так как он обеспечивает наличие данных для полноценной проверки работы системы под нагрузкой.
      `,level:"INTERN"},{id:3,question:"Что нужно прописывать в отчёте?",answer:`
          <ul>
            <li><strong>Объект тестирования:</strong> Описание системы, как в МНТ.</li>
            <li><strong>Цели испытаний:</strong> Конкретные задачи теста, например, выявление узких мест.</li>
            <li><strong>Конфигурация стендов:</strong> Параметры ресурсов (CPU, память, количество реплик).</li>
            <li><strong>Требования к производительности:</strong> Описание достигнутых результатов по утилизации ресурсов и процент ошибок.</li>
            <li><strong>Результаты тестов:</strong> Метрики по времени отклика, пропускной способности, количеству ошибок и успешных операций.</li>
            <li><strong>Анализ результатов:</strong> Сравнение с эталонными тестами (если применимо) и выявление проблем.</li>
            <li><strong>Отчеты по тестам:</strong> Ссылки на подробные отчёты и краткий анализ по итогам тестов.</li>
          </ul>
        `,level:"INTERN"},{id:4,question:"Как записать простой скрипт с помощью Recording в JMeter?",answer:`
          <ul>
            <li><strong>Открой JMeter</strong> и добавь HTTP(S) Test Script Recorder.</li>
            <li><strong>Настрой прокси-сервер</strong> для захвата трафика (укажи порт).</li>
            <li><strong>Добавь Thread Group</strong> для организации сценария.</li>
            <li><strong>Запусти запись</strong> и проведи необходимые действия в браузере/приложении.</li>
            <li><strong>Останови запись</strong> — все запросы будут сохранены в виде шагов в сценарии.</li>
          </ul>
        `,level:"INTERN"},{id:4.1,question:"Основные шаги настройки скрипта в JMeter после записи?",answer:`
          1. Очистка скрипта:
             - Удалите ненужные запросы (статические ресурсы: CSS, JS, изображения).
             - Группируйте запросы с помощью Transaction Controller для удобства и измерения времени выполнения транзакций.
      
          2. Параметризация:
             - Используйте CSV Data Set Config для замены статических данных (логины, пароли) на динамические переменные из файла.
             - Пример:
               POST /login
               {
                 "username": "\${username}",
                 "password": "\${password}"
               }
      
          3. Корреляция:
             - Извлекайте динамические данные (например, токены) с помощью Regular Expression Extractor или JSON Extractor.
             - Пример регулярного выражения: "sessionId":"(.+?)".
      
          4. Добавление тайм-аутов (Think Time):
             - Добавьте паузы между запросами с помощью Constant Timer или Uniform Random Timer для симуляции реального поведения пользователей.
      
          5. Настройка Thread Group:
             - Установите количество пользователей (Number of Threads), время разгона (Ramp-Up Period) и количество повторений сценария (Loop Count).
      
          6. Проверки (Assertions):
             - Добавьте Response Assertion для проверки кода ответа или содержания ответа, чтобы убедиться, что запросы успешны.
      
          7. Сбор метрик (Listeners):
             - Используйте Summary Report, View Results Tree для сбора метрик по времени отклика, проценту ошибок и другим параметрам.
      
          8. Мониторинг производительности:
             - Добавьте PerfMon Metrics Collector для мониторинга нагрузки на сервер (CPU, память) во время тестов.
        `,level:"INTERN"},{id:5,question:"Что такое параметризация?",answer:`
          Параметризация — это процесс использования переменных вместо фиксированных данных в запросах. Это позволяет запускать тест с различными значениями (например, разные логины) для симуляции реальных пользователей.
      
          Пример из вашего проекта: В вашем файле JMeter используется User Defined Variables, где определены следующие переменные:
          - protocol = https
          - port = 443
          - host = profit-test.finportal-dev-2.salt.x5.ru
          - authHost = key-stage.x5.ru
          - client_id = finportal
          - username = [ваши данные]
      
          Эти переменные используются в запросах для построения URL и других параметров:
          \${protocol}://\${host}:\${port}/api/v1/data
      
          Таким образом, вместо фиксированного URL используются переменные, что облегчает изменение конфигурации и поддерживает гибкость тестирования.
        `,level:"INTERN"},{id:6,question:"Что такое корреляция?",answer:`
          Корреляция — это извлечение динамических данных (например, токенов) из ответа одного запроса для последующего использования в другом запросе. Это необходимо, когда система генерирует уникальные данные для каждой сессии.
      
          Пример из вашего проекта: Предположим, что сервер возвращает токен авторизации в одном из запросов, который нужно использовать в дальнейшем для аутентификации. Для этого используется JSON Extractor:
          1. Добавьте JSON Extractor в запрос, где возвращается токен:
             - JSON Path: $.access_token
             - Имя переменной: accessToken
          2. В следующих запросах используйте переменную для передачи токена:
          
          Authorization: Bearer \${accessToken}
          
          Теперь токен будет автоматически подставляться в каждый новый запрос, обеспечивая корректную работу теста.
        `,level:"INTERN"},{id:6.1,question:"Виды проверок в JMeter",answer:`
          1. Response Assertion:
             Этот тип проверки применяется для того, чтобы убедиться, что ответ от сервера соответствует ожиданиям. Он позволяет проверять различные части ответа, такие как:
             - Код ответа HTTP (например, 200 OK или 404 Not Found).
             - Тело ответа — проверка на наличие или отсутствие конкретного текста, регулярного выражения, XML/JSON элемента.
             - Заголовки ответа — проверка заголовков (если требуется).
             - Сообщение об ошибке — проверка на отсутствие или наличие конкретного сообщения об ошибке.
      
             Способы проверок:
             - Поиск текста — проверка на наличие или отсутствие конкретного текста в ответе. Например, можно проверять, присутствует ли строка "Success" в теле ответа.
             - Регулярные выражения — проверка с помощью регулярных выражений для более гибкого поиска данных в теле ответа.
             - Коды ответов — проверка, что запрос вернул определенный HTTP статус-код, например, 200 для успешного выполнения.
      
          2. Size Assertion:
             Проверяет, что размер тела ответа больше или меньше указанного значения.
             Пример:
             - Проверка, что размер тела ответа меньше 5000 байт:
               - Add -> Assertions -> Size Assertion.
               - В поле "Size in bytes", установите значение 5000.
               - В разделе "Type of Comparison", выберите Less than.
      
          3. Duration Assertion:
             Проверяет, что время выполнения запроса не превышает определенного времени.
             Пример:
             - Проверка, что запрос выполнен не более чем за 2 секунды:
               - Add -> Assertions -> Duration Assertion.
               - В поле "Duration (in milliseconds)", установите значение 2000.
      
          4. XPath Assertion:
             Проверяет содержимое XML-ответа с использованием XPath, чтобы найти или проверить наличие конкретных элементов.
             Пример:
             - Проверка, что XML-ответ содержит элемент <status>Success</status>:
               - Add -> Assertions -> XPath Assertion.
               - В поле "XPath", установите следующее выражение:
                 \`//status[text()='Success']\`
      
          5. JSON Assertion:
             Используется для проверки содержимого JSON-ответов.
             Пример:
             - Проверка, что JSON-ответ содержит поле "status": "Success":
               - Add -> Post Processors -> JSON Extractor (для извлечения значения).
               - Используйте "JSON Assertion" и укажите путь:
                 \`$.status\`
               - Проверка, что status равен Success.
      
          6. JSR223/BeanShell Assertion:
             Позволяет использовать скрипты для кастомных проверок. Например, скрипт на Groovy для проверки динамических значений.
             Пример:
             - Проверка, что длина тела ответа больше 100 символов (JSR223 Assertion):
               - Add -> Assertions -> JSR223 Assertion.
               - Введите скрипт на Groovy:
                 \`if (prev.getResponseDataAsString().length() <= 100) {
                     AssertionResult.setFailure(true);
                     AssertionResult.setFailureMessage("Response length is less than or equal to 100");
                 }\`
        `,level:"INTERN"},{id:7,question:"Определение профиля НТ и методы его сбора",answer:`
          <p>Профиль нагрузки — это набор операций с заданными интенсивностями, полученный на основе сбора статистических данных либо определенный путем анализа требований к тестируемой системе.</p>
          <p><strong>Методы сбора профиля НТ:</strong></p>
          <ul>
            <li><strong>Анализ бизнес-требований:</strong> Сбор данных о прогнозируемом количестве пользователей и типичных сценариях использования.</li>
            <li><strong>Логирование реальных пользователей:</strong> Анализ логов реальных систем для определения характерных нагрузок.</li>
            <li><strong>Анализ мониторинга системы:</strong> Использование данных мониторинга производительности (например, Grafana, Prometheus) для понимания, как система работает под нагрузкой.</li>
            <li><strong>Консультации с разработчиками и бизнес-аналитиками:</strong> Определение критичных операций и нагрузочных сценариев.</li>
          </ul>
        `,level:"INTERN"},{id:8,question:"Перечень основных тестов нагрузочного тестирования и их цели",answer:`
          <ul>
            <li><strong>Тест на максимальную нагрузку:</strong> Определение предела, при котором система перестает справляться с запросами. Цель — найти узкие места.</li>
            <li><strong>Тест стабильности:</strong> Проверка работы системы при постоянной нагрузке в течение длительного времени (например, 10 часов). Цель — выявить проблемы с утечкой памяти и нестабильностью работы.</li>
            <li><strong>Стрессовое тестирование:</strong> Тестирование системы при экстремальных условиях, когда ее ресурсы могут быть исчерпаны. Основная цель — проверка устойчивости системы при экстремальных условиях.</li>
            <li><strong>Тестирование отказоустойчивости:</strong> Оценка способности системы сохранять работоспособность в условиях неблагоприятных факторов, таких как сбои в сети и отключение серверов.</li>
          </ul>
        `,level:"INTERN"},{id:9,question:"Основные метрики, на которые смотрят в Grafana при нагрузочном тестировании",answer:`
          <ul>
            <li><strong>CPU Utilization:</strong> Показывает, сколько процессорных ресурсов использует система.</li>
            <li><strong>Memory Utilization:</strong> Показывает использование оперативной памяти, важно, чтобы оно не превышало 80%.</li>
            <li><strong>Request Rate (RPS):</strong> Количество запросов в секунду, которые система обрабатывает.</li>
            <li><strong>Response Time:</strong> Время отклика системы, особенно важно для критичных операций.</li>
            <li><strong>Error Rate:</strong> Процент ошибок в системе, следует отслеживать, чтобы он был ниже 1%.</li>
            <li><strong>Throughput:</strong> Пропускная способность системы, измеряемая в мегабайтах или гигабайтах в секунду.</li>
          </ul>
        `,level:"INTERN"},{id:10,question:"Статистика базы данных",answer:`
          <ul>
            <li><strong>Количество запросов:</strong> Общее количество SQL-запросов, обрабатываемых базой данных.</li>
            <li><strong>Время выполнения запросов:</strong> Показывает среднее, максимальное и минимальное время выполнения запросов.</li>
            <li><strong>Количество соединений:</strong> Количество активных соединений к базе данных.</li>
            <li><strong>Закэшированные данные:</strong> Статистика использования кэша для ускорения выполнения запросов.</li>
            <li><strong>Использование индексов:</strong> Статистика использования индексов для оптимизации запросов.</li>
            <li><strong>Количество блокировок:</strong> Блокировки строк или таблиц, замедляющие работу базы данных.</li>
          </ul>
        `,level:"INTERN"},{id:11,question:"Различия между реляционной и нереляционной БД",answer:`
        <p>База данных (БД) — это организованная коллекция данных, предназначенная для хранения, управления и обработки информации. Базы данных позволяют эффективно сохранять большие объёмы данных, легко находить нужные сведения и управлять ими. Базы данных могут быть реляционными и нереляционными</p>
          <ul>
            <li><strong>Реляционные базы данных (RDBMS):</strong> организуют данные в таблицы с четко определенной схемой (строки и столбцы). Они поддерживают сложные связи между таблицами с помощью первичных и внешних ключей, что делает их идеальными для работы с четко структурированными данными и сложными взаимосвязями. Для работы с данными используют язык SQL. Примеры: MySQL, PostgreSQL, Oracle, SQL Server.</li>
            <li><strong>Нереляционные базы данных (NoSQL):</strong> могут хранить данные в различных форматах — документы, графы, ключ-значение или столбцы — без строгой схемы. Обычно они не поддерживают сложные связи, но хорошо масштабируются и оптимизированы для быстрого доступа к большим объемам неструктурированных данных. Примеры: MongoDB, Cassandra, Redis, Couchbase.</li>
          </ul>
        `,level:"INTERN"},{id:12,question:"Как посмотреть, что находится в конкретной таблице?",answer:`
          <p>Для этого можно использовать следующий SQL-запрос:</p>
          <pre><code>SELECT * FROM table_name;</code></pre>
          <p>Здесь <code>table_name</code> — это название таблицы, данные которой нужно посмотреть.</p>
        `,level:"INTERN"},{id:13,question:"Как выбрать конкретные столбцы?",answer:`
          <p>Для этого нужно указать конкретные столбцы в SQL-запросе:</p>
          <pre><code>SELECT column1, column2 FROM table_name;</code></pre>
          <p>Пример:</p>
          <pre><code>SELECT first_name, last_name FROM employees;</code></pre>
        `,level:"INTERN"},{id:14,question:"Как писать условия для фильтрации? (WHERE)",answer:`
          <p>Для фильтрации данных используется ключевое слово <code>WHERE</code>:</p>
          <pre><code>SELECT * FROM table_name WHERE condition;</code></pre>
          <p>Пример:</p>
          <pre><code>SELECT * FROM employees WHERE salary > 50000;</code></pre>
        `,level:"INTERN"},{id:15,question:"Что такое HTTP протокол?",answer:`
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
        `,level:"INTERN"},{id:16,question:"Что такое Request?",answer:"Request (Запрос) — это сообщение от клиента к серверу для получения данных или выполнения операций.",level:"INTERN"},{id:17,question:"Что такое Response?",answer:"Response (Ответ) — это сообщение, которое сервер отправляет в ответ на запрос клиента.",level:"INTERN"},{id:18,question:"Что такое Headers?",answer:"Headers (Заголовки) — это метаинформация, передаваемая в запросах и ответах HTTP.",level:"INTERN"},{id:19,question:"Что такое Cookie?",answer:"Cookie — это небольшие данные, которые сервер отправляет клиенту для хранения информации о сессиях и настройках.",level:"INTERN"},{id:20,question:"Что такое Body?",answer:"Body (Тело) — это основное содержимое HTTP-запроса или ответа, содержащее данные.",level:"INTERN"},{id:21,question:"Что такое Method?",answer:`
          <ul>
            <li><strong>GET:</strong> Получить данные с сервера.</li>
            <li><strong>POST:</strong> Отправить данные на сервер.</li>
            <li><strong>PUT:</strong> Обновить или создать ресурс на сервере.</li>
            <li><strong>DELETE:</strong> Удалить ресурс на сервере.</li>
            <li><strong>PATCH:</strong> Частичное обновление ресурса.</li>
          </ul>
        `,level:"INTERN"},{id:22,question:"Коды состояния и текст статуса",answer:`
          <ul>
            <li><strong>200 OK:</strong> Запрос успешно выполнен.</li>
            <li><strong>201 Created:</strong> Запрос выполнен успешно, создан новый ресурс.</li>
            <li><strong>404 Not Found:</strong> Ресурс не найден.</li>
            <li><strong>500 Internal Server Error:</strong> На сервере произошла ошибка.</li>
          </ul>
        `,level:"INTERN"},{id:24,question:"Простые циклы с условиями на Python и Java",answer:`
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
        `,level:"INTERN"},{id:25,question:"Реализация простейших алгоритмов на Python и Java",answer:`
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
        `,level:"INTERN"},{id:26,question:"Функции работы с массивами на Python и Java",answer:`
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
        `,level:"INTERN"},{id:27,question:"Как правильно использовать функции корреляции, проверок и границ транзакций в JMeter или другом инструменте нагрузочного тестирования?",answer:`
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
        `,level:"JUNIOR"},{id:28,question:"Что такое пейсинг?",answer:`
          <p>Пейсинг — это интервал времени между выполнением последовательных действий одного и того же виртуального пользователя в нагрузочном тесте. Пейсинг контролирует интенсивность нагрузки.</p>
        `,level:"JUNIOR"},{id:29,question:"Как правильно вычислять пейсинг и количество пользователей?",answer:`
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
        `,level:"JUNIOR"},{id:29.1,question:"Как правильно вычислить количество виртуальных пользователей и пейсинг?",answer:`
          Для правильного расчета количества виртуальных пользователей и пейсинга нужно учитывать следующие параметры:
      
          1. **Количество виртуальных пользователей (Vusers):**
             - Количество виртуальных пользователей зависит от того, сколько пользователей вы хотите симулировать в реальной системе.
             - Для расчета количества виртуальных пользователей можно использовать следующую формулу:
               \`Vusers = (R * T) / P\`, где:
               - \`R\` — это желаемое количество запросов в секунду (RPS),
               - \`T\` — это время выполнения одного сценария (в секундах),
               - \`P\` — это пейсинг, то есть интервал между выполнением сценариев пользователями.
      
          2. **Пейсинг (Pacing):**
             - Пейсинг — это интервал времени между последовательными выполнениями сценариев одним пользователем.
             - Чтобы вычислить пейсинг, необходимо учитывать желаемую нагрузку на систему и количество пользователей.
             - Формула для расчета пейсинга:
               \`P = (T * Vusers) / R\`, где:
               - \`P\` — это пейсинг (время между началом одного и начала следующего сценария),
               - \`T\` — это время выполнения одного цикла сценария (в секундах),
               - \`Vusers\` — это количество виртуальных пользователей,
               - \`R\` — это желаемое количество запросов в секунду.
      
          **Пример расчета:**
          - Допустим, вам нужно симулировать 1000 запросов в минуту (R = 1000 / 60 = ~16.67 RPS).
          - Если сценарий одного пользователя выполняется за 5 секунд (T = 5),
          - И вы хотите использовать 100 виртуальных пользователей (Vusers = 100),
          
          Тогда пейсинг можно рассчитать как:
          \`P = (T * Vusers) / R = (5 * 100) / 16.67 = ~30 секунд\`.
      
          Это значит, что каждый виртуальный пользователь должен запускать сценарий каждые 30 секунд, чтобы достичь 1000 запросов в минуту.
        `,level:"JUNIOR"},{id:29.2,question:"Что такое сущность в БД?",answer:`
          Сущность в базе данных (БД) — это объект или концепция, которая представляет собой некоторую информацию, которую необходимо хранить в системе. В контексте реляционных баз данных сущность обычно отображается в виде таблицы, где каждая строка представляет собой запись (экземпляр сущности), а столбцы — атрибуты (свойства) сущности.
      
          Основные характеристики сущности:
          1. Сущность — это объект, который может быть идентифицирован в системе. Примеры сущностей: пользователи, заказы, товары, транзакции и т.д.
          2. Атрибуты сущности — это характеристики, которые описывают сущность. Например, сущность "Пользователь" может иметь атрибуты, такие как имя, электронная почта, возраст и т.д.
          3. Экземпляры сущности — это конкретные записи в таблице базы данных. Например, каждый пользователь в таблице "Пользователи" — это экземпляр сущности "Пользователь".
      
          Пример:
          Для сущности "Пользователь" может быть создана таблица в базе данных, которая содержит следующие атрибуты:
          - id (идентификатор пользователя),
          - first_name (имя),
          - last_name (фамилия),
          - email (электронная почта).
      
          Пример таблицы "Пользователи":
          \`\`\`
          id   first_name  last_name  email
          1    Иван        Иванов     ivan@example.com
          2    Ольга       Смирнова   olga@example.com
          \`\`\`
      
          В данном случае сущность — это "Пользователь", а каждая строка таблицы представляет собой конкретного пользователя, то есть экземпляр этой сущности.
      
          Заключение:
          Сущность — это ключевая концепция в базах данных, которая отражает объекты, с которыми работает система, и хранит информацию о них в виде записей (строк) в таблицах.
        `,level:"JUNIOR"},{id:30,question:"Как снять статистику с базы данных (PostgreSQL)?",answer:`
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
        `,level:"JUNIOR"},{id:31,question:"Что такое многопоточность в приложениях?",answer:`
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
        `,level:"JUNIOR"},{id:31.1,question:"Какой есть предел потоков у приложения?",answer:`
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
        `,level:"JUNIOR"},{id:31.2,question:"Чем отличается виртуальный пользователь(Thread) от потока внутри приложения?",answer:`
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
        `,level:"JUNIOR"},{id:31.3,question:"Например, у нас залогинились 1000 виртуальных пользователей одновременно, сколько будет потоков?",answer:`
          <p>Если у вас 1000 виртуальных пользователей в JMeter, это создаст 1000 потоков в самом JMeter, каждый из которых будет выполнять свои действия параллельно (например, логин).</p>
          <p>Однако на сервере количество потоков будет зависеть от его настроек. Сервер может использовать пул потоков (например, 200 потоков), и обрабатывать запросы по очереди, а не все одновременно.</p>
          <p>То есть:</p>
          <ul>
            <li>1000 виртуальных пользователей в JMeter = 1000 потоков в JMeter.</li>
            <li>Сервер может иметь меньше потоков, в зависимости от своей конфигурации.</li>
          </ul>
        `,level:"JUNIOR"},{id:31.4,question:"Пул коннектов это?",answer:`
          <p><strong>Пул коннектов</strong> — это механизм управления соединениями с базой данных или другим ресурсом, который позволяет многократно использовать созданные соединения. Вместо того чтобы каждый раз создавать и закрывать соединение, пул коннектов сохраняет несколько активных соединений, готовых к использованию, и предоставляет их по запросу.</p>
          <h4>Основные характеристики:</h4>
          <ul>
            <li><strong>Повторное использование:</strong> Соединения не создаются каждый раз заново, а берутся из пула.</li>
            <li><strong>Эффективность:</strong> Экономится время на создание и закрытие соединений, что улучшает производительность приложения.</li>
            <li><strong>Ограничение ресурсов:</strong> Пул управляет количеством одновременно активных соединений, чтобы не перегружать базу данных.</li>
          </ul>
          <h4>Пример:</h4>
          <p>Приложение может создать пул из 10 коннектов. Когда пользователю нужно соединение с базой данных, оно берётся из пула. После завершения работы соединение возвращается в пул для повторного использования другими пользователями.</p>
        `,level:"JUNIOR"},{id:32,question:"Что такое уровни логирования?",answer:`
          <ul>
            <li><strong>TRACE:</strong> Самый детализированный уровень.</li>
            <li><strong>DEBUG:</strong> Отладочная информация.</li>
            <li><strong>INFO:</strong> Общая информация о работе приложения.</li>
            <li><strong>WARN:</strong> Предупреждения о возможных проблемах.</li>
            <li><strong>ERROR:</strong> Ошибки, которые требуют внимания.</li>
            <li><strong>FATAL:</strong> Критические ошибки, приводящие к завершению работы приложения.</li>
          </ul>
        `,level:"JUNIOR"},{id:32.1,question:"Что такое парсинг логов?",answer:`
          Парсинг логов — это процесс автоматического анализа и обработки лог-файлов с целью извлечения полезной информации, такой как ошибки, предупреждения, статистика производительности, успешные или неуспешные операции. Лог-файлы обычно содержат информацию о работе системы, которая записывается в текстовые файлы. Парсинг помогает структурировать эти данные и использовать их для мониторинга, анализа и отладки.
      
          Основные задачи парсинга логов:
          1. **Поиск ошибок:** Автоматическое извлечение и классификация ошибок, которые произошли в системе.
          2. **Мониторинг производительности:** Сбор данных о времени отклика, загрузке системы и других метриках из логов.
          3. **Фильтрация данных:** Удаление ненужной информации и извлечение только тех данных, которые важны для анализа.
          4. **Анализ событий:** Определение последовательности событий и их влияние на производительность или стабильность системы.
        `,level:"JUNIOR"},{id:33,question:"Простые запросы с помощью SELECT",answer:`
          <ul>
            <li>Получение всех строк из таблицы:</li>
            <pre><code>SELECT * FROM employees;</code></pre>
            <li>Получение конкретных столбцов:</li>
            <pre><code>SELECT first_name, last_name FROM employees;</code></pre>
            <li>Фильтрация с использованием WHERE:</li>
            <pre><code>SELECT * FROM employees WHERE age > 30;</code></pre>
          </ul>
        `,level:"JUNIOR"},{id:34,question:"Использование функций JOIN, GROUP BY, HAVING",answer:`
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
        `,level:"JUNIOR"},{id:35,question:"Что такое агрегирование функций?",answer:`
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
      `,level:"JUNIOR"},{id:36,question:"Что такое Spring Boot?",answer:`
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
      `,level:"JUNIOR"},{id:37,question:"Что такое Apache Kafka и основные принципы?",answer:`
        <p><strong>Apache Kafka</strong> — это распределённая платформа потоковой передачи сообщений, используемая для создания высокопроизводительных систем реального времени.</p>
        <p>Основные принципы работы Apache Kafka:</p>
        <ul>
          <li><strong>Тема (Topic):</strong> Логический канал для организации сообщений в Kafka.</li>
          <li><strong>Производитель (Producer):</strong> Отправляет сообщения в тему Kafka.</li>
          <li><strong>Потребитель (Consumer):</strong> Читает сообщения из темы Kafka.</li>
          <li><strong>Разделы (Partitions):</strong> Темы разделены на несколько частей для параллельной обработки.</li>
          <li><strong>Репликация и отказоустойчивость:</strong> Kafka поддерживает репликацию данных для повышения надёжности.</li>
        </ul>
      `,level:"JUNIOR"},{id:38,question:"Что такое Kubernetes и основные элементы?",answer:`
        <p><strong>Kubernetes (K8s)</strong> — это платформа для автоматизации развертывания и управления контейнеризованными приложениями.</p>
        <p>Основные элементы Kubernetes:</p>
        <ul>
          <li><strong>Кластер (Cluster):</strong> Группа серверов (узлов), на которых развернуты приложения.</li>
          <li><strong>Под (Pod):</strong> Базовая единица развертывания в Kubernetes, которая может содержать один или несколько контейнеров.</li>
          <li><strong>Узлы (Nodes):</strong> Физические или виртуальные серверы в кластере Kubernetes.</li>
          <li><strong>Service:</strong> Обеспечивает доступ к подам через стабильный сетевой адрес.</li>
          <li><strong>ReplicaSet:</strong> Гарантирует, что заданное количество подов работает в кластере в любое время.</li>
        </ul>
      `,level:"JUNIOR"},{id:39,question:"Что такое пулы данных в нагрузочном тестировании и как их использовать?",answer:`
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
      `,level:"MIDDLE"},{id:40,question:"Скрипт для сбора логов",answer:`
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
      `,level:"MIDDLE"},{id:41,question:"Как анализировать систему по количеству потоков, пулов, коннектов, времени работы GC, heap и non-heap?",answer:`
        <p><strong>1. Количество потоков (Threads):</strong> Используйте <code>jconsole</code> или <code>jstack</code> для мониторинга потоков в JVM.</p>
        <p><strong>2. Пулы потоков (Thread Pools):</strong> Анализируйте пулы потоков, чтобы избежать перегрузки.</p>
        <p><strong>3. Пулы соединений (Connection Pools):</strong> Контролируйте количество соединений к БД (например, с HikariCP).</p>
        <p><strong>4. Время работы GC (Garbage Collection):</strong> Используйте <code>jstat</code> или <code>VisualVM</code> для мониторинга.</p>
        <p><strong>5. Heap и Non-Heap память:</strong> Анализируйте состояние heap и non-heap памяти с помощью <code>jconsole</code> или <code>VisualVM</code>.</p>
      `,level:"MIDDLE"},{id:42,question:"Как выявить долгие запросы в БД?",answer:`
        <p>Мониторинг медленных запросов можно выполнять с помощью системных таблиц или включения логов медленных запросов.</p>
        <p>Пример запроса для PostgreSQL:</p>
        <pre><code>
          SELECT pid, query, state, age(now(), query_start) AS duration
          FROM pg_stat_activity
          WHERE state = 'active'
          ORDER BY duration DESC;
        </code></pre>
      `,level:"MIDDLE"},{id:43,question:"Как снять heap dump и thread dump?",answer:`
        <p><strong>1. Heap Dump:</strong> Используйте команду <code>jmap</code> для создания heap dump:</p>
        <pre><code>jmap -dump:live,format=b,file=heapdump.hprof &lt;pid&gt;</code></pre>
        <p><strong>2. Thread Dump:</strong> Используйте команду <code>jstack</code> для получения состояния потоков:</p>
        <pre><code>jstack -l &lt;pid&gt; > threaddump.txt</code></pre>
      `,level:"MIDDLE"},{id:44,question:"INSERT и UPDATE в SQL",answer:`
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
      `,level:"MIDDLE"},{id:45,question:"Как массово обновить данные в БД?",answer:`
        <p>Массовое обновление данных в базе данных можно выполнить с помощью <code>UPDATE</code>:</p>
        <pre><code>
          UPDATE employees
          SET department = 'Sales'
          WHERE department = 'Marketing';
        </code></pre>
      `,level:"MIDDLE"},{id:46,question:"Что такое индекс и как с ним работать? Как проверять индексы в БД?",answer:`
        <p><strong>Индекс</strong> — это структура данных для ускорения поиска и сортировки данных в таблице.</p>
        <p><strong>Преимущества индексов:</strong></p>
        <ul>
          <li>Улучшают производительность запросов на выборку (SELECT).</li>
        </ul>
        <p>Пример создания индекса:</p>
        <pre><code>
          CREATE INDEX idx_employee_name ON employees (first_name, last_name);
        </code></pre>
      `,level:"MIDDLE"},{id:47,question:"Что такое системные таблицы в БД?",answer:`
        <p>Системные таблицы — это таблицы, которые хранят метаинформацию о структуре базы данных и активных сессиях.</p>
        <p>Пример для PostgreSQL:</p>
        <pre><code>
          SELECT pid, usename, state, query
          FROM pg_stat_activity;
        </code></pre>
      `,level:"MIDDLE"}],Gu={props:{question:Object},data(){return{likes:0,comments:[],newComment:""}},computed:{levelText(){return`Level: ${this.question.level}`},levelClass(){return{"level-intern":this.question.level==="INTERN","level-junior":this.question.level==="JUNIOR","level-middle":this.question.level==="MIDDLE"}}},methods:{goToDetail(){this.$router.push(`/questions/${this.question.id}`)},likeQuestion(){this.likes++},addComment(){this.newComment.trim()&&(this.comments.push(this.newComment.trim()),this.newComment="")}}},Qu={class:"question-text"};function zu(e,t,n,s,r,o){return Qe(),ht("div",{onClick:t[5]||(t[5]=(...i)=>o.goToDetail&&o.goToDetail(...i)),class:"question-card"},[se("h3",Qu,Tt(n.question.question),1),se("p",{class:On([o.levelClass,"level-text"])},Tt(o.levelText),3),se("div",{class:"like-section",onClick:t[1]||(t[1]=Er(()=>{},["stop"]))},[se("button",{onClick:t[0]||(t[0]=(...i)=>o.likeQuestion&&o.likeQuestion(...i)),class:"like-button"},"👍 "+Tt(r.likes)+" Like",1)]),se("div",{class:"comments-section",onClick:t[4]||(t[4]=Er(()=>{},["stop"]))},[t[6]||(t[6]=se("h4",null,"Комментарии:",-1)),se("ul",null,[(Qe(!0),ht(Te,null,xo(r.comments,(i,l)=>(Qe(),ht("li",{key:l,class:"comment-item"},Tt(i),1))),128))]),yo(se("textarea",{"onUpdate:modelValue":t[2]||(t[2]=i=>r.newComment=i),placeholder:"Добавьте комментарий"},null,512),[[Nc,r.newComment]]),se("button",{onClick:t[3]||(t[3]=(...i)=>o.addComment&&o.addComment(...i)),class:"add-comment-button"},"Добавить комментарий")])])}const Yu=kn(Gu,[["render",zu],["__scopeId","data-v-09545826"]]),Xu={components:{QuestionCard:Yu},data(){return{questions:fi,currentLevel:"ALL",selectedAction:"ALL",shuffledQuestions:[]}},computed:{filteredQuestions(){return this.selectedAction==="SHUFFLE"?this.shuffledQuestions:this.currentLevel==="ALL"?this.questions:this.questions.filter(e=>e.level===this.currentLevel)}},methods:{handleAction(){this.selectedAction==="SHUFFLE"?this.shuffleQuestions():this.filterLevel(this.selectedAction)},filterLevel(e){this.currentLevel=e},shuffleQuestions(){this.shuffledQuestions=[...this.questions].sort(()=>Math.random()-.5)}}},Zu={class:"filter-section"},ea={class:"question-grid"};function ta(e,t,n,s,r,o){const i=Ls("QuestionCard");return Qe(),ht("div",null,[se("div",Zu,[yo(se("select",{"onUpdate:modelValue":t[0]||(t[0]=l=>r.selectedAction=l),id:"levelFilter",onChange:t[1]||(t[1]=(...l)=>o.handleAction&&o.handleAction(...l))},t[2]||(t[2]=[Zl('<option value="ALL" data-v-168ca84e>Все уровни</option><option value="INTERN" data-v-168ca84e>Intern</option><option value="JUNIOR" data-v-168ca84e>Junior</option><option value="MIDDLE" data-v-168ca84e>Middle</option><option value="SHUFFLE" data-v-168ca84e>Перемешать вопросы</option>',5)]),544),[[Lc,r.selectedAction]])]),se("div",ea,[(Qe(!0),ht(Te,null,xo(o.filteredQuestions,l=>(Qe(),Jo(i,{key:l.id,question:l},null,8,["question"]))),128))])])}const na=kn(Xu,[["render",ta],["__scopeId","data-v-168ca84e"]]),sa={data(){return{question:null}},created(){const e=parseInt(this.$route.params.id);this.question=fi.find(t=>t.id===e)}},ra={key:0,class:"question-detail"},oa={class:"question-text"},ia={class:"answer-box"},la=["innerHTML"];function ca(e,t,n,s,r,o){const i=Ls("router-link");return r.question?(Qe(),ht("div",ra,[se("h2",oa,Tt(r.question.question),1),se("div",ia,[se("div",{innerHTML:r.question.answer,class:"answer-text"},null,8,la)]),ae(i,{to:"/",class:"back-button"},{default:vo(()=>t[0]||(t[0]=[Wo("← Back to Questions")])),_:1})])):ec("",!0)}const ua=kn(sa,[["render",ca],["__scopeId","data-v-aad3acc8"]]),aa=[{path:"/",component:na},{path:"/questions/:id",component:ua}],fa=Ku({history:Su(),routes:aa});qc(Bc).use(fa).mount("#app");
