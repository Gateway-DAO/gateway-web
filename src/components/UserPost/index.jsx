import * as Styled from './style'
import CTA_BG from '../../assets/Gateway.svg'
import HappyEmoji from '../../assets/icons/HappyEmoji.svg'
import PictureIcon from '../../assets/icons/PictureIcon.svg'
import AttachIcon from '../../assets/icons/AttachIcon.svg'
import Picker from 'emoji-picker-react'
import { useState, useRef } from 'react'

const UserPostCard = () => {
    // for comment images
    const filePickerRef = useRef()
    const [picture, setPicture] = useState(null)
    const [imgData, setImgData] = useState(null)
    const [commentImage, setCommentImage] = useState(false)

    const onChangePicture = (e) => {
        if (e.target.files[0]) {
            setPicture(e.target.files[0])
            const reader = new FileReader()
            reader.addEventListener('load', () => {
                setImgData(reader.result)
                setCommentImage(!commentImage)
            })

            reader.readAsDataURL(e.target.files[0])
        }
    }

    const pickImageHandler = () => {
        filePickerRef.current.click()
    }

    // for comment messages
    const [commentMessage, setCommentMessage] = useState('')
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
                        <Styled.PostByName>Jess Fly -</Styled.PostByName>
                        <Styled.PostByUsername>@Kzux0x</Styled.PostByUsername>
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
            {commentImage ? (
                <Styled.CommentImageContainer>
                    <Styled.CommentImage src={imgData} alt="" />
                </Styled.CommentImageContainer>
            ) : null}
            <Styled.ActivityBox>
                <Styled.ActivityContainer>
                    <Styled.ActivityEmojiContainer>
                        <img
                            src={HappyEmoji}
                            alt="Happy Emoji"
                            onClick={(event) => setEmojiBox(!showEmojiBox)}
                        />
                        {showEmojiBox ? (
                            <Styled.EmojiContainer>
                                <Picker onEmojiClick={onEmojiClick} />
                            </Styled.EmojiContainer>
                        ) : null}
                    </Styled.ActivityEmojiContainer>
                    <Styled.ActivityTextContainer>
                        <input
                            style={{ display: 'none' }}
                            ref={filePickerRef}
                            type="file"
                            accept=".jpg,.png,.jpeg"
                            onChange={onChangePicture}
                        />
                        <img
                            src={PictureIcon}
                            type="file"
                            alt="Upload"
                            onClick={pickImageHandler}
                        />
                    </Styled.ActivityTextContainer>
                    <Styled.ActivityTextContainer>
                        <img src={AttachIcon} alt="Attach document" />
                    </Styled.ActivityTextContainer>
                </Styled.ActivityContainer>
                <Styled.PostButton>POST</Styled.PostButton>
            </Styled.ActivityBox>
        </Styled.PostContainer>
    )
}

export default UserPostCard
