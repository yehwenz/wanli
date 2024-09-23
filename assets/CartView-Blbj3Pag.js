import{g as S,s as L,q as P,i as z,r as a,o as d,c as p,u as y,b as V,d as o,w as c,v as T,F as $,l as C,j,T as D,a as t,e as N,h as M,t as g,k as F,_ as U}from"./index-ClGrYibQ.js";import{_ as q,a as E}from"./PageModel.vue_vue_type_script_setup_true_lang-B2vE5wlT.js";const R=S({__name:"OrderBtn",props:{product:{},size:{default:"default"},color:{default:"blue"},variant:{default:()=>{}}},setup(O){const{token:v}=L(P()),f=z();return(i,b)=>{var x;const n=a("v-btn"),w=a("v-dialog");return d(),p($,null,[y(v)?(d(),V(n,{key:0,size:i.size,rounded:"pill",color:i.color,variant:i.variant,text:"送出訂單"},null,8,["size","color","variant"])):(d(),V(n,{key:1,ref_key:"btn",ref:f,size:i.size,rounded:"pill",color:i.color,variant:i.variant,text:"送出訂單"},null,8,["size","color","variant"])),o(w,{activator:(x=f.value)==null?void 0:x.$el,"max-width":"400px",persistent:"",transition:"slide-x-transition"},{default:c(({isActive:k})=>[o(T,{onModelValue:l=>k.value=l},null,8,["onModelValue"])]),_:1},8,["activator"])],64)}}}),A={key:0},G={class:"d-flex flex-column mt-5 list-container"},H={key:0,class:"text-center"},K={class:"ml-3",style:{width:"100%"}},Q={class:"font-weight-bold",style:{"font-size":"large"}},W={class:"d-flex flex-row align-center justify-space-between"},X={class:"text-end"},Y={class:"d-flex justify-end"},Z={class:"detail-container"},ee={class:"d-flex"},te={class:"d-flex font-weight-bold",style:{"font-size":"larger",color:"red"}},se={class:"d-flex w-100 justify-end mt-4"},oe=S({__name:"CartView",setup(O){const{ListItem:v}=L(C()),{setItem:f,clearList:i}=C(),b=z(!1);let n=z(JSON.parse(v.value));j(()=>{setTimeout(()=>{b.value=!0},300)});function w(l){if(l.count===0)n.value.map(e=>e.count=1);else{const e=JSON.parse(v.value),r=e.find(_=>_.PNum==l.PNum);r?r.count=l.count:e.push(l);const m=JSON.stringify(e);f(m)}}function x(l){const r=JSON.parse(v.value).filter(_=>_.PNum!==l.PNum),m=JSON.stringify(r);f(m),n.value=r}function k(){i(),n.value=[]}return(l,e)=>{const r=a("v-label"),m=a("v-img"),_=a("v-icon"),B=a("v-divider"),I=a("v-btn"),J=a("v-container");return d(),V(J,null,{default:c(()=>[o(q,null,{default:c(()=>[o(D,{name:"fade-slide"},{default:c(()=>[b.value?(d(),p("div",A,[e[8]||(e[8]=t("div",{class:"text-h5 font-weight-bold text-center",style:{width:"100%"}},"購物清單",-1)),t("div",G,[y(n).length===0?(d(),p("div",H,[o(r,null,{default:c(()=>e[1]||(e[1]=[N("----------您目前沒有商品唷----------")])),_:1})])):(d(!0),p($,{key:1},M(y(n),(s,u)=>(d(),p("div",{key:u,class:"d-flex mb-5 pa-3 list-item",style:{"border-bottom":"1px rgba(0, 0, 0, 0.2) dotted"}},[o(m,{width:"70px",src:s.img},null,8,["src"]),t("div",K,[t("div",Q,g(s.productName),1),t("div",W,[o(E,{modelValue:s.count,"onUpdate:modelValue":[h=>s.count=h,()=>w(s)],offset:1},null,8,["modelValue","onUpdate:modelValue"]),o(_,{style:{"background-color":"red","border-radius":"50%","font-size":"medium",color:"white"},onClick:h=>x(s)},{default:c(()=>e[2]||(e[2]=[N("mdi-minus")])),_:2},1032,["onClick"])]),t("div",X,g(s.price*s.count)+"元",1)])]))),128))]),o(B,{class:"ma-10 mt-3 ml-0 mr-0",opacity:"0.4"}),t("div",Y,[t("div",Z,[t("div",ee,[e[3]||(e[3]=t("div",{class:"mr-auto",style:{"font-size":"medium"}},"商品總金額:",-1)),t("div",null,g(y(n).reduce((s,u)=>s+u.price*u.count,0))+" 元",1)]),e[6]||(e[6]=t("div",{class:"d-flex"},[t("div",{class:"mr-auto",style:{"font-size":"medium"}},"打折優惠:"),t("div",null,"6折")],-1)),e[7]||(e[7]=t("div",{class:"d-flex"},[t("div",{class:"mr-auto",style:{"font-size":"medium"}},"運費:"),t("div",null,"30元")],-1)),t("div",te,[e[4]||(e[4]=t("div",{class:"mr-auto"},"應付金額:",-1)),t("div",null,g(y(n).reduce((s,u)=>s+u.price*u.count,0)*.6+30)+"元 ",1)]),t("div",se,[o(I,{class:"mr-2",rounded:"pill",color:"error",onClick:e[0]||(e[0]=s=>k())},{default:c(()=>e[5]||(e[5]=[N("清除訂單")])),_:1}),o(R)])])])])):F("",!0)]),_:1})]),_:1})]),_:1})}}}),ie=U(oe,[["__scopeId","data-v-8adee287"]]);export{ie as default};
