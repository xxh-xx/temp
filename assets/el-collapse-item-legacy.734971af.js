System.register(["./index-legacy.3dc507af.js"],(function(e,a){"use strict";var t,o,l,i,r,n,s,c,d,p,v,m,u,b,f,h,g,y,x,z,_,w,k,C,$,N,V,Y,E,I,S,B,A,K,O,T=document.createElement("style");return T.innerHTML=".fade-in-linear-enter-active,.fade-in-linear-leave-active{transition:var(--el-transition-fade-linear)}.fade-in-linear-enter-from,.fade-in-linear-leave-to{opacity:0}.el-fade-in-linear-enter-active,.el-fade-in-linear-leave-active{transition:var(--el-transition-fade-linear)}.el-fade-in-linear-enter-from,.el-fade-in-linear-leave-to{opacity:0}.el-fade-in-enter-active,.el-fade-in-leave-active{transition:all var(--el-transition-duration) cubic-bezier(.55,0,.1,1)}.el-fade-in-enter-from,.el-fade-in-leave-active{opacity:0}.el-zoom-in-center-enter-active,.el-zoom-in-center-leave-active{transition:all var(--el-transition-duration) cubic-bezier(.55,0,.1,1)}.el-zoom-in-center-enter-from,.el-zoom-in-center-leave-active{opacity:0;transform:scaleX(0)}.el-zoom-in-top-enter-active,.el-zoom-in-top-leave-active{opacity:1;transform:scaleY(1);transition:var(--el-transition-md-fade);transform-origin:center top}.el-zoom-in-top-enter-active[data-popper-placement^=top],.el-zoom-in-top-leave-active[data-popper-placement^=top]{transform-origin:center bottom}.el-zoom-in-top-enter-from,.el-zoom-in-top-leave-active{opacity:0;transform:scaleY(0)}.el-zoom-in-bottom-enter-active,.el-zoom-in-bottom-leave-active{opacity:1;transform:scaleY(1);transition:var(--el-transition-md-fade);transform-origin:center bottom}.el-zoom-in-bottom-enter-from,.el-zoom-in-bottom-leave-active{opacity:0;transform:scaleY(0)}.el-zoom-in-left-enter-active,.el-zoom-in-left-leave-active{opacity:1;transform:scale(1);transition:var(--el-transition-md-fade);transform-origin:top left}.el-zoom-in-left-enter-from,.el-zoom-in-left-leave-active{opacity:0;transform:scale(.45)}.collapse-transition{transition:var(--el-transition-duration) height ease-in-out,var(--el-transition-duration) padding-top ease-in-out,var(--el-transition-duration) padding-bottom ease-in-out}.el-collapse-transition-enter-active,.el-collapse-transition-leave-active{transition:var(--el-transition-duration) max-height ease-in-out,var(--el-transition-duration) padding-top ease-in-out,var(--el-transition-duration) padding-bottom ease-in-out}.horizontal-collapse-transition{transition:var(--el-transition-duration) width ease-in-out,var(--el-transition-duration) padding-left ease-in-out,var(--el-transition-duration) padding-right ease-in-out}.el-list-enter-active,.el-list-leave-active{transition:all 1s}.el-list-enter-from,.el-list-leave-to{opacity:0;transform:translateY(-30px)}.el-list-leave-active{position:absolute!important}.el-opacity-transition{transition:opacity var(--el-transition-duration) cubic-bezier(.55,0,.1,1)}.el-collapse{--el-collapse-border-color:var(--el-border-color-lighter);--el-collapse-header-height:48px;--el-collapse-header-bg-color:var(--el-fill-color-blank);--el-collapse-header-text-color:var(--el-text-color-primary);--el-collapse-header-font-size:13px;--el-collapse-content-bg-color:var(--el-fill-color-blank);--el-collapse-content-font-size:13px;--el-collapse-content-text-color:var(--el-text-color-primary);border-top:1px solid var(--el-collapse-border-color);border-bottom:1px solid var(--el-collapse-border-color)}.el-collapse-item.is-disabled .el-collapse-item__header{color:var(--el-text-color-disabled);cursor:not-allowed}.el-collapse-item__header{display:flex;align-items:center;height:var(--el-collapse-header-height);line-height:var(--el-collapse-header-height);background-color:var(--el-collapse-header-bg-color);color:var(--el-collapse-header-text-color);cursor:pointer;border-bottom:1px solid var(--el-collapse-border-color);font-size:var(--el-collapse-header-font-size);font-weight:500;transition:border-bottom-color var(--el-transition-duration);outline:0}.el-collapse-item__arrow{margin:0 8px 0 auto;transition:transform var(--el-transition-duration);font-weight:300}.el-collapse-item__arrow.is-active{transform:rotate(90deg)}.el-collapse-item__header.focusing:focus:not(:hover){color:var(--el-color-primary)}.el-collapse-item__header.is-active{border-bottom-color:transparent}.el-collapse-item__wrap{will-change:height;background-color:var(--el-collapse-content-bg-color);overflow:hidden;box-sizing:border-box;border-bottom:1px solid var(--el-collapse-border-color)}.el-collapse-item__content{padding-bottom:25px;font-size:var(--el-collapse-content-font-size);color:var(--el-collapse-content-text-color);line-height:1.7692307692}.el-collapse-item:last-child{margin-bottom:-1px}\n",document.head.appendChild(T),{setters:[e=>{t=e.aV,o=e.g,l=e.a8,i=e.a9,r=e.aW,n=e.aX,s=e.aa,c=e.d,d=e.h,p=e.B,v=e.O,m=e.G,u=e.o,b=e.c,f=e.m,h=e.n,g=e.u,y=e.q,x=e.aY,z=e.z,_=e.v,w=e.a,k=e.aZ,C=e.b,$=e.w,N=e.an,V=e.E,Y=e.as,E=e.at,I=e.a_,S=e.ak,B=e.f,A=e.V,K=e.s,O=e.J}],execute:function(){function a(){if(!arguments.length)return[];var e=arguments[0];return t(e)?e:[e]}e("c",a);const T=Symbol("collapseContextKey"),X=e=>typeof s(e),j=o({accordion:Boolean,modelValue:{type:l([Array,String,Number]),default:()=>i([])}}),q={[r]:X,[n]:X},F=c({name:"ElCollapse"}),G=c({...F,props:j,emits:q,setup(e,{expose:t,emit:o}){const l=e,i=d("collapse"),s=p(a(l.modelValue)),c=e=>{s.value=e;const a=l.accordion?s.value[0]:s.value;o(r,a),o(n,a)};return v((()=>l.modelValue),(()=>s.value=a(l.modelValue)),{deep:!0}),m(T,{activeNames:s,handleItemClick:e=>{if(l.accordion)c([!s.value[0]&&0!==s.value[0]||s.value[0]!==e?e:""]);else{const a=[...s.value],t=a.indexOf(e);t>-1?a.splice(t,1):a.push(e),c(a)}}}),t({activeNames:s,setActiveNames:c}),(e,a)=>(u(),b("div",{class:h(g(i).b()),role:"tablist","aria-multiselectable":"true"},[f(e.$slots,"default")],2))}});var H=y(G,[["__file","/home/runner/work/element-plus/element-plus/packages/components/collapse/src/collapse.vue"]]);const J=o({title:{type:String,default:""},name:{type:l([String,Number]),default:()=>x()},disabled:Boolean}),L=["aria-expanded","aria-controls","aria-describedby"],M=["id","tabindex","onKeypress"],W=["id","aria-hidden","aria-labelledby"],Z=c({name:"ElCollapseItem"}),D=c({...Z,props:J,setup(e,{expose:a}){const t=e,o=z(T),l=d("collapse"),i=p(!1),r=p(!1),n=p(x()),s=_((()=>null==o?void 0:o.activeNames.value.includes(t.name))),c=()=>{setTimeout((()=>{r.value?r.value=!1:i.value=!0}),50)},v=()=>{t.disabled||(null==o||o.handleItemClick(t.name),i.value=!1,r.value=!0)},m=()=>{null==o||o.handleItemClick(t.name)};return a({isActive:s}),(e,a)=>(u(),b("div",{class:h([g(l).b("item"),g(l).is("active",g(s)),g(l).is("disabled",e.disabled)])},[w("div",{role:"tab","aria-expanded":g(s),"aria-controls":g(l).b(`content-${n.value}`),"aria-describedby":g(l).b(`content-${n.value}`)},[w("div",{id:g(l).b(`head-${n.value}`),class:h([g(l).be("item","header"),g(l).is("active",g(s)),{focusing:i.value&&!e.disabled}]),role:"button",tabindex:e.disabled?-1:0,onClick:v,onKeypress:k(S(m,["stop","prevent"]),["space","enter"]),onFocus:c,onBlur:a[0]||(a[0]=e=>i.value=!1)},[f(e.$slots,"title",{},(()=>[B(A(e.title),1)])),C(g(V),{class:h([g(l).be("item","arrow"),g(l).is("active",g(s))])},{default:$((()=>[C(g(N))])),_:1},8,["class"])],42,M)],8,L),C(g(I),null,{default:$((()=>[Y(w("div",{id:g(l).b(`content-${n.value}`),class:h(g(l).be("item","wrap")),role:"tabpanel","aria-hidden":!g(s),"aria-labelledby":g(l).b(`head-${n.value}`)},[w("div",{class:h(g(l).be("item","content"))},[f(e.$slots,"default")],2)],10,W),[[E,g(s)]])])),_:3})],2))}});var P=y(D,[["__file","/home/runner/work/element-plus/element-plus/packages/components/collapse/src/collapse-item.vue"]]);e("a",K(H,{CollapseItem:P})),e("E",O(P))}}}));
