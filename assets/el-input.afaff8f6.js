import{A as V,ac as Se,g as je,aa as G,i as Ce,ab as We,aW as se,aC as Z,d as $e,aA as Ke,v as qe,t as f,h as Ie,ak as ee,b8 as Ue,b9 as Xe,ba as Ye,b1 as Je,aL as Qe,K as te,al as P,b7 as Ee,J as _e,b2 as Ge,H as Ze,au as et,av as tt,o as u,c as x,k as p,F as ae,n as h,u as t,l as W,a as N,j as w,w as O,r as K,E as L,N as oe,b as at,bb as ot,am as st,bc as nt,Q as q,C as lt,m as rt,a1 as it,ad as ke,a4 as ut,q as dt}from"./index.022c44b5.js";import{u as ct,i as pt,b as ft,j as vt,c as mt,a as ht}from"./el-col.a42f106e.js";const yt=o=>/([(\uAC00-\uD7AF)|(\u3130-\u318F)])+/gi.test(o);function bt(o){const v=V();function l(){if(o.value==null)return;const{selectionStart:d,selectionEnd:m,value:r}=o.value;if(d==null||m==null)return;const g=r.slice(0,Math.max(0,d)),i=r.slice(Math.max(0,m));v.value={selectionStart:d,selectionEnd:m,value:r,beforeTxt:g,afterTxt:i}}function a(){if(o.value==null||v.value==null)return;const{value:d}=o.value,{beforeTxt:m,afterTxt:r,selectionStart:g}=v.value;if(m==null||r==null||g==null)return;let i=d.length;if(d.endsWith(r))i=d.length-r.length;else if(d.startsWith(m))i=m.length;else{const y=m[g-1],S=d.indexOf(y,g-1);S!==-1&&(i=S+1)}o.value.setSelectionRange(i,i)}return[l,a]}let b;const gt=`
  height:0 !important;
  visibility:hidden !important;
  overflow:hidden !important;
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
`,xt=["letter-spacing","line-height","padding-top","padding-bottom","font-family","font-weight","font-size","text-rendering","text-transform","width","text-indent","padding-left","padding-right","border-width","box-sizing"];function wt(o){const v=window.getComputedStyle(o),l=v.getPropertyValue("box-sizing"),a=Number.parseFloat(v.getPropertyValue("padding-bottom"))+Number.parseFloat(v.getPropertyValue("padding-top")),d=Number.parseFloat(v.getPropertyValue("border-bottom-width"))+Number.parseFloat(v.getPropertyValue("border-top-width"));return{contextStyle:xt.map(r=>`${r}:${v.getPropertyValue(r)}`).join(";"),paddingSize:a,borderSize:d,boxSizing:l}}function ze(o,v=1,l){var a;b||(b=document.createElement("textarea"),document.body.appendChild(b));const{paddingSize:d,borderSize:m,boxSizing:r,contextStyle:g}=wt(o);b.setAttribute("style",`${g};${gt}`),b.value=o.value||o.placeholder||"";let i=b.scrollHeight;const y={};r==="border-box"?i=i+m:r==="content-box"&&(i=i-d),b.value="";const S=b.scrollHeight-d;if(Se(v)){let c=S*v;r==="border-box"&&(c=c+d+m),i=Math.max(c,i),y.minHeight=`${c}px`}if(Se(l)){let c=S*l;r==="border-box"&&(c=c+d+m),i=Math.min(c,i)}return y.height=`${i}px`,(a=b.parentNode)==null||a.removeChild(b),b=void 0,y}const St=je({id:{type:String,default:void 0},size:ct,disabled:Boolean,modelValue:{type:G([String,Number,Object]),default:""},type:{type:String,default:"text"},resize:{type:String,values:["none","both","horizontal","vertical"]},autosize:{type:G([Boolean,Object]),default:!1},autocomplete:{type:String,default:"off"},formatter:{type:Function},parser:{type:Function},placeholder:{type:String},form:{type:String,default:""},readonly:{type:Boolean,default:!1},clearable:{type:Boolean,default:!1},showPassword:{type:Boolean,default:!1},showWordLimit:{type:Boolean,default:!1},suffixIcon:{type:Ce},prefixIcon:{type:Ce},containerRole:{type:String,default:void 0},label:{type:String,default:void 0},tabindex:{type:[String,Number],default:0},validateEvent:{type:Boolean,default:!0},inputStyle:{type:G([Object,Array,String]),default:()=>We({})}}),Ct={[se]:o=>Z(o),input:o=>Z(o),change:o=>Z(o),focus:o=>o instanceof FocusEvent,blur:o=>o instanceof FocusEvent,clear:()=>!0,mouseleave:o=>o instanceof MouseEvent,mouseenter:o=>o instanceof MouseEvent,keydown:o=>o instanceof Event,compositionstart:o=>o instanceof CompositionEvent,compositionupdate:o=>o instanceof CompositionEvent,compositionend:o=>o instanceof CompositionEvent},It=["role"],Et=["id","type","disabled","formatter","parser","readonly","autocomplete","tabindex","aria-label","placeholder"],kt=["id","tabindex","disabled","readonly","autocomplete","aria-label","placeholder"],zt=$e({name:"ElInput",inheritAttrs:!1}),$t=$e({...zt,props:St,emits:Ct,setup(o,{expose:v,emit:l}){const a=o,d={suffix:"append",prefix:"prepend"},m=ut(),r=Ke(),g=qe(),i=f(()=>{const e={};return a.containerRole==="combobox"&&(e["aria-haspopup"]=r["aria-haspopup"],e["aria-owns"]=r["aria-owns"],e["aria-expanded"]=r["aria-expanded"]),e}),y=pt({excludeKeys:f(()=>Object.keys(i.value))}),{form:S,formItem:c}=ft(),{inputId:ne}=vt(a,{formItemContext:c}),Pe=mt(),k=ht(),s=Ie("input"),le=Ie("textarea"),R=ee(),z=ee(),A=V(!1),U=V(!1),T=V(!1),D=V(!1),re=V(),X=ee(a.inputStyle),F=f(()=>R.value||z.value),ie=f(()=>{var e;return(e=S==null?void 0:S.statusIcon)!=null?e:!1}),M=f(()=>(c==null?void 0:c.validateState)||""),ue=f(()=>M.value&&Ue[M.value]),Ne=f(()=>D.value?Xe:Ye),Ve=f(()=>[r.style,a.inputStyle]),de=f(()=>[a.inputStyle,X.value,{resize:a.resize}]),C=f(()=>Je(a.modelValue)?"":String(a.modelValue)),H=f(()=>a.clearable&&!k.value&&!a.readonly&&!!C.value&&(A.value||U.value)),Y=f(()=>a.showPassword&&!k.value&&!a.readonly&&!!C.value&&(!!C.value||A.value)),$=f(()=>a.showWordLimit&&!!y.value.maxlength&&(a.type==="text"||a.type==="textarea")&&!k.value&&!a.readonly&&!a.showPassword),J=f(()=>Array.from(C.value).length),Ae=f(()=>!!$.value&&J.value>Number(y.value.maxlength)),Te=f(()=>!!g.suffix||!!a.suffixIcon||H.value||a.showPassword||$.value||!!M.value&&ie.value),[Fe,Me]=bt(R);Qe(z,e=>{if(!$.value||a.resize!=="both")return;const n=e[0],{width:I}=n.contentRect;re.value={right:`calc(100% - ${I+15+6}px)`}});const j=()=>{const{type:e,autosize:n}=a;if(!(!it||e!=="textarea"))if(n){const I=ke(n)?n.minRows:void 0,E=ke(n)?n.maxRows:void 0;X.value={...ze(z.value,I,E)}}else X.value={minHeight:ze(z.value).minHeight}},B=()=>{const e=F.value;!e||e.value===C.value||(e.value=C.value)},ce=e=>{const{el:n}=m.vnode;if(!n)return;const E=Array.from(n.querySelectorAll(`.${s.e(e)}`)).find(He=>He.parentNode===n);if(!E)return;const we=d[e];g[we]?E.style.transform=`translateX(${e==="suffix"?"-":""}${n.querySelector(`.${s.be("group",we)}`).offsetWidth}px)`:E.removeAttribute("style")},Q=()=>{ce("prefix"),ce("suffix")},_=async e=>{Fe();let{value:n}=e.target;if(a.formatter&&(n=a.parser?a.parser(n):n,n=a.formatter(n)),!T.value){if(n===C.value){B();return}l(se,n),l("input",n),await P(),B(),Me()}},pe=e=>{l("change",e.target.value)},fe=e=>{l("compositionstart",e),T.value=!0},ve=e=>{var n;l("compositionupdate",e);const I=(n=e.target)==null?void 0:n.value,E=I[I.length-1]||"";T.value=!yt(E)},me=e=>{l("compositionend",e),T.value&&(T.value=!1,_(e))},Be=()=>{D.value=!D.value,he()},he=async()=>{var e;await P(),(e=F.value)==null||e.focus()},Oe=()=>{var e;return(e=F.value)==null?void 0:e.blur()},ye=e=>{A.value=!0,l("focus",e)},be=e=>{var n;A.value=!1,l("blur",e),a.validateEvent&&((n=c==null?void 0:c.validate)==null||n.call(c,"blur").catch(I=>Ee()))},Le=e=>{U.value=!1,l("mouseleave",e)},Re=e=>{U.value=!0,l("mouseenter",e)},ge=e=>{l("keydown",e)},De=()=>{var e;(e=F.value)==null||e.select()},xe=()=>{l(se,""),l("change",""),l("clear"),l("input","")};return te(()=>a.modelValue,()=>{var e;P(()=>j()),a.validateEvent&&((e=c==null?void 0:c.validate)==null||e.call(c,"change").catch(n=>Ee()))}),te(C,()=>B()),te(()=>a.type,async()=>{await P(),B(),j(),Q()}),_e(()=>{!a.formatter&&a.parser,B(),Q(),P(j)}),Ge(()=>{P(Q)}),v({input:R,textarea:z,ref:F,textareaStyle:de,autosize:Ze(a,"autosize"),focus:he,blur:Oe,select:De,clear:xe,resizeTextarea:j}),(e,n)=>et((u(),x("div",oe(t(i),{class:[e.type==="textarea"?t(le).b():t(s).b(),t(s).m(t(Pe)),t(s).is("disabled",t(k)),t(s).is("exceed",t(Ae)),{[t(s).b("group")]:e.$slots.prepend||e.$slots.append,[t(s).bm("group","append")]:e.$slots.append,[t(s).bm("group","prepend")]:e.$slots.prepend,[t(s).m("prefix")]:e.$slots.prefix||e.prefixIcon,[t(s).m("suffix")]:e.$slots.suffix||e.suffixIcon||e.clearable||e.showPassword,[t(s).bm("suffix","password-clear")]:t(H)&&t(Y)},e.$attrs.class],style:t(Ve),role:e.containerRole,onMouseenter:Re,onMouseleave:Le}),[p(" input "),e.type!=="textarea"?(u(),x(ae,{key:0},[p(" prepend slot "),e.$slots.prepend?(u(),x("div",{key:0,class:h(t(s).be("group","prepend"))},[W(e.$slots,"prepend")],2)):p("v-if",!0),N("div",{class:h([t(s).e("wrapper"),t(s).is("focus",A.value)])},[p(" prefix slot "),e.$slots.prefix||e.prefixIcon?(u(),x("span",{key:0,class:h(t(s).e("prefix"))},[N("span",{class:h(t(s).e("prefix-inner"))},[W(e.$slots,"prefix"),e.prefixIcon?(u(),w(t(L),{key:0,class:h(t(s).e("icon"))},{default:O(()=>[(u(),w(K(e.prefixIcon)))]),_:1},8,["class"])):p("v-if",!0)],2)],2)):p("v-if",!0),N("input",oe({id:t(ne),ref_key:"input",ref:R,class:t(s).e("inner")},t(y),{type:e.showPassword?D.value?"text":"password":e.type,disabled:t(k),formatter:e.formatter,parser:e.parser,readonly:e.readonly,autocomplete:e.autocomplete,tabindex:e.tabindex,"aria-label":e.label,placeholder:e.placeholder,style:e.inputStyle,onCompositionstart:fe,onCompositionupdate:ve,onCompositionend:me,onInput:_,onFocus:ye,onBlur:be,onChange:pe,onKeydown:ge}),null,16,Et),p(" suffix slot "),t(Te)?(u(),x("span",{key:1,class:h(t(s).e("suffix"))},[N("span",{class:h(t(s).e("suffix-inner"))},[!t(H)||!t(Y)||!t($)?(u(),x(ae,{key:0},[W(e.$slots,"suffix"),e.suffixIcon?(u(),w(t(L),{key:0,class:h(t(s).e("icon"))},{default:O(()=>[(u(),w(K(e.suffixIcon)))]),_:1},8,["class"])):p("v-if",!0)],64)):p("v-if",!0),t(H)?(u(),w(t(L),{key:1,class:h([t(s).e("icon"),t(s).e("clear")]),onMousedown:st(t(nt),["prevent"]),onClick:xe},{default:O(()=>[at(t(ot))]),_:1},8,["class","onMousedown"])):p("v-if",!0),t(Y)?(u(),w(t(L),{key:2,class:h([t(s).e("icon"),t(s).e("password")]),onClick:Be},{default:O(()=>[(u(),w(K(t(Ne))))]),_:1},8,["class"])):p("v-if",!0),t($)?(u(),x("span",{key:3,class:h(t(s).e("count"))},[N("span",{class:h(t(s).e("count-inner"))},q(t(J))+" / "+q(t(y).maxlength),3)],2)):p("v-if",!0),t(M)&&t(ue)&&t(ie)?(u(),w(t(L),{key:4,class:h([t(s).e("icon"),t(s).e("validateIcon"),t(s).is("loading",t(M)==="validating")])},{default:O(()=>[(u(),w(K(t(ue))))]),_:1},8,["class"])):p("v-if",!0)],2)],2)):p("v-if",!0)],2),p(" append slot "),e.$slots.append?(u(),x("div",{key:1,class:h(t(s).be("group","append"))},[W(e.$slots,"append")],2)):p("v-if",!0)],64)):(u(),x(ae,{key:1},[p(" textarea "),N("textarea",oe({id:t(ne),ref_key:"textarea",ref:z,class:t(le).e("inner")},t(y),{tabindex:e.tabindex,disabled:t(k),readonly:e.readonly,autocomplete:e.autocomplete,style:t(de),"aria-label":e.label,placeholder:e.placeholder,onCompositionstart:fe,onCompositionupdate:ve,onCompositionend:me,onInput:_,onFocus:ye,onBlur:be,onChange:pe,onKeydown:ge}),null,16,kt),t($)?(u(),x("span",{key:0,style:lt(re.value),class:h(t(s).e("count"))},q(t(J))+" / "+q(t(y).maxlength),7)):p("v-if",!0)],64))],16,It)),[[tt,e.type!=="hidden"]])}});var Pt=rt($t,[["__file","/home/runner/work/element-plus/element-plus/packages/components/input/src/input.vue"]]);const At=dt(Pt);export{At as E};
