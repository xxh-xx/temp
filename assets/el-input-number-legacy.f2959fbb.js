System.register(["./index-legacy.c47048fb.js","./el-input-legacy.e00e11c8.js","./el-col-legacy.d9b1b0c0.js"],(function(e,r){"use strict";var n,l,t,i,u,a,o,s,p,d,c,b,m,v,h,g,_,f,x,y,N,w,V,I,k,S,E,A,F,z,K,T,B,M,j,C,O,$,L,P,G,Y,q=document.createElement("style");return q.innerHTML=".el-input-number{position:relative;display:inline-block;width:150px;line-height:30px}.el-input-number .el-input__wrapper{padding-left:42px;padding-right:42px}.el-input-number .el-input__inner{-webkit-appearance:none;-moz-appearance:textfield;text-align:center;line-height:1}.el-input-number .el-input__inner::-webkit-inner-spin-button,.el-input-number .el-input__inner::-webkit-outer-spin-button{margin:0;-webkit-appearance:none}.el-input-number__decrease,.el-input-number__increase{display:flex;justify-content:center;align-items:center;height:auto;position:absolute;z-index:1;top:1px;bottom:1px;width:32px;background:var(--el-fill-color-light);color:var(--el-text-color-regular);cursor:pointer;font-size:13px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.el-input-number__decrease:hover,.el-input-number__increase:hover{color:var(--el-color-primary)}.el-input-number__decrease:hover~.el-input:not(.is-disabled) .el-input_wrapper,.el-input-number__increase:hover~.el-input:not(.is-disabled) .el-input_wrapper{box-shadow:0 0 0 1px var(--el-input-focus-border-color,var(--el-color-primary)) inset}.el-input-number__decrease.is-disabled,.el-input-number__increase.is-disabled{color:var(--el-disabled-text-color);cursor:not-allowed}.el-input-number__increase{right:1px;border-radius:0 var(--el-border-radius-base) var(--el-border-radius-base) 0;border-left:var(--el-border)}.el-input-number__decrease{left:1px;border-radius:var(--el-border-radius-base) 0 0 var(--el-border-radius-base);border-right:var(--el-border)}.el-input-number.is-disabled .el-input-number__decrease,.el-input-number.is-disabled .el-input-number__increase{border-color:var(--el-disabled-border-color);color:var(--el-disabled-border-color)}.el-input-number.is-disabled .el-input-number__decrease:hover,.el-input-number.is-disabled .el-input-number__increase:hover{color:var(--el-disabled-border-color);cursor:not-allowed}.el-input-number--large{width:180px;line-height:38px}.el-input-number--large .el-input-number__decrease,.el-input-number--large .el-input-number__increase{width:40px;font-size:14px}.el-input-number--large .el-input__wrapper{padding-left:47px;padding-right:47px}.el-input-number--small{width:120px;line-height:22px}.el-input-number--small .el-input-number__decrease,.el-input-number--small .el-input-number__increase{width:24px;font-size:12px}.el-input-number--small .el-input__wrapper{padding-left:31px;padding-right:31px}.el-input-number--small .el-input-number__decrease [class*=el-icon],.el-input-number--small .el-input-number__increase [class*=el-icon]{transform:scale(.9)}.el-input-number.is-without-controls .el-input__wrapper{padding-left:15px;padding-right:15px}.el-input-number.is-controls-right .el-input__wrapper{padding-left:15px;padding-right:42px}.el-input-number.is-controls-right .el-input-number__decrease,.el-input-number.is-controls-right .el-input-number__increase{--el-input-number-controls-height:15px;height:var(--el-input-number-controls-height);line-height:var(--el-input-number-controls-height)}.el-input-number.is-controls-right .el-input-number__decrease [class*=el-icon],.el-input-number.is-controls-right .el-input-number__increase [class*=el-icon]{transform:scale(.8)}.el-input-number.is-controls-right .el-input-number__increase{bottom:auto;left:auto;border-radius:0 var(--el-border-radius-base) 0 0;border-bottom:var(--el-border)}.el-input-number.is-controls-right .el-input-number__decrease{right:1px;top:auto;left:auto;border-right:none;border-left:var(--el-border);border-radius:0 0 var(--el-border-radius-base) 0}.el-input-number.is-controls-right[class*=large] [class*=decrease],.el-input-number.is-controls-right[class*=large] [class*=increase]{--el-input-number-controls-height:19px}.el-input-number.is-controls-right[class*=small] [class*=decrease],.el-input-number.is-controls-right[class*=small] [class*=increase]{--el-input-number-controls-height:11px}\n",document.head.appendChild(q),{setters:[e=>{n=e.a$,l=e.g,t=e.ac,i=e.aX,u=e.b0,a=e.b1,o=e.aW,s=e.d,p=e.ah,d=e.h,c=e.A,b=e.G,m=e.t,v=e.aN,h=e.K,g=e.J,_=e.b2,f=e.o,x=e.c,y=e.au,N=e.u,w=e.n,V=e.aZ,I=e.b,k=e.w,S=e.j,E=e.b3,A=e.b4,F=e.E,z=e.k,K=e.b5,T=e.b6,B=e.am,M=e.m,j=e.aC,C=e.b7,O=e.q},e=>{$=e.E},e=>{L=e.u,P=e.b,G=e.c,Y=e.a}],execute:function(){const r=100,q=600,D={beforeMount(e,l){const t=l.value,{interval:i=r,delay:u=q}=n(t)?{}:t;let a,o;const s=()=>n(t)?t():t.handler(),p=()=>{o&&(clearTimeout(o),o=void 0),a&&(clearInterval(a),a=void 0)};e.addEventListener("mousedown",(e=>{0===e.button&&(p(),s(),document.addEventListener("mouseup",(()=>p()),{once:!0}),o=setTimeout((()=>{a=setInterval((()=>{s()}),i)}),u))}))}},H=l({id:{type:String,default:void 0},step:{type:Number,default:1},stepStrictly:Boolean,max:{type:Number,default:Number.POSITIVE_INFINITY},min:{type:Number,default:Number.NEGATIVE_INFINITY},modelValue:Number,readonly:Boolean,disabled:Boolean,size:L,controls:{type:Boolean,default:!0},controlsPosition:{type:String,default:"",values:["","right"]},valueOnClear:{type:[String,Number,null],validator:e=>null===e||t(e)||["min","max"].includes(e),default:null},name:String,label:String,placeholder:String,precision:{type:Number,validator:e=>e>=0&&e===Number.parseInt(`${e}`,10)},validateEvent:{type:Boolean,default:!0}}),J={[i]:(e,r)=>e!==r,blur:e=>e instanceof FocusEvent,focus:e=>e instanceof FocusEvent,[u]:e=>t(e)||a(e),[o]:e=>t(e)||a(e)},W=["aria-label","onKeydown"],X=["aria-label","onKeydown"],Z=s({name:"ElInputNumber"}),Q=s({...Z,props:H,emits:J,setup(e,{expose:r,emit:n}){const l=e,{t:s}=p(),M=d("input-number"),O=c(),L=b({currentValue:l.modelValue,userInput:null}),{formItem:q}=P(),H=m((()=>t(l.modelValue)&&le(l.modelValue,-1)<l.min)),J=m((()=>t(l.modelValue)&&le(l.modelValue)>l.max)),Z=m((()=>{const e=ne(l.step);return v(l.precision)?Math.max(ne(l.modelValue),e):(l.precision,l.precision)})),Q=m((()=>l.controls&&"right"===l.controlsPosition)),R=G(),U=Y(),ee=m((()=>{if(null!==L.userInput)return L.userInput;let e=L.currentValue;if(a(e))return"";if(t(e)){if(Number.isNaN(e))return"";v(l.precision)||(e=e.toFixed(l.precision))}return e})),re=(e,r)=>{if(v(r)&&(r=Z.value),0===r)return Math.round(e);let n=String(e);const l=n.indexOf(".");if(-1===l)return e;if(!n.replace(".","").split("")[l+r])return e;const t=n.length;return"5"===n.charAt(t-1)&&(n=`${n.slice(0,Math.max(0,t-1))}6`),Number.parseFloat(Number(n).toFixed(r))},ne=e=>{if(a(e))return 0;const r=e.toString(),n=r.indexOf(".");let l=0;return-1!==n&&(l=r.length-n-1),l},le=(e,r=1)=>t(e)?re(e+l.step*r):L.currentValue,te=()=>{if(l.readonly||U.value||J.value)return;const e=l.modelValue||0,r=le(e);ae(r),n(u,L.currentValue)},ie=()=>{if(l.readonly||U.value||H.value)return;const e=l.modelValue||0,r=le(e,-1);ae(r),n(u,L.currentValue)},ue=(e,r)=>{const{max:t,min:i,step:u,precision:s,stepStrictly:p,valueOnClear:d}=l;let c=Number(e);if(a(e)||Number.isNaN(c))return null;if(""===e){if(null===d)return null;c=j(d)?{min:i,max:t}[d]:d}return p&&(c=re(Math.round(c/u)*u,s)),v(s)||(c=re(c,s)),(c>t||c<i)&&(c=c>t?t:i,r&&n(o,c)),c},ae=e=>{var r;const t=L.currentValue,u=ue(e);t!==u&&(L.userInput=null,n(o,u),n(i,u,t),l.validateEvent&&(null==(r=null==q?void 0:q.validate)||r.call(q,"change").catch((e=>C()))),L.currentValue=u)},oe=e=>{L.userInput=e,n(u,""===e?null:Number(e))},se=e=>{const r=""!==e?Number(e):"";(t(r)&&!Number.isNaN(r)||""===e)&&ae(r),L.userInput=null},pe=e=>{n("focus",e)},de=e=>{var r;n("blur",e),l.validateEvent&&(null==(r=null==q?void 0:q.validate)||r.call(q,"blur").catch((e=>C())))};return h((()=>l.modelValue),(e=>{L.currentValue=ue(e,!0),L.userInput=null}),{immediate:!0}),g((()=>{var e;const{min:r,max:i,modelValue:u}=l,a=null==(e=O.value)?void 0:e.input;if(a.setAttribute("role","spinbutton"),Number.isFinite(i)?a.setAttribute("aria-valuemax",String(i)):a.removeAttribute("aria-valuemax"),Number.isFinite(r)?a.setAttribute("aria-valuemin",String(r)):a.removeAttribute("aria-valuemin"),a.setAttribute("aria-valuenow",String(L.currentValue)),a.setAttribute("aria-disabled",String(U.value)),!t(u)&&null!=u){let e=Number(u);Number.isNaN(e)&&(e=null),n(o,e)}})),_((()=>{var e;const r=null==(e=O.value)?void 0:e.input;null==r||r.setAttribute("aria-valuenow",`${L.currentValue}`)})),r({focus:()=>{var e,r;null==(r=null==(e=O.value)?void 0:e.focus)||r.call(e)},blur:()=>{var e,r;null==(r=null==(e=O.value)?void 0:e.blur)||r.call(e)}}),(e,r)=>(f(),x("div",{class:w([N(M).b(),N(M).m(N(R)),N(M).is("disabled",N(U)),N(M).is("without-controls",!e.controls),N(M).is("controls-right",N(Q))]),onDragstart:r[0]||(r[0]=B((()=>{}),["prevent"]))},[e.controls?y((f(),x("span",{key:0,role:"button","aria-label":N(s)("el.inputNumber.decrease"),class:w([N(M).e("decrease"),N(M).is("disabled",N(H))]),onKeydown:V(ie,["enter"])},[I(N(F),null,{default:k((()=>[N(Q)?(f(),S(N(E),{key:0})):(f(),S(N(A),{key:1}))])),_:1})],42,W)),[[N(D),ie]]):z("v-if",!0),e.controls?y((f(),x("span",{key:1,role:"button","aria-label":N(s)("el.inputNumber.increase"),class:w([N(M).e("increase"),N(M).is("disabled",N(J))]),onKeydown:V(te,["enter"])},[I(N(F),null,{default:k((()=>[N(Q)?(f(),S(N(K),{key:0})):(f(),S(N(T),{key:1}))])),_:1})],42,X)),[[N(D),te]]):z("v-if",!0),I(N($),{id:e.id,ref_key:"input",ref:O,type:"number",step:e.step,"model-value":N(ee),placeholder:e.placeholder,readonly:e.readonly,disabled:N(U),size:N(R),max:e.max,min:e.min,name:e.name,label:e.label,"validate-event":!1,onKeydown:[V(B(te,["prevent"]),["up"]),V(B(ie,["prevent"]),["down"])],onBlur:de,onFocus:pe,onInput:oe,onChange:se},null,8,["id","step","model-value","placeholder","readonly","disabled","size","max","min","name","label","onKeydown"])],34))}});e("E",O(M(Q,[["__file","/home/runner/work/element-plus/element-plus/packages/components/input-number/src/input-number.vue"]])))}}}));
