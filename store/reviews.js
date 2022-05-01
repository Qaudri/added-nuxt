export const state = () => ({
  item: [
    {
      id: 1,
      review: "",
      reviewer: "",
    },

    {
      id: 2,
      review: "",
      reviewer: "",
    },

    {
      id: 3,
      review: "",
      reviewer: "",
    },

    {
      id: 4,
      review: "",
      reviewer: "",
    },

    {
      id: 5,
      review: "",
      reviewer: "",
    },

    {
      id: 6,
      review: "",
      reviewer: "",
    },
  ]
})

export const getters = {
  getReviewItems(state) {
    return state.items
  }
}