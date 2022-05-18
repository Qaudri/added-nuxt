<template>
  <LayoutsAdminApp>

    <template v-slot:hero class="first-letter:" >

    </template>
    
    <div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <UiCardsCoursecard v-for="item in course" :key="item.id" 
        :imgUrl="item.imageUrl" 
        :title="item.title" 
        :duration="item.duration"
        :price="item.price" @RegisterUser="toggleForm"/>
      </div>
    </div>
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