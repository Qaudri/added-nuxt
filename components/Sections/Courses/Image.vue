<template>
  <div class="border-b pb-4">
    <img :src="imgUrl" class="w-16" alt="">
  </div>
</template>

<script>
export default {
  props: {
    imgUrl: String,
  }
}
</script>