<template>
    <div>
        <div class="card mb-4 order-card">
            <div>
                ID: {{ loan.id }}
            </div>
            <div>
                Дата создания: {{ dateFormatter(loan.creation_date) }}
            </div>
            <div>
                ID заемщика: {{ loan.user_id }}
            </div>
            <div>
                Юзернейм Телеграм: {{ loan.username ? `@${loan.username}` : "Нет" }}
            </div>
            <div>
                ФИО получателя: {{ `${loan.surname} ${loan.name} ${loan.patronymic}` }}
            </div>
            <div>
                Телефон: {{ loan.phone }}
            </div>
            <div>
                Дата рождения: {{ dateFormatter(loan.birth_date) }}
            </div>
            <div v-if="loan.passport_photo" class="img-container mb-3">
                <label>Фото паспорта</label>
                <img :src="`${$store.state.publicPath}/public/pics/${loan.passport_photo}`" />
            </div>
            <div v-if="loan.visa_photo" class="img-container mb-3">
                <label>Фото визы</label>
                <img :src="`${$store.state.publicPath}/public/pics/${loan.visa_photo}`" />
            </div>
            <div>
                Дата окончания визы: {{ dateFormatter(loan.visa_expired_date) }}
            </div>
            <div>
                Сумма займа: {{ loan.sum }}
            </div>
            <div>
                Сумма к возврату: {{ loan.return_sum }}
            </div>
            <div>
                Срок займа (в днях): {{ loan.term_days }}
            </div>
            <div>
                Способ выдачи: {{ loan.atm }}
            </div>
            <div>
                Способ возврата: {{ loan.return_method }}
            </div>
            <div v-if="loan.issue_date">
                Дата выдачи: {{ dateFormatter(loan.issue_date) }}
            </div>
            <div v-if="loan.return_date">
                Дата возврата: {{ dateFormatter(loan.return_date) }}
            </div>
            <div>
                Страна: {{ loan.country }}
            </div>
            <div v-if="loan.aprooved_by_id">
                ID ответственного администратора: {{ loan.aprooved_by_id }}
            </div>
            <div v-if="loan.assessment">
                Оценка заемщика: {{ loan.assessment }}
            </div>
            <div>
                Статус: {{ loan.status }}
            </div>
            <div class="change-status" v-if="statuses.length">
                <div v-if="loan.status !== 'На возврате'">
                    <span class="w-100 mb-2">Изменить статус</span>
                    <button v-for="status in statuses" :key="status" class="btn btn-primary"
                        @click="changeStatus(status)">{{
                            status }}</button>
                </div>
                <div v-else>
                    <button class="btn btn-danger" @click="changeStatus('Получен')">Займ не возвращен</button>
                    <button @click="showFinish = true">Займ возвращен</button>
                    <div v-if="showFinish"> <span class="w-100 mb-2">Оцените клиента и завершите заказ</span>
                        <input type="range" min="1" max="5" v-model="assessment">
                        <button class="btn btn-primary" @click="changeStatus('Закрыт')">Оценить и подтвердить возврат
                            займа</button>
                    </div>

                </div>

            </div>
        </div>
    </div>
</template>
  
<script>
import eventBus from '../eventBus'
import { dateFormatter } from '../utils/dateFormatter';
import axios from 'axios'
const myApi = axios.create({
    withCredentials: true,
    credentials: 'include'

})

export default {
    components: {
    },
    props: ['loanId'],
    data() {
        return {
            myApi: myApi,
            formVisible: false,
            formData: {},
            loan: {},
            rows: [],
            statuses: [],
            assessment: 5,
            messageTemplate: null,
            showFinish: false,
            tableFieldNames: [
                {
                    name: 'id',
                    title: 'Артикул',
                },
                {
                    name: 'title',
                    title: 'Название',
                },
                {
                    name: 'option_name',
                    title: 'Опция',
                },
                {
                    name: 'count',
                    title: 'Количество',
                },
            ],
        }
    },
    async created() {
        await this.get();
        this.printStatuses()
    },
    methods: {
        printStatuses() {
            this.statuses = this.loan.status === 'Новый' ?
                ['Выдан', 'Запрещен'] : this.loan.status === 'На возврате' ? ['Получен', 'Закрыт'] : this.loan.status === 'Выдан' ? [/*'Получен'*/] : []
        },
        change(elObj) {
            this.formVisible = true
            elObj.tags_array = new Set(elObj.tags_array)
            this.formData = elObj
            console.log(elObj)
            this.formMode = 'edit'
        },
        dateFormatter,
        changeStatus(newStatus) {
            this.$store.state.myApi.put(this.$store.state.publicPath + '/api/admin/loans', {
                user_id: this.loan.user_id,
                status: newStatus,
                assessment: this.assessment,
            })
                .then(async () => {
                    this.loan.status = newStatus;
                    this.printStatuses()
                    this.loan.assessment = this.assessment
                })
                .catch(e => { eventBus.$emit('noresponse', e) })
        },

        get() {
            console.log(this.tag)
            return myApi
                .get(this.$store.state.publicPath + '/api/admin/loans/', {
                    params: {
                        id: this.$route.params.loanId,
                    },
                })
                .then((res) => {
                    this.loan = res.data?.[0]
                })
                .catch((error) => {
                    eventBus.$emit('noresponse', error)
                    return false
                })
        },
    },
}
</script>
  
<style lang="scss">
button {
    margin-bottom: 20px;
}

.order-card {
    padding: 1rem;
    font-size: 1.2rem;

    button {
        margin-bottom: 0 !important;
    }
}

.change-status {
    display: flex;
    flex-wrap: wrap;

    button {
        width: 150px;
        margin-right: 20px;
        margin-bottom: 20px !important;
    }
}

.custon-input-part {
    height: 38px !important
}

.img-container {
    width: 480px;
    overflow: hidden;

    img {
        width: 100%
    }
}
</style>
  