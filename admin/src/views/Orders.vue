<template>
  <div>
    <OrderModal :visible="formVisible" :formData="formData" :mode="formMode" />
    <Table :key="tableKey" :fields="tableFieldNames" :postData="get" :actions="dataActions" :rows="rows" editMode="form"
      name="Теги" />
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
      },
      tableFieldNames: [
        {
          name: 'id',
          title: 'ID',
        },
        {
          name: 'creation_date',
          title: 'Дата создания',
        },
        {
          name: 'status',
          title: 'Статус',
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
    delete(item) {
      const result = confirm('Вы действительно хотите удалить заказ?')
      if (result)
        return myApi
          .delete(this.$store.state.publicPath + '/api/admin/orders/', {
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
    routeToPosts(item) {
      this.$router.push('/orders/id/' + item.id)
    },
  },
}
</script>

<style lang="scss">
button {
  margin-bottom: 20px;
}
</style>
