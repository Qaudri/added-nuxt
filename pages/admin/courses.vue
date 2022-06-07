<template>
  <LayoutsAdminApp :class="delete_form_toggled || edit_form_toggled ? 'h-screen overflow-y-hidden top-0': ''" @signOut="logOut()">

    <div :class="create_course_form ? 'block' : 'hidden'" class="px-10 absolute bg-secondary-100 z-110 bg-opacity-20 flex items-center justify-center h-full w-full top-10 left-0">
      <div class="scale-out bg-white p-6 w-full md:w-2/3 lg:w-1/2">

        <div>
          <div class="border-b text-xl font-semibold flex justify-between">
            <p class="font-medium text-black text-lg">Create Course</p>
            <div class="">
              <UiButtonsClose @closeMenu="createCourseForm" class="flex items-center justify-end cursor-pointer pb-2" />
            </div>
          </div>
        </div>
         <form action="" >
          <label for="title">Course title</label>
          <input type="text" v-model="form.title" placeholder="Enter the course title">

          <label for="title">Course duration</label>
          <input type="text" v-model="form.duration" placeholder="Enter the course duration">

          <label for="title">Course price</label>
          <input type="text" v-model="form.price" placeholder="Enter the course price">

          <label for="title">Course decription</label>
          <input type="text" v-model="form.description" placeholder="Enter the course description">

          <label for="title">Course contents</label>
          <input type="text" v-model="form.contents" placeholder="Enter the course contents">

          <button @click="createCourse()" class="w-full border-2 border-primary-100 text-primary-100 font-medium text-lg hover:bg-primary-100 hover:text-white ease-in-out duratin-500 py-3">Create course</button>
        </form>
      </div>
    </div>

    <template v-slot:hero >
      <div class="w-full flex justify-center items-center">
        <UiButtonsPrimary button_title="Create New Course" @pushTo="createCourseForm" class="space"/>
      </div>
    </template>

    <LayoutsDialog :class="delete_form_toggled ? 'block ' : 'hidden' ">
      <div class="flex justify-end w-full">
        <UiButtonsClose @closeMenu="toggleForm" class="flex items-center justify-end cursor-pointer pb-2" />
      </div>
    </LayoutsDialog>

    <LayoutsForm :class="edit_form_toggled ? 'block ' : 'hidden' " 
    :course_title="selected.title"
    :course_duration="selected.duration"
    :course_price="selected.price"
    :course_description="selected.details">
      <div class="flex justify-end w-full">
        <UiButtonsClose @closeMenu="editCourse" class="flex items-center justify-end cursor-pointer pb-2" />
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
            <img :src="require('@/assets/images/icons/edit.svg')" @click="editCourse(item)" class="w-5 cursor-pointer" />
            <img :src="require('@/assets/images/icons/delete.svg')" @click="toggleForm(item)" class="w-5 cursor-pointer mx-4" />
          </div>
        </UiCardsCoursecard>
      </div>
    </div>
  </LayoutsAdminApp>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';

export default {
  data(){
    return{
      delete_form_toggled: false,
      edit_form_toggled: false,
      create_course_form: false,
      form: {
        title: "",
        price: "",
        duration: "",
        description: "",
        contents: "",
      },
    }
  },

  methods: {
    toggleForm(item){
      console.log("toggled")
      this.delete_form_toggled = !this.delete_form_toggled
    },

    editCourse(item){
      this.edit_form_toggled = !this.edit_form_toggled
      this.setCourse(item)
    },

    logOut(){
      this.logOut()
    },

    createCourseForm(){
      this.create_course_form = !this.create_course_form
    },

    createCourse(){
      this.newCourse({
        title: this.form.title,
        price: this.form.price,
        description: this.form.description,
        
      })
      .then(() =>{
        this.createCourseForm()
        // this.$router.push({name: 'courses'})
        console.log("success")
      })
    },

    ...mapActions({
      setCourse: 'courses/setSelectedCourse',
      newCourse: 'courses/createCourse',
      logOut: 'authentication/destroySession',
    }),

  },

  computed: {
    ...mapGetters({
      course : 'courses/getCourseItems',
      selected: 'courses/getSelectedCourse'
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

.scale-out{
  animation: scaleout 1s forwards;
}

@keyframes scaleout {
  from{
    transform: scale(0);
  }

  to{
    transform: scale(1);
  }
}

.space{
  padding: 1rem 2rem !important;
}
</style>