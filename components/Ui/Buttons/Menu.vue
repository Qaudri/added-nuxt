<template>
  <img :src="require('@/assets/images/icons/menu.svg')" class="block w-7" alt="" @click="revealMenuEvent">
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