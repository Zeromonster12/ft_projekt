import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import FontAwesomeIcon from './plugins/fontawesome';

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.component('FontAwesomeIcon', FontAwesomeIcon)
app.mount('#app')