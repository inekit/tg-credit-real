<template>
  <CModal alignment="center" :visible="visible" @close="closeModal">
    <CModalHeader>
      <CModalTitle>{{ login }}</CModalTitle>
    </CModalHeader>
    <CModalBody>
      <CInputGroup class="mb-3">
        <CInputGroupText>
          <CIcon icon="cil-user" />
        </CInputGroupText>
        <CFormInput label="Пароль" placeholder="Введите логин" autocomplete="username" v-model="formData.login" />
      </CInputGroup>
      <CInputGroup class="mb-3">
        <CInputGroupText>
          <CIcon icon="cil-lock-locked" />
        </CInputGroupText>
        <CFormInput type="password" label="Пароль" placeholder="Введите новый пароль" autocomplete="new-password"
          v-model="password" />
      </CInputGroup>
    </CModalBody>
    <CModalFooter>
      <CButton color="secondary" @click="closeModal">
        Отменить
      </CButton>
      <CButton color="primary" v-if="mode === 'new'" @click="addAdmin">Добавить администратора</CButton>
      <CButton color="primary" v-else @click="editAdmin">Редактировать администратора</CButton>
    </CModalFooter>
  </CModal>
</template>


<script>
import axios from 'axios'
const myApi = axios.create({
  withCredentials: true,
})
import eventBus from '../eventBus'

export default ({
  props: {
    visible: false,
    password: null,
    formData: {

    }

  },
  methods: {
    closeModal() {
      eventBus.$emit('closeModal')
    },
    constractFromData() {
      if (!this.formData.login) throw new Error()
      var formData = new FormData()
      formData.append('login', this.formData.login)
      formData.append('password', this.formData.order_id)
      formData.append('id', this.formData.id)
      return formData
    },
    addAdmin() {
      try {
        const formData = this.constractFromData()

        myApi
          .post(this.$store.state.publicPath + '/api/admin/register', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          })
          .then(() => {
            eventBus.$emit('postAdded')
          })
          .catch((e) => {
            eventBus.$emit('noresponse', e)
          })
      } catch (e) {
        this.formValid = true
        //eventBus.$emit('wrongInputData', e)
      }
    },
    editAdmin() {
      try {
        const formData = this.constractFromData(true)

        myApi
          .put(this.$store.state.publicPath + '/api/admin/register', formData, {
            headers: {
              'Content-Type': `multipart/form-data`,

            },
          })
          .then(() => {
            eventBus.$emit('postEdited')
          })
          .catch((e) => {
            eventBus.$emit('noresponse', e)
          })
      } catch (e) {
        console.log(e)
        this.formValid = true
        //eventBus.$emit('wrongInputData', e)
      }
    },
  }
})
</script>
