import PostCard from '../PostCard'
import MakePost from '../MakePost'
import * as Styled from './style'
import { useState, useEffect } from 'react'
import { sortPostsByVote } from '../Handlers'

const ChannelWrapper = (props) => {
    const [posts, setPosts] = useState(props.channel.posts.items)

    //Sort by votes
    useEffect(() => {
        console.log("New channel")

        // Sort by votes
        if (props.channel.posts.length !== 0) {
            const newSortedIdByVotes = async () => {
                const newPosts = await sortPostsByVote(props.channel.posts.items)
                setPosts(newPosts)
            }
            newSortedIdByVotes()
        }
    }, [props.channel])

    return (
        <Styled.FeedMessageContainer>
            <MakePost
                daoID={props.daoID}
                channel={props.channel}
            />
            {posts !== 0 &&
                posts.map(post => (
                    <PostCard post={post} />
                ))}
            {/* ids.length === 0 && <p>Empty</p> */}
        </Styled.FeedMessageContainer>
    )
}

export default ChannelWrapper
