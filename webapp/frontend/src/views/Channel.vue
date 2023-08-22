<template>
    <div class="preloaders_block" hidden>
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
                            <a type="button" class="Channel_channelProfile__backIcon _icon-angle-left"
                                @click="$router.back()"></a>
                            <div class="Badge_badge Channel_channelProfile__badge">
                                <span class="Badge_badge__text">{{ channel.category_name }}</span>
                            </div>
                        </div>
                        <button type="button" class="Channel_channelProfile__image">
                            <img :src="`/colorsserver/public/pics/${channel.preview}`" alt="" /></button><button
                            type="button" class="Channel_channelProfile__icon _icon-bookmark"
                            :class="channel.is_favorite ? 'Channel_channelProfile__icon_active' : ''"
                            @click="toggleFavorite"></button>
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
                            <li class="Channel_channelProfile__item " role="tab"
                                :class="[infoActive ? 'Channel_channelProfile__item_active' : '']" id="tab:r0:0"
                                aria-selected="true" aria-disabled="false" aria-controls="panel:r0:0" tabindex="0"
                                data-rttab="true" @click="infoActive = true">
                                Информация
                            </li>
                            <li class="Channel_channelProfile__item"
                                :class="[!infoActive ? 'Channel_channelProfile__item_active' : '']" role="tab" id="tab:r0:1"
                                aria-selected="false" aria-disabled="false" aria-controls="panel:r0:1" data-rttab="true"
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
                                    @click="openLink(channel.tgstat_link)">
                                    <span
                                        class="ChannelInfo_channelContent__label _icon-arrow-right">ТГстат</span></button><button
                                    type="button" class="ChannelInfo_channelContent__action"
                                    @click="openLink(channel.telemetr_link)">
                                    <span class="ChannelInfo_channelContent__label _icon-arrow-right">Телеметр</span>
                                </button>
                            </div>
                            <div class="ChannelInfo_channelContent__content">
                                <div class="ChannelInfo_channelContent__data">
                                    <span class="ChannelInfo_channelContent__placeholder">Охват</span>
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
                                                    aria-label="scrollable content" style="height: auto;">
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
                                <div class="" v-show="sexActive" role="tabpanel" id="panel:r1:0" aria-labelledby="tab:r1:0">
                                    <div class="GenderCount_gender">
                                        <div class="GenderCount_gender__body">
                                            <div class="GenderCount_gender__item">
                                                <h2 class="GenderCount_gender__title">
                                                    Мужской <span>{{ `${channel.man_percent}%` }}</span>
                                                </h2>
                                                <div class="GenderCount_gender__statusbar">
                                                    <span :style="{ width: `${channel.man_percent}%` }" style="
                                    background-color: rgb(13, 86, 225);
                                  "></span>
                                                </div>
                                            </div>
                                            <div class="GenderCount_gender__item">
                                                <h2 class="GenderCount_gender__title">
                                                    Женский <span>{{ `${100 - channel.man_percent}%` }}</span>
                                                </h2>
                                                <div class="GenderCount_gender__statusbar">
                                                    <span :style="{ width: `${100 - channel.man_percent}%` }" style="
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
                                        <div class="ProgressBars_location__body">
                                            <div v-show="channel.age.l18 > 0" class="ProgressBars_location__item__MEYqK">
                                                <h2 class="ProgressBars_location__title__OzI8F">До 18 лет <span>{{
                                                    `${channel.age.l18}%` }}</span>
                                                </h2>
                                                <div class="ProgressBars_location__statusbar__58zTm"><span
                                                        :style="{ width: `${channel.age.l18}%` }"></span></div>
                                            </div>
                                            <div v-show="channel.age.l24 > 0" class="ProgressBars_location__item__MEYqK">
                                                <h2 class="ProgressBars_location__title__OzI8F">18-24 <span>{{
                                                    `${channel.age.l24}%` }}</span></h2>
                                                <div class="ProgressBars_location__statusbar__58zTm"><span
                                                        :style="{ width: `${channel.age.l24}%` }"></span></div>
                                            </div>
                                            <div v-show="channel.age.l34 > 0" class="ProgressBars_location__item__MEYqK">
                                                <h2 class="ProgressBars_location__title__OzI8F">25-34 <span>{{
                                                    `${channel.age.l34}%` }}</span></h2>
                                                <div class="ProgressBars_location__statusbar__58zTm"><span
                                                        :style="{ width: `${channel.age.l34}%` }"></span></div>
                                            </div>
                                            <div v-show="channel.age.l44 > 0" class="ProgressBars_location__item__MEYqK">
                                                <h2 class="ProgressBars_location__title__OzI8F">35-44 <span>{{
                                                    `${channel.age.l44}%` }}</span></h2>
                                                <div class="ProgressBars_location__statusbar__58zTm"><span
                                                        :style="{ width: `${channel.age.l44}%` }"></span></div>
                                            </div>
                                            <div v-show="channel.age.l54 > 0" class="ProgressBars_location__item__MEYqK">
                                                <h2 class="ProgressBars_location__title__OzI8F">45-54 <span>{{
                                                    `${channel.age.l54}%` }}</span></h2>
                                                <div class="ProgressBars_location__statusbar__58zTm"><span
                                                        :style="{ width: `${channel.age.l54}%` }"></span></div>
                                            </div>
                                            <div v-show="channel.age.l100 > 0" class="ProgressBars_location__item__MEYqK">
                                                <h2 class="ProgressBars_location__title__OzI8F">55 лет и старше
                                                    <span>{{
                                                        `${channel.age.l100}%` }}</span>
                                                </h2>
                                                <div class="ProgressBars_location__statusbar__58zTm"><span
                                                        :style="{ width: `${channel.age.l100}%` }"></span></div>
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
                            <div class="row">
                                <div class="ChannelPriceActions_channelActions__body__7nfTf"><button type="button"
                                        @click="connect()"
                                        class="ChannelPriceActions_channelActions__button__MzwI0"><span>Связаться</span></button>
                                </div>
                                <div class="ChannelPriceActions_channelActions__body__7nfTf"><button type="button"
                                        @click="openTg('https://t.me/Alivian')"
                                        class="ChannelPriceActions_channelActions__button__MzwI0"><span>Поторговаться</span></button>
                                </div>
                            </div>
                            <div>
                                <div v-show="channel.price_1 > 0" class="ChannelPriceActions_channelPrice__uWyC4">
                                    <h2 class="ChannelPriceActions_channelPrice__title__ym2M9">Доступные форматы</h2>
                                    <div class="ChannelPriceActions_channelPrice__content__fLClw">
                                        <p class="ChannelPriceActions_channelPrice__text__Mbugf">1 час в топе</p>
                                        <p class="ChannelPriceActions_channelPrice__text__Mbugf">24 часа в ленте</p>
                                    </div>
                                    <div class="ChannelPriceActions_channelPrice__price__20drU"><span>{{ channel.price_1 }}
                                            руб.</span></div>
                                </div>
                                <div v-show="channel.price_2 > 0" class="ChannelPriceActions_channelPrice__uWyC4">
                                    <h2 class="ChannelPriceActions_channelPrice__title__ym2M9">Доступные форматы</h2>
                                    <div class="ChannelPriceActions_channelPrice__content__fLClw">
                                        <p class="ChannelPriceActions_channelPrice__text__Mbugf">2 часа в топе</p>
                                        <p class="ChannelPriceActions_channelPrice__text__Mbugf">48 часов в ленте</p>
                                    </div>
                                    <div class="ChannelPriceActions_channelPrice__price__20drU"><span>{{ channel.price_2 }}
                                            руб.</span></div>
                                </div>
                                <div v-show="channel.price_3 > 0" class="ChannelPriceActions_channelPrice__uWyC4">
                                    <h2 class="ChannelPriceActions_channelPrice__title__ym2M9">Доступные форматы</h2>
                                    <div class="ChannelPriceActions_channelPrice__content__fLClw">
                                        <p class="ChannelPriceActions_channelPrice__text__Mbugf">3 часа в топе</p>
                                        <p class="ChannelPriceActions_channelPrice__text__Mbugf">48 часа в ленте</p>
                                    </div>
                                    <div class="ChannelPriceActions_channelPrice__price__20drU"><span>{{ channel.price_3 }}
                                            руб.</span></div>
                                </div>

                                <div v-show="channel.price > 0" class="ChannelPriceActions_channelPrice__uWyC4">
                                    <h2 class="ChannelPriceActions_channelPrice__title__ym2M9">Доступные форматы</h2>
                                    <div class="ChannelPriceActions_channelPrice__content__fLClw">
                                        <p class="ChannelPriceActions_channelPrice__text__Mbugf">Без удаления</p>
                                    </div>
                                    <div class="ChannelPriceActions_channelPrice__price__20drU"><span>{{ channel.price }}
                                            руб.</span></div>
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

        this.channel = await this.getChannel(this.$route.params.channelId);
    },
    async mounted() {
        //this.updatePage(300);

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
        openLink(link) {
            window.open(link, '_blank')
        },
        openTg(link) {
            window.open(link)
        },
        toggleFavorite() {
            if (this.channel.is_favorite)
                this.dropFavorite();
            else this.addFavorite()
        },
        addFavorite() {
            this.$store.state.myApi
                .post(this.$store.state.restAddr + '/favorites', {
                    channel_id: this.$route.params.channelId,
                    user_id: this.$store.state.userId,
                })
                .then(async (response) => {
                    this.channel.is_favorite = true;
                })
                .catch((e) => {
                    alert("Эта позиция уже добавлена в корзину")
                })
        },
        async dropFavorite() {
            this.$store.state.myApi.delete(this.$store.state.restAddr + '/favorites', {
                data: {
                    user_id: this.$store.state.userId,
                    channel_id: this.$route.params.channelId,
                }
            })
                .then(async response => {
                    this.channel.is_favorite = false;
                })
                .catch(e => { eventBus.$emit('noresponse', e) })
        },
        connect() {
            if (this.isOrdering === true) return;
            this.isOrdering = true;
            this.$store.state.myApi.get(this.$store.state.restAddr + '/connect', {
                params: {
                    user_id: this.$store.state.userId,
                    channel_id: this.channel.id,
                }
            })
                .then(async () => {
                    window.Telegram?.WebApp.disableClosingConfirmation()
                    window.Telegram?.WebApp.close();
                })
                .catch(e => {
                    eventBus.$emit('noresponse', e);
                    this.isOrdering = false;
                })
        },
        async getChannel(id) {
            const results = await this.$store.state.myApi.get(this.$store.state.restAddr + '/items', {
                params: {
                    id: id,
                    user_id: this.$store.state.userId,
                }
            })
                .then(response => {
                    return response.data[0];
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

.row {
    display: flex;
    gap: 1rem;
    justify-content: space-between;
    position: relative;

    &>div {
        width: 50%;
    }


}
</style>
  