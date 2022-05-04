<template>
  <div class="container mx-auto px-10 py-28 xl:py-32">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      <UiCardsCoursecard />
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
  computed: {
    ...mapGetters({
      course : 'faqs/getCourseItems'
    })
  }
}
</script>

<style>

</style>