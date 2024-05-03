<template>
    <div class="card">
        <h3> {{ title }} </h3>
        <button class="btn" @click="open">
            {{ isNewOpen ? 'Закрыть' : 'Открыть' }}
        </button>
        <div v-if="isNewsOpen">
            <hr />
            <p v-if="isNewOpen"> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <button class="btn"> Прочесть новость </button>
        </div>
    </div>
</template>
<script>
export default {
    // props: ['title'],
    // emits: ['open-news'],
    props: {
        title: {
        type: String,
        required: true
        },
        id: {
        type: Number,
        required: true
        },
        isOpen: {
        type: Boolean,
        required: true,
        default: false,

        }
    },
   data() {
    return {
        isNewOpen: this.isOpen
    }
   },
   methods: {
    open() {
        this.isNewOpen= !this.isNewOpen
        this.$emit('open-news')
    }
   }
}
</script>
