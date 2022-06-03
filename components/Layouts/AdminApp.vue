<template>
  <div class="">
    <UiSharedAdminNavigation :url="url()" :BlockBackground="true">
      <template v-slot:logout >
        <a class="cursor-pointer ml-5" @click="emitLogOut">
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="12pt" height="12pt" viewBox="0 0 52 52" version="1.1">
            <g id="surface1">
            <path style=" stroke:none;fill-rule:nonzero;fill:rgb(41.176471%,41.176471%,41.176471%);fill-opacity:1;" d="M 12 0 C 8.6875 0 6 2.6875 6 6 L 6 46 C 6 49.3125 8.6875 52 12 52 L 40 52 C 43.3125 52 46 49.3125 46 46 L 46 35.625 L 42 39.125 L 42 46 C 42 47.101563 41.101563 48 40 48 L 12 48 C 10.898438 48 10 47.101563 10 46 L 10 6 C 10 4.898438 10.898438 4 12 4 L 40 4 C 41.101563 4 42 4.898438 42 6 L 42 12.875 L 46 16.375 L 46 6 C 46 2.6875 43.3125 0 40 0 Z M 33 12.9375 C 32.5 13.085938 32 13.59375 32 14.9375 L 32 20 L 20 20 C 18.898438 20 18 20.898438 18 22 L 18 30 C 18 31.101563 18.898438 32 20 32 L 32 32 L 32 37 C 32 39.5625 34 39 34 39 L 49 26 L 34 13 C 34 13 33.5 12.789063 33 12.9375 Z "/>
            </g>
          </svg>
        </a>
      </template>
    </UiSharedAdminNavigation>

      <div class="pt-5 md:pt-44 container mx-auto bg-gray-50 shadow-md">
        <slot name="hero"></slot>
        <div class="p-6"></div>
      </div>

      <div class="container mx-auto shadow-md">
        <slot></slot>
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

    emitLogOut(){
      this.$emit("signOut")
    }
  }
}
</script>