"use strict";(self["webpackChunk_coreui_coreui_free_vue_admin_template"]=self["webpackChunk_coreui_coreui_free_vue_admin_template"]||[]).push([[16],{2330:function(e,t,a){a.r(t),a.d(t,{default:function(){return f}});var i=a(3396);function s(e,t,a,s,r,n){const o=(0,i.up)("AddUserModal"),l=(0,i.up)("Table");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i.Wm)(o,{visible:r.formVisible,formData:r.formData},null,8,["visible","formData"]),(0,i.Wm)(l,{fields:r.tableFieldNames,postData:n.getUsers,actions:r.dataActions,rows:r.rows,name:"Администраторы"},null,8,["fields","postData","actions","rows"])])}var r=a(2548),n=a(5393),o=a(7123),l=a(6265),c=a.n(l);const d=c().create({withCredentials:!0});var m={name:"Users",components:{AddUserModal:r.Z,Table:n.Z},data(){return{myApi:d,formVisible:!1,formData:{},rows:[],dataActions:{"Бан":{action:this.banUser,color:"light"},"Изменить":{action:this.changeUser,color:"warning"},"Удалить":{action:this.deleteUser,color:"danger"}},tableFieldNames:[{name:"nick",title:"Никнейм"},{name:"email",title:"Почта"}]}},methods:{changeUser(e){this.formVisible=!0,this.formData=e},getUsers(e,t){return d.get(this.$store.state.publicPath+"/api/admin/admins/",{perPage:e??0,page:t??0}).then((e=>(this.rows=e.data,e.data))).catch((e=>(o.Z.$emit("noresponse",e),!1)))},deleteUser(e){console.log(e);const t=confirm("Вы действительно хотите удалить пользователя?");if(t)return d.delete(this.$store.state.publicPath+"/api/admin/admins/",{data:{id:e}}).then((()=>{this.rows=this.rows.filter((t=>t.id!==e)),o.Z.$emit("userDeleted")})).catch((e=>{o.Z.$emit("noresponse",e)}))},banUser(e){const t=confirm("Вы действительно хотите забанить пользователя?");if(t)return d.put(this.$store.state.publicPath+"/api/admin/admins/",{id:e,ban:!0}).then((()=>{o.Z.$emit("userAdded")})).catch((e=>{o.Z.$emit("noresponse",e)}))}}},u=a(89);const h=(0,u.Z)(m,[["render",s]]);var f=h}}]);
//# sourceMappingURL=16.1089bf22.js.map