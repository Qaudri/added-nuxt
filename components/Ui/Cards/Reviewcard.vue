<template>
  <div class="w-full flex items-center py-2 mx-auto px-10">
    <div class="bg-gray-50 w-24 h-24">
      <SectionsReviewsImage>
        <img :src="picture" class="w-24 h-24" alt="">
      </SectionsReviewsImage>
    </div>
    <div class="w-1 h-24 bg-secondary-100 mx-4"></div>
    <div>
      <SectionsReviewsReview class="text-left">
        {{review}}
      </SectionsReviewsReview>
      <SectionsReviewsReviewer class="flex mt-4">
        {{reviewer}}
      </SectionsReviewsReviewer>
    </div>

  </div>
</template>

<script>
export default {
  props: {
   review: String,
   reviewer: String,
   picture: String,
  }
}
</script>

<style>
</style>