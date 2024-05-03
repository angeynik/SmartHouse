<template class="html">
    <the-header class="header"></the-header>
    <div style="min-height: 500px;">
      <div class="card">
        <h2>Актуальные новости </h2>
        <span> Открыто: <strong>{{ openRate }}</strong> | Прочитано: <strong>{{ readRate }}</strong> </span>
          <app-news
          v-for="item in news"
          :key="item.id"
          :title="item.title"
          :id="item.id"
          v-on:open-news="openNews"
          > </app-news>
        </div>
    </div>
</template>

<script>
import AppNews from './components/AppNews.vue'
export default {
  data() {
    return {
      openRate: 0,
      readRate: 0,
      news: [
        {
          title: 'Горячая новость',
          id: 1,
          isOpen: false
        },
        {
          title: 'Следующая новость',
          id:2,
          isOpen: false
        }
      ]
    }
  }, 
  methods: {
    openNews(data) {
      this.openRate++
    }
  },
  components: {
    'app-news': AppNews,
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
