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

    <section class="w-full mb-12 lg:mb-0">
      <div class="hero-bg lg:h-screen h-fit">
        <div class="container pt-32 md:pt-44 2xl:md:pt-56 mx-auto px-6 md:px-10">
          <h1 class="font-semibold text-center lg:text-left leading-tight text-3xl md:text-5xl w-full lg:w-2/5 xl:w-1/3 2xl:text-6xl 2xl:leading-snug xl:leading-tight text-primary-100 md:leading-tight uppercase">Creating Experiences Through Design</h1>

          <p class="font-normal text-center lg:text-left my-4 text-base xl:text-lg w-full lg:w-2/5">We craft solutions that help connects you with your clients worldwide.</p>

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

        <div class="grid grid-cols-1 px-6 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white divide-opacity-20 text-white">
          
          <div class="py-8 w-full flex items-center justify-center mx-auto">
            <div class="w-1/2 md:w-2/3 mx-auto flex items-center">
              <h1 class="text-3xl lg:text-4xl font-medium text-white mr-4">
                500+
              </h1>
              <p class="text-base md:text-base xl:text-lg">
                Happy customers worldwide
              </p>
            </div>
          </div>

          <div class="py-8 w-full flex items-center justify-center mx-auto">
            <div class="w-1/2 md:w-2/3 mx-auto flex items-center">
              <h1 class="text-3xl lg:text-4xl font-medium mr-4 text-white">
                750k+
              </h1 >
              <p class="text-base md:text-base xl:text-lg">Hours Of Work Experience</p>
            </div>
          </div>

          <div class="py-8 w-full flex items-center justify-center mx-auto">
            <div class="w-1/2 md:w-2/3 mx-auto flex items-center">
              <h1 class="text-3xl lg:text-4xl font-medium text-white mr-4" >
                20+
              </h1>
              <p class="text-base xl:text-lg">Creative and Passionate Members</p>
            </div>
          </div>

        </div>

      </div>
    </section>

    <section id="who-we-are" class="random-bg pt-20 lg:pt-28 pb-16 flex justify-center items-center px-6 md:px-10" >
      <div class="container mx-auto">
        <div class="grid grid-cols-1 xl:grid-cols-3 items-center">
          <div class="xl:col-span-1">
            <h1 class="text-base font-normal uppercase text-secondary-100 tracking-[.25rem]">Who We Are</h1>
            <h1 class="font-semibold text-2xl md:text-3xl 2xl:text-4xl text-primary-100 md:leading-tight uppercase">
              We think as strategists.<br /> We do as creators.
            </h1>
          </div>

          <div class="xl:col-span-2 grid md:grid-cols-2 gap-10 mt-16 xl:mt-0">
              <div class="p-8 bg-primary-100 bg-opacity-5 ">
                  <h1 class="md:text-3xl text-2xl font-normal capitalize text-left text-primary-100">Our Vision</h1>
                  <p class="mt-3 text-base md:text-base">
                    A renowned technology company that helps in strategic branding and business development with a first class reputation.
                  </p>
              </div>
              <div  class="p-8 xl:p-4 xl:px-6 bg-gray-50">
                <h1 class="md:text-3xl text-2xl font-normal capitalize text-left text-primary-100">Our Mission</h1>
                <p class="mt-3 text-base md:text-base">
                  Helping businesses grow through online promotion, campaigns, collaboration, and execution.
                  We experience success through the success of our clients.
                </p>
              </div>
          </div>
        </div>

        <div class="mt-20">
          <div class="w-5/6 lg:w-1/2 xl:w-1/3">
            <h1 class="md:text-3xl text-2xl font-normal capitalize text-left text-primary-100 m-0">
              Our Core Values
            </h1>
            <p class="font-normal text-left text-base">
              We hold our values to the highest esteem. They define us, who we are, what we do and how we do it.
            </p>
          </div>

          <div class="mt-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 items-center gap-5 md:gap-7 lg:gap-2">
            <img :src="require('@/assets/images/values/respect.svg')" alt="respect" />
            <img :src="require('@/assets/images/values/care.svg')" alt="care" />
            <img :src="require('@/assets/images/values/believe.svg')" alt="believe" />
            <img :src="require('@/assets/images/values/creative.svg')" alt="creativity">
            <img :src="require('@/assets/images/values/reading.svg')" alt="reading">
            <img :src="require('@/assets/images/values/innovation.svg')" alt="innovation">
          </div>
        </div>
      </div>

    </section>

    <section id="our-services" class="">
      <div class="bg-gray-50 px-6 md:px-10">
        <div class="container mx-auto w-full pt-24 pb-16 lg:py-28">
          <div class="">
            <div class="w-full md:w-1/2 lg:w-1/3">
              <h1 class="text-base font-normal uppercase text-secondary-100 tracking-[.25rem]">Our Services</h1>
              <h1 class="font-semibold text-2xl md:text-3xl 2xl:text-4xl text-primary-100 md:leading-tight uppercase">Full Service Creative Solutions Agency</h1>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 md:gap-x-24 lg:gap-x-24 gap-y-10 mt-16 px-10 md:px-0">
            <div>
              <h1 class="text-xl m-0 text-secondary-100">01</h1>
              <h1 class="md:text-3xl text-2xl font-normal capitalize text-primary-100 mt-3">Branding & Design</h1>
              <p class="text-secondary-100">The goal of branding is to set apart an organization apart from it's competitors. Getting your brand design right is a very important step, one we are ready to take with you.</p>
            </div>

            <div>
              <h1 class="text-xl m-0 text-secondary-100">02</h1>
              <h1 class="md:text-3xl text-2xl font-normal capitalize text-primary-100 mt-3">Web Development</h1>
              <p class="text-secondary-100">With millions of websites online, you need a creative website that stands out and  helps your business grow. We customize websites with as many functionalities as needed. </p>
            </div>

            <div>
              <h1 class="text-xl m-0 text-secondary-100">03</h1>
              <h1 class="md:text-3xl text-2xl font-normal capitalize text-primary-100 mt-3">Social Media Marketing</h1>
              <p class="text-secondary-100">Social media marketing is a critical element in staying connected with your audience and clients. We help you stay connected with your audience.</p>
            </div>

            <div>
              <h1 class="text-xl m-0 text-secondary-100">04</h1>
              <h1 class="md:text-3xl text-2xl font-normal capitalize text-primary-100 mt-3">Content Creation</h1>
              <p class="text-secondary-100">To connect with your audiences, good content is necessary. We bring the content to you in any preferred form; videos, reels, blogs etc.</p>
            </div>

            <div>
              <h1 class="text-xl m-0 text-secondary-100">05</h1>
              <h1 class="md:text-3xl text-2xl font-normal capitalize text-primary-100 mt-3">Video</h1>
              <p class="text-secondary-100">Video is probably the most engaging form of content. However, getting it could be a problem. From the preparation to the shooting and editing. You don't have to worry anymore; we got you covered.</p>
            </div>

            <div>
              <h1 class="text-xl m-0 text-secondary-100">06</h1>
              <h1 class="md:text-3xl text-2xl font-normal capitalize text-primary-100 mt-3">Training</h1>
              <p class="text-secondary-100">We are in the digital age where having technical knowledge and skills is very importaint. At ADS, we offer a top notch training in any digital skill of your choice.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="grain-bg pt-20 lg:pt-28 pb-16 px-6 md:px-10">
      <div class="container mx-auto">

        <div class="block md:flex items-center justify-center gap-10">
          <img :src="require('@/assets/images/solutions.jpg')" class="hidden md:block md:w-1/2 lg:w-1/4" alt="">
          <img :src="require('@/assets/images/solutions_large.jpg')" class="block md:hidden" alt="">
          <div class="mt-8 md:mt-0 w-full md:w-1/2">
            <h1 class="text-base font-normal uppercase text-secondary-100 tracking-[.25rem]">Why choose us?</h1>
            <h1 class="font-semibold text-2xl md:text-3xl 2xl:text-4xl text-primary-100 md:leading-tight uppercase w-full">Exceptional Solutions for Exceptional businesses</h1>
            <p class="text-secondary-100 lg:w-3/4">We are dedicated to going to the extra mile and more. Out of the box thinking is our forte.</p>

            <div class="grid grid-cols-2 gap-4 mt-8">
              <div class="flex gap-4 items-center bg-gray-50 p-2 md:p-4">
                <img :src="require('@/assets/images/icons/checked_icon.svg')" class="w-6 h-6" alt="">
                <p class="text-secondary-100">Fluid collaboration</p>
              </div>

              <div class="flex gap-4 items-center bg-gray-50 p-2 md:p-4">
                <img :src="require('@/assets/images/icons/checked_icon.svg')" class="w-6 h-6" alt="">
                <p class="text-secondary-100">Commited timelines</p>
              </div>

              <div class="flex gap-4 items-center bg-gray-50 p-2 md:p-4">
                <img :src="require('@/assets/images/icons/checked_icon.svg')" class="w-6 h-6" alt="">
                <p class="text-secondary-100">Passionate approach</p>
              </div>

              <div class="flex gap-4 items-center bg-gray-50 p-2 md:p-4">
                <img :src="require('@/assets/images/icons/checked_icon.svg')" class="w-6 h-6" alt="">
                <p class="text-secondary-100">Creative Innovation</p>
              </div>
            </div>
          </div>
        </div>

        <div class="block md:flex items-center justify-center gap-10 mt-24 flex-row-reverse">
          <img :src="require('@/assets/images/process.jpg')" class="hidden md:block md:w-1/2 lg:w-1/4" alt="">
          <img :src="require('@/assets/images/process_large.jpg')" class="block md:hidden" alt="">
          <div class="w-full md:w-1/2 mt-8 md:mt-0">
            <h1 class="text-base font-normal uppercase text-secondary-100 tracking-[.25rem]">our workflow</h1>
            <h1 class="font-semibold text-2xl md:text-3xl 2xl:text-4xl text-primary-100 md:leading-tight uppercase">We love what we do</h1>
            <p class="text-secondary-100">We carry out due process to achieve maximum results for the development of your business </p>


            <div class="grid grid-cols-2 gap-4 mt-6 md:mt-8">
              <div class="flex gap-4 items-center bg-gray-50 p-2 md:p-4">
                <img :src="require('@/assets/images/icons/checked_icon.svg')" class="w-6 h-6" alt="">
                <p class="text-secondary-100">Research</p>
              </div>

              <div class="flex gap-4 items-center bg-gray-50 p-2 md:p-4">
                <img :src="require('@/assets/images/icons/checked_icon.svg')" class="w-6 h-6" alt="">
                <p class="text-secondary-100">Data Collection</p>
              </div>

              <div class="flex gap-4 items-center bg-gray-50 p-2 md:p-4">
                <img :src="require('@/assets/images/icons/checked_icon.svg')" class="w-6 h-6" alt="">
                <p class="text-secondary-100">Targeting</p>
              </div>

              <div class="flex gap-4 items-center bg-gray-50 p-2 md:p-4">
                <img :src="require('@/assets/images/icons/checked_icon.svg')" class="w-6 h-6" alt="">
                <p class="text-secondary-100">Problem Solving</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>

    <section class="pt-20 lg:pt-28 pb-16 px-6 md:px-10 bg-gray-50">
      <div class="container mx-auto">
        <div class="w-full md:w-3/4 lg:w-1/2 mx-auto">
          <h1 class="text-base font-normal uppercase text-secondary-100 tracking-[.25rem] mx-auto text-center">Contact Us</h1>
          <h1 class="mt-2 mb-6 font-semibold text-center text-2xl md:text-3xl 2xl:text-4xl text-primary-100 md:leading-tight uppercase">Let's Boost Your Business With Added Digital Solutions</h1>
          <UiButtonsPrimary button_title="Get Started" class="mx-auto w-fit" />
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
      window.scroll({
        top: 0,
        behavior: 'smooth'
      })
    },

    whoWeAre(){
      // this.$router.push({path:'/#who-we-are'})
      this.is_revealed = false
      window.scroll({
        top: 750,
        behavior: 'smooth'
      })
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

.grain-bg{
  /* background: url('../assets/images/hero-bg.jpg'); */
  background-position: center;
  background-size: contain;
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
