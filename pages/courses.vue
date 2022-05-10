<template>
  <div>
    <div :class="formdisplayed ? 'block' : 'hidden'" class="h-full w-full fixed z-10 bg-black bg-opacity-40 flex items-center justify-center backdrop-filter backdrop-blur">
      <div class="bg-white p-8 w-full md:w-2/3 lg:w-1/3">
        <div class="flex justify-end w-full">
          <UiButtonsClose @closeMenu="toggleForm" class="flex items-center justify-end cursor-pointer pb-2" />
        </div>
        <form action="">
          <label for="Name" class="mt-0">Name</label>
          <input type="text" name="Name" id="Name" placeholder="Enter your full name">

          <label for="email">Email</label>
          <input type="email" name="email" id="email" placeholder="Enter your email address">

          <button type="submit" class="submit">Register</button>
        </form>
      </div>
    </div>
    <SectionsCommonHeader >
      <div>
        <UiSharedLogo @emitReload="reloadThisPage" />
      </div>

      <template v-slot:menuitems >
        <UiButtonsSecondary @Pushto="whoWeAre" button_title="Back to Home" class="lg:mx-4 lg:my-0 my-4 ml-10 md:ml-0"/>
        <UiButtonsSecondary @Pushto="whatWeDo" button_title="Our Academy" class="lg:mx-4 lg:my-0 my-4 ml-10 md:ml-0"/>
        <UiButtonsSecondary @Pushto="ourServices" button_title="Our Courses" class="lg:mx-4 lg:my-0 my-4 ml-10 md:ml-0"/>
        <UiButtonsSecondary @Pushto="Academy" button_title="Reviews & FAQs" class="lg:mx-4 lg:my-0 my-4 ml-10 md:ml-0" />
        <UiButtonsPrimary @pushTo="Primary" button_title="Register Now" class="lg:ml-4 my-10 lg:my-0 mx-6 lg:mr-0 " />
      </template>
    </SectionsCommonHeader>
    
    <div class="container mx-auto px-10 py-28 xl:py-32">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      <UiCardsCoursecard v-for="item in course" :key="item.id" 
      :imgUrl="item.imageUrl" 
      :title="item.title" 
      :duration="item.duration"
      :price="item.price" @RegisterUser="toggleForm"/>
    </div>
  </div>  />
    <SectionsCommonFooter />
  </div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
  data(){
    return{
      formdisplayed: false
    }
  },

  methods: {
    toggleForm(){
      this.formdisplayed = !this.formdisplayed
    }
  },

    computed: {
    ...mapGetters({
      course : 'courses/getCourseItems'
    })
  }
}
</script>

<style>
form{
  width: 100%;
  display: block;
  box-sizing: border-box;
}

label{
  font-weight: 600;
  color: #058182;
  margin-top: 30px;
  display: block;
}

input{
  padding: 10px 15px;
  margin: 10px 0;
  display: block;
  width: 100%;
  border: 2px solid #222222;
}


input:focus{
  border: 2px solid #058182;
  border-radius: 0;
  outline: none;
  color: #058182;
}

.submit{
  margin-top: 2rem;
  width: 100%;
  background-color: transparent;
  border: 2px solid #058182;
  text-transform: capitalize;
  padding: 10px;
  color: #058182;
  font-weight: 600;
  font-size: 18px;
  cursor: pointer;
}

.submit:hover{
  background: #058182;
  color: white;
  transition: .5s ease-in-out;
}
</style>