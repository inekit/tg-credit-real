<template>
    <InstagramLoader class="preloader" ref="preloader" viewBox="0 0 300 250"></InstagramLoader>
    <InstagramLoader class="preloader" ref="preloader" viewBox="0 0 300 200"></InstagramLoader>
    <InstagramLoader class="preloader" ref="preloader" viewBox="0 0 300 200"></InstagramLoader>

    <div class="img-container">
        <carousel>
            <slide class="carousel__item" v-for="img_id in [...Array(item.images_count).keys()]" :key="img_id">
                <img :src="`/api/img/${item.city_name === 'Москва' ? 'mos' : 'spb'}/${item.id}/${img_id}`" />
            </slide>
            <template #addons>
                <pagination />
            </template>
        </carousel>
    </div>

    <h1>{{ item.name }}</h1>
    <div class="favorite-toggle" :class="item.is_favorite ? 'favorite-item' : ''" @click="toggleFav($event, item)">
        <img :src="require('@/assets/img/fav.svg')" />
    </div>
    <ul class="points-list">
        <li>📍 Адрес: {{ item.address }}</li>
        <li>📒 Проектная декларация: {{ item.declaration }}</li>
        <li>🗓 Ввод в эксплуатацию: {{ item.commissioning }}</li>
        <li>🔑 Выдача ключей: {{ getDate(item.issuance_date) }}</li>
        <li>💵 Средняя цена за 1 м²: {{ item.meter_price }}</li>
        <li>📈 Распроданность квартир: {{ item.sale_percent }}%</li>
        <li>🏢 Этажей: {{ item.floor_count }}</li>
        <li>🎨 Тип отделки: {{ item.finish_type }}</li>
    </ul>
</template>

<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import moment from "moment"
import { ListLoader, InstagramLoader } from 'vue-content-loader'
import toggleFavorite from '@/utils/toggleFavorite'
export default {
    components: {
        InstagramLoader,
        Carousel,
        Slide,
        Pagination,
        Navigation,
    },
    data: () => {
        return {
            item: {},

        }
    },
    watch: {
        async $route(to, from) {
            window.Telegram?.WebApp.MainButton.offClick(this.finishWindow);
        }
    },
    mounted() {
        this.getItem(this.$route.params.id);

        window.Telegram?.WebApp.MainButton.onClick(this.finishWindow);
        window.Telegram?.WebApp.MainButton.enable();
        window.Telegram?.WebApp.MainButton.show();
        window.Telegram?.WebApp.MainButton.setText("Узнать больше");

        this.$refs['results-block']?.classList.add("hidden")
        document.body.classList.add('stop-scrolling')


        setTimeout(() => {
            const elements = document.getElementsByClassName('preloader')

            console.log(elements)

            for (let el of elements) {
                el.classList.add("hidden")
            }
            this.$refs['results-block']?.classList.remove("hidden")
            document.body.classList.remove('stop-scrolling')

        }, 400)
    },
    async beforeUnmount() {
        window.Telegram?.WebApp.MainButton.offClick(this.finishWindow);
        window.Telegram?.WebApp.MainButton.hide();
    },
    methods: {
        async finishWindow() {
            if (!this.$store.state.user_id) return alert("Ваша версия телеграм не поддерживается")

            await this.getFiles().catch(console.log);
            window.Telegram?.WebApp.disableClosingConfirmation()
            window.Telegram?.WebApp.close();
        },
        getItem(id) {
            this.$store.state.myApi.get(this.$store.state.restAddr + '/items', {
                params: {
                    id,
                    user_id: this.$store.state.user_id,
                }
            })
                .then(response => this.item = response.data)
                .catch(e => { eventBus.$emit('noresponse', e) })
        },
        async getFiles() {
            return new Promise((res, rej) => {
                this.$store.state.myApi.get(this.$store.state.restAddr + '/files', {
                    params: {
                        user_id: this.$store.state.user_id,
                        item_id: this.$route.params.id
                    }
                })
                    .then(response => { console.log("finish res"); res() })
                    .catch(e => { console.log(e); rej() })
            })

        },
        getDate(date) {
            return moment(date).format("DD.MM.YYYY")
        },
        toggleFav(event, item) {
            toggleFavorite.bind(this)(event, item)
        },

    }
}
</script>

<style lang="scss">
.img-container {
    width: 100%;
}

.points-list {
    list-style: none;
    padding: 1rem;
    font-size: 1.15rem;
    margin: 0;

    li {
        margin-bottom: 10px;
    }
}

.carousel__item {
    width: 100%;
    min-height: 100px;
    background-color: #ffffff;
    color: var(--vc-clr-white);
    font-size: 20px;
    //border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;

    img {
        width: 100vw;
    }
}

.carousel__pagination {
    padding: 0;
}

.carousel__track {
    //position: absolute;
    //left: 50%;
    margin: auto;

    //width: 100%;
    //transform: unset !important;
    li {
        // width: 100% !important;
    }

}

.carousel__slide {
    padding: 0px;
}

.carousel__prev,
.carousel__next {
    box-sizing: content-box;
    border: 5px solid white;
}
</style>
  