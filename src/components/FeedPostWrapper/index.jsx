import * as Styled from './style'
import {useEffect,useState} from "react"
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
                        content={feed.content.data}
                        image={feed.content.image1}
                        createdAt={feed.createdAt}
                        upvote={feed.upvote}
                        downvote={feed.downvote}
                        userID={feed.userID}
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
