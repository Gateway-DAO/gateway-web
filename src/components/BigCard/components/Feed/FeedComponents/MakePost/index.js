import * as Styled from './style';
import { BsEmojiSmile } from 'react-icons/bs';
import Picker from 'emoji-picker-react';
import { useState, useEffect, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useAuth } from '../../../../../../contexts/UserContext';
import useCreatePost from '../../../../../../api/database/useCreatePost';

const MakePost = (props) => {
    const { loggedIn, userInfo } = useAuth();
    const [commentMessage, setCommentMessage] = useState('');
    const [commentImage, setCommentImage] = useState('');
    const [user, setUser] = useState({ name: '', username: '' });
    const [showEmojiBox, setEmojiBox] = useState(false);
    const { createPost, data, error, loading } = useCreatePost();

    useEffect(() => {
        setUser(loggedIn ? userInfo : null);
    }, [loggedIn]);

    const ref = useRef(null);
    const onEmojiClick = (event, emojiObject) => {
        const cursor = ref.current.selectionStart;
        const text =
            commentMessage.slice(0, cursor) +
            emojiObject.emoji +
            commentMessage.slice(cursor);
        setCommentMessage(text);
    };

    const submitPost = async () => {
        const data = {
            id: uuidv4(),
            userID: userInfo.id,
            daoID: props.daoID,
            channelID: props.channel.id,
            content: commentMessage,
            upvotes: [userInfo.id],
            downvotes: [],
            createdAt: new Date().toISOString(),
        };
        try {
            await createPost({
                variables: {
                    input: data,
                },
            });

            console.log('Deu');

            setCommentMessage('');
        } catch (err) {
            console.log(`Post failed: ${err}`);
        }
    };

    return loggedIn && user?.init ? (
        <Styled.PostContainer>
            <Styled.PostHeaderInfo>
                <Styled.ProfileBioContainer>
                    <Styled.PostImageContainer src={user.pfp} />
                    <Styled.PostByInfo>
                        {' '}
                        Post as
                        <Styled.PostByName>{user.name}</Styled.PostByName>
                        <Styled.PostByUsername>
                            <Styled.UserLink to='/profile/'>
                                @{user.username}
                            </Styled.UserLink>
                        </Styled.PostByUsername>
                    </Styled.PostByInfo>
                </Styled.ProfileBioContainer>
            </Styled.PostHeaderInfo>
            <Styled.InputMessage
                onChange={(e) => setCommentMessage(e.target.value)}
                onClick={(e) => setEmojiBox(false)}
                value={commentMessage}
                placeholder='What are your thoughts?'
                rows={3}
                ref={ref}
            />
            <Styled.ActivityBox>
                <Styled.ActivityContainer>
                    <Styled.ActivityEmojiContainer>
                        <BsEmojiSmile
                            onClick={(event) => setEmojiBox(!showEmojiBox)}
                        />
                        {showEmojiBox ? (
                            <Styled.EmojiContainer>
                                <Picker onEmojiClick={onEmojiClick} />
                            </Styled.EmojiContainer>
                        ) : null}
                    </Styled.ActivityEmojiContainer>
                    {/* <Styled.ActivityTextContainer>
                        <FiImage />
                    </Styled.ActivityTextContainer> */}
                </Styled.ActivityContainer>
                <Styled.PostButton onClick={submitPost}>POST</Styled.PostButton>
            </Styled.ActivityBox>
        </Styled.PostContainer>
    ) : null;
};

export default MakePost;
