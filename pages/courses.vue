<template>
  <div>
    <div :class="formdisplayed ? 'block' : 'hidden'" class="h-full w-full absolute z-10 bg-black bg-opacity-40 flex items-center justify-center backdrop-filter backdrop-blur">
      <div class="bg-white p-8 w-full md:w-2/3 lg:w-1/3">
        <form action="">
          <label for="Name" class="mt-0">Name</label>
          <input type="text" name="Name" id="Name" placeholder="Enter your full name">

          <label for="email">Email</label>
          <input type="email" name="email" id="email" placeholder="Enter your email address">

          <button type="submit" class="submit">Register</button>
        </form>
      </div>
    </div>
    <SectionsCommonHeader />
    <div class="container mx-auto px-10 py-28 xl:py-32">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      <UiCardsCoursecard v-for="item in course" :key="item.id" 
      :imgUrl="item.imageUrl" 
      :title="item.title" 
      :duration="item.duration"
      :price="item.price" @RegisterUser="register"/>
    </div>
  </div>  />
    <SectionsCommonFooter />
  </div>
</template>

<script>
export default {
  data(){
    return{
      formdisplayed: false
    }
  },
  methods: {
    register(){
      this.formdisplayed = true
    }
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
  font-weight: medium;
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
  font-size: 16px;
  cursor: pointer;
}

.submit:hover{
  background: #058182;
  color: white;
  transition: .5s ease-in-out;
}
</style>