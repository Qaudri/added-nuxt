<template>
  <div class="flex justify-end w-full">
    <div class="flex">
      <UiButtonsMenu class="block lg:hidden" @click="revealMenu" /> 
      <UiButtonsClose class="hidden" @click="hideMenu" />
    </div>
  </div>
</template>

<script>

export default {
  data(){
    return{
      is_revealed: false
    }
  },

  methods: {
    revealMenu(){
      this.is_revealed = true
      console.log("clicked")
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