import{f as B,s as N,p as M,q as x,h as _,l as $,v as j,o as l,c as a,d as i,w as y,j as z,m as v,F as V,g as D,x as E,y as F,r as c,a as u,t as g,e as q,u as A,_ as G}from"./index-BB4_gkWE.js";const R={key:0,class:"text-center font-weight-bold",style:{"font-size":"x-large"}},H={key:1,class:"mt-4 d-sm-flex justify-sm-end"},K={key:2,class:"div-container mt-10"},Q=["id"],W={class:"position-relative"},X={key:0,class:"badge"},Y={class:"ml-3 ml-sm-0 w-100"},Z={style:{"font-size":"large"}},ee=B({__name:"ItemsListModel",props:{modelValue:{}},emits:["update:modelValue"],setup(w,{emit:k}){const I=w,L=k,{token:S}=N(M()),{ListItem:f}=N(x()),{setItem:h}=x(),r=_(I.modelValue),m=_(!1),p=_(!1);$(()=>{setTimeout(()=>{m.value=!0},300)});function P(t){if(t.count===0){const o=JSON.parse(f.value).filter(d=>d.PNum!==t.PNum),n=JSON.stringify(o);h(n)}else{const e=JSON.parse(f.value),o=e.find(d=>d.PNum==t.PNum);o?o.count=t.count:e.push(t);const n=JSON.stringify(e);h(n)}}function b(){JSON.parse(f.value).forEach(e=>{const o=r.value.find(n=>n.PNum==e.PNum);o&&(o.count=e.count)})}b();function C(t){const e=document.getElementById(t);e&&e.scrollIntoView({behavior:"smooth",block:"end"})}return j(()=>r.value,t=>{L("update:modelValue",t)}),(t,e)=>{const o=c("v-autocomplete"),n=c("v-img"),d=c("v-label"),J=c("v-number-input"),O=c("v-dialog");return l(),a(V,null,[i(E,{name:"fade-slide"},{default:y(()=>[m.value?(l(),a("div",R,[z(t.$slots,"title",{},void 0,!0)])):v("",!0),m.value?(l(),a("div",H,[i(o,{"max-width":t.$vuetify.display.smAndUp?"200px":"",density:"compact",variant:"solo-filled",placeholder:"搜尋",items:r.value,"item-title":"productName","item-value":"PNum","onUpdate:modelValue":C},null,8,["max-width","items"])])):v("",!0),m.value?(l(),a("div",K,[(l(!0),a(V,null,D(r.value,(s,T)=>(l(),a("div",{class:"d-flex flex-sm-column",key:T,id:s.PNum},[u("div",W,[i(n,{width:t.$vuetify.display.xs?"80px":"",src:s.img},null,8,["width","src"]),s.count?(l(),a("div",X,g(s.count),1)):v("",!0)]),u("div",Y,[i(d,{class:"d-block d-sm-inline",style:{"font-size":"larger"}},{default:y(()=>[q(g(s.productName),1)]),_:2},1024),u("div",null,[u("div",Z,[e[2]||(e[2]=u("span",null,"售價: ",-1)),u("span",null,g(s.price)+"元",1)]),i(J,{modelValue:s.count,"onUpdate:modelValue":[U=>s.count=U,()=>A(S)?P(s):p.value=!0],min:0,max:99,class:"d-flex justify-end",density:"compact",variant:"outlined","control-variant":"split",inset:""},null,8,["modelValue","onUpdate:modelValue"])])])],8,Q))),128))])):v("",!0)]),_:3}),i(O,{modelValue:p.value,"onUpdate:modelValue":e[1]||(e[1]=s=>p.value=s),"max-width":"400px",persistent:"",transition:"slide-x-transition"},{default:y(()=>[i(F,{onModelValue:e[0]||(e[0]=s=>p.value=s)})]),_:1},8,["modelValue"])],64)}}}),se=G(ee,[["__scopeId","data-v-9dd566aa"]]);export{se as I};
