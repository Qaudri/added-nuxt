<template>
  <div>
    <UiCardsReviewcard v-for="item in reviewItems" :key="item.id" :review="item.review" :reviewer="item.reviewer" />
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