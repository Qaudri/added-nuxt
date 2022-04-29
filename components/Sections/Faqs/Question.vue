<template>

  <div @click="dropDown" :class="is_clicked ? 'border-b-0' : ''"
  class="w-full md:w-2/3 flex justify-between px-4 py-3 border-2 border-primary-100 bg-white
   text-primary-100 text-lg font-medium mx-auto">

    <slot class="cursor-pointer" />

    <img :src="require('@/assets/images/icons/reveal.svg')" alt="" width="10px"
    :class="is_clicked ? 'hidden' : 'block' " class="">

    <img :src="require('@/assets/images/icons/hide.svg')" alt="" width="10px" 
    :class="is_clicked ? 'block' : 'hidden' " class="">

  </div>

</template>

<script>
export default {
  data(){
    return{
      is_clicked: false,
    }
  },

  methods: {
    dropDown(){
      this.is_clicked = !this.is_clicked,
      this.$emit("questionClicked")
    }
  }
}
</script>

<style>

</style>