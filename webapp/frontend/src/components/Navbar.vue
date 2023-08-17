<template>
    <div class="BottomNavBar_bottomNavBar">
        <div class="container">
            <div class="BottomNavBar_bottomNavBar__body">
                <RouterLink aria-current="page" class="_icon-home BottomNavBar_bottomNavBar__link" active-class="active"
                    :to="`/channels/${$store.state.userId}`"></RouterLink>
                <RouterLink class="_icon-bookmark BottomNavBar_bottomNavBar__link" active-class="active"
                    :to="'/favourites'"></RouterLink>
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

<style lang="scss">
.BottomNavBar_bottomNavBar__link {
    &.active {
        -webkit-text-fill-color: #2274a5;
    }
}
</style>
  