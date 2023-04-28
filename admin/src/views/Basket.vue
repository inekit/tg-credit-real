<template>
    <div>
        <CFormInput class="mb-4" type="search" v-model="user_id" @change="get" placeholder="Поиск по UID" />
        <AddBasketItemModal :visible="formVisible" :formData="formData" :mode="formMode" />
        <div v-if="user_id" class="change-basket-buttons">
            <button class="btn btn-primary" @click="showBasket = true">Сформировать заказ</button>
        </div>
        <FormBasketModal :visible="showBasket" :user_id="user_id" />
        <div v-if="individual" class="user-individual-container">
            <h2>Индивидуальная позиция: </h2>
            <p>{{ individual.text }}</p>
            <p><span>Цена: </span>{{ individual.price }} руб.</p>
        </div>
        <div v-if="user_id" class="change-basket-buttons">
            <button v-if="!individual" class="btn btn-secondary" @click="showIndividual = !showIndividual">Добавить
                индивидуальную
                позицию</button>
            <button v-else class="btn btn-secondary" @click="dropIndividual">Удалить
                индивидуальную
                позицию</button>
        </div>
        <div v-if="showIndividual && user_id" class="user-individual-input">
            <CInputGroup class="mb-3">
                <CFormInput class="w-75 h-38" placeholder="Введите описание индивидуальной позицию"
                    v-model="tempIndividualText" />
                <CFormInput class="h-38" type="number" placeholder="Введите цену" v-model="tempIndividualPrice" />
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
import FormBasketModal from '@/components/FormBasketModal.vue'

export default {
    components: {
        Table, AddBasketItemModal, FormBasketModal
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
    watch: {
        async user_id() {
            await this.getBasketData()
        }
    },
    created() {
        eventBus.$on('addNewOrderItem', () => {
            this.formMode = 'new'
            this.formVisible = true
        })
        eventBus.$on('closeModal', () => {
            this.formVisible = false;
            this.showBasket = false;
            this.get()
            this.getBasketData()
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
        constractFromData() {
            var formData = new FormData()
            formData.append('change_individual', "true")
            formData.append('individual_text', this.tempIndividualText)
            formData.append('individual_price', this.tempIndividualPrice)
            return formData
        },
        addIndividual() {
            myApi
                .post(this.$store.state.publicPath + '/api/favorites/', {
                    change_individual: true,
                    individual_text: this.tempIndividualText,
                    individual_price: this.tempIndividualPrice,
                    user_id: this.user_id,
                })
                .then(() => {
                    this.individual = { text: this.tempIndividualText, price: this.tempIndividualPrice }
                    this.showIndividual = false;
                })
                .catch((e) => {
                    eventBus.$emit('noresponse', e)
                })
        },
        dropIndividual() {
            myApi
                .delete(this.$store.state.publicPath + '/api/favorites/', {
                    data: {
                        change_individual: true,
                        user_id: this.user_id,
                    },
                })
                .then(() => {
                    this.individual = null;
                    this.showIndividual = false;
                })
                .catch((e) => {
                    eventBus.$emit('noresponse', e)
                })
        },
        change(elObj) {
            if (elObj.mainside_id) return alert("Нельзя изменить зависимую сторону")
            this.formVisible = true
            elObj.tags_array = new Set(elObj.tags_array)
            this.formData = elObj
            this.formMode = 'edit'
        },
        dateFormatter,
        async getBasketData() {
            const results = await this.$store.state.myApi.get(this.$store.state.publicPath + '/api/basket_data', {
                params: {
                    user_id: this.user_id,
                }
            })
                .then(response => {
                    return this.individual = response.data.individual_text ?
                        { text: response.data.individual_text, price: response.data.individual_price } :
                        null
                })
                .catch(e => { eventBus.$emit('noresponse', e) })

            return results ?? {}

        },
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

.h-38 {
    height: 38px !important
}
</style>
  