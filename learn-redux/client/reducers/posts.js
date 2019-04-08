function posts(state = [], action) {
  console.log('action from posts.js reducer:', action)
  switch (action.type) {
    case 'INCREMENT_LIKES':
      return state.map((post, i) => {
        if (i === action.index) {
          return {...post, likes: post.likes + 10}
        } else {
          return post
        }
      })
    default:
      return state
  }
}

export default posts