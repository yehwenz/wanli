import{g as P,s as I,l as _,i as v,j as b,m as C,r as h,o as l,b as J,w as N,c as i,f as O,k as r,F as B,h as T,p as z,a,d as m,t as f,e as D,_ as M}from"./index-ClGrYibQ.js";import{a as $}from"./PageModel.vue_vue_type_script_setup_true_lang-B2vE5wlT.js";const j={key:0,class:"text-center font-weight-bold",style:{"font-size":"x-large"}},E={key:1,class:"div-container mt-10"},F=["id"],U={class:"position-relative"},G={key:0,class:"badge"},R={class:"ml-3 ml-sm-0 w-100"},q={style:{"font-size":"large"}},A={class:"d-flex justify-end"},H=P({__name:"ItemsListModel",props:{modelValue:{}},emits:["update:modelValue"],setup(g,{emit:y}){const w=g,V=y,{ListItem:c}=I(_()),{setItem:p}=_(),u=v(w.modelValue),d=v(!1);b(()=>{setTimeout(()=>{d.value=!0},300)});function x(s){if(s.count===0){const o=JSON.parse(c.value).filter(e=>e.PNum!==s.PNum),n=JSON.stringify(o);p(n)}else{const t=JSON.parse(c.value),o=t.find(e=>e.PNum==s.PNum);o?o.count=s.count:t.push(s);const n=JSON.stringify(t);p(n)}}function L(){JSON.parse(c.value).forEach(t=>{const o=u.value.find(n=>n.PNum==t.PNum);o&&(o.count=t.count)})}return L(),C(()=>u.value,s=>{V("update:modelValue",s)}),(s,t)=>{const o=h("v-img"),n=h("v-label");return l(),J(z,{name:"fade-slide"},{default:N(()=>[d.value?(l(),i("div",j,[O(s.$slots,"title",{},void 0,!0)])):r("",!0),d.value?(l(),i("div",E,[(l(!0),i(B,null,T(u.value,(e,k)=>(l(),i("div",{class:"d-flex flex-sm-column",key:k,id:e.PNum},[a("div",U,[m(o,{width:s.$vuetify.display.xs?"80px":"",src:e.img},null,8,["width","src"]),e.count?(l(),i("div",G,f(e.count),1)):r("",!0)]),a("div",R,[m(n,{class:"d-block d-sm-inline",style:{"font-size":"larger"}},{default:N(()=>[D(f(e.productName),1)]),_:2},1024),a("div",null,[a("div",q,[t[0]||(t[0]=a("span",null,"售價: ",-1)),a("span",null,f(e.price)+"元",1)]),a("div",A,[m($,{modelValue:e.count,"onUpdate:modelValue":[S=>e.count=S,()=>x(e)]},null,8,["modelValue","onUpdate:modelValue"])])])])],8,F))),128))])):r("",!0)]),_:3})}}}),W=M(H,[["__scopeId","data-v-332233a9"]]);export{W as I};
