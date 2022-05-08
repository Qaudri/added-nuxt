<template>
  <div>
    <UiCardsFaqcard v-for="item in faqItems" :key="item.id" :question="item.question" :answer="item.answer" />
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


}
</script>

<style>

</style>