(self["webpackChunk_coreui_coreui_free_vue_admin_template"]=self["webpackChunk_coreui_coreui_free_vue_admin_template"]||[]).push([[300],{4234:function(e){let t={year:"numeric",month:"long",day:"numeric"};e.exports={dateFormatter:e=>new Date(e).toLocaleDateString("ru-RU",t),getAgeStr(e){return e>12?`${Math.trunc(e/12)} лет ${e%12} месяцев`:`${e} месяцев`}}},5404:function(e,t,a){"use strict";a.d(t,{Z:function(){return p}});var i=a(3396),o=a(7139);const l={key:1},s={class:"d-grid gap-2 d-md-flex justify-content-md-center"};function r(e,t,a,r,n,d){const m=(0,i.up)("CCardHeader"),c=(0,i.up)("CTableHeaderCell"),p=(0,i.up)("CTableRow"),u=(0,i.up)("CTableHead"),h=(0,i.up)("CFormInput"),f=(0,i.up)("CTableDataCell"),g=(0,i.up)("CButton"),w=(0,i.up)("CTableBody"),_=(0,i.up)("CTable"),b=(0,i.up)("CCardBody"),y=(0,i.up)("CCard"),D=(0,i.up)("CCol"),k=(0,i.up)("CRow"),C=(0,i.up)("CPaginationItem"),v=(0,i.up)("CPagination");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i.Wm)(k,null,{default:(0,i.w5)((()=>[(0,i.Wm)(D,{md:12},{default:(0,i.w5)((()=>[(0,i.Wm)(y,{class:"mb-4"},{default:(0,i.w5)((()=>[(0,i.Wm)(m,null,{default:(0,i.w5)((()=>[(0,i.Uk)((0,o.zw)(a.name),1)])),_:1}),(0,i.Wm)(b,null,{default:(0,i.w5)((()=>[(0,i.Wm)(_,{align:"middle",class:"mb-0 border",hover:"",responsive:""},{default:(0,i.w5)((()=>[(0,i.Wm)(u,{color:"light"},{default:(0,i.w5)((()=>[(0,i.Wm)(p,null,{default:(0,i.w5)((()=>[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(n.fieldNames,(e=>((0,i.wg)(),(0,i.j4)(c,{key:e+"header",class:"text-center"},{default:(0,i.w5)((()=>[(0,i.Uk)((0,o.zw)(e),1)])),_:2},1024)))),128)),(0,i.Wm)(c,{class:"text-center"},{default:(0,i.w5)((()=>[(0,i.Uk)("Действия")])),_:1})])),_:1})])),_:1}),(0,i.Wm)(w,null,{default:(0,i.w5)((()=>[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(d.transformData(a.rows),((r,m)=>((0,i.wg)(),(0,i.j4)(p,{key:m+"row"},{default:(0,i.w5)((()=>[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(r,((e,t)=>((0,i.wg)(),(0,i.j4)(f,{key:t+"row",class:"text-center"},{default:(0,i.w5)((()=>[n.updatingId===a.rows[m]?.id?((0,i.wg)(),(0,i.j4)(h,{key:0,modelValue:n.formData[a.fields[t]?.name],"onUpdate:modelValue":e=>n.formData[a.fields[t]?.name]=e},null,8,["modelValue","onUpdate:modelValue"])):((0,i.wg)(),(0,i.iD)("span",l,(0,o.zw)(e),1))])),_:2},1024)))),128)),(0,i.Wm)(f,null,{default:(0,i.w5)((()=>[(0,i._)("div",s,[n.updatingId===a.rows[m]?.id?((0,i.wg)(),(0,i.j4)(g,{key:0,color:"primary",size:"md",onClick:e=>d.editRow(m)},{default:(0,i.w5)((()=>[(0,i.Uk)(" Сохранить")])),_:2},1032,["onClick"])):(0,i.kq)("",!0),n.updatingId===a.rows[m]?.id?((0,i.wg)(),(0,i.j4)(g,{key:1,color:"light",size:"md",onClick:t[0]||(t[0]=e=>n.updatingId=!1)},{default:(0,i.w5)((()=>[(0,i.Uk)(" Отменить")])),_:1})):((0,i.wg)(!0),(0,i.iD)(i.HY,{key:2},(0,i.Ko)(a.actions,((t,a)=>((0,i.wg)(),(0,i.j4)(g,{key:a+"action",color:t?.color,size:"sm",onClick:i=>d.chooseAction(a,t,m,e.j,e.column)},{default:(0,i.w5)((()=>[(0,i.Uk)((0,o.zw)(a),1)])),_:2},1032,["color","onClick"])))),128))])])),_:2},1024)])),_:2},1024)))),128)),(0,i.Wm)(p)])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1}),(0,i.Wm)(v,{"aria-label":"Page navigation example"},{default:(0,i.w5)((()=>[(0,i.Wm)(C,{onClick:d.previousPage},{default:(0,i.w5)((()=>[(0,i.Uk)("Назад")])),_:1},8,["onClick"]),(0,i.Wm)(C,{disabled:""},{default:(0,i.w5)((()=>[(0,i.Uk)((0,o.zw)(n.page),1)])),_:1}),(0,i.Wm)(C,{onClick:d.nextPage},{default:(0,i.w5)((()=>[(0,i.Uk)("Далее")])),_:1},8,["onClick"])])),_:1})],64)}a(7658);var n=a(4234),d={props:{name:{type:String},fields:[],actions:[],rows:[],postData:{type:Function,default:()=>{}},updateRow:{type:Function,default:()=>{}},editMode:{type:String,default:"inline"}},data(){return{fieldNames:[],perPage:10,page:1,updatingId:!1,formData:{}}},async mounted(){this.fieldNames=this.fields.map((e=>"object"===typeof e?e.title??e.name:e)),await this.postData(this.perPage,this.page)},methods:{dateFormatter:n.dateFormatter,chooseAction(e,t,a){t&&(console.log("Изменить"===e&&"inline"===this.editMode,a),"Изменить"===e&&"inline"===this.editMode?(this.updatingId=this.rows[a]?.id,this.formData=this.rows[a]):t?.action(this.rows[a]))},async nextPage(){const e=await this.postData(this.perPage,this.page+1);e?.length>0&&this.page++},previousPage(){this.page>1&&this.page--,this.postData(this.perPage,this.page)},toPage(e){this.page=e,this.postData(this.perPage,this.page)},editRow(e){this.updatingId=!1,this.updateRow(this.rows[e]?.id,this.formData)},transformData(e){return e?.map(this.transformDataEl)},transformDataEl(e){let t=[];for(let a of this.fields){const i=a.name.split(".")??a.split(".");let o=e;i?.forEach((e=>o=o?.[e])),"creation_date"===a?.name&&(o=(0,n.dateFormatter)(o)),"text"===a?.name&&(o=o.substr(0,100)),t.push(o??"")}return t}}},m=a(89);const c=(0,m.Z)(d,[["render",r]]);var p=c},2300:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return $}});var i=a(3396);function o(e,t,a,o,l,s){const r=(0,i.up)("AddItemModal"),n=(0,i.up)("Table");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i.Wm)(r,{visible:l.formVisible,formData:l.formData,mode:e.formMode},null,8,["visible","formData","mode"]),(0,i.Wm)(n,{fields:l.tableFieldNames,postData:s.get,actions:l.dataActions,rows:l.rows,editMode:"form",name:"Позиции"},null,8,["fields","postData","actions","rows"])])}var l=a(9242),s=a(7139);const r=e=>((0,i.dD)("data-v-6c721688"),e=e(),(0,i.Cn)(),e),n={class:"projects-list"},d=r((()=>(0,i._)("span",null,"Категория",-1))),m={class:"options-shedle"},c=r((()=>(0,i._)("span",null,"Опции",-1))),p={class:"table"},u=r((()=>(0,i._)("td",null,[(0,i.Uk)("Размер"),(0,i._)("br"),(0,i.Uk)(" Материал")],-1))),h=r((()=>(0,i._)("td",null,null,-1))),f={class:"border p-2 mt-3 preview-container"},g=["src"],w=["onClick"];function _(e,t,a,o,r,_){const b=(0,i.up)("CButton"),y=(0,i.up)("CModalTitle"),D=(0,i.up)("CModalHeader"),k=(0,i.up)("CFormInput"),C=(0,i.up)("CFormCheck"),v=(0,i.up)("CInputGroup"),j=(0,i.up)("CFormTextarea"),W=(0,i.up)("CModalBody"),M=(0,i.up)("CModalFooter"),U=(0,i.up)("CForm"),V=(0,i.up)("CModal");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i.Wm)(b,{color:"primary",onClick:_.addNewPost},{default:(0,i.w5)((()=>[(0,i.Uk)("Добавить товар")])),_:1},8,["onClick"]),(0,i.Wm)(V,{size:"xl",backdrop:"static",alignment:"center",visible:a.visible,onClose:_.closeModal},{default:(0,i.w5)((()=>[(0,i.Wm)(U,{novalidate:"",validated:r.formValid,ref:"add-file-form",onChange:e.wregert,onSubmit:t[7]||(t[7]=(0,l.iM)((e=>"new"===a.mode?_.addNewing():_.editNewing()),["prevent"])),class:"add-user",style:{display:"'none'"}},{default:(0,i.w5)((()=>[(0,i.Wm)(D,null,{default:(0,i.w5)((()=>[(0,i.Wm)(y,null,{default:(0,i.w5)((()=>[(0,i.Uk)((0,s.zw)("new"===a.mode?"Добавить товар":"Редактировать товар"),1)])),_:1})])),_:1}),(0,i.Wm)(W,null,{default:(0,i.w5)((()=>[(0,i.Wm)(k,{class:"mb-3",modelValue:a.formData.title,"onUpdate:modelValue":t[0]||(t[0]=e=>a.formData.title=e),placeholder:"Заголовок",id:"inputHeader","aria-describedby":"inputGroupPrepend",feedbackValid:"Все ок",feedbackInvalid:"Введите корректный заголовок",required:""},null,8,["modelValue"]),(0,i._)("div",n,[d,((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(e.projects,(e=>((0,i.wg)(),(0,i.j4)(C,{key:e.name,id:e.name,checked:e.name===a.formData.category_name,onChange:_.changeP,type:"radio",name:"project-name",value:e.name,label:e.name},null,8,["id","checked","onChange","value","label"])))),128)),(0,i.Wm)(C,{id:"null-name",checked:!a.formData.category_name,onChange:_.changeP,type:"radio",name:"project-name",value:"",label:"Без категорий"},null,8,["checked","onChange"])]),(0,i._)("div",m,[c,(0,i._)("table",p,[(0,i._)("thead",null,[(0,i._)("tr",null,[u,((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(Object.values(r.options_object)?.[0],((e,t)=>((0,i.wg)(),(0,i.iD)("td",{key:"sizeh-"+t},[(0,i.Uk)((0,s.zw)(t)+" ",1),(0,i.Wm)(b,{color:"secondary",onClick:e=>_.dropSize(t)},{default:(0,i.w5)((()=>[(0,i.Uk)("X")])),_:2},1032,["onClick"])])))),128)),(0,i._)("td",null,[(0,i.Wm)(v,{class:""},{default:(0,i.w5)((()=>[(0,i.Wm)(k,{placeholder:"Новый размер",type:"text",modelValue:r.tempSize,"onUpdate:modelValue":t[1]||(t[1]=e=>r.tempSize=e)},null,8,["modelValue"]),(0,i.Wm)(b,{class:"add-button",type:"button",color:"secondary",onClick:t[2]||(t[2]=e=>_.addSize(r.tempSize)),variant:"outline"},{default:(0,i.w5)((()=>[(0,i.Uk)("Добавить")])),_:1})])),_:1})])])]),(0,i._)("tbody",null,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(r.options_object,((e,t)=>((0,i.wg)(),(0,i.iD)("tr",{key:"material-"+t},[(0,i._)("td",null,[(0,i.Uk)((0,s.zw)(t)+" ",1),(0,i.Wm)(b,{color:"secondary",onClick:e=>_.dropMaterial(t)},{default:(0,i.w5)((()=>[(0,i.Uk)("X")])),_:2},1032,["onClick"])]),((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(e,((e,a)=>((0,i.wg)(),(0,i.iD)("td",{key:"size-"+a},[(0,i.Wm)(k,{type:"text",modelValue:r.options_object[t][a],"onUpdate:modelValue":e=>r.options_object[t][a]=e},null,8,["modelValue","onUpdate:modelValue"])])))),128)),h])))),128)),(0,i._)("tr",null,[(0,i._)("td",null,[(0,i.Wm)(v,{class:""},{default:(0,i.w5)((()=>[(0,i.Wm)(k,{placeholder:"Новый материал",type:"text",modelValue:r.tempMaterial,"onUpdate:modelValue":t[3]||(t[3]=e=>r.tempMaterial=e)},null,8,["modelValue"]),(0,i.Wm)(b,{class:"add-button",type:"button",color:"secondary",onClick:t[4]||(t[4]=e=>_.addMaterial(r.tempMaterial)),variant:"outline"},{default:(0,i.w5)((()=>[(0,i.Uk)("Добавить ")])),_:1})])),_:1})])])])])]),(0,i.Wm)(k,{type:"file",accept:"image/*",multiple:"multiple",ref:"file",onChange:_.previewMultiImage,class:"mb-3",label:"Превью",placeholder:"Превью"},null,8,["onChange"]),(0,i._)("div",f,[r.preview_list?.length?((0,i.wg)(!0),(0,i.iD)(i.HY,{key:0},(0,i.Ko)(r.preview_list,((e,t)=>((0,i.wg)(),(0,i.iD)("div",{key:t},[(0,i._)("img",{src:e,class:"img-fluid"},null,8,g),(0,i._)("button",{onClick:(0,l.iM)((e=>_.dropFile(t)),["prevent"])},"Х",8,w)])))),128)):(0,i.kq)("",!0)]),(0,i.Wm)(j,{modelValue:a.formData.description,"onUpdate:modelValue":t[5]||(t[5]=e=>a.formData.description=e),label:"Краткое описание",style:{"margin-bottom":"1rem"},placeholder:"Напишите что-нибудь",rows:"5",maxlength:"255",id:"inputDescription","aria-describedby":"inputGroupPrepend",required:""},null,8,["modelValue"])])),_:1}),(0,i.Wm)(M,null,{default:(0,i.w5)((()=>[(0,i.Wm)(b,{color:"secondary",onClick:t[6]||(t[6]=e=>a.visible=!1)},{default:(0,i.w5)((()=>[(0,i.Uk)(" Отменить ")])),_:1}),(0,i.wy)((0,i.Wm)(b,{color:"primary",type:"submit"},{default:(0,i.w5)((()=>[(0,i.Uk)("Добавить")])),_:1},512),[[l.F8,"new"===a.mode]]),(0,i.wy)((0,i.Wm)(b,{color:"primary",type:"submit"},{default:(0,i.w5)((()=>[(0,i.Uk)("Редактировать")])),_:1},512),[[l.F8,"edit"===a.mode]])])),_:1})])),_:1},8,["validated","onChange"])])),_:1},8,["visible","onClose"])],64)}a(7658);var b=a(6265),y=a.n(b),D=a(7123);const k=y().create({withCredentials:!0});var C={props:{mode:{required:!0,type:String,validator:e=>["new","edit"].includes(e.toLowerCase())},visible:!1,formData:{title:"",text:"",description:"",preview:"",category_name:"",image_list:[],tags_array:new Set,options_object:{},options_array:[]}},data(){return{textMd2:"",textEditMode:"md2",formValid:!1,preview_list:[],options_object:{"Материал":{"Размер 1":2e3,"Размер 2":3e3}},tempSize:0,tempMaterial:0}},updated(){this.options_object={};for(let{size:e,material:t,price:a}of this.formData.options_array)(t||e||a)&&(this.options_object[t]?this.options_object[t][e]=a:this.options_object[t]={size:a});this.preview_list=this.formData.image_list?.filter((e=>e))?.map((e=>`${this.$store.state.publicPath}/public/pics/${e}`)),document.getElementsByClassName("ql-toolbar")?.[0]?.classList.add("hidden")},async mounted(){this.projects=await this.getProjects(),console.log(this.tags,this.projects)},methods:{addMaterial(e){let t=Object.values(this.options_object)?.[0]??{};console.log(t),t=Object.fromEntries(Object.entries(t)?.map((([e])=>[e,0]))),console.log(t),this.options_object[e]=t,this.tempMaterial=""},addSize(e){const t=Object.entries(this.options_object)?.map((([t,a])=>[t,Object.assign(a??{},{[e]:0})]));this.options_object=Object.fromEntries(t),this.tempSize=""},dropMaterial(e){delete this.options_object[e]},dropSize(e){for(let t in this.options_object)delete this.options_object[t][e]},async getProjects(){return await k.get(this.$store.state.publicPath+"/api/categories/").then((e=>e.data)).catch((e=>{D.Z.$emit("noresponse",e)}))},previewMultiImage(e){var t=e.target,a=t.files.length,i=0;if(this.formData.preview=t.files[0],this.preview_list||(this.preview_list=[]),this.formData.image_list||(this.formData.image_list=[]),t.files)while(a--){var o=new FileReader;o.onload=e=>{this.preview_list.push(e.target.result)},this.formData.image_list.push(t.files[i]),o.readAsDataURL(t.files[i]),i++}},reset(){this.formData.image_list=[],this.preview_list=[]},dropFile(e){this.formData.image_list?.splice(e,1),this.preview_list?.splice(e,1)},addNewPost(){D.Z.$emit("addNewPost")},changeP(e){this.formData.category_name=e.target.value},closeModal(){D.Z.$emit("closeModal")},constractFromData(e){if(!this.formData.title||!this.formData.description)throw new Error;var t=new FormData;return t.append("title",this.formData.title),t.append("description",this.formData.description),this.formData.image_list?.forEach((e=>{t.append("images[]",e)})),this.formData.category_name&&t.append("categoryName",this.formData.category_name),t.append("optionsObject",JSON.stringify(this.options_object)),e&&t.append("id",this.formData.id),t},addNewing(){try{const e=this.constractFromData();k.post(this.$store.state.publicPath+"/api/admin/items",e,{headers:{"Content-Type":"multipart/form-data"}}).then((()=>{D.Z.$emit("postAdded")})).catch((e=>{D.Z.$emit("noresponse",e)}))}catch(e){this.formValid=!0}},editNewing(){try{const e=this.constractFromData(!0);k.put(this.$store.state.publicPath+"/api/admin/items",e,{headers:{"Content-Type":"multipart/form-data"}}).then((()=>{D.Z.$emit("postEdited")})).catch((e=>{D.Z.$emit("noresponse",e)}))}catch(e){console.log(e),this.formValid=!0}}}},v=a(89);const j=(0,v.Z)(C,[["render",_],["__scopeId","data-v-6c721688"]]);var W=j,M=a(5404);const U=y().create({withCredentials:!0,credentials:"include"});var V={components:{AddItemModal:W,Table:M.Z},props:["tag","project"],data(){return{myApi:U,formVisible:!1,formData:{},rows:[],dataActions:{"Изменить":{action:this.change,color:"warning"},"Удалить":{action:this.delete,color:"danger"}},tableFieldNames:[{name:"title",title:"Название"},{name:"description",title:"Описание"},{name:"publication_date",title:"Дата добавления"}]}},created(){D.Z.$on("addNewPost",(()=>{this.formMode="new",this.formData={category:this.$route.params.categoryName},this.formVisible=!0})),D.Z.$on("closeModal",(()=>{this.formVisible=!1,this.formData={}})),D.Z.$on("postAdded",(()=>{this.formVisible=!1,this.get(),this.formData={}})),D.Z.$on("postEdited",(()=>{this.formVisible=!1,this.get(),this.formData={}}))},methods:{change(e){this.formVisible=!0,e.tags_array=new Set(e.tags_array),this.formData=e,console.log(e),this.formMode="edit"},get(e,t){return console.log(this.tag),U.get(this.$store.state.publicPath+"/api/admin/items/",{params:{take:e??10,page:t??1,tagsArray:this.$route.params.tag?[this.$route.params.tag]:void 0,category:this.$route.params.categoryName}}).then((e=>(e.data?.length>0&&(this.rows=e.data),e.data))).catch((e=>(D.Z.$emit("noresponse",e),!1)))},delete(e){const t=confirm("Вы действительно хотите удалить позицию из каталога?");if(t)return U.delete(this.$store.state.publicPath+"/api/admin/items/",{data:{id:e.id}}).then((()=>{this.get(),D.Z.$emit("postDeleted")})).catch((e=>{D.Z.$emit("noresponse",e)}))}}};const P=(0,v.Z)(V,[["render",o]]);var $=P}}]);
//# sourceMappingURL=300.c34b6a30.js.map