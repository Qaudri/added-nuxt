<template>
  <div>
    <SectionsCommonHeader />
    <SectionsCoursesContainer @RegisterUser="register">
      <div class="h-full w-full absolute z-10 bg-black">
        <div class="bg-white p-8">
          <form action="">
            <label for="Name">Name</label>
            <input type="text" name="Name" id="Name" placeholder="Enter your full name">

            <label for="email">Email</label>
            <input type="email" name="email" id="email" placeholder="Enter your email address">

            <button type="submit">Register</button>
          </form>
        </div>
      </div>
    </SectionsCoursesContainer>
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
  margin-top: 3rem;
  width: 10rem;
  background-color: transparent;
  border: 2px solid #058182;
  text-transform: capitalize;
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