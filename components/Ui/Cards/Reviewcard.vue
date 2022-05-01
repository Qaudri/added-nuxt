<template>
  <div class="bg-gray-50 p-6 width">
    <div class="text-9xl font-light opacity-20">"</div>
    <SectionsReviewsReview class="-mt-16 pl-10">
      {{review}}
    </SectionsReviewsReview>

    <SectionsReviewsReviewer class="mt-5 flex justify-end">
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
.width{
  width: 24rem !important;
  padding-right: 1.5rem !important;
}
</style>