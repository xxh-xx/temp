System.register(["./index-legacy.3dc507af.js","./el-link-legacy.743cdd3d.js","./el-collapse-item-legacy.734971af.js","./el-input-number-legacy.971b539d.js","./el-input-legacy.8fa326e0.js","./el-button-legacy.701d1759.js","./el-col-legacy.a1ce0b55.js","./ProductList-legacy.b7d68912.js","./index-legacy.6375aa18.js","./forEach-legacy.d5d02138.js","./_arrayEach-legacy.c1978a34.js"],(function(e,t){"use strict";var l,a,o,i,r,n,s,c,d,u,p,v,f,m,g,_,b,h,y,x,w,k,I,z,M,C,S,E,$,N,T,j,P,B,D,A,O,W,H,V,Y,L,R,U,J,K,Q,q,F,G,X,Z,ee,te,le,ae,oe,ie,re,ne,se,ce,de,ue,pe,ve,fe,me,ge,_e,be,he,ye,xe=document.createElement("style");return xe.innerHTML=".el-descriptions{--el-descriptions-table-border:1px solid var(--el-border-color-lighter);--el-descriptions-item-bordered-label-background:var(--el-fill-color-light);box-sizing:border-box;font-size:var(--el-font-size-base);color:var(--el-text-color-primary)}.el-descriptions__header{display:flex;justify-content:space-between;align-items:center;margin-bottom:16px}.el-descriptions__title{color:var(--el-text-color-primary);font-size:16px;font-weight:700}.el-descriptions__body{background-color:var(--el-fill-color-blank)}.el-descriptions__body .el-descriptions__table{border-collapse:collapse;width:100%}.el-descriptions__body .el-descriptions__table .el-descriptions__cell{box-sizing:border-box;text-align:left;font-weight:400;line-height:23px;font-size:14px}.el-descriptions__body .el-descriptions__table .el-descriptions__cell.is-left{text-align:left}.el-descriptions__body .el-descriptions__table .el-descriptions__cell.is-center{text-align:center}.el-descriptions__body .el-descriptions__table .el-descriptions__cell.is-right{text-align:right}.el-descriptions__body .el-descriptions__table.is-bordered .el-descriptions__cell{border:var(--el-descriptions-table-border);padding:8px 11px}.el-descriptions__body .el-descriptions__table:not(.is-bordered) .el-descriptions__cell{padding-bottom:12px}.el-descriptions--large{font-size:14px}.el-descriptions--large .el-descriptions__header{margin-bottom:20px}.el-descriptions--large .el-descriptions__header .el-descriptions__title{font-size:16px}.el-descriptions--large .el-descriptions__body .el-descriptions__table .el-descriptions__cell{font-size:14px}.el-descriptions--large .el-descriptions__body .el-descriptions__table.is-bordered .el-descriptions__cell{padding:12px 15px}.el-descriptions--large .el-descriptions__body .el-descriptions__table:not(.is-bordered) .el-descriptions__cell{padding-bottom:16px}.el-descriptions--small{font-size:12px}.el-descriptions--small .el-descriptions__header{margin-bottom:12px}.el-descriptions--small .el-descriptions__header .el-descriptions__title{font-size:14px}.el-descriptions--small .el-descriptions__body .el-descriptions__table .el-descriptions__cell{font-size:12px}.el-descriptions--small .el-descriptions__body .el-descriptions__table.is-bordered .el-descriptions__cell{padding:4px 7px}.el-descriptions--small .el-descriptions__body .el-descriptions__table:not(.is-bordered) .el-descriptions__cell{padding-bottom:8px}.el-descriptions__label.el-descriptions__cell.is-bordered-label{font-weight:700;color:var(--el-text-color-regular);background:var(--el-descriptions-item-bordered-label-background)}.el-descriptions__label:not(.is-bordered-label){color:var(--el-text-color-primary);margin-right:16px}.el-descriptions__label.el-descriptions__cell:not(.is-bordered-label).is-vertical-label{padding-bottom:6px}.el-descriptions__content.el-descriptions__cell.is-bordered-content{color:var(--el-text-color-primary)}.el-descriptions__content:not(.is-bordered-label){color:var(--el-text-color-regular)}.el-descriptions--large .el-descriptions__label:not(.is-bordered-label){margin-right:16px}.el-descriptions--large .el-descriptions__label.el-descriptions__cell:not(.is-bordered-label).is-vertical-label{padding-bottom:8px}.el-descriptions--small .el-descriptions__label:not(.is-bordered-label){margin-right:12px}.el-descriptions--small .el-descriptions__label.el-descriptions__cell:not(.is-bordered-label).is-vertical-label{padding-bottom:4px}.el-carousel{--el-carousel-arrow-font-size:12px;--el-carousel-arrow-size:36px;--el-carousel-arrow-background:rgba(31, 45, 61, .11);--el-carousel-arrow-hover-background:rgba(31, 45, 61, .23);--el-carousel-indicator-width:30px;--el-carousel-indicator-height:2px;--el-carousel-indicator-padding-horizontal:4px;--el-carousel-indicator-padding-vertical:12px;--el-carousel-indicator-out-color:var(--el-border-color-hover);position:relative}.el-carousel--horizontal{overflow-x:hidden}.el-carousel--vertical{overflow-y:hidden}.el-carousel__container{position:relative;height:300px}.el-carousel__arrow{border:none;outline:0;padding:0;margin:0;height:var(--el-carousel-arrow-size);width:var(--el-carousel-arrow-size);cursor:pointer;transition:var(--el-transition-duration);border-radius:50%;background-color:var(--el-carousel-arrow-background);color:#fff;position:absolute;top:50%;z-index:10;transform:translateY(-50%);text-align:center;font-size:var(--el-carousel-arrow-font-size);display:inline-flex;justify-content:center;align-items:center}.el-carousel__arrow--left{left:16px}.el-carousel__arrow--right{right:16px}.el-carousel__arrow:hover{background-color:var(--el-carousel-arrow-hover-background)}.el-carousel__arrow i{cursor:pointer}.el-carousel__indicators{position:absolute;list-style:none;margin:0;padding:0;z-index:calc(var(--el-index-normal) + 1)}.el-carousel__indicators--horizontal{bottom:0;left:50%;transform:translate(-50%)}.el-carousel__indicators--vertical{right:0;top:50%;transform:translateY(-50%)}.el-carousel__indicators--outside{bottom:calc(var(--el-carousel-indicator-height) + var(--el-carousel-indicator-padding-vertical) * 2);text-align:center;position:static;transform:none}.el-carousel__indicators--outside .el-carousel__indicator:hover button{opacity:.64}.el-carousel__indicators--outside button{background-color:var(--el-carousel-indicator-out-color);opacity:.24}.el-carousel__indicators--labels{left:0;right:0;transform:none;text-align:center}.el-carousel__indicators--labels .el-carousel__button{height:auto;width:auto;padding:2px 18px;font-size:12px}.el-carousel__indicators--labels .el-carousel__indicator{padding:6px 4px}.el-carousel__indicator{background-color:transparent;cursor:pointer}.el-carousel__indicator:hover button{opacity:.72}.el-carousel__indicator--horizontal{display:inline-block;padding:var(--el-carousel-indicator-padding-vertical) var(--el-carousel-indicator-padding-horizontal)}.el-carousel__indicator--vertical{padding:var(--el-carousel-indicator-padding-horizontal) var(--el-carousel-indicator-padding-vertical)}.el-carousel__indicator--vertical .el-carousel__button{width:var(--el-carousel-indicator-height);height:calc(var(--el-carousel-indicator-width)/ 2)}.el-carousel__indicator.is-active button{opacity:1}.el-carousel__button{display:block;opacity:.48;width:var(--el-carousel-indicator-width);height:var(--el-carousel-indicator-height);background-color:#fff;border:none;outline:0;padding:0;margin:0;cursor:pointer;transition:var(--el-transition-duration)}.carousel-arrow-left-enter-from,.carousel-arrow-left-leave-active{transform:translateY(-50%) translate(-10px);opacity:0}.carousel-arrow-right-enter-from,.carousel-arrow-right-leave-active{transform:translateY(-50%) translate(10px);opacity:0}.el-carousel__item{position:absolute;top:0;left:0;width:100%;height:100%;display:inline-block;overflow:hidden;z-index:calc(var(--el-index-normal) - 1)}.el-carousel__item.is-active{z-index:calc(var(--el-index-normal) - 1)}.el-carousel__item.is-animating{transition:transform .4s ease-in-out}.el-carousel__item--card{width:50%;transition:transform .4s ease-in-out}.el-carousel__item--card.is-in-stage{cursor:pointer;z-index:var(--el-index-normal)}.el-carousel__item--card.is-in-stage.is-hover .el-carousel__mask,.el-carousel__item--card.is-in-stage:hover .el-carousel__mask{opacity:.12}.el-carousel__item--card.is-active{z-index:calc(var(--el-index-normal) + 1)}.el-carousel__mask{position:absolute;width:100%;height:100%;top:0;left:0;background-color:var(--el-color-white);opacity:.24;transition:var(--el-transition-duration-fast)}.productMain[data-v-7f8a43d7]{padding:0px 3vw;overflow:hidden}.productMain .productInfo[data-v-7f8a43d7]{position:relative;display:flex;padding-top:2vw}.productMain .productInfo .thumbnails[data-v-7f8a43d7]{display:flex;flex-direction:column;margin-right:1.5vw}.productMain .productInfo .thumbnails .thumbnail[data-v-7f8a43d7]{margin-bottom:1vw;width:5vw;height:7vw;border-radius:.5vw;cursor:pointer;opacity:.7}.productMain .productInfo .thumbnails .active[data-v-7f8a43d7]{border:2px solid rgb(217,223,232);opacity:1}.productMain .productInfo .productImage[data-v-7f8a43d7]{width:30vw;border-radius:.5vw}.productMain .productInfo .number[data-v-7f8a43d7]{position:absolute;font-size:.9em;margin-top:1vw;left:34vw}.productMain .productInfo .productText[data-v-7f8a43d7]{margin-left:4vw;width:40vw}.productMain .productInfo .productText .price[data-v-7f8a43d7]{font-size:1.2em;font-weight:300}.productMain .productInfo .productText .description[data-v-7f8a43d7]{font-weight:300;line-height:1.5em}.productMain .productInfo .productText .options .optionTitle[data-v-7f8a43d7]{margin-top:2em;margin-bottom:1em}.productMain .productInfo .productText .addBag[data-v-7f8a43d7]{display:flex;margin-top:2em;margin-bottom:4em}.productMain .productInfo .productText .addBag .addButton[data-v-7f8a43d7]{margin-left:1em}.productMain .relatedProducts[data-v-7f8a43d7]{margin:0px 7vw}.productMain .relatedProducts .title[data-v-7f8a43d7]{margin-top:8em;display:flex;justify-content:space-between;margin-bottom:2em}.productMain .relatedProducts .title .left[data-v-7f8a43d7]{color:#374151;font-weight:600;font-size:1.6em}.productMain .relatedProducts .title .right[data-v-7f8a43d7]{color:#89959c;align-self:flex-end}.productMain .relatedProducts .title .right .icon[data-v-7f8a43d7]{margin-left:.2em}@media screen and (max-width: 768px){.productInfo[data-v-7f8a43d7]{flex-direction:column}.productInfo .thumbnails[data-v-7f8a43d7]{display:none!important}.productInfo .productImage[data-v-7f8a43d7]{width:100%!important;height:50vh}.productInfo .number[data-v-7f8a43d7]{display:none}.productInfo .productText[data-v-7f8a43d7]{width:100%!important;margin-left:0!important}.productInfo .productText .title[data-v-7f8a43d7]{font-size:1.5em}.productInfo .productText .price[data-v-7f8a43d7]{font-size:1.2em!important}.productInfo .productText .description[data-v-7f8a43d7]{font-size:.9em}.relatedProducts[data-v-7f8a43d7]{margin:0!important}.relatedProducts .title .left[data-v-7f8a43d7]{font-size:1em!important}}\n",document.head.appendChild(xe),{setters:[e=>{l=e.aI,a=e.ai,o=e.aJ,i=e.aK,r=e.g,n=e.aa,s=e.d,c=e.h,d=e.B,u=e.v,p=e.u,v=e.O,f=e.N,m=e.aL,g=e.aM,_=e.G,b=e.o,h=e.c,y=e.a,x=e.j,w=e.w,k=e.as,I=e.n,z=e.ak,M=e.b,C=e.E,S=e.am,E=e.at,$=e.au,N=e.l,T=e.an,j=e.m,P=e.D,B=e.F,D=e.Q,A=e.V,O=e.q,W=e.aA,H=e.a7,V=e.z,Y=e.H,L=e.aH,R=e.aN,U=e.s,J=e.J,K=e.aO,Q=e.aP,q=e.aQ,F=e.x,G=e.f,X=e.aR,Z=e.aS,ee=e.aT,te=e.aU,le=e.r,ae=e.p,oe=e.e,ie=e._},e=>{re=e.E},e=>{ne=e.E,se=e.a},e=>{ce=e.E},()=>{},e=>{de=e.E},e=>{ue=e.c,pe=e.e,ve=e.E,fe=e.d},e=>{me=e.f,ge=e.P},e=>{_e=e.u,be=e.c},e=>{he=e.c,ye=e.f},()=>{}],execute:function(){const t=he((function(e,t,l){ue(e,l,t)})),xe=Symbol("carouselContextKey"),we=(e,t)=>{const l={},r=a([]);return{children:r,addChild:a=>{l[a.uid]=a,r.value=((e,t,l)=>o(e.subTree).filter((e=>{var l;return i(e)&&(null==(l=e.type)?void 0:l.name)===t&&!!e.component})).map((e=>e.component.uid)).map((e=>l[e])).filter((e=>!!e)))(e,t,l)},removeChild:e=>{delete l[e],r.value=r.value.filter((t=>t.uid!==e))}}},ke=r({initialIndex:{type:Number,default:0},height:{type:String,default:""},trigger:{type:String,values:["hover","click"],default:"hover"},autoplay:{type:Boolean,default:!0},interval:{type:Number,default:3e3},indicatorPosition:{type:String,values:["","none","outside"],default:""},indicator:{type:Boolean,default:!0},arrow:{type:String,values:["always","hover","never"],default:"hover"},type:{type:String,values:["","card"],default:""},loop:{type:Boolean,default:!0},direction:{type:String,values:["horizontal","vertical"],default:"horizontal"},pauseOnHover:{type:Boolean,default:!0}}),Ie={change:(e,t)=>[e,t].every(n)},ze=["onMouseenter","onMouseleave"],Me=["onMouseenter","onClick"],Ce={key:0},Se=s({name:"ElCarousel"}),Ee=s({...Se,props:ke,emits:Ie,setup(e,{expose:t,emit:l}){const o=e,i=c("carousel"),{children:r,addChild:n,removeChild:s}=we(H(),"ElCarouselItem"),O=d(-1),V=d(null),Y=d(!1),L=d(),R=u((()=>"never"!==o.arrow&&!p(q))),U=u((()=>r.value.some((e=>e.props.label.toString().length>0)))),J=u((()=>{const e=[i.b(),i.m(o.direction)];return p(Q)&&e.push(i.m("card")),e})),K=u((()=>{const e=[i.e("indicators"),i.em("indicators",o.direction)];return U.value&&e.push(i.em("indicators","labels")),("outside"===o.indicatorPosition||p(Q))&&e.push(i.em("indicators","outside")),e})),Q=u((()=>"card"===o.type)),q=u((()=>"vertical"===o.direction)),F=pe((e=>{te(e)}),300,{trailing:!0}),G=pe((e=>{!function(e){"hover"===o.trigger&&e!==O.value&&(O.value=e)}(e)}),300);function X(){V.value&&(clearInterval(V.value),V.value=null)}function Z(){o.interval<=0||!o.autoplay||V.value||(V.value=setInterval((()=>ee()),o.interval))}const ee=()=>{O.value<r.value.length-1?O.value=O.value+1:o.loop&&(O.value=0)};function te(e){if(W(e)){const t=r.value.filter((t=>t.props.name===e));t.length>0&&(e=r.value.indexOf(t[0]))}if(e=Number(e),Number.isNaN(e)||e!==Math.floor(e))return;const t=r.value.length,l=O.value;O.value=e<0?o.loop?t-1:0:e>=t?o.loop?0:t-1:e,l===O.value&&le(l),ne()}function le(e){r.value.forEach(((t,l)=>{t.translateItem(l,O.value,e)}))}function ae(){Y.value=!0,o.pauseOnHover&&X()}function oe(){Y.value=!1,Z()}function ie(e){p(q)||r.value.forEach(((t,l)=>{e===function(e,t){var l,a,o,i;const n=p(r),s=n.length;if(0===s||!e.states.inStage)return!1;const c=t+1,d=t-1,u=s-1,v=n[u].states.active,f=n[0].states.active,m=null==(a=null==(l=n[c])?void 0:l.states)?void 0:a.active,g=null==(i=null==(o=n[d])?void 0:o.states)?void 0:i.active;return t===u&&f||m?"left":!!(0===t&&v||g)&&"right"}(t,l)&&(t.states.hover=!0)}))}function re(){p(q)||r.value.forEach((e=>{e.states.hover=!1}))}function ne(){X(),Z()}v((()=>O.value),((e,t)=>{le(t),t>-1&&l("change",e,t)})),v((()=>o.autoplay),(e=>{e?Z():X()})),v((()=>o.loop),(()=>{te(O.value)})),v((()=>o.interval),(()=>{ne()})),v((()=>r.value),(()=>{r.value.length>0&&te(o.initialIndex)}));const se=a();return f((()=>{se.value=m(L.value,(()=>{le()})),Z()})),g((()=>{X(),L.value&&se.value&&se.value.stop()})),_(xe,{root:L,isCardType:Q,isVertical:q,items:r,loop:o.loop,addItem:n,removeItem:s,setActiveItem:te}),t({setActiveItem:te,prev:function(){te(O.value-1)},next:function(){te(O.value+1)}}),(e,t)=>(b(),h("div",{ref_key:"root",ref:L,class:I(p(J)),onMouseenter:z(ae,["stop"]),onMouseleave:z(oe,["stop"])},[y("div",{class:I(p(i).e("container")),style:P({height:e.height})},[p(R)?(b(),x($,{key:0,name:"carousel-arrow-left",persisted:""},{default:w((()=>[k(y("button",{type:"button",class:I([p(i).e("arrow"),p(i).em("arrow","left")]),onMouseenter:t[0]||(t[0]=e=>ie("left")),onMouseleave:re,onClick:t[1]||(t[1]=z((e=>p(F)(O.value-1)),["stop"]))},[M(p(C),null,{default:w((()=>[M(p(S))])),_:1})],34),[[E,("always"===e.arrow||Y.value)&&(o.loop||O.value>0)]])])),_:1})):N("v-if",!0),p(R)?(b(),x($,{key:1,name:"carousel-arrow-right",persisted:""},{default:w((()=>[k(y("button",{type:"button",class:I([p(i).e("arrow"),p(i).em("arrow","right")]),onMouseenter:t[2]||(t[2]=e=>ie("right")),onMouseleave:re,onClick:t[3]||(t[3]=z((e=>p(F)(O.value+1)),["stop"]))},[M(p(C),null,{default:w((()=>[M(p(T))])),_:1})],34),[[E,("always"===e.arrow||Y.value)&&(o.loop||O.value<p(r).length-1)]])])),_:1})):N("v-if",!0),j(e.$slots,"default")],6),"none"!==e.indicatorPosition?(b(),h("ul",{key:0,class:I(p(K))},[(b(!0),h(B,null,D(p(r),((t,l)=>(b(),h("li",{key:l,class:I([p(i).e("indicator"),p(i).em("indicator",e.direction),p(i).is("active",l===O.value)]),onMouseenter:e=>p(G)(l),onClick:z((e=>function(e){O.value=e}(l)),["stop"])},[y("button",{class:I(p(i).e("button"))},[p(U)?(b(),h("span",Ce,A(t.props.label),1)):N("v-if",!0)],2)],42,Me)))),128))],2)):N("v-if",!0)],42,ze))}});var $e=O(Ee,[["__file","/home/runner/work/element-plus/element-plus/packages/components/carousel/src/carousel.vue"]]);const Ne=r({name:{type:String,default:""},label:{type:[String,Number],default:""}}),Te=.83,je=s({name:"ElCarouselItem"}),Pe=s({...je,props:Ne,setup(e){const t=e,l=c("carousel"),a=V(xe),o=H(),i=d(!1),r=d(0),n=d(1),s=d(!1),v=d(!1),m=d(!1),g=d(!1),{isCardType:_,isVertical:y}=a,x=u((()=>({transform:[`${"translate"+(p(y)?"Y":"X")}(${p(r)}px)`,`scale(${p(n)})`].join(" ")}))),w=(e,t,l)=>{var o;const i=p(_),c=null!=(o=a.items.value.length)?o:Number.NaN,d=e===t;i||R(l)||(g.value=d||e===l),!d&&c>2&&a.loop&&(e=function(e,t,l){const a=l-1,o=l/2;return 0===t&&e===a?-1:t===a&&0===e?l:e<t-1&&t-e>=o?l+1:e>t+1&&e-t>=o?-2:e}(e,t,c));const u=p(y);s.value=d,i?(m.value=Math.round(Math.abs(e-t))<=1,r.value=function(e,t){var l;const o=(null==(l=a.root.value)?void 0:l.offsetWidth)||0;return m.value?o*(1.17*(e-t)+1)/4:e<t?-1.83*o/4:3.83*o/4}(e,t),n.value=p(s)?1:Te):r.value=function(e,t,l){const o=a.root.value;return o?((l?o.offsetHeight:o.offsetWidth)||0)*(e-t):0}(e,t,u),v.value=!0};function z(){if(a&&p(_)){const e=a.items.value.findIndex((({uid:e})=>e===o.uid));a.setActiveItem(e)}}return f((()=>{a.addItem({props:t,states:Y({hover:i,translate:r,scale:n,active:s,ready:v,inStage:m,animating:g}),uid:o.uid,translateItem:w})})),L((()=>{a.removeItem(o.uid)})),(e,t)=>k((b(),h("div",{class:I([p(l).e("item"),p(l).is("active",s.value),p(l).is("in-stage",m.value),p(l).is("hover",i.value),p(l).is("animating",g.value),{[p(l).em("item","card")]:p(_)}]),style:P(p(x)),onClick:z},[p(_)?k((b(),h("div",{key:0,class:I(p(l).e("mask"))},null,2)),[[E,!s.value]]):N("v-if",!0),j(e.$slots,"default")],6)),[[E,v.value]])}});var Be=O(Pe,[["__file","/home/runner/work/element-plus/element-plus/packages/components/carousel/src/carousel-item.vue"]]);const De=U($e,{CarouselItem:Be}),Ae=J(Be),Oe="elDescriptions";var We=s({name:"ElDescriptionsCell",props:{cell:{type:Object},tag:{type:String},type:{type:String}},setup:()=>({descriptions:V(Oe,{})}),render(){var e,t,l,a,o,i;const r=K(this.cell),{border:n,direction:s}=this.descriptions,d="vertical"===s,u=(null==(l=null==(t=null==(e=this.cell)?void 0:e.children)?void 0:t.label)?void 0:l.call(t))||r.label,p=null==(i=null==(o=null==(a=this.cell)?void 0:a.children)?void 0:o.default)?void 0:i.call(o),v=r.span,f=r.align?`is-${r.align}`:"",m=r.labelAlign?`is-${r.labelAlign}`:f,g=r.className,_=r.labelClassName,b={width:Q(r.width),minWidth:Q(r.minWidth)},h=c("descriptions");switch(this.type){case"label":return q(this.tag,{style:b,class:[h.e("cell"),h.e("label"),h.is("bordered-label",n),h.is("vertical-label",d),m,_],colSpan:d?v:1},u);case"content":return q(this.tag,{style:b,class:[h.e("cell"),h.e("content"),h.is("bordered-content",n),h.is("vertical-content",d),f,g],colSpan:d?v:2*v-1},p);default:return q("td",{style:b,class:[h.e("cell"),f],colSpan:v},[q("span",{class:[h.e("label"),_]},u),q("span",{class:[h.e("content"),g]},p)])}}});const He=r({row:{type:Array,default:()=>[]}}),Ve={key:1},Ye=s({name:"ElDescriptionsRow"}),Le=s({...Ye,props:He,setup(e){const t=V(Oe,{});return(e,l)=>"vertical"===p(t).direction?(b(),h(B,{key:0},[y("tr",null,[(b(!0),h(B,null,D(e.row,((e,t)=>(b(),x(p(We),{key:`tr1-${t}`,cell:e,tag:"th",type:"label"},null,8,["cell"])))),128))]),y("tr",null,[(b(!0),h(B,null,D(e.row,((e,t)=>(b(),x(p(We),{key:`tr2-${t}`,cell:e,tag:"td",type:"content"},null,8,["cell"])))),128))])],64)):(b(),h("tr",Ve,[(b(!0),h(B,null,D(e.row,((e,l)=>(b(),h(B,{key:`tr3-${l}`},[p(t).border?(b(),h(B,{key:0},[M(p(We),{cell:e,tag:"td",type:"label"},null,8,["cell"]),M(p(We),{cell:e,tag:"td",type:"content"},null,8,["cell"])],64)):(b(),x(p(We),{key:1,cell:e,tag:"td",type:"both"},null,8,["cell"]))],64)))),128))]))}});var Re=O(Le,[["__file","/home/runner/work/element-plus/element-plus/packages/components/descriptions/src/descriptions-row.vue"]]);const Ue=r({border:{type:Boolean,default:!1},column:{type:Number,default:3},direction:{type:String,values:["horizontal","vertical"],default:"horizontal"},size:_e,title:{type:String,default:""},extra:{type:String,default:""}}),Je=s({name:"ElDescriptions"}),Ke=s({...Je,props:Ue,setup(e){const t=e,l=c("descriptions"),a=be(),i=F();_(Oe,t);const r=u((()=>[l.b(),l.m(a.value)])),n=(e,t,l,a=!1)=>(e.props||(e.props={}),t>l&&(e.props.span=l),a&&(e.props.span=t),e),s=()=>{var e;const l=o(null==(e=i.default)?void 0:e.call(i)).filter((e=>{var t;return"ElDescriptionsItem"===(null==(t=null==e?void 0:e.type)?void 0:t.name)})),a=[];let r=[],s=t.column,c=0;return l.forEach(((e,o)=>{var i;const d=(null==(i=e.props)?void 0:i.span)||1;if(o<l.length-1&&(c+=d>s?s:d),o===l.length-1){const l=t.column-c%t.column;return r.push(n(e,l,s,!0)),void a.push(r)}d<s?(s-=d,r.push(e)):(r.push(n(e,d,s)),a.push(r),s=t.column,r=[])})),a};return(e,t)=>(b(),h("div",{class:I(p(r))},[e.title||e.extra||e.$slots.title||e.$slots.extra?(b(),h("div",{key:0,class:I(p(l).e("header"))},[y("div",{class:I(p(l).e("title"))},[j(e.$slots,"title",{},(()=>[G(A(e.title),1)]))],2),y("div",{class:I(p(l).e("extra"))},[j(e.$slots,"extra",{},(()=>[G(A(e.extra),1)]))],2)],2)):N("v-if",!0),y("div",{class:I(p(l).e("body"))},[y("table",{class:I([p(l).e("table"),p(l).is("bordered",e.border)])},[y("tbody",null,[(b(!0),h(B,null,D(s(),((e,t)=>(b(),x(Re,{key:t,row:e},null,8,["row"])))),128))])],2)],2)],2))}});var Qe=O(Ke,[["__file","/home/runner/work/element-plus/element-plus/packages/components/descriptions/src/description.vue"]]),qe=s({name:"ElDescriptionsItem",props:{label:{type:String,default:""},span:{type:Number,default:1},width:{type:[String,Number],default:""},minWidth:{type:[String,Number],default:""},align:{type:String,default:"left"},labelAlign:{type:String,default:""},className:{type:String,default:""},labelClassName:{type:String,default:""}}});const Fe=U(Qe,{DescriptionsItem:qe}),Ge=J(qe),Xe=e=>(ae("data-v-7f8a43d7"),e=e(),oe(),e),Ze={class:"productMain"},et={class:"productInfo"},tt={class:"thumbnails"},lt={class:"number"},at={class:"productText"},ot={class:"title"},it={class:"price"},rt={class:"description"},nt={class:"optionTitle"},st={class:"addBag"},ct={class:"relatedProducts"},dt={class:"title"},ut=Xe((()=>y("div",{class:"left"},"You might also like",-1))),pt={class:"right"},vt=Xe((()=>y("svg",{class:"icon","aria-hidden":"true"},[y("use",{"xlink:href":"#icon-Rightarrow"})],-1)));e("default",ie(s({__name:"ProductMain",props:{id:null},setup(e){const a=e,o=d({title:"",profile_id:"",images:[{url:""}],options:[{title:"",product_id:""}]}),i=d(0),r=d([]),n=d(1),s=d(""),c=d([]),u=d(!0),p=d(!1),f=()=>{X("/store/products",a.id).then((e=>{o.value=e.product;const t=(e=>{const t=me(e,(e=>"usd"===e.currency_code));return t?fe(t.amount,100):0})(o.value.variants[0].prices),a=l("usd").toUpperCase();s.value=`${t} ${a}`,document.title=o.value.title}))};f(),v(a,(()=>{f()}));const m=()=>{if(o.value.options.length===c.value.length){let e="";ye(c.value,(t=>{e=""===e?t:`${e} / ${t}`}));const t=me(o.value.variants,(t=>t.title===e))?.id,l=Z();p.value=!0,ee(te.get("cart_id"),t,n.value).then((e=>{l.cart=e.cart,p.value=!1}))}};window.innerWidth<=768&&(u.value=!1);const g=()=>{le.push("/products")};return(e,l)=>{const a=ve,d=Ae,p=De,v=de,f=ce,_=Ge,k=Fe,z=ne,C=se,S=re;return b(),h("div",Ze,[y("div",et,[y("div",tt,[(b(!0),h(B,null,D(o.value.images,((e,t)=>(b(),x(a,{class:I(["thumbnail",i.value===t?"active":""]),key:e.id,src:e.url,onClick:e=>(e=>{i.value=e})(t)},null,8,["class","src","onClick"])))),128))]),u.value?(b(),x(a,{key:0,class:"productImage",src:o.value.images[i.value].url},null,8,["src"])):N("",!0),M(p,{height:"50vh",autoplay:!1,arrow:"always"},{default:w((()=>[(b(!0),h(B,null,D(o.value.images,(e=>(b(),x(d,{key:e.id},{default:w((()=>[M(a,{class:"productImage",src:e.url},null,8,["src"])])),_:2},1024)))),128))])),_:1}),y("span",lt,A(`${i.value+1} / ${o.value.images.length}`),1),y("div",at,[y("h1",ot,A(o.value.title),1),y("p",it,A(s.value),1),y("p",rt,A(o.value.description),1),(b(!0),h(B,null,D(o.value.options,((e,l)=>{return b(),h("div",{class:"options",key:e.id},[y("div",nt,A(`Select ${e.title}`),1),(b(!0),h(B,null,D((a=e.values,Object.keys(t(a,"value"))),((e,t)=>(b(),x(v,{key:t,size:"large",color:"#89959C",plain:r.value[l]!==t,onClick:a=>((e,t,l)=>{r.value[e]=t,c.value[e]=l})(l,t,e)},{default:w((()=>[G(A(e),1)])),_:2},1032,["plain","onClick"])))),128))]);var a})),128)),y("div",st,[M(f,{style:{"line-height":"0px"},modelValue:n.value,"onUpdate:modelValue":l[0]||(l[0]=e=>n.value=e),min:1,"value-on-clear":"min",size:"large"},null,8,["modelValue"]),M(v,{class:"addButton",size:"large",color:"#89959C",onClick:m},{default:w((()=>[G(" Add to bag ")])),_:1})]),M(C,{class:"detailsCollapse"},{default:w((()=>[M(z,{class:"detailsItem",title:"Details",name:"1"},{default:w((()=>[M(k,{border:!0,column:2},{default:w((()=>[M(_,{label:"Material"},{default:w((()=>[G(A(o.value.material?o.value.material:"-"),1)])),_:1}),M(_,{label:"Weight"},{default:w((()=>[G(A(o.value.weight?o.value.weight+" g":"-"),1)])),_:1}),M(_,{label:"Country of origin"},{default:w((()=>[G(A(o.value.origin_country?o.value.origin_country:"-"),1)])),_:1}),M(_,{label:"Dimensions"},{default:w((()=>[G(" - ")])),_:1}),M(_,{label:"Type"},{default:w((()=>[G(A(o.value.type?o.value.type:"-"),1)])),_:1})])),_:1})])),_:1})])),_:1})])]),y("div",ct,[y("div",dt,[ut,y("div",pt,[M(S,{type:"info",underline:!1,onClick:g},{default:w((()=>[G(" Browse all products "),vt])),_:1})])]),M(ge,{limit:4,"is-replace":!0})])])}}}),[["__scopeId","data-v-7f8a43d7"]]))}}}));
