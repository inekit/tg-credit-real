"use strict";(self["webpackChunk_coreui_coreui_free_vue_admin_template"]=self["webpackChunk_coreui_coreui_free_vue_admin_template"]||[]).push([[206],{3206:function(t,a,e){e.r(a),e.d(a,{default:function(){return w}});var i=e(3396);function o(t,a,e,o,l,n){const r=(0,i.up)("AddStaticModal"),d=(0,i.up)("Table");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i.Wm)(r,{visible:l.formVisible,formData:l.formData,mode:t.formMode},null,8,["visible","formData","mode"]),(0,i.Wm)(d,{fields:l.tableFieldNames,postData:n.getStatic,actions:l.dataActions,rows:l.rows,editMode:"form",name:"Статика"},null,8,["fields","postData","actions","rows"])])}var l=e(9242);const n=["validated"];function r(t,a,e,o,r,d){const s=(0,i.up)("CModalTitle"),m=(0,i.up)("CModalHeader"),u=(0,i.up)("CFormInput"),c=(0,i.up)("QuillEditor"),f=(0,i.up)("CModalBody"),p=(0,i.up)("CButton"),b=(0,i.up)("CModalFooter"),h=(0,i.up)("CModal");return(0,i.wg)(),(0,i.j4)(h,{size:"xl",backdrop:"static",alignment:"center",visible:e.visible,onClose:d.closeModal},{default:(0,i.w5)((()=>[(0,i.Wm)(m,null,{default:(0,i.w5)((()=>[(0,i.Wm)(s,null,{default:(0,i.w5)((()=>[(0,i.Uk)("Статические данные")])),_:1})])),_:1}),(0,i.Wm)(f,null,{default:(0,i.w5)((()=>[(0,i._)("form",{ref:"add-file-form",novalidate:"",validated:r.formValid,onSubmit:a[2]||(a[2]=(0,l.iM)(((...a)=>t.addTag&&t.addTag(...a)),["prevent"])),class:"add-user",style:{display:"'none'"}},[(0,i.Wm)(u,{class:"mb-3",modelValue:e.formData.gitHubLink,"onUpdate:modelValue":a[0]||(a[0]=t=>e.formData.gitHubLink=t),placeholder:"Git",label:"Git",maxlength:"255",feedbackValid:"Все ок",feedbackInvalid:"Введите корректную ссылку (до 255 символов)"},null,8,["modelValue"]),(0,i.Wm)(u,{class:"mb-3",modelValue:e.formData.linkedInLink,"onUpdate:modelValue":a[1]||(a[1]=t=>e.formData.linkedInLink=t),placeholder:"Linked In",label:"Linked In",maxlength:"255",feedbackValid:"Все ок",feedbackInvalid:"Введите корректную ссылку (до 255 символов)"},null,8,["modelValue"]),(0,i.Wm)(c,{theme:"snow",toolbar:"essential",ref:"aboutEditor",id:"aboutEditor",placeholder:"Текст обо мне"},null,512)],40,n)])),_:1}),(0,i.Wm)(b,null,{default:(0,i.w5)((()=>[(0,i.Wm)(p,{color:"secondary",onClick:a[3]||(a[3]=()=>{e.visible=!1})},{default:(0,i.w5)((()=>[(0,i.Uk)(" Отменить ")])),_:1}),(0,i.Wm)(p,{color:"primary",onClick:d.editStatic},{default:(0,i.w5)((()=>[(0,i.Uk)("Изменить")])),_:1},8,["onClick"])])),_:1})])),_:1},8,["visible","onClose"])}var d=e(6265),s=e.n(d),m=e(6149),u=e(7123);const c=s().create({withCredentials:!0});var f={components:{QuillEditor:m.Bn},props:{visible:!1,formData:{gitHubLink:"",linkedInLink:"",about:""}},data(){return{formValid:!1}},updated(){this.formValid=!1,this.formData.about&&this.$refs.aboutEditor?.setHTML(this.formData.about)},methods:{closeModal(){u.Z.$emit("closeModal")},constractFromData(){if(!this.formData.gitHubLink||!this.formData.linkedInLink||!this.formData.about)throw new Error;var t=new FormData;return t.append("gitHubLink",this.formData.gitHubLink),t.append("linkedInLink",this.formData.linkedInLink),t.append("about",this.$refs.aboutEditor.getHTML()),t},editStatic(){try{const t=this.constractFromData();c.put(this.$store.state.publicPath+"/api/admin/statics",t,{headers:{"Content-Type":"multipart/form-data"}}).then((()=>{u.Z.$emit("staticEdited")})).catch((t=>{console.log(t),u.Z.$emit("noresponse",t)}))}catch(t){this.formValid=!0}}}},p=e(89);const b=(0,p.Z)(f,[["render",r]]);var h=b,k=e(7942);const g=s().create({withCredentials:!0});var D={name:"Static",components:{AddStaticModal:h,Table:k.Z},data(){return{myApi:g,formVisible:!1,formData:{},rows:[],dataActions:{"Изменить":{action:this.changeUser,color:"warning"}},tableFieldNames:[{name:"gitHubLink",title:"Git"},{name:"linkedInLink",title:"LinkedIn"},{name:"about",title:"Обо мне"}]}},created(){u.Z.$on("closeModal",(()=>{this.formVisible=!1,this.formData={}})),u.Z.$on("staticEdited",(()=>{this.formVisible=!1,this.get(),this.formData={}}))},methods:{changeUser(t){this.formVisible=!0,this.formData=t},getStatic(t,a){return!(a>1)&&g.get(this.$store.state.publicPath+"/api/statics/",{perPage:t??0,page:a??0}).then((t=>(this.rows=t.data,t.data))).catch((t=>{u.Z.$emit("noresponse",t)}))}}};const v=(0,p.Z)(D,[["render",o]]);var w=v}}]);
//# sourceMappingURL=206.92cc510f.js.map