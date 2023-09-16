<template>
  <div>
    <AddAdminModal :visible="formVisible" :formData="formData" />
    <Table :fields="tableFieldNames" :postData="getUsers" :actions="dataActions" :rows="rows" name="Администраторы"
      editMode="form" />
  </div>
</template>

<script>
import AddAdminModal from '@/components/AddAdminModal.vue'
import Table from '@/components/Table.vue'
import eventBus from '../eventBus'

import axios from 'axios'
const myApi = axios.create({
  withCredentials: true,
})

export default {
  name: 'Users',
  components: {
    AddAdminModal,
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
        Удалить: { action: this.deleteUser, color: 'danger' },
      },
      tableFieldNames: [
        {
          name: 'id',
          title: 'ID',
        },
        {
          name: 'login',
          title: 'Логин',
        },
      ],
    }
  },
  created() {
    eventBus.$on('closeModal', () => {
      this.formVisible = false
      this.formData = {
      }
    })
    eventBus.$on('adminEdited', () => {
      this.formVisible = false
      this.getUsers()
      this.formData = {}
    })
    eventBus.$on('adminAdded', () => {
      this.formVisible = false
      this.getUsers()
      this.formData = {}
    })
    eventBus.$on('addNewAdmin', () => {
      this.formVisible = true
      this.formData = {}
      this.formMode = 'new'
    })

  },
  methods: {
    changeUser(userObj) {
      this.formVisible = true
      this.formData = userObj
      this.formMode = 'edit'
    },
    getUsers(perPage, page) {
      return myApi
        .get(this.$store.state.publicPath + '/api/admin/admins/', {
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
          .delete(this.$store.state.publicPath + '/api/admin/admins/', {
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
  },
}
</script>

<style lang="scss">
button {
  margin-bottom: 20px;
}
</style>
