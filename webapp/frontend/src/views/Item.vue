<template>
    <InstagramLoader class="preloader" ref="preloader" viewBox="0 0 300 250"></InstagramLoader>
    <InstagramLoader class="preloader" ref="preloader" viewBox="0 0 300 200"></InstagramLoader>
    <InstagramLoader class="preloader" ref="preloader" viewBox="0 0 300 200"></InstagramLoader>

    <div class="img-container">
        <carousel>
            <slide class="carousel__item" v-for="img_link, img_id in item.image_list" :key="img_id">
                <img :src="`/colorsserver/public/pics/${img_link}`" />
            </slide>
            <template #addons>
                <pagination />
            </template>
        </carousel>
        <div class="favorite-toggle" :class="item.is_favorite ? 'favorite-item' : ''" @click="toggleFav($event, item)">
            <img :src="require('@/assets/img/fav.svg')" />
        </div>

    </div>
    <h1>{{ item.title }}</h1>
    <form>
        <label for="size-select">Размер</label>
        <select id="size-select" v-model="selected_size" required>
            <option v-for="size in sizes" :key="size" :value="size">{{ size }}</option>
        </select>
        <label for="material-select">Материал</label>
        <select id="material-select" v-model="selected_material" required>
            <option v-for="material in materials" :key="material" :value="material">{{ material }}</option>
        </select>
        <div class="count-select">
            <button type="button" @click="count = count - 1">-</button>
            <span>{{ count }}</span>
            <button type="button" @click="count = count + 1">+</button>
        </div>
        {{ price }}
        <button type="button" @click.prevent="order">В корзину</button>
    </form>

    <span>{{ item.description }}</span>
</template>

<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import moment from "moment"
import eventBus from '../eventBus'
import { ListLoader, InstagramLoader } from 'vue-content-loader'
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
            options_array: [],
            selected_size: null,
            sizes: [],
            selected_material: null,
            materials: [],
            count: 0,
        }
    },
    watch: {
        async $route(to, from) {
            window.Telegram?.WebApp.MainButton.offClick(this.finishWindow);
        },
        item(to) {
            this.sizes = to?.options_array?.map(({ size }) => size)
            this.selected_size = this.sizes?.[0]
            this.materials = to?.options_array?.map(({ material }) => material)
            this.selected_material = this.materials?.[0]
            this.price = to?.options_array?.find(el => el.size === this.selected_size && el.material === this.selected_material)?.price
        }
    },
    async mounted() {
        this.item = await this.getItem(this.$route.params.id);
        console.log(this.item)

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

            window.Telegram?.WebApp.disableClosingConfirmation()
            window.Telegram?.WebApp.close();
        },
        getItem(id) {
            return new Promise((res, rej) => {
                this.$store.state.myApi.get(this.$store.state.restAddr + '/items', {
                    params: {
                        id,
                        user_id: this.$store.state.userId,
                    }
                })
                    .then(response => { res(response.data?.[0]) })
                    .catch(e => { eventBus.$emit('noresponse', e); rej() })
            })
        },
        order() {
            this.$store.state.myApi
                .post(this.$store.state.restAddr + '/favorites', {
                    item_option_id: this.item.id,
                    count: this.count,
                    user_id: this.$store.state.userId,
                })
                .then((response) => {
                    item.is_favorite = true
                })
                .catch((e) => {
                    eventBus.$emit('noresponse', e)
                })
        },
        getDate(date) {
            return moment(date).format("DD.MM.YYYY")
        },
    }
}
</script>

<style lang="scss">
h1 {
    font-weight: 400;
}

.img-container {
    width: 100%;
    position: relative;
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
    max-height: 100vw;

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
    max-height: 100vw;

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

.favorite-toggle {
    width: 50px;
    height: 50px;
    border-radius: 13px;
    background-color: transparent;
    border: 1px solid;
    background-color: #6e6e6e;
    border-color: #6e6e6e;
    z-index: 999;
    position: absolute;
    top: 1rem;
    right: 1rem;
    transition: all 0.2s;

    img {
        height: 50%;
        margin: 25%;
    }

    &.favorite-item {
        border-color: rgb(197, 80, 105);
        background-color: rgb(197, 80, 105);
    }

}
</style>
  