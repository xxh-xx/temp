System.register(["./index-legacy.c47048fb.js","./el-col-legacy.d9b1b0c0.js","./el-divider-legacy.c448a580.js","./el-checkbox-legacy.2ede499c.js","./ProductList-legacy.69cb0c7e.js","./forEach-legacy.021581ba.js","./_arrayEach-legacy.c1978a34.js"],(function(e,l){"use strict";var a,t,n,d,c,o,u,i,s,r,v,h,p,y,f,g,m,b,k,j,_,w,M,x,V,C,z=document.createElement("style");return z.innerHTML=".collectionMain[data-v-a061590d]{margin:2.5em 4vw}.collectionMain .header[data-v-a061590d]{display:flex;justify-content:space-between;align-items:center}.collectionMain .header .icon[data-v-a061590d]{font-size:1.8em}.collectionMain .productMain .left[data-v-a061590d]{padding-right:10px}@media screen and (max-width: 768px){.header h2[data-v-a061590d]{font-size:1.3em}}\n",document.head.appendChild(z),{setters:[e=>{a=e.d,t=e.A,n=e.G,d=e.be,c=e.c,o=e.a,u=e.k,i=e.b,s=e.w,r=e.p,v=e.e,h=e.o,p=e.F,y=e.M,f=e.Q,g=e.j,m=e._},e=>{b=e.e,k=e.f},e=>{j=e.E},e=>{_=e.E,w=e.a,M=e.g,x=e.f},e=>{V=e.P},e=>{C=e.f},()=>{}],execute:function(){const l=e=>(r("data-v-a061590d"),e=e(),v(),e),z={class:"collectionMain"},E={class:"header"},P=l((()=>o("h2",null,"Collections",-1))),I=[l((()=>o("use",{"xlink:href":"#icon-filter"},null,-1)))];e("default",m(a({__name:"CollectionMain",props:{id:null},setup(e){const l=e,a=t([]),r=n({}),v=t(!1),m=t(!1),O=t([]),U=t([]),G=e=>{O.value=e;const l=[];C(O.value,(e=>{l.push(...e.options)}));const a=M(l,"title");C(a,(e=>{const{title:l}=e[0],a=[];C(e,(({values:e})=>{a.push(...e)})),r[l]=Object.keys(M(a,"value"))}))};window.innerWidth<=768&&(v.value=!0);const L=()=>{m.value=!m.value},A=(e,l)=>x(e,(e=>0!==x(e.options,(e=>0!==x(e.values,(e=>l===e.value)).length)).length)),F=e=>{let l=[];for(let a=0;a<e.length;a+=1)l=A(0===a?O.value:l,e[a]);U.value=[],C(l,(e=>{U.value.push(e)}))};return(e,t)=>{const n=_,M=w,x=d,C=j,A=b,H=k;return h(),c("div",z,[o("div",E,[P,v.value?(h(),c("svg",{key:0,class:"icon","aria-hidden":"true",onClick:L},I)):u("",!0)]),i(x,{modelValue:m.value,"onUpdate:modelValue":t[1]||(t[1]=e=>m.value=e),direction:"rtl",size:"60%","with-header":!1,"show-close":!1},{default:s((()=>[(h(!0),c(p,null,y(Object.keys(r),(e=>(h(),c("div",{key:e},[o("h4",null,f(e),1),i(M,{size:"large",modelValue:a.value,"onUpdate:modelValue":t[0]||(t[0]=e=>a.value=e),onChange:F},{default:s((()=>[(h(!0),c(p,null,y(r[e],(e=>(h(),g(n,{style:{display:"block"},key:e,label:e},null,8,["label"])))),128))])),_:2},1032,["modelValue"])])))),128))])),_:1},8,["modelValue"]),i(C),i(H,{class:"productMain"},{default:s((()=>[i(A,{class:"left hidden-xs-only",span:3},{default:s((()=>[(h(!0),c(p,null,y(Object.keys(r),(e=>(h(),c("div",{key:e},[o("h4",null,f(e),1),i(M,{size:"large",modelValue:a.value,"onUpdate:modelValue":t[2]||(t[2]=e=>a.value=e),onChange:F},{default:s((()=>[(h(!0),c(p,null,y(r[e],(e=>(h(),g(n,{style:{display:"block"},key:e,label:e},null,8,["label"])))),128))])),_:2},1032,["modelValue"])])))),128))])),_:1}),i(A,{class:"right",sm:21},{default:s((()=>[i(V,{onGetProducts:G,limit:8,collectionId:[l.id],newProduct:0===a.value.length?O.value:U.value},null,8,["collectionId","newProduct"])])),_:1})])),_:1})])}}}),[["__scopeId","data-v-a061590d"]]))}}}));
