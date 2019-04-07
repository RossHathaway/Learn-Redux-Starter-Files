export function increment(index) {
  console.log('running increment')
  return {
    type: 'INCREMENT_LIKES',
    index
  }
}

export function addComment(postId, author, comment) {
  console.log('adding comment')
  return {
    type: 'ADD_COMMENT',
    postId,
    author,
    comment
  }
}

export function removeComment(postId, i) {
  return {
    type: 'REMOVE_COMMENT',
    i,
    postId
  }
}