<template>
    <h1>Каталог</h1>
    <div class="favorites" @click="$router.push('/favorites')">
    </div>
    <searchBlock />
    <InstagramLoader class="preloader" ref="preloader" viewBox="0 0 300 250"></InstagramLoader>
    <InstagramLoader class="preloader" ref="preloader" viewBox="0 0 300 200"></InstagramLoader>
    <InstagramLoader class="preloader" ref="preloader" viewBox="0 0 300 200"></InstagramLoader>

    <MasonryWall class="results-block" :items="$store.state.results ?? []" :ssr-columns="1" :column-width="bodyWidth / 6"
        :gap="12">
        <template #default="{ item, index }">
            <div class="result-item">
                <router-link :to="`/items/${item.id}`">

                    <div class="img-container">
                        <img v-for="img_id in [0]" :key="img_id"
                            :src="`/api/img/${item.city_name === 'Москва' ? 'mos' : 'spb'}/${item.id}/${img_id}`" />
                    </div>
                    <div class="text-container">
                        <h2>{{ item.name }}</h2>
                    </div>
                </router-link>
                <div class="favorite-toggle" :class="item.is_favorite ? 'favorite-item' : ''"
                    @click="toggleFavorite($event, item)">
                    <svg v-if="item.is_favorite" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                        class="x5-d9" style="color: rgb(0, 26, 52);">
                        <path fill="#F8104B" fill-rule="evenodd"
                            d="M12 22c-.316-.02-.56-.147-.848-.278a23.542 23.542 0 0 1-4.781-2.942C3.777 16.705 1 13.449 1 9a6 6 0 0 1 6-6 6.183 6.183 0 0 1 5 2.568A6.183 6.183 0 0 1 17 3a6 6 0 0 1 6 6c0 4.448-2.78 7.705-5.375 9.78a23.599 23.599 0 0 1-4.78 2.942c-.543.249-.732.278-.845.278Z"
                            clip-rule="evenodd"></path>
                    </svg>
                    <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" class="x5-d9"
                        style="color:#001a34;">
                        <path fill="#00192E" fill-rule="evenodd"
                            d="M12 22c-.316-.02-.56-.147-.848-.278a23.542 23.542 0 0 1-4.781-2.942C3.777 16.705 1 13.449 1 9a6 6 0 0 1 6-6 6.183 6.183 0 0 1 5 2.568A6.183 6.183 0 0 1 17 3a6 6 0 0 1 6 6c0 4.448-2.78 7.705-5.375 9.78a23.599 23.599 0 0 1-4.78 2.942c-.543.249-.732.278-.845.278ZM7 5a4 4 0 0 0-4 4c0 3.552 2.218 6.296 4.621 8.22A21.525 21.525 0 0 0 12 19.91a21.58 21.58 0 0 0 4.377-2.69C18.78 15.294 21 12.551 21 9a4 4 0 0 0-4-4c-1.957 0-3.652 1.396-4.02 3.2a1 1 0 0 1-1.96 0C10.652 6.396 8.957 5 7 5Z"
                            clip-rule="evenodd"></path>
                        <path fill="white" fill-rule="evenodd"
                            d="M12 22c-.285-.018-.512-.123-.764-.24a21.77 21.77 0 0 1-1.273-.628 23.542 23.542 0 0 1-3.592-2.351C3.777 16.704 1 13.448 1 9a6 6 0 0 1 6-6 6.18 6.18 0 0 1 5 2.568A6.18 6.18 0 0 1 17 3a6 6 0 0 1 6 6c0 4.448-2.78 7.705-5.375 9.78a23.599 23.599 0 0 1-4.78 2.942c-.543.249-.732.278-.845.278Zm0-17.959A7.178 7.178 0 0 1 17 2a7 7 0 0 1 7 7c0 4.897-3.061 8.41-5.75 10.562a24.585 24.585 0 0 1-4.989 3.07c-.566.258-.92.368-1.261.368h-.032l-.033-.002c-.484-.032-.881-.218-1.12-.33a22.658 22.658 0 0 1-1.322-.653 24.524 24.524 0 0 1-3.747-2.454C3.058 17.41 0 13.896 0 9a7 7 0 0 1 7-7c1.918 0 3.701.776 5 2.041ZM3 9a4 4 0 0 1 4-4c1.957 0 3.652 1.396 4.02 3.2a1 1 0 0 0 1.96 0C13.348 6.396 15.043 5 17 5a4 4 0 0 1 4 4c0 3.552-2.22 6.295-4.625 8.22A21.58 21.58 0 0 1 12 19.91a21.525 21.525 0 0 1-4.377-2.69C5.217 15.295 3 12.551 3 9Z"
                            clip-rule="evenodd"></path>
                    </svg>
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
            await this.updatePage(200)
        },
        "$store.state.distinct": async function () {
            await this.updatePage(200)
        },
        async $route(to, from) {
            await this.updatePage(200)
        }
    },
    async mounted() {
        this.scroll()
        this.bodyWidth = document.body.clientHeight
        window.Telegram?.WebApp.MainButton.hide();
        window.Telegram?.WebApp.MainButton.disable();
        window.Telegram?.WebApp.BackButton.show()

        console.log(this.$route.params)

        const filterId = this.$route.params?.page;
        const filterValue = this.$route.params?.filter;

        if (this.$route.params?.city !== "city") this.city_name = this.$route.params?.city;

        if (filterId === "2") this.property_class = filterValue;
        else if (filterId === "3") this.commissioning_year = filterValue;
        else if (filterId === "1") {
            this.sale_percent_min = this.$store.state.filters.find(el => filterId == el.id)?.values.find(el => el.max == filterValue)?.min
            this.sale_percent_max = filterValue;
        }
        else if (filterId === "4") {
            this.meter_price_min = this.$store.state.filters.find(el => filterId == el.id)?.values.find(el => el.max == filterValue)?.min
            this.meter_price_max = filterValue;
        }

        await this.updatePage(400)
    },

    methods: {
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
                    property_class: this.property_class,
                    sale_percent_min: this.sale_percent_min,
                    sale_percent_max: this.sale_percent_max,
                    commissioning_year: this.commissioning_year,
                    meter_price_min: this.meter_price_min,
                    meter_price_max: this.meter_price_max,
                    searchQuery: this.$store.state.searchQuery,
                    distinct: !this.$store.state.distinct,
                    city_name: this.city_name,
                    take: 10,
                    page: this.page ?? 1,
                    user_id: this.$store.state.user_id,

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
        async toggleFavorite(event, item) {
            const isFavorite = item.is_favorite

            if (isFavorite) {
                this.$store.state.myApi.delete(this.$store.state.restAddr + "/favorites", {
                    data: {
                        item_id: item.id,
                        user_id: this.$store.state.user_id,
                    }
                })
                    .then(response => {
                        item.is_favorite = false
                        if (this.$route.name === "Favorites") {
                            console.log(1212)
                            this.$store.state.results = this.$store.state.results?.filter((el) => el.id !== item.id)
                        }
                    })
                    .catch(e => { eventBus.$emit('noresponse', e) })
            } else {
                this.$store.state.myApi.put(this.$store.state.restAddr + "/favorites", {
                    item_id: item.id,
                    user_id: this.$store.state.user_id,

                })
                    .then(response => {
                        item.is_favorite = true
                    })
                    .catch(e => { eventBus.$emit('noresponse', e) })
            }
        }
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
        }

        &:nth-child(2n-1) {
            margin-right: 0.5rem;
        }

        &:nth-child(2n) {
            margin-left: 0.5rem;
        }

        .favorite-toggle {
            content: '';
            width: 30px;
            height: 30px;
            border-radius: 13px;
            background-color: transparent;
            border: 2px solid;
            border-color: rgb(197, 80, 105);
            background-color: rgb(197, 80, 105);
            position: absolute;
            top: 0.5rem;
            right: 0.5rem;
            transition: all 0.2s;

            &.favorite-item {
                background-color: #6e6e6e;
                border-color: #6e6e6e;
            }

            &:hover {
                background-color: rgb(197, 80, 105);

            }
        }
    }

}
</style>
  