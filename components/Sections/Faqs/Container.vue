<template>
  <div class="container mx-auto px-10 w-full md:w-3/4 xl:w-3/5" >
    <div class="flex items-center justify-center">

      <div >
        <div class="my-10">
          <h1 class="md:text-4xl text-3xl font-bold mb-4 text-center text-primary-100 flex justify-center mx-auto">FAQs</h1>
          <p class="text-gray-400 text-center font-normal md:text-base text-sm">Frequently Asked Questions.</p>
        </div>
      </div>

    </div>

    <div class="flex flex-wrap justify-center w-full mb-8 md:m-0">
      <UiCardsFaqcard v-for="item in faqItems" :key="item.id" :question="item.question" :answer="item.answer" class="my-4 "/>
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