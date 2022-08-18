<template>
  <header class="relative w-screen z-10">
    <div class="shadow-lg fixed w-screen bg-white top-0">
      <div class="block lg:flex items-center lg:justify-between container mx-auto py-4 px-10">

        <div class="flex justify-between items-center">
          <slot></slot>

          <div class="flex lg:hidden">
            <div class="lg:hidden" @click="revealMenuEvent">
              <div class="w-8">
                <div :class="(mobile_nav ? 'transition transform rotate-45 my-0 w-8' : 'transition my-1.5 w-8') + ' ' + (BlockBackground ? 'bg-primary-100' : 'bg-primary-100')" class="block cursor-pointer" style="height: 3px;"></div>
                <div :class="(mobile_nav ? 'transition transform -rotate-45 my-0 w-8 -mt-0.5' : 'transition my-1.5 w-8') + ' ' + (BlockBackground ? 'bg-primary-100' : 'bg-primary-100')"  class="block cursor-pointer" style="height: 3px;"></div>
              </div>
            </div>          
          </div>
        </div>

        <div :class="is_revealed ? 'menu-slide-down' : 'menu-slide-up'" class=" justify-center items-center hidden lg:flex lg:pt-0 pt-8 h-screen lg:h-auto" @click="menuClicked">
          <slot name="menuitems"></slot>
        </div>

      </div>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    BlockBackground: Boolean
  },

  data(){
    return{
      mobile_nav: false,
      is_revealed: false,
      is_animated: false,
      bg_block: false
    }
  },

  methods: {
    menuClicked(){
      this.is_revealed = false
      this.mobile_nav = false
    },

    revealMenuEvent(){
      this.mobile_nav = !this.mobile_nav
      this.is_revealed = !this.is_revealed;
    }
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