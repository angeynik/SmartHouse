<template class="html">
    <div>
      <the-header class="header"></the-header>
      <div class="card">
        <h2>Slots</h2>
        <hr />
        </div>
        <app-slot-list>
          <template #default="{iter, idx}"> 
            <span style="color: #c25205"> 
              <stong> {{ idx }}</stong>
              Item:  {{ iter }} 
            </span>
          </template>
        </app-slot-list>
        <app-block>
         <template #h3_title> 
            <h3> Новый H3 заголовок </h3> 
        </template> 
        <template v-slot:sm_footer>
          <hr />
          <small> Это Футер</small>
        </template>
          <p> Новый текст для примера</p>
        </app-block>
        <the-footer class="footer"></the-footer>
    </div>

</template>

<script>
import AppBlock from './components/AppBlock.vue'
import AppSlotList from './components/AppSlotList.vue'
export default {
  components: {AppBlock, AppSlotList}
}
</script>

 
<style scoped>

</style>
