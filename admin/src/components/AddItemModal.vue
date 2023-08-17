<template>
  <CButton color="primary" @click="addNewPost">Добавить канал</CButton>
  <CModal size="xl" backdrop="static" alignment="center" :visible="visible" @close="closeModal">
    <CForm novalidate :validated="formValid" ref="add-file-form" @change="wregert"
      @submit.prevent="mode === 'new' ? addNewing() : editNewing()" class="add-user" style="display: 'none'">
      <CModalHeader>
        <CModalTitle>{{
          mode === 'new' ? 'Добавить канал' : 'Редактировать канал'
        }}</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <CFormInput class="mb-3" v-model="formData.title" placeholder="Название канала" id="inputHeader"
          aria-describedby="inputGroupPrepend" feedbackValid="Все ок" feedbackInvalid="Введите корректное название"
          required />
        <CFormInput type="file" accept="image/*" ref="file" @change="previewImage" class="mb-3" label="Превью"
          placeholder="Превью" />
        <div class="border p-2 mt-3 preview-container">
          <template v-if="preview">
            <img :src="preview" class="img-fluid w-25" />
          </template>
        </div>
        <div class="projects-list">
          <span>Категория</span>
          <CFormCheck v-for="project in projects" :key="project.name" :id="project.name"
            :checked="project.name === formData.category_name" @change="changeP" type="radio" name="project-name"
            :value="project.name" :label="project.name" />
          <CFormCheck id="null-name" :checked="!formData.category_name" @change="changeP" type="radio" name="project-name"
            value="" label="Без категорий" />
        </div>
        <CFormInput type="text" class="mb-3" label="Описание канала" placeholder="Введите описание канала"
          v-model="formData.description" required />
        <CFormInput type="text" class="mb-3" label="Ссылка на канал" v-model="formData.tgstat_id" />

        <CFormInput type="number" class="mb-3" label="Цена" v-model.number="formData.price" />

        <CFormInput type="number" class="mb-3" label="Количество подписчиков" v-model.number="formData.participants_count"
          disabled />
        <CFormInput type="number" class="mb-3" label="Охват" v-model.number="formData.post_reach" disabled />
        <CFormInput type="number" class="mb-3" label="ERR" v-model.number="formData.err" disabled />
        <CFormInput type="number" class="mb-3" label="CPM" v-model.number="formData.cpm" disabled />
        <CFormInput type="number" class="mb-3" label="Процент мужчин" v-model.number="formData.man_percent" />
        <span>Возраст аудитории в процентах<br /></span>

        <CFormInput type="number" class="mb-3" label="До 18" v-model.number="formData.age.l18" @input="fixPercent" />
        <CFormInput type="number" class="mb-3" label="18-24" v-model.number="formData.age.l24" @input="fixPercent" />
        <CFormInput type="number" class="mb-3" label="25-34" v-model.number="formData.age.l34" @input="fixPercent" />
        <CFormInput type="number" class="mb-3" label="35-44" v-model.number="formData.age.l44" @input="fixPercent" />
        <CFormInput type="number" class="mb-3" label="45-54" v-model.number="formData.age.l54" @input="fixPercent" />
        <CFormInput type="number" class="mb-3" label="55 лет и старше" v-model.number="formData.age.l100"
          @change="fixPercent" />


        <CFormInput type="text" class="mb-3" label="Ссылка tgstat" v-model="formData.tgstat_link" />
        <CFormInput type="text" class="mb-3" label="Ссылка telemetr" v-model="formData.telemetr_link" />


      </CModalBody>
      <CModalFooter>
        <CButton color="secondary" @click="closeModal"> Отменить </CButton>
        <CButton v-show="mode === 'new'" color="primary" type="submit">Добавить</CButton>
        <CButton v-show="mode === 'edit'" color="primary" type="submit">Редактировать</CButton>
      </CModalFooter>
    </CForm>
  </CModal>
</template>

<script>
import axios from 'axios'
const myApi = axios.create({
  withCredentials: true,
})
import '@vueup/vue-quill/dist/vue-quill.snow.css'
import { marked } from 'marked'
//import * as DOMPurify from 'dompurify'
import eventBus from '../eventBus'

export default {
  components: {},
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
      stock: 0,
      age: {},
      price: null,
      category_name: '',
      select_name: null,
      image_list: [],
      tags_array: new Set(),
      options_array: [{ name: "Опция" }],
    },

  },
  data() {
    return {
      formValid: false,
      preview_list: [],
      preview: null,
    }
  },
  updated() {
    this.formData.options_array = this.formData.options_array ?? [{ name: "Опция" }];

    this.formData.description && this.$refs.postTextEditor.pasteHTML(
      marked.parse(this.formData.description?.replaceAll("\r\n\r\n", "<span><br/><span/>\r\n\r\n")))

    this.preview = this.formData.preview ? `${this.$store.state.publicPath}/public/pics/${this.formData.preview}` : null;
    this.preview_list = [];
    for (let optionIndex in this.formData.options_array) {
      this.preview_list[optionIndex] = this.formData.options_array[optionIndex].photos?.map(preview_name => `${this.$store.state.publicPath}/public/pics/${preview_name}`)
    }
  },
  async mounted() {
    this.projects = await this.getProjects()
  },
  methods: {
    async getProjects() {
      return await myApi
        .get(this.$store.state.publicPath + '/api/admin/categories/')
        .then((res) => {
          return res.data
        })
        .catch((error) => {
          eventBus.$emit('noresponse', error)
        })
    },
    fixPercent() {
      const age = this.formData.age
      const setPercent = (l18 = 0, l24 = 0, l34 = 0, l44 = 0, l54 = 0, l100 = 0) => {
        this.formData.age = { l18, l24, l34, l44, l54, l100 }
      }
      if (age.l18 > 100) {
        setPercent(100)
      } else if (age.l18 + age.l24 > 100) {
        setPercent(age.l18, 100 - age.l18)
      } else if (age.l18 + age.l24 + age.l34 > 100) {
        setPercent(age.l18, age.l24, 100 - age.l24 - age.l18)
      } else if (age.l18 + age.l24 + age.l34 + age.l44 > 100) {
        setPercent(age.l18, age.l24, age.l34, 100 - age.l34 - age.l24 - age.l18)
      } else if (age.l18 + age.l24 + age.l34 + age.l44 + age.l54 > 100) {
        setPercent(age.l18, age.l24, age.l34, age.l44, 100 - age.l44 - age.l34 - age.l24 - age.l18)
      } else if (age.l18 + age.l24 + age.l34 + age.l44 + age.l54 + age.l100 > 100) {
        setPercent(age.l18, age.l24, age.l34, age.l44, age.l54, 100 - age.l54 - age.l44 - age.l34 - age.l24 - age.l18)
      }

    },
    selectNone() {
      this.formData.options_array.length = this.preview_list.length = 1
    },
    addOption() {
      if (!this.formData.options_array) this.formData.options_array = []
      this.formData.options_array.push({})
      //this.preview_list[id] = []
    },
    dropOption(id) {
      this.formData.options_array.splice(id, 1);
      this.preview_list.splice(id, 1);
    },
    previewImage(event) {
      var input = event.target;
      this.formData.preview = input.files[0]

      if (input.files) {
        var reader = new FileReader();
        reader.onload = (e) => {
          this.preview = e.target.result;
        }
        reader.readAsDataURL(input.files[0]);
      }
    },
    previewMultiImage(id, event) {
      var input = event.target;
      var count = input.files.length;
      var index = 0;
      //this.formData.preview = input.files[0]
      if (!this.preview_list) this.preview_list = []
      if (!this.preview_list[id]) this.preview_list[id] = []

      if (!this.formData.options_array[id].photos) this.formData.options_array[id].photos = []

      if (input.files) {
        while (count--) {
          var reader = new FileReader();
          reader.onload = (e) => {
            this.preview_list[id].push(e.target.result);
          }
          this.formData.options_array[id].photos.push(input.files[index]);
          reader.readAsDataURL(input.files[index]);
          index++;
        }
      }
    },
    dropFile(id, index) {
      this.formData.options_array[id].photos?.splice(index, 1);
      this.preview_list[id]?.splice(index, 1);

    },
    addNewPost() {
      eventBus.$emit('addNewPost')
    },
    changeP(e) {
      this.formData.category_name = e.target.value
    },
    closeModal() {
      eventBus.$emit('closeModal')
    },
    constractFromData(isEdit) {
      if (!this.formData.title)
        throw new Error()

      var formData = new FormData()

      formData.append('title', this.formData.title)
      formData.append('price', this.formData.price)

      this.formData.select_name && formData.append('select_name', this.formData.select_name)

      this.formData.preview && formData.append(`preview`, this.formData.preview);


      this.formData.description && formData.append('description', this.formData.description)
      this.formData.participants_count && formData.append('participants_count', this.formData.participants_count)
      this.formData.post_reach && formData.append('post_reach', this.formData.post_reach)
      this.formData.err && formData.append('err', this.formData.err)
      this.formData.cpm && formData.append('cpm', this.formData.cpm)
      this.formData.man_percent && formData.append('man_percent', this.formData.man_percent)
      formData.append('l18', this.formData.age.l18)
      formData.append('l24', this.formData.age.l24)
      formData.append('l34', this.formData.age.l34)
      formData.append('l44', this.formData.age.l44)
      formData.append('l54', this.formData.age.l54)
      formData.append('l100', this.formData.age.l100)
      this.formData.tgstat_link && formData.append('tgstat_link', this.formData.tgstat_link)
      this.formData.telemetr_link && formData.append('telemetr_link', this.formData.telemetr_link)
      this.formData.tgstat_id && formData.append('tgstat_id', this.formData.tgstat_id)


      this.formData.category_name &&
        formData.append('categoryName', this.formData.category_name)


      isEdit && formData.append('id', this.formData.id)

      return formData
    },
    addNewing() {
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

::v-deep .ql-toolbar.ql-snow {
  display: block !important;
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
