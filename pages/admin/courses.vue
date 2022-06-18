<template>
  <LayoutsAdminApp :class="delete_form_toggled || edit_form_toggled || create_course_form ? 'h-screen overflow-y-hidden top-0': ''" >

    <div @click="createCourseForm" :class="create_course_form ? 'block' : 'hidden' " class=" absolute z-10 w-full bg-gray-400 top-0 left-0 bg-opacity-40 h-full">

    </div>

    <div :class="create_course_form ? 'block' : 'hidden'" class="slide-left fixed top-0 right-0 min-h-screen flex justify-center items-center w-full z-20 bg-white md:w-1/2 lg:w-2/5 xl:w-1/3 ">
      <div class="bg-white py-4 px-10 w-full scale-95 lg:scale-100">
        <div>
          <div class="border-b text-xl font-semibold flex justify-between">
            <p class="font-medium text-black text-lg">Create Course</p>
            <div class="">
              <UiButtonsClose @closeMenu="createCourseForm" class="flex items-center justify-end cursor-pointer pb-2" />
            </div>
          </div>
        </div>
         <form action="" @submit.prevent="createCourse" >
          <label for="title">Image link</label>
          <input type="text" v-model="form.image" placeholder="Enter the image link">

          <label for="title">Course title</label>
          <input type="text" v-model="form.title" placeholder="Enter the course title">

          <label for="title">Course duration (in weeks)</label>
          <input type="number" v-model="form.duration" placeholder="Enter the course duration (number)">

          <label for="title">Course price</label>
          <input type="number" v-model="form.price" placeholder="Enter the course price (number)">

          <label for="title">Course brief</label>
          <input type="text" v-model="form.brief_description" placeholder="Enter the course brief">

          <button type="submit" class="px-6 border-2 w-full mt-6 border-primary-100 text-primary-100 font-medium text-lg hover:bg-primary-100 hover:text-white ease-in-out duration-300 py-3">Create course</button>
        </form>
      </div>
    </div>

    <template v-slot:hero >
      <div class="w-full flex justify-center items-center">
        <UiButtonsPrimary button_title="Create New Course" @pushTo="createCourseForm" class="space"/>
      </div>
    </template>

    <LayoutsDialog :class="delete_form_toggled ? 'block ' : 'hidden' " @confirmDelete="confirmDeleteCourse()">
      <div class="flex justify-end w-full">
        <UiButtonsClose @closeMenu="toggleForm" class="flex items-center justify-end cursor-pointer pb-2" />
      </div>
    </LayoutsDialog>

    <LayoutsForm :class="edit_form_toggled ? 'block ' : 'hidden' "
    :course_title="selectedItem.title"
    :course_duration="selectedItem.duration"
    :course_price="selectedItem.price"
    :course_description="selectedItem.details">
      <div class="flex justify-end w-full">
        <UiButtonsClose @closeMenu="editCourse" class="flex items-center justify-end cursor-pointer pb-2" />
      </div>
    </LayoutsForm>
    
    <div class="p-8 py-14" >
      <div class="py-3 border-b mb-8">
        <h1 class="text-2xl font-semibold">Courses</h1>
      </div>
      <div :class="create_course_form ? 'grid-cols-1 lg:grid-cols-2' : '' " class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-10">
        <UiCardsCoursecard v-for="item in courseItems" :key="item.id" 
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
  middleware: 'admin-login',
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
        image: "",
      },

      selected_for_deletion: '',
    }
  },

  methods: {
    toggleForm(item){
      console.log("toggled")
      this.selected_for_deletion = item
      this.delete_form_toggled = !this.delete_form_toggled
      
    },

    editCourse(item){
      this.edit_form_toggled = !this.edit_form_toggled
      this.setCourse(item)
    },

    createCourseForm(){
      this.create_course_form = !this.create_course_form
    },

    createCourse(){
      this.createNewCourses({
        title: this.form.title,
        price: this.form.price,
        description: this.form.description,
        duration: this.form.duration,
        imageUrl: this.form.image
      })

      .then(() =>{
        this.create_course_form = !this.create_course_form
        console.log("success")
        this.listCourses
      })
    },

    confirmDeleteCourse(){
      console.log(this.selected_for_deletion)
      this.deleteCourse(this.selected_for_deletion.uuid)
      .then(() =>{
        this.delete_form_toggled = !this.delete_form_toggled
        this.selected_for_deletion = ''
        this.listCourses()
      })
    },

    ...mapActions({
      setCourse: 'courses/setSelectedCourse',
      createNewCourses: 'courses/createCourse',
      listEveryCourse: 'courses/listCourses',
      updateCourse: 'courses/updateCourse',
      showCourse: 'courses/showCourse',
      deleteCourse: 'courses/deleteCourse',
    }),

    listAllCourses(){
      this.listEveryCourse()
    }

  },

  computed: {
    ...mapGetters({
      courseItems : 'courses/getCourseItems',
      selectedItem: 'courses/getSelectedCourse',
    }),
  },

  created(){
    this.listAllCourses()
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

label{
  margin-top: 20px;
}

@keyframes scaleout {
  from{
    transform: scale(0);
  }

  to{
    transform: scale(1);
  }
}

.slide-left{
  animation: slideleft 1s forwards;
}

@keyframes slideleft {
  from{
    transform: translateX(10rem);
  }

  to{
    transform: translateX(0);
  }
}
</style>