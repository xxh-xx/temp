import{d as N,B as _,H as z,be as G,c as u,a as m,l as L,b as r,w as c,p as U,e as F,o as l,F as k,N as w,R as S,j as B,_ as R}from"./index.665fe5bb.js";import{a as H,b as M}from"./el-col.981e8500.js";import{E as W}from"./el-divider.1ea86bee.js";import{E as q,a as J,g as O,f as V}from"./el-checkbox.21268807.js";import{P as K}from"./ProductList.00a57b73.js";import{f as y}from"./forEach.6bc773db.js";import"./index.449f8832.js";import"./_arrayEach.fdfc4e31.js";const j=v=>(U("data-v-52b45756"),v=v(),F(),v),Q={class:"allProducts"},T={class:"header"},X=j(()=>m("h2",null,"All Products",-1)),Y=j(()=>m("use",{"xlink:href":"#icon-filter"},null,-1)),Z=[Y],$=N({__name:"AllPoducts",setup(v){const d=_([]),h=_([]),i=z({}),x=_(!1),f=_(!1),P=_([]),A=n=>{h.value=n;const e=[];y(h.value,t=>{e.push(...t.options)});const o=O(e,"title");y(o,t=>{const{title:p}=t[0],b=[];y(t,({values:g})=>{b.push(...g)}),i[p]=Object.keys(O(b,"value"))})};(()=>{window.innerWidth<=768&&(x.value=!0)})();const D=()=>{f.value=!f.value},C=(n,e)=>V(n,o=>V(o.options,t=>V(t.values,p=>e===p.value).length!==0).length!==0),E=n=>{let e=[];for(let o=0;o<n.length;o+=1)o===0?e=C(h.value,n[o]):e=C(e,n[o]);P.value=[],y(e,o=>{P.value.push(o)})};return(n,e)=>{const o=q,t=J,p=G,b=W,g=H,I=M;return l(),u("div",Q,[m("div",T,[X,x.value?(l(),u("svg",{key:0,class:"icon","aria-hidden":"true",onClick:D},Z)):L("",!0)]),r(p,{modelValue:f.value,"onUpdate:modelValue":e[1]||(e[1]=s=>f.value=s),direction:"rtl",size:"60%","with-header":!1,"show-close":!1},{default:c(()=>[(l(!0),u(k,null,w(Object.keys(i),s=>(l(),u("div",{key:s},[m("h4",null,S(s),1),r(t,{size:"large",modelValue:d.value,"onUpdate:modelValue":e[0]||(e[0]=a=>d.value=a),onChange:E},{default:c(()=>[(l(!0),u(k,null,w(i[s],a=>(l(),B(o,{style:{display:"block"},key:a,label:a},null,8,["label"]))),128))]),_:2},1032,["modelValue"])]))),128))]),_:1},8,["modelValue"]),r(b),r(I,{class:"productMain"},{default:c(()=>[r(g,{class:"left hidden-xs-only",span:3},{default:c(()=>[(l(!0),u(k,null,w(Object.keys(i),s=>(l(),u("div",{key:s},[m("h4",null,S(s),1),r(t,{size:"large",modelValue:d.value,"onUpdate:modelValue":e[2]||(e[2]=a=>d.value=a),onChange:E},{default:c(()=>[(l(!0),u(k,null,w(i[s],a=>(l(),B(o,{style:{display:"block"},key:a,label:a},null,8,["label"]))),128))]),_:2},1032,["modelValue"])]))),128))]),_:1}),r(g,{class:"right",sm:21},{default:c(()=>[r(K,{onGetProducts:A,limit:8,newProduct:d.value.length===0?h.value:P.value},null,8,["newProduct"])]),_:1})]),_:1})])}}});const de=R($,[["__scopeId","data-v-52b45756"]]);export{de as default};
