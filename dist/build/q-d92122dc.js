import{y as O,N as P,R as U,_ as $}from"./q-22f3d34b.js";O(document.body,P(U,null,3,"ec_0"));((o,m)=>{const c="__q_context__",r=window,f=new Set,q=e=>o.querySelectorAll(e),y=(e,t,n=t.type)=>{q("[on"+e+"\\:"+n+"]").forEach(a=>d(a,e,t,n))},u=(e,t)=>e.getAttribute(t),R=e=>{if(e._qwikjson_===void 0){let t=(e===o.documentElement?o.body:e).lastElementChild;for(;t;){if(t.tagName==="SCRIPT"&&u(t,"type")==="qwik/json"){e._qwikjson_=JSON.parse(t.textContent.replace(/\\x3C(\/?script)/g,"<$1"));break}t=t.previousElementSibling}}},_=(e,t)=>new CustomEvent(e,{detail:t}),d=async(e,t,n,a=n.type)=>{const i="on"+t+":"+a;e.hasAttribute("preventdefault:"+a)&&n.preventDefault();const s=e._qc_,v=s==null?void 0:s.li.filter(l=>l[0]===i);if(v&&v.length>0){for(const l of v)await l[1].getFn([e,n],()=>e.isConnected)(n,e);return}const C=u(e,i);if(C){const l=e.closest("[q\\:container]"),S=new URL(u(l,"q:base"),o.baseURI);for(const L of C.split(`
`)){const w=new URL(L,S),A=w.hash.replace(/^#?([^?[|]*).*$/,"$1")||"default",N=performance.now(),T=$(()=>import(w.href.split("#")[0]),[]);R(l);const j=(await T)[A],x=o[c];if(e.isConnected)try{o[c]=[e,n,w],b("qsymbol",{symbol:A,element:e,reqTime:N}),await j(n,e)}finally{o[c]=x}}}},b=(e,t)=>{o.dispatchEvent(_(e,t))},g=e=>e.replace(/([A-Z])/g,t=>"-"+t.toLowerCase()),k=async e=>{let t=g(e.type),n=e.target;for(y("-document",e,t);n&&n.getAttribute;)await d(n,"",e,t),n=e.bubbles&&e.cancelBubble!==!0?n.parentElement:null},I=e=>{y("-window",e,g(e.type))},h=()=>{var e;const t=o.readyState;if(!m&&(t=="interactive"||t=="complete")&&(m=1,b("qinit"),((e=r.requestIdleCallback)!=null?e:r.setTimeout).bind(r)(()=>b("qidle")),f.has("qvisible"))){const n=q("[on\\:qvisible]"),a=new IntersectionObserver(i=>{for(const s of i)s.isIntersecting&&(a.unobserve(s.target),d(s.target,"",_("qvisible",s)))});n.forEach(i=>a.observe(i))}},p=(e,t,n,a=!1)=>e.addEventListener(t,n,{capture:a}),E=e=>{for(const t of e)f.has(t)||(p(o,t,k,!0),p(r,t,I),f.add(t))};if(!o.qR){const e=r.qwikevents;Array.isArray(e)&&E(e),r.qwikevents={push:(...t)=>E(t)},p(o,"readystatechange",h),h()}})(document);