<template>
    <h1>Корзина</h1>
    <InstagramLoader class="preloader" ref="preloader" viewBox="0 0 300 250"></InstagramLoader>
    <InstagramLoader class="preloader" ref="preloader" viewBox="0 0 300 200"></InstagramLoader>
    <InstagramLoader class="preloader" ref="preloader" viewBox="0 0 300 200"></InstagramLoader>
    <div class="basket-items">
        <div class="basket-item" v-for="item, id in basketItems" :key="id">
            <span class="title">
                {{ item.title }}
            </span>
            <div class="count">
                <span>{{ item.count }}</span>
                <button class="increase-count" @click="increaseCount(item.id, item.count + 1)">+</button>
                <button class="decrease-count" @click="changeCount(item.id, item.count - 1)">-</button>
            </div>
            <span class="size">
                {{ item.size }}
            </span>
            <span class="material">
                {{ item.material }}
            </span>
            <button class="drop-item" @click="dropItem(item.id)">Убрать</button>
        </div>
    </div>
    <button class="order" @click="order">Оформить заказ</button>
</template>

<script>
import searchBlock from '@/components/Search.vue';
import eventBus from '../eventBus'
import { ListLoader, InstagramLoader } from 'vue-content-loader'


export default {
    components: { searchBlock, InstagramLoader },
    data() {
        return {
            basketItems: []
        }
    },
    watch: {
    },
    async mounted() {
        window.Telegram?.WebApp.MainButton.hide();
        window.Telegram?.WebApp.MainButton.disable();
        window.Telegram?.WebApp.BackButton.show()

        this.basketItems = await this.getBasket();

        this.$refs['basket-items']?.classList.add("hidden")
        document.body.classList.add('stop-scrolling')

        setTimeout(() => {
            const elements = document.getElementsByClassName('preloader')

            console.log(elements)

            for (let el of elements) {
                el.classList.add("hidden")
            }
            this.$refs['basket-items']?.classList.remove("hidden")
            document.body.classList.remove('stop-scrolling')

        }, 300)
    },
    methods: {
        changeCount(item, newCount) {
            this.$store.state.myApi.put(this.$store.state.restAddr + '/favorites', {
                user_id: this.$store.state.userId,
                item_option_id: item.id,
                count: newCount,
            })
                .then(async response => {
                    this.basketItems = await this.getBasket();

                })
                .catch(e => { eventBus.$emit('noresponse', e) })
        },
        dropItem(id) {
            this.$store.state.myApi.delete(this.$store.state.restAddr + '/favorites', {
                user_id: this.$store.state.userId,
                item_option_id: id,
            })
                .then(async response => {
                    this.basketItems = await this.getBasket();

                })
                .catch(e => { eventBus.$emit('noresponse', e) })
        },
        order() { },
        async finishWindow() {
            if (!this.$store.state.userId) return alert("Ваша версия телеграм не поддерживается")

            await this.getFiles().catch(console.log);
            window.Telegram?.WebApp.disableClosingConfirmation()
            window.Telegram?.WebApp.close();
        },
        async getBasket() {
            const results = await this.$store.state.myApi.get(this.$store.state.restAddr + '/favorites', {
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
  