import{d as E,u as $,s as j,a as J,b as K,c as O,r as S,o as Q,e as X,f as Y,w as l,p as Z,g as d,h as i,i as ee,v as te,k as o,l as s,m as B,n as u,q as ae,F as A,t as _,x as h,y as z,z as oe,A as se,_ as le}from"./index-DkzAPJNB.js";import{C as M}from"./CounMasterInfo-PZ6IITpm.js";import{u as ne,H as ce}from"./TableHeader-CiUJ5xRo.js";import{S as re}from"./SearchText-7uKoE6o6.js";const ie={class:"SearchPosition"},de={class:"text-center table"},ue={key:1},ve={key:2},pe={key:0},me=["colspan"],_e={class:"detail"},he=["colspan"],ge=["colspan"],xe={colspan:"2",class:"text-end"},Se=E({__name:"ProcessedView2",setup(fe){const{CTable1:f,CTableMobile1:D}=ce(),{axiosIns:P}=$(),{token:N}=j(J()),{StateColor:U,StateText:F,debounce:G}=ne(),b=K(),w=O(()=>b.xs.value?D:f),v=S([]),e=S({ItemPerPage:20,ItemsLength:0,Items:[],Loading:!1,Search:"",Title:"已處理列表",Width:"200px",CodeSet:[]}),p=S(1),L=S([]),y=S(!1);Q(()=>{setTimeout(()=>{y.value=!0},600)}),X(()=>{y.value=!1});const T={headers:{Authorization:`Bearer ${N.value}`}},V=async(a,n,I,C)=>{var x;const g={PageIndex:a,PageSize:n,UserName:C,SortBy:(x=I[0])==null?void 0:x.order};await P.get("Counseling/master/ProcessedTable",{params:g,...T}).then(m=>{e.value.Items=m.data.counMasterTable,e.value.ItemsLength=m.data.counMasterTableCount}).catch(m=>{console.log(m),e.value.Items=[],e.value.ItemsLength=e.value.Items.length}),e.value.Loading=!1};(async()=>{await P.get("api/CodeSet/CMState",T).then(a=>e.value.CodeSet=a.data).catch(()=>{e.value.CodeSet=[]})})(),Z("uploadData",()=>V(p.value,e.value.ItemPerPage,L.value,e.value.Search));const H=a=>{e.value.Loading=!0,e.value.Items=[],R(a)},R=G(a=>{p.value=a.page,e.value.ItemPerPage=a.itemsPerPage,L.value=a.sortBy,V(a.page,a.itemsPerPage,a.sortBy,a.search)},500);return(a,n)=>{const I=d("v-toolbar-title"),C=d("v-toolbar"),g=d("v-btn"),x=d("v-dialog"),m=d("v-pagination"),W=d("v-data-table-server"),q=d("v-container");return i(),Y(q,{fluid:""},{default:l(()=>[ee(o("div",ie,[s(re,{modelValue:e.value.Search,"onUpdate:modelValue":n[0]||(n[0]=t=>e.value.Search=t)},null,8,["modelValue"])],512),[[te,y.value]]),s(W,{height:"75vh",items:e.value.Items,expanded:v.value,"onUpdate:expanded":n[2]||(n[2]=t=>v.value=t),page:p.value,"onUpdate:page":n[3]||(n[3]=t=>p.value=t),"items-length":e.value.ItemsLength,"items-per-page":"20","item-value":"cmid",headers:w.value,search:e.value.Search,"onUpdate:options":H,class:"table-sticky",loading:e.value.Loading,"show-expand":_(b).xs.value},{top:l(()=>[s(C,{flat:""},{default:l(()=>[s(I,{class:"font-weight-bold text-center text-sm-h5"},{default:l(()=>[B("已處理申請列表")]),_:1})]),_:1})]),item:l(({item:t})=>[o("tr",de,[(i(!0),u(A,null,ae(w.value,c=>(i(),u("td",{key:c.key},[c.key==="cmState"?(i(),u("span",{key:0,style:se({color:_(U)(t.cmState)})},h(_(F)(t.cmState,e.value.CodeSet)),5)):c.key==="action"?(i(),u("span",ue,[s(x,{activator:"parent",persistent:"","max-width":"1000px"},{activator:l(({props:r})=>[s(g,z({size:"small",color:"info",text:"查看",ref_for:!0},r),null,16)]),default:l(({isActive:r})=>[s(M,{id:t.cmid,isActive:r.value,onIsActive:k=>r.value=k},null,8,["id","isActive","onIsActive"])]),_:2},1024)])):c.key==="data-table-expand"?(i(),u("span",ve,[s(g,{icon:v.value[0]==t.cmid?"mdi-chevron-up":"mdi-chevron-down",variant:"text",size:"small",onClick:()=>v.value[0]==t.cmid?v.value=[]:v.value=[t.cmid]},null,8,["icon","onClick"])])):(i(),u(A,{key:3},[B(h(t[c.key]),1)],64))]))),128))])]),"expanded-row":l(({columns:t,item:c})=>[_(b).xs.value?(i(),u("tr",pe,[o("td",{colspan:t.length,class:"pa-0"},[o("table",_e,[o("tr",null,[o("th",null,h(_(f)[1].title),1),o("td",{colspan:t.length-1},h(c.userName),9,he)]),o("tr",null,[o("th",null,h(_(f)[2].title),1),o("td",{colspan:t.length-1},h(c.topics),9,ge)]),o("tr",null,[o("td",xe,[s(x,{activator:"parent",persistent:"","max-width":"1000px"},{activator:l(({props:r})=>[s(g,z({size:"small",color:"info",text:"查看"},r),null,16)]),default:l(({isActive:r})=>[s(M,{id:c.cmid,isActive:r.value,onIsActive:k=>r.value=k},null,8,["id","isActive","onIsActive"])]),_:2},1024)])])])],8,me)])):oe("",!0)]),bottom:l(()=>[s(m,{modelValue:p.value,"onUpdate:modelValue":n[1]||(n[1]=t=>p.value=t),length:Math.ceil(e.value.ItemsLength/20),"total-visible":3},null,8,["modelValue","length"])]),_:1},8,["items","expanded","page","items-length","headers","search","loading","show-expand"])]),_:1})}}}),Pe=le(Se,[["__scopeId","data-v-a504741e"]]);export{Pe as default};
