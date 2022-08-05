<template>
  <div class="w-full md:w-2/3 xl:w-1/2 py-4 mx-auto">
    <SectionsReviewsReview class="text-center">
      {{review}}
    </SectionsReviewsReview>
    <div class="w-12 h-0.5 bg-black mb-2 mt-14 flex justify-center mx-auto"></div>
    <SectionsReviewsReviewer class="flex justify-center">
      {{reviewer}}
    </SectionsReviewsReviewer>
  </div>
</template>

<script>
export default {
  props: {
   review: String,
   reviewer: String,
  }
}
</script>

<style>
</style>