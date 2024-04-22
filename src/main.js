import { createApp } from 'vue'
import App from './App.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import router from './router'
import store from './store'

createApp(App).use(store).use(router).mount('#app')
// const app = createApp (App).use(store).use(route)
// app.mount ('#app')
app.component('the-header', Header)
app.component('the-footer', Footer)