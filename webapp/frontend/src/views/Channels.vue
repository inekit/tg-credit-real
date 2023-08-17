<template>
    <div class="MainPage_mainPage">
        <div class="MainPage_headerPage">
            <div class="container">
                <div class="MainPage_actionTitle">
                    <div class="Title_block">
                        <h2 class="Title_title">Категории</h2>
                    </div>
                </div>
            </div>
            <div>
                <div class="Category_categories__container container">
                    <div data-simplebar="init" style="max-width: 768px">
                        <div class="simplebar-wrapper" style="margin: 0px">
                            <div class="simplebar-height-auto-observer-wrapper">
                                <div class="simplebar-height-auto-observer"></div>
                            </div>
                            <div class="simplebar-mask">
                                <div class="simplebar-offset" style="right: 0px; bottom: 0px">
                                    <div class="simplebar-content-wrapper" tabindex="0" role="region"
                                        aria-label="scrollable content" style="height: auto; overflow: scroll hidden">
                                        <div class="simplebar-content" style="padding: 0px">
                                            <ul class="Category_categories__list">
                                                <li class="CategoryItem_item">
                                                    <button type="button" class="CategoryItem_button"
                                                        :class="[category_name === null ? 'CategoryItem_button_active' : '']"
                                                        @click="category_name = null;">
                                                        <span>Все</span>
                                                    </button>
                                                </li>
                                                <li v-for=" category  in  $store.state.categories "
                                                    class="CategoryItem_item">
                                                    <button type="button" class="CategoryItem_button"
                                                        :class="[category_name === category.name ? 'CategoryItem_button_active' : '']"
                                                        @click="category_name = category.name">
                                                        <span>{{ category.name }}</span>
                                                    </button>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="simplebar-placeholder" style="width: auto; height: 50px"></div>
                        </div>
                        <div class="simplebar-track simplebar-horizontal" style="visibility: visible">
                            <div class="simplebar-scrollbar" style="
                        width: 300px;
                        display: block;
                        transform: translate3d(0px, 0px, 0px);
                      "></div>
                        </div>
                        <div class="simplebar-track simplebar-vertical" style="visibility: hidden">
                            <div class="simplebar-scrollbar" style="height: 0px; display: none"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div>
            <div class="preloaders_block">
                <InstagramLoader class="preloader" ref="preloader" viewBox="0 0 400 250"></InstagramLoader>
                <InstagramLoader class="preloader" ref="preloader" viewBox="0 0 400 250"></InstagramLoader>
                <InstagramLoader class="preloader" ref="preloader" viewBox="0 0 400 250"></InstagramLoader>
            </div>
            <div class="MainPage_listChannel__container container">
                <div class="Title_block">
                    <h2 class="Title_title MainPage_listChannel__title">
                        Каналы
                    </h2>
                </div>
                <div>
                    <div v-for=" category  in  $store.state.categories_filtered ">
                        <div class="Badge_badge">
                            <span class="Badge_badge__text">{{ category.name }}</span>
                        </div>
                        <div v-for=" channel  in  category.channels_array " class="Channels_channels__body">
                            <RouterLink :to="`/channel/${channel.id}`">
                                <div class="ChannelBlog_channelBlog">
                                    <div class="ChannelBlog_channelBlog__image">
                                        <img :src="`/colorsserver/public/pics/${channel.preview}`" alt="" />
                                    </div>
                                    <div class="ChannelBlog_channelBlog__content">
                                        <div class="ChannelBlog_channelBlog__subscribers _icon-profile">
                                            {{ channel.participants_count }}
                                        </div>
                                        <h3 class="ChannelBlog_channelBlog__title">
                                            {{ channel.title }}
                                        </h3>
                                        <div class="ChannelBlog_channelBlog__text">
                                            <p>
                                                {{ channel.description }}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </RouterLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <NavBar />
</template>

<script>
import NavBar from '@/components/Navbar.vue';

import eventBus from '../eventBus'
import { ListLoader, InstagramLoader } from 'vue-content-loader'


export default {
    components: { NavBar, InstagramLoader },
    data() {
        return {
            category_name: null,
        }
    },
    watch: {
        async category_name() {
            this.$store.state.categories_filtered = await this.getCategories()
        }
    },
    beforeMount() {
    },
    async mounted() {
        window.Telegram?.WebApp.BackButton.hide()
        window.Telegram?.WebApp.expand()
        this.updatePage(300);

        const buttonUserId = window.Telegram?.WebApp?.initDataUnsafe?.user?.id
        this.$store.state.userId = buttonUserId ?? this.$route.params?.userId;

        window.Telegram?.WebApp.enableClosingConfirmation()
    },
    async beforeUnmount() {
    },
    methods: {
        async updatePage(delay) {
            this.$store.state.categories = await this.getCategories(true);
            this.$store.state.categories_filtered = this.$store.state.categories

            this.$refs['MainPage_listChannel__container']?.classList.add("hidden")
            document.body.classList.add('stop-scrolling')


            setTimeout(() => {
                const elements = document.getElementsByClassName('preloaders_block')

                console.log(elements)

                for (let el of elements) {
                    el.classList.add("hidden")
                }
                this.$refs['MainPage_listChannel__container']?.classList.remove("hidden")
                document.body.classList.remove('stop-scrolling')

            }, delay)
        },
        async getCategories() {
            const results = await this.$store.state.myApi.get(this.$store.state.restAddr + '/categories', {
                params: {
                    category: this.category_name
                }
            })
                .then(response => {
                    return response.data;
                })
                .catch(e => { eventBus.$emit('noresponse', e) })

            return results

        },
    }
}
</script>
  

<style lang="scss" scoped>
.hidden {
    display: none;
}

.preloaders_block {
    margin: 0 1.25rem 3.75rem !important
}
</style>
  