import PostCard from '../PostCard'
import MakePost from '../MakePost'
import * as Styled from './style'
import { useState, useEffect } from 'react'
import { useAuth } from '../../../../../../contexts/UserContext'

const ChannelWrapper = ({ posts }) => {
    return (
        <Styled.FeedMessageContainer>
            {posts !== 0 && posts.map((post) => <PostCard key={`post-${post.id}`} post={post} />)}
            {/* ids.length === 0 && <p>Empty</p> */}
        </Styled.FeedMessageContainer>
    )
}

export default ChannelWrapper
