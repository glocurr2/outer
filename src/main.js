import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.css'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas)

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import App from './App.vue'
import router from './router'

const app = createApp(App)
.component('fa', FontAwesomeIcon);


app.use(createPinia())
app.use(router)

app.mount('#app')

import 'bootstrap/dist/js/bootstrap.js'