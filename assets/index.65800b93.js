import{I as h}from"./index.a5003ade.js";import{d as B,b as u,_ as $,s as b,f as a,h as p,t as C,P as S,j as _,v as V,l as N,i as k,N as w,m as I,Q as P,J as z,H as D}from"./elevation.f115f7e1.js";import{c as j,t as A}from"./components.5cbda08a.js";function E(t){return["default","primary","info","success","warning","danger"].includes(t)}function H(t){return["right-top","right-bottom","left-top","left-bottom"].includes(t)}const J={type:{type:String,default:"default",validator:E},hidden:{type:Boolean,default:!1},dot:{type:Boolean,default:!1},value:{type:[String,Number],default:0},maxValue:{type:[String,Number]},color:{type:String},position:{type:String,default:"right-top",validator:H},icon:{type:String}};const{n:o,classes:Q}=j("badge"),T=B({name:"VarBadge",components:{VarIcon:h},inheritAttrs:!1,props:J,setup(t,{slots:r}){const l=u(()=>{const{type:n,position:e,dot:s,icon:f}=t,m=r.default&&`${o("position")} ${o(`--${e}`)}`,g=s?o("dot"):null,v=d(),y=f?o("icon"):null;return[o(`--${n}`),m,g,v,y]}),c=u(()=>{const{dot:n,value:e,maxValue:s}=t;return n?"":e!==void 0&&s!==void 0&&A(e)>s?`${s}+`:e}),d=()=>{const{position:n,dot:e}=t;if(e&&n.includes("right"))return o("dot--right");if(e&&n.includes("left"))return o("dot--left")};return{n:o,classes:Q,values:c,contentClass:l}}}),q={key:1};function F(t,r,l,c,d,n){const e=b("var-icon");return a(),p("div",{class:D(t.classes(t.n(),"var--box"))},[C(P,{name:"var-badge-fade"},{default:S(()=>[_(N("span",I(t.$attrs,{class:t.classes(t.n("content"),...t.contentClass),style:{background:t.color}}),[t.icon&&!t.dot?(a(),k(e,{key:0,name:t.icon,size:"10px"},null,8,["name"])):(a(),p("span",q,w(t.values),1))],16),[[V,!t.hidden]])]),_:1}),z(t.$slots,"default")],2)}var i=$(T,[["render",F]]);i.install=function(t){t.component(i.name,i)};export{i as B};