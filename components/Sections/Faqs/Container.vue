<template>
  <div>
    <UiCardsFaqcard />
  </div>
</template>

<script>

import {mapGetters} from 'vuex';
export default {

  computed: {
    ...mapGetters({
      faqItems : 'faqs/getFaqsItems'
    })
  },


}
</script>

<style>

</style>