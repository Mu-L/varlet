import{I as h}from"./index.97a299f1.js";import{d as $,b as u,Z as B,_ as b,p as C,f as a,h as p,q as S,S as V,D as N,E as _,M as k,i as w,Q as D,m as I,G as z,O as E,N as P}from"./vue-router.esm-bundler.56c7dc67.js";import{c as q}from"./components.b90dca2f.js";function A(e){return["default","primary","info","success","warning","danger"].includes(e)}function G(e){return["right-top","right-bottom","left-top","left-bottom"].includes(e)}const M={type:{type:String,default:"default",validator:A},hidden:{type:Boolean,default:!1},dot:{type:Boolean,default:!1},value:{type:[String,Number],default:0},maxValue:{type:[String,Number]},color:{type:String},position:{type:String,default:"right-top",validator:G},icon:{type:String}},{n,classes:O}=q("badge"),Q=$({name:"VarBadge",components:{VarIcon:h},inheritAttrs:!1,props:M,setup(e,{slots:r}){const l=u(()=>{const{type:o,position:t,dot:s,icon:f}=e,m=r.default&&`${n("position")} ${n(`--${t}`)}`,g=s?n("dot"):null,y=d(),v=f?n("icon"):null;return[n(`--${o}`),m,g,y,v]}),c=u(()=>{const{dot:o,value:t,maxValue:s}=e;return o?"":t!==void 0&&s!==void 0&&B(t)>s?`${s}+`:t}),d=()=>{const{position:o,dot:t}=e;if(t&&o.includes("right"))return n("dot--right");if(t&&o.includes("left"))return n("dot--left")};return{n,classes:O,values:c,contentClass:l}}});const T={key:1};function Z(e,r,l,c,d,o){const t=C("var-icon");return a(),p("div",{class:P(e.classes(e.n(),e.n("$--box")))},[S(z,{name:e.n("$-badge-fade")},{default:V(()=>[N(k("span",I(e.$attrs,{class:e.classes(e.n("content"),...e.contentClass),style:{background:e.color}}),[e.icon&&!e.dot?(a(),w(t,{key:0,name:e.icon,size:"10px"},null,8,["name"])):(a(),p("span",T,D(e.values),1))],16),[[_,!e.hidden]])]),_:1},8,["name"]),E(e.$slots,"default")],2)}const i=b(Q,[["render",Z]]);i.install=function(e){e.component(i.name,i)};export{i as B};
