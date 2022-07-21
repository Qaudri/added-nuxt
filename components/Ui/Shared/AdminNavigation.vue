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
                    <slot name="logout"></slot>
                  </div>
                  
                  <div class="md:hidden flex justify-end" @click="ToggleMobileNav">
                    <div class="w-8">
                      <div :class="(mobile_nav ? 'transition transform rotate-45 my-0 w-8' : 'transition my-1 w-8') + ' ' + (BlockBackground ? 'bg-primary-100' : 'bg-primary-100')" class="block cursor-pointer" style="height: 3px;"></div>
                      <div :class="(mobile_nav ? 'transition transform -rotate-45 my-0 w-8 -mt-0.5' : 'transition my-1 w-8') + ' ' + (BlockBackground ? 'bg-primary-100' : 'bg-primary-100')"  class="block cursor-pointer" style="height: 3px;"></div>
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
    
      <div :class="mobile_nav ? 'block' : 'hidden md:block'" class="fixed z-0 pt-4 md:pt-0 -mt-1 md:top-14 lg:top-16 h-full md:h-auto w-10/12 md:w-full bg-primary-100 px-2 text-white md:block">
        <div class="mx-auto md:container">
          
          <div class="pt-16 md:pt-0 md:flex justify-start">
            <nuxt-link :to="{name:'admin'}" :class="isUrl('admin') ? (active_nav + nav_item) : nav_item">Dashboard </nuxt-link>
            <nuxt-link :to="{name:'admin-courses'}" :class="isUrl('courses') ? (active_nav + nav_item) : nav_item">Courses</nuxt-link>
            <nuxt-link :to="{name:'admin-transactions'}" :class="isUrl('transactions') ? (active_nav + nav_item) : nav_item">Transactions</nuxt-link>
            
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
  --tw-shadow: 0 12px 25px -12px rgb(0 0 0 / 0.25);
  --tw-shadow-colored: 0 12px 25px -12px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}


body{
  font-family: "Poppins", sans-serif;
}
</style>
