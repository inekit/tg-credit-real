"use strict";(self["webpackChunk_coreui_coreui_free_vue_admin_template"]=self["webpackChunk_coreui_coreui_free_vue_admin_template"]||[]).push([[106],{3089:function(e,t,a){a.d(t,{z9:function(){return l}});var i=a(3396),r=function(){return Math.random().toString(36).substring(2)},n=(0,i.aZ)({name:"ContentLoader",props:{width:{type:[Number,String]},height:{type:[Number,String]},viewBox:{type:String},preserveAspectRatio:{type:String,default:"xMidYMid meet"},speed:{type:Number,default:2},baseUrl:{type:String,default:""},primaryColor:{type:String,default:"#f9f9f9"},secondaryColor:{type:String,default:"#ecebeb"},primaryOpacity:{type:Number,default:1},secondaryOpacity:{type:Number,default:1},uniqueKey:{type:String},animate:{type:Boolean,default:!0}},setup:function(e){var t=(0,i.Fl)((function(){return e.uniqueKey?"".concat(e.uniqueKey,"-idClip"):r()})),a=(0,i.Fl)((function(){return e.uniqueKey?"".concat(e.uniqueKey,"-idGradient"):r()})),n=(0,i.Fl)((function(){var t;return null!==(t=e.width)&&void 0!==t?t:400})),l=(0,i.Fl)((function(){var t;return null!==(t=e.height)&&void 0!==t?t:130})),s=(0,i.Fl)((function(){var t;return null!==(t=e.viewBox)&&void 0!==t?t:"0 0 ".concat(n.value," ").concat(l.value)}));return{idClip:t,idGradient:a,computedViewBox:s}},render:function(){return(0,i.Wm)("svg",{width:this.width,height:this.height,viewBox:this.computedViewBox,version:"1.1",preserveAspectRatio:this.preserveAspectRatio},[(0,i.Wm)("rect",{style:{fill:"url(".concat(this.baseUrl,"#").concat(this.idGradient,")")},"clip-path":"url(".concat(this.baseUrl,"#").concat(this.idClip,")"),x:"0",y:"0",width:"100%",height:"100%"},null),(0,i.Wm)("defs",null,[(0,i.Wm)("clipPath",{id:this.idClip},[this.$slots["default"]?this.$slots["default"]():(0,i.Wm)("rect",{x:"0",y:"0",rx:"5",ry:"5",width:"100%",height:"100%"},null)]),(0,i.Wm)("linearGradient",{id:this.idGradient},[(0,i.Wm)("stop",{offset:"0%","stop-color":this.primaryColor,"stop-opacity":this.primaryOpacity},[this.animate?(0,i.Wm)("animate",{attributeName:"offset",values:"-2; 1",dur:"".concat(this.speed,"s"),repeatCount:"indefinite"},null):null]),(0,i.Wm)("stop",{offset:"50%","stop-color":this.secondaryColor,"stop-opacity":this.secondaryOpacity},[this.animate?(0,i.Wm)("animate",{attributeName:"offset",values:"-1.5; 1.5",dur:"".concat(this.speed,"s"),repeatCount:"indefinite"},null):null]),(0,i.Wm)("stop",{offset:"100%","stop-color":this.primaryColor,"stop-opacity":this.primaryOpacity},[this.animate?(0,i.Wm)("animate",{attributeName:"offset",values:"-1; 2",dur:"".concat(this.speed,"s"),repeatCount:"indefinite"},null):null])])])])}}),l=((0,i.aZ)((function(e,t){var a=t.attrs;return function(){return(0,i.Wm)(n,a,{default:function(){return[(0,i.Wm)("circle",{cx:"10",cy:"20",r:"8"},null),(0,i.Wm)("rect",{x:"25",y:"15",rx:"5",ry:"5",width:"220",height:"10"},null),(0,i.Wm)("circle",{cx:"10",cy:"50",r:"8"},null),(0,i.Wm)("rect",{x:"25",y:"45",rx:"5",ry:"5",width:"220",height:"10"},null),(0,i.Wm)("circle",{cx:"10",cy:"80",r:"8"},null),(0,i.Wm)("rect",{x:"25",y:"75",rx:"5",ry:"5",width:"220",height:"10"},null),(0,i.Wm)("circle",{cx:"10",cy:"110",r:"8"},null),(0,i.Wm)("rect",{x:"25",y:"105",rx:"5",ry:"5",width:"220",height:"10"},null)]}})}})),(0,i.aZ)((function(e,t){var a=t.attrs;return function(){return(0,i.Wm)(n,a,{default:function(){return[(0,i.Wm)("rect",{x:"0",y:"0",rx:"3",ry:"3",width:"70",height:"10"},null),(0,i.Wm)("rect",{x:"80",y:"0",rx:"3",ry:"3",width:"100",height:"10"},null),(0,i.Wm)("rect",{x:"190",y:"0",rx:"3",ry:"3",width:"10",height:"10"},null),(0,i.Wm)("rect",{x:"15",y:"20",rx:"3",ry:"3",width:"130",height:"10"},null),(0,i.Wm)("rect",{x:"155",y:"20",rx:"3",ry:"3",width:"130",height:"10"},null),(0,i.Wm)("rect",{x:"15",y:"40",rx:"3",ry:"3",width:"90",height:"10"},null),(0,i.Wm)("rect",{x:"115",y:"40",rx:"3",ry:"3",width:"60",height:"10"},null),(0,i.Wm)("rect",{x:"185",y:"40",rx:"3",ry:"3",width:"60",height:"10"},null),(0,i.Wm)("rect",{x:"0",y:"60",rx:"3",ry:"3",width:"30",height:"10"},null)]}})}})),(0,i.aZ)((function(e,t){var a=t.attrs;return function(){return(0,i.Wm)(n,a,{default:function(){return[(0,i.Wm)("rect",{x:"70",y:"15",rx:"4",ry:"4",width:"117",height:"6.4"},null),(0,i.Wm)("rect",{x:"70",y:"35",rx:"3",ry:"3",width:"85",height:"6.4"},null),(0,i.Wm)("rect",{x:"0",y:"80",rx:"3",ry:"3",width:"350",height:"6.4"},null),(0,i.Wm)("rect",{x:"0",y:"100",rx:"3",ry:"3",width:"380",height:"6.4"},null),(0,i.Wm)("rect",{x:"0",y:"120",rx:"3",ry:"3",width:"201",height:"6.4"},null),(0,i.Wm)("circle",{cx:"30",cy:"30",r:"30"},null)]}})}})),(0,i.aZ)((function(e,t){var a=t.attrs;return function(){return(0,i.Wm)(n,a,{default:function(){return[(0,i.Wm)("rect",{x:"0",y:"0",rx:"3",ry:"3",width:"250",height:"10"},null),(0,i.Wm)("rect",{x:"20",y:"20",rx:"3",ry:"3",width:"220",height:"10"},null),(0,i.Wm)("rect",{x:"20",y:"40",rx:"3",ry:"3",width:"170",height:"10"},null),(0,i.Wm)("rect",{x:"0",y:"60",rx:"3",ry:"3",width:"250",height:"10"},null),(0,i.Wm)("rect",{x:"20",y:"80",rx:"3",ry:"3",width:"200",height:"10"},null),(0,i.Wm)("rect",{x:"20",y:"100",rx:"3",ry:"3",width:"80",height:"10"},null)]}})}})),(0,i.aZ)((function(e,t){var a=t.attrs;return function(){return(0,i.Wm)(n,(0,i.dG)(a,{viewBox:"0 0 400 480"}),{default:function(){return[(0,i.Wm)("circle",{cx:"30",cy:"30",r:"30"},null),(0,i.Wm)("rect",{x:"75",y:"13",rx:"4",ry:"4",width:"100",height:"13"},null),(0,i.Wm)("rect",{x:"75",y:"37",rx:"4",ry:"4",width:"50",height:"8"},null),(0,i.Wm)("rect",{x:"0",y:"70",rx:"5",ry:"5",width:"400",height:"400"},null)]}})}})))},7106:function(e,t,a){a.r(t),a.d(t,{default:function(){return z}});var i=a(3396),r=a(9242),n=a(7139);const l=(0,i._)("h1",null,"Оформление заказа",-1),s={class:"order-block"},o={class:"delivery"},c=(0,i._)("h2",null,"Способ доставки",-1),d={class:"select-group"},u=["id","value"],h=["for","onClick"],p=["onClick"],m=["src"],y={class:"payment"},g=(0,i._)("h2",null,"Способ оплаты",-1),w={class:"select-group"},_=["id","value"],v=["for","onClick"],x=(0,i._)("h2",null,"Получатель",-1),b={class:"input-group"},f=["placeholder"],k=(0,i._)("h2",null,"Комментарий к заказу",-1),D=(0,i._)("h2",null,"Промокод",-1),W={class:"input-group one-line"},P=(0,i._)("h2",{class:"total"},"Итого",-1),C={class:"pricing"},B={class:"pricing"},A={key:0,class:"pricing"},$={key:1,class:"pricing"},T={class:"pricing"};function S(e,t,S,U,M,V){return(0,i.wg)(),(0,i.iD)(i.HY,null,[l,(0,i._)("div",s,[(0,i._)("div",o,[c,(0,i._)("div",d,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(M.deliveryMethods,((e,l)=>((0,i.wg)(),(0,i.iD)("div",{key:e},[(0,i.wy)((0,i._)("input",{type:"radio",id:e,value:e,"onUpdate:modelValue":t[0]||(t[0]=e=>M.selected_dm=e),onChange:t[1]||(t[1]=(...e)=>V.getDeliveryPrice&&V.getDeliveryPrice(...e))},null,40,u),[[r.G2,M.selected_dm]]),(0,i._)("label",{for:e,onClick:t=>{M.selected_dm=e,V.getDeliveryPrice()}},(0,n.zw)(e),9,h),(0,i._)("div",{class:"method-description",onClick:e=>V.alertDescription(l)},[(0,i._)("img",{src:a(5514)},null,8,m)],8,p)])))),128))])]),(0,i._)("div",y,[g,(0,i._)("div",w,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(M.paymentOptions,(e=>((0,i.wg)(),(0,i.iD)("div",{key:e},[(0,i.wy)((0,i._)("input",{type:"radio",id:e,value:e,"onUpdate:modelValue":t[2]||(t[2]=e=>M.selected_po=e)},null,8,_),[[r.G2,M.selected_po]]),(0,i._)("label",{for:e,onClick:t=>M.selected_po=e},(0,n.zw)(e),9,v)])))),128))])]),x,(0,i._)("div",b,[(0,i.wy)((0,i._)("input",{type:"text",id:"name",name:"name",placeholder:"Имя","onUpdate:modelValue":t[3]||(t[3]=e=>M.basketData.name=e)},null,512),[[r.nr,M.basketData.name]]),(0,i.wy)((0,i._)("input",{type:"text",id:"surname",name:"surname",placeholder:"Фамилия","onUpdate:modelValue":t[4]||(t[4]=e=>M.basketData.surname=e)},null,512),[[r.nr,M.basketData.surname]]),(0,i.wy)((0,i._)("input",{type:"text",id:"patronymic",name:"patronymic",placeholder:"Отчество","onUpdate:modelValue":t[5]||(t[5]=e=>M.basketData.patronymic=e)},null,512),[[r.nr,M.basketData.patronymic]]),(0,i.wy)((0,i._)("input",{type:"tel",id:"phone",name:"phone",placeholder:"Телефон","onUpdate:modelValue":t[6]||(t[6]=e=>M.basketData.phone=e)},null,512),[[r.nr,M.basketData.phone]]),(0,i.wy)((0,i._)("input",{type:"text",id:"address",name:"address",placeholder:"До станции метро"===M.selected_dm?"Метро":"Адрес доставки","onUpdate:modelValue":t[7]||(t[7]=e=>M.basketData.address=e),onInput:t[8]||(t[8]=(...e)=>V.getDeliveryPrice&&V.getDeliveryPrice(...e))},null,40,f),[[r.nr,M.basketData.address]]),(0,i.wy)((0,i._)("input",{type:"number",id:"text",pattern:"[0-9]+",name:"postal code",placeholder:"Почтовый индекс","onUpdate:modelValue":t[9]||(t[9]=e=>M.basketData.postal_code=e),onInput:t[10]||(t[10]=(...e)=>V.getDeliveryPricePostal&&V.getDeliveryPricePostal(...e))},null,544),[[r.F8,"До станции метро"!==M.selected_dm],[r.nr,M.basketData.postal_code,void 0,{number:!0}]])]),k,(0,i.wy)((0,i._)("input",{type:"text",id:"comment",name:"comment",maxlength:"255",placeholder:"Комментарий","onUpdate:modelValue":t[11]||(t[11]=e=>M.basketData.comment=e)},null,512),[[r.nr,M.basketData.comment]]),D,(0,i._)("div",W,[(0,i.wy)((0,i._)("input",{type:"text",id:"name",name:"name",class:"form-control",placeholder:"Введите промокод","onUpdate:modelValue":t[12]||(t[12]=e=>M.basketData.promo_code=e)},null,512),[[r.nr,M.basketData.promo_code]]),(0,i._)("button",{class:"button-append",type:"button",onClick:t[13]||(t[13]=(...e)=>V.getPromoSale&&V.getPromoSale(...e))},"Применить")]),P,(0,i._)("div",C,[(0,i.Uk)("Стоимость доставки"),(0,i._)("span",null,(0,n.zw)(null!==M.deliveryPrice?`${M.deliveryPrice} ₽`:"Не определена"),1)]),(0,i._)("div",B,[(0,i.Uk)("Стоимость товаров"),(0,i._)("span",null,(0,n.zw)(M.basketData?.total)+" ₽",1)]),M.basketData?.total!==M.basketData?.sale_total?((0,i.wg)(),(0,i.iD)("div",A,[(0,i.Uk)("Скидка за опт"),(0,i._)("span",null,(0,n.zw)(M.basketData?.total-M.basketData?.sale_total)+" ₽",1)])):(0,i.kq)("",!0),M.sale.sum>0?((0,i.wg)(),(0,i.iD)("div",$,[(0,i.Uk)("Скидка по промокоду"),(0,i._)("span",null,(0,n.zw)("money"===M.sale.type?`${M.sale.sum} ₽`:`${M.sale.sum}\n                % `),1)])):(0,i.kq)("",!0),(0,i._)("div",T,[(0,i.Uk)("К оплате"),(0,i._)("span",null,(0,n.zw)(V.totalSum)+" ₽",1)])])],64)}var U=a(7123),M=a(3089),V={components:{InstagramLoader:M.z9},data(){return{basketData:{},paymentOptions:["Перевод"],selected_po:"Перевод",deliveryMethods:["Почта России","Яндекс Доставка до пункта выдачи","До станции метро","Внутри МКАД","МО за МКАД"],methodsDescriptions:["Доставка по россии курьерской службой Почта России","Яндекс Доставка до пункта выдачи","Доставка курьером по Москве. Встреча у станции метро.","Доставка курьером по Москве. Встреча по вашему адресу","Доставка курьером по Московской области. \nВстреча по вашему адресу, цена расчитывается исходя из удаленности от МКАД.\nПри заказе этим способом с вами свяжется менеджер для уточнения цены"],selected_dm:"Почта России",deliveryPrice:0,deliveryTime:null,sale:{sum:0},orderText:null}},watch:{selected_dm(e){"Почта России"===e||"Яндекс Доставка"===e?(this.selected_po="Перевод",this.paymentOptions=["Перевод"]):this.paymentOptions=["Перевод","Наличные курьеру"]}},async beforeMount(){window.Telegram?.WebApp.BackButton.onClick(this.routeBack),window.Telegram?.WebApp.BackButton.show(),window.Telegram?.WebApp.MainButton.onClick(this.order),window.Telegram?.WebApp.MainButton.enable(),window.Telegram?.WebApp.MainButton.show(),window.Telegram?.WebApp.MainButton.setText("Заказ подтверждаю"),this.orderText=await this.getOrderText(),this.basketData=await this.getBasketData(),await this.getDeliveryPrice()},async beforeUnmount(){window.Telegram?.WebApp.MainButton.offClick(this.order),window.Telegram?.WebApp.MainButton.hide(),window.Telegram?.WebApp.BackButton.offClick(this.routeBack),window.Telegram?.WebApp.BackButton.hide()},methods:{alertDescription(e){alert(this.methodsDescriptions[e])},order(){if(!this.basketData.address||!this.basketData.phone||!this.basketData.name||!this.basketData.surname||!this.basketData.postal_code)return alert("Пожалуйста, заполните все поля");this.$store.state.myApi.post(this.$store.state.restAddr+"/orders",{user_id:this.$store.state.userId,address:this.basketData.address,selected_dm:this.selected_dm,selected_po:this.selected_po,phone:this.basketData.phone,name:this.basketData.name,surname:this.basketData.surname,postal_code:this.basketData.postal_code,patronymic:this.basketData.patronymic,promo_code:this.sale.code,delivery_price:this.deliveryPrice,delivery_time:this.deliveryTime,comment:this.basketData.comment,total:this.totalSum}).then((async e=>{window.Telegram?.WebApp.disableClosingConfirmation(),window.Telegram?.WebApp.close()})).catch((e=>{U.Z.$emit("noresponse",e)}))},async getDeliveryPrice(){switch(this.selected_dm){case"Метро":return this.deliveryPrice=this.totalSum>=5e3?0:200;case"До станции метро":return this.deliveryPrice=this.totalSum>=5e3?0:200;case"Внутри МКАД":return this.deliveryPrice=this.totalSum>=5e3?0:350;case"МО за МКАД":return this.deliveryPrice=this.totalSum>=7e3?0:null;case"Почта России":return this.deliveryPrice=400;case"Яндекс Доставка":return this.deliveryPrice=350;case"Яндекс Доставка до пункта выдачи":return this.deliveryPrice=350}const e=await this.$store.state.myApi.get(this.$store.state.restAddr+"/delivery_price",{params:{operator:this.selected_dm,address:this.basketData.address,count:this.basketData.total_count,postal_code:this.basketData.postal_code}}).then((e=>{this.deliveryPrice=e.data?.price??null,this.deliveryTime=e.data?.time??null})).catch((e=>{console.log(e),this.deliveryPrice=null,this.deliveryTime=null}));return e??{}},getDeliveryPricePostal(){[0,6].includes(this.basketData.postal_code?.toString()?.length??0)?this.getDeliveryPrice():(this.deliveryPrice=null,this.deliveryTime=null)},routeBack(){this.$router.go(-1)},async getBasketData(){const e=await this.$store.state.myApi.get(this.$store.state.restAddr+"/basket_data",{params:{user_id:this.$store.state.userId}}).then((e=>e.data)).catch((e=>{U.Z.$emit("noresponse",e)}));return e??{}},async getPromoSale(){const e=await this.$store.state.myApi.get(this.$store.state.restAddr+"/promos",{params:{code:this.basketData.promo_code,user_id:this.$store.state.userId}}).then((e=>{const t=e.data;return alert(`Промокод на ${t.sum} ${"money"===t.type?"рублей":"%"} успешно активирован`),this.sale=e.data??{sum:0}})).catch((e=>{this.sale={sum:0},alert("Промокод недействителен")}));return e??{}},async getOrderText(){return await this.$store.state.myApi.get(this.$store.state.restAddr+"/statics",{perPage:0,page:0}).then((e=>e.data?.[0]?.order)).catch((e=>{U.Z.$emit("noresponse",e)}))}},computed:{totalSum(){const e=+("money"===this.sale.type?Math.max(this.basketData.sale_total-this.sale.sum,0):(+(100-this.sale.sum)*this.basketData.sale_total/100).toFixed(0));return e+(+this.deliveryPrice??0)}}},O=a(89);const Z=(0,O.Z)(V,[["render",S]]);var z=Z},5514:function(e,t,a){e.exports=a.p+"img/help.b60565df.svg"}}]);
//# sourceMappingURL=106.1f1bf161.js.map