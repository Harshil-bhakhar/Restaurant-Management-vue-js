import { createApp } from 'vue'
import App from './App.vue'
import router from './routes'
require('./assets/main.css');
createApp(App).use(router).mount('#app')