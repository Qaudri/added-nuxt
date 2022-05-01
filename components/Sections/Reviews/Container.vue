<template>
  <div class="w-full">
    <UiCardsReviewcard v-for="item in reviewItems" :key="item.id" :review="item.review" :reviewer="item.reviewer" class="h-64 md:h-72 mx-1 md:mx-5 xl:mx-7" />
  </div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {

  computed: {
    ...mapGetters({
      reviewItems : 'reviews/getReviewItems'
    })
  }

}
</script>

<style>

</style>