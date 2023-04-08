<template>
    <div class="search-block">
        <input type="search" :value="$store.state.searchQuery" @change="openResults" placeholder="Поиск.." />
        <div class="sort" @click="toggleSort">
            <img :src="require('@/assets/img/sort.svg')" />
        </div>
        <div class="categories" @click="toggleCategories">
            <img :src="require('@/assets/img/categories.svg')" />
        </div>
        <div ref="sort-list" class="sort-list">
            <span>Сортировать по</span>
            <div v-for="sort_value, sort_key in {
                newing: 'Новизна', ascending: 'По возрастанию', descending: 'По убыванию'
            }">
                <label :for="sort_key">{{ sort_value }}</label>
                <input :id="sort_key" :checked="sort_key === $store.state.filters.sort_type" @click="changeSort"
                    type="radio" name="project-name" :value="sort_key" />
            </div>
        </div>
        <div ref="categories-list" class="categories-list">
            <span>Категория</span>
            <div>
                <input id="null-name" :checked="!$store.state.filters.category_name" @click="changeCategory" type="radio"
                    name="project-name" value="" />
                <label for="null-name">Все категории</label>
            </div>
            <div v-for="category in categories" :key="category.name">
                <input :id="category.name" :checked="category.name === $store.state.filters.category_name"
                    @change="changeCategory" type="radio" name="project-name" :value="category.name"
                    :label="category.name" />
                <label :for="category.name">{{ category.name }}</label>
            </div>
        </div>
    </div>
</template>
  
<script>
import eventBus from '../eventBus'

export default {
    data() {
        return {
            categories: {},
        }
    },
    async beforeMount() {
        this.categories = await this.getCategories()
        let uri = window.location.search.substring(1);
        this.params = new URLSearchParams(uri)
        this.$store.state.filters = { category_name: this.params.get('category'), sort_type: this.params.get('sort') ?? "newing" }
    },
    methods: {
        search(e) {
            this.$store.state.searchQuery = e.target.value
        },
        openResults(e) {
            this.clickInput()
            this.$store.state.searchQuery = e.target.value
            if (this.$route.name === "Filters" || this.$route.name === "Cities")
                this.$router.push('/results/' + this.$route.params.city)

        },
        async getCategories() {
            return await this.$store.state.myApi
                .get(this.$store.state.restAddr + '/categories')
                .then((res) => {
                    return res.data
                })
                .catch((error) => {
                    eventBus.$emit('noresponse', error)
                })
        },
        toggleCategories() {
            this.$refs['categories-list'].classList.toggle("shown")
        },
        toggleSort() {
            this.$refs['sort-list'].classList.toggle("shown")
        },
        changeSort(e) {
            this.$store.state.filters = { category_name: this.$store.state.filters.category_name, sort_type: e.target.value }
            const searchURL = new URL(window.location);
            searchURL.searchParams.set('sort', e.target.value);
            window.history.pushState({}, '', searchURL);
            this.toggleSort()
        },
        changeCategory(e) {
            this.$store.state.filters = { sort_type: this.$store.state.filters.sort_type, category_name: e.target.value }
            const searchURL = new URL(window.location);
            searchURL.searchParams.set('category', e.target.value);
            window.history.pushState({}, '', searchURL);
            this.toggleCategories()
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



    .categories {
        height: 30px;
        width: 30px;
        border-radius: 13px;
        background-color: transparent;
        position: absolute;
        top: 4px;
        right: calc(1rem + 2px);
        z-index: 999;

    }

    .categories>img,
    .sort>img {
        width: 30px;
    }

    .categories-list {
        height: 100vh;
        width: 50vw;
        position: fixed;
        top: -1rem;
        right: -50vh;
        padding: 1rem;
        background-color: white;
        box-shadow: -1em 0 1em rgba(165, 165, 165, 0.404);
        z-index: 100;
        transition: ease-out 0.4s;
        overflow: scroll;

        &>div {
            input {
                display: none;
            }

            padding: 10px 0;
            border-top: 1px solid;
            border-bottom: 1px solid;
            border-color: #414141;
            text-transform: uppercase;
            font-weight: 400;
            font-size: 17px;
        }

        &>span {
            opacity: 0;
            color: #414141;
            font-weight: 500;
            font-size: 20px;
            line-height: 35px;
            display: block;
            margin-bottom: 20px;
        }

        &.shown {
            right: 0;

            &>span {
                opacity: 1;
            }
        }
    }

    .sort-list {
        height: 170px;
        width: 100vw;
        position: fixed;
        left: 0;
        top: -300px;
        padding: 1rem;
        background-color: white;
        box-shadow: 0 1rem 1rem rgba(165, 165, 165, 0.404);
        z-index: 999;
        transition: ease-out 0.4s;

        &>div {
            position: relative;

            input {
                position: absolute;
                right: 2rem;
                top: 12px;
            }

            label {
                display: block;
                width: 100%;
                margin: 0;
            }

            padding: 10px 0;
            font-weight: 400;
            font-size: 1.1rem;
            line-height: 17px;
            margin-bottom: 10px;
        }

        &>span {
            color: #414141;
            font-weight: 500;
            font-size: 1.2rem;
            line-height: 35px;
            display: block;
            margin-bottom: 10px;
        }

        &.shown {
            top: -1rem;

        }
    }

    .sort {
        height: 30px;
        width: 30px;
        border-radius: 13px;
        background-color: transparent;
        position: absolute;
        top: 4px;
        right: calc(1rem + 2px + 40px);


    }
}
</style>
  