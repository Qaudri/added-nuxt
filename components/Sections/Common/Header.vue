<template>
  <header class="relative w-screen z-50">
    <div class="shadow-lg fixed w-screen bg-white top-0">
      <div class="block lg:flex items-center lg:justify-between container mx-auto py-3 px-10">

        <div class="flex justify-between">
          <UiSharedLogo @click="emitReloadPage" />

          <div class="flex lg:hidden">
            <UiButtonsMenu @revealMenu="showMenu" :class="is_revealed ? 'hidden' : 'block'" /> 
            <UiButtonsClose @closeMenu="hideMenu" :class="is_revealed ? 'block' : 'hidden' " />
          </div>
        </div>

        <div :class="is_revealed ? 'menu-slide-down' : 'menu-slide-up' " class="items-center hidden lg:flex lg:pt-0 pt-8 h-screen lg:h-auto">
          <UiButtonsSecondary button_title="Who We Are" class="lg:mx-4 lg:my-0 my-4 ml-10 md:ml-0"/>
          <UiButtonsSecondary button_title="What We Do" class="lg:mx-4 lg:my-0 my-4 ml-10 md:ml-0"/>
          <UiButtonsSecondary button_title="Our Services" class="lg:mx-4 lg:my-0 my-4 ml-10 md:ml-0"/>
          <UiButtonsSecondary button_title="Academy" class="lg:mx-4 lg:my-0 my-4 ml-10 md:ml-0" />
          <UiButtonsPrimary button_title="Let's Talk" class="lg:ml-4 my-10 lg:my-0 mx-6 lg:mr-0 " />
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
  }
},

methods: {
  emitReloadPage(){
    this.$emit("ReloadPage")
  },

  hideMenu(){
    this.is_revealed = false
  },

  showMenu(){
    this.is_revealed = true;
    console.log("shown")
  },
}
}
</script>

<style>

@media screen and (max-width: 1024px) {
  .menu-slide-down{
  animation: slideDown .75s forwards;
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