<template>
   <div class="footer">
        <div class="center">
            <h2> О нас</h2>
        </div>
        <div class="center">
            <h2> {{ now }} </h2>
        </div>
        <div class="center">
            <h2> Контакты </h2>
        </div>
   </div>
</template>
<script>
    export default {
        data() {
            return {
                now: new Date().toLocaleDateString()
            }
        }
    }
</script>