<template>
  <div class="w-full">
  
    <div class="py-2 lg:py-3 fixed w-full shadow z-110 bg-accent1-00 bg-white">
      <div class="container mx-auto">
        <div class="w-full flex justify-between items-center px-4">
          <div>
            <nuxt-link to="admin">
              <MainLogo :Size="'w-28'" />
            </nuxt-link>
          </div>
          
          <div class="flex items-center justify-end">
            <div v-if="!NavigationInfo.data" class="px-8 py-1 bg-accent1-200 mr-6 rounded-full text-transparent">Loading</div>
            
            <div v-else>
              <div v-if="NavigationInfo.data" class="flex justify-end items-center">
                <div class="flex items-center text-sm sm:text-base">
                  <!-- <img :src="require('@/assets/images/avatar.png')" class="w-5 rounded-full border-yellow-500 border mr-2"/> -->
                  <div class="mr-4 font-bold flex items-center">Hi,
                    {{NavigationInfo.data.display_name}}
                    
                    <a  @click="logOut" class="cursor-pointer ml-5">
                      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="12pt" height="12pt" viewBox="0 0 52 52" version="1.1">
                        <g id="surface1">
                        <path style=" stroke:none;fill-rule:nonzero;fill:rgb(41.176471%,41.176471%,41.176471%);fill-opacity:1;" d="M 12 0 C 8.6875 0 6 2.6875 6 6 L 6 46 C 6 49.3125 8.6875 52 12 52 L 40 52 C 43.3125 52 46 49.3125 46 46 L 46 35.625 L 42 39.125 L 42 46 C 42 47.101563 41.101563 48 40 48 L 12 48 C 10.898438 48 10 47.101563 10 46 L 10 6 C 10 4.898438 10.898438 4 12 4 L 40 4 C 41.101563 4 42 4.898438 42 6 L 42 12.875 L 46 16.375 L 46 6 C 46 2.6875 43.3125 0 40 0 Z M 33 12.9375 C 32.5 13.085938 32 13.59375 32 14.9375 L 32 20 L 20 20 C 18.898438 20 18 20.898438 18 22 L 18 30 C 18 31.101563 18.898438 32 20 32 L 32 32 L 32 37 C 32 39.5625 34 39 34 39 L 49 26 L 34 13 C 34 13 33.5 12.789063 33 12.9375 Z "/>
                        </g>
                      </svg>

                    </a>
                  </div>
                  
                  <div class="md:hidden flex justify-end" @click="ToggleMobileNav">
                    <div class="w-8">
                      <div :class="(mobile_nav ? 'transition transform rotate-45 my-0' : 'transition my-1') + ' ' + (BlockBackground ? 'bg-white' : 'bg-accent1-500')" class="block h-1 cursor-pointer"></div>
                      <div class="flex justify-end">
                        <div :class="(mobile_nav ? 'transition transform -rotate-45 my-0 w-8' : 'transition my-1 w-8') + ' ' + (BlockBackground ? 'bg-white' : 'bg-accent1-500')"  class="block  h-1 cursor-pointer"></div>
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
    <div class="pt-3"></div>
    
    <div class="pt-12 md:pt-16 ">
      <transition name="page">
      
        <div :class="mobile_nav ? 'shadow-2xl md:shadow-sm block' : 'hidden md:block'" class="z-100 fixed shadow-lg h-full md:h-auto w-10/12 md:w-full bg-accent1-500 px-2 text-white md:block">
          <div class="mx-auto md:container">
            <div class="pt-2 pb-2"></div>
            <div v-if="!NavigationInfo.data" class="md:flex justify-start w-full py-5 pl-3">
              
              <div v-for="item in 4" :key="item"  class="bg-gray-800 rounded-full bg-opacity-10 mr-3 px-12 py-4 mt-1"></div>
            </div>
            <div v-else class="pt-20 md:pt-0 md:flex justify-start">
              <nuxt-link :to="{name:'admin'}" :class="isUrl('admin') ? (active_nav + nav_item) : nav_item">Dashboard</nuxt-link>
              <nuxt-link :to="{name:'admin-records'}" :class="isUrl('records') ? (active_nav + nav_item) : nav_item">Records</nuxt-link>
              <nuxt-link :to="{name:'admin-tagsandcategories'}" :class="isUrl('tagsandcategories') ? (active_nav + nav_item) : nav_item">Categories and Tags</nuxt-link>
              <!-- <router-link v-if="Role == 'global-admin'" :to="{name:'Members'}" :class="isUrl('members') ? (active_nav + nav_item) : nav_item">All Members</router-link> -->
             </div>
          </div>
          
        </div>
      </transition>
    </div>
    
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
            nav_item: ' block py-6 px-10 md:px-5 hover:bg-accent2-400 ',
            active_nav: ' bg-accent2-500 border-gray-400  border-b-6 ',
            mobile_nav:false,
            pc_nav: true,
            show_dropdown: false,
            showSideNav:  false,
            isOpen: false,
        }
    },
    computed: {
      ...mapGetters({
        NavigationInfo: 'accounts/getAdminInfo',
        // Role: 'global/getAdminRole',
      }),
    } ,
    
    mounted(){
      this.retrieveAdminInfo()
    },
    methods: {
      ...mapActions({
        retrieveAdminInfo: 'accounts/retrieveAdminInfo',
        destroySession: 'authentication/destroySession',
      }),
      
      logOut(){
        this.destroySession()
        this.$router.push({name:'admin-login'})
      },
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
