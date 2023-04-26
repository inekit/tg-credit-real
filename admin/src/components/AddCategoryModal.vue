<template>
  <CButton color="primary" @click="addNewProject">Добавить категорию</CButton>
  <CModal backdrop="static" alignment="center" :visible="visible" @close="closeModal">
    <CModalHeader>
      <CModalTitle>{{
        mode === 'new' ? 'Добавить категорию' : 'Редактировать категорию'
      }}</CModalTitle>
    </CModalHeader>
    <CModalBody>
      <CForm ref="add-file-form" novalidate :validated="formValid" @submit.prevent="addCategory()" class="add-user"
        style="display: 'none'">
        <CFormInput class="mb-3" v-model="formData.name" placeholder="Категория" id="inputName"
          aria-describedby="inputGroupPrepend" maxlength="255" required feedbackValid="Все ок"
          feedbackInvalid="Введите корректное название категории" />
        <CFormInput type="file" accept="image/*" ref="preview" @input="previewMultiImage" class="mb-3" label="Превью"
          placeholder="Превью" />
        <div class="border p-2 mt-3 preview-container">
          <img :src="preview" class="img-fluid" />
        </div>
        <CFormTextarea v-model="formData.description" placeholder="Описание" id="inputDescription"
          aria-describedby="inputGroupPrepend" required />
      </CForm>
    </CModalBody>
    <CModalFooter>
      <CButton color="secondary" @click="closeModal">
        Отменить
      </CButton>
      <CButton color="primary" v-if="mode === 'new'" @click="addCategory">Добавить категорию</CButton>
      <CButton color="primary" v-else @click="editCategory">Редактировать категорию</CButton>
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
    mode: {
      required: true,
      type: String,
      validator: (value) => ['new', 'edit'].includes(value.toLowerCase()),
    },
    visible: false,
    formData: {
      name: '',
      description: '',
    },
  },
  data() {
    return { formValid: false, preview: "" }
  },
  mounted() {
    this.preview = `${this.$store.state.publicPath}/public/pics/${this.formData.preview}`
    this.old_name = this.formData.name

  },
  updated() {
    this.formValid = false
    this.preview = `${this.$store.state.publicPath}/public/pics/${this.formData.preview}`
    this.old_name = this.formData.name
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

      formData.append('preview', this.formData.preview);

      formData.append('name', this.formData.name);
      formData.append('old_name', this.old_name)

      formData.append('description', this.formData.description)

      return formData
    },
    previewMultiImage(event) {
      var input = event.target;

      if (input.files) {
        var reader = new FileReader();
        reader.onload = (e) => {
          this.preview = e.target.result;
        }
        this.formData.preview = input.files[0];
        reader.readAsDataURL(input.files[0]);
      }
    },
    addCategory() {
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
    editCategory() {
      try {
        const formData = this.constractFromData(true)

        myApi
          .put(this.$store.state.publicPath + '/api/admin/categories', formData, {
            headers: {
              'Content-Type': `multipart/form-data`,

            },
          })
          .then(() => {
            eventBus.$emit('projectEdited')
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
  },
}
</script>

<style lang="scss" scoped>
.invalid-feedback {
  margin-top: 0 !important;
  margin-bottom: 1rem !important;
}
</style>
