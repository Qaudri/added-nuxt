<template>
  <div :class="detailsdisplayed ? 'h-screen overflow-y-hidden' : '' ">
    <SectionsCommonHeader >
      <div>
        <UiSharedLogo @emitReload="reloadThisPage" />
      </div>

      <template v-slot:menuitems >
        <UiButtonsSecondary @Pushto="whoWeAre" button_title="Back to Home" class="lg:mx-4 lg:my-0 my-4 "/>
        <UiButtonsSecondary @Pushto="whatWeDo" button_title="Our Academy" class="lg:mx-4 lg:my-0 my-4 "/>
        <UiButtonsSecondary @Pushto="ourServices" button_title="Our Courses" class="lg:mx-4 lg:my-0 my-4 "/>
        <UiButtonsSecondary @Pushto="Academy" button_title="Our Reviews" class="lg:mx-4 lg:my-0 my-4" />
        <div class="my-10 lg:my-0">
          <a href="https://bit.ly/3KPTsPB" class="text-primary-100 xl:text-lg text-sm px-4 py-2 font-normal border-2 2xl:border-4 border-primary-100 hover:bg-primary-100 hover:text-white duration-500 ease-in-out">
            Contact Us
          </a> 
        </div>
     </template>
    </SectionsCommonHeader>
    <div @click="hideDetails" :class="detailsdisplayed ? 'block' : 'hidden' " class=" absolute w-full bg-gray-400 bg-opacity-30 h-full z-40">

    </div>

    <div :class="detailsdisplayed ? 'block' : 'hidden'" class="h-screen overflow-y-hidden border-l-2 border-primary-100 slide-left right-0 bg-white absolute w-full md:w-1/2 lg:w-1/3 px-6 py-8
       z-50">
      <div class="container mx-auto ">
        <div class="mb-4 w-full flex justify-end bg-white">
          <UiButtonsClose @closeMenu="hideDetails" class="cursor-pointer" />
        </div>
        <div class="flex items-center ">
          <div class="pr-4 border-r w-32 h-32">
            <img :src="selected_for_details.preview" alt="" class="w-24">
          </div>
          <h1 class="text-2xl font-normal mx-3">
            {{selected_for_details.title}}
          </h1>
        </div>

        <div class="my-5">
          <h1 class="font-semibold text-primary-100 text-lg my-3">Course Description:</h1>
          <p class="font-medium text-secondary-100 text-sm">{{selected_for_details.brief}}</p>
        </div>
        <div class="">
          <div class="text-sm font-medium">Course duration: <span class="text-primary-100">{{selected_for_details.duration_in_weeks}} weeks</span></div>
          <div class="text-sm font-medium">Course price: <span class="text-primary-100">#{{selected_for_details.price}}</span></div>
        </div>
        <div class="mt-4 flex justify-center items-center mx-auto">
          <UiButtonsPrimary @pushTo="registerPage" class="px-6 py-2 text-white font-medium" button_title="Enroll now"/>
          <UiButtonsSecondary @Pushto="hideDetails" button_title="Check Other Courses" class="p-0"/>
        </div>
      </div>
    </div>

    <div class="container mx-auto px-6 md:px-10 py-28 xl:py-32">
      <div :class="detailsdisplayed ? 'grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 w-full md:w-1/2 lg:w-2/3 2xl:w-3/4 gap-10' :'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-10'" class="">
        <UiCardsCoursecard v-for="item in course" :key="item.id"
        :imgUrl="item.preview"   
        :title="item.title" 
        :duration="item.duration_in_weeks"
        :price="item.price">
          <div class="flex items-center">
            <UiButtonsSecondary @Pushto="showDetails(item)" button_title="See Details" class=""/>
            <UiButtonsPrimary @pushTo="registerPage" class="px-4 py-2 text-white font-medium" button_title="Enroll now"/>
          </div>
        </UiCardsCoursecard>

      <!-- <button @click="initializePaystack" class="px-8 py-4 bg-primary-100">Pay</button> -->
      </div>
    </div>
    <SectionsCommonFooter class="z-50 relative" />
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';

export default {
  head: {
    title: 'Added Digital Solutions Academy',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Creative training institution' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.svg' }
    ]
  },
  data(){
    return{
      detailsdisplayed: false,
      selected_for_details: '',
    }
  },

  methods: {
    // initializePaystack() {
    //   this.$paystack({
    //     key: 'pk_test_6a469a182d02a997d76fbd08f4b931f164892142', // Replace with your public key.
    //     email: 'stevewilsn75@gmail.com',
    //     amount: 500000,
    //     ref: '',
    //     currency: '#',
    //     callback: () => {
    //       // Do something.
    //     },
    //     onClose: () => {
    //       // Do something.
    //     }
    //   })
    // },

    ...mapActions({
      listCourses: 'courses/showAllCourses'
    }),

    showDetails(item){
      this.selected_for_details = item
      this.detailsdisplayed = !this.detailsdisplayed
    },

    hideDetails(){
      this.detailsdisplayed = false
    },

    registerPage(){
      this.$router.push({path:'/register'})
    },

    reloadThisPage(){
      this.$router.push({path:'/'})
    },

    whoWeAre(){
      this.$router.push({path:'/'})
    },

    whatWeDo(){
      this.$router.push({path:'/academy#our-academy'})
    },

    ourServices(){
      this.$router.push({path:'/academy#our-courses'})
    },

    Academy(){
      this.$router.push({path:'/academy#reviews/faqs'})
    },

    Primary(){
      this.$router.go({path:'https://bit.ly/3uOIVPo'})
    },

    showAllCourses(){
      this.listCourses()
    }
  },

  computed: {
    ...mapGetters({
      course : 'courses/getCourseItems',
    })
  },

   created() {
    this.showAllCourses()
  }
}
</script>

<style>
@font-face {
  font-family: Product Sans;
  src: url('../ProductSans-Regular.woff');
}

body{
  font-family: "Product Sans", sans-serif;
  overflow-x: hidden;
}

form{
  width: 100%;
  display: block;
  box-sizing: border-box;
}

label{
  font-weight: 600;
  color: #058182;
  margin-top: 30px;
  display: block;
}

input{
  padding: 10px 15px;
  margin: 10px 0;
  display: block;
  width: 100%;
  border: 2px solid #222222;
}


input:focus{
  border: 2px solid #058182;
  border-radius: 0;
  outline: none;
  color: #058182;
}

.submit{
  margin-top: 2rem;
  width: 100%;
  background-color: transparent;
  border: 2px solid #058182;
  text-transform: capitalize;
  padding: 10px;
  color: #058182;
  font-weight: 600;
  font-size: 18px;
  cursor: pointer;
}

.submit:hover{
  background: #058182;
  color: white;
  transition: .5s ease-in-out;
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

.bg-gray-50{
  background-color: #f9f9f9 !important;
}
</style>