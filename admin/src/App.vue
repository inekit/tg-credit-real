<template>
  <router-view />
</template>

<style lang="scss">
// Import Main styles for this application
@import 'styles/style';
</style>

<script>
//import eventBus from './eventBus'
import axios from 'axios'
const myApi = axios.create({
  withCredentials: true,
})

export default {
  components: {
  },
  data() {
    return {
    }
  },
  async created() {
    await myApi.get(this.$store.state.publicPath + '/api/admin/id/').then((response) => {
      this.$store.state.id = response.data.id
    })
      .catch(() => {
        // eventBus.$emit('noresponse', error)
      })
  },
  methods: {}
}
</script>
    