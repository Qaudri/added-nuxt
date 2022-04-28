<template>
  <div class="container mx-auto px-10">
    <div class="flex items-center justify-center">

      <div >
        <div class="my-10">
          <h1 class="text-4xl md:text-6xl font-bold text-center my-2">FAQs</h1>
          <p class="text-gray-400 text-center font-normal md:text-base text-sm">Frequently Asked Questions.</p>
        </div>
      </div>

    </div>

    <div class="grid md:grid-cols-2 gap-6 px-8 md:px-0 mb-8 md:m-0">
      <SectionsFaqsFaqCard v-for="item in faqItems" :key="item.id" :question="item.question" :answer="item.answer"/>
    </div>

  </div>
</template>

<script>

import {mapGetters} from 'vuex';


export default {

  computed: {
    ...mapGetters({
      faqItems : 'faqs/getFaqItems'
    })
  }

}
</script>

<style>

</style>