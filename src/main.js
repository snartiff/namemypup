import {createApp} from 'vue'
// createApp.config.devtools = true
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config'

createApp(App).use(router).mount('#app')
createApp(App).use(PrimeVue)
// createApp.config.devtools = true;

// App.use(PrimeVue);
