export const state = () =>({
  items: [
    {
      id: 1,
      imageUrl: "require('@/assets/images/icons/courses/design.svg')",      
      title: "Brand Identity Design",
      duration: "2 months",
      price: "#70,000",
      details: "",
    },

    {
      id: 2,
      imageUrl: "require('@/assets/images/icons/courses/uiui.svg')",     
      title: "Graphics Design",
      duration: "2 months",
      price: "#80,000",
      details: "",
    },

    {
      id: 3,
      imageUrl: "require('@/assets/images/icons/courses/ui-design.svg')",
      title: "UI/UX Design",
      duration: "2 months",
      price: "#100,000",
      details: "",
    },

    {
      id: 4,
      imageUrl: "require('@/assets/images/icons/courses/front-end.svg')",
      title: "Frontend Web Development",
      duration: "4 months",
      price: "#150,000",
      details: "",
    },

    {
      id: 5,
      imageUrl: "require('@/assets/images/icons/courses/back-end.svg')",
      title: "Backend Web Development",
      duration: "4 months",
      price: "#180,000",
      details: "",
    },

    {
      id: 6,
      imageUrl: "require('@/assets/images/icons/courses/freelancing.svg')",
      title: "Freelancing",
      duration: "1 month1",
      price: "#50,000",
      details: "",
    },

    {
      id: 7,
      imageUrl: "require('@/assets/images/icons/courses/trading.svg')",
      title: "Forex Trading",
      duration: "1 month",
      price: "#85,000",
      details: "",
    },

    {
      id: 8,
      imageUrl: "require('@/assets/images/icons/courses/forex.svg')",
      title: "Crypto Trading",
      duration: "2 months",
      price: "#100,000",
      details: "",
    },

    {
      id: 9,
      imageUrl: "require('@/assets/images/icons/courses/digital-marketing.svg')",
      title: "Digital Marketing",
      duration: "2 months",
      price: "#65,000",
      details: "",
    },
  ],

  selected_course: ''
})

export const getters = {
  getCourseItems(state) {
    return state.items
  },

  getSelectedCourse(state){
    return state.selected_course
  }
}

export const actions = {
  setSelectedCourse(){
    context.commit("SET_SELECTED_COURSE", context.state.courses[context.state.selected_course])
  }
}

export const mutations = {
  SET_SELECTED_COURSE(state, payload){
    state.selected_course = payload

    state.selected_course.push({
      course_id: payload.items.id,
      course_image: payload.items.image,
      course_title: payload.items.title,
      course_price: payload.items.price,
      course_duration: payload.items.duration,
    })
  }
}