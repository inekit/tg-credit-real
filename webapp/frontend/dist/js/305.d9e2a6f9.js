"use strict";(self["webpackChunk_coreui_coreui_free_vue_admin_template"]=self["webpackChunk_coreui_coreui_free_vue_admin_template"]||[]).push([[305],{3089:function(t,e,i){i.d(e,{z9:function(){return s}});var r=i(3396),n=function(){return Math.random().toString(36).substring(2)},a=(0,r.aZ)({name:"ContentLoader",props:{width:{type:[Number,String]},height:{type:[Number,String]},viewBox:{type:String},preserveAspectRatio:{type:String,default:"xMidYMid meet"},speed:{type:Number,default:2},baseUrl:{type:String,default:""},primaryColor:{type:String,default:"#f9f9f9"},secondaryColor:{type:String,default:"#ecebeb"},primaryOpacity:{type:Number,default:1},secondaryOpacity:{type:Number,default:1},uniqueKey:{type:String},animate:{type:Boolean,default:!0}},setup:function(t){var e=(0,r.Fl)((function(){return t.uniqueKey?"".concat(t.uniqueKey,"-idClip"):n()})),i=(0,r.Fl)((function(){return t.uniqueKey?"".concat(t.uniqueKey,"-idGradient"):n()})),a=(0,r.Fl)((function(){var e;return null!==(e=t.width)&&void 0!==e?e:400})),s=(0,r.Fl)((function(){var e;return null!==(e=t.height)&&void 0!==e?e:130})),l=(0,r.Fl)((function(){var e;return null!==(e=t.viewBox)&&void 0!==e?e:"0 0 ".concat(a.value," ").concat(s.value)}));return{idClip:e,idGradient:i,computedViewBox:l}},render:function(){return(0,r.Wm)("svg",{width:this.width,height:this.height,viewBox:this.computedViewBox,version:"1.1",preserveAspectRatio:this.preserveAspectRatio},[(0,r.Wm)("rect",{style:{fill:"url(".concat(this.baseUrl,"#").concat(this.idGradient,")")},"clip-path":"url(".concat(this.baseUrl,"#").concat(this.idClip,")"),x:"0",y:"0",width:"100%",height:"100%"},null),(0,r.Wm)("defs",null,[(0,r.Wm)("clipPath",{id:this.idClip},[this.$slots["default"]?this.$slots["default"]():(0,r.Wm)("rect",{x:"0",y:"0",rx:"5",ry:"5",width:"100%",height:"100%"},null)]),(0,r.Wm)("linearGradient",{id:this.idGradient},[(0,r.Wm)("stop",{offset:"0%","stop-color":this.primaryColor,"stop-opacity":this.primaryOpacity},[this.animate?(0,r.Wm)("animate",{attributeName:"offset",values:"-2; 1",dur:"".concat(this.speed,"s"),repeatCount:"indefinite"},null):null]),(0,r.Wm)("stop",{offset:"50%","stop-color":this.secondaryColor,"stop-opacity":this.secondaryOpacity},[this.animate?(0,r.Wm)("animate",{attributeName:"offset",values:"-1.5; 1.5",dur:"".concat(this.speed,"s"),repeatCount:"indefinite"},null):null]),(0,r.Wm)("stop",{offset:"100%","stop-color":this.primaryColor,"stop-opacity":this.primaryOpacity},[this.animate?(0,r.Wm)("animate",{attributeName:"offset",values:"-1; 2",dur:"".concat(this.speed,"s"),repeatCount:"indefinite"},null):null])])])])}}),s=((0,r.aZ)((function(t,e){var i=e.attrs;return function(){return(0,r.Wm)(a,i,{default:function(){return[(0,r.Wm)("circle",{cx:"10",cy:"20",r:"8"},null),(0,r.Wm)("rect",{x:"25",y:"15",rx:"5",ry:"5",width:"220",height:"10"},null),(0,r.Wm)("circle",{cx:"10",cy:"50",r:"8"},null),(0,r.Wm)("rect",{x:"25",y:"45",rx:"5",ry:"5",width:"220",height:"10"},null),(0,r.Wm)("circle",{cx:"10",cy:"80",r:"8"},null),(0,r.Wm)("rect",{x:"25",y:"75",rx:"5",ry:"5",width:"220",height:"10"},null),(0,r.Wm)("circle",{cx:"10",cy:"110",r:"8"},null),(0,r.Wm)("rect",{x:"25",y:"105",rx:"5",ry:"5",width:"220",height:"10"},null)]}})}})),(0,r.aZ)((function(t,e){var i=e.attrs;return function(){return(0,r.Wm)(a,i,{default:function(){return[(0,r.Wm)("rect",{x:"0",y:"0",rx:"3",ry:"3",width:"70",height:"10"},null),(0,r.Wm)("rect",{x:"80",y:"0",rx:"3",ry:"3",width:"100",height:"10"},null),(0,r.Wm)("rect",{x:"190",y:"0",rx:"3",ry:"3",width:"10",height:"10"},null),(0,r.Wm)("rect",{x:"15",y:"20",rx:"3",ry:"3",width:"130",height:"10"},null),(0,r.Wm)("rect",{x:"155",y:"20",rx:"3",ry:"3",width:"130",height:"10"},null),(0,r.Wm)("rect",{x:"15",y:"40",rx:"3",ry:"3",width:"90",height:"10"},null),(0,r.Wm)("rect",{x:"115",y:"40",rx:"3",ry:"3",width:"60",height:"10"},null),(0,r.Wm)("rect",{x:"185",y:"40",rx:"3",ry:"3",width:"60",height:"10"},null),(0,r.Wm)("rect",{x:"0",y:"60",rx:"3",ry:"3",width:"30",height:"10"},null)]}})}})),(0,r.aZ)((function(t,e){var i=e.attrs;return function(){return(0,r.Wm)(a,i,{default:function(){return[(0,r.Wm)("rect",{x:"70",y:"15",rx:"4",ry:"4",width:"117",height:"6.4"},null),(0,r.Wm)("rect",{x:"70",y:"35",rx:"3",ry:"3",width:"85",height:"6.4"},null),(0,r.Wm)("rect",{x:"0",y:"80",rx:"3",ry:"3",width:"350",height:"6.4"},null),(0,r.Wm)("rect",{x:"0",y:"100",rx:"3",ry:"3",width:"380",height:"6.4"},null),(0,r.Wm)("rect",{x:"0",y:"120",rx:"3",ry:"3",width:"201",height:"6.4"},null),(0,r.Wm)("circle",{cx:"30",cy:"30",r:"30"},null)]}})}})),(0,r.aZ)((function(t,e){var i=e.attrs;return function(){return(0,r.Wm)(a,i,{default:function(){return[(0,r.Wm)("rect",{x:"0",y:"0",rx:"3",ry:"3",width:"250",height:"10"},null),(0,r.Wm)("rect",{x:"20",y:"20",rx:"3",ry:"3",width:"220",height:"10"},null),(0,r.Wm)("rect",{x:"20",y:"40",rx:"3",ry:"3",width:"170",height:"10"},null),(0,r.Wm)("rect",{x:"0",y:"60",rx:"3",ry:"3",width:"250",height:"10"},null),(0,r.Wm)("rect",{x:"20",y:"80",rx:"3",ry:"3",width:"200",height:"10"},null),(0,r.Wm)("rect",{x:"20",y:"100",rx:"3",ry:"3",width:"80",height:"10"},null)]}})}})),(0,r.aZ)((function(t,e){var i=e.attrs;return function(){return(0,r.Wm)(a,(0,r.dG)(i,{viewBox:"0 0 400 480"}),{default:function(){return[(0,r.Wm)("circle",{cx:"30",cy:"30",r:"30"},null),(0,r.Wm)("rect",{x:"75",y:"13",rx:"4",ry:"4",width:"100",height:"13"},null),(0,r.Wm)("rect",{x:"75",y:"37",rx:"4",ry:"4",width:"50",height:"8"},null),(0,r.Wm)("rect",{x:"0",y:"70",rx:"5",ry:"5",width:"400",height:"400"},null)]}})}})))},8305:function(t,e,i){i.r(e),i.d(e,{default:function(){return M}});var r=i(3396),n=i(7139);const a=t=>((0,r.dD)("data-v-6c2e23ed"),t=t(),(0,r.Cn)(),t),s=a((()=>(0,r._)("h1",null,"Корзина",-1))),l={class:"basket-items"},o={class:"img-container"},u=["src"],c={class:"title"},d={class:"option"},h={class:"price"},m={key:0},p={key:1},y={key:0,class:"count-select"},w=["onClick"],g=["onClick"],f={key:1,class:"delete"},x=["onClick"],W={class:"order"},_=a((()=>(0,r._)("span",{class:"label"}," Итого: ",-1))),b={class:"value"},v={key:0},k=a((()=>(0,r._)("pre",{style:{display:"inline","margin-left":"-7px",width:"1"}},null,-1)));function B(t,e,i,a,B,C){const A=(0,r.up)("InstagramLoader"),$=(0,r.up)("RouterLink");return(0,r.wg)(),(0,r.iD)(r.HY,null,[s,(0,r.Wm)(A,{class:"preloader",ref:"preloader",viewBox:"0 0 300 250"},null,512),(0,r.Wm)(A,{class:"preloader",ref:"preloader",viewBox:"0 0 300 200"},null,512),(0,r.Wm)(A,{class:"preloader",ref:"preloader",viewBox:"0 0 300 200"},null,512),(0,r._)("div",l,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(B.basketItems,((t,e)=>((0,r.wg)(),(0,r.iD)("div",{class:"basket-item",key:e},[(0,r.Wm)($,{to:C.getItemLink(t)},{default:(0,r.w5)((()=>[(0,r._)("div",o,[(0,r._)("img",{src:`/colorsserver/public/pics/${t.image_list?.[0]}`},null,8,u)]),(0,r._)("span",c,(0,n.zw)(t.title+(t.mainside_id?" (обратная)":"")),1),(0,r._)("span",d,(0,n.zw)(t.select_name)+" "+(0,n.zw)(t.option_name),1),(0,r._)("span",h,[t.is_sale?((0,r.wg)(),(0,r.iD)("span",p,(0,n.zw)(t.sale_price)+" ₽",1)):((0,r.wg)(),(0,r.iD)("span",m,(0,n.zw)(t.price)+" ₽",1))])])),_:2},1032,["to"]),t.mainside_id?((0,r.wg)(),(0,r.iD)("div",f,[(0,r._)("button",{type:"button",onClick:e=>C.dropItem(t)},"Удалить",8,x)])):((0,r.wg)(),(0,r.iD)("div",y,[(0,r._)("button",{type:"button",onClick:e=>C.changeCount(t,t.count-1)},"-",8,w),(0,r._)("span",null,(0,n.zw)(t.count),1),(0,r._)("button",{type:"button",onClick:e=>C.changeCount(t,t.count+1)},"+",8,g)]))])))),128))]),(0,r._)("div",W,[_,(0,r._)("span",b,[(0,r._)("span",{style:(0,n.j5)([B.total!==B.sale_total?"text-decoration: line-through":""])},(0,n.zw)(B.total),5),B.total!==B.sale_total?((0,r.wg)(),(0,r.iD)("span",v,[k,(0,r.Uk)((0,n.zw)(B.sale_total),1)])):(0,r.kq)("",!0),(0,r.Uk)(" ₽")])])],64)}i(7658);var C=i(7123),A=i(3089),$={components:{InstagramLoader:A.z9},data(){return{basketItems:[],total:0,sale_total:0}},watch:{},async beforeMount(){window.Telegram?.WebApp.MainButton.hide(),window.Telegram?.WebApp.MainButton.disable(),window.Telegram?.WebApp.BackButton.onClick(this.routeBack),window.Telegram?.WebApp.BackButton.show(),this.$store.state.userId=this.$store.state.userId??this.$route.params?.userId,this.basketItems=await this.getBasket(),this.$refs["basket-items"]?.classList.add("hidden"),document.body.classList.add("stop-scrolling"),setTimeout((()=>{const t=document.getElementsByClassName("preloader");console.log(t);for(let e of t)e.classList.add("hidden");this.$refs["basket-items"]?.classList.remove("hidden"),document.body.classList.remove("stop-scrolling")}),300),this.basketItems?.length?(window.Telegram?.WebApp.MainButton.onClick(this.order),window.Telegram?.WebApp.MainButton.enable(),window.Telegram?.WebApp.MainButton.show(),window.Telegram?.WebApp.MainButton.setText("Оформить заказ")):(window.Telegram?.WebApp.MainButton.offClick(this.order),window.Telegram?.WebApp.MainButton.hide())},async beforeUnmount(){window.Telegram?.WebApp.MainButton.offClick(this.order),window.Telegram?.WebApp.MainButton.hide(),window.Telegram?.WebApp.BackButton.offClick(this.routeBack),window.Telegram?.WebApp.BackButton.hide()},methods:{getItemLink(t){return`/items/${t.item_id}`},changeCount(t,e){e>100||e>t.stock||this.$store.state.myApi.put(this.$store.state.restAddr+"/favorites",{user_id:this.$store.state.userId,item_option_id:t.id,count:e}).then((async t=>{this.basketItems=await this.getBasket()})).catch((t=>{C.Z.$emit("noresponse",t)}))},dropItem(t){this.$store.state.myApi.delete(this.$store.state.restAddr+"/favorites",{data:{user_id:this.$store.state.userId,item_option_id:t.id,mainside_id:t.mainside_id}}).then((async t=>{this.basketItems=await this.getBasket()})).catch((t=>{C.Z.$emit("noresponse",t)}))},order(){this.$router.push("/order")},routeBack(){this.$router.go(-1)},async finishWindow(){if(!this.$store.state.userId)return alert("Ваша версия телеграм не поддерживается");await this.getFiles().catch(console.log),window.Telegram?.WebApp.disableClosingConfirmation(),window.Telegram?.WebApp.close()},async getBasket(){function t(t,e,i){return t.splice(i,0,t.splice(e,1)[0]),t}const e=await this.$store.state.myApi.get(this.$store.state.restAddr+"/basket_data",{params:{user_id:this.$store.state.userId}}).then((e=>{this.total=e.data.total,this.sale_total=e.data.sale_total;let i=e.data?.favorites;for(let r=0;r<i.length;r++)if(i[r].mainside_id&&(r===i.length-1||i[r].mainside_id!==i[r+1].id)){console.log(r);t:for(let e in i)if(i[r].mainside_id===i[e].id){console.log(i.map((t=>({id:t.id,mainside_id:t.mainside_id})))),i=t(i,r,e),console.log(i.map((t=>({id:t.id,mainside_id:t.mainside_id})))),r<i.length-1&&(r=0);break t}}return i=i.reverse(),e.data.favorites})).catch((t=>{C.Z.$emit("noresponse",t)}));return e}}},I=i(89);const T=(0,I.Z)($,[["render",B],["__scopeId","data-v-6c2e23ed"]]);var M=T}}]);
//# sourceMappingURL=305.d9e2a6f9.js.map