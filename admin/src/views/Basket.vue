<template>
    <div>
        <CFormInput class="mb-4" type="number" v-model.number="user_id" @change="get" placeholder="Поиск по UID" />
        <AddBasketItemModal :visible="formVisible" :formData="formData" :mode="formMode" />
        <div v-if="user_id" class="change-basket-buttons">
            <button class="btn btn-primary" @click="showBasket = true">Добавление товара в корзину</button>
        </div>
        <FormBasketModal :visible="showBasket" :user_id="user_id" />
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
            showBasket: false,
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
                    name: 'option_name',
                    title: 'Опция',
                },
                {
                    name: 'price',
                    title: 'Цена',
                },
                {
                    name: 'count',
                    title: 'Количество',
                },
            ],
        }
    },
    watch: {
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
            //this.getBasketData()
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
            function moveElement(arr, from, to) {
                arr.splice(to, 0, arr.splice(from, 1)[0]);
                return arr;
            };
            return myApi
                .get(this.$store.state.publicPath + '/api/basket_data/', {
                    params: {
                        user_id: this.user_id,
                    },
                })
                .then((response) => {

                    let rows = response.data?.favorites?.map(el => {
                        if (el.mainside_id) el.title = `${el.title} (обр - ${el.mainside_id})`;
                        return el
                    })
                    for (let i = 0; i < rows.length; i++) {
                        if (!rows[i].mainside_id || (i !== rows.length - 1 && rows[i].mainside_id === rows[i + 1].id)) continue;
                        console.log(i)
                        jfor: for (let j in rows) {
                            if (rows[i].mainside_id === rows[j].id) {
                                console.log(rows.map(el => { return { id: el.id, mainside_id: el.mainside_id } }));
                                rows = moveElement(rows, i, j)

                                console.log(rows.map(el => { return { id: el.id, mainside_id: el.mainside_id } }));
                                if (i < rows.length - 1) i = 0;
                                break jfor;
                            }
                        }
                    }
                    rows = rows.reverse()

                    this.rows = rows

                })
                .catch(() => {
                    //eventBus.$emit('noresponse', error)
                    this.rows = null;

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
  