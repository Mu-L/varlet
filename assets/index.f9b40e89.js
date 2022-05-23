import{R as O}from"./index.724ce894.js";import{I as A}from"./index.a5003ade.js";import{B as J}from"./index.29b5ff5e.js";import{d as K,a as t,b as M,w as Y,_ as Z,s as H,ab as q,j as G,f as n,h as s,l as I,J as u,H as o,k as d,K as m,n as Q,N,t as R,P as X,ac as _}from"./elevation.f115f7e1.js";import{t as h,h as x}from"./elements.27240eb2.js";import{c as ee,a as te}from"./components.5cbda08a.js";import{u as oe}from"./zIndex.7e8071f2.js";import{u as ae}from"./lock.d25ca9a9.js";function le(e){return["fill","contain","cover","none","scale-down"].includes(e)}const ie={src:{type:String},fit:{type:String,validator:le,default:"cover"},height:{type:[String,Number]},imageHeight:{type:[String,Number]},imageWidth:{type:[String,Number]},layout:{type:String,default:"column"},floating:{type:Boolean,default:!1},"onUpdate:floating":{type:Function},floatingDuration:{type:Number,default:250},alt:{type:String},title:{type:String},subtitle:{type:String},description:{type:String},elevation:{type:[Number,String]},ripple:{type:Boolean,default:!1},onClick:{type:Function}};const{n:ne,classes:se}=ee("card"),re=500,ue=K({name:"VarCard",directives:{Ripple:O},components:{VarIcon:A,VarButton:J},props:ie,setup(e){const g=t(null),F=t(null),v=t("auto"),f=t("auto"),p=t("100%"),r=t("100%"),a=t("auto"),l=t("auto"),i=t(void 0),y=t("hidden"),w=t("0px"),b=t("0"),{zIndex:V}=oe(()=>e.floating,1),$=M(()=>e.layout==="row"),k=t(!1),S=t(!1);ae(()=>e.floating,()=>$);let C="auto",D="auto",z=null;const c=t(null),L=async()=>{clearTimeout(c.value),clearTimeout(z),c.value=null,c.value=setTimeout(async()=>{const{width:B,height:U,left:E,top:j}=g.value.getBoundingClientRect();v.value=h(B),f.value=h(U),p.value=v.value,r.value=f.value,a.value=h(j),l.value=h(E),i.value="fixed",C=a.value,D=l.value,k.value=!0,await x(),a.value="0",l.value="0",p.value="100vw",r.value="100vh",w.value="auto",b.value="1",y.value="auto",S.value=!0},e.ripple?re:0)},W=()=>{clearTimeout(z),clearTimeout(c.value),c.value=null,p.value=v.value,r.value=f.value,a.value=C,l.value=D,w.value="0px",b.value="0",k.value=!1,z=setTimeout(()=>{v.value="auto",f.value="auto",p.value="100%",r.value="100%",a.value="auto",l.value="auto",C="auto",D="auto",y.value="hidden",i.value=void 0,S.value=!1},e.floatingDuration)},P=()=>{te(e["onUpdate:floating"],!1)};return Y(()=>e.floating,B=>{$.value||Q(()=>{B?L():W()})},{immediate:!0}),{n:ne,classes:se,toSizeUnit:h,card:g,cardFloater:F,holderWidth:v,holderHeight:f,floater:c,floaterWidth:p,floaterHeight:r,floaterTop:a,floaterLeft:l,floaterPosition:i,floaterOverflow:y,contentHeight:w,opacity:b,zIndex:V,isRow:$,close:P,showFloatingButtons:k,floated:S}}}),de=["src","alt"];function ve(e,g,F,v,f,p){const r=H("var-icon"),a=H("var-button"),l=q("ripple");return G((n(),s("div",{ref:"card",class:o(e.classes(e.n(),[e.isRow,e.n("--layout-row")],[e.elevation,`var-elevation--${e.elevation}`,"var-elevation--1"])),style:m({zIndex:e.floated?e.zIndex:void 0}),onClick:g[0]||(g[0]=(...i)=>e.onClick&&e.onClick(...i))},[I("div",{ref:"cardFloater",class:o(e.classes(e.n("floater"))),style:m({width:e.floaterWidth,height:e.floaterHeight,top:e.floaterTop,left:e.floaterLeft,overflow:e.floaterOverflow,position:e.floaterPosition,transition:e.floated?`background-color ${e.floatingDuration}ms, width ${e.floatingDuration}ms, height ${e.floatingDuration}ms, top ${e.floatingDuration}ms, left ${e.floatingDuration}ms`:void 0})},[u(e.$slots,"image",{},()=>{var i;return[e.src?(n(),s("img",{key:0,class:o(e.n("image")),style:m({objectFit:e.fit,height:e.toSizeUnit((i=e.imageHeight)!=null?i:e.height),width:e.toSizeUnit(e.imageWidth)}),src:e.src,alt:e.alt},null,14,de)):d("v-if",!0)]}),I("div",{class:o(e.n("container"))},[u(e.$slots,"title",{},()=>[e.title?(n(),s("div",{key:0,class:o(e.n("title"))},N(e.title),3)):d("v-if",!0)]),u(e.$slots,"subtitle",{},()=>[e.subtitle?(n(),s("div",{key:0,class:o(e.n("subtitle"))},N(e.subtitle),3)):d("v-if",!0)]),u(e.$slots,"description",{},()=>[e.description?(n(),s("div",{key:0,class:o(e.n("description"))},N(e.description),3)):d("v-if",!0)]),e.$slots.extra?(n(),s("div",{key:0,class:o(e.n("footer"))},[u(e.$slots,"extra")],2)):d("v-if",!0),e.$slots.content&&!e.isRow?(n(),s("div",{key:1,class:o(e.n("content")),style:m({height:e.contentHeight,opacity:e.opacity,transition:`opacity ${e.floatingDuration*2}ms`})},[u(e.$slots,"content")],6)):d("v-if",!0)],2),e.showFloatingButtons?(n(),s("div",{key:0,class:o(e.classes(e.n("floating-buttons"),"var--box")),style:m({zIndex:e.zIndex,opacity:e.opacity,transition:`opacity ${e.floatingDuration*2}ms`})},[u(e.$slots,"close-button",{},()=>[R(a,{size:"large",round:"",class:o(e.classes(e.n("close-button"),"var-elevation--6")),onClick:_(e.close,["stop"])},{default:X(()=>[R(r,{name:"window-close"})]),_:1},8,["class","onClick"])])],6)):d("v-if",!0)],6),I("div",{class:o(e.n("holder")),style:m({width:e.holderWidth,height:e.holderHeight})},null,6)],6)),[[l,{disabled:!e.ripple||e.floater}]])}var T=Z(ue,[["render",ve]]);T.install=function(e){e.component(T.name,T)};export{T as C};