<template>
    <div class="status-container">
        <div class="sum-title">{{ loanData.sum }}</div>
        <div class="length-title">{{ loanData.term_days }}</div>
        <div class="get-title">{{ loanData.get_method }}</div>
        <div class="return-title">{{ loanData.return_method }}</div>
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
            loanData: {}
        }
    },
    watch: {
    },
    async beforeMount() {
        window.Telegram?.WebApp.BackButton.onClick(this.routeBack);
        window.Telegram?.WebApp.BackButton.show();

        this.loanData = await this.getLoanData()
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
        changeStatus(status) {
            this.$store.state.myApi
                .put(this.$store.state.restAddr + '/loans', {
                    params: {
                        status,
                        user_id: this.$store.state.userId,
                    }
                },)
                .then(async (response) => {
                    window.Telegram?.WebApp.disableClosingConfirmation()
                    window.Telegram?.WebApp.close();
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
        status() { return this.$store.state.profileData?.active_loan_status }
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
  