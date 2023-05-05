"use strict";(self["webpackChunk_coreui_coreui_free_vue_admin_template"]=self["webpackChunk_coreui_coreui_free_vue_admin_template"]||[]).push([[858],{2858:function(e,t,a){a.r(t),a.d(t,{default:function(){return W}});var s=a(3396),i=a(9242),r=a(7139);const l=(0,s._)("h1",null,"Оформление заказа",-1),o={class:"order-block"},n=["innerHTML"],d={class:"delivery"},c=(0,s._)("h2",null,"Способ доставки",-1),p={class:"select-group"},u=["id","value"],m=["for","onClick"],h={class:"payment"},y=(0,s._)("h2",null,"Способ оплаты",-1),_={class:"select-group"},k=["id","value"],b=["for","onClick"],w=(0,s._)("h2",null,"Получатель",-1),g={class:"input-group"},v=(0,s._)("h2",null,"Промокод",-1),D={class:"input-group one-line"},P=(0,s._)("h2",{class:"total"},"Итого",-1),T={class:"pricing"},f={key:1,class:"pricing"},A={class:"pricing"};function $(e,t,a,$,B,C){return(0,s.wg)(),(0,s.iD)(s.HY,null,[l,(0,s._)("div",o,[(0,s._)("button",{class:"",onClick:t[0]||(t[0]=(...e)=>C.order&&C.order(...e)),hidden:""},"Оформить заказ"),(0,s._)("div",{innerHTML:B.orderText},null,8,n),(0,s.kq)("",!0),(0,s._)("div",d,[c,(0,s._)("div",p,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(B.deliveryMethods,(e=>((0,s.wg)(),(0,s.iD)("div",{key:e},[(0,s.wy)((0,s._)("input",{type:"radio",id:e,value:e,"onUpdate:modelValue":t[1]||(t[1]=e=>B.selected_dm=e),onChange:t[2]||(t[2]=(...e)=>C.getDeliveryPrice&&C.getDeliveryPrice(...e))},null,40,u),[[i.G2,B.selected_dm]]),(0,s._)("label",{for:e,onClick:t=>{B.selected_dm=e,C.getDeliveryPrice()}},(0,r.zw)(e),9,m)])))),128))])]),(0,s._)("div",h,[y,(0,s._)("div",_,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(B.paymentOptions,(e=>((0,s.wg)(),(0,s.iD)("div",{key:e},[(0,s.wy)((0,s._)("input",{type:"radio",id:e,value:e,"onUpdate:modelValue":t[3]||(t[3]=e=>B.selected_po=e)},null,8,k),[[i.G2,B.selected_po]]),(0,s._)("label",{for:e,onClick:t=>B.selected_po=e},(0,r.zw)(e),9,b)])))),128))])]),w,(0,s._)("div",g,[(0,s.wy)((0,s._)("input",{type:"text",id:"name",name:"name",placeholder:"Имя","onUpdate:modelValue":t[4]||(t[4]=e=>B.basketData.name=e)},null,512),[[i.nr,B.basketData.name]]),(0,s.wy)((0,s._)("input",{type:"text",id:"surname",name:"surname",placeholder:"Фамилия","onUpdate:modelValue":t[5]||(t[5]=e=>B.basketData.surname=e)},null,512),[[i.nr,B.basketData.surname]]),(0,s.wy)((0,s._)("input",{type:"text",id:"patronymic",name:"patronymic",placeholder:"Отчество","onUpdate:modelValue":t[6]||(t[6]=e=>B.basketData.patronymic=e)},null,512),[[i.nr,B.basketData.patronymic]]),(0,s.wy)((0,s._)("input",{type:"tel",id:"phone",name:"phone",placeholder:"Телефон","onUpdate:modelValue":t[7]||(t[7]=e=>B.basketData.phone=e)},null,512),[[i.nr,B.basketData.phone]]),(0,s.wy)((0,s._)("input",{type:"text",id:"address",name:"address",placeholder:"Адрес доставки","onUpdate:modelValue":t[8]||(t[8]=e=>B.basketData.address=e),onInput:t[9]||(t[9]=(...e)=>C.getDeliveryPrice&&C.getDeliveryPrice(...e))},null,544),[[i.nr,B.basketData.address]]),(0,s.wy)((0,s._)("input",{type:"number",id:"text",pattern:"[0-9]+",name:"postal code",placeholder:"Почтовый индекс","onUpdate:modelValue":t[10]||(t[10]=e=>B.basketData.postal_code=e),onInput:t[11]||(t[11]=(...e)=>C.getDeliveryPricePostal&&C.getDeliveryPricePostal(...e))},null,544),[[i.nr,B.basketData.postal_code,void 0,{number:!0}]])]),v,(0,s._)("div",D,[(0,s.wy)((0,s._)("input",{type:"text",id:"name",name:"name",class:"form-control",placeholder:"Введите промокод","onUpdate:modelValue":t[12]||(t[12]=e=>B.basketData.promo_code=e)},null,512),[[i.nr,B.basketData.promo_code]]),(0,s._)("button",{class:"button-append",type:"button",onClick:t[13]||(t[13]=(...e)=>C.getPromoSale&&C.getPromoSale(...e))},"Применить")]),P,(0,s._)("div",T,[(0,s.Uk)("Стоимость доставки"),(0,s._)("span",null,(0,r.zw)(B.deliveryPrice?`${B.deliveryPrice} ₽`:"Не определена"),1)]),B.sale.sum>0?((0,s.wg)(),(0,s.iD)("div",f,[(0,s.Uk)("Скидка"),(0,s._)("span",null,(0,r.zw)("money"===B.sale.type?`${B.sale.sum} ₽`:`${B.sale.sum}\n                        % `),1)])):(0,s.kq)("",!0),(0,s._)("div",A,[(0,s.Uk)("К оплате"),(0,s._)("span",null,(0,r.zw)(C.totalSum)+" ₽",1)])])],64)}var B=a(7123),C=a(3089),x=(a(6797),{components:{InstagramLoader:C.z9},data(){return{basketData:{},paymentOptions:["Перевод"],selected_po:"Перевод",deliveryMethods:["CДЭК","Метро","Внутри МКАД","МО за МКАД"],selected_dm:"CДЭК",deliveryPrice:null,deliveryTime:null,sale:{sum:0},orderText:null}},watch:{selected_dm(e){"CДЭК"===e?(this.selected_po="Перевод",this.paymentOptions=["Перевод"]):this.paymentOptions=["Перевод","Наличные курьеру"]}},async beforeMount(){window.Telegram?.WebApp.BackButton.onClick(this.routeBack),window.Telegram?.WebApp.BackButton.show(),window.Telegram?.WebApp.MainButton.onClick(this.order),window.Telegram?.WebApp.MainButton.enable(),window.Telegram?.WebApp.MainButton.show(),window.Telegram?.WebApp.MainButton.setText("Заказ подтверждаю"),this.orderText=await this.getOrderText(),this.basketData=await this.getBasketData(),await this.getDeliveryPrice()},async beforeUnmount(){window.Telegram?.WebApp.MainButton.offClick(this.order),window.Telegram?.WebApp.MainButton.hide(),window.Telegram?.WebApp.BackButton.offClick(this.routeBack),window.Telegram?.WebApp.BackButton.hide()},methods:{order(){if(!this.basketData.address||!this.basketData.phone||!this.basketData.name||!this.basketData.surname||!this.basketData.patronymic||!this.basketData.postal_code)return alert("Пожалуйста, заполните все поля");this.$store.state.myApi.post(this.$store.state.restAddr+"/orders",{user_id:this.$store.state.userId,address:this.basketData.address,selected_dm:this.selected_dm,selected_po:this.selected_po,phone:this.basketData.phone,name:this.basketData.name,surname:this.basketData.surname,postal_code:this.basketData.postal_code,patronymic:this.basketData.patronymic,promo_code:this.sale.code,delivery_price:0,delivery_time:this.deliveryTime,total:this.totalSum}).then((async e=>{window.Telegram?.WebApp.disableClosingConfirmation(),window.Telegram?.WebApp.close()})).catch((e=>{B.Z.$emit("noresponse",e)}))},async getDeliveryPrice(){if("CДЭК"!==this.selected_dm)switch(this.selected_dm){case"Метро":return this.deliveryPrice=this.totalSum>=5e3?0:200;case"Внутри МКАД":return this.deliveryPrice=this.totalSum>=5e3?0:350;case"МО за МКАД":return this.deliveryPrice=this.totalSum>=7e3?0:null}const e=await this.$store.state.myApi.get(this.$store.state.restAddr+"/delivery_price",{params:{operator:this.selected_dm,address:this.basketData.address,count:this.basketData.total_count,postal_code:this.basketData.postal_code}}).then((e=>{this.deliveryPrice=e.data?.price??null,this.deliveryTime=e.data?.time??null})).catch((e=>{console.log(e),this.deliveryPrice=null,this.deliveryTime=null}));return e??{}},getDeliveryPricePostal(){[0,6].includes(this.basketData.postal_code?.toString()?.length??0)?this.getDeliveryPrice():(this.deliveryPrice=null,this.deliveryTime=null)},routeBack(){this.$router.go(-1)},async getBasketData(){const e=await this.$store.state.myApi.get(this.$store.state.restAddr+"/basket_data",{params:{user_id:this.$store.state.userId}}).then((e=>e.data)).catch((e=>{B.Z.$emit("noresponse",e)}));return e??{}},async getPromoSale(){const e=await this.$store.state.myApi.get(this.$store.state.restAddr+"/promos",{params:{code:this.basketData.promo_code,user_id:this.$store.state.userId}}).then((e=>{const t=e.data;return alert(`Промокод на ${t.sum} ${"money"===t.type?"рублей":"%"} успешно активирован`),this.sale=e.data??{sum:0}})).catch((e=>{this.sale={sum:0},alert("Промокод недействителен")}));return e??{}},async getOrderText(){return await this.$store.state.myApi.get(this.$store.state.restAddr+"/statics",{perPage:0,page:0}).then((e=>e.data?.[0]?.order)).catch((e=>{B.Z.$emit("noresponse",e)}))}},computed:{totalSum(){const e=+("money"===this.sale.type?Math.max(this.basketData.total-this.sale.sum,0):(+(100-this.sale.sum)*this.basketData.total/100).toFixed(0));return e}}}),U=a(89);const M=(0,U.Z)(x,[["render",$]]);var W=M}}]);
//# sourceMappingURL=858.9b9ff232.js.map