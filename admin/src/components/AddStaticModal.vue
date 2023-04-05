<template>
  <CModal size="xl" backdrop="static" alignment="center" :visible="visible" @close="closeModal">
    <CModalHeader>
      <CModalTitle>Статические данные</CModalTitle>
    </CModalHeader>
    <CModalBody>
      <form ref="add-file-form" novalidate :validated="formValid" @submit.prevent="addTag" class="add-user"
        style="display: 'none'">
        <CFormInput class="mb-3" v-model="formData.gitHubLink" placeholder="Git" label="Git" maxlength="255"
          feedbackValid="Все ок" feedbackInvalid="Введите корректную ссылку (до 255 символов)" />
        <CFormInput class="mb-3" v-model="formData.linkedInLink" placeholder="Linked In" label="Linked In" maxlength="255"
          feedbackValid="Все ок" feedbackInvalid="Введите корректную ссылку (до 255 символов)" />
        <QuillEditor theme="snow" toolbar="essential" ref="aboutEditor" id="aboutEditor" placeholder="Текст обо мне" />
      </form>
    </CModalBody>
    <CModalFooter>
      <CButton color="secondary" @click="
        () => {
          visible = false
        }
      ">
        Отменить
      </CButton>
      <CButton color="primary" @click="editStatic">Изменить</CButton>
    </CModalFooter>
  </CModal>
</template>

<script>
import axios from 'axios'
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css'

const myApi = axios.create({
  withCredentials: true,
})
import eventBus from '../eventBus'

export default {
  components: { QuillEditor },
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
    this.formData.about && this.$refs.aboutEditor?.setHTML(this.formData.about)
  },
  methods: {
    closeModal() {
      eventBus.$emit('closeModal')
    },
    constractFromData() {
      if (!this.formData.gitHubLink || !this.formData.linkedInLink || !this.formData.about) throw new Error()

      var formData = new FormData()

      formData.append('gitHubLink', this.formData.gitHubLink)
      formData.append('linkedInLink', this.formData.linkedInLink)
      formData.append('about', this.$refs.aboutEditor.getHTML())

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
