<template>
    <h1>Каталог</h1>
    <div class="search-block">
        <input type="search" :value="$store.state.searchQuery" @input="search" @change="openResults" placeholder="Найти.."/>
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
  </style>
  