<template>
    <div class="search-block">
        <input type="search" :value="$store.state.searchQuery" @change="openResults" placeholder="Поиск.." />
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



    .categories {
        height: 30px;
        width: 30px;
        border-radius: 13px;
        background-color: transparent;
        position: absolute;
        top: calc(-0.7rem - 35px);
        right: 0;
        z-index: 999;

    }

    .categories>img,
    .sort>img {
        width: 30px;
    }

    .categories-list {
        height: 100vh;
        height: var(--tg-viewport-stable-height);
        width: 50vw;
        position: fixed;
        top: 0;
        right: 0;
        transform: translateX(calc(100% + 4rem));
        padding: 1rem;
        background-color: white;
        box-shadow: -1em 0 1em rgba(165, 165, 165, 0.404);
        z-index: 998;
        transition: all ease-out 0.3s;
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
            transform: translateX(0);

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
        top: 0;
        transform: translateY(-300px);
        padding: 1rem;
        background-color: white;
        box-shadow: 0 1rem 1rem rgba(165, 165, 165, 0.404);
        z-index: 999;
        transition: all ease-out 0.3s;

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
            transform: translateY(0);


        }
    }

    .close-block {
        display: none;

        &.shown {
            display: block;
            position: fixed;
            height: 100vh;
            left: 0;
            top: 0;
            height: var(--tg-viewport-stable-height);
            width: 100vw;
            z-index: 997;
            background: transparent;

        }
    }



    .sort {
        height: 30px;
        width: 30px;
        border-radius: 13px;
        background-color: transparent;
        position: absolute;
        top: calc(-0.7rem - 35px);
        right: 40px;


    }
}
</style>
  