<template>
    <div class="Favourites_listChannel">
        <div class="Favourites_listChannel__container container">
            <div class="Title_block">
                <h2 class="Title_title Favourites_listChannel__title">
                    Избранные каналы
                </h2>
            </div>
            <div class="preloaders_block">
                <InstagramLoader class="preloader" ref="preloader" viewBox="0 0 400 250"></InstagramLoader>
                <InstagramLoader class="preloader" ref="preloader" viewBox="0 0 400 250"></InstagramLoader>
                <InstagramLoader class="preloader" ref="preloader" viewBox="0 0 400 250"></InstagramLoader>
            </div>
            <div class="channels__list">
                <div v-for=" category  in  $store.state.categories">
                    <div class="Badge_badge">
                        <span class="Badge_badge__text">{{ category.name }}</span>
                    </div>
                    <div v-for=" channel  in  category.channels_array " class="Channels_channels__body">
                        <RouterLink :to="`/channels/${channel.id}`">
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
                                <div class="ChannelBlog_channelBlog__icon">
                                    <span class="_icon-arrow-right"></span>
                                </div>
                            </div>
                        </RouterLink>
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
        }
    },
    watch: {

    },
    beforeMount() {
    },
    async mounted() {
        window.Telegram?.WebApp.BackButton.hide()
        window.Telegram?.WebApp.expand()
        this.updatePage(300);
        window.Telegram?.WebApp.enableClosingConfirmation()
    },
    async beforeUnmount() {
    },
    methods: {
        async updatePage(delay) {
            this.$store.state.categories = await this.getCategories();

            this.$refs['channels__list']?.classList.add("hidden")
            document.body.classList.add('stop-scrolling')


            setTimeout(() => {
                const elements = document.getElementsByClassName('preloaders_block')

                console.log(elements)

                for (let el of elements) {
                    el.classList.add("hidden")
                }
                this.$refs['channels__list']?.classList.remove("hidden")
                document.body.classList.remove('stop-scrolling')

            }, delay)
        },
        async getCategories() {
            const results = await this.$store.state.myApi.get(this.$store.state.restAddr + '/favorites', {
                params: {
                    user_id: this.$store.state.userId,
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
    margin-top: 1rem
}
</style>
  