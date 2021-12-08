import * as Styled from './style'
import CTA_BG from '../../../../../../assets/Gateway.svg'
import { BsEmojiSmile } from 'react-icons/bs'
import { FiImage } from 'react-icons/fi'
import Picker from 'emoji-picker-react'
import { useState, useEffect, useRef } from 'react'
import {
    sendPostDataAndSetId,
    getUserById,
    imageUploadHandler,
} from '../Handlers'
import { v4 as uuidv4 } from 'uuid'
import { useAuth } from '../../../../../../contexts/UserContext'

const MakePost = (props) => {
    const { loggedIn, userInfo } = useAuth();

    const [commentMessage, setCommentMessage] = useState('')
    const [commentImage, setCommentImage] = useState('')
    const [user, setUser] = useState({ name: '', username: '' })

    const [chosenEmoji, setChosenEmoji] = useState(null)
    const [showEmojiBox, setEmojiBox] = useState(false)
    useEffect(() => {
        setUser(loggedIn ? userInfo : null);
    }, [loggedIn])

    const ref = useRef(null)
    const onEmojiClick = (event, emojiObject) => {
        const cursor = ref.current.selectionStart
        const text =
            commentMessage.slice(0, cursor) +
            emojiObject.emoji +
            commentMessage.slice(cursor)
        setCommentMessage(text)
    }

    const MakePostHandler = async () => {
        const { v4: uuidv4 } = require('uuid')
        const newID = uuidv4()

        const data = {
            userID: userInfo.uid,
            origin: `${props.cardName}-${props.channel}`,
            title: 'Title here',
            content: {
                data: commentMessage,
                //      image1: commentImage
                //          ? await imageUploadHandler(newID, commentImage, 0.1)
                //          : 'https://res.cloudinary.com/grohealth/image/upload/$wpsize_!_cld_full!,w_800,h_400,c_scale/v1620316360/greenspace.jpg',
            },
            comments: [],
            upvotes: [],
            downvotes: [],
            createdAt: new Date(),
        }
        try {
            sendPostDataAndSetId(data, newID, props.cardName, props.channel)
            setCommentMessage('')
        } catch {
            console.log('posting failed')
        }
        console.log('makePost', data)
    }

    return loggedIn && user.init ? (
        <Styled.PostContainer>
            <Styled.PostHeaderInfo>
                <Styled.ProfileBioContainer>
                    <Styled.PostImageContainer src={user.pfp} />
                    <Styled.PostByInfo>
                        {' '}
                        Post as
                        <Styled.PostByName>{user.name}</Styled.PostByName>
                        <Styled.PostByUsername>
                            @{user.username}
                        </Styled.PostByUsername>
                    </Styled.PostByInfo>
                </Styled.ProfileBioContainer>
            </Styled.PostHeaderInfo>
            <Styled.InputMessage
                onChange={(e) => setCommentMessage(e.target.value)}
                onClick={(e) => setEmojiBox(false)}
                value={commentMessage}
                placeholder="What are your thoughts?"
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
                    <Styled.ActivityTextContainer>
                        <FiImage />
                    </Styled.ActivityTextContainer>
                </Styled.ActivityContainer>
                <Styled.PostButton onClick={MakePostHandler}>
                    POST
                </Styled.PostButton>
            </Styled.ActivityBox>
        </Styled.PostContainer>
    ) : null;
}

export default MakePost
