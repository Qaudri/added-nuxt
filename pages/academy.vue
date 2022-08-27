<template>
  <div>
    <SectionsCommonHeader >
      <div>
        <UiSharedLogo @emitReload="reloadThisPage" />
      </div>

      <template v-slot:menuitems >
        <UiButtonsSecondary @Pushto="whoWeAre" button_title="Home" class="lg:mx-4 lg:my-0 my-4"/>
        <UiButtonsSecondary @Pushto="whatWeDo" button_title="Our Academy" class="lg:mx-4 lg:my-0 my-4"/>
        <UiButtonsSecondary @Pushto="ourServices" button_title="Our Courses" class="lg:mx-4 lg:my-0 my-4"/>
        <UiButtonsSecondary @Pushto="Academy" button_title="Reviews & FAQs" class="lg:mx-4 lg:my-0 my-4" />
        <UiButtonsPrimary @pushTo="Primary" button_title="Register Now" class="lg:ml-4 my-10 lg:my-0" />
      </template>
    </SectionsCommonHeader>
    
    <section class="flex justify-between items-center">

      <div class="lg:flex items-center justify-between mt-28 lg:mt-36 container mx-auto" >

        <div class="lg:w-1/2 px-6 md:px-10 w-full mb-5">

          <h1 class="select-none text-3xl lg:text-4xl 2xl:text-4xl font-normal mb-8 md:my-6 lg:leading-tight leading-normal hero-text xl:w-1/2">
            It's time to learn and acquire digital Tech skills.
          </h1>

          <p class="text-sm md:text- xl:text-base mb-8">
            Acquire the 21st century skills so as to improve your relevance and employability in this ever changing world.
          </p>

          <div>
            <a href="/courses" class="select-none px-6 md:px-10 py-3 font-medium hover:text-white hover:bg-primary-100 border-2 border-primary-100 text-primary-100 mt-8 mb-1 duration-500 ease-in-out">
                Get Started
            </a>
          </div>

        </div>

        <img :src="require('@/assets/images/hero-bg.png')" alt="" class="select-none w-full lg:w-1/2 border-b-2 pl-6 pb-1" />
      </div>
    </section> 

    <section class="flex items-center justify-center pt-24 lg:pt-28 pb-12" id="our-academy">
      <div>
        <div class="block lg:flex justify-between items-center">
          <div class="w-full hidden lg:block lg:w-1/2">
            <img :src="require('@/assets/images/academy.jpg')" alt="" class="w-full">
          </div>
          <div class="w-full lg:w-1/2 px-6 md:px-16 2xl:px-24 py-8 lg:py-0">
            <h1
            class="md:text-3xl text-2xl font-normal capitalize mb-4 text-center text-primary-100 flex justify-center mx-auto">
              Our Academy
            </h1>
  
            <p class="text-sm md:text-base 2xl:text-xl">
                An innovative and technology driven academy aimed to help and empower people who want to get into tech and 
                digital ecosystem to thrive across africa and globally with well organized courses having upto date 
                curriculum, our facilitators engage students by walking them through pratical approaches.
                <br>
                Our mission is getting more people into Tech ecosystem easily and making them achieve their passion to be 
                professional and certified. Our HR services provides opportunity to those who may be interested in job 
                placement and others who may still be earning while learning.
            </p>
          </div>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-24 container mx-auto px-6 md:px-10" >

          <div class="p-4 py-4 md:py-6 bg-gray-50 flex md:block">
            <img :src="require('@/assets/images/icons/register.svg')" alt="" class="w-16 md:w-28 md:mb-6 mr-4 flex justify-center md:mx-auto">
            <div>
                <h1 class="xl:text-xl text-lg font-normal capitalize text-left md:text-center text-primary-100 md:flex md:justify-center md:mx-auto">
                Quick Enrollment
                </h1>
                <p
                class="text-left md:text-center text-sm md:text-sm xl:text-base md:flex md:justify-center md:mx-auto mt-2">
                    Students can register for courses right from their comfort zones.
                </p>
            </div>
          </div>

          <div class="p-4 py-4 md:py-6 bg-gray-50 flex md:block">
            <img :src="require('@/assets/images/icons/course.svg')" alt="" class="w-16 md:w-28 md:mb-6 mr-4 flex justify-center md:mx-auto">
            <div>
                <h1 class="xl:text-xl text-lg font-normal capitalize text-left md:text-center text-primary-100 md:flex md:justify-center md:mx-auto">
                    Thorough Curriculum
                </h1>
                <p
                class="text-left md:text-center text-sm md:text-sm xl:text-base md:flex md:justify-center md:mx-auto mt-2">
                Our curriculums cover several in-demand skills
                </p>
            </div>
          </div>

          <div class="p-4 py-4 md:py-6 bg-gray-50 flex md:block">
            <img :src="require('@/assets/images/icons/environ.svg')" alt="" class="w-16 md:w-28 md:mb-6 mr-4 flex justify-center md:mx-auto">
            <div>
                <h1 class="xl:text-xl text-lg font-normal capitalize text-left md:text-center text-primary-100 md:flex md:justify-center md:mx-auto">
                    Conducive Area
                </h1>
                <p
                class="text-left md:text-center text-sm md:text-sm xl:text-base md:flex md:justify-center md:mx-auto mt-2">
                    Meet with creative minds in a comfortable area
                </p>
            </div>
          </div>

          <div class="p-4 py-4 md:py-6 bg-gray-50 flex md:block">
            <img :src="require('@/assets/images/icons/recruit.svg')" alt="" class="w-16 md:w-28 md:mb-6 mr-4 flex justify-center md:mx-auto">
            <div>
              <h1 class="xl:text-xl text-lg font-normal capitalize text-left md:text-center text-primary-100 md:flex md:justify-center md:mx-auto">
                  Job Placement
              </h1>
              <p
              class="text-left md:text-center text-sm md:text-sm xl:text-base md:flex md:justify-center md:mx-auto mt-2">
                  Get quick access to recruitment opportunities
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>

    <section class="items-center pt-16 lg:pt-20 pb-4 flex justify-center bg-primary-100 bg-opacity-5"  id="our-courses">
      <div class="container mx-auto">

        <div class="block lg:flex justify-between items-center mb-10">
          <div class="mx-auto mb-4 lg:mb-0 px-6 md:px-10 lg:w-1/2">
            <p class="text-sm md:text-base xl:text-lg mb-1">
              Become a certified
            </p>

            <h1 class="text-3xl md:text-4xl 2xl:text-7xl lg:leading-snug leading-tight capitalize 2xl:max-w-xl max-w-sm font-normal text-primary-100">
              Creative tech professional
            </h1>

            <p class="text-sm md:text-base xl:text-lg mt-1 max-w-xl mb-12">
              Our academy is a certified training centre for professionals, students and
            companies. We conduct and train students in different courses with unique certification.
            </p>

            <a href="@/courses.html" class="text-base text-primary-100 font-medium py-3 px-6 md:px-10 border-2 border-primary-100
            hover:bg-primary-100 duration-500 ease-in-out hover:text-white">View our Courses
            </a>
          </div>

          <div class="lg:w-1/2 p-4">
            <img :src="require('@/assets/images/work-bg.png')" alt="" class="w-full pl-8 hidden lg:block" />
          </div>
        </div>

      </div>
    </section>

    <section class="pt-24 lg:pt-28 pb-32 px-6 md:px-10" id="reviews/faqs">
      <div>
          <div class="">
            <h1 class="md:text-3xl text-2xl font-normal capitalize mb-4 text-center text-primary-100 flex justify-center mx-auto">
              What They're Saying
            </h1>
            <div class="w-full py-3 flex justify-center items-center mx-auto">
              <div class="w-full md:w-2/3 xl:w-1/2 py-3 mx-auto border-y-2 border-black">
                <agile :autoplay="true" :infinte="true" :slidesToShow="1" :navButtons="false" :dots="false" class="m-0">
                  <div 
                    v-for="review in reviews" :key="review.id" class="flex justify-center mx-auto">
                    <UiCardsReviewcard class="slide" :review="review.review" :reviewer="review.reviewer" />
                  </div>
                </agile>
              </div>
            </div>
          </div>

          <div class="py-10 container mx-auto">
            <SectionsFaqsContainer />
            <div class="text-sm md:text-base xl:text-lg flex justify-center mx-auto mt-4">Have other questions? <span>
              <a href="https://wa.me/2348066600820" class="ml-2 font-normal text-primary-100 border-b-2 border-transparent hover:border-primary-100 duration-500 ease-in-out"> Contact Us!</a></span>
            </div>

          </div>
      </div>
    </section>

    <section class="container mx-auto relative z-10">
      <div class="bg-primary-100 p-10 md:flex items-center justify-around absolute raise -mt-32">
        <div class="mb-16 md:mb-0 md:w-3/5">
          <div class="text-left text-sm text-white md:text-sm xl:text-base mb-2">
            What are you waiting for?
          </div>
          <h2 class="xl:text-3xl text-xl md:text-2xl font-normal text -left text-white">
            Pick a course and join!
          </h2>
          <div class="text-left text-sm text-white md:text-sm xl:text-base mt-2">
            Join people around the world who are taking steps to better their future and become more relevant in the tech-centric world.
            We will equip you with the skills you need and be with you along every step of the way!
          </div>
        </div>

        <a href="/courses" class="text-white xl:text-lg xl:border-3 text-sm px-6 py-3 font-medium border-2 border-white hover:bg-white hover:text-primary-100 duration-500 ease-in-out">
          Register Now
        </a>      
      </div>
    </section>

    <SectionsCommonFooter class="pt-60 md:pt-40 lg:pt-32" />
  </div>
</template>

<script>

import {mapGetters} from 'vuex';

import { VueAgile } from 'vue-agile';

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

  components: {
    agile: VueAgile 
  },

  computed: {
    ...mapGetters({
      reviews : 'reviews/getReviews'
    })
  },

  methods: {
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
      this.$router.push({path:'/courses'})
    },
  },

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


br{
  content: "A" !important;
  display: block !important;
  margin-bottom: .65em !important;
}

div{
  user-select: none;
}

h1{
  color: #222222 !important;
}

p{
  color: #222222 !important;
}

.bg-gray-50{
  background-color: #f9f9f9 !important;
}

@media screen and (max-width: 400px) {
.raise{
  margin-top: -9rem;
}
}

</style>

