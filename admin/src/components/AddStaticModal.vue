<template>
  <CModal size="xl" backdrop="static" alignment="center" :visible="visible" @close="closeModal">
    <CModalHeader>
      <CModalTitle>Параметры</CModalTitle>
    </CModalHeader>
    <CModalBody>
      <form ref="add-file-form" novalidate :validated="formValid" @submit.prevent="addTag" class="add-user"
        style="display: 'none'">
        <span>Карта</span>
        <CFormInput type="text" aria-required="true" required v-model="formData.card_number"></CFormInput>
      </form>
    </CModalBody>
    <CModalFooter>
      <CButton color="secondary" @click="closeModal">
        Отменить
      </CButton>
      <CButton color="primary" @click="editStatic">Изменить</CButton>
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
  components: {},
  props: {
    visible: false,
    formData: {
      gitHubLink: '',
      linkedInLink: '',
      about: '',
    },
  },
  data() {
    return { formValid: false, }
  },
  updated() {
    this.formValid = false
    this.formData.greeting && this.$refs.greetingEditor?.setHTML(this.formData.greeting)
    this.formData.order && this.$refs.orderEditor?.setHTML(this.formData.order)

  },
  methods: {
    closeModal() {
      eventBus.$emit('closeModal')
    },
    constractFromData() {

      var formData = new FormData()

      //formData.append('greeting', this.$refs.greetingEditor.getHTML())
      //formData.append('order', this.$refs.orderEditor.getHTML())
      formData.append('card_number', this.formData.card_number)

      return formData
    },
    editStatic() {
      try {
        const formData = this.constractFromData()

        myApi
          .put(this.$store.state.publicPath + '/api/admin/statics', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          })
          .then(() => {
            eventBus.$emit('staticEdited')
          })
          .catch((e) => {
            console.log(e)
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
