<template>
  <div class="">
    <UiSharedAdminNavigation :url="url()" :BlockBackground="true"></UiSharedAdminNavigation>
    
    <div class="pt-5 md:pt-20 container mx-auto bg-gray-50 shadow-md">
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