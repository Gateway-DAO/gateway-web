import * as Styled from './style'
import BG_IMG from './img/LOGO.png'

const UserCard = () => {
    return (
        <Styled.UserCardBox url={BG_IMG}>
            <Styled.UserInfo>
                <Styled.Name>MasterStark</Styled.Name>
                <Styled.UserName>@Masterstark</Styled.UserName>
            </Styled.UserInfo>
        </Styled.UserCardBox>
    )
}

export default UserCard
