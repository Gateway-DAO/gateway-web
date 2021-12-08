import * as Styled from './style'
import CTA_BG from '../../../../../../assets/Gateway.svg'
import { doc, onSnapshot } from 'firebase/firestore'
import { db } from '../../../../../../api/firebase'
import { useEffect, useState } from 'react'
import {
    getUserById,
    upVoteDecrease,
    upVoteIncrease,
    downVoteDecrease,
    downVoteIncrease,
} from '../Handlers'
// import MakeComment from '../MakeComment'
import UP_VOTES from '../../../../../../assets/icons/UpVotes.svg'
import DOWN_VOTES from '../../../../../../assets/icons/DownVotes.svg'
import MakeComment from '../MakeComment'
import CommentCard from '../CommentCard'
import { BsArrowDownCircle, BsArrowUpCircle } from 'react-icons/bs'

import { useAuth } from '../../../../../../contexts/UserContext'

const PostCard = (props) => {
    let options = {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
    }
    const { loggedIn, userInfo } = useAuth()
    const [post, setPosts] = useState(null)
    const [user, setUser] = useState(null)
    const [showCommentBox, setShowCommentBox] = useState(false)
    const id = props.id
    const [upvote, setUpvote] = useState(props.upvotes ? [] : [])
    const [downvote, setDownvote] = useState(props.downvotes ? [] : [])
    //colours
    const [upvoteColor, setUpvoteColor] = useState(null)
    const [downvoteColor, setDownvoteColor] = useState(null)

    useEffect(() => {
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
                if (postData.upvotes.includes(userInfo.uid)) {
                    setUpvoteColor('#45e850')
                    setDownvoteColor(null)
                }
                if (postData.downvotes.includes(userInfo.uid)) {
                    setDownvoteColor('#e84576')
                    setUpvoteColor(null)
                }
            }
        })
        return postSnapshot
    }, [id, loggedIn])

    const upVoteHandler = () => {
        if (upvote.includes(userInfo.uid)) {
            upVoteDecrease(props.id, userInfo.uid)
            setUpvoteColor(null)
            setDownvoteColor(null)
        } else {
            upVoteIncrease(props.id, userInfo.uid)
            setUpvoteColor('#45e850')
            setDownvoteColor(null)
        }
    }

    const downVoteHandler = () => {
        if (downvote.includes(userInfo.uid)) {
            downVoteDecrease(props.id, userInfo.uid)
            setDownvoteColor(null)
            setUpvoteColor(null)
        } else {
            downVoteIncrease(props.id, userInfo.uid)
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

    return (
        <Styled.PostContainer>
            {post && user && upvote && downvote && (
                <div>
                    <Styled.PostHeaderInfo>
                        <Styled.ProfileBioContainer>
                            <Styled.PostImageContainer src={user.pfp} />
                            <Styled.PostByInfo>
                                {' '}
                                posted by
                                <Styled.PostByName>
                                    {user.name}
                                </Styled.PostByName>
                                <Styled.PostByUsername>
                                    @{user.username}
                                </Styled.PostByUsername>
                            </Styled.PostByInfo>
                        </Styled.ProfileBioContainer>
                        <Styled.PostTime>
                            {post.createdAt
                                .toDate()
                                .toLocaleTimeString('en-us', options)}
                        </Styled.PostTime>
                    </Styled.PostHeaderInfo>
                    <Styled.MessageContainer>
                        {post.content.data}
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
                                {post.comments.length} Comment
                                {!!post.comments.length || 's'}
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
                            <MakeComment
                                commentDone={commentDoneHandler}
                                postID={id}
                                loggedInUserID={userInfo.uid}
                            />
                            {post.comments &&
                                post.comments.lenght !== 0 &&
                                post.comments.map((comment) => (
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
