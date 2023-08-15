import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

const myApi = axios.create({
  withCredentials: true,
})

store.state.myApi = myApi

import './styles/default.css'

import eventBus from './eventBus'

eventBus.$on('noresponse', (error) => {
  if (error.response) {
    console.log(error.response.data)
    console.log(error.response.status)
    if (error.response?.data?.isAutenticated === false)
      return router.push('/login')

    alert(
      'Сервер не отвечает. Код ошибки: ' +
        (error.response.status != 0 ? error.response.status : 404),
    )
  } else alert('Сервер не отвечает')
})

eventBus.$on('wrongInputData', (error) => {
  alert('Некорректно введенные данные')
})

const app = createApp(App)

//app.use(VueCarousel)
app.use(store)
app.use(router)
app.mount('#app')
