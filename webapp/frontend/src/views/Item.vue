<template>
    <div class="img-container">
        <img v-for="img_id in [...Array(item.images_count).keys()]" :key="img_id" :src="`/api/img/${item.city_name === 'Москва' ? 'mos' : 'spb'}/${item.id}/${img_id}`"/>
    </div>
    <h1>{{item.name}}</h1>
    <ul>
        <li>📍 Адрес: {{item.address}}</li>
        <li>📒 Проектная декларация: {{item.declaration}}</li>
        <li>🗓 Ввод в эксплуатацию: {{item.commissioning}}</li>
        <li>🔑 Выдача ключей: {{item.issuance_date}}</li>
        <li>💵 Средняя цена за 1 м²: {{item.meter_price}}</li>
        <li>📈 Распроданность квартир: {{item.sale_percent}}%</li>
        <li>🏢 Этажей: {{item.floor_count}}</li>
        <li>🎨 Тип отделки: {{item.finish_type}}</li>
    </ul>
</template>

<script>
export default {
    data: ()=>{
        return {
            item: {},
            
        }
    },
    mounted(){
        this.getItem(this.$route.params.id);
        
        window.Telegram?.WebApp.MainButton.onClick(()=>{
            window.Telegram?.WebApp.close();
            this.getFiles();
       });
        window.Telegram.WebApp.MainButton.enable();
        window.Telegram.WebApp.MainButton.show();
        window.Telegram.WebApp.MainButton.setText("Узнать больше");
    },
    methods: {
        getItem(id){
            this.$store.state.myApi.get(this.$store.state.restAddr+'/items',{
                params: {
                    id
            }})
            .then(response => this.item = response.data)
            .catch(e=>{eventBus.$emit('noresponse', e)})
        },
        getFiles(){
            this.$store.state.myApi.get(this.$store.state.restAddr+'/files',{
                params: {
                    user_id:  window.Telegram.WebApp.initDataUnsafe.user.id,
                    item_id: this.$route.params.id
            }})
            .then(response => this.item = response.data)
            .catch(e=>{eventBus.$emit('noresponse', e)})
        }
        
    }
}
</script>

<style lang="scss">

</style>
  