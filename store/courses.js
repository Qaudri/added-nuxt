export const state = () =>({
  items: [
    {
      id: 1,
      imageUrl: "require('@/assets/images/icons/courses/design.svg')",      
      title: "Brand Identity Design",
      duration: "2 months",
      price: "#70,000",
      brief: "",
    },

    {
      id: 2,
      imageUrl: "require('@/assets/images/icons/courses/uiui.svg')",     
      title: "Graphics Design",
      duration: "2 months",
      price: "#80,000",
      brief: "",
    },

    {
      id: 3,
      imageUrl: "require('@/assets/images/icons/courses/ui-design.svg')",
      title: "UI/UX Design",
      duration: "2 months",
      price: "#100,000",
      brief: "",
    },

    {
      id: 4,
      imageUrl: "require('@/assets/images/icons/courses/front-end.svg')",
      title: "Frontend Web Development",
      duration: "4 months",
      price: "#150,000",
      brief: "",
    },

    {
      id: 5,
      imageUrl: "require('@/assets/images/icons/courses/back-end.svg')",
      title: "Backend Web Development",
      duration: "4 months",
      price: "#180,000",
      brief: "",
    },

    {
      id: 6,
      imageUrl: "require('@/assets/images/icons/courses/freelancing.svg')",
      title: "Freelancing",
      duration: "1 month1",
      price: "#50,000",
      brief: "",
    },

    {
      id: 7,
      imageUrl: "require('@/assets/images/icons/courses/trading.svg')",
      title: "Forex Trading",
      duration: "1 month",
      price: "#85,000",
      brief: "",
    },

    {
      id: 8,
      imageUrl: "require('@/assets/images/icons/courses/forex.svg')",
      title: "Crypto Trading",
      duration: "2 months",
      price: "#100,000",
      brief: "",
    },

    {
      id: 9,
      imageUrl: "require('@/assets/images/icons/courses/digital-marketing.svg')",
      title: "Digital Marketing",
      duration: "2 months",
      price: "#65,000",
      brief: "",
    },
  ],

  
  selected_course: '{}'
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
  setSelectedCourse(context){
    context.commit("GET_SELECTED_COURSE")
  },

  listCourses(context, credentials){
    return new Promise((resolve, reject) => {
      this.$axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.rootState.authentication.admin_token

      this.$axios.$get('/api/admins/courses')
        .then(response => {
          context.commit('LIST_ALL_COURSES', response.data)

          resolve(response)
        })

        .catch(function (error) {
          reject(error)
        })
    })
  },

  showCourse(context, credentials){
    return new Promise((resolve, reject) => {
      this.$axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.rootState.authentication.admin_token

      this.$axios.$get('/api/admins/courses/:uuid')
        .then(response => {
          context.commit('SHOW_COURSE', response.data)

          resolve(response)
        })

        .catch(function (error) {
          reject(error)
        })
    })
  },

  createCourse(context, credentials){
    return new Promise((resolve, reject) => {
      this.$axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.rootState.authentication.admin_token

      console.log("request sent")
      this.$axios.$post('/api/admins/courses', {
        title: credentials.title,
        price: credentials.price,
        brief: credentials.description,
        preview: credentials.imageUrl,
        duration_in_weeks: credentials.duration
      })
        .then(response => {
          // context.commit('CREATE_NEW_COURSE', response.data)
          resolve(response)
        })

        .catch(function (error) {
          reject(error)
        })
    })
  },

  updateCourse(context, credentials){
    return new Promise((resolve, reject) => {
      this.$axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.rootState.authentication.admin_token

      this.$axios.$put('/api/admins/courses/:uuid', {
        title: credentials.title,
        price: credentials.price,
        brief: credentials.description,
        preview: credentials.imageUrl,
      })
        .then(response => {
          context.commit('UPDATE_COURSE', response.data)
          resolve(response)
        })
        .catch(function (error) {
          reject(error)
        })
    })
  },

  deleteCourse(context, uuid){
    return new Promise((resolve, reject) => {
      this.$axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.rootState.authentication.admin_token

      this.$axios.$delete('/api/admins/courses/' + uuid)
        .then(response => {
          resolve(response)
        })

        .catch(function (error) {
          reject(error)
        })
    })
  },

}

export const mutations = {
  GET_SELECTED_COURSE(state, payload){
    state.selected_course = payload
  },

  CREATE_NEW_COURSE(state, payload){
    state.items.push({
      id: Math.floor(Math.random() * 100),
      title: title,
      price: price,
      imageUrl: imageUrl,
      description: description
    })
  },

  LIST_ALL_COURSES(state, payload){
    state.items = payload
  },

  SHOW_COURSE(state, payload){
    state.selected_course = payload
  }
}