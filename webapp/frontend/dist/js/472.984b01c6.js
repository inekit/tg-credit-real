"use strict";(self["webpackChunk_coreui_coreui_free_vue_admin_template"]=self["webpackChunk_coreui_coreui_free_vue_admin_template"]||[]).push([[472],{3089:function(a,e,t){t.d(e,{z9:function(){return r}});var n=t(3396),l=function(){return Math.random().toString(36).substring(2)},i=(0,n.aZ)({name:"ContentLoader",props:{width:{type:[Number,String]},height:{type:[Number,String]},viewBox:{type:String},preserveAspectRatio:{type:String,default:"xMidYMid meet"},speed:{type:Number,default:2},baseUrl:{type:String,default:""},primaryColor:{type:String,default:"#f9f9f9"},secondaryColor:{type:String,default:"#ecebeb"},primaryOpacity:{type:Number,default:1},secondaryOpacity:{type:Number,default:1},uniqueKey:{type:String},animate:{type:Boolean,default:!0}},setup:function(a){var e=(0,n.Fl)((function(){return a.uniqueKey?"".concat(a.uniqueKey,"-idClip"):l()})),t=(0,n.Fl)((function(){return a.uniqueKey?"".concat(a.uniqueKey,"-idGradient"):l()})),i=(0,n.Fl)((function(){var e;return null!==(e=a.width)&&void 0!==e?e:400})),r=(0,n.Fl)((function(){var e;return null!==(e=a.height)&&void 0!==e?e:130})),s=(0,n.Fl)((function(){var e;return null!==(e=a.viewBox)&&void 0!==e?e:"0 0 ".concat(i.value," ").concat(r.value)}));return{idClip:e,idGradient:t,computedViewBox:s}},render:function(){return(0,n.Wm)("svg",{width:this.width,height:this.height,viewBox:this.computedViewBox,version:"1.1",preserveAspectRatio:this.preserveAspectRatio},[(0,n.Wm)("rect",{style:{fill:"url(".concat(this.baseUrl,"#").concat(this.idGradient,")")},"clip-path":"url(".concat(this.baseUrl,"#").concat(this.idClip,")"),x:"0",y:"0",width:"100%",height:"100%"},null),(0,n.Wm)("defs",null,[(0,n.Wm)("clipPath",{id:this.idClip},[this.$slots["default"]?this.$slots["default"]():(0,n.Wm)("rect",{x:"0",y:"0",rx:"5",ry:"5",width:"100%",height:"100%"},null)]),(0,n.Wm)("linearGradient",{id:this.idGradient},[(0,n.Wm)("stop",{offset:"0%","stop-color":this.primaryColor,"stop-opacity":this.primaryOpacity},[this.animate?(0,n.Wm)("animate",{attributeName:"offset",values:"-2; 1",dur:"".concat(this.speed,"s"),repeatCount:"indefinite"},null):null]),(0,n.Wm)("stop",{offset:"50%","stop-color":this.secondaryColor,"stop-opacity":this.secondaryOpacity},[this.animate?(0,n.Wm)("animate",{attributeName:"offset",values:"-1.5; 1.5",dur:"".concat(this.speed,"s"),repeatCount:"indefinite"},null):null]),(0,n.Wm)("stop",{offset:"100%","stop-color":this.primaryColor,"stop-opacity":this.primaryOpacity},[this.animate?(0,n.Wm)("animate",{attributeName:"offset",values:"-1; 2",dur:"".concat(this.speed,"s"),repeatCount:"indefinite"},null):null])])])])}}),r=((0,n.aZ)((function(a,e){var t=e.attrs;return function(){return(0,n.Wm)(i,t,{default:function(){return[(0,n.Wm)("circle",{cx:"10",cy:"20",r:"8"},null),(0,n.Wm)("rect",{x:"25",y:"15",rx:"5",ry:"5",width:"220",height:"10"},null),(0,n.Wm)("circle",{cx:"10",cy:"50",r:"8"},null),(0,n.Wm)("rect",{x:"25",y:"45",rx:"5",ry:"5",width:"220",height:"10"},null),(0,n.Wm)("circle",{cx:"10",cy:"80",r:"8"},null),(0,n.Wm)("rect",{x:"25",y:"75",rx:"5",ry:"5",width:"220",height:"10"},null),(0,n.Wm)("circle",{cx:"10",cy:"110",r:"8"},null),(0,n.Wm)("rect",{x:"25",y:"105",rx:"5",ry:"5",width:"220",height:"10"},null)]}})}})),(0,n.aZ)((function(a,e){var t=e.attrs;return function(){return(0,n.Wm)(i,t,{default:function(){return[(0,n.Wm)("rect",{x:"0",y:"0",rx:"3",ry:"3",width:"70",height:"10"},null),(0,n.Wm)("rect",{x:"80",y:"0",rx:"3",ry:"3",width:"100",height:"10"},null),(0,n.Wm)("rect",{x:"190",y:"0",rx:"3",ry:"3",width:"10",height:"10"},null),(0,n.Wm)("rect",{x:"15",y:"20",rx:"3",ry:"3",width:"130",height:"10"},null),(0,n.Wm)("rect",{x:"155",y:"20",rx:"3",ry:"3",width:"130",height:"10"},null),(0,n.Wm)("rect",{x:"15",y:"40",rx:"3",ry:"3",width:"90",height:"10"},null),(0,n.Wm)("rect",{x:"115",y:"40",rx:"3",ry:"3",width:"60",height:"10"},null),(0,n.Wm)("rect",{x:"185",y:"40",rx:"3",ry:"3",width:"60",height:"10"},null),(0,n.Wm)("rect",{x:"0",y:"60",rx:"3",ry:"3",width:"30",height:"10"},null)]}})}})),(0,n.aZ)((function(a,e){var t=e.attrs;return function(){return(0,n.Wm)(i,t,{default:function(){return[(0,n.Wm)("rect",{x:"70",y:"15",rx:"4",ry:"4",width:"117",height:"6.4"},null),(0,n.Wm)("rect",{x:"70",y:"35",rx:"3",ry:"3",width:"85",height:"6.4"},null),(0,n.Wm)("rect",{x:"0",y:"80",rx:"3",ry:"3",width:"350",height:"6.4"},null),(0,n.Wm)("rect",{x:"0",y:"100",rx:"3",ry:"3",width:"380",height:"6.4"},null),(0,n.Wm)("rect",{x:"0",y:"120",rx:"3",ry:"3",width:"201",height:"6.4"},null),(0,n.Wm)("circle",{cx:"30",cy:"30",r:"30"},null)]}})}})),(0,n.aZ)((function(a,e){var t=e.attrs;return function(){return(0,n.Wm)(i,t,{default:function(){return[(0,n.Wm)("rect",{x:"0",y:"0",rx:"3",ry:"3",width:"250",height:"10"},null),(0,n.Wm)("rect",{x:"20",y:"20",rx:"3",ry:"3",width:"220",height:"10"},null),(0,n.Wm)("rect",{x:"20",y:"40",rx:"3",ry:"3",width:"170",height:"10"},null),(0,n.Wm)("rect",{x:"0",y:"60",rx:"3",ry:"3",width:"250",height:"10"},null),(0,n.Wm)("rect",{x:"20",y:"80",rx:"3",ry:"3",width:"200",height:"10"},null),(0,n.Wm)("rect",{x:"20",y:"100",rx:"3",ry:"3",width:"80",height:"10"},null)]}})}})),(0,n.aZ)((function(a,e){var t=e.attrs;return function(){return(0,n.Wm)(i,(0,n.dG)(t,{viewBox:"0 0 400 480"}),{default:function(){return[(0,n.Wm)("circle",{cx:"30",cy:"30",r:"30"},null),(0,n.Wm)("rect",{x:"75",y:"13",rx:"4",ry:"4",width:"100",height:"13"},null),(0,n.Wm)("rect",{x:"75",y:"37",rx:"4",ry:"4",width:"50",height:"8"},null),(0,n.Wm)("rect",{x:"0",y:"70",rx:"5",ry:"5",width:"400",height:"400"},null)]}})}})))},8472:function(a,e,t){t.r(e),t.d(e,{default:function(){return ba}});var n=t(3396),l=t(7139),i=t(9242);const r=a=>((0,n.dD)("data-v-6e7ab4fd"),a=a(),(0,n.Cn)(),a),s={class:"preloaders_block"},c={class:"channel-page"},d={class:"react-tabs","data-rttabs":"true"},o={class:"Channel_channelProfile"},_={class:"Channel_channelProfile__container container"},h={class:"Channel_channelProfile__header"},u=r((()=>(0,n._)("div",{class:"Badge_badge Channel_channelProfile__badge"},[(0,n._)("span",{class:"Badge_badge__text"},"Дизайн")],-1))),p={type:"button",class:"Channel_channelProfile__image"},v=["src"],b=r((()=>(0,n._)("button",{type:"button",class:"Channel_channelProfile__icon _icon-bookmark"},null,-1))),f={class:"Channel_channelProfile__content"},m={class:"Channel_channelProfile__title"},y={class:"Channel_channelProfile__subcribers _icon-profile"},g={class:"Channel_channelProfile__text"},C={class:"Channel_channelProfile__body"},w={class:"Channel_channelProfile__tabList",role:"tablist"},x={class:"top-tabpanel",role:"tabpanel",id:"panel:r0:0","aria-labelledby":"tab:r0:0"},W={class:"Channel_channelContent"},P={class:"container"},B={class:"ChannelInfo_channelContent__actions"},A=r((()=>(0,n._)("span",{class:"ChannelInfo_channelContent__label _icon-arrow-right"},"ТГстат",-1))),k=[A],I=r((()=>(0,n._)("span",{class:"ChannelInfo_channelContent__label _icon-arrow-right"},"Телеметр",-1))),T=[I],z={class:"ChannelInfo_channelContent__content"},M={class:"ChannelInfo_channelContent__data"},S=r((()=>(0,n._)("span",{class:"ChannelInfo_channelContent__placeholder"},"Охваты",-1))),F={class:"ChannelInfo_channelContent__text"},G={class:"ChannelInfo_channelContent__data"},E=r((()=>(0,n._)("span",{class:"ChannelInfo_channelContent__placeholder"},"ERR",-1))),K={class:"ChannelInfo_channelContent__text"},L={class:"ChannelInfo_channelContent__data"},q=r((()=>(0,n._)("span",{class:"ChannelInfo_channelContent__placeholder"},"CPM",-1))),O={class:"ChannelInfo_channelContent__text"},$={class:"react-tabs","data-rttabs":"true"},N={class:"Channel_channelSwiper__container container"},Y={"data-simplebar":"init",style:{"max-width":"768px"}},Z={class:"simplebar-wrapper",style:{margin:"0px"}},R=r((()=>(0,n._)("div",{class:"simplebar-height-auto-observer-wrapper"},[(0,n._)("div",{class:"simplebar-height-auto-observer"})],-1))),U={class:"simplebar-mask"},V={class:"simplebar-offset",style:{right:"0px",bottom:"0px"}},D={class:"simplebar-content-wrapper",tabindex:"0",role:"region","aria-label":"scrollable content",style:{height:"auto",overflow:"hidden"}},H={class:"simplebar-content",style:{padding:"0px"}},j={class:"Channel_channelSwiperTabs__list",role:"tablist"},J=r((()=>(0,n._)("div",{class:"simplebar-placeholder",style:{width:"auto",height:"29px"}},null,-1))),Q=r((()=>(0,n._)("div",{class:"simplebar-track simplebar-horizontal",style:{visibility:"hidden"}},[(0,n._)("div",{class:"simplebar-scrollbar",style:{width:"0px",display:"none"}})],-1))),X=r((()=>(0,n._)("div",{class:"simplebar-track simplebar-vertical",style:{visibility:"hidden"}},[(0,n._)("div",{class:"simplebar-scrollbar",style:{height:"0px",display:"none"}})],-1))),aa={class:"container"},ea={class:"",role:"tabpanel",id:"panel:r1:0","aria-labelledby":"tab:r1:0"},ta=(0,n.uE)('<div class="GenderCount_gender" data-v-6e7ab4fd><div class="GenderCount_gender__body" data-v-6e7ab4fd><div class="GenderCount_gender__item" data-v-6e7ab4fd><h2 class="GenderCount_gender__title" data-v-6e7ab4fd> Мужской <span data-v-6e7ab4fd>61%</span></h2><div class="GenderCount_gender__statusbar" data-v-6e7ab4fd><span style="width:61%;background-color:rgb(13, 86, 225);" data-v-6e7ab4fd></span></div></div><div class="GenderCount_gender__item" data-v-6e7ab4fd><h2 class="GenderCount_gender__title" data-v-6e7ab4fd> Женский <span data-v-6e7ab4fd>39%</span></h2><div class="GenderCount_gender__statusbar" data-v-6e7ab4fd><span style="width:39%;background-color:rgb(37, 252, 213);" data-v-6e7ab4fd></span></div></div></div></div>',1),na=[ta],la={class:"",role:"tabpanel",id:"panel:r5:2","aria-labelledby":"tab:r5:2"},ia=(0,n.uE)('<div class="ProgressBars_location__YHytS" data-v-6e7ab4fd><div class="ProgressBars_location__body__-aPT7" data-v-6e7ab4fd><div class="ProgressBars_location__item__MEYqK" data-v-6e7ab4fd><h2 class="ProgressBars_location__title__OzI8F" data-v-6e7ab4fd>До 18 лет <span data-v-6e7ab4fd>4%</span></h2><div class="ProgressBars_location__statusbar__58zTm" data-v-6e7ab4fd><span style="width:4%;" data-v-6e7ab4fd></span></div></div><div class="ProgressBars_location__item__MEYqK" data-v-6e7ab4fd><h2 class="ProgressBars_location__title__OzI8F" data-v-6e7ab4fd>18-24 <span data-v-6e7ab4fd>26%</span></h2><div class="ProgressBars_location__statusbar__58zTm" data-v-6e7ab4fd><span style="width:26%;" data-v-6e7ab4fd></span></div></div><div class="ProgressBars_location__item__MEYqK" data-v-6e7ab4fd><h2 class="ProgressBars_location__title__OzI8F" data-v-6e7ab4fd>25-34 <span data-v-6e7ab4fd>32%</span></h2><div class="ProgressBars_location__statusbar__58zTm" data-v-6e7ab4fd><span style="width:32%;" data-v-6e7ab4fd></span></div></div><div class="ProgressBars_location__item__MEYqK" data-v-6e7ab4fd><h2 class="ProgressBars_location__title__OzI8F" data-v-6e7ab4fd>35-44 <span data-v-6e7ab4fd>23%</span></h2><div class="ProgressBars_location__statusbar__58zTm" data-v-6e7ab4fd><span style="width:23%;" data-v-6e7ab4fd></span></div></div><div class="ProgressBars_location__item__MEYqK" data-v-6e7ab4fd><h2 class="ProgressBars_location__title__OzI8F" data-v-6e7ab4fd>45-54 <span data-v-6e7ab4fd>10%</span></h2><div class="ProgressBars_location__statusbar__58zTm" data-v-6e7ab4fd><span style="width:10%;" data-v-6e7ab4fd></span></div></div></div></div>',1),ra=[ia],sa={class:"top-tabpanel",role:"tabpanel",id:"panel:r0:1","aria-labelledby":"tab:r0:1"},ca=(0,n.uE)('<div class="Channel_channelContent__kcVW0 Channel_channelContent_margin__mroyE" data-v-6e7ab4fd><div class="container" data-v-6e7ab4fd><div data-v-6e7ab4fd><div class="ChannelPriceActions_channelPrice__uWyC4" data-v-6e7ab4fd><div class="ChannelPriceActions_channelPrice__content__fLClw" data-v-6e7ab4fd><h2 class="ChannelPriceActions_channelPrice__title__ym2M9" data-v-6e7ab4fd>Стоимость</h2><p class="ChannelPriceActions_channelPrice__text__Mbugf" data-v-6e7ab4fd>за один рекламный пост</p></div><div class="ChannelPriceActions_channelPrice__price__20drU" data-v-6e7ab4fd><span data-v-6e7ab4fd>100 000 руб.</span></div></div><div class="row" data-v-6e7ab4fd><div class="ChannelPriceActions_channelActions__body__7nfTf" data-v-6e7ab4fd><button type="button" class="ChannelPriceActions_channelActions__button__MzwI0" data-v-6e7ab4fd><span data-v-6e7ab4fd>Связаться</span></button></div><div class="ChannelPriceActions_channelActions__body__7nfTf" data-v-6e7ab4fd><button type="button" class="ChannelPriceActions_channelActions__button__MzwI0" data-v-6e7ab4fd><span data-v-6e7ab4fd>Поторговаться</span></button></div></div></div></div></div>',1),da=[ca];function oa(a,e,t,r,A,I){const ta=(0,n.up)("InstagramLoader"),ia=(0,n.up)("RouterLink");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n._)("div",s,[(0,n.Wm)(ta,{class:"preloader",ref:"preloader",viewBox:"0 0 400 250"},null,512),(0,n.Wm)(ta,{class:"preloader",ref:"preloader",viewBox:"0 0 400 250"},null,512),(0,n.Wm)(ta,{class:"preloader",ref:"preloader",viewBox:"0 0 400 250"},null,512)]),(0,n._)("div",c,[(0,n._)("div",d,[(0,n._)("div",o,[(0,n._)("div",_,[(0,n._)("div",h,[(0,n._)("div",null,[(0,n.Wm)(ia,{type:"button",class:"Channel_channelProfile__backIcon _icon-angle-left",to:"/"}),u]),(0,n._)("button",p,[(0,n._)("img",{src:`/colorsserver/public/pics/${A.channel.preview}`,alt:""},null,8,v)]),b]),(0,n._)("div",f,[(0,n._)("h1",m,(0,l.zw)(A.channel.title),1),(0,n._)("div",y,(0,l.zw)(A.channel.participants_count),1),(0,n._)("p",g,(0,l.zw)(A.channel.description),1)]),(0,n._)("div",C,[(0,n._)("ul",w,[(0,n._)("li",{class:(0,l.C_)(["Channel_channelProfile__item",[A.infoActive?"Channel_channelProfile__item_active":""]]),role:"tab",id:"tab:r0:0","aria-selected":"true","aria-disabled":"false","aria-controls":"panel:r0:0",tabindex:"0","data-rttab":"true",onClick:e[0]||(e[0]=a=>A.infoActive=!0)}," Информация ",2),(0,n._)("li",{class:(0,l.C_)(["Channel_channelProfile__item",[A.infoActive?"":"Channel_channelProfile__item_active"]]),role:"tab",id:"tab:r0:1","aria-selected":"false","aria-disabled":"false","aria-controls":"panel:r0:1","data-rttab":"true",onClick:e[1]||(e[1]=a=>A.infoActive=!1)}," Стоимость ",2)])])])]),(0,n.wy)((0,n._)("div",x,[(0,n._)("div",W,[(0,n._)("div",P,[(0,n._)("div",null,[(0,n._)("div",B,[(0,n._)("button",{type:"button",class:"ChannelInfo_channelContent__action",onClick:e[2]||(e[2]=e=>a.window.open(A.channel.tgstat_link,"_blank"))},k),(0,n._)("button",{type:"button",class:"ChannelInfo_channelContent__action",onClick:e[3]||(e[3]=e=>a.window.open(A.channel.telemetr_link,"_blank"))},T)]),(0,n._)("div",z,[(0,n._)("div",M,[S,(0,n._)("p",F,(0,l.zw)(I.formatThousands(A.channel.post_reach)),1)]),(0,n._)("div",G,[E,(0,n._)("p",K,(0,l.zw)(A.channel.err),1)]),(0,n._)("div",L,[q,(0,n._)("p",O,(0,l.zw)(I.formatThousands(A.channel.cpm)),1)])])])])]),(0,n._)("div",null,[(0,n._)("div",$,[(0,n._)("div",N,[(0,n._)("div",null,[(0,n._)("div",Y,[(0,n._)("div",Z,[R,(0,n._)("div",U,[(0,n._)("div",V,[(0,n._)("div",D,[(0,n._)("div",H,[(0,n._)("ul",j,[(0,n._)("li",{class:(0,l.C_)(["Channel_channelSwiperTabs__item",[A.sexActive?"Channel_channelSwiperTabs__item_active":""]]),role:"tab",id:"tab:r1:0","aria-selected":"true","aria-disabled":"false","aria-controls":"panel:r1:0",tabindex:"0","data-rttab":"true",onClick:e[4]||(e[4]=a=>A.sexActive=!0)}," Пол ",2),(0,n._)("li",{class:(0,l.C_)(["Channel_channelSwiperTabs__item",[A.sexActive?"":"Channel_channelSwiperTabs__item_active"]]),role:"tab",id:"tab:r1:2","aria-selected":"false","aria-disabled":"false","aria-controls":"panel:r1:2","data-rttab":"true",onClick:e[5]||(e[5]=a=>A.sexActive=!1)}," Возраст ",2)])])])])]),J]),Q,X])])]),(0,n._)("div",null,[(0,n._)("div",aa,[(0,n.wy)((0,n._)("div",ea,na,512),[[i.F8,A.sexActive]]),(0,n.wy)((0,n._)("div",la,ra,512),[[i.F8,!A.sexActive]])])])])])],512),[[i.F8,A.infoActive]]),(0,n.wy)((0,n._)("div",sa,da,512),[[i.F8,!A.infoActive]])])])],64)}var _a=t(7123),ha=t(3089),ua={components:{InstagramLoader:ha.z9},data(){return{infoActive:!0,sexActive:!0,channel:{}}},watch:{},async beforeMount(){window.Telegram?.WebApp.BackButton.onClick(this.routeBack),window.Telegram?.WebApp.BackButton.show(),this.channel=await this.getChannel(this.$route.params.channelId)},async mounted(){this.updatePage(300)},async beforeUnmount(){window.Telegram?.WebApp.MainButton.offClick(this.routeToBasket),window.Telegram?.WebApp.MainButton.hide(),window.Telegram?.WebApp.BackButton.offClick(this.routeBack),window.Telegram?.WebApp.BackButton.hide()},methods:{routeBack(){this.$router.go(-1)},async updatePage(a){this.$refs["channel-page"]?.classList.add("hidden"),document.body.classList.add("stop-scrolling"),setTimeout((()=>{const a=document.getElementsByClassName("preloaders_block");console.log(a);for(let e of a)e.classList.add("hidden");this.$refs["channel-page"]?.classList.remove("hidden"),document.body.classList.remove("stop-scrolling")}),a)},formatThousands(a){return a>=1e3?+(a/1e3).toFixed(0)+"K":a},async getChannel(a){const e=await this.$store.state.myApi.get(this.$store.state.restAddr+"/items",{params:{id:a}}).then((a=>a.data[0])).catch((a=>{_a.Z.$emit("noresponse",a)}));return e}}},pa=t(89);const va=(0,pa.Z)(ua,[["render",oa],["__scopeId","data-v-6e7ab4fd"]]);var ba=va}}]);
//# sourceMappingURL=472.984b01c6.js.map