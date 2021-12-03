import * as Styled from './style'
import CTA_BG from '../../assets/Gateway.svg';

const PostCard = () => {
    return (
        <Styled.PostContainer>
            <Styled.PostHeaderInfo>
                <Styled.ProfileBioContainer>
                    <Styled.PostImageContainer src= {CTA_BG}/>
                    <Styled.PostByInfo>
                        {' '}
                        posted by<Styled.PostByName>Jess Fly</Styled.PostByName><Styled.PostByUsername>@Kzux0x</Styled.PostByUsername>
                    </Styled.PostByInfo>
                </Styled.ProfileBioContainer>
                <Styled.PostTime>12 min ago</Styled.PostTime>
            </Styled.PostHeaderInfo>
            <Styled.MessageContainer>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. In
                iste quae quod aliquid rerum nesciunt esse suscipit corrupti,
                eveniet nisi ab mollitia exercitationem fuga nam doloremque
                molestias commodi reiciendis inventore.
            </Styled.MessageContainer>
            <Styled.ActivityContainer>
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
