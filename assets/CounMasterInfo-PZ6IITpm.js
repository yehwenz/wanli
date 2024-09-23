import{d as R,g as n,C as ae,h as c,n as v,l as e,w as o,i as le,k as s,u as ye,s as ge,a as xe,D as Se,r as B,c as y,j as be,x as P,A as L,f as N,m as I,E as r,t as g,F as W,q as ee,z as $,y as Me,G as he,H as De,I as $e,J as Ce,_ as ke}from"./index-DkzAPJNB.js";import{M as te}from"./SearchText-7uKoE6o6.js";import{u as we}from"./TableHeader-CiUJ5xRo.js";const Te={style:{display:"flex","justify-content":"center","align-items":"center"}},Ve=["innerHTML"],Be=R({__name:"ErrorMessage",props:{dialog:{type:Boolean},content:{}},emits:["dialog"],setup(_,{emit:F}){const x=_,C=F,S=()=>{};return(b,k)=>{const M=n("v-card-text"),j=n("v-spacer"),A=n("v-btn"),w=n("v-card-actions"),m=n("v-card"),d=ae("scroll");return c(),v("div",Te,[e(m,{color:"error","prepend-icon":"$error",title:"發生錯誤"},{default:o(()=>[e(M,{class:"text-h6 pl-15 pt-5 pr-15 overflow-y-auto",style:{"max-height":"500px"}},{default:o(()=>[le(s("span",{innerHTML:b.content},null,8,Ve),[[d,S,void 0,{self:!0}]])]),_:1}),e(w,null,{default:o(()=>[e(j),e(A,{text:"返回",onClick:k[0]||(k[0]=f=>{C("dialog",!x.dialog)})})]),_:1})]),_:1})])}}}),Fe={class:"d-flex justify-center"},je=["innerHTML"],Ae=R({__name:"SuccMessage",props:{dialog:{type:Boolean},content:{}},emits:["dialog"],setup(_,{emit:F}){const x=_,C=F;return(S,b)=>{const k=n("v-card-text"),M=n("v-spacer"),j=n("v-btn"),A=n("v-card-actions"),w=n("v-card");return c(),v("div",Fe,[e(w,{"prepend-icon":"$success",color:"success",title:"成功"},{default:o(()=>[e(k,{class:"text-h6 pl-15 pt-5 pr-15 overflow-y-auto",style:{"max-height":"500px"}},{default:o(()=>[s("span",{innerHTML:S.content},null,8,je)]),_:1}),e(A,null,{default:o(()=>[e(M),e(j,{style:{"font-weight":"bolder"},variant:"elevated",text:"確定",onClick:b[0]||(b[0]=m=>{C("dialog",!x.dialog)})})]),_:1})]),_:1})])}}}),oe=_=>($e("data-v-402d615a"),_=_(),Ce(),_),Le=oe(()=>s("thead",null,[s("tr",null,[s("th",{scope:"col"},"項目"),s("th",{scope:"col"},[s("div",null,"0分"),s("div",null,"(完全沒有)")]),s("th",{scope:"col"},[s("div",null,"1分"),s("div",null,"(輕微)")]),s("th",{scope:"col"},[s("div",null,"2分"),s("div",null,"(中等程度)")]),s("th",{scope:"col"},[s("div",null,"3分"),s("div",null,"(厲害)")]),s("th",{scope:"col"},[s("div",null,"4分"),s("div",null,"(非常厲害)")])])],-1)),Ne={scope:"row"},Ie={key:0},ze=oe(()=>s("th",{scope:"row"},"總分",-1)),Ee={colspan:"5"},Ue={key:0,class:"d-flex me-auto"},He={key:0,style:{width:"200px"}},Pe={key:1,style:{width:"250px"}},We={key:1},Re={key:0},Ge={key:1},Qe=R({__name:"CounMasterInfo",props:{id:{},isActive:{type:Boolean}},emits:["isActive"],setup(_,{emit:F}){const x=_,C=F,{axiosIns:S}=ye(),{token:b}=ge(xe()),{StateColor:k,FormatDate:M,FormatGender:j,FormatPosition:A}=we(),w=Se("uploadData"),m=B(!1),d=B(),f=B(),T=B(),V=B(),l=B({counMaster:{cmid:0,userName:"",userid:"",gender:"",tel:"",deptNo:"",deptName:"",cmQuest:"",cmState:"",receiver:"",applyDate:"",position:"",contactDate:"",closeDate:""},topics:"",subjects:[],counManages:[],cmStateTextList:[]}),se=y(()=>l.value.counMaster.userid+"@stust.edu.tw"),G=y(()=>{var t;return((t=l.value.cmStateTextList.find(a=>a.code===l.value.counMaster.cmState))==null?void 0:t.word)||""}),ne=y(()=>{var t;return((t=l.value.cmStateTextList.find(a=>a.code===l.value.counMaster.cmState))==null?void 0:t.code)==="1"?"派案":"結案"}),ue=y(()=>{var t;return((t=l.value.cmStateTextList.find(a=>a.code===l.value.counMaster.cmState))==null?void 0:t.code)==="1"?"#FFF176":"#EF9A9A"}),ce=y(()=>{var t;return((t=l.value.cmStateTextList.find(a=>a.code===l.value.counMaster.cmState))==null?void 0:t.code)==="1"?re:ve}),ie=y(()=>{var t;return((t=l.value.cmStateTextList.find(a=>a.code===l.value.counMaster.cmState))==null?void 0:t.code)==="1"?!(V.value&&T.value):!T.value}),h=y(()=>l.value.subjects.reduce((t,a)=>t+parseInt(a.csrValue),0)),de=y(()=>h.value>=0&&h.value<=5?"#2E7D32":h.value>5&&h.value<10?"#3949AB":h.value>9&&h.value<15?"#F57F17":"#B71C1C"),Q=y(()=>{var t;return((t=l.value.cmStateTextList.find(a=>a.code===l.value.counMaster.cmState))==null?void 0:t.code)==="1"?"聯繫時間":"結案時間"}),z=()=>he.currentRoute.value.name==="coordinator"&&l.value.counMaster.cmState==="1"||["ToBeConsulted","counselor"].includes(De().name.toString()),E={headers:{Authorization:`Bearer ${b.value}`}};(async(t,a)=>{await S.post("Counseling/master/Detail",{cmid:t,receiver:a},E).then(D=>l.value=D.data).catch(D=>{console.log(D),D.response?(m.value=!1,d.value=!0,f.value=D.response.data):(m.value=!1,d.value=!0,f.value="系統異常，請告知開發人員")})})(x.id,be(b.value).userid);const re=async()=>{const t={cmid:x.id,receiver:V.value,contactDate:T.value};await S.post("Counseling/master/Dispatch",t,E).then(()=>{m.value=!0,d.value=!0,f.value="派案成功"}).catch(a=>{a.response?(m.value=!1,d.value=!0,f.value=a.response.data):(m.value=!1,d.value=!0,f.value="系統異常，請告知開發人員")})},ve=async()=>{const t={cmid:x.id,closeDate:T.value};await S.post("Counseling/master/ClosedDate",t,E).then(()=>{m.value=!0,d.value=!0,f.value="結案成功"}).catch(a=>{console.log(a),a.response?(m.value=!1,d.value=!0,f.value=a.response.data):(m.value=!1,d.value=!0,f.value="系統異常，請告知開發人員")})};return(t,a)=>{const D=n("v-icon"),me=n("v-card-title"),i=n("v-col"),p=n("v-text-field"),U=n("v-row"),q=n("v-divider"),pe=n("v-textarea"),J=n("v-card-text"),O=n("v-select"),K=n("v-btn"),X=n("v-card"),Y=n("v-dialog"),fe=n("v-card-actions"),_e=ae("tooltip");return c(),v(W,null,[e(X,null,{default:o(()=>[e(me,null,{default:o(()=>[s("div",{class:"text-center",style:L({fontSize:t.$vuetify.display.xs?"24px":"30px",fontWeight:"bolder"})},"案號-"+P(t.id),5),le((c(),N(D,{class:"position-absolute right-0 top-0 ma-3",onClick:a[0]||(a[0]=u=>C("isActive",!1))},{default:o(()=>[I("mdi-close")]),_:1})),[[_e,"關閉","bottom"]])]),_:1}),e(J,{style:{"max-height":"600px"},class:"overflow-y-auto"},{default:o(()=>[e(U,{"no-gutters":""},{default:o(()=>[e(i,{cols:"12",style:L({fontSize:t.$vuetify.display.xs?"20px":"24px",fontWeight:"bolder"})},{default:o(()=>[I("案件資訊")]),_:1},8,["style"]),e(i,{cols:"12",sm:"6",md:"3"},{default:o(()=>[e(p,{class:r(t.$vuetify.display.xs?"":"ma-1 pa-1"),variant:"solo",flat:"",label:"接案心理師",density:"compact",readonly:"","model-value":l.value.counMaster.receiver},null,8,["class","model-value"])]),_:1}),e(i,{cols:"12",sm:"6",md:"3"},{default:o(()=>[e(p,{class:r(t.$vuetify.display.xs?"":"ma-1 pa-1"),variant:"solo",flat:"",label:"案件狀態",density:"compact",readonly:"",modelValue:G.value,"onUpdate:modelValue":a[1]||(a[1]=u=>G.value=u),"bg-color":g(k)(l.value.counMaster.cmState)},null,8,["class","modelValue","bg-color"])]),_:1}),e(i,{cols:"12",sm:"6",md:"3"},{default:o(()=>[e(p,{class:r(t.$vuetify.display.xs?"":"ma-1 pa-1"),variant:"solo",flat:"",label:"聯繫時間",density:"compact",readonly:"","model-value":g(M)(l.value.counMaster.contactDate)},null,8,["class","model-value"])]),_:1}),e(i,{cols:"12",sm:"6",md:"3"},{default:o(()=>[e(p,{class:r(t.$vuetify.display.xs?"":"ma-1 pa-1"),variant:"solo",flat:"",label:"結案時間",density:"compact",readonly:"","model-value":g(M)(l.value.counMaster.closeDate)},null,8,["class","model-value"])]),_:1})]),_:1}),e(q),e(U,{"no-gutters":""},{default:o(()=>[e(i,{cols:"12",style:L({fontSize:t.$vuetify.display.xs?"20px":"24px",fontWeight:"bolder"})},{default:o(()=>[I("申請表")]),_:1},8,["style"]),e(i,{cols:"12",sm:"4",md:"3"},{default:o(()=>[e(p,{class:r(t.$vuetify.display.xs?"":"ma-1 pa-1"),variant:"solo",flat:"",label:"姓名",density:"compact",readonly:"","model-value":l.value.counMaster.userName},null,8,["class","model-value"])]),_:1}),e(i,{cols:"12",sm:"4",md:"2"},{default:o(()=>[e(p,{class:r(t.$vuetify.display.xs?"":"ma-1 pa-1"),variant:"solo",flat:"",label:"性別",density:"compact",readonly:"","model-value":g(j)(l.value.counMaster.gender)},null,8,["class","model-value"])]),_:1}),e(i,{cols:"12",sm:"4",md:"3"},{default:o(()=>[e(p,{class:r(t.$vuetify.display.xs?"":"ma-1 pa-1"),variant:"solo",flat:"",label:"電話",density:"compact",readonly:"","model-value":l.value.counMaster.tel},null,8,["class","model-value"])]),_:1}),e(i,{cols:"12",sm:"6",md:"4"},{default:o(()=>[e(p,{class:r(t.$vuetify.display.xs?"":"ma-1 pa-1"),variant:"solo",flat:"",label:"Email",density:"compact",readonly:"","model-value":se.value},null,8,["class","model-value"])]),_:1}),e(i,{cols:"12",sm:"6",md:"4"},{default:o(()=>[e(p,{class:r(t.$vuetify.display.xs?"":"ma-1 pa-1"),variant:"solo",flat:"",label:"身分",density:"compact",readonly:"","model-value":g(A)(l.value.counMaster.position)},null,8,["class","model-value"])]),_:1}),e(i,{cols:"12",sm:"6",md:"4"},{default:o(()=>[e(p,{class:r(t.$vuetify.display.xs?"":"ma-1 pa-1"),variant:"solo",flat:"",label:"單位",density:"compact",readonly:"","model-value":l.value.counMaster.deptName},null,8,["class","model-value"])]),_:1}),e(i,{cols:"12",sm:"6",md:"4"},{default:o(()=>[e(p,{class:r(t.$vuetify.display.xs?"":"ma-1 pa-1"),variant:"solo",flat:"",label:"申請時間",density:"compact",readonly:"","model-value":g(M)(l.value.counMaster.applyDate)},null,8,["class","model-value"])]),_:1}),e(i,{cols:"12",md:"12"},{default:o(()=>[e(p,{class:r(t.$vuetify.display.xs?"":"ma-1 pa-1"),variant:"solo",flat:"",label:"晤談主題",density:"compact",readonly:"","model-value":l.value.topics},null,8,["class","model-value"])]),_:1}),e(i,{cols:"12"},{default:o(()=>[e(pe,{variant:"solo",flat:"",label:"簡述問題",density:"compact",readonly:"","no-resize":"","model-value":l.value.counMaster.cmQuest},null,8,["model-value"])]),_:1})]),_:1}),e(U,{"no-gutters":""},{default:o(()=>[e(i,{cols:"12",style:L({fontSize:t.$vuetify.display.xs?"20px":"24px",fontWeight:"bolder"})},{default:o(()=>[I("自我評分")]),_:1},8,["style"]),e(i,{cols:"12"},{default:o(()=>{var u;return[s("table",null,[Le,s("tbody",{class:r([parseInt((u=l.value.subjects[5])==null?void 0:u.csrValue)>=2?"SpecialSubject":""])},[(c(!0),v(W,null,ee(l.value.subjects,H=>(c(),v("tr",{key:l.value.subjects.indexOf(H)},[s("th",Ne,[s("span",null,P(H.csText),1)]),(c(),v(W,null,ee(5,Z=>s("td",{key:Z},[H.csrValue===(Z-1).toString()?(c(),v("span",Ie,"▉")):$("",!0)])),64))]))),128)),s("tr",null,[ze,s("td",Ee,[s("span",{style:L({color:de.value})},P(h.value)+"分",5)])])],2)])]}),_:1})]),_:1})]),_:1}),e(q,{class:"foot-divider"}),e(fe,{class:r(t.$vuetify.display.smAndDown?"justify-end":"")},{default:o(()=>[t.$vuetify.display.mdAndUp?(c(),v("div",Ue,[z()?(c(),v("div",He,[e(te,{mode:"input",density:"compact",newText:Q.value,onSelectDate:a[2]||(a[2]=u=>T.value=u)},null,8,["newText"])])):$("",!0),t.$route.name==="coordinator"&&l.value.counMaster.cmState==="1"?(c(),v("div",Pe,[e(O,{modelValue:V.value,"onUpdate:modelValue":a[3]||(a[3]=u=>V.value=u),items:l.value.counManages,"item-title":"userName","item-value":"userid",density:"compact",label:"心理師","prepend-icon":"mdi-account"},null,8,["modelValue","items"])])):$("",!0)])):(c(),v("div",We,[e(Y,{transition:"dialog-bottom-transition","max-width":"400px"},{activator:o(({props:u})=>[t.$route.name==="coordinator"&&l.value.counMaster.cmState!=="2"||t.$route.name!=="coordinator"&&l.value.counMaster.cmState!=="9"?(c(),N(K,Me({key:0,"prepend-icon":"mdi-cog",class:"mr-2",variant:"flat",color:"#64B5F6"},u,{text:l.value.counMaster.cmState==="1"?"派案設定":l.value.counMaster.cmState==="2"?"結案設定":""}),null,16,["text"])):$("",!0)]),default:o(()=>[e(X,null,{default:o(()=>[e(J,null,{default:o(()=>[z()?(c(),v("div",Re,[e(te,{mode:"input",density:"compact",newText:Q.value,onSelectDate:a[4]||(a[4]=u=>T.value=u)},null,8,["newText"])])):$("",!0),t.$route.name==="coordinator"&&l.value.counMaster.cmState==="1"?(c(),v("div",Ge,[e(O,{"hide-details":"",modelValue:V.value,"onUpdate:modelValue":a[5]||(a[5]=u=>V.value=u),items:l.value.counManages,"item-title":"userName","item-value":"userid",density:"compact",label:"心理師","prepend-inner-icon":"mdi-account"},null,8,["modelValue","items"])])):$("",!0)]),_:1})]),_:1})]),_:1})])),s("div",null,[z()?(c(),N(K,{key:0,"prepend-icon":"mdi-check-circle",text:ne.value,color:ue.value,disabled:ie.value,variant:"elevated",onClick:ce.value},null,8,["text","color","disabled","onClick"])):$("",!0)])]),_:1},8,["class"])]),_:1}),e(Y,{modelValue:d.value,"onUpdate:modelValue":a[8]||(a[8]=u=>d.value=u),persistent:""},{default:o(()=>[m.value?(c(),N(Ae,{key:0,content:f.value,dialog:d.value,onDialog:a[6]||(a[6]=u=>{d.value=u,g(w)&&g(w)(),C("isActive",!1)})},null,8,["content","dialog"])):(c(),N(Be,{key:1,content:f.value,dialog:d.value,onDialog:a[7]||(a[7]=u=>d.value=u)},null,8,["content","dialog"]))]),_:1},8,["modelValue"])],64)}}}),Xe=ke(Qe,[["__scopeId","data-v-402d615a"]]);export{Xe as C};
