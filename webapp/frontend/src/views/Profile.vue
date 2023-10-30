<template>
    <div class="container" id="container">
        <div class="sc-gFvbXA nYYiI">
            <div></div>
            <div>Мой профиль</div>
        </div>
        <div class="sc-juxSYv hhQHcC"></div>
        <div class="sc-hpfkCd dcRJAC">
            <div><button class="sc-leZLoi lkxwgu">user_{{ this.$store.state.userId }}</button>
                <h5 class="sc-hmTbGb pMMqZ">Заемщик</h5>
            </div>
        </div>
        <div class="sc-czurPZ btDivy">
            <div class="sc-gpoSCe dAHVIv">
                <div class="sc-cxiiTX cMGBId"><span>{{ $store.state.profileData.count_total }}</span><span>Займов
                        взято</span></div>
                <div class="sc-cxiiTX cMGBId"><span>{{ $store.state.profileData.count_closed }}</span><span>Займов
                        погашено</span></div>
            </div>
            <div class="sc-hINMOq iqnFzV dark"></div>
            <div class="sc-bnVMcY eZuIFP">
                <div><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_993_40892)">
                            <path
                                d="M18.75 8.33333H13.125C12.6083 8.33333 12.1667 8.65 11.975 9.09167L10.0917 13.5C10.0333 13.6417 10 13.8 10 13.9583V15C10 15.221 10.0878 15.433 10.2441 15.5893C10.4004 15.7455 10.6123 15.8333 10.8333 15.8333H15.15L14.5833 18.4833V18.6833C14.5833 18.9417 14.6917 19.1667 14.8583 19.35L15.5167 20L19.6333 15.8833C19.8583 15.6583 20 15.3417 20 15V9.58333C20 9.25181 19.8683 8.93387 19.6339 8.69945C19.3995 8.46503 19.0815 8.33333 18.75 8.33333ZM10 5C10 4.77899 9.9122 4.56702 9.75592 4.41074C9.59964 4.25446 9.38768 4.16667 9.16667 4.16667H4.85L5.41667 1.51667V1.325C5.41667 1.06667 5.30833 0.833333 5.14167 0.658333L4.48333 0L0.366667 4.11667C0.141667 4.34167 0 4.65833 0 5V10.4167C0 10.7482 0.131696 11.0661 0.366116 11.3006C0.600537 11.535 0.918479 11.6667 1.25 11.6667H6.875C7.39167 11.6667 7.83333 11.35 8.025 10.9083L9.90833 6.5C9.96667 6.35833 10 6.2 10 6.04167V5Z"
                                fill="#AAA6C2"></path>
                        </g>
                        <defs>
                            <clipPath id="clip0_993_40892">
                                <rect width="20" height="20" fill="white"></rect>
                            </clipPath>
                        </defs>
                    </svg><span>Мой рейтинг</span></div>
                <div><span>{{ fixedRate }}</span>
                    <div v-for="rate in [1, 2, 3, 4, 5]" class="sc-iLkLTN flOtgo"
                        :class="$store.state.profileData.avg_assessment >= rate ? 'filled' : ''"><svg width="20" height="20"
                            viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M10.2152 14.8723L10.0002 14.7427L9.78517 14.8723L6.32684 16.9556L6.32678 16.9555L6.31815 16.961C6.23545 17.0136 6.16554 17.028 6.09728 17.0223L6.06268 17.4375L6.09728 17.0223C6.00641 17.0147 5.93852 16.9867 5.88099 16.9419C5.8082 16.8853 5.75176 16.8156 5.70971 16.7275C5.68649 16.6785 5.67416 16.6133 5.69774 16.5108C5.69778 16.5106 5.69781 16.5105 5.69784 16.5104L6.61433 12.5736L6.67141 12.3285L6.48091 12.1639L3.42198 9.52112C3.34065 9.44711 3.30665 9.37994 3.29335 9.31814L3.29299 9.3165C3.27485 9.23385 3.27998 9.15812 3.30843 9.07989C3.34246 8.98632 3.3882 8.92247 3.44122 8.87607C3.47375 8.84761 3.54032 8.80947 3.67383 8.789L7.70322 8.43591L7.95333 8.41399L8.05082 8.18262L9.61332 4.47429L9.61396 4.47276C9.65073 4.38451 9.69912 4.33365 9.75911 4.29944L9.7597 4.2991C9.84856 4.24822 9.92699 4.22917 10.0002 4.22917C10.0733 4.22917 10.1522 4.24821 10.2418 4.29925C10.3011 4.33331 10.3495 4.38417 10.3864 4.47276L10.387 4.47429L11.9495 8.18262L12.047 8.41399L12.2971 8.43591L16.3265 8.789C16.46 8.80947 16.5266 8.84761 16.5591 8.87607C16.6122 8.92247 16.6579 8.98632 16.6919 9.0799C16.7205 9.15844 16.7258 9.23451 16.708 9.31728C16.6943 9.37961 16.6597 9.44709 16.5784 9.52114L13.5194 12.1639L13.3289 12.3285L13.386 12.5736L14.3025 16.5104C14.3025 16.5105 14.3026 16.5106 14.3026 16.5107C14.3262 16.6135 14.3138 16.6788 14.2905 16.7278L14.6668 16.9067L14.2908 16.7272C14.2487 16.8154 14.1922 16.8853 14.1194 16.9419C14.0618 16.9867 13.9939 17.0147 13.9031 17.0223L13.9377 17.4375L13.9031 17.0223C13.8348 17.028 13.7649 17.0136 13.6822 16.961L13.6823 16.9609L13.6735 16.9556L10.2152 14.8723Z"
                                stroke="#3BD8CC" stroke-width="0.833333"></path>
                        </svg>
                    </div>

                </div>
            </div>
            <button class="sc-gMHJKX gpJpKG" disabled>
                <div><span>Статус</span></div>
                <div>{{ $store.state.profileData.ban ? "Бан" : $store.state.profileData.verification_date ? "Верифицирован"
                    : "Не верифицирован"
                }}</div>
            </button>
            <button class="sc-gMHJKX gpJpKG" @click="openTg('https://t.me/Ulyanakkkx')">
                <div><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M15.8333 2.5H4.16667C3.25 2.5 2.5 3.25 2.5 4.16667V15.8333C2.5 16.75 3.25 17.5 4.16667 17.5H15.8333C16.75 17.5 17.5 16.75 17.5 15.8333V4.16667C17.5 3.25 16.75 2.5 15.8333 2.5ZM10.0083 15C9.425 15 8.95833 14.5333 8.95833 13.95C8.95833 13.3583 9.425 12.9083 10.0083 12.9083C10.6 12.9083 11.05 13.3583 11.05 13.95C11.0417 14.525 10.6 15 10.0083 15ZM12.5167 8.83333C11.8833 9.75833 11.2833 10.05 10.9583 10.6417C10.875 10.7917 10.825 10.9083 10.8 11.1667C10.7583 11.5417 10.425 11.8167 10.05 11.8167H10C9.56667 11.8167 9.225 11.45 9.26667 11.0167C9.29167 10.7333 9.35833 10.4417 9.51667 10.1583C9.925 9.43333 10.7 9 11.15 8.35833C11.625 7.68333 11.3583 6.41667 10.0083 6.41667C9.41667 6.41667 9.025 6.71667 8.78333 7.075C8.575 7.375 8.20833 7.51667 7.86667 7.375C7.76428 7.33515 7.67226 7.27261 7.59753 7.19207C7.5228 7.11153 7.4673 7.0151 7.43522 6.91002C7.40313 6.80494 7.39529 6.69395 7.41228 6.5854C7.42928 6.47686 7.47067 6.37358 7.53333 6.28333C8.04167 5.54167 8.89167 5 9.99167 5C11.225 5 12.0667 5.55833 12.5 6.26667C12.8667 6.86667 13.0833 7.99167 12.5167 8.83333Z"
                            fill="#AAA6C2"></path>
                    </svg><span>Служба поддержки</span></div>
                <div><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M7.73617 17.2032L13.5599 10.5541C13.629 10.4749 13.6779 10.3892 13.7065 10.2968C13.7355 10.2045 13.75 10.1055 13.75 10C13.75 9.89446 13.7355 9.79551 13.7065 9.70317C13.6779 9.61082 13.629 9.52507 13.5599 9.44591L7.73617 2.77704C7.57488 2.59235 7.37327 2.5 7.13134 2.5C6.8894 2.5 6.68203 2.59894 6.50922 2.79683C6.33641 2.99472 6.25 3.22559 6.25 3.48945C6.25 3.7533 6.33641 3.98417 6.50922 4.18206L11.5899 10L6.50922 15.8179C6.34793 16.0026 6.26728 16.2301 6.26728 16.5003C6.26728 16.771 6.35369 17.0053 6.5265 17.2032C6.69931 17.4011 6.90092 17.5 7.13134 17.5C7.36175 17.5 7.56336 17.4011 7.73617 17.2032Z"
                            fill="#AAA6C2"></path>
                    </svg></div>
            </button>
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
        window.Telegram?.WebApp.BackButton.offClick(this.routeBack);
        window.Telegram?.WebApp.BackButton.hide();
    },
    methods: {
        routeBack() {
            this.$router.go(-1)
        },
        openTg(link) {
            window.open(link)
        },
    },
    computed: {
        fixedRate() {
            return +parseFloat(this.$store.state.profileData.avg_assessment)?.toFixed(1)
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

.flOtgo.filled svg {
    fill: rgb(59, 216, 204);
}
</style>
  