(self["webpackChunk_coreui_coreui_free_vue_admin_template"]=self["webpackChunk_coreui_coreui_free_vue_admin_template"]||[]).push([[411],{4234:function(e){let t={year:"numeric",month:"long",day:"numeric"};e.exports={dateFormatter:e=>new Date(e).toLocaleDateString("ru-RU",t),getAgeStr(e){return e>12?`${Math.trunc(e/12)} лет ${e%12} месяцев`:`${e} месяцев`}}},5393:function(e,t,a){"use strict";a.d(t,{Z:function(){return h}});var r=a(3396),o=a(7139);const i={class:"order-toggle"},s=["src"],l={key:1},n={class:"d-grid gap-2 d-md-flex justify-content-md-center"};function d(e,t,d,u,m,c){const p=(0,r.up)("CCardHeader"),h=(0,r.up)("CTableHeaderCell"),g=(0,r.up)("CTableRow"),f=(0,r.up)("CTableHead"),w=(0,r.up)("CFormInput"),C=(0,r.up)("CTableDataCell"),y=(0,r.up)("CButton"),D=(0,r.up)("CTableBody"),_=(0,r.up)("CTable"),k=(0,r.up)("CCardBody"),b=(0,r.up)("CCard"),P=(0,r.up)("CCol"),v=(0,r.up)("CRow"),M=(0,r.up)("CPaginationItem"),W=(0,r.up)("CPagination");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(v,null,{default:(0,r.w5)((()=>[(0,r.Wm)(P,{md:12},{default:(0,r.w5)((()=>[(0,r.Wm)(b,{class:"mb-4"},{default:(0,r.w5)((()=>[(0,r.Wm)(p,null,{default:(0,r.w5)((()=>[(0,r.Uk)((0,o.zw)(d.name),1)])),_:1}),(0,r.Wm)(k,null,{default:(0,r.w5)((()=>[(0,r.Wm)(_,{align:"middle",class:"mb-0 border",hover:"",responsive:""},{default:(0,r.w5)((()=>[(0,r.Wm)(f,{color:"light"},{default:(0,r.w5)((()=>[(0,r.Wm)(g,null,{default:(0,r.w5)((()=>[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(m.fieldsTransformed,(e=>((0,r.wg)(),(0,r.j4)(h,{key:e.name+"header",class:(0,o.C_)(["text-center",[e.order?"orderable":"",e.name===m.currentOrder?"current":"",!0===m.orderDesc&&e.name===m.currentOrder?"desc":""]]),onClick:t=>c.changeOrder(e)},{default:(0,r.w5)((()=>[(0,r._)("div",i,[(0,r._)("img",{src:a(746)},null,8,s)]),(0,r.Uk)(" "+(0,o.zw)(e.title),1)])),_:2},1032,["class","onClick"])))),128)),(0,r.Wm)(h,{class:"text-center"},{default:(0,r.w5)((()=>[(0,r.Uk)("Действия")])),_:1})])),_:1})])),_:1}),(0,r.Wm)(D,null,{default:(0,r.w5)((()=>[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(c.transformData(d.rows),((a,i)=>((0,r.wg)(),(0,r.j4)(g,{key:i+"row"},{default:(0,r.w5)((()=>[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(a,((e,t)=>((0,r.wg)(),(0,r.j4)(C,{key:t+"row",class:"text-center"},{default:(0,r.w5)((()=>[m.updatingId===d.rows[i]?.id?((0,r.wg)(),(0,r.j4)(w,{key:0,modelValue:m.formData[d.fields[t]?.name],"onUpdate:modelValue":e=>m.formData[d.fields[t]?.name]=e},null,8,["modelValue","onUpdate:modelValue"])):((0,r.wg)(),(0,r.iD)("span",l,(0,o.zw)(e),1))])),_:2},1024)))),128)),(0,r.Wm)(C,null,{default:(0,r.w5)((()=>[(0,r._)("div",n,[m.updatingId===d.rows[i]?.id?((0,r.wg)(),(0,r.j4)(y,{key:0,color:"primary",size:"md",onClick:e=>c.editRow(i)},{default:(0,r.w5)((()=>[(0,r.Uk)(" Сохранить")])),_:2},1032,["onClick"])):(0,r.kq)("",!0),m.updatingId===d.rows[i]?.id?((0,r.wg)(),(0,r.j4)(y,{key:1,color:"light",size:"md",onClick:t[0]||(t[0]=e=>m.updatingId=!1)},{default:(0,r.w5)((()=>[(0,r.Uk)(" Отменить")])),_:1})):((0,r.wg)(!0),(0,r.iD)(r.HY,{key:2},(0,r.Ko)(d.actions,((t,a)=>((0,r.wg)(),(0,r.j4)(y,{key:a+"action",color:t?.color,size:"sm",onClick:r=>c.chooseAction(a,t,i,e.j,e.column)},{default:(0,r.w5)((()=>[(0,r.Uk)((0,o.zw)(a),1)])),_:2},1032,["color","onClick"])))),128))])])),_:2},1024)])),_:2},1024)))),128)),(0,r.Wm)(g)])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1}),(0,r.Wm)(W,{"aria-label":"Page navigation example"},{default:(0,r.w5)((()=>[d.lastPageNumber?((0,r.wg)(),(0,r.j4)(M,{key:0,onClick:c.firstPage},{default:(0,r.w5)((()=>[(0,r.Uk)("В начало")])),_:1},8,["onClick"])):(0,r.kq)("",!0),(0,r.Wm)(M,{onClick:c.previousPage},{default:(0,r.w5)((()=>[(0,r.Uk)("Назад")])),_:1},8,["onClick"]),(0,r.Wm)(M,{disabled:""},{default:(0,r.w5)((()=>[(0,r.Uk)((0,o.zw)(m.page),1)])),_:1}),(0,r.Wm)(M,{onClick:c.nextPage},{default:(0,r.w5)((()=>[(0,r.Uk)("Вперед")])),_:1},8,["onClick"]),d.lastPageNumber?((0,r.wg)(),(0,r.j4)(M,{key:1,onClick:c.lastPage},{default:(0,r.w5)((()=>[(0,r.Uk)("В конец")])),_:1},8,["onClick"])):(0,r.kq)("",!0)])),_:1})],64)}a(7658);var u=a(4234),m={props:{name:{type:String},fields:[],actions:[],rows:[],postData:{type:Function,default:()=>{}},updateRow:{type:Function,default:()=>{}},editMode:{type:String,default:"inline"},lastPageNumber:Number,getPageCount:Function},data(){return{fieldsTransformed:[],perPage:10,page:1,updatingId:!1,formData:{},orderDesc:!0,currentOrder:"id"}},async mounted(){this.fieldsTransformed=this.fields.map((e=>("object"===typeof e?e.title=e.title??e.name:e={name:e},e))),await this.postData(this.perPage,this.page,this.currentOrder,this.orderDesc),await this.getPageCount()},methods:{dateFormatter:u.dateFormatter,chooseAction(e,t,a){t&&(console.log("Изменить"===e&&"inline"===this.editMode,a),"Изменить"===e&&"inline"===this.editMode?(this.updatingId=this.rows[a]?.id,this.formData=this.rows[a]):t?.action(this.rows[a]))},async nextPage(){const e=await this.postData(this.perPage,this.page+1,this.currentOrder,this.orderDesc);e?.length>0&&this.page++},previousPage(){this.page>1&&this.page--,this.postData(this.perPage,this.page,this.currentOrder,this.orderDesc)},toPage(e){this.page=e,this.postData(this.perPage,this.page,this.currentOrder,this.orderDesc)},firstPage(){this.page=1,this.postData(this.perPage,this.page,this.currentOrder,this.orderDesc)},lastPage(){this.page=this.lastPageNumber,this.postData(this.perPage,this.page,this.currentOrder,this.orderDesc)},changeOrder(e){e.order&&(this.page=1,this.currentOrder===e.name?this.orderDesc=!this.orderDesc:(this.currentOrder=e.name,this.orderDesc=!0),this.postData(this.perPage,this.page,this.currentOrder,this.orderDesc))},editRow(e){this.updatingId=!1,this.updateRow(this.rows[e]?.id,this.formData)},transformData(e){return e?.map(this.transformDataEl)},transformDataEl(e){let t=[];for(let a of this.fields){const r=a.name.split(".")??a.split(".");let o=e;r?.forEach((e=>o=o?.[e])),"creation_date"!==a?.name&&"publication_date"!==a?.name||(o=(0,u.dateFormatter)(o)),"text"===a?.name&&(o=o.substr(0,100)),t.push(o??"")}return t}}},c=a(89);const p=(0,c.Z)(m,[["render",d]]);var h=p},4411:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return b}});var r=a(3396),o=a(7139);const i={class:"search-block"},s=(0,r._)("option",{value:null},"Все статусы",-1),l=["value"];function n(e,t,a,n,d,u){const m=(0,r.up)("OrderModal"),c=(0,r.up)("CFormInput"),p=(0,r.up)("CFormSelect"),h=(0,r.up)("CFormCheck"),g=(0,r.up)("Table");return(0,r.wg)(),(0,r.iD)("div",null,[(0,r.Wm)(m,{visible:d.formVisible,formData:d.formData,mode:e.formMode},null,8,["visible","formData","mode"]),(0,r._)("div",i,[(0,r.Wm)(c,{type:"search",modelValue:e.searchQuery,"onUpdate:modelValue":t[0]||(t[0]=t=>e.searchQuery=t),onChange:t[1]||(t[1]=e=>{u.get(null,null,null,null,!0),u.getPageCount()}),placeholder:"Поиск"},null,8,["modelValue"]),(0,r.Wm)(p,{modelValue:d.status,"onUpdate:modelValue":t[2]||(t[2]=e=>d.status=e),size:"sm"},{default:(0,r.w5)((()=>[s,((0,r.wg)(),(0,r.iD)(r.HY,null,(0,r.Ko)(["Новый","Выдан","Получен","Отменен","Запрещен","На возврате","Закрыт"],(e=>(0,r._)("option",{key:e,value:e},(0,o.zw)(e),9,l))),64))])),_:1},8,["modelValue"]),(0,r.Wm)(h,{id:"onlyMyCheck",label:"Только мои",value:d.onlyMy,onChange:t[3]||(t[3]=e=>{d.onlyMy=!d.onlyMy,u.get(null,null,null,null,!0),u.getPageCount()})},null,8,["value"])]),((0,r.wg)(),(0,r.j4)(g,{key:d.tableKey,fields:d.tableFieldNames,postData:u.get,actions:d.dataActions,rows:d.rows,editMode:"form",lastPageNumber:d.lastPageNumber,getPageCount:u.getPageCount,name:"Займы"},null,8,["fields","postData","actions","rows","lastPageNumber","getPageCount"]))])}a(7658);var d=a(9242);function u(e,t,a,i,s,l){const n=(0,r.up)("CModalTitle"),u=(0,r.up)("CModalHeader"),m=(0,r.up)("CFormInput"),c=(0,r.up)("CFormTextarea"),p=(0,r.up)("CForm"),h=(0,r.up)("CModalBody"),g=(0,r.up)("CButton"),f=(0,r.up)("CModalFooter"),w=(0,r.up)("CModal");return(0,r.wg)(),(0,r.j4)(w,{backdrop:"static",alignment:"center",visible:a.visible,onClose:l.closeModal},{default:(0,r.w5)((()=>[(0,r.Wm)(u,null,{default:(0,r.w5)((()=>[(0,r.Wm)(n,null,{default:(0,r.w5)((()=>[(0,r.Uk)("Заказ № "+(0,o.zw)(a.formData.id),1)])),_:1})])),_:1}),(0,r.Wm)(h,null,{default:(0,r.w5)((()=>[(0,r.Wm)(p,{ref:"add-file-form",novalidate:"",validated:s.formValid,onSubmit:(0,d.iM)(l.addTag,["prevent"]),class:"add-user",style:{display:"'none'"}},{default:(0,r.w5)((()=>[(0,r.Wm)(m,{class:"mb-3",modelValue:a.formData.name,"onUpdate:modelValue":t[0]||(t[0]=e=>a.formData.name=e),placeholder:"Тег",maxlength:"255",required:"",feedbackValid:"Все ок",feedbackInvalid:"Введите корректный тег"},null,8,["modelValue"]),(0,r.Wm)(c,{modelValue:a.formData.description,"onUpdate:modelValue":t[1]||(t[1]=e=>a.formData.description=e),placeholder:"Описание",required:""},null,8,["modelValue"])])),_:1},8,["validated","onSubmit"])])),_:1}),(0,r.Wm)(f,null,{default:(0,r.w5)((()=>[(0,r.Wm)(g,{color:"secondary",onClick:l.closeModal},{default:(0,r.w5)((()=>[(0,r.Uk)(" Отменить ")])),_:1},8,["onClick"]),(0,r.Wm)(g,{color:"primary",onClick:l.addTag},{default:(0,r.w5)((()=>[(0,r.Uk)("Изменить заказ")])),_:1},8,["onClick"])])),_:1})])),_:1},8,["visible","onClose"])}var m=a(6265),c=a.n(m),p=a(7123);const h=c().create({withCredentials:!0});var g={props:{visible:{required:!0,type:Boolean,default:()=>!1},formData:{required:!0,type:Object,default:()=>({name:"",description:""})}},data(){return{formValid:!1}},updated(){this.formValid=!1},methods:{addNewTag(){p.Z.$emit("addNewTag")},closeModal(){p.Z.$emit("closeModal")},constractFromData(){if(!this.formData.name||!this.formData.description)throw new Error;var e=new FormData;return e.append("name",this.formData.name),e.append("description",this.formData.description),e},addTag(){try{const e=this.constractFromData();h.post(this.$store.state.publicPath+"/api/admin/tags",e,{headers:{"Content-Type":"multipart/form-data"}}).then((()=>{p.Z.$emit("tagAdded")})).catch((e=>{p.Z.$emit("noresponse",e)}))}catch(e){this.formValid=!0}}}},f=a(89);const w=(0,f.Z)(g,[["render",u],["__scopeId","data-v-77952cb5"]]);var C=w,y=a(5393);const D=c().create({withCredentials:!0});var _={name:"Loans",components:{OrderModal:C,Table:y.Z},props:["userId","adminId"],data(){return{myApi:D,formVisible:!1,formData:{},status:null,onlyMy:!1,rows:[],tableKey:1,dataActions:{"К займу":{action:this.routeToLoan,color:"primary"},"Удалить":{action:this.delete,color:"danger"}},lastPageNumber:1,tableFieldNames:[{name:"id",title:"ID",order:!0},{name:"fio",title:"ФИО"},{name:"username",title:"Юзернейм"},{name:"phone",title:"Телефон"},{name:"loans_count",title:"Кол-во займов клиента",order:!0},{name:"creation_date",title:"Дата создания",order:!0},{name:"status",title:"Статус",order:!0}]}},created(){p.Z.$on("closeModal",(()=>{this.formVisible=!1,this.formData={name:"",description:""}}))},watch:{status(){this.get(null,null,null,null,!0),this.getPageCount()}},mounted(){},methods:{change(e){this.formVisible=!0,this.formData=e,this.formMode="edit"},get(e,t,a,r,o){return D.get(this.$store.state.publicPath+"/api/admin/loans/",{params:{take:e??10,page:t??1,searchQuery:this.searchQuery,admin_id:this.$route.params.adminId??this.onlyMy?this.$store.state.id:void 0,user_id:this.$route.params.userId,status:this.status,order:a,orderDesc:r}}).then((e=>((o||e.data?.length>0)&&(this.rows=e.data),e.data))).catch((e=>(p.Z.$emit("noresponse",e),!1)))},getPageCount(e){return console.log(this.$route.params.adminId,this.onlyMy,this.onlyMy?void 0:this.$store.state.id),D.get(this.$store.state.publicPath+"/api/admin/loans_count/",{params:{searchQuery:this.searchQuery,admin_id:this.$route.params.adminId??this.onlyMy?this.$store.state.id:void 0,user_id:this.$route.params.userId,status:this.status}}).then((t=>(this.lastPageNumber=Math.ceil(t.data.orders_count/(e??10)),this.lastPageNumber))).catch((e=>(p.Z.$emit("noresponse",e),!1)))},delete(e){const t=confirm("Вы действительно хотите удалить заказ?");if(t)return D.delete(this.$store.state.publicPath+"/api/admin/loans/",{data:{id:e.id}}).then((()=>{this.get(null,null,"id",!0),this.getPageCount(),p.Z.$emit("loanDeleted")})).catch((e=>{p.Z.$emit("noresponse",e)}))},routeToLoan(e){this.$router.push("/loan/"+e.id)}}};const k=(0,f.Z)(_,[["render",n]]);var b=k},746:function(e,t,a){"use strict";e.exports=a.p+"img/arrow_up.996bcdd2.svg"}}]);
//# sourceMappingURL=411.ade2c218.js.map