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
    <select v-model="selected_size">
        <option v-for="size in sizes" :key="size" :value="size">{{ size }}</option>
    </select>
    <select v-model="selected_material">
        <option v-for="material in materials" :key="material" :value="material">{{ material }}</option>
    </select>
    {{ item?.options_array?.find(el => el.size === selected_size && el.material === selected_material)?.price }}
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
        }
    },
    watch: {
        async $route(to, from) {
            window.Telegram?.WebApp.MainButton.offClick(this.finishWindow);
        },
        item(to) {
            this.sizes = to?.options_array?.map(({ size }) => size)
            this.materials = to?.options_array?.map(({ material }) => material)
        }
    },
    mounted() {
        this.item = this.getItem(this.$route.params.id);

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
            return new Promise((res, rej) => {
                this.$store.state.myApi.get(this.$store.state.restAddr + '/items', {
                    params: {
                        id,
                    }
                })
                    .then(response => { res(response.data) })
                    .catch(e => { eventBus.$emit('noresponse', e); rej() })
            })
        },
        async getFiles() {
            return new Promise((res, rej) => {
                this.$store.state.myApi.get(this.$store.state.restAddr + '/files', {
                    params: {
                        user_id: this.$store.state.userId,
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
            const isFavorite = item.is_favorite

            if (isFavorite) {
                this.$store.state.myApi
                    .delete(this.$store.state.restAddr + '/favorites', {
                        data: {
                            item_id: item.id,
                            user_id: this.$store.state.userId,
                        },
                    })
                    .then((response) => {
                        item.is_favorite = false
                        if (this.$route.name === 'Favorites') {
                            console.log(1212)
                            this.$store.state.results = this.$store.state.results?.filter(
                                (el) => el.id !== item.id,
                            )
                            if (this.$store.state.results === 0)
                                window.Telegram?.WebApp.MainButton.hide()
                        }
                    })
                    .catch((e) => {
                        eventBus.$emit('noresponse', e)
                    })
            } else {
                this.$store.state.myApi
                    .put(this.$store.state.restAddr + '/favorites', {
                        item_id: item.id,
                        user_id: this.$store.state.userId,
                    })
                    .then((response) => {
                        item.is_favorite = true
                    })
                    .catch((e) => {
                        eventBus.$emit('noresponse', e)
                    })
            }
        }

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
  