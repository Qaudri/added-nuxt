<template>
  <div class="w-full">
    <SectionsCommonHeader >
      <div>
        <UiSharedLogo @emitReload="reloadThisPage" />
      </div>

      <template v-slot:menuitems >
        <UiButtonsSecondary @Pushto="whoWeAre" button_title="Who We Are" class="lg:mx-4 lg:my-0 my-4"/>
        <UiButtonsSecondary @Pushto="ourServices" button_title="Our Services" class="lg:mx-4 lg:my-0 my-4"/>
        <UiButtonsSecondary @Pushto="Academy" button_title="Academy" class="lg:mx-4 lg:my-0 my-4" />

        <div class="my-10 lg:my-0">
          <a href="https://wa.me/message/QAXPPW4FO55FM1" target="blank" class="text-primary-100 xl:text-xl text-base px-4 py-2 font-normal border-2 2xl:border-3 border-primary-100 hover:bg-primary-100 hover:text-white duration-500 ease-in-out">Let's Talk</a>
        </div>

      </template>
    </SectionsCommonHeader>

    <section class="w-full">
      <div class="hero-bg lg:h-screen h-fit">
        <div class="container pt-32 md:pt-44 2xl:md:pt-56 mx-auto px-6 md:px-10 mb-12">
          <h1 class="font-semibold text-center lg:text-left leading-tight text-3xl md:text-5xl w-full lg:w-2/5 xl:w-1/3 2xl:text-6xl 2xl:leading-snug xl:leading-tight text-primary-100 md:leading-tight uppercase">Creating World Class Digital Solutions</h1>

          <p class="font-normal text-center lg:text-left text-sm my-4 md:text-base xl:text-lg w-full lg:w-2/5">We craft solutions that help connects you with your clients worldwide.</p>

          <div class="mt-8 items-center justify-center lg:justify-start flex">
            <a href="#see-how"
            class="font-medium xl:border-3 md:text-base 2xl:text-2xl hover:text-primary-100 border-b-2 hover:border-primary-100 border-transparent duration-500 ease-in-out mr-4">
              Get Started
            </a>

            <a href="https://wa.me/message/QAXPPW4FO55FM1" target="blank"
              class="text-primary-100 xl:text-xl text-base px-4 py-2 font-normal border-2 2xl:border-3 border-primary-100 hover:bg-primary-100 hover:text-white duration-500 ease-in-out mr-4">
              Let's talk
            </a>

          </div>
        </div>
      </div>

      <div class="h-screen bg-gray-50 w-1/3 xl:w-1/4 right-0 hidden lg:block absolute top-0"></div>
      <!-- <agile :autoplay="true" :infinte="true" :slidesToShow="1" :navButtons="false" :dots="false"> -->
        <div class="">
          <img class="w-1/4 absolute right-60 xl:right-52 top-1/4 hidden lg:block" :src="require('@/assets/images/01.jpg')" alt="">
        </div>
      <!-- </agile> -->

    </section>

    <section class="bg-primary-100 w-full">
      <div class="container mx-auto py-0 md:py-10">
        <div class="grid md:grid-cols-3 px-36 md:px-0 divide-y md:divide-y-0 md:divide-x divide-white text-white">
          <div class="py-10 md:my-0">
            <!-- <img :src="require('@/assets/images/icons/star.svg')" alt="" class="w-20 my-4 flex justify-center mx-auto"> -->
            <h1 class="text-3xl font-medium text-center text-white flex justify-center mx-auto">
              12+
            </h1>
            <p class="px-8 text-center text-sm md:text-base xl:text-lg flex justify-center mx-auto ">
              Years of service
            </p>
          </div>

          <div class="py-10 md:my-0">
            <!-- <img :src="require('@/assets/images/icons/design.svg')" alt="" class="w-20 my-4 flex justify-center mx-auto"> -->
            <h1 class="text-3xl font-medium capitalize text-center text-white flex justify-center mx-auto">
              1500+
            </h1 >
            <p class="px-8 text-center text-sm md:text-base xl:text-lg flex justify-center mx-auto ">Completed Projects</p>
          </div>

          <div class="py-10 md:my-0">
            <!-- <img :src="require('@/assets/images/icons/thumbs_up.svg')" alt="" class="w-20 my-4 flex justify-center mx-auto"> -->
            <h1 class="m-0 text-3xl font-medium capitalize text-center text-white flex justify-center mx-auto" >
              1000+
            </h1>
            <p class="text-center m-0 text-sm md:text-base xl:text-lg flex justify-center mx-auto ">Satisfied Clients</p>
          </div>
        </div>
      </div>
    </section>

    <section id="who-we-are" class="random-bg pt-20 lg:pt-28 flex justify-center items-center px-6 md:px-10" >
      <div class="container mx-auto">
        <div>
          <h1 class="font-semibold text-2xl md:text-3xl 2xl:text-4xl text-primary-100 md:leading-tight uppercase">
            We think as strategists.<br /> We do as creators.
          </h1>
          <p class="text-sm md:text-base xl:text-lg">
            Insights & Innovation | Brand Strategy | Brand Design | Digital Experience
          </p>
        </div>

        <div class="grid md:grid-cols-2 gap-10 mt-16">
            <div class="p-8 bg-primary-100 bg-opacity-5 ">
                <h1 class="md:text-3xl text-2xl font-normal capitalize text-left text-primary-100">Our Vision</h1>
                <p class="mt-3 text-sm md:text-base xl:text-lg">
                  A renowned technology company that helps in strategic branding and business development with a first class reputation.
                </p>
            </div>
            <div  class="p-8 xl:p-4 xl:px-6 bg-gray-50">
              <h1 class="md:text-3xl text-2xl font-normal capitalize text-left text-primary-100">Our Mission</h1>
              <p class="mt-3 text-sm md:text-base xl:text-lg">
                Helping businesses grow through online promotion, campaigns, collaboration, and execution.
                We experience success through the success of our clients.
              </p>
            </div>
          </div>

        <div class="mt-16">

          <div >
            <h1 class="md:text-3xl text-2xl font-normal capitalize text-left text-primary-100 mx-auto flex justify-center">
              Our Core Values
            </h1>
            <div class="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mt-3 container mx-auto">
              <div class="flex items-center p-2 bg-gray-50">
                <img :src="require('@/assets/images/icons/checked_icon.svg')" alt="" class="w-6 md:w-8">
                <p class="mx-2 md:mx-4 text-sm md:text-base xl:text-lg">Ingenuity</p>
              </div>

              <div class="flex items-center p-2 bg-gray-50">
                <img :src="require('@/assets/images/icons/checked_icon.svg')" alt="" class="w-6 md:w-8">
                <p class="mx-2 md:mx-4 text-sm md:text-base xl:text-lg">Innovation</p>
              </div>

              <div class="flex items-center p-2 bg-gray-50">
                <img :src="require('@/assets/images/icons/checked_icon.svg')" alt="" class="w-6 md:w-8">
                <p class="mx-2 md:mx-4 text-sm md:text-base xl:text-lg">Integrity</p>
              </div>

              <div class="flex items-center p-2 bg-gray-50">
                <img :src="require('@/assets/images/icons/checked_icon.svg')" alt="" class="w-6 md:w-8">
                <p class="mx-2 md:mx-4 text-sm md:text-base xl:text-lg">Clarity</p>
              </div>

              <div class="flex items-center p-2 bg-gray-50">
                <img :src="require('@/assets/images/icons/checked_icon.svg')" alt="" class="w-6 md:w-8">
                <p class="mx-2 md:mx-4 text-sm md:text-base xl:text-lg">Consistency</p>
              </div>

              <div class="flex items-center p-2 bg-gray-50">
                <img :src="require('@/assets/images/icons/checked_icon.svg')" alt="" class="w-6 md:w-8">
                <p class="mx-2 md:mx-4 text-sm md:text-base xl:text-lg">Diversity</p>
              </div>
            </div>
          </div>

        </div>

      </div>

    </section>

    <section id="our-services" class="flex items-center container mx-auto justify-center px-6 md:px-10 pt-20 pb-16 lg:py-28">
      <div>
          <div>
            <h1 class="md:text-3xl text-2xl font-normal capitalize text-center text-primary-100 flex justify-center mx-auto">
              Our Services              
            </h1>

            <div class="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-10  w-full">
              <div class="bg-gray-50 md:h-20 flex items-center p-4 md:p-6 w-full">
                <img :src="require('@/assets/images/icons/checked_icon.svg')" class="w-6 md:w-8" alt="">
                <p class="mx-2 md:mx-6 text-left text-sm md:text-base xl:text-lg ">Graphics Design</p>
              </div>

              <div class="bg-gray-50 md:h-20 flex items-center p-6 w-full">
                <img :src="require('@/assets/images/icons/checked_icon.svg')" class="w-6 md:w-8" alt="">
                <p class="mx-2 md:mx-6 text-left text-sm md:text-base xl:text-lg ">Web Design</p>
              </div>

              <div class="bg-gray-50 md:h-20 flex items-center p-6 w-full">
                <img :src="require('@/assets/images/icons/checked_icon.svg')" class="w-6 md:w-8" alt="">
                <p class="mx-2 md:mx-6 text-left text-sm md:text-base xl:text-lg ">Web Development</p>
              </div>

              <div class="bg-gray-50 md:h-20 flex items-center p-6 w-full">
                <img :src="require('@/assets/images/icons/checked_icon.svg')" class="w-6 md:w-8" alt="">
                <p class="mx-2 md:mx-6 text-left text-sm md:text-base xl:text-lg ">Video Editing</p>
              </div>

              <div class="bg-gray-50 md:h-20 flex items-center p-6 w-full">
                <img :src="require('@/assets/images/icons/checked_icon.svg')" class="w-6 md:w-8" alt="">
                <p class="mx-2 md:mx-6 text-left text-sm md:text-base xl:text-lg ">Freelancing</p>
              </div>

              <div class="bg-gray-50 md:h-20 flex items-center p-6 w-full">
                <img :src="require('@/assets/images/icons/checked_icon.svg')" class="w-6 md:w-8" alt="">
                <p class="mx-2 md:mx-6 text-left text-sm md:text-base xl:text-lg ">Printing</p>
              </div>

              <div class="bg-gray-50 md:h-20 flex items-center p-6 w-full">
                <img :src="require('@/assets/images/icons/checked_icon.svg')" class="w-6 md:w-8" alt="">
                <p class="mx-2 md:mx-6 text-left text-sm md:text-base xl:text-lg ">Amazon KDP</p>
              </div>

              <div class="bg-gray-50 md:h-20 flex items-center p-6 w-full">
                <img :src="require('@/assets/images/icons/checked_icon.svg')" class="w-6 md:w-8" alt="">
                <p class="mx-2 md:mx-6 text-left text-sm md:text-base xl:text-lg ">E-Commerce</p>
              </div>
            </div>
          </div>
      </div>
    </section>
    
    <SectionsCommonFooter />
  </div>
</template>

<script>
  import { VueAgile } from 'vue-agile';
export default {
  name: 'IndexPage',

  components: {
    agile: VueAgile 
  },

  data(){
    return {
      menuToggle: false,
      carousel: [
        {
          id: 1,
          title: "First one",
          source: require('@/assets/images/01.jpg')
        },

        {
          id: 2,
          title: "Second one",
          source: require('@/assets/images/02.jpg')
        },

        {
          id: 3,
          title: "Third one",
          source: require('@/assets/images/03.jpg')
        },

        {
          id: 4,
          title: "Fourth one",
          source: require('@/assets/images/04.jpg')
        },
      ]
    }
  },

  methods: {
    reloadThisPage(){
      this.$router.push({path:'/'})
      this.is_revealed = false
    },

    whoWeAre(){
      this.$router.push({path:'/#who-we-are'})
      this.is_revealed = false
    },

    whatWeDo(){
      this.$router.push({path:'/#what-we-do'})
      this.is_revealed = false
    },

    ourServices(){
      this.$router.push({path:'/#our-services'})
      this.is_revealed = false
    },

    Academy(){
      this.$router.push({path:'/academy'})
      this.is_revealed = false
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
  margin-bottom: .2em !important;
}

div{
  user-select: none;
}

.hero-bg{
  background: url('../assets/images/Black-Animation-Background.svg');
  background-position: center;
  background-size: cover;
}

.random-bg {
  background: url('../assets/images/random.svg');
  background-position: center;
  background-size: cover;
}

@media screen and (min-width: 1024px){
  .hero-text{
    position: sticky;
    width: 50vw;
  }

}

@media screen and (max-width: 375px){
  .extra{
    display: block !important;
  }

  p{
    font-size: small !important;
    width: 100%;

  }

  h1{
    font-size: x-large !important;
  }

  .grid > div{
    padding: .5rem !important;
  }

}

.width{
  width: 24rem !important;
  padding-right: 1.5rem !important;
  height: 26rem !important;
}

.bg-gray-50{
  background-color: #f9f9f9 !important;
}
</style>
