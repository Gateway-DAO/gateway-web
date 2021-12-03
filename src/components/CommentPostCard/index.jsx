import * as Styled from './style'
import CTA_BG from '../../assets/Gateway.svg'
import { BsEmojiSmile } from 'react-icons/bs'
import { FiImage } from 'react-icons/fi'
import Picker from 'emoji-picker-react'
import { useState, useRef } from 'react'

const CommentPostCard = () => {
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
    return (
        <Styled.PostContainer>
            <Styled.PostHeaderInfo>
                <Styled.ProfileBioContainer>
                    <Styled.PostImageContainer src={CTA_BG} />
                    <Styled.PostByInfo>
                        {' '}
                        Comment as
                        <Styled.PostByName>Jess Fly</Styled.PostByName>
                        <Styled.PostByUsername>@Kzux0x</Styled.PostByUsername>
                    </Styled.PostByInfo>
                </Styled.ProfileBioContainer>
            </Styled.PostHeaderInfo>
            <Styled.MessageContainer>
                <Styled.InputComment
                    onChange={(e) => setCommentMessage(e.target.value)}
                    value={commentMessage}
                    placeholder="What's Your thoughts ?"
                    rows={3}
                    ref={ref}
                />
            </Styled.MessageContainer>
            <Styled.ActivityBox>
                <Styled.ActivityContainer>
                    <Styled.ActivityTextContainer>
                        <BsEmojiSmile
                            onClick={(event) => setEmojiBox(!showEmojiBox)}
                        />
                        {showEmojiBox ? (
                            <Picker onEmojiClick={onEmojiClick} />
                        ) : null}
                    </Styled.ActivityTextContainer>
                    <Styled.ActivityTextContainer>
                        <FiImage />
                    </Styled.ActivityTextContainer>
                </Styled.ActivityContainer>
                <Styled.PostButton>POST</Styled.PostButton>
            </Styled.ActivityBox>
        </Styled.PostContainer>
    )
}

export default CommentPostCard
