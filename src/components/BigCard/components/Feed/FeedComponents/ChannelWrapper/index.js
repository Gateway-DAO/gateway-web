import PostCard from '../PostCard';
import * as Styled from './style';

const ChannelWrapper = ({ posts }) => {
    return (
        <Styled.FeedMessageContainer>
            {posts !== 0 &&
                posts.map((post) => (
                    <PostCard key={`post-${post.id}`} post={post} />
                ))}
            {/* ids.length === 0 && <p>Empty</p> */}
        </Styled.FeedMessageContainer>
    );
};

export default ChannelWrapper;
