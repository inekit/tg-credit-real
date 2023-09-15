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
          <CFormInput v-model="formData.last_use" disabled />
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
          <CFormInput v-model="formData.birth_date" disabled />
        </CInputGroup>
        passport_photo
        visa_photo
        <CInputGroup class="mb-3">
          <CInputGroupText>Дата окончания визы</CInputGroupText>
          <CFormInput v-model="formData.visa_expired_date" disabled />
        </CInputGroup>
        <CInputGroup class="mb-3">
          <CInputGroupText>Дата верификации</CInputGroupText>
          <CFormInput v-model="formData.verification_date" disabled />
        </CInputGroup>

      </form>
    </CModalBody>
  </CModal>
</template>


<script>
import eventBus from '../eventBus'

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
  }
})
</script>
