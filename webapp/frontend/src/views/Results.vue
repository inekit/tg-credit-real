<template>
    <h1>Каталог</h1>
    <searchBlock />
    <InstagramLoader class="preloader" ref="preloader" viewBox="0 0 300 250"></InstagramLoader>
    <InstagramLoader class="preloader" ref="preloader" viewBox="0 0 300 200"></InstagramLoader>
    <InstagramLoader class="preloader" ref="preloader" viewBox="0 0 300 200"></InstagramLoader>

    <MasonryWall class="results-block" :items="$store.state.results ?? []" :ssr-columns="1" :column-width="bodyWidth / 5"
        :gap="12">
        <template #default="{ item, index }">
            <div class="result-item">
                <router-link :to="`/items/${item.id}`">

                    <div class="img-container">
                        <img v-for="img_id in [...Array(item.images_count).keys()]" :key="img_id"
                            :src="`/api/img/${item.city_name === 'Москва' ? 'mos' : 'spb'}/${item.id}/${img_id}`" />
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
            page: 1,
            perPage: 10,
        }

    },
    watch: {
        "$store.state.searchQuery": async function () {
            this.$store.state.results = await this.sendSearchRequest();
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

        this.city = this.$route.params?.city;

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


        this.$store.state.results = await this.sendSearchRequest();

        this.$refs['results-block']?.classList.add("hidden")

        setTimeout(() => {
            const elements = document.getElementsByClassName('preloader')

            console.log(elements)

            for (let el of elements) {
                el.classList.add("hidden")
            }
            this.$refs['results-block']?.classList.remove("hidden")
        }, 1000)

        document.onload = () => {
            const elements = document.getElementsByClassName('preloader')

            console.log(elements)

            for (let el of elements) {
                el.classList.add("hidden")
            }
            this.$refs['results-block']?.classList.remove("hidden")
        }

        console.log(1, this.results)

    },

    methods: {
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
        async sendSearchRequest() {
            const results = await this.$store.state.myApi.get(this.$store.state.restAddr + '/items', {
                params: {
                    property_class: this.property_class,
                    sale_percent_min: this.sale_percent_min,
                    sale_percent_max: this.sale_percent_max,
                    commissioning_year: this.commissioning_year,
                    meter_price_min: this.meter_price_min,
                    meter_price_max: this.meter_price_max,
                    searchQuery: this.$store.state.searchQuery,
                    city: this.city,
                    take: 10,
                    page: this.page ?? 1,
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

        }
    }
}
</script>
  

<style lang="scss">
.preloader {
    padding-left: 1rem;
    padding-top: 1rem;
    width: calc(100% - 2rem);
}

.hidden {
    display: none !important;
}

.results-block {
    // display: flex;
    width: calc(100% - 2rem);
    margin: 1rem;
    padding: 0;
    list-style: none;
    flex-wrap: wrap;

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
        }

        img {
            position: absolute;
            margin: auto;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            max-width: 150%;
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
                margin: 1rem;
                //position: absolute;
                top: 70%;
                width: 40vw;
            }

            h2 {
                margin: 0;
                width: 37vw;
                color: #414141;
                font-weight: 200;
                font-size: 1.3rem;
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
  