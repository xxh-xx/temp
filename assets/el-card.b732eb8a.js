import{g as n,aa as c,d,h as p,o,c as t,n as r,u as s,l,k as i,a as u,C as m,m as y,f,Q as h,q as v}from"./index.022c44b5.js";const C=n({header:{type:String,default:""},bodyStyle:{type:c([String,Object,Array]),default:""},shadow:{type:String,values:["always","hover","never"],default:"always"}}),S=d({name:"ElCard"}),w=d({...S,props:C,setup(b){const a=p("card");return(e,g)=>(o(),t("div",{class:r([s(a).b(),s(a).is(`${e.shadow}-shadow`)])},[e.$slots.header||e.header?(o(),t("div",{key:0,class:r(s(a).e("header"))},[l(e.$slots,"header",{},()=>[f(h(e.header),1)])],2)):i("v-if",!0),u("div",{class:r(s(a).e("body")),style:m(e.bodyStyle)},[l(e.$slots,"default")],6)],2))}});var _=y(w,[["__file","/home/runner/work/element-plus/element-plus/packages/components/card/src/card.vue"]]);const E=v(_);export{E};
