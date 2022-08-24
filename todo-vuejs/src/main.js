import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueSweetalert2 from 'vue-sweetalert2'
import store from '../store/store'
import BootstrapVue3 from 'bootstrap-vue-3'


import './assets/main.css'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
import 'sweetalert2/dist/sweetalert2.min.css';



const app = createApp(App)

app.use(router)

app.use(VueSweetalert2)
app.use(store)
app.use(BootstrapVue3)

app.mount('#app')
