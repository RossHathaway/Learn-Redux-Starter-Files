import React from 'react'

class Comments extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.renderComment = this.renderComment.bind(this)
  }

  renderComment(comment, i) {
    return (
      <div className="comment" key={i}>
        <p>
          <strong>{comment.user}</strong>
          {comment.text}
          <button className="remove-comment" onClick={this.props.removeComment.bind(this, this.props.postId, i)}>&times;</button>
        </p>
      </div>
    )
  }

  handleSubmit(e) {
    e.preventDefault()
    const postId = this.props.postId
    const author = this.refs.author.value
    const comment = this.refs.comment.value

    this.props.addComment(postId, author, comment)
    this.refs.commentForm.reset()
  }

  render() {
    return (
      <div className="comments">
        {this.props.comments.map(this.renderComment)}
        <form ref="commentForm" className="comment-form" onSubmit={this.handleSubmit}>
          <input type="text" ref="author" placeholder="author"></input>
          <input type="text" ref="comment" placeholder="comment"></input>
          <input type="submit" hidden></input>
        </form>
      </div>
    )
  }
}

export default Comments