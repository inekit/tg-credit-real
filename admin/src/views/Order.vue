<template>
    <div>
        <div class="card mb-4 order-card">
            <div>
                ID: {{ order.id }}
            </div>
            <div>
                Создан: {{ dateFormatter(order.creation_date) }}
            </div>
            <div>
                Доставка: {{ order.selected_dm }}
            </div>
            <div>
                Адрес доставки: {{ order.address }}
            </div>
            <div>
                ФИО получателя: {{ `${order.surname} ${order.name} ${order.patronymic}` }}
            </div>
            <div>
                Метод оплаты: {{ order.selected_po }}
            </div>
            <div>
                Сумма заказа: {{ order.total }}
            </div>
            <div>
                Статус: {{ order.status }}
            </div>
            <div class="change-status">
                <span class="w-100 mb-2">Изменить статус</span>
                <button v-for="status in statuses" :key="status" class="btn btn-primary" @click="changeStatus(status)">{{
                    status }}</button>
            </div>
        </div>
        <Table :fields="tableFieldNames" :postData="get" :actions="dataActions" :rows="rows" editMode="form"
            name="Позиции" />
    </div>
</template>
  
<script>
import Table from '@/components/Table.vue'
import eventBus from '../eventBus'
import { dateFormatter } from '../utils/dateFormatter';
import axios from 'axios'
const myApi = axios.create({
    withCredentials: true,
    credentials: 'include'

})

export default {
    components: {
        Table,
    },
    props: ['orderId'],
    data() {
        return {
            myApi: myApi,
            formVisible: false,
            formData: {},
            order: {},
            rows: [],
            statuses: ["Новый", "Оплачен", "На доставке", "Доставлен"],
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
                    name: 'size',
                    title: 'Размер',
                },
                {
                    name: 'size',
                    title: 'Материал',
                },
                {
                    name: 'count',
                    title: 'Количество',
                },
            ],
        }
    },
    created() {
    },
    methods: {
        change(elObj) {
            this.formVisible = true
            elObj.tags_array = new Set(elObj.tags_array)
            this.formData = elObj
            console.log(elObj)
            this.formMode = 'edit'
        },
        dateFormatter,
        changeStatus(newStatus) {
            this.$store.state.myApi.put(this.$store.state.publicPath + '/api/admin/orders', {
                id: this.order.id,
                status: newStatus,
            })
                .then(async () => {
                    this.order.status = newStatus;
                })
                .catch(e => { eventBus.$emit('noresponse', e) })
        },
        get(take, page) {
            console.log(this.tag)
            return myApi
                .get(this.$store.state.publicPath + '/api/admin/orders/', {
                    params: {
                        take: take ?? 10,
                        page: page ?? 1,
                        id: this.$route.params.orderId,
                    },
                })
                .then((res) => {
                    if (res.data.items?.length > 0) this.rows = res.data.items
                    this.order = res.data
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
}

.change-status {
    display: flex;
    flex-wrap: wrap;

    button {
        width: 150px;
        margin-right: 20px;
    }
}
</style>
  