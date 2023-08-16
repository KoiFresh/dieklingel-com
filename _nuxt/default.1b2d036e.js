import{R as I,H as C,I as S,V as L,Z as k,$ as j,a0 as O,j as R,D as N,x as p,k as H,z as A,u as T,S as F,q as U,_ as b,o as $,c as z,b as m,a as y,w as x,d as v,p as M,e as E,L as V,Y as D}from"./entry.798ec375.js";import{_ as G}from"./nuxt-link.94d39784.js";async function J(e,t){return await K(t).catch(i=>(console.error("Failed to get image meta for "+t,i+""),{width:0,height:0,ratio:0}))}async function K(e){if(typeof Image>"u")throw new TypeError("Image not supported");return new Promise((t,o)=>{const i=new Image;i.onload=()=>{const n={width:i.width,height:i.height,ratio:i.width/i.height};t(n)},i.onerror=n=>o(n),i.src=e})}function P(e){return t=>t?e[t]||t:e.missingValue}function Q({formatter:e,keyMap:t,joinWith:o="/",valueMap:i}={}){e||(e=(s,a)=>`${s}=${a}`),t&&typeof t!="function"&&(t=P(t));const n=i||{};return Object.keys(n).forEach(s=>{typeof n[s]!="function"&&(n[s]=P(n[s]))}),(s={})=>Object.entries(s).filter(([d,l])=>typeof l<"u").map(([d,l])=>{const g=n[d];return typeof g=="function"&&(l=g(s[d])),d=typeof t=="function"?t(d):d,e(d,l)}).join(o)}function h(e=""){if(typeof e=="number")return e;if(typeof e=="string"&&e.replace("px","").match(/^\d+$/g))return parseInt(e,10)}function Y(e){const t={options:e},o=(n,s={})=>W(t,n,s),i=(n,s={},a={})=>o(n,{...a,modifiers:k(s,a.modifiers||{})}).url;for(const n in e.presets)i[n]=(s,a,d)=>i(s,a,{...e.presets[n],...d});return i.options=e,i.getImage=o,i.getMeta=(n,s)=>Z(t,n,s),i.getSizes=(n,s)=>te(t,n,s),t.$img=i,i}async function Z(e,t,o){const i=W(e,t,{...o});return typeof i.getMeta=="function"?await i.getMeta():await J(e,i.url)}function W(e,t,o){var g,f;if(typeof t!="string"||t==="")throw new TypeError(`input must be a string (received ${typeof t}: ${JSON.stringify(t)})`);if(t.startsWith("data:"))return{url:t};const{provider:i,defaults:n}=X(e,o.provider||e.options.provider),s=ee(e,o.preset);if(t=I(t)?t:C(t),!i.supportsAlias)for(const c in e.options.alias)t.startsWith(c)&&(t=S(e.options.alias[c],t.substr(c.length)));if(i.validateDomains&&I(t)){const c=L(t).host;if(!e.options.domains.find(u=>u===c))return{url:t}}const a=k(o,s,n);a.modifiers={...a.modifiers};const d=a.modifiers.format;(g=a.modifiers)!=null&&g.width&&(a.modifiers.width=h(a.modifiers.width)),(f=a.modifiers)!=null&&f.height&&(a.modifiers.height=h(a.modifiers.height));const l=i.getImage(t,a,e);return l.format=l.format||d||"",l}function X(e,t){const o=e.options.providers[t];if(!o)throw new Error("Unknown provider: "+t);return o}function ee(e,t){if(!t)return{};if(!e.options.presets[t])throw new Error("Unknown preset: "+t);return e.options.presets[t]}function te(e,t,o){var g,f;const i=h((g=o.modifiers)==null?void 0:g.width),n=h((f=o.modifiers)==null?void 0:f.height),s=i&&n?n/i:0,a=[],d={};if(typeof o.sizes=="string")for(const c of o.sizes.split(/[\s,]+/).filter(u=>u)){const u=c.split(":");u.length===2&&(d[u[0].trim()]=u[1].trim())}else Object.assign(d,o.sizes);for(const c in d){const u=e.options.screens&&e.options.screens[c]||parseInt(c);let r=String(d[c]);const _=r.endsWith("vw");if(!_&&/^\d+$/.test(r)&&(r=r+"px"),!_&&!r.endsWith("px"))continue;let w=parseInt(r);if(!u||!w)continue;_&&(w=Math.round(w/100*u));const B=s?Math.round(w*s):n;a.push({width:w,size:r,screenMaxWidth:u,media:`(max-width: ${u}px)`,src:e.$img(t,{...o.modifiers,width:w,height:B},o)})}a.sort((c,u)=>c.screenMaxWidth-u.screenMaxWidth);const l=a[a.length-1];return l&&(l.media=""),{sizes:a.map(c=>`${c.media?c.media+" ":""}${c.size}`).join(", "),srcset:a.map(c=>`${c.src} ${c.width}w`).join(", "),src:l==null?void 0:l.src}}const ie=Q({keyMap:{format:"f",fit:"fit",width:"w",height:"h",resize:"s",quality:"q",background:"b"},joinWith:"&",formatter:(e,t)=>j(e)+"_"+j(t)}),oe=(e,{modifiers:t={},baseURL:o}={},i)=>{t.width&&t.height&&(t.resize=`${t.width}x${t.height}`,delete t.width,delete t.height);const n=ie(t)||"_";return o||(o=S(i.options.nuxt.baseURL,"/_ipx")),{url:S(o,n,O(e))}},ne=!0,se=!0,re=Object.freeze(Object.defineProperty({__proto__:null,getImage:oe,supportsAlias:se,validateDomains:ne},Symbol.toStringTag,{value:"Module"})),q={screens:{xs:320,sm:640,md:768,lg:1024,xl:1280,xxl:1536,"2xl":1536},presets:{},provider:"ipx",domains:[],alias:{}};q.providers={ipx:{provider:re,defaults:void 0}};const ae=()=>{const e=R(),t=N();return t.$img||t._img||(t._img=Y({...q,nuxt:{baseURL:e.app.baseURL}}))},ce={src:{type:String,required:!0},format:{type:String,default:void 0},quality:{type:[Number,String],default:void 0},background:{type:String,default:void 0},fit:{type:String,default:void 0},modifiers:{type:Object,default:void 0},preset:{type:String,default:void 0},provider:{type:String,default:void 0},sizes:{type:[Object,String],default:void 0},preload:{type:Boolean,default:void 0},width:{type:[String,Number],default:void 0},height:{type:[String,Number],default:void 0},alt:{type:String,default:void 0},referrerpolicy:{type:String,default:void 0},usemap:{type:String,default:void 0},longdesc:{type:String,default:void 0},ismap:{type:Boolean,default:void 0},loading:{type:String,default:void 0},crossorigin:{type:[Boolean,String],default:void 0,validator:e=>["anonymous","use-credentials","",!0,!1].includes(e)},decoding:{type:String,default:void 0,validator:e=>["async","auto","sync"].includes(e)}},de=e=>{const t=p(()=>({provider:e.provider,preset:e.preset})),o=p(()=>({width:h(e.width),height:h(e.height),alt:e.alt,referrerpolicy:e.referrerpolicy,usemap:e.usemap,longdesc:e.longdesc,ismap:e.ismap,crossorigin:e.crossorigin===!0?"anonymous":e.crossorigin||void 0,loading:e.loading,decoding:e.decoding})),i=p(()=>({...e.modifiers,width:h(e.width),height:h(e.height),format:e.format,quality:e.quality,background:e.background,fit:e.fit}));return{options:t,attrs:o,modifiers:i}},le={...ce,placeholder:{type:[Boolean,String,Number,Array],default:void 0}},ue=H({name:"NuxtImg",props:le,emits:["load","error"],setup:(e,t)=>{const o=ae(),i=de(e),n=A(!1),s=p(()=>o.getSizes(e.src,{...i.options.value,sizes:e.sizes,modifiers:{...i.modifiers.value,width:h(e.width),height:h(e.height)}})),a=p(()=>{const r={...i.attrs.value,"data-nuxt-img":""};return e.sizes&&(r.sizes=s.value.sizes,r.srcset=s.value.srcset),r}),d=p(()=>{let r=e.placeholder;if(r===""&&(r=!0),!r||n.value)return!1;if(typeof r=="string")return r;const _=Array.isArray(r)?r:typeof r=="number"?[r,r]:[10,10];return o(e.src,{...i.modifiers.value,width:_[0],height:_[1],quality:_[2]||50},i.options.value)}),l=p(()=>e.sizes?s.value.src:o(e.src,i.modifiers.value,i.options.value)),g=p(()=>d.value?d.value:l.value);if(e.preload){const r=Object.values(s.value).every(_=>_);T({link:[{rel:"preload",as:"image",...r?{href:s.value.src,imagesizes:s.value.sizes,imagesrcset:s.value.srcset}:{href:g.value}}]})}const f=A(),u=N().isHydrating;return F(()=>{if(d.value){const r=new Image;r.src=l.value,r.onload=_=>{f.value&&(f.value.src=l.value),n.value=!0,t.emit("load",_)};return}f.value&&(f.value.complete&&u&&(f.value.getAttribute("data-error")?t.emit("error",new Event("error")):t.emit("load",new Event("load"))),f.value.onload=r=>{t.emit("load",r)},f.value.onerror=r=>{t.emit("error",r)})}),()=>U("img",{ref:f,key:g.value,src:g.value,...a.value,...t.attrs})}});const fe={},ge=e=>(M("data-v-228dae9d"),e=e(),E(),e),_e={class:"header"},me={class:"navbar"},he=ge(()=>y("i",{class:"icon-logo-inverted"},null,-1));function ve(e,t){const o=ue,i=G;return $(),z("div",_e,[m(o,{format:"webp",src:"/logo_2500x500_free.png",sizes:"sm:100vw md:50vw lg:600px",alt:"dieKlingel Logo und Text"}),y("div",me,[m(i,{to:"/",exactActiveClass:"nuxt-link-exact-active"},{default:x(()=>[v(" die"),he,v("Klingel ")]),_:1}),m(i,{to:"/software",exactActiveClass:"nuxt-link-exact-active"},{default:x(()=>[v(" software ")]),_:1}),m(i,{to:"/contact",exactActiveClass:"nuxt-link-exact-active"},{default:x(()=>[v(" contact ")]),_:1}),m(i,{to:"/blog",exactActiveClass:"nuxt-link-exact-active"},{default:x(()=>[v(" blog ")]),_:1})])])}const pe=b(fe,[["render",ve],["__scopeId","data-v-228dae9d"]]);const ye={},we=e=>(M("data-v-07f13507"),e=e(),E(),e),xe={class:"footer"},Se=we(()=>y("div",null,[y("span",null,[v(" directed by "),y("a",{href:"#",class:"link"},"Kai Mayer"),v(" and "),y("a",{href:"#",class:"link"},"Sven Schoch")])],-1)),be={class:"navbar"};function $e(e,t){const o=V("router-link");return $(),z("div",xe,[Se,y("div",be,[m(o,{to:"/credit-notes",class:"link"},{default:x(()=>[v("credit notes")]),_:1}),m(o,{to:"/privacy-policy",class:"link"},{default:x(()=>[v(" privacy policy ")]),_:1})])])}const ze=b(ye,[["render",$e],["__scopeId","data-v-07f13507"]]);const Ie={},je={class:"app"},Ae={class:"body"};function Pe(e,t){const o=pe,i=D,n=ze;return $(),z("div",je,[m(o),y("div",Ae,[m(i)]),m(n)])}const Me=b(Ie,[["render",Pe],["__scopeId","data-v-eb15d800"]]);export{Me as default};
