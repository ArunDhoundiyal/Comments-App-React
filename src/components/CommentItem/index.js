import {formatDistanceToNow} from 'date-fns'
import './index.css'

const CommentItem = props => {
  const {eachList, clickLikeButton, deleteComment} = props
  const {id, name, comment, isFavorite, randomBgColor, date} = eachList

  const newDate = formatDistanceToNow(date)

  const onClikLikeButton = () => {
    clickLikeButton(id)
  }

  const onClickDeleteButton = () => {
    deleteComment(id)
  }

  const isLikeImgButton = isFavorite
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const isLikeTextButton = isFavorite ? 'likeText' : ''

  return (
    <li className="comment-list-container">
      <div className="card-list-container">
        <span className={`${randomBgColor} logo-name`}>{name[0]}</span>
        <div className="comment-name-container">
          <div className="name-time-container">
            <p className="style-name">{name}</p>
            <span className="newDate">{newDate}</span>
          </div>

          <span className="style-comment">{comment}</span>
        </div>
      </div>
      <div>
        <button
          className={`${isLikeTextButton}  style-button`}
          type="button"
          aria-label="Like"
          onClick={onClikLikeButton}
        >
          <img alt="like" src={isLikeImgButton} className="like-img" /> Like
        </button>
      </div>
      <div className="delete-button-container">
        <button
          className="delete-button"
          type="button"
          data-testid="delete"
          onClick={onClickDeleteButton}
        >
          {' '}
          <img
            alt="delete"
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            className="delete-img"
          />
        </button>
      </div>
    </li>
  )
}
export default CommentItem
