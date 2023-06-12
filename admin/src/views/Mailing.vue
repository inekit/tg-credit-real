<template>
    <div>
        <span>Текст поста</span>
        <QuillEditor theme="snow" toolbar="essential" ref="postTextEditor" id="postTextEditor"
            placeholder="Краткое описание" />
        <span>Обложка поста</span>
        <div class="border p-2 mt-3 preview-container">
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
import TurndownService from 'turndown'
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
                        eventBus.$emit('postAdded')
                    })
                    .catch((e) => {
                        eventBus.$emit('noresponse', e)
                    })
            } catch (e) {
                this.formValid = true
                //eventBus.$emit('wrongInputData', e)
            }

        },
        constractFromData() {
            if (!this.$refs.postTextEditor.getHTML())
                throw new Error()

            var formData = new FormData()


            this.photo && formData.append(`preview`, this.photo);


            const turndownService = new TurndownService({
                headingStyle: "atx",
                //bulletListMarker: "-",
                //fence: "~~~",
                //emDelimiter: "*",
            })
            formData.append(
                'text',
                turndownService.turndown(this.$refs.postTextEditor.getHTML()),
            )

            this.$refs.postTextEditor.setHTML("")

            return formData
        },
    },
}
</script>

<style lang="scss">
button {
    margin-bottom: 20px;
}
</style>
