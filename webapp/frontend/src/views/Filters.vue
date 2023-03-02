<template>
    <h1>Каталог</h1>
    <searchBlock />
    <ul v-if="$route.params.id" class="filters-block">
        <li class="filter-link" v-for="city in cities" :key=city.name>
            <router-link :to="`/filters/${city.name}/filters`">
                <picture>
                    <img :src="city.img" />
                </picture>
                <h2>{{ city.name }}</h2>
            </router-link>
        </li>
    </ul>
    <ul v-if="$route.params.page === 'filters'" class="filters-block">
        <li class="filter-link" v-for="filter in $store.state.filters" :key="filter.title">
            <router-link :to="`/filters/${$route.params.city}/` + filter.id">
                <picture>
                    <img :src="filter.img" />
                </picture>
                <h2>{{ filter.title }}</h2>
            </router-link>
        </li>
    </ul>
    <ul v-if="!['filters', 'city'].includes($route.params.page) && $route.params.page" class="filters-block">
        <li class="filter-link" v-for="filter in $store.state.filters.find(el => el.id == $route.params.page)?.values"
            :key="filter">
            <router-link
                :to="'/results/' + $route.params.city + '/' + $route.params.page + '/' + (filter.max ?? filter.name ?? filter)">
                <picture>
                    <img :src="filter.img" />
                </picture>
                <h2>{{ filter.name ?? ((filter.max || filter.min) ? `${filter.min} - ${filter.max} ₽ за m²` : filter) }}
                </h2>
            </router-link>
        </li>
    </ul>
</template>

<script>
import searchBlock from '@/components/Search.vue';

export default {
    components: { searchBlock },
    data: () => {
        return {
            cities: [
                {
                    name: "Москва",
                    img: require('@/assets/img/moscow.webp'),
                },
                {
                    name: "Санкт-Петербург",
                    img: require('@/assets/img/spb.webp'),
                }
            ],

        }
    },
    watch: {
        $route(to, from) {
            if (this.$route.params.city === 'city') window.Telegram?.WebApp.BackButton.hide();
            if (this.$route.params.page === 'filters') window.Telegram?.WebApp.BackButton.show();
        }
    },
    mounted() {
        window.Telegram?.WebApp.expand();
        window.Telegram?.WebApp.enableClosingConfirmation()
        window.Telegram?.WebApp.BackButton.onClick(() => {
            this.$router.go(-1)
        });
        this.$store.state.user_id = this.$route.params.id

    }
}
</script>

<style lang="scss">
.filters-block {
    display: flex;
    margin: 1rem;
    padding: 0;
    list-style: none;
    flex-wrap: wrap;
    gap: 1rem;

    .filter-link {
        flex: 1 1 calc((100% / 3) - 2rem);
        max-width: calc(50vw - 3.5rem);
        height: calc(50vw - 4rem);
        //margin: 1rem;
        margin-bottom: 0;
        padding: 1rem;
        border-radius: 1rem;
        display: block;
        background: rgb(255, 255, 255);
        overflow: hidden;
        position: relative;

        a {
            display: block;
            text-decoration: none;
            position: absolute;
            height: calc(100% - 2rem);
            width: calc(100% - 2rem);
            left: 0;
            top: 0;
            padding: 1rem;
            border-radius: 1rem;

        }

        h2 {
            margin: 0;
            text-decoration: none;
            color: white;
            font-size: 1.1rem;
            font-weight: 500;
            position: absolute;
            width: calc(100% - 2rem);
        }

        img {
            position: absolute;
            width: auto;
            height: 100%;
            left: 50%;
            transform: translateX(-50%);
            right: 0;
            top: 0;
            margin: auto;
        }

        picture:after {
            content: '';
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            background-color: rgba(0, 0, 0, 0.5);
            border-radius: 1rem;

        }
    }
}
</style>
  