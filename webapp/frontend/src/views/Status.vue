<template>
    <div class="container" id="container">
        <div>
            <div>
                <div class="Header_header__wrapper__5r0kF">
                    <div class="Header_country__back__Ogf+S"><button v-if="status === 'Новый'" @click="cancelLoan"
                            class="Header_country__back__btn__kQyXX"><svg width="16" height="16" viewBox="0 0 16 16"
                                fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M11.5 2C12.163 2 12.7989 2.26339 13.2678 2.73223C13.7366 3.20107 14 3.83696 14 4.5V6.257C13.0156 5.44269 11.7775 4.99806 10.5 5H13V4.5C13 4.10218 12.842 3.72064 12.5607 3.43934C12.2794 3.15804 11.8978 3 11.5 3H4.5C4.10218 3 3.72064 3.15804 3.43934 3.43934C3.15804 3.72064 3 4.10218 3 4.5V5H10.5C9.323 5 8.232 5.37 7.337 6H3V11.5C3 11.8978 3.15804 12.2794 3.43934 12.5607C3.72064 12.842 4.10218 13 4.5 13H5.6C5.783 13.358 6.004 13.693 6.257 14H4.5C3.83696 14 3.20107 13.7366 2.73223 13.2678C2.26339 12.7989 2 12.163 2 11.5V4.5C2 3.83696 2.26339 3.20107 2.73223 2.73223C3.20107 2.26339 3.83696 2 4.5 2H11.5ZM15 10.5C15 11.0909 14.8836 11.6761 14.6575 12.2221C14.4313 12.768 14.0998 13.2641 13.682 13.682C13.2641 14.0998 12.768 14.4313 12.2221 14.6575C11.6761 14.8836 11.0909 15 10.5 15C9.90905 15 9.32389 14.8836 8.77792 14.6575C8.23196 14.4313 7.73588 14.0998 7.31802 13.682C6.90016 13.2641 6.56869 12.768 6.34254 12.2221C6.1164 11.6761 6 11.0909 6 10.5C6 9.30653 6.47411 8.16193 7.31802 7.31802C8.16193 6.47411 9.30653 6 10.5 6C11.6935 6 12.8381 6.47411 13.682 7.31802C14.5259 8.16193 15 9.30653 15 10.5ZM12.354 9.354C12.4005 9.30751 12.4374 9.25232 12.4625 9.19158C12.4877 9.13084 12.5006 9.06574 12.5006 9C12.5006 8.93426 12.4877 8.86916 12.4625 8.80842C12.4374 8.74768 12.4005 8.69249 12.354 8.646C12.3075 8.59951 12.2523 8.56264 12.1916 8.53748C12.1308 8.51232 12.0657 8.49937 12 8.49937C11.9343 8.49937 11.8692 8.51232 11.8084 8.53748C11.7477 8.56264 11.6925 8.59951 11.646 8.646L10.5 9.793L9.354 8.646C9.26011 8.55211 9.13278 8.49937 9 8.49937C8.86722 8.49937 8.73989 8.55211 8.646 8.646C8.55211 8.73989 8.49937 8.86722 8.49937 9C8.49937 9.13278 8.55211 9.26011 8.646 9.354L9.793 10.5L8.646 11.646C8.55211 11.7399 8.49937 11.8672 8.49937 12C8.49937 12.1328 8.55211 12.2601 8.646 12.354C8.73989 12.4479 8.86722 12.5006 9 12.5006C9.13278 12.5006 9.26011 12.4479 9.354 12.354L10.5 11.207L11.646 12.354C11.7399 12.4479 11.8672 12.5006 12 12.5006C12.1328 12.5006 12.2601 12.4479 12.354 12.354C12.4479 12.2601 12.5006 12.1328 12.5006 12C12.5006 11.8672 12.4479 11.7399 12.354 11.646L11.207 10.5L12.354 9.354Z"
                                    fill="url(#paint0_linear_175_5190)"></path>
                                <defs>
                                    <linearGradient id="paint0_linear_175_5190" x1="2" y1="2" x2="15.9963" y2="3.17971"
                                        gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#FF6DBB"></stop>
                                        <stop offset="1" stop-color="#EE4498"></stop>
                                    </linearGradient>
                                </defs>
                            </svg>Отменить</button></div>
                    <div class="Header_country__tab__nd8Jh">Займ №{{ loanData.id }}</div>
                    <div class="Header_country__nHXWK "><svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M11.7712 11.1047L8.94251 13.9334C8.8188 14.0572 8.6719 14.1554 8.51021 14.2225C8.34852 14.2895 8.17521 14.324 8.00017 14.324C7.82514 14.324 7.65183 14.2895 7.49013 14.2225C7.32844 14.1554 7.18154 14.0572 7.05784 13.9334L4.22851 11.1047C3.48265 10.3588 2.97473 9.40852 2.76896 8.37396C2.5632 7.3394 2.66883 6.26706 3.07251 5.29254C3.47618 4.31801 4.15977 3.48508 5.03683 2.89905C5.91388 2.31303 6.94502 2.00024 7.99984 2.00024C9.05466 2.00024 10.0858 2.31303 10.9629 2.89905C11.8399 3.48508 12.5235 4.31801 12.9272 5.29254C13.3308 6.26706 13.4365 7.3394 13.2307 8.37396C13.0249 9.40852 12.517 10.3588 11.7712 11.1047V11.1047Z"
                                stroke="url(#paint0_linear_200_1217)" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path
                                d="M9.41421 8.74747C9.78929 8.37239 10 7.86368 10 7.33325C10 6.80282 9.78929 6.29411 9.41421 5.91904C9.03914 5.54397 8.53043 5.33325 8 5.33325C7.46957 5.33325 6.96086 5.54397 6.58579 5.91904C6.21071 6.29411 6 6.80282 6 7.33325C6 7.86368 6.21071 8.37239 6.58579 8.74747C6.96086 9.12254 7.46957 9.33325 8 9.33325C8.53043 9.33325 9.03914 9.12254 9.41421 8.74747Z"
                                stroke="url(#paint1_linear_200_1217)" stroke-linecap="round" stroke-linejoin="round"></path>
                            <defs>
                                <linearGradient id="paint0_linear_200_1217" x1="2.6665" y1="2.00024" x2="14.494"
                                    y2="3.23876" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#7C6DD2"></stop>
                                    <stop offset="1" stop-color="#7C36D2"></stop>
                                </linearGradient>
                                <linearGradient id="paint1_linear_200_1217" x1="6" y1="5.33325" x2="10.4192" y2="5.86791"
                                    gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#7C6DD2"></stop>
                                    <stop offset="1" stop-color="#7C36D2"></stop>
                                </linearGradient>
                            </defs>
                        </svg>TH</div>
                </div>
                <div class="Header_header__line__aozMJ"></div>
            </div>
            <div>
                <div>
                    <div class="Exchange_exchange__header__row__QDAEe">
                        <h3>В размере</h3>
                        <div class="Exchange_exchange__header__row__data__emKsz">{{
                            loanData.sum }} RUB</div>
                    </div>
                    <div class="Exchange_exchange__header__row__QDAEe">
                        <h3>Итоговый платеж</h3>
                        <div class="Exchange_exchange__header__row__data__emKsz">{{
                            loanData.return_sum }} RUB</div>
                    </div>
                    <div v-if="status !== 'Новый'" class="Exchange_exchange__header__row__QDAEe">
                        <h3>До (включительно)</h3>
                        <div class="Exchange_exchange__header__row__data__emKsz">{{ untilDate }}</div>
                    </div>
                    <div v-else class="Exchange_exchange__header__row__QDAEe">
                        <h3>Срок</h3>
                        <div class="Exchange_exchange__header__row__data__emKsz">{{ loanData.term_days }} дн.</div>
                    </div>
                    <div class="Exchange_exchange__header__row__QDAEe">
                        <h3>Оплата:</h3>
                        <div class="Exchange_exchange__header__row__data__emKsz">
                            <div class="Circle_circle__3jS7D"
                                style="background: rgb(255, 255, 0); min-width: 9.6px; min-height: 9.6px; opacity: 1;">
                            </div>
                            <p>{{ loanData.atm }}</p><span data-tooltip-id="pay-methods-tooltip"
                                data-tooltip-content="[11,14,15]" class="sc-gXnjX iGlJQ"></span>
                        </div>
                    </div>
                    <div class="Exchange_exchange__header__row__QDAEe">
                        <h3>Получение:</h3>
                        <div class="Exchange_exchange__header__row__data__emKsz">
                            <div class="Circle_circle__3jS7D"
                                style="background: rgb(125, 224, 222); min-width: 9.6px; min-height: 9.6px; opacity: 1;">
                            </div>
                            <p>{{ loanData.return_method }}</p><span data-tooltip-id="withdraw-methods-tooltip"
                                data-tooltip-content="[0]" class="sc-gXnjX iGlJQ"></span>
                        </div>
                    </div>
                </div>
                <div class="Exchange_empty__4G-Zi">
                    <p v-if="status === 'Новый'">Ваш займ ожидает одобрения менеджером. Вам придет уведомление, когда это
                        случится.</p>
                    <div v-if="status === 'Выдан'">
                        <p>Здесь инструкция о том как получить деньги выбранным способом</p>
                        <button @click="recieveLoan" class="Button_button__igezS CreateExchange_home__btn__B2lyA"
                            type="button">Я получил займ</button>
                    </div>
                    <div v-if="status === 'Получен'">
                        <div class="return-sum">{{ return_sum }}</div>
                        <p>Здесь инструкция о том как вернуть займ выбранным способом</p>
                        <button @click="returnLoan" class="Button_button__igezS CreateExchange_home__btn__B2lyA"
                            type="button">Вернуть займ</button>
                    </div>
                    <p v-if="status === 'На возврате'">Ваш возврат займа ожидает подтверждения менеджером. Вам придет
                        уведомление, когда это
                        случится.
                    </p>

                </div>
            </div>
        </div>
    </div>

    <NavBar />
</template>

<script>
import eventBus from '../eventBus'
import { ListLoader, InstagramLoader } from 'vue-content-loader'
import NavBar from '@/components/Navbar.vue';
import moment from 'moment'


export default {
    components: { InstagramLoader, NavBar },
    data() {
        return {
            infoActive: true,
            sexActive: true,
            loanData: {}
        }
    },
    watch: {
    },
    async beforeMount() {
        window.Telegram?.WebApp.MainButton.offClick(this.routeToBasket);
        window.Telegram?.WebApp.MainButton.hide();
        window.Telegram?.WebApp.BackButton.offClick(this.routeBack);
        window.Telegram?.WebApp.BackButton.hide()
        window.Telegram?.WebApp.expand()

        this.loanData = await this.getLoanData()
    },
    async mounted() {
        //this.updatePage(300);

    },
    async beforeUnmount() {
    },
    methods: {
        routeBack() {
            this.$router.go(-1)
        },
        changeStatus(status) {
            this.$store.state.myApi
                .put(this.$store.state.restAddr + '/loans', {
                    status,
                    user_id: this.$store.state.userId,
                },)
                .then(async (response) => {
                    if (status !== 'Получен') {
                        window.Telegram?.WebApp.disableClosingConfirmation()
                        return window.Telegram?.WebApp.close();
                    }
                    this.$store.state.profileData.active_loan_status = status
                    this.loanData = await this.getLoanData()

                })
                .catch(e => {
                    eventBus.$emit('noresponse', e);
                    this.isOrdering = false;
                })
        },
        async getLoanData() {
            const results = await this.$store.state.myApi.get(this.$store.state.restAddr + '/loans', {
                params: {
                    user_id: this.$store.state.userId,
                }
            })
                .then(response => {
                    return response.data;
                })
                .catch(e => { eventBus.$emit('noresponse', e) })

            return results ?? {}

        },
        cancelLoan() { this.changeStatus("Отменен") },
        recieveLoan() { this.changeStatus("Получен") },
        returnLoan() { this.changeStatus("На возврате") },
    }, computed: {
        status() { return this.$store.state.profileData?.active_loan_status },
        untilDate() {
            return moment(new Date()).add(this.loanData.term_days, 'days').format('DD.MM.YYYY')
        }
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
  