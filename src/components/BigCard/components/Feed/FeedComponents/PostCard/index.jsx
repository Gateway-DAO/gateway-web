import * as Styled from './style';
import { useEffect, useState } from 'react';
import {
    upVoteDecrease,
    upVoteIncrease,
    downVoteDecrease,
    downVoteIncrease,
} from '../Handlers';
import MakeComment from '../MakeComment';
import CommentCard from '../CommentCard';
import { BsArrowDownCircle, BsArrowUpCircle } from 'react-icons/bs';
import { MdDelete } from 'react-icons/md';
import { formatDistance } from 'date-fns';

import { useAuth } from '../../../../../../contexts/UserContext';
import { useDeletePost } from '../../../../../../api/database/useDeletePost';

const PostCard = (props) => {
    let options = {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
    };
    const { loggedIn, userInfo } = useAuth();

    const post = props.post;
    const [comments, setComments] = useState(post.comments.items);
    const user = props.post.user;

    const [showCommentBox, setShowCommentBox] = useState(false);
    const id = props.post.id;

    const [upvotes, setUpvotes] = useState(props.post.upvotes || []);
    const [downvotes, setDownvotes] = useState(props.post.downvotes || []);

    // Voting status
    const [upvoted, setUpvoted] = useState(null);
    const [downvoted, setDownvoted] = useState(null);

    // Hooks
    const { deletePost, data, loading } = useDeletePost();

    useEffect(() => {
        setUpvotes(post.upvotes);
        setDownvotes(post.downvotes);

        if (loggedIn) {
            if (upvotes.includes(userInfo.id)) {
                setUpvoted(true);
                setDownvoted(false);
            }
            if (downvotes.includes(userInfo.id)) {
                setDownvoted(true);
                setUpvoted(false);
            }
        }
    }, [id, loggedIn]);

    const upVoteHandler = async () => {
        if (upvotes.includes(userInfo.id)) {
            // Unvote

            // "Fake" real-time update
            setUpvotes(upvotes.filter((user) => user !== userInfo.id));
            setUpvoted(false);
            setDownvoted(false);

            // Actual update
            const { upvotes: newUpvotes } = await upVoteDecrease(
                post.id,
                userInfo.id
            );
            setUpvotes(newUpvotes);
        } else {
            // Upvote

            let wasDownvoted = false;

            // Check if this is downvoted
            if (downvotes.includes(userInfo.id)) {
                wasDownvoted = true;
                setDownvoted(false);
                setDownvotes(downvotes.filter((user) => user !== userInfo.id));
            }

            // "Fake" real-time update
            setUpvotes([...upvotes, userInfo.id]);
            setUpvoted(true);
            setDownvoted(false);

            // Actual update
            const { upvotes: newUpvotes } = await upVoteIncrease(
                post.id,
                userInfo.id
            );
            setUpvotes(newUpvotes);

            if (wasDownvoted) {
                const { downvotes: newDownvotes } = await downVoteDecrease(
                    post.id,
                    userInfo.id
                );
                setDownvotes(newDownvotes);
            }
        }
    };

    const downVoteHandler = async () => {
        if (downvotes.includes(userInfo.id)) {
            // Unvote

            // "Fake" real-time update
            setDownvoted(false);
            setUpvoted(false);
            setDownvotes(downvotes.filter((user) => user !== userInfo.id));

            const { downvotes: newDownvotes } = await downVoteDecrease(
                post.id,
                userInfo.id
            );
            setDownvotes(newDownvotes);
        } else {
            // Downvote

            let wasUpvoted = false;

            // Check if this is upvoted
            if (upvotes.includes(userInfo.id)) {
                // "Fake" real-time update
                wasUpvoted = true;
                setUpvotes(upvotes.filter((user) => user !== userInfo.id));
                setUpvoted(false);
            }

            // "Fake" real-time update
            setDownvoted(true);
            setUpvoted(false);
            setDownvotes([...downvotes, userInfo.id]);

            // Actual update
            const { downvotes: newDownvotes } = await downVoteIncrease(
                post.id,
                userInfo.id
            );
            setDownvotes(newDownvotes);

            if (wasUpvoted) {
                const { upvotes: newUpvotes } = await upVoteDecrease(
                    post.id,
                    userInfo.id
                );
                setUpvotes(newUpvotes);
            }
        }
    };

    const commentDoneHandler = (comment) => {
        setComments([comment, ...comments]);
        // setShowCommentBox(false)
    };

    const showCommentBoxHandler = () => {
        setShowCommentBox((prev) => !prev);
    };

    const deleteThisPost = async () => {
        const { data } = await deletePost({
            variables: {
                input: {
                    id,
                },
            },
        });
    };

    return (
        <Styled.PostContainer>
            {post && user && !!upvotes && !!downvotes && (
                <div>
                    <Styled.PostHeaderInfo>
                        <Styled.ProfileBioContainer>
                            <Styled.PostImageContainer src={user.pfp} />
                            <Styled.PostByInfo>
                                {' '}
                                Posted by
                                <Styled.PostByName>
                                    {user.name}
                                </Styled.PostByName>
                                <Styled.PostByUsername>
                                    <Styled.UserLink
                                        to={`/profile/${user.username}`}
                                    >
                                        @{user.username}
                                    </Styled.UserLink>
                                </Styled.PostByUsername>
                            </Styled.PostByInfo>
                        </Styled.ProfileBioContainer>
                        <Styled.PostTime>
                            {formatDistance(
                                new Date(post.createdAt),
                                new Date(),
                                { addSuffix: true }
                            )}
                            {loggedIn && userInfo.id === post.userID && (
                                <MdDelete
                                    color='#db3b45'
                                    size={20}
                                    style={{
                                        paddingLeft: '10px',
                                        cursor: 'pointer',
                                    }}
                                    onClick={deleteThisPost}
                                />
                            )}
                        </Styled.PostTime>
                    </Styled.PostHeaderInfo>
                    <Styled.MessageContainer>
                        {post.content}
                    </Styled.MessageContainer>
                    <Styled.ActivityContainer>
                        <BsArrowUpCircle
                            color={upvoted && '#45e850'}
                            onClick={loggedIn && upVoteHandler}
                            size={20}
                            style={{ marginRight: 10, cursor: 'pointer' }}
                        />
                        <Styled.VoteContainer>
                            {upvotes.length - downvotes.length || 'Vote'}
                        </Styled.VoteContainer>
                        <BsArrowDownCircle
                            color={downvoted && '#e84576'}
                            onClick={loggedIn && downVoteHandler}
                            size={20}
                            style={{
                                marginLeft: 10,
                                marginRight: 25,
                                cursor: 'pointer',
                            }}
                        />
                        <Styled.ActivityTextContainer>
                            <span
                                onClick={showCommentBoxHandler}
                                style={{ cursor: 'pointer' }}
                            >
                                {' '}
                                {comments.length} Comment
                                {comments.length === 1 ? '' : 's'}
                            </span>
                        </Styled.ActivityTextContainer>
                        {/*
                        <Styled.ActivityTextContainer>
                            Share
                        </Styled.ActivityTextContainer>
                        <Styled.ActivityTextContainer>
                            Save
                        </Styled.ActivityTextContainer>
                        */}
                    </Styled.ActivityContainer>
                    {showCommentBox && (
                        <>
                            {loggedIn && userInfo.init && (
                                <MakeComment
                                    commentDone={commentDoneHandler}
                                    postID={id}
                                    daoID={post.daoID}
                                    loggedInUserID={userInfo.id}
                                />
                            )}

                            {comments &&
                                comments.lenght !== 0 &&
                                comments.map((comment) => (
                                    <CommentCard comment={comment} />
                                ))}
                        </>
                    )}
                </div>
            )}
        </Styled.PostContainer>
    );
};

export default PostCard;
