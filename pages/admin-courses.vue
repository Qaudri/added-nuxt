<template>
  <LayoutsAdminApp :class="form_toggled ? 'h-screen overflow-y-hidden top-0': ''">

    <template v-slot:hero >
      <div class="w-full flex justify-center items-center">
        <form action="" class="w-72 bg-white flex items-center shadow-lg">
          <select name="Category" id="category" class="px-4 py-4 w-60 bg-white">
            <option disabled value="">Category</option>
            <option value="design">Graphics Design</option>
            <option value="design">UiUx Design</option>
          </select>
        </form>
      </div>
    </template>

    <LayoutsDialog :class="form_toggled ? 'block ' : 'hidden' ">
      <div class="flex justify-end w-full">
        <UiButtonsClose @closeMenu="toggleForm" class="flex items-center justify-end cursor-pointer pb-2" />
      </div>
    </LayoutsDialog>

    <LayoutsForm :class="form_toggled ? 'block ' : 'hidden' ">
      <div class="flex justify-end w-full">
        <UiButtonsClose @closeMenu="toggleCourseForm" class="flex items-center justify-end cursor-pointer pb-2" />
      </div>
    </LayoutsForm>
    
    <div class="p-8 py-14" >
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
            <img :src="require('@/assets/images/icons/edit.svg')" @click="editCourse" class="w-5 cursor-pointer" />
            <img :src="require('@/assets/images/icons/delete.svg')" @click="toggleForm" class="w-5 cursor-pointer mx-4" />
          </div>
        </UiCardsCoursecard>
      </div>
    </div>
  </LayoutsAdminApp>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
  data(){
    return{
      form_toggled: false,
      edit_form_toggled: false
    }
  },

  methods: {
    toggleForm(){
      console.log("toggled")
      this.form_toggled = !this.form_toggled
    },

    editCourse(){
      console.log("Edit")
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
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;0,700;1,400&display=swap');

body{
  font-family: "Poppins", sans-serif;
}

.bg-gray-50{
  background-color: #f7f7f7 !important;
}
</style>