(self["webpackChunk_coreui_coreui_free_vue_admin_template"]=self["webpackChunk_coreui_coreui_free_vue_admin_template"]||[]).push([[103],{4234:function(e){let t={year:"numeric",month:"long",day:"numeric"};e.exports={dateFormatter:e=>new Date(e).toLocaleDateString("ru-RU",t),getAgeStr(e){return e>12?`${Math.trunc(e/12)} лет ${e%12} месяцев`:`${e} месяцев`}}},6772:function(e,t,a){"use strict";a.d(t,{Z:function(){return p}});var o=a(3396),i=a(7139);const l={key:1},d={class:"d-grid gap-2 d-md-flex justify-content-md-center"};function n(e,t,a,n,r,s){const m=(0,o.up)("CCardHeader"),u=(0,o.up)("CTableHeaderCell"),p=(0,o.up)("CTableRow"),c=(0,o.up)("CTableHead"),f=(0,o.up)("CFormInput"),h=(0,o.up)("CTableDataCell"),w=(0,o.up)("CButton"),g=(0,o.up)("CTableBody"),k=(0,o.up)("CTable"),y=(0,o.up)("CCardBody"),C=(0,o.up)("CCard"),b=(0,o.up)("CCol"),D=(0,o.up)("CRow"),_=(0,o.up)("CPaginationItem"),v=(0,o.up)("CPagination");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(D,null,{default:(0,o.w5)((()=>[(0,o.Wm)(b,{md:12},{default:(0,o.w5)((()=>[(0,o.Wm)(C,{class:"mb-4"},{default:(0,o.w5)((()=>[(0,o.Wm)(m,null,{default:(0,o.w5)((()=>[(0,o.Uk)((0,i.zw)(a.name),1)])),_:1}),(0,o.Wm)(y,null,{default:(0,o.w5)((()=>[(0,o.Wm)(k,{align:"middle",class:"mb-0 border",hover:"",responsive:""},{default:(0,o.w5)((()=>[(0,o.Wm)(c,{color:"light"},{default:(0,o.w5)((()=>[(0,o.Wm)(p,null,{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(r.fieldNames,(e=>((0,o.wg)(),(0,o.j4)(u,{key:e+"header",class:"text-center"},{default:(0,o.w5)((()=>[(0,o.Uk)((0,i.zw)(e),1)])),_:2},1024)))),128)),(0,o.Wm)(u,{class:"text-center"},{default:(0,o.w5)((()=>[(0,o.Uk)("Действия")])),_:1})])),_:1})])),_:1}),(0,o.Wm)(g,null,{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(s.transformData(a.rows),((n,m)=>((0,o.wg)(),(0,o.j4)(p,{key:m+"row"},{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(n,((e,t)=>((0,o.wg)(),(0,o.j4)(h,{key:t+"row",class:"text-center"},{default:(0,o.w5)((()=>[r.updatingId===a.rows[m]?.id?((0,o.wg)(),(0,o.j4)(f,{key:0,modelValue:r.formData[a.fields[t]?.name],"onUpdate:modelValue":e=>r.formData[a.fields[t]?.name]=e},null,8,["modelValue","onUpdate:modelValue"])):((0,o.wg)(),(0,o.iD)("span",l,(0,i.zw)(e),1))])),_:2},1024)))),128)),(0,o.Wm)(h,null,{default:(0,o.w5)((()=>[(0,o._)("div",d,[r.updatingId===a.rows[m]?.id?((0,o.wg)(),(0,o.j4)(w,{key:0,color:"primary",size:"md",onClick:e=>s.editRow(m)},{default:(0,o.w5)((()=>[(0,o.Uk)(" Сохранить")])),_:2},1032,["onClick"])):(0,o.kq)("",!0),r.updatingId===a.rows[m]?.id?((0,o.wg)(),(0,o.j4)(w,{key:1,color:"light",size:"md",onClick:t[0]||(t[0]=e=>r.updatingId=!1)},{default:(0,o.w5)((()=>[(0,o.Uk)(" Отменить")])),_:1})):((0,o.wg)(!0),(0,o.iD)(o.HY,{key:2},(0,o.Ko)(a.actions,((t,a)=>((0,o.wg)(),(0,o.j4)(w,{key:a+"action",color:t?.color,size:"sm",onClick:o=>s.chooseAction(a,t,m,e.j,e.column)},{default:(0,o.w5)((()=>[(0,o.Uk)((0,i.zw)(a),1)])),_:2},1032,["color","onClick"])))),128))])])),_:2},1024)])),_:2},1024)))),128)),(0,o.Wm)(p)])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1}),(0,o.Wm)(v,{"aria-label":"Page navigation example"},{default:(0,o.w5)((()=>[a.lastPageNumber?((0,o.wg)(),(0,o.j4)(_,{key:0,onClick:s.firstPage},{default:(0,o.w5)((()=>[(0,o.Uk)("В начало")])),_:1},8,["onClick"])):(0,o.kq)("",!0),(0,o.Wm)(_,{onClick:s.previousPage},{default:(0,o.w5)((()=>[(0,o.Uk)("Назад")])),_:1},8,["onClick"]),(0,o.Wm)(_,{disabled:""},{default:(0,o.w5)((()=>[(0,o.Uk)((0,i.zw)(r.page),1)])),_:1}),(0,o.Wm)(_,{onClick:s.nextPage},{default:(0,o.w5)((()=>[(0,o.Uk)("Вперед")])),_:1},8,["onClick"]),a.lastPageNumber?((0,o.wg)(),(0,o.j4)(_,{key:1,onClick:s.lastPage},{default:(0,o.w5)((()=>[(0,o.Uk)("В конец")])),_:1},8,["onClick"])):(0,o.kq)("",!0)])),_:1})],64)}a(7658);var r=a(4234),s={props:{name:{type:String},fields:[],actions:[],rows:[],postData:{type:Function,default:()=>{}},updateRow:{type:Function,default:()=>{}},editMode:{type:String,default:"inline"},lastPageNumber:Number},data(){return{fieldNames:[],perPage:10,page:1,updatingId:!1,formData:{}}},async mounted(){this.fieldNames=this.fields.map((e=>"object"===typeof e?e.title??e.name:e)),await this.postData(this.perPage,this.page),await this.getPageCount()},methods:{dateFormatter:r.dateFormatter,chooseAction(e,t,a){t&&(console.log("Изменить"===e&&"inline"===this.editMode,a),"Изменить"===e&&"inline"===this.editMode?(this.updatingId=this.rows[a]?.id,this.formData=this.rows[a]):t?.action(this.rows[a]))},async nextPage(){const e=await this.postData(this.perPage,this.page+1);e?.length>0&&this.page++},previousPage(){this.page>1&&this.page--,this.postData(this.perPage,this.page)},toPage(e){this.page=e,this.postData(this.perPage,this.page)},firstPage(){this.page=1,this.postData(this.perPage,this.page)},lastPage(){this.page=this.lastPageNumber,this.postData(this.perPage,this.page)},editRow(e){this.updatingId=!1,this.updateRow(this.rows[e]?.id,this.formData)},transformData(e){return e?.map(this.transformDataEl)},transformDataEl(e){let t=[];for(let a of this.fields){const o=a.name.split(".")??a.split(".");let i=e;o?.forEach((e=>i=i?.[e])),"creation_date"!==a?.name&&"publication_date"!==a?.name||(i=(0,r.dateFormatter)(i)),"text"===a?.name&&(i=i.substr(0,100)),t.push(i??"")}return t}}},m=a(89);const u=(0,m.Z)(s,[["render",n]]);var p=u},9103:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return _}});var o=a(3396);function i(e,t,a,i,l,d){const n=(0,o.up)("AddPromoModal"),r=(0,o.up)("Table");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o.Wm)(n,{visible:l.formVisible,formData:l.formData,mode:e.formMode},null,8,["visible","formData","mode"]),(0,o.Wm)(r,{fields:l.tableFieldNames,postData:d.get,actions:l.dataActions,rows:l.rows,editMode:"form",name:"Промокоды"},null,8,["fields","postData","actions","rows"])])}var l=a(7139),d=a(9242);const n=e=>((0,o.dD)("data-v-3d4af77e"),e=e(),(0,o.Cn)(),e),r={class:"types-list"},s=n((()=>(0,o._)("span",null,"Тип",-1)));function m(e,t,a,i,n,m){const u=(0,o.up)("CButton"),p=(0,o.up)("CModalTitle"),c=(0,o.up)("CModalHeader"),f=(0,o.up)("CFormInput"),h=(0,o.up)("CFormCheck"),w=(0,o.up)("CForm"),g=(0,o.up)("CModalBody"),k=(0,o.up)("CModalFooter"),y=(0,o.up)("CModal");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(u,{color:"primary",onClick:m.addNewCode},{default:(0,o.w5)((()=>[(0,o.Uk)("Добавить промокод")])),_:1},8,["onClick"]),(0,o.Wm)(y,{backdrop:"static",alignment:"center",visible:a.visible,onClose:m.closeModal},{default:(0,o.w5)((()=>[(0,o.Wm)(c,null,{default:(0,o.w5)((()=>[(0,o.Wm)(p,null,{default:(0,o.w5)((()=>[(0,o.Uk)((0,l.zw)("new"===a.mode?"Добавить промокод":"Редактировать промокод"),1)])),_:1})])),_:1}),(0,o.Wm)(g,null,{default:(0,o.w5)((()=>[(0,o.Wm)(w,{ref:"add-file-form",novalidate:"",validated:n.formValid,onSubmit:(0,d.iM)(m.addPromo,["prevent"]),class:"add-user",style:{display:"'none'"}},{default:(0,o.w5)((()=>["new"===a.mode?((0,o.wg)(),(0,o.j4)(f,{key:0,class:"mb-3",modelValue:a.formData.code,"onUpdate:modelValue":t[0]||(t[0]=e=>a.formData.code=e),placeholder:"Промокод",id:"inputCode","aria-describedby":"inputGroupPrepend",maxlength:"255",required:"",feedbackValid:"Все ок",feedbackInvalid:"Введите корректный промокод"},null,8,["modelValue"])):((0,o.wg)(),(0,o.j4)(f,{key:1,class:"mb-3",modelValue:a.formData.code,"onUpdate:modelValue":t[1]||(t[1]=e=>a.formData.code=e),id:"inputCode",required:"",disabled:""},null,8,["modelValue"])),(0,o._)("div",r,[s,(0,o.Wm)(h,{id:"type-money",checked:"money"===a.formData.type,onInput:t[2]||(t[2]=e=>a.formData.type="money"),type:"radio",name:"type-money",value:"money",label:"Число"},null,8,["checked"]),(0,o.Wm)(h,{id:"type-procent",checked:"procent"===a.formData.type,onInput:t[3]||(t[3]=e=>a.formData.type="procent"),type:"radio",name:"type-procent",value:"procent",label:"Процент"},null,8,["checked"])]),(0,o.Wm)(h,{id:"flexCheckChecked",label:"Возможность использовать несколько раз",checked:!!a.formData.is_permanent,onInput:t[4]||(t[4]=e=>a.formData.is_permanent=!a.formData.is_permanent)},null,8,["checked"]),(0,o.Wm)(f,{class:"mb-3",modelValue:a.formData.count,"onUpdate:modelValue":t[5]||(t[5]=e=>a.formData.count=e),modelModifiers:{number:!0},label:"Количество использований",id:"inputCount","aria-describedby":"inputGroupPrepend",type:"number",required:"",feedbackValid:"Все ок",feedbackInvalid:"Введите корректное число"},null,8,["modelValue"]),(0,o.Wm)(f,{class:"mb-3",modelValue:a.formData.sum,"onUpdate:modelValue":t[6]||(t[6]=e=>a.formData.sum=e),modelModifiers:{number:!0},label:"Сумма / %",id:"inputSum","aria-describedby":"inputGroupPrepend",type:"number",required:"",feedbackValid:"Все ок",feedbackInvalid:"Введите корректное число"},null,8,["modelValue"])])),_:1},8,["validated","onSubmit"])])),_:1}),(0,o.Wm)(k,null,{default:(0,o.w5)((()=>[(0,o.Wm)(u,{color:"secondary",onClick:m.closeModal},{default:(0,o.w5)((()=>[(0,o.Uk)(" Отменить ")])),_:1},8,["onClick"]),"new"===a.mode?((0,o.wg)(),(0,o.j4)(u,{key:0,color:"primary",onClick:m.addPromo},{default:(0,o.w5)((()=>[(0,o.Uk)("Добавить промокод")])),_:1},8,["onClick"])):((0,o.wg)(),(0,o.j4)(u,{key:1,color:"primary",onClick:m.editPromo},{default:(0,o.w5)((()=>[(0,o.Uk)("Редактировать промокод")])),_:1},8,["onClick"]))])),_:1})])),_:1},8,["visible","onClose"])],64)}var u=a(6265),p=a.n(u),c=a(7123);const f=p().create({withCredentials:!0});var h={props:{mode:{required:!0,type:String,validator:e=>["new","edit"].includes(e.toLowerCase())},visible:!1,formData:{}},data(){return{formValid:!1}},mounted(){},updated(){this.formValid=!1},methods:{addNewCode(){c.Z.$emit("addNewCode")},closeModal(){c.Z.$emit("closeModal")},constractFromData(){if(!this.formData.code||!this.formData.count||!this.formData.sum||!this.formData.type)throw new Error;var e=new FormData;return e.append("code",this.formData.code),e.append("count",this.formData.count),e.append("sum",this.formData.sum),e.append("type",this.formData.type),e.append("is_permanent",this.formData.is_permanent),e},addPromo(){try{const e=this.constractFromData();f.post(this.$store.state.publicPath+"/api/admin/promos",e,{headers:{"Content-Type":"multipart/form-data"}}).then((()=>{c.Z.$emit("promoAdded")})).catch((e=>{c.Z.$emit("noresponse",e)}))}catch(e){this.formValid=!0}},editPromo(){try{const e=this.constractFromData(!0);f.put(this.$store.state.publicPath+"/api/admin/promos",e,{headers:{"Content-Type":"multipart/form-data"}}).then((()=>{c.Z.$emit("promoEdited")})).catch((e=>{c.Z.$emit("noresponse",e)}))}catch(e){console.log(e),this.formValid=!0}}}},w=a(89);const g=(0,w.Z)(h,[["render",m],["__scopeId","data-v-3d4af77e"]]);var k=g,y=a(6772);const C=p().create({withCredentials:!0});var b={components:{AddPromoModal:k,Table:y.Z},data(){return{myApi:C,formVisible:!1,formData:{},rows:[],dataActions:{"Изменить":{action:this.change,color:"warning"},"Удалить":{action:this.delete,color:"danger"}},tableFieldNames:[{name:"code",title:"Промокод"},{name:"count",title:"Макс. использований"},{name:"used_count",title:"Использовано раз"},{name:"type",title:"Тип"},{name:"sum",title:"Сумма / %"}]}},created(){c.Z.$on("addNewCode",(()=>{this.formMode="new",this.formVisible=!0,this.formData={type:"money",is_permanent:!1}})),c.Z.$on("closeModal",(()=>{this.formVisible=!1,this.formData={type:"money"}})),c.Z.$on("promoAdded",(()=>{this.formVisible=!1,this.get(),this.formData={type:"money"}})),c.Z.$on("promoEdited",(()=>{this.formVisible=!1,this.get(),this.formData={type:"money"}}))},methods:{change(e){this.formVisible=!0,this.formData=e,this.formMode="edit"},get(e,t){return C.get(this.$store.state.publicPath+"/api/admin/promos/",{params:{take:e??10,page:t??1}}).then((e=>(e.data?.length>0&&(this.rows=e.data),e.data))).catch((e=>(c.Z.$emit("noresponse",e),!1)))},delete(e){const t=confirm("Вы действительно хотите удалить промокод?");if(t)return C.delete(this.$store.state.publicPath+"/api/admin/promos/",{data:{code:e.code}}).then((()=>{this.get(),c.Z.$emit("promoDeleted")})).catch((e=>{c.Z.$emit("noresponse",e)}))}}};const D=(0,w.Z)(b,[["render",i]]);var _=D}}]);
//# sourceMappingURL=103.76e78de8.js.map