<template>
  <LayoutsAdminApp>

    <template v-slot:hero class="first-letter:" >

    </template>

  </LayoutsAdminApp>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
  methods: {
    toggleForm(){
      console.log("Form toggled")
    }
  },
  computed: {
    ...mapGetters({
      course : 'courses/getCourseItems'
    })
  }
}
</script>

<style>

</style>