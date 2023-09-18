<template>
  <div>
    <AddUserModal :visible="formVisible" :formData="formData" :mode="formMode" />
    <CFormInput type="search" v-model="searchQuery" @change="getUsers();" placeholder="Поиск" class="mb-3" />
    <Table :fields="tableFieldNames" :postData="getUsers" :actions="dataActions" :rows="rows" name="Пользователи"
      editMode="form" />
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
      searchQuery: null,
      dataActions: {
        Подробнее: { action: this.changeUser, color: 'primary' },
        Займы: { action: this.routeToLoans, color: 'primary' },
        Бан: { action: this.banUser, color: 'danger' },
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
          type: 'date',
          title: 'Дата окончания визы',
        },
        {
          name: 'verification_date',
          type: 'date',
          title: 'Дата верификации',
        },
        {
          name: 'ban',
          title: 'Бан',
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
  },
  methods: {
    changeUser(userObj) {
      this.formVisible = true
      this.formData = userObj
      this.formMode = 'edit'
    },
    getUsers(perPage, page) {
      return myApi
        .get(this.$store.state.publicPath + '/api/admin/users/', {
          params: {
            perPage: perPage ?? 10,
            page: page ?? 1,
            searchQuery: this.searchQuery,
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
    banUser(userObj) {
      const result = confirm('Вы действительно хотите забанить пользователя?')
      if (result)
        return myApi
          .put(this.$store.state.publicPath + '/api/admin/users/', { id: userObj.id, ban: !userObj.ban })
          .then(() => {
            this.getUsers()
          })
          .catch((error) => {
            eventBus.$emit('noresponse', error)
          })
    },
    routeToLoans(user) {
      this.$router.push('/loans/user/' + user.id)
    },
  },
}
</script>

<style lang="scss">
button {
  margin-bottom: 20px;
}
</style>
