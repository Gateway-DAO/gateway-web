import * as Styled from './style'
import CTA_BG from '../../../../../../assets/Gateway.svg'
import { BsEmojiSmile } from 'react-icons/bs'
import { FiImage } from 'react-icons/fi'
import Picker from 'emoji-picker-react'
import { useState, useRef } from 'react'
import { commentPost } from '../Handlers'
import { v4 as uuidv4 } from 'uuid'
import { useAuth } from '../../../../../../contexts/UserContext'
import { useEffect } from 'react'

const MakeComment = (props) => {
    const { loggedIn, userInfo } = useAuth()
    const [commentMessage, setCommentMessage] = useState('')
    const [commentImage, setCommentImage] = useState('')

    const [chosenEmoji, setChosenEmoji] = useState(null)
    const [showEmojiBox, setEmojiBox] = useState(false)

    const [user, setUser] = useState(null);

    const ref = useRef(null)
    const onEmojiClick = (event, emojiObject) => {
        const cursor = ref.current.selectionStart
        const text =
            commentMessage.slice(0, cursor) +
            emojiObject.emoji +
            commentMessage.slice(cursor)
        setCommentMessage(text)
    }

    const commentPostHandler = async () => {
        props.commentDone()
        const { v4: uuidv4 } = require('uuid')
        const newID = uuidv4()
        const commentContent = {
            uniqueId: newID,
            text: commentMessage,
            userID: userInfo.uid,
            createdAt: new Date(),
        }
        await commentPost(commentContent, props.postID)
    }

    return loggedIn ? (
        <Styled.PostContainer>
            <Styled.PostHeaderInfo>
                <Styled.ProfileBioContainer>
                    <Styled.PostImageContainer src={userInfo.pfp} />
                    <Styled.PostByInfo>
                        {' '}
                        Comment as
                        <Styled.PostByName>{userInfo.name}</Styled.PostByName>
                        <Styled.PostByUsername>
                            @{userInfo.username}
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
                <Styled.PostButton onClick={commentPostHandler}>
                    POST
                </Styled.PostButton>
            </Styled.ActivityBox>
        </Styled.PostContainer>
    ) : null
}

export default MakeComment
