<template>
  <div>
    <AddPromoModal :visible="formVisible" :formData="formData" :mode="formMode" />
    <Table :fields="tableFieldNames" :postData="get" :actions="dataActions" :rows="rows" editMode="form"
      name="Промокоды" />
  </div>
</template>

<script>
import AddPromoModal from '@/components/AddPromoModal.vue'
import Table from '@/components/Table.vue'
import eventBus from '../eventBus'

import axios from 'axios'
const myApi = axios.create({
  withCredentials: true,
})

export default {
  components: {
    AddPromoModal,
    Table,
  },
  data() {
    return {
      myApi: myApi,
      formVisible: false,
      formData: {},
      rows: [],
      dataActions: {
        Изменить: { action: this.change, color: 'warning' },
        Удалить: { action: this.delete, color: 'danger' },
      },
      tableFieldNames: [
        {
          name: 'code',
          title: 'Промокод',
        },
        {
          name: 'count',
          title: 'Макс. использований',
        },
        {
          name: 'used_count',
          title: 'Использовано раз',
        },
        {
          name: 'type',
          title: 'Тип',
        },
        {
          name: 'sum',
          title: 'Сумма / %',
        },
      ],
    }
  },
  created() {
    eventBus.$on('addNewPromo', () => {
      this.formMode = 'new'
      this.formVisible = true
    })
    eventBus.$on('closeModal', () => {
      this.formVisible = false
      this.formData = {}
    })
    eventBus.$on('promoAdded', () => {
      this.formVisible = false
      this.get()
      this.formData = {}
    })
    eventBus.$on('promoEdited', () => {
      this.formVisible = false
      this.get()
      this.formData = {}
    })
  },
  methods: {
    change(elObj) {
      this.formVisible = true
      this.formData = elObj
      this.formMode = 'edit'
    },
    get(take, page) {
      return myApi
        .get(this.$store.state.publicPath + '/api/admin/promos/', {
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
      const result = confirm('Вы действительно хотите удалить промокод?')
      if (result)
        return myApi
          .delete(this.$store.state.publicPath + '/api/admin/promos/', {
            data: { name: item.name },
          })
          .then(() => {
            this.get()
            eventBus.$emit('promoDeleted')
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
</style>
