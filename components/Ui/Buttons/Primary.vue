<template>
  <div>
    <button @click="emitPushToPage" class="text-primary-100 xl:text-xl text-base px-4 py-2 font-medium border-2 2xl:border-3 border-primary-100 hover:bg-primary-100 hover:text-white duration-500 ease-in-out">
    {{button_title}}
    </button>
  </div>
</template>

<script>
export default {
props: {
  button_title: String,
},

methods: {
  emitPushToPage(){
    this.$emit("pushTo")
  }
}
}
</script>

<style>

</style>