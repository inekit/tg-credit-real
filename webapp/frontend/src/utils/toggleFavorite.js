module.exports = function (event, item) {
  const isFavorite = item.is_favorite

  if (isFavorite) {
    this.$store.state.myApi
      .delete(this.$store.state.restAddr + '/favorites', {
        data: {
          item_id: item.id,
          user_id: this.$store.state.user_id,
        },
      })
      .then((response) => {
        item.is_favorite = false
        if (this.$route.name === 'Favorites') {
          console.log(1212)
          this.$store.state.results = this.$store.state.results?.filter(
            (el) => el.id !== item.id,
          )
          if (this.$store.state.results === 0)
            window.Telegram?.WebApp.MainButton.hide()
        }
      })
      .catch((e) => {
        eventBus.$emit('noresponse', e)
      })
  } else {
    this.$store.state.myApi
      .put(this.$store.state.restAddr + '/favorites', {
        item_id: item.id,
        user_id: this.$store.state.user_id,
      })
      .then((response) => {
        item.is_favorite = true
      })
      .catch((e) => {
        eventBus.$emit('noresponse', e)
      })
  }
}
