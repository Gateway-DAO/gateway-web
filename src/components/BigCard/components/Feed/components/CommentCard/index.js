import * as Styled from './style'
import React,{useState,useEffect} from 'react'
import CTA_BG from '../../../../../../assets/Gateway.svg'
import { getUserById } from '../../Handlers/Handlers'

const CommentCard = (props) => {
    const [user, setUser] = useState({ name: '...', username: '...' })
    const userID = props.comment.userID
    useEffect(() => {
        const getUser = async () => {
            const user = await getUserById(userID)
            setUser({ name: user.name, username: user.username })
        }
        getUser()
    }, [userID])

    let options = {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
    }

    return (
        <Styled.PostContainer>
            <Styled.PostHeaderInfo>
                <Styled.ProfileBioContainer>
                    <Styled.PostImageContainer src={CTA_BG} />
                    <Styled.PostByInfo>
                        {' '}
                        posted by
                        <Styled.PostByName>{user.name}</Styled.PostByName>
                        <Styled.PostByUsername>
                            @{user.username}
                        </Styled.PostByUsername>
                    </Styled.PostByInfo>
                </Styled.ProfileBioContainer>
                <Styled.PostTime>
                    {props.comment.createdAt
                        .toDate()
                        .toLocaleTimeString('en-us', options)}
                </Styled.PostTime>
            </Styled.PostHeaderInfo>
            <Styled.MessageContainer>
                {props.comment.text}
            </Styled.MessageContainer>
        </Styled.PostContainer>
    )
}

export default CommentCard;
