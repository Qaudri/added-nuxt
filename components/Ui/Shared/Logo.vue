<template>
  <div>
    <img :src="require('@/assets/images/icons/branding/main-logo.svg')" @click="emitReload"
     alt="" class="cursor-pointer block w-36 2xl:w-40" />
  </div>
</template>

<script>
export default {
methods: {
  emitReload(){
    this.$emit("emitReload")
  }
}
}
</script>

<style>

</style>