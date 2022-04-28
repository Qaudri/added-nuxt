<template>
  <div class="flex justify-end w-full">
    <div class="flex">
      <UiButtonsMenu class="block lg:hidden" /> 
      <UiButtonsClose class="hidden" />
    </div>

    <div class="items-center hidden lg:flex lg:pt-0 pt-8 h-screen lg:h-auto">
      <UiButtonsSecondary button_title="Who We Are" />
      <UiButtonsSecondary button_title="What We Do" />
      <UiButtonsSecondary button_title="Our Services" />
      <UiButtonsSecondary button_title="Academy" />
      <UiButtonsPrimary button_title="Let's Talk" />
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
body{
  font-family: "Poppins", sans-serif;
  overflow-x: hidden;
}

</style>