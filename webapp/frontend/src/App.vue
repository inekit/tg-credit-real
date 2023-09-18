<template>
  <div id="root"> <router-view /></div>
</template>

<script>
import eventBus from './eventBus'

export default {
  async beforeMount() {
    let uri = window.location.search;
    this.params = new URLSearchParams(uri)

    const buttonUserId = window.Telegram?.WebApp?.initDataUnsafe?.user?.id
    this.$store.state.userId = buttonUserId ?? this.params.get('user_id');
    this.$store.state.profileData = await this.getProfileData()

    if (this.$store.state.profileData?.active_loan_status) this.$router.push("/status")
    else this.$router.push("/calc")

  },
  watch: {
    async  '$route.name'(newName) {
      this.$store.state.profileData = await this.getProfileData()

      if (newName !== 'index') return;

      if (this.$store.state.profileData?.active_loan_status) this.$router.push("/status")
      else this.$router.push("/calc")
    }
  },
  methods: {
    async getProfileData() {
      const results = await this.$store.state.myApi.get(this.$store.state.restAddr + '/users', {
        params: {
          user_id: this.$store.state.userId,
        }
      })
        .then(response => {
          return response.data;
        })
        .catch(e => { eventBus.$emit('noresponse', e) })

      return results ?? {}

    },
  }
}
</script>

<style lang="scss">
html,
body {
  height: fit-content;
  overflow-x: hidden;

  .h-100 {
    height: 100vh;
    height: var(--tg-viewport-stable-height);
  }
}

#app {
  width: 100%;
  height: fit-content;
  top: 0;
  left: 0;
  -webkit-overflow-scrolling: touch;

}
</style>
