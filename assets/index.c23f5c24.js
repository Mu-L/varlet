import{I as h}from"./index.f341d4b5.js";import{d as B,b as u,Z as $,_ as b,p as C,f as a,h as p,q as S,S as _,D as V,E as N,M as k,i as w,Q as D,m as I,G as z,O as E,N as P}from"./vue-router.esm-bundler.e2cd2115.js";import{c as q}from"./components.c182dc8c.js";function A(t){return["default","primary","info","success","warning","danger"].includes(t)}function G(t){return["right-top","right-bottom","left-top","left-bottom"].includes(t)}const M={type:{type:String,default:"default",validator:A},hidden:{type:Boolean,default:!1},dot:{type:Boolean,default:!1},value:{type:[String,Number],default:0},maxValue:{type:[String,Number]},color:{type:String},position:{type:String,default:"right-top",validator:G},icon:{type:String}},{n:o,classes:O}=q("badge"),Q=B({name:"VarBadge",components:{VarIcon:h},inheritAttrs:!1,props:M,setup(t,{slots:r}){const l=u(()=>{const{type:n,position:e,dot:s,icon:f}=t,m=r.default&&`${o("position")} ${o(`--${e}`)}`,g=s?o("dot"):null,v=d(),y=f?o("icon"):null;return[o(`--${n}`),m,g,v,y]}),c=u(()=>{const{dot:n,value:e,maxValue:s}=t;return n?"":e!==void 0&&s!==void 0&&$(e)>s?`${s}+`:e}),d=()=>{const{position:n,dot:e}=t;if(e&&n.includes("right"))return o("dot--right");if(e&&n.includes("left"))return o("dot--left")};return{n:o,classes:O,values:c,contentClass:l}}});const T={key:1};function Z(t,r,l,c,d,n){const e=C("var-icon");return a(),p("div",{class:P(t.classes(t.n(),"var--box"))},[S(z,{name:"var-badge-fade"},{default:_(()=>[V(k("span",I(t.$attrs,{class:t.classes(t.n("content"),...t.contentClass),style:{background:t.color}}),[t.icon&&!t.dot?(a(),w(e,{key:0,name:t.icon,size:"10px"},null,8,["name"])):(a(),p("span",T,D(t.values),1))],16),[[N,!t.hidden]])]),_:1}),E(t.$slots,"default")],2)}const i=b(Q,[["render",Z]]);i.install=function(t){t.component(i.name,i)};export{i as B};