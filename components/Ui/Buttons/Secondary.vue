<template>
  <div>
    <button @click="emitPushtoLink" class="text-black text-base xl:text-xl font-normal hover:border-primary-100 hover:text-primary-100 
    border-b-2 border-transparent ease-in-out block duration-500">
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
  emitPushtoLink(){
    this.$emit("Pushto")
  }
}
}
</script>

<style>

</style>