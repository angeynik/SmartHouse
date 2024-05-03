<template>
    <div class="card">
        <h3> {{ title }} </h3>
        <button class="btn" @click="open">
            {{ isNewOpen ? 'Закрыть' : 'Открыть' }}
        </button>
        <div v-if="isNewOpen">
            <hr style="width: 80%;" />
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <button v-if="!wasRead" class="btn" @click="mark"> Прочесть новость </button>
            <button class="btn" @click="$emit('unmark', id)" v-if="wasRead"> Не прочитана</button>
        </div>
    </div>
</template>
<script>
export default {
    // props: ['title'],
    emits: ['open-news', 'close-news', 'unmark'],
    props: {
        wasRead: Boolean,
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
        if (this.isNewOpen) {
            this.$emit('open-news')
        }
    },
    mark () {
        this.isNewOpen = false
        this.$emit('close-news', this.id)
    },
    // unmark() {
    //     this.$emit('unmark', this.id)
    // }
   }
}
</script>
