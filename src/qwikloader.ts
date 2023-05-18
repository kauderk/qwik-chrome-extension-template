// https://github.com/BuilderIO/qwik/discussions/787#:~:text=io/qwik%22%3B-,eval(QWIK_LOADER),-export%20const%20decorators
// hard	coded qwik loader because chrome extension doesn't allow the eval() function
// @ts-nocheck
// prettier-ignore
((e,t)=>{const n="__q_context__",o=window,i=new Set,s=t=>e.querySelectorAll(t),a=(e,t,n=t.type)=>{s("[on"+e+"\\:"+n+"]").forEach((o=>f(o,e,t,n)))},r=(e,t)=>e.getAttribute(t),l=t=>{if(void 0===t._qwikjson_){let n=(t===e.documentElement?e.body:t).lastElementChild;for(;n;){if("SCRIPT"===n.tagName&&"qwik/json"===r(n,"type")){t._qwikjson_=JSON.parse(n.textContent.replace(/\\x3C(\/?script)/g,"<$1"));break}n=n.previousElementSibling}}},c=(e,t)=>new CustomEvent(e,{detail:t}),f=async(t,o,i,s=i.type)=>{const a="on"+o+":"+s;t.hasAttribute("preventdefault:"+s)&&i.preventDefault();const c=t._qc_,f=null==c?void 0:c.li.filter((e=>e[0]===a));if(f&&f.length>0){for(const e of f)await e[1].getFn([t,i],(()=>t.isConnected))(i,t);return}const b=r(t,a);if(b){const o=t.closest("[q\\:container]"),s=new URL(r(o,"q:base"),e.baseURI);for(const a of b.split("\n")){const r=new URL(a,s),c=r.hash.replace(/^#?([^?[|]*).*$/,"$1")||"default",f=performance.now(),b=import(r.href.split("#")[0]);l(o);const u=(await b)[c],p=e[n];if(t.isConnected)try{e[n]=[t,i,r],d("qsymbol",{symbol:c,element:t,reqTime:f}),await u(i,t)}finally{e[n]=p}}}},d=(t,n)=>{e.dispatchEvent(c(t,n))},b=e=>e.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())),u=async e=>{let t=b(e.type),n=e.target;for(a("-document",e,t);n&&n.getAttribute;)await f(n,"",e,t),n=e.bubbles&&!0!==e.cancelBubble?n.parentElement:null},p=e=>{a("-window",e,b(e.type))},w=()=>{var n;const a=e.readyState;if(!t&&("interactive"==a||"complete"==a)&&(t=1,d("qinit"),(null!=(n=o.requestIdleCallback)?n:o.setTimeout).bind(o)((()=>d("qidle"))),i.has("qvisible"))){const e=s("[on\\:qvisible]"),t=new IntersectionObserver((e=>{for(const n of e)n.isIntersecting&&(t.unobserve(n.target),f(n.target,"",c("qvisible",n)))}));e.forEach((e=>t.observe(e)))}},q=(e,t,n,o=!1)=>e.addEventListener(t,n,{capture:o}),v=t=>{for(const n of t)i.has(n)||(q(e,n,u,!0),q(o,n,p),i.add(n))};if(!e.qR){const t=o.qwikevents;Array.isArray(t)&&v(t),o.qwikevents={push:(...e)=>v(e)},q(e,"readystatechange",w),w()}})(document);
export {}