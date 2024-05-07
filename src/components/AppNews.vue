<template>
    <div class="card">
        <h3> {{ title }} </h3>
        <app-button @action="open">
            {{ isNewOpen ? 'Закрыть' : 'Открыть' }}
        </app-button>
        <div v-if="isNewOpen">
            <hr style="width: 80%;" />
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            
            <app-button 
            color="primary" 
            v-if="!wasRead"  
            @action="mark"
            > Прочесть новость </app-button>
           
            <app-button 
            color="danger"
            @action="$emit('unmark', id)" 
            v-if="wasRead"
            > Не прочитана </app-button>
            <app-news-list> </app-news-list>
        </div>
    </div>
</template>
<script>
    import AppButton from './AppButton.vue'
    import AppNewsList from './AppNewsList.vue'
export default {
  components: { AppButton, AppNewsList },
    // props: ['title'],
    emits: ['open-news', 'close-news', 'unmark'],
    props: {
        news: Array,
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
