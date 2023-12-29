// LoadMoreCommentsButton.js
const LoadMoreCommentsButton = ({ onClick }) => {
    return (
        <div className='load-more-comments-button ms-3 m-2 p-2 row' >
            <a className="comments-icon nav-link " href="#top" onClick={onClick} >
                ... Load more comments
            </a>
        </div>
    )
}
export default LoadMoreCommentsButton;
