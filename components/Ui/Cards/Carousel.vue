<template>
  <div>
    <img :src="imageSource" alt="">
  </div>
</template>

<script>
export default {
  props: {
    imageSource: String,
  }
}
</script>

<style>

</style>