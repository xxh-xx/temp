import{g as q,i as z,t as H,h as _,v as m,T as J,d as S,x as M,y as R,z as L,A as O,B as Q,C as W,o as u,c as y,F as X,m as B,j as k,w,k as I,n as h,u as e,E,l as T,D as Y,q as x,G as Z,H as oo,I as G,s as eo,J as to}from"./index.665fe5bb.js";import{u as so,a as D,b as no,c as ao}from"./index.449f8832.js";const P=Symbol("buttonGroupContextKey"),lo=["default","primary","success","warning","info","danger","text",""],ro=["button","submit","reset"],C=q({size:so,disabled:Boolean,type:{type:String,values:lo,default:""},icon:{type:z},nativeType:{type:String,values:ro,default:"button"},loading:Boolean,loadingIcon:{type:z,default:()=>H},plain:Boolean,text:Boolean,link:Boolean,bg:Boolean,autofocus:Boolean,round:Boolean,circle:Boolean,color:String,dark:Boolean,autoInsertSpace:{type:Boolean,default:void 0}}),io={click:s=>s instanceof MouseEvent};function c(s,i=20){return s.mix("#141414",i).toString()}function co(s){const i=D(),n=_("button");return m(()=>{let a={};const r=s.color;if(r){const t=new J(r),b=s.dark?t.tint(20).toString():c(t,20);if(s.plain)a=n.cssVarBlock({"bg-color":s.dark?c(t,90):t.tint(90).toString(),"text-color":r,"border-color":s.dark?c(t,50):t.tint(50).toString(),"hover-text-color":`var(${n.cssVarName("color-white")})`,"hover-bg-color":r,"hover-border-color":r,"active-bg-color":b,"active-text-color":`var(${n.cssVarName("color-white")})`,"active-border-color":b}),i.value&&(a[n.cssVarBlockName("disabled-bg-color")]=s.dark?c(t,90):t.tint(90).toString(),a[n.cssVarBlockName("disabled-text-color")]=s.dark?c(t,50):t.tint(50).toString(),a[n.cssVarBlockName("disabled-border-color")]=s.dark?c(t,80):t.tint(80).toString());else{const l=s.dark?c(t,30):t.tint(30).toString(),f=t.isDark()?`var(${n.cssVarName("color-white")})`:`var(${n.cssVarName("color-black")})`;if(a=n.cssVarBlock({"bg-color":r,"text-color":f,"border-color":r,"hover-bg-color":l,"hover-text-color":f,"hover-border-color":l,"active-bg-color":b,"active-border-color":b}),i.value){const g=s.dark?c(t,50):t.tint(50).toString();a[n.cssVarBlockName("disabled-bg-color")]=g,a[n.cssVarBlockName("disabled-text-color")]=s.dark?"rgba(255, 255, 255, 0.5)":`var(${n.cssVarName("color-white")})`,a[n.cssVarBlockName("disabled-border-color")]=g}}}return a})}const uo=["aria-disabled","disabled","autofocus","type"],bo=S({name:"ElButton"}),po=S({...bo,props:C,emits:io,setup(s,{expose:i,emit:n}){const a=s,r=M();R({from:"type.text",replacement:"link",version:"3.0.0",scope:"props",ref:"https://element-plus.org/en-US/component/button.html#button-attributes"},m(()=>a.type==="text"));const t=L(P,void 0),b=O("button"),l=_("button"),{form:f}=no(),g=ao(m(()=>t==null?void 0:t.size)),v=D(),$=Q(),N=m(()=>a.type||(t==null?void 0:t.type)||""),j=m(()=>{var o,d,p;return(p=(d=a.autoInsertSpace)!=null?d:(o=b.value)==null?void 0:o.autoInsertSpace)!=null?p:!1}),V=m(()=>{var o;const d=(o=r.default)==null?void 0:o.call(r);if(j.value&&(d==null?void 0:d.length)===1){const p=d[0];if((p==null?void 0:p.type)===W){const U=p.children;return new RegExp("^\\p{Unified_Ideograph}{2}$","u").test(U.trim())}}return!1}),A=co(a),K=o=>{a.nativeType==="reset"&&(f==null||f.resetFields()),n("click",o)};return i({ref:$,size:g,type:N,disabled:v,shouldAddSpace:V}),(o,d)=>(u(),y("button",{ref_key:"_ref",ref:$,class:h([e(l).b(),e(l).m(e(N)),e(l).m(e(g)),e(l).is("disabled",e(v)),e(l).is("loading",o.loading),e(l).is("plain",o.plain),e(l).is("round",o.round),e(l).is("circle",o.circle),e(l).is("text",o.text),e(l).is("link",o.link),e(l).is("has-bg",o.bg)]),"aria-disabled":e(v)||o.loading,disabled:e(v)||o.loading,autofocus:o.autofocus,type:o.nativeType,style:Y(e(A)),onClick:K},[o.loading?(u(),y(X,{key:0},[o.$slots.loading?B(o.$slots,"loading",{key:0}):(u(),k(e(E),{key:1,class:h(e(l).is("loading"))},{default:w(()=>[(u(),k(I(o.loadingIcon)))]),_:1},8,["class"]))],64)):o.icon||o.$slots.icon?(u(),k(e(E),{key:1},{default:w(()=>[o.icon?(u(),k(I(o.icon),{key:0})):B(o.$slots,"icon",{key:1})]),_:3})):T("v-if",!0),o.$slots.default?(u(),y("span",{key:2,class:h({[e(l).em("text","expand")]:e(V)})},[B(o.$slots,"default")],2)):T("v-if",!0)],14,uo))}});var mo=x(po,[["__file","/home/runner/work/element-plus/element-plus/packages/components/button/src/button.vue"]]);const fo={size:C.size,type:C.type},go=S({name:"ElButtonGroup"}),vo=S({...go,props:fo,setup(s){const i=s;Z(P,oo({size:G(i,"size"),type:G(i,"type")}));const n=_("button");return(a,r)=>(u(),y("div",{class:h(`${e(n).b("group")}`)},[B(a.$slots,"default")],2))}});var F=x(vo,[["__file","/home/runner/work/element-plus/element-plus/packages/components/button/src/button-group.vue"]]);const Bo=eo(mo,{ButtonGroup:F});to(F);export{Bo as E};
