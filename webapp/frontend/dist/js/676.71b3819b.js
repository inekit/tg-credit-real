"use strict";(self["webpackChunk_coreui_coreui_free_vue_admin_template"]=self["webpackChunk_coreui_coreui_free_vue_admin_template"]||[]).push([[676],{3089:function(t,e,r){r.d(e,{z9:function(){return l}});var i=r(3396),n=function(){return Math.random().toString(36).substring(2)},a=(0,i.aZ)({name:"ContentLoader",props:{width:{type:[Number,String]},height:{type:[Number,String]},viewBox:{type:String},preserveAspectRatio:{type:String,default:"xMidYMid meet"},speed:{type:Number,default:2},baseUrl:{type:String,default:""},primaryColor:{type:String,default:"#f9f9f9"},secondaryColor:{type:String,default:"#ecebeb"},primaryOpacity:{type:Number,default:1},secondaryOpacity:{type:Number,default:1},uniqueKey:{type:String},animate:{type:Boolean,default:!0}},setup:function(t){var e=(0,i.Fl)((function(){return t.uniqueKey?"".concat(t.uniqueKey,"-idClip"):n()})),r=(0,i.Fl)((function(){return t.uniqueKey?"".concat(t.uniqueKey,"-idGradient"):n()})),a=(0,i.Fl)((function(){var e;return null!==(e=t.width)&&void 0!==e?e:400})),l=(0,i.Fl)((function(){var e;return null!==(e=t.height)&&void 0!==e?e:130})),o=(0,i.Fl)((function(){var e;return null!==(e=t.viewBox)&&void 0!==e?e:"0 0 ".concat(a.value," ").concat(l.value)}));return{idClip:e,idGradient:r,computedViewBox:o}},render:function(){return(0,i.Wm)("svg",{width:this.width,height:this.height,viewBox:this.computedViewBox,version:"1.1",preserveAspectRatio:this.preserveAspectRatio},[(0,i.Wm)("rect",{style:{fill:"url(".concat(this.baseUrl,"#").concat(this.idGradient,")")},"clip-path":"url(".concat(this.baseUrl,"#").concat(this.idClip,")"),x:"0",y:"0",width:"100%",height:"100%"},null),(0,i.Wm)("defs",null,[(0,i.Wm)("clipPath",{id:this.idClip},[this.$slots["default"]?this.$slots["default"]():(0,i.Wm)("rect",{x:"0",y:"0",rx:"5",ry:"5",width:"100%",height:"100%"},null)]),(0,i.Wm)("linearGradient",{id:this.idGradient},[(0,i.Wm)("stop",{offset:"0%","stop-color":this.primaryColor,"stop-opacity":this.primaryOpacity},[this.animate?(0,i.Wm)("animate",{attributeName:"offset",values:"-2; 1",dur:"".concat(this.speed,"s"),repeatCount:"indefinite"},null):null]),(0,i.Wm)("stop",{offset:"50%","stop-color":this.secondaryColor,"stop-opacity":this.secondaryOpacity},[this.animate?(0,i.Wm)("animate",{attributeName:"offset",values:"-1.5; 1.5",dur:"".concat(this.speed,"s"),repeatCount:"indefinite"},null):null]),(0,i.Wm)("stop",{offset:"100%","stop-color":this.primaryColor,"stop-opacity":this.primaryOpacity},[this.animate?(0,i.Wm)("animate",{attributeName:"offset",values:"-1; 2",dur:"".concat(this.speed,"s"),repeatCount:"indefinite"},null):null])])])])}}),l=((0,i.aZ)((function(t,e){var r=e.attrs;return function(){return(0,i.Wm)(a,r,{default:function(){return[(0,i.Wm)("circle",{cx:"10",cy:"20",r:"8"},null),(0,i.Wm)("rect",{x:"25",y:"15",rx:"5",ry:"5",width:"220",height:"10"},null),(0,i.Wm)("circle",{cx:"10",cy:"50",r:"8"},null),(0,i.Wm)("rect",{x:"25",y:"45",rx:"5",ry:"5",width:"220",height:"10"},null),(0,i.Wm)("circle",{cx:"10",cy:"80",r:"8"},null),(0,i.Wm)("rect",{x:"25",y:"75",rx:"5",ry:"5",width:"220",height:"10"},null),(0,i.Wm)("circle",{cx:"10",cy:"110",r:"8"},null),(0,i.Wm)("rect",{x:"25",y:"105",rx:"5",ry:"5",width:"220",height:"10"},null)]}})}})),(0,i.aZ)((function(t,e){var r=e.attrs;return function(){return(0,i.Wm)(a,r,{default:function(){return[(0,i.Wm)("rect",{x:"0",y:"0",rx:"3",ry:"3",width:"70",height:"10"},null),(0,i.Wm)("rect",{x:"80",y:"0",rx:"3",ry:"3",width:"100",height:"10"},null),(0,i.Wm)("rect",{x:"190",y:"0",rx:"3",ry:"3",width:"10",height:"10"},null),(0,i.Wm)("rect",{x:"15",y:"20",rx:"3",ry:"3",width:"130",height:"10"},null),(0,i.Wm)("rect",{x:"155",y:"20",rx:"3",ry:"3",width:"130",height:"10"},null),(0,i.Wm)("rect",{x:"15",y:"40",rx:"3",ry:"3",width:"90",height:"10"},null),(0,i.Wm)("rect",{x:"115",y:"40",rx:"3",ry:"3",width:"60",height:"10"},null),(0,i.Wm)("rect",{x:"185",y:"40",rx:"3",ry:"3",width:"60",height:"10"},null),(0,i.Wm)("rect",{x:"0",y:"60",rx:"3",ry:"3",width:"30",height:"10"},null)]}})}})),(0,i.aZ)((function(t,e){var r=e.attrs;return function(){return(0,i.Wm)(a,r,{default:function(){return[(0,i.Wm)("rect",{x:"70",y:"15",rx:"4",ry:"4",width:"117",height:"6.4"},null),(0,i.Wm)("rect",{x:"70",y:"35",rx:"3",ry:"3",width:"85",height:"6.4"},null),(0,i.Wm)("rect",{x:"0",y:"80",rx:"3",ry:"3",width:"350",height:"6.4"},null),(0,i.Wm)("rect",{x:"0",y:"100",rx:"3",ry:"3",width:"380",height:"6.4"},null),(0,i.Wm)("rect",{x:"0",y:"120",rx:"3",ry:"3",width:"201",height:"6.4"},null),(0,i.Wm)("circle",{cx:"30",cy:"30",r:"30"},null)]}})}})),(0,i.aZ)((function(t,e){var r=e.attrs;return function(){return(0,i.Wm)(a,r,{default:function(){return[(0,i.Wm)("rect",{x:"0",y:"0",rx:"3",ry:"3",width:"250",height:"10"},null),(0,i.Wm)("rect",{x:"20",y:"20",rx:"3",ry:"3",width:"220",height:"10"},null),(0,i.Wm)("rect",{x:"20",y:"40",rx:"3",ry:"3",width:"170",height:"10"},null),(0,i.Wm)("rect",{x:"0",y:"60",rx:"3",ry:"3",width:"250",height:"10"},null),(0,i.Wm)("rect",{x:"20",y:"80",rx:"3",ry:"3",width:"200",height:"10"},null),(0,i.Wm)("rect",{x:"20",y:"100",rx:"3",ry:"3",width:"80",height:"10"},null)]}})}})),(0,i.aZ)((function(t,e){var r=e.attrs;return function(){return(0,i.Wm)(a,(0,i.dG)(r,{viewBox:"0 0 400 480"}),{default:function(){return[(0,i.Wm)("circle",{cx:"30",cy:"30",r:"30"},null),(0,i.Wm)("rect",{x:"75",y:"13",rx:"4",ry:"4",width:"100",height:"13"},null),(0,i.Wm)("rect",{x:"75",y:"37",rx:"4",ry:"4",width:"50",height:"8"},null),(0,i.Wm)("rect",{x:"0",y:"70",rx:"5",ry:"5",width:"400",height:"400"},null)]}})}})))},4449:function(t,e,r){r.d(e,{Z:function(){return d}});var i=r(3396);const n={class:"BottomNavBar_bottomNavBar"},a={class:"container"},l={class:"BottomNavBar_bottomNavBar__body"};function o(t,e,r,o,s,c){const u=(0,i.up)("RouterLink");return(0,i.wg)(),(0,i.iD)("div",n,[(0,i._)("div",a,[(0,i._)("div",l,[(0,i.Wm)(u,{"aria-current":"page",class:"_icon-home BottomNavBar_bottomNavBar__link","active-class":"active",to:`/channels/${t.$store.state.userId}`},null,8,["to"]),(0,i.Wm)(u,{class:"_icon-bookmark BottomNavBar_bottomNavBar__link","active-class":"active",to:"/favourites"})])])])}r(7123);var s={data(){return{categories:{}}},async beforeMount(){},methods:{}},c=r(89);const u=(0,c.Z)(s,[["render",o]]);var d=u},5676:function(t,e,r){r.r(e),r.d(e,{default:function(){return $}});var i=r(3396),n=r(7139);const a=t=>((0,i.dD)("data-v-8835e0d8"),t=t(),(0,i.Cn)(),t),l={class:"Favourites_listChannel"},o={class:"Favourites_listChannel__container container"},s=a((()=>(0,i._)("div",{class:"Title_block"},[(0,i._)("h2",{class:"Title_title Favourites_listChannel__title"}," Избранные каналы ")],-1))),c={class:"preloaders_block"},u={class:"channels__list"},d={class:"Badge_badge"},h={class:"Badge_badge__text"},m={class:"Channels_channels__body"},y={class:"ChannelBlog_channelBlog"},p={class:"ChannelBlog_channelBlog__image"},g=["src"],_={class:"ChannelBlog_channelBlog__content"},f={class:"ChannelBlog_channelBlog__subscribers _icon-profile"},v={class:"ChannelBlog_channelBlog__title"},x={class:"ChannelBlog_channelBlog__text"};function w(t,e,r,a,w,W){const b=(0,i.up)("InstagramLoader"),B=(0,i.up)("RouterLink"),C=(0,i.up)("NavBar");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i._)("div",l,[(0,i._)("div",o,[s,(0,i._)("div",c,[(0,i.Wm)(b,{class:"preloader",ref:"preloader",viewBox:"0 0 400 250",primaryColor:"#060067",secondaryColor:"#00427c"},null,512),(0,i.Wm)(b,{class:"preloader",ref:"preloader",viewBox:"0 0 400 250",primaryColor:"#00427c6e",secondaryColor:"#00427c"},null,512)]),(0,i._)("div",u,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(t.$store.state.categories,(t=>((0,i.wg)(),(0,i.iD)("div",null,[(0,i._)("div",d,[(0,i._)("span",h,(0,n.zw)(t.name),1)]),((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(t.channels_array,(t=>((0,i.wg)(),(0,i.iD)("div",m,[(0,i.Wm)(B,{to:`/channel/${t.id}`},{default:(0,i.w5)((()=>[(0,i._)("div",y,[(0,i._)("div",p,[(0,i._)("img",{src:`/colorsserver/public/pics/${t.preview}`,alt:""},null,8,g)]),(0,i._)("div",_,[(0,i._)("div",f,(0,n.zw)(t.participants_count),1),(0,i._)("h3",v,(0,n.zw)(t.title),1),(0,i._)("div",x,[(0,i._)("p",null,(0,n.zw)(t.description),1)])])])])),_:2},1032,["to"])])))),256))])))),256))])])]),(0,i.Wm)(C)],64)}var W=r(4449),b=r(7123),B=r(3089),C={components:{NavBar:W.Z,InstagramLoader:B.z9},data(){return{}},watch:{},beforeMount(){},async mounted(){window.Telegram?.WebApp.BackButton.hide(),window.Telegram?.WebApp.expand(),this.updatePage(400),window.Telegram?.WebApp.enableClosingConfirmation()},async beforeUnmount(){},methods:{async updatePage(t){this.$store.state.categories=await this.getCategories(),this.$refs["channels__list"]?.classList.add("hidden"),document.body.classList.add("stop-scrolling"),setTimeout((()=>{const t=document.getElementsByClassName("preloaders_block");console.log(t);for(let e of t)e.classList.add("hidden");this.$refs["channels__list"]?.classList.remove("hidden"),document.body.classList.remove("stop-scrolling")}),t)},async getCategories(){const t=await this.$store.state.myApi.get(this.$store.state.restAddr+"/favorites",{params:{user_id:this.$store.state.userId}}).then((t=>t.data)).catch((t=>{b.Z.$emit("noresponse",t)}));return t}}},N=r(89);const k=(0,N.Z)(C,[["render",w],["__scopeId","data-v-8835e0d8"]]);var $=k}}]);
//# sourceMappingURL=676.71b3819b.js.map