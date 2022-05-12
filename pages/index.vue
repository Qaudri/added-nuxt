<template>
  <div class="w-full">
    <SectionsCommonHeader >
      <div>
        <UiSharedLogo @emitReload="reloadThisPage" />
      </div>

      <template v-slot:menuitems >
        <UiButtonsSecondary @Pushto="whoWeAre" button_title="Who We Are" class="lg:mx-4 lg:my-0 my-4 ml-10 md:ml-0"/>
        <UiButtonsSecondary @Pushto="whatWeDo" button_title="What We Do" class="lg:mx-4 lg:my-0 my-4 ml-10 md:ml-0"/>
        <UiButtonsSecondary @Pushto="ourServices" button_title="Our Services" class="lg:mx-4 lg:my-0 my-4 ml-10 md:ml-0"/>
        <UiButtonsSecondary @Pushto="Academy" button_title="Academy" class="lg:mx-4 lg:my-0 my-4 ml-10 md:ml-0" />
        <UiButtonsPrimary button_title="Let's Talk" class="lg:ml-4 my-10 lg:my-0 mx-6 lg:mr-0 " />
      </template>
    </SectionsCommonHeader>

    <section class="hero-bg w-full py-32 md:py-44 px-10">

      <div class="flex items-center">

        <div class="mx-auto">
          <h1 class="font-bold leading-tight text-4xl md:text-5xl max-w-none 2xl:text-7xl 2xl:max-w-4xl 2xl:leading-snug xl:leading-tight text-center text-black md:max-w-2xl md:leading-tight mx-auto">
            We help businesses reach their peaks
          </h1>

          <p class="font-normal xl:text-xl xl:max-w-4xl 2xl:max-w-4xl text-base my-4 md:text-lg text-center md:max-w-2xl mx-auto">
            With our vetted team of professionals, we help design and craft solutions tailored to match
            your business and connect you with clients worldwide.
          </p>

          <div class="max-w-fit mx-auto mt-8 justify-center items-center flex">
              <a href="#see-how"
              class="font-medium xl:border-3 md:text-lg 2xl:text-2xl p-0.5 hover:text-primary-100 border-b-2 hover:border-primary-100 border-transparent duration-500 ease-in-out mx-4">
                See How
              </a>

              <a href="https://bit.ly/3KPTsPB" target="blank"
                class="font-medium 2xl:text-2xl md:text-lg hover:text-white text-primary-100 md:px-4 px-3 py-2 hover:bg-primary-100 border-2 border-primary-100 mx-4 duration-500 ease-in-outdr">
                Let's Talk
              </a>

          </div>
        </div>

      </div>

    </section>

    <section  id="who-we-are" class="pt-20 lg:pt-28 flex justify-center items-center container mx-auto px-10" >
      <div class="">
        <div>
          <h1 class="md:text-4xl text-3xl font-bold uppercase text-center xl:text-left text-primary-100 flex justify-center mx-auto ">
            Who We Are
          </h1>
          <p class="text-center text-base md:text-lg xl:text-lg md:max-w-screen-md lg:max-w-1/2 flex justify-center mx-auto my-3">
            We're a growing team of digital solutions experts and thought leaders — full of personality minus the ego. We're the wearer of many hats dedicated to helping companies like yours grow.  
          </p>

          <div class="block md:flex justify-evenly mt-14 xl:justify-evenly">
            <div class="my-10 md:my-0">
              <img :src="require('@/assets/images/icons/star.svg')" alt="" class="w-20 my-4 flex justify-center mx-auto">
              <h1 class="md:text-4xl text-3xl font-bold uppercase text-center text-primary-100 flex justify-center mx-auto">
                12+
              </h1>
              <p class="px-8 text-center text-base md:text-lg xl:text-lg flex justify-center mx-auto mt-2">
                Years of service
              </p>
            </div>

            <div class="my-10 md:my-0">
              <img :src="require('@/assets/images/icons/courses/design.svg')" alt="" class="w-20 my-4 flex justify-center mx-auto">
              <h1 class="md:text-4xl text-3xl font-bold uppercase text-center text-primary-100 flex justify-center mx-auto">
                1500+
              </h1 >
              <p class="px-8 text-center text-base md:text-lg xl:text-lg flex justify-center mx-auto mt-2">Completed Projects</p>
            </div>

            <div class="my-10 md:my-0">
              <img :src="require('@/assets/images/icons/thumbs_up.svg')" alt="" class="w-20 my-4 flex justify-center mx-auto">
              <h1 class="md:text-4xl text-3xl font-bold uppercase text-center text-primary-100 flex justify-center mx-auto" >
                1000+
              </h1>
              <p class="text-center text-base md:text-lg xl:text-lg flex justify-center mx-auto mt-2">Satisfied Clients</p>
            </div>
          </div>
        </div>

        <div class="mt-16">

          <div >
            <h1 class="md:text-4xl text-3xl font-bold uppercase text-left text-primary-100 mx-auto flex justify-center">
              Our Core Values
            </h1>
            <div class="grid grid-cols-2 md:grid-cols-3 gap-6 mt-3">
              <div class="flex items-center p-2 bg-gray-50">
                <img :src="require('@/assets/images/icons/checked_icon.svg')" alt="" class="w-8">
                <p class="mx-4 text-base md:text-lg xl:text-lg">Ingenuity</p>
              </div>

              <div class="flex items-center p-2 bg-gray-50">
                <img :src="require('@/assets/images/icons/checked_icon.svg')" alt="" class="w-8">
                <p class="mx-4 text-base md:text-lg xl:text-lg">Innovation</p>
              </div>

              <div class="flex items-center p-2 bg-gray-50">
                <img :src="require('@/assets/images/icons/checked_icon.svg')" alt="" class="w-8">
                <p class="mx-4 text-base md:text-lg xl:text-lg">Integrity</p>
              </div>

              <div class="flex items-center p-2 bg-gray-50">
                <img :src="require('@/assets/images/icons/checked_icon.svg')" alt="" class="w-8">
                <p class="mx-4 text-base md:text-lg xl:text-lg">Transparency</p>
              </div>

              <div class="flex items-center p-2 bg-gray-50">
                <img :src="require('@/assets/images/icons/checked_icon.svg')" alt="" class="w-8">
                <p class="mx-4 text-base md:text-lg xl:text-lg">Consistency</p>
              </div>

              <div class="flex items-center p-2 bg-gray-50">
                <img :src="require('@/assets/images/icons/checked_icon.svg')" alt="" class="w-8">
                <p class="mx-4 text-base md:text-lg xl:text-lg">Diversity</p>
              </div>
            </div>
          </div>

          <div class="grid md:grid-cols-2 gap-10 mt-16">
            <div class="p-6 px-8 border bg-primary-100 bg-opacity-5 shadow-lg">
                <h1 class="md:text-4xl text-3xl font-bold uppercase text-left text-primary-100">Our Vision</h1>
                <p class="mt-3 text-base md:text-lg xl:text-lg">
                  A renowned technology company that helps in strategic branding and business development with a first class reputation.
                </p>
            </div>
            <div  class="p-6 px-8 xl:p-4 xl:px-6 border shadow-lg bg-secondary-100 bg-opacity-5">
              <h1 class="md:text-4xl text-3xl font-bold uppercase text-left text-primary-100">Our Mission</h1>
              <p class="mt-3 text-base md:text-lg xl:text-lg">
                Helping businesses grow through online promotion, campaigns, collaboration, and execution.
                We experience success through the success of our clients.
              </p>
            </div>
          </div>

        </div>

      </div>

    </section>

    <section id="our-services" class="flex items-center container mx-auto justify-center px-10 pt-20 pb-16 lg:py-28">
      <div>
          <div>
            <h1 class="md:text-4xl text-3xl font-bold uppercase text-center text-primary-100 flex justify-center mx-auto">
              Our Services                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
            </h1>

            <div class="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-10  w-full">
              <div class="bg-gray-50 md:h-20 flex items-center p-4 md:p-6 w-full">
                <img :src="require('@/assets/images/icons/checked_icon.svg')" class="w-8" alt="">
                <p class="mx-4 md:mx-6 text-left text-base md:text-lg xl:text-lg ">Graphics Design</p>
              </div>

              <div class="bg-gray-50 md:h-20 flex items-center p-6 w-full">
                <img :src="require('@/assets/images/icons/checked_icon.svg')" class="w-8" alt="">
                <p class="mx-4 md:mx-6 text-left text-base md:text-lg xl:text-lg ">Web Design</p>
              </div>

              <div class="bg-gray-50 md:h-20 flex items-center p-6 w-full">
                <img :src="require('@/assets/images/icons/checked_icon.svg')" class="w-8" alt="">
                <p class="mx-4 md:mx-6 text-left text-base md:text-lg xl:text-lg ">Web Development</p>
              </div>

              <div class="bg-gray-50 md:h-20 flex items-center p-6 w-full">
                <img :src="require('@/assets/images/icons/checked_icon.svg')" class="w-8" alt="">
                <p class="mx-4 md:mx-6 text-left text-base md:text-lg xl:text-lg ">Video Editing</p>
              </div>

              <div class="bg-gray-50 md:h-20 flex items-center p-6 w-full">
                <img :src="require('@/assets/images/icons/checked_icon.svg')" class="w-8" alt="">
                <p class="mx-4 md:mx-6 text-left text-base md:text-lg xl:text-lg ">Freelancing</p>
              </div>

              <div class="bg-gray-50 md:h-20 flex items-center p-6 w-full">
                <img :src="require('@/assets/images/icons/checked_icon.svg')" class="w-8" alt="">
                <p class="mx-4 md:mx-6 text-left text-base md:text-lg xl:text-lg ">Printing</p>
              </div>

              <div class="bg-gray-50 md:h-20 flex items-center p-6 w-full">
                <img :src="require('@/assets/images/icons/checked_icon.svg')" class="w-8" alt="">
                <p class="mx-4 md:mx-6 text-left text-base md:text-lg xl:text-lg ">Amazon KDP</p>
              </div>

              <div class="bg-gray-50 md:h-20 flex items-center p-6 w-full">
                <img :src="require('@/assets/images/icons/checked_icon.svg')" class="w-8" alt="">
                <p class="mx-4 md:mx-6 text-left text-base md:text-lg xl:text-lg ">E-Commerce</p>
              </div>
            </div>
          </div>
      </div>
    </section>
    
    <SectionsCommonFooter />
  </div>
</template>

<script>
export default {
  name: 'IndexPage',

  methods: {
    reloadThisPage(){
      this.$router.push({path:'/'})
    },

    whoWeAre(){
      this.$router.push({path:'/#who-we-are'})
    },

    whatWeDo(){
      this.$router.push({path:'/#what-we-do'})
    },

    ourServices(){
      this.$router.push({path:'/#our-services'})
    },

    Academy(){
      this.$router.push({path:'/academy'})
    },
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;0,700;1,400&display=swap');

body{
  font-family: "Poppins", sans-serif;
  overflow-x: hidden;
}

.hero-bg{
  background: url(../assets/images/bg.jpg);
  background-size: cover;
  background-repeat: no-repeat;
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
  background-color: #f7f7f7 !important;
}
</style>
