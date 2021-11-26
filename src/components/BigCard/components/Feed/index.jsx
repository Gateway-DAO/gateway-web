import * as Styled from './style'
import PostCard from '../../../PostCard'
import CommentPostCard from '../../../CommentPostCard'
import FeedLogic from './FeedLogic'

const Feed = () => {
    const Channels = ['General🌐', 'Events🎈', 'NFTs🖼️ ', 'Web3🚀', 'DeFi💰']

    return (
        <Styled.FeedContainer>
            <Styled.ChannelContainer>
                <Styled.H4Text>CHANNELS</Styled.H4Text>
                {Channels.map((name) => (
                    <Styled.H5Text>#{name}</Styled.H5Text>
                ))}
            </Styled.ChannelContainer>
            <Styled.FeedMessageContainer>
                <FeedLogic />

                <PostCard />
                <CommentPostCard />
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
            </Styled.FeedMessageContainer>
        </Styled.FeedContainer>
    )
}

export default Feed
