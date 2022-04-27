<template>
  <div>
    <button class="text-primary-100 xl:text-xl lg:ml-4 xl:border-3 text-base px-4 py-2 my-14 lg:my-0 mx-6 
    lg:mr-0 font-medium border-2 border-primary-100 hover:bg-primary-100 hover:text-white duration-500 ease-in-out">
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