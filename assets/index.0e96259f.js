import{L as O}from"./index.27c0a027.js";import{R as j}from"./index.620e9976.js";import{g as q,t as H}from"./elements.34098043.js";import{d as J,a as R,o as K,u as X,X as Z,n as G,_ as W,p as Y,ai as ee,f as m,h as y,O as U,j as E,M as B,N as v,Q as l,q as s,D as te,P as c,r as ae,aJ as ie,ae as oe,aA as ne,S as o,an as t,aK as k,F as x,ak as $,i as A}from"./vue-router.esm-bundler.56c7dc67.js";import{d as se}from"./shared.a02ca46d.js";import{c as le,e as S}from"./components.b90dca2f.js";import{p as re,u as de,a as z,_ as ue,b as fe,c as me}from"./index.f735904b.js";import{C as w}from"./index.49c4739f.js";import{T as D,a as pe}from"./index.ea368f6c.js";import{T as ge}from"./index.4d370955.js";import{T as I}from"./index.baee7712.js";import{d as ce}from"./index.8b4f1b33.js";import"./index.5f2f7b2c.js";/* empty css               */import"./index.97a299f1.js";import"./index.5fde80c6.js";import"./index.f4670cec.js";import"./provide.1a9d8320.js";import"./provide.fb578f72.js";import"./index.eb03d69d.js";const he={loading:{type:Boolean,default:!1},immediateCheck:{type:Boolean,default:!0},finished:{type:Boolean,default:!1},error:{type:Boolean,default:!1},offset:{type:[String,Number],default:0},loadingText:{type:String},finishedText:{type:String},errorText:{type:String},onLoad:{type:Function},"onUpdate:loading":{type:Function},"onUpdate:error":{type:Function}},{n:Te,classes:ve}=le("list"),ke=J({name:"VarList",directives:{Ripple:j},components:{VarLoading:O},props:he,setup(e){const a=R(null),C=R(null);let p;const L=()=>{S(e["onUpdate:error"],!1),S(e["onUpdate:loading"],!0),S(e.onLoad)},h=()=>{const d=p===window?window.innerHeight:p.getBoundingClientRect().bottom,{bottom:g}=C.value.getBoundingClientRect();return Math.floor(g)-H(e.offset)<=d},r=async()=>{await G();const{loading:d,finished:g,error:N}=e;!d&&!g&&!N&&h()&&L()};return K(()=>{p=q(a.value),e.immediateCheck&&r(),p.addEventListener("scroll",r)}),X(()=>{p.removeEventListener("scroll",r)}),{pack:re,listEl:a,detectorEl:C,dt:se,isNumber:Z,load:L,check:r,n:Te,classes:ve}}});function ye(e,a,C,p,L,h){const r=Y("var-loading"),d=ee("ripple");return m(),y("div",{class:v(e.classes(e.n(),e.n("$--box"))),ref:"listEl"},[U(e.$slots,"default"),e.loading?U(e.$slots,"loading",{key:0},()=>[B("div",{class:v(e.n("loading"))},[B("div",{class:v(e.n("loading-text"))},l(e.dt(e.loadingText,e.pack.listLoadingText)),3),s(r,{size:"mini",radius:10})],2)]):E("",!0),e.finished?U(e.$slots,"finished",{key:1},()=>[B("div",{class:v(e.n("finished"))},l(e.dt(e.finishedText,e.pack.listFinishedText)),3)]):E("",!0),e.error?U(e.$slots,"error",{key:2},()=>[te((m(),y("div",{class:v(e.n("error")),onClick:a[0]||(a[0]=(...g)=>e.load&&e.load(...g))},[c(l(e.dt(e.errorText,e.pack.listErrorText)),1)],2)),[[d]])]):E("",!0),B("div",{class:v(e.n("detector")),ref:"detectorEl"},null,2)],2)}const F=W(ke,[["render",ye]]);F.install=function(e){e.component(F.name,F)};const Fe={basicUsage:"\u57FA\u672C\u4F7F\u7528",loadFail:"\u52A0\u8F7D\u5931\u8D25",tipText:"\u63D0\u793A\u6587\u5B57",loadingText:"\u6B63\u5728\u52AA\u529B\u8F93\u51FA",errorText:"\u51FA\u9519\u4E86\u51FA\u9519\u4E86",finishedText:"\u4E00\u6EF4\u90FD\u6CA1\u6709\u4E86",listItem:"\u5217\u8868\u9879"},Ce={basicUsage:"Basic Usage",loadFail:"Load Fail",tipText:"Tip Text",loadingText:"loading QAQ",errorText:"error TNT",finishedText:"finished ORZ",listItem:"List Item"},{add:V,use:Le,pack:f,packs:qe,merge:He}=de(),Ue=e=>{me(e),Le(e)};z("zh-CN",ue);z("en-US",fe);V("zh-CN",Fe);V("en-US",Ce);const Je={setup(e){const a=ae({loading:!1,loading2:!1,loading3:!1,finished:!1,finished2:!1,finished3:!1,error:!1,list:[],list2:[],list3:[],current:0}),{list:C,list2:p,list3:L,loading:h,loading2:r,loading3:d,finished:g,finished2:N,finished3:M,error:b,current:T}=ie(a),_=()=>{if(a.current!==0){a.loading=!1;return}setTimeout(()=>{for(let u=0;u<20;u++)a.list.push(a.list.length+1);a.loading=!1,a.list.length>=60&&(a.finished=!0)},1e3)},P=()=>{if(a.current!==1){a.loading2=!1;return}setTimeout(()=>{if(a.list2.length===40){a.error=!0,a.loading2=!1;return}for(let u=0;u<20;u++)a.list2.push(a.list2.length+1);a.loading2=!1},1e3)},Q=()=>{if(a.current!==2){a.loading3=!1;return}setTimeout(()=>{for(let u=0;u<20;u++)a.list3.push(a.list3.length+1);a.loading3=!1,a.list3.length>=60&&(a.finished3=!0)},1e3)};return oe(Ue),ne(ce),(u,n)=>(m(),y(x,null,[s(t(pe),{active:t(T),"onUpdate:active":n[0]||(n[0]=i=>k(T)?T.value=i:null),sticky:"","offset-top":"14.4vw",style:{"margin-bottom":"10px"}},{default:o(()=>[s(t(D),null,{default:o(()=>[c(l(t(f).basicUsage),1)]),_:1}),s(t(D),null,{default:o(()=>[c(l(t(f).loadFail),1)]),_:1}),s(t(D),null,{default:o(()=>[c(l(t(f).tipText),1)]),_:1})]),_:1},8,["active"]),s(t(ge),{active:t(T),"onUpdate:active":n[5]||(n[5]=i=>k(T)?T.value=i:null)},{default:o(()=>[s(t(I),null,{default:o(()=>[s(t(F),{finished:t(g),loading:t(h),"onUpdate:loading":n[1]||(n[1]=i=>k(h)?h.value=i:null),onLoad:_},{default:o(()=>[(m(!0),y(x,null,$(t(C),i=>(m(),A(t(w),{key:i},{default:o(()=>[c(l(t(f).listItem)+": "+l(i),1)]),_:2},1024))),128))]),_:1},8,["finished","loading"])]),_:1}),s(t(I),null,{default:o(()=>[s(t(F),{finished:t(N),error:t(b),"onUpdate:error":n[2]||(n[2]=i=>k(b)?b.value=i:null),loading:t(r),"onUpdate:loading":n[3]||(n[3]=i=>k(r)?r.value=i:null),onLoad:P},{default:o(()=>[(m(!0),y(x,null,$(t(p),i=>(m(),A(t(w),{key:i},{default:o(()=>[c(l(t(f).listItem)+": "+l(i),1)]),_:2},1024))),128))]),_:1},8,["finished","error","loading"])]),_:1}),s(t(I),null,{default:o(()=>[s(t(F),{"loading-text":t(f).loadingText,"finished-text":t(f).finishedText,"error-text":t(f).errorText,finished:t(M),loading:t(d),"onUpdate:loading":n[4]||(n[4]=i=>k(d)?d.value=i:null),onLoad:Q},{default:o(()=>[(m(!0),y(x,null,$(t(L),i=>(m(),A(t(w),{key:i},{default:o(()=>[c(l(t(f).listItem)+": "+l(i),1)]),_:2},1024))),128))]),_:1},8,["loading-text","finished-text","error-text","finished","loading"])]),_:1})]),_:1},8,["active"])],64))}};export{Je as default};
