<template>
  <div>
    <p class="text-base">
      {{duration}} | <span class="text-primary-100 font-medium">#{{price}}</span>
    </p>
  </div>
</template>

<script>
export default {
  props: {
    duration: String,
    price: String,
  }
}
</script>

<style>

</style>