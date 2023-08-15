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
                            <img :src="`/colorsserver/public/pics/${channel.preview}`" alt="" /></button><button
                            type="button" class="Channel_channelProfile__icon _icon-bookmark"></button>
                    </div>
                    <div class="Channel_channelProfile__content">
                        <h1 class="Channel_channelProfile__title">{{ channel.title }}</h1>
                        <div class="Channel_channelProfile__subcribers _icon-profile">
                            {{ channel.participants_count }}
                        </div>
                        <p class="Channel_channelProfile__text">
                            {{ channel.description }}
                        </p>
                    </div>
                    <div class="Channel_channelProfile__body">
                        <ul class="Channel_channelProfile__tabList" role="tablist">
                            <li class="Channel_channelProfile__item Channel_channelProfile__item_active" role="tab"
                                id="tab:r0:0" aria-selected="true" aria-disabled="false" aria-controls="panel:r0:0"
                                tabindex="0" data-rttab="true" @click="infoActive = true">
                                Информация
                            </li>
                            <li class="Channel_channelProfile__item" role="tab" id="tab:r0:1" aria-selected="false"
                                aria-disabled="false" aria-controls="panel:r0:1" data-rttab="true"
                                @click="infoActive = false">
                                Стоимость
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div v-show="infoActive" class="top-tabpanel" role="tabpanel" id="panel:r0:0" aria-labelledby="tab:r0:0">
                <div class="Channel_channelContent">
                    <div class="container">
                        <div>
                            <div class="ChannelInfo_channelContent__actions">
                                <button type="button" class="ChannelInfo_channelContent__action"
                                    @click="window.open(channel.tgstat_link, '_blank')">
                                    <span
                                        class="ChannelInfo_channelContent__label _icon-arrow-right">ТГстат</span></button><button
                                    type="button" class="ChannelInfo_channelContent__action"
                                    @click="window.open(channel.telemetr_link, '_blank')">
                                    <span class="ChannelInfo_channelContent__label _icon-arrow-right">Телеметр</span>
                                </button>
                            </div>
                            <div class="ChannelInfo_channelContent__content">
                                <div class="ChannelInfo_channelContent__data">
                                    <span class="ChannelInfo_channelContent__placeholder">Охваты</span>
                                    <p class="ChannelInfo_channelContent__text">{{ formatThousands(channel.post_reach) }}
                                    </p>
                                </div>
                                <div class="ChannelInfo_channelContent__data">
                                    <span class="ChannelInfo_channelContent__placeholder">ERR</span>
                                    <p class="ChannelInfo_channelContent__text">{{ channel.err }}</p>
                                </div>
                                <div class="ChannelInfo_channelContent__data">
                                    <span class="ChannelInfo_channelContent__placeholder">CPM</span>
                                    <p class="ChannelInfo_channelContent__text">{{ formatThousands(channel.cpm) }}</p>
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
                                                            <li class="Channel_channelSwiperTabs__item"
                                                                :class="[sexActive ? 'Channel_channelSwiperTabs__item_active' : '']"
                                                                role="tab" id="tab:r1:0" aria-selected="true"
                                                                aria-disabled="false" aria-controls="panel:r1:0"
                                                                tabindex="0" data-rttab="true" @click="sexActive = true">
                                                                Пол
                                                            </li>
                                                            <li class="Channel_channelSwiperTabs__item"
                                                                :class="[!sexActive ? 'Channel_channelSwiperTabs__item_active' : '']"
                                                                role="tab" id="tab:r1:2" aria-selected="false"
                                                                aria-disabled="false" aria-controls="panel:r1:2"
                                                                data-rttab="true" @click="sexActive = false">
                                                                Возраст
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
                                <div class="" v-show="!sexActive" role="tabpanel" id="panel:r1:0"
                                    aria-labelledby="tab:r1:0">
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
                                <div class="" v-show="!sexActive" role="tabpanel" id="panel:r5:2"
                                    aria-labelledby="tab:r5:2">
                                    <div class="ProgressBars_location__YHytS">
                                        <div class="ProgressBars_location__body__-aPT7">
                                            <div class="ProgressBars_location__item__MEYqK">
                                                <h2 class="ProgressBars_location__title__OzI8F">До 18 лет <span>4%</span>
                                                </h2>
                                                <div class="ProgressBars_location__statusbar__58zTm"><span
                                                        style="width: 4%;"></span></div>
                                            </div>
                                            <div class="ProgressBars_location__item__MEYqK">
                                                <h2 class="ProgressBars_location__title__OzI8F">18-24 <span>26%</span></h2>
                                                <div class="ProgressBars_location__statusbar__58zTm"><span
                                                        style="width: 26%;"></span></div>
                                            </div>
                                            <div class="ProgressBars_location__item__MEYqK">
                                                <h2 class="ProgressBars_location__title__OzI8F">25-34 <span>32%</span></h2>
                                                <div class="ProgressBars_location__statusbar__58zTm"><span
                                                        style="width: 32%;"></span></div>
                                            </div>
                                            <div class="ProgressBars_location__item__MEYqK">
                                                <h2 class="ProgressBars_location__title__OzI8F">35-44 <span>23%</span></h2>
                                                <div class="ProgressBars_location__statusbar__58zTm"><span
                                                        style="width: 23%;"></span></div>
                                            </div>
                                            <div class="ProgressBars_location__item__MEYqK">
                                                <h2 class="ProgressBars_location__title__OzI8F">45-54 <span>10%</span></h2>
                                                <div class="ProgressBars_location__statusbar__58zTm"><span
                                                        style="width: 10%;"></span></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-show="!infoActive" class="top-tabpanel" role="tabpanel" id="panel:r0:1" aria-labelledby="tab:r0:1">
                <div class="Channel_channelContent__kcVW0 Channel_channelContent_margin__mroyE">
                    <div class="container">
                        <div>
                            <div class="ChannelPriceActions_channelPrice__uWyC4">
                                <div class="ChannelPriceActions_channelPrice__content__fLClw">
                                    <h2 class="ChannelPriceActions_channelPrice__title__ym2M9">Стоимость</h2>
                                    <p class="ChannelPriceActions_channelPrice__text__Mbugf">за один рекламный пост</p>
                                </div>
                                <div class="ChannelPriceActions_channelPrice__price__20drU"><span>100 000 руб.</span></div>
                            </div>
                            <div>
                                <div class="ChannelPriceActions_channelActions__body__7nfTf"><button type="button"
                                        class="ChannelPriceActions_channelActions__button__MzwI0"><span>Связаться с
                                            менеджером</span></button></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="SameChannelSlider_sameChannels__iYwuT">
                        <div class="SameChannelSlider_sameChannels__title__awE7q">
                            <div class="Title_block__8v8E5"><button class="Title_button__cBkUJ _icon-angle-left"></button>
                                <h2 class="Title_title__MxNSH">Похожие каналы</h2>
                            </div>
                        </div>
                        <div
                            class="swiper swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden">
                            <div class="swiper-wrapper" style="transform: translate3d(0px, 0px, 0px);">
                                <div class="swiper-slide SameChannelSlider_sameChannels__slide__FyByA swiper-slide-active"
                                    style="margin-right: 15px;"><button type="button"
                                        class="SameChannelSlider_sameChannels__item__PKWlU">
                                        <div class="SameChannelSlider_sameChannels__image__uKpBK"><img
                                                src="https://aviatatravel.com/media/channels_logo/photo_2023-05-29_11.19.32.jpeg"
                                                alt=""></div>
                                        <div>
                                            <h3 class="SameChannelSlider_sameChannels__subtitle__xk91w">Yumi</h3>
                                            <div class="SameChannelSlider_sameChannels__subscribers__LbPGb _icon-profile">
                                                103 163</div>
                                        </div>
                                    </button></div>
                                <div class="swiper-slide SameChannelSlider_sameChannels__slide__FyByA swiper-slide-next"
                                    style="margin-right: 15px;"><button type="button"
                                        class="SameChannelSlider_sameChannels__item__PKWlU">
                                        <div class="SameChannelSlider_sameChannels__image__uKpBK"><img
                                                src="https://aviatatravel.com/media/channels_logo/2022-11-03_04.59.55.jpg"
                                                alt=""></div>
                                        <div>
                                            <h3 class="SameChannelSlider_sameChannels__subtitle__xk91w">Карты, тексты, два
                                                ствола</h3>
                                            <div class="SameChannelSlider_sameChannels__subscribers__LbPGb _icon-profile">47
                                                172</div>
                                        </div>
                                    </button></div>
                                <div class="swiper-slide SameChannelSlider_sameChannels__slide__FyByA"
                                    style="margin-right: 15px;"><button type="button"
                                        class="SameChannelSlider_sameChannels__item__PKWlU">
                                        <div class="SameChannelSlider_sameChannels__image__uKpBK"><img
                                                src="https://aviatatravel.com/media/channels_logo/9FECB72F-69A5-4B53-8058-6198B961E2ED.jpeg"
                                                alt=""></div>
                                        <div>
                                            <h3 class="SameChannelSlider_sameChannels__subtitle__xk91w">Рабочий чат</h3>
                                            <div class="SameChannelSlider_sameChannels__subscribers__LbPGb _icon-profile">67
                                                618</div>
                                        </div>
                                    </button></div>
                                <div class="swiper-slide SameChannelSlider_sameChannels__slide__FyByA"
                                    style="margin-right: 15px;"><button type="button"
                                        class="SameChannelSlider_sameChannels__item__PKWlU">
                                        <div class="SameChannelSlider_sameChannels__image__uKpBK"><img
                                                src="https://aviatatravel.com/media/channels_logo/2022-11-20-17-06-57.jpg"
                                                alt=""></div>
                                        <div>
                                            <h3 class="SameChannelSlider_sameChannels__subtitle__xk91w">SMM RIP</h3>
                                            <div class="SameChannelSlider_sameChannels__subscribers__LbPGb _icon-profile">
                                                145 645</div>
                                        </div>
                                    </button></div>
                                <div class="swiper-slide SameChannelSlider_sameChannels__slide__FyByA"
                                    style="margin-right: 15px;"><button type="button"
                                        class="SameChannelSlider_sameChannels__item__PKWlU">
                                        <div class="SameChannelSlider_sameChannels__image__uKpBK"><img
                                                src="https://aviatatravel.com/media/channels_logo/photo_2023-06-08_14.22.40_Zh9x1vA.jpeg"
                                                alt=""></div>
                                        <div>
                                            <h3 class="SameChannelSlider_sameChannels__subtitle__xk91w">продай мне эту ручку
                                            </h3>
                                            <div class="SameChannelSlider_sameChannels__subscribers__LbPGb _icon-profile">73
                                                699</div>
                                        </div>
                                    </button></div>
                                <div class="swiper-slide SameChannelSlider_sameChannels__slide__FyByA"
                                    style="margin-right: 15px;"><button type="button"
                                        class="SameChannelSlider_sameChannels__item__PKWlU">
                                        <div class="SameChannelSlider_sameChannels__image__uKpBK"><img
                                                src="https://aviatatravel.com/media/channels_logo/2022-11-03_05.03.55.jpg"
                                                alt=""></div>
                                        <div>
                                            <h3 class="SameChannelSlider_sameChannels__subtitle__xk91w">Боги Маркетинга</h3>
                                            <div class="SameChannelSlider_sameChannels__subscribers__LbPGb _icon-profile">
                                                126 384</div>
                                        </div>
                                    </button></div>
                                <div class="swiper-slide SameChannelSlider_sameChannels__slide__FyByA"
                                    style="margin-right: 15px;"><button type="button"
                                        class="SameChannelSlider_sameChannels__item__PKWlU">
                                        <div class="SameChannelSlider_sameChannels__image__uKpBK"><img
                                                src="https://aviatatravel.com/media/channels_logo/2022-11-20-17-07-16.jpg"
                                                alt=""></div>
                                        <div>
                                            <h3 class="SameChannelSlider_sameChannels__subtitle__xk91w">Авоська маркетинга
                                            </h3>
                                            <div class="SameChannelSlider_sameChannels__subscribers__LbPGb _icon-profile">26
                                                068</div>
                                        </div>
                                    </button></div>
                            </div>
                            <div class="swiper-button-prev swiper-button-disabled"></div>
                            <div class="swiper-button-next"></div>
                            <div class="swiper-scrollbar"></div>
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
            infoActive: true,
            sexActive: true,
            channel: {},
        }
    },
    watch: {
    },
    async beforeMount() {
        window.Telegram?.WebApp.BackButton.onClick(this.routeBack);
        window.Telegram?.WebApp.BackButton.show();

        this.channel = await this.getChannel(this.$route.params.id);
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
        formatThousands(number) {
            if (number >= 1000)
                return `${+(number / 1000).toFixed(0)}K`
            else return number;
        },
        async getChannel(id) {
            const results = await this.$store.state.myApi.get(this.$store.state.restAddr + '/items', {
                params: {
                    id
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
</style>
  