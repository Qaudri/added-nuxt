<template>
  <div>
    <button class="text-primary-100 xl:text-xl xl:border-4 text-base px-4 py-2 font-medium border-2 2xl:border-3 border-primary-100 hover:bg-primary-100 hover:text-white duration-500 ease-in-out">
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