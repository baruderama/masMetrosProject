import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

//Aqui se establece la conexion con el api del backend a traves de la url
axios.defaults.baseURL = 'https://54.82.252.36:9000/'

createApp(App).use(store).use(router).mount('#app')
