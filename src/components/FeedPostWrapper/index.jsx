import * as Styled from './style'
import UserPostCard from '../UserPost'
import PostCard from '../PostCard'
import CommentPostCard from '../CommentPostCard'

const FeedPostWrapper = (props) => {
    return (
        <Styled.FeedPostContainer>
            <p>{props.id}</p>
            <UserPostCard />
            <PostCard />
            <PostCard />
            <CommentPostCard />
        </Styled.FeedPostContainer>
    )
}

export default FeedPostWrapper
