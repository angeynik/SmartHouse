<template>
  <div class="card "> 
     <slot name="h3_title"> no title</slot>
    <slot name="default"> no text </slot>
    <div v-if="$slots.sm_footer"> 
        <slot name="sm_footer"> no footer </slot> 
    </div>
  </div>
</template>

<script>
export default {
    mounted() {
        console.log(this.$slots)
    }
}
</script>

<style>

</style>