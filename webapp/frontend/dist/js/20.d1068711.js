"use strict";(self["webpackChunk_coreui_coreui_free_vue_admin_template"]=self["webpackChunk_coreui_coreui_free_vue_admin_template"]||[]).push([[20],{3089:function(t,e,r){r.d(e,{z9:function(){return u}});var i=r(3396),n=function(){return Math.random().toString(36).substring(2)},a=(0,i.aZ)({name:"ContentLoader",props:{width:{type:[Number,String]},height:{type:[Number,String]},viewBox:{type:String},preserveAspectRatio:{type:String,default:"xMidYMid meet"},speed:{type:Number,default:2},baseUrl:{type:String,default:""},primaryColor:{type:String,default:"#f9f9f9"},secondaryColor:{type:String,default:"#ecebeb"},primaryOpacity:{type:Number,default:1},secondaryOpacity:{type:Number,default:1},uniqueKey:{type:String},animate:{type:Boolean,default:!0}},setup:function(t){var e=(0,i.Fl)((function(){return t.uniqueKey?"".concat(t.uniqueKey,"-idClip"):n()})),r=(0,i.Fl)((function(){return t.uniqueKey?"".concat(t.uniqueKey,"-idGradient"):n()})),a=(0,i.Fl)((function(){var e;return null!==(e=t.width)&&void 0!==e?e:400})),u=(0,i.Fl)((function(){var e;return null!==(e=t.height)&&void 0!==e?e:130})),o=(0,i.Fl)((function(){var e;return null!==(e=t.viewBox)&&void 0!==e?e:"0 0 ".concat(a.value," ").concat(u.value)}));return{idClip:e,idGradient:r,computedViewBox:o}},render:function(){return(0,i.Wm)("svg",{width:this.width,height:this.height,viewBox:this.computedViewBox,version:"1.1",preserveAspectRatio:this.preserveAspectRatio},[(0,i.Wm)("rect",{style:{fill:"url(".concat(this.baseUrl,"#").concat(this.idGradient,")")},"clip-path":"url(".concat(this.baseUrl,"#").concat(this.idClip,")"),x:"0",y:"0",width:"100%",height:"100%"},null),(0,i.Wm)("defs",null,[(0,i.Wm)("clipPath",{id:this.idClip},[this.$slots["default"]?this.$slots["default"]():(0,i.Wm)("rect",{x:"0",y:"0",rx:"5",ry:"5",width:"100%",height:"100%"},null)]),(0,i.Wm)("linearGradient",{id:this.idGradient},[(0,i.Wm)("stop",{offset:"0%","stop-color":this.primaryColor,"stop-opacity":this.primaryOpacity},[this.animate?(0,i.Wm)("animate",{attributeName:"offset",values:"-2; 1",dur:"".concat(this.speed,"s"),repeatCount:"indefinite"},null):null]),(0,i.Wm)("stop",{offset:"50%","stop-color":this.secondaryColor,"stop-opacity":this.secondaryOpacity},[this.animate?(0,i.Wm)("animate",{attributeName:"offset",values:"-1.5; 1.5",dur:"".concat(this.speed,"s"),repeatCount:"indefinite"},null):null]),(0,i.Wm)("stop",{offset:"100%","stop-color":this.primaryColor,"stop-opacity":this.primaryOpacity},[this.animate?(0,i.Wm)("animate",{attributeName:"offset",values:"-1; 2",dur:"".concat(this.speed,"s"),repeatCount:"indefinite"},null):null])])])])}}),u=((0,i.aZ)((function(t,e){var r=e.attrs;return function(){return(0,i.Wm)(a,r,{default:function(){return[(0,i.Wm)("circle",{cx:"10",cy:"20",r:"8"},null),(0,i.Wm)("rect",{x:"25",y:"15",rx:"5",ry:"5",width:"220",height:"10"},null),(0,i.Wm)("circle",{cx:"10",cy:"50",r:"8"},null),(0,i.Wm)("rect",{x:"25",y:"45",rx:"5",ry:"5",width:"220",height:"10"},null),(0,i.Wm)("circle",{cx:"10",cy:"80",r:"8"},null),(0,i.Wm)("rect",{x:"25",y:"75",rx:"5",ry:"5",width:"220",height:"10"},null),(0,i.Wm)("circle",{cx:"10",cy:"110",r:"8"},null),(0,i.Wm)("rect",{x:"25",y:"105",rx:"5",ry:"5",width:"220",height:"10"},null)]}})}})),(0,i.aZ)((function(t,e){var r=e.attrs;return function(){return(0,i.Wm)(a,r,{default:function(){return[(0,i.Wm)("rect",{x:"0",y:"0",rx:"3",ry:"3",width:"70",height:"10"},null),(0,i.Wm)("rect",{x:"80",y:"0",rx:"3",ry:"3",width:"100",height:"10"},null),(0,i.Wm)("rect",{x:"190",y:"0",rx:"3",ry:"3",width:"10",height:"10"},null),(0,i.Wm)("rect",{x:"15",y:"20",rx:"3",ry:"3",width:"130",height:"10"},null),(0,i.Wm)("rect",{x:"155",y:"20",rx:"3",ry:"3",width:"130",height:"10"},null),(0,i.Wm)("rect",{x:"15",y:"40",rx:"3",ry:"3",width:"90",height:"10"},null),(0,i.Wm)("rect",{x:"115",y:"40",rx:"3",ry:"3",width:"60",height:"10"},null),(0,i.Wm)("rect",{x:"185",y:"40",rx:"3",ry:"3",width:"60",height:"10"},null),(0,i.Wm)("rect",{x:"0",y:"60",rx:"3",ry:"3",width:"30",height:"10"},null)]}})}})),(0,i.aZ)((function(t,e){var r=e.attrs;return function(){return(0,i.Wm)(a,r,{default:function(){return[(0,i.Wm)("rect",{x:"70",y:"15",rx:"4",ry:"4",width:"117",height:"6.4"},null),(0,i.Wm)("rect",{x:"70",y:"35",rx:"3",ry:"3",width:"85",height:"6.4"},null),(0,i.Wm)("rect",{x:"0",y:"80",rx:"3",ry:"3",width:"350",height:"6.4"},null),(0,i.Wm)("rect",{x:"0",y:"100",rx:"3",ry:"3",width:"380",height:"6.4"},null),(0,i.Wm)("rect",{x:"0",y:"120",rx:"3",ry:"3",width:"201",height:"6.4"},null),(0,i.Wm)("circle",{cx:"30",cy:"30",r:"30"},null)]}})}})),(0,i.aZ)((function(t,e){var r=e.attrs;return function(){return(0,i.Wm)(a,r,{default:function(){return[(0,i.Wm)("rect",{x:"0",y:"0",rx:"3",ry:"3",width:"250",height:"10"},null),(0,i.Wm)("rect",{x:"20",y:"20",rx:"3",ry:"3",width:"220",height:"10"},null),(0,i.Wm)("rect",{x:"20",y:"40",rx:"3",ry:"3",width:"170",height:"10"},null),(0,i.Wm)("rect",{x:"0",y:"60",rx:"3",ry:"3",width:"250",height:"10"},null),(0,i.Wm)("rect",{x:"20",y:"80",rx:"3",ry:"3",width:"200",height:"10"},null),(0,i.Wm)("rect",{x:"20",y:"100",rx:"3",ry:"3",width:"80",height:"10"},null)]}})}})),(0,i.aZ)((function(t,e){var r=e.attrs;return function(){return(0,i.Wm)(a,(0,i.dG)(r,{viewBox:"0 0 400 480"}),{default:function(){return[(0,i.Wm)("circle",{cx:"30",cy:"30",r:"30"},null),(0,i.Wm)("rect",{x:"75",y:"13",rx:"4",ry:"4",width:"100",height:"13"},null),(0,i.Wm)("rect",{x:"75",y:"37",rx:"4",ry:"4",width:"50",height:"8"},null),(0,i.Wm)("rect",{x:"0",y:"70",rx:"5",ry:"5",width:"400",height:"400"},null)]}})}})))},3853:function(t,e,r){r.d(e,{Z:function(){return d}});var i=r(3396),n=r(7139);const a={class:"navbar"},u={class:"navbar__container"},o={class:"navbar__body"};function s(t,e,r,s,l,c){const h=(0,i.up)("RouterLink");return(0,i.wg)(),(0,i.iD)("div",a,[(0,i._)("div",u,[(0,i._)("div",o,[(0,i.Wm)(h,{"aria-current":"page",class:(0,n.C_)(["_icon-home BottomNavBar_bottomNavBar__link",["Profile"!==t.$route.name?"active":""]]),to:"/"},null,8,["class"]),(0,i.Wm)(h,{class:"_icon-bookmark BottomNavBar_bottomNavBar__link","active-class":"active",to:"/profile"})])])])}var l={data(){return{categories:{}}},async beforeMount(){},methods:{}},c=r(89);const h=(0,c.Z)(l,[["render",s]]);var d=h},9020:function(t,e,r){r.r(e),r.d(e,{default:function(){return L}});var i=r(3396),n=r(7139);const a=t=>((0,i.dD)("data-v-06a91e6c"),t=t(),(0,i.Cn)(),t),u={class:"status-container"},o={class:"sum-title"},s={class:"length-title"},l={class:"get-title"},c={class:"return-title"},h={key:0},d=a((()=>(0,i._)("div",{class:"status-title"},"Ваш займ ожидает одобрения менеджером. Вам придет уведомление, когда это случится. ",-1))),m={key:1},y=a((()=>(0,i._)("div",null,"Здесь инструкция о том как получить деньги выбранным способом",-1))),p={key:2},f={class:"return-sum"},v=a((()=>(0,i._)("div",null,"Здесь инструкция о том как вернуть займ выбранным способом",-1))),g={key:3},x=a((()=>(0,i._)("div",{class:"status-title"},"Ваш возврат займа ожидает подтверждения менеджером. Вам придет уведомление, когда это случится. ",-1))),w=[x];function W(t,e,r,a,x,W){const _=(0,i.up)("NavBar");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i._)("div",u,[(0,i._)("div",o,(0,n.zw)(x.loanData.sum),1),(0,i._)("div",s,(0,n.zw)(x.loanData.term_days),1),(0,i._)("div",l,(0,n.zw)(x.loanData.get_method),1),(0,i._)("div",c,(0,n.zw)(x.loanData.return_method),1),"Новый"===W.status?((0,i.wg)(),(0,i.iD)("div",h,[d,(0,i._)("button",{onClick:e[0]||(e[0]=(...t)=>W.cancelLoan&&W.cancelLoan(...t))},"Отменить")])):(0,i.kq)("",!0),"Выдан"===W.status?((0,i.wg)(),(0,i.iD)("div",m,[y,(0,i._)("button",{onClick:e[1]||(e[1]=(...t)=>W.recieveLoan&&W.recieveLoan(...t))},"Я получил займ")])):(0,i.kq)("",!0),"Получен"===W.status?((0,i.wg)(),(0,i.iD)("div",p,[(0,i._)("div",f,(0,n.zw)(t.return_sum),1),v,(0,i._)("button",{onClick:e[2]||(e[2]=(...t)=>W.returnLoan&&W.returnLoan(...t))},"Вернуть займ")])):(0,i.kq)("",!0),"На возврате"===W.status?((0,i.wg)(),(0,i.iD)("div",g,w)):(0,i.kq)("",!0)]),(0,i.Wm)(_)],64)}var _=r(7123),b=r(3089),k=r(3853),C={components:{InstagramLoader:b.z9,NavBar:k.Z},data(){return{infoActive:!0,sexActive:!0,loanData:{}}},watch:{},async beforeMount(){window.Telegram?.WebApp.MainButton.offClick(this.routeToBasket),window.Telegram?.WebApp.MainButton.hide(),this.loanData=await this.getLoanData()},async mounted(){},async beforeUnmount(){},methods:{routeBack(){this.$router.go(-1)},changeStatus(t){this.$store.state.myApi.put(this.$store.state.restAddr+"/loans",{status:t,user_id:this.$store.state.userId}).then((async e=>{if("Получен"!==t)return window.Telegram?.WebApp.disableClosingConfirmation(),window.Telegram?.WebApp.close();this.loanData=await this.getLoanData()})).catch((t=>{_.Z.$emit("noresponse",t),this.isOrdering=!1}))},async getLoanData(){const t=await this.$store.state.myApi.get(this.$store.state.restAddr+"/loans",{params:{user_id:this.$store.state.userId}}).then((t=>t.data)).catch((t=>{_.Z.$emit("noresponse",t)}));return t??{}},cancelLoan(){this.changeStatus("Отменен")},recieveLoan(){this.changeStatus("Получен")},returnLoan(){this.changeStatus("На возврате")}},computed:{status(){return this.$store.state.profileData?.active_loan_status}}},B=r(89);const D=(0,B.Z)(C,[["render",W],["__scopeId","data-v-06a91e6c"]]);var L=D}}]);
//# sourceMappingURL=20.d1068711.js.map