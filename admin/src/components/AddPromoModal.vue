<template>
  <CButton color="primary" @click="addNewCode">Добавить промокод</CButton>
  <CModal backdrop="static" alignment="center" :visible="visible" @close="closeModal">
    <CModalHeader>
      <CModalTitle>{{
        mode === 'new' ? 'Добавить промокод' : 'Редактировать промокод'
      }}</CModalTitle>
    </CModalHeader>
    <CModalBody>
      <CForm ref="add-file-form" novalidate :validated="formValid" @submit.prevent="addPromo" class="add-user"
        style="display: 'none'">
        <CFormInput v-if="mode === 'new'" class="mb-3" v-model="formData.code" placeholder="Промокод" id="inputCode"
          aria-describedby="inputGroupPrepend" maxlength="255" required feedbackValid="Все ок"
          feedbackInvalid="Введите корректный промокод" />
        <CFormInput v-else class="mb-3" v-model="formData.code" id="inputCode" required disabled />
        <div class="types-list">
          <span>Тип</span>
          <CFormCheck id="null-name" :checked="formData.type === 'money'" @input="formData.type = 'money'" type="radio"
            name="type-name" value="money" label="Число" />
          <CFormCheck id="null-name" :checked="formData.type === 'procent'" @input="formData.type = 'procent'"
            type="radio" name="type-name" value="procent" label="Процент" />
        </div>
        <CFormInput class="mb-3" v-model="formData.count" label="Количество использований" id="inputCount"
          aria-describedby="inputGroupPrepend" type="number" required feedbackValid="Все ок"
          feedbackInvalid="Введите корректное число" />
        <CFormInput class="mb-3" v-model="formData.sum" label="Сумма / %" id="inputSum"
          aria-describedby="inputGroupPrepend" type="number" required feedbackValid="Все ок"
          feedbackInvalid="Введите корректное число" />
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
      <CButton color="primary" v-if="mode === 'new'" @click="addPromo">Добавить промокод</CButton>
      <CButton color="primary" v-else @click="editPromo">Редактировать промокод</CButton>
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
    },
  },
  data() {
    return { formValid: false }
  },
  mounted() {
  },
  updated() {
    this.formValid = false
  },
  methods: {
    addNewCode() {
      eventBus.$emit('addNewCode')
    },
    closeModal() {
      eventBus.$emit('closeModal')
    },
    constractFromData() {
      if (!this.formData.code || !this.formData.count || !this.formData.sum || !this.formData.type) throw new Error()

      var formData = new FormData()

      formData.append('code', this.formData.code)
      formData.append('count', this.formData.count)
      formData.append('sum', this.formData.sum)
      formData.append('type', this.formData.type)

      return formData
    },
    addPromo() {
      try {
        const formData = this.constractFromData()

        myApi
          .post(this.$store.state.publicPath + '/api/admin/promos', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          })
          .then(() => {
            eventBus.$emit('promoAdded')
          })
          .catch((e) => {
            eventBus.$emit('noresponse', e)
          })
      } catch (e) {
        this.formValid = true
      }
    },
    editPromo() {
      try {
        const formData = this.constractFromData(true)

        myApi
          .put(this.$store.state.publicPath + '/api/admin/promos', formData, {
            headers: {
              'Content-Type': `multipart/form-data`,

            },
          })
          .then(() => {
            eventBus.$emit('promoEdited')
          })
          .catch((e) => {
            eventBus.$emit('noresponse', e)
          })
      } catch (e) {
        console.log(e)
        this.formValid = true
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
