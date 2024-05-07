<template class="html">
    <div>
      <the-header class="header"></the-header>
      <div class="card">
        <h2>Актуальные новости </h2>
        <span> Открыто: <strong>{{ openRate }}</strong> | Прочитано: <strong>{{ readRate }}</strong> </span>
          <app-news
          v-for="item in news"
          :key="item.id"
          :title="item.title"
          :id="item.id"
          :was-read="item.wasRead"
          :news="news"
          v-on:open-news="openNews"
          v-on:close-news="closeNews"
          @unmark="reverse"
          > </app-news>
        </div>
        <the-footer class="footer"></the-footer>
    </div>

</template>

<script>
import AppNews from './components/AppNews.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
export default {
  data() {
    return {
      openRate: 0,
      readRate: 0,
      news: [
        {
          title: 'Горячая новость',
          id: 1,
          isOpen: false,
          wasRead: false
        },
        {
          title: 'Следующая новость',
          id:2,
          isOpen: false,
          wasRead: false        },
        {
          title: 'Третья новость',
          id:3,
          isOpen: false,
          wasRead: false       
        }
      ]
    }
  }, 
  methods: {
    openNews(data) {
      this.openRate++
    },
    closeNews(id) {
      console.log(id)
      const idx = this.news.findIndex( news => news.id === id)
      this.news[idx].wasRead = true
      this.readRate++
    },
    reverse(id) {
      const news = this.news.find( news => news.id === id)
      news.wasRead = false
      this.readRate--
    }
  },
  components: {
    'app-news': AppNews,
    'the-header':Header,
    'the-footer':Footer,
   }
}
</script>


<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
