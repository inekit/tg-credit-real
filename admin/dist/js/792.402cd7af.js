(self["webpackChunk_coreui_coreui_free_vue_admin_template"]=self["webpackChunk_coreui_coreui_free_vue_admin_template"]||[]).push([[792],{4234:function(e){let a={year:"numeric",month:"long",day:"numeric"};e.exports={dateFormatter:e=>new Date(e).toLocaleDateString("ru-RU",a),getAgeStr(e){return e>12?`${Math.trunc(e/12)} лет ${e%12} месяцев`:`${e} месяцев`}}},5393:function(e,a,t){"use strict";t.d(a,{Z:function(){return f}});var l=t(3396),r=t(7139);const o={class:"order-toggle"},s=["src"],i={key:1},d={class:"d-grid gap-2 d-md-flex justify-content-md-center"};function n(e,a,n,u,m,c){const p=(0,l.up)("CCardHeader"),f=(0,l.up)("CTableHeaderCell"),h=(0,l.up)("CTableRow"),g=(0,l.up)("CTableHead"),w=(0,l.up)("CFormInput"),_=(0,l.up)("CTableDataCell"),D=(0,l.up)("CButton"),b=(0,l.up)("CTableBody"),k=(0,l.up)("CTable"),C=(0,l.up)("CCardBody"),W=(0,l.up)("CCard"),U=(0,l.up)("CCol"),y=(0,l.up)("CRow"),v=(0,l.up)("CPaginationItem"),V=(0,l.up)("CPagination");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l.Wm)(y,null,{default:(0,l.w5)((()=>[(0,l.Wm)(U,{md:12},{default:(0,l.w5)((()=>[(0,l.Wm)(W,{class:"mb-4"},{default:(0,l.w5)((()=>[(0,l.Wm)(p,null,{default:(0,l.w5)((()=>[(0,l.Uk)((0,r.zw)(n.name),1)])),_:1}),(0,l.Wm)(C,null,{default:(0,l.w5)((()=>[(0,l.Wm)(k,{align:"middle",class:"mb-0 border",hover:"",responsive:""},{default:(0,l.w5)((()=>[(0,l.Wm)(g,{color:"light"},{default:(0,l.w5)((()=>[(0,l.Wm)(h,null,{default:(0,l.w5)((()=>[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(m.fieldsTransformed,(e=>((0,l.wg)(),(0,l.j4)(f,{key:e.name+"header",class:(0,r.C_)(["text-center",[e.order?"orderable":"",e.name===m.currentOrder?"current":"",!0===m.orderDesc&&e.name===m.currentOrder?"desc":""]]),onClick:a=>c.changeOrder(e)},{default:(0,l.w5)((()=>[(0,l._)("div",o,[(0,l._)("img",{src:t(746)},null,8,s)]),(0,l.Uk)(" "+(0,r.zw)(e.title),1)])),_:2},1032,["class","onClick"])))),128)),(0,l.Wm)(f,{class:"text-center"},{default:(0,l.w5)((()=>[(0,l.Uk)("Действия")])),_:1})])),_:1})])),_:1}),(0,l.Wm)(b,null,{default:(0,l.w5)((()=>[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(c.transformData(n.rows),((t,o)=>((0,l.wg)(),(0,l.j4)(h,{key:o+"row"},{default:(0,l.w5)((()=>[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(t,((e,a)=>((0,l.wg)(),(0,l.j4)(_,{key:a+"row",class:"text-center"},{default:(0,l.w5)((()=>[m.updatingId===n.rows[o]?.id?((0,l.wg)(),(0,l.j4)(w,{key:0,modelValue:m.formData[n.fields[a]?.name],"onUpdate:modelValue":e=>m.formData[n.fields[a]?.name]=e},null,8,["modelValue","onUpdate:modelValue"])):((0,l.wg)(),(0,l.iD)("span",i,(0,r.zw)(e),1))])),_:2},1024)))),128)),(0,l.Wm)(_,null,{default:(0,l.w5)((()=>[(0,l._)("div",d,[m.updatingId===n.rows[o]?.id?((0,l.wg)(),(0,l.j4)(D,{key:0,color:"primary",size:"md",onClick:e=>c.editRow(o)},{default:(0,l.w5)((()=>[(0,l.Uk)(" Сохранить")])),_:2},1032,["onClick"])):(0,l.kq)("",!0),m.updatingId===n.rows[o]?.id?((0,l.wg)(),(0,l.j4)(D,{key:1,color:"light",size:"md",onClick:a[0]||(a[0]=e=>m.updatingId=!1)},{default:(0,l.w5)((()=>[(0,l.Uk)(" Отменить")])),_:1})):((0,l.wg)(!0),(0,l.iD)(l.HY,{key:2},(0,l.Ko)(n.actions,((a,t)=>((0,l.wg)(),(0,l.j4)(D,{key:t+"action",color:a?.color,size:"sm",onClick:l=>c.chooseAction(t,a,o,e.j,e.column)},{default:(0,l.w5)((()=>[(0,l.Uk)((0,r.zw)(t),1)])),_:2},1032,["color","onClick"])))),128))])])),_:2},1024)])),_:2},1024)))),128)),(0,l.Wm)(h)])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1}),(0,l.Wm)(V,{"aria-label":"Page navigation example"},{default:(0,l.w5)((()=>[n.lastPageNumber?((0,l.wg)(),(0,l.j4)(v,{key:0,onClick:c.firstPage},{default:(0,l.w5)((()=>[(0,l.Uk)("В начало")])),_:1},8,["onClick"])):(0,l.kq)("",!0),(0,l.Wm)(v,{onClick:c.previousPage},{default:(0,l.w5)((()=>[(0,l.Uk)("Назад")])),_:1},8,["onClick"]),(0,l.Wm)(v,{disabled:""},{default:(0,l.w5)((()=>[(0,l.Uk)((0,r.zw)(m.page),1)])),_:1}),(0,l.Wm)(v,{onClick:c.nextPage},{default:(0,l.w5)((()=>[(0,l.Uk)("Вперед")])),_:1},8,["onClick"]),n.lastPageNumber?((0,l.wg)(),(0,l.j4)(v,{key:1,onClick:c.lastPage},{default:(0,l.w5)((()=>[(0,l.Uk)("В конец")])),_:1},8,["onClick"])):(0,l.kq)("",!0)])),_:1})],64)}t(7658);var u=t(4234),m={props:{name:{type:String},fields:[],actions:[],rows:[],postData:{type:Function,default:()=>{}},updateRow:{type:Function,default:()=>{}},editMode:{type:String,default:"inline"},lastPageNumber:Number,getPageCount:Function},data(){return{fieldsTransformed:[],perPage:10,page:1,updatingId:!1,formData:{},orderDesc:!0,currentOrder:"id"}},async mounted(){this.fieldsTransformed=this.fields.map((e=>("object"===typeof e?e.title=e.title??e.name:e={name:e},e))),await this.postData(this.perPage,this.page,this.currentOrder,this.orderDesc),await this.getPageCount()},methods:{dateFormatter:u.dateFormatter,chooseAction(e,a,t){a&&(console.log("Изменить"===e&&"inline"===this.editMode,t),"Изменить"===e&&"inline"===this.editMode?(this.updatingId=this.rows[t]?.id,this.formData=this.rows[t]):a?.action(this.rows[t]))},async nextPage(){const e=await this.postData(this.perPage,this.page+1,this.currentOrder,this.orderDesc);e?.length>0&&this.page++},previousPage(){this.page>1&&this.page--,this.postData(this.perPage,this.page,this.currentOrder,this.orderDesc)},toPage(e){this.page=e,this.postData(this.perPage,this.page,this.currentOrder,this.orderDesc)},firstPage(){this.page=1,this.postData(this.perPage,this.page,this.currentOrder,this.orderDesc)},lastPage(){this.page=this.lastPageNumber,this.postData(this.perPage,this.page,this.currentOrder,this.orderDesc)},changeOrder(e){e.order&&(this.page=1,this.currentOrder===e.name?this.orderDesc=!this.orderDesc:(this.currentOrder=e.name,this.orderDesc=!0),this.postData(this.perPage,this.page,this.currentOrder,this.orderDesc))},editRow(e){this.updatingId=!1,this.updateRow(this.rows[e]?.id,this.formData)},transformData(e){return e?.map(this.transformDataEl)},transformDataEl(e){let a=[];for(let t of this.fields){const l=t.name.split(".")??t.split(".");let r=e;l?.forEach((e=>r=r?.[e])),"creation_date"!==t?.name&&"publication_date"!==t?.name||(r=(0,u.dateFormatter)(r)),"text"===t?.name&&(r=r.substr(0,100)),a.push(r??"")}return a}}},c=t(89);const p=(0,c.Z)(m,[["render",n]]);var f=p},6792:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return W}});var l=t(3396);function r(e,a,t,r,o,s){const i=(0,l.up)("AddUserModal"),d=(0,l.up)("CFormInput"),n=(0,l.up)("Table");return(0,l.wg)(),(0,l.iD)("div",null,[(0,l.Wm)(i,{visible:o.formVisible,formData:o.formData,mode:e.formMode},null,8,["visible","formData","mode"]),(0,l.Wm)(d,{type:"search",modelValue:o.searchQuery,"onUpdate:modelValue":a[0]||(a[0]=e=>o.searchQuery=e),onChange:a[1]||(a[1]=e=>{s.getUsers()}),placeholder:"Поиск",class:"mb-3"},null,8,["modelValue"]),(0,l.Wm)(n,{fields:o.tableFieldNames,postData:s.getUsers,actions:o.dataActions,rows:o.rows,name:"Пользователи",editMode:"form"},null,8,["fields","postData","actions","rows"])])}t(7658);var o=t(7139);const s={class:"add-user",style:{display:"'none'"}},i={key:0,class:"img-container mb-3"},d=["src"],n={key:1,class:"img-container mb-3"},u=["src"];function m(e,a,t,r,m,c){const p=(0,l.up)("CModalTitle"),f=(0,l.up)("CModalHeader"),h=(0,l.up)("CInputGroupText"),g=(0,l.up)("CFormInput"),w=(0,l.up)("CInputGroup"),_=(0,l.up)("CModalBody"),D=(0,l.up)("CModal");return(0,l.wg)(),(0,l.j4)(D,{alignment:"center",visible:t.visible,onClose:c.closeModal},{default:(0,l.w5)((()=>[(0,l.Wm)(f,null,{default:(0,l.w5)((()=>[(0,l.Wm)(p,null,{default:(0,l.w5)((()=>[(0,l.Uk)((0,o.zw)(e.fio),1)])),_:1})])),_:1}),(0,l.Wm)(_,null,{default:(0,l.w5)((()=>[(0,l._)("form",s,[(0,l.Wm)(w,{class:"mb-3"},{default:(0,l.w5)((()=>[(0,l.Wm)(h,null,{default:(0,l.w5)((()=>[(0,l.Uk)("ID")])),_:1}),(0,l.Wm)(g,{modelValue:t.formData.id,"onUpdate:modelValue":a[0]||(a[0]=e=>t.formData.id=e),disabled:""},null,8,["modelValue"])])),_:1}),(0,l.Wm)(w,{class:"mb-3"},{default:(0,l.w5)((()=>[(0,l.Wm)(h,null,{default:(0,l.w5)((()=>[(0,l.Uk)("Юзернейм")])),_:1}),(0,l.Wm)(g,{modelValue:t.formData.username,"onUpdate:modelValue":a[1]||(a[1]=e=>t.formData.username=e),disabled:""},null,8,["modelValue"])])),_:1}),(0,l.Wm)(w,{class:"mb-3"},{default:(0,l.w5)((()=>[(0,l.Wm)(h,null,{default:(0,l.w5)((()=>[(0,l.Uk)("Дата последнего использования")])),_:1}),(0,l.Wm)(g,{modelValue:t.formData.last_use,"onUpdate:modelValue":a[2]||(a[2]=e=>t.formData.last_use=e),disabled:""},null,8,["modelValue"])])),_:1}),(0,l.Wm)(w,{class:"mb-3"},{default:(0,l.w5)((()=>[(0,l.Wm)(h,null,{default:(0,l.w5)((()=>[(0,l.Uk)("ФИО")])),_:1}),(0,l.Wm)(g,{modelValue:t.formData.fio,"onUpdate:modelValue":a[3]||(a[3]=e=>t.formData.fio=e),disabled:""},null,8,["modelValue"])])),_:1}),(0,l.Wm)(w,{class:"mb-3"},{default:(0,l.w5)((()=>[(0,l.Wm)(h,null,{default:(0,l.w5)((()=>[(0,l.Uk)("Телефон")])),_:1}),(0,l.Wm)(g,{modelValue:t.formData.phone,"onUpdate:modelValue":a[4]||(a[4]=e=>t.formData.phone=e),disabled:""},null,8,["modelValue"])])),_:1}),(0,l.Wm)(w,{class:"mb-3"},{default:(0,l.w5)((()=>[(0,l.Wm)(h,null,{default:(0,l.w5)((()=>[(0,l.Uk)("Дата рождения")])),_:1}),(0,l.Wm)(g,{modelValue:t.formData.birth_date,"onUpdate:modelValue":a[5]||(a[5]=e=>t.formData.birth_date=e),disabled:""},null,8,["modelValue"])])),_:1}),t.formData.passport_photo?((0,l.wg)(),(0,l.iD)("div",i,[(0,l.Wm)(h,null,{default:(0,l.w5)((()=>[(0,l.Uk)("Фото паспорта")])),_:1}),(0,l._)("img",{src:t.formData.passport_photo},null,8,d)])):(0,l.kq)("",!0),t.formData.visa_photo?((0,l.wg)(),(0,l.iD)("div",n,[(0,l.Wm)(h,null,{default:(0,l.w5)((()=>[(0,l.Uk)("Фото визы")])),_:1}),(0,l._)("img",{src:t.formData.visa_photo},null,8,u)])):(0,l.kq)("",!0),(0,l.Wm)(w,{class:"mb-3"},{default:(0,l.w5)((()=>[(0,l.Wm)(h,null,{default:(0,l.w5)((()=>[(0,l.Uk)("Дата окончания визы")])),_:1}),(0,l.Wm)(g,{modelValue:t.formData.visa_expired_date,"onUpdate:modelValue":a[6]||(a[6]=e=>t.formData.visa_expired_date=e),disabled:""},null,8,["modelValue"])])),_:1}),(0,l.Wm)(w,{class:"mb-3"},{default:(0,l.w5)((()=>[(0,l.Wm)(h,null,{default:(0,l.w5)((()=>[(0,l.Uk)("Дата верификации")])),_:1}),(0,l.Wm)(g,{modelValue:t.formData.verification_date,"onUpdate:modelValue":a[7]||(a[7]=e=>t.formData.verification_date=e),disabled:""},null,8,["modelValue"])])),_:1})])])),_:1})])),_:1},8,["visible","onClose"])}var c=t(7123),p={props:{visible:!1,formData:{}},methods:{closeModal(){c.Z.$emit("closeModal")}}},f=t(89);const h=(0,f.Z)(p,[["render",m]]);var g=h,w=t(5393),_=t(6265),D=t.n(_);const b=D().create({withCredentials:!0});var k={name:"Users",components:{AddUserModal:g,Table:w.Z},data(){return{myApi:b,formVisible:!1,formData:{},rows:[],searchQuery:null,dataActions:{"Подробнее":{action:this.changeUser,color:"primary"},"Займы":{action:this.routeToLoans,color:"primary"},"Бан":{action:this.banUser,color:"danger"}},tableFieldNames:[{name:"id",title:"ID"},{name:"username",title:"Юзернейм"},{name:"fio",title:"ФИО"},{name:"phone",title:"Телефон"},{name:"visa_expired_date",title:"Дата окончания визы"},{name:"verification_date",title:"Дата верификации"},{name:"ban",title:"Бан"}]}},created(){c.Z.$on("closeModal",(()=>{this.formVisible=!1,this.formData={}}))},methods:{changeUser(e){this.formVisible=!0,this.formData=e,this.formMode="edit"},getUsers(e,a){return b.get(this.$store.state.publicPath+"/api/admin/users/",{params:{perPage:e??10,page:a??1,searchQuery:this.searchQuery}}).then((e=>(e.data?.length>0&&(this.rows=e.data),e.data))).catch((e=>(c.Z.$emit("noresponse",e),!1)))},banUser(e){const a=confirm("Вы действительно хотите забанить пользователя?");if(a)return b.put(this.$store.state.publicPath+"/api/admin/users/",{id:e.id,ban:!e.ban}).then((()=>{this.getUsers()})).catch((e=>{c.Z.$emit("noresponse",e)}))},routeToLoans(e){this.$router.push("/loans/user/"+e.id)}}};const C=(0,f.Z)(k,[["render",r]]);var W=C},746:function(e,a,t){"use strict";e.exports=t.p+"img/arrow_up.996bcdd2.svg"}}]);
//# sourceMappingURL=792.402cd7af.js.map