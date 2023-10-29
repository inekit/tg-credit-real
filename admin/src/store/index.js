import { createStore } from 'vuex'

export default createStore({
  state: {
    publicPath: 'https://1130333-cc94997.tw1.ru/colorsserver', //'http://127.0.0.1:3000/api/admin/',
    socketAddr: 'https://1130333-cc94997.tw1.ru',
    sidebarVisible: '',
    sidebarUnfoldable: false,
    id: null,
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
