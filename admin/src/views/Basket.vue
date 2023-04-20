<template>
    <div>
        <CFormInput class="mb-4" type="search" v-model="user_id" @change="get" />
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
                        data: { id: item.id },
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
  