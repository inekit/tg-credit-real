<template>
    <div class="search-block">
        <input type="search" :value="$store.state.searchQuery" @change="openResults" placeholder="Поиск.." />
        <div v-show="this.$route.name === 'Results'">
            <input class="form-check-input" type="checkbox" value="" id="distinctCheck"
                v-model="this.$store.state.distinct">
            <label class="form-check-label" for="distinctCheck">
                Показать все дома в ЖК
            </label>
        </div>

    </div>
</template>
  
<script>

export default {
    data() {
        return {
        }
    },
    mounted() {

    },
    methods: {
        search(e) {
            this.$store.state.searchQuery = e.target.value
        },
        openResults(e) {
            this.clickInput()
            //if (this.$route.name === "Filters") 
            this.$store.state.searchQuery = e.target.value
            this.$router.push('/results/' + this.$route.params.city)

        },
        clickInput() {
            document.activeElement.blur();
        }
    }



}
</script>

<style lang="scss">
.search-block {
    margin: 1rem;
    position: relative;

    input[type="search"] {
        width: 100%;
        height: 40px;
        border-radius: 0.5rem;
        border: 1px solid;
        border-color: #e2e2e2;
        font-size: 1rem;
        padding: 1rem;

        &:hover {
            border-color: #7090fa;

        }
    }

    input[type="checkbox"] {
        width: 15px;
        height: 15px;
        border-radius: 0.5rem;
        border: 0px solid;
        border-color: #e2e2e2;
        margin: 15px 0 0 5px;

        &:hover {
            border-color: #7090fa;

        }

    }

    label {
        position: absolute;
        margin-top: -5px;
        bottom: 3px;
        left: 30px;
        font-size: 0.9rem;
        color: #414141;

    }
}
</style>
  