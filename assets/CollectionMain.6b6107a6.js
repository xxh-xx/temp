import{d as L,A as i,G as N,be as U,c,a as h,Q as x,k as F,b as u,w as d,o as l,F as g,M as w,j as B,p as A,e as Q,_ as R}from"./index.3bd818e7.js";import{e as T,f as W}from"./el-col.f1290338.js";import{E as q}from"./el-divider.61191980.js";import{E as H,a as J,g as O,f as E}from"./el-checkbox.1f3ec8fa.js";import{P as K}from"./ProductList.c0ab57cd.js";import{f as y}from"./forEach.de6ed59d.js";import"./_arrayEach.fdfc4e31.js";const X=p=>(A("data-v-e65cf439"),p=p(),Q(),p),Y={class:"collectionMain"},Z={class:"header"},$=X(()=>h("use",{"xlink:href":"#icon-filter"},null,-1)),ee=[$],oe=L({__name:"CollectionMain",props:{id:null},setup(p){const j=p,D=8,_=i([]),m=N({}),P=i(!1),k=i(!1),v=i([]),b=i([]),I=i(""),G=s=>{var r;v.value=s;const e=[];y(v.value,a=>{e.push(...a.options)});const o=O(e,"title");y(o,a=>{const{title:C}=a[0],f=[];y(a,({values:V})=>{f.push(...V)}),m[C]=Object.keys(O(f,"value"))}),I.value=(r=v.value[0].collection)==null?void 0:r.title};(()=>{window.innerWidth<=768&&(P.value=!0)})();const z=()=>{k.value=!k.value},S=(s,e)=>E(s,o=>E(o.options,r=>E(r.values,a=>e===a.value).length!==0).length!==0),M=s=>{let e=[];for(let o=0;o<s.length;o+=1)o===0?e=S(v.value,s[o]):e=S(e,s[o]);b.value=[],y(e,o=>{b.value.push(o)})};return(s,e)=>{const o=H,r=J,a=U,C=q,f=T,V=W;return l(),c("div",Y,[h("div",Z,[h("h2",null,x(I.value),1),P.value?(l(),c("svg",{key:0,class:"icon","aria-hidden":"true",onClick:z},ee)):F("",!0)]),u(a,{modelValue:k.value,"onUpdate:modelValue":e[1]||(e[1]=t=>k.value=t),direction:"rtl",size:"60%","with-header":!1,"show-close":!1},{default:d(()=>[(l(!0),c(g,null,w(Object.keys(m),t=>(l(),c("div",{key:t},[h("h4",null,x(t),1),u(r,{size:"large",modelValue:_.value,"onUpdate:modelValue":e[0]||(e[0]=n=>_.value=n),onChange:M},{default:d(()=>[(l(!0),c(g,null,w(m[t],n=>(l(),B(o,{style:{display:"block"},key:n,label:n},null,8,["label"]))),128))]),_:2},1032,["modelValue"])]))),128))]),_:1},8,["modelValue"]),u(C),u(V,{class:"productMain"},{default:d(()=>[u(f,{class:"left hidden-xs-only",span:3},{default:d(()=>[(l(!0),c(g,null,w(Object.keys(m),t=>(l(),c("div",{key:t},[h("h4",null,x(t),1),u(r,{size:"large",modelValue:_.value,"onUpdate:modelValue":e[2]||(e[2]=n=>_.value=n),onChange:M},{default:d(()=>[(l(!0),c(g,null,w(m[t],n=>(l(),B(o,{style:{display:"block"},key:n,label:n},null,8,["label"]))),128))]),_:2},1032,["modelValue"])]))),128))]),_:1}),u(f,{class:"right",sm:21},{default:d(()=>[u(K,{onGetProducts:G,limit:D,collectionId:[j.id],newProduct:_.value.length===0?v.value:b.value},null,8,["collectionId","newProduct"])]),_:1})]),_:1})])}}});const ie=R(oe,[["__scopeId","data-v-e65cf439"]]);export{ie as default};
