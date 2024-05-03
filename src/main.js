import { createApp } from 'vue'
import App from './App.vue'
// import Header from './components/Header.vue'
// import Footer from './components/Footer.vue'
// import Content from './components/AppNews.vue'
// import router from './router'
// import store from './store'
import '../public/style.css'

// createApp(App).use(store).use(router).mount('#app')
const app = createApp (App)
app.mount ('#app')
// app.component('the-header', Header)
// app.component('the-content', Content)
// app.component('the-footer', Footer)