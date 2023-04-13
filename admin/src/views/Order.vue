<template>
    <div>
        <Table :fields="tableFieldNames" :postData="get" :actions="dataActions" :rows="rows" editMode="form"
            name="Позиции" />
    </div>
</template>
  
<script>
import Table from '@/components/Table.vue'
import eventBus from '../eventBus'

import axios from 'axios'
const myApi = axios.create({
    withCredentials: true,
    credentials: 'include'

})

export default {
    components: {
        Table,
    },
    props: ['orderId'],
    data() {
        return {
            myApi: myApi,
            formVisible: false,
            formData: {},
            rows: [],
            dataActions: {
            },
            tableFieldNames: [
                {
                    name: 'ID',
                    title: 'Артикул',
                },
                {
                    name: 'title',
                    title: 'Название',
                },
                {
                    name: 'size',
                    title: 'Размер',
                },
                {
                    name: 'size',
                    title: 'Материал',
                },
                {
                    name: 'count',
                    title: 'Количество',
                },
            ],
        }
    },
    created() {
    },
    methods: {
        change(elObj) {
            this.formVisible = true
            elObj.tags_array = new Set(elObj.tags_array)
            this.formData = elObj
            console.log(elObj)
            this.formMode = 'edit'
        },
        get(take, page) {
            console.log(this.tag)
            return myApi
                .get(this.$store.state.publicPath + '/api/admin/orders/', {
                    params: {
                        take: take ?? 10,
                        page: page ?? 1,
                        id: this.$route.params.orderId,
                    },
                })
                .then((res) => {
                    if (res.data?.length > 0) this.rows = res.data
                    return res.data
                })
                .catch((error) => {
                    eventBus.$emit('noresponse', error)
                    return false
                })
        },
    },
}
</script>
  
<style lang="scss">
button {
    margin-bottom: 20px;
}
</style>
  