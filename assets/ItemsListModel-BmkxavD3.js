import{f as b,s as B,p as h,h as y,l as C,q as J,r as f,o as a,b as O,w as N,c as i,k as T,m as r,d as m,F as U,g as $,v as z,a as l,t as v,e as D,_ as E}from"./index-C2clxMlZ.js";import{_ as M}from"./NumberTextBox.vue_vue_type_script_setup_true_lang-DBmDPaEb.js";const j={key:0,class:"text-center font-weight-bold",style:{"font-size":"x-large"}},F={key:1,class:"mt-4 d-sm-flex justify-sm-end"},q={key:2,class:"div-container mt-10"},A=["id"],G={class:"position-relative"},R={key:0,class:"badge"},H={class:"ml-3 ml-sm-0 w-100"},K={style:{"font-size":"large"}},Q={class:"d-flex justify-end"},W=b({__name:"ItemsListModel",props:{modelValue:{}},emits:["update:modelValue"],setup(g,{emit:w}){const V=g,x=w,{ListItem:p}=B(h()),{setItem:_}=h(),d=y(V.modelValue),u=y(!1);C(()=>{setTimeout(()=>{u.value=!0},300)});function k(e){if(e.count===0){const s=JSON.parse(p.value).filter(c=>c.PNum!==e.PNum),n=JSON.stringify(s);_(n)}else{const t=JSON.parse(p.value),s=t.find(c=>c.PNum==e.PNum);s?s.count=e.count:t.push(e);const n=JSON.stringify(t);_(n)}}function I(){JSON.parse(p.value).forEach(t=>{const s=d.value.find(n=>n.PNum==t.PNum);s&&(s.count=t.count)})}I();function L(e){const t=document.getElementById(e);t&&t.scrollIntoView({behavior:"smooth",block:"end"})}return J(()=>d.value,e=>{x("update:modelValue",e)}),(e,t)=>{const s=f("v-autocomplete"),n=f("v-img"),c=f("v-label");return a(),O(z,{name:"fade-slide"},{default:N(()=>[u.value?(a(),i("div",j,[T(e.$slots,"title",{},void 0,!0)])):r("",!0),u.value?(a(),i("div",F,[m(s,{"max-width":e.$vuetify.display.smAndUp?"200px":"",density:"compact",variant:"solo-filled",placeholder:"搜尋",items:d.value,"item-title":"productName","item-value":"PNum","onUpdate:modelValue":L},null,8,["max-width","items"])])):r("",!0),u.value?(a(),i("div",q,[(a(!0),i(U,null,$(d.value,(o,P)=>(a(),i("div",{class:"d-flex flex-sm-column",key:P,id:o.PNum},[l("div",G,[m(n,{width:e.$vuetify.display.xs?"80px":"",src:o.img},null,8,["width","src"]),o.count?(a(),i("div",R,v(o.count),1)):r("",!0)]),l("div",H,[m(c,{class:"d-block d-sm-inline",style:{"font-size":"larger"}},{default:N(()=>[D(v(o.productName),1)]),_:2},1024),l("div",null,[l("div",K,[t[0]||(t[0]=l("span",null,"售價: ",-1)),l("span",null,v(o.price)+"元",1)]),l("div",Q,[m(M,{modelValue:o.count,"onUpdate:modelValue":[S=>o.count=S,()=>k(o)]},null,8,["modelValue","onUpdate:modelValue"])])])])],8,A))),128))])):r("",!0)]),_:3})}}}),Z=E(W,[["__scopeId","data-v-11e339a8"]]);export{Z as I};
