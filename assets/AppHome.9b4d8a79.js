import{_ as D,a as t,c as l,r as H,u as q,a7 as z,ar as F,s as I,ab as L,f as r,h as i,l as a,N as _,F as A,ad as P,j as V,t as j,q as E,aa as M}from"./elevation.291695bd.js";const R={name:"AppHome",setup(){var h,g,f,C,x,y,k,w,b,N;const p=t((g=(h=l)==null?void 0:h.title)!=null?g:""),m=t((C=(f=l)==null?void 0:f.logo)!=null?C:""),d=t((k=(y=(x=l)==null?void 0:x.mobile)==null?void 0:y.title)!=null?k:{}),v=t((N=(b=(w=l)==null?void 0:w.pc)==null?void 0:b.menu)!=null?N:[]).value.filter(e=>e.type===2),u=H(v),s=t("zh-CN"),c=t("mobile"),n=q();return z(e=>{s.value=e}),F(e=>{c.value=e}),{components:u,lang:s,toComponent:e=>{n.push({path:`/${e.doc}`,query:{language:s.value,platform:c.value,replace:e.doc}}),!E()&&M()&&window.top.scrollToMenu(e.doc)},logo:m,title:p,description:d}}},S={class:"logo"},T={class:"varlet-home__title"},G=["src"],J={class:"varlet-home__desc"},K=["onClick"];function O(p,m,d,o,v,u){const s=I("var-site-icon"),c=L("ripple");return r(),i(A,null,[a("div",S,[a("h1",T,[a("img",{class:"varlet-home__image",src:o.logo},null,8,G),a("span",null,_(o.title),1)]),a("h2",J,_(o.description[o.lang]),1)]),(r(!0),i(A,null,P(o.components,n=>V((r(),i("div",{class:"varlet-home__cell",key:n.text,onClick:B=>o.toComponent(n)},[a("span",null,_(n.text[o.lang]),1),j(s,{name:"chevron-right",size:"14"})],8,K)),[[c]])),128))],64)}var U=D(R,[["render",O],["__scopeId","data-v-4a45b74c"]]);export{U as default};
