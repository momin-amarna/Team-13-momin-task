import { useEffect, useState } from 'react';
import db from '../../../Firebase';
import { getDocs, collection ,query, orderBy } from 'firebase/firestore';
import Comment from '../Comment/Comment';
import LoadMoreCommentsButton from '../LoadMoreCommentsbutton/LoadMoreCommentsbutton'
import moment from 'moment';

const ReadComments = ({ numberOfCommentsToShow, increaseCommentsToShow }) => {
    const [allComments, setAllComments] = useState([]);

    useEffect(() => {
        const fetchComment = async () => {
            const commentsQuery = query(collection(db, "Comments"), orderBy("timestamp", "desc"));
            const querySnapshot = await getDocs(commentsQuery);
            const fetchedComments = querySnapshot.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id,
                timestamp: doc.data().timestamp.toDate()
            }));
            setAllComments(fetchedComments);
        };
    
        fetchComment();
    }, []);

    if (allComments.length === 0) {
        return <div className='ms-1 p-2' >No comments yet</div>;
    }

    const commentsToShow = allComments.slice(0, numberOfCommentsToShow);

    return (
        <div>
            {commentsToShow.map((data) => (
                <Comment
                    commentUserName={data.userName}
                    commentText={data.text}
                    commentTime={moment(data.timestamp).fromNow()} 
                    profileImage={data.profileImage}
                />
            ))}
            {numberOfCommentsToShow < allComments.length && (
                <LoadMoreCommentsButton onClick={increaseCommentsToShow} />
            )}
        </div>
    );
};

export default ReadComments;
