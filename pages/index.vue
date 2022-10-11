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
          <h1 class="font-semibold text-center lg:text-left leading-tight text-3xl md:text-5xl w-full lg:w-2/5 xl:w-1/3 2xl:text-6xl 2xl:leading-snug xl:leading-tight text-primary-100 md:leading-tight uppercase">Creating World Class Digital Solutions</h1>

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
        <div class="grid md:grid-cols-3 px-36 md:px-0 divide-y md:divide-y-0 md:divide-x divide-white text-white">
          <div class="py-10 md:my-0">
            <!-- <img :src="require('@/assets/images/icons/star.svg')" alt="" class="w-20 my-4 flex justify-center mx-auto"> -->
            <h1 class="text-3xl font-medium text-center text-white flex justify-center mx-auto">
              12+
            </h1>
            <p class="px-8 text-center text-base md:text-base xl:text-lg flex justify-center mx-auto ">
              Years of service
            </p>
          </div>

          <div class="py-10 md:my-0">
            <!-- <img :src="require('@/assets/images/icons/design.svg')" alt="" class="w-20 my-4 flex justify-center mx-auto"> -->
            <h1 class="text-3xl font-medium capitalize text-center text-white flex justify-center mx-auto">
              1500+
            </h1 >
            <p class="px-8 text-center text-base md:text-base xl:text-lg flex justify-center mx-auto ">Completed Projects</p>
          </div>

          <div class="py-10 md:my-0">
            <!-- <img :src="require('@/assets/images/icons/thumbs_up.svg')" alt="" class="w-20 my-4 flex justify-center mx-auto"> -->
            <h1 class="m-0 text-3xl font-medium capitalize text-center text-white flex justify-center mx-auto" >
              1000+
            </h1>
            <p class="text-center m-0 text-base md:text-base xl:text-lg flex justify-center mx-auto ">Satisfied Clients</p>
          </div>
        </div>
      </div>
    </section>

    <section id="who-we-are" class="random-bg pt-20 lg:pt-28 flex justify-center items-center px-6 md:px-10" >
      <div class="container mx-auto">
        <div class="grid grid-cols-1 xl:grid-cols-2 items-center">
          <div class="">
            <h1 class="font-semibold text-2xl md:text-3xl 2xl:text-4xl text-primary-100 md:leading-tight uppercase">
              We think as strategists.<br /> We do as creators.
            </h1>
            <p class="text-base md:text-base xl:text-lg">
              Insights & Innovation | Brand Strategy | Brand Design | Digital Experience
            </p>
          </div>

          <div class="grid md:grid-cols-2 gap-10 mt-16 xl:mt-0">
              <div class="p-8 bg-primary-100 bg-opacity-5 ">
                  <h1 class="md:text-3xl text-2xl font-normal capitalize text-left text-primary-100">Our Vision</h1>
                  <p class="mt-3 text-base md:text-base xl:text-lg">
                    A renowned technology company that helps in strategic branding and business development with a first class reputation.
                  </p>
              </div>
              <div  class="p-8 xl:p-4 xl:px-6 bg-gray-50">
                <h1 class="md:text-3xl text-2xl font-normal capitalize text-left text-primary-100">Our Mission</h1>
                <p class="mt-3 text-base md:text-base xl:text-lg">
                  Helping businesses grow through online promotion, campaigns, collaboration, and execution.
                  We experience success through the success of our clients.
                </p>
              </div>
          </div>
        </div>

        <div class="mt-20">
          <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 md:gap-5 items-center gap-3">
            <div>
              <h1 class="font-semibold text-2xl md:text-3xl 2xl:text-4xl text-primary-100 md:leading-tight uppercase">
                Our Core Values
              </h1>
              <p class="font-normal text-left text-sm md:text-base mt-2 xl:text-lg">
                We hold our values to the highest esteem. They define us, who we are, what we do and how we do it.
              </p>
            </div>

            <img :src="require('@/assets/images/values/ingenuity.svg')" alt="ingenuity">
            <img :src="require('@/assets/images/values/innovation.svg')" alt="innovation">
            <img :src="require('@/assets/images/values/integrity.svg')" alt="integrity">
            <img :src="require('@/assets/images/values/clarity.svg')" alt="clarity" class="block md:hidden lg:block" />
            <img :src="require('@/assets/images/values/consistency.svg')" alt="consistency" class="block md:hidden" />
<!--  -->
          </div>
        </div>
      </div>

    </section>

    <section id="our-services" class="pt-24 pb-16 lg:py-28">
      <div class="bg-gray-50 px-6 md:px-10">
        <div class="container mx-auto w-full py-10">
          <div class="grid grid-cols-5 items-center">
            <div class="col-span-2">
              <h1 class="text-base font-normal uppercase text-secondary-100 tracking-[.25rem]">Our Services</h1>
              <h1 class="font-semibold text-left text-2xl md:text-4xl w-full 2xl:text-5xl text-primary-100 capitalize mt-3">Full Service Creative Solutions Agency</h1>
            </div>

            <div class="mx-auto">
              <!-- <div class="h-0.5 bg-secondary-100 w-20"></div> -->
            </div>
            <p class="col-span-2">Added Digital Solutions is a full-service digital creative agency. Build, develop your brand and get results with Added Solutions.</p>
          </div>

          <div class="grid grid-cols-3">
            <div>
              <div>
              </div>
              <p></p>
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
