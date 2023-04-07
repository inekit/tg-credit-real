<template>
  <CButton color="primary" @click="addNewPost">Добавить товар</CButton>
  <CModal size="xl" backdrop="static" alignment="center" :visible="visible" @close="closeModal">
    <CForm novalidate :validated="formValid" ref="add-file-form" @change="wregert"
      @submit.prevent="mode === 'new' ? addNewing() : editNewing()" class="add-user" style="display: 'none'">
      <CModalHeader>
        <CModalTitle>{{
          mode === 'new' ? 'Добавить товар' : 'Редактировать товар'
        }}</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <CFormInput class="mb-3" v-model="formData.title" placeholder="Заголовок" id="inputHeader"
          aria-describedby="inputGroupPrepend" feedbackValid="Все ок" feedbackInvalid="Введите корректный заголовок"
          required />
        <div class="projects-list">
          <span>Категория</span>
          <CFormCheck v-for="project in projects" :key="project.name" :id="project.name"
            :checked="project.name === formData.project_name" @change="changeP" type="radio" name="project-name"
            :value="project.name" :label="project.name" />
          <CFormCheck id="null-name" :checked="!formData.project_name" @change="changeP" type="radio" name="project-name"
            value="" label="Без категорий" />
        </div>

        <div class="options-shedle">
          <span>Опции</span>
          <table class="table">
            <thead>
              <tr>
                <td>Размер<br />
                  Материал</td>
                <td v-for="price, sizeName in Object.values(options_object)?.[0]" :key="'sizeh-' + sizeName">
                  {{ sizeName }}
                  <CButton color="secondary" @click="dropSize(sizeName)">X</CButton>
                </td>
                <td>
                  <CInputGroup class="">
                    <CFormInput placeholder="Новый размер" type="text" v-model="tempSize" />
                    <CButton class="add-button" type="button" color="secondary" @click="addSize(tempSize)"
                      variant="outline">Добавить</CButton>
                  </CInputGroup>
                </td>
              </tr>
            </thead>
            <tbody>
              <tr v-for="sizesObj, materialName in options_object" :key="'material-' + materialName">
                <td>
                  {{ materialName }}
                  <CButton color="secondary" @click="dropMaterial(materialName)">X</CButton>
                </td>
                <td v-for="price, sizeName in sizesObj" :key="'size-' + sizeName">
                  <CFormInput type="text" v-model="options_object[materialName][sizeName]" />
                </td>
                <td>
                </td>
              </tr>
              <tr>
                <td>
                  <CInputGroup class="">
                    <CFormInput placeholder="Новый материал" type="text" v-model="tempMaterial" />
                    <CButton class="add-button" type="button" color="secondary" @click="addMaterial(tempMaterial)"
                      variant="outline">Добавить
                    </CButton>
                  </CInputGroup>
                </td>
              </tr>
            </tbody>
          </table>
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
      options_object: {},
      options_array: [],
    },

  },
  data() {
    return {
      textMd2: '',
      textEditMode: 'md2',
      formValid: false,
      preview_list: [],
      options_object: {
        "Материал": {
          "Размер 1": 2000,
          "Размер 2": 3000
        }
      },
      tempSize: 0,
      tempMaterial: 0,
    }
  },
  updated() {
    this.textMd2 = this.formData.text
    this.formData.text && this.$refs.postTextEditor?.setHTML(this.formData.text)

    this.options_object = {};
    for (let { size, material, price } of this.formData.options_array) {
      this.options_object[material] ? this.options_object[material][size] = price : this.options_object[material] = { size: price }
    }


    this.preview_list = this.formData.image_list?.map(preview_name => `${this.$store.state.publicPath}/public/pics/${preview_name}`)

    document.getElementsByClassName('ql-toolbar')?.[0]?.classList.add('hidden')
  },
  async mounted() {
    this.tags = await this.getTagCloud()
    this.projects = await this.getProjects()
    console.log(this.tags, this.projects)
  },
  methods: {
    addMaterial(name) {
      let size_template = Object.values(this.options_object)?.[0] ?? {}
      console.log(size_template)
      size_template = Object.fromEntries(Object.entries(size_template)?.map(([key]) => [key, 0]))
      console.log(size_template)

      this.options_object[name] = size_template

      this.tempMaterial = ""
    },
    addSize(name) {
      const new_oo_entries = Object.entries(this.options_object)?.map(([key, value]) => [key, Object.assign(value ?? {}, { [name]: 0 })])
      this.options_object = Object.fromEntries(new_oo_entries)
      this.tempSize = ""
    },
    dropMaterial(name) {
      delete this.options_object[name]
    },
    dropSize(name) {
      for (let key in this.options_object) {
        delete this.options_object[key][name]
      }
    },

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

      formData.append('optionsObject', this.options_object)

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

.table {
  width: 100%;
  margin-bottom: 20px;
  border: 1px solid #dddddd;
  border-collapse: collapse;
}

.table th {
  font-weight: bold;
  padding: 5px;
  background: #efefef;
  border: 1px solid #dddddd;
}

.table td {
  border: 1px solid #dddddd;
  padding: 5px;
  position: relative;

  .btn.btn-secondary {
    position: absolute;
    top: 5px;
    right: 5px;
  }
}

.add-button {
  margin: 0;
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
