<template>
  <div class="">
    <div class="py-" > 
      <div class="xl:hidden flex justify-end" @click="toogleNavMenu">
        <div class="w-8">
          <div :class="(NavMenu ? 'transition transform rotate-45 my-0' : 'transition my-1') + ' ' + (BlockBackground ? 'bg-white' : 'bg-accent1-500')" class="block h-1 cursor-pointer"></div>
          <div class="flex justify-end">
            <div :class="(NavMenu ? 'transition transform -rotate-45 my-0 w-8' : 'transition my-1 w-8') + ' ' + (BlockBackground ? 'bg-white' : 'bg-accent1-500')"  class="block  h-1 cursor-pointer"></div>
          </div>
        </div>
      </div>
      
      <div class="">
        <div :class="NavMenu ? 'block' : 'hidden'" class="xl:block -ml-48 xl:-ml-0 absolute xl:static mt-2">
          <div class="mt-4 xl:mt-0 rounded-lg bg-white shadow-lg xl:shadow-none w-56 xl:w-full xl:bg-transparent xl:text-whit block xl:flex items-center font-medium p-4 xl:p-0">
            <nuxt-link :to="'/#about'" class="py-2 px-4 xl:py-0 xl:px-3 block cursor-pointer " :class="BlockBackground ? 'xl:text-white xl:hover:text-accent1-100' : 'xl:hover:text-accent1-500'">About</nuxt-link>
            <nuxt-link :to="'/#services'" class="py-2 px-4 xl:py-0 xl:px-3 block cursor-pointer " :class="BlockBackground ? 'xl:text-white xl:hover:text-accent1-100' : 'xl:hover:text-accent1-500'">Services</nuxt-link>
            <nuxt-link :to="'/#lagos-green-platform'" class="py-2 px-4 xl:py-0 xl:px-3 block cursor-pointer " :class="BlockBackground ? 'xl:text-white xl:hover:text-accent1-100' : 'xl:hover:text-accent1-500'">LGP</nuxt-link>
            <nuxt-link :to="'/#green-tips'" class="py-2 px-4 xl:py-0 xl:px-3 block cursor-pointer " :class="BlockBackground ? 'xl:text-white xl:hover:text-accent1-100' : 'xl:hover:text-accent1-500'">Green Tips</nuxt-link>
            <nuxt-link :to="'/#contact'" class="py-2 px-4 xl:py-0 xl:px-3 block cursor-pointer " :class="BlockBackground ? 'xl:text-white xl:hover:text-accent1-100' : 'xl:hover:text-accent1-500'">Contact Us</nuxt-link>
          </div>
        </div>
      </div>
    
      
      
        
      
    </div>
    
  </div>
</template>

<script>
export default {
  props: {
    BlockBackground: Boolean
  },
  
  data(){
    return {
      NavMenu: false,
    }
  },
    
  methods:{

    toogleNavMenu(){
      this.NavMenu = !this.NavMenu
      this.$emit('backdrop')
    }
  }

}
</script>

<style>

</style>