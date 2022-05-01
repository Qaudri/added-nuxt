<template>
  
</template>

<script>
import {mapGetters} from 'vuex';

export default {

  computed: {
    ...mapGetters({
      faqItems : 'faqs/getFaqItems'
    })
  }
  
}
</script>

<style>

</style>