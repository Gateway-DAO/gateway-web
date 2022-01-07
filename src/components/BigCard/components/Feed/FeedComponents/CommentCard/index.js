import * as Styled from './style'
import { useState, useEffect } from 'react'
import CTA_BG from '../../../../../../assets/Gateway.svg'

const CommentCard = (props) => {
    let options = {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
    }

    const user = props.comment.user
    
    return (
        <Styled.PostContainer>
            <div>
                <Styled.PostHeaderInfo>
                    <Styled.ProfileBioContainer>
                        <Styled.PostImageContainer src={user.pfp} />
                        <Styled.PostByInfo>
                            {' '}
                            Commented by
                            <Styled.PostByName>{user.name}</Styled.PostByName>
                            <Styled.PostByUsername>
                                <Styled.UserLink to={`/profile/${user.username}`}>@{user.username}</Styled.UserLink>
                            </Styled.PostByUsername>
                        </Styled.PostByInfo>
                    </Styled.ProfileBioContainer>
                    <Styled.PostTime>
                        {new Date(props.comment.createdAt)
                            .toLocaleTimeString('en-us', options)}
                    </Styled.PostTime>
                </Styled.PostHeaderInfo>
                <Styled.MessageContainer>
                    {props.comment.content}
                </Styled.MessageContainer>
            </div>
        </Styled.PostContainer>
    )
}

export default CommentCard
