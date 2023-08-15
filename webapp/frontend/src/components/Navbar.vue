<template>
    <div class="BottomNavBar_bottomNavBar">
        <div class="container">
            <div class="BottomNavBar_bottomNavBar__body">
                <RouterLink aria-current="page" class="_icon-home BottomNavBar_bottomNavBar__link active" :to="'/'" style="
                  background: linear-gradient(
                      114.44deg,
                      rgb(98, 74, 242) 0%,
                      rgb(80, 221, 195) 100%
                    )
                    text;
                  -webkit-text-fill-color: transparent;
                "></RouterLink>
                <RouterLink class="_icon-bookmark BottomNavBar_bottomNavBar__link" :to="'/favourites'"></RouterLink>
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
    },
    methods: {
    }



}
</script>

<style lang="scss"></style>
  