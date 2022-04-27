<template>
  <header class="relative w-full z-50">
    <div class="shadow-lg fixed bg-white top-0 w-full container mx-auto py-3 px-10">
      <div class="block lg:flex items-center justify-between">

        <div class="flex justify-between">
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