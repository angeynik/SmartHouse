<template>
    <div class="card">
        <ul>
            <li v-for="(item, i) in 5">
                <slot v-bind:iter="item" :idx="i">

                </slot>
                </li>
        </ul>
    </div> 
</template>

<script>
export default {

}
</script>

<style>

</style>