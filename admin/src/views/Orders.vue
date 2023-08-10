<template>
  <div>
    <OrderModal :visible="formVisible" :formData="formData" :mode="formMode" />
    <CFormInput class="mb-4" type="search" v-model="searchQuery" @change="get(); getPageCount()" placeholder="Поиск" />
    <Table :key="tableKey" :fields="tableFieldNames" :postData="get" :actions="dataActions" :rows="rows" editMode="form"
      :lastPageNumber="lastPageNumber" :getPageCount="getPageCount" name="Заказы" />
  </div>
</template>

<script>
import OrderModal from '@/components/OrderModal.vue'
import Table from '@/components/Table.vue'
import eventBus from '../eventBus'

import axios from 'axios'
const myApi = axios.create({
  withCredentials: true,
})

export default {
  name: 'Orders',
  components: {
    OrderModal,
    Table,
  },
  data() {
    return {
      myApi: myApi,
      formVisible: false,
      formData: {},
      rows: [],
      tableKey: 1,
      dataActions: {
        "К заказу": { action: this.routeToPosts, color: 'primary' },
        Удалить: { action: this.delete, color: 'danger' },
      },
      lastPageNumber: 1,
      tableFieldNames: [
        {
          name: 'id',
          title: 'ID',
        },
        {
          name: 'fio',
          title: 'ФИО',
        },
        {
          name: 'username',
          title: 'Юзернейм',
        },
        {
          name: 'address',
          title: 'Адрес',
        },
        {
          name: 'phone',
          title: 'Телефон',
        },
        {
          name: 'orders_count',
          title: 'Кол-во заказов клиента',
          order: true,
        },
        {
          name: 'creation_date',
          title: 'Дата создания',
          order: true,
        },
        {
          name: 'status',
          title: 'Статус',
          order: true,
        },
      ],
    }
  },
  created() {
    eventBus.$on('closeModal', () => {
      this.formVisible = false
      this.formData = {
        name: '',
        description: '',
      }
    })
  },
  mounted() {
    this.sockets.subscribe('UPDATE_ORDERS', () => {
      console.log("updated")
      this.tableKey++
    });
  },
  methods: {
    change(elObj) {
      this.formVisible = true
      this.formData = elObj
      this.formMode = 'edit'
    },
    get(take, page) {
      return myApi
        .get(this.$store.state.publicPath + '/api/admin/orders/', {
          params: {
            take: take ?? 10,
            page: page ?? 1,
            searchQuery: this.searchQuery
          },
        })
        .then((res) => {
          if (res.data?.length > 0) this.rows = res.data
          return res.data
        })
        .catch((error) => {
          eventBus.$emit('noresponse', error)
          return false
        })
    },
    getPageCount(take) {
      return myApi
        .get(this.$store.state.publicPath + '/api/admin/orders_count/', {
          params: {
            searchQuery: this.searchQuery
          },
        })
        .then((res) => {
          this.lastPageNumber = Math.ceil(res.data.orders_count / (take ?? 10))
          return this.lastPageNumber
        })
        .catch((error) => {
          eventBus.$emit('noresponse', error)
          return false
        })
    },
    delete(item) {
      const result = confirm('Вы действительно хотите удалить заказ?')
      if (result)
        return myApi
          .delete(this.$store.state.publicPath + '/api/admin/orders/', {
            data: { id: item.id },
          })
          .then(() => {
            this.get()
            this.getPageCount()
            //this.rows = this.rows.filter((el) => el.id !== id)
            eventBus.$emit('orderDeleted')
          })
          .catch((error) => {
            eventBus.$emit('noresponse', error)
          })
    },
    routeToPosts(item) {
      this.$router.push('/order/' + item.id)
    },
  },
}
</script>

<style lang="scss">
button {
  margin-bottom: 20px;
}
</style>
