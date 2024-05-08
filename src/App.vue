<template class="html">
    <div>
      <the-header class="header"></the-header>
      <div class="card">
        <h2>Динамические и асинхронные компоненты</h2>
        <hr />
        <app-button 
        :color="active === 'one' ? 'primary' :''" 
        @action="active='one'"
        > One  </app-button>        
        <app-button 
        :color="active === 'two' ? 'primary' :''" 
        @action="active='two'"
         > Two  </app-button>
      </div>
      <!-- <app-text-one v-if="active === 'one'"></app-text-one>
      <app-text-two v-if="active === 'two'"></app-text-two> -->
      <component :is="componentName">      </component>
    </div>
      

</template>

<script>
import AppButton from './components/AppButton.vue';
import AppTextOne from './components/AppTextOne.vue';
import AppTextTwo from './components/AppTextTwo.vue';
export default {
  data () {
    return {
      active: '' // two
    }
  },
  computed: {
    componentName() {
      // if (this.active === 'one') {
      //   return 'app-text-one'
      // }
      // return 'app-text-two'
      return 'app-text-' + this.active
    }
  },
  components: {AppButton, AppTextOne, AppTextTwo}
}
</script>

 
<style>

</style>
