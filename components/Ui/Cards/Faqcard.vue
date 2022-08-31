<template>
  <div class="w-full">
    
    <SectionsFaqsAccordion>

      <SectionsFaqsAccordionItem container_class="">
        <template #accordion-trigger>
          <div class="w-full flex justify-between px-4 py-3 border-2 2xl:border-3 border-primary-100 bg-white text-primary-100 text-lg font-medium mx-auto">
            <h3>{{question}}</h3>

            <img :src="require('@/assets/images/icons/reveal.svg')" alt="" width="10px"
            :class="is_clicked ? 'hidden' : 'block' " class="ml-3">

            <img :src="require('@/assets/images/icons/hide.svg')" alt="" width="10px" 
            :class="is_clicked ? 'block' : 'hidden' " class="ml-3">
          </div>
        </template>

        <template #accordion-content>
          <div class="border-2 2xl:border-3 border-primary-100 2xl:border-t-0 border-t-0 w-full mx-auto bg-white shadow-lg px-4 pb-3 pt-3 pr-6 md:pr-10 text-secondary-100 font-normal text-base">
            <h3>{{answer}}</h3>
          </div>
        </template>
      </SectionsFaqsAccordionItem>
    </SectionsFaqsAccordion>
  </div>
</template>

<script>


export default {

  props:{
    question: String,
    answer: String,
    is_active: Boolean,
  },


  data(){
    return{
      answerRevealed: false,
    }
  },

  methods: {

  },

}
</script>

<style>

</style>