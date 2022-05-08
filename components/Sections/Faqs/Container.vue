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
        reviews : 'reviews/getReviews'
      })
  },


}
</script>

<style>

</style>