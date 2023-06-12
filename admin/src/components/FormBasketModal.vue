<template>
    <CModal backdrop="static" alignment="center" :visible="visible" @close="closeModal">
        <CModalHeader>
            <CModalTitle>Добавление товара в корзину</CModalTitle>
        </CModalHeader>
        <CModalBody>
            <CFormInput class="mb-4" type="text" @input="search" placeholder="Поиск по названию" />
            <div class="search-rows">
                <div class="search-row" v-for="row, i in rows" :key="i">
                    {{ row.title }} {{ row.price }}
                </div>
            </div>
            <CFormSelect :aria-label="select_name" @change="selectOption($event)" label="Результаты поиска">
                <option :selected="selectedOption === null" value="">Выберите опцию</option>
                <option :selected="selectedOption === option.id" :value="option.id" v-for="option, i in options_array"
                    :key="i">{{
                        option.name }} {{
        option.stock }}</option>
            </CFormSelect>
            <CFormSelect aria-label="Количество" @change="selectCount($event)" label="Количество товаров">
                <option value="">Выберите количество товаров</option>
                <option v-for="option, i in [...Array(selectedStock).keys()]" :key="i" :value="option">{{ option }}</option>
            </CFormSelect>
        </CModalBody>
        <CModalFooter>
            <CButton color="secondary" @click="closeModal"> Отменить </CButton>
            <CButton color="primary" @click="addToBasket">Добавить</CButton>
        </CModalFooter>
    </CModal>
</template>
  
<script>
import { CFormSelect } from '@coreui/vue';
import eventBus from '../eventBus'
import axios from 'axios'
const myApi = axios.create({
    withCredentials: true,
})
export default {
    props: {
        mode: {
            required: true,
            type: String,
            validator: (value) => ["new", "edit"].includes(value.toLowerCase()),
        },
        user_id: Number,
        visible: Boolean,
    },
    data() {
        return {
            searchQuery: "",
            selectedCount: 0,
            selectedOption: null,
            select_name: "",
            options_array: [],
        };
    },
    mounted() {
    },
    updated() {
    },
    methods: {
        closeModal() {
            eventBus.$emit("closeModal");
        },
        search(event) {
            this.searchQuery = event.target.value;
            this.get();
        },
        select(row) {
            this.selectedOption = row.id
            this.select_name = row.select_name
        },
        selectOption(event) {
            this.selectedStock = this.rows.find(el => el.id == event.target.value)?.stock
        },
        selectCount(event) {
            this.selectedCount = event.target.value
        },
        get() {
            console.log(this.tag);
            return myApi
                .get(this.$store.state.publicPath + "/api/admin/items/", {
                    params: {
                        take: 50,
                        page: 1,
                        searchQuery: this.searchQuery,
                    },
                })
                .then((res) => {
                    this.options_array = res.data;
                    return res.data;
                })
                .catch((error) => {
                    eventBus.$emit("noresponse", error);
                    return false;
                });
        },
        addToBasket() {
            const count = this.selectedCount;
            this.$store.state.myApi
                .post(this.$store.state.restAddr + '/favorites', {
                    item_option_id: this.selectedOption,
                    count,
                    user_id: this.user_id,
                })
                .then(async () => {
                    eventBus.$emit("closeModal");
                })
                .catch(() => {
                    alert("Эта позиция уже добавлена в корзину или недостаточно товаров")
                })
        }
    },
    components: { CFormSelect }
}
</script>
  
<style lang="scss" scoped>
.invalid-feedback {
    margin-top: 0 !important;
    margin-bottom: 1rem !important;
}
</style>
  