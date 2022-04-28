<template>
  <img :src="require('@/assets/images/icons/close.svg')" class="block w-7" alt="" @click="closeMenuEvent">
</template>

<script>
export default {
  methods: {
    closeMenuEvent(){
      this.$emit("closeMenu")
    }
  }
}
</script>