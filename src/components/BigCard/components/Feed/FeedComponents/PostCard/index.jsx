import * as Styled from './style'
import { useEffect, useState } from 'react'
import {
    upVoteDecrease,
    upVoteIncrease,
    downVoteDecrease,
    downVoteIncrease,
} from '../Handlers'
import MakeComment from '../MakeComment'
import CommentCard from '../CommentCard'
import { BsArrowDownCircle, BsArrowUpCircle } from 'react-icons/bs'
import { MdDelete } from 'react-icons/md'

import { useAuth } from '../../../../../../contexts/UserContext'
import { useDeletePost } from '../../../../../../api/database/useDeletePost'

const PostCard = (props) => {
    let options = {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
    }
    const { loggedIn, userInfo } = useAuth()
    
    const post = props.post
    const user = props.post.user

    const [showCommentBox, setShowCommentBox] = useState(false)
    const id = props.post.id

    const [upvote, setUpvote] = useState(props.post.upvotes || [])
    const [downvote, setDownvote] = useState(props.post.downvotes || [])

    // Colors
    const [upvoteColor, setUpvoteColor] = useState(null)
    const [downvoteColor, setDownvoteColor] = useState(null)

    // Hooks
    const { deletePost, data, loading } = useDeletePost()

    useEffect(() => {
        /*
        const postSnapshot = onSnapshot(doc(db, 'posts', id), (doc) => {
            const postData = doc.data()
            if (postData) {
                const getUser = async () => {
                    const user = await getUserById(postData.userID)
                    setUser({
                        name: user.name,
                        username: user.username,
                        pfp: user.pfp,
                    })
                }
                getUser()
                setUpvote(postData.upvotes)
                setDownvote(postData.downvotes)
                setPosts(postData)
                if (loggedIn) {
                    if (postData.upvotes.includes(userInfo.uid)) {
                        setUpvoteColor('#45e850')
                        setDownvoteColor(null)
                    }
                    if (postData.downvotes.includes(userInfo.uid)) {
                        setDownvoteColor('#e84576')
                        setUpvoteColor(null)
                    }
                }
            }
        })
        return postSnapshot
        */
       
        setUpvote(post.upvotes)
        setDownvote(post.downvotes)

        if (loggedIn) {
            if (upvote.includes(userInfo.id)) {
                setUpvoteColor('#45e850')
                setDownvoteColor(null)
            }
            if (downvote.includes(userInfo.id)) {
                setDownvoteColor('#e84576')
                setUpvoteColor(null)
            }
        }
    }, [id, loggedIn])

    const upVoteHandler = async () => {
        if (upvote.includes(userInfo.id)) {
            const { upvotes } = await upVoteDecrease(post.id, userInfo.id)
            setUpvote(upvotes)
            setUpvoteColor(null)
            setDownvoteColor(null)
        } else {
            const { upvotes } = await upVoteIncrease(post.id, userInfo.id)
            setUpvote(upvotes)
            setUpvoteColor('#45e850')
            setDownvoteColor(null)
        }
    }

    const downVoteHandler = async () => {
        if (downvote.includes(userInfo.id)) {
            const { downvotes } = await downVoteDecrease(post.id, userInfo.id)
            setDownvote(downvotes)
            setDownvoteColor(null)
            setUpvoteColor(null)
        } else {
            const { downvotes } = await downVoteIncrease(post.id, userInfo.id)
            setDownvote(downvotes)
            setDownvoteColor('#e84576')
            setUpvoteColor(null)
        }
    }

    const commentDoneHandler = () => {
        setShowCommentBox(false)
    }

    const showCommentBoxHandler = () => {
        setShowCommentBox((prev) => !prev)
    }

    const deleteThisPost = async () => {
        const { data } = await deletePost({
            variables: {
                input: {
                    id
                }
            }
        })
    }

    return (
        <Styled.PostContainer>
            {post && user && upvote && downvote && (
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
                                    @{user.username}
                                </Styled.PostByUsername>
                            </Styled.PostByInfo>
                        </Styled.ProfileBioContainer>
                        <Styled.PostTime>
                            {new Date(post.createdAt).toLocaleTimeString('en-us', options)}
                            {loggedIn && userInfo.id === post.userID && (
                                <MdDelete
                                    color="#db3b45"
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
                            color={upvoteColor}
                            onClick={upVoteHandler}
                            size={20}
                            style={{ marginRight: 10 }}
                        />
                        <Styled.VoteContainer>
                            {upvote.length - downvote.length || 'Vote'}
                        </Styled.VoteContainer>
                        <BsArrowDownCircle
                            color={downvoteColor}
                            onClick={downVoteHandler}
                            size={20}
                            style={{ marginLeft: 10, marginRight: 25 }}
                        />
                        <Styled.ActivityTextContainer>
                            <span
                                onClick={showCommentBoxHandler}
                                style={{ cursor: 'pointer' }}
                            >
                                {' '}
                                {post.comments.items.length} Comment
                                {post.comments.length === 1 ? '' : 's'}
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
                            {loggedIn && (
                                <MakeComment
                                    commentDone={commentDoneHandler}
                                    postID={id}
                                    daoID={post.daoID}
                                    loggedInUserID={userInfo.uid}
                                />
                            )}

                            {post.comments &&
                                post.comments.items.lenght !== 0 &&
                                post.comments.items.map((comment) => (
                                    <CommentCard comment={comment} />
                                ))}
                        </>
                    )}
                </div>
            )}
        </Styled.PostContainer>
    )
}

export default PostCard
