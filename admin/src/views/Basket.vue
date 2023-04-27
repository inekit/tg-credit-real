<template>
    <div>
        <CFormInput class="mb-4" type="search" v-model="user_id" @change="get" placeholder="Поиск по UID" />
        <AddBasketItemModal :visible="formVisible" :formData="formData" :mode="formMode" />
        <div v-if="individual" class="user-individual-container">
            <p>{{ individual.text }}</p>
            <p>{{ individual.price }}</p>
        </div>
        <div v-if="user_id" class="change-basket-buttons">
            <button class="btn btn-primary" @click="showBasket = !showBasket">Сформировать заказ</button>
            <button v-if="!individual" class="btn btn-primary" @click="showIndividual = true">Добавить
                индивидуальную
                позицию</button>
            <button v-else class="btn btn-primary" @click="dropIndividual">Удалить
                индивидуальную
                позицию</button>
        </div>
        <div v-if="showBasket && user_id" class="user-iframe-container">
            <iframe :src="`https://fotodesire.ru/colorsfront/results/${user_id}`" width="480" height="800" align="left">
                Ваш браузер не поддерживает плавающие фреймы!
            </iframe>
        </div>

        <div v-if="showIndividual && user_id" class="user-iframe-container">
            <CInputGroup class="mb-3">
                <CFormInput placeholder="Введите описание индивидуальной позицию" v-model="tempIndividualText" />
                <CFormInput placeholder="Введите цену" v-model="tempIndividualPrice" />
                <CButton type="button" color="secondary" variant="outline" id="button-addon2" @click="addIndividual">
                    Добавить к заказу</CButton>
            </CInputGroup>
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
            showIndividual: false,
            showBasket: false,
            tempIndividualText: null,
            tempIndividualPrice: null,
            dataActions: {
                Изменить: { action: this.change, color: 'warning' },
                Удалить: { action: this.delete, color: 'danger' },
            },
            individual: null,
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
        addIndividual() {
            this.individual = { text: this.tempIndividualText, price: this.tempIndividualPrice }
        },
        dropIndividual() {
            this.individual = null;
            this.showIndividual = false;
        },
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
  