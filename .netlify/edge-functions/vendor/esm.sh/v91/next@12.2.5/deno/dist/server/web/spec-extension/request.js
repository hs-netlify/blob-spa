/* esm.sh - esbuild bundle(next@12.2.5/dist/server/web/spec-extension/request) deno production */
import * as __0$ from "/v91/next@12.2.5/deno/dist/compiled/cookie.js";
var require=n=>{const e=m=>typeof m.default<"u"?m.default:m,c=m=>Object.assign({},m);switch(n){case"next/dist/compiled/cookie":return e(__0$);default:throw new Error("module \""+n+"\" not found");}};
var xe=Object.create;var w=Object.defineProperty;var _e=Object.getOwnPropertyDescriptor;var be=Object.getOwnPropertyNames;var ye=Object.getPrototypeOf,Le=Object.prototype.hasOwnProperty;var we=(t=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(t,{get:(e,r)=>(typeof require<"u"?require:e)[r]}):t)(function(t){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+t+'" is not supported')});var l=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports),je=(t,e)=>{for(var r in e)w(t,r,{get:e[r],enumerable:!0})},L=(t,e,r,s)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of be(e))!Le.call(t,i)&&i!==r&&w(t,i,{get:()=>e[i],enumerable:!(s=_e(e,i))||s.enumerable});return t},c=(t,e,r)=>(L(t,e,"default"),r&&L(r,e,"default")),G=(t,e,r)=>(r=t!=null?xe(ye(t)):{},L(e||!t||!t.__esModule?w(r,"default",{value:t,enumerable:!0}):r,t));var Q=l(j=>{"use strict";Object.defineProperty(j,"__esModule",{value:!0});j.detectDomainLocale=qe;function qe(t,e,r){let s;if(t){r&&(r=r.toLowerCase());for(let o of t){var i,n;let u=(i=o.domain)==null?void 0:i.split(":")[0].toLowerCase();if(e===u||r===o.defaultLocale.toLowerCase()||(n=o.locales)!=null&&n.some(h=>h.toLowerCase()===r)){s=o;break}}}return s}});var V=l(q=>{"use strict";Object.defineProperty(q,"__esModule",{value:!0});q.removeTrailingSlash=Ce;function Ce(t){return t.replace(/\/$/,"")||"/"}});var v=l(C=>{"use strict";Object.defineProperty(C,"__esModule",{value:!0});C.parsePath=Ie;function Ie(t){let e=t.indexOf("#"),r=t.indexOf("?"),s=r>-1&&(e<0||r<e);return s||e>-1?{pathname:t.substring(0,s?r:e),query:s?t.substring(r,e>-1?e:void 0):"",hash:e>-1?t.slice(e):""}:{pathname:t,query:"",hash:""}}});var S=l(I=>{"use strict";Object.defineProperty(I,"__esModule",{value:!0});I.addPathPrefix=Ne;var Se=v();function Ne(t,e){if(!t.startsWith("/")||!e)return t;let{pathname:r,query:s,hash:i}=Se.parsePath(t);return`${e}${r}${s}${i}`}});var X=l(N=>{"use strict";Object.defineProperty(N,"__esModule",{value:!0});N.addPathSuffix=$e;var Re=v();function $e(t,e){if(!t.startsWith("/")||!e)return t;let{pathname:r,query:s,hash:i}=Re.parsePath(t);return`${r}${e}${s}${i}`}});var x=l(R=>{"use strict";Object.defineProperty(R,"__esModule",{value:!0});R.pathHasPrefix=ke;var Oe=v();function ke(t,e){if(typeof t!="string")return!1;let{pathname:r}=Oe.parsePath(t);return r===e||r.startsWith(e+"/")}});var K=l($=>{"use strict";Object.defineProperty($,"__esModule",{value:!0});$.addLocale=He;var Ae=S(),B=x();function He(t,e,r,s){return e&&e!==r&&(s||!B.pathHasPrefix(t.toLowerCase(),`/${e.toLowerCase()}`)&&!B.pathHasPrefix(t.toLowerCase(),"/api"))?Ae.addPathPrefix(t,`/${e}`):t}});var ee=l(O=>{"use strict";Object.defineProperty(O,"__esModule",{value:!0});O.formatNextPathnameInfo=Ee;var Ue=V(),Y=S(),Z=X(),Me=K();function Ee(t){let e=Me.addLocale(t.pathname,t.locale,t.buildId?void 0:t.defaultLocale,t.ignorePrefix);return t.buildId&&(e=Z.addPathSuffix(Y.addPathPrefix(e,`/_next/data/${t.buildId}`),t.pathname==="/"?"index.json":".json")),e=Y.addPathPrefix(e,t.basePath),t.trailingSlash?!t.buildId&&!e.endsWith("/")?Z.addPathSuffix(e,"/"):e:Ue.removeTrailingSlash(e)}});var te=l(k=>{"use strict";Object.defineProperty(k,"__esModule",{value:!0});k.getHostname=Te;function Te(t,e){var r;return(r=!Array.isArray(e?.host)&&e?.host||t.hostname)==null?void 0:r.split(":")[0].toLowerCase()}});var re=l(A=>{"use strict";Object.defineProperty(A,"__esModule",{value:!0});A.normalizeLocalePath=ze;function ze(t,e){let r,s=t.split("/");return(e||[]).some(i=>s[1]&&s[1].toLowerCase()===i.toLowerCase()?(r=i,s.splice(1,1),t=s.join("/")||"/",!0):!1),{pathname:t,detectedLocale:r}}});var se=l(H=>{"use strict";Object.defineProperty(H,"__esModule",{value:!0});H.removePathPrefix=De;var We=x();function De(t,e){if(We.pathHasPrefix(t,e)){let r=t.slice(e.length);return r.startsWith("/")?r:`/${r}`}return t}});var ae=l(U=>{"use strict";Object.defineProperty(U,"__esModule",{value:!0});U.getNextPathnameInfo=Qe;var Je=re(),Fe=se(),Ge=x();function Qe(t,e){var r;let{basePath:s,i18n:i,trailingSlash:n}=(r=e.nextConfig)!=null?r:{},o={pathname:t,trailingSlash:t!=="/"?t.endsWith("/"):n};if(s&&Ge.pathHasPrefix(o.pathname,s)&&(o.pathname=Fe.removePathPrefix(o.pathname,s),o.basePath=s),e.parseData===!0&&o.pathname.startsWith("/_next/data/")&&o.pathname.endsWith(".json")){let u=o.pathname.replace(/^\/_next\/data\//,"").replace(/\.json$/,"").split("/"),h=u[0];o.pathname=u[1]!=="index"?`/${u.slice(1).join("/")}`:"/",o.buildId=h}if(i){let u=Je.normalizeLocalePath(o.pathname,i.locales);o.locale=u?.detectedLocale,o.pathname=u?.pathname||o.pathname}return o}});var ne=l(E=>{"use strict";Object.defineProperty(E,"__esModule",{value:!0});var Ve=Q(),Xe=ee(),Be=te(),Ke=ae(),a=Symbol("NextURLInternal"),M=class t{constructor(e,r,s){let i,n;typeof r=="object"&&"pathname"in r||typeof r=="string"?(i=r,n=s||{}):n=s||r||{},this[a]={url:oe(e,i??n.base),options:n,basePath:""},this.analyzeUrl()}analyzeUrl(){var e,r,s,i,n;let o=Ke.getNextPathnameInfo(this[a].url.pathname,{nextConfig:this[a].options.nextConfig,parseData:!0});this[a].domainLocale=Ve.detectDomainLocale((e=this[a].options.nextConfig)==null||(r=e.i18n)==null?void 0:r.domains,Be.getHostname(this[a].url,this[a].options.headers));let u=((s=this[a].domainLocale)==null?void 0:s.defaultLocale)||((i=this[a].options.nextConfig)==null||(n=i.i18n)==null?void 0:n.defaultLocale);this[a].url.pathname=o.pathname,this[a].defaultLocale=u;var h;this[a].basePath=(h=o.basePath)!=null?h:"",this[a].buildId=o.buildId;var P;this[a].locale=(P=o.locale)!=null?P:u,this[a].trailingSlash=o.trailingSlash}formatPathname(){return Xe.formatNextPathnameInfo({basePath:this[a].basePath,buildId:this[a].buildId,defaultLocale:this[a].options.forceLocale?void 0:this[a].defaultLocale,locale:this[a].locale,pathname:this[a].url.pathname,trailingSlash:this[a].trailingSlash})}get buildId(){return this[a].buildId}set buildId(e){this[a].buildId=e}get locale(){var e;return(e=this[a].locale)!=null?e:""}set locale(e){var r,s;if(!this[a].locale||!(!((r=this[a].options.nextConfig)==null||(s=r.i18n)==null)&&s.locales.includes(e)))throw new TypeError(`The NextURL configuration includes no locale "${e}"`);this[a].locale=e}get defaultLocale(){return this[a].defaultLocale}get domainLocale(){return this[a].domainLocale}get searchParams(){return this[a].url.searchParams}get host(){return this[a].url.host}set host(e){this[a].url.host=e}get hostname(){return this[a].url.hostname}set hostname(e){this[a].url.hostname=e}get port(){return this[a].url.port}set port(e){this[a].url.port=e}get protocol(){return this[a].url.protocol}set protocol(e){this[a].url.protocol=e}get href(){let e=this.formatPathname();return`${this.protocol}//${this.host}${e}${this[a].url.search}`}set href(e){this[a].url=oe(e),this.analyzeUrl()}get origin(){return this[a].url.origin}get pathname(){return this[a].url.pathname}set pathname(e){this[a].url.pathname=e}get hash(){return this[a].url.hash}set hash(e){this[a].url.hash=e}get search(){return this[a].url.search}set search(e){this[a].url.search=e}get password(){return this[a].url.password}set password(e){this[a].url.password=e}get username(){return this[a].url.username}set username(e){this[a].url.username=e}get basePath(){return this[a].basePath}set basePath(e){this[a].basePath=e.startsWith("/")?e:`/${e}`}toString(){return this.href}toJSON(){return this.href}[Symbol.for("edge-runtime.inspect.custom")](){return{href:this.href,origin:this.origin,protocol:this.protocol,username:this.username,password:this.password,host:this.host,hostname:this.hostname,port:this.port,pathname:this.pathname,search:this.search,searchParams:this.searchParams,hash:this.hash}}clone(){return new t(String(this),this[a].options)}};E.NextURL=M;var ie=/(?!^https?:\/\/)(127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}|::1|localhost)/;function oe(t,e){return new URL(String(t).replace(ie,"localhost"),e&&String(e).replace(ie,"localhost"))}});var le=l(p=>{"use strict";Object.defineProperty(p,"__esModule",{value:!0});p.fromNodeHeaders=Ye;p.toNodeHeaders=Ze;p.splitCookiesString=ue;p.validateURL=et;function Ye(t){let e=new Headers;for(let[r,s]of Object.entries(t)){let i=Array.isArray(s)?s:[s];for(let n of i)n!==void 0&&e.append(r,n)}return e}function Ze(t){let e={};if(t)for(let[r,s]of t.entries())e[r]=s,r.toLowerCase()==="set-cookie"&&(e[r]=ue(s));return e}function ue(t){var e=[],r=0,s,i,n,o,u;function h(){for(;r<t.length&&/\s/.test(t.charAt(r));)r+=1;return r<t.length}function P(){return i=t.charAt(r),i!=="="&&i!==";"&&i!==","}for(;r<t.length;){for(s=r,u=!1;h();)if(i=t.charAt(r),i===","){for(n=r,r+=1,h(),o=r;r<t.length&&P();)r+=1;r<t.length&&t.charAt(r)==="="?(u=!0,r=o,e.push(t.substring(s,n)),s=r):r=n+1}else r+=1;(!u||r>=t.length)&&e.push(t.substring(s,t.length))}return e}function et(t){try{return String(new URL(String(t)))}catch(e){throw new Error("URLs is malformed. Please use only absolute URLs - https://nextjs.org/docs/messages/middleware-relative-urls",{cause:e})}}});var he=l(m=>{"use strict";Object.defineProperty(m,"__esModule",{value:!0});var T=class extends Error{constructor({page:e}){super(`The middleware "${e}" accepts an async API directly with the form:
  
  export function middleware(request, event) {
    return NextResponse.redirect('/new-location')
  }
  
  Read more: https://nextjs.org/docs/messages/middleware-new-signature
  `)}};m.PageSignatureError=T;var z=class extends Error{constructor(){super("The request.page has been deprecated in favour of `URLPattern`.\n  Read more: https://nextjs.org/docs/messages/middleware-request-page\n  ")}};m.RemovedPageError=z;var W=class extends Error{constructor(){super("The request.ua has been removed in favour of `userAgent` function.\n  Read more: https://nextjs.org/docs/messages/middleware-parse-user-agent\n  ")}};m.RemovedUAError=W});var pe=l(y=>{"use strict";Object.defineProperty(y,"__esModule",{value:!0});var _=tt(we("next/dist/compiled/cookie"));function tt(t){return t&&t.__esModule?t:{default:t}}var rt=t=>(t=Object.assign({},t),t.maxAge&&(t.expires=new Date(Date.now()+t.maxAge*1e3)),t.path==null&&(t.path="/"),t),st=t=>typeof t=="object"?`j:${JSON.stringify(t)}`:String(t),de=(t,e={})=>_.default.serialize(t,"",{expires:new Date(0),path:"/",...e}),ce=t=>{let e=t.headers.get("set-cookie");return e!=null?e.split(", "):[]},fe=t=>t.join(", "),b=class extends Map{constructor(e){let r=typeof e=="string"?_.default.parse(e):{};super(Object.entries(r))}set(e,r,s={}){return super.set(e,_.default.serialize(e,st(r),rt(s)))}[Symbol.for("edge-runtime.inspect.custom")](){return Object.fromEntries(this.entries())}};y.Cookies=b;var D=class extends b{constructor(e){super(e.headers.get("cookie")),this.response=e}get=(...e)=>this.getWithOptions(...e).value;getWithOptions=(...e)=>{let r=super.get(...e);if(typeof r!="string")return{value:r,options:{}};let{[e[0]]:s,...i}=_.default.parse(r);return{value:s,options:i}};set=(...e)=>{let r=super.has(e[0]);super.set(...e);let s=super.get(e[0]);if(typeof s!="string")throw new Error(`Invariant: failed to generate cookie for ${JSON.stringify(e)}`);if(r){let i=fe(ce(this.response).filter(n=>!n.startsWith(`${e[0]}=`)));i?this.response.headers.set("set-cookie",[s,i].join(", ")):this.response.headers.set("set-cookie",s)}else this.response.headers.append("set-cookie",s);return this};delete=(e,r={})=>{let s=super.delete(e);if(s){let i=fe(ce(this.response).filter(o=>!o.startsWith(`${e}=`))),n=de(e,r);this.response.headers.set("set-cookie",[n,i].join(", "))}return s};clear=(e={})=>{let r=Array.from(super.keys()).map(s=>de(s,e)).join(", ");return r&&this.response.headers.set("set-cookie",r),super.clear()}};y.NextCookies=D});var F=l(g=>{"use strict";Object.defineProperty(g,"__esModule",{value:!0});g.INTERNALS=void 0;var at=ne(),me=le(),ge=he(),it=pe(),f=Symbol("internal request");g.INTERNALS=f;var J=class extends Request{constructor(e,r={}){let s=typeof e!="string"&&"url"in e?e.url:String(e);me.validateURL(s),super(s,r),this[f]={cookies:new it.NextCookies(this),geo:r.geo||{},ip:r.ip,url:new at.NextURL(s,{headers:me.toNodeHeaders(this.headers),nextConfig:r.nextConfig})}}[Symbol.for("edge-runtime.inspect.custom")](){return{cookies:this.cookies,geo:this.geo,ip:this.ip,nextUrl:this.nextUrl,url:this.url,bodyUsed:this.bodyUsed,cache:this.cache,credentials:this.credentials,destination:this.destination,headers:Object.fromEntries(this.headers),integrity:this.integrity,keepalive:this.keepalive,method:this.method,mode:this.mode,redirect:this.redirect,referrer:this.referrer,referrerPolicy:this.referrerPolicy,signal:this.signal}}get cookies(){return this[f].cookies}get geo(){return this[f].geo}get ip(){return this[f].ip}get nextUrl(){return this[f].url}get page(){throw new ge.RemovedPageError}get ua(){throw new ge.RemovedUAError}get url(){return this[f].url.toString()}};g.NextRequest=J});var d={};je(d,{INTERNALS:()=>nt,NextRequest:()=>ut,__esModule:()=>ot,default:()=>ht});var ve=G(F());c(d,G(F()));var{__esModule:ot,INTERNALS:nt,NextRequest:ut}=ve,{default:Pe,...lt}=ve,ht=Pe!==void 0?Pe:lt;export{nt as INTERNALS,ut as NextRequest,ot as __esModule,ht as default};
//# sourceMappingURL=request.js.map