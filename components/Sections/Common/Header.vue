<template>
  <header class="relative w-screen z-50">
    <div class="shadow-lg fixed w-screen bg-white top-0">
      <div class="block lg:flex items-center lg:justify-between container mx-auto py-3 px-10">

        <div class="flex justify-between w-full">
          <UiSharedLogo @click="emitReloadPage" />

          <UiSharedMenu />
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