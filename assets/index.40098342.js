var _=Object.defineProperty,$=Object.defineProperties;var M=Object.getOwnPropertyDescriptors;var N=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable;var V=(e,t,i)=>t in e?_(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,w=(e,t)=>{for(var i in t||(t={}))x.call(t,i)&&V(e,i,t[i]);if(N)for(var i of N(t))P.call(t,i)&&V(e,i,t[i]);return e},A=(e,t)=>$(e,M(t));import{L as Q}from"./index.18e6ea71.js";import{R as j}from"./index.c3ac679f.js";import{c as q,b as G}from"./elements.b75de382.js";import{o as H,i as O,c as Z,a as F}from"./components.5cba9644.js";import{p as J,u as K,a as S,_ as W,b as X,c as Y}from"./en-US.628e0d34.js";import{_ as D}from"./elevation.c9ea9f5a.js";import{d as ee,r as I,x as te,C as ae,z as oe,e as m,f as ie,o as u,c,G as h,h as U,a as k,p as g,t as s,i as r,w as ne,m as p,q as re,$ as se,j as n,F as b,k as B,l as E}from"./vendor.49f89f0d.js";import{C as le}from"./index.be0a5978.js";import{T as de,a as ue}from"./index.09ab8d2a.js";import{T as fe}from"./index.cfd8084a.js";import{T as me}from"./index.5eb894d7.js";import{d as pe}from"./index.079ade67.js";import{w as ge,a as ce}from"./utils.3a4595f4.js";import"./index.48ee5316.js";import"./index.07bfe65b.js";import"./index.43189302.js";import"./index.ecfaac6b.js";import"./provide.b2a36e46.js";import"./provide.75a21e23.js";import"./index.f1624422.js";const ve={loading:{type:Boolean,default:!1},immediateCheck:{type:Boolean,default:!0},finished:{type:Boolean,default:!1},error:{type:Boolean,default:!1},offset:{type:[String,Number],default:0},loadingText:{type:String},finishedText:{type:String},errorText:{type:String},onLoad:{type:Function},"onUpdate:loading":{type:Function},"onUpdate:error":{type:Function}};const{n:Te,classes:he}=Z("list"),ke=ee({name:"VarList",directives:{Ripple:j},components:{VarLoading:Q},props:ve,setup(e){const t=I(null),i=I(null);let o;const T=()=>{F(e["onUpdate:error"],!1),F(e["onUpdate:loading"],!0),F(e.onLoad)},y=()=>{const f=o===window?window.innerHeight:o.getBoundingClientRect().bottom,{bottom:d}=i.value.getBoundingClientRect();return Math.floor(d)-G(e.offset)<=f},l=async()=>{await oe();const{loading:f,finished:d,error:v}=e;!f&&!d&&!v&&y()&&T()};return te(()=>{o=q(t.value),e.immediateCheck&&l(),o.addEventListener("scroll",l)}),ae(()=>{o.removeEventListener("scroll",l)}),{pack:J,listEl:t,detectorEl:i,dt:H,isNumber:O,load:T,check:l,n:Te,classes:he}}});function be(e,t,i,o,T,y){const l=m("var-loading"),f=ie("ripple");return u(),c("div",{class:g(e.classes(e.n(),"var--box")),ref:"listEl"},[h(e.$slots,"default"),e.loading?h(e.$slots,"loading",{key:0},()=>[k("div",{class:g(e.n("loading"))},[k("div",{class:g(e.n("loading-text"))},s(e.dt(e.loadingText,e.pack.listLoadingText)),3),r(l,{size:"mini",radius:10})],2)]):U("v-if",!0),e.finished?h(e.$slots,"finished",{key:1},()=>[k("div",{class:g(e.n("finished"))},s(e.dt(e.finishedText,e.pack.listFinishedText)),3)]):U("v-if",!0),e.error?h(e.$slots,"error",{key:2},()=>[ne((u(),c("div",{class:g(e.n("error")),onClick:t[0]||(t[0]=(...d)=>e.load&&e.load(...d))},[p(s(e.dt(e.errorText,e.pack.listErrorText)),1)],2)),[[f]])]):U("v-if",!0),k("div",{class:g(e.n("detector")),ref:"detectorEl"},null,2)],2)}var L=D(ke,[["render",be]]);L.install=function(e){e.component(L.name,L)};var Le={basicUsage:"\u57FA\u672C\u4F7F\u7528",loadFail:"\u52A0\u8F7D\u5931\u8D25",tipText:"\u63D0\u793A\u6587\u5B57",loadingText:"\u6B63\u5728\u52AA\u529B\u8F93\u51FA",errorText:"\u51FA\u9519\u4E86\u51FA\u9519\u4E86",finishedText:"\u4E00\u6EF4\u90FD\u6CA1\u6709\u4E86",listItem:"\u5217\u8868\u9879"},ye={basicUsage:"Basic Usage",loadFail:"Load Fail",tipText:"Tip Text",loadingText:"loading QAQ",errorText:"error TNT",finishedText:"finished ORZ",listItem:"List Item"};const{add:z,use:Ce,pack:Fe,packs:Je,merge:Ke}=K(),Ue=e=>{Y(e),Ce(e)};S("zh-CN",W);S("en-US",X);z("zh-CN",Le);z("en-US",ye);const Be={name:"ListExample",components:{VarList:L,VarCell:le,VarTabs:de,VarTab:ue,VarTabsItems:fe,VarTabItem:me},setup(){const e=re({loading:!1,loading2:!1,loading3:!1,finished:!1,finished2:!1,finished3:!1,error:!1,list:[],list2:[],list3:[],current:0});return ge(Ue),ce(pe),A(w({pack:Fe},se(e)),{load(){if(e.current!==0){e.loading=!1;return}setTimeout(()=>{for(let t=0;t<20;t++)e.list.push(e.list.length+1);e.loading=!1,e.list.length>=60&&(e.finished=!0)},1e3)},load2(){if(e.current!==1){e.loading2=!1;return}setTimeout(()=>{if(e.list2.length===40){e.error=!0,e.loading2=!1;return}for(let t=0;t<20;t++)e.list2.push(e.list2.length+1);e.loading2=!1},1e3)},load3(){if(e.current!==2){e.loading3=!1;return}setTimeout(()=>{for(let t=0;t<20;t++)e.list3.push(e.list3.length+1);e.loading3=!1,e.list3.length>=60&&(e.finished3=!0)},1e3)}})}};function Ee(e,t,i,o,T,y){const l=m("var-tab"),f=m("var-tabs"),d=m("var-cell"),v=m("var-list"),C=m("var-tab-item"),R=m("var-tabs-items");return u(),c(b,null,[r(f,{active:e.current,"onUpdate:active":t[0]||(t[0]=a=>e.current=a),sticky:"","offset-top":"54px",style:{"margin-bottom":"10px"}},{default:n(()=>[r(l,null,{default:n(()=>[p(s(o.pack.basicUsage),1)]),_:1}),r(l,null,{default:n(()=>[p(s(o.pack.loadFail),1)]),_:1}),r(l,null,{default:n(()=>[p(s(o.pack.tipText),1)]),_:1})]),_:1},8,["active"]),r(R,{active:e.current,"onUpdate:active":t[5]||(t[5]=a=>e.current=a)},{default:n(()=>[r(C,null,{default:n(()=>[r(v,{finished:e.finished,loading:e.loading,"onUpdate:loading":t[1]||(t[1]=a=>e.loading=a),onLoad:o.load},{default:n(()=>[(u(!0),c(b,null,B(e.list,a=>(u(),E(d,{key:a},{default:n(()=>[p(s(o.pack.listItem)+": "+s(a),1)]),_:2},1024))),128))]),_:1},8,["finished","loading","onLoad"])]),_:1}),r(C,null,{default:n(()=>[r(v,{finished:e.finished2,error:e.error,"onUpdate:error":t[2]||(t[2]=a=>e.error=a),loading:e.loading2,"onUpdate:loading":t[3]||(t[3]=a=>e.loading2=a),onLoad:o.load2},{default:n(()=>[(u(!0),c(b,null,B(e.list2,a=>(u(),E(d,{key:a},{default:n(()=>[p(s(o.pack.listItem)+": "+s(a),1)]),_:2},1024))),128))]),_:1},8,["finished","error","loading","onLoad"])]),_:1}),r(C,null,{default:n(()=>[r(v,{"loading-text":o.pack.loadingText,"finished-text":o.pack.finishedText,"error-text":o.pack.errorText,finished:e.finished3,loading:e.loading3,"onUpdate:loading":t[4]||(t[4]=a=>e.loading3=a),onLoad:o.load3},{default:n(()=>[(u(!0),c(b,null,B(e.list3,a=>(u(),E(d,{key:a},{default:n(()=>[p(s(o.pack.listItem)+": "+s(a),1)]),_:2},1024))),128))]),_:1},8,["loading-text","finished-text","error-text","finished","loading","onLoad"])]),_:1})]),_:1},8,["active"])],64)}var We=D(Be,[["render",Ee]]);export{We as default};