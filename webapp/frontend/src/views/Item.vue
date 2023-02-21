<template>
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

        window.Telegram.WebApp.MainButton.enable();

        window.Telegram.WebApp.onEvent('mainButtonClicked', function(){
            window.Telegram.WebApp.sendData(this.item.id); 
        });
    },
    methods: {
        getItem(id){
            this.$store.state.myApi.get(this.$store.state.restAddr+'/items',{
                params: {
                    id
            }})
            .then(response => this.item = response.data)
            .catch(e=>{eventBus.$emit('noresponse', e)})
        }
    }
}
</script>

<style lang="scss">

</style>
  