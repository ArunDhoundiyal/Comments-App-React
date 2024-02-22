import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem'

import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class Comments extends Component {
  state = {nameInput: '', commentInput: '', commentList: []}

  deleteComment = id => {
    const {commentList} = this.state
    const deleteArray = commentList.filter(eachItem => eachItem.id !== id)
    this.setState({commentList: deleteArray})
  }

  clickLikeButton = id => {
    this.setState(prevState => ({
      commentList: prevState.commentList.map(eachItem => {
        if (eachItem.id === id) {
          return {...eachItem, isFavorite: !eachItem.isFavorite}
        }
        return eachItem
      }),
    }))
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {nameInput, commentInput} = this.state
    const randomColor =
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]

    const newCommentArray = {
      id: uuidv4(),
      name: nameInput,
      comment: commentInput,
      isFavorite: false,
      randomBgColor: randomColor,
      date: new Date(),
    }
    this.setState(prevState => ({
      commentList: [...prevState.commentList, newCommentArray],
      nameInput: '',
      commentInput: '',
    }))
  }

  onClickNameInput = event => {
    this.setState({
      nameInput: event.target.value,
    })
  }

  onClickCommentInput = event => {
    this.setState({commentInput: event.target.value})
  }

  render() {
    const {nameInput, commentInput, commentList} = this.state

    return (
      <div className="bg-container">
        <div className="card-container">
          <div>
            <h1 className="comments-heading">Comments</h1>
            <p className="style-paragraph">
              Say something about 4.0 Technologies
            </p>
            <form className="form-container" onSubmit={this.onSubmitForm}>
              <div className="input-text-container">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={nameInput}
                  className="name-input"
                  onChange={this.onClickNameInput}
                />
              </div>
              <div className="input-textarea-container">
                <textarea
                  placeholder="Your Comment"
                  value={commentInput}
                  className="comment-input"
                  onChange={this.onClickCommentInput}
                />
              </div>
              <button className="button" type="submit">
                Add Comment
              </button>
            </form>
          </div>

          <div className="image-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
              className="img-style"
            />
          </div>
        </div>

        <div className="comment-container">
          <div className="commentCount">
            <span className="count-comment">{commentList.length}</span>
          </div>
          <p className="comments">Comments</p>
        </div>
        <ul className="list-container">
          {commentList.map(eachList => (
            <CommentItem
              key={eachList.id}
              deleteComment={this.deleteComment}
              clickLikeButton={this.clickLikeButton}
              eachList={eachList}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Comments
