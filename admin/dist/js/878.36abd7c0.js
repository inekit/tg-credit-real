(self["webpackChunk_coreui_coreui_free_vue_admin_template"]=self["webpackChunk_coreui_coreui_free_vue_admin_template"]||[]).push([[878],{4234:function(e){let t={year:"numeric",month:"long",day:"numeric"};e.exports={dateFormatter:e=>new Date(e).toLocaleDateString("ru-RU",t),getAgeStr(e){return e>12?`${Math.trunc(e/12)} лет ${e%12} месяцев`:`${e} месяцев`}}},2934:function(e,t,a){"use strict";a.d(t,{Z:function(){return c}});var o=a(3396),i=a(7139);const r={key:1},l={class:"d-grid gap-2 d-md-flex justify-content-md-center"};function s(e,t,a,s,n,d){const u=(0,o.up)("CCardHeader"),m=(0,o.up)("CTableHeaderCell"),c=(0,o.up)("CTableRow"),p=(0,o.up)("CTableHead"),h=(0,o.up)("CFormInput"),f=(0,o.up)("CTableDataCell"),g=(0,o.up)("CButton"),w=(0,o.up)("CTableBody"),C=(0,o.up)("CTable"),b=(0,o.up)("CCardBody"),k=(0,o.up)("CCard"),_=(0,o.up)("CCol"),D=(0,o.up)("CRow"),y=(0,o.up)("CPaginationItem"),P=(0,o.up)("CPagination");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(D,null,{default:(0,o.w5)((()=>[(0,o.Wm)(_,{md:12},{default:(0,o.w5)((()=>[(0,o.Wm)(k,{class:"mb-4"},{default:(0,o.w5)((()=>[(0,o.Wm)(u,null,{default:(0,o.w5)((()=>[(0,o.Uk)((0,i.zw)(a.name),1)])),_:1}),(0,o.Wm)(b,null,{default:(0,o.w5)((()=>[(0,o.Wm)(C,{align:"middle",class:"mb-0 border",hover:"",responsive:""},{default:(0,o.w5)((()=>[(0,o.Wm)(p,{color:"light"},{default:(0,o.w5)((()=>[(0,o.Wm)(c,null,{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(n.fieldNames,(e=>((0,o.wg)(),(0,o.j4)(m,{key:e+"header",class:"text-center"},{default:(0,o.w5)((()=>[(0,o.Uk)((0,i.zw)(e),1)])),_:2},1024)))),128)),(0,o.Wm)(m,{class:"text-center"},{default:(0,o.w5)((()=>[(0,o.Uk)("Действия")])),_:1})])),_:1})])),_:1}),(0,o.Wm)(w,null,{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(d.transformData(a.rows),((s,u)=>((0,o.wg)(),(0,o.j4)(c,{key:u+"row"},{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(s,((e,t)=>((0,o.wg)(),(0,o.j4)(f,{key:t+"row",class:"text-center"},{default:(0,o.w5)((()=>[n.updatingId===a.rows[u]?.id?((0,o.wg)(),(0,o.j4)(h,{key:0,modelValue:n.formData[a.fields[t]?.name],"onUpdate:modelValue":e=>n.formData[a.fields[t]?.name]=e},null,8,["modelValue","onUpdate:modelValue"])):((0,o.wg)(),(0,o.iD)("span",r,(0,i.zw)(e),1))])),_:2},1024)))),128)),(0,o.Wm)(f,null,{default:(0,o.w5)((()=>[(0,o._)("div",l,[n.updatingId===a.rows[u]?.id?((0,o.wg)(),(0,o.j4)(g,{key:0,color:"primary",size:"md",onClick:e=>d.editRow(u)},{default:(0,o.w5)((()=>[(0,o.Uk)(" Сохранить")])),_:2},1032,["onClick"])):(0,o.kq)("",!0),n.updatingId===a.rows[u]?.id?((0,o.wg)(),(0,o.j4)(g,{key:1,color:"light",size:"md",onClick:t[0]||(t[0]=e=>n.updatingId=!1)},{default:(0,o.w5)((()=>[(0,o.Uk)(" Отменить")])),_:1})):((0,o.wg)(!0),(0,o.iD)(o.HY,{key:2},(0,o.Ko)(a.actions,((t,a)=>((0,o.wg)(),(0,o.j4)(g,{key:a+"action",color:t?.color,size:"sm",onClick:o=>d.chooseAction(a,t,u,e.j,e.column)},{default:(0,o.w5)((()=>[(0,o.Uk)((0,i.zw)(a),1)])),_:2},1032,["color","onClick"])))),128))])])),_:2},1024)])),_:2},1024)))),128)),(0,o.Wm)(c)])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1}),(0,o.Wm)(P,{"aria-label":"Page navigation example"},{default:(0,o.w5)((()=>[a.lastPageNumber?((0,o.wg)(),(0,o.j4)(y,{key:0,onClick:d.firstPage},{default:(0,o.w5)((()=>[(0,o.Uk)("В начало")])),_:1},8,["onClick"])):(0,o.kq)("",!0),(0,o.Wm)(y,{onClick:d.previousPage},{default:(0,o.w5)((()=>[(0,o.Uk)("Назад")])),_:1},8,["onClick"]),(0,o.Wm)(y,{disabled:""},{default:(0,o.w5)((()=>[(0,o.Uk)((0,i.zw)(n.page),1)])),_:1}),a.lastPageNumber?((0,o.wg)(),(0,o.j4)(y,{key:1,onClick:d.lastPage},{default:(0,o.w5)((()=>[(0,o.Uk)("В конец")])),_:1},8,["onClick"])):(0,o.kq)("",!0)])),_:1})],64)}a(7658);var n=a(4234),d={props:{name:{type:String},fields:[],actions:[],rows:[],postData:{type:Function,default:()=>{}},updateRow:{type:Function,default:()=>{}},editMode:{type:String,default:"inline"},lastPageNumber:Number},data(){return{fieldNames:[],perPage:10,page:1,updatingId:!1,formData:{}}},async mounted(){this.fieldNames=this.fields.map((e=>"object"===typeof e?e.title??e.name:e)),await this.postData(this.perPage,this.page),await this.getPageCount()},methods:{dateFormatter:n.dateFormatter,chooseAction(e,t,a){t&&(console.log("Изменить"===e&&"inline"===this.editMode,a),"Изменить"===e&&"inline"===this.editMode?(this.updatingId=this.rows[a]?.id,this.formData=this.rows[a]):t?.action(this.rows[a]))},async nextPage(){const e=await this.postData(this.perPage,this.page+1);e?.length>0&&this.page++},previousPage(){this.page>1&&this.page--,this.postData(this.perPage,this.page)},toPage(e){this.page=e,this.postData(this.perPage,this.page)},firstPage(){this.page=1,this.postData(this.perPage,this.page)},lastPage(){this.page=this.lastPageNumber,this.postData(this.perPage,this.page)},editRow(e){this.updatingId=!1,this.updateRow(this.rows[e]?.id,this.formData)},transformData(e){return e?.map(this.transformDataEl)},transformDataEl(e){let t=[];for(let a of this.fields){const o=a.name.split(".")??a.split(".");let i=e;o?.forEach((e=>i=i?.[e])),"creation_date"!==a?.name&&"publication_date"!==a?.name||(i=(0,n.dateFormatter)(i)),"text"===a?.name&&(i=i.substr(0,100)),t.push(i??"")}return t}}},u=a(89);const m=(0,u.Z)(d,[["render",s]]);var c=m},8878:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return k}});var o=a(3396);function i(e,t,a,i,r,l){const s=(0,o.up)("OrderModal"),n=(0,o.up)("CFormInput"),d=(0,o.up)("Table");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o.Wm)(s,{visible:r.formVisible,formData:r.formData,mode:e.formMode},null,8,["visible","formData","mode"]),(0,o.Wm)(n,{class:"mb-4",type:"search",modelValue:e.searchQuery,"onUpdate:modelValue":t[0]||(t[0]=t=>e.searchQuery=t),onChange:t[1]||(t[1]=e=>{l.get(),l.getPageCount()}),placeholder:"Поиск"},null,8,["modelValue"]),((0,o.wg)(),(0,o.j4)(d,{key:r.tableKey,fields:r.tableFieldNames,postData:l.get,actions:r.dataActions,rows:r.rows,editMode:"form",lastPageNumber:l.getPageCount,name:"Заказы"},null,8,["fields","postData","actions","rows","lastPageNumber"]))])}a(7658);var r=a(7139),l=a(9242);function s(e,t,a,i,s,n){const d=(0,o.up)("CModalTitle"),u=(0,o.up)("CModalHeader"),m=(0,o.up)("CFormInput"),c=(0,o.up)("CFormTextarea"),p=(0,o.up)("CForm"),h=(0,o.up)("CModalBody"),f=(0,o.up)("CButton"),g=(0,o.up)("CModalFooter"),w=(0,o.up)("CModal");return(0,o.wg)(),(0,o.j4)(w,{backdrop:"static",alignment:"center",visible:a.visible,onClose:n.closeModal},{default:(0,o.w5)((()=>[(0,o.Wm)(u,null,{default:(0,o.w5)((()=>[(0,o.Wm)(d,null,{default:(0,o.w5)((()=>[(0,o.Uk)("Заказ № "+(0,r.zw)(a.formData.id),1)])),_:1})])),_:1}),(0,o.Wm)(h,null,{default:(0,o.w5)((()=>[(0,o.Wm)(p,{ref:"add-file-form",novalidate:"",validated:s.formValid,onSubmit:(0,l.iM)(n.addTag,["prevent"]),class:"add-user",style:{display:"'none'"}},{default:(0,o.w5)((()=>[(0,o.Wm)(m,{class:"mb-3",modelValue:a.formData.name,"onUpdate:modelValue":t[0]||(t[0]=e=>a.formData.name=e),placeholder:"Тег",maxlength:"255",required:"",feedbackValid:"Все ок",feedbackInvalid:"Введите корректный тег"},null,8,["modelValue"]),(0,o.Wm)(c,{modelValue:a.formData.description,"onUpdate:modelValue":t[1]||(t[1]=e=>a.formData.description=e),placeholder:"Описание",required:""},null,8,["modelValue"])])),_:1},8,["validated","onSubmit"])])),_:1}),(0,o.Wm)(g,null,{default:(0,o.w5)((()=>[(0,o.Wm)(f,{color:"secondary",onClick:n.closeModal},{default:(0,o.w5)((()=>[(0,o.Uk)(" Отменить ")])),_:1},8,["onClick"]),(0,o.Wm)(f,{color:"primary",onClick:n.addTag},{default:(0,o.w5)((()=>[(0,o.Uk)("Изменить заказ")])),_:1},8,["onClick"])])),_:1})])),_:1},8,["visible","onClose"])}var n=a(6265),d=a.n(n),u=a(7123);const m=d().create({withCredentials:!0});var c={props:{visible:{required:!0,type:Boolean,default:()=>!1},formData:{required:!0,type:Object,default:()=>({name:"",description:""})}},data(){return{formValid:!1}},updated(){this.formValid=!1},methods:{addNewTag(){u.Z.$emit("addNewTag")},closeModal(){u.Z.$emit("closeModal")},constractFromData(){if(!this.formData.name||!this.formData.description)throw new Error;var e=new FormData;return e.append("name",this.formData.name),e.append("description",this.formData.description),e},addTag(){try{const e=this.constractFromData();m.post(this.$store.state.publicPath+"/api/admin/tags",e,{headers:{"Content-Type":"multipart/form-data"}}).then((()=>{u.Z.$emit("tagAdded")})).catch((e=>{u.Z.$emit("noresponse",e)}))}catch(e){this.formValid=!0}}}},p=a(89);const h=(0,p.Z)(c,[["render",s],["__scopeId","data-v-77952cb5"]]);var f=h,g=a(2934);const w=d().create({withCredentials:!0});var C={name:"Orders",components:{OrderModal:f,Table:g.Z},data(){return{myApi:w,formVisible:!1,formData:{},rows:[],tableKey:1,dataActions:{"К заказу":{action:this.routeToPosts,color:"primary"},"Удалить":{action:this.delete,color:"danger"}},tableFieldNames:[{name:"id",title:"ID"},{name:"fio",title:"ФИО"},{name:"username",title:"Юзернейм"},{name:"address",title:"Адрес"},{name:"phone",title:"Телефон"},{name:"orders_count",title:"Кол-во заказов клиента"},{name:"creation_date",title:"Дата создания"},{name:"status",title:"Статус"}]}},created(){u.Z.$on("closeModal",(()=>{this.formVisible=!1,this.formData={name:"",description:""}}))},mounted(){this.sockets.subscribe("UPDATE_ORDERS",(()=>{console.log("updated"),this.tableKey++}))},methods:{change(e){this.formVisible=!0,this.formData=e,this.formMode="edit"},get(e,t){return w.get(this.$store.state.publicPath+"/api/admin/orders/",{params:{take:e??10,page:t??1,searchQuery:this.searchQuery}}).then((e=>(e.data?.length>0&&(this.rows=e.data),e.data))).catch((e=>(u.Z.$emit("noresponse",e),!1)))},getPageCount(){return w.get(this.$store.state.publicPath+"/api/admin/orders_count/",{params:{searchQuery:this.searchQuery}}).then((e=>e.data.orders_count)).catch((e=>(u.Z.$emit("noresponse",e),!1)))},delete(e){const t=confirm("Вы действительно хотите удалить заказ?");if(t)return w.delete(this.$store.state.publicPath+"/api/admin/orders/",{data:{id:e.id}}).then((()=>{this.get(),this.getPageCount(),u.Z.$emit("orderDeleted")})).catch((e=>{u.Z.$emit("noresponse",e)}))},routeToPosts(e){this.$router.push("/order/"+e.id)}}};const b=(0,p.Z)(C,[["render",i]]);var k=b}}]);
//# sourceMappingURL=878.36abd7c0.js.map