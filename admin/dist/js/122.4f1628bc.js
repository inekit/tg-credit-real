(self["webpackChunk_coreui_coreui_free_vue_admin_template"]=self["webpackChunk_coreui_coreui_free_vue_admin_template"]||[]).push([[122],{4234:function(e){let t={year:"numeric",month:"long",day:"numeric"};e.exports={dateFormatter:e=>new Date(e).toLocaleDateString("ru-RU",t),getAgeStr(e){return e>12?`${Math.trunc(e/12)} лет ${e%12} месяцев`:`${e} месяцев`}}},5393:function(e,t,a){"use strict";a.d(t,{Z:function(){return h}});var r=a(3396),o=a(7139);const i={class:"order-toggle"},s=["src"],l={key:1},n={class:"d-grid gap-2 d-md-flex justify-content-md-center"};function d(e,t,d,u,c,m){const p=(0,r.up)("CCardHeader"),h=(0,r.up)("CTableHeaderCell"),g=(0,r.up)("CTableRow"),f=(0,r.up)("CTableHead"),w=(0,r.up)("CFormInput"),C=(0,r.up)("CTableDataCell"),D=(0,r.up)("CButton"),b=(0,r.up)("CTableBody"),k=(0,r.up)("CTable"),_=(0,r.up)("CCardBody"),y=(0,r.up)("CCard"),P=(0,r.up)("CCol"),v=(0,r.up)("CRow"),W=(0,r.up)("CPaginationItem"),T=(0,r.up)("CPagination");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(v,null,{default:(0,r.w5)((()=>[(0,r.Wm)(P,{md:12},{default:(0,r.w5)((()=>[(0,r.Wm)(y,{class:"mb-4"},{default:(0,r.w5)((()=>[(0,r.Wm)(p,null,{default:(0,r.w5)((()=>[(0,r.Uk)((0,o.zw)(d.name),1)])),_:1}),(0,r.Wm)(_,null,{default:(0,r.w5)((()=>[(0,r.Wm)(k,{align:"middle",class:"mb-0 border",hover:"",responsive:""},{default:(0,r.w5)((()=>[(0,r.Wm)(f,{color:"light"},{default:(0,r.w5)((()=>[(0,r.Wm)(g,null,{default:(0,r.w5)((()=>[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(c.fieldsTransformed,(e=>((0,r.wg)(),(0,r.j4)(h,{key:e.name+"header",class:(0,o.C_)(["text-center",[e.order?"orderable":"",e.name===c.currentOrder?"current":"",!0===c.orderDesc&&e.name===c.currentOrder?"desc":""]]),onClick:t=>m.changeOrder(e)},{default:(0,r.w5)((()=>[(0,r._)("div",i,[(0,r._)("img",{src:a(746)},null,8,s)]),(0,r.Uk)(" "+(0,o.zw)(e.title),1)])),_:2},1032,["class","onClick"])))),128)),(0,r.Wm)(h,{class:"text-center"},{default:(0,r.w5)((()=>[(0,r.Uk)("Действия")])),_:1})])),_:1})])),_:1}),(0,r.Wm)(b,null,{default:(0,r.w5)((()=>[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(m.transformData(d.rows),((a,i)=>((0,r.wg)(),(0,r.j4)(g,{key:i+"row"},{default:(0,r.w5)((()=>[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(a,((e,t)=>((0,r.wg)(),(0,r.j4)(C,{key:t+"row",class:"text-center"},{default:(0,r.w5)((()=>[c.updatingId===d.rows[i]?.id?((0,r.wg)(),(0,r.j4)(w,{key:0,modelValue:c.formData[d.fields[t]?.name],"onUpdate:modelValue":e=>c.formData[d.fields[t]?.name]=e},null,8,["modelValue","onUpdate:modelValue"])):((0,r.wg)(),(0,r.iD)("span",l,(0,o.zw)(e),1))])),_:2},1024)))),128)),(0,r.Wm)(C,null,{default:(0,r.w5)((()=>[(0,r._)("div",n,[c.updatingId===d.rows[i]?.id?((0,r.wg)(),(0,r.j4)(D,{key:0,color:"primary",size:"md",onClick:e=>m.editRow(i)},{default:(0,r.w5)((()=>[(0,r.Uk)(" Сохранить")])),_:2},1032,["onClick"])):(0,r.kq)("",!0),c.updatingId===d.rows[i]?.id?((0,r.wg)(),(0,r.j4)(D,{key:1,color:"light",size:"md",onClick:t[0]||(t[0]=e=>c.updatingId=!1)},{default:(0,r.w5)((()=>[(0,r.Uk)(" Отменить")])),_:1})):((0,r.wg)(!0),(0,r.iD)(r.HY,{key:2},(0,r.Ko)(d.actions,((t,a)=>((0,r.wg)(),(0,r.j4)(D,{key:a+"action",color:t?.color,size:"sm",onClick:r=>m.chooseAction(a,t,i,e.j,e.column)},{default:(0,r.w5)((()=>[(0,r.Uk)((0,o.zw)(a),1)])),_:2},1032,["color","onClick"])))),128))])])),_:2},1024)])),_:2},1024)))),128)),(0,r.Wm)(g)])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1}),(0,r.Wm)(T,{"aria-label":"Page navigation example"},{default:(0,r.w5)((()=>[d.lastPageNumber?((0,r.wg)(),(0,r.j4)(W,{key:0,onClick:m.firstPage},{default:(0,r.w5)((()=>[(0,r.Uk)("В начало")])),_:1},8,["onClick"])):(0,r.kq)("",!0),(0,r.Wm)(W,{onClick:m.previousPage},{default:(0,r.w5)((()=>[(0,r.Uk)("Назад")])),_:1},8,["onClick"]),(0,r.Wm)(W,{disabled:""},{default:(0,r.w5)((()=>[(0,r.Uk)((0,o.zw)(c.page),1)])),_:1}),(0,r.Wm)(W,{onClick:m.nextPage},{default:(0,r.w5)((()=>[(0,r.Uk)("Вперед")])),_:1},8,["onClick"]),d.lastPageNumber?((0,r.wg)(),(0,r.j4)(W,{key:1,onClick:m.lastPage},{default:(0,r.w5)((()=>[(0,r.Uk)("В конец")])),_:1},8,["onClick"])):(0,r.kq)("",!0)])),_:1})],64)}a(7658);var u=a(4234),c={props:{name:{type:String},fields:[],actions:[],rows:[],postData:{type:Function,default:()=>{}},updateRow:{type:Function,default:()=>{}},editMode:{type:String,default:"inline"},lastPageNumber:Number,getPageCount:Function},data(){return{fieldsTransformed:[],perPage:10,page:1,updatingId:!1,formData:{},orderDesc:!0,currentOrder:"id"}},async mounted(){this.fieldsTransformed=this.fields.map((e=>("object"===typeof e?e.title=e.title??e.name:e={name:e},e))),await this.postData(this.perPage,this.page,this.currentOrder,this.orderDesc),await this.getPageCount()},methods:{dateFormatter:u.dateFormatter,chooseAction(e,t,a){t&&(console.log("Изменить"===e&&"inline"===this.editMode,a),"Изменить"===e&&"inline"===this.editMode?(this.updatingId=this.rows[a]?.id,this.formData=this.rows[a]):t?.action(this.rows[a]))},async nextPage(){const e=await this.postData(this.perPage,this.page+1,this.currentOrder,this.orderDesc);e?.length>0&&this.page++},previousPage(){this.page>1&&this.page--,this.postData(this.perPage,this.page,this.currentOrder,this.orderDesc)},toPage(e){this.page=e,this.postData(this.perPage,this.page,this.currentOrder,this.orderDesc)},firstPage(){this.page=1,this.postData(this.perPage,this.page,this.currentOrder,this.orderDesc)},lastPage(){this.page=this.lastPageNumber,this.postData(this.perPage,this.page,this.currentOrder,this.orderDesc)},changeOrder(e){e.order&&(this.page=1,this.currentOrder===e.name?this.orderDesc=!this.orderDesc:(this.currentOrder=e.name,this.orderDesc=!0),this.postData(this.perPage,this.page,this.currentOrder,this.orderDesc))},editRow(e){this.updatingId=!1,this.updateRow(this.rows[e]?.id,this.formData)},transformData(e){return e?.map(this.transformDataEl)},transformDataEl(e){let t=[];for(let a of this.fields){const r=a.name.split(".")??a.split(".");let o=e;r?.forEach((e=>o=o?.[e])),"creation_date"!==a?.name&&"publication_date"!==a?.name||(o=(0,u.dateFormatter)(o)),"text"===a?.name&&(o=o.substr(0,100)),t.push(o??"")}return t}}},m=a(89);const p=(0,m.Z)(c,[["render",d]]);var h=p},4198:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return b}});var r=a(3396);function o(e,t,a,o,i,s){const l=(0,r.up)("OrderModal"),n=(0,r.up)("CFormInput"),d=(0,r.up)("Table");return(0,r.wg)(),(0,r.iD)("div",null,[(0,r.Wm)(l,{visible:i.formVisible,formData:i.formData,mode:e.formMode},null,8,["visible","formData","mode"]),(0,r.Wm)(n,{class:"mb-4",type:"search",modelValue:e.searchQuery,"onUpdate:modelValue":t[0]||(t[0]=t=>e.searchQuery=t),onChange:t[1]||(t[1]=e=>{s.get(),s.getPageCount()}),placeholder:"Поиск"},null,8,["modelValue"]),((0,r.wg)(),(0,r.j4)(d,{key:i.tableKey,fields:i.tableFieldNames,postData:s.get,actions:i.dataActions,rows:i.rows,editMode:"form",lastPageNumber:i.lastPageNumber,getPageCount:s.getPageCount,name:"Займы"},null,8,["fields","postData","actions","rows","lastPageNumber","getPageCount"]))])}a(7658);var i=a(7139),s=a(9242);function l(e,t,a,o,l,n){const d=(0,r.up)("CModalTitle"),u=(0,r.up)("CModalHeader"),c=(0,r.up)("CFormInput"),m=(0,r.up)("CFormTextarea"),p=(0,r.up)("CForm"),h=(0,r.up)("CModalBody"),g=(0,r.up)("CButton"),f=(0,r.up)("CModalFooter"),w=(0,r.up)("CModal");return(0,r.wg)(),(0,r.j4)(w,{backdrop:"static",alignment:"center",visible:a.visible,onClose:n.closeModal},{default:(0,r.w5)((()=>[(0,r.Wm)(u,null,{default:(0,r.w5)((()=>[(0,r.Wm)(d,null,{default:(0,r.w5)((()=>[(0,r.Uk)("Заказ № "+(0,i.zw)(a.formData.id),1)])),_:1})])),_:1}),(0,r.Wm)(h,null,{default:(0,r.w5)((()=>[(0,r.Wm)(p,{ref:"add-file-form",novalidate:"",validated:l.formValid,onSubmit:(0,s.iM)(n.addTag,["prevent"]),class:"add-user",style:{display:"'none'"}},{default:(0,r.w5)((()=>[(0,r.Wm)(c,{class:"mb-3",modelValue:a.formData.name,"onUpdate:modelValue":t[0]||(t[0]=e=>a.formData.name=e),placeholder:"Тег",maxlength:"255",required:"",feedbackValid:"Все ок",feedbackInvalid:"Введите корректный тег"},null,8,["modelValue"]),(0,r.Wm)(m,{modelValue:a.formData.description,"onUpdate:modelValue":t[1]||(t[1]=e=>a.formData.description=e),placeholder:"Описание",required:""},null,8,["modelValue"])])),_:1},8,["validated","onSubmit"])])),_:1}),(0,r.Wm)(f,null,{default:(0,r.w5)((()=>[(0,r.Wm)(g,{color:"secondary",onClick:n.closeModal},{default:(0,r.w5)((()=>[(0,r.Uk)(" Отменить ")])),_:1},8,["onClick"]),(0,r.Wm)(g,{color:"primary",onClick:n.addTag},{default:(0,r.w5)((()=>[(0,r.Uk)("Изменить заказ")])),_:1},8,["onClick"])])),_:1})])),_:1},8,["visible","onClose"])}var n=a(6265),d=a.n(n),u=a(7123);const c=d().create({withCredentials:!0});var m={props:{visible:{required:!0,type:Boolean,default:()=>!1},formData:{required:!0,type:Object,default:()=>({name:"",description:""})}},data(){return{formValid:!1}},updated(){this.formValid=!1},methods:{addNewTag(){u.Z.$emit("addNewTag")},closeModal(){u.Z.$emit("closeModal")},constractFromData(){if(!this.formData.name||!this.formData.description)throw new Error;var e=new FormData;return e.append("name",this.formData.name),e.append("description",this.formData.description),e},addTag(){try{const e=this.constractFromData();c.post(this.$store.state.publicPath+"/api/admin/tags",e,{headers:{"Content-Type":"multipart/form-data"}}).then((()=>{u.Z.$emit("tagAdded")})).catch((e=>{u.Z.$emit("noresponse",e)}))}catch(e){this.formValid=!0}}}},p=a(89);const h=(0,p.Z)(m,[["render",l],["__scopeId","data-v-77952cb5"]]);var g=h,f=a(5393);const w=d().create({withCredentials:!0});var C={name:"Orders",components:{OrderModal:g,Table:f.Z},data(){return{myApi:w,formVisible:!1,formData:{},rows:[],tableKey:1,dataActions:{"К займу":{action:this.routeToPosts,color:"primary"},"Удалить":{action:this.delete,color:"danger"}},lastPageNumber:1,tableFieldNames:[{name:"id",title:"ID",order:!0},{name:"fio",title:"ФИО"},{name:"username",title:"Юзернейм"},{name:"phone",title:"Телефон"},{name:"loans_count",title:"Кол-во займов клиента",order:!0},{name:"creation_date",title:"Дата создания",order:!0},{name:"status",title:"Статус",order:!0}]}},created(){u.Z.$on("closeModal",(()=>{this.formVisible=!1,this.formData={name:"",description:""}}))},mounted(){this.sockets.subscribe("UPDATE_LOANS",(()=>{console.log("updated"),this.tableKey++}))},methods:{change(e){this.formVisible=!0,this.formData=e,this.formMode="edit"},get(e,t,a,r){return w.get(this.$store.state.publicPath+"/api/admin/loans/",{params:{take:e??10,page:t??1,searchQuery:this.searchQuery,order:a,orderDesc:r}}).then((e=>(e.data?.length>0&&(this.rows=e.data),e.data))).catch((e=>(u.Z.$emit("noresponse",e),!1)))},getPageCount(e){return w.get(this.$store.state.publicPath+"/api/admin/loans_count/",{params:{searchQuery:this.searchQuery}}).then((t=>(this.lastPageNumber=Math.ceil(t.data.orders_count/(e??10)),this.lastPageNumber))).catch((e=>(u.Z.$emit("noresponse",e),!1)))},delete(e){const t=confirm("Вы действительно хотите удалить заказ?");if(t)return w.delete(this.$store.state.publicPath+"/api/admin/loans/",{data:{id:e.id}}).then((()=>{this.get(null,null,"id",!0),this.getPageCount(),u.Z.$emit("loanDeleted")})).catch((e=>{u.Z.$emit("noresponse",e)}))},routeToPosts(e){this.$router.push("/loan/"+e.id)}}};const D=(0,p.Z)(C,[["render",o]]);var b=D},746:function(e,t,a){"use strict";e.exports=a.p+"img/arrow_up.996bcdd2.svg"}}]);
//# sourceMappingURL=122.4f1628bc.js.map