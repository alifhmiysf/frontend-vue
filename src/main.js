import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
//import Bootstrap
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.min'

//import router


createApp(App).use(router).mount('#app')
