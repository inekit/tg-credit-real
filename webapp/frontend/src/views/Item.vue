<template>
    <InstagramLoader class="preloader" ref="preloader" viewBox="0 0 300 250"></InstagramLoader>
    <InstagramLoader class="preloader" ref="preloader" viewBox="0 0 300 200"></InstagramLoader>
    <InstagramLoader class="preloader" ref="preloader" viewBox="0 0 300 200"></InstagramLoader>

    <div class="img-container">
        <carousel>
            <slide class="carousel__item"
                v-for="img_link, img_id in item.options_array?.find(el => el.id === selected_option)?.photos" :key="img_id">
                <img v-if="['webp', 'jpg', 'jpeg', 'png'].includes(img_link?.split('.')?.reverse()[0]?.toLowerCase())"
                    :src="`/colorsserver/public/pics/${img_link}`" />
                <video style="max-height: 100%;max-width: 100%;" v-else :src="`/colorsserver/public/pics/${img_link}`"
                    controls>
                    Ваш браузер не поддерживает видео
                </video>
            </slide>
            <template #addons>
                <pagination />
            </template>
        </carousel>
    </div>
    <h1>{{ item.title }}</h1>
    <hr class="my-1" />
    <form>
        <div class="stock-container">
            <label>Наличие</label>
            <span class="stock" :class="[stock > 20 ? 'green' : stock > 10 ? 'yellow' : 'red']">{{ stock }} шт.</span>
            <hr />
        </div>
        <div class="option-select" v-if="item.select_name">
            <label for="size-select">{{ item.select_name }}</label>
            <div class="select-dropdown">
                <select id="option-select" v-model="selected_option" @change="changeOption" required>
                    <option v-for="option in item.options_array" :key="option.id" :value="option.id">{{ option.name }}
                    </option>
                </select>
            </div>
            <hr />
        </div>
        <label>Описание</label>
        <div class="description" v-html="item.description"></div>
        <div class="order">
            <span>{{ item.price }} ₽</span>
            <div class="count-select" v-if="count">
                <button type="button" @click="changeCount(count - 1)">-</button>
                <span>{{ count }}</span>
                <button type="button" @click="changeCount(count + 1)">+</button>
            </div>
            <button v-else type="button" @click.prevent="order">Добавить</button>
        </div>
    </form>
</template>

<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import moment from "moment"
import eventBus from '../eventBus'
import { ListLoader, InstagramLoader } from 'vue-content-loader'
import { marked } from 'marked'


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
            selected_option: null,
            count: 0,
        }
    },
    watch: {
        async $route(to, from) {
            this.item = await this.getItem(this.$route.params.id).catch(e => console.log(e));
        },
        async item(to) {

            this.selected_option = to?.options_array?.[0]?.id
            this.count = (await this.getBasketOption())?.count ?? 0;
            this.item.is_favorite = !!this.count;
            this.item.description = marked.parse(this.item.description?.replaceAll("\r\n\r\n", "<span><br/><span/>\r\n\r\n"))
        },
        "item.is_favorite"(is_favorite) {
            if (is_favorite) {
                window.Telegram?.WebApp.MainButton.onClick(this.routeToBasket);

                window.Telegram?.WebApp.MainButton.enable();
                window.Telegram?.WebApp.MainButton.show();
                window.Telegram?.WebApp.MainButton.setText("Корзина");
            } else {
                window.Telegram?.WebApp.MainButton.offClick(this.routeToBasket);
                window.Telegram?.WebApp.MainButton.hide();
            }
        }
    },
    async beforeMount() {

        window.Telegram?.WebApp.BackButton.onClick(this.routeBack);
        window.Telegram?.WebApp.BackButton.show();

        this.item = await this.getItem(this.$route.params.id);

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
        window.Telegram?.WebApp.MainButton.offClick(this.routeToBasket);
        window.Telegram?.WebApp.MainButton.hide();
        window.Telegram?.WebApp.BackButton.offClick(this.routeBack);
        window.Telegram?.WebApp.BackButton.hide();
    },
    methods: {
        async finishWindow() {
            if (!this.$store.state.user_id) return alert("Ваша версия телеграм не поддерживается")

            window.Telegram?.WebApp.disableClosingConfirmation()
            window.Telegram?.WebApp.close();
        },
        routeBack() {
            //this.$router.push(`/results/${this.$store.state.userId}`)
            this.$router.go(-1)
        },
        routeToBasket() {
            this.$router.push("/basket")
        },
        getItem(id) {
            return new Promise((res, rej) => {
                this.$store.state.myApi.get(this.$store.state.restAddr + '/items', {
                    params: {
                        id,
                        user_id: this.$store.state.userId,
                    }
                })
                    .then(response => {
                        const item = response.data?.[0];
                        res(item)
                    })
                    .catch(e => { eventBus.$emit('noresponse', e); rej() })
            })
        },
        async changeOption() {
            this.count = (await this.getBasketOption())?.count ?? 0;
        },
        async getBasketOption() {
            return await this.$store.state.myApi
                .get(this.$store.state.restAddr + '/favorites', {
                    params: {
                        user_id: this.$store.state.userId,
                        item_option_id: this.selected_option,
                    }
                })
                .then((response) => {
                    try {
                        const item = response.data?.[0]

                        return item
                    }
                    catch (e) { console.log(e); rej(e) }
                })
                .catch((e) => {
                    eventBus.$emit('noresponse', e)
                })
        },
        changeCount(newCount) {
            if (newCount > 100 || newCount > this.stock) return alert("Выбрано максимальное доступное количество товара")
            this.$store.state.myApi.put(this.$store.state.restAddr + '/favorites', {
                user_id: this.$store.state.userId,
                item_option_id: this.selected_option,
                count: newCount,
            })
                .then(async response => {
                    this.count = (await this.getBasketOption())?.count ?? 0;
                    this.item.is_favorite = !!this.count;
                })
                .catch(e => { eventBus.$emit('noresponse', e) })
        },
        async order() {
            const count = 1
            if (this.stock < 1) return alert("Товар закончился")
            this.$store.state.myApi
                .post(this.$store.state.restAddr + '/favorites', {
                    item_option_id: this.selected_option,
                    count,
                    user_id: this.$store.state.userId,
                })
                .then(async (response) => {
                    this.count = (await this.getBasketOption())?.count ?? 0;
                    this.item.is_favorite = true;


                })
                .catch((e) => {
                    alert("Эта позиция уже добавлена в корзину")
                })
        },
        getDate(date) {
            return moment(date).format("DD.MM.YYYY")
        },
    },
    computed: {
        stock() {
            return this.item.options_array?.find(el => el.id === this.selected_option)?.stock
        }
    }
}
</script>

<style lang="scss">
h1 {
    font-weight: 600;
    font-size: 1.7rem;
}

.my-1 {
    margin: 0 1rem;
    margin-top: 10px;
    width: calc(100vw - 2rem);
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
    margin: auto;
    max-height: 100vh;
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

form {
    margin: 1rem;
    margin-top: 0.5rem;
    font-size: 1rem;
    margin-bottom: calc(90px + 0.5rem);

    label {
        font-size: 1.1rem;
        font-weight: 600;
        color: #414141;
    }

    .stock-container {
        position: relative;

        span {
            position: absolute;
            right: 0;
            top: 0;

            &.green {
                color: rgb(40, 160, 40)
            }

            &.yellow {
                color: rgb(202, 202, 39);
            }

            &.red {
                color: rgb(190, 34, 34)
            }
        }
    }

    .option-select {
        position: relative;
        height: 35px;
        margin-bottom: 1rem;

        label {
            line-height: 35px;
        }

        .select-dropdown,
        .select-dropdown * {
            margin: 0;
            padding: 0;
            position: relative;
            box-sizing: border-box;
        }

        .select-dropdown {
            position: absolute;
            right: 0;
            top: 0;
            background-color: #e7e7e7;
            border-radius: 10px;
            color: white;

            select {
                font-size: 15px;
                font-weight: 400;
                max-width: 100%;
                padding: 10px 30px 10px 15px;
                border: none;
                background-color: transparent;
                -webkit-appearance: none;
                -moz-appearance: none;
                appearance: none;
                color: #414141 !important;

                &:focus,
                &:active {
                    outline: none;
                    box-shadow: none;
                }
            }

            &:after {
                content: "";
                position: absolute;
                top: 50%;
                right: 8px;
                width: 0;
                height: 0;
                margin-top: -2px;
                border-top: 5px solid #aaa;
                border-right: 5px solid transparent;
                border-left: 5px solid transparent;
            }
        }
    }

    .description {
        margin-top: 0.5rem;

        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        p {
            margin: 0;
            font-weight: 400;
            color: #414141;
        }

        p {
            font-size: 1rem;
        }

        h6 {
            font-size: 1.1rem;
        }

        h5 {
            font-size: 1.2rem;
        }

        h4 {
            font-size: 1.3rem;
        }

        h3 {
            font-size: 1.4rem;
        }

        h2 {
            font-size: 1.5rem;
        }
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

        .count-select {
            position: absolute;
            right: 1rem;
            background-color: #a6d2ff;
            border-radius: 14px;
            padding: 15px 40px;
            font-size: 13px;
            color: #414141;
            border: none;
            top: 12px;
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
                height: 47px;
                position: absolute;
                right: 0;
                top: 0;
                font-size: 25px;
                width: 47px;
                border-radius: 14px;
                color: white;
                background-color: #0071e3;

                &:first-child {
                    left: 0;
                }
            }
        }

        &>span {
            font-weight: 500;
            font-size: 1.4rem;
            line-height: 45px;
        }

        &>button {
            position: absolute;
            right: 1rem;
            background-color: #0071e3;
            border-radius: 14px;
            color: white;
            font-weight: 500;
            text-transform: uppercase;
            font-size: 15px;
            padding: 15px 40px;
            border: none;
        }
    }
}

hr {
    height: 1px;
    display: block;
    background: rgba(192, 192, 192, 0.363);
    width: 100%;
    border: none;
}
</style>
  