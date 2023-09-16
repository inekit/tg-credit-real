<template>
  <div>
    <AddAdminModal :visible="formVisible" :formData="formData" :mode="formMode" />
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
          params: {
            perPage: perPage ?? 10,
            page: page ?? 1,
          }
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
    deleteUser(userObj) {
      const result = confirm('Вы действительно хотите удалить пользователя?')
      if (result)
        return myApi
          .delete(this.$store.state.publicPath + '/api/admin/admins/', {
            data: { id: userObj.id },
          })
          .then(() => {
            this.getUsers()
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
