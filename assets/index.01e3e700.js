import{c as N}from"./components.b90dca2f.js";import{d as z,a as g,o as E,al as P,_ as w,f as r,h as m,M as k,O as v,N as f,R as F,j as _,P as s,Q as n,ae as U,aA as V,q as o,S as a,an as t,F as T,aB as c,ak as M,D as I,i as O}from"./vue-router.esm-bundler.56c7dc67.js";import{I as B}from"./index.97a299f1.js";import{R as j}from"./index.620e9976.js";import{S as L}from"./index.b6b96bab.js";import{M as q}from"./index.12fe62c2.js";import{B as y}from"./index.25361f03.js";import{C as G}from"./index.49c4739f.js";import{d as Q}from"./index.8b4f1b33.js";import{u as Y,a as R,_ as x,b as H,c as J}from"./index.f735904b.js";import"./elements.34098043.js";import"./shared.a02ca46d.js";import"./index.5f2f7b2c.js";/* empty css               */import"./index.27c0a027.js";import"./zIndex.9bca4df4.js";import"./lock.2b960c70.js";function K(e){return["left","center","right"].includes(e)}const W={color:{type:String},textColor:{type:String},title:{type:String},titlePosition:{type:String,default:"left",validator:K},elevation:{type:Boolean,default:!0}},{n:X,classes:Z}=N("app-bar"),tt=z({name:"VarAppBar",props:W,setup(e,{slots:i}){const d=g(),p=g(),h=()=>{d.value=i.left?0:void 0,p.value=i.right?0:void 0};return E(h),P(h),{n:X,classes:Z,paddingLeft:d,paddingRight:p}}});function et(e,i,d,p,h,D){return r(),m("div",{class:f(e.classes(e.n(),[e.elevation,e.n("$-elevation--3")])),style:F({background:e.color,color:e.textColor})},[k("div",{class:f(e.n("left"))},[v(e.$slots,"left"),e.titlePosition==="left"?(r(),m("div",{key:0,class:f(e.n("title")),style:F({paddingLeft:e.paddingLeft})},[v(e.$slots,"default",{},()=>[s(n(e.title),1)])],6)):_("",!0)],2),e.titlePosition==="center"?(r(),m("div",{key:0,class:f(e.n("title"))},[v(e.$slots,"default",{},()=>[s(n(e.title),1)])],2)):_("",!0),k("div",{class:f(e.n("right"))},[e.titlePosition==="right"?(r(),m("div",{key:0,class:f(e.n("title")),style:F({paddingRight:e.paddingRight})},[v(e.$slots,"default",{},()=>[s(n(e.title),1)])],6)):_("",!0),v(e.$slots,"right")],2)],6)}const u=w(tt,[["render",et]]);u.install=function(e){e.component(u.name,u)};const ot={basicAppBar:"\u57FA\u7840\u5BFC\u822A\u680F",customStyle:"\u81EA\u5B9A\u4E49\u6837\u5F0F",addSlotsAtTitle:"\u6DFB\u52A0\u6807\u9898\u5904\u63D2\u69FD",addTheTitleFromTheSlot:"\u4ECE\u63D2\u69FD\u5904\u6DFB\u52A0\u6807\u9898",addLeftSlot:"\u6DFB\u52A0\u5DE6\u4FA7\u63D2\u69FD",title:"\u6807\u9898",addRightSlot:"\u6DFB\u52A0\u53F3\u4FA7\u63D2\u69FD",addLeftAndRightSlot:"\u6DFB\u52A0\u5DE6\u53F3\u63D2\u69FD",options1:"\u9009\u9879\u4E00",options2:"\u9009\u9879\u4E8C",search:"\u641C\u7D22",goBack:"\u8FD4\u56DE"},at={basicAppBar:"Basic AppBar",customStyle:"Custom Style",addSlotsAtTitle:"Add Slots At Title",addTheTitleFromTheSlot:"Add The Title From The Slot",addLeftSlot:"Add Left Slot",title:"Title",addRightSlot:"Add Right Slot",addLeftAndRightSlot:"Add Left And Right Slot",options1:"options1",options2:"options2",search:"search",goBack:"Go Back"},{add:$,use:lt,pack:l,packs:Dt,merge:_t}=Y(),st=e=>{J(e),lt(e)};R("zh-CN",x);R("en-US",H);$("zh-CN",ot);$("en-US",at);const nt=k("div",{class:"var-app-var--example-space"},null,-1),Ct={setup(e){const i=g(!1),d=g([]),p=g("#fff"),h=()=>{L({content:l.value.search,position:"top"})},D=()=>{L({content:l.value.goBack,position:"top"})},b=()=>{d.value=[{label:l.value.options1,value:"menu1"},{label:l.value.options2,value:"menu2"}],i.value=!0};return U(S=>{st(S),i.value=!1}),V(Q,S=>{p.value=S==="darkTheme"?"#272727":"#fff"}),(S,C)=>(r(),m(T,null,[o(t(c),null,{default:a(()=>[s(n(t(l).basicAppBar),1)]),_:1}),o(t(u),{title:t(l).title},null,8,["title"]),o(t(c),null,{default:a(()=>[s(n(t(l).customStyle),1)]),_:1}),o(t(u),{title:t(l).title,"title-position":"center",color:"#00c48f"},null,8,["title"]),o(t(c),null,{default:a(()=>[s(n(t(l).addSlotsAtTitle),1)]),_:1}),o(t(u),null,{default:a(()=>[s(n(t(l).addTheTitleFromTheSlot),1)]),_:1}),o(t(c),null,{default:a(()=>[s(n(t(l).addLeftSlot),1)]),_:1}),o(t(u),{title:t(l).title,"title-position":"center"},{left:a(()=>[o(t(y),{round:"",text:"",color:"transparent","text-color":"#ffffff",onClick:D},{default:a(()=>[o(t(B),{name:"chevron-left",size:24})]),_:1})]),_:1},8,["title"]),o(t(c),null,{default:a(()=>[s(n(t(l).addRightSlot),1)]),_:1}),o(t(u),{title:t(l).title},{right:a(()=>[o(t(y),{round:"",text:"",color:"transparent","text-color":"#ffffff",onClick:h},{default:a(()=>[o(t(B),{name:"magnify",size:24})]),_:1})]),_:1},8,["title"]),o(t(c),null,{default:a(()=>[s(n(t(l).addLeftAndRightSlot),1)]),_:1}),o(t(u),{title:t(l).title},{left:a(()=>[o(t(y),{round:"",text:"",color:"transparent","text-color":"#ffffff",onClick:D},{default:a(()=>[o(t(B),{name:"chevron-left",size:24})]),_:1})]),right:a(()=>[o(t(q),{"offset-y":42,"offset-x":-20,show:i.value,"onUpdate:show":C[0]||(C[0]=A=>i.value=A)},{menu:a(()=>[k("div",{class:"var-app-var--example-menu-list",style:F({background:p.value})},[(r(!0),m(T,null,M(d.value,A=>I((r(),O(t(G),{class:"var-app-var--example-menu-cell",key:A.value},{default:a(()=>[s(n(A.label),1)]),_:2},1024)),[[t(j)]])),128))],4)]),default:a(()=>[o(t(y),{round:"",text:"",color:"transparent","text-color":"#ffffff",onClick:b},{default:a(()=>[o(t(B),{name:"menu",size:24})]),_:1})]),_:1},8,["show"])]),_:1},8,["title"]),nt],64))}};export{Ct as default};
