<template>
  <div class="flex">
    <UiButtonsMenu class="block lg:hidden" @click="revealMenu" /> 
    <UiButtonsClose class="hidden" @click="hideMenu" />
  </div>
</template>

<script>

export default {

  methods: {
    revealMenu(){
      this.is_revealed = true
    },

    hideMenu(){
      this.is_revealed = false
    }
  }
}
</script>

<style>
body{
  font-family: "Poppins", sans-serif;
  overflow-x: hidden;
}

</style>