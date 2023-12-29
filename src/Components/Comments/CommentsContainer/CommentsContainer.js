// CommentsContainer.js
import React, { useState } from 'react';
import CommentButton from "../CommentButton/CommentButton";
import ReadComments from "./ReadComment";

const CommentsContainer = () => {
    const [showComments, setShowComments] = useState(false);
    const [commentsToShow, setCommentsToShow] = useState(2); // Start with showing 2 comments

    const toggleComments = () => {
        setShowComments(!showComments);
    };

    const loadMoreComments = () => {
        setCommentsToShow(commentsToShow + 2); // Load 2 more comments
    };

    return (
        <div className="CommentsContainer bg-light rounded">
            <CommentButton onToggleComments={toggleComments} />
            {showComments && (
                <ReadComments
                    numberOfCommentsToShow={commentsToShow}
                    increaseCommentsToShow={loadMoreComments}
                />
            )}
        </div>
    )
}
export default CommentsContainer;
