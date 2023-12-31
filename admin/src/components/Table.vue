<template>
  <CRow>
    <CCol :md="12">
      <CCard class="mb-4">
        <CCardHeader> {{ name }} </CCardHeader>
        <CCardBody>
          <CTable align="middle" class="mb-0 border" hover responsive>
            <CTableHead color="light">
              <CTableRow>
                <CTableHeaderCell v-for="f in    fieldsTransformed   " :key="f.name + 'header'" class="text-center"
                  :class="[f.order ? 'orderable' : '',
                  f.name === currentOrder ? 'current' : '',
                  orderDesc === true && f.name === currentOrder ? 'desc' : '']" @click="changeOrder(f)">
                  <div class="order-toggle"><img :src="require('@/assets/images/arrow_up.svg')" /></div>
                  {{ f.title }}
                </CTableHeaderCell>
                <CTableHeaderCell class="text-center">Действия</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              <CTableRow v-for="(   row, i   ) in    transformData(rows)   " :key="i + 'row'">
                <CTableDataCell v-for="(   column, j   ) in    row   " :key="j + 'row'" class="text-center">
                  <CFormInput v-if="updatingId === rows[i]?.id" v-model="formData[fields[j]?.name]" />
                  <span v-else>{{ column }}</span>
                </CTableDataCell>
                <CTableDataCell>
                  <div class="d-grid gap-2 d-md-flex justify-content-md-center">
                    <CButton v-if="updatingId === rows[i]?.id" :color="'primary'" size="md" @click="editRow(i)">
                      Сохранить</CButton>
                    <CButton v-if="updatingId === rows[i]?.id" :color="'light'" size="md" @click="updatingId = false">
                      Отменить</CButton>
                    <CButton v-else v-for="(   info, name   ) in    actions   " :key="name + 'action'"
                      :color="info?.color" size="sm" @click="chooseAction(name, info, i, j, column)">{{ name }}
                    </CButton>
                  </div>
                </CTableDataCell>
              </CTableRow>
              <CTableRow> </CTableRow>
            </CTableBody>
          </CTable>
        </CCardBody>
      </CCard>
    </CCol>
  </CRow>
  <CPagination aria-label="Page navigation example">
    <CPaginationItem v-if="lastPageNumber" @click="firstPage">В начало</CPaginationItem>
    <CPaginationItem @click="previousPage">Назад</CPaginationItem>
    <CPaginationItem disabled>{{ page }}</CPaginationItem>
    <CPaginationItem @click="nextPage">Вперед</CPaginationItem>
    <CPaginationItem v-if="lastPageNumber" @click="lastPage">В конец</CPaginationItem>
  </CPagination>
</template>

<script>
import { dateFormatter } from '../utils/dateFormatter';

export default {
  props: {
    name: {
      type: String,
    },
    fields: [],
    actions: [],
    rows: [],
    postData: {
      type: Function,
      default: () => { },
    },
    updateRow: {
      type: Function,
      default: () => { },
    },
    editMode: {
      type: String,
      default: 'inline',
    },
    lastPageNumber: Number,
    getPageCount: Function
  },
  data() {
    return {
      fieldsTransformed: [],
      perPage: 10,
      page: 1,
      updatingId: false,
      formData: {},
      orderDesc: true,
      currentOrder: "id",
    }
  },
  async mounted() {
    this.fieldsTransformed = this.fields.map((el) => {
      if (typeof el === 'object') el.title = el.title ?? el.name
      else el = { name: el }
      return el;
    })

    await this.postData(this.perPage, this.page, this.currentOrder, this.orderDesc)
    await this.getPageCount()
  },
  methods: {
    dateFormatter,
    chooseAction(name, info, rowId) {
      if (!info) return
      console.log(name === 'Изменить' && this.editMode === 'inline', rowId)
      if (name === 'Изменить' && this.editMode === 'inline') {
        this.updatingId = this.rows[rowId]?.id
        this.formData = this.rows[rowId]
      } else info?.action(this.rows[rowId])
    },
    async nextPage() {
      const data = await this.postData(this.perPage, this.page + 1, this.currentOrder, this.orderDesc)
      if (data?.length > 0) this.page++
    },
    previousPage() {
      if (this.page > 1) this.page--
      this.postData(this.perPage, this.page, this.currentOrder, this.orderDesc)
    },
    toPage(n) {
      this.page = n
      this.postData(this.perPage, this.page, this.currentOrder, this.orderDesc)
    },
    firstPage() {
      this.page = 1
      this.postData(this.perPage, this.page, this.currentOrder, this.orderDesc)
    },
    lastPage() {
      this.page = this.lastPageNumber
      this.postData(this.perPage, this.page, this.currentOrder, this.orderDesc)
    },
    changeOrder(field) {
      if (!field.order) return;
      this.page = 1;
      if (this.currentOrder === field.name) this.orderDesc = !this.orderDesc
      else { this.currentOrder = field.name; this.orderDesc = true }
      this.postData(this.perPage, this.page, this.currentOrder, this.orderDesc)
    },
    editRow(i) {
      this.updatingId = false
      this.updateRow(this.rows[i]?.id, this.formData)
    },
    transformData(data) {
      return data?.map(this.transformDataEl)
    },
    transformDataEl(pair) {
      let pairFormed = []
      for (let f of this.fields) {
        const children = f.name.split('.') ?? f.split('.')
        let e = pair
        children?.forEach((c) => (e = e?.[c]))

        if (f?.name === 'creation_date' || f?.name === 'publication_date' || f?.type === 'date') e = dateFormatter(e)

        if (f?.name === 'text') e = e.substr(0, 100)

        pairFormed.push(e ?? '')
      }
      return pairFormed
    },
  },
}
</script>

<style lang="scss">
.btn-md {
  margin: 0;
}

th:not(.orderable)>.order-toggle {
  display: none;

}

th.orderable {
  &>.order-toggle {
    img {
      height: 15px;
      transition: 0.2s;
    }
  }

  &.current img {
    background-color: #7db3ff;
    border-radius: 100px;
  }

  &.desc img {
    transform: rotate(180deg);
  }
}
</style>
