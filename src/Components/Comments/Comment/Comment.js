import './Comment.css'

const Comment = (props) => {
    return (
        <div className=" comment row p-2">
            <div className="user-name-picture col-lg-1 col-2 ">
                <a href='#top'>
                    <img className=" profile-img rounded-circle  "
                        src={props.profileImage}
                        alt="   "
                        loading='lazy'
                    />
                </a>
            </div>
            <div className="comment-content col-lg-11 col-10 p-2 rounded ">
                <div className="header ps-1   ">
                    <div className=' d-flex justify-content-between align-items-center '>
                        <h6 className='profile-name '><strong>{props.commentUserName}</strong> </h6>
                        <span className='comment-time small '>{props.commentTime}</span>
                    </div>
                    <div>
                    <p className="small ">
                        {props.commentText}
                    </p>
                    </div>
                </div>
            </div>
            <div className='bottom-bar row ' >
                <div className='col-lg-11  offset-lg-1 col-sm-10  offset-2  ' >
                    <ul className="nav nav-divider  small">
                        <li className="nav-item ">
                            <a className="nav-link ps-0 buttonLink " href="#top">Like (3)</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link buttonLink" href="#top">Reply</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link buttonLink" href="#top">View 5 replies</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
};

export default Comment;

