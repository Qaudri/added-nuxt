<template>
  <div :class="detailsdisplayed || payment_mode ? 'h-screen overflow-y-hidden' : '' ">
    <LayoutsAdminApp>
      <div @click="hideDetails" :class="detailsdisplayed ? 'block' : 'hidden' " class="left-0 top-0 absolute w-full bg-gray-400 bg-opacity-30 h-full z-40">

      </div>
      
      <template v-slot:hero class="">
      </template>

      <div :class="payment_mode ? 'block' : 'hidden' " class="h-screen overflow-y-hidden border-l-2 border-primary-100 slide-left right-0 bg-white absolute w-full md:w-1/2 lg:w-1/3 px-6 py-8 top-0
        z-50">
        <div class="">
          <div class="mb-4 w-full flex justify-end bg-white">
            <UiButtonsClose @closeMenu="hidePaymentCard" class="cursor-pointer" />
          </div>
        </div>
      </div>

      <div :class="detailsdisplayed ? 'block' : 'hidden'" class="h-screen overflow-y-hidden border-l-2 border-primary-100 slide-left right-0 bg-white absolute w-full md:w-1/2 lg:w-1/3 px-6 py-8 top-0
        z-50">
        <div class="container mx-auto ">
          <div class="mb-4 w-full flex justify-end bg-white">
            <UiButtonsClose @closeMenu="hideDetails" class="cursor-pointer" />
          </div>
          <div class="flex items-center ">
            <div class="pr-4 border-r w-32 h-32">
              <img :src="selected_for_details.imageUrl" alt="" class="w-24">
            </div>
            <h1 class="text-3xl font-bold mx-3">
              {{selected_for_details.title}}
            </h1>
          </div>

          <div class="my-5">
            <h1 class="font-semibold text-primary-100 text-xl my-3">Course Description:</h1>
            <p class="font-medium text-secondary-100 text-base">{{selected_for_details.details}}</p>
          </div>
          <div class="">
            <div class="text-base font-medium">Course duration: <span class="text-primary-100">{{selected_for_details.duration}} weeks</span></div>
            <div class="text-base font-medium">Course price: <span class="text-primary-100">#{{selected_for_details.price}}</span></div>
          </div>
          <div class="mt-4 bottom-4 fixed flex items-center">
            <UiButtonsPrimary @pushTo="makePayment(item)" class="px-6 py-2 text-white font-medium" button_title="Enroll now"/>
            <UiButtonsSecondary @Pushto="hideDetails" button_title="Check Other Courses" class="mt-2"/>
          </div>
        </div>
      </div>

      <div class="py-3 border-b mb-8 px-8 pt-14">
        <h1 class="text-2xl font-semibold">Courses</h1>
      </div>

      <div class="container mx-auto px-10">
        <div :class="detailsdisplayed || payment_mode ? 'grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 w-full md:w-1/2 lg:w-2/3 2xl:w-3/4 gap-10' :'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-10'" class="">
          <UiCardsCoursecard v-for="item in courseItems" :key="item.id" class="bg-white"
          :imgUrl="item.imageUrl"   
          :title="item.title" 
          :duration="item.duration"
          :price="item.price">
            <div class="flex items-center">
              <UiButtonsSecondary @Pushto="showDetails(item)" button_title="See Details" class=""/>
              <UiButtonsPrimary @pushTo="makePayment(item)" class="px-4 py-2 text-white font-medium" button_title="Enroll now"/>
            </div>
          </UiCardsCoursecard>
        </div>
      </div>
    </LayoutsAdminApp>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';

export default {
  middleware: 'student-login',

  data(){
    return{
      detailsdisplayed: false,
      payment_mode: false,
      selected_for_details: '',
      selected_for_payment: '',
    }
  },

  methods: {
    ...mapActions({
      listCourses: 'courses/listStudentCourses'
    }),

    showDetails(item){
      this.selected_for_details = item
      this.detailsdisplayed = !this.detailsdisplayed
    },

    hideDetails(){
      this.detailsdisplayed = false
    },

    hidePaymentCard(){
      this.payment_mode = false
    },

    showAllCourses(){
      this.listCourses()
    },

    makePayment(item){
      this.selected_for_payment = item
      this.payment_mode = true
    }
  },

  computed: {
    ...mapGetters({
      courseItems : 'courses/getCourseItems',
    }),
  },

  created() {
    this.showAllCourses()
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