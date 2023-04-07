<template>
  <CModal backdrop="static" alignment="center" :visible="visible" @close="closeModal">
    <CModalHeader>
      <CModalTitle>Заказ № {{ formData.id }}</CModalTitle>
    </CModalHeader>
    <CModalBody>
      <CForm ref="add-file-form" novalidate :validated="formValid" @submit.prevent="addTag" class="add-user"
        style="display: 'none'">
        <CFormInput class="mb-3" v-model="formData.name" placeholder="Тег" maxlength="255" required feedbackValid="Все ок"
          feedbackInvalid="Введите корректный тег" />
        <CFormTextarea v-model="formData.description" placeholder="Описание" required />
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
      <CButton color="primary" @click="addTag">Изменить заказ</CButton>
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
    visible: {
      required: true,
      type: Boolean,
      default: () => false
    },
    formData: {
      required: true,
      type: Object,
      default: () => {
        return {
          name: '',
          description: '',
        }
      }
    },
  },
  data() {
    return { formValid: false, }
  },
  updated() {
    this.formValid = false
  },
  methods: {
    addNewTag() {
      eventBus.$emit('addNewTag')
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
    addTag() {
      try {
        const formData = this.constractFromData()

        myApi
          .post(this.$store.state.publicPath + '/api/admin/tags', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          })
          .then(() => {
            eventBus.$emit('tagAdded')
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
