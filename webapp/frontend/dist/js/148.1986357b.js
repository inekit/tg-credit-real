"use strict";(self["webpackChunk_coreui_coreui_free_vue_admin_template"]=self["webpackChunk_coreui_coreui_free_vue_admin_template"]||[]).push([[148],{3089:function(t,e,a){a.d(e,{z9:function(){return l}});var r=a(3396),i=function(){return Math.random().toString(36).substring(2)},n=(0,r.aZ)({name:"ContentLoader",props:{width:{type:[Number,String]},height:{type:[Number,String]},viewBox:{type:String},preserveAspectRatio:{type:String,default:"xMidYMid meet"},speed:{type:Number,default:2},baseUrl:{type:String,default:""},primaryColor:{type:String,default:"#f9f9f9"},secondaryColor:{type:String,default:"#ecebeb"},primaryOpacity:{type:Number,default:1},secondaryOpacity:{type:Number,default:1},uniqueKey:{type:String},animate:{type:Boolean,default:!0}},setup:function(t){var e=(0,r.Fl)((function(){return t.uniqueKey?"".concat(t.uniqueKey,"-idClip"):i()})),a=(0,r.Fl)((function(){return t.uniqueKey?"".concat(t.uniqueKey,"-idGradient"):i()})),n=(0,r.Fl)((function(){var e;return null!==(e=t.width)&&void 0!==e?e:400})),l=(0,r.Fl)((function(){var e;return null!==(e=t.height)&&void 0!==e?e:130})),s=(0,r.Fl)((function(){var e;return null!==(e=t.viewBox)&&void 0!==e?e:"0 0 ".concat(n.value," ").concat(l.value)}));return{idClip:e,idGradient:a,computedViewBox:s}},render:function(){return(0,r.Wm)("svg",{width:this.width,height:this.height,viewBox:this.computedViewBox,version:"1.1",preserveAspectRatio:this.preserveAspectRatio},[(0,r.Wm)("rect",{style:{fill:"url(".concat(this.baseUrl,"#").concat(this.idGradient,")")},"clip-path":"url(".concat(this.baseUrl,"#").concat(this.idClip,")"),x:"0",y:"0",width:"100%",height:"100%"},null),(0,r.Wm)("defs",null,[(0,r.Wm)("clipPath",{id:this.idClip},[this.$slots["default"]?this.$slots["default"]():(0,r.Wm)("rect",{x:"0",y:"0",rx:"5",ry:"5",width:"100%",height:"100%"},null)]),(0,r.Wm)("linearGradient",{id:this.idGradient},[(0,r.Wm)("stop",{offset:"0%","stop-color":this.primaryColor,"stop-opacity":this.primaryOpacity},[this.animate?(0,r.Wm)("animate",{attributeName:"offset",values:"-2; 1",dur:"".concat(this.speed,"s"),repeatCount:"indefinite"},null):null]),(0,r.Wm)("stop",{offset:"50%","stop-color":this.secondaryColor,"stop-opacity":this.secondaryOpacity},[this.animate?(0,r.Wm)("animate",{attributeName:"offset",values:"-1.5; 1.5",dur:"".concat(this.speed,"s"),repeatCount:"indefinite"},null):null]),(0,r.Wm)("stop",{offset:"100%","stop-color":this.primaryColor,"stop-opacity":this.primaryOpacity},[this.animate?(0,r.Wm)("animate",{attributeName:"offset",values:"-1; 2",dur:"".concat(this.speed,"s"),repeatCount:"indefinite"},null):null])])])])}}),l=((0,r.aZ)((function(t,e){var a=e.attrs;return function(){return(0,r.Wm)(n,a,{default:function(){return[(0,r.Wm)("circle",{cx:"10",cy:"20",r:"8"},null),(0,r.Wm)("rect",{x:"25",y:"15",rx:"5",ry:"5",width:"220",height:"10"},null),(0,r.Wm)("circle",{cx:"10",cy:"50",r:"8"},null),(0,r.Wm)("rect",{x:"25",y:"45",rx:"5",ry:"5",width:"220",height:"10"},null),(0,r.Wm)("circle",{cx:"10",cy:"80",r:"8"},null),(0,r.Wm)("rect",{x:"25",y:"75",rx:"5",ry:"5",width:"220",height:"10"},null),(0,r.Wm)("circle",{cx:"10",cy:"110",r:"8"},null),(0,r.Wm)("rect",{x:"25",y:"105",rx:"5",ry:"5",width:"220",height:"10"},null)]}})}})),(0,r.aZ)((function(t,e){var a=e.attrs;return function(){return(0,r.Wm)(n,a,{default:function(){return[(0,r.Wm)("rect",{x:"0",y:"0",rx:"3",ry:"3",width:"70",height:"10"},null),(0,r.Wm)("rect",{x:"80",y:"0",rx:"3",ry:"3",width:"100",height:"10"},null),(0,r.Wm)("rect",{x:"190",y:"0",rx:"3",ry:"3",width:"10",height:"10"},null),(0,r.Wm)("rect",{x:"15",y:"20",rx:"3",ry:"3",width:"130",height:"10"},null),(0,r.Wm)("rect",{x:"155",y:"20",rx:"3",ry:"3",width:"130",height:"10"},null),(0,r.Wm)("rect",{x:"15",y:"40",rx:"3",ry:"3",width:"90",height:"10"},null),(0,r.Wm)("rect",{x:"115",y:"40",rx:"3",ry:"3",width:"60",height:"10"},null),(0,r.Wm)("rect",{x:"185",y:"40",rx:"3",ry:"3",width:"60",height:"10"},null),(0,r.Wm)("rect",{x:"0",y:"60",rx:"3",ry:"3",width:"30",height:"10"},null)]}})}})),(0,r.aZ)((function(t,e){var a=e.attrs;return function(){return(0,r.Wm)(n,a,{default:function(){return[(0,r.Wm)("rect",{x:"70",y:"15",rx:"4",ry:"4",width:"117",height:"6.4"},null),(0,r.Wm)("rect",{x:"70",y:"35",rx:"3",ry:"3",width:"85",height:"6.4"},null),(0,r.Wm)("rect",{x:"0",y:"80",rx:"3",ry:"3",width:"350",height:"6.4"},null),(0,r.Wm)("rect",{x:"0",y:"100",rx:"3",ry:"3",width:"380",height:"6.4"},null),(0,r.Wm)("rect",{x:"0",y:"120",rx:"3",ry:"3",width:"201",height:"6.4"},null),(0,r.Wm)("circle",{cx:"30",cy:"30",r:"30"},null)]}})}})),(0,r.aZ)((function(t,e){var a=e.attrs;return function(){return(0,r.Wm)(n,a,{default:function(){return[(0,r.Wm)("rect",{x:"0",y:"0",rx:"3",ry:"3",width:"250",height:"10"},null),(0,r.Wm)("rect",{x:"20",y:"20",rx:"3",ry:"3",width:"220",height:"10"},null),(0,r.Wm)("rect",{x:"20",y:"40",rx:"3",ry:"3",width:"170",height:"10"},null),(0,r.Wm)("rect",{x:"0",y:"60",rx:"3",ry:"3",width:"250",height:"10"},null),(0,r.Wm)("rect",{x:"20",y:"80",rx:"3",ry:"3",width:"200",height:"10"},null),(0,r.Wm)("rect",{x:"20",y:"100",rx:"3",ry:"3",width:"80",height:"10"},null)]}})}})),(0,r.aZ)((function(t,e){var a=e.attrs;return function(){return(0,r.Wm)(n,(0,r.dG)(a,{viewBox:"0 0 400 480"}),{default:function(){return[(0,r.Wm)("circle",{cx:"30",cy:"30",r:"30"},null),(0,r.Wm)("rect",{x:"75",y:"13",rx:"4",ry:"4",width:"100",height:"13"},null),(0,r.Wm)("rect",{x:"75",y:"37",rx:"4",ry:"4",width:"50",height:"8"},null),(0,r.Wm)("rect",{x:"0",y:"70",rx:"5",ry:"5",width:"400",height:"400"},null)]}})}})))},4507:function(t,e,a){a.d(e,{Z:function(){return d}});var r=a(3396);const i={class:"BottomNavBar_bottomNavBar"},n={class:"container"},l={class:"BottomNavBar_bottomNavBar__body"};function s(t,e,a,s,o,c){const u=(0,r.up)("RouterLink");return(0,r.wg)(),(0,r.iD)("div",i,[(0,r._)("div",n,[(0,r._)("div",l,[(0,r.Wm)(u,{"aria-current":"page",class:"_icon-home BottomNavBar_bottomNavBar__link active",to:"/",style:{background:"linear-gradient(\r\n                      114.44deg,\r\n                      rgb(98, 74, 242) 0%,\r\n                      rgb(80, 221, 195) 100%\r\n                    )\r\n                    text","-webkit-text-fill-color":"transparent"}}),(0,r.Wm)(u,{class:"_icon-bookmark BottomNavBar_bottomNavBar__link",to:"/favourites"})])])])}a(7123);var o={data(){return{categories:{}}},async beforeMount(){},methods:{}},c=a(89);const u=(0,c.Z)(o,[["render",s]]);var d=u},148:function(t,e,a){a.r(e),a.d(e,{default:function(){return H}});var r=a(3396),i=a(7139);const n=t=>((0,r.dD)("data-v-ae9d4020"),t=t(),(0,r.Cn)(),t),l={class:"MainPage_mainPage"},s={class:"MainPage_headerPage"},o=(0,r.uE)('<div class="container" data-v-ae9d4020><div class="MainPage_actionTitle" data-v-ae9d4020><div class="Title_block" data-v-ae9d4020><h2 class="Title_title" data-v-ae9d4020>Категории</h2></div><a type="button" class="MainPage_actionTitle__button" href="/filter" data-v-ae9d4020>См. все</a></div></div>',1),c={class:"Category_categories__container container"},u={"data-simplebar":"init",style:{"max-width":"768px"}},d={class:"simplebar-wrapper",style:{margin:"0px"}},h=n((()=>(0,r._)("div",{class:"simplebar-height-auto-observer-wrapper"},[(0,r._)("div",{class:"simplebar-height-auto-observer"})],-1))),m={class:"simplebar-mask"},_={class:"simplebar-offset",style:{right:"0px",bottom:"0px"}},p={class:"simplebar-content-wrapper",tabindex:"0",role:"region","aria-label":"scrollable content",style:{height:"auto",overflow:"scroll hidden"}},y={class:"simplebar-content",style:{padding:"0px"}},g={class:"Category_categories__list"},v={class:"CategoryItem_item"},f=n((()=>(0,r._)("span",null,"Все",-1))),x=[f],b={class:"CategoryItem_item"},w=["onClick"],W=n((()=>(0,r._)("div",{class:"simplebar-placeholder",style:{width:"auto",height:"50px"}},null,-1))),C=n((()=>(0,r._)("div",{class:"simplebar-track simplebar-horizontal",style:{visibility:"visible"}},[(0,r._)("div",{class:"simplebar-scrollbar",style:{width:"300px",display:"block",transform:"translate3d(0px, 0px, 0px)"}})],-1))),B=n((()=>(0,r._)("div",{class:"simplebar-track simplebar-vertical",style:{visibility:"hidden"}},[(0,r._)("div",{class:"simplebar-scrollbar",style:{height:"0px",display:"none"}})],-1))),k={class:"preloaders_block"},N={class:"MainPage_listChannel__container container"},$=n((()=>(0,r._)("div",{class:"Title_block"},[(0,r._)("h2",{class:"Title_title MainPage_listChannel__title"}," Список каналов ")],-1))),M={class:"Badge_badge"},P={class:"Badge_badge__text"},I={class:"Channels_channels__body"},T={class:"ChannelBlog_channelBlog"},Z={class:"ChannelBlog_channelBlog__image"},D=["src"],L={class:"ChannelBlog_channelBlog__content"},A={class:"ChannelBlog_channelBlog__subscribers _icon-profile"},S={class:"ChannelBlog_channelBlog__title"},z={class:"ChannelBlog_channelBlog__text"},K=n((()=>(0,r._)("div",{class:"ChannelBlog_channelBlog__icon"},[(0,r._)("span",{class:"_icon-arrow-right"})],-1)));function G(t,e,a,n,f,G){const q=(0,r.up)("InstagramLoader"),F=(0,r.up)("RouterLink"),O=(0,r.up)("NavBar");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("div",l,[(0,r._)("div",s,[o,(0,r._)("div",null,[(0,r._)("div",c,[(0,r._)("div",u,[(0,r._)("div",d,[h,(0,r._)("div",m,[(0,r._)("div",_,[(0,r._)("div",p,[(0,r._)("div",y,[(0,r._)("ul",g,[(0,r._)("li",v,[(0,r._)("button",{type:"button",class:(0,i.C_)(["CategoryItem_button",[null===f.category_name?"CategoryItem_button_active":""]]),onClick:e[0]||(e[0]=t=>{f.category_name=null})},x,2)]),((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(t.$store.state.categories,(t=>((0,r.wg)(),(0,r.iD)("li",b,[(0,r._)("button",{type:"button",class:(0,i.C_)(["CategoryItem_button",[f.category_name===t.name?"CategoryItem_button_active":""]]),onClick:e=>f.category_name=t.name},[(0,r._)("span",null,(0,i.zw)(t.name),1)],10,w)])))),256))])])])])]),W]),C,B])])])]),(0,r._)("div",null,[(0,r._)("div",k,[(0,r.Wm)(q,{class:"preloader",ref:"preloader",viewBox:"0 0 400 250"},null,512),(0,r.Wm)(q,{class:"preloader",ref:"preloader",viewBox:"0 0 400 250"},null,512),(0,r.Wm)(q,{class:"preloader",ref:"preloader",viewBox:"0 0 400 250"},null,512)]),(0,r._)("div",N,[$,(0,r._)("div",null,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(t.$store.state.categories_filtered,(t=>((0,r.wg)(),(0,r.iD)("div",null,[(0,r._)("div",M,[(0,r._)("span",P,(0,i.zw)(t.name),1)]),((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(t.channels_array,(t=>((0,r.wg)(),(0,r.iD)("div",I,[(0,r.Wm)(F,{to:`/channel/${t.id}`},{default:(0,r.w5)((()=>[(0,r._)("div",T,[(0,r._)("div",Z,[(0,r._)("img",{src:`/colorsserver/public/pics/${t.preview}`,alt:""},null,8,D)]),(0,r._)("div",L,[(0,r._)("div",A,(0,i.zw)(t.participants_count),1),(0,r._)("h3",S,(0,i.zw)(t.title),1),(0,r._)("div",z,[(0,r._)("p",null,(0,i.zw)(t.description),1)])]),K])])),_:2},1032,["to"])])))),256))])))),256))])])])]),(0,r.Wm)(O)],64)}var q=a(4507),F=a(7123),O=a(3089),R={components:{NavBar:q.Z,InstagramLoader:O.z9},data(){return{category_name:null}},watch:{async category_name(){this.$store.state.categories_filtered=await this.getCategories()}},beforeMount(){},async mounted(){window.Telegram?.WebApp.BackButton.hide(),window.Telegram?.WebApp.expand(),this.updatePage(300);const t=window.Telegram?.WebApp?.initDataUnsafe?.user?.id;this.$store.state.userId=t??this.$route.params?.userId,window.Telegram?.WebApp.enableClosingConfirmation()},async beforeUnmount(){},methods:{async updatePage(t){this.$store.state.categories=await this.getCategories(!0),this.$store.state.categories_filtered=this.$store.state.categories,this.$refs["MainPage_listChannel__container"]?.classList.add("hidden"),document.body.classList.add("stop-scrolling"),setTimeout((()=>{const t=document.getElementsByClassName("preloaders_block");console.log(t);for(let e of t)e.classList.add("hidden");this.$refs["MainPage_listChannel__container"]?.classList.remove("hidden"),document.body.classList.remove("stop-scrolling")}),t)},async getCategories(){const t=await this.$store.state.myApi.get(this.$store.state.restAddr+"/categories",{params:{category:this.category_name}}).then((t=>t.data)).catch((t=>{F.Z.$emit("noresponse",t)}));return t}}},U=a(89);const Y=(0,U.Z)(R,[["render",G],["__scopeId","data-v-ae9d4020"]]);var H=Y}}]);
//# sourceMappingURL=148.1986357b.js.map