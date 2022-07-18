<template>
  <LayoutsAdminApp :class="delete_form_toggled || edit_form_toggled || create_course_form ? 'h-screen overflow-y-hidden top-0': ''" >

    <div @click="createCourseForm || toggleEditCourse" :class="create_course_form || edit_form_toggled ? 'block' : 'hidden' " class=" absolute z-10 w-full bg-gray-400 top-0 left-0 bg-opacity-40 h-full">

    </div>

    <!-- create course form -->
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
          <input type="text" v-model="form.preview" placeholder="Enter the image link">

          <label for="title">Course title</label>
          <input type="text" v-model="form.title" placeholder="Enter the course title">

          <label for="title">Course duration (in weeks)</label>
          <input type="number" v-model="form.duration" placeholder="Enter the course duration (number)">

          <label for="title">Course price</label>
          <input type="number" v-model="form.price" placeholder="Enter the course price (number)">

          <label for="title">Course brief</label>
          <input type="text" v-model="form.brief" placeholder="Enter the course brief">

          <button type="submit" class="px-6 border-2 w-full mt-6 border-primary-100 text-primary-100 font-medium text-lg hover:bg-primary-100 hover:text-white ease-in-out duration-300 py-3">Create course</button>
        </form>
      </div>
    </div>

    <!-- create course button -->
    <template v-slot:hero >
      <div class="w-full flex justify-center items-center">
        <UiButtonsPrimary button_title="Create New Course" @pushTo="createCourseForm" class="space"/>
      </div>
    </template>

    <!-- delete course popup -->
    <LayoutsDialog :class="delete_form_toggled ? 'block ' : 'hidden' " @confirmDelete="confirmDeleteCourse()">
      <div class="flex justify-end w-full">
        <UiButtonsClose @closeMenu="toggleForm" class="flex items-center justify-end cursor-pointer pb-2" />
      </div>
    </LayoutsDialog>

    <LayoutsForm :class="edit_form_toggled ? 'block ' : 'hidden' " @UpdateCourseEvent="updateCourse()"
    :course_image="selected_for_update.preview"
    :course_title="selected_for_update.title"
    :course_duration="selected_for_update.duration_in_weeks"
    :course_price="selected_for_update.price"
    :course_description="selected_for_update.brief"
    :uuid="selected_for_update.uuid">
      <div class="flex justify-end w-full">
        <UiButtonsClose @closeMenu="toggleEditCourse" class="flex items-center justify-end cursor-pointer pb-2" />
      </div>
    </LayoutsForm>
    
    <div class="p-8 py-14" >
      <div class="py-3 border-b mb-8">
        <h1 class="text-2xl font-semibold">Courses</h1>
      </div>

      <div :class="create_course_form ? 'grid-cols-1 lg:grid-cols-2' : '' " class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-10">
        <UiCardsCoursecard v-for="item in courseItems" :key="item.id" 
        :imgUrl="item.preview" 
        :title="item.title" 
        :duration="item.duration_in_weeks"
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
        title: '',
        price: '',
        duration: '',
        brief: '',
        preview: '',
      },

      selected_for_deletion: '',
      selected_for_update: '',
    }
  },

  methods: {
    toggleForm(item){
      console.log(this.selected_for_deletion)
      this.selected_for_deletion = item
      this.delete_form_toggled = !this.delete_form_toggled
    },

    toggleEditCourse(){
      this.edit_form_toggled = !this.edit_form_toggled
    },

    editCourse(item){
      this.edit_form_toggled = true
      this.selected_for_update = item
    },

    createCourseForm(){
      this.create_course_form = !this.create_course_form
    },

    createCourse(){
      this.createNewCourses({
        the_title: this.form.title,
        the_price: this.form.price,
        the_brief: this.form.brief,
        the_duration: this.form.duration,
        the_preview: this.form.preview
      })

      .then(() =>{
        this.create_course_form = !this.create_course_form
        this.listEveryCourse()
      })
    },

    confirmDeleteCourse(){
      this.deleteCourse(this.selected_for_deletion.uuid)
      .then(() =>{
        this.delete_form_toggled = !this.delete_form_toggled
        this.selected_for_deletion = ''
        this.listEveryCourse()
      })
    },

    ...mapActions({
      setCourse: 'courses/setSelectedCourse',
      createNewCourses: 'courses/createCourse',
      listEveryCourse: 'courses/listAdminCourses',
      confirmUpdateCourse: 'courses/updateCourse',
      showCourse: 'courses/showCourse',
      deleteCourse: 'courses/deleteCourse',
    }),

    listAllCourses(){
      this.listEveryCourse()
    },

    updateCourse(){
      
      this.confirmUpdateCourse({
        uuid: this.selected_for_update.uuid,
        edit_title: this.selected_for_update.title,
        edit_duration: this.selected_for_update.duration,
        edit_description: this.selected_for_update.brief,
        edit_price: this.selected_for_update.price,
        edit_imageUrl: this.selected_for_update.imageUrl
      })

      .then(() =>{
        this.edit_form_toggled = !this.edit_form_toggled
        this.selectedItem = ''
        this.listCourses()
      })

    }

  },

  computed: {
    ...mapGetters({
      courseItems : 'courses/getCourseItems',
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