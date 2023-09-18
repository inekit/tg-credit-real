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
            <transition name="slide-fade">
                <div class="CreateExchange_home__body__63ZPN" v-if="stepNumber === 1">
                    <div class="menu-page">
                        <div>
                            <div class="CreateExchange_home__body__header__title__k-9BQ">
                                <h2>Сумма</h2>
                                <button class="sc-Dmqmp dgnXQs">
                                    <span>{{ verificationData.sum }} RUB</span>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7 10H21L17 6M17 14H3L7 18" stroke="url(#paint0_linear_2669_1378)"
                                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                        <defs>
                                            <linearGradient id="paint0_linear_2669_1378" x1="3" y1="6" x2="22.4429"
                                                y2="9.1813" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#3BD8CC"></stop>
                                                <stop offset="1" stop-color="#3B9FCC"></stop>
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </button>
                            </div>
                            <div class="slidecontainer">
                                <input type="range" min="1000" max="100000" class="slider" id="myRange"
                                    v-model="verificationData.sum" @change="calcLoan">
                            </div>
                        </div>
                        <div class="SelectInput_select__oxfzh">
                            <div class="CreateExchange_home__body__header__title__k-9BQ">
                                <h2>Срок</h2>
                                <div class="sc-Dmqmp dgnXQs">
                                    <span>{{ verificationData.term_days }} дн.</span>
                                </div>
                            </div>
                            <div class="slidecontainer">
                                <input type="range" min="1" max="30" class="slider" id="myRange"
                                    v-model="verificationData.term_days" @change="calcLoan">
                            </div>
                        </div>

                        <div class="loan-calc">
                            <div class="">
                                <h2>Нужно будет отдать</h2>
                            </div><span>{{ return_sum ?? "???" }} RUB</span>
                        </div>
                        <button class="Button_button__igezS CreateExchange_home__btn__B2lyA" type="button"
                            @click="stepNumber = 2" :disabled="!verificationData.sum || !verificationData.term_days">
                            Получить деньги
                        </button>
                    </div>
                </div>
            </transition>
            <transition name="slide-fade">
                <div class="CreateExchange_home__body__63ZPN" v-if="stepNumber === 2">
                    <div class="menu-page">
                        <div class="">
                            <div class="CreateExchange_home__body__header__title__k-9BQ">
                                <h2>Способ получения</h2>
                            </div>
                            <button class="SelectInput_select__btn__alsz6" @click="chooseAtmOpened = true">
                                Выберите удобный для вас способ<svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M12 16C12.2267 16 12.4168 15.9232 12.5704 15.7696C12.7235 15.6165 12.8 15.4267 12.8 15.2V12.8H15.22C15.4467 12.8 15.6333 12.7232 15.78 12.5696C15.9267 12.4165 16 12.2267 16 12C16 11.7733 15.9232 11.5832 15.7696 11.4296C15.6165 11.2765 15.4267 11.2 15.2 11.2H12.8V8.78C12.8 8.55333 12.7235 8.36667 12.5704 8.22C12.4168 8.07333 12.2267 8 12 8C11.7733 8 11.5835 8.07653 11.4304 8.2296C11.2768 8.3832 11.2 8.57333 11.2 8.8V11.2H8.78C8.55333 11.2 8.36667 11.2765 8.22 11.4296C8.07333 11.5832 8 11.7733 8 12C8 12.2267 8.07653 12.4165 8.2296 12.5696C8.3832 12.7232 8.57333 12.8 8.8 12.8H11.2V15.22C11.2 15.4467 11.2768 15.6333 11.4304 15.78C11.5835 15.9267 11.7733 16 12 16ZM12 20C10.8933 20 9.85333 19.7899 8.88 19.3696C7.90667 18.9499 7.06 18.38 6.34 17.66C5.62 16.94 5.05013 16.0933 4.6304 15.12C4.21013 14.1467 4 13.1067 4 12C4 10.8933 4.21013 9.85333 4.6304 8.88C5.05013 7.90667 5.62 7.06 6.34 6.34C7.06 5.62 7.90667 5.04987 8.88 4.6296C9.85333 4.20987 10.8933 4 12 4C13.1067 4 14.1467 4.20987 15.12 4.6296C16.0933 5.04987 16.94 5.62 17.66 6.34C18.38 7.06 18.9499 7.90667 19.3696 8.88C19.7899 9.85333 20 10.8933 20 12C20 13.1067 19.7899 14.1467 19.3696 15.12C18.9499 16.0933 18.38 16.94 17.66 17.66C16.94 18.38 16.0933 18.9499 15.12 19.3696C14.1467 19.7899 13.1067 20 12 20Z"
                                        fill="#AAA6C2"></path>
                                </svg>
                            </button>
                            <div class="SelectInput_select__list__vjkvP" v-if="verificationData.atm">
                                <div class="SelectInput_select__list__item__6cgMQ">
                                    <div class="Circle_circle__3jS7D" style="background: rgb(125, 224, 222); opacity: 1">
                                    </div>
                                    {{ verificationData.atm }}
                                </div>
                            </div>
                        </div>
                        <div class="SelectInput_select__oxfzh">
                            <div class="CreateExchange_home__body__header__title__k-9BQ">
                                <h2>Способ возврата</h2>
                            </div>
                            <button class="SelectInput_select__btn__alsz6" @click="chooseReturnOpened = true">
                                Выберите удобный для вас способ<svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M12 16C12.2267 16 12.4168 15.9232 12.5704 15.7696C12.7235 15.6165 12.8 15.4267 12.8 15.2V12.8H15.22C15.4467 12.8 15.6333 12.7232 15.78 12.5696C15.9267 12.4165 16 12.2267 16 12C16 11.7733 15.9232 11.5832 15.7696 11.4296C15.6165 11.2765 15.4267 11.2 15.2 11.2H12.8V8.78C12.8 8.55333 12.7235 8.36667 12.5704 8.22C12.4168 8.07333 12.2267 8 12 8C11.7733 8 11.5835 8.07653 11.4304 8.2296C11.2768 8.3832 11.2 8.57333 11.2 8.8V11.2H8.78C8.55333 11.2 8.36667 11.2765 8.22 11.4296C8.07333 11.5832 8 11.7733 8 12C8 12.2267 8.07653 12.4165 8.2296 12.5696C8.3832 12.7232 8.57333 12.8 8.8 12.8H11.2V15.22C11.2 15.4467 11.2768 15.6333 11.4304 15.78C11.5835 15.9267 11.7733 16 12 16ZM12 20C10.8933 20 9.85333 19.7899 8.88 19.3696C7.90667 18.9499 7.06 18.38 6.34 17.66C5.62 16.94 5.05013 16.0933 4.6304 15.12C4.21013 14.1467 4 13.1067 4 12C4 10.8933 4.21013 9.85333 4.6304 8.88C5.05013 7.90667 5.62 7.06 6.34 6.34C7.06 5.62 7.90667 5.04987 8.88 4.6296C9.85333 4.20987 10.8933 4 12 4C13.1067 4 14.1467 4.20987 15.12 4.6296C16.0933 5.04987 16.94 5.62 17.66 6.34C18.38 7.06 18.9499 7.90667 19.3696 8.88C19.7899 9.85333 20 10.8933 20 12C20 13.1067 19.7899 14.1467 19.3696 15.12C18.9499 16.0933 18.38 16.94 17.66 17.66C16.94 18.38 16.0933 18.9499 15.12 19.3696C14.1467 19.7899 13.1067 20 12 20Z"
                                        fill="#AAA6C2"></path>
                                </svg>
                            </button>
                            <div class="SelectInput_select__list__vjkvP" v-if="verificationData.return_method">
                                <div class="SelectInput_select__list__item__6cgMQ">
                                    <div class="Circle_circle__3jS7D" style="background: rgb(255, 255, 0); opacity: 1">
                                    </div>
                                    {{ verificationData.return_method }}
                                </div>
                            </div>
                            <button class="Button_button__igezS CreateExchange_home__btn__B2lyA" type="button"
                                @click="stepNumber = 3" :disabled="!verificationData.sum || !verificationData.term_days ||
                                    !verificationData.return_method || !verificationData.atm">
                                Пройти верификацию
                            </button>
                        </div>
                    </div>
                </div>
            </transition>
            <transition name="slide-fade">
                <div class="CreateExchange_home__body__63ZPN" v-if="stepNumber === 3">
                    <div class="verification-container">
                        <div class="CreateExchange_home__body__header__title__k-9BQ">
                            <h2>Получатель</h2>
                        </div>
                        <div class="input-group">
                            <input type="text" id="name" name="name" placeholder="Имя" v-model="verificationData.name">
                            <input type="text" id="surname" name="surname" placeholder="Фамилия"
                                v-model="verificationData.surname">
                            <input type="text" id="patronymic" name="patronymic" placeholder="Отчество"
                                v-model="verificationData.patronymic">
                            <input type="tel" id="phone" name="phone" placeholder="Телефон"
                                v-model="verificationData.phone">
                            <input type="date" id="date" name="date" placeholder="Дата рождения"
                                v-model="verificationData.birth_date">
                            <div class="image-input-container">
                                <div class="input-file-row">
                                    <label class="input-file">
                                        <input type="file" accept="image/png, image/gif, image/jpeg, image/jpg"
                                            id="passport-photo" name="passport-photo" placeholder="Фото паспорта"
                                            @change="previewImage($event, 'passport_photo')">
                                        <span>Выберите фото паспорта</span>
                                    </label>
                                </div>
                                <div class="image-preview" v-if="imageData?.passport_photo?.length > 0">
                                    <img class="preview" :src="imageData.passport_photo">
                                </div>
                            </div>
                            <div class="image-input-container">
                                <div class="input-file-row">
                                    <label class="input-file">
                                        <input type="file" accept="image/png, image/gif, image/jpeg, image/jpg"
                                            id="passport-photo" name="passport-photo" placeholder="Фото паспорта"
                                            @change="previewImage($event, 'visa_photo')">
                                        <span>Выберите фото визы</span>
                                    </label>
                                </div>
                                <div class="image-preview" v-if="imageData?.visa_photo?.length > 0">
                                    <img class="preview" :src="imageData.visa_photo">
                                </div>
                            </div>
                            <input type="date" id="date" name="date" placeholder="Дата окончания действия визы"
                                v-model="verificationData.visa_expired_date">
                        </div>
                        <button class="Button_button__igezS CreateExchange_home__btn__B2lyA" type="button" @click="addLoan"
                            :disabled="!checkRequired">
                            Отправить заявку
                        </button>
                    </div>
                </div>
            </transition>
        </div>
    </div>
    <div v-if="chooseAtmOpened">
        <div class="modal__wrapper modal__wrapper--active">
            <div class="modal ">
                <h2 class="SelectModal_select__modal__title__dTC8J">Выберите способ получения</h2>

                <div class="SelectModal_select__modal__variants__9UK4u">
                    <div v-for="atm in atm_list" :key="atm" class="SelectModal_select__modal__variants__elem__MI1tm"
                        @click="this.verificationData.atm = atm">
                        <div class="SelectModal_select__modal__variants__elem__wrapper__xWMoa">
                            <div class="sc-fTJzqL fqCkbN">
                                <div class="CheckBox_check_box__+jlGp">
                                    <div class="CheckBox_check_box__active__SlTbH" v-if="this.verificationData.atm === atm">
                                    </div>
                                </div>
                                <p class="sc-cuOiQm kkxhsz">{{ atm }}</p>
                            </div>
                            <div class="sc-bTtZEv fDguQm"></div>
                        </div>
                    </div>

                </div>
                <button class="Button_button__igezS SelectModal_select__modal__btn__lcRNm " type="button"
                    @click="chooseAtmOpened = false"><svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M17.2503 9.99996C17.2503 14.004 14.0043 17.25 10.0003 17.25C5.99631 17.25 2.75033 14.004 2.75033 9.99996C2.75033 5.99595 5.99631 2.74996 10.0003 2.74996C14.0043 2.74996 17.2503 5.99595 17.2503 9.99996ZM10.0003 18.5833C14.7409 18.5833 18.5837 14.7405 18.5837 9.99996C18.5837 5.25939 14.7409 1.41663 10.0003 1.41663C5.25975 1.41663 1.41699 5.25939 1.41699 9.99996C1.41699 14.7405 5.25975 18.5833 10.0003 18.5833Z"
                            fill="#1F1C2F" stroke="#1F1C2F" stroke-width="0.5"></path>
                        <path
                            d="M14.662 7.53057L14.6622 7.53033C14.7806 7.39911 14.8421 7.22624 14.8331 7.04972C14.8241 6.87364 14.7457 6.70831 14.6152 6.58988L14.6153 6.58967C14.5504 6.53085 14.4745 6.4854 14.3921 6.45591L14.3079 6.69132L14.3921 6.45591C14.3096 6.42642 14.2221 6.41347 14.1346 6.41781C14.0472 6.42214 13.9614 6.44367 13.8822 6.48117L13.9891 6.70675L13.8822 6.48117C13.8031 6.51866 13.7321 6.57139 13.6733 6.63633C13.6733 6.63634 13.6733 6.63634 13.6733 6.63634L8.85432 11.9614L6.2942 9.51782L6.2943 9.51771L6.2879 9.51201C6.15883 9.39702 5.99015 9.33665 5.81743 9.34364C5.64471 9.35063 5.48146 9.42444 5.36212 9.54949C5.24277 9.67454 5.17667 9.84106 5.17775 10.0139C5.17883 10.1868 5.247 10.3525 5.3679 10.476L5.36779 10.4761L5.37397 10.482L8.73897 13.6941L8.9247 13.8714L9.09697 13.681L14.662 7.53057Z"
                            fill="#1F1C2F" stroke="#1F1C2F" stroke-width="0.5"></path>
                    </svg>Подтвердить</button>
            </div>
            <div class="modal__background "></div>
        </div>
    </div>
    <div v-if="chooseReturnOpened">
        <div class="modal__wrapper modal__wrapper--active">
            <div class="modal ">
                <h2 class="SelectModal_select__modal__title__dTC8J">Выберите способ получения</h2>

                <div class="SelectModal_select__modal__variants__9UK4u">
                    <div v-for="return_method in return_list" :key="return_method"
                        class="SelectModal_select__modal__variants__elem__MI1tm"
                        @click="this.verificationData.return_method = return_method">
                        <div class="SelectModal_select__modal__variants__elem__wrapper__xWMoa">
                            <div class="sc-fTJzqL fqCkbN">
                                <div class="CheckBox_check_box__+jlGp">
                                    <div class="CheckBox_check_box__active__SlTbH"
                                        v-if="this.verificationData.return_method === return_method"></div>
                                </div>
                                <p class="sc-cuOiQm kkxhsz">{{ return_method }}</p>
                            </div>
                            <div class="sc-bTtZEv fDguQm"></div>
                        </div>
                    </div>

                </div>
                <button class="Button_button__igezS SelectModal_select__modal__btn__lcRNm " type="button"
                    @click="chooseReturnOpened = false"><svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M17.2503 9.99996C17.2503 14.004 14.0043 17.25 10.0003 17.25C5.99631 17.25 2.75033 14.004 2.75033 9.99996C2.75033 5.99595 5.99631 2.74996 10.0003 2.74996C14.0043 2.74996 17.2503 5.99595 17.2503 9.99996ZM10.0003 18.5833C14.7409 18.5833 18.5837 14.7405 18.5837 9.99996C18.5837 5.25939 14.7409 1.41663 10.0003 1.41663C5.25975 1.41663 1.41699 5.25939 1.41699 9.99996C1.41699 14.7405 5.25975 18.5833 10.0003 18.5833Z"
                            fill="#1F1C2F" stroke="#1F1C2F" stroke-width="0.5"></path>
                        <path
                            d="M14.662 7.53057L14.6622 7.53033C14.7806 7.39911 14.8421 7.22624 14.8331 7.04972C14.8241 6.87364 14.7457 6.70831 14.6152 6.58988L14.6153 6.58967C14.5504 6.53085 14.4745 6.4854 14.3921 6.45591L14.3079 6.69132L14.3921 6.45591C14.3096 6.42642 14.2221 6.41347 14.1346 6.41781C14.0472 6.42214 13.9614 6.44367 13.8822 6.48117L13.9891 6.70675L13.8822 6.48117C13.8031 6.51866 13.7321 6.57139 13.6733 6.63633C13.6733 6.63634 13.6733 6.63634 13.6733 6.63634L8.85432 11.9614L6.2942 9.51782L6.2943 9.51771L6.2879 9.51201C6.15883 9.39702 5.99015 9.33665 5.81743 9.34364C5.64471 9.35063 5.48146 9.42444 5.36212 9.54949C5.24277 9.67454 5.17667 9.84106 5.17775 10.0139C5.17883 10.1868 5.247 10.3525 5.3679 10.476L5.36779 10.4761L5.37397 10.482L8.73897 13.6941L8.9247 13.8714L9.09697 13.681L14.662 7.53057Z"
                            fill="#1F1C2F" stroke="#1F1C2F" stroke-width="0.5"></path>
                    </svg>Подтвердить</button>
            </div>
            <div class="modal__background "></div>
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
            verificationData: {
                sum: null,
                term_days: null,
                atm: null,
                return_method: null,
                name: null, surname: null, patronymic: null, birth_date: null, visa_expired_date: null, phone: null,
                passport_photo: null, visa_photo: null,
            },
            return_sum: null,

            atm_list: ["Любой банкомат", "Личная встреча", "Банкомат Bangkok Bank", "Банкомат Kungsri", "Банкомат SCB", "Банкомат Kasikorn", "Банкомат Krungthai", "Банковский перевод (Таиланд)"],

            stepNumber: 1,
            chooseAtmOpened: false,
            return_list: ["Тиньков", "Сбербанк", "Перевод по номеру счета"],
            chooseReturnOpened: false,
            imageData: { passport_photo: "", visa_photo: "" },
        }
    },
    watch: {
    },
    async beforeMount() {
        window.Telegram?.WebApp.BackButton.onClick(this.routeBack);
        window.Telegram?.WebApp.BackButton.show();


        console.log(this.params, this.$store.state.userId)
        this.verificationData = this.$store.state.profileData

        this.imageData.passport_photo = this.verificationData.passport_photo ? `${this.$store.state.publicPath}/public/pics/${this.verificationData.passport_photo}` : null;
        this.imageData.visa_photo = this.verificationData.visa_photo ? `${this.$store.state.publicPath}/public/pics/${this.verificationData.visa_photo}` : null;


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
    computed: {
        checkRequired() {
            const verificationData = this.verificationData
            const { sum, term_days, return_method, atm, name, surname, patronymic, birth_date, visa_expired_date, phone, passport_photo, visa_photo } = verificationData

            console.log(verificationData)
            if (!sum || !term_days ||
                !return_method || !atm || !name || !surname
                || !patronymic || !birth_date || !visa_expired_date || !phone || !
                passport_photo || !visa_photo) return false;
            return true
        },
    },
    methods: {
        routeBack() {
            this.$router.go(-1)
        },
        previewImage: function (event, variableName) {
            var input = event.target;
            this.verificationData[variableName] = input?.files?.[0]

            if (input.files && input.files[0]) {
                var reader = new FileReader();
                reader.onload = (e) => {
                    this.imageData[variableName] = e.target.result;
                }
                reader.readAsDataURL(input.files[0]);

            }
        },

        async calcLoan() {
            if (!this.verificationData.term_days || !this.verificationData.sum) return;

            const results = await this.$store.state.myApi.get(this.$store.state.restAddr + '/loan_calculation', {
                params: {
                    term_days: this.verificationData.term_days,
                    sum: this.verificationData.sum,
                }
            })
                .then(response => {
                    this.return_sum = response.data?.return_sum;
                })
                .catch(e => { alert(e.toString()) })

            return results

        },
        async getProfileData() {
            const results = await this.$store.state.myApi.get(this.$store.state.restAddr + '/users', {
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
        constractFromData() {
            var formData = new FormData()

            formData.append('user_id', this.$store.state.userId)

            for (let key in this.verificationData) {
                formData.append(key, this.verificationData[key])
            }
            this.imageData.visa_photo && formData.append('visa_preview', this.imageData.visa_photo)
            this.imageData.passport_photo && formData.append('passport_preview', this.imageData.passport_photo)

            return formData
        },
        addLoan() {
            if (this.isOrdering === true) return;

            this.isOrdering = true;

            if (!this.checkRequired) {
                this.isOrdering = false;
                return alert("Пожалуйста, заполните все поля")
            }

            this.$store.state.myApi
                .post(this.$store.state.restAddr + '/loans', this.constractFromData(), {
                    headers: {
                        'Content-Type': `multipart/form-data`,

                    },
                })
                .then(async (response) => {
                    window.Telegram?.WebApp.disableClosingConfirmation()
                    window.Telegram?.WebApp.close();
                })
                .catch(e => {
                    eventBus.$emit('noresponse', e);
                    this.isOrdering = false;
                })
        },
    }
}
</script>
  

<style lang="scss" scoped>
.loan-calc {
    margin-top: 40px;

    & h2 {
        color: #706c88;
        font-size: 24px;
        text-align: center;
        font-weight: 700;
        line-height: 24px;
    }

    span {
        color: #706c88;
        font-size: 16px;
        text-align: center;
        font-weight: 700;
        line-height: 24px;
        margin-top: 20px;
        display: block;
    }
}

.CreateExchange_home__body__63ZPN {
    position: absolute;
    width: calc(100% - 32px);
}

.slide-fade-enter-active {
    transition: all .3s ease-out;
}

.slide-fade-leave-active {
    transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translateX(20px);
    opacity: 0;
}

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

.SelectModal_select__modal__variants__9UK4u {
    height: -webkit-fit-content;
    height: -moz-fit-content;
    height: fit-content;
    max-height: 230px;
    overflow-y: scroll;
    padding-right: 24px;
}

.SelectModal_select__modal__input__\+4LNv {
    margin: 20px 0;
    position: relative;
}

.SelectModal_select__modal__title__dTC8J {
    color: #fff;
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    text-align: center;
    margin-bottom: 20px;
}

.SelectModal_select__modal__variants__elem__MI1tm {
    align-items: center;
    display: flex;
    justify-content: space-between;
}

.SelectModal_select__modal__variants__elem__wrapper__xWMoa {
    align-items: center;
    display: flex;
    justify-content: space-between;
    width: 100%;
}

.fqCkbN {
    display: flex;
}

.fDguQm svg {
    width: 24px;
    height: 24px;
}

.kkxhsz {
    margin-right: auto;
    margin-left: 12px;
}

.CheckBox_check_box__\+jlGp {
    align-items: center;
    border: 1px solid #9692b0;
    border-radius: 50%;
    display: flex;
    height: 24px;
    justify-content: center;
    min-height: 24px;
    min-width: 24px;
    width: 24px;
}

.SelectModal_select__modal__variants__elem__MI1tm p {
    color: #e2e0ee;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
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

.input-group>input {
    align-items: center;
    background-color: #2a2641;
    border-radius: 12px;
    color: #fff;
    color: #706c88;
    display: flex;
    font-size: 16px;
    font-weight: 700;
    justify-content: space-between;
    line-height: 24px;
    margin-bottom: 12px;
    padding: 12px;
    width: 100%;

    &::-webkit-input-placeholder {
        color: #706c88;
    }

    &::placeholder {
        color: #706c88;
    }

    &:focus {
        border: 1px solid #000;
    }
}

.image-input-container {
    align-items: center;
    background-color: #2a2641;
    border-radius: 12px;
    color: #fff;
    color: #706c88;
    display: flex;
    font-size: 16px;
    font-weight: 700;
    justify-content: space-between;
    line-height: 24px;
    margin-bottom: 12px;
    padding: 12px;
    width: 100%;

    &::-webkit-input-placeholder {
        color: #706c88;
    }

    &::placeholder {
        color: #706c88;
    }

    &:focus {
        border: 1px solid #000;
    }

    &>.image-preview {
        height: 40px;
        width: 80px;
        overflow: hidden;
        border-radius: 12px;

        &>img {
            width: 100%;
        }
    }

    .input-file-row {
        display: inline-block;
    }

    .input-file {
        position: relative;
        display: inline-block;
    }

    .input-file span {
        position: relative;
        display: inline-block;
        cursor: pointer;
        border: 1px solid #706c88;
        border-radius: 10px;
        color: #706c88;
        padding: 4px 8px;
    }

    .input-file input[type=file] {
        position: absolute;
        z-index: -1;
        opacity: 0;
        display: block;
        width: 0;
        height: 0;
    }


}
</style>
  