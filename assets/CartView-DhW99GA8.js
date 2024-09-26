import{f as h,s as S,x as j,h as C,o as u,c as g,u as p,b as z,d as s,w as r,y as D,F as L,r as n,p as V,a as e,e as N,g as F,t as b,_ as M}from"./index-DZX2iA0F.js";const T=h({__name:"OrderBtn",props:{product:{},size:{default:"default"},color:{default:"blue"},variant:{default:()=>{}}},setup(O){const{token:v}=S(j()),m=C();return(a,d)=>{var y;const x=n("v-btn"),w=n("v-dialog");return u(),g(L,null,[p(v)?(u(),z(x,{key:0,size:a.size,rounded:"pill",color:a.color,variant:a.variant,text:"送出訂單"},null,8,["size","color","variant"])):(u(),z(x,{key:1,ref_key:"btn",ref:m,size:a.size,rounded:"pill",color:a.color,variant:a.variant,text:"送出訂單"},null,8,["size","color","variant"])),s(w,{activator:(y=m.value)==null?void 0:y.$el,"max-width":"400px",persistent:"",transition:"slide-x-transition"},{default:r(({isActive:l})=>[s(D,{onModelValue:t=>l.value=t},null,8,["onModelValue"])]),_:1},8,["activator"])],64)}}}),U={class:"d-flex flex-column mt-sm-5 mt-0 list-container"},E={key:0,class:"text-center"},R={class:"ml-3",style:{width:"100%"}},q={class:"font-weight-bold",style:{"font-size":"large"}},A={class:"d-flex flex-row align-center justify-space-between"},G={class:"text-end"},H={class:"d-flex justify-end"},K={class:"detail-container"},Q={class:"d-flex"},W={class:"d-flex font-weight-bold",style:{"font-size":"larger",color:"red"}},X={class:"d-flex w-100 justify-end mt-4"},Y=h({__name:"CartView",setup(O){const{ListItem:v}=S(V()),{setItem:m,clearList:a}=V();let d=C(JSON.parse(v.value));function x(l){if(l.count===0)d.value.map(t=>t.count=1);else{const t=JSON.parse(v.value),i=t.find(f=>f.PNum==l.PNum);i?i.count=l.count:t.push(l);const _=JSON.stringify(t);m(_)}}function w(l){const i=JSON.parse(v.value).filter(f=>f.PNum!==l.PNum),_=JSON.stringify(i);m(_),d.value=i}function y(){a(),d.value=[]}return(l,t)=>{const i=n("v-col"),_=n("v-label"),f=n("v-img"),$=n("v-number-input"),B=n("v-icon"),I=n("v-divider"),J=n("v-btn"),P=n("v-row");return u(),z(P,null,{default:r(()=>[s(i,{cols:"12"},{default:r(()=>t[1]||(t[1]=[e("div",{class:"text-h5 font-weight-bold text-center",style:{width:"100%"}},"購物清單",-1)])),_:1}),s(i,{cols:"12"},{default:r(()=>[e("div",U,[p(d).length===0?(u(),g("div",E,[s(_,null,{default:r(()=>t[2]||(t[2]=[N("----------您目前沒有商品唷----------")])),_:1})])):(u(!0),g(L,{key:1},F(p(d),(o,c)=>(u(),g("div",{key:c,class:"d-flex mb-5 pa-3 list-item",style:{"border-bottom":"1px rgba(0, 0, 0, 0.2) dotted"}},[s(f,{width:"70px",src:o.img},null,8,["src"]),e("div",R,[e("div",q,b(o.productName),1),e("div",A,[s($,{class:"d-flex",modelValue:o.count,"onUpdate:modelValue":[k=>o.count=k,k=>x(o)],"control-variant":"split",density:"compact",variant:"outlined",min:1,max:99,inset:""},null,8,["modelValue","onUpdate:modelValue"]),s(B,{style:{"background-color":"red","border-radius":"50%","font-size":"medium",color:"white"},onClick:k=>w(o)},{default:r(()=>t[3]||(t[3]=[N("mdi-minus")])),_:2},1032,["onClick"])]),e("div",G,b(o.price*o.count)+"元",1)])]))),128))])]),_:1}),s(I,{class:"mt-sm-3 mt-0",opacity:"0.4"}),s(i,{cols:"12"},{default:r(()=>[e("div",H,[e("div",K,[e("div",Q,[t[4]||(t[4]=e("div",{class:"mr-auto",style:{"font-size":"medium"}},"商品總金額:",-1)),e("div",null,b(p(d).reduce((o,c)=>o+c.price*c.count,0))+" 元",1)]),t[7]||(t[7]=e("div",{class:"d-flex"},[e("div",{class:"mr-auto",style:{"font-size":"medium"}},"打折優惠:"),e("div",null,"6折")],-1)),t[8]||(t[8]=e("div",{class:"d-flex"},[e("div",{class:"mr-auto",style:{"font-size":"medium"}},"運費:"),e("div",null,"30元")],-1)),e("div",W,[t[5]||(t[5]=e("div",{class:"mr-auto"},"應付金額:",-1)),e("div",null,b(p(d).reduce((o,c)=>o+c.price*c.count,0)*.6+30)+"元 ",1)]),e("div",X,[s(J,{class:"mr-2",rounded:"pill",color:"error",onClick:t[0]||(t[0]=o=>y())},{default:r(()=>t[6]||(t[6]=[N("清除訂單")])),_:1}),s(T)])])])]),_:1})]),_:1})}}}),tt=M(Y,[["__scopeId","data-v-eb670752"]]);export{tt as default};
