<template>
  <CModal backdrop="static" alignment="center" :visible="visible" @close="closeModal">
    <CModalHeader>
      <CModalTitle>{{
        mode === 'new' ? 'Добавить позицию' : 'Редактировать позицию'
      }}</CModalTitle>
    </CModalHeader>
    <CModalBody>
      <CForm ref="add-file-form" novalidate :validated="formValid" @submit.prevent="addCategory()" class="add-user"
        style="display: 'none'">
        <CFormInput class="mb-3" v-model="formData.count" placeholder="Категория" id="inputName"
          aria-describedby="inputGroupPrepend" maxlength="255" required feedbackValid="Все ок" type="number"
          feedbackInvalid="Введите корректное название категории" />
      </CForm>
    </CModalBody>
    <CModalFooter>
      <CButton color="secondary" @click="closeModal">
        Отменить
      </CButton>
      <CButton color="primary" v-if="mode === 'new'" @click="addBasketItem">Добавить позицию</CButton>
      <CButton color="primary" v-else @click="editBasketItem">Редактировать позицию</CButton>
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
    return { formValid: false, }
  },
  mounted() {
  },
  updated() {
    this.formValid = false
  },
  methods: {
    addNewOrderItem() {
      eventBus.$emit('addNewOrderItem')
    },
    closeModal() {
      eventBus.$emit('closeModal')
    },
    constractFromData() {
      if (!this.formData.count) throw new Error()
      var formData = new FormData()
      this.formData.mainside_id && formData.append('mainside_id', this.formData.mainside_id);
      formData.append('item_option_id', this.formData.id)
      formData.append('order_id', this.formData.order_id)
      formData.append('count', this.formData.count)
      return formData
    },
    addBasketItem() {

    },
    editBasketItem() {
      try {
        const formData = this.constractFromData(true)

        myApi
          .put(this.$store.state.publicPath + '/api/admin/orders_items', formData, {
            headers: {
              'Content-Type': `multipart/form-data`,

            },
          })
          .then(() => {
            eventBus.$emit('orderItemEdited')
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
