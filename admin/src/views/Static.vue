<template>
  <div>
    <AddStaticModal :visible="formVisible" :formData="formData" :mode="formMode" />
    <Table :fields="tableFieldNames" :postData="getStatic" :actions="dataActions" :rows="rows" editMode="form"
      name="Параметры" />
  </div>
</template>

<script>
import AddStaticModal from '@/components/AddStaticModal.vue'
import Table from '@/components/Table.vue'
import eventBus from '../eventBus'

import axios from 'axios'
const myApi = axios.create({
  withCredentials: true,
})

export default {
  name: 'Static',
  components: {
    AddStaticModal,
    Table,
  },
  data() {
    return {
      myApi: myApi,
      formVisible: false,
      formData: {},
      rows: [],
      dataActions: {
        Изменить: { action: this.changeUser, color: 'warning' },
      },
      tableFieldNames: [
        {
          name: 'greeting',
          title: 'Приветствие',
        },
        {
          name: 'order',
          title: 'Корзина',
        },
        {
          name: 'card_number',
          title: 'Карта для перевода',
        },
      ],
    }
  },
  created() {
    eventBus.$on('closeModal', () => {
      this.formVisible = false
      this.formData = {}
    })
    eventBus.$on('staticEdited', () => {
      this.formVisible = false
      this.getStatic()
      this.formData = {}
    })
  },
  methods: {
    changeUser(userObj) {
      this.formVisible = true
      this.formData = userObj
    },
    getStatic(perPage, page) {
      if (page > 1) return false;
      return myApi
        .get(this.$store.state.publicPath + '/api/admin/statics/', {
          perPage: perPage ?? 0,
          page: page ?? 0,
        })
        .then((res) => {
          this.rows = res.data
          return res.data
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
