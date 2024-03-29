export const state = () => ({
  items : [
    {
      id: 1,
      review: "Being a student of the academy is literally one of the best thigs to ever happen to me. The support is exceptional and I felt very welcome. I have never had a cause for regret and my life has been a thousand times better!",
      reviewer: "Ismail Adekunle (Plusmore)",
      image: require('@/assets/images/reviewers/plusmore.png'),
    },

    {
      id: 2,
      review: "I can't believe the changes in my life since I took the Freelancing course with the academy. I have become financially free and much more qualified to venture into the tech world. Thanks Added!",
      reviewer: "Akanmu Aliu Omotayo",
      image: require('@/assets/images/reviewers/alli.png'),

    },

    {
      id: 3,
      review: "Joining the academy has been a cornerstone in my life. I have transitioned far beyond what I could even think of just a few years ago thanks to the amazing team behind the academy.",
      reviewer: "Abdul Azeez Salaudeen",
      image: require('@/assets/images/reviewers/cissey.png'),

    },

    {
      id: 4,
      review: "I had a really great time with the academy.The team was committed to great service and friendly. The atmosphere was awesome and modern. Most importantly, the courses were great, really well-taught and impactful.",
      reviewer: "Nafiu L. Olaide",      
      image: require('@/assets/images/reviewers/laide.png'),

    },

    {
      id: 5,
      review: "Probably the best academy I've ever been to. I have been to a lot of academies in search of tech training and none rivals Added's. They offer great courses at the best price available, and are dedicated to the success of each one of their students.",
      reviewer: "Mutawally Abdul Baaqi",
      image: require('@/assets/images/reviewers/mutawally.png'),

    },

    {
      id: 6,
      review: "Thanks to the academy for being there for me during one of the most trying times if my life. I was in debt and saw no end. After taking their course however, things have taken a turn for the better. I am now financially free!",
      reviewer: "Atofarati Bright",
      image: require('@/assets/images/reviewers/kbright.png'),

    },

    {
      id: 7,
      review: "I love everything about the academy. The environment, the mentors, fellow students , you mention it! Definitely recommend them if you are looking to get new digital skills.",
      reviewer: "Muhammad A. Quadir",
      image: require('@/assets/images/reviewers/qaudri.png'),

    },

    {
      id: 8,
      review: "For those looking for a digital skills academy, this is it. The skills I learnt, the support I received have all made my life better. I am digitally employable, free to make my choices.",
      reviewer: "Hassan Baqau",
      image: require('@/assets/images/reviewers/hassan.png'),

    },
  ]
})

export const getters = {
  getReviews(state) {
    return state.items
  }
}