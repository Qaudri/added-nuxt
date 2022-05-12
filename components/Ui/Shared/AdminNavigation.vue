<template>
  <div class="w-full">
    <div class="py-2 lg:py-3 flex items-center w-full shadow-2xl z-10 fixed bg-white">
      <div class="container mx-auto">
        <div class="w-full flex justify-between items-center px-4">
          <div>
            <nuxt-link to="admin">
              <UiSharedLogo />
            </nuxt-link>
          </div>
          
          <div class="flex items-center justify-end">
            <div>
              <div class="flex justify-end items-center">
                <div class="flex items-center text-sm sm:text-base">
                  <img :src="require('@/assets/images/icons/avatar.svg')" class="w-5 mr-2"/>
                  <div class="mr-4 font-medium flex items-center">Hi, Noarex
                    
                    <a class="cursor-pointer ml-5">
                      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="12pt" height="12pt" viewBox="0 0 52 52" version="1.1">
                        <g id="surface1">
                        <path style=" stroke:none;fill-rule:nonzero;fill:rgb(41.176471%,41.176471%,41.176471%);fill-opacity:1;" d="M 12 0 C 8.6875 0 6 2.6875 6 6 L 6 46 C 6 49.3125 8.6875 52 12 52 L 40 52 C 43.3125 52 46 49.3125 46 46 L 46 35.625 L 42 39.125 L 42 46 C 42 47.101563 41.101563 48 40 48 L 12 48 C 10.898438 48 10 47.101563 10 46 L 10 6 C 10 4.898438 10.898438 4 12 4 L 40 4 C 41.101563 4 42 4.898438 42 6 L 42 12.875 L 46 16.375 L 46 6 C 46 2.6875 43.3125 0 40 0 Z M 33 12.9375 C 32.5 13.085938 32 13.59375 32 14.9375 L 32 20 L 20 20 C 18.898438 20 18 20.898438 18 22 L 18 30 C 18 31.101563 18.898438 32 20 32 L 32 32 L 32 37 C 32 39.5625 34 39 34 39 L 49 26 L 34 13 C 34 13 33.5 12.789063 33 12.9375 Z "/>
                        </g>
                      </svg>
                    </a>
                  </div>
                  
                  <div class="md:hidden flex justify-end" @click="ToggleMobileNav">
                    <div class="w-8">
                      <div :class="(mobile_nav ? 'transition transform rotate-45 my-0' : 'transition my-1') + ' ' + (BlockBackground ? 'bg-white' : 'bg-primary-100')" class="block h-1 cursor-pointer"></div>
                      <div class="flex justify-end">
                        <div :class="(mobile_nav ? 'transition transform -rotate-45 my-0 w-8' : 'transition my-1 w-8') + ' ' + (BlockBackground ? 'bg-white' : 'bg-primary-100')"  class="block  h-1 cursor-pointer"></div>
                      </div>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        
        </div>
      </div>
    </div>   
 
    <transition name="page">
    
      <div :class="mobile_nav ? 'shadow-2xl md:shadow-sm block' : 'hidden md:block'" class="fixed z-0 -mt-1 top-16 h-full md:h-auto w-10/12 md:w-full bg-primary-100 px-2 text-white md:block">
        <div class="mx-auto md:container">
          
          <div class="pt-16 md:pt-0 md:flex justify-start">
            <nuxt-link :to="{name:'admin'}" :class="isUrl('admin') ? (active_nav + nav_item) : nav_item">Dashboard </nuxt-link>
            <nuxt-link :to="{name:'admin'}" :class="isUrl('courses') ? (active_nav + nav_item) : nav_item">Courses</nuxt-link>
            <nuxt-link :to="{name:'admin'}" :class="isUrl('tagsandcategories') ? (active_nav + nav_item) : nav_item">Statistics</nuxt-link>
            
            </div>
        </div>
        
      </div>
    </transition>
  </div>
</template>
<script>
  import { mapGetters, mapActions } from 'vuex';

  export default {
    
    props: {
      url: String,
      BlockBackground: Boolean
    },

    data() {
        return {
          nav_item: ' block py-6 px-10 md:px-5 hover:bg-secondary-100 hover:bg-opacity-30',
          active_nav: ' bg-secondary-100 bg-opacity-30',
          mobile_nav:false,
          pc_nav: true,
          show_dropdown: false,
          showSideNav:  false,
          isOpen: false,
        }
    },
    
    methods: {

      close(){
          this.isOpen = !this.isOpen;
      },
      
      ToggleMobileNav(){
        // alert("its working");
        this.mobile_nav = !this.mobile_nav
      },
      
      isUrl(...urls) {
          if (urls[0] === '') {
              return this.url === ''
          }
          return urls.filter(url => this.url.startsWith(url)).length
      },
    }
  };
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;0,700;1,400&display=swap');

.shadow-2xl{
  --tw-shadow: 0 12px 20px -12px rgb(0 0 0 / 0.5);
  --tw-shadow-colored: 0 25px 50px -12px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}


body{
  font-family: "Poppins", sans-serif;
}
</style>
