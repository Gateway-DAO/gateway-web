import * as Styled from './style'
import CTA_BG from '../../assets/Gateway.svg'
import { BsEmojiSmile } from 'react-icons/bs'
import { FiImage } from 'react-icons/fi'
import Picker from 'emoji-picker-react'
import { useState,useEffect, useRef } from 'react'
import {
    getUserById,
    commentPost,
} from '../../Handlers/Handlers'
import { v4 as uuidv4 } from 'uuid'

const AddComment = (props) => {
    const [commentMessage, setCommentMessage] = useState('')
    const [showEmojiBox, setEmojiBox] = useState(false)
    const [user,setUser]=useState({name:"...",username:"..."})
    const loggedInUserID = props.loggedInUserID
    useEffect(() => {
        const getUser = async () => {
            const user = await getUserById(loggedInUserID)
            setUser({ name: user.name, username: user.username })
        }
        getUser()
    }, [loggedInUserID])
    const commentPostHandler=async ()=>{
        props.commentDone()
        const { v4: uuidv4 } = require('uuid')
        const newID = uuidv4()
        const commentContent = {
            uniqueId:newID,
            text: commentMessage,
            userID: loggedInUserID,
            createdAt:new Date()
        }
        await commentPost(commentContent, props.postID)
        
    }

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
                        <Styled.PostByName>{user.name}</Styled.PostByName>
                        <Styled.PostByUsername>@{user.username}</Styled.PostByUsername>
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
                <Styled.PostButton  onClick ={commentPostHandler} >POST</Styled.PostButton>
            </Styled.ActivityBox>
        </Styled.PostContainer>
    )
}

export default AddComment
