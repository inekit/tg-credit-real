<template>
    <div class="navbar">
        <div class="navbar__container">
            <div class="navbar__body">
                <RouterLink aria-current="page" class="_icon-home BottomNavBar_bottomNavBar__link"
                    :class="[$route.name !== 'Profile' ? 'active' : '']" :to="`/`">
                </RouterLink>
                <RouterLink class="_icon-bookmark BottomNavBar_bottomNavBar__link" active-class="active" :to="'/profile'">
                </RouterLink>
            </div>
        </div>
    </div>
</template>
  
<script>

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

.navbar {
    background-color: #1f1c2f;
    bottom: 0;
    box-shadow: 0 0 20px rgba(0, 0, 0, .5);
    left: 0;
    position: fixed;
    width: 100%;
    z-index: 5;

    .navbar__container {
        max-width: none;
        padding: 0 1.25rem;
    }

    .navbar__body {
        align-items: center;
        display: flex;
        justify-content: space-between;
        min-height: 3.75rem;
        padding: 0 3.525rem 0.5rem;

        &>a {
            font-size: 1.25rem;
            transition: .2s;

            &.active {
                -webkit-text-fill-color: #2274a5;
            }

            &._icon-home:before {
                content: "";
            }

            &._icon-bookmark:before {
                content: "";
            }

            &:before {
                font-feature-settings: normal;
                -webkit-font-smoothing: antialiased;
                -moz-osx-font-smoothing: grayscale;
                display: block;
                font-family: icons;
                font-style: normal;
                font-variant: normal;
                font-weight: 400;
                line-height: 1;
                text-transform: none;
                color: #706c88;
            }
        }

    }
}
</style>
  