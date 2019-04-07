function comments(state = {}, action) {
  if (action.postId !== undefined) {
    return {
      ...state,
      [action.postId]: postComments(action, state[action.postId])
    }
  }
  return state
}

function postComments(action, commentList) {
  switch (action.type) {
    case 'ADD_COMMENT':
      return [...commentList, {user:action.author, comment: action.post}]
    case 'REMOVE_COMMENT':
      return [...commentList.slice(0, action.i),
        ...commentList.slice(action.i + 1)]
    default:
      return commentList
  }
}

export default comments