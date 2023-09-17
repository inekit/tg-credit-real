<template>
    <div class="status-container">
        <div class="sum-title">{{ sum }}</div>
        <div class="length-title">{{ term_days }}</div>
        <div class="get-title">{{ get_method }}</div>
        <div class="return-title">{{ return_method }}</div>
        <div v-if="status === 'Новый'">
            <div class="status-title">Ваш займ ожидает одобрения менеджером. Вам придет уведомление, когда это случится.
            </div>
            <button @click="cancelLoan">Отменить</button>
        </div>
        <div v-if="status === 'Выдан'">
            <div>Здесь инструкция о том как получить деньги выбранным способом</div>
            <button @click="recieveLoan">Я получил займ</button>
        </div>
        <div v-if="status === 'Получен'">
            <div class="return-sum">{{ return_sum }}</div>
            <div>Здесь инструкция о том как вернуть займ выбранным способом</div>
            <button @click="returnLoan">Вернуть займ</button>
        </div>
        <div v-if="status === 'На возврате'">
            <div class="status-title">Ваш возврат займа ожидает подтверждения менеджером. Вам придет уведомление, когда это
                случится.
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
    margin: 0 0 1.5625rem;

    &>div {
        width: 50%;
    }


}
</style>
  