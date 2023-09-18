<template>
  <CModal alignment="center" :visible="visible" @close="closeModal">
    <CModalHeader>
      <CModalTitle>{{ fio }}</CModalTitle>
    </CModalHeader>
    <CModalBody>
      <form class="add-user" style="display:'none'">
        <CInputGroup class="mb-3">
          <CInputGroupText>ID</CInputGroupText>
          <CFormInput v-model="formData.id" disabled />
        </CInputGroup>
        <CInputGroup class="mb-3">
          <CInputGroupText>Юзернейм</CInputGroupText>
          <CFormInput v-model="formData.username" disabled />
        </CInputGroup>
        <CInputGroup class="mb-3">
          <CInputGroupText>Дата последнего использования</CInputGroupText>
          <CFormInput :value="dateFormatter(formData.last_use)" disabled />
        </CInputGroup>
        <CInputGroup class="mb-3">
          <CInputGroupText>ФИО</CInputGroupText>
          <CFormInput v-model="formData.fio" disabled />
        </CInputGroup>
        <CInputGroup class="mb-3">
          <CInputGroupText>Телефон</CInputGroupText>
          <CFormInput v-model="formData.phone" disabled />
        </CInputGroup>
        <CInputGroup class="mb-3">
          <CInputGroupText>Дата рождения</CInputGroupText>
          <CFormInput :value="dateFormatter(formData.birth_date)" disabled />
        </CInputGroup>
        <div v-if="formData.passport_photo" class="img-container mb-3">
          <CInputGroupText>Фото паспорта</CInputGroupText>
          <img :src="`${$store.state.publicPath}/public/pics/${formData.passport_photo}`" />
        </div>
        <div v-if="formData.visa_photo" class="img-container mb-3">
          <CInputGroupText>Фото визы</CInputGroupText>
          <img :src="`${$store.state.publicPath}/public/pics/${formData.visa_photo}`" />
        </div>
        <CInputGroup class="mb-3">
          <CInputGroupText>Дата окончания визы</CInputGroupText>
          <CFormInput :value="dateFormatter(formData.visa_expired_date)" disabled />
        </CInputGroup>
        <CInputGroup class="mb-3">
          <CInputGroupText>Дата верификации</CInputGroupText>
          <CFormInput :value="dateFormatter(formData.verification_date)" disabled />
        </CInputGroup>
      </form>
    </CModalBody>
  </CModal>
</template>


<script>
import eventBus from '../eventBus'
import { dateFormatter } from '../utils/dateFormatter';

export default ({
  props: {
    visible: false,
    formData: {

    }

  },
  methods: {
    closeModal() {
      eventBus.$emit('closeModal')
    },
    dateFormatter,

  }
})
</script>

<style lang="scss" scoped>
.img-container {
  width: 100%;

  img {
    width: 100%;
  }
}
</style>
