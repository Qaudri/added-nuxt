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
          <a href="https://wa.me/message/QAXPPW4FO55FM1" target="blank" class="text-primary-100  text-sm px-4 py-2 font-medium border-2 2xl:border-3 border-primary-100 hover:bg-primary-100 hover:text-white duration-500 ease-in-out">Let's Talk</a>
        </div>

      </template>
    </SectionsCommonHeader>

    <section class="w-full pt-32 md:pt-44 hero-bg">

      <div class="">

        <!-- <div class="mx-auto">
          <div class="typewriter font-normal leading-tight text-2xl md:text-3xl max-w-none 2xl:text-7xl 2xl:max-w-4xl 2xl:leading-snug xl:leading-tight text-center text-primary-100 md:max-w-2xl md:leading-tight mx-auto">
            We help 
            <span class="typed-text">{{typeValue}}</span>
            <span class="blinking-cursor">|</span>
            <span class="cursor" :class="{ typing: typeStatus }">&nbsp;</span>
          </div>
          <p class="font-normal xl:max-w-4xl 2xl:max-w-4xl text-sm my-4 md:text-base text-center md:max-w-2xl mx-auto">
            With our vetted team of professionals, we help design and craft solutions tailored to match
            your business and connect you with clients worldwide.
          </p>

          <div class="max-w-fit mx-auto mt-8 justify-center items-center flex">
              <a href="#see-how"
              class="font-medium xl:border-3 md:text-base 2xl:text-2xl p-0.5 hover:text-primary-100 border-b-2 hover:border-primary-100 border-transparent duration-500 ease-in-out mx-4">
                See How
              </a>

              <a href="https://wa.me/message/QAXPPW4FO55FM1" target="blank"
                class="font-normal 2xl:text-2xl md:text-base hover:text-white text-primary-100 md:px-4 px-3 py-2 hover:bg-primary-100 border-2 border-primary-100 mx-4 duration-500 ease-in-out">
                Let's Talk
              </a>

          </div>
        </div> -->

        <div class="container mx-auto px-6 md:px-10 mb-12">
          <h1 class="font-semibold leading-tight text-3xl md:text-5xl md:w-1/2 w-full lg:w-2/5 2xl:text-7xl 2xl:leading-snug xl:leading-tight text-primary-100 md:leading-tight uppercase">Creating World Class Digital Solutions</h1>

          <p class="font-normal text-sm my-4 md:text-base md:w-1/2 w-full lg:w-2/5 2xl:text-7xl">We help design and craft solutions tailored to match your business and connect you with clients worldwide.</p>

          <div class="mt-8 items-center flex">
            <a href="#see-how"
            class="font-medium xl:border-3 md:text-base 2xl:text-2xl hover:text-primary-100 border-b-2 hover:border-primary-100 border-transparent duration-500 ease-in-out mr-4">
              Get Started
            </a>

            <a href="https://wa.me/message/QAXPPW4FO55FM1" target="blank"
              class="font-normal 2xl:text-2xl md:text-base hover:text-white text-primary-100 md:px-4 px-3 py-2 hover:bg-primary-100 border-2 border-primary-100 mx-4 duration-500 ease-in-out">
              Let's talk
            </a>

          </div>
        </div>
        
        <div class="bg-primary-100 mt-2 w-full">
          <div class="container mx-auto py-10">
            <div class="grid md:grid-cols-3 divide-x-2 divide-white text-white">

              <div class="my-10 md:my-0">
                <!-- <img :src="require('@/assets/images/icons/star.svg')" alt="" class="w-20 my-4 flex justify-center mx-auto"> -->
                <h1 class="md:text-3xl text-2xl font-medium text-center text-white flex justify-center mx-auto">
                  12+
                </h1>
                <p class="px-8 text-center text-sm md:text-base xl:text-lg flex justify-center mx-auto ">
                  Years of service
                </p>
              </div>

              <div class="my-10 md:my-0">
                <!-- <img :src="require('@/assets/images/icons/design.svg')" alt="" class="w-20 my-4 flex justify-center mx-auto"> -->
                <h1 class="md:text-3xl text-2xl font-medium capitalize text-center text-white flex justify-center mx-auto">
                  1500+
                </h1 >
                <p class="px-8 text-center text-sm md:text-base xl:text-lg flex justify-center mx-auto ">Completed Projects</p>
              </div>

              <div class="my-10 md:my-0">
                <!-- <img :src="require('@/assets/images/icons/thumbs_up.svg')" alt="" class="w-20 my-4 flex justify-center mx-auto"> -->
                <h1 class="md:text-3xl m-0 text-2xl font-medium capitalize text-center text-white flex justify-center mx-auto" >
                  1000+
                </h1>
                <p class="text-center m-0 text-sm md:text-base xl:text-lg flex justify-center mx-auto ">Satisfied Clients</p>
              </div>
          </div>
          </div>
        </div>
      </div>

    </section>

    <section  id="who-we-are" class="pt-20 lg:pt-28 flex justify-center items-center container mx-auto px-6 md:px-10" >
      <div class="">
        <div>
          <h1 class="md:text-2xl text-2xl font-normal capitalize text-center xl:text-left text-primary-100 flex justify-center mx-auto ">
            Who We Are
          </h1>
          <p class="text-center text-sm md:text-base xl:text-lg md:max-w-screen-md lg:max-w-1/2 flex justify-center mx-auto my-3">
            We're a growing team of digital solutions experts and thoughtful leaders — full of personality minus the ego. We're the wearer of many hats dedicated to helping companies like yours grow.  
          </p>


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
export default {
  name: 'IndexPage',

  data(){
    return {
      menuToggle: false,
      typeValue: "",
      typeStatus: false,
      displayTextArray: ["businesses reach their peaks...", "bring your ideas to life...", "share your message with the world..."],
      typingSpeed: 100,
      erasingSpeed: 100,
      newTextDelay: 2000,
      displayTextArrayIndex: 0,
      charIndex: 0,
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

    typeText() {
      if (this.charIndex < this.displayTextArray[this.displayTextArrayIndex].length) {
        if (!this.typeStatus) this.typeStatus = true;
        this.typeValue += this.displayTextArray[this.displayTextArrayIndex].charAt(
          this.charIndex
        );
        this.charIndex += 1;
        setTimeout(this.typeText, this.typingSpeed);
      } else {
        this.typeStatus = false;
        setTimeout(this.eraseText, this.newTextDelay);
      }
    },

    eraseText() {
      if (this.charIndex > 0) {
        if (!this.typeStatus) this.typeStatus = true;
        this.typeValue = this.displayTextArray[this.displayTextArrayIndex].substring(
          0,
          this.charIndex - 1
        );
        this.charIndex -= 1;
        setTimeout(this.eraseText, this.erasingSpeed);
      } else {
        this.typeStatus = false;
        this.displayTextArrayIndex += 1;
        if (this.displayTextArrayIndex >= this.displayTextArray.length)
          this.displayTextArrayIndex = 0;
        setTimeout(this.typeText, this.typingSpeed + 1000);
      }
    },
  },

  created() {
   setTimeout(this.typeText, this.newTextDelay + 200);
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

.hero-bg{
  background: url('../assets/images/Black-Animation-Background.svg');
  background-position: center;
  background-size: cover;
  background-blend-mode: hard-light;
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

span.typed-text {
  color: #058182;
}

.blinking-cursor {
  font-size: 2rem;
  color: #222222;
  -webkit-animation: 1s blink step-end infinite;
  -moz-animation: 1s blink step-end infinite;
  -ms-animation: 1s blink step-end infinite;
  -o-animation: 1s blink step-end infinite;
  animation: 1s blink step-end infinite;
}
@keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: #2c3e50;
  }
}
@-moz-keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: #2c3e50;
  }
}
@-webkit-keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: #2c3e50;
  }
}
@-ms-keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: #2c3e50;
  }
}
@-o-keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: #2c3e50;
  }
}
</style>
