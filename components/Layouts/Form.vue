<template>
  <div class="px-10 absolute bg-secondary-100 z-110 bg-opacity-20 flex items-center justify-center h-full w-full top-10 left-0">
    <div class="scale-out bg-white p-6 w-full md:w-2/3 lg:w-1/2">
      <div>
        <div class="border-b text-xl font-semibold flex justify-between">
          <p class="font-medium text-black text-lg">Update Course</p>

          <div class="">

            <button>
              <slot />
            </button>
          </div>
        </div>
      </div>
      <form action="" >
        <label for="title">Course title</label>
        <input type="text" :placeholder="course_title">

        <label for="title">Course duration</label>
        <input type="text" :placeholder="course_duration">

        <label for="title">Course price</label>
        <input type="text" :placeholder="course_price">

        <label for="title">Course decription</label>
        <input type="text" :placeholder="course_description">

        <label for="title">Course contents</label>
        <input type="text" ::placeholder="course_contents">
      </form>
    </div>

  </div>
</template>

<script>
export default {
  props: {
    course_title: String,
    course_duration: String,
    course_price: String,
    course_description: String,
    course_contents: String,
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