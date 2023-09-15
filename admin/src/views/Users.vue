<template>
  <div>
    <AddUserModal :visible="formVisible" :formData="formData" :mode="formMode" />
    <Table :fields="tableFieldNames" :postData="getUsers" :actions="dataActions" :rows="rows" name="Администраторы" />
  </div>
</template>

<script>
import AddUserModal from '@/components/AddUserModal.vue'
import Table from '@/components/Table.vue'
import eventBus from '../eventBus'

import axios from 'axios'
const myApi = axios.create({
  withCredentials: true,
})

export default {
  name: 'Users',
  components: {
    AddUserModal,
    Table,
  },
  data() {
    return {
      myApi: myApi,
      formVisible: false,
      formData: {},
      rows: [],
      dataActions: {
        Бан: { action: this.banUser, color: 'light' },
        Изменить: { action: this.changeUser, color: 'warning' },
        Удалить: { action: this.deleteUser, color: 'danger' },
      },
      tableFieldNames: [
        {
          name: 'id',
          title: 'ID',
        },
        {
          name: 'username',
          title: 'Юзернейм',
        },
        {
          name: 'fio',
          title: 'ФИО',
        },
        {
          name: 'phone',
          title: 'Телефон',
        },
        {
          name: 'visa_expired_date',
          title: 'Дата окончания визы',
        },
        {
          name: 'verification_date',
          title: 'Дата верификации',
        },

      ],
    }
  },
  methods: {
    changeUser(userObj) {
      this.formVisible = true
      this.formData = userObj
    },
    getUsers(perPage, page) {
      return myApi
        .get(this.$store.state.publicPath + '/api/admin/users/', {
          perPage: perPage ?? 0,
          page: page ?? 0,
        })
        .then((res) => {
          this.rows = res.data
          return res.data
        })
        .catch((error) => {
          eventBus.$emit('noresponse', error)
          return false
        })
    },
    deleteUser(id) {
      console.log(id)
      const result = confirm('Вы действительно хотите удалить пользователя?')
      if (result)
        return myApi
          .delete(this.$store.state.publicPath + '/api/admin/users/', {
            data: { id },
          })
          .then(() => {
            this.rows = this.rows.filter((el) => el.id !== id)
            eventBus.$emit('userDeleted')
          })
          .catch((error) => {
            eventBus.$emit('noresponse', error)
          })
    },
    banUser(id) {
      const result = confirm('Вы действительно хотите забанить пользователя?')
      if (result)
        return myApi
          .put(this.$store.state.publicPath + '/api/admin/users/', { id, ban: true })
          .then(() => {
            eventBus.$emit('userAdded')
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
