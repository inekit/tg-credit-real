"use strict";(self["webpackChunk_coreui_coreui_free_vue_admin_template"]=self["webpackChunk_coreui_coreui_free_vue_admin_template"]||[]).push([[857],{3089:function(e,t,n){n.d(t,{z9:function(){return r}});var a=n(3396),l=function(){return Math.random().toString(36).substring(2)},i=(0,a.aZ)({name:"ContentLoader",props:{width:{type:[Number,String]},height:{type:[Number,String]},viewBox:{type:String},preserveAspectRatio:{type:String,default:"xMidYMid meet"},speed:{type:Number,default:2},baseUrl:{type:String,default:""},primaryColor:{type:String,default:"#f9f9f9"},secondaryColor:{type:String,default:"#ecebeb"},primaryOpacity:{type:Number,default:1},secondaryOpacity:{type:Number,default:1},uniqueKey:{type:String},animate:{type:Boolean,default:!0}},setup:function(e){var t=(0,a.Fl)((function(){return e.uniqueKey?"".concat(e.uniqueKey,"-idClip"):l()})),n=(0,a.Fl)((function(){return e.uniqueKey?"".concat(e.uniqueKey,"-idGradient"):l()})),i=(0,a.Fl)((function(){var t;return null!==(t=e.width)&&void 0!==t?t:400})),r=(0,a.Fl)((function(){var t;return null!==(t=e.height)&&void 0!==t?t:130})),s=(0,a.Fl)((function(){var t;return null!==(t=e.viewBox)&&void 0!==t?t:"0 0 ".concat(i.value," ").concat(r.value)}));return{idClip:t,idGradient:n,computedViewBox:s}},render:function(){return(0,a.Wm)("svg",{width:this.width,height:this.height,viewBox:this.computedViewBox,version:"1.1",preserveAspectRatio:this.preserveAspectRatio},[(0,a.Wm)("rect",{style:{fill:"url(".concat(this.baseUrl,"#").concat(this.idGradient,")")},"clip-path":"url(".concat(this.baseUrl,"#").concat(this.idClip,")"),x:"0",y:"0",width:"100%",height:"100%"},null),(0,a.Wm)("defs",null,[(0,a.Wm)("clipPath",{id:this.idClip},[this.$slots["default"]?this.$slots["default"]():(0,a.Wm)("rect",{x:"0",y:"0",rx:"5",ry:"5",width:"100%",height:"100%"},null)]),(0,a.Wm)("linearGradient",{id:this.idGradient},[(0,a.Wm)("stop",{offset:"0%","stop-color":this.primaryColor,"stop-opacity":this.primaryOpacity},[this.animate?(0,a.Wm)("animate",{attributeName:"offset",values:"-2; 1",dur:"".concat(this.speed,"s"),repeatCount:"indefinite"},null):null]),(0,a.Wm)("stop",{offset:"50%","stop-color":this.secondaryColor,"stop-opacity":this.secondaryOpacity},[this.animate?(0,a.Wm)("animate",{attributeName:"offset",values:"-1.5; 1.5",dur:"".concat(this.speed,"s"),repeatCount:"indefinite"},null):null]),(0,a.Wm)("stop",{offset:"100%","stop-color":this.primaryColor,"stop-opacity":this.primaryOpacity},[this.animate?(0,a.Wm)("animate",{attributeName:"offset",values:"-1; 2",dur:"".concat(this.speed,"s"),repeatCount:"indefinite"},null):null])])])])}}),r=((0,a.aZ)((function(e,t){var n=t.attrs;return function(){return(0,a.Wm)(i,n,{default:function(){return[(0,a.Wm)("circle",{cx:"10",cy:"20",r:"8"},null),(0,a.Wm)("rect",{x:"25",y:"15",rx:"5",ry:"5",width:"220",height:"10"},null),(0,a.Wm)("circle",{cx:"10",cy:"50",r:"8"},null),(0,a.Wm)("rect",{x:"25",y:"45",rx:"5",ry:"5",width:"220",height:"10"},null),(0,a.Wm)("circle",{cx:"10",cy:"80",r:"8"},null),(0,a.Wm)("rect",{x:"25",y:"75",rx:"5",ry:"5",width:"220",height:"10"},null),(0,a.Wm)("circle",{cx:"10",cy:"110",r:"8"},null),(0,a.Wm)("rect",{x:"25",y:"105",rx:"5",ry:"5",width:"220",height:"10"},null)]}})}})),(0,a.aZ)((function(e,t){var n=t.attrs;return function(){return(0,a.Wm)(i,n,{default:function(){return[(0,a.Wm)("rect",{x:"0",y:"0",rx:"3",ry:"3",width:"70",height:"10"},null),(0,a.Wm)("rect",{x:"80",y:"0",rx:"3",ry:"3",width:"100",height:"10"},null),(0,a.Wm)("rect",{x:"190",y:"0",rx:"3",ry:"3",width:"10",height:"10"},null),(0,a.Wm)("rect",{x:"15",y:"20",rx:"3",ry:"3",width:"130",height:"10"},null),(0,a.Wm)("rect",{x:"155",y:"20",rx:"3",ry:"3",width:"130",height:"10"},null),(0,a.Wm)("rect",{x:"15",y:"40",rx:"3",ry:"3",width:"90",height:"10"},null),(0,a.Wm)("rect",{x:"115",y:"40",rx:"3",ry:"3",width:"60",height:"10"},null),(0,a.Wm)("rect",{x:"185",y:"40",rx:"3",ry:"3",width:"60",height:"10"},null),(0,a.Wm)("rect",{x:"0",y:"60",rx:"3",ry:"3",width:"30",height:"10"},null)]}})}})),(0,a.aZ)((function(e,t){var n=t.attrs;return function(){return(0,a.Wm)(i,n,{default:function(){return[(0,a.Wm)("rect",{x:"70",y:"15",rx:"4",ry:"4",width:"117",height:"6.4"},null),(0,a.Wm)("rect",{x:"70",y:"35",rx:"3",ry:"3",width:"85",height:"6.4"},null),(0,a.Wm)("rect",{x:"0",y:"80",rx:"3",ry:"3",width:"350",height:"6.4"},null),(0,a.Wm)("rect",{x:"0",y:"100",rx:"3",ry:"3",width:"380",height:"6.4"},null),(0,a.Wm)("rect",{x:"0",y:"120",rx:"3",ry:"3",width:"201",height:"6.4"},null),(0,a.Wm)("circle",{cx:"30",cy:"30",r:"30"},null)]}})}})),(0,a.aZ)((function(e,t){var n=t.attrs;return function(){return(0,a.Wm)(i,n,{default:function(){return[(0,a.Wm)("rect",{x:"0",y:"0",rx:"3",ry:"3",width:"250",height:"10"},null),(0,a.Wm)("rect",{x:"20",y:"20",rx:"3",ry:"3",width:"220",height:"10"},null),(0,a.Wm)("rect",{x:"20",y:"40",rx:"3",ry:"3",width:"170",height:"10"},null),(0,a.Wm)("rect",{x:"0",y:"60",rx:"3",ry:"3",width:"250",height:"10"},null),(0,a.Wm)("rect",{x:"20",y:"80",rx:"3",ry:"3",width:"200",height:"10"},null),(0,a.Wm)("rect",{x:"20",y:"100",rx:"3",ry:"3",width:"80",height:"10"},null)]}})}})),(0,a.aZ)((function(e,t){var n=t.attrs;return function(){return(0,a.Wm)(i,(0,a.dG)(n,{viewBox:"0 0 400 480"}),{default:function(){return[(0,a.Wm)("circle",{cx:"30",cy:"30",r:"30"},null),(0,a.Wm)("rect",{x:"75",y:"13",rx:"4",ry:"4",width:"100",height:"13"},null),(0,a.Wm)("rect",{x:"75",y:"37",rx:"4",ry:"4",width:"50",height:"8"},null),(0,a.Wm)("rect",{x:"0",y:"70",rx:"5",ry:"5",width:"400",height:"400"},null)]}})}})))},857:function(e,t,n){n.r(t),n.d(t,{default:function(){return Ke}});var a=n(3396),l=n(7139),i=n(9242);const r=e=>((0,a.dD)("data-v-c876b330"),e=e(),(0,a.Cn)(),e),s={class:"preloaders_block"},c={class:"channel-page"},o={class:"react-tabs","data-rttabs":"true"},_={class:"Channel_channelProfile"},h={class:"Channel_channelProfile__container container"},d={class:"Channel_channelProfile__header"},u=r((()=>(0,a._)("div",{class:"Badge_badge Channel_channelProfile__badge"},[(0,a._)("span",{class:"Badge_badge__text"},"Дизайн")],-1))),p={type:"button",class:"Channel_channelProfile__image"},v=["src"],m={class:"Channel_channelProfile__content"},b={class:"Channel_channelProfile__title"},y={class:"Channel_channelProfile__subcribers _icon-profile"},f={class:"Channel_channelProfile__text"},g={class:"Channel_channelProfile__body"},w={class:"Channel_channelProfile__tabList",role:"tablist"},C={class:"top-tabpanel",role:"tabpanel",id:"panel:r0:0","aria-labelledby":"tab:r0:0"},x={class:"Channel_channelContent"},W={class:"container"},P={class:"ChannelInfo_channelContent__actions"},k=r((()=>(0,a._)("span",{class:"ChannelInfo_channelContent__label _icon-arrow-right"},"ТГстат",-1))),B=[k],A=r((()=>(0,a._)("span",{class:"ChannelInfo_channelContent__label _icon-arrow-right"},"Телеметр",-1))),$=[A],I={class:"ChannelInfo_channelContent__content"},z={class:"ChannelInfo_channelContent__data"},F=r((()=>(0,a._)("span",{class:"ChannelInfo_channelContent__placeholder"},"Охваты",-1))),T={class:"ChannelInfo_channelContent__text"},M={class:"ChannelInfo_channelContent__data"},S=r((()=>(0,a._)("span",{class:"ChannelInfo_channelContent__placeholder"},"ERR",-1))),G={class:"ChannelInfo_channelContent__text"},L={class:"ChannelInfo_channelContent__data"},U=r((()=>(0,a._)("span",{class:"ChannelInfo_channelContent__placeholder"},"CPM",-1))),K={class:"ChannelInfo_channelContent__text"},q={class:"react-tabs","data-rttabs":"true"},O={class:"Channel_channelSwiper__container container"},E={"data-simplebar":"init",style:{"max-width":"768px"}},N={class:"simplebar-wrapper",style:{margin:"0px"}},Y=r((()=>(0,a._)("div",{class:"simplebar-height-auto-observer-wrapper"},[(0,a._)("div",{class:"simplebar-height-auto-observer"})],-1))),Z={class:"simplebar-mask"},j={class:"simplebar-offset",style:{right:"0px",bottom:"0px"}},R={class:"simplebar-content-wrapper",tabindex:"0",role:"region","aria-label":"scrollable content",style:{height:"auto",overflow:"hidden"}},V={class:"simplebar-content",style:{padding:"0px"}},D={class:"Channel_channelSwiperTabs__list",role:"tablist"},H=r((()=>(0,a._)("div",{class:"simplebar-placeholder",style:{width:"auto",height:"29px"}},null,-1))),J=r((()=>(0,a._)("div",{class:"simplebar-track simplebar-horizontal",style:{visibility:"hidden"}},[(0,a._)("div",{class:"simplebar-scrollbar",style:{width:"0px",display:"none"}})],-1))),Q=r((()=>(0,a._)("div",{class:"simplebar-track simplebar-vertical",style:{visibility:"hidden"}},[(0,a._)("div",{class:"simplebar-scrollbar",style:{height:"0px",display:"none"}})],-1))),X={class:"container"},ee={class:"",role:"tabpanel",id:"panel:r1:0","aria-labelledby":"tab:r1:0"},te={class:"GenderCount_gender"},ne={class:"GenderCount_gender__body"},ae={class:"GenderCount_gender__item"},le={class:"GenderCount_gender__title"},ie={class:"GenderCount_gender__statusbar"},re={class:"GenderCount_gender__item"},se={class:"GenderCount_gender__title"},ce={class:"GenderCount_gender__statusbar"},oe={class:"",role:"tabpanel",id:"panel:r5:2","aria-labelledby":"tab:r5:2"},_e={class:"ProgressBars_location__YHytS"},he={class:"ProgressBars_location__body__-aPT7"},de={class:"ProgressBars_location__item__MEYqK"},ue={class:"ProgressBars_location__title__OzI8F"},pe={class:"ProgressBars_location__statusbar__58zTm"},ve={class:"ProgressBars_location__item__MEYqK"},me={class:"ProgressBars_location__title__OzI8F"},be={class:"ProgressBars_location__statusbar__58zTm"},ye={class:"ProgressBars_location__item__MEYqK"},fe={class:"ProgressBars_location__title__OzI8F"},ge={class:"ProgressBars_location__statusbar__58zTm"},we={class:"ProgressBars_location__item__MEYqK"},Ce={class:"ProgressBars_location__title__OzI8F"},xe={class:"ProgressBars_location__statusbar__58zTm"},We={class:"ProgressBars_location__item__MEYqK"},Pe={class:"ProgressBars_location__title__OzI8F"},ke={class:"ProgressBars_location__statusbar__58zTm"},Be={class:"ProgressBars_location__item__MEYqK"},Ae={class:"ProgressBars_location__title__OzI8F"},$e={class:"ProgressBars_location__statusbar__58zTm"},Ie={class:"top-tabpanel",role:"tabpanel",id:"panel:r0:1","aria-labelledby":"tab:r0:1"},ze=(0,a.uE)('<div class="Channel_channelContent__kcVW0 Channel_channelContent_margin__mroyE" data-v-c876b330><div class="container" data-v-c876b330><div data-v-c876b330><div class="ChannelPriceActions_channelPrice__uWyC4" data-v-c876b330><div class="ChannelPriceActions_channelPrice__content__fLClw" data-v-c876b330><h2 class="ChannelPriceActions_channelPrice__title__ym2M9" data-v-c876b330>Стоимость</h2><p class="ChannelPriceActions_channelPrice__text__Mbugf" data-v-c876b330>за один рекламный пост</p></div><div class="ChannelPriceActions_channelPrice__price__20drU" data-v-c876b330><span data-v-c876b330>100 000 руб.</span></div></div><div class="row" data-v-c876b330><div class="ChannelPriceActions_channelActions__body__7nfTf" data-v-c876b330><button type="button" class="ChannelPriceActions_channelActions__button__MzwI0" data-v-c876b330><span data-v-c876b330>Связаться</span></button></div><div class="ChannelPriceActions_channelActions__body__7nfTf" data-v-c876b330><button type="button" class="ChannelPriceActions_channelActions__button__MzwI0" data-v-c876b330><span data-v-c876b330>Поторговаться</span></button></div></div></div></div></div>',1),Fe=[ze];function Te(e,t,n,r,k,A){const ze=(0,a.up)("InstagramLoader"),Te=(0,a.up)("RouterLink");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("div",s,[(0,a.Wm)(ze,{class:"preloader",ref:"preloader",viewBox:"0 0 400 250"},null,512),(0,a.Wm)(ze,{class:"preloader",ref:"preloader",viewBox:"0 0 400 250"},null,512),(0,a.Wm)(ze,{class:"preloader",ref:"preloader",viewBox:"0 0 400 250"},null,512)]),(0,a._)("div",c,[(0,a._)("div",o,[(0,a._)("div",_,[(0,a._)("div",h,[(0,a._)("div",d,[(0,a._)("div",null,[(0,a.Wm)(Te,{type:"button",class:"Channel_channelProfile__backIcon _icon-angle-left",to:"/"}),u]),(0,a._)("button",p,[(0,a._)("img",{src:`/colorsserver/public/pics/${k.channel.preview}`,alt:""},null,8,v)]),(0,a._)("button",{type:"button",class:(0,l.C_)(["Channel_channelProfile__icon _icon-bookmark",k.channel.is_favorite?"Channel_channelProfile__icon_active":""]),onClick:t[0]||(t[0]=(...e)=>A.toggleFavorite&&A.toggleFavorite(...e))},null,2)]),(0,a._)("div",m,[(0,a._)("h1",b,(0,l.zw)(k.channel.title),1),(0,a._)("div",y,(0,l.zw)(k.channel.participants_count),1),(0,a._)("p",f,(0,l.zw)(k.channel.description),1)]),(0,a._)("div",g,[(0,a._)("ul",w,[(0,a._)("li",{class:(0,l.C_)(["Channel_channelProfile__item",[k.infoActive?"Channel_channelProfile__item_active":""]]),role:"tab",id:"tab:r0:0","aria-selected":"true","aria-disabled":"false","aria-controls":"panel:r0:0",tabindex:"0","data-rttab":"true",onClick:t[1]||(t[1]=e=>k.infoActive=!0)}," Информация ",2),(0,a._)("li",{class:(0,l.C_)(["Channel_channelProfile__item",[k.infoActive?"":"Channel_channelProfile__item_active"]]),role:"tab",id:"tab:r0:1","aria-selected":"false","aria-disabled":"false","aria-controls":"panel:r0:1","data-rttab":"true",onClick:t[2]||(t[2]=e=>k.infoActive=!1)}," Стоимость ",2)])])])]),(0,a.wy)((0,a._)("div",C,[(0,a._)("div",x,[(0,a._)("div",W,[(0,a._)("div",null,[(0,a._)("div",P,[(0,a._)("button",{type:"button",class:"ChannelInfo_channelContent__action",onClick:t[3]||(t[3]=e=>A.openLink(k.channel.tgstat_link))},B),(0,a._)("button",{type:"button",class:"ChannelInfo_channelContent__action",onClick:t[4]||(t[4]=e=>A.openLink(k.channel.telemetr_link))},$)]),(0,a._)("div",I,[(0,a._)("div",z,[F,(0,a._)("p",T,(0,l.zw)(A.formatThousands(k.channel.post_reach)),1)]),(0,a._)("div",M,[S,(0,a._)("p",G,(0,l.zw)(k.channel.err),1)]),(0,a._)("div",L,[U,(0,a._)("p",K,(0,l.zw)(A.formatThousands(k.channel.cpm)),1)])])])])]),(0,a._)("div",null,[(0,a._)("div",q,[(0,a._)("div",O,[(0,a._)("div",null,[(0,a._)("div",E,[(0,a._)("div",N,[Y,(0,a._)("div",Z,[(0,a._)("div",j,[(0,a._)("div",R,[(0,a._)("div",V,[(0,a._)("ul",D,[(0,a._)("li",{class:(0,l.C_)(["Channel_channelSwiperTabs__item",[k.sexActive?"Channel_channelSwiperTabs__item_active":""]]),role:"tab",id:"tab:r1:0","aria-selected":"true","aria-disabled":"false","aria-controls":"panel:r1:0",tabindex:"0","data-rttab":"true",onClick:t[5]||(t[5]=e=>k.sexActive=!0)}," Пол ",2),(0,a._)("li",{class:(0,l.C_)(["Channel_channelSwiperTabs__item",[k.sexActive?"":"Channel_channelSwiperTabs__item_active"]]),role:"tab",id:"tab:r1:2","aria-selected":"false","aria-disabled":"false","aria-controls":"panel:r1:2","data-rttab":"true",onClick:t[6]||(t[6]=e=>k.sexActive=!1)}," Возраст ",2)])])])])]),H]),J,Q])])]),(0,a._)("div",null,[(0,a._)("div",X,[(0,a.wy)((0,a._)("div",ee,[(0,a._)("div",te,[(0,a._)("div",ne,[(0,a._)("div",ae,[(0,a._)("h2",le,[(0,a.Uk)(" Мужской "),(0,a._)("span",null,(0,l.zw)(`${k.channel.man_percent}%`),1)]),(0,a._)("div",ie,[(0,a._)("span",{style:(0,l.j5)([{width:`${k.channel.man_percent}%`},{"background-color":"rgb(13, 86, 225)"}])},null,4)])]),(0,a._)("div",re,[(0,a._)("h2",se,[(0,a.Uk)(" Женский "),(0,a._)("span",null,(0,l.zw)(100-k.channel.man_percent+"%"),1)]),(0,a._)("div",ce,[(0,a._)("span",{style:(0,l.j5)([{width:100-k.channel.man_percent+"%"},{"background-color":"rgb(37, 252, 213)"}])},null,4)])])])])],512),[[i.F8,k.sexActive]]),(0,a.wy)((0,a._)("div",oe,[(0,a._)("div",_e,[(0,a._)("div",he,[(0,a.wy)((0,a._)("div",de,[(0,a._)("h2",ue,[(0,a.Uk)("До 18 лет "),(0,a._)("span",null,(0,l.zw)(`${k.channel.age.l18}%`),1)]),(0,a._)("div",pe,[(0,a._)("span",{style:(0,l.j5)({width:`${k.channel.age.l18}%`})},null,4)])],512),[[i.F8,k.channel.age.l18>0]]),(0,a.wy)((0,a._)("div",ve,[(0,a._)("h2",me,[(0,a.Uk)("18-24 "),(0,a._)("span",null,(0,l.zw)(`${k.channel.age.l24}%`),1)]),(0,a._)("div",be,[(0,a._)("span",{style:(0,l.j5)({width:`${k.channel.age.l24}%`})},null,4)])],512),[[i.F8,k.channel.age.l24>0]]),(0,a.wy)((0,a._)("div",ye,[(0,a._)("h2",fe,[(0,a.Uk)("25-34 "),(0,a._)("span",null,(0,l.zw)(`${k.channel.age.l34}%`),1)]),(0,a._)("div",ge,[(0,a._)("span",{style:(0,l.j5)({width:`${k.channel.age.l34}%`})},null,4)])],512),[[i.F8,k.channel.age.l34>0]]),(0,a.wy)((0,a._)("div",we,[(0,a._)("h2",Ce,[(0,a.Uk)("35-44 "),(0,a._)("span",null,(0,l.zw)(`${k.channel.age.l44}%`),1)]),(0,a._)("div",xe,[(0,a._)("span",{style:(0,l.j5)({width:`${k.channel.age.l44}%`})},null,4)])],512),[[i.F8,k.channel.age.l44>0]]),(0,a.wy)((0,a._)("div",We,[(0,a._)("h2",Pe,[(0,a.Uk)("45-54 "),(0,a._)("span",null,(0,l.zw)(`${k.channel.age.l54}%`),1)]),(0,a._)("div",ke,[(0,a._)("span",{style:(0,l.j5)({width:`${k.channel.age.l54}%`})},null,4)])],512),[[i.F8,k.channel.age.l54>0]]),(0,a.wy)((0,a._)("div",Be,[(0,a._)("h2",Ae,[(0,a.Uk)("55 лет и старше "),(0,a._)("span",null,(0,l.zw)(`${k.channel.age.l100}%`),1)]),(0,a._)("div",$e,[(0,a._)("span",{style:(0,l.j5)({width:`${k.channel.age.l100}%`})},null,4)])],512),[[i.F8,k.channel.age.l100>0]])])])],512),[[i.F8,!k.sexActive]])])])])])],512),[[i.F8,k.infoActive]]),(0,a.wy)((0,a._)("div",Ie,Fe,512),[[i.F8,!k.infoActive]])])])],64)}var Me=n(7123),Se=n(3089),Ge={components:{InstagramLoader:Se.z9},data(){return{infoActive:!0,sexActive:!0,channel:{}}},watch:{},async beforeMount(){window.Telegram?.WebApp.BackButton.onClick(this.routeBack),window.Telegram?.WebApp.BackButton.show(),this.channel=await this.getChannel(this.$route.params.channelId)},async mounted(){this.updatePage(300)},async beforeUnmount(){window.Telegram?.WebApp.MainButton.offClick(this.routeToBasket),window.Telegram?.WebApp.MainButton.hide(),window.Telegram?.WebApp.BackButton.offClick(this.routeBack),window.Telegram?.WebApp.BackButton.hide()},methods:{routeBack(){this.$router.go(-1)},async updatePage(e){this.$refs["channel-page"]?.classList.add("hidden"),document.body.classList.add("stop-scrolling"),setTimeout((()=>{const e=document.getElementsByClassName("preloaders_block");console.log(e);for(let t of e)t.classList.add("hidden");this.$refs["channel-page"]?.classList.remove("hidden"),document.body.classList.remove("stop-scrolling")}),e)},formatThousands(e){return e>=1e3?+(e/1e3).toFixed(0)+"K":e},openLink(e){window.open(e,"_blank")},toggleFavorite(){this.channel.is_favorite?this.dropFavorite():this.addFavorite()},addFavorite(){this.$store.state.myApi.post(this.$store.state.restAddr+"/favorites",{channel_id:this.$route.params.channelId,user_id:this.$store.state.userId}).then((async e=>{this.channel.is_favorite=!0})).catch((e=>{alert("Эта позиция уже добавлена в корзину")}))},async dropFavorite(){this.$store.state.myApi.delete(this.$store.state.restAddr+"/favorites",{data:{user_id:this.$store.state.userId,channel_id:this.$route.params.channelId}}).then((async e=>{this.channel.is_favorite=!1})).catch((e=>{Me.Z.$emit("noresponse",e)}))},async getChannel(e){const t=await this.$store.state.myApi.get(this.$store.state.restAddr+"/items",{params:{id:e,user_id:this.$store.state.userId}}).then((e=>e.data[0])).catch((e=>{Me.Z.$emit("noresponse",e)}));return t}}},Le=n(89);const Ue=(0,Le.Z)(Ge,[["render",Te],["__scopeId","data-v-c876b330"]]);var Ke=Ue}}]);
//# sourceMappingURL=857.2e1dfb1f.js.map