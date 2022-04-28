<template>
  <div>
    <button class="text-black text-base xl:text-xl font-medium hover:border-primary-100 hover:text-primary-100 
    border-b-2 border-transparent ease-in-out block duration-500">
      {{button_title}}
    </button>
  </div>
</template>

<script>
export default {
props: {
  button_title: String,
}
}
</script>

<style>

</style>