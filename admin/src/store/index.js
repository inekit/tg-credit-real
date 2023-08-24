import { createStore } from 'vuex'

export default createStore({
  state: {
    publicPath: 'https://24pricelist.site/colorsserver', //'http://127.0.0.1:3000/api/admin/',
    socketAddr: 'https://24pricelist.site',
    sidebarVisible: '',
    sidebarUnfoldable: false,
  },
  mutations: {
    toggleSidebar(state) {
      state.sidebarVisible = !state.sidebarVisible
    },
    toggleUnfoldable(state) {
      state.sidebarUnfoldable = !state.sidebarUnfoldable
    },
    updateSidebarVisible(state, payload) {
      state.sidebarVisible = payload.value
    },
  },
  actions: {},
  modules: {},
})
