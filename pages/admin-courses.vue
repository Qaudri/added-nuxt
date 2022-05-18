<template>
  <LayoutsAdminApp>

    <template v-slot:hero class="first-letter:" >

    </template>
    
    <div class="p-8 py-14">
      <div class="py-3 border-b mb-8">
        <h1 class="text-2xl font-semibold">Courses</h1>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <UiCardsCoursecard v-for="item in course" :key="item.id" 
        :imgUrl="item.imageUrl" 
        :title="item.title" 
        :duration="item.duration"
        :price="item.price" @RegisterUser="toggleForm">
          <div class="flex">
            <img :src="require('@/assets/images/icons/edit.svg')" class="w-6" />
            <img :src="require('@/assets/images/icons/delete.svg')" class="w-6" />
          </div>
        </UiCardsCoursecard>
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