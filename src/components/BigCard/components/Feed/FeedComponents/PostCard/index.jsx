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
const PostCard = (props) => {
    let options = {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
    }
    const loggedInUser = props.loggedInUserID
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
                    setUser({ name: user.name, username: user.username })
                }
                getUser()
                setUpvote(postData.upvotes)
                setDownvote(postData.downvotes)
                setPosts(postData)
                if (postData.upvotes.includes(loggedInUser)) {
                    setUpvoteColor('#45e850')
                    setDownvoteColor(null)
                }
                if (postData.downvotes.includes(loggedInUser)) {
                    setDownvoteColor('#e84576')
                    setUpvoteColor(null)
                }
            }
        })
        return postSnapshot
    }, [id, loggedInUser])

    const upVoteHandler = () => {
        if (upvote.includes(loggedInUser)) {
            upVoteDecrease(props.id, loggedInUser)
            setUpvoteColor(null)
            setDownvoteColor(null)
        } else {
            upVoteIncrease(props.id, loggedInUser)
            setUpvoteColor('#45e850')
            setDownvoteColor(null)
        }
    }
    const downVoteHandler = () => {
        if (downvote.includes(loggedInUser)) {
            downVoteDecrease(props.id, loggedInUser)
            setDownvoteColor(null)
            setUpvoteColor(null)
        } else {
            downVoteIncrease(props.id, loggedInUser)
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
                            <Styled.PostImageContainer src={CTA_BG} />
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
                        <Styled.ActivityFirstContainer
                            inputColor={upvoteColor}
                            onClick={upVoteHandler}
                        >
                            <img src={UP_VOTES} alt="upvotes" />
                        </Styled.ActivityFirstContainer>
                        <Styled.VoteContainer>
                            {upvote.length - downvote.length}
                        </Styled.VoteContainer>
                        <Styled.ActivitySecondContainer
                            inputColor={downvoteColor}
                            onClick={downVoteHandler}
                        >
                            <img src={DOWN_VOTES} alt="downvotes" />
                        </Styled.ActivitySecondContainer>

                        <Styled.ActivityTextContainer>
                            <span
                                onClick={showCommentBoxHandler}
                                style={{ cursor: 'pointer' }}
                            >
                                {' '}
                                Comments
                            </span>
                        </Styled.ActivityTextContainer>
                        <Styled.ActivityTextContainer>
                            Share
                        </Styled.ActivityTextContainer>
                        <Styled.ActivityTextContainer>
                            Save
                        </Styled.ActivityTextContainer>
                    </Styled.ActivityContainer>
                    {showCommentBox && (
                        <MakeComment
                            commentDone={commentDoneHandler}
                            postID={id}
                            name={user.name}
                            username={user.username}
                            loggedInUserID={loggedInUser}
                        />
                    )}
                    {post.comments &&
                        post.comments.lenght !== 0 &&
                        post.comments.map((comment) => (
                            <CommentCard comment={comment} />
                        ))}
                </div>
            )}
        </Styled.PostContainer>
    )
}

export default PostCard
