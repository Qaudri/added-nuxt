<template>
  <header class="relative w-screen z-50">
    <div class="shadow-lg fixed w-screen bg-white top-0">
      <div class="block lg:flex items-center lg:justify-between container mx-auto py-3 px-10">

        <div class="flex justify-between">
          <UiSharedLogo @click="emitReloadPage" />

          <div class="flex">
            <UiButtonsMenu class="block lg:hidden" @click="showMenu" /> 
            <UiButtonsClose class="hidden" @click="hideMenu" />
          </div>
        </div>

        <div class="items-center hidden lg:flex lg:pt-0 pt-8 h-screen lg:h-auto">
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


methods: {
  emitReloadPage(){
    this.$emit("ReloadPage")
  }

  hideMenu(){
    this.is_revealed = true
  }

  showMenu(){
    this.is_revealed = true
  }
}
}
</script>

<style>

</style>