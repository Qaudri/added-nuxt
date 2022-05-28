<template>
  <div class="absolute bg-secondary-100 z-110 bg-opacity-20 flex items-center justify-center h-full w-full top-0 left-0">

    <div class="bg-white p-6 pb-0">

      <div>
        <div class="border-b text-xl font-semibold flex justify-between">

          <p class="font-medium text-black text-lg">Confirm Delete</p>

          <div class="">

            <button>
              <slot />
            </button>

          </div>

        </div>

        <div class="my-6 flex items-center justify-center">
          <div>
            <img :src="require('@/assets/images/icons/important.svg')"  class="flex items-center mx-auto justify-center m-0 w-32" />

            <p class="text-black font-medium text-lg my-4 text-center max-w-sm flex justify-center">Are you sure you want to delete this course item? This action is irreversible!</p>

            <a @click="emitDeleteEvent"
            class="flex items-center justify-center cursor-pointer mt-6 bg-primary-100 text-lg  px-7 py-3 uppercase text-white font-medium">
            Delete
            </a>
          </div>

        </div>
        
      </div>

    </div>
  </div>
</template>

<script>
export default {
  methods: {
    emitDeleteEvent(){
      this.$emit('confirmDelete')
    },
  }
}
</script>

<style>
.scale-out{
  animation: scaleout 1s forwards;
}

@keyframes scaleout {
  from{
    transform: scale(0);
  }

  to{
    transform: scale(1);
  }
}
</style>