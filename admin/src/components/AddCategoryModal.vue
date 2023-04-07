<template>
  <CButton color="primary" @click="addNewProject">Добавить проект</CButton>
  <CModal backdrop="static" alignment="center" :visible="visible" @close="closeModal">
    <CModalHeader>
      <CModalTitle>Добавить категорию</CModalTitle>
    </CModalHeader>
    <CModalBody>
      <CForm ref="add-file-form" novalidate :validated="formValid" @submit.prevent="addProject()" class="add-user"
        style="display: 'none'">
        <CFormInput class="mb-3" v-model="formData.name" placeholder="Категория" id="inputName"
          aria-describedby="inputGroupPrepend" maxlength="255" required feedbackValid="Все ок"
          feedbackInvalid="Введите корректное название категории" />
        <CFormTextarea v-model="formData.description" placeholder="Описание" id="inputDescription"
          aria-describedby="inputGroupPrepend" required />
      </CForm>
    </CModalBody>
    <CModalFooter>
      <CButton color="secondary" @click="
        () => {
          visible = false
        }
      ">
        Отменить
      </CButton>
      <CButton color="primary" @click="addProject">Добавить категорию</CButton>
    </CModalFooter>
  </CModal>
</template>

<script>
import axios from 'axios'
const myApi = axios.create({
  withCredentials: true,
})
import eventBus from '../eventBus'

export default {
  props: {
    visible: false,
    formData: {
      name: '',
      description: '',
    },
  },
  data() {
    return { formValid: false, }
  },
  updated() {
    this.formValid = false
  },
  methods: {
    addNewProject() {
      eventBus.$emit('addNewProject')
    },
    closeModal() {
      eventBus.$emit('closeModal')
    },
    constractFromData() {
      if (!this.formData.name || !this.formData.description) throw new Error()

      var formData = new FormData()

      formData.append('name', this.formData.name)
      formData.append('description', this.formData.description)

      return formData
    },
    addProject() {
      try {
        const formData = this.constractFromData()

        myApi
          .post(this.$store.state.publicPath + '/api/admin/categories', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          })
          .then(() => {
            eventBus.$emit('projectAdded')
          })
          .catch((e) => {
            eventBus.$emit('noresponse', e)
          })
      } catch (e) {
        this.formValid = true
        //eventBus.$emit('wrongInputData', e)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.invalid-feedback {
  margin-top: 0 !important;
  margin-bottom: 1rem !important;
}
</style>
