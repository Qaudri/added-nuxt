<template>
  <div>
    <div>
      <SectionsCommonHeader >
        <div>
          <UiSharedLogo @emitReload="reloadThisPage" />
        </div>

        <template v-slot:menuitems >
          <UiButtonsSecondary @Pushto="whoWeAre" button_title="Who We Are" class="lg:mx-4 lg:my-0 my-4"/>
          <UiButtonsSecondary @Pushto="whatWeDo" button_title="What We Do" class="lg:mx-4 lg:my-0 my-4"/>
          <UiButtonsSecondary @Pushto="ourServices" button_title="Our Services" class="lg:mx-4 lg:my-0 my-4"/>
          <UiButtonsSecondary @Pushto="Academy" button_title="Academy" class="lg:mx-4 lg:my-0 my-4" />

          <div class="my-10 lg:my-0">
            <a href="https://wa.me/message/QAXPPW4FO55FM1" target="blank" class="text-primary-100 xl:text-xl text-base px-4 py-2 font-medium border-2 2xl:border-3 border-primary-100 hover:bg-primary-100 hover:text-white duration-500 ease-in-out">Let's Talk</a>
          </div>

        </template>
    </SectionsCommonHeader>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>