<template>
  <header class="relative w-screen z-50">
    <div class="shadow-lg fixed w-screen bg-white top-0">
      <div class="block lg:flex items-center lg:justify-between container mx-auto py-3 px-10">

        <div class="flex justify-between">
          <UiSharedLogo @click="emitReloadPage" />
          <UiSharedMenu />
        </div>

        <div class="items-center lg:flex lg:pt-0 pt-8 h-screen lg:h-auto">
          <UiButtonsSecondary button_title="Who We Are" />
          <UiButtonsSecondary button_title="What We Do" />
          <UiButtonsSecondary button_title="Our Services" />
          <UiButtonsSecondary button_title="Academy" />
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
}
}
</script>

<style>

</style>