<template>
    <h1>Каталог</h1>
    <searchBlock/>
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
        window.Telegram.WebApp.MainButton.disable();

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
.results-block{
    display: flex;
    margin: 0;
    padding: 0;
    list-style: none;
    flex-wrap: wrap;
    .result-item{
        width: calc(50vw - 3.5rem);
        height: calc(70vw - 3.5rem);
        margin: 1rem;
        margin-bottom: 0;
        padding: 1rem ;
        border-radius: 1rem;
        display: block;
        background: rgb(255, 255, 255);
       // border: 1px solid rgb(169, 169, 169);
        box-shadow: 0px 5px 5px rgb(169, 169, 169);
        overflow: hidden;
        position: relative;
        img{
            position: absolute;
            max-width: 150%;
            max-height: 30%;
        }
        a{
            display: block;
            text-decoration: none;
            position: absolute;
            height: calc(100% - 2rem);
            width: calc(100% - 2rem);
            left: 0;
            top: 0;
            margin: 1rem;
            h2{
                position: absolute;
                top: 30vw;
                width: 40vw;
                color: #414141;
                font-weight: 200;
                font-size: 1.3rem;
            }
        }
        &:nth-child(2n-1){
        margin-right: 0.5rem;
        }
        &:nth-child(2n){
            margin-left: 0.5rem;
        }
    }
    
}
</style>
  