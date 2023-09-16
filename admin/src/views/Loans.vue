<template>
  <div>
    <OrderModal :visible="formVisible" :formData="formData" :mode="formMode" />
    <div class="search-block">
      <CFormInput type="search" v-model="searchQuery" @change="get(); getPageCount()" placeholder="Поиск" />
      <CFormSelect aria-label="Default select example" v-model="status" size="sm">
        <option :value="null">Фильтр по статусу</option>
        <option v-for="currentStatus in ['Новый', 'Выдан', 'Получен', 'Отменен', 'Запрещен', 'На возврате', 'Закрыт',]"
          :key="currentStatus" @select="status = currentStatus; get(); getPageCount()" :value="currentStatus">
          {{ currentStatus }}</option>
      </CFormSelect>
      <CFormCheck id="onlyMyCheck" label="Только мои" v-model="onlyMy" @change="get(); getPageCount()" />
    </div>
    <Table :key="tableKey" :fields="tableFieldNames" :postData="get" :actions="dataActions" :rows="rows" editMode="form"
      :lastPageNumber="lastPageNumber" :getPageCount="getPageCount" name="Займы" />
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
      status: null,
      onlyMy: false,
      rows: [],
      tableKey: 1,
      dataActions: {
        "К займу": { action: this.routeToPosts, color: 'primary' },
        Удалить: { action: this.delete, color: 'danger' },
      },
      lastPageNumber: 1,
      tableFieldNames: [
        {
          name: 'id',
          title: 'ID',
          order: true,
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
          name: 'phone',
          title: 'Телефон',
        },
        {
          name: 'loans_count',
          title: 'Кол-во займов клиента',
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
    /*this.sockets.subscribe('UPDATE_LOANS', () => {
      console.log("updated")
      this.tableKey++
    });*/
  },
  methods: {
    change(elObj) {
      this.formVisible = true
      this.formData = elObj
      this.formMode = 'edit'
    },
    get(take, page, order, orderDesc) {
      return myApi
        .get(this.$store.state.publicPath + '/api/admin/loans/', {
          params: {
            take: take ?? 10,
            page: page ?? 1,
            searchQuery: this.searchQuery,
            admin_id: this.onlyMy ? undefined : this.$store.state.id,
            status: this.status,
            order,
            orderDesc
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
        .get(this.$store.state.publicPath + '/api/admin/loans_count/', {
          params: {
            searchQuery: this.searchQuery,
            admin_id: this.onlyMy ? undefined : this.$store.state.id,
            status: this.status,
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
          .delete(this.$store.state.publicPath + '/api/admin/loans/', {
            data: { id: item.id },
          })
          .then(() => {
            this.get(null, null, "id", true)
            this.getPageCount()
            eventBus.$emit('loanDeleted')
          })
          .catch((error) => {
            eventBus.$emit('noresponse', error)
          })
    },
    routeToPosts(item) {
      this.$router.push('/loan/' + item.id)
    },
  },
}
</script>

<style lang="scss">
button {
  margin-bottom: 20px;
}

.search-block {
  display: flex;
  margin: 1.5rem 0 !important;
  gap: 1rem;
  height: 2.5rem;

  &>* {
    display: inline-block !important;
    // width: unset !important;
  }
}
</style>
