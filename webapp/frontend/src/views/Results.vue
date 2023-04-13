<template>
    <h1>Каталог</h1>
    <searchBlock />
    <InstagramLoader class="preloader" ref="preloader" viewBox="0 0 300 250"></InstagramLoader>
    <InstagramLoader class="preloader" ref="preloader" viewBox="0 0 300 200"></InstagramLoader>
    <InstagramLoader class="preloader" ref="preloader" viewBox="0 0 300 200"></InstagramLoader>
    <button @click="routeToBasket">Корзина</button>
    <MasonryWall class="results-block" :items="$store.state.results ?? []" :ssr-columns="2" :column-width="bodyWidth / 6"
        :gap="12">
        <template #default="{ item, index }">
            <div class="result-item">
                <router-link :to="`/items/${item.id}`">
                    <div class="img-container">
                        <img :src="`/colorsserver/public/pics/${item.image_list?.[0]}`" />
                    </div>
                    <div class="text-container">
                        <h2>{{ item.title }}</h2>
                        <h3>От {{ item.getMinPrice(options_array) }} ₽</h3>

                    </div>
                </router-link>
                <div class="favorite-toggle" :class="item.is_favorite ? 'favorite-item' : ''">
                    <img :src="require('@/assets/img/fav.svg')" />
                </div>
            </div>
        </template>
    </MasonryWall>
</template>

<script>
import searchBlock from '@/components/Search.vue';
import eventBus from '../eventBus'
import { ListLoader, InstagramLoader } from 'vue-content-loader'


export default {
    components: { searchBlock, InstagramLoader },
    data() {
        return {
            page: 1,
            perPage: 10,

        }

    },
    watch: {
        "$store.state.searchQuery": async function () {
            await this.updatePage(300)
        },
        "$store.state.filters": async function () {
            await this.updatePage(300)
        },
        async $route(to, from) {
            //await this.toggleButtons()
        }
    },
    beforeMount() {
        this.bodyWidth = document.body.clientHeight
    },
    async mounted() {
        this.scroll()
        window.Telegram?.WebApp.BackButton.hide()

        this.$store.state.userId = this.$route.params?.userId;

        if ((await this.getBasket())?.length) {
            console.log("basket")
            window.Telegram?.WebApp.MainButton.onClick(this.routeToBasket);
            window.Telegram?.WebApp.MainButton.show();
            window.Telegram?.WebApp.MainButton.setText("Корзина");
        } else {
            console.log("no basket")

            window.Telegram?.WebApp.MainButton.offClick(this.routeToBasket);
            window.Telegram?.WebApp.MainButton.hide();
        }
    },
    async beforeUnmount() {
        window.Telegram?.WebApp.MainButton.offClick(this.routeToBasket);
        window.Telegram?.WebApp.MainButton.hide();
    },
    methods: {
        routeToBasket() {
            this.$router.push("/basket")
        },
        getMinPrice(options_array) {
            return Math.min(...(options_array?.map(el => el.price) ?? [0]))
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
        async updatePage(delay) {
            this.$store.state.results = await this.sendSearchRequest(true);

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

            }, delay)
        },
        scroll() {
            window.onscroll = async () => {
                let bottomwindow = window.scrollY + window.innerHeight + 1000 > document.documentElement.scrollHeight;

                if (bottomwindow && !this.loadingUpdate && !this.isEnded) {
                    this.loadingUpdate = true;
                    const update = await this.sendSearchRequest();
                    this.$store.state.results = [...this.$store.state.results, ...update];
                }
            };
        },
        async sendSearchRequest(isReload) {
            if (isReload) {
                this.isEnded = false
                this.page = 1
            }
            const subPath = this.$route.name === "Results" || this.$route.name === "ResultsSearch"
                ? '/items' : '/favorites'

            const results = await this.$store.state.myApi.get(this.$store.state.restAddr + subPath, {
                params: {
                    searchQuery: this.$store.state.searchQuery,
                    take: 10,
                    page: this.page ?? 1,
                    sort: this.$store.state.filters.sort_type,
                    category: this.$store.state.filters.category_name,
                    user_id: this.$store.state.userId,
                }
            })
                .then(response => {
                    const newsUpd = response.data;

                    if (newsUpd.length < (this.perPage)) this.isEnded = true;
                    else this.page++;

                    this.loadingUpdate = false;


                    return newsUpd;
                })
                .catch(e => { eventBus.$emit('noresponse', e) })

            console.log(results)

            return results

        },
    }
}
</script>
  

<style lang="scss">
.results-block {
    // display: flex;
    width: calc(100% - 2rem);
    margin: 1rem;
    padding: 0;
    list-style: none;
    flex-wrap: wrap;

    .masonry-column {
        flex: 1 1 calc((100% / 2) - 2rem) !important;
    }


    .result-item {
        width: 100%;
        height: fit-content; //calc(70vw - 1.5rem);
        //margin: 1rem;
        //margin-bottom: 0;
        margin: 0;

        border-radius: 1rem;
        display: block;
        background: rgb(255, 255, 255);
        // border: 1px solid rgb(169, 169, 169);
        box-shadow: 0px 1px 5px rgb(216, 216, 216);
        overflow: hidden;
        position: relative;

        &:nth-child(4n) {
            margin-top: -6vw
        }

        &:nth-child(4n+1),
        &:nth-child(4n) {
            .img-container {
                height: 40vw;
            }
        }

        .img-container {
            //position: absolute;
            background-color: #414141;
            width: 100%;
            height: 30vw;
            position: relative;
            overflow: hidden;
        }



        a {
            display: block;
            text-decoration: none;
            //position: absolute;
            height: calc(100% + 2rem);
            width: calc(100%);

            //margin: 1rem;
            .text-container {
                padding: 1rem;
                //position: absolute;
                top: 70%;
                width: calc(100% - 2rem);

            }

            h2 {
                margin: 0;
                width: 100%;
                color: #414141;
                font-weight: 200;
                font-size: 1.2rem;
                word-wrap: break-word;
            }

            img {
                position: absolute;
                margin: auto;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                max-width: 200%;
                max-height: 130%;
                min-width: 100%;
                min-height: 100%;
                width: auto;
                height: auto;
            }
        }

        &:nth-child(2n-1) {
            margin-right: 0.5rem;
        }

        &:nth-child(2n) {
            margin-left: 0.5rem;
        }

        .favorite-toggle {
            content: '';
            width: 40px;
            height: 40px;
            border-radius: 13px;
            background-color: transparent;
            border: 1px solid;
            background-color: #6e6e6e;
            border-color: #6e6e6e;
            opacity: 0;
            position: absolute;
            top: 0.5rem;
            right: 0.5rem;
            transition: all 0.2s;

            img {
                height: 50%;
                margin: 25%;
            }

            &.favorite-item {
                opacity: 1;
                z-index: 1;
                border-color: rgb(197, 80, 105);
                background-color: rgb(197, 80, 105);
            }

        }
    }
}
</style>
  