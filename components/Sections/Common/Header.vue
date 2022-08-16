<template>
  <header class="relative w-screen z-10">
    <div class="shadow-lg fixed w-screen bg-white top-0">
      <div class="block lg:flex items-center lg:justify-between container mx-auto py-3 px-10">

        <div class="flex justify-between items-center">
          <slot></slot>

          <div class="flex lg:hidden">
            <UiButtonsMenu @revealMenu="toggleMenu"  /> 
          </div>
        </div>

        <div :class="is_revealed ? 'menu-slide-down' : 'menu-slide-up'" class=" justify-center items-center hidden lg:flex lg:pt-0 pt-8 h-screen lg:h-auto" @click="toggleMenu">
          <slot name="menuitems"></slot>
        </div>

      </div>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    menuState: false
  },

  data(){
    return{
      is_revealed: false,
      is_animated: false,
    }
  },

  methods: {
    toggleMenu(){
      this.is_revealed = !this.is_revealed;
    },
  },

  created(){
  },

  mounted(){
  }
}
</script>

<style>

@media screen and (max-width: 1024px) {
  .menu-slide-down{
  animation: slideDown .75s forwards;
  display: block;
}

.menu-slide-up{
  animation: slideUp .75s forwards;
}

@keyframes slideDown {
  from{
    opacity: 0;
    transform: translateY(-5rem);
  }

  to{
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideUp {
  to{
    opacity: 0;
    transform: translateY(-5rem);
  }

  from{
    opacity: 1;
    transform: translateY(0);
  }
}
}
</style>