import{f,r,o,b as a,w as t,d as i,c as d,g as P,F as g,h as y,i as b,j as $,u as v,k as j,R as h,l as C,m as N,T as I,_ as H}from"./index-BIy07fvk.js";const V=f({__name:"CarouselTool",setup(k){const l=[{PNum:"HI0001",img:"https://www.twfirework.com/images/202211/goods_img/1317_P_1668925792747.jpg",productName:"錦帶花",price:250,kind:"highfireworks"},{PNum:"LO0001",img:"https://www.twfirework.com/images/202211/goods_img/1317_P_1668925792747.jpg",productName:"錦帶花",price:300,kind:"lowfireworks"},{PNum:"HI0002",img:"https://www.twfirework.com/images/202211/goods_img/1317_P_1668925792747.jpg",productName:"錦帶花",price:250,kind:"highfireworks"},{PNum:"LO0002",img:"https://www.twfirework.com/images/202211/goods_img/1317_P_1668925792747.jpg",productName:"錦帶花",price:250,kind:"highfireworks"},{PNum:"HI0005",img:"https://www.twfirework.com/images/202211/goods_img/1317_P_1668925792747.jpg",productName:"錦帶花",price:250,kind:"highfireworks"},{PNum:"LO0004",img:"https://www.twfirework.com/images/202211/goods_img/1317_P_1668925792747.jpg",productName:"錦帶花",price:250,kind:"highfireworks"},{PNum:"HI0000",img:"https://www.twfirework.com/images/202211/goods_img/1317_P_1668925792747.jpg",productName:"錦帶花",price:250,kind:"highfireworks"}];return(m,n)=>{const s=r("v-img"),c=r("v-responsive"),u=r("v-carousel-item"),_=r("v-carousel"),w=r("v-sheet");return o(),a(w,{border:"",rounded:""},{default:t(()=>[i(_,{cycle:"",interval:"3000","show-arrows":"hover",height:"300px","hide-delimiter-background":""},{default:t(()=>[(o(),d(g,null,P(l,(e,p)=>i(u,{key:p},{default:t(()=>[i(c,null,{default:t(()=>[i(s,{src:e.img},null,8,["src"])]),_:2},1024)]),_:2},1024)),64))]),_:1})]),_:1})}}}),x={key:0},F=f({__name:"PageModel",setup(k){const l=y("");function m(n){switch(n){case"highfireworks":return"高空煙火";case"lowfireworks":return"低空煙火";case"groundfireworks":return"地面煙火";case"handfireworks":return"手持煙火";case"throwfireworks":return"投職煙火"}}return(n,s)=>{const c=r("v-btn"),u=r("v-slide-group-item"),_=r("v-slide-group"),w=b("tooltip");return o(),d(g,null,[n.$route.name=="yourcart"?(o(),d("div",x,[$(i(c,{icon:"mdi-arrow-left",variant:"plain",color:l.value,onMouseenter:s[0]||(s[0]=e=>l.value="blue-darken-3"),onMouseleave:s[1]||(s[1]=e=>l.value=""),onClick:s[2]||(s[2]=e=>n.$router.back())},null,8,["color"]),[[w,"上一頁","bottom"]])])):(o(),a(_,{key:1,class:"mb-4","show-arrows":""},{default:t(()=>[(o(!0),d(g,null,P(v(h),(e,p)=>(o(),a(u,{key:p},{default:t(()=>[p==0?(o(),a(c,{key:0,class:"mt-2 mb-2 ml-auto mr-4",rounded:"pill",text:m(e.title),color:e.title===n.$route.name?"primary":void 0,to:{name:e.title}},null,8,["text","color","to"])):p==v(h).length-1?(o(),a(c,{key:1,class:"mt-2 mb-2 mr-auto ml-4",rounded:"pill",color:e.title===n.$route.name?"primary":void 0,text:m(e.title),to:{name:e.title}},null,8,["color","text","to"])):(o(),a(c,{key:2,class:"mt-2 mb-2 ml-4 mr-4",rounded:"pill",text:m(e.title),color:e.title===n.$route.name?"primary":void 0,to:{name:e.title}},null,8,["text","color","to"]))]),_:2},1024))),128))]),_:1})),j(n.$slots,"default")],64)}}}),B=f({__name:"FireWorksHomeView",setup(k){const l=y(!1);return C(()=>{setTimeout(()=>{l.value=!0},300)}),(m,n)=>{const s=r("v-col"),c=r("RouterView"),u=r("v-row"),_=r("v-container");return o(),a(_,null,{default:t(()=>[i(I,{name:"fade-slide"},{default:t(()=>[l.value?(o(),a(u,{key:0,class:"pa-0"},{default:t(()=>[m.$route.name==="FireWorksindex"?(o(),a(s,{key:0,cols:"12"},{default:t(()=>[i(V)]),_:1})):N("",!0),i(s,{cols:"12",class:""},{default:t(()=>[i(F,null,{default:t(()=>[i(c)]),_:1})]),_:1})]),_:1})):N("",!0)]),_:1})]),_:1})}}}),M=H(B,[["__scopeId","data-v-004a529f"]]);export{M as default};
