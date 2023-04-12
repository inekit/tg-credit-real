<template>
    <h1>Оформление заказа</h1>
    <div>
        <h2>Метод оплаты</h2>
        <div v-for="po in paymentOptions" :key="po">
            <input type="radio" :id="po" :value="po" v-model="selected_po">
            <label :for="po">{{ po }}</label>
        </div>
    </div>
    <div>
        <h2>Способ доставки</h2>
        <div v-for="dm in deliveryMethods" :key="dm">
            <input type="radio" :id="dm" :value="dm" v-model="selected_dm">
            <label :for="dm">{{ dm }}</label>
        </div>
    </div>
    <label for="phone">Контактный телефон *:</label>
    <input type="tel" id="phone" name="phone">
    <label for="address">Адрес доставки *:</label>
    <input type="number" id="address" name="address">
    <h2>Итого:</h2>
    <div>Стоимость доставки<span>{{ deliveryPrice }} ₽</span></div>
    <div>К оплате<span>{{ basketData.total + deliveryPrice }} ₽</span></div>
</template>

<script>
import searchBlock from '@/components/Search.vue';
import eventBus from '../eventBus'
import { ListLoader, InstagramLoader } from 'vue-content-loader'


export default {
    components: { searchBlock, InstagramLoader },
    data() {
        return {
            basketData: {},
            paymentOptions: ["yookassa"],
            selected_po: "1",
            deliveryMethods: ["Я. Доставка", "CДЭК"],
            selected_dm: "CДЭК",
            deliveryPrice: 1000,
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

        const basketData = await getBasketSum()

    },
    async beforeUnmount() {
        window.Telegram?.WebApp.MainButton.offClick(this.order);
        window.Telegram?.WebApp.MainButton.hide();
        window.Telegram?.WebApp.BackButton.offClick(this.routeBack);
        window.Telegram?.WebApp.BackButton.hide();
    },
    methods: {
        order() {
        },
        routeBack() {
            this.$router.go(-1)
        },
        async getBasketSum() {
            const results = await this.$store.state.myApi.get(this.$store.state.restAddr + '/basket_total', {
                params: {
                    user_id: this.$store.state.userId,
                }
            })
                .then(response => {
                    return response.data;
                })
                .catch(e => { eventBus.$emit('noresponse', e) })

            return results

        },
    }
}
</script>
  

<style lang="scss"></style>
  