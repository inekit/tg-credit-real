<template>
  <CButton color="primary" @click="addNewPost">Добавить пост</CButton>
  <CModal size="xl" backdrop="static" alignment="center" :visible="visible" @close="closeModal">
    <CForm novalidate :validated="formValid" ref="add-file-form" @change="wregert"
      @submit.prevent="mode === 'new' ? addNewing() : editNewing()" class="add-user" style="display: 'none'">
      <CModalHeader>
        <CModalTitle>{{
          mode === 'new' ? 'Добавить пост' : 'Редактировать пост'
        }}</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <CFormInput class="mb-3" v-model="formData.title" placeholder="Заголовок" id="inputHeader"
          aria-describedby="inputGroupPrepend" feedbackValid="Все ок" feedbackInvalid="Введите корректный заголовок"
          required />
        <div class="tags-cloud">
          <span>Теги</span>
          <CFormCheck v-for="tag in tags" :key="tag.name" :id="tag.name" :checked="formData.tags_array?.has(tag.name)"
            @change="changeT" type="checkbox" :value="tag.name" :label="tag.name" />
        </div>
        <div class="projects-list">
          <span>Проект</span>
          <CFormCheck v-for="project in projects" :key="project.name" :id="project.name"
            :checked="project.name === formData.project_name" @change="changeP" type="radio" name="project-name"
            :value="project.name" :label="project.name" />
          <CFormCheck id="null-name" :checked="!formData.project_name" @change="changeP" type="radio" name="project-name"
            value="" label="Вне проекта" />
        </div>
        <CFormInput type="file" accept="image/*" multiple="multiple" ref="file" @change="previewMultiImage" class="mb-3"
          label="Превью" placeholder="Превью" />
        <div class="border p-2 mt-3 preview-container">
          <template v-if="preview_list?.length">
            <div v-for="item, index in preview_list" :key="index">
              <img :src="item" class="img-fluid" />
              <button @click.prevent="dropFile(index)">Х</button>
            </div>
          </template>
        </div>

        <CFormTextarea v-model="formData.description" label="Краткое описание" style="margin-bottom: 1rem"
          placeholder="Напишите что-нибудь" rows="5" maxlength="255" id="inputDescription"
          aria-describedby="inputGroupPrepend" required />
        <CButton v-if="textEditMode === 'html'" @click="htmlToMd2" color="primary" variant="outline">Режим
          редактирования md2</CButton>
        <CButton v-else @click="Md2ToHtml" color="primary" variant="outline">Режим редактирования html</CButton>
        <br />
        <CFormTextarea :style="{ display: textEditMode === 'md2' ? 'block' : 'none' }" v-model="textMd2"
          label="Текст статьи" style="margin-bottom: 1rem" placeholder="Напишите что-нибудь" rows="20" id="inputText"
          aria-describedby="inputGroupPrepend" required />

        <QuillEditor :style="{ display: textEditMode === 'html' ? 'block' : 'none' }" theme="snow" toolbar="essential"
          ref="postTextEditor" id="postTextEditor" placeholder="Текст статьи" />
      </CModalBody>
      <CModalFooter>
        <CButton color="secondary" @click="visible = false"> Отменить </CButton>
        <CButton v-show="mode === 'new'" color="primary" type="submit">Добавить пост</CButton>
        <CButton v-show="mode === 'edit'" color="primary" type="submit">Редактировать пост</CButton>
      </CModalFooter>
    </CForm>
  </CModal>
</template>

<script>
import axios from 'axios'
const myApi = axios.create({
  withCredentials: true,
})
import eventBus from '../eventBus'
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css'
import TurndownService from 'turndown'
import { marked } from 'marked'
import * as DOMPurify from 'dompurify'

export default {
  components: { QuillEditor },
  props: {
    mode: {
      required: true,
      type: String,
      validator: (value) => ['new', 'edit'].includes(value.toLowerCase()),
    },
    visible: false,
    formData: {
      title: '',
      text: '',
      description: '',
      preview: '',
      image_list: [],
      tags_array: new Set(),
    },
  },
  data() {
    return {
      textMd2: '',
      textEditMode: 'md2',
      formValid: false,
      preview_list: [],
    }
  },
  updated() {
    this.textMd2 = this.formData.text
    this.formData.text && this.$refs.postTextEditor?.setHTML(this.formData.text)

    this.preview_list = this.formData.image_list?.map(preview_name => `${this.$store.state.publicPath}/public/pics/${preview_name}`)

    document.getElementsByClassName('ql-toolbar')?.[0].classList.add('hidden')
  },
  async mounted() {
    this.tags = await this.getTagCloud()
    this.projects = await this.getProjects()
    console.log(this.tags, this.projects)
  },
  methods: {
    async getTagCloud() {
      return await myApi
        .get(this.$store.state.publicPath + '/api/tags/')
        .then((res) => {
          return res.data
        })
        .catch((error) => {
          eventBus.$emit('noresponse', error)
        })
    },
    async getProjects() {
      return await myApi
        .get(this.$store.state.publicPath + '/api/categories/')
        .then((res) => {
          return res.data
        })
        .catch((error) => {
          eventBus.$emit('noresponse', error)
        })
    },
    previewMultiImage(event) {
      var input = event.target;
      var count = input.files.length;
      var index = 0;
      this.formData.preview = input.files[0]
      if (!this.preview_list) this.preview_list = []
      if (!this.formData.image_list) this.formData.image_list = []

      if (input.files) {
        while (count--) {
          var reader = new FileReader();
          reader.onload = (e) => {
            this.preview_list.push(e.target.result);
          }
          this.formData.image_list.push(input.files[index]);
          reader.readAsDataURL(input.files[index]);
          index++;
        }
      }
    },
    reset() {
      this.formData.image_list = [];
      this.preview_list = [];
    },
    dropFile(index) {
      this.formData.image_list?.splice(index, 1);
      this.preview_list?.splice(index, 1);

    },
    addNewPost() {
      eventBus.$emit('addNewPost')
    },
    changeP(e) {
      console.log(e.target.value)
      this.formData.project_name = e.target.value
    },
    changeT(e) {
      console.log(e.target.checked)
      if (e.target.checked) this.formData.tags_array.add(e.target.value)
      else this.formData.tags_array.delete(e.target.value)
    },
    closeModal() {
      eventBus.$emit('closeModal')
    },
    constractFromData(isEdit) {
      if (!this.formData.title || !this.$refs.postTextEditor.getHTML())
        throw new Error()

      var formData = new FormData()

      formData.append('title', this.formData.title)
      formData.append('description', this.formData.description)
      if (this.textEditMode === 'md2') formData.append('text', this.textMd2)
      else {
        const turndownService = new TurndownService()
        formData.append(
          'text',
          turndownService.turndown(this.$refs.postTextEditor.getHTML()),
        )
      }
      //formData.append('images[]', this.formData.image_list)


      this.formData.image_list?.forEach(v => {
        formData.append('images[]', v);
      });


      this.formData.project_name &&
        formData.append('projectName', this.formData.project_name)
      const tags_array = Array.from(this.formData.tags_array).filter(
        (tag) => tag !== null,
      )
      for (var i = 0; i < tags_array.length; i++) {
        console.log(tags_array[i])
        formData.append(`tagsArray`, tags_array[i])
      }

      isEdit && formData.append('id', this.formData.id)

      return formData
    },
    htmlToMd2(e) {
      e.preventDefault()
      const turndownService = new TurndownService()

      this.textMd2 = turndownService.turndown(
        this.$refs.postTextEditor.getHTML(),
      )
      this.textEditMode = 'md2'

      document.getElementsByClassName('ql-toolbar')?.[0].classList.add('hidden')
    },
    Md2ToHtml(e) {
      e.preventDefault()
      this.$refs.postTextEditor.setHTML(
        DOMPurify.sanitize(marked.parse(this.textMd2 ?? ' ')),
      )
      this.textEditMode = 'html'

      document
        .getElementsByClassName('ql-toolbar')?.[0]
        .classList.remove('hidden')
    },
    addNewing() {
      console.log(this.$refs.postTextEditor.getHTML())
      try {
        const formData = this.constractFromData()

        myApi
          .post(this.$store.state.publicPath + '/api/admin/items', formData, {
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
    editNewing() {
      try {
        const formData = this.constractFromData(true)

        myApi
          .put(this.$store.state.publicPath + '/api/admin/items', formData, {
            headers: {
              'Content-Type': `multipart/form-data`,

            },
          })
          .then(() => {
            eventBus.$emit('postEdited')
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
::v-deep .hidden {
  display: none;
}

.preview-container {
  display: flex;
  gap: 5px;
  flex-wrap: wrap;

  &>div {
    max-width: 24%;
    position: relative;

    button {
      position: absolute;
      top: 5px;
      right: 5px;
    }
  }
}

.tags-cloud,
.projects-list {
  display: flex;
  flex-wrap: wrap;

  &>* {
    margin-right: 20px;
  }

  &>span {
    flex: 0 0 100%;
    margin-bottom: 10px;
  }
}
</style>
