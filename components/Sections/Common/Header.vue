<template>
  <header class="relative w-screen z-50">
    <div class="shadow-lg fixed w-screen bg-white top-0">
      <div class="block lg:flex items-center lg:justify-between container mx-auto py-3 px-10">

        <div class="flex justify-between">
          <slot></slot>

          <div class="flex lg:hidden">
            <UiButtonsMenu @revealMenu="showMenu" :class="is_revealed ? 'hidden' : 'block'" /> 
            <UiButtonsClose @closeMenu="hideMenu" :class="is_revealed ? 'block' : 'hidden' " />
          </div>
        </div>

        <div :class="is_revealed ? 'menu-slide-down' : 'menu-slide-up'" class="items-center hidden lg:flex lg:pt-0 pt-8 h-screen lg:h-auto">
          <slot name="menu"></slot>
        </div>

      </div>
    </div>
  </header>
</template>

<script>
export default {
data(){
  return{
    is_revealed: false,
    is_animated: false,
  }
},

methods: {

  hideMenu(){
    this.is_revealed = false;
    setTimeout(() => {
      this.is_animated = true
    }, 750);
  },

  showMenu(){
    this.is_revealed = true;
  },
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