import{d as S,w as g,q as l,T as O,C as b,D as x,E as F,G as d,m as k}from"./vue-router.esm-bundler.56c7dc67.js";import{u as P}from"./lock.2b960c70.js";import{u as $}from"./zIndex.9bca4df4.js";import{f as I,g as j,c as z}from"./components.b90dca2f.js";/* empty css               */function B(e){return["top","bottom","right","left","center"].includes(e)}const T={show:{type:Boolean,default:!1},position:{type:String,default:"center",validator:B},transition:{type:String},overlay:{type:Boolean,default:!0},overlayClass:{type:String},overlayStyle:{type:Object},lockScroll:{type:Boolean,default:!0},closeOnClickOverlay:{type:Boolean,default:!0},teleport:{type:String},onOpen:{type:Function},onOpened:{type:Function},onClose:{type:Function},onClosed:{type:Function},onClickOverlay:{type:Function},onRouteChange:{type:Function},"onUpdate:show":{type:Function}};function V(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!b(e)}const{n:a,classes:s}=z("popup"),c=S({name:"VarPopup",inheritAttrs:!1,props:T,setup(e,{slots:i,attrs:y}){const{zIndex:r}=$(()=>e.show,3),{disabled:f}=I(),p=()=>{var o;const{closeOnClickOverlay:t,onClickOverlay:n}=e;n==null||n(),t&&((o=e["onUpdate:show"])==null||o.call(e,!1))};P(()=>e.show,()=>e.lockScroll),g(()=>e.show,t=>{const{onOpen:n,onClose:o}=e;t?n==null||n():o==null||o()}),j(()=>{var t;return(t=e.onRouteChange)==null?void 0:t.call(e)});const v=()=>{const{overlayClass:t="",overlayStyle:n}=e;return l("div",{class:s(a("overlay"),t),style:{zIndex:r.value-1,...n},onClick:p},null)},m=()=>{var t;return l("div",k({class:s(a("content"),a("$-elevation--3"),a(`--${e.position}`)),style:{zIndex:r.value}},y),[(t=i.default)==null?void 0:t.call(i)])},u=()=>{const{onOpened:t,onClosed:n,show:o,overlay:h,transition:C,position:w}=e;return l(d,{name:a("$-fade"),onAfterEnter:t,onAfterLeave:n},{default:()=>[x(l("div",{class:s(a("$--box"),a()),style:{zIndex:r.value-2}},[h&&v(),l(d,{name:C||a(`$-pop-${w}`)},{default:()=>[o&&m()]})]),[[F,o]])]})};return()=>{const{teleport:t}=e;if(t){let n;return l(O,{to:t,disabled:f.value},V(n=u())?n:{default:()=>[n]})}return u()}}});c.install=function(e){e.component(c.name,c)};export{c as P,T as p};
