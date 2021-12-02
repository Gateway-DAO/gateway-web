import * as Styled from './style'
import { useEffect } from 'react'
import CTA_BG from '../../../../../../assets/Gateway.svg'
import HappyEmoji from '../../../../../../assets/icons/HappyEmoji.svg'
import PictureIcon from '../../../../../../assets/icons/PictureIcon.svg'
import AttachIcon from '../../../../../../assets/icons/AttachIcon.svg'
import Picker from 'emoji-picker-react'
import { useState, useRef } from 'react'
import { Form, Formik } from 'formik'
import {
    sendPostDataAndSetId,
    getUserById,
    imageUploadHandler,
} from '../../Handlers/Handlers'
import * as Yup from 'yup'
import { v4 as uuidv4 } from 'uuid'

const AddPost = (props) => {
    const loggedInUserID = props.loggedInUserID
    // for comment images
    const filePickerRef = useRef()
    const [picture, setPicture] = useState(null)
    const [imgData, setImgData] = useState(null)
    const [commentImage, setCommentImage] = useState(false)
    const [user, setUser] = useState({ name: '', username: '' })
    // for comment messages
    const [commentMessage, setCommentMessage] = useState('')
    const [showEmojiBox, setEmojiBox] = useState(false)

    useEffect(() => {
        const getUser = async () => {
            const user = await getUserById(loggedInUserID)
            setUser({ name: user.name, username: user.username })
        }
        getUser()
    }, [loggedInUserID])

    const dataSubmitHandler = async (values, { setSubmitting, resetForm }) => {
        const { v4: uuidv4 } = require('uuid')
        const newID = uuidv4()

        const data = {
            userID: loggedInUserID,
            origin: `${props.cardName}-${props.channel}`,
            title: 'Title here',
            content: {
                data: commentMessage,
                image1: values.image
                    ? await imageUploadHandler(newID, values.image, 0.1)
                    : 'https://res.cloudinary.com/grohealth/image/upload/$wpsize_!_cld_full!,w_800,h_400,c_scale/v1620316360/greenspace.jpg',
            },
            comments: [],
            upvotes: [],
            downvotes: [],
            createdAt: new Date(),
        }

        try {
            sendPostDataAndSetId(data, newID, props.cardName, props.channel)
        } catch {
            console.log('posting failed')
        }
        resetForm()
        setCommentImage(false)
        setCommentMessage('')
        setImgData(null)
        props.posted()
    }

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
                        <Styled.PostByName>{user.name} -</Styled.PostByName>
                        <Styled.PostByUsername>
                            @{user.username}
                        </Styled.PostByUsername>
                    </Styled.PostByInfo>
                </Styled.ProfileBioContainer>
            </Styled.PostHeaderInfo>

            <Formik
                initialValues={{
                    title: '',
                    content: '',
                    image: null,
                }}
                validationSchema={Yup.object({
                    content: Yup.string().min(
                        1,
                        'Must be atleast 4 characters'
                    ),
                })}
                onSubmit={dataSubmitHandler}
            >
                {({ setFieldValue, ...props }) => (
                    <Form>
                        <Styled.MessageContainer>
                            <Styled.InputComment
                                onChange={(e) =>
                                    setCommentMessage(e.target.value)
                                }
                                onClick={(e) => setEmojiBox(false)}
                                value={commentMessage}
                                placeholder="What's Your thoughts ?"
                                rows={3}
                                ref={ref}
                                name="content"
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
                                        onClick={(event) =>
                                            setEmojiBox(!showEmojiBox)
                                        }
                                    />
                                    {showEmojiBox ? (
                                        <Styled.EmojiContainer>
                                            <Picker
                                                onEmojiClick={onEmojiClick}
                                            />
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
                                        name="image"
                                        onInput={(file) =>
                                            file &&
                                            setFieldValue('image', file[0])
                                        }
                                    />
                                    <img
                                        src={PictureIcon}
                                        type="file"
                                        alt="Upload"
                                        onClick={pickImageHandler}
                                    />
                                </Styled.ActivityTextContainer>
                                <Styled.ActivityTextContainer>
                                    <img
                                        src={AttachIcon}
                                        alt="Attach document"
                                    />
                                </Styled.ActivityTextContainer>
                            </Styled.ActivityContainer>
                            <Styled.PostButton type="submit">
                                POST
                            </Styled.PostButton>
                        </Styled.ActivityBox>
                    </Form>
                )}
            </Formik>
        </Styled.PostContainer>
    )
}

export default AddPost
