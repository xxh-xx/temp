import{A as w,J as A,K as $,g as C,d as f,h as L,o,c as d,j as h,u as l,L as V,k as B,n as P,m as T,H as z,F as _,M as v,l as b,N as E,O as D,b as c,q as F,I as H,P as M,w as m,a as k,Q as N,R as j,_ as J}from"./index.022c44b5.js";import{d as K,e as O,f as Q,E as U}from"./el-col.a42f106e.js";const x=(r,n=0)=>{if(n===0)return r;const t=w(!1);let s=0;const a=()=>{s&&clearTimeout(s),s=window.setTimeout(()=>{t.value=r.value},n)};return A(a),$(()=>r.value,e=>{e?a():t.value=e}),t},G=C({animated:{type:Boolean,default:!1},count:{type:Number,default:1},rows:{type:Number,default:3},loading:{type:Boolean,default:!0},throttle:{type:Number}}),W=C({variant:{type:String,values:["circle","rect","h1","h3","text","caption","p","image","button"],default:"text"}}),X=f({name:"ElSkeletonItem"}),Y=f({...X,props:W,setup(r){const n=L("skeleton");return(t,s)=>(o(),d("div",{class:P([l(n).e("item"),l(n).e(t.variant)])},[t.variant==="image"?(o(),h(l(V),{key:0})):B("v-if",!0)],2))}});var g=T(Y,[["__file","/home/runner/work/element-plus/element-plus/packages/components/skeleton/src/skeleton-item.vue"]]);const Z=f({name:"ElSkeleton"}),ee=f({...Z,props:G,setup(r,{expose:n}){const t=r,s=L("skeleton"),a=x(z(t,"loading"),t.throttle);return n({uiLoading:a}),(e,u)=>l(a)?(o(),d("div",E({key:0,class:[l(s).b(),l(s).is("animated",e.animated)]},e.$attrs),[(o(!0),d(_,null,v(e.count,y=>(o(),d(_,{key:y},[e.loading?b(e.$slots,"template",{key:y},()=>[c(g,{class:P(l(s).is("first")),variant:"p"},null,8,["class"]),(o(!0),d(_,null,v(e.rows,p=>(o(),h(g,{key:p,class:P([l(s).e("paragraph"),l(s).is("last",p===e.rows&&e.rows>1)]),variant:"p"},null,8,["class"]))),128))]):B("v-if",!0)],64))),128))],16)):b(e.$slots,"default",D(E({key:1},e.$attrs)))}});var te=T(ee,[["__file","/home/runner/work/element-plus/element-plus/packages/components/skeleton/src/skeleton.vue"]]);const se=F(te,{SkeletonItem:g}),oe=H(g);const ae={class:"product-info"},le={class:"product-info"},ne={class:"product-title"},re={class:"product-price"},ce=f({__name:"ProductList",props:{limit:{type:Number,required:!0},collectionId:{type:Array,required:!1},newProduct:{type:Array,required:!1}},emits:["getProducts"],setup(r,{emit:n}){const t=r,s=w(!0),a=w([]),e=u=>{j.push(`/product/${u}`),window.scrollTo(0,0)};return M(t.limit,t.collectionId).then(u=>{a.value=u.products,s.value=!1,n("getProducts",a.value)}),$(()=>t.newProduct,u=>{a.value=u},{deep:!0}),(u,y)=>{const p=oe,I=O,S=Q,q=U,R=se;return o(),h(R,{animated:"",loading:s.value,throttle:200},{template:m(()=>[c(S,{class:"products"},{default:m(()=>[(o(),d(_,null,v(4,i=>c(I,{sm:6,class:"product",key:i},{default:m(()=>[c(p,{class:"thumbnail",variant:"image"}),k("div",ae,[c(p,{class:"product-title",style:{width:"40%",height:"20px"}}),c(p,{class:"product-price",style:{width:"40%",height:"20px"}})])]),_:2},1024)),64))]),_:1})]),default:m(()=>[c(S,{class:"products"},{default:m(()=>[(o(!0),d(_,null,v(a.value,i=>(o(),h(I,{sm:6,class:"product",key:i.id,onClick:ue=>e(i.id)},{default:m(()=>[c(q,{class:"thumbnail",src:i.thumbnail},null,8,["src"]),k("div",le,[k("div",ne,N(i.title),1),k("div",re,N(l(K)(i.variants[0].prices[0].amount,100))+" USD ",1)])]),_:2},1032,["onClick"]))),128))]),_:1})]),_:1},8,["loading"])}}});const pe=J(ce,[["__scopeId","data-v-e09d0517"]]);export{oe as E,pe as P,se as a};
