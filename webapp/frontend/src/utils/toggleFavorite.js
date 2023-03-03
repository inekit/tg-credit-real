module.exports = function (that, event, item) {
  const isFavorite = item.is_favorite

  if (isFavorite) {
    that.$store.state.myApi
      .delete(that.$store.state.restAddr + '/favorites', {
        data: {
          item_id: item.id,
          user_id: that.$store.state.user_id,
        },
      })
      .then((response) => {
        item.is_favorite = false
        if (that.$route.name === 'Favorites') {
          console.log(1212)
          that.$store.state.results = that.$store.state.results?.filter(
            (el) => el.id !== item.id,
          )
          if (that.$store.state.results === 0)
            window.Telegram?.WebApp.MainButton.hide()
        }
      })
      .catch((e) => {
        eventBus.$emit('noresponse', e)
      })
  } else {
    that.$store.state.myApi
      .put(that.$store.state.restAddr + '/favorites', {
        item_id: item.id,
        user_id: that.$store.state.user_id,
      })
      .then((response) => {
        item.is_favorite = true
      })
      .catch((e) => {
        eventBus.$emit('noresponse', e)
      })
  }
}
