import { createApp } from 'vue'
import { createPinia } from 'pinia';
import App from './App.vue'
import router from './router'
import DatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import './registerServiceWorker'



const pinia = createPinia()
const app = createApp(App)
app.use(router)
app.use(pinia);
app.component('DatePicker', DatePicker);
app.mount('#app'); //these are general code lines to start a project



