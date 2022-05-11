<template>
  <div class="">
    <SharedAdminNavigation :url="url()"></SharedAdminNavigation>
    
    <slot name="special"></slot>
    <div>
      <slot name="hero-fixed"></slot>
    </div>
    
    <div class="pt-5 md:pt-20 container mx-auto bg-white shadow-md">
      <slot name="hero"></slot>
      <div class="p-6 sm:p-8">
        <slot />
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  methods:{
    url() {
      if(process.browser){
        return location.pathname.substr(1)
      }
    },
  }
}
</script>