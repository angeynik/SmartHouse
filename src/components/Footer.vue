<template>
   <div class="footer">
        <div style="width: 20%;">
            <h2> О нас</h2>
        </div>
        <div style="width: 50%;">
            <h2> {{ now }} </h2>
        </div>
        <div style="width: 30%;">
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