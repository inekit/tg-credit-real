<template>
    <div class="search-block">
        <input type="search" :value="$store.state.searchQuery" @input="search" @change="openResults" placeholder="Поиск.."/>
    </div>
  </template>
  
<script>

export default {
    data(){
    return {
    }
    },
    mounted(){
        
    },
    methods: {
        search(e){
            this.$store.state.searchQuery = e.target.value
        },
        openResults(e){
            if (this.$route.name === "Filters") this.$router.push('/results')
        }
    }
    
    
    
}
</script>

<style lang="scss">
.search-block{
    margin: 1rem; 

    input{
        width: 100%;
        height: 40px;
        border-radius: 0.5rem;
        border: 1px solid;
        border-color: #e2e2e2;
        font-size: 1rem;
        padding: 1rem;
        &:hover{
            border-color: #7090fa;

        }
    }
}
</style>
  