(self["webpackChunk_coreui_coreui_free_vue_admin_template"]=self["webpackChunk_coreui_coreui_free_vue_admin_template"]||[]).push([[951],{4234:function(e){let t={year:"numeric",month:"long",day:"numeric"};e.exports={dateFormatter:e=>new Date(e).toLocaleDateString("ru-RU",t),getAgeStr(e){return e>12?`${Math.trunc(e/12)} лет ${e%12} месяцев`:`${e} месяцев`}}},7942:function(e,t,a){"use strict";a.d(t,{Z:function(){return c}});var i=a(3396),o=a(7139);const l={key:1},s={class:"d-grid gap-2 d-md-flex justify-content-md-center"};function d(e,t,a,d,r,n){const u=(0,i.up)("CCardHeader"),m=(0,i.up)("CTableHeaderCell"),c=(0,i.up)("CTableRow"),p=(0,i.up)("CTableHead"),h=(0,i.up)("CFormInput"),f=(0,i.up)("CTableDataCell"),w=(0,i.up)("CButton"),g=(0,i.up)("CTableBody"),_=(0,i.up)("CTable"),k=(0,i.up)("CCardBody"),C=(0,i.up)("CCard"),b=(0,i.up)("CCol"),y=(0,i.up)("CRow"),v=(0,i.up)("CPaginationItem"),D=(0,i.up)("CPagination");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i.Wm)(y,null,{default:(0,i.w5)((()=>[(0,i.Wm)(b,{md:12},{default:(0,i.w5)((()=>[(0,i.Wm)(C,{class:"mb-4"},{default:(0,i.w5)((()=>[(0,i.Wm)(u,null,{default:(0,i.w5)((()=>[(0,i.Uk)((0,o.zw)(a.name),1)])),_:1}),(0,i.Wm)(k,null,{default:(0,i.w5)((()=>[(0,i.Wm)(_,{align:"middle",class:"mb-0 border",hover:"",responsive:""},{default:(0,i.w5)((()=>[(0,i.Wm)(p,{color:"light"},{default:(0,i.w5)((()=>[(0,i.Wm)(c,null,{default:(0,i.w5)((()=>[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(r.fieldNames,(e=>((0,i.wg)(),(0,i.j4)(m,{key:e+"header",class:"text-center"},{default:(0,i.w5)((()=>[(0,i.Uk)((0,o.zw)(e),1)])),_:2},1024)))),128)),(0,i.Wm)(m,{class:"text-center"},{default:(0,i.w5)((()=>[(0,i.Uk)("Действия")])),_:1})])),_:1})])),_:1}),(0,i.Wm)(g,null,{default:(0,i.w5)((()=>[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(n.transformData(a.rows),((d,u)=>((0,i.wg)(),(0,i.j4)(c,{key:u+"row"},{default:(0,i.w5)((()=>[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(d,((e,t)=>((0,i.wg)(),(0,i.j4)(f,{key:t+"row",class:"text-center"},{default:(0,i.w5)((()=>[r.updatingId===a.rows[u]?.id?((0,i.wg)(),(0,i.j4)(h,{key:0,modelValue:r.formData[a.fields[t]?.name],"onUpdate:modelValue":e=>r.formData[a.fields[t]?.name]=e},null,8,["modelValue","onUpdate:modelValue"])):((0,i.wg)(),(0,i.iD)("span",l,(0,o.zw)(e),1))])),_:2},1024)))),128)),(0,i.Wm)(f,null,{default:(0,i.w5)((()=>[(0,i._)("div",s,[r.updatingId===a.rows[u]?.id?((0,i.wg)(),(0,i.j4)(w,{key:0,color:"primary",size:"md",onClick:e=>n.editRow(u)},{default:(0,i.w5)((()=>[(0,i.Uk)(" Сохранить")])),_:2},1032,["onClick"])):(0,i.kq)("",!0),r.updatingId===a.rows[u]?.id?((0,i.wg)(),(0,i.j4)(w,{key:1,color:"light",size:"md",onClick:t[0]||(t[0]=e=>r.updatingId=!1)},{default:(0,i.w5)((()=>[(0,i.Uk)(" Отменить")])),_:1})):((0,i.wg)(!0),(0,i.iD)(i.HY,{key:2},(0,i.Ko)(a.actions,((t,a)=>((0,i.wg)(),(0,i.j4)(w,{key:a+"action",color:t?.color,size:"sm",onClick:i=>n.chooseAction(a,t,u,e.j,e.column)},{default:(0,i.w5)((()=>[(0,i.Uk)((0,o.zw)(a),1)])),_:2},1032,["color","onClick"])))),128))])])),_:2},1024)])),_:2},1024)))),128)),(0,i.Wm)(c)])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1}),(0,i.Wm)(D,{"aria-label":"Page navigation example"},{default:(0,i.w5)((()=>[(0,i.Wm)(v,{onClick:n.previousPage},{default:(0,i.w5)((()=>[(0,i.Uk)("Назад")])),_:1},8,["onClick"]),(0,i.Wm)(v,{disabled:""},{default:(0,i.w5)((()=>[(0,i.Uk)((0,o.zw)(r.page),1)])),_:1}),(0,i.Wm)(v,{onClick:n.nextPage},{default:(0,i.w5)((()=>[(0,i.Uk)("Далее")])),_:1},8,["onClick"])])),_:1})],64)}a(7658);var r=a(4234),n={props:{name:{type:String},fields:[],actions:[],rows:[],postData:{type:Function,default:()=>{}},updateRow:{type:Function,default:()=>{}},editMode:{type:String,default:"inline"}},data(){return{fieldNames:[],perPage:10,page:1,updatingId:!1,formData:{}}},async mounted(){this.fieldNames=this.fields.map((e=>"object"===typeof e?e.title??e.name:e)),await this.postData(this.perPage,this.page)},methods:{dateFormatter:r.dateFormatter,chooseAction(e,t,a){t&&(console.log("Изменить"===e&&"inline"===this.editMode,a),"Изменить"===e&&"inline"===this.editMode?(this.updatingId=this.rows[a]?.id,this.formData=this.rows[a]):t?.action(this.rows[a]))},async nextPage(){const e=await this.postData(this.perPage,this.page+1);e?.length>0&&this.page++},previousPage(){this.page>1&&this.page--,this.postData(this.perPage,this.page)},toPage(e){this.page=e,this.postData(this.perPage,this.page)},editRow(e){this.updatingId=!1,this.updateRow(this.rows[e]?.id,this.formData)},transformData(e){return e?.map(this.transformDataEl)},transformDataEl(e){let t=[];for(let a of this.fields){const i=a.name.split(".")??a.split(".");let o=e;i?.forEach((e=>o=o?.[e])),"creation_date"!==a?.name&&"publication_date"!==a?.name||(o=(0,r.dateFormatter)(o)),"text"===a?.name&&(o=o.substr(0,100)),t.push(o??"")}return t}}},u=a(89);const m=(0,u.Z)(n,[["render",d]]);var c=m},9951:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return P}});var i=a(3396);const o={key:0,class:"change-basket-buttons"};function l(e,t,a,l,s,d){const r=(0,i.up)("CFormInput"),n=(0,i.up)("AddBasketItemModal"),u=(0,i.up)("FormBasketModal"),m=(0,i.up)("Table");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i.Wm)(r,{class:"mb-4",type:"number",modelValue:s.user_id,"onUpdate:modelValue":t[0]||(t[0]=e=>s.user_id=e),modelModifiers:{number:!0},onChange:d.get,placeholder:"Поиск по UID"},null,8,["modelValue","onChange"]),(0,i.Wm)(n,{visible:s.formVisible,formData:s.formData,mode:e.formMode},null,8,["visible","formData","mode"]),s.user_id?((0,i.wg)(),(0,i.iD)("div",o,[(0,i._)("button",{class:"btn btn-primary",onClick:t[1]||(t[1]=e=>s.showBasket=!0)},"Сформировать заказ")])):(0,i.kq)("",!0),(0,i.Wm)(u,{visible:s.showBasket,user_id:s.user_id},null,8,["visible","user_id"]),(0,i.Wm)(m,{fields:s.tableFieldNames,postData:d.get,actions:s.dataActions,rows:s.rows,editMode:"form",name:"Позиции"},null,8,["fields","postData","actions","rows"])])}var s=a(7942),d=a(7123),r=a(4234),n=a(6265),u=a.n(n),m=a(7139),c=a(9242);function p(e,t,a,o,l,s){const d=(0,i.up)("CModalTitle"),r=(0,i.up)("CModalHeader"),n=(0,i.up)("CFormInput"),u=(0,i.up)("CForm"),p=(0,i.up)("CModalBody"),h=(0,i.up)("CButton"),f=(0,i.up)("CModalFooter"),w=(0,i.up)("CModal");return(0,i.wg)(),(0,i.j4)(w,{backdrop:"static",alignment:"center",visible:a.visible,onClose:s.closeModal},{default:(0,i.w5)((()=>[(0,i.Wm)(r,null,{default:(0,i.w5)((()=>[(0,i.Wm)(d,null,{default:(0,i.w5)((()=>[(0,i.Uk)((0,m.zw)("new"===a.mode?"Добавить позицию":"Редактировать позицию"),1)])),_:1})])),_:1}),(0,i.Wm)(p,null,{default:(0,i.w5)((()=>[(0,i.Wm)(u,{ref:"add-file-form",novalidate:"",validated:l.formValid,onSubmit:t[1]||(t[1]=(0,c.iM)((t=>e.addCategory()),["prevent"])),class:"add-user",style:{display:"'none'"}},{default:(0,i.w5)((()=>[(0,i.Wm)(n,{class:"mb-3",modelValue:a.formData.count,"onUpdate:modelValue":t[0]||(t[0]=e=>a.formData.count=e),placeholder:"Категория",id:"inputName","aria-describedby":"inputGroupPrepend",maxlength:"255",required:"",feedbackValid:"Все ок",type:"number",feedbackInvalid:"Введите корректное название категории"},null,8,["modelValue"])])),_:1},8,["validated"])])),_:1}),(0,i.Wm)(f,null,{default:(0,i.w5)((()=>[(0,i.Wm)(h,{color:"secondary",onClick:s.closeModal},{default:(0,i.w5)((()=>[(0,i.Uk)(" Отменить ")])),_:1},8,["onClick"]),"new"===a.mode?((0,i.wg)(),(0,i.j4)(h,{key:0,color:"primary",onClick:s.addBasketItem},{default:(0,i.w5)((()=>[(0,i.Uk)("Добавить позицию")])),_:1},8,["onClick"])):((0,i.wg)(),(0,i.j4)(h,{key:1,color:"primary",onClick:s.editBasketItem},{default:(0,i.w5)((()=>[(0,i.Uk)("Редактировать позицию")])),_:1},8,["onClick"]))])),_:1})])),_:1},8,["visible","onClose"])}const h=u().create({withCredentials:!0});var f={props:{mode:{required:!0,type:String,validator:e=>["new","edit"].includes(e.toLowerCase())},visible:!1,formData:{name:"",description:""}},data(){return{formValid:!1}},mounted(){},updated(){this.formValid=!1},methods:{addNewOrderItem(){d.Z.$emit("addNewOrderItem")},closeModal(){d.Z.$emit("closeModal")},constractFromData(){if(!this.formData.count)throw new Error;var e=new FormData;return this.formData.mainside_id&&e.append("mainside_id",this.formData.mainside_id),e.append("item_option_id",this.formData.id),e.append("order_id",this.formData.order_id),e.append("count",this.formData.count),e},addBasketItem(){},editBasketItem(){try{const e=this.constractFromData(!0);h.put(this.$store.state.publicPath+"/api/admin/orders_items",e,{headers:{"Content-Type":"multipart/form-data"}}).then((()=>{d.Z.$emit("orderItemEdited")})).catch((e=>{d.Z.$emit("noresponse",e)}))}catch(e){console.log(e),this.formValid=!0}}}},w=a(89);const g=(0,w.Z)(f,[["render",p],["__scopeId","data-v-67e45fbb"]]);var _=g;const k=e=>((0,i.dD)("data-v-7c88bb50"),e=e(),(0,i.Cn)(),e),C={class:"search-rows"},b=["selected"],y=["selected","value"],v=k((()=>(0,i._)("option",{value:""},"Выберите количество товаров",-1))),D=["value"];function W(e,t,a,o,l,s){const d=(0,i.up)("CModalTitle"),r=(0,i.up)("CModalHeader"),n=(0,i.up)("CFormInput"),u=(0,i.up)("CFormSelect"),c=(0,i.up)("CModalBody"),p=(0,i.up)("CButton"),h=(0,i.up)("CModalFooter"),f=(0,i.up)("CModal");return(0,i.wg)(),(0,i.j4)(f,{backdrop:"static",alignment:"center",visible:a.visible,onClose:s.closeModal},{default:(0,i.w5)((()=>[(0,i.Wm)(r,null,{default:(0,i.w5)((()=>[(0,i.Wm)(d,null,{default:(0,i.w5)((()=>[(0,i.Uk)("Формирование корзины")])),_:1})])),_:1}),a.visible&&e.subpath?((0,i.wg)(),(0,i.j4)(c,{key:0,style:{padding:"0 !important"}},{default:(0,i.w5)((()=>[(0,i.Wm)(n,{class:"mb-4",type:"text",onInput:s.search,placeholder:"Поиск по названию"},null,8,["onInput"]),(0,i._)("div",C,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(e.rows,((e,t)=>((0,i.wg)(),(0,i.iD)("div",{class:"search-row",key:t},(0,m.zw)(e.title)+" "+(0,m.zw)(e.price),1)))),128))]),(0,i.Wm)(u,{"aria-label":l.select_name,onChange:t[0]||(t[0]=e=>s.selectOption(e))},{default:(0,i.w5)((()=>[(0,i._)("option",{selected:null===l.selectedOption,value:""},"Выберите опцию",8,b),((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(l.options_array,((e,t)=>((0,i.wg)(),(0,i.iD)("option",{selected:l.selectedOption===e.id,value:e.id,key:t},(0,m.zw)(e.name)+" "+(0,m.zw)(e.stock),9,y)))),128))])),_:1},8,["aria-label"]),(0,i.Wm)(u,{"aria-label":"Количество",onChange:t[1]||(t[1]=e=>s.selectCount(e))},{default:(0,i.w5)((()=>[v,((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)([...Array(e.selectedStock).keys()],((e,t)=>((0,i.wg)(),(0,i.iD)("option",{key:t,value:e},(0,m.zw)(e),9,D)))),128))])),_:1})])),_:1})):(0,i.kq)("",!0),(0,i.Wm)(h,null,{default:(0,i.w5)((()=>[(0,i.Wm)(p,{color:"secondary",onClick:s.closeModal},{default:(0,i.w5)((()=>[(0,i.Uk)(" Отменить ")])),_:1},8,["onClick"]),(0,i.Wm)(p,{color:"primary",onClick:s.addToBasket},{default:(0,i.w5)((()=>[(0,i.Uk)("Добавить")])),_:1},8,["onClick"])])),_:1})])),_:1},8,["visible","onClose"])}var M=a(6947);const I=u().create({withCredentials:!0});var F={props:{mode:{required:!0,type:String,validator:e=>["new","edit"].includes(e.toLowerCase())},user_id:Number,visible:Boolean},data(){return{searchQuery:"",selectedCount:0,selectedOption:null,select_name:"",options_array:[]}},mounted(){},updated(){},methods:{closeModal(){d.Z.$emit("closeModal")},search(e){this.searchQuery=e.target.value,this.get()},select(e){this.selectedOption=e.id,this.select_name=e.select_name},selectOption(e){this.selectedStock=this.rows.find((t=>t.id==e.target.value))?.stock},selectCount(e){this.selectedCount=e.target.value},get(e,t){return console.log(this.tag),I.get(this.$store.state.publicPath+"/api/admin/items/",{params:{take:e??10,page:t??1,searchQuery:this.searchQuery}}).then((e=>((e.data?.length>0||this.searchQuery&&1===(t??1))&&(this.rows=e.data),e.data))).catch((e=>(d.Z.$emit("noresponse",e),!1)))},addToBasket(){const e=this.selectedCount;this.$store.state.myApi.post(this.$store.state.restAddr+"/favorites",{item_option_id:this.selectedOption,count:e,user_id:this.user_id}).then((async()=>{d.Z.$emit("closeModal")})).catch((()=>{alert("Эта позиция уже добавлена в корзину или недостаточно товаров")}))}},components:{CFormSelect:M.LX}};const $=(0,w.Z)(F,[["render",W],["__scopeId","data-v-7c88bb50"]]);var B=$;const U=u().create({withCredentials:!0,credentials:"include"});var V={components:{Table:s.Z,AddBasketItemModal:_,FormBasketModal:B},data(){return{myApi:U,formVisible:!1,formData:{},order:{},rows:[],user_id:null,showBasket:!1,dataActions:{"Изменить":{action:this.change,color:"warning"},"Удалить":{action:this.delete,color:"danger"}},tableFieldNames:[{name:"id",title:"Артикул"},{name:"title",title:"Название"},{name:"size",title:"Размер"},{name:"material",title:"Материал"},{name:"count",title:"Количество"}]}},watch:{},created(){d.Z.$on("addNewOrderItem",(()=>{this.formMode="new",this.formVisible=!0})),d.Z.$on("closeModal",(()=>{this.formVisible=!1,this.showBasket=!1,this.get(),this.getBasketData(),this.formData={}})),d.Z.$on("orderItemAdded",(()=>{this.formVisible=!1,this.get(),this.formData={}})),d.Z.$on("orderItemEdited",(()=>{this.formVisible=!1,this.get(),this.formData={}}))},methods:{change(e){if(e.mainside_id)return alert("Нельзя изменить зависимую сторону");this.formVisible=!0,e.tags_array=new Set(e.tags_array),this.formData=e,this.formMode="edit"},dateFormatter:r.dateFormatter,get(){function e(e,t,a){return e.splice(a,0,e.splice(t,1)[0]),e}return U.get(this.$store.state.publicPath+"/api/basket_data/",{params:{user_id:this.user_id}}).then((t=>{let a=t.data?.favorites?.map((e=>(e.mainside_id&&(e.title=`${e.title} (обр - ${e.mainside_id})`),e)));for(let i=0;i<a.length;i++)if(a[i].mainside_id&&(i===a.length-1||a[i].mainside_id!==a[i+1].id)){console.log(i);e:for(let t in a)if(a[i].mainside_id===a[t].id){console.log(a.map((e=>({id:e.id,mainside_id:e.mainside_id})))),a=e(a,i,t),console.log(a.map((e=>({id:e.id,mainside_id:e.mainside_id})))),i<a.length-1&&(i=0);break e}}a=a.reverse(),this.rows=a})).catch((()=>(this.rows=null,!1)))},delete(e){const t=confirm("Вы действительно хотите удалить позицию из заказа?");if(t)return U.delete(this.$store.state.publicPath+"/api/admin/orders_items/",{data:{mainside_id:e.mainside_id,item_option_id:e.id,order_id:e.order_id}}).then((()=>{this.get(),d.Z.$emit("tagDeleted")})).catch((e=>{d.Z.$emit("noresponse",e)}))}}};const Z=(0,w.Z)(V,[["render",l]]);var P=Z}}]);
//# sourceMappingURL=951.21a15931.js.map