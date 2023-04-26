<template>
    <div>
        <CFormInput class="mb-4" type="search" v-model="user_id" @change="get" placeholder="Поиск по UID" />
        <AddBasketItemModal :visible="formVisible" :formData="formData" :mode="formMode" />
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
import AddBasketItemModal from '@/components/AddBasketItemModal.vue'

export default {
    components: {
        Table, AddBasketItemModal
    },
    data() {
        return {
            myApi: myApi,
            formVisible: false,
            formData: {},
            order: {},
            rows: [],
            user_id: null,
            dataActions: {
                Изменить: { action: this.change, color: 'warning' },
                Удалить: { action: this.delete, color: 'danger' },
            },
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
                    name: 'material',
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
        eventBus.$on('addNewOrderItem', () => {
            this.formMode = 'new'
            this.formVisible = true
        })
        eventBus.$on('closeModal', () => {
            this.formVisible = false
            this.formData = {}
        })
        eventBus.$on('orderItemAdded', () => {
            this.formVisible = false
            this.get()
            this.formData = {}
        })
        eventBus.$on('orderItemEdited', () => {
            this.formVisible = false
            this.get()
            this.formData = {}
        })
    },
    methods: {
        change(elObj) {
            if (elObj.mainside_id) return alert("Нельзя изменить зависимую сторону")
            this.formVisible = true
            elObj.tags_array = new Set(elObj.tags_array)
            this.formData = elObj
            this.formMode = 'edit'
        },
        dateFormatter,
        get() {
            console.log(this.tag)
            return myApi
                .get(this.$store.state.publicPath + '/api/favorites/', {
                    params: {
                        user_id: this.user_id,
                    },
                })
                .then((res) => {
                    this.rows = res.data?.map(el => {
                        if (el.mainside_id) el.title = `${el.title} (обр - ${el.mainside_id})`;
                        return el
                    })
                })
                .catch((error) => {
                    eventBus.$emit('noresponse', error)
                    return false
                })
        },
        delete(item) {
            const result = confirm('Вы действительно хотите удалить позицию из заказа?')
            if (result)
                return myApi
                    .delete(this.$store.state.publicPath + '/api/admin/orders_items/', {
                        data: {
                            mainside_id: item.mainside_id,
                            item_option_id: item.id,
                            order_id: item.order_id,
                        },
                    })
                    .then(() => {
                        this.get()
                        //this.rows = this.rows.filter((el) => el.id !== id)
                        eventBus.$emit('tagDeleted')
                    })
                    .catch((error) => {
                        eventBus.$emit('noresponse', error)
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
  