"use strict";(self["webpackChunk_coreui_coreui_free_vue_admin_template"]=self["webpackChunk_coreui_coreui_free_vue_admin_template"]||[]).push([[996],{4996:function(e,t,a){a.r(t),a.d(t,{default:function(){return x}});var s=a(3396),i=a(9242),r=a(7139);const o=(0,s._)("h1",null,"Оформление заказа",-1),l={class:"order-block"},n=["innerHTML"],d={class:"delivery"},c=(0,s._)("h2",null,"Способ доставки",-1),p={class:"select-group"},u=["id","value"],m=["for","onClick"],h=(0,s._)("h2",null,"Получатель",-1),y={class:"input-group"},_={class:"delivery-time"},k=(0,s._)("h2",null,"Время доставки",-1),b=(0,s._)("h2",null,"Промокод",-1),w={class:"input-group one-line"},g=(0,s._)("h2",{class:"total"},"Итого",-1),D={class:"pricing",hidden:""},v={key:1,class:"pricing"},T={class:"pricing"};function P(e,t,a,P,A,$){return(0,s.wg)(),(0,s.iD)(s.HY,null,[o,(0,s._)("div",l,[(0,s._)("button",{class:"",onClick:t[0]||(t[0]=(...e)=>$.order&&$.order(...e))},"Оформить заказ"),(0,s._)("div",{innerHTML:A.orderText},null,8,n),(0,s.kq)("",!0),(0,s._)("div",d,[c,(0,s._)("div",p,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(A.deliveryMethods,(e=>((0,s.wg)(),(0,s.iD)("div",{key:e},[(0,s.wy)((0,s._)("input",{type:"radio",id:e,value:e,"onUpdate:modelValue":t[1]||(t[1]=e=>A.selected_dm=e),onChange:t[2]||(t[2]=(...e)=>$.getDeliveryPrice&&$.getDeliveryPrice(...e))},null,40,u),[[i.G2,A.selected_dm]]),(0,s._)("label",{for:e,onClick:t=>{A.selected_dm=e,$.getDeliveryPrice()}},(0,r.zw)(e),9,m)])))),128))])]),h,(0,s._)("div",y,[(0,s.wy)((0,s._)("input",{type:"text",id:"name",name:"name",placeholder:"Имя","onUpdate:modelValue":t[3]||(t[3]=e=>A.basketData.name=e)},null,512),[[i.nr,A.basketData.name]]),(0,s.wy)((0,s._)("input",{type:"text",id:"surname",name:"surname",placeholder:"Фамилия","onUpdate:modelValue":t[4]||(t[4]=e=>A.basketData.surname=e)},null,512),[[i.nr,A.basketData.surname]]),(0,s.wy)((0,s._)("input",{type:"text",id:"patronymic",name:"patronymic",placeholder:"Отчество","onUpdate:modelValue":t[5]||(t[5]=e=>A.basketData.patronymic=e)},null,512),[[i.nr,A.basketData.patronymic]]),(0,s.wy)((0,s._)("input",{type:"tel",id:"phone",name:"phone",placeholder:"Телефон","onUpdate:modelValue":t[6]||(t[6]=e=>A.basketData.phone=e)},null,512),[[i.nr,A.basketData.phone]]),(0,s.wy)((0,s._)("input",{type:"text",id:"address",name:"address",placeholder:"Адрес доставки","onUpdate:modelValue":t[7]||(t[7]=e=>A.basketData.address=e),onInput:t[8]||(t[8]=(...e)=>$.getDeliveryPrice&&$.getDeliveryPrice(...e))},null,544),[[i.nr,A.basketData.address]]),(0,s.wy)((0,s._)("input",{type:"number",id:"text",pattern:"[0-9]+",name:"postal code",placeholder:"Почтовый индекс","onUpdate:modelValue":t[9]||(t[9]=e=>A.basketData.postal_code=e),onInput:t[10]||(t[10]=(...e)=>$.getDeliveryPricePostal&&$.getDeliveryPricePostal(...e))},null,544),[[i.nr,A.basketData.postal_code,void 0,{number:!0}]])]),(0,s.wy)((0,s._)("div",_,[k,(0,s._)("span",null,(0,r.zw)(A.deliveryTime)+" дней",1)],512),[[i.F8,A.deliveryTime]]),b,(0,s._)("div",w,[(0,s.wy)((0,s._)("input",{type:"text",id:"name",name:"name",class:"form-control",placeholder:"Введите промокод","onUpdate:modelValue":t[11]||(t[11]=e=>A.basketData.promo_code=e)},null,512),[[i.nr,A.basketData.promo_code]]),(0,s._)("button",{class:"button-append",type:"button",onClick:t[12]||(t[12]=(...e)=>$.getPromoSale&&$.getPromoSale(...e))},"Применить")]),g,(0,s._)("div",D,[(0,s.Uk)("Стоимость доставки"),(0,s._)("span",null,(0,r.zw)(A.deliveryPrice?`${A.deliveryPrice} ₽`:"Не определена"),1)]),A.sale.sum>0?((0,s.wg)(),(0,s.iD)("div",v,[(0,s.Uk)("Скидка"),(0,s._)("span",null,(0,r.zw)("money"===A.sale.type?`${A.sale.sum} ₽`:`${A.sale.sum} %`),1)])):(0,s.kq)("",!0),(0,s._)("div",T,[(0,s.Uk)("К оплате"),(0,s._)("span",null,(0,r.zw)($.totalSum)+" ₽",1)])])],64)}var A=a(7123),$=a(3089),f=(a(6797),{components:{InstagramLoader:$.z9},data(){return{basketData:{},paymentOptions:["yookassa"],selected_po:"yookassa",deliveryMethods:["Я. Доставка","CДЭК","Курьер","Почта РФ"],selected_dm:"CДЭК",deliveryPrice:null,deliveryTime:null,sale:{sum:0},orderText:null}},watch:{},async beforeMount(){window.Telegram?.WebApp.BackButton.onClick(this.routeBack),window.Telegram?.WebApp.BackButton.show(),window.Telegram?.WebApp.MainButton.onClick(this.order),window.Telegram?.WebApp.MainButton.enable(),window.Telegram?.WebApp.MainButton.show(),window.Telegram?.WebApp.MainButton.setText("Заказ подтверждаю"),this.orderText=await this.getOrderText(),this.basketData=await this.getBasketData(),await this.getDeliveryPrice()},async beforeUnmount(){window.Telegram?.WebApp.MainButton.offClick(this.order),window.Telegram?.WebApp.MainButton.hide(),window.Telegram?.WebApp.BackButton.offClick(this.routeBack),window.Telegram?.WebApp.BackButton.hide()},methods:{order(){if(!this.basketData.address||!this.basketData.phone||!this.basketData.name||!this.basketData.surname||!this.basketData.patronymic||!this.basketData.postal_code)return alert("Пожалуйста, заполните все поля");this.$store.state.myApi.post(this.$store.state.restAddr+"/orders",{user_id:this.$store.state.userId,address:this.basketData.address,selected_dm:this.selected_dm,selected_po:this.selected_po,phone:this.basketData.phone,name:this.basketData.name,surname:this.basketData.surname,postal_code:this.basketData.postal_code,patronymic:this.basketData.patronymic,promo_code:this.sale.code,delivery_price:0,delivery_time:this.deliveryTime,total:this.totalSum}).then((async e=>{window.Telegram?.WebApp.disableClosingConfirmation(),window.Telegram?.WebApp.close()})).catch((e=>{A.Z.$emit("noresponse",e)}))},async getDeliveryPrice(){const e=await this.$store.state.myApi.get(this.$store.state.restAddr+"/delivery_price",{params:{operator:this.selected_dm,address:this.basketData.address,count:this.basketData.total_count,postal_code:this.basketData.postal_code}}).then((e=>{this.deliveryPrice=e.data?.price??null,this.deliveryTime=e.data?.time??null})).catch((e=>{console.log(e),this.deliveryPrice=null,this.deliveryTime=null}));return e??{}},getDeliveryPricePostal(){[0,6].includes(this.basketData.postal_code?.toString()?.length??0)?this.getDeliveryPrice():(this.deliveryPrice=null,this.deliveryTime=null)},routeBack(){this.$router.go(-1)},async getBasketData(){const e=await this.$store.state.myApi.get(this.$store.state.restAddr+"/basket_data",{params:{user_id:this.$store.state.userId}}).then((e=>e.data)).catch((e=>{A.Z.$emit("noresponse",e)}));return e??{}},async getPromoSale(){const e=await this.$store.state.myApi.get(this.$store.state.restAddr+"/promos",{params:{code:this.basketData.promo_code,user_id:this.$store.state.userId}}).then((e=>{const t=e.data;return alert(`Промокод на ${t.sum} ${"money"===t.type?"рублей":"%"} успешно активирован`),this.sale=e.data??{sum:0}})).catch((e=>{this.sale={sum:0},alert("Промокод недействителен")}));return e??{}},async getOrderText(){return await this.$store.state.myApi.get(this.$store.state.restAddr+"/statics",{perPage:0,page:0}).then((e=>e.data?.[0]?.order)).catch((e=>{A.Z.$emit("noresponse",e)}))}},computed:{totalSum(){const e=+("money"===this.sale.type?Math.max(this.basketData.total-this.sale.sum,0):(+(100-this.sale.sum)*this.basketData.total/100).toFixed(0));return e}}}),B=a(89);const C=(0,B.Z)(f,[["render",P]]);var x=C}}]);
//# sourceMappingURL=996.fa878ad2.js.map