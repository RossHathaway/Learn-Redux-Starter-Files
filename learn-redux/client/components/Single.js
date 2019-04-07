import React from 'react'
import Photo from './photo'
import Comments from './Comments'

class Single extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const i = this.props.posts.findIndex(({code}) => {
      return code === this.props.params.postId
    })
    const post = this.props.posts[i]
    const comments = this.props.comments[this.props.params.postId] || []
    return (
      <div className="single-photo">
        <Photo post={post} i={i} {...this.props}/>
        <Comments comments={comments} addComment={this.props.addComment} postId={this.props.params.postId} removeComment={this.props.removeComment}/>
      </div>
    )
  }
}

export default Single