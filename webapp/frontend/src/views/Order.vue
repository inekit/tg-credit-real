<template>
    <h1>Оформление заказа</h1>
    <div class="order-block">
        <div v-html="orderText"></div>
        <div v-if="false">
            <p>Расчет доставки
                производится в ручную из-за индивидуальности
                заказов.</p>
            <p>Средняя стоимость доставки не превышает
                350р. </p>
            <p>После оплаты заказа, вы получите расчет стоимости
                доставки, и сможете оплатить ее при получении.</p>
            <p>Если Вы хотите, чтобы мы произвели расчет до оплаты заказа,
                напишите нам из главного меню по кнопке «Чат с нами»</p>
        </div>
        <div class="delivery">
            <h2>Способ доставки</h2>
            <div class="select-group">
                <div v-for="dm, i in                                                                           deliveryMethods                                                                          "
                    :key="dm">
                    <input type="radio" :id="dm" :value="dm" v-model="selected_dm" @change="getDeliveryPrice">
                    <label :for="dm" @click="selected_dm = dm; getDeliveryPrice()">{{ dm }}</label>
                    <div class="method-description" @click="alertDescription(i)"><img
                            :src="require('@/assets/img/help.svg')" /></div>
                </div>
            </div>
        </div>
        <div class="payment">
            <h2>Способ оплаты</h2>
            <div class="select-group">
                <div v-for="                                                                        po                                                                         in                                                                         paymentOptions                                                                          "
                    :key="po">
                    <input type="radio" :id="po" :value="po" v-model="selected_po">
                    <label :for="po" @click=" selected_po = po">{{ po }}</label>
                </div>
            </div>
        </div>
        <h2>Получатель</h2>
        <div class="input-group">
            <input type="text" id="name" name="name" placeholder="Имя" v-model="basketData.name">
            <input type="text" id="surname" name="surname" placeholder="Фамилия" v-model="basketData.surname">
            <input type="text" id="patronymic" name="patronymic" placeholder="Отчество" v-model="basketData.patronymic">
            <input type="tel" id="phone" name="phone" placeholder="Телефон" v-model="basketData.phone">
            <input type="text" id="address" name="address" placeholder="Адрес доставки" v-model="basketData.address"
                @input="getDeliveryPrice">
            <input type="number" id="text" pattern="[0-9]+" name="postal code" placeholder="Почтовый индекс"
                v-model.number="basketData.postal_code" @input="getDeliveryPricePostal">
        </div>
        <h2>Промокод</h2>
        <div class="input-group one-line">
            <input type="text" id="name" name="name" class="form-control" placeholder="Введите промокод"
                v-model="basketData.promo_code">
            <button class="button-append" type="button" @click="getPromoSale">Применить</button>
        </div>
        <h2 class="total">Итого</h2>
        <div class="pricing">Стоимость доставки<span>{{ deliveryPrice !== null ? `${deliveryPrice} ₽` : "Не определена"
        }}</span>
        </div>
        <div class="pricing">Стоимость товаров<span>{{ basketData?.total }} ₽</span>
        </div>
        <div class="pricing" v-if="sale.sum > 0">Скидка<span>{{ sale.type === 'money' ? `${sale.sum} ₽` : `${sale.sum}
                % `
        }}</span></div>
        <div class="pricing">К оплате<span>{{ totalSum }} ₽</span></div>
    </div>
</template>

<script>
import eventBus from '../eventBus'
import { InstagramLoader } from 'vue-content-loader'

//        <button class="" @click="order">Оформить заказ</button>

export default {
    components: { InstagramLoader },
    data() {
        return {
            basketData: {},
            paymentOptions: ["Перевод"],
            selected_po: "Перевод",
            deliveryMethods: ["CДЭК", "Яндекс Доставка до пункта выдачи", 'До станции метро', 'Внутри МКАД', 'МО за МКАД'],
            methodsDescriptions: [
                "Доставка по россии курьерской службой СДЭК",
                "Яндекс Доставка до пункта выдачи",
                "Доставка курьером по Москве. Встреча у станции метро.",
                "Доставка курьером по Москве. Встреча по вашему адресу",
                `Доставка курьером по Московской области. 
                Встреча по вашему адресу, цена расчитывается исходя из удаленности от МКАД.
                При заказе этим способом с вами свяжется менеджер для уточнения цены`],
            selected_dm: "CДЭК",
            deliveryPrice: 0,
            deliveryTime: null,
            sale: {
                sum: 0
            },
            orderText: null,
        }
    },
    watch: {
        selected_dm(to) {
            if (to === 'CДЭК' || to === "Яндекс Доставка") {
                this.selected_po = "Перевод";
                this.paymentOptions = ["Перевод"];
            } else this.paymentOptions = ["Перевод", "Наличные курьеру"];
        }
    },
    async beforeMount() {
        window.Telegram?.WebApp.BackButton.onClick(this.routeBack);
        window.Telegram?.WebApp.BackButton.show();

        window.Telegram?.WebApp.MainButton.onClick(this.order);
        window.Telegram?.WebApp.MainButton.enable();
        window.Telegram?.WebApp.MainButton.show();
        window.Telegram?.WebApp.MainButton.setText("Заказ подтверждаю");
        this.orderText = await this.getOrderText()
        this.basketData = await this.getBasketData()
        await this.getDeliveryPrice()


    },
    async beforeUnmount() {
        window.Telegram?.WebApp.MainButton.offClick(this.order);
        window.Telegram?.WebApp.MainButton.hide();
        window.Telegram?.WebApp.BackButton.offClick(this.routeBack);
        window.Telegram?.WebApp.BackButton.hide();
    },
    methods: {
        alertDescription(i) {
            alert(this.methodsDescriptions[i])
        },
        order() {
            if (!this.basketData.address || !this.basketData.phone ||
                !this.basketData.name || !this.basketData.surname //|| !this.basketData.patronymic
                || !this.basketData.postal_code)
                return alert("Пожалуйста, заполните все поля")
            //if (!this.deliveryPrice) return alert("Пожалуйста, укажите верные данные для доставки")

            this.$store.state.myApi
                .post(this.$store.state.restAddr + '/orders', {
                    user_id: this.$store.state.userId,
                    address: this.basketData.address,
                    selected_dm: this.selected_dm,
                    selected_po: this.selected_po,
                    phone: this.basketData.phone,
                    name: this.basketData.name,
                    surname: this.basketData.surname,
                    postal_code: this.basketData.postal_code,
                    patronymic: this.basketData.patronymic,
                    promo_code: this.sale.code,
                    delivery_price: this.deliveryPrice,
                    delivery_time: this.deliveryTime,
                    total: this.totalSum
                })
                .then(async (response) => {
                    window.Telegram?.WebApp.disableClosingConfirmation()
                    window.Telegram?.WebApp.close();
                })
                .catch(e => { eventBus.$emit('noresponse', e) })
        },
        async getDeliveryPrice() {
            //if (this.selected_dm !== "CДЭК") {
            switch (this.selected_dm) {
                case ('Метро'):
                    return this.deliveryPrice = this.totalSum >= 5000 ? 0 : 200;
                case ('До станции метро'):
                    return this.deliveryPrice = this.totalSum >= 5000 ? 0 : 200;
                case ('Внутри МКАД'):
                    return this.deliveryPrice = this.totalSum >= 5000 ? 0 : 350;
                case ('МО за МКАД'):
                    return this.deliveryPrice = this.totalSum >= 7000 ? 0 : null;
                case ('CДЭК'):
                    return this.deliveryPrice = 400;
                case ('Яндекс Доставка'):
                    return this.deliveryPrice = 350;
                case ('Яндекс Доставка до пункта выдачи'):
                    return this.deliveryPrice = 350;
            }



            const results = await this.$store.state.myApi.get(this.$store.state.restAddr + '/delivery_price', {
                params: {
                    operator: this.selected_dm,
                    address: this.basketData.address,
                    count: this.basketData.total_count,
                    postal_code: this.basketData.postal_code,
                }
            })
                .then(response => {
                    this.deliveryPrice = response.data?.price ?? null;
                    this.deliveryTime = response.data?.time ?? null;
                })
                .catch(e => { console.log(e); this.deliveryPrice = null; this.deliveryTime = null })

            return results ?? {}

        },
        getDeliveryPricePostal() {
            if ([0, 6].includes(this.basketData.postal_code?.toString()?.length ?? 0)) this.getDeliveryPrice()
            else { this.deliveryPrice = null; this.deliveryTime = null }
        },
        routeBack() {
            this.$router.go(-1)
        },
        async getBasketData() {
            const results = await this.$store.state.myApi.get(this.$store.state.restAddr + '/basket_data', {
                params: {
                    user_id: this.$store.state.userId,
                }
            })
                .then(response => {
                    return response.data;
                })
                .catch(e => { eventBus.$emit('noresponse', e) })

            return results ?? {}

        },
        async getPromoSale() {
            const results = await this.$store.state.myApi.get(this.$store.state.restAddr + '/promos', {
                params: {
                    code: this.basketData.promo_code,
                    user_id: this.$store.state.userId,

                }
            })
                .then(response => {
                    const sale = response.data
                    alert(`Промокод на ${sale.sum} ${sale.type === 'money' ? "рублей" : "%"} успешно активирован`)
                    return this.sale = response.data ?? { sum: 0 };
                })
                .catch(e => { this.sale = { sum: 0 }; alert("Промокод недействителен") })

            return results ?? {}

        },
        async getOrderText() {
            return await this.$store.state.myApi
                .get(this.$store.state.restAddr + '/statics', {
                    perPage: 0,
                    page: 0,
                })
                .then((res) => {
                    return res.data?.[0]?.order
                })
                .catch((error) => {
                    eventBus.$emit('noresponse', error)
                })
        },
    },
    computed: {
        totalSum() {
            const basketTotal = +(this.sale.type === 'money' ? Math.max((this.basketData.total - this.sale.sum), 0) :
                (+(100 - this.sale.sum) * this.basketData.total / 100).toFixed(0))

            return basketTotal + (+this.deliveryPrice ?? 0)
        }

    }
}
</script>
  

<style lang="scss">
.order-block {
    color: #414141;
    color: var(--tg-theme-text-color);
    padding: 0 1rem 1rem 1rem;

    input[type="radio"] {
        -webkit-appearance: none;
        appearance: none;
        background-color: #E6E6E6;
        margin: 0;
        font: inherit;
        width: 100%;
        height: 45px;
        border-radius: 1rem;
        border: none;
        transform: translateY(-0.075em);

        display: grid;
        place-content: center;
    }

    input[type="radio"]::before {
        content: "";
        width: 120px;
        height: 45px;
        z-index: 999;
        border-radius: 1rem;
        transform: scale(0);
        transition: 120ms transform ease-in-out;
        box-shadow: none;
        background-color: #0071e3;
        width: calc(100vw - 32px); //calc(50vw - 1rem - 5px);
    }

    input[type="radio"]:checked::before {
        transform: scale(1);
    }

    input[type="radio"]:focus {
        outline: none;
        outline-offset: max(2px, 0.15em);
    }
}

.payment {}

.delivery {
    margin-bottom: 20px;
}

.method-description {
    position: absolute;
    top: -2px;
    bottom: 0;
    right: 5px;
    background: #fff;
    border-radius: 0.7rem;
    width: 33px;
    height: 33px;
    margin: auto;
    text-align: center;
    line-height: 30px;

    img {
        width: 25px;
        position: absolute;
        margin: auto;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
    }
}

.select-group {
    //display: flex;
    gap: 10px;
    flex-wrap: wrap;

    &>div {
        position: relative;
        display: inline-block;
        width: 100%; //calc(50vw - 1rem - 5px);
        margin-bottom: 10px;
    }

    label {
        display: block;
        position: absolute;
        margin: 12.5px auto;
        line-height: 20px;
        z-index: 999;
        color: white;
        top: 0;
        left: 0;
        right: 0;
        width: fit-content;
        color: #414141
    }

    input[type="radio"]:checked+label {
        color: white;
    }
}



.input-group {

    &.one-line {

        input,
        button {
            display: inline-block;
            background-color: #e6e6e6;
            padding: 17px 20px;
            border-radius: 1rem;
            border: none;
            margin-bottom: 10px;
            font-size: 1rem;
            width: calc(60% - 40px);
            border-radius: 1rem 4px 4px 1rem;
        }

        button {
            width: 40%;
            border-left: 2px solid;
            border-radius: 4px 1rem 1rem 4px;
            border-color: white;
            border-color: var(--tg-theme-bg-color);
            color: #414141 !important;

        }
    }


    position: relative;

    input {
        background-color: #E6E6E6;
        padding: 17px 20px;
        width: calc(100% - 40px);
        border-radius: 1rem;
        border: none;
        margin-bottom: 10px;
        font-size: 1rem;
    }

    margin-bottom: -10px
}

.total {}

.pricing {
    position: relative;
    font-size: 1.2rem;
    margin-bottom: 10px;

    span {
        display: block;
        position: absolute;
        right: 0;
        top: 0;
    }
}
</style>
  