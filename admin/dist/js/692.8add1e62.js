(self["webpackChunk_coreui_coreui_free_vue_admin_template"]=self["webpackChunk_coreui_coreui_free_vue_admin_template"]||[]).push([[692],{4234:function(e){let t={year:"numeric",month:"long",day:"numeric"};e.exports={dateFormatter:e=>new Date(e).toLocaleDateString("ru-RU",t),getAgeStr(e){return e>12?`${Math.trunc(e/12)} лет ${e%12} месяцев`:`${e} месяцев`}}},497:function(e,t,a){"use strict";a.d(t,{Z:function(){return p}});var r=a(3396),i=a(7139);const o=(0,r._)("div",{class:"order-toggle"},"tgl",-1),s={key:1},l={class:"d-grid gap-2 d-md-flex justify-content-md-center"};function n(e,t,a,n,d,c){const m=(0,r.up)("CCardHeader"),u=(0,r.up)("CTableHeaderCell"),p=(0,r.up)("CTableRow"),h=(0,r.up)("CTableHead"),f=(0,r.up)("CFormInput"),g=(0,r.up)("CTableDataCell"),w=(0,r.up)("CButton"),C=(0,r.up)("CTableBody"),D=(0,r.up)("CTable"),k=(0,r.up)("CCardBody"),b=(0,r.up)("CCard"),_=(0,r.up)("CCol"),v=(0,r.up)("CRow"),y=(0,r.up)("CPaginationItem"),P=(0,r.up)("CPagination");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(v,null,{default:(0,r.w5)((()=>[(0,r.Wm)(_,{md:12},{default:(0,r.w5)((()=>[(0,r.Wm)(b,{class:"mb-4"},{default:(0,r.w5)((()=>[(0,r.Wm)(m,null,{default:(0,r.w5)((()=>[(0,r.Uk)((0,i.zw)(a.name),1)])),_:1}),(0,r.Wm)(k,null,{default:(0,r.w5)((()=>[(0,r.Wm)(D,{align:"middle",class:"mb-0 border",hover:"",responsive:""},{default:(0,r.w5)((()=>[(0,r.Wm)(h,{color:"light"},{default:(0,r.w5)((()=>[(0,r.Wm)(p,null,{default:(0,r.w5)((()=>[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(d.fieldsTransformed,(e=>((0,r.wg)(),(0,r.j4)(u,{key:e.name+"header",class:(0,i.C_)(["text-center",[e.order?"orderable":""]]),onClick:t=>c.changeOrder(e)},{default:(0,r.w5)((()=>[(0,r.Uk)((0,i.zw)(e.title)+" ",1),o])),_:2},1032,["class","onClick"])))),128)),(0,r.Wm)(u,{class:"text-center"},{default:(0,r.w5)((()=>[(0,r.Uk)("Действия")])),_:1})])),_:1})])),_:1}),(0,r.Wm)(C,null,{default:(0,r.w5)((()=>[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(c.transformData(a.rows),((o,n)=>((0,r.wg)(),(0,r.j4)(p,{key:n+"row"},{default:(0,r.w5)((()=>[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(o,((e,t)=>((0,r.wg)(),(0,r.j4)(g,{key:t+"row",class:"text-center"},{default:(0,r.w5)((()=>[d.updatingId===a.rows[n]?.id?((0,r.wg)(),(0,r.j4)(f,{key:0,modelValue:d.formData[a.fields[t]?.name],"onUpdate:modelValue":e=>d.formData[a.fields[t]?.name]=e},null,8,["modelValue","onUpdate:modelValue"])):((0,r.wg)(),(0,r.iD)("span",s,(0,i.zw)(e),1))])),_:2},1024)))),128)),(0,r.Wm)(g,null,{default:(0,r.w5)((()=>[(0,r._)("div",l,[d.updatingId===a.rows[n]?.id?((0,r.wg)(),(0,r.j4)(w,{key:0,color:"primary",size:"md",onClick:e=>c.editRow(n)},{default:(0,r.w5)((()=>[(0,r.Uk)(" Сохранить")])),_:2},1032,["onClick"])):(0,r.kq)("",!0),d.updatingId===a.rows[n]?.id?((0,r.wg)(),(0,r.j4)(w,{key:1,color:"light",size:"md",onClick:t[0]||(t[0]=e=>d.updatingId=!1)},{default:(0,r.w5)((()=>[(0,r.Uk)(" Отменить")])),_:1})):((0,r.wg)(!0),(0,r.iD)(r.HY,{key:2},(0,r.Ko)(a.actions,((t,a)=>((0,r.wg)(),(0,r.j4)(w,{key:a+"action",color:t?.color,size:"sm",onClick:r=>c.chooseAction(a,t,n,e.j,e.column)},{default:(0,r.w5)((()=>[(0,r.Uk)((0,i.zw)(a),1)])),_:2},1032,["color","onClick"])))),128))])])),_:2},1024)])),_:2},1024)))),128)),(0,r.Wm)(p)])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1}),(0,r.Wm)(P,{"aria-label":"Page navigation example"},{default:(0,r.w5)((()=>[a.lastPageNumber?((0,r.wg)(),(0,r.j4)(y,{key:0,onClick:c.firstPage},{default:(0,r.w5)((()=>[(0,r.Uk)("В начало")])),_:1},8,["onClick"])):(0,r.kq)("",!0),(0,r.Wm)(y,{onClick:c.previousPage},{default:(0,r.w5)((()=>[(0,r.Uk)("Назад")])),_:1},8,["onClick"]),(0,r.Wm)(y,{disabled:""},{default:(0,r.w5)((()=>[(0,r.Uk)((0,i.zw)(d.page),1)])),_:1}),(0,r.Wm)(y,{onClick:c.nextPage},{default:(0,r.w5)((()=>[(0,r.Uk)("Вперед")])),_:1},8,["onClick"]),a.lastPageNumber?((0,r.wg)(),(0,r.j4)(y,{key:1,onClick:c.lastPage},{default:(0,r.w5)((()=>[(0,r.Uk)("В конец")])),_:1},8,["onClick"])):(0,r.kq)("",!0)])),_:1})],64)}a(7658);var d=a(4234),c={props:{name:{type:String},fields:[],actions:[],rows:[],postData:{type:Function,default:()=>{}},updateRow:{type:Function,default:()=>{}},editMode:{type:String,default:"inline"},lastPageNumber:Number,getPageCount:Function},data(){return{fieldsTransformed:[],perPage:10,page:1,updatingId:!1,formData:{},orderDesc:!1,currentOrder:"id"}},async mounted(){this.fieldsTransformed=this.fields.map((e=>("object"===typeof e?e.title=e.title??e.name:e={name:e},e))),await this.postData(this.perPage,this.page,this.currentOrder,this.orderDesc),await this.getPageCount()},methods:{dateFormatter:d.dateFormatter,chooseAction(e,t,a){t&&(console.log("Изменить"===e&&"inline"===this.editMode,a),"Изменить"===e&&"inline"===this.editMode?(this.updatingId=this.rows[a]?.id,this.formData=this.rows[a]):t?.action(this.rows[a]))},async nextPage(){const e=await this.postData(this.perPage,this.page+1,this.currentOrder,this.orderDesc);e?.length>0&&this.page++},previousPage(){this.page>1&&this.page--,this.postData(this.perPage,this.page,this.currentOrder,this.orderDesc)},toPage(e){this.page=e,this.postData(this.perPage,this.page,this.currentOrder,this.orderDesc)},firstPage(){this.page=1,this.postData(this.perPage,this.page,this.currentOrder,this.orderDesc)},lastPage(){this.page=this.lastPageNumber,this.postData(this.perPage,this.page,this.currentOrder,this.orderDesc)},changeOrder(e){this.page=1,this.currentOrder===e.name?this.orderDesc=!this.orderDesc:this.currentOrder=e.name,this.postData(this.perPage,this.page,this.currentOrder,this.orderDesc)},editRow(e){this.updatingId=!1,this.updateRow(this.rows[e]?.id,this.formData)},transformData(e){return e?.map(this.transformDataEl)},transformDataEl(e){let t=[];for(let a of this.fields){const r=a.name.split(".")??a.split(".");let i=e;r?.forEach((e=>i=i?.[e])),"creation_date"!==a?.name&&"publication_date"!==a?.name||(i=(0,d.dateFormatter)(i)),"text"===a?.name&&(i=i.substr(0,100)),t.push(i??"")}return t}}},m=a(89);const u=(0,m.Z)(c,[["render",n]]);var p=u},3692:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return _}});var r=a(3396);function i(e,t,a,i,o,s){const l=(0,r.up)("AddCategoryModal"),n=(0,r.up)("Table");return(0,r.wg)(),(0,r.iD)("div",null,[(0,r.Wm)(l,{visible:o.formVisible,formData:o.formData,mode:e.formMode},null,8,["visible","formData","mode"]),(0,r.Wm)(n,{fields:o.tableFieldNames,postData:s.get,actions:o.dataActions,rows:o.rows,editMode:"form",name:"Категории"},null,8,["fields","postData","actions","rows"])])}a(7658);var o=a(7139),s=a(9242);const l={class:"border p-2 mt-3 preview-container"},n=["src"];function d(e,t,a,i,d,c){const m=(0,r.up)("CButton"),u=(0,r.up)("CModalTitle"),p=(0,r.up)("CModalHeader"),h=(0,r.up)("CFormInput"),f=(0,r.up)("CFormTextarea"),g=(0,r.up)("CForm"),w=(0,r.up)("CModalBody"),C=(0,r.up)("CModalFooter"),D=(0,r.up)("CModal");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(m,{color:"primary",onClick:c.addNewProject},{default:(0,r.w5)((()=>[(0,r.Uk)("Добавить категорию")])),_:1},8,["onClick"]),(0,r.Wm)(D,{backdrop:"static",alignment:"center",visible:a.visible,onClose:c.closeModal},{default:(0,r.w5)((()=>[(0,r.Wm)(p,null,{default:(0,r.w5)((()=>[(0,r.Wm)(u,null,{default:(0,r.w5)((()=>[(0,r.Uk)((0,o.zw)("new"===a.mode?"Добавить категорию":"Редактировать категорию"),1)])),_:1})])),_:1}),(0,r.Wm)(w,null,{default:(0,r.w5)((()=>[(0,r.Wm)(g,{ref:"add-file-form",novalidate:"",validated:d.formValid,onSubmit:t[2]||(t[2]=(0,s.iM)((e=>c.addCategory()),["prevent"])),class:"add-user",style:{display:"'none'"}},{default:(0,r.w5)((()=>[(0,r.Wm)(h,{class:"mb-3",modelValue:a.formData.name,"onUpdate:modelValue":t[0]||(t[0]=e=>a.formData.name=e),placeholder:"Категория",id:"inputName","aria-describedby":"inputGroupPrepend",maxlength:"255",required:"",feedbackValid:"Все ок",feedbackInvalid:"Введите корректное название категории"},null,8,["modelValue"]),(0,r.Wm)(h,{type:"file",accept:"image/*",ref:"preview",onInput:c.previewMultiImage,class:"mb-3",label:"Превью",placeholder:"Превью"},null,8,["onInput"]),(0,r._)("div",l,[(0,r._)("img",{src:d.preview,class:"img-fluid"},null,8,n)]),(0,r.Wm)(f,{modelValue:a.formData.description,"onUpdate:modelValue":t[1]||(t[1]=e=>a.formData.description=e),placeholder:"Описание",id:"inputDescription","aria-describedby":"inputGroupPrepend",required:""},null,8,["modelValue"])])),_:1},8,["validated"])])),_:1}),(0,r.Wm)(C,null,{default:(0,r.w5)((()=>[(0,r.Wm)(m,{color:"secondary",onClick:c.closeModal},{default:(0,r.w5)((()=>[(0,r.Uk)(" Отменить ")])),_:1},8,["onClick"]),"new"===a.mode?((0,r.wg)(),(0,r.j4)(m,{key:0,color:"primary",onClick:c.addCategory},{default:(0,r.w5)((()=>[(0,r.Uk)("Добавить категорию")])),_:1},8,["onClick"])):((0,r.wg)(),(0,r.j4)(m,{key:1,color:"primary",onClick:c.editCategory},{default:(0,r.w5)((()=>[(0,r.Uk)("Редактировать категорию")])),_:1},8,["onClick"]))])),_:1})])),_:1},8,["visible","onClose"])],64)}var c=a(6265),m=a.n(c),u=a(7123);const p=m().create({withCredentials:!0});var h={props:{mode:{required:!0,type:String,validator:e=>["new","edit"].includes(e.toLowerCase())},visible:!1,formData:{name:"",description:""}},data(){return{formValid:!1,preview:""}},mounted(){this.preview=`${this.$store.state.publicPath}/public/pics/${this.formData.preview}`,this.old_name=this.formData.name},updated(){this.formValid=!1,this.preview=`${this.$store.state.publicPath}/public/pics/${this.formData.preview}`,this.old_name=this.formData.name},methods:{addNewProject(){u.Z.$emit("addNewProject")},closeModal(){u.Z.$emit("closeModal")},constractFromData(){if(!this.formData.name||!this.formData.description)throw new Error;var e=new FormData;return e.append("preview",this.formData.preview),e.append("name",this.formData.name),e.append("old_name",this.old_name),e.append("description",this.formData.description),e},previewMultiImage(e){var t=e.target;if(t.files){var a=new FileReader;a.onload=e=>{this.preview=e.target.result},this.formData.preview=t.files[0],a.readAsDataURL(t.files[0])}},addCategory(){try{const e=this.constractFromData();p.post(this.$store.state.publicPath+"/api/admin/categories",e,{headers:{"Content-Type":"multipart/form-data"}}).then((()=>{u.Z.$emit("projectAdded")})).catch((e=>{u.Z.$emit("noresponse",e)}))}catch(e){this.formValid=!0}},editCategory(){try{const e=this.constractFromData(!0);p.put(this.$store.state.publicPath+"/api/admin/categories",e,{headers:{"Content-Type":"multipart/form-data"}}).then((()=>{u.Z.$emit("projectEdited")})).catch((e=>{u.Z.$emit("noresponse",e)}))}catch(e){console.log(e),this.formValid=!0}}}},f=a(89);const g=(0,f.Z)(h,[["render",d],["__scopeId","data-v-43425948"]]);var w=g,C=a(497);const D=m().create({withCredentials:!0});var k={components:{AddCategoryModal:w,Table:C.Z},data(){return{myApi:D,formVisible:!1,formData:{},rows:[],dataActions:{"Позиции":{action:this.routeToPosts,color:"primary"},"Изменить":{action:this.change,color:"warning"},"Удалить":{action:this.delete,color:"danger"}},tableFieldNames:[{name:"name",title:"Название"},{name:"description",title:"Описание"}]}},created(){u.Z.$on("addNewProject",(()=>{this.formMode="new",this.formVisible=!0})),u.Z.$on("closeModal",(()=>{this.formVisible=!1,this.formData={}})),u.Z.$on("projectAdded",(()=>{this.formVisible=!1,this.get(),this.formData={}})),u.Z.$on("projectEdited",(()=>{this.formVisible=!1,this.get(),this.formData={}}))},methods:{change(e){this.formVisible=!0,this.formData=e,this.formMode="edit"},get(e,t){return D.get(this.$store.state.publicPath+"/api/categories/",{params:{take:e??10,page:t??1}}).then((e=>(e.data?.length>0&&(this.rows=e.data),e.data))).catch((e=>(u.Z.$emit("noresponse",e),!1)))},delete(e){const t=confirm("Вы действительно хотите удалить пользователя?");if(t)return D.delete(this.$store.state.publicPath+"/api/admin/categories/",{data:{name:e.name}}).then((()=>{this.get(),u.Z.$emit("projectDeleted")})).catch((e=>{u.Z.$emit("noresponse",e)}))},routeToPosts(e){this.$router.push("/items/project/"+e.name)}}};const b=(0,f.Z)(k,[["render",i]]);var _=b}}]);
//# sourceMappingURL=692.8add1e62.js.map