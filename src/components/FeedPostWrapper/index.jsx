import * as Styled from './style'
import { useParams } from 'react-router'
import { useEffect } from 'react'
import UserPostCard from '../UserPostCard'
import PostCard from '../PostCard'
import CommentPostCard from '../CommentPostCard'
import { fetchPostsByCard } from '../BigCard/components/Feed/Handlers/Handlers'

const FeedPostWrapper = (props) => {
   
    return (
        <Styled.FeedPostContainer>
            <UserPostCard
                cardName={props.cardName}
                channel={props.channel}
                posted={props.posted}
            />

            {props.currentFeeds.lenght !== 0 &&
                props.currentFeeds.map((feed) => (
                    <PostCard
                        postID={feed.id}
                        content={feed.content.data}
                        image={feed.content.image1}
                        createdAt={feed.createdAt}
                        upvotes={feed.upvotes}
                        downvotes={feed.downvotes}
                        userID={feed.userID}
                        name={feed.name}
                        username={feed.username}
                    />
                ))}
            {/* <PostCard
                content="This is a Sample Card"
                image="https://res.cloudinary.com/grohealth/image/upload/$wpsize_!_cld_full!,w_800,h_400,c_scale/v1620316360/greenspace.jpg"
                createdAt="29 Nov 2021"
                upvote=""
                downvote=""
            /> */}
            <CommentPostCard />
        </Styled.FeedPostContainer>
    )
}

export default FeedPostWrapper
