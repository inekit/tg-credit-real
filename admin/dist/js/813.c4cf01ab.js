(self["webpackChunk_coreui_coreui_free_vue_admin_template"]=self["webpackChunk_coreui_coreui_free_vue_admin_template"]||[]).push([[813],{4234:function(e){let t={year:"numeric",month:"long",day:"numeric"};e.exports={dateFormatter:e=>new Date(e).toLocaleDateString("ru-RU",t),getAgeStr(e){return e>12?`${Math.trunc(e/12)} лет ${e%12} месяцев`:`${e} месяцев`}}},5393:function(e,t,a){"use strict";a.d(t,{Z:function(){return h}});var r=a(3396),s=a(7139);const i={class:"order-toggle"},o=["src"],l={key:1},n={class:"d-grid gap-2 d-md-flex justify-content-md-center"};function d(e,t,d,u,c,m){const p=(0,r.up)("CCardHeader"),h=(0,r.up)("CTableHeaderCell"),f=(0,r.up)("CTableRow"),g=(0,r.up)("CTableHead"),w=(0,r.up)("CFormInput"),k=(0,r.up)("CTableDataCell"),b=(0,r.up)("CButton"),D=(0,r.up)("CTableBody"),C=(0,r.up)("CTable"),_=(0,r.up)("CCardBody"),U=(0,r.up)("CCard"),y=(0,r.up)("CCol"),P=(0,r.up)("CRow"),W=(0,r.up)("CPaginationItem"),v=(0,r.up)("CPagination");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(P,null,{default:(0,r.w5)((()=>[(0,r.Wm)(y,{md:12},{default:(0,r.w5)((()=>[(0,r.Wm)(U,{class:"mb-4"},{default:(0,r.w5)((()=>[(0,r.Wm)(p,null,{default:(0,r.w5)((()=>[(0,r.Uk)((0,s.zw)(d.name),1)])),_:1}),(0,r.Wm)(_,null,{default:(0,r.w5)((()=>[(0,r.Wm)(C,{align:"middle",class:"mb-0 border",hover:"",responsive:""},{default:(0,r.w5)((()=>[(0,r.Wm)(g,{color:"light"},{default:(0,r.w5)((()=>[(0,r.Wm)(f,null,{default:(0,r.w5)((()=>[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(c.fieldsTransformed,(e=>((0,r.wg)(),(0,r.j4)(h,{key:e.name+"header",class:(0,s.C_)(["text-center",[e.order?"orderable":"",e.name===c.currentOrder?"current":"",!0===c.orderDesc&&e.name===c.currentOrder?"desc":""]]),onClick:t=>m.changeOrder(e)},{default:(0,r.w5)((()=>[(0,r._)("div",i,[(0,r._)("img",{src:a(746)},null,8,o)]),(0,r.Uk)(" "+(0,s.zw)(e.title),1)])),_:2},1032,["class","onClick"])))),128)),(0,r.Wm)(h,{class:"text-center"},{default:(0,r.w5)((()=>[(0,r.Uk)("Действия")])),_:1})])),_:1})])),_:1}),(0,r.Wm)(D,null,{default:(0,r.w5)((()=>[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(m.transformData(d.rows),((a,i)=>((0,r.wg)(),(0,r.j4)(f,{key:i+"row"},{default:(0,r.w5)((()=>[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(a,((e,t)=>((0,r.wg)(),(0,r.j4)(k,{key:t+"row",class:"text-center"},{default:(0,r.w5)((()=>[c.updatingId===d.rows[i]?.id?((0,r.wg)(),(0,r.j4)(w,{key:0,modelValue:c.formData[d.fields[t]?.name],"onUpdate:modelValue":e=>c.formData[d.fields[t]?.name]=e},null,8,["modelValue","onUpdate:modelValue"])):((0,r.wg)(),(0,r.iD)("span",l,(0,s.zw)(e),1))])),_:2},1024)))),128)),(0,r.Wm)(k,null,{default:(0,r.w5)((()=>[(0,r._)("div",n,[c.updatingId===d.rows[i]?.id?((0,r.wg)(),(0,r.j4)(b,{key:0,color:"primary",size:"md",onClick:e=>m.editRow(i)},{default:(0,r.w5)((()=>[(0,r.Uk)(" Сохранить")])),_:2},1032,["onClick"])):(0,r.kq)("",!0),c.updatingId===d.rows[i]?.id?((0,r.wg)(),(0,r.j4)(b,{key:1,color:"light",size:"md",onClick:t[0]||(t[0]=e=>c.updatingId=!1)},{default:(0,r.w5)((()=>[(0,r.Uk)(" Отменить")])),_:1})):((0,r.wg)(!0),(0,r.iD)(r.HY,{key:2},(0,r.Ko)(d.actions,((t,a)=>((0,r.wg)(),(0,r.j4)(b,{key:a+"action",color:t?.color,size:"sm",onClick:r=>m.chooseAction(a,t,i,e.j,e.column)},{default:(0,r.w5)((()=>[(0,r.Uk)((0,s.zw)(a),1)])),_:2},1032,["color","onClick"])))),128))])])),_:2},1024)])),_:2},1024)))),128)),(0,r.Wm)(f)])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1}),(0,r.Wm)(v,{"aria-label":"Page navigation example"},{default:(0,r.w5)((()=>[d.lastPageNumber?((0,r.wg)(),(0,r.j4)(W,{key:0,onClick:m.firstPage},{default:(0,r.w5)((()=>[(0,r.Uk)("В начало")])),_:1},8,["onClick"])):(0,r.kq)("",!0),(0,r.Wm)(W,{onClick:m.previousPage},{default:(0,r.w5)((()=>[(0,r.Uk)("Назад")])),_:1},8,["onClick"]),(0,r.Wm)(W,{disabled:""},{default:(0,r.w5)((()=>[(0,r.Uk)((0,s.zw)(c.page),1)])),_:1}),(0,r.Wm)(W,{onClick:m.nextPage},{default:(0,r.w5)((()=>[(0,r.Uk)("Вперед")])),_:1},8,["onClick"]),d.lastPageNumber?((0,r.wg)(),(0,r.j4)(W,{key:1,onClick:m.lastPage},{default:(0,r.w5)((()=>[(0,r.Uk)("В конец")])),_:1},8,["onClick"])):(0,r.kq)("",!0)])),_:1})],64)}a(7658);var u=a(4234),c={props:{name:{type:String},fields:[],actions:[],rows:[],postData:{type:Function,default:()=>{}},updateRow:{type:Function,default:()=>{}},editMode:{type:String,default:"inline"},lastPageNumber:Number,getPageCount:Function},data(){return{fieldsTransformed:[],perPage:10,page:1,updatingId:!1,formData:{},orderDesc:!0,currentOrder:"id"}},async mounted(){this.fieldsTransformed=this.fields.map((e=>("object"===typeof e?e.title=e.title??e.name:e={name:e},e))),await this.postData(this.perPage,this.page,this.currentOrder,this.orderDesc),await this.getPageCount()},methods:{dateFormatter:u.dateFormatter,chooseAction(e,t,a){t&&(console.log("Изменить"===e&&"inline"===this.editMode,a),"Изменить"===e&&"inline"===this.editMode?(this.updatingId=this.rows[a]?.id,this.formData=this.rows[a]):t?.action(this.rows[a]))},async nextPage(){const e=await this.postData(this.perPage,this.page+1,this.currentOrder,this.orderDesc);e?.length>0&&this.page++},previousPage(){this.page>1&&this.page--,this.postData(this.perPage,this.page,this.currentOrder,this.orderDesc)},toPage(e){this.page=e,this.postData(this.perPage,this.page,this.currentOrder,this.orderDesc)},firstPage(){this.page=1,this.postData(this.perPage,this.page,this.currentOrder,this.orderDesc)},lastPage(){this.page=this.lastPageNumber,this.postData(this.perPage,this.page,this.currentOrder,this.orderDesc)},changeOrder(e){e.order&&(this.page=1,this.currentOrder===e.name?this.orderDesc=!this.orderDesc:(this.currentOrder=e.name,this.orderDesc=!0),this.postData(this.perPage,this.page,this.currentOrder,this.orderDesc))},editRow(e){this.updatingId=!1,this.updateRow(this.rows[e]?.id,this.formData)},transformData(e){return e?.map(this.transformDataEl)},transformDataEl(e){let t=[];for(let a of this.fields){const r=a.name.split(".")??a.split(".");let s=e;r?.forEach((e=>s=s?.[e])),"creation_date"!==a?.name&&"publication_date"!==a?.name||(s=(0,u.dateFormatter)(s)),"text"===a?.name&&(s=s.substr(0,100)),t.push(s??"")}return t}}},m=a(89);const p=(0,m.Z)(c,[["render",d]]);var h=p},6813:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return k}});var r=a(3396);function s(e,t,a,s,i,o){const l=(0,r.up)("AddUserModal"),n=(0,r.up)("Table");return(0,r.wg)(),(0,r.iD)("div",null,[(0,r.Wm)(l,{visible:i.formVisible,formData:i.formData},null,8,["visible","formData"]),(0,r.Wm)(n,{fields:i.tableFieldNames,postData:o.getUsers,actions:i.dataActions,rows:i.rows,name:"Администраторы"},null,8,["fields","postData","actions","rows"])])}const i={class:"add-user",style:{display:"'none'"}};function o(e,t,a,s,o,l){const n=(0,r.up)("CButton"),d=(0,r.up)("CModalTitle"),u=(0,r.up)("CModalHeader"),c=(0,r.up)("CInputGroupText"),m=(0,r.up)("CFormInput"),p=(0,r.up)("CInputGroup"),h=(0,r.up)("CModalBody"),f=(0,r.up)("CModalFooter"),g=(0,r.up)("CModal");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(n,{color:"primary",onClick:t[0]||(t[0]=()=>{a.visible=!0})},{default:(0,r.w5)((()=>[(0,r.Uk)("Добавить пользователя")])),_:1}),(0,r.Wm)(g,{alignment:"center",visible:a.visible,onClose:t[6]||(t[6]=()=>{a.visible=!1})},{default:(0,r.w5)((()=>[(0,r.Wm)(u,null,{default:(0,r.w5)((()=>[(0,r.Wm)(d,null,{default:(0,r.w5)((()=>[(0,r.Uk)("Add user")])),_:1})])),_:1}),(0,r.Wm)(h,null,{default:(0,r.w5)((()=>[(0,r._)("form",i,[(0,r.Wm)(p,{class:"mb-3"},{default:(0,r.w5)((()=>[(0,r.Wm)(c,{id:"basic-addon1"},{default:(0,r.w5)((()=>[(0,r.Uk)("@")])),_:1}),(0,r.Wm)(m,{modelValue:e.nick,"onUpdate:modelValue":t[1]||(t[1]=t=>e.nick=t),placeholder:"Никнейм","aria-label":"Username","aria-describedby":"basic-addon1"},null,8,["modelValue"])])),_:1}),(0,r.Wm)(p,{class:"mb-3"},{default:(0,r.w5)((()=>[(0,r.Wm)(m,{modelValue:e.email,"onUpdate:modelValue":t[2]||(t[2]=t=>e.email=t),placeholder:"mail","aria-label":"Email"},null,8,["modelValue"])])),_:1}),(0,r.Wm)(m,{modelValue:e.password,"onUpdate:modelValue":t[3]||(t[3]=t=>e.password=t),class:"mb-3",placeholder:"Пароль","aria-label":"Password"},null,8,["modelValue"]),(0,r.Wm)(m,{modelValue:e.password2,"onUpdate:modelValue":t[4]||(t[4]=t=>e.password2=t),placeholder:"Повторите пароль","aria-label":"Password2"},null,8,["modelValue"])])])),_:1}),(0,r.Wm)(f,null,{default:(0,r.w5)((()=>[(0,r.Wm)(n,{color:"secondary",onClick:t[5]||(t[5]=()=>{a.visible=!1})},{default:(0,r.w5)((()=>[(0,r.Uk)(" Отменить ")])),_:1}),(0,r.Wm)(n,{color:"primary",onClick:e.saveUser},{default:(0,r.w5)((()=>[(0,r.Uk)("Добавить пользователя")])),_:1},8,["onClick"])])),_:1})])),_:1},8,["visible"])],64)}var l=a(7123),n={props:{visible:!1,formData:{email:"",password:"",password2:"",nick:""}},methods:{addUser(){if(!this.formData.email||!this.formData.password||this.formData.password2!==this.formData.password||!this.formData.nick)return l.Z.$emit("wrongInputData",this.formData);this.$store.myApi.put(this.$store.state.publicPath+"/api/users/add",this.formData).then((e=>{l.Z.emit("userAdded",e)})).catch((e=>{l.Z.emit("noresponse",e)}))}}},d=a(89);const u=(0,d.Z)(n,[["render",o]]);var c=u,m=a(5393),p=a(6265),h=a.n(p);const f=h().create({withCredentials:!0});var g={name:"Users",components:{AddUserModal:c,Table:m.Z},data(){return{myApi:f,formVisible:!1,formData:{},rows:[],dataActions:{"Бан":{action:this.banUser,color:"light"},"Изменить":{action:this.changeUser,color:"warning"},"Удалить":{action:this.deleteUser,color:"danger"}},tableFieldNames:[{name:"nick",title:"Никнейм"},{name:"email",title:"Почта"}]}},methods:{changeUser(e){this.formVisible=!0,this.formData=e},getUsers(e,t){return f.get(this.$store.state.publicPath+"/api/admin/users/",{perPage:e??0,page:t??0}).then((e=>(this.rows=e.data,e.data))).catch((e=>(l.Z.$emit("noresponse",e),!1)))},deleteUser(e){console.log(e);const t=confirm("Вы действительно хотите удалить пользователя?");if(t)return f.delete(this.$store.state.publicPath+"/api/admin/users/",{data:{id:e}}).then((()=>{this.rows=this.rows.filter((t=>t.id!==e)),l.Z.$emit("userDeleted")})).catch((e=>{l.Z.$emit("noresponse",e)}))},banUser(e){const t=confirm("Вы действительно хотите забанить пользователя?");if(t)return f.put(this.$store.state.publicPath+"/api/admin/users/",{id:e,ban:!0}).then((()=>{l.Z.$emit("userAdded")})).catch((e=>{l.Z.$emit("noresponse",e)}))}}};const w=(0,d.Z)(g,[["render",s]]);var k=w},746:function(e,t,a){"use strict";e.exports=a.p+"img/arrow_up.996bcdd2.svg"}}]);
//# sourceMappingURL=813.c4cf01ab.js.map