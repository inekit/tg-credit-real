<template>
    <div class="mailing-block card p-3">
        <span>Текст поста</span>
        <QuillEditor theme="snow" :toolbar="['bold', 'italic', 'underline', 'strike']" ref="postTextEditor"
            id="postTextEditor" placeholder="Краткое описание" class="mb-3" />
        <span>Обложка поста</span>
        <div class="border p-2 mb-3 preview-container">
            <img :src="preview" class="img-fluid" />
        </div>
        <CFormInput type="file" accept="image/*" ref="preview" @input="previewMultiImage" class="mb-3" label="Превью"
            placeholder="Превью" />
        <CButton color="primary" @click="sendPost">Разослать</CButton>
    </div>
</template>

<script>
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css'
//import TurndownService from 'turndown'
//import { marked } from 'marked'
//import * as DOMPurify from 'dompurify'
import eventBus from '../eventBus'

import axios from 'axios'
const myApi = axios.create({
    withCredentials: true,
})

export default {
    components: {
        QuillEditor
    },
    data() {
        return {
            myApi: myApi,
            preview: null,
            photo: null,
        }
    },
    created() {
    },
    methods: {
        previewMultiImage(event) {
            var input = event.target;

            if (input.files) {
                var reader = new FileReader();
                reader.onload = (e) => {
                    this.preview = e.target.result;
                }
                this.photo = input.files[0];
                reader.readAsDataURL(input.files[0]);
            }
        },
        sendPost() {

            try {
                const formData = this.constractFromData()

                myApi
                    .post(this.$store.state.publicPath + '/api/admin/mailing', formData, {
                        headers: {
                            'Content-Type': 'multipart/form-data',
                        },
                    })
                    .then(() => {
                        this.$refs.postTextEditor.setHTML("")
                        this.preview = null;
                        this.photo = null;
                        document.querySelector('input[type=file]').value = '';
                    })
                    .catch((e) => {
                        eventBus.$emit('noresponse', e)
                    })
            } catch (e) {
                eventBus.$emit('wrongInputData', e)
            }

        },
        constractFromData() {
            if (!this.$refs.postTextEditor.getHTML())
                throw new Error()

            var formData = new FormData()


            this.photo && formData.append(`preview`, this.photo);

            formData.append(
                'text',
                this.$refs.postTextEditor.getHTML(),
            )

            return formData
        },
    },
}
</script>

<style lang="scss">
button {
    margin-bottom: 20px;
}

.mailing-block {

    &>span,
    &>label {
        margin-bottom: 1rem;
    }
}
</style>
