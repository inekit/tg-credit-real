<template>
    <InstagramLoader class="preloader" ref="preloader" viewBox="0 0 300 250"></InstagramLoader>
    <InstagramLoader class="preloader" ref="preloader" viewBox="0 0 300 200"></InstagramLoader>
    <InstagramLoader class="preloader" ref="preloader" viewBox="0 0 300 200"></InstagramLoader>
    <MasonryWall class="categories-block" :items="$store.state.categories ?? []" :ssr-columns="3"
        :column-width="bodyWidth / 9" :gap="12">
        <template #default="{ item, index }">
            <div class="result-item">
                <router-link :to="`/results/${$store.state.userId}?category=${item.name}`">
                    <div class="img-container">
                        <img :src="`/colorsserver/public/pics/${item.preview}`" />
                    </div>
                    <div class="text-container">
                        <h2>{{ item.name }}</h2>
                    </div>
                </router-link>
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
        }
    },
    watch: {
    },
    beforeMount() {
        this.bodyWidth = document.body.clientHeight

    },
    async mounted() {

        window.Telegram?.WebApp.BackButton.hide()
        window.Telegram?.WebApp.expand()

        this.updatePage(300);

        let uri = window.location.search.substring(1);
        this.params = new URLSearchParams(uri)

        const buttonUserId = window.Telegram?.WebApp?.initDataUnsafe?.user?.id
        this.$store.state.userId = buttonUserId ?? this.$route.params?.userId;


        //window.Telegram?.WebApp.onEvent('viewportChanged', () => window.Telegram?.WebApp.expand())
        window.Telegram?.WebApp.enableClosingConfirmation()

    },
    async beforeUnmount() {
        window.Telegram?.WebApp.MainButton.offClick(this.routeToBasket);
        window.Telegram?.WebApp.MainButton.hide();
    },
    methods: {
        routeToBasket() {
            this.$router.push("/basket")
        },
        async haveBasketItems() {
            const results = await this.$store.state.myApi.get(this.$store.state.restAddr + '/basket_data', {
                params: {
                    user_id: this.$store.state.userId,
                }
            })
                .then(response => {
                    return response.data.favorites.length
                })
                .catch(e => { eventBus.$emit('noresponse', e) })

            return results

        },
        async updatePage(delay) {
            this.$store.state.categories = await this.getCategories(true);

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
        async getCategories() {
            const subPath = '/categories'

            const results = await this.$store.state.myApi.get(this.$store.state.restAddr + subPath, {
                params: {
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
  

<style lang="scss">
.categories-block {
    width: calc(100% - 2rem);
    margin: 1rem;
    padding: 0;
    list-style: none;
    flex-wrap: wrap;

    .masonry-column {
        flex: 1 1 calc((100% / 3) - 2rem) !important;
    }


    .result-item {
        width: 100%;
        height: fit-content;
        margin: 0;

        display: block;
        overflow: hidden;
        position: relative;

        &:nth-child(4n) {
            margin-top: -6vw
        }

        &:nth-child(4n+1),
        &:nth-child(4n) {
            .img-container {
                height: 20vw;
            }
        }

        .img-container {
            background-color: transparent;
            width: 20vw;
            margin: auto;
            height: 30vw;
            position: relative;
            overflow: hidden;
            border-radius: 1rem;
        }

        .goto-button {
            width: 20vw;
            margin: auto;
            background-color: #0071e3;
            color: white;
            border-radius: 0.5rem;
            text-transform: uppercase;
            text-align: center;
            padding: 5px 0;
            font-weight: 500;
            font-size: 0.8rem;
        }

        a {
            display: block;
            text-decoration: none;
            height: calc(100% + 2rem);
            width: calc(100%);

            .text-container {
                margin: 0.5rem auto;
                top: 70%;
                width: fit-content;
            }

            h2 {
                margin: 0;
                color: #414141;
                font-weight: 400;
                font-size: 0.9rem;
                text-align: center;
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

    }
}
</style>
  