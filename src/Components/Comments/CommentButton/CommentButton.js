import './CommentButton.css'

const CommentButton = ({onToggleComments}) => {
    return (
        <div className='top-bar row ' >
            <div className='comment-btn col-lg-2 col-sm-3 offset-lg-5 offset-4 mt-2 ' >
                        <a className="comments-icon nav-link "  onClick={onToggleComments} >
                            <i class="comments-icon bi bi-chat-fill me-1"></i>
                            Comment
                        </a>
            </div>
        </div>
    )
}
export default CommentButton;

