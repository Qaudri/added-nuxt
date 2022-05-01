<template>
  <div>
    <UiCardsReviewcard v-for="item in reviewItems" :key="item.id" :review="item.review" :reviewer="item.reviewer" class="h-64 md:h-72" />
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