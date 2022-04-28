<template>
  <div>
    <button class="text-black text-base lg:mx-4 lg:my-0 xl:text-xl font-medium hover:border-primary-100 hover:text-primary-100 
    border-b-2 border-transparent ease-in-out block my-4 mr-10 md:lg-0 duration-500">
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