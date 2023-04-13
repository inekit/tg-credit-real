<template>
    <h1>Корзина</h1>
    <InstagramLoader class="preloader" ref="preloader" viewBox="0 0 300 250"></InstagramLoader>
    <InstagramLoader class="preloader" ref="preloader" viewBox="0 0 300 200"></InstagramLoader>
    <InstagramLoader class="preloader" ref="preloader" viewBox="0 0 300 200"></InstagramLoader>
    <div class="basket-items">
        <div class="basket-item" v-for="item, id in basketItems" :key="id">
            <div class="img-container">
                <img :src="`/colorsserver/public/pics/${item.image_list?.[0]}`" />
            </div>
            <span class="title">
                {{ item.title }}
            </span>
            <div class="count-select">
                <button type="button" @click="changeCount(item.id, item.count - 1)">-</button>
                <span>{{ item.count }}</span>
                <button type="button" @click="changeCount(item.id, item.count + 1)">+</button>
            </div>
            <span class="size">
                Размер {{ item.size }}
            </span>
            <span class="material">
                Материал {{ item.material }}
            </span>
            <span class="price">
                {{ item.price }} ₽
            </span>
        </div>
    </div>
    <div class="order">
        <span class="label">Итого:</span>
        <span class="value">{{ basketItems?.reduce((prev, cur) => prev + cur.price, 0) }} ₽</span>
    </div>
    <button v-if="basketItems.length > 0" class="order" @click="order">Оформить заказ</button>
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
        window.Telegram?.WebApp.BackButton.onClick(this.routeBack);
        window.Telegram?.WebApp.BackButton.show();


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

        if (this.basketItems?.length) {
            window.Telegram?.WebApp.MainButton.onClick(this.order);

            window.Telegram?.WebApp.MainButton.enable();
            window.Telegram?.WebApp.MainButton.show();
            window.Telegram?.WebApp.MainButton.setText("Оформить заказ");
        } else {
            window.Telegram?.WebApp.MainButton.offClick(this.order);
            window.Telegram?.WebApp.MainButton.hide();
        }
    },
    async beforeUnmount() {
        window.Telegram?.WebApp.MainButton.offClick(this.order);
        window.Telegram?.WebApp.MainButton.hide();
        window.Telegram?.WebApp.BackButton.offClick(this.routeBack);
        window.Telegram?.WebApp.BackButton.hide();
    },
    methods: {
        changeCount(id, newCount) {
            if (newCount > 100) return;
            this.$store.state.myApi.put(this.$store.state.restAddr + '/favorites', {
                user_id: this.$store.state.userId,
                item_option_id: id,
                count: newCount,
            })
                .then(async response => {
                    this.basketItems = await this.getBasket();

                })
                .catch(e => { eventBus.$emit('noresponse', e) })
        },
        dropItem(id) {
            this.$store.state.myApi.delete(this.$store.state.restAddr + '/favorites', {
                data: {
                    user_id: this.$store.state.userId,
                    item_option_id: id,
                }
            })
                .then(async response => {
                    this.basketItems = await this.getBasket();

                })
                .catch(e => { eventBus.$emit('noresponse', e) })
        },
        order() {
            this.$router.push("/basket")
        },
        routeBack() {
            this.$router.go(-1)
        },
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
  

<style lang="scss" scoped>
.basket-item {
    margin: 1rem;
    position: relative;

    .img-container {
        position: relative;
        background-color: #414141;
        width: 18vw;
        height: 30vw;
        position: relative;
        overflow: hidden;
        padding: 1rem;
        border-radius: 1rem;

        img {
            position: absolute;
            margin: auto;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            max-width: 200%;
            max-height: 110%;
            min-width: 100%;
            min-height: 100%;
            width: auto;
            height: auto;
        }
    }

    .title {
        position: absolute;
        left: 28vw;
        top: 0;
        font-size: 1.4rem;
    }

    .count-select {
        position: absolute;
        right: 0;
        bottom: 0;
        background-color: #E6E6E6;
        border-radius: 4px;
        padding: 15px 40px;
        font-size: 13px;
        border: none;
        width: 50px;

        &>span {
            margin-left: auto;
            margin-right: auto;
            display: block;
            width: 9px;
            color: rgb(44, 44, 44);
        }

        &>button {
            border: none;
            color: rgb(44, 44, 44);
            height: 47px;
            position: absolute;
            right: 0;
            top: 0;
            font-size: 25px;
            width: 47px;
            border-radius: 4px;

            &:first-child {
                left: 0;
            }
        }
    }

    .size {
        position: absolute;
        left: 28vw;
        top: 25%;
        font-size: 1rem;
    }

    .material {
        position: absolute;
        left: 28vw;
        top: 40%;
        font-size: 1rem;
    }

    .price {
        position: absolute;
        right: 0;
        top: 0;
        font-size: 1.4rem;
        font-weight: 500;
    }

    margin-bottom: 90px;
}

.order {
    position: fixed;
    top: calc(100vh - 70px);
    top: calc(var(--tg-viewport-stable-height) - 70px);
    height: 70px;
    left: 0;
    right: 0;
    padding: 12px 1rem;
    border-top: 1px rgba(192, 192, 192, 0.363) solid;
    background-color: white;

    .label {
        display: block;
        position: absolute;
        right: left;
        font-size: 1.3rem;
        font-weight: 400;
        line-height: 45px;
    }

    .value {
        display: block;
        position: absolute;
        right: 1rem;
        font-size: 1.4rem;
        font-weight: 500;
        line-height: 45px;
    }
}
</style>
  