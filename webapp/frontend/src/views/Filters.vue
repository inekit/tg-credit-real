<template>
    <h1>Каталог</h1>
    <searchBlock />
    <ul v-if="$route.params.city === 'city'" class="filters-block">
        <li class="filter-link" v-for="city in cities" :key=city.name>
            <router-link :to="`/filters/${city.name}/filters`">
                <img :src="city.img" />
                <h2>{{ city.name }}</h2>
            </router-link>
        </li>
    </ul>
    <ul v-if="$route.params.page === 'filters'" class="filters-block">
        <li class="filter-link" v-for="filter in $store.state.filters" :key="filter.title">
            <router-link :to="`/filters/${$route.params.city}/` + filter.id">
                <img :src="filter.img" />
                <h2>{{ filter.title }}</h2>
            </router-link>
        </li>
    </ul>
    <ul v-if="!['filters', 'city'].includes($route.params.page)" class="filters-block">
        <li class="filter-link" v-for="filter in $store.state.filters.find(el => el.id == $route.params.page)?.values"
            :key="filter">
            <router-link
                :to="'/results/' + $route.params.city + '/' + $route.params.page + '/' + (filter.max ?? filter.name ?? filter)">
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
                    img: "",
                },
                {
                    name: "Санкт-Петербург",
                    img: "",
                }
            ],

        }
    },
    watch: {
        $route(to, from) {
            if ($route.params.city === 'city') window.Telegram?.WebApp.BackButton.hide();
            if ($route.params.city === 'filters') window.Telegram?.WebApp.BackButton.show();

        }
    },
    mounted() {
        window.Telegram?.WebApp.expand();
        window.Telegram?.WebApp.BackButton.onClick(() => {
            this.$router.go(-1)
        });
    }
}
</script>

<style lang="scss">
.filters-block {
    display: flex;
    margin: 0;
    padding: 0;
    list-style: none;
    flex-wrap: wrap;

    .filter-link {
        width: calc(50vw - 3.5rem);
        height: calc(50vw - 3.5rem);
        margin: 1rem;
        margin-bottom: 0;
        padding: 1rem;
        border-radius: 1rem;
        display: block;
        background: gray;
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

        }

        h2 {
            margin: 0;
            text-decoration: none;
            color: white;
            font-size: 1.2rem;
        }

        img {
            position: absolute;
            height: 100%;
            width: 100%;
            left: 0;
            top: 0;
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
  