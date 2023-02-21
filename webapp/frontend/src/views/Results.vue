<template>
    <searchBlock/>
    <h1>Каталог</h1>
    <div class="results-block">
        <div class="result-item" v-for="item in this.$store.state.results" :key="item.id">
            <router-link :to="`/items/${item.id}`">
                <img :src="item.img" />
                <h2>{{ item.name }}</h2>
            </router-link>
        </div>
    </div>
  </template>
  
<script>
import searchBlock from '@/components/Search.vue';
import eventBus from '../eventBus'

export default {
    components: {searchBlock},
    data(){
    return {
        results: [{
            id: 1, title: "Объект 1", link: "https://google.com", img: ""
        }],
    }
        
    },
    watch: {
        "$store.state.searchQuery": function() {
            this.sendSearchRequest()
    }
    },
    mounted(){
        console.log(this.$route.params)

        const filterId = this.$route.params?.page;
        const filterValue = this.$route.params?.filter;

        this.city = this.$route.params?.city;

        if (filterId === "2") this.property_class = filterValue;
        else if (filterId === "3") this.commissioning_year = filterValue;
        else if (filterId === "1") {
            this.sale_percent_min = this.$store.state.filters.find(el=>filterId==el.id)?.values.find(el=>el.max==filterValue)?.min
            this.sale_percent_max = filterValue;
        }
        else if (filterId === "4") {
            this.meter_price_min = this.$store.state.filters.find(el=>filterId==el.id)?.values.find(el=>el.max==filterValue)?.min
            this.meter_price_max = filterValue;
        }

        this.sendSearchRequest()
    },
    methods: {
        sendSearchRequest(){
            this.$store.state.myApi.get(this.$store.state.restAddr+'/items',{
                params: {
                    property_class: this.property_class,
                    sale_percent_min: this.sale_percent_min,
                    sale_percent_max: this.sale_percent_max,
                    commissioning_year: this.commissioning_year,
                    meter_price_min: this.meter_price_min,
                    meter_price_max: this.meter_price_max,
                    searchQuery: this.$store.state.searchQuery,
                    city: this.city,

            }})
            .then(response => this.$store.state.results = response.data)
            .catch(e=>{eventBus.$emit('noresponse', e)})
        }
    }
}
</script>

  <style lang="scss">
  </style>
  