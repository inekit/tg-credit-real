<template>
    <div class="card p-3">
        <span><b>Количество пользователей:</b> <span>{{ count_users }}</span></span>
    </div>
</template>

<script>
import eventBus from '../eventBus'

import axios from 'axios'
const myApi = axios.create({
    withCredentials: true,
})

export default {
    components: {
    },
    data() {
        return {
            myApi: myApi,
            count_users: null
        }
    },
    created() {
        this.getStatistics()
    },
    methods: {
        getStatistics() {
            myApi
                .get(this.$store.state.publicPath + '/api/admin/statistics')
                .then((res) => {
                    this.count_users = res.data.count_users;
                })
                .catch((e) => {
                    eventBus.$emit('noresponse', e)
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
