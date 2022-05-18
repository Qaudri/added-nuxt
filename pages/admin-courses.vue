<template>
  <LayoutsAdminApp>
    
  </LayoutsAdminApp>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
  computed: {
    ...mapGetters({
      course : 'courses/getCourseItems'
    })
  }
}
</script>

<style>

</style>