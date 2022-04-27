<template>
  <img :src="require('@/assets/images/icons/menu.svg')" class="block w-10" alt="" @click="revealMenuEvent">
</template>

<script>
export default {
  methods: {
    revealMenuEvent(){
      this.$emit("revealMenu")
    }
  }
}
</script>