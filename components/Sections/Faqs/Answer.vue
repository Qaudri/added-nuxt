<template>
  <div class="slideDown border-2 border-primary-100 border-t-0 w-full mx-auto bg-white shadow-lg px-4 pb-3 text-secondary-100 font-normal text-base">
    <slot class="cursor-pointer" />
  </div>
</template>

<script>
export default {

}
</script>

<style>
.slideDown{
  animation: slideDown .75s forwards;
}

@keyframes slideDown {
  from{
    transform: translateY(-1rem);
    opacity: 0;
  }

  to{
    transform: translateY(0);
    opacity: 1;
  }
}
</style>