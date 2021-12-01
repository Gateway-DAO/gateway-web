import * as Styled from './style'
import { doc, onSnapshot } from 'firebase/firestore'
import { db } from '../../api/firebase'
import CTA_BG from '../../assets/Gateway.svg'
import { useEffect, useState } from 'react'
import {
    getUserById,
    upVoteDecrease,
    upVoteIncrease,
    downVoteDecrease,
    downVoteIncrease,
} from '../BigCard/components/Feed/Handlers/Handlers'
import UP_VOTES from '../../assets/icons/UpVotes.svg'
import DOWN_VOTES from '../../assets/icons/DownVotes.svg'

const PostCard = (props) => {
    const loggedInUser = 'testUser-2'
    const [post, setPosts] = useState(null)
    const [user, setUser] = useState(null)
    const id = props.id
    useEffect(() => {
        const postSnapshot = onSnapshot(doc(db, 'posts', id), (doc) => {
            const postData = doc.data()
            if (postData) {
                const getUser = async () => {
                    const user = await getUserById(postData.userID)
                    setUser({ name: user.name, username: user.username })
                }
                getUser()
                setPosts(postData)
            }
        })
        return postSnapshot
    }, [id])

    useEffect(() => {}, [])

    // const [upvote, setUpvote] = useState(props.upvotes)
    // const [downvote, setDownvote] = useState(props.downvotes)
    const [upvoteColor, setUpvoteColor] = useState(null)
    const [downvoteColor, setDownvoteColor] = useState(null)
    // const date = props.createdAt.toDate()
    // const { postID } = props

    // useEffect(()=>{
    //      if (upvote.includes(loggedInUser)) {
    //          setUpvoteColor('#45e850')
    //      }else{
    //          setUpvoteColor(null)
    //      }
    //      if (downvote.includes(loggedInUser)) {
    //          setUpvoteColor('#e84576')
    //      } else {
    //          setUpvoteColor(null)
    //      }
    // },[])

    let options = {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
    }

    const upVoteHandler = () => {
        // if (upvote.includes(loggedInUser)) {
        //     upVoteDecrease(postID, loggedInUser)
        //     setUpvote((prev) => prev.filter((e) => e !== loggedInUser))
        //     setUpvoteColor(null)
        // } else {
        //     upVoteIncrease(postID, loggedInUser)
        //     setUpvote((prev) => [loggedInUser, ...prev])
        //     setUpvoteColor('#45e850')
        // }
    }
    const downVoteHandler = () => {
        // if (downvote.includes(loggedInUser)) {
        //     downVoteDecrease(postID, loggedInUser)
        //     setDownvote((prev) => prev.filter((e) => e !== loggedInUser))
        //     setDownvoteColor(null)
        // } else {
        //     downVoteIncrease(postID, loggedInUser)
        //     setDownvote((prev) => [loggedInUser, ...prev])
        //     setDownvoteColor('#e84576')
        // }
    }

    return (
        <Styled.PostContainer>
            {post && user && (
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
                    <Styled.ImageContainer>
                        {/* <img
                    style={{ width: '100%', objectFit: 'cover' }}
                    src={props.image}
                    alt={"Can't load"}
                /> */}
                    </Styled.ImageContainer>

                    <Styled.ActivityContainer>
                        <Styled.ActivityFirstContainer
                            inputColor={upvoteColor}
                            onClick={upVoteHandler}
                        >
                            <img src={UP_VOTES} alt="upvotes" />
                        </Styled.ActivityFirstContainer>
                        <Styled.VoteContainer>
                            {/* {upvote.length - downvote.length} */}
                            00
                        </Styled.VoteContainer>
                        <Styled.ActivitySecondContainer
                            inputColor={downvoteColor}
                            onClick={downVoteHandler}
                        >
                            <img src={DOWN_VOTES} alt="downvotes" />
                        </Styled.ActivitySecondContainer>
                        <Styled.ActivityTextContainer>
                            4 Comments
                        </Styled.ActivityTextContainer>
                        <Styled.ActivityTextContainer>
                            Share
                        </Styled.ActivityTextContainer>
                        <Styled.ActivityTextContainer>
                            Save
                        </Styled.ActivityTextContainer>
                    </Styled.ActivityContainer>
                </div>
            )}
        </Styled.PostContainer>
    )
}

export default PostCard
