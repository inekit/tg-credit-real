<template>
    <h1>Оформление заказа</h1>
    <div class="order-block">
        <button class="" @click="order">Оформить заказ</button>

        <div class="payment">
            <h2>Метод оплаты</h2>
            <div class="select-group">
                <div v-for="po in paymentOptions" :key="po">
                    <input type="radio" :id="po" :value="po" v-model="selected_po">
                    <label :for="po" @click="selected_po = po">{{ po }}</label>
                </div>
            </div>
        </div>
        <div class="delivery">
            <h2>Способ доставки</h2>
            <div class="select-group">
                <div v-for="dm in deliveryMethods" :key="dm">
                    <input type="radio" :id="dm" :value="dm" v-model="selected_dm" @change="getDeliveryPrice">
                    <label :for="dm" @click="selected_dm = dm; getDeliveryPrice()">{{ dm }}</label>
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
                v-model.number="basketData.postal_code" @input="getDeliveryPrice">
        </div>
        <h2>Промокод</h2>
        <div class="input-group">
            <input type="text" id="name" name="name" placeholder="Введите промокод" v-model="basketData.promo_code"
                @change="getPromoSale">
        </div>
        <h2 class="total">Итого</h2>
        <div class="pricing">Стоимость доставки<span>{{ deliveryPrice ? `${deliveryPrice} ₽` : "Не определена" }}</span>
        </div>
        <div class="pricing" v-if="sale.sum > 0">Скидка<span>{{ sale.type === 'money' ? `${sale.sum} ₽` : `${sale.sum} %`
        }}</span></div>
        <div class="pricing">К оплате<span>{{ totalSum }} ₽</span></div>
    </div>
</template>

<script>
import eventBus from '../eventBus'
import { ListLoader, InstagramLoader } from 'vue-content-loader'


export default {
    components: { InstagramLoader },
    data() {
        return {
            basketData: {},
            paymentOptions: ["yookassa"],
            selected_po: "yookassa",
            deliveryMethods: ["Я. Доставка", "CДЭК"],
            selected_dm: "CДЭК",
            deliveryPrice: null,
            sale: {
                sum: 0
            }
        }
    },
    watch: {
    },
    async mounted() {
        window.Telegram?.WebApp.BackButton.onClick(this.routeBack);
        window.Telegram?.WebApp.BackButton.show();

        window.Telegram?.WebApp.MainButton.onClick(this.order);
        window.Telegram?.WebApp.MainButton.enable();
        window.Telegram?.WebApp.MainButton.show();
        window.Telegram?.WebApp.MainButton.setText("Заказ подтверждаю");

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
        order() {
            if (!this.basketData.address || !this.basketData.phone ||
                !this.basketData.name || !this.basketData.surname || !this.basketData.patronymic)
                return alert("Пожалуйста, заполните все поля")
            if (!this.deliveryPrice) return alert("Пожалуйста, укажите верные данные для доставки")

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
                    total: this.totalSum
                })
                .then(async (response) => {
                    window.Telegram?.WebApp.disableClosingConfirmation()
                    window.Telegram?.WebApp.close();
                })
                .catch(e => { eventBus.$emit('noresponse', e) })
        },
        async getDeliveryPrice() {
            const results = await this.$store.state.myApi.get(this.$store.state.restAddr + '/delivery_price', {
                params: {
                    operator: this.selected_dm,
                    address: this.basketData.address,
                    count: this.basketData.total_count,
                    postal_code: this.basketData.postal_code,
                }
            })
                .then(response => {
                    this.deliveryPrice = response.data?.price;
                })
                .catch(e => { console.log(e); this.deliveryPrice = null })

            return results ?? {}

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
                }
            })
                .then(response => {
                    return this.sale = response.data ?? this.sale;
                })
                .catch(e => { alert("Промокод недействителен") })

            return results ?? {}

        },
    },
    computed: {
        totalSum() {
            const basketTotal = (this.sale.type === 'money' ? (this.basketData.total - this.sale.sum) :
                (+(100 - this.sale.sum) * this.basketData.total / 100).toFixed(0))

            return basketTotal + this.deliveryPrice
        }

    }
}
</script>
  

<style lang="scss">
.order-block {
    color: #414141;
    padding: 0 1rem 1rem 1rem;

    input[type="radio"] {
        -webkit-appearance: none;
        appearance: none;
        background-color: #E6E6E6;
        margin: 0;
        font: inherit;
        width: 120px;
        height: 40px;
        border-radius: 1rem;
        border: none;
        transform: translateY(-0.075em);

        display: grid;
        place-content: center;
    }

    input[type="radio"]::before {
        content: "";
        width: 120px;
        height: 40px;
        z-index: 999;
        border-radius: 1rem;
        transform: scale(0);
        transition: 120ms transform ease-in-out;
        box-shadow: none;
        background-color: #666666;
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

.select-group {
    display: flex;
    gap: 10px;

    &>div {
        position: relative;
        display: inline-block;
        width: 120px;
    }

    label {
        display: block;
        position: absolute;
        margin: 10px auto;
        line-height: 20px;
        z-index: 999;
        color: white;
        top: 0;
        left: 0;
        right: 0;
        width: fit-content;
    }
}



.input-group {


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
  