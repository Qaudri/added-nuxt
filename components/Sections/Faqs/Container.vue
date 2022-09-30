<template>
  <div>
    <UiCardsFaqcard v-for="item in faqItems" :key="item.id" :question="item.question" :answer="item.answer" :is_active="item.active" class="my-8 w-full md:w-2/3 mx-auto" @checkActive="tryChecking(item)"/>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
  computed: {
    ...mapGetters({
      faqItems : 'faqs/getFaqItems'
    })
  },
  data(){
    return{
      tryFaqItems: this.faqItems
    }
  },
  methods: {
    tryChecking(){
      for (let item = 0; item < this.tryFaqItems.length; item++) {
        const the_item = tryFaqItems[item];
        the_item.is_active = false
      }
    }
  },
  created(){
    if (this.tryFaqItems =! '') {
      console.log()
    }
  }
}
</script>

<style>
</style>