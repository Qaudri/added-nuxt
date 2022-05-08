<template>
  <div class="border-b pb-4">
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    imgUrl: String,
  }
}
</script>