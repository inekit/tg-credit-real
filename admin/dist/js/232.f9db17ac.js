(self["webpackChunk_coreui_coreui_free_vue_admin_template"]=self["webpackChunk_coreui_coreui_free_vue_admin_template"]||[]).push([[232],{4234:function(e){let t={year:"numeric",month:"long",day:"numeric"};e.exports={dateFormatter:e=>e?new Date(e).toLocaleDateString("ru-RU",t):"",getAgeStr(e){return e>12?`${Math.trunc(e/12)} лет ${e%12} месяцев`:`${e} месяцев`}}},1829:function(e,t,a){"use strict";a.d(t,{Z:function(){return f}});var r=a(3396),l=a(7139);const s={class:"order-toggle"},o=["src"],i={key:1},d={class:"d-grid gap-2 d-md-flex justify-content-md-center"};function n(e,t,n,u,m,c){const p=(0,r.up)("CCardHeader"),f=(0,r.up)("CTableHeaderCell"),h=(0,r.up)("CTableRow"),g=(0,r.up)("CTableHead"),w=(0,r.up)("CFormInput"),_=(0,r.up)("CTableDataCell"),D=(0,r.up)("CButton"),b=(0,r.up)("CTableBody"),k=(0,r.up)("CTable"),C=(0,r.up)("CCardBody"),W=(0,r.up)("CCard"),U=(0,r.up)("CCol"),v=(0,r.up)("CRow"),y=(0,r.up)("CPaginationItem"),P=(0,r.up)("CPagination");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(v,null,{default:(0,r.w5)((()=>[(0,r.Wm)(U,{md:12},{default:(0,r.w5)((()=>[(0,r.Wm)(W,{class:"mb-4"},{default:(0,r.w5)((()=>[(0,r.Wm)(p,null,{default:(0,r.w5)((()=>[(0,r.Uk)((0,l.zw)(n.name),1)])),_:1}),(0,r.Wm)(C,null,{default:(0,r.w5)((()=>[(0,r.Wm)(k,{align:"middle",class:"mb-0 border",hover:"",responsive:""},{default:(0,r.w5)((()=>[(0,r.Wm)(g,{color:"light"},{default:(0,r.w5)((()=>[(0,r.Wm)(h,null,{default:(0,r.w5)((()=>[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(m.fieldsTransformed,(e=>((0,r.wg)(),(0,r.j4)(f,{key:e.name+"header",class:(0,l.C_)(["text-center",[e.order?"orderable":"",e.name===m.currentOrder?"current":"",!0===m.orderDesc&&e.name===m.currentOrder?"desc":""]]),onClick:t=>c.changeOrder(e)},{default:(0,r.w5)((()=>[(0,r._)("div",s,[(0,r._)("img",{src:a(746)},null,8,o)]),(0,r.Uk)(" "+(0,l.zw)(e.title),1)])),_:2},1032,["class","onClick"])))),128)),(0,r.Wm)(f,{class:"text-center"},{default:(0,r.w5)((()=>[(0,r.Uk)("Действия")])),_:1})])),_:1})])),_:1}),(0,r.Wm)(b,null,{default:(0,r.w5)((()=>[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(c.transformData(n.rows),((a,s)=>((0,r.wg)(),(0,r.j4)(h,{key:s+"row"},{default:(0,r.w5)((()=>[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(a,((e,t)=>((0,r.wg)(),(0,r.j4)(_,{key:t+"row",class:"text-center"},{default:(0,r.w5)((()=>[m.updatingId===n.rows[s]?.id?((0,r.wg)(),(0,r.j4)(w,{key:0,modelValue:m.formData[n.fields[t]?.name],"onUpdate:modelValue":e=>m.formData[n.fields[t]?.name]=e},null,8,["modelValue","onUpdate:modelValue"])):((0,r.wg)(),(0,r.iD)("span",i,(0,l.zw)(e),1))])),_:2},1024)))),128)),(0,r.Wm)(_,null,{default:(0,r.w5)((()=>[(0,r._)("div",d,[m.updatingId===n.rows[s]?.id?((0,r.wg)(),(0,r.j4)(D,{key:0,color:"primary",size:"md",onClick:e=>c.editRow(s)},{default:(0,r.w5)((()=>[(0,r.Uk)(" Сохранить")])),_:2},1032,["onClick"])):(0,r.kq)("",!0),m.updatingId===n.rows[s]?.id?((0,r.wg)(),(0,r.j4)(D,{key:1,color:"light",size:"md",onClick:t[0]||(t[0]=e=>m.updatingId=!1)},{default:(0,r.w5)((()=>[(0,r.Uk)(" Отменить")])),_:1})):((0,r.wg)(!0),(0,r.iD)(r.HY,{key:2},(0,r.Ko)(n.actions,((t,a)=>((0,r.wg)(),(0,r.j4)(D,{key:a+"action",color:t?.color,size:"sm",onClick:r=>c.chooseAction(a,t,s,e.j,e.column)},{default:(0,r.w5)((()=>[(0,r.Uk)((0,l.zw)(a),1)])),_:2},1032,["color","onClick"])))),128))])])),_:2},1024)])),_:2},1024)))),128)),(0,r.Wm)(h)])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1}),(0,r.Wm)(P,{"aria-label":"Page navigation example"},{default:(0,r.w5)((()=>[n.lastPageNumber?((0,r.wg)(),(0,r.j4)(y,{key:0,onClick:c.firstPage},{default:(0,r.w5)((()=>[(0,r.Uk)("В начало")])),_:1},8,["onClick"])):(0,r.kq)("",!0),(0,r.Wm)(y,{onClick:c.previousPage},{default:(0,r.w5)((()=>[(0,r.Uk)("Назад")])),_:1},8,["onClick"]),(0,r.Wm)(y,{disabled:""},{default:(0,r.w5)((()=>[(0,r.Uk)((0,l.zw)(m.page),1)])),_:1}),(0,r.Wm)(y,{onClick:c.nextPage},{default:(0,r.w5)((()=>[(0,r.Uk)("Вперед")])),_:1},8,["onClick"]),n.lastPageNumber?((0,r.wg)(),(0,r.j4)(y,{key:1,onClick:c.lastPage},{default:(0,r.w5)((()=>[(0,r.Uk)("В конец")])),_:1},8,["onClick"])):(0,r.kq)("",!0)])),_:1})],64)}a(7658);var u=a(4234),m={props:{name:{type:String},fields:[],actions:[],rows:[],postData:{type:Function,default:()=>{}},updateRow:{type:Function,default:()=>{}},editMode:{type:String,default:"inline"},lastPageNumber:Number,getPageCount:Function},data(){return{fieldsTransformed:[],perPage:10,page:1,updatingId:!1,formData:{},orderDesc:!0,currentOrder:"id"}},async mounted(){this.fieldsTransformed=this.fields.map((e=>("object"===typeof e?e.title=e.title??e.name:e={name:e},e))),await this.postData(this.perPage,this.page,this.currentOrder,this.orderDesc),await this.getPageCount()},methods:{dateFormatter:u.dateFormatter,chooseAction(e,t,a){t&&(console.log("Изменить"===e&&"inline"===this.editMode,a),"Изменить"===e&&"inline"===this.editMode?(this.updatingId=this.rows[a]?.id,this.formData=this.rows[a]):t?.action(this.rows[a]))},async nextPage(){const e=await this.postData(this.perPage,this.page+1,this.currentOrder,this.orderDesc);e?.length>0&&this.page++},previousPage(){this.page>1&&this.page--,this.postData(this.perPage,this.page,this.currentOrder,this.orderDesc)},toPage(e){this.page=e,this.postData(this.perPage,this.page,this.currentOrder,this.orderDesc)},firstPage(){this.page=1,this.postData(this.perPage,this.page,this.currentOrder,this.orderDesc)},lastPage(){this.page=this.lastPageNumber,this.postData(this.perPage,this.page,this.currentOrder,this.orderDesc)},changeOrder(e){e.order&&(this.page=1,this.currentOrder===e.name?this.orderDesc=!this.orderDesc:(this.currentOrder=e.name,this.orderDesc=!0),this.postData(this.perPage,this.page,this.currentOrder,this.orderDesc))},editRow(e){this.updatingId=!1,this.updateRow(this.rows[e]?.id,this.formData)},transformData(e){return e?.map(this.transformDataEl)},transformDataEl(e){let t=[];for(let a of this.fields){const r=a.name.split(".")??a.split(".");let l=e;r?.forEach((e=>l=l?.[e])),"creation_date"!==a?.name&&"publication_date"!==a?.name&&"date"!==a?.type||(l=(0,u.dateFormatter)(l)),"text"===a?.name&&(l=l.substr(0,100)),t.push(l??"")}return t}}},c=a(89);const p=(0,c.Z)(m,[["render",n]]);var f=p},4232:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return U}});var r=a(3396);function l(e,t,a,l,s,o){const i=(0,r.up)("AddUserModal"),d=(0,r.up)("CFormInput"),n=(0,r.up)("Table");return(0,r.wg)(),(0,r.iD)("div",null,[(0,r.Wm)(i,{visible:s.formVisible,formData:s.formData,mode:e.formMode},null,8,["visible","formData","mode"]),(0,r.Wm)(d,{type:"search",modelValue:s.searchQuery,"onUpdate:modelValue":t[0]||(t[0]=e=>s.searchQuery=e),onChange:t[1]||(t[1]=e=>{o.getUsers()}),placeholder:"Поиск",class:"mb-3"},null,8,["modelValue"]),(0,r.Wm)(n,{fields:s.tableFieldNames,postData:o.getUsers,actions:s.dataActions,rows:s.rows,name:"Пользователи",editMode:"form"},null,8,["fields","postData","actions","rows"])])}a(7658);var s=a(7139);const o={class:"add-user",style:{display:"'none'"}},i={key:0,class:"img-container mb-3"},d=["src"],n={key:1,class:"img-container mb-3"},u=["src"];function m(e,t,a,l,m,c){const p=(0,r.up)("CModalTitle"),f=(0,r.up)("CModalHeader"),h=(0,r.up)("CInputGroupText"),g=(0,r.up)("CFormInput"),w=(0,r.up)("CInputGroup"),_=(0,r.up)("CModalBody"),D=(0,r.up)("CModal");return(0,r.wg)(),(0,r.j4)(D,{alignment:"center",visible:a.visible,onClose:c.closeModal},{default:(0,r.w5)((()=>[(0,r.Wm)(f,null,{default:(0,r.w5)((()=>[(0,r.Wm)(p,null,{default:(0,r.w5)((()=>[(0,r.Uk)((0,s.zw)(e.fio),1)])),_:1})])),_:1}),(0,r.Wm)(_,null,{default:(0,r.w5)((()=>[(0,r._)("form",o,[(0,r.Wm)(w,{class:"mb-3"},{default:(0,r.w5)((()=>[(0,r.Wm)(h,null,{default:(0,r.w5)((()=>[(0,r.Uk)("ID")])),_:1}),(0,r.Wm)(g,{modelValue:a.formData.id,"onUpdate:modelValue":t[0]||(t[0]=e=>a.formData.id=e),disabled:""},null,8,["modelValue"])])),_:1}),(0,r.Wm)(w,{class:"mb-3"},{default:(0,r.w5)((()=>[(0,r.Wm)(h,null,{default:(0,r.w5)((()=>[(0,r.Uk)("Юзернейм")])),_:1}),(0,r.Wm)(g,{modelValue:a.formData.username,"onUpdate:modelValue":t[1]||(t[1]=e=>a.formData.username=e),disabled:""},null,8,["modelValue"])])),_:1}),(0,r.Wm)(w,{class:"mb-3"},{default:(0,r.w5)((()=>[(0,r.Wm)(h,null,{default:(0,r.w5)((()=>[(0,r.Uk)("Дата последнего использования")])),_:1}),(0,r.Wm)(g,{modelValue:a.formData.last_use,"onUpdate:modelValue":t[2]||(t[2]=e=>a.formData.last_use=e),disabled:""},null,8,["modelValue"])])),_:1}),(0,r.Wm)(w,{class:"mb-3"},{default:(0,r.w5)((()=>[(0,r.Wm)(h,null,{default:(0,r.w5)((()=>[(0,r.Uk)("ФИО")])),_:1}),(0,r.Wm)(g,{modelValue:a.formData.fio,"onUpdate:modelValue":t[3]||(t[3]=e=>a.formData.fio=e),disabled:""},null,8,["modelValue"])])),_:1}),(0,r.Wm)(w,{class:"mb-3"},{default:(0,r.w5)((()=>[(0,r.Wm)(h,null,{default:(0,r.w5)((()=>[(0,r.Uk)("Телефон")])),_:1}),(0,r.Wm)(g,{modelValue:a.formData.phone,"onUpdate:modelValue":t[4]||(t[4]=e=>a.formData.phone=e),disabled:""},null,8,["modelValue"])])),_:1}),(0,r.Wm)(w,{class:"mb-3"},{default:(0,r.w5)((()=>[(0,r.Wm)(h,null,{default:(0,r.w5)((()=>[(0,r.Uk)("Дата рождения")])),_:1}),(0,r.Wm)(g,{value:c.dateFormatter(a.formData.birth_date),disabled:""},null,8,["value"])])),_:1}),a.formData.passport_photo?((0,r.wg)(),(0,r.iD)("div",i,[(0,r.Wm)(h,null,{default:(0,r.w5)((()=>[(0,r.Uk)("Фото паспорта")])),_:1}),(0,r._)("img",{src:`${e.$store.state.publicPath}/public/pics/${a.formData.passport_photo}`},null,8,d)])):(0,r.kq)("",!0),a.formData.visa_photo?((0,r.wg)(),(0,r.iD)("div",n,[(0,r.Wm)(h,null,{default:(0,r.w5)((()=>[(0,r.Uk)("Фото визы")])),_:1}),(0,r._)("img",{src:`${e.$store.state.publicPath}/public/pics/${a.formData.visa_photo}`},null,8,u)])):(0,r.kq)("",!0),(0,r.Wm)(w,{class:"mb-3"},{default:(0,r.w5)((()=>[(0,r.Wm)(h,null,{default:(0,r.w5)((()=>[(0,r.Uk)("Дата окончания визы")])),_:1}),(0,r.Wm)(g,{value:c.dateFormatter(a.formData.visa_expired_date),disabled:""},null,8,["value"])])),_:1}),(0,r.Wm)(w,{class:"mb-3"},{default:(0,r.w5)((()=>[(0,r.Wm)(h,null,{default:(0,r.w5)((()=>[(0,r.Uk)("Дата верификации")])),_:1}),(0,r.Wm)(g,{value:c.dateFormatter(a.formData.verification_date),disabled:""},null,8,["value"])])),_:1})])])),_:1})])),_:1},8,["visible","onClose"])}var c=a(7123),p=a(4234),f={props:{visible:!1,formData:{}},methods:{closeModal(){c.Z.$emit("closeModal")},dateFormatter:p.dateFormatter}},h=a(89);const g=(0,h.Z)(f,[["render",m],["__scopeId","data-v-49f6950e"]]);var w=g,_=a(1829),D=a(6265),b=a.n(D);const k=b().create({withCredentials:!0});var C={name:"Users",components:{AddUserModal:w,Table:_.Z},data(){return{myApi:k,formVisible:!1,formData:{},rows:[],searchQuery:null,dataActions:{"Подробнее":{action:this.changeUser,color:"primary"},"Займы":{action:this.routeToLoans,color:"primary"},"Бан":{action:this.banUser,color:"danger"}},tableFieldNames:[{name:"id",title:"ID"},{name:"username",title:"Юзернейм"},{name:"fio",title:"ФИО"},{name:"phone",title:"Телефон"},{name:"visa_expired_date",type:"date",title:"Дата окончания визы"},{name:"verification_date",type:"date",title:"Дата верификации"},{name:"ban",title:"Бан"}]}},created(){c.Z.$on("closeModal",(()=>{this.formVisible=!1,this.formData={}}))},methods:{changeUser(e){this.formVisible=!0,this.formData=e,this.formMode="edit"},getUsers(e,t){return k.get(this.$store.state.publicPath+"/api/admin/users/",{params:{perPage:e??10,page:t??1,searchQuery:this.searchQuery}}).then((e=>(e.data?.length>0&&(this.rows=e.data),e.data))).catch((e=>(c.Z.$emit("noresponse",e),!1)))},banUser(e){const t=confirm("Вы действительно хотите забанить пользователя?");if(t)return k.put(this.$store.state.publicPath+"/api/admin/users/",{id:e.id,ban:!e.ban}).then((()=>{this.getUsers()})).catch((e=>{c.Z.$emit("noresponse",e)}))},routeToLoans(e){this.$router.push("/loans/user/"+e.id)}}};const W=(0,h.Z)(C,[["render",l]]);var U=W},746:function(e,t,a){"use strict";e.exports=a.p+"img/arrow_up.996bcdd2.svg"}}]);
//# sourceMappingURL=232.f9db17ac.js.map