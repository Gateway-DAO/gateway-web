import * as Styled from './style'
import CTA_BG from '../../../../../../assets/Gateway.svg'
import { BsEmojiSmile } from 'react-icons/bs'
import { FiImage } from 'react-icons/fi'
import Picker from 'emoji-picker-react'
import { useState, useRef } from 'react'
import { commentPost } from '../Handlers'
import { v4 as uuidv4 } from 'uuid'

const MakeComment = (props) => {
    const loggedInUserID = props.loggedInUserID
    const [commentMessage, setCommentMessage] = useState('')
    const [commentImage, setCommentImage] = useState('')

    const [chosenEmoji, setChosenEmoji] = useState(null)
    const [showEmojiBox, setEmojiBox] = useState(false)

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
            userID: loggedInUserID,
            createdAt: new Date(),
        }
        await commentPost(commentContent, props.postID)
    }

    return (
        <Styled.PostContainer>
            <Styled.PostHeaderInfo>
                <Styled.ProfileBioContainer>
                    <Styled.PostImageContainer src={CTA_BG} />
                    <Styled.PostByInfo>
                        {' '}
                        Comment as
                        <Styled.PostByName>{props.name}</Styled.PostByName>
                        <Styled.PostByUsername>
                            @{props.username}
                        </Styled.PostByUsername>
                    </Styled.PostByInfo>
                </Styled.ProfileBioContainer>
            </Styled.PostHeaderInfo>
            <Styled.MessageContainer>
                <Styled.InputComment
                    onChange={(e) => setCommentMessage(e.target.value)}
                    onClick={(e) => setEmojiBox(false)}
                    value={commentMessage}
                    placeholder="What's Your thoughts ?"
                    rows={3}
                    ref={ref}
                />
            </Styled.MessageContainer>
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
    )
}

export default MakeComment
