<template>
  <div>
    <UiCardsReviewcard />
  </div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {

  computed: {
    ...mapGetters({
      reviewItems : 'faqs/getReviewItems'
    })
  }

}
</script>

<style>

</style>