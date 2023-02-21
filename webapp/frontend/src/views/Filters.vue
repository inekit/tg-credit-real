<template>
    <searchBlock/>
    <h1>Каталог</h1>
    <ul v-if="$route.params.city==='city'" class="cities-block">
        <li class="filter-link" v-for="city in cities" :key=city.name>
            <router-link :to="`/filters/${city.name}/filters`">
                <img :src="city.img" />
                <h2>{{ city.name }}</h2>
            </router-link>
        </li>
    </ul>
    <ul v-if="$route.params.page==='filters'"  class="filters-block">
        <li class="filter-link" v-for="filter in $store.state.filters" :key="filter.title">
            <router-link :to="`/filters/${$route.params.city}/`+filter.id">
                <img :src="filter.img" />
                <h2>{{ filter.title }}</h2>
            </router-link>
        </li>
    </ul>
    <ul  v-if="!['filters', 'city'].includes($route.params.page)"  class="sub-filters-block">
        <li class="filter-link" v-for="filter in $store.state.filters.find(el=>el.id==$route.params.page)?.values" :key="filter">
            <router-link :to="'/results/'+$route.params.city +'/'+$route.params.page +'/'+ (filter.max ?? filter.name ?? filter)">
                <h2>{{ filter.name ??  ((filter.max || filter.min) ? `${filter.min} - ${filter.max} ₽ за m²` : filter) }}</h2>
            </router-link>
        </li>
    </ul>
</template>

<script>
import searchBlock from '@/components/Search.vue';

export default {
    components: {searchBlock},
    data: ()=>{
        return {
            cities: [
                {
                    name: "Санкт-Петербург",
                    img: "",
                },
                {
                    name: "Москва",
                    img: "",
                }
            ],
            
        }
    },
    mounted(){
        console.log(this.$route.params.page)
    }
}
</script>

<style lang="scss">

</style>
  