import { createStore } from 'vuex'

export default createStore({
  state: {
    restAddr: 'https://980.ru/api', //'http://127.0.0.1:3000/api', //'https:///92.255.79.59/api/admin/', //'http://127.0.0.1:3030/api/admin/',
    //socketAddr: 'https://92.255.79.59',
    sidebarVisible: '',
    sidebarUnfoldable: false,
    searchQuery: '',
    filters: [
      {
        id: 1,
        title: 'Распроданность квартир',
        img: '',
        values: [
          {
            name: '0-10%',
            max: 10,
          },
          {
            name: '11-30%',
            min: 11,
            max: 30,
          },
          {
            name: '31-50%',
            min: 31,
            max: 50,
          },
          {
            name: 'Более 50%',
            min: 51,
            max: 100,
          },
        ],
      },
      {
        id: 2,
        title: 'Класс недвижимости',
        img: '',
        values: [
          {
            name: 'Типовой',
            img: '',
          },
          {
            name: 'Комфорт',
            img: '',
          },
          {
            name: 'Бизнес',
            img: '',
          },
          {
            name: 'Элитный',
            img: '',
          },
        ],
      },
      {
        id: 3,
        title: 'Ввод в эксплуатацию',
        img: '',
        values: [2023, 2024, 2025, 2026],
      },
      {
        id: 4,
        title: 'Цена за m²',
        img: '',
        values: [
          {
            name: 'До 100 000 ₽ за m²',
            max: 100000,
          },
          {
            min: 100000,
            max: 200000,
          },
          {
            min: 200000,
            max: 400000,
          },
          {
            name: 'От 400 000 ₽ за m²',
            max: 100000000,
            min: 400000,
          },
          {
            name: 'Продажи не открыты',
            max: 0,
          },
        ],
      },
    ],
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
