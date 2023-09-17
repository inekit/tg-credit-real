<template>
    <div class="container" id="container">
        <div>
            <div>
                <div class="Header_header__wrapper__5r0kF">
                    <div class="Header_country__back__Ogf+S">
                        Logo
                    </div>
                    <div class="Header_country__tab__nd8Jh">
                    </div>
                    <div class="Header_country__nHXWK">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M11.7712 11.1047L8.94251 13.9334C8.8188 14.0572 8.6719 14.1554 8.51021 14.2225C8.34852 14.2895 8.17521 14.324 8.00017 14.324C7.82514 14.324 7.65183 14.2895 7.49013 14.2225C7.32844 14.1554 7.18154 14.0572 7.05784 13.9334L4.22851 11.1047C3.48265 10.3588 2.97473 9.40852 2.76896 8.37396C2.5632 7.3394 2.66883 6.26706 3.07251 5.29254C3.47618 4.31801 4.15977 3.48508 5.03683 2.89905C5.91388 2.31303 6.94502 2.00024 7.99984 2.00024C9.05466 2.00024 10.0858 2.31303 10.9629 2.89905C11.8399 3.48508 12.5235 4.31801 12.9272 5.29254C13.3308 6.26706 13.4365 7.3394 13.2307 8.37396C13.0249 9.40852 12.517 10.3588 11.7712 11.1047V11.1047Z"
                                stroke="url(#paint0_linear_200_1217)" stroke-linecap="round" stroke-linejoin="round">
                            </path>
                            <path
                                d="M9.41421 8.74747C9.78929 8.37239 10 7.86368 10 7.33325C10 6.80282 9.78929 6.29411 9.41421 5.91904C9.03914 5.54397 8.53043 5.33325 8 5.33325C7.46957 5.33325 6.96086 5.54397 6.58579 5.91904C6.21071 6.29411 6 6.80282 6 7.33325C6 7.86368 6.21071 8.37239 6.58579 8.74747C6.96086 9.12254 7.46957 9.33325 8 9.33325C8.53043 9.33325 9.03914 9.12254 9.41421 8.74747Z"
                                stroke="url(#paint1_linear_200_1217)" stroke-linecap="round" stroke-linejoin="round">
                            </path>
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
                        </svg>TH
                    </div>
                </div>
                <div class="Header_header__line__aozMJ"></div>
            </div>
            <div class="CreateExchange_home__body__63ZPN">
                <div>
                    <div class="CreateExchange_home__body__header__title__k-9BQ">
                        <h2>Сумма</h2>
                        <button class="sc-Dmqmp dgnXQs">
                            <span>{{ sum }} RUB</span>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 10H21L17 6M17 14H3L7 18" stroke="url(#paint0_linear_2669_1378)" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round"></path>
                                <defs>
                                    <linearGradient id="paint0_linear_2669_1378" x1="3" y1="6" x2="22.4429" y2="9.1813"
                                        gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#3BD8CC"></stop>
                                        <stop offset="1" stop-color="#3B9FCC"></stop>
                                    </linearGradient>
                                </defs>
                            </svg>
                        </button>
                    </div>
                    <div class="slidecontainer">
                        <input type="range" min="1000" max="100000" class="slider" id="myRange" v-model="sum">
                    </div>
                </div>
                <div class="SelectInput_select__oxfzh">
                    <div class="CreateExchange_home__body__header__title__k-9BQ">
                        <h2>Срок</h2>
                        <div class="sc-Dmqmp dgnXQs">
                            <span>{{ term_days }} дн.</span>
                        </div>
                    </div>
                    <div class="slidecontainer">
                        <input type="range" min="1" max="30" class="slider" id="myRange" v-model="term_days">
                    </div>
                </div>
                <div class="SelectInput_select__oxfzh">
                    <div class="CreateExchange_home__body__header__title__k-9BQ">
                        <h2>Способ получения</h2>
                    </div>
                    <button class="SelectInput_select__btn__alsz6">
                        Выберите удобный для вас способ<svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M12 16C12.2267 16 12.4168 15.9232 12.5704 15.7696C12.7235 15.6165 12.8 15.4267 12.8 15.2V12.8H15.22C15.4467 12.8 15.6333 12.7232 15.78 12.5696C15.9267 12.4165 16 12.2267 16 12C16 11.7733 15.9232 11.5832 15.7696 11.4296C15.6165 11.2765 15.4267 11.2 15.2 11.2H12.8V8.78C12.8 8.55333 12.7235 8.36667 12.5704 8.22C12.4168 8.07333 12.2267 8 12 8C11.7733 8 11.5835 8.07653 11.4304 8.2296C11.2768 8.3832 11.2 8.57333 11.2 8.8V11.2H8.78C8.55333 11.2 8.36667 11.2765 8.22 11.4296C8.07333 11.5832 8 11.7733 8 12C8 12.2267 8.07653 12.4165 8.2296 12.5696C8.3832 12.7232 8.57333 12.8 8.8 12.8H11.2V15.22C11.2 15.4467 11.2768 15.6333 11.4304 15.78C11.5835 15.9267 11.7733 16 12 16ZM12 20C10.8933 20 9.85333 19.7899 8.88 19.3696C7.90667 18.9499 7.06 18.38 6.34 17.66C5.62 16.94 5.05013 16.0933 4.6304 15.12C4.21013 14.1467 4 13.1067 4 12C4 10.8933 4.21013 9.85333 4.6304 8.88C5.05013 7.90667 5.62 7.06 6.34 6.34C7.06 5.62 7.90667 5.04987 8.88 4.6296C9.85333 4.20987 10.8933 4 12 4C13.1067 4 14.1467 4.20987 15.12 4.6296C16.0933 5.04987 16.94 5.62 17.66 6.34C18.38 7.06 18.9499 7.90667 19.3696 8.88C19.7899 9.85333 20 10.8933 20 12C20 13.1067 19.7899 14.1467 19.3696 15.12C18.9499 16.0933 18.38 16.94 17.66 17.66C16.94 18.38 16.0933 18.9499 15.12 19.3696C14.1467 19.7899 13.1067 20 12 20Z"
                                fill="#AAA6C2"></path>
                        </svg>
                    </button>
                    <div class="SelectInput_select__list__vjkvP">
                        <div class="SelectInput_select__list__item__6cgMQ">
                            <div class="Circle_circle__3jS7D" style="background: rgb(125, 224, 222); opacity: 1">
                            </div>
                            Любой банкомат
                        </div>
                    </div>
                </div>
                <div class="SelectInput_select__oxfzh">
                    <div class="CreateExchange_home__body__header__title__k-9BQ">
                        <h2>Способ возврата</h2>
                    </div>
                    <button class="SelectInput_select__btn__alsz6">
                        Выберите удобный для вас способ<svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M12 16C12.2267 16 12.4168 15.9232 12.5704 15.7696C12.7235 15.6165 12.8 15.4267 12.8 15.2V12.8H15.22C15.4467 12.8 15.6333 12.7232 15.78 12.5696C15.9267 12.4165 16 12.2267 16 12C16 11.7733 15.9232 11.5832 15.7696 11.4296C15.6165 11.2765 15.4267 11.2 15.2 11.2H12.8V8.78C12.8 8.55333 12.7235 8.36667 12.5704 8.22C12.4168 8.07333 12.2267 8 12 8C11.7733 8 11.5835 8.07653 11.4304 8.2296C11.2768 8.3832 11.2 8.57333 11.2 8.8V11.2H8.78C8.55333 11.2 8.36667 11.2765 8.22 11.4296C8.07333 11.5832 8 11.7733 8 12C8 12.2267 8.07653 12.4165 8.2296 12.5696C8.3832 12.7232 8.57333 12.8 8.8 12.8H11.2V15.22C11.2 15.4467 11.2768 15.6333 11.4304 15.78C11.5835 15.9267 11.7733 16 12 16ZM12 20C10.8933 20 9.85333 19.7899 8.88 19.3696C7.90667 18.9499 7.06 18.38 6.34 17.66C5.62 16.94 5.05013 16.0933 4.6304 15.12C4.21013 14.1467 4 13.1067 4 12C4 10.8933 4.21013 9.85333 4.6304 8.88C5.05013 7.90667 5.62 7.06 6.34 6.34C7.06 5.62 7.90667 5.04987 8.88 4.6296C9.85333 4.20987 10.8933 4 12 4C13.1067 4 14.1467 4.20987 15.12 4.6296C16.0933 5.04987 16.94 5.62 17.66 6.34C18.38 7.06 18.9499 7.90667 19.3696 8.88C19.7899 9.85333 20 10.8933 20 12C20 13.1067 19.7899 14.1467 19.3696 15.12C18.9499 16.0933 18.38 16.94 17.66 17.66C16.94 18.38 16.0933 18.9499 15.12 19.3696C14.1467 19.7899 13.1067 20 12 20Z"
                                fill="#AAA6C2"></path>
                        </svg>
                    </button>
                    <div class="SelectInput_select__list__vjkvP">
                        <div class="SelectInput_select__list__item__6cgMQ">
                            <div class="Circle_circle__3jS7D" style="background: rgb(255, 255, 0); opacity: 1">
                            </div>
                            Тинькофф
                        </div>
                    </div>
                </div>
                <div class="loan-calc">
                    <div class="CreateExchange_home__body__header__title__k-9BQ">
                        <h2>Нужно будет отдать</h2>
                    </div>{{ return_sum }} RUB
                </div>
                <button class="Button_button__igezS CreateExchange_home__btn__B2lyA" type="button"
                    @click="$router.push('/verification')">
                    Получить деньги
                </button>
            </div>
        </div>
    </div>
    <NavBar />
</template>

<script>
import eventBus from '../eventBus'
import { ListLoader, InstagramLoader } from 'vue-content-loader'
import NavBar from '@/components/Navbar.vue';


export default {
    components: { InstagramLoader, NavBar },
    data() {
        return {
            infoActive: true,
            sexActive: true,
            channel: {},
            sum: 1000,
            term_days: 1,
            return_sum: null,
        }
    },
    watch: {
    },
    async beforeMount() {
        window.Telegram?.WebApp.BackButton.onClick(this.routeBack);
        window.Telegram?.WebApp.BackButton.show();

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
        async getLoanCalc(id) {
            const results = await this.$store.state.myApi.get(this.$store.state.restAddr + '/loan_calculation', {
                params: {
                    term_days: this.term_days,
                    sum: this.sum,
                }
            })
                .then(response => {
                    this.return_sum = response.data?.return_sum;
                })
                .catch(e => { eventBus.$emit('noresponse', e) })

            return results

        },
    }
}
</script>
  

<style lang="scss" scoped>
.slider {
    -webkit-appearance: none;
    width: 100%;
    height: 15px;
    border-radius: 5px;
    background: #706c88;
    outline: none;
    opacity: 0.7;
    -webkit-transition: .2s;
    transition: opacity .2s;
}

.slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: #AAA6C2;
    cursor: pointer;
}

.slider::-moz-range-thumb {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: #AAA6C2;
    cursor: pointer;
}
</style>
  