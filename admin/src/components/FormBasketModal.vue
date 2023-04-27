<template>
    <CModal backdrop="static" alignment="center" :visible="visible" @close="closeModal">
        <CModalHeader>
            <CModalTitle>Формирование корзины</CModalTitle>
        </CModalHeader>
        <CModalBody v-if="visible">
            <div class="user-iframe-container">
                <iframe :src="`https://fotodesire.ru/colorsfront/${subpath}/${user_id}`" width="480" height="800"
                    align="left">
                    Ваш браузер не поддерживает плавающие фреймы!
                </iframe>
            </div>
        </CModalBody>
        <CModalFooter>
            <CButton color="secondary" @click="subpath = 'results'">
                Товары
            </CButton>
            <CButton color="secondary" @click="subpath = 'basket'">Корзина</CButton>
        </CModalFooter>
    </CModal>
</template>
  
<script>
import eventBus from '../eventBus'
export default {
    props: {
        mode: {
            required: true,
            type: String,
            validator: (value) => ['new', 'edit'].includes(value.toLowerCase()),
        },
        user_id: Number,
        visible: Boolean,
    },
    data() {
        return { subpath: "results" }
    },
    mounted() {
    },
    updated() {
    },
    methods: {
        closeModal() {
            eventBus.$emit('closeModal')
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
  