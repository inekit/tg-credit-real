<template>
    <div class="preloaders_block">
        <InstagramLoader class="preloader" ref="preloader" viewBox="0 0 400 250"></InstagramLoader>
        <InstagramLoader class="preloader" ref="preloader" viewBox="0 0 400 250"></InstagramLoader>
        <InstagramLoader class="preloader" ref="preloader" viewBox="0 0 400 250"></InstagramLoader>
    </div>
    <div class="channel-page">
        <div class="react-tabs" data-rttabs="true">
            <div class="Channel_channelProfile">
                <div class="Channel_channelProfile__container container">
                    <div class="Channel_channelProfile__header">
                        <div>
                            <RouterLink type="button" class="Channel_channelProfile__backIcon _icon-angle-left" :to="'/'">
                            </RouterLink>
                            <div class="Badge_badge Channel_channelProfile__badge">
                                <span class="Badge_badge__text">Дизайн</span>
                            </div>
                        </div>
                        <button type="button" class="Channel_channelProfile__image">
                            <img src="https://aviatatravel.com/media/channels_logo/2022-11-20-17-18-57.jpg"
                                alt="" /></button><button type="button"
                            class="Channel_channelProfile__icon _icon-bookmark"></button>
                    </div>
                    <div class="Channel_channelProfile__content">
                        <h1 class="Channel_channelProfile__title">Дизайнус</h1>
                        <div class="Channel_channelProfile__subcribers _icon-profile">
                            26 244
                        </div>
                        <p class="Channel_channelProfile__text">
                            Публикуем прекрасный дизайн, созданный гениями мира сего
                        </p>
                    </div>
                    <div class="Channel_channelProfile__body">
                        <ul class="Channel_channelProfile__tabList" role="tablist">
                            <li class="Channel_channelProfile__item Channel_channelProfile__item_active" role="tab"
                                id="tab:r0:0" aria-selected="true" aria-disabled="false" aria-controls="panel:r0:0"
                                tabindex="0" data-rttab="true">
                                Информация
                            </li>
                            <li class="Channel_channelProfile__item" role="tab" id="tab:r0:1" aria-selected="false"
                                aria-disabled="false" aria-controls="panel:r0:1" data-rttab="true">
                                Стоимость
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="react-tabs__tab-panel react-tabs__tab-panel--selected" role="tabpanel" id="panel:r0:0"
                aria-labelledby="tab:r0:0">
                <div class="Channel_channelContent">
                    <div class="container">
                        <div>
                            <div class="ChannelInfo_channelContent__actions">
                                <button type="button" class="ChannelInfo_channelContent__action">
                                    <span
                                        class="ChannelInfo_channelContent__label _icon-arrow-right">ТГстат</span></button><button
                                    type="button" class="ChannelInfo_channelContent__action">
                                    <span class="ChannelInfo_channelContent__label _icon-arrow-right">Телеметр</span>
                                </button>
                            </div>
                            <div class="ChannelInfo_channelContent__content">
                                <div class="ChannelInfo_channelContent__data">
                                    <span class="ChannelInfo_channelContent__placeholder">Охваты</span>
                                    <p class="ChannelInfo_channelContent__text">5.7K</p>
                                </div>
                                <div class="ChannelInfo_channelContent__data">
                                    <span class="ChannelInfo_channelContent__placeholder">ERR</span>
                                    <p class="ChannelInfo_channelContent__text">22</p>
                                </div>
                                <div class="ChannelInfo_channelContent__data">
                                    <span class="ChannelInfo_channelContent__placeholder">CPM</span>
                                    <p class="ChannelInfo_channelContent__text">1.2K</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="react-tabs" data-rttabs="true">
                        <div class="Channel_channelSwiper__container container">
                            <div>
                                <div data-simplebar="init" style="max-width: 768px">
                                    <div class="simplebar-wrapper" style="margin: 0px">
                                        <div class="simplebar-height-auto-observer-wrapper">
                                            <div class="simplebar-height-auto-observer"></div>
                                        </div>
                                        <div class="simplebar-mask">
                                            <div class="simplebar-offset" style="right: 0px; bottom: 0px">
                                                <div class="simplebar-content-wrapper" tabindex="0" role="region"
                                                    aria-label="scrollable content" style="height: auto; overflow: hidden">
                                                    <div class="simplebar-content" style="padding: 0px">
                                                        <ul class="Channel_channelSwiperTabs__list" role="tablist">
                                                            <li class="Channel_channelSwiperTabs__item Channel_channelSwiperTabs__item_active"
                                                                role="tab" id="tab:r1:0" aria-selected="true"
                                                                aria-disabled="false" aria-controls="panel:r1:0"
                                                                tabindex="0" data-rttab="true">
                                                                Пол
                                                            </li>
                                                            <li class="Channel_channelSwiperTabs__item" role="tab"
                                                                id="tab:r1:1" aria-selected="false" aria-disabled="false"
                                                                aria-controls="panel:r1:1" data-rttab="true">
                                                                Гео
                                                            </li>
                                                            <li class="Channel_channelSwiperTabs__item" role="tab"
                                                                id="tab:r1:2" aria-selected="false" aria-disabled="false"
                                                                aria-controls="panel:r1:2" data-rttab="true">
                                                                Возраст
                                                            </li>
                                                            <li class="Channel_channelSwiperTabs__item" role="tab"
                                                                id="tab:r1:3" aria-selected="false" aria-disabled="false"
                                                                aria-controls="panel:r1:3" data-rttab="true">
                                                                Отзывы
                                                            </li>
                                                            <li class="Channel_channelSwiperTabs__item" role="tab"
                                                                id="tab:r1:4" aria-selected="false" aria-disabled="false"
                                                                aria-controls="panel:r1:4" data-rttab="true">
                                                                Примеры рекламы
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="simplebar-placeholder" style="width: auto; height: 29px"></div>
                                    </div>
                                    <div class="simplebar-track simplebar-horizontal" style="visibility: hidden">
                                        <div class="simplebar-scrollbar" style="width: 0px; display: none"></div>
                                    </div>
                                    <div class="simplebar-track simplebar-vertical" style="visibility: hidden">
                                        <div class="simplebar-scrollbar" style="height: 0px; display: none"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="container">
                                <div class="react-tabs__tab-panel react-tabs__tab-panel--selected" role="tabpanel"
                                    id="panel:r1:0" aria-labelledby="tab:r1:0">
                                    <div class="GenderCount_gender">
                                        <div class="GenderCount_gender__body">
                                            <div class="GenderCount_gender__item">
                                                <h2 class="GenderCount_gender__title">
                                                    Мужской <span>61%</span>
                                                </h2>
                                                <div class="GenderCount_gender__statusbar">
                                                    <span style="
                                    width: 61%;
                                    background-color: rgb(13, 86, 225);
                                  "></span>
                                                </div>
                                            </div>
                                            <div class="GenderCount_gender__item">
                                                <h2 class="GenderCount_gender__title">
                                                    Женский <span>39%</span>
                                                </h2>
                                                <div class="GenderCount_gender__statusbar">
                                                    <span style="
                                    width: 39%;
                                    background-color: rgb(37, 252, 213);
                                  "></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import eventBus from '../eventBus'
import { ListLoader, InstagramLoader } from 'vue-content-loader'


export default {
    components: { InstagramLoader },
    data() {
        return {
        }
    },
    watch: {
    },
    async beforeMount() {
        window.Telegram?.WebApp.BackButton.onClick(this.routeBack);
        window.Telegram?.WebApp.BackButton.show();
    },
    async mounted() {
        this.updatePage(300);

    },
    async beforeUnmount() {
        window.Telegram?.WebApp.MainButton.offClick(this.routeToBasket);
        window.Telegram?.WebApp.MainButton.hide();
        window.Telegram?.WebApp.BackButton.offClick(this.routeBack);
        window.Telegram?.WebApp.BackButton.hide();
    },
    methods: {
        routeBack() {
            this.$router.go(-1)
        },
        async updatePage(delay) {

            this.$refs['channel-page']?.classList.add("hidden")
            document.body.classList.add('stop-scrolling')


            setTimeout(() => {
                const elements = document.getElementsByClassName('preloaders_block')

                console.log(elements)

                for (let el of elements) {
                    el.classList.add("hidden")
                }
                this.$refs['channel-page']?.classList.remove("hidden")
                document.body.classList.remove('stop-scrolling')

            }, delay)
        },
    }
}
</script>
  

<style lang="scss" scoped>
.hidden {
    display: none;
}
</style>
  