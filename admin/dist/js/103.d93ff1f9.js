(self["webpackChunk_coreui_coreui_free_vue_admin_template"]=self["webpackChunk_coreui_coreui_free_vue_admin_template"]||[]).push([[103],{4234:function(e){let t={year:"numeric",month:"long",day:"numeric"};e.exports={dateFormatter:e=>new Date(e).toLocaleDateString("ru-RU",t),getAgeStr(e){return e>12?`${Math.trunc(e/12)} лет ${e%12} месяцев`:`${e} месяцев`}}},497:function(e,t,a){"use strict";a.d(t,{Z:function(){return p}});var o=a(3396),r=a(7139);const i=(0,o._)("div",{class:"order-toggle"},"tgl",-1),d={key:1},n={class:"d-grid gap-2 d-md-flex justify-content-md-center"};function l(e,t,a,l,s,m){const u=(0,o.up)("CCardHeader"),c=(0,o.up)("CTableHeaderCell"),p=(0,o.up)("CTableRow"),h=(0,o.up)("CTableHead"),f=(0,o.up)("CFormInput"),g=(0,o.up)("CTableDataCell"),w=(0,o.up)("CButton"),D=(0,o.up)("CTableBody"),k=(0,o.up)("CTable"),C=(0,o.up)("CCardBody"),y=(0,o.up)("CCard"),b=(0,o.up)("CCol"),_=(0,o.up)("CRow"),v=(0,o.up)("CPaginationItem"),P=(0,o.up)("CPagination");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(_,null,{default:(0,o.w5)((()=>[(0,o.Wm)(b,{md:12},{default:(0,o.w5)((()=>[(0,o.Wm)(y,{class:"mb-4"},{default:(0,o.w5)((()=>[(0,o.Wm)(u,null,{default:(0,o.w5)((()=>[(0,o.Uk)((0,r.zw)(a.name),1)])),_:1}),(0,o.Wm)(C,null,{default:(0,o.w5)((()=>[(0,o.Wm)(k,{align:"middle",class:"mb-0 border",hover:"",responsive:""},{default:(0,o.w5)((()=>[(0,o.Wm)(h,{color:"light"},{default:(0,o.w5)((()=>[(0,o.Wm)(p,null,{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(s.fieldsTransformed,(e=>((0,o.wg)(),(0,o.j4)(c,{key:e.name+"header",class:(0,r.C_)(["text-center",[e.order?"orderable":""]]),onClick:t=>m.changeOrder(e)},{default:(0,o.w5)((()=>[(0,o.Uk)((0,r.zw)(e.title)+" ",1),i])),_:2},1032,["class","onClick"])))),128)),(0,o.Wm)(c,{class:"text-center"},{default:(0,o.w5)((()=>[(0,o.Uk)("Действия")])),_:1})])),_:1})])),_:1}),(0,o.Wm)(D,null,{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(m.transformData(a.rows),((i,l)=>((0,o.wg)(),(0,o.j4)(p,{key:l+"row"},{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(i,((e,t)=>((0,o.wg)(),(0,o.j4)(g,{key:t+"row",class:"text-center"},{default:(0,o.w5)((()=>[s.updatingId===a.rows[l]?.id?((0,o.wg)(),(0,o.j4)(f,{key:0,modelValue:s.formData[a.fields[t]?.name],"onUpdate:modelValue":e=>s.formData[a.fields[t]?.name]=e},null,8,["modelValue","onUpdate:modelValue"])):((0,o.wg)(),(0,o.iD)("span",d,(0,r.zw)(e),1))])),_:2},1024)))),128)),(0,o.Wm)(g,null,{default:(0,o.w5)((()=>[(0,o._)("div",n,[s.updatingId===a.rows[l]?.id?((0,o.wg)(),(0,o.j4)(w,{key:0,color:"primary",size:"md",onClick:e=>m.editRow(l)},{default:(0,o.w5)((()=>[(0,o.Uk)(" Сохранить")])),_:2},1032,["onClick"])):(0,o.kq)("",!0),s.updatingId===a.rows[l]?.id?((0,o.wg)(),(0,o.j4)(w,{key:1,color:"light",size:"md",onClick:t[0]||(t[0]=e=>s.updatingId=!1)},{default:(0,o.w5)((()=>[(0,o.Uk)(" Отменить")])),_:1})):((0,o.wg)(!0),(0,o.iD)(o.HY,{key:2},(0,o.Ko)(a.actions,((t,a)=>((0,o.wg)(),(0,o.j4)(w,{key:a+"action",color:t?.color,size:"sm",onClick:o=>m.chooseAction(a,t,l,e.j,e.column)},{default:(0,o.w5)((()=>[(0,o.Uk)((0,r.zw)(a),1)])),_:2},1032,["color","onClick"])))),128))])])),_:2},1024)])),_:2},1024)))),128)),(0,o.Wm)(p)])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1}),(0,o.Wm)(P,{"aria-label":"Page navigation example"},{default:(0,o.w5)((()=>[a.lastPageNumber?((0,o.wg)(),(0,o.j4)(v,{key:0,onClick:m.firstPage},{default:(0,o.w5)((()=>[(0,o.Uk)("В начало")])),_:1},8,["onClick"])):(0,o.kq)("",!0),(0,o.Wm)(v,{onClick:m.previousPage},{default:(0,o.w5)((()=>[(0,o.Uk)("Назад")])),_:1},8,["onClick"]),(0,o.Wm)(v,{disabled:""},{default:(0,o.w5)((()=>[(0,o.Uk)((0,r.zw)(s.page),1)])),_:1}),(0,o.Wm)(v,{onClick:m.nextPage},{default:(0,o.w5)((()=>[(0,o.Uk)("Вперед")])),_:1},8,["onClick"]),a.lastPageNumber?((0,o.wg)(),(0,o.j4)(v,{key:1,onClick:m.lastPage},{default:(0,o.w5)((()=>[(0,o.Uk)("В конец")])),_:1},8,["onClick"])):(0,o.kq)("",!0)])),_:1})],64)}a(7658);var s=a(4234),m={props:{name:{type:String},fields:[],actions:[],rows:[],postData:{type:Function,default:()=>{}},updateRow:{type:Function,default:()=>{}},editMode:{type:String,default:"inline"},lastPageNumber:Number,getPageCount:Function},data(){return{fieldsTransformed:[],perPage:10,page:1,updatingId:!1,formData:{},orderDesc:!1,currentOrder:"id"}},async mounted(){this.fieldsTransformed=this.fields.map((e=>("object"===typeof e?e.title=e.title??e.name:e={name:e},e))),await this.postData(this.perPage,this.page,this.currentOrder,this.orderDesc),await this.getPageCount()},methods:{dateFormatter:s.dateFormatter,chooseAction(e,t,a){t&&(console.log("Изменить"===e&&"inline"===this.editMode,a),"Изменить"===e&&"inline"===this.editMode?(this.updatingId=this.rows[a]?.id,this.formData=this.rows[a]):t?.action(this.rows[a]))},async nextPage(){const e=await this.postData(this.perPage,this.page+1,this.currentOrder,this.orderDesc);e?.length>0&&this.page++},previousPage(){this.page>1&&this.page--,this.postData(this.perPage,this.page,this.currentOrder,this.orderDesc)},toPage(e){this.page=e,this.postData(this.perPage,this.page,this.currentOrder,this.orderDesc)},firstPage(){this.page=1,this.postData(this.perPage,this.page,this.currentOrder,this.orderDesc)},lastPage(){this.page=this.lastPageNumber,this.postData(this.perPage,this.page,this.currentOrder,this.orderDesc)},changeOrder(e){this.page=1,this.currentOrder===e.name?this.orderDesc=!this.orderDesc:this.currentOrder=e.name,this.postData(this.perPage,this.page,this.currentOrder,this.orderDesc)},editRow(e){this.updatingId=!1,this.updateRow(this.rows[e]?.id,this.formData)},transformData(e){return e?.map(this.transformDataEl)},transformDataEl(e){let t=[];for(let a of this.fields){const o=a.name.split(".")??a.split(".");let r=e;o?.forEach((e=>r=r?.[e])),"creation_date"!==a?.name&&"publication_date"!==a?.name||(r=(0,s.dateFormatter)(r)),"text"===a?.name&&(r=r.substr(0,100)),t.push(r??"")}return t}}},u=a(89);const c=(0,u.Z)(m,[["render",l]]);var p=c},9103:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return _}});var o=a(3396);function r(e,t,a,r,i,d){const n=(0,o.up)("AddPromoModal"),l=(0,o.up)("Table");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o.Wm)(n,{visible:i.formVisible,formData:i.formData,mode:e.formMode},null,8,["visible","formData","mode"]),(0,o.Wm)(l,{fields:i.tableFieldNames,postData:d.get,actions:i.dataActions,rows:i.rows,editMode:"form",name:"Промокоды"},null,8,["fields","postData","actions","rows"])])}var i=a(7139),d=a(9242);const n=e=>((0,o.dD)("data-v-3d4af77e"),e=e(),(0,o.Cn)(),e),l={class:"types-list"},s=n((()=>(0,o._)("span",null,"Тип",-1)));function m(e,t,a,r,n,m){const u=(0,o.up)("CButton"),c=(0,o.up)("CModalTitle"),p=(0,o.up)("CModalHeader"),h=(0,o.up)("CFormInput"),f=(0,o.up)("CFormCheck"),g=(0,o.up)("CForm"),w=(0,o.up)("CModalBody"),D=(0,o.up)("CModalFooter"),k=(0,o.up)("CModal");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(u,{color:"primary",onClick:m.addNewCode},{default:(0,o.w5)((()=>[(0,o.Uk)("Добавить промокод")])),_:1},8,["onClick"]),(0,o.Wm)(k,{backdrop:"static",alignment:"center",visible:a.visible,onClose:m.closeModal},{default:(0,o.w5)((()=>[(0,o.Wm)(p,null,{default:(0,o.w5)((()=>[(0,o.Wm)(c,null,{default:(0,o.w5)((()=>[(0,o.Uk)((0,i.zw)("new"===a.mode?"Добавить промокод":"Редактировать промокод"),1)])),_:1})])),_:1}),(0,o.Wm)(w,null,{default:(0,o.w5)((()=>[(0,o.Wm)(g,{ref:"add-file-form",novalidate:"",validated:n.formValid,onSubmit:(0,d.iM)(m.addPromo,["prevent"]),class:"add-user",style:{display:"'none'"}},{default:(0,o.w5)((()=>["new"===a.mode?((0,o.wg)(),(0,o.j4)(h,{key:0,class:"mb-3",modelValue:a.formData.code,"onUpdate:modelValue":t[0]||(t[0]=e=>a.formData.code=e),placeholder:"Промокод",id:"inputCode","aria-describedby":"inputGroupPrepend",maxlength:"255",required:"",feedbackValid:"Все ок",feedbackInvalid:"Введите корректный промокод"},null,8,["modelValue"])):((0,o.wg)(),(0,o.j4)(h,{key:1,class:"mb-3",modelValue:a.formData.code,"onUpdate:modelValue":t[1]||(t[1]=e=>a.formData.code=e),id:"inputCode",required:"",disabled:""},null,8,["modelValue"])),(0,o._)("div",l,[s,(0,o.Wm)(f,{id:"type-money",checked:"money"===a.formData.type,onInput:t[2]||(t[2]=e=>a.formData.type="money"),type:"radio",name:"type-money",value:"money",label:"Число"},null,8,["checked"]),(0,o.Wm)(f,{id:"type-procent",checked:"procent"===a.formData.type,onInput:t[3]||(t[3]=e=>a.formData.type="procent"),type:"radio",name:"type-procent",value:"procent",label:"Процент"},null,8,["checked"])]),(0,o.Wm)(f,{id:"flexCheckChecked",label:"Возможность использовать несколько раз",checked:!!a.formData.is_permanent,onInput:t[4]||(t[4]=e=>a.formData.is_permanent=!a.formData.is_permanent)},null,8,["checked"]),(0,o.Wm)(h,{class:"mb-3",modelValue:a.formData.count,"onUpdate:modelValue":t[5]||(t[5]=e=>a.formData.count=e),modelModifiers:{number:!0},label:"Количество использований",id:"inputCount","aria-describedby":"inputGroupPrepend",type:"number",required:"",feedbackValid:"Все ок",feedbackInvalid:"Введите корректное число"},null,8,["modelValue"]),(0,o.Wm)(h,{class:"mb-3",modelValue:a.formData.sum,"onUpdate:modelValue":t[6]||(t[6]=e=>a.formData.sum=e),modelModifiers:{number:!0},label:"Сумма / %",id:"inputSum","aria-describedby":"inputGroupPrepend",type:"number",required:"",feedbackValid:"Все ок",feedbackInvalid:"Введите корректное число"},null,8,["modelValue"])])),_:1},8,["validated","onSubmit"])])),_:1}),(0,o.Wm)(D,null,{default:(0,o.w5)((()=>[(0,o.Wm)(u,{color:"secondary",onClick:m.closeModal},{default:(0,o.w5)((()=>[(0,o.Uk)(" Отменить ")])),_:1},8,["onClick"]),"new"===a.mode?((0,o.wg)(),(0,o.j4)(u,{key:0,color:"primary",onClick:m.addPromo},{default:(0,o.w5)((()=>[(0,o.Uk)("Добавить промокод")])),_:1},8,["onClick"])):((0,o.wg)(),(0,o.j4)(u,{key:1,color:"primary",onClick:m.editPromo},{default:(0,o.w5)((()=>[(0,o.Uk)("Редактировать промокод")])),_:1},8,["onClick"]))])),_:1})])),_:1},8,["visible","onClose"])],64)}var u=a(6265),c=a.n(u),p=a(7123);const h=c().create({withCredentials:!0});var f={props:{mode:{required:!0,type:String,validator:e=>["new","edit"].includes(e.toLowerCase())},visible:!1,formData:{}},data(){return{formValid:!1}},mounted(){},updated(){this.formValid=!1},methods:{addNewCode(){p.Z.$emit("addNewCode")},closeModal(){p.Z.$emit("closeModal")},constractFromData(){if(!this.formData.code||!this.formData.count||!this.formData.sum||!this.formData.type)throw new Error;var e=new FormData;return e.append("code",this.formData.code),e.append("count",this.formData.count),e.append("sum",this.formData.sum),e.append("type",this.formData.type),e.append("is_permanent",this.formData.is_permanent),e},addPromo(){try{const e=this.constractFromData();h.post(this.$store.state.publicPath+"/api/admin/promos",e,{headers:{"Content-Type":"multipart/form-data"}}).then((()=>{p.Z.$emit("promoAdded")})).catch((e=>{p.Z.$emit("noresponse",e)}))}catch(e){this.formValid=!0}},editPromo(){try{const e=this.constractFromData(!0);h.put(this.$store.state.publicPath+"/api/admin/promos",e,{headers:{"Content-Type":"multipart/form-data"}}).then((()=>{p.Z.$emit("promoEdited")})).catch((e=>{p.Z.$emit("noresponse",e)}))}catch(e){console.log(e),this.formValid=!0}}}},g=a(89);const w=(0,g.Z)(f,[["render",m],["__scopeId","data-v-3d4af77e"]]);var D=w,k=a(497);const C=c().create({withCredentials:!0});var y={components:{AddPromoModal:D,Table:k.Z},data(){return{myApi:C,formVisible:!1,formData:{},rows:[],dataActions:{"Изменить":{action:this.change,color:"warning"},"Удалить":{action:this.delete,color:"danger"}},tableFieldNames:[{name:"code",title:"Промокод"},{name:"count",title:"Макс. использований"},{name:"used_count",title:"Использовано раз"},{name:"type",title:"Тип"},{name:"sum",title:"Сумма / %"}]}},created(){p.Z.$on("addNewCode",(()=>{this.formMode="new",this.formVisible=!0,this.formData={type:"money",is_permanent:!1}})),p.Z.$on("closeModal",(()=>{this.formVisible=!1,this.formData={type:"money"}})),p.Z.$on("promoAdded",(()=>{this.formVisible=!1,this.get(),this.formData={type:"money"}})),p.Z.$on("promoEdited",(()=>{this.formVisible=!1,this.get(),this.formData={type:"money"}}))},methods:{change(e){this.formVisible=!0,this.formData=e,this.formMode="edit"},get(e,t){return C.get(this.$store.state.publicPath+"/api/admin/promos/",{params:{take:e??10,page:t??1}}).then((e=>(e.data?.length>0&&(this.rows=e.data),e.data))).catch((e=>(p.Z.$emit("noresponse",e),!1)))},delete(e){const t=confirm("Вы действительно хотите удалить промокод?");if(t)return C.delete(this.$store.state.publicPath+"/api/admin/promos/",{data:{code:e.code}}).then((()=>{this.get(),p.Z.$emit("promoDeleted")})).catch((e=>{p.Z.$emit("noresponse",e)}))}}};const b=(0,g.Z)(y,[["render",r]]);var _=b}}]);
//# sourceMappingURL=103.d93ff1f9.js.map