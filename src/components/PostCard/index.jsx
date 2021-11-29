import * as Styled from './style'
import CTA_BG from '../../assets/Gateway.svg'
import { useState } from 'react'
import { getUserById } from '../BigCard/components/Feed/Handlers/Handlers'
import UP_VOTES from '../../assets/icons/UpVotes.svg'
import DOWN_VOTES from '../../assets/icons/DownVotes.svg'
const PostCard = (props) => {
    const [user, setUser] = useState({ name: '...', userName: '...' })
    const getUser = async () => {
        const user = await getUserById(props.userID)
        const userDetails = { name: user.name, username: user.username }
        setUser(userDetails)
    }
    getUser()

    const upVoteHandler =()=>{}
    const downVoteHandler =()=>{}

    const time = '29 Nov 2021'
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
                <Styled.PostTime>{time}</Styled.PostTime>
            </Styled.PostHeaderInfo>
            <Styled.MessageContainer>{props.content}</Styled.MessageContainer>
            <Styled.ImageContainer>
                <img
                    style={{ width: '100%', objectFit: 'cover' }}
                    src={props.image}
                    alt={"Can't load"}
                />
            </Styled.ImageContainer>

            <Styled.ActivityContainer>
                <Styled.ActivityFirstContainer onClick={upVoteHandler}>
                    <img src={UP_VOTES} alt="upvotes" />
                </Styled.ActivityFirstContainer>
                <Styled.VoteContainer>00</Styled.VoteContainer>
                <Styled.ActivitySecondContainer onClick={downVoteHandler}>
                    <img src={DOWN_VOTES} alt="downvotes" />
                </Styled.ActivitySecondContainer>
                <Styled.ActivityTextContainer>
                    4 Comments
                </Styled.ActivityTextContainer>
                <Styled.ActivityTextContainer>
                    Share
                </Styled.ActivityTextContainer>
                <Styled.ActivityTextContainer>
                    Save
                </Styled.ActivityTextContainer>
            </Styled.ActivityContainer>
        </Styled.PostContainer>
    )
}

export default PostCard
